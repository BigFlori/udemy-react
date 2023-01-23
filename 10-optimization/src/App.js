import React, { useCallback, useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";

function App() {
  const [state, setState] = useState(false);

  const toggleParagraphHandler = useCallback(() => {
    setState((prevState) => !prevState);
  }, []);

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      {state && <p>This is new!</p>}
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
