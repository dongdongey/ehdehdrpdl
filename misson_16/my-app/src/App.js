import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import styled from 'styled-components';


const TodoStyle = styled.div`
  display: block;
  padding: 3px;
  border-bottom: 8px dashed darkorange;
`;

const StyledInput = styled.input`
  padding: 6px 100px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1;
  border: 1px solid lightgray;
  color: gray;
  background: white;
`;

const Styledli = styled.li`
  padding: 3px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1;
  border: 1px solid black;
  color: black;
  background: white;
  
`;

const Button = styled.button`
  background: tomato; 
  border-radius: 8px;
  padding: 6px;
  border: none;
  font-size: 1rem;
  color: white;
`

const InlineButton = styled.button`
background: #769AD1; 
border-radius: 4px;
padding: 3px;
border: none;
font-size: 1rem;
color: black;
`





function App() {
  const [names, setNames] = useState(() => JSON.parse(localStorage.getItem("store")) ||{});
  const [input, setInput] = useState('');

  


  function inputChange(e) {
    setInput(e.target.value);
  }


  const buttonClick = (e) => {
    setNames((prev) => {
      console.log('등록하기 전의 names값', prev);
      const id = String(new Date().getTime())
      localStorage.setItem('store', JSON.stringify({ ...prev,[id]: input}))
      return {  ...prev,[id]: input};
    })

    setInput('')
  }
  const onKeypress = (e) => {
    if (e.key === 'Enter') {
      buttonClick();
    }
  }

  const buttonClickRemove = (e) => {
    setNames({})
    localStorage.clear()
  }

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return (() => clearInterval(id))
  }, []);

  const deleteItem = (id) => {
    setNames(prev => {
      delete prev[id]
      localStorage.removeItem(id)
      return prev
    })
  }
 


  return (

    <TodoStyle>

      <div className="To Do">
        <h1>할 것</h1>
        <h2>{time.toLocaleTimeString()}</h2>

        <ul>
          <button onClick={buttonClickRemove}>remove all</button>
          <StyledInput type="text" value={input} onChange={inputChange} onKeyPress={onKeypress} />
          <Button onClick={buttonClick}>update</Button>
          {Object.entries(names).map(([id, name], index) => {
            return <li><Styledli key={id}>
              {name}</Styledli><InlineButton onClick={() => deleteItem(id)}>done</InlineButton>
            </li>
          })
          }


        </ul>

      </div>
    </TodoStyle>
  );

}

export default App;
