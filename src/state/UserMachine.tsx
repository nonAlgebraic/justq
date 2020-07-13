import { Machine } from 'xstate';
import type { Context, Schema, Event } from './types';
import { connect } from './services.js';
import { setIdentity } from './actions.js';

export default Machine<Context, Schema, Event>({
  initial: 'disconnected',
  states: {
    disconnected: {
      on: {
        CONNECT: {
          target: 'connecting',
        },
      },
    },
    connecting: {
      invoke: {
        src: connect,
        onDone: {
          target: 'connected',
          actions: setIdentity,
        },
      },
    },
    connected: {
      initial: 'absent',
      states: {
        absent: {
          on: {
            JOIN: {
              target: 'joining',
            },
          },
        },
        joining: {},
        present: {
          initial: 'idle',
          states: {
            idle: {
              on: {
                ENQUEUE: {
                  target: 'enqueueing',
                },
              },
            },
            enqueueing: {},
            queued: {},
            dequeueing: {},
          },
          on: {
            DEQUEUE: {
              target: 'present.dequeueing',
            },
          },
        },
        leaving: {},
      },
      on: {
        LEAVE: {
          target: 'connected.leaving',
        },
      },
    },
    disconnecting: {},
  },
  on: {
    DISCONNECT: {
      target: 'disconnecting',
    },
  },
});
