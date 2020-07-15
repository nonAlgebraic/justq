import { Machine } from 'xstate';
import { GraphQLClient } from 'graphql-request';
import type { Context, Schema, Event } from './types';
import {
  connect,
  join,
  enqueue,
  dequeue,
  leave,
  disconnect,
} from './services.js';
import { setIdentity, setQueuePosition } from './actions.js';

export default Machine<Context, Schema, Event>({
  context: {
    gqlClient: new GraphQLClient('https://justq.herokuapp.com/v1/graphql', {
      headers: {
        'X-Hasura-Role': 'user',
      },
    }),
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
            enqueueing: {
              invoke: {
                src: enqueue,
                onDone: 'queued',
              },
            },
            queued: {
              on: {
                DEQUEUE: {
                  target: 'dequeueing',
                },
              },
            },
            dequeueing: {
              invoke: {
                src: dequeue,
                onDone: {
                  target: 'idle',
                  actions: setQueuePosition,
                },
              },
            },
            leaving: {},
          },
          on: {
            LEAVE: {
              target: 'leaving',
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
    },
  },
});
