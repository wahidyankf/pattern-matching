## Array Chunking

Dberikan sebuah `array` dan ukuran chunk (`size`), bagilah `array` tersebut ke dalam sub-array, di mana tiap sub-array memiliki panjang sebesar `size`. Contoh:

- `chunk([1, 2, 3, 4], 2)` -> `[[ 1, 2], [3, 4]]`

- `chunk([1, 2, 3, 4, 5], 2)` -> `[[ 1, 2], [3, 4], [5]]`

- `chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)` -> `[[ 1, 2, 3], [4, 5, 6], [7, 8]]`

- `chunk([1, 2, 3, 4, 5], 4)` -> `[[ 1, 2, 3, 4], [5]]`

- `chunk([1, 2, 3, 4, 5], 10)` -> `[[ 1, 2, 3, 4, 5]]`

## Solusi

:::: tabs

::: tab "Info"

Klik salah satu nama bahasa pemrograman di atas untuk melihat solusi.

:::

::: tab "JavaScript"

### 1. `for-of`

<<< @/codes/js/puzzles/2-star/array-chunking/arrayChunking1.js

### 2. Metoda `slice`

<<< @/codes/js/puzzles/2-star/array-chunking/arrayChunking2.js

### 3. Tanpa mutasi (_immutable style_)

<<< @/codes/js/puzzles/2-star/array-chunking/arrayChunking3.js

:::

::::
