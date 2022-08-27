import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  return (
    <div className="App">
      {listOfPosts.map((value, key) => {
        return (
          <div>
            <div> {value.title}</div>
            <div> {value.description}</div>
            <div> {value.username}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
