import React from "react";
import StudentCard from "./components/StudentCard.jsx";
import MovieList from "./components/MovieList.jsx";

class App extends React.Component {
  render() {
    return (
      <>
        <MovieList/>
        
        {/* <StudentCard name="John" marks={90} />
        <StudentCard name="Vivek" />
        <StudentCard name="Alex" /> */}
      </>
    );
  }
}

//Implemnted DefaultProps
StudentCard.defaultProps = {
  name: "Ravi",
  marks: "N/A",
};

export default App;
