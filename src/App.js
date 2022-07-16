import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import './index.css'
import Header from './components/Header';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm'
import CardComponent from './components/CardComponent/CardComponent'
import RegisterForm from './components/RegisterForm';

function App() {

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

  return (
    <>
      <Header />


      <LoginForm /> 
      <RegisterForm />

      <CardComponent styles={styles} />
      <Footer />
    </>
  );
}

export default App;
