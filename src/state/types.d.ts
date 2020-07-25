import type { StateSchema, EventObject, InvokeCreator } from 'xstate';
import type { getSdk } from '../generated/graphql';

import type { User, Room } from '../types';

interface Schema extends StateSchema {
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

interface Context {
  gqlClient: ReturnType<typeof getSdk>;
  identity: Pick<User, 'id' | 'name'>;
  room: Room['id'];
  queuePosition: number;
}

interface ConnectEvent extends EventObject {
  type: 'CONNECT';
  name: User['name'];
}

interface JoinEvent extends EventObject {
  type: 'JOIN';
  roomId: Room['id'];
}

interface EnqueueEvent extends EventObject {
  type: 'ENQUEUE';
}

interface UpdateQueuePositionEvent extends EventObject {
  type: `UPDATE_QUEUE_POSITION`;
  position: number;
}

interface DequeueEvent extends EventObject {
  type: 'DEQUEUE';
}

interface LeaveEvent extends EventObject {
  type: 'LEAVE';
}

interface DisconnectEvent extends EventObject {
  type: 'DISCONNECT';
}

interface DoneEvent<Service extends InvokeCreator<Context, Event>> {
  type: string;
  data: ReturnType<Service> extends PromiseLike<infer Data> ? Data : string;
}

type Event =
  | ConnectEvent
  | JoinEvent
  | EnqueueEvent
  | UpdateQueuePositionEvent
  | DequeueEvent
  | LeaveEvent
  | DisconnectEvent;
