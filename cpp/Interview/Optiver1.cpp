int DaysInMonth(int month, int year);
// Do not edit above this line. It is only shown so you can see the function signature.
/*
 * Complete the function below.
 */
int DaysBetween(int year1, int month1, int day1, int year2, int month2, int day2)
{
    int res = 0;
    // same month
    if (year1 == year2 && month1 == month2) {
        return day2 - day1;
    }
    //go to next month
    res += DaysInMonth(month1, year1) - day1;
    int m = month1 + 1;
    for (int i = year1; i <= year2; ++i) {
        for (; m <= 12; ++m) {
            if (i == year2 && m == month2) {
                break;
            }
            res += DaysInMonth(m, i);
            if (m == 12) {
                m = 1;
                break;
            }
        }
    }
    res += day2;
    return res;
}
int main()
{
    DaysBetween(2020, 1, 1, 2021, 1, 1);
}
int DaysInMonth(int month, int year)
{
    return 30;
}