## Anagram

Tulislah sebuah fungsi untuk mengecek apakah sebuah `string` anagram dari `string` lainnya. Sebuah `string` adalah anagram dari `string` lainnya jika kedua `string` tersebut memakai jumlah jenis string yang sama dengan kuantitas yang sama. Jangan pedulikan kapitalisasi dan tanda baca untuk anagram. Contoh:

- `anagrams('rail safety', 'fairy tales')` -> `true`

- `anagrams('RAIL! SAFETY!', 'fairy tales')` -> `true`

- `anagrams('Hi there', 'Bye there')` -> `false`

## Solusi

:::: tabs

::: tab "Info"

Klik salah satu nama bahasa pemrograman di atas untuk melihat solusi.

:::

::: tab "JavaScript"

### 1. `for-loop` klasik

<<< @/codes/js/puzzles/3-star/anagram/anagram1.js

### 2. `Array.sort()`

<<< @/codes/js/puzzles/3-star/anagram/anagram2.js

:::

::::
