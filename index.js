/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
// Your code here
const createEmployeeRecord = ([firstName, familyName, title, payPerHour]) => {
    return {
      firstName: firstName,
      familyName: familyName,
      title: title,
      payPerHour: payPerHour,
      timeInEvents: [],
      timeOutEvents: [],
    };
  };
  const createEmployeeRecords = (array) => {
    return array.map((item) => createEmployeeRecord(item));
  };
  
const createTimeInEvent = function (dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date,
    });
    return this;
};
  const createTimeOutEvent = function(dateStamp){
    const [date, hour] = dateStamp.split(" ");
    this.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date: date,
    });
    return this;
  };
  const hoursWorkedOnDate = function(dateStamp){
    const timeInEvents = this.timeInEvents.find(
      (item) => item.date === dateStamp
    );
    const timeOutEvents = this.timeOutEvents.find(
      (item) => item.date === dateStamp
    );
    return (timeOutEvents.hour - timeInEvents.hour) / 100;
  };
  const wagesEarnedOnDate = function(dateStamp){
    return (
      this.payPerHour * hoursWorkedOnDate.call(this,dateStamp)
    );
  };


  
const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

const findEmployeeByFirstName = (srcArray, firstName) => {
  return srcArray.find((item) => item.firstName===firstName)
}
  const calculatePayroll = (employeeRecords) => {
    return employeeRecords.reduce((total, item) => total + allWagesFor.call(item), 0);
  };
 