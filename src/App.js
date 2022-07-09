import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import "./index.css"
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <article>
          <h1>What is Lorem Ipsum? </h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry...
        </article>
      </div>
      <Footer />
    </>
  );
}

export default App;
