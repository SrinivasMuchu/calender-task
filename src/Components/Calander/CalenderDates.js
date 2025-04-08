// CalenderDates.js
import React, { useState } from 'react';
import './calender.css';
import CladenderPopup from './CladenderPopup';

const days = ["Mon 24", "Tue 25", "Wed 26", "Thu 27", "Fri 28", "Sat 29", "Sun 30"];
const hours = Array.from({ length: 6 }, (_, i) => `${8 + i} AM`);

const timeToIndex = {
  "8 AM": 0,
  "9 AM": 1,
  "10 AM": 2,
  "11 AM": 3,
  "12 AM": 4,
  "1 AM": 5
};

function CalenderDates() {
  const [events, setEvents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const processedEvents = events.map((event, i) => ({
    ...event,
    startTime: timeToIndex[event.time],
    endTime: timeToIndex[event.time] + event.duration,
    id: i
  }));

  function isOverlapping(e1, e2) {
    return e1.startTime < e2.endTime && e2.startTime < e1.endTime;
  }

  function layoutEvents(events) {
    const positioned = [];
    events.sort((a, b) => a.startTime - b.startTime);

    for (let event of events) {
      let col = 0;
      while (positioned.some(e => isOverlapping(e, event) && e.column === col)) {
        col++;
      }
      event.column = col;
      positioned.push(event);
    }

    const maxCol = Math.max(...positioned.map(e => e.column), 0);
    positioned.forEach(e => {
      e.totalColumns = maxCol + 1;
    });

    return positioned;
  }

  const eventsByDay = {};
  processedEvents.forEach(event => {
    const dayLabel = days[event.day];
    if (!eventsByDay[dayLabel]) eventsByDay[dayLabel] = [];
    eventsByDay[dayLabel].push(event);
  });

  const laidOutEvents = [];
  for (let day in eventsByDay) {
    const laidOut = layoutEvents(eventsByDay[day]);
    laidOutEvents.push(...laidOut);
  }

  function handleCellClick(dayIndex, hourIndex) {
    setModalData({
      isEdit: false,
      day: dayIndex,
      time: hours[hourIndex],
    });
    setModalOpen(true);
  }

  function handleEventClick(event) {
    setModalData({
      ...event,
      isEdit: true,
      onDelete: () => {
        setEvents(prev => prev.filter((_, idx) => idx !== event.id));
        setModalOpen(false);
      }
    });
    setModalOpen(true);
  }

  function handleModalSubmit(data) {
    if (modalData.isEdit) {
      setEvents(prev =>
        prev.map((e, idx) =>
          idx === modalData.id
            ? { ...e, ...data }
            : e
        )
      );
    } else {
      const newEvent = {
        title: data.title,
        day: modalData.day,
        time: modalData.time,
        duration: data.duration,
        color: data.color
      };
      setEvents(prev => [...prev, newEvent]);
    }
    setModalOpen(false);
  }

  return (
    <div className="calendar">
      <div className="header">
        <div className="time-column-header" />
        {days.map((day, idx) => (
          <div key={idx} className="day-header">{day}</div>
        ))}
      </div>

      <div className="body">
        <div className="time-column">
          {hours.map((hour, idx) => (
            <div key={idx} className="time-slot">{hour}</div>
          ))}
        </div>

        <div className="grid">
          {days.map((_, dayIdx) => (
            <div key={dayIdx} className="day-column">
              {hours.map((_, hourIdx) => (
                <div
                  key={hourIdx}
                  className="cell"
                  onClick={() => handleCellClick(dayIdx, hourIdx)}
                />
              ))}
            </div>
          ))}

          {laidOutEvents.map((event, idx) => {
            console.log(event)
            const top = (event.startTime / hours.length) * 100;
            const height = (event.duration / hours.length) * 100;
            const left = (event.day / days.length) * 100 + (event.column / event.totalColumns) * (100 / days.length);
            const width = (1 / event.totalColumns) * (100 / days.length);

            return (
              <div
                key={idx}
                className="event"
                onClick={() => handleEventClick(event)}
                style={{
                  position: "absolute",
                  top: `${top}%`,
                  height: `${height}%`,
                  left: `${left}%`,
                //   width: `${width}%`,
                  backgroundColor: event.color,
                  borderRadius: "8px",
                  padding: "4px",
                  color: "#fff",
                  boxSizing: "border-box",
                  zIndex: 2,
                  cursor: "pointer"
                }}
              >
                <div style={{padding: "4px",borderBottom: "1px dashed #fff"}}>
                {event.time}
                </div>
                <br/>
                <strong>{event.title}</strong>
              </div>
            );
          })}
        </div>
      </div>

      <CladenderPopup
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleModalSubmit}
        initialData={modalData}
      />
    </div>
  );
}

export default CalenderDates;