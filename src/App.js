import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { Container, Title } from './components/styles/App.styles';

const App = () => {
  return (
    <Container>
      <Title>To-Do Application</Title>
      <TaskInput />
      <TaskList />
    </Container>
  );
};

export default App;
