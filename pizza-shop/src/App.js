import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import TopBar from './Components/TopBar';
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import About from './Components/About';
import Contact from './Components/Contact';
import Policy from './Components/Policy';
import NavBar from './Components/NavBar';
import HomeScreen from './Screens/HomeScreen';
import CartScreen from './Screens/CartScreen';
import Login from './Screens/Login';
import Register from './Screens/Register';
import OrderScreen from './Screens/OrderScreen';
import AdminScreen from './Screens/AdminScreen';
import AddNewPizza from './Components/Admin/AddNewPizza';
import OrderList from './Components/Admin/OrderList';
import PizzasList from './Components/Admin/PizzasList';
import UserList from './Components/Admin/UserList';
import EditPizza from './Components/Admin/EditPizza';

function App() {
  return (
    <BrowserRouter>
      <TopBar/>
      <NavBar/>
      <Routes>
        <Route path="/orders" Component={OrderScreen} exact />
        <Route path="/admin" Component={AdminScreen} exact />
        <Route path="/admin/AddNewPizza" Component={AddNewPizza} exact />
        <Route path="/admin/OrderList" Component={OrderList} exact />
        <Route path="/admin/PizzasList" Component={PizzasList} exact />
        <Route path="/admin/UserList" Component={UserList} exact />
        <Route path="/admin/editpizza/:pizzaId" Component={EditPizza} exact />
        <Route path="/login" Component={Login} exact />
        <Route path="/register" Component={Register} exact />
        <Route path="/" Component={HomeScreen} exact />
        <Route path="/cart" Component={CartScreen} exact />
        <Route path="/about" Component={About} exact />
        <Route path="/contact" Component={Contact} exact />
        <Route path="/policy" Component={Policy} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
