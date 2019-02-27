function palindrome(str) {
  return (
    str ===
    Array.from(str)
      .reverse()
      .join('')
  );
}
