import {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import Ctrl from './components/Ctrl';
import Z from './components/Z';
import CtrlDeluxe from './components/CtrlDeluxe';
import Sos from './components/Sos';
// import {motion} from "framer-motion";



function App() {
  // const [data, setData] = useState(null);
  // const [fruit, setFruit] = useState(null);
  const [album, setAlbum] = useState(null);
  const [song, setSong] = useState(null);

  // useEffect(() => {
  //   fetch("/api")
  //     .then(res => res.json())
  //     .then(data => setData(data.message))
  //     .catch(error => console.log(error));
  // }, []);

  // useEffect(() => {
  //   fetch("/fruit")
  //     .then(res => res.json())
  //     .then(fruit => setFruit(fruit.name))
  //     .catch(error => console.log(error));
  // }, []);

  useEffect(() => {
    fetch("/album/0")
      .then(res => res.json())
      .then(album => {
        setAlbum(album["title"]);
        // start at first song in album by default
        setSong(album["items"][0]["name"]);
      })
      .catch(error => console.log("album error", error));
  }, []);

  // useEffect(() => {
  //   fetch("/song/0")
  //     .then(res => res.json())
  //     .then(song => setSong(album["items"][0]["name"]))
  //     .catch(error => console.log("song error", error));
  // }, []);

  const [landingVisible, setLandingVisible] = useState(true);
  const [sosVisible, setSosVisible] = useState(false);
  const [ctrlDeluxeVisible, setCtrlDeluxeVisible] = useState(false);
  const [ctrlVisible, setCtrlVisible] = useState(false);
  const [zVisible, setZVisible] = useState(false);
  const removeLanding = () => {
    setLandingVisible(false);
    setZVisible(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {landingVisible && <Landing removeLanding={removeLanding}/>}

        {zVisible && <Z/>}
        {ctrlVisible && <Ctrl/>}
        {ctrlDeluxeVisible && <CtrlDeluxe/>}
        {sosVisible && <Sos/>}
        {/* <h2>{!album ? "Loading..." : album}</h2>
        <h3>{!song ? "Loading..." : song}</h3> */}
      </header>
    </div>
  );
}

export default App;
