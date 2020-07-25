import React, { FC } from 'react';
import { useMachine } from '@xstate/react';
import * as styles from './App.styles.js';
import UserMachine from '../state/UserMachine.js';

const App: FC = () => {
  const [state, send] = useMachine(UserMachine);

  return (
    <>
      <button
        onClick={() => {
          send({
            type: 'CONNECT',
            name: 'sine',
          });
        }}
      >
        connect
      </button>
      <button
        onClick={() => {
          send({
            type: 'JOIN',
            roomId: 'my-cool-room',
          });
        }}
      >
        join
      </button>
      <button
        onClick={() => {
          send({
            type: 'ENQUEUE',
          });
        }}
      >
        enqueue
      </button>
      <div className={styles.root}>Hello, {state.context.identity?.name}!</div>
      <div>{state.toStrings().pop()}</div>
    </>
  );
};

export default App;
