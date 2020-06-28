import { Machine, StateSchema } from 'xstate';
import type { User, Room } from '../types';

interface UserStateSchema extends StateSchema {
  states: {
    disconnected: {};
    connecting: {};
    connected: {
      states: {
        absent: {};
        joining: {};
        present: {
          states: {
            idle: {};
            enqueueing: {};
            queued: {};
            dequeueing: {};
            leaving: {};
          };
        };
        disconnecting: {};
      };
    };
  };
}

interface UserContext {
  identity?: Pick<User, 'id' | 'name'>;
  room?: Room['id'];
  queuePosition?: number;
}

type UserEvent =
  | { type: 'CONNECT'; name: User['name'] }
  | { type: 'DISCONNECT' }
  | { type: 'JOIN'; roomId: Room['id'] }
  | { type: 'LEAVE' }
  | { type: 'ENQUEUE' }
  | { type: 'DEQUEUE' };

export default Machine<UserContext, UserStateSchema, UserEvent>({
  initial: 'disconnected',
  states: {
    disconnected: {
      on: {
        CONNECT: {
          target: 'connecting',
        },
      },
    },
    connecting: {},
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
            leaving: {},
          },
        },
        disconnecting: {},
      },
    },
  },
});
