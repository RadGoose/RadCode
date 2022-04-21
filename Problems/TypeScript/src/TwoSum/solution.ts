export function twoSum(nums: number[], target: number): number[] {
  const map = {};

  for (let idx = 0; idx < nums.length; idx++) {
    const diff = target - nums[idx];

    if (diff in map) {
      return [map[diff], idx];
    }

    map[nums[idx]] = idx;
  }

  return null;
}
