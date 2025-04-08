import React from 'react'
import './calender.css'; 
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

function CalanderHead() {
  const avatars = [
    { type: "initials", label: "AL", colorClass: "blue" },
    { type: "image", src: "https://img.freepik.com/free-vector/young-man-with-glasses-illustration_1308-174706.jpg?semt=ais_hybrid", alt: "User 1" },
    { type: "initials", label: "DT", colorClass: "green" },
    { type: "image", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTV_medlKUOaNvnRemf6vLAFiUtvZGGs14qA&s", alt: "User 2" },
    { type: "more", label: "+20" },
  ];
  return (
    <div className="calender-heading-container">
      <div className="calender-heading">
        <h2>Calender</h2>
        <p>Stay organized and on track with your personalized calender</p>

      </div>
      <div className="calender-heading-right">
        <div className="avatar-group">
          {avatars.map((avatar, index) => {
            if (avatar.type === "initials") {
              return (
                <div key={index} className={`avatar initials ${avatar.colorClass}`}>
                  {avatar.label}
                </div>
              );
            } else if (avatar.type === "image") {
              return (
                <img
                  key={index}
                  src={avatar.src}
                  alt={avatar.alt}
                  className="avatar"
                />
              );
            } else if (avatar.type === "more") {
              return (
                <div key={index} className="avatar more">
                  {avatar.label}
                </div>
              );
            }
            return null;
          })}
        </div>
        <button className="add-member-button">
          <PersonAddAltIcon/> Invite
        </button>

      </div>
    </div>
  )
}

export default CalanderHead