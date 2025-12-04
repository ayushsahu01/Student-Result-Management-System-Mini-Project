import React from 'react';
import './styles.css';

export default function StudentForm({ initial, onSubmit, onClose }) {
  const [name, setName] = React.useState(initial?.name || '');
  const [section, setSection] = React.useState(initial?.section || '');
  const [marks, setMarks] = React.useState(initial?.marks || '');

  const [grade, setGrade] = React.useState(() => {
    const m = Number(initial?.marks);
    if (isNaN(m)) return '';
    if (m >= 90) return 'A';
    if (m >= 80) return 'B';
    if (m >= 70) return 'C';
    if (m >= 60) return 'D';
    return 'F';
  });

  const handleMarks = (value) => {
    setMarks(value);

    const m = Number(value);
    if (!isNaN(m)) {
      if (m >= 90) setGrade('A');
      else if (m >= 80) setGrade('B');
      else if (m >= 70) setGrade('C');
      else if (m >= 60) setGrade('D');
      else setGrade('F');
    } else {
      setGrade('');
    }
  };

  const submit = (e) => {
    e.preventDefault();
    onSubmit({ name, section, marks, grade });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{initial ? 'Edit Student' : 'Add Student'}</h3>

        <form onSubmit={submit}>
          <input
            className="search-box"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            className="search-box"
            placeholder="Section"
            value={section}
            onChange={(e) => setSection(e.target.value)}
            required
          />

          <input
            className="search-box"
            placeholder="Marks"
            type="number"
            value={marks}
            onChange={(e) => handleMarks(e.target.value)}
            required
          />

          <input
            className="search-box"
            placeholder="Grade"
            value={grade}
            readOnly
          />

          <button className="btn" type="submit">Save</button>
          <button className="btn danger" type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}
