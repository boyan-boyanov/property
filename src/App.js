import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import "./index.css"
import Footer from './components/Footer';
import { useState } from 'react';
import LoginForm from "./components/LoginForm"

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({ name: "", email: "" })
  const [error, setError] = useState("")

  const Login = details => {
    console.log(details);

    if(details.email==adminUser.email && details.password==adminUser.password){
      console.log("admin loged");
      setUser({
        name: details.name,
        email: details.email
      });
    }else {
      setError("Some Error");
    }
  }

  const Logout = () => {
    setUser({ name: "", email: "" });
  }

  return (
    <>
      <Header />
      {(user.email != "") ? (
        <div className='welcome'>
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>)
        : (
          <LoginForm Login={Login} error={error} />
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
