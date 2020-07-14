import { Machine } from 'xstate';
import type { Context, Schema, Event } from './types';
import { connect, join } from './services.js';
import { setIdentity } from './actions.js';

export default Machine<Context, Schema, Event>({
  context: {
    identity: {
      id: '',
      name: '',
    },
    room: '',
    queuePosition: -1,
  },
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
        joining: {
          invoke: {
            src: join,
            onDone: {
              target: 'present',
            },
          },
        },
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
            leaving: {},
          },
          on: {
            DEQUEUE: {
              target: 'present.dequeueing',
            },
          },
        },
        disconnecting: {},
      },
      on: {
        LEAVE: {
          target: 'connected.present.leaving',
        },
      },
    },
  },
  on: {
    DISCONNECT: {
      target: 'connected.disconnecting',
    },
  },
});
