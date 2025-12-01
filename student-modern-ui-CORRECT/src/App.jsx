
import React,{useState,useEffect} from 'react';
import './components/styles.css';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';
import { getStudents, addStudent, updateStudent, deleteStudent } from './services/studentService';

export default function App(){
  const [students,setStudents]=useState([]);
  const [modal,setModal]=useState(null);
  const [selected,setSelected]=useState(null);
  const [toast,setToast]=useState('');

  const load=async()=> setStudents(await getStudents());
  useEffect(()=>{load();},[]);

  const showToast=msg=>{ setToast(msg); setTimeout(()=>setToast(''),2500); };

  const save=async(s)=>{
    if(selected) await updateStudent(selected.id,s);
    else await addStudent(s);
    showToast("Saved!");
    setModal(null);
    load();
  };

  const remove=async(id)=>{
    await deleteStudent(id);
    showToast("Deleted!");
    load();
  };

  return(
    <div className="container">
      <h1>Student Result Manager</h1>

      {toast && <div className="toast">{toast}</div>}

      <StudentList
        students={students}
        onAdd={()=>{setSelected(null);setModal('form');}}
        onEdit={s=>{setSelected(s);setModal('form');}}
        onDelete={remove}
        onView={s=>{setSelected(s);setModal('details');}}
      />

      {modal==='form' && <StudentForm initial={selected} onSubmit={save} onClose={()=>setModal(null)}/>}
      {modal==='details' && <StudentDetails student={selected} onClose={()=>setModal(null)}/>}
    </div>
  );
}
