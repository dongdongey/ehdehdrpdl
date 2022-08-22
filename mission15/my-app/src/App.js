import logo from './logo.svg';
import './App.css';
import {Counter, Create} from './mission15';
import styled from "styled-components"

function App() {


  return (
    <Divver>
      <AppBox>
        <Title>한 줄 메모장 {tab}</Title>
        { tab === 'create' && <Create setTab={setTab} /> }
      </AppBox>
    </Divver>
  );
}

export default App;
