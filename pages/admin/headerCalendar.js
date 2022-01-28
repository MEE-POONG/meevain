import React from 'react';

export default function CalendarHeader({value,setValue}) {
    function currentMonthName() {
        return value.format("MMMM");
      }
      function currentYear() {
        return value.format("YYYY");
      }
      function prevMonth() {
        return value.clone().subtract(1, "month");
      }
      function nextMonth() {
        return value.clone().add(1, "month");
      }
      function thisMonth(){
          return value.isSame(new Date(), "month")
      }
  return (
    <div className="  bg-red-600  text-white  grid grid-cols-3 ">
    <span
      className="text-left pl-4 "
      onClick={() => !thisMonth() &&setValue(prevMonth())}
    >
      {!thisMonth() ? String.fromCharCode(171) : null}
    </span>
    <span className="text-center">
      {currentMonthName()} {currentYear()}
    </span>
    <span
      className="text-right pr-4 "
      onClick={() => setValue(nextMonth())}
    >
      {String.fromCharCode(187)}
    </span>
  </div>
  )
}
