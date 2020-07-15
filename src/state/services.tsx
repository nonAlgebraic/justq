import type { ConnectEvent, JoinEvent, Event, Context } from './types';

import getClient from '../getClient.js';

export const connect = async (_context: Context, event: Event) => {
  const { insert_user_one } = await getClient().Connect({
    name: (event as ConnectEvent).name,
  });
  if (!insert_user_one) {
    throw new Error('could not insert user');
  }

  const { name, id } = insert_user_one;
  return { name, id };
};

const doJoinDequeue = async (
  userId: Context['identity']['id'],
  roomId: Context['room']
) => {
  const { update_user_by_pk } = await getClient().JoinDequeue({
    userId,
    roomId,
  });

  if (!update_user_by_pk?.roomId) {
    throw new Error('could not update user to join room/dequeue');
  }
};

export const join = async (
  { identity: { id: userId } }: Context,
  event: Event
) => {
  const { roomId } = event as JoinEvent;
  const { room_by_pk } = await getClient().DoesRoomExist({
    id: roomId,
  });

  if (!room_by_pk) {
    const { insert_room_one, insert_queue_one } = await getClient().CreateRoom({
      id: roomId,
    });

    if (!insert_room_one || insert_queue_one) {
      throw new Error('could not insert room');
    }
  }

  await doJoinDequeue(userId, roomId);

  return roomId;
};

export const enqueue = async ({
  identity: { id: userId },
  room: roomId,
}: Context) => {
  const { update_user_by_pk } = await getClient().Enqueue({
    userId,
    roomId,
  });

  if (!update_user_by_pk) {
    throw new Error('could not update user to enqueue');
  }
};

export const dequeue = async ({
  identity: { id: userId },
  room: roomId,
}: Context) => {
  await doJoinDequeue(userId, roomId);
  return { position: -1 };
};

export const leave = async ({ identity: { id } }: Context) => {
  const { update_user_by_pk } = await getClient().Leave({
    id,
  });

  if (!update_user_by_pk) {
    throw new Error('could not update user to leave room');
  }
};

export const disconnect = async ({ identity: { id } }: Context) => {
  const { delete_user_by_pk } = await getClient().Disconnect({
    id: id,
  });

  if (!delete_user_by_pk) {
    throw new Error('could not delete user');
  }
};
