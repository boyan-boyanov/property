import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import './index.css'
import Header from './components/Header';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm'
import CardComponent from './components/CardComponent/CardComponent'

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

 let styles = {
    size: "small",
    cardWidth: "",
    cardHeight: "",
    background: "",
    title: "New Title",
    titleShadow: "",
    titleColor: "",
    subtitle: "subtitle",
    description: "Enter descrption here",
    descriptionColor: "",
    image: "https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930__480.jpg",
    subtitleColor: "",
    subtitleBackground: "",
    textRows: ""  //not work for now
  }

  const [user, setUser] = useState({ name: "", email: "" })
  const [error, setError] = useState("")

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("admin loged");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      setError("Some Error");
    }
  }

  const Logout = () => {
    setUser({ name: "", email: "" });
  }

  return (
    <>
      <Header />
      <div className="container">
        <article>
          <h1>What is Lorem Ipsum? </h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry...
        </article>
        <article>
          <h1>What is Lorem Ipsum? </h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry...
        </article>
        <article>
          <h1>What is Lorem Ipsum? </h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry...
        </article>
      </div>
      
      {(user.email != "") ? (
        <div className='welcome'>
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>)
        : (
          <LoginForm Login={Login} error={error} />
        )
      }
      <CardComponent styles={styles} />
      <Footer />
    </>
  );
}

export default App;
