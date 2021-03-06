import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './Join.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className={classes.joinOuterContainer}>
      <Header />
      <div className={classes.joinInnerContainer}>
        <h1>
          Samvaad : A place to chat with your friends & family. To get started,
          enter the username and Room Code and then click Sign In to enter in
          your room and start chatting.
        </h1>
        <h3>Create Room or Login to the Сhat</h3>
        <div>
          <input
            placeholder='Enter Your Name'
            className={classes.joinInput}
            type='text'
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder='Enter the Room Name'
            className={classes.joinInput + ' ' + classes.mt20}
            type='text'
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button
            className={
              classes.button +
              ' ' +
              classes.mt20 +
              ' ' +
              (!name || !room ? classes.disabled : '')
            }
            type='submit'
          >
            Sign In
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Join;
