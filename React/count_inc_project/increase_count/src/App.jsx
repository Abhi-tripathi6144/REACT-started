import React,{ useState } from 'react'

function App() {
  const [count,setCount]=useState(0);
  return (
    <div style={style.root}>
      <button style={style.button} onClick={()=>{
        setCount(count+1);
      }}>+</button>
      <p style={style.p}>{count}</p>
      <button style={style.button} onClick={()=>{
        setCount(count-1);
      }}>-</button>
    </div>
  );
}
const style = {
  root: {
    height: "50vh",
    width: "50vw",
    display: "flex",
    border: "1px solid black",
    justifyContent:"center",
    gap:"30px",
    alignItems: "center",
  },
  button: {
    fontSize: "2rem",
    height: 50,
    width: 100,
  },
  p: {
    fontSize: "2rem",
  },
};

export default App;
