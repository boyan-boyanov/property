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
import { CatalogComponent } from './components/CatalogComponent/CatalogComponent';
import NotFound from './components/NotFound';
import { DetailsComponent } from './components/DetailsComponent/DetailsComponent';
import { EditComponent } from './components/EditComponent/EditComponent';
import { UserContext } from './contexts/UserContext';
import { useState } from 'react';

function App() {
const [test, setTest] = useState()

  return (
    <>
      <UserContext.Provider value={{test, setTest}}>
        <Header />

        <Routes>
          <Route path='/login' element={<LoginForm />} />
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/create' element={<CreatePropertyForm />} />
          <Route path='/' element={<HomeComponent />} />
          <Route path='/catalog' element={<CatalogComponent />} />
          <Route path='/catalog/:objectId' element={<DetailsComponent />} />
          <Route path='/catalog/edit/:objectId' element={<EditComponent />} />

          <Route path='*' element={<NotFound />} />
        </Routes>

        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
