import { useLayoutEffect, useEffect, useState } from 'react';
import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';
import Myself from './components/Myself';
import Tadao from './components/Tadao';
import Technology from './components/Technology';
import Works from './components/Works';
import Sidebar from './components/Sidebar';



function App() {
  const ids = [
    'myself',
    'works',
    'technology',
    'contact'
  ];

  const [isShow, setIsShow] = useState(false);
  const handleClose = () => {
    setIsShow(false);
  }

  // 画面幅取得
  const useWindowSize = () => {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      const updateSize = () => {
        setSize([window.innerWidth, window.innerHeight]);
      };

      window.addEventListener("resize", updateSize);
      updateSize();

      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  };

  const [width, height] = useWindowSize();


  return (
    <div className='App'>
      <Header ids={ids} isShow={isShow} setIsShow={setIsShow} />
      <div className={isShow === true ? "masck" : "hide"} onClick={handleClose}></div>
      <Sidebar ids={ids} isShow={isShow} />
      <Tadao ids={ids} width={width}/>
      <Myself ids={ids}/>
      <Works ids={ids} width={width}/>
      <Technology ids={ids} />
      <Contact ids={ids} />
    </div>
  );
}

export default App;
