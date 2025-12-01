
const API = "http://localhost:3001/students";

export const getStudents = async () => (await fetch(API)).json();
export const addStudent = async (s) => (await fetch(API, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(s) })).json();
export const updateStudent = async (id, s) => (await fetch(API + '/' + id, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(s) })).json();
export const deleteStudent = async (id) => await fetch(API + '/' + id, { method: 'DELETE' });
// json-server --watch db.json --port 3001
