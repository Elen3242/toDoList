import React ,{ useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircle , faPen , faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './app.css';

function App() {

    //tasks 
    const [toDo , setToDo] = useState ([
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
    const cancelUpdate = () => {

    }

    //change Task for update
    const changeTask = (e) => {

    }

    const updateTask = () => {

    }

        return (
            <div className="container App">
            <br></br>
             <h2>To Do List App</h2>
            <br></br>
            {/* display toDo */}
            {/* this code run when tasks absence  */}
            {toDo && toDo.length ? '' : "No tasks..."} 

            {toDo && toDo
                .map (( task , index) => {
                    return (
                        <React.Fragment key={task.id}>
                            <div className="col taskBg"> 
                                <div className={task.status ? 'done' : ''}>
                                    <span className="taskText">{index + 1} </span>
                                    <span className="taskText">{task.title} </span>
                                </div>
                            </div>
                             
                            
                        </React.Fragment>
                    )
                })
            }
            </div>
        )
}

export default App;