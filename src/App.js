import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';
import Myself from './components/Myself';
import Tadao from './components/Tadao';
import Technology from './components/Technology';
import Works from './components/Works';


function App() {
  const ids = [
    'myself',
    'works',
    'technology',
    'contact'
  ];

  return (
    <div>
      <Header ids={ids}/>
      <Tadao ids={ids}/>
      <Myself ids={ids}/>
      <Works ids={ids}/>
      <Technology ids={ids}/>
      <Contact ids={ids}/>
    </div>
  );
}

export default App;
