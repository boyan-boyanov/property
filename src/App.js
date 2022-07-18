import './App.css';
import './index.css'
import Header from './components/Header';
import Footer from './components/Footer';
import CardComponent from './components/CardComponent/CardComponent'
import LoginForm from './components/AuthComponents/LoginForm'
import RegisterForm from './components/AuthComponents/RegisterForm';
import CreatePropertyForm from './components/Properties/CreatePropertyForm';
import { Routes, Route } from 'react-router-dom'


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
      
      <Routes>
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/create' element={<CreatePropertyForm />} />
      </Routes>

      <CardComponent styles={styles} />
      <Footer />
    </>
  );
}

export default App;
