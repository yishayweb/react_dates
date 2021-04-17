import React, { useState } from 'react';
import CalendarModal from './CalendarModal';
import './ReactDates.css';

export type IReactDatesProps = {
  className?: string;
};

const ReactDates: React.FC<IReactDatesProps> = ({ className = '' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={`main-div ${className}`}>
      <div
        className="react-dates-display-div"
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        <span className="react-dates-display-span">20/2/2010</span>
      </div>
      {isModalOpen && <CalendarModal />}
    </div>
  );
};

export default ReactDates;
