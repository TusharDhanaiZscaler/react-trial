import React from "react"

class Student extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item
        };
    }

    render() {
        return (
            <tr>
                <td>{this.state.item.id}</td>
                <td>{this.state.item.name}</td>
                <td>{this.state.item.phone}</td>
                <td>
                    <button id={this.state.item.id} onClick={this.props.onDelete}>Delete</button>
                </td>
            </tr>
        )
    }
}

class StudentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentList: props.studentList
        }
    }

    static getDerivedStateFromProps(nextProps) {
        return {
            studentList: nextProps.studentList
        }
    }

    render () {
        return (
            this.state.studentList.map(item => {
                return (
                    <Student
                        key={item.id}
                        item={item}
                        onDelete={this.props.onDelete}
                    />
                )
            })
        )
    }
}

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        }
    }

    

    render() {
        return(
            <div>
                <label>{this.state.name}</label>&nbsp;
                <input type={this.props.type} onInput={this.props.onInput} />
            </div>
        )
    }
}

export {Student, StudentList, Input}