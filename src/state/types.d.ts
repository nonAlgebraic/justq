import type { StateSchema, EventObject, InvokeCreator } from 'xstate';

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
  identity: Pick<User, 'id' | 'name'>;
  room: Room['id'];
  queuePosition: number;
}

interface ConnectEvent extends EventObject {
  type: 'CONNECT';
  name: User['name'];
}

interface DisconnectEvent extends EventObject {
  type: 'DISCONNECT';
}

interface JoinEvent extends EventObject {
  type: 'JOIN';
  roomId: Room['id'];
}

interface LeaveEvent extends EventObject {
  type: 'LEAVE';
}

interface EnqueueEvent extends EventObject {
  type: 'ENQUEUE';
}

interface DequeueEvent extends EventObject {
  type: 'DEQUEUE';
}

type Event =
  | ConnectEvent
  | DisconnectEvent
  | JoinEvent
  | LeaveEvent
  | EnqueueEvent
  | DequeueEvent;

interface DoneEvent<T extends InvokeCreator<Context, Event>> {
  type: string;
  data: ReturnType<T> extends PromiseLike<infer U> ? U : string;
}
