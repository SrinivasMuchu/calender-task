import React, { useState } from "react";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import './calender.css'; 

function CalenderMonth() {
    const [activeView, setActiveView] = useState("Week");

    const views = ["Day", "Week", "Month"];
  
    return (
      <div className="calendar-header">
        <div className="left-section">
          <h3 className="month-label">June 2024</h3>
          <button className="today-btn">Today</button>
        </div>
  
        <div className="right-section">
          <div className="view-toggle">
            {views.map((view) => (
              <button
                key={view}
                className={`view-btn ${activeView === view ? "active" : ""}`}
                onClick={() => setActiveView(view)}
              >
                {view}
              </button>
            ))}
          </div>
          <div className="date-range" >
            <span role="img" >
            <CalendarTodayIcon />
            </span>{" "}
            24 Jun – 30 Jun 2024
          </div>
        </div>
      </div>
    )
}

export default CalenderMonth