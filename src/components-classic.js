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

class Form extends React.Component {
    render() {
        return (
            <form>
                <Input name="Name" type="text" onInput={this.props.onNameInput} />
                <Input name="Phone Number" type="text" onInput={this.props.onNumberInput} />
                <button onClick={this.props.onClickButton}>Add</button>
            </form>
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

    static getDerivedStateFromProps(nextProps) {
        return {
            name: nextProps.name
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

class TableHeader extends React.Component {
    render() {
        return(
            <thead>
                <tr>
                    {this.props.headers.map(
                        item => <th>{item}</th>
                    )}
                </tr>
            </thead>
        )
    }
}

export {Student, StudentList, Form, Input, TableHeader}