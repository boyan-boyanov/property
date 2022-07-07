import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import "./index.css"

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <article>
          <h1>What is Lorem Ipsum? </h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry...
        </article>
      </div>
    </div>
  );
}

export default App;
