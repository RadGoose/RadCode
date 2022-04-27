export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);

  let len1 = nums1.length;
  let len2 = nums2.length;

  let low = 0;
  let high = len1;
  let medianPos = Math.floor((len1 + len2 + 1) / 2);

  while (low <= high) {
    let partition1 = Math.floor((low + high) / 2);
    let partition2 = medianPos - partition1;

    let l1 = partition1 == 0 ? -Infinity : nums1[partition1 - 1];
    let l2 = partition2 == 0 ? -Infinity : nums2[partition2 - 1];
    let r1 = partition1 == len1 ? Infinity : nums1[partition1];
    let r2 = partition2 == len2 ? Infinity : nums2[partition2];

    if (l1 <= r2 && l2 <= r1) {
      if ((len1 + len2) % 2 !== 0) {
        return Math.max(l1, l2);
      } else {
        return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
      }
    } else if (l2 > r1) {
      low = partition1 + 1;
    } else {
      high = partition1 - 1;
    }
  }
  return 0;
}
