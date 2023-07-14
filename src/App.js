import React ,{ useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircle , faPen , faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './app.css';

function App() {

    //tasks 
    const [toDO , setToDo] = useState ([
        {"id": 1, "title": 'Task 1' , "status": false},
        {"id": 2, "title": 'Task 2' , "status": false}
    ]);

    //temp state 
    const [newTask , setNewTask ] = useState('');
    const [updateData , setUpdateData] = useState('')

    //add task
    const addTask = () => {

    }

    //delete task
    const deleteTask = (id) => {

    }

    //markDone
    const markDone = (id) => {

    }

    //cancelUpdate
    const cancelUpdate = (id) => {

    }

    //change Task for update
    const changeTask = (e) => {

    }

        return (
            <div className="container App">
            <br></br>
            <h2>To Do List App</h2>
            </div>
        )
}

export default App;