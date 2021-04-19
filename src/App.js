import ApproveCard from './Components/ApproveCard';
import CssExample from './Components/CssExample';
//import "./styles.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <CssExample/>
      <ApproveCard name="John Doe" comment="Have a Nice Day" relationship="Friends of Bob"/>
      <ApproveCard name="Bob Jobs" comment="Beautiful Day" relationship="Friends of John"/>
        
    </div>
  );
}

export default App;
