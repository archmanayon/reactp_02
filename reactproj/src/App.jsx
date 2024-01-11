// import { useState } from 'react'
// import reactLogo from './assets/react.svg'brigadai fm
// import './App.css'
import Samplex from "./components/Sample_r";
import Persons from "./components/Persons";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Alert from "./components/Alert";

// const consLog = (item) => console.log(item);

const sample_object = {
  name: "Beatrize",
  age: 102,
  color: "blue",
  // seatNo:[0, 1, 2, 3, 4]
  seatNo: { a: 0, b: 1, c: 2, d: 3, e: 4 },
  persons: [
    { name: "benjie", height: "5'", age: 6 },
    { name: "olga", height: "7'", age: 8 },
    { name: "jonjie", height: "9'", age: 9 },
  ],
  fruits: ["apple", "orange", "mango"],
  consLog: function (item) {
    return console.log(item);
  },
};

// function App() {
//   return (
//     <div className="App"> Hello world
//       <Samplex name={"Archie"} age={5} />
//       <Samplex name="Beten" age={4} />
//       <Samplex name="Josaw" age={3} />
//     </div>
//   )
// }

function App() {
  return (
    <div className="App">
      {/* <h1>Hello world      </h1> */}
      {/* <Samplex sample_object={sample_object}>
        
      </Samplex> */}

      {/* <div>
        <Persons persons = {sample_object.persons} consLogFunction = {sample_object.consLog}/>
      </div> */}

      {<Counter/>}
      {/* <Form/> */}
      {/* {<Alert text = "hellow from APP"/>} */}

      {/* {<Alert> Yellow from App children</Alert> } */}
    </div>
  );
}

export default App;
