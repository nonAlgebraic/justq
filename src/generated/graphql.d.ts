export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  uuid: any;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "queue" */
  delete_queue?: Maybe<Queue_Mutation_Response>;
  /** delete single row from the table: "queue" */
  delete_queue_by_pk?: Maybe<Queue>;
  /** delete data from the table: "room" */
  delete_room?: Maybe<Room_Mutation_Response>;
  /** delete single row from the table: "room" */
  delete_room_by_pk?: Maybe<Room>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "queue" */
  insert_queue?: Maybe<Queue_Mutation_Response>;
  /** insert a single row into the table: "queue" */
  insert_queue_one?: Maybe<Queue>;
  /** insert data into the table: "room" */
  insert_room?: Maybe<Room_Mutation_Response>;
  /** insert a single row into the table: "room" */
  insert_room_one?: Maybe<Room>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "queue" */
  update_queue?: Maybe<Queue_Mutation_Response>;
  /** update single row of the table: "queue" */
  update_queue_by_pk?: Maybe<Queue>;
  /** update data of the table: "room" */
  update_room?: Maybe<Room_Mutation_Response>;
  /** update single row of the table: "room" */
  update_room_by_pk?: Maybe<Room>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
};


/** mutation root */
export type Mutation_RootDelete_QueueArgs = {
  where: Queue_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Queue_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_RoomArgs = {
  where: Room_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Room_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_QueueArgs = {
  objects: Array<Queue_Insert_Input>;
  on_conflict?: Maybe<Queue_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Queue_OneArgs = {
  object: Queue_Insert_Input;
  on_conflict?: Maybe<Queue_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RoomArgs = {
  objects: Array<Room_Insert_Input>;
  on_conflict?: Maybe<Room_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Room_OneArgs = {
  object: Room_Insert_Input;
  on_conflict?: Maybe<Room_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_QueueArgs = {
  _set?: Maybe<Queue_Set_Input>;
  where: Queue_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Queue_By_PkArgs = {
  _set?: Maybe<Queue_Set_Input>;
  pk_columns: Queue_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RoomArgs = {
  _set?: Maybe<Room_Set_Input>;
  where: Room_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Room_By_PkArgs = {
  _set?: Maybe<Room_Set_Input>;
  pk_columns: Room_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: Maybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "queue" */
  queue: Array<Queue>;
  /** fetch aggregated fields from the table: "queue" */
  queue_aggregate: Queue_Aggregate;
  /** fetch data from the table: "queue" using primary key columns */
  queue_by_pk?: Maybe<Queue>;
  /** fetch data from the table: "room" */
  room: Array<Room>;
  /** fetch aggregated fields from the table: "room" */
  room_aggregate: Room_Aggregate;
  /** fetch data from the table: "room" using primary key columns */
  room_by_pk?: Maybe<Room>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


/** query root */
export type Query_RootQueueArgs = {
  distinct_on?: Maybe<Array<Queue_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Queue_Order_By>>;
  where?: Maybe<Queue_Bool_Exp>;
};


/** query root */
export type Query_RootQueue_AggregateArgs = {
  distinct_on?: Maybe<Array<Queue_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Queue_Order_By>>;
  where?: Maybe<Queue_Bool_Exp>;
};


/** query root */
export type Query_RootQueue_By_PkArgs = {
  id: Scalars['String'];
};


/** query root */
export type Query_RootRoomArgs = {
  distinct_on?: Maybe<Array<Room_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Room_Order_By>>;
  where?: Maybe<Room_Bool_Exp>;
};


/** query root */
export type Query_RootRoom_AggregateArgs = {
  distinct_on?: Maybe<Array<Room_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Room_Order_By>>;
  where?: Maybe<Room_Bool_Exp>;
};


/** query root */
export type Query_RootRoom_By_PkArgs = {
  id: Scalars['String'];
};


/** query root */
export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** query root */
export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** query root */
export type Query_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "queue" */
export type Queue = {
  __typename?: 'queue';
  id: Scalars['String'];
  /** An object relationship */
  room: Room;
  /** An array relationship */
  users: Array<User>;
  /** An aggregated array relationship */
  users_aggregate: User_Aggregate;
};


/** columns and relationships of "queue" */
export type QueueUsersArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** columns and relationships of "queue" */
export type QueueUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** aggregated selection of "queue" */
export type Queue_Aggregate = {
  __typename?: 'queue_aggregate';
  aggregate?: Maybe<Queue_Aggregate_Fields>;
  nodes: Array<Queue>;
};

/** aggregate fields of "queue" */
export type Queue_Aggregate_Fields = {
  __typename?: 'queue_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Queue_Max_Fields>;
  min?: Maybe<Queue_Min_Fields>;
};


/** aggregate fields of "queue" */
export type Queue_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Queue_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "queue" */
export type Queue_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Queue_Max_Order_By>;
  min?: Maybe<Queue_Min_Order_By>;
};

/** input type for inserting array relation for remote table "queue" */
export type Queue_Arr_Rel_Insert_Input = {
  data: Array<Queue_Insert_Input>;
  on_conflict?: Maybe<Queue_On_Conflict>;
};

/** Boolean expression to filter rows from the table "queue". All fields are combined with a logical 'AND'. */
export type Queue_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Queue_Bool_Exp>>>;
  _not?: Maybe<Queue_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Queue_Bool_Exp>>>;
  id?: Maybe<String_Comparison_Exp>;
  room?: Maybe<Room_Bool_Exp>;
  users?: Maybe<User_Bool_Exp>;
};

/** unique or primary key constraints on table "queue" */
export enum Queue_Constraint {
  /** unique or primary key constraint */
  QueuesPkey = 'queues_pkey',
  /** unique or primary key constraint */
  QueuesRoomIdKey = 'queues_roomId_key'
}

/** input type for inserting data into table "queue" */
export type Queue_Insert_Input = {
  id?: Maybe<Scalars['String']>;
  room?: Maybe<Room_Obj_Rel_Insert_Input>;
  users?: Maybe<User_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Queue_Max_Fields = {
  __typename?: 'queue_max_fields';
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "queue" */
export type Queue_Max_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Queue_Min_Fields = {
  __typename?: 'queue_min_fields';
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "queue" */
export type Queue_Min_Order_By = {
  id?: Maybe<Order_By>;
};

/** response of any mutation on the table "queue" */
export type Queue_Mutation_Response = {
  __typename?: 'queue_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Queue>;
};

/** input type for inserting object relation for remote table "queue" */
export type Queue_Obj_Rel_Insert_Input = {
  data: Queue_Insert_Input;
  on_conflict?: Maybe<Queue_On_Conflict>;
};

/** on conflict condition type for table "queue" */
export type Queue_On_Conflict = {
  constraint: Queue_Constraint;
  update_columns: Array<Queue_Update_Column>;
  where?: Maybe<Queue_Bool_Exp>;
};

/** ordering options when selecting data from "queue" */
export type Queue_Order_By = {
  id?: Maybe<Order_By>;
  room?: Maybe<Room_Order_By>;
  users_aggregate?: Maybe<User_Aggregate_Order_By>;
};

/** primary key columns input for table: "queue" */
export type Queue_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "queue" */
export enum Queue_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "queue" */
export type Queue_Set_Input = {
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "queue" */
export enum Queue_Update_Column {
  /** column name */
  Id = 'id'
}

/** columns and relationships of "room" */
export type Room = {
  __typename?: 'room';
  id: Scalars['String'];
  /** An object relationship */
  queue?: Maybe<Queue>;
  /** An array relationship */
  users: Array<User>;
  /** An aggregated array relationship */
  users_aggregate: User_Aggregate;
};


/** columns and relationships of "room" */
export type RoomUsersArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** columns and relationships of "room" */
export type RoomUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** aggregated selection of "room" */
export type Room_Aggregate = {
  __typename?: 'room_aggregate';
  aggregate?: Maybe<Room_Aggregate_Fields>;
  nodes: Array<Room>;
};

/** aggregate fields of "room" */
export type Room_Aggregate_Fields = {
  __typename?: 'room_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Room_Max_Fields>;
  min?: Maybe<Room_Min_Fields>;
};


/** aggregate fields of "room" */
export type Room_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Room_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "room" */
export type Room_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Room_Max_Order_By>;
  min?: Maybe<Room_Min_Order_By>;
};

/** input type for inserting array relation for remote table "room" */
export type Room_Arr_Rel_Insert_Input = {
  data: Array<Room_Insert_Input>;
  on_conflict?: Maybe<Room_On_Conflict>;
};

/** Boolean expression to filter rows from the table "room". All fields are combined with a logical 'AND'. */
export type Room_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Room_Bool_Exp>>>;
  _not?: Maybe<Room_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Room_Bool_Exp>>>;
  id?: Maybe<String_Comparison_Exp>;
  queue?: Maybe<Queue_Bool_Exp>;
  users?: Maybe<User_Bool_Exp>;
};

/** unique or primary key constraints on table "room" */
export enum Room_Constraint {
  /** unique or primary key constraint */
  RoomPkey = 'room_pkey'
}

/** input type for inserting data into table "room" */
export type Room_Insert_Input = {
  id?: Maybe<Scalars['String']>;
  queue?: Maybe<Queue_Obj_Rel_Insert_Input>;
  users?: Maybe<User_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Room_Max_Fields = {
  __typename?: 'room_max_fields';
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "room" */
export type Room_Max_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Room_Min_Fields = {
  __typename?: 'room_min_fields';
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "room" */
export type Room_Min_Order_By = {
  id?: Maybe<Order_By>;
};

/** response of any mutation on the table "room" */
export type Room_Mutation_Response = {
  __typename?: 'room_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Room>;
};

/** input type for inserting object relation for remote table "room" */
export type Room_Obj_Rel_Insert_Input = {
  data: Room_Insert_Input;
  on_conflict?: Maybe<Room_On_Conflict>;
};

/** on conflict condition type for table "room" */
export type Room_On_Conflict = {
  constraint: Room_Constraint;
  update_columns: Array<Room_Update_Column>;
  where?: Maybe<Room_Bool_Exp>;
};

/** ordering options when selecting data from "room" */
export type Room_Order_By = {
  id?: Maybe<Order_By>;
  queue?: Maybe<Queue_Order_By>;
  users_aggregate?: Maybe<User_Aggregate_Order_By>;
};

/** primary key columns input for table: "room" */
export type Room_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "room" */
export enum Room_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "room" */
export type Room_Set_Input = {
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "room" */
export enum Room_Update_Column {
  /** column name */
  Id = 'id'
}

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "queue" */
  queue: Array<Queue>;
  /** fetch aggregated fields from the table: "queue" */
  queue_aggregate: Queue_Aggregate;
  /** fetch data from the table: "queue" using primary key columns */
  queue_by_pk?: Maybe<Queue>;
  /** fetch data from the table: "room" */
  room: Array<Room>;
  /** fetch aggregated fields from the table: "room" */
  room_aggregate: Room_Aggregate;
  /** fetch data from the table: "room" using primary key columns */
  room_by_pk?: Maybe<Room>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


/** subscription root */
export type Subscription_RootQueueArgs = {
  distinct_on?: Maybe<Array<Queue_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Queue_Order_By>>;
  where?: Maybe<Queue_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQueue_AggregateArgs = {
  distinct_on?: Maybe<Array<Queue_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Queue_Order_By>>;
  where?: Maybe<Queue_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQueue_By_PkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootRoomArgs = {
  distinct_on?: Maybe<Array<Room_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Room_Order_By>>;
  where?: Maybe<Room_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRoom_AggregateArgs = {
  distinct_on?: Maybe<Array<Room_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Room_Order_By>>;
  where?: Maybe<Room_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRoom_By_PkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An object relationship */
  queue?: Maybe<Queue>;
  queueId?: Maybe<Scalars['String']>;
  /** An object relationship */
  room: Room;
  roomId: Scalars['String'];
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user" */
export type User_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<User_Max_Order_By>;
  min?: Maybe<User_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  queue?: Maybe<Queue_Bool_Exp>;
  queueId?: Maybe<String_Comparison_Exp>;
  room?: Maybe<Room_Bool_Exp>;
  roomId?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UsersIdKey = 'users_id_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  queue?: Maybe<Queue_Obj_Rel_Insert_Input>;
  queueId?: Maybe<Scalars['String']>;
  room?: Maybe<Room_Obj_Rel_Insert_Input>;
  roomId?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  queueId?: Maybe<Scalars['String']>;
  roomId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "user" */
export type User_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  queueId?: Maybe<Order_By>;
  roomId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  queueId?: Maybe<Scalars['String']>;
  roomId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "user" */
export type User_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  queueId?: Maybe<Order_By>;
  roomId?: Maybe<Order_By>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

/** ordering options when selecting data from "user" */
export type User_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  queue?: Maybe<Queue_Order_By>;
  queueId?: Maybe<Order_By>;
  room?: Maybe<Room_Order_By>;
  roomId?: Maybe<Order_By>;
};

/** primary key columns input for table: "user" */
export type User_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  QueueId = 'queueId',
  /** column name */
  RoomId = 'roomId'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  queueId?: Maybe<Scalars['String']>;
  roomId?: Maybe<Scalars['String']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  QueueId = 'queueId',
  /** column name */
  RoomId = 'roomId'
}


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

