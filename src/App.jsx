import pizzdeeApi from 'api/pizzdeeApi';
import Footer from 'components/footer/Footer';
import Navbar from 'components/navbar/Navbar';
import { initialStorageCart } from 'features/cart/cartSlice';
import { setUser } from 'features/user/userSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from 'routes/AppRoutes';
import styled from 'styled-components';
import { authenticatedCookie } from 'utils/handleAuthenticatedCookie';

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
    if(authenticatedCookie){
      getMeUser();
    }
  }, [])
  

  return (
    <BrowserRouter>
      <Navbar />
      <Wrapper style={{
        flexGrow: 1
      }}>
        <AppRoutes />
      </Wrapper>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: stretch;
`;
