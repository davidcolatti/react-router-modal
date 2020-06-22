import React from "react";
import { Link } from "react-router-dom";
import { ModalRoute, ModalContainer } from "react-router-modal";

// This is the css for the modal
import "react-router-modal/css/react-router-modal.css";

function App() {
  return (
    <div className="App">
      <ModalContainer />
      <h1>This Is My Main App Screen</h1>
      <Link to="/modal-test">Click Me To Show The Modal</Link>

      <ModalRoute path="/modal-test" parentPath="/">
        {/* this would be where my modal component can be inside */}
        Hello
      </ModalRoute>
    </div>
  );
}

export default App;
