#include <filesystem>
#include <fstream>
#include <iostream>
#include <ranges>
#include <sstream>
#include <vector>
using namespace std;
struct job {
    int job_id;
    int runtime;
    int next_id;
};

void printJobInfo(vector<job> &jobs)
{
    // construct from end
    vector<vector<job>> jobList;
    for (auto &&j : jobs) {
        if (j.next_id == 0) {
            jobList.push_back({j});
        }
    }

    cout << ":?\n";
}
int main()
{
    ifstream csv("Interview/Headlands/test.csv");
    string line;
    // read header
    cout << csv.is_open();
    getline(csv, line);
    vector<job> jobs;
    while (getline(csv, line)) {
        stringstream s(line);
        string word;
        vector<string> row;
        while (getline(s, word, ',')) {
            row.push_back(word);
        }
        if (row.size() == 3) {
            job newJob;
            newJob.job_id = stoi(row[0]);
            newJob.runtime = stoi(row[1]);
            newJob.next_id = stoi(row[2]);
            jobs.push_back(newJob);
        }
        else {
            cout << "Malformed\n";
            return 1;
        }
        cout << word;
    }
    printJobInfo(jobs);
    cout << "test";
}