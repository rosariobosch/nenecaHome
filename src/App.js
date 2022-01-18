import "./App.scss";
import CartState from "./components/context/CartContext";
import Footer from "./components/footer/Footer";
import Router from "./pages/Router";
import CardsContainer from "./components/info-cards/CardsContainer";

function App() {
  return (
    <div className="App">
      <CartState>
        <Router />
      </CartState>
      <CardsContainer />
      <Footer />
    </div>
  );
}

export default App;
