import { assign } from '@xstate/immer';
import { GraphQLClient } from 'graphql-request';
import { getSdk } from '../generated/graphql.js';
import type { Context, DoneEvent, UpdateQueuePositionEvent } from './types';

export const setIdentity = assign<
  Context,
  DoneEvent<typeof import('./services')['connect']>
>((ctx, { data: { id, name } }) => {
  ctx.identity = {
    id,
    name,
  };
  ctx.gqlClient = getSdk(
    new GraphQLClient('https://justq.herokuapp.com/v1/graphql', {
      headers: {
        'X-Hasura-Role': 'user',
        'X-Hasura-User-Id': id,
      },
    })
  );
});

export const setRoom = assign<
  Context,
  DoneEvent<typeof import('./services')['join']>
>((ctx, { data: roomId }) => {
  console.log({ roomId });
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
