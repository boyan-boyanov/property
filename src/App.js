import './App.css';
import './index.css'
import Header from './components/Header';
import Footer from './components/Footer';
import CardComponent from './components/CardComponent/CardComponent'
import LoginForm from './components/AuthComponents/LoginForm'
import RegisterForm from './components/AuthComponents/RegisterForm';
import CreatePropertyForm from './components/Properties/CreatePropertyForm';
import { Routes, Route } from 'react-router-dom'
import HomeComponent from './components/HomeComponent/HomeComponent';
import  {CatalogComponent}  from './components/CatalogComponent/CatalogComponent';


function App() {


  return (
    <>
      <Header />

      <Routes>
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/create' element={<CreatePropertyForm />} />
        <Route path='/' element={<HomeComponent />} />
        <Route path='/catalog' element={<CatalogComponent/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
