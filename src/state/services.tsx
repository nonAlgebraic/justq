import type { ConnectEvent, JoinEvent, Event, Context } from './types';

export const connect = async ({ gqlClient }: Context, event: Event) => {
  const { insert_user_one } = await gqlClient.Connect({
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
  roomId: Context['room'],
  gqlClient: Context['gqlClient']
) => {
  const { update_user_by_pk } = await gqlClient.JoinDequeue({
    userId,
    roomId,
  });

  if (!update_user_by_pk?.roomId) {
    throw new Error('could not update user to join room/dequeue');
  }
};

export const join = async (
  { identity: { id: userId }, gqlClient }: Context,
  event: Event
) => {
  const { roomId } = event as JoinEvent;
  const { room_by_pk } = await gqlClient.DoesRoomExist({
    id: roomId,
  });

  if (!room_by_pk) {
    const { insert_room_one, insert_queue_one } = await gqlClient.CreateRoom({
      id: roomId,
    });

    if (!insert_room_one || !insert_queue_one) {
      throw new Error('could not insert room');
    }
  }

  await doJoinDequeue(userId, roomId, gqlClient);

  return roomId;
};

export const enqueue = async ({
  identity: { id: userId },
  room: roomId,
  gqlClient,
}: Context) => {
  const { update_user_by_pk } = await gqlClient.Enqueue({
    userId,
    roomId,
  });

  if (!update_user_by_pk) {
    throw new Error('could not update user to enqueue');
  }

  const result = await gqlClient.GetUsersInRoom({
    id: roomId,
  });

  console.log({ result });
};

export const dequeue = async ({
  identity: { id: userId },
  room: roomId,
  gqlClient,
}: Context) => {
  await doJoinDequeue(userId, roomId, gqlClient);
  return { position: -1 };
};

export const leave = async ({ identity: { id }, gqlClient }: Context) => {
  const { update_user_by_pk } = await gqlClient.Leave({
    id,
  });

  if (!update_user_by_pk) {
    throw new Error('could not update user to leave room');
  }
};

export const disconnect = async ({ identity: { id }, gqlClient }: Context) => {
  const { delete_user_by_pk } = await gqlClient.Disconnect({
    id: id,
  });

  if (!delete_user_by_pk) {
    throw new Error('could not delete user');
  }
};
