import { assign } from '@xstate/immer';
import type { Context, DoneEvent } from './types';

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
