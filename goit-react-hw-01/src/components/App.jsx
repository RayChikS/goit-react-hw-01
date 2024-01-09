import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import userData from '../userData.json';
import friends from '../friends.json';
import {Profile} from './Profile.jsx';
import { FriendList } from './FriendList.jsx';


function App() {
  
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
}

export default App
