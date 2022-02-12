import pizzdeeApi from 'api/pizzdeeApi';
import Footer from 'components/footer/Footer';
import Navbar from 'components/navbar/Navbar';
import { initialStorageCart } from 'features/cart/cartSlice';
import { setUser } from 'features/user/userSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from 'routes/AppRoutes';
import { authenticatedSession } from 'utils/handleAuthenticatedSession';

function App() {
  const dispatch = useDispatch();

  // load storage
  useEffect(() => {
    dispatch(initialStorageCart());
  }, []);

  // check authenticated user
  const getMeUser = async () => {
    const response = await pizzdeeApi.getMe();
    dispatch(setUser(response))
  }
  useEffect(() => {
    if(authenticatedSession){
      getMeUser();
    }
  }, [])
  

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
