export function twoSum(nums: number[], target: number): number[] {
  const map = {};

  for (let idx = 0; idx < nums.length; idx++) {
    const dif = target - nums[idx];

    if (dif in map) {
      return [map[dif], idx];
    }

    map[nums[idx]] = idx;
  }

  return null;
}
