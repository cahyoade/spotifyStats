import { useEffect, useState, useRef } from 'react'
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Music from './pages/Music';
import Artists from './pages/Artists';
import Profile from './pages/Profile';

function App() {
  const [page, setPage] = useState('music');
  const accessToken = useRef("");

  const urlToken = window.location.hash.substr(1).split('&').map( x => x.split('='))[0][1];
  if(urlToken){
    accessToken.current = urlToken;
  }

  return (
      <>
      <div className='page w-screen bg-black font-sans'>{accessToken.current ? page == 'music' ? <Music accessToken={accessToken.current}/> : page == 'artist' ? <Artists accessToken={accessToken.current}/> : <Profile accessToken={accessToken.current} /> : <Login />}</div>
        {accessToken.current ? <Navbar setPage={setPage} page={page} /> : <></>}
      </>
  )
}

export default App
