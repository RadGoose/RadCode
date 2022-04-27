export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  return getMedianOfArray(nums1.concat(nums2).sort((a, b) => a - b));
}

export function getMedianOfArray(nums: number[]): number {
  const mid: number = Math.floor(nums.length / 2);

  if (nums.length % 2 == 0) {
    return (nums[mid - 1] + nums[mid]) / 2;
  } else {
    return nums[mid];
  }
}
