#include "../std.hpp"
class Solution {
public:
    vector<int> twoSum(vector<int> &nums, int target)
    {
        unordered_map<int, int> indice;
        for (int i = 0; i < nums.size(); i++) {
            int complement = target - nums[i];
            if (indice.find(complement) != indice.end()) {
                return {indice[complement], i};
            }
            else {
                indice.insert({nums[i], i});
            }
        }
        return {};
    }
};
int main(){
    
}