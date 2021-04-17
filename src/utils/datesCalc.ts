import moment from 'moment';
import { daysMap } from './daysMap';

const WEEK_LENGTH = 7;

export const getMonthLength = (date: Date): number => {
  const year = moment(date).format('YYYY');
  const month = moment(date).format('MM');
  const numOfDays = moment(`${year}-${month}`, 'YYYY-MM').daysInMonth();
  return numOfDays;
};

export const getDayNameByDate = (date: Date): string => {
  const dt = moment(
    new Date(date.getFullYear(), date.getMonth(), 1),
    'YYYY-MM-DD HH:mm:ss',
  );
  const dayName = dt.format('dddd');
  return dayName;
};

export const getDayIndexByName = (dayName: string): number => {
  return daysMap[dayName];
};

export const getMonthBoardArray = (
  numOfDays: number,
  firstDayIndex: number,
): number[][] => {
  const preArray = new Array(firstDayIndex).fill(-1);
  const datesArray = Array.from(Array(numOfDays).keys());
  const postArray = new Array((7 - ((numOfDays + firstDayIndex) % 7)) % 7).fill(
    -1,
  );
  const boardArray = [...preArray, ...datesArray, ...postArray];

  console.log(boardArray);

  const weeksChunks = [];
  let i = 0;

  while (i < boardArray.length) {
    weeksChunks.push(boardArray.slice(i, (i += WEEK_LENGTH)));
  }
  return weeksChunks;
};
