import ContactCard from './Components/ContactCard';
import Main from './Components/Main';
import './styles/main.css';
import { BrowserRouter } from 'react-router-dom'; 

function App() {
  return (
    <BrowserRouter>
      <div className='flex items-center h-screen mx-5'>
        <div className="  h-full items-center flex">
          <ContactCard />
        </div>
        <div className=" h-full">
          <Main />
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
