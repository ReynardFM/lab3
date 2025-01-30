import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function ToggleHide() {
  const [isHide, setHide] = useState(false);
  return(
    <>
      <h1>1. IMPLEMENT BUTTON CLICK EVENT:</h1>
      <button onClick={() => setHide(!isHide)}>{isHide ? "Show" : "Hide"}</button>    
      {isHide ? <h1></h1> : <h1>This a text.  </h1>}
    </>
  );
};

function Form() {
  const [message, setMessage] = useState(false);
  const [input, setInput] = useState('');
  const [submit, setSubmit] = useState(false);
  const getInput = (event) => {
    if(!submit){
      setInput(event.target.value);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if(input === ''){
      setMessage(false);
      alert('Please enter a value');
    }else{
      setMessage(true);
      setSubmit(true);
    }
    if(submit){
      alert('You can only submit once');
    }
  };

  const handleReset = () => {
    setSubmit(false);
    setMessage(false);
    setInput('');
  };

  return (
    <>
      <h1>2. HANDLING FORM SUBMISSION: </h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onKeyUp={getInput} placeholder="Type here" />
        <button type="submit">Submit</button>
        <button type="reset" onClick={handleReset}>Reset</button>
      </form>
      {message ? <p>{input} is saved</p>: <p></p>}
    </>
  );
}

function List(){
  const [category, setCategory] = useState(null);
  const uniqueCategory = ['Electronics', 'Clothing', 'Food'];
  const item = [
    {
      category: 'Electronics',
      name: 'Item 1',
      price: 100
    },
    {
      category: 'Clothing',
      name: 'Item 2',
      price: 200
    },
    {
      category: 'Food',
      name: 'Item 3',
      price: 300
    },
    {
      category: 'Electronics',
      name: 'Item 4',
      price: 400
    },
    {
      category: 'Clothing',
      name: 'Item 5',
      price: 500
    },
    {
      category: 'Food',
      name: 'Item 6',
      price: 600
    }
  ];
  return(
    <>
      <h1>3. CONDITIONAL RENDERING BASED ON STATE: </h1>
      <h2>List of Items</h2>
      <button style={{marginRight: 10 + 'px'}} onClick={() => setCategory("All")}>All</button>
      {uniqueCategory.map((item, index) => (       
          <button style={{marginRight: 10 + 'px'}} key={index} onClick={() => setCategory(item)}>{item}</button>
      ))}
      <ul>
        {item.map((item, index) => (
          ((category === "All") || (category === item.category)) && 
            <li key={index}>
              <h3>{item.name}</h3>
              <p>{item.category}</p>
              <p>{item.price}</p>
            </li> 
        ))}
      </ul>
    </>
  );
}

function Hover(){
  const [color, setColor] = useState('white');
  function handleHover(){
    setColor('red');
  }

  function handleLeave(){
    setColor('white');
  }

  return(
    <>
      <h1>4. ADDING A HOVER INTERACTION:  </h1>
      <button style={{background: color, color: "black", margin:10 +"px", width:20+"em"}} onMouseEnter={() => handleHover()} onMouseLeave={() => handleLeave()}>Hover</button>
    </>
  );
}

export default function Home() {
    return (
    <>
      <ToggleHide />
      <br />
      <Form />
      <br />
      <List />
      <br />
      <Hover />
    </>
  );
}
