import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { InputContainer, Input, Button } from './styles/TaskInput.styles';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim() !== '') {
      dispatch(addTask({ id: uuidv4(), text: task, completed: false }));
      setTask('');
    }
  };

  return (
    <InputContainer>
      <Input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <Button onClick={handleAddTask}>Add Task</Button>
    </InputContainer>
  );
};

export default TaskInput;
