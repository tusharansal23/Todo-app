import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../redux/taskSlice';
import { List, ListItem, TaskText, ButtonGroup, Button, DeleteButton } from './styles/TaskList.styles';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggleCompleted = (task) => {
    dispatch(editTask({ ...task, completed: !task.completed }));
  };

  return (
    <List>
      {tasks.map((task) => (
        <ListItem key={task.id} completed={task.completed}>
          <TaskText completed={task.completed}>{task.text}</TaskText>
          <ButtonGroup>
            <Button onClick={() => handleToggleCompleted(task)}>
              {task.completed ? 'Undo' : 'Complete'}
            </Button>
            <DeleteButton onClick={() => handleDeleteTask(task.id)}>
              Delete
            </DeleteButton>
          </ButtonGroup>
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;
