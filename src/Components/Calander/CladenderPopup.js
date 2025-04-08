import React from 'react'
import './calender.css'; 

function CladenderPopup({ isOpen, onClose, onSubmit, initialData }) {
    const [title, setTitle] = React.useState(initialData.title || '');
    const [color, setColor] = React.useState(initialData.color || '#2196f3');
    const [duration, setDuration] = React.useState(initialData.duration || 1);
    if (!isOpen) return null;

   
  
    const handleSubmit = () => {
      onSubmit({ title, color, duration });
    };
  
    return (
      <div className="modal-overlay">
        <div className="modal">
          <h3>{initialData.isEdit ? 'Edit Event' : 'Add Event'}</h3>
          <label>Title:</label>
          <input value={title} onChange={e => setTitle(e.target.value)} />
          <label>Color:</label>
          <input type="color" value={color} onChange={e => setColor(e.target.value)} />
          <label>Duration (hours):</label>
          <input
            type="number"
            min="0.5"
            step="0.5"
            value={duration}
            onChange={e => setDuration(parseFloat(e.target.value))}
          />
  
          <div className="modal-buttons">
            <button onClick={handleSubmit}>{initialData.isEdit ? 'Update' : 'Add'}</button>
            {initialData.isEdit && (
              <button onClick={() => initialData.onDelete()}>Delete</button>
            )}
            <button onClick={onClose}>Cancel</button>
          </div>
        </div>
      </div>
  )
}

export default CladenderPopup