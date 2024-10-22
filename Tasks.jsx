import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import classes from './Tasks.module.css';
import { useState } from 'react';
import { TbFlagCancel } from 'react-icons/tb';

function Tasks({ task, onEditTask, onDeleteTask, toggleTaskCompleted }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.task);

  function handleEditChange(event) {
    event.target.value;
  }

  function saveEdit() {
    onEditTask(task.id)
    setIsEditing(!isEditing)
  }

  function cancelEdit() {}
  return (
    <>
      {/* {isEditing ? (
        <li className={classes.listItem}>
          <input
            className={classes.editInput}
            placeholder={task.task}
            onChange={handleEditChange}
            value={editedText}
          />
          <button className={classes.buttons} onClick={saveEdit}>
            save
          </button>
          <button className={classes.buttons} onClick={cancelEdit}>
            Cancel
          </button>
        </li>
      ) : (
        <li className={classes.listItem}>
          <input
            key={task.id}
            type="checkBox"
            checked={task.completed}
            onChange={() => toggleTaskCompleted(task.id)}
          />

          <span className={classes.text}>{task.task}</span>

          <FaEdit className={classes.buttons} onClick={setIsEditing(true)} />

          <FaTrashAlt
            className={classes.buttons}
            onClick={() => onDeleteTask(task.id)}
          />
        </li>
      )} */}

      <li className={classes.listItem}>
        {isEditing ? (
          <>
            <input
              className={classes.editInput}
              placeholder={task.task}
              onChange={handleEditChange}
              value={editedText}
            />
            <button type='button'className={classes.buttons} onClick={saveEdit}>
              save
            </button>
            <button type='button' className={classes.buttons} onClick={cancelEdit}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <input
              key={task.id}
              type="checkBox"
              checked={task.completed}
              onChange={() => toggleTaskCompleted(task.id)}
            />

            <span className={classes.text}>{task.task}</span>

            <FaEdit
              className={classes.buttons} onClick={setIsEditing(true)}
            />

            <FaTrashAlt
              className={classes.buttons}
              onClick={() => onDeleteTask(task.id)}
            />
          </>
        )}
      </li>
    </>
  );
}
export default Tasks;
