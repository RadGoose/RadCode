export function lengthOfLongestSubstring(s: string): number {
  const chars = [];
  let longest = 0;

  for (let i = 0; i < s.length; i++) {
    const possibleIndex = chars.indexOf(s[i]);

    if (possibleIndex !== -1) {
      chars.splice(0, possibleIndex + 1);
    }

    chars.push(s[i]);
    longest = Math.max(longest, chars.length);
  }

  return longest;
}
