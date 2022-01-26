import Footer from 'components/footer/Footer';
import Navbar from 'components/navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from 'routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
