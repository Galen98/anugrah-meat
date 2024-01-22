import './index.css';
import Nav from './Components/Nav';
import Header from './Components/Header';
import Body from './Components/Body';
import Produk from './Components/Produk';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <main className="bg-white dark:bg-gray-900 antialiased">
    <Nav/>
    <Header/>
    <Body/>
    <Produk/>
    <Contact/>
    <Footer/>    
    </main>
    </>
  );
}

export default App;
