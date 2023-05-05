import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Home from "./component/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Summary from "./component/Summary";

function App() {
  const [shows, setShows] = useState([]);
  const [summary, setSummary] = useState();
  // const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => {
        setShows(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleClick = (e) => {
    const index = e.target.value;
    setSummary(shows[index].show.summary);
    // console.log(summary);

    navigate("/summary");
  };

  // if(loader===true){
  //   navigate("/summary");
  //   setLoader(false)
  // }
  // console.log(summary);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Home shows={shows} handleClick={handleClick} />}
        />
        <Route path="/summary" element={<Summary summary={summary} />} />
      </Routes>
    </div>
  );
}

export default App;
