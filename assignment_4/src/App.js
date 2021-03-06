import './App.css';
import { Table, Container } from 'reactstrap';
import { useState } from 'react';
import Student from './Components/Students';
import ModalStudent from './Components/ModalStudent';

function App() {
    const [listStudents, setListStudents] = useState([
        {
            id: 1,
            name: 'Nguyen Van A',
            age: 15,
            math: 8,
            english: 9,
            history: 7,
        },
        {
            id: 2,
            name: 'Nguyen Van B',
            age: 18,
            math: 9,
            english: 9,
            history: 9,
        },
    ]);

    const handleSubmitStudent = (student) => {
        setListStudents([...listStudents, student]);
    };

    const handleUpdate = (id, newValue) => {
        const newListStudents = listStudents.map((student) =>
            student.id === id ? newValue : student
        );
        setListStudents(newListStudents);
    };

    const handleDelStudent = (id) => {
        const newListStudents = listStudents.filter((student) => student.id !== id);
        setListStudents(newListStudents);
    };

    return (
        <Container>
            <ModalStudent onAddStudent={handleSubmitStudent} />
            <Table>
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Math</th>
                        <th>English</th>
                        <th>History</th>
                        <th>Avg. Score</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listStudents.map((e, i) => {
                        return (
                            <Student
                                key={i}
                                info={listStudents[i]}
                                avgScore={(
                                    (parseInt(e.math) + parseInt(e.english) + parseInt(e.history)) /
                                    3
                                ).toFixed(2)}
                                onDelete={handleDelStudent}
                                onUpdate={handleUpdate}
                            />
                        );
                    })}
                </tbody>
            </Table>
        </Container>
    );
}

export default App;
