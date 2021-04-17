import React from 'react';
import { shortDaysNamesMap } from '../utils/daysMap';
import './MonthBoard.css';

export type IMonthBoardProps = {
  monthBoardArray: number[][];
  skipMonth: (isNext: boolean) => void;
};

const MonthBoard: React.FC<IMonthBoardProps> = ({
  monthBoardArray,
  skipMonth,
}) => {
  const renderMonthSkip = () => {
    return (
      <div className="month-board-skip-div">
        <span
          className="month-board-skip-text"
          onClick={() => skipMonth(false)}
        >
          Back
        </span>
        <span className="month-board-skip-text" onClick={() => skipMonth(true)}>
          Next
        </span>
      </div>
    );
  };
  const renderDaysNames = () => {
    return (
      <div>
        {Object.keys(shortDaysNamesMap).map((key) => {
          return (
            <span key={key} className="month-board-cell">
              {shortDaysNamesMap[key]}
            </span>
          );
        })}
      </div>
    );
  };

  const renderCell = (date: number, index: number) => {
    return (
      <span key={index} className="month-board-cell">
        {date >= 0 ? date + 1 : ''}
      </span>
    );
  };

  const renderRow = (weekArray: number[], index: number) => {
    return (
      <div key={index} className="month-board-row">
        {weekArray.map((date, index) => renderCell(date, index))}
      </div>
    );
  };

  const renderRows = () => {
    return monthBoardArray.map((weekArray, index) => {
      return renderRow(weekArray, index);
    });
  };

  return (
    <div className="month-board-main-div">
      {renderMonthSkip()}
      {renderDaysNames()}
      {renderRows()}
    </div>
  );
};

export default MonthBoard;
