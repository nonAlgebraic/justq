import type { ConnectEvent, JoinEvent, Event, Context } from './types';

import Client from '../GqlClient.js';

export const connect = async (_context: Context, event: Event) => {
  const { insert_user_one } = await Client.Connect({
    name: (event as ConnectEvent).name,
  });
  if (!insert_user_one) {
    throw new Error('no results');
  }

  const { name, id } = insert_user_one;
  return { name, id };
};

export const join = async ({ identity }: Context, event: Event) => {
  const { roomId } = event as JoinEvent;
  const { room_by_pk } = await Client.DoesRoomExist({
    id: roomId,
  });

  if (!room_by_pk) {
    const { insert_room_one } = await Client.CreateRoom({
      id: roomId,
    });

    if (!insert_room_one) {
      throw new Error('could not create room');
    }
  }

  const { update_user_by_pk } = await Client.Join({
    userId: identity.id,
    roomId,
  });

  if (!update_user_by_pk?.roomId) {
    throw new Error('could not join room');
  }

  return update_user_by_pk.roomId;
};
