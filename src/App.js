import "./App.scss";
import CartState from "./components/context/CartContext";
import Footer from "./components/footer/Footer";
// import Footer from "./compoents/footer/Footer";
import Router from "./pages/Router";
import CardsContainer from "./components/info-cards/CardsContainer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <CartState>
        <Router />
      </CartState>

      <Footer />
    </div>
  );
}

export default App;
