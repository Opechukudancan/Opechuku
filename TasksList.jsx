// import { useState } from 'react';
// import Tasks from './Tasks';
// import Header from './Header';

// function TasksList() {
//   const [tasks, setTasks] = useState([]);

//   function addTaskHandler(listData) {
//     setTasks((existingTasks) => [...existingTasks, listData]);
//   }


//     localStorage.setItem('tasks', JSON.stringify(...tasks, enteredTasks))


//   function deleteTaskHandler(index){
//     setTasks(tasks.filter((_, i) => i !== index))

//   }

//   function editTasHandler(){}

//   function checkBoxHandler(){}

//   return (
//     <>
//       <Header onAddTask={addTaskHandler} />
//       {tasks.length > 0 && (
//         <ol style={{ padding: 0 }}>
//           {tasks.map((task, index) => (
//             <Tasks
//               key={index}
//               task={task.task}
//               onEditTask={editTasHandler}
//               onDeleteTask={deleteTaskHandler}
//               onCheckBoxClick={checkBoxHandler}
//             />
//           ))}
//         </ol>
//       )}
//       {tasks.length === 0 && (
//         <div>
//           <h3>There are no tasks to be done yet!!</h3>
//           <p>Begin adding some some...</p>
//         </div>
//       )}
//     </>
//   );
// }
// export default TasksList;
