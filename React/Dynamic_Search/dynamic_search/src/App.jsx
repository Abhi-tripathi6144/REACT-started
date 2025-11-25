import { useRef,useEffect, useState } from 'react'
import './App.css'

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);

  const timerId=useRef(null);        //value persists  between renders (when it updates it dosent cause re-renders)

  async function fetch_api() {

    if (searchQuery.trim().length === 0) {
      setSearchSuggestions([]);
      return;
    };
    let api_data = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}`);
    let response = await api_data.json();
    console.log(response);
    setSearchSuggestions(response.products);

  }

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetch_api();
  //   }, 500);
  // }, [searchQuery]);

  useEffect(()=>{
    if(timerId.current){
      clearTimeout(timerId.current);
    }
    timerId.current=setTimeout(()=>{
      fetch_api();
    },500)
  },[searchQuery]);

  return (
    <>
      <div>
        <input type="text" onChange={(e) => {
          setSearchQuery(e.target.value);
        }} name="" id="" />
      </div>
      <div>
        {searchSuggestions.map((obj) => (
          <div>
            <p>{obj.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
