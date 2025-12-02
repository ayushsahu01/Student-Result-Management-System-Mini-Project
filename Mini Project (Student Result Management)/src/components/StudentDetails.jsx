import React from 'react';
import './styles.css';

export default function StudentDetails({ student, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Student Details</h3>

        <p><b>Name:</b> {student.name}</p>
        <p><b>Section:</b> {student.section}</p>
        <p><b>Marks:</b> {student.marks}</p>
        <p><b>Grade:</b> {student.grade}</p>

        <button className="btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
