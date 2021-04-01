import { useState } from 'react'
import Todo from './TodoItem/Todo'
// import List from './List/List'
import './App.css';
import './TodoItem/StyleTodo.css'


function App(){
  return (
    <div className='app'>
      <Todo song= "'Song : 'Maroon 5 - Shuga'"/>
      <Todo song= 'Song: One Republick - Sectrets'/>
      <Todo song= 'Song: Imagion Dragon - Radioactiv'/>
      <Todo song= 'Song: Rompanso - Ignis'/>
      <Todo song= 'Song: Randall - Warhan'/>
      <Todo song= 'Song: Avici - Make mi up'/>
      <Todo song= 'Song: Aris - S.O.S'/>
      <Todo song= 'Song: Eminem - Venom'/>

      {/* <List /> */}
</div>
  )}

export default App;

      /* {list.map((todo) => {
        return (
          <todoItem
            key={todo.name}
            name={todo.name}
            status={todo.status}
            onChange={playList}
            />
        );
      })}
    </div>
  ) */