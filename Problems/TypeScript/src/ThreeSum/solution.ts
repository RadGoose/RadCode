export function threeSum(nums: number[]): number[][] {
  let output = [];

  if (nums.length < 3) {
    return output;
  }

  // We are creating a new sorted list to avoid side-effects
  const sortedNums = sortNumArray(nums);

  // Since we are looking for triplets without duplicate indices, we don't need to go past length -2
  for (let tripletOne = 0; tripletOne < sortedNums.length - 2; tripletOne++) {
    // Seeing as the list is sorted, we have no need to check the rest of the array
    if (sortedNums[tripletOne] > 0) {
      break;
    }

    // If we've already seen the number, we skip
    if (tripletOne > 0 && nums[tripletOne] === nums[tripletOne - 1]) {
      continue;
    }
  }

  return output;
}

export function sortNumArray(nums: number[]): number[] {
  return nums.sort((a, b) => a - b);
}
