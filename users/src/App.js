import React from 'react';
import axios from 'axios';
import './App.css';
import UserList from './Component/UserList';

function App() {
  let [responseName, setResponseName] = React.useState('');
  const fetchName = React.useCallback(() => {
    axios({
    
      "url": "https://jsonplaceholder.typicode.com/users/",
      
    })
    .then((response) => {
      setResponseName(response.name)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])
  React.useEffect(() => {
    fetchName()
  }, [fetchName])
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Users Name
        </h1>
        <button type='button' onClick={fetchName}>Click for Name</button>
      </header>
      
      <pre>
        <code>
          {responseName && JSON.stringify(responseName, null, 4)}
        </code>
      </pre>
     
      
    </div>
  );
}
export default App;