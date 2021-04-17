import React, { useEffect, useState } from 'react';
import {
  getMonthLength,
  getDayNameByDate,
  getDayIndexByName,
  getMonthBoardArray,
} from '../utils/datesCalc';
import './CalendarModal.css';
import MonthBoard from './MonthBoard';

const CalendarModal = (): JSX.Element => {
  const [monthBoardArray, setMonthBoardArray] = useState([[0]]);
  const [dateToUse, setDateToUse] = useState(new Date());

  const skipMonth = (isNext: boolean) => {
    const currDate = new Date(dateToUse);
    if (isNext) {
      currDate.setMonth(currDate.getMonth() + 1);
    } else {
      currDate.setMonth(currDate.getMonth() - 1);
    }
    setDateToUse(currDate);
    return isNext;
  };

  useEffect(() => {
    console.log(dateToUse);
    const monthLength = getMonthLength(dateToUse);
    console.log(monthLength);
    const firstDayName = getDayNameByDate(dateToUse);
    console.log(firstDayName);
    const firstDayIndex = getDayIndexByName(firstDayName);
    setMonthBoardArray(getMonthBoardArray(monthLength, firstDayIndex));
  }, [dateToUse]);

  console.log(monthBoardArray);

  return (
    <div className="calendar-modal-div">
      <MonthBoard monthBoardArray={monthBoardArray} skipMonth={skipMonth} />
    </div>
  );
};

export default CalendarModal;
