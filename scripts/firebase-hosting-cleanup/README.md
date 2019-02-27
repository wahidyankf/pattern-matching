# Firebase Hosting Version Cleanup

This is a simple utility script for cleaning up Firebase Hosting versions, leaving a specified number of versions remaining.
This is primarily done to conserve storage usage, but may have other uses.

**USE AT YOUR OWN RISK. NO WARRANTY IS PROVIDED. THIS SCRIPT DOES DELETE STUFF PERMANENTLY**

## Usage

    node cleanupVersions.js <site_name> <versions_to_keep> [commit]

The script will delete all except the specified number of versions to keep. It does so by marking the *most recently released*
versions. This means that if I recently rolled back to a version that was created a very long time ago, that version will be
kept before a version that I created more recently but didn't release recently.

## Installation / Example

To use this script, **you must have a signed-in installation of [the Firebase CLI](https://github.com/firebase/firebase-tools)**. 

    git clone https://gist.github.com/5be2e807746cdd9549d0c33260871d21.git firebase-hosting-cleanup-script
    cd firebase-hosting-cleanup-script
    npm install
    
    # perform a dry run, make sure you're not doing something you'll regret
    node cleanupVersions.js my-site-here 50
    # do the deletion for real
    node cleanupVersions.js my-site-here 50 commit