import ContactCard from './Components/ContactCard';
import Main from './Components/Main';
import './styles/main.css';
import { BrowserRouter } from 'react-router-dom'; // Importa BrowserRouter

function App() {

  return (
    <BrowserRouter>
      <div className='flex content-center gap-3 h-screen items-center mx-5'>
        <ContactCard />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
