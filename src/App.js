import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import "./index.css"
import Footer from './components/Footer';
import { useState } from 'react';
import Login from "./components/Login"

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({ name: "", email: "" })
  const [error, setError] = useState("")

  const Login = details => {
    console.log(details);
  }

  const Logout = () => {
    console.log("Logout");
  }

  return (
    <>
      <Header />
      {(user.email != "") ? (
        <div className='welcome'>
          <h2>Welcome, <span>{user.name}</span></h2>
          <button>Logout</button>
        </div>)
        : (
          <Login />
        )
      }
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
