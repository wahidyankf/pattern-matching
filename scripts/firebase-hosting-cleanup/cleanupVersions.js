const requireAuth = require('firebase-tools/lib/requireAuth');
const api = require('firebase-tools/lib/api');

const DELETE_DELAY = 200;
const PAGE_SIZE = 100;
const isDryRun = process.argv[4] !== 'commit';

if (!process.argv[2] || !process.argv[3]) {
  console.error(`
ERROR: Must supply a site name and number of versions to keep. Usage:

  node cleanupVersions.js <site_name> <versions_to_keep> [commit]`);
  process.exit(1);
}

const site = process.argv[2];
const toKeep = parseInt(process.argv[3]);

if (toKeep < 2) {
  console.error('ERROR: Must keep at least 2 versions.');
  process.exit(1);
}

function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

function deleteVersions(versionNames) {
  if (!versionNames.length) {
    return Promise.resolve();
  }

  const toDelete = versionNames.pop();
  if (isDryRun) {
    console.log('[DRY RUN] DELETED version', toDelete);
    return deleteVersions(versionNames);
  }

  return api
    .request('DELETE', '/v1beta1/' + toDelete, {
      auth: true,
      origin: api.hostingApiOrigin,
    })
    .then(() => {
      console.log('DELETED version', toDelete);
      return wait(DELETE_DELAY).then(() => {
        return deleteVersions(versionNames);
      });
    })
    .catch(err => {
      console.error(
        `ERROR: Unable to delete version ${toDelete}:`,
        err.message
      );
    });
}

requireAuth({}, ['https://www.googleapis.com/auth/cloud-platform'])
  .then(() => {
    function getAllReleases(releases, token) {
      var releases = releases || [];
      return api
        .request(
          'GET',
          `/v1beta1/sites/${site}/releases?pageSize=${PAGE_SIZE}&pageToken=${token ||
            ''}`,
          {
            auth: true,
            origin: api.hostingApiOrigin,
          }
        )
        .then(result => {
          releases = releases.concat(result.body.releases);
          if (
            result.body.releases.length >= PAGE_SIZE &&
            result.body.nextPageToken
          ) {
            return getAllReleases(releases, result.body.nextPageToken);
          }

          return releases;
        });
    }

    let uniqueVersionsFound = 0;
    const versionMap = {};
    const versionsToKeep = [];
    const versionsToDelete = [];
    return getAllReleases().then(releases => {
      console.log('Total Releases:', releases.length);
      if (releases.length <= toKeep) {
        console.log('Already under', toKeep, 'version limit. Nothing to do.');
        process.exit(0);
      }

      releases.forEach(release => {
        if (!release.version || release.version.status === 'DELETED') {
          return;
        }
        const vname = release.version.name;
        if (!versionMap[vname]) {
          versionMap[vname] = true;
          if (versionsToKeep.length >= toKeep) {
            versionsToDelete.push(vname);
          } else {
            versionsToKeep.push(vname);
          }
        }
      });

      console.log(
        'Unique Versions:',
        versionsToKeep.length + versionsToDelete.length
      );
      console.log('Versions to Delete:', versionsToDelete.length);
      console.log();

      return deleteVersions(versionsToDelete);
    });
  })
  .catch(err => {
    console.error('ERROR:', err.message);
    process.exit(1);
  });
