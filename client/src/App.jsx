import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import OrderPage from "./pages/OrderPage";
import ProfilPage from "./pages/ProfilPage";
import CreateProduct from "./pages/CreateProduct";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/profile" element={<ProfilPage />} />
        <Route path="/create" element={<CreateProduct />} />
      </Routes>
    </Router>
  )
}

export default App