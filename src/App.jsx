import ContactCard from './Components/ContactCard';
import Main from './Components/Main';
import './styles/main.css';

function App() {

  return (
    <div className='flex content-center gap-3 h-screen items-center mx-5'>
      <ContactCard/>
      <Main/>
    </div>
  )
}

export default App
