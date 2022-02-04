import Footer from 'components/footer/Footer';
import Navbar from 'components/navbar/Navbar';
import { initialStorageCart } from 'features/cart/cartSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from 'routes/AppRoutes';

function App() {
  const dispatch = useDispatch();

  // load storage
  useEffect(() => {
    dispatch(initialStorageCart());
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <div style={{
        flexGrow: 1
      }}>
        <AppRoutes />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
