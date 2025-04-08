import React, { useState } from 'react';
import './calender.css'; // Import your CSS file for styling
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AddIcon from '@mui/icons-material/Add';
import CalanderHead from './CalanderHead';
import CalenderTabs from './CalenderTabs';
import CalenderMonth from './CalenderMonth';
import CalenderDates from './CalenderDates';


const Calendar = () => {
  const [currentView, setCurrentView] = useState('week');
  const [selectedDate, setSelectedDate] = useState(new Date(2024, 5, 24)); // June 24, 2024

  return (
    <div className='calender-container-div'>
      <div className='calender-header'>
        <div className='calender-header-left'>
          <div className='calender-header-arrows'>
            <KeyboardArrowLeftIcon />
            
            <KeyboardArrowRightIcon />
          </div>
          <div className='calender-header-line'></div>
          <div className='calender-header-arrows'>
            <span>Dashboard /</span>
            <span>Calender</span>
          </div>
        </div>
        <div className='calender-header-left'>
          <div  className='calender-header-arrows'><AddIcon/> Add tab</div>
          <div  className='calender-header-line'></div>
          <div  className='calender-header-arrows'>
            <StarBorderIcon />
            <ShareIcon />
            <MoreHorizIcon />
          </div>
        </div>
      </div>
      <CalanderHead/>
      <CalenderTabs/>
      <CalenderMonth/>
      <CalenderDates/>
    </div>
  );
};

export default Calendar;