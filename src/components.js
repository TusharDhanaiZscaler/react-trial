import React from "react"

const Student = ({item,onDelete}) => {
    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.phone}</td>
            <td>
                <button id={item.id} onClick={onDelete}>Delete</button>
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
                    item={item}
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

export {Student, StudentList, Input}