import { FcTodoList } from 'react-icons/fc';
import { useState, useEffect } from 'react';
import classes from './Header.module.css';
import Tasks from './Tasks';

function Header({}) {
  const [enteredTask, setEnteredTask] = useState('');
  const [tasks, setTasks] = useState([]);

  function editTaskHandler(newItem) {
    setTasks(
      tasks.map((task) => {
        if (task.id === newItem.id) {
          return newItem;
        } else {
          return task;
        }
      })
    );
  }

  function deleteTaskHandler(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function completeTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function changeTaskHandler(event) {
    setEnteredTask(event.target.value);
  }

  function submitTaskHandler(event) {
    if (enteredTask.trim() !== '') {
      event.preventDefault();
      const newTask = {
        id: Date.now(),
        task: enteredTask,
        completed: false,
      };
      setTasks((existingTasks) => [...existingTasks, newTask]);
      setEnteredTask('');
    }
  }
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  return (
    <>
      <h1 className={classes.title}>WORK TO DO LIST</h1>

      <form className={classes.form} onSubmit={submitTaskHandler}>
        <input
          className={classes.input}
          type="text"
          placeholder="Enter your task here"
          onChange={changeTaskHandler}
          value={enteredTask}
          required
        />
        <button className={classes.addTaskButton}>
          <FcTodoList size={17} />
          {/* Add task */}
        </button>
      </form>

      {tasks.length > 0 && (
        <ol style={{ padding: 0 }}>
          {tasks.map((task) => (
            <Tasks
              key={task.id}
              task={task}
              onEditTask={editTaskHandler}
              onDeleteTask={deleteTaskHandler}
              toggleTaskCompleted={completeTask}
            />
          ))}
        </ol>
      )}
      {tasks.length === 0 && (
        <div>
          <h3>There are no tasks to be done yet!!</h3>
          <p>Begin adding some some...</p>
        </div>
      )}
    </>
  );
}
export default Header;
