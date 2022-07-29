import './App.css';
import './index.css'
import Header from './components/Header';
import Footer from './components/Footer';
import LoginForm from './components/AuthComponents/LoginForm'
import RegisterForm from './components/AuthComponents/RegisterForm';
import UserProfile from './components/UserProfileComponent/UserProfile';
import { Routes, Route } from 'react-router-dom'
import HomeComponent from './components/HomeComponent/HomeComponent';
import { CatalogComponent } from './components/CatalogComponent/CatalogComponent';
import NotFound from './components/NotFound';
import { DetailsComponent } from './components/DetailsComponent/DetailsComponent';
import { EditComponent } from './components/EditComponent/EditComponent';
import { AuthContext } from './contexts/UserContext';
import { lazy, Suspense, useEffect, useState } from 'react';
const CreatePropertyForm = lazy(() => import('./components/Properties/CreatePropertyForm'))

// import CreatePropertyForm from './components/Properties/CreatePropertyForm';
function App() {
  //const [loggedUser, setLoggedUser] = useState()
  const [auth, setAuth] = useState({})

  const userLogin = (authData) => {
    setAuth(authData)
  }
  useEffect(() => {
    const isLogged = localStorage.getItem('userData')
    if (isLogged) {
      setAuth(JSON.parse(localStorage.getItem('userData')))
    }
  },[])

  return (
    <>
      <AuthContext.Provider value={{ auth, userLogin }}>
        <Header />

        <Routes>
          <Route path='/login' element={<LoginForm />} />
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/create' element={
            <Suspense fallback={<span>Loading...</span>}>
              <CreatePropertyForm />
            </Suspense>
          } />
          <Route path='/' element={<HomeComponent />} />
          <Route path='/catalog' element={<CatalogComponent />} />
          <Route path='/catalog/:objectId' element={<DetailsComponent />} />
          <Route path='/catalog/edit/:objectId' element={<EditComponent />} />
          <Route path='/profile' element={<UserProfile/>}/>
          <Route path='*' element={<NotFound />} />
        </Routes>

        <Footer />
      </AuthContext.Provider>
    </>
  );
}

export default App;
