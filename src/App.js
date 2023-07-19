import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./app.css";

function App() {
  // tasks
  const [toDo, setToDo] = useState([]);

  // temp state
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  // search state
  const [searchTerm, setSearchTerm] = useState("");

  // filter state
  const [filterChecked, setFilterChecked] = useState(false);

  // add task
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };

  // delete task
  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };

  // markDone
  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };

  // cancelUpdate
  const cancelUpdate = () => {
    setUpdateData("");
  };

  // change Task for update
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  const updateTask = () => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData];
    setToDo(updatedObject);
    setUpdateData("");
  };

  // filter tasks based on search term and status
  const filteredTasks = toDo.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterChecked ? task.status : true)
  );

  return (
    <div className="container App">
      <br></br>
      <h2>To Do List App</h2>
      <br></br>

      {/* Search Input */}
      <div className="row">
        <div className="col">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control form-control-lg"
            placeholder="Search tasks..."
          />
        </div>
        <div className="col-auto">
          <label>
            <input
              type="checkbox"
              checked={filterChecked}
              onChange={() => setFilterChecked(!filterChecked)}
            />
            Show only completed tasks
          </label>
        </div>
      </div>
      <br></br>

      {updateData && updateData ? (
        <>
          {/* Update Task */}
          <div className="row">
            <div className="col">
              <input
                value={updateData && updateData.title}
                onChange={(e) => changeTask(e)}
                className="form-control form-control-lg"
              />
            </div>

            <div className="col-auto">
              <button onClick={updateTask} className="btn btn-lg btn-success mr-20">
                Update
              </button>
              <button onClick={cancelUpdate} className="btn btn-lg btn-warning">
                Cancel
              </button>
            </div>
          </div>
          <br></br>
        </>
      ) : (
        <>
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
              <button className="btn btn-lg btn-success" onClick={addTask}>
                Add Task
              </button>
            </div>
          </div>
          <br></br>
        </>
      )}

      {/* display toDo */}
      {/* this code runs when tasks absence  (line 10) */}
      {filteredTasks && filteredTasks.length ? "" : "No tasks..."}

      {filteredTasks &&
        filteredTasks.map((task, index) => {
          return (
            <React.Fragment key={task.id}>
              <div className="col taskBg">
                <div className={task.status ? "done" : ""}>
                  <span className="taskNumber">{index + 1} </span>
                  <span className="taskText">{task.title} </span>
                </div>

                <div className="iconsWrap">
                  <span title="Completed / Not Completed" onClick={(e) => markDone(task.id)}>
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>

                  {task.status ? null : (
                    <span
                      title="Edit"
                      onClick={() =>
                        setUpdateData({
                          id: task.id,
                          title: task.title,
                          status: task.status ? true : false,
                        })
                      }
                    >
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                  )}

                  <span title="Delete" onClick={() => deleteTask(task.id)}>
                    <FontAwesomeIcon icon={faTrashCan} />
                  </span>
                </div>
              </div>
            </React.Fragment>
          );
        })}
    </div>
  );
}

export default App;
