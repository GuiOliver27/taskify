import React from 'react';
import './App.css';

let name: any
let age: number | string
let isStudent: boolean
let hobbies: string[]
let role: [number, string]

let printName: (name: string) => never

/* type Person = {
  name: string
  age?: number
};

 let person: Person = {
  name: "Guilherme",
};

let lotsOfPeople: Person[]

let personName: unknown */

interface Person{
  name: string
  age?: number
};

type X = {
  
}

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
