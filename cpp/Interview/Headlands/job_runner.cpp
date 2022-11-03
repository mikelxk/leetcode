#include <algorithm>
#include <cmath>
#include <fstream>
#include <iomanip>
#include <iostream>
#include <sstream>
#include <vector>
using namespace std;

struct job {
    long long job_id;
    long long runtime;
    long long next_id;
};
struct jobChain : public vector<job> {
    long long sum = 0;
};
void malFormed()
{
    cout << "Malformed Input\n";
    exit(0);
}
void sortJobList(vector<jobChain> &jobLists)
{
    sort(jobLists.begin(), jobLists.end(), [](jobChain a, jobChain b) {
        return a.sum > b.sum;
    });
}
string getHMS(long long sec)
{
    long hour = sec / 3600;
    long min = (sec % 3600) / 60;
    long seconds = (sec % 3600) % 60;
    string hourStr = to_string(hour);
    int hourDigit = max(int(hourStr.size()), 2);
    stringstream ss;
    ss << std::setfill('0') << std::setw(hourDigit) << hour;
    ss << ":" << std::setfill('0') << std::setw(2) << min;
    ss << ":" << std::setfill('0') << std::setw(2) << seconds;
    return ss.str();
}
void printInfo(vector<jobChain> &jc)
{
    if (jc.size() == 0) {
        return;
    }
    cout << "-\n";
    for (auto &&c : jc) {
        long long average = c.sum / c.size();
        cout << "start_job: " << c.back().job_id << '\n'
             << "last_job: " << c[0].job_id << '\n'
             << "number_of_jobs: " << c.size() << '\n'
             << "job_chain_runtime: " << getHMS(c.sum) << '\n'
             << "average_job_time: " << getHMS(average) << '\n'
             << "-\n";
    }
}
vector<jobChain> buildList(vector<job> &jobs)
{
    // construct from end
    vector<jobChain> jobLists;
    for (auto &&j : jobs) {
        if (j.next_id == 0) {
            jobChain chain;
            chain.push_back({j});
            chain.sum = j.runtime;
            jobLists.push_back(chain);
        }
    }
    // no ending
    if (jobLists.size() == 0 && jobs.size() != 0) {
        malFormed();
    }
    
    for (auto &&list : jobLists) {
        auto topId = list[0].job_id;
        while (true) {
            if (count_if(jobs.begin(), jobs.end(), [&topId](job j) { return j.next_id == topId; }) > 1) {
                malFormed();
            }
            auto it = find_if(jobs.begin(), jobs.end(), [&topId](job j) { return j.next_id == topId; });
            if (it != jobs.end()) {
                list.push_back(*it);
                list.sum += it->runtime;
                topId = it->job_id;
            }
            else {
                break;
            }
        }
    }
    sortJobList(jobLists);
    return jobLists;
}
// test whether header contain only 3 column
void testHeader(vector<string> &header)
{
    auto testInclude = [&header](string column) {
        return find(header.begin(), header.end(), column) != header.end();
    };
    if (header.size() != 3) {
        malFormed();
    }
    if (!(testInclude("job_id") && testInclude("runtime_in_seconds") && testInclude("next_job_id"))) {
        malFormed();
    }
}
int main()
{
    string line;
    getline(cin, line, '\n');
    string tmp;
    vector<string> header;
    if (line.find(',') == string::npos || line[0] != '#') {
        malFormed();
    }
    // remove #
    stringstream ss(line.substr(1));
    while (getline(ss, tmp, ',')) {
        header.push_back(tmp);
    }
    vector<job> jobs;
    testHeader(header);
    int jobIdIdx = 0;
    int runtimeIdx = 1;
    int nextIdIdx = 2;

    for (int i = 0; i < 3; ++i) {
        if (header[i] == "job_id") {
            jobIdIdx = i;
        }
        else if (header[i] == "runtime_in_seconds") {
            runtimeIdx = i;
        }
        else if (header[i] == "next_job_id") {
            nextIdIdx = i;
        }
        else {
            malFormed();
        }
    }
    while (getline(cin, line)) {
        stringstream s(line);
        string word;
        vector<string> row;
        while (getline(s, word, ',')) {
            row.push_back(word);
        }
        if (row.size() == 3) {
            try {
                job newJob;
                newJob.job_id = stoll(row[jobIdIdx]);
                newJob.runtime = stoll(row[runtimeIdx]);
                newJob.next_id = stoll(row[nextIdIdx]);
                jobs.push_back(newJob);
            }
            catch (const std::exception &e) {
                malFormed();
            }
        }
        else {
            malFormed();
        }
    }
    auto jc = buildList(jobs);
    printInfo(jc);
}