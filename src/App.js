import React from "react";
import {StudentList, Form, TableHeader } from "./components-classic";

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

const tableHeaders = [
    "Roll Number",
    "Name",
    "Phone Number",
    "Action"
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentList: studentData,
            newName: '',
            newNumber: '',
        }
    }

    onNameInput = event => { this.setState({newName: event.target.value}) }
    onNumberInput = event => { this.setState({newNumber: event.target.value}) }

    addStudent = (event) => {
        event.preventDefault()
        
        const duplicate = this.state.studentList.find(item => {
            return item.name === this.state.newName
        })
        
        if (duplicate) {
            this.updateStudent(duplicate.id)
            return
        }

        const student = {
            id: this.state.studentList.at(-1).id + 1,
            name: this.state.newName,
            phone: this.state.newNumber
        }

        this.setState({
            studentList: this.state.studentList.concat(student)
        })
    }

    updateStudent = id => {
        const list = this.state.studentList
        const position = list.findIndex(item => item.id === id)
        list[position].phone = Number(this.state.newNumber)
        this.setState({
            studentList: list
        })
    }

    deleteStudent = (event) => {
        event.preventDefault()
        const newList = this.state.studentList.filter(item => item.id != event.target.id)
        this.setState({
            studentList: newList
        })
    }

    render() {
        return (
            <div>
                <h1>Student List</h1>
                <Form 
                    onNameInput={this.onNameInput} 
                    onNumberInput={this.onNumberInput}
                    onClickButton={this.addStudent}
                />
                <table>
                    <TableHeader headers={tableHeaders} />
                    <tbody>
                        <StudentList studentList={this.state.studentList} onDelete={this.deleteStudent} />
                    </tbody>
                </table>
            </div>
        )
    }
}

export default App