import type { InvokeCreator } from 'xstate';
import type { ConnectEvent, Event, Context } from './types';

import Client from '../GqlClient.js';

export interface DoneEvent<T extends InvokeCreator<Context, Event>> {
  type: string;
  data: ReturnType<T> extends PromiseLike<infer U> ? U : string;
}

export const connect = async (_context: Context, event: Event) => {
  try {
    const { insert_user: result } = await Client.Connect({
      name: (event as ConnectEvent).name,
    });
    if (!result?.returning[0]) {
      throw new Error('no results');
    }

    debugger;

    return result?.returning[0];
  } catch (e) {
    debugger;
    throw e;
  }
};

export type ConnectDoneEvent = DoneEvent<typeof connect>;
