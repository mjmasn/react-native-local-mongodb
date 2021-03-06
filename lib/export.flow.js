/**
 * Flowtype definitions for typings
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.5.8
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module "react-native-local-mongodb" {
  declare export interface Options {
    filename?: string;
    inMemoryOnly?: boolean;
    timestampData?: boolean;
    autoload?: boolean;
    onload?: Function;
    afterSerialization?: Function;
    beforeDeserialization?: Function;
    corruptAlertThreshold?: number;
    compareStrings?: Function;
  }
  declare export interface IndexOptions {
    fieldName: string;
    unique?: boolean;
    sparse?: boolean;
    expireAfterSeconds?: number;
  }
  declare export interface UpdateOptions {
    multi?: boolean;
    upsert?: boolean;
    returnUpdatedDocs?: boolean;
  }
  declare export interface RemoveOptions {
    multi?: boolean;
  }
  declare export interface MongoDocument {
    [key: string]: any;
  }
  declare export interface Cursor<T> {
    exec(): Promise<T>;
    exec(cb: Callback<T>): void;
    skip(value: number): Cursor<T>;
    limit(value: number): Cursor<T>;
    sort(doc: MongoDocument): Cursor<T>;
  }
  declare export type Query = { [key: string]: any };
  declare export type Projection = any;
  declare export type Callback<T = void> = (
    err: Error | null,
    value: T
  ) => void;
  declare export type InsertCallback = (
    err: Error | null,
    doc: MongoDocument
  ) => void;
  declare export type CountCallback = (
    err: Error | null,
    count: number
  ) => void;
  declare export type FindCallback = (
    err: Error | null,
    docs: MongoDocument[]
  ) => void;
  declare export type FindOneCallback = (
    err: Error | null,
    doc: MongoDocument
  ) => void;
  declare export type UpdateCallback = (
    err: Error | null,
    numAffected: number,
    affectedDocuments: MongoDocument | MongoDocument[] | null,
    upsert: boolean
  ) => void;
  declare export type RemoveCallback = (
    err: Error | null,
    numAffected: number
  ) => void;
  declare export default class Datastore {
    constructor(options?: Options): this;
    loadDatabase(): void;
    getAllData(): any[];
    resetIndexes(newData: any): void;
    ensureIndex(options: IndexOptions, callback?: Callback): void;
    removeIndex(fieldName: string, callback?: Callback): void;
    addToIndexes(doc: MongoDocument): void;
    removeFromIndexes(doc: MongoDocument): void;
    updateIndexes(oldDoc: MongoDocument, newDoc: MongoDocument): void;
    getCandidates(
      query: Query,
      dontExpireStaleDocs: boolean,
      callback?: Callback
    ): void;
    insert(newDoc: MongoDocument, cb: InsertCallback): void;
    createNewId(): number;
    count(query: Query): Cursor<number>;
    count(query: Query, callback: Callback<number>): void;
    find(query: Query): Cursor<MongoDocument[]>;
    find(query: Query, projection: Projection): Cursor<MongoDocument[]>;
    find(
      query: Query,
      projection: Projection,
      callback: Callback<MongoDocument[]>
    ): void;
    findOne(query: Query): Cursor<MongoDocument>;
    findOne(query: Query, projection: Projection): Cursor<MongoDocument>;
    findOne(
      query: Query,
      projection: Projection,
      callback: Callback<MongoDocument>
    ): void;
    update(
      query: Query,
      doc: MongoDocument,
      options?: UpdateOptions,
      callback?: UpdateCallback
    ): void;
    remove(
      query: Query,
      options?: RemoveOptions,
      callback?: RemoveCallback
    ): void;
    loadDatabaseAsync(): Promise<void>;
    findAsync(query: Query): Promise<MongoDocument[]>;
    findOneAsync(query: Query): Promise<MongoDocument>;
    insertAsync(newDoc: MongoDocument): Promise<MongoDocument>;
    updateAsync(
      query: Query,
      doc: MongoDocument,
      options?: UpdateOptions
    ): Promise<MongoDocument>;
    removeAsync(query: Query, options?: RemoveOptions): Promise<number>;
  }
}
