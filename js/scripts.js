
//biz logic
var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

//ui
console.log("I am loading.")
$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    debugger;
    var year = parseInt($("input#year").val());
    var answer = leapYear(year);
    $("#result").text(answer).show();
  });
});
