import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Main/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notfound from './Pages/Main/Notfound/Notfound';
import Header from './Pages/Main/Header/Header';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import OrderForm from './Pages/OrderForm/OrderForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <Route exact path='/servicedetails/:id'>
            <ServiceDetails></ServiceDetails>
          </Route>
          <PrivateRoute path='/orderform'>
            <OrderForm></OrderForm>
          </PrivateRoute>
          <Route exact path='/notfound'>
            <Notfound></Notfound>
          </Route>
          <Route exact path='*'>
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
