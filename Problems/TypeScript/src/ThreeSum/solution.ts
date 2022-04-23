export function threeSum(nums: number[]): number[][] {
  let output = [];

  if (nums.length < 3) {
    return output;
  }

  // We are creating a new sorted list to avoid side-effects
  const sortedNums = sortNumArray(nums);

  // Since we are looking for triplets without duplicate indices, we don't need to go past length -2
  for (let tripletOne = 0; tripletOne < sortedNums.length - 2; tripletOne++) {
    // Seeing as the list is sorted,
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

export function findEveryTriplet(
  nums: number[],
  tripletOne: number,
  results: []
): void {
  let tripletTwo = 0;
  let tripletThree = nums.length - 1;

  while (tripletTwo < tripletThree) {
    const sum = nums[tripletTwo] + nums[tripletThree] + nums[tripletOne];
    if (sum === 0) {
      results.push(sum);
    }
  }
}
