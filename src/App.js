import "./App.scss";
import CartState from "./components/context/CartContext";
import Footer from "./components/footer/Footer";
import Router from "./pages/Router";

function App() {
  return (
    <div className="App">
      <CartState>
        <Router />
      </CartState>
      <Footer />
    </div>
  );
}

export default App;
