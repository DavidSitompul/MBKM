import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,faPen,faTrashCan
} from '@fortawesome/free-solid-svg-icons';


import './App.css';

function App() {

  const [show,hide] = useState(true);


  const[toDo, setToDo] = useState([

    {"id" : 1, "title" :"Task1","status" : false},
    {"id" : 2, "title" :"Task2","status" : false},
    {"id" : 3, "title" :"Task2","status" : false}


  ]);

  //
  const[newTask,setNewTask] = useState("");
  const[updateData,setupdateData] = useState("");

  // add Task

  const addTask = () => {
    if(newTask) {
      let num = toDo.length + 1;
      let newEntry = {id: num, title:newTask, status : false}
      setToDo([...toDo,newEntry])
      setNewTask('');
    }

  }

  // delete Task
  const deleteTask = (id) => {
    let newTask = toDo.filter( task => task.id !== id)
    setToDo (newTask);

  }

  // mark Task
  const markDone = (id) => {
    let newTask = toDo.map( task => {
      if(task.id === id){
        return ({ ...task, status: !task.status})
      }
      return task;
    })
    setToDo (newTask);

  }

  // cancel mark
  const cancelUpdate = () => {

    setupdateData('');
  }

  // change Task update
  const changeTask = (e) => {
    let newEntry = {
      id : updateData.id,
      title : e.target.value,
      status : updateData.status ? true : false
    }
    setupdateData(newEntry);

  }


  const updateTask = () => {
    let filerRecords = [...toDo].filter(task => task.id !== updateData.id);
    let updateObject = [...filerRecords,updateData]
    setToDo(updateObject);
    setupdateData('');

  }

  return (
    <div className="container fluid=sm App">
      <br></br>
      <h2>To Do list</h2>
      <br></br>

      <button className="btn btn-lg btn-success tes" onClick={() => hide (!show)}> {show === true ? "Hide Button" : "Show Button"} </button>
      <br/>

{/* update task */}
{
   show && <div className="konten" id="tes">
   {updateData && updateData ?(<>
     <div className="row">
     <div className="col">
     <input
     value={ updateData && updateData.title }
     onChange = { (e) => changeTask (e) }
     className="form-control form-control-lg"

     />
     </div>

     <div className="col-auto">
     <button
     onClick={updateTask}
     className="btn btn-lg btn-success">Update Task</button>
     &nbsp;
     <button
     onClick={cancelUpdate}
     className="btn btn-lg btn-warning">Cancel</button>
     </div>
   </div>

<br/>
   </>):
    (<>

     {/* add task */}
   <div className="row">
     <div className="col">
       <input
       value={newTask}
       onChange={ (e) => setNewTask (e.target.value)}
       className="form-control form-control-lg"/>
     </div>

     <div className="col-auto">
       <button
       onClick={() => addTask()}
       className="btn btn-lg btn-success"> Add Task</button>

     </div>
   </div>
   <br/>

    </>)}
    {/*  */}

</div>
}

   {/* display todo */}

   { toDo && toDo.length ? '' : 'No tasks....'}

   { toDo && toDo
   .sort ((a,b) => a.id >b.id ? 1 : -1)
   .map((task,index) =>{


     return(


       <React.Fragment key={task.id}>

       <div className="col taskBg">
             <div className={task.status ? 'done' : ''}>
                 <span className="taskNumber">{index + 1}</span>
                 <span className="taskTeks">{task.title}</span>
             </div>

           <div className="iconsWrap">
             <span title="completed / Not Completed"
              onClick={(e) => markDone(task.id)}
             >
               <FontAwesomeIcon icon={faCircleCheck}/>
             </span>
           {task.status ? null :(
           <span title="Edit"
           onClick={ () => setupdateData ({
               id: task.id,
               title : task.title,
               status  : task.status ? true : false
             })}
           >
               <FontAwesomeIcon icon={faPen}/>
             </span>
            )}


             <span title="Delete"
             onClick= {() => deleteTask (task.id)}
             >
             <FontAwesomeIcon icon={faTrashCan}/>
             </span>

           </div>

       </div>
       </React.Fragment>
     )
   })
   }




    </div>
  );
}

export default App;
