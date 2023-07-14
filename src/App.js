import React ,{ useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleCheck , faPen , faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './app.css';

function App() {
    //tasks 
    const [toDo , setToDo] = useState ([
        {"id": 1, "title": 'Task 1' , "status": false},
        {"id": 2, "title": 'Task 2' , "status": false}
    ]);

    //temp state 
    const [newTask , setNewTask ] = useState('');
    const [updateData , setUpdateData] = useState('');

    //add task
    const addTask = () => {
        if(newTask) {
            let num = toDo.length + 1;
            let newEntry = {id: num , title: newTask, status: false}
            setToDo([...toDo, newEntry])
            setNewTask('')
        }
    }

    //delete task
    const deleteTask = (id) => {
        let newTasks = toDo.filter(task => task.id !== id)
        setToDo(newTask)
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
            {/* Update Task */}
            <div className="row">
                <div className="col">
                    <input 
                    className="form-control form-control-lg"
                    />
                </div>

                <div className="col-auto">
                    <button className="btn btn-lg btn-success mr-20" >
                        Update 
                    </button>
                    <button className="btn btn-lg btn-warning">
                        Cancel
                    </button>
                </div>
            </div>
            <br></br>

            {/* Add task */}
            <div className="row">
                <div className="col">
                    <input 
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    className="form-control form-control-lg"
                    />
                </div>

                <div className="col-auto">
                <button 
                    className="btn btn-lg btn-success"
                    onClick={addTask}
                >
                    Add Task 
                </button>
                </div>
            </div>
            <br></br>
            {/* display toDo */}
            {/* this code run when tasks absence  (line 10)*/}
            {toDo && toDo.length ? '' : "No tasks..."} 

            {toDo && toDo 
                .sort((a, b) => a.id > b.id ? 1 : -1) //when changing object places (1,2obj) do not change their places in page
                .map (( task , index) => {
                    return (
                        <React.Fragment key={task.id}>
                            <div className="col taskBg"> 
                                <div className={task.status ? 'done' : ''}>
                                    <span className="taskNumber">{index + 1} </span>
                                    <span className="taskText">{task.title} </span>
                                </div>

                                <div className="iconsWrap">
                                    <span title="Completed / Not Completed">
                                        <FontAwesomeIcon icon={faCircleCheck} />
                                    </span>
                                    <span title="Edit">
                                        <FontAwesomeIcon icon={faPen} />
                                    </span>
                                    <span title="Delete"
                                        onClick={() => deleteTask(task.id)}
                                    >
                                        <FontAwesomeIcon icon={faTrashCan} />
                                    </span>
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