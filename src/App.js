import React, { useEffect, useState } from "react";

let studentData = [
    {
        "id": 1,
        "name": "Tushar",
        "phone": 1234567834
    },
    {
        "id": 2,
        "name": "Vipin",
        "phone": 9876523832
    },
    {
        "id": 3,
        "name": "Sumit",
        "phone": 1224854734
    }
];

const Student = ({id,name,phone,onDelete}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{phone}</td>
            <td>
                <button id={id} onClick={onDelete}>Delete</button>
            </td>
        </tr>
    )
}

const StudentList = ({studentList, onDelete}) => {
    return (
        studentList.map(item => {
            return (
                <Student
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    phone={item.phone}
                    onDelete={onDelete}
                />
            )
        })
    )
}

const Input = ({name,type,onInput}) => {
    return (
        <div>
            <label>{name}</label>&nbsp;
            <input type={type} onInput={onInput} />
        </div>
    )
}

const App = () => {
    const [studentList, setStudentList] = useState(studentData)
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    useEffect(() => setStudentList(studentData),[])

    const onNameInput = event => setNewName(event.target.value)
    const onNumberInput = event => setNewNumber(event.target.value)

    const addStudent = (event) => {
        event.preventDefault()
        
        const duplicate = studentList.find(item => item.name === newName)
        
        if (duplicate) {
            updateStudent(duplicate.id)
            return
        }

        const student = {
            id: studentList.at(-1).id + 1,
            name: newName,
            phone: newNumber
        }

        setStudentList(studentList.concat(student))
    }

    const updateStudent = id => {
        const list = studentList
        const position = list.findIndex(item => item.id === id)
        list[position].phone = newNumber
        setStudentList(list)
    }

    const deleteStudent = (event) => {
        event.preventDefault()
        setStudentList(studentList.filter(item => item.id != event.target.id))
    }

    return (
        <div>
            <h1>Student List</h1>
            <form>
                <Input name="Name" onInput={onNameInput} type="text" />
                <Input name="Phone Number" onInput={onNumberInput} type="text" />
                <button onClick={addStudent}>Add</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Roll Number</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <StudentList studentList={studentList} onDelete={deleteStudent} />
                </tbody>
            </table>
        </div>
    )
}

export default App