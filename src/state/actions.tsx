import { assign } from '@xstate/immer';
import type { Context, DoneEvent, UpdateQueuePositionEvent } from './types';

export const setIdentity = assign<
  Context,
  DoneEvent<typeof import('./services')['connect']>
>((ctx, { data: { id, name } }) => {
  ctx.identity = {
    id,
    name,
  };
});

export const setRoom = assign<
  Context,
  DoneEvent<typeof import('./services')['join']>
>((ctx, { data: roomId }) => {
  ctx.room = roomId;
});

export const setQueuePosition = assign<
  Context,
  UpdateQueuePositionEvent | DoneEvent<typeof import('./services')['dequeue']>
>((ctx, event) => {
  ctx.queuePosition =
    event.type === 'UPDATE_QUEUE_POSITION'
      ? (event as UpdateQueuePositionEvent).position
      : -1;
});
