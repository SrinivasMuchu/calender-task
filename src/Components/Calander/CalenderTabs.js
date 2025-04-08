import React from 'react'
import './calender.css'; 
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddIcon from '@mui/icons-material/Add';

function CalenderTabs() {
  return (
    <div className="tabs-container">
      <div className="tabs-left">
        <div className="tab active">
          <CalendarTodayIcon className="tab-icon" />
          All Scheduled
        </div>
        <div className="tab">
          <StarBorderIcon className="tab-icon" />
          Events
        </div>
        <div className="tab">
          <ChatBubbleOutlineIcon className="tab-icon" />
          Meetings
        </div>
        <div className="tab">
          <AssignmentIcon className="tab-icon" />
          Task Reminders
        </div>
      </div>
      <div className="tabs-right">
        <div className="search-box">
          <SearchIcon />
          <input type="text" placeholder="Search..." />
        </div>
        <button className="btn">
          <FilterListIcon />
          Filter
        </button>
        <button className="btn">
          <MoreHorizIcon />
        </button>
        <button className="btn new-btn">
          <AddIcon />
          New
        </button>
      </div>
    </div>
  )
}

export default CalenderTabs