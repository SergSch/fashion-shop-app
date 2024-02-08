import { Provider } from 'react-redux';
import Collections from './components/Collections/Collections';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Review from './components/Review/Review';
import Shop from './components/Shop/Shop';
import { store } from './redux/store';
import { useState } from 'react';
import Cart from './components/Cart/Cart';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <div>
      <Provider store={store}>
        <Navbar setShowCart={setShowCart} />

        {showCart && <Cart setShowCart={setShowCart} />}

        <div id="home">
          <Home />
        </div>
        <div id="shop">
          <Shop />
        </div>

        <Collections />

        <div id="features">
          <Features />
        </div>

        <div id="products">
          <Products />
        </div>

        <div id="review">
          <Review />
        </div>

        <Footer />

        <Toaster position="bottom-center" reverseOrder={false} />
      </Provider>
    </div>
  );
};
export default App;
