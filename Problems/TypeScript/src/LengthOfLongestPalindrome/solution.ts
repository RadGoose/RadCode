export function longestPalindrome(s: string): string {
  if (isPalindrome(s)) return s;
  if (s.length < 3) return s[0];

  let longest = "";

  for (let i = 0; i < s.length - 1; i++) {
    let odd = expandPalindromeByIndices(s, i, i);
    let even = expandPalindromeByIndices(s, i, i + 1);
    if (odd.length > longest.length) longest = odd;
    if (even.length > longest.length) longest = even;
  }
  return longest;
}

export function isPalindrome(s: string): boolean {
  return s === s.split("").reverse().join("");
}

export function expandPalindromeByIndices(
  s: string,
  left: number,
  right: number
) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left -= 1;
    right += 1;
  }
  return s.slice(left + 1, right);
}
