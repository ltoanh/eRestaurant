import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from 'routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
