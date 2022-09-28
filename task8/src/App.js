import './App.css';
import { useState } from 'react';
import Timer from './Timer';

function App() {

  const [text,setText] = useState([]);
  const [input,setInput] = useState ('');

  const onSubmit = (e) => {
    e.preventDefault();
      if (input === ''){

        return alert('please input a text');
      }

      const newText = {
        id: Date.now(),
        title: input.text,
        timer : 3600,
      };

      setText((prevText) =>{
        return[...prevText,newText];
      } );

      setInput ('');

  };


  return (
    <div>

      <form>

      <input
       placeholder="name"
       value={input ? input.text : input}
       onChange = {(e) => {
        setInput ({...input,text : e.target.value});
       }}
      ></input>

      <button onClick={onSubmit}>Add</button>

      </form>
      <div>
        <table>
          <thead>
            <tr>
              <th>nama</th>
              <th>Waktu</th>
            </tr>
<br></br>

          </thead>

          {text.map((i) => (
            <Timer key={i.id} data = {i}/>

          ))}

        </table>

      </div>
    </div>
  );
}

export default App;
