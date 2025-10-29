function dayOfTheWeek(num) {
    var DayOfTheWeek;
    (function (DayOfTheWeek) {
        DayOfTheWeek[DayOfTheWeek["Monday"] = 1] = "Monday";
        DayOfTheWeek[DayOfTheWeek["Tuesday"] = 2] = "Tuesday";
        DayOfTheWeek[DayOfTheWeek["Wednesday"] = 3] = "Wednesday";
        DayOfTheWeek[DayOfTheWeek["Thursday"] = 4] = "Thursday";
        DayOfTheWeek[DayOfTheWeek["Friday"] = 5] = "Friday";
        DayOfTheWeek[DayOfTheWeek["Saturday"] = 6] = "Saturday";
        DayOfTheWeek[DayOfTheWeek["Sunday"] = 7] = "Sunday";
    })(DayOfTheWeek || (DayOfTheWeek = {}));
    console.log(DayOfTheWeek)
    console.log(DayOfTheWeek[num] || "error");
}
dayOfTheWeek(1);
dayOfTheWeek(5);
dayOfTheWeek(-1);
