
import React from 'react';
import './styles.css';

export default function StudentList({ students, onAdd, onEdit, onDelete, onView }) {
  const [search,setSearch]=React.useState('');

  let filtered = students.filter(s => s.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="card">
      <h2>Students</h2>

      <input className="search-box" placeholder="Search..." value={search} onChange={e=>setSearch(e.target.value)} />
      <button className="btn" onClick={onAdd}>Add Student</button>

      <table className="table">
        <thead>
          <tr><th>Name</th><th>Section</th><th>Marks</th><th>Grade</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {filtered.map(s=>(
            <tr key={s.id}>
              <td>{s.name}</td><td>{s.section}</td><td>{s.marks}</td><td>{s.grade}</td>
              <td>
                <button className="btn small" onClick={()=>onEdit(s)}>Edit</button>
                <button className="btn small danger" onClick={()=>onDelete(s.id)}>Delete</button>
                <button className="btn small" onClick={()=>onView(s)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
