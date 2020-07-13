import { assign } from '@xstate/immer';
import type { Context } from './types';
import type { ConnectDoneEvent } from './services';

export const setIdentity = assign<Context, ConnectDoneEvent>(
  (ctx, { data: { id, name } }) => {
    ctx.identity = {
      id,
      name,
    };
  }
);
