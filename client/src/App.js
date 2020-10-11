import React ,{useEffect}from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {getAuthUser} from './js/actions/authActions'
import AppNavbar from './components/AppNavbar';
import PrivateRoute from './components/route/PrivateRoute';
import Home from './components/pages/Home'
import Profil from './components/pages/Profil'
import Shop from './components/pages/Shop'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


function App() {
  const dispatch=useDispatch()
  const getUser=()=>{
    dispatch(getAuthUser());
  }
  useEffect(()=> {
    getUser()
  },[])
  return (
   <Router>
     <AppNavbar />
     <Switch>
       <Route exact path='/' component={Home} />
       <PrivateRoute path='/profil' component={Profil} />
       <PrivateRoute path='/goToCart' component={Shop} />
     </Switch>
   </Router>
  );
}

export default App;
