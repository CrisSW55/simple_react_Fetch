import { useState, useRef, useEffect } from 'react';

const url = "https://jsonplaceholder.typicode.com/todos"

export default function App() {
  const [data,setData] = useState(null);
  const [isLoading,setIsLoading] = useState(true);

  useEffect(()=>{
    fetch(url)
    .then(response => response.json())
    .then((data) => {console.log(data);setData(data);setIsLoading(false)})
    .catch(error => console.error(error));
   
  },[]);

  
  return (
    <>
    {isLoading && <div>Loading...</div>}
     {data && <div>The data passed in the data state!!!</div>}

     <p>
      {data && 
      data.map((item=><li key={item.id}>{item.userId} {item.id} {item.title} {JSON.stringify(item.completed)}</li>))}
      
      </p>

    </>
  );
}



