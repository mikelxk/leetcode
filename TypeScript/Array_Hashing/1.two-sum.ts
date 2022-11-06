function twoSum(nums: number[], target: number): number[] {
    const m = {};
    for (let i = 0; i < nums.length; ++i) {
        const compliment = target - nums[i];
        if (compliment in m) {
            return [m[compliment], i];
        }
        else {
            m[nums[i]] = i;
        }
    }
    return []
};
console.log(twoSum([3, 2, 4], 6));