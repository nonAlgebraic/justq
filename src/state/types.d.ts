import type { StateSchema, EventObject } from 'xstate';

import type { User, Room } from '../types';

export interface Schema extends StateSchema {
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
          };
        };
        leaving: {};
      };
    };
    disconnecting: {};
  };
}

export interface Context {
  identity?: Pick<User, 'id' | 'name'>;
  room?: Room['id'];
  queuePosition?: number;
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

export type Event =
  | ConnectEvent
  | DisconnectEvent
  | JoinEvent
  | LeaveEvent
  | EnqueueEvent
  | DequeueEvent;
