import { useState } from "react";
import "./App.css";
import FirstPage from "./components/FirstPage";
import LastPage from "./components/LastPage";

function App() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [email, setEmail] = useState("");
  return (
    <div className="App">
      {!isSuccess ? (
        <FirstPage setIsSuccess={setIsSuccess} setEmail={setEmail} />
      ) : (
        <LastPage setIsSuccess={setIsSuccess} email={email} />
      )}
    </div>
  );
}

export default App;
