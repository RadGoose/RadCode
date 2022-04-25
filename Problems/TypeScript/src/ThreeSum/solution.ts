export function threeSum(nums: number[]): number[][] {
  let output = [];
  if (nums.length < 3) return output;
  const sortedNums = nums.sort((a, b) => a - b);

  for (let tripletOne = 0; tripletOne < sortedNums.length - 2; tripletOne++) {
    if (sortedNums[tripletOne] > 0) {
      break;
    }
    if (
      tripletOne > 0 &&
      sortedNums[tripletOne] === sortedNums[tripletOne - 1]
    ) {
      continue;
    }
    twoSumForTriplets(nums.slice(tripletOne), output);
  }
  return output;
}

export function twoSumForTriplets(nums: number[], results: number[][]) {
  let left = 1;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[0] + nums[left] + nums[right];

    if (sum === 0) {
      results.push([nums[0], nums[left], nums[right]]);
      while (nums[left] === nums[left + 1]) left++;
      while (nums[right] === nums[right - 1]) right--;
      left++;
      right--;
    } else if (sum < 0) {
      left++;
    } else if (sum > 0) {
      right--;
    }
  }
  return;
}
