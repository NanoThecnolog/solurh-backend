
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Vaga
 * 
 */
export type Vaga = $Result.DefaultSelection<Prisma.$VagaPayload>
/**
 * Model Candidato
 * 
 */
export type Candidato = $Result.DefaultSelection<Prisma.$CandidatoPayload>
/**
 * Model Mensage
 * 
 */
export type Mensage = $Result.DefaultSelection<Prisma.$MensagePayload>
/**
 * Model Inscricao
 * 
 */
export type Inscricao = $Result.DefaultSelection<Prisma.$InscricaoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vaga`: Exposes CRUD operations for the **Vaga** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vagas
    * const vagas = await prisma.vaga.findMany()
    * ```
    */
  get vaga(): Prisma.VagaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.candidato`: Exposes CRUD operations for the **Candidato** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Candidatoes
    * const candidatoes = await prisma.candidato.findMany()
    * ```
    */
  get candidato(): Prisma.CandidatoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mensage`: Exposes CRUD operations for the **Mensage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mensages
    * const mensages = await prisma.mensage.findMany()
    * ```
    */
  get mensage(): Prisma.MensageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inscricao`: Exposes CRUD operations for the **Inscricao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inscricaos
    * const inscricaos = await prisma.inscricao.findMany()
    * ```
    */
  get inscricao(): Prisma.InscricaoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Vaga: 'Vaga',
    Candidato: 'Candidato',
    Mensage: 'Mensage',
    Inscricao: 'Inscricao'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "vaga" | "candidato" | "mensage" | "inscricao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Vaga: {
        payload: Prisma.$VagaPayload<ExtArgs>
        fields: Prisma.VagaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VagaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VagaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagaPayload>
          }
          findFirst: {
            args: Prisma.VagaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VagaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagaPayload>
          }
          findMany: {
            args: Prisma.VagaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagaPayload>[]
          }
          create: {
            args: Prisma.VagaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagaPayload>
          }
          createMany: {
            args: Prisma.VagaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VagaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagaPayload>[]
          }
          delete: {
            args: Prisma.VagaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagaPayload>
          }
          update: {
            args: Prisma.VagaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagaPayload>
          }
          deleteMany: {
            args: Prisma.VagaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VagaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VagaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagaPayload>[]
          }
          upsert: {
            args: Prisma.VagaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagaPayload>
          }
          aggregate: {
            args: Prisma.VagaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVaga>
          }
          groupBy: {
            args: Prisma.VagaGroupByArgs<ExtArgs>
            result: $Utils.Optional<VagaGroupByOutputType>[]
          }
          count: {
            args: Prisma.VagaCountArgs<ExtArgs>
            result: $Utils.Optional<VagaCountAggregateOutputType> | number
          }
        }
      }
      Candidato: {
        payload: Prisma.$CandidatoPayload<ExtArgs>
        fields: Prisma.CandidatoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CandidatoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CandidatoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatoPayload>
          }
          findFirst: {
            args: Prisma.CandidatoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CandidatoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatoPayload>
          }
          findMany: {
            args: Prisma.CandidatoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatoPayload>[]
          }
          create: {
            args: Prisma.CandidatoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatoPayload>
          }
          createMany: {
            args: Prisma.CandidatoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CandidatoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatoPayload>[]
          }
          delete: {
            args: Prisma.CandidatoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatoPayload>
          }
          update: {
            args: Prisma.CandidatoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatoPayload>
          }
          deleteMany: {
            args: Prisma.CandidatoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CandidatoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CandidatoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatoPayload>[]
          }
          upsert: {
            args: Prisma.CandidatoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatoPayload>
          }
          aggregate: {
            args: Prisma.CandidatoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidato>
          }
          groupBy: {
            args: Prisma.CandidatoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidatoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CandidatoCountArgs<ExtArgs>
            result: $Utils.Optional<CandidatoCountAggregateOutputType> | number
          }
        }
      }
      Mensage: {
        payload: Prisma.$MensagePayload<ExtArgs>
        fields: Prisma.MensageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MensageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MensageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagePayload>
          }
          findFirst: {
            args: Prisma.MensageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MensageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagePayload>
          }
          findMany: {
            args: Prisma.MensageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagePayload>[]
          }
          create: {
            args: Prisma.MensageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagePayload>
          }
          createMany: {
            args: Prisma.MensageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MensageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagePayload>[]
          }
          delete: {
            args: Prisma.MensageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagePayload>
          }
          update: {
            args: Prisma.MensageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagePayload>
          }
          deleteMany: {
            args: Prisma.MensageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MensageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MensageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagePayload>[]
          }
          upsert: {
            args: Prisma.MensageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagePayload>
          }
          aggregate: {
            args: Prisma.MensageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMensage>
          }
          groupBy: {
            args: Prisma.MensageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MensageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MensageCountArgs<ExtArgs>
            result: $Utils.Optional<MensageCountAggregateOutputType> | number
          }
        }
      }
      Inscricao: {
        payload: Prisma.$InscricaoPayload<ExtArgs>
        fields: Prisma.InscricaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InscricaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InscricaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload>
          }
          findFirst: {
            args: Prisma.InscricaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InscricaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload>
          }
          findMany: {
            args: Prisma.InscricaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload>[]
          }
          create: {
            args: Prisma.InscricaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload>
          }
          createMany: {
            args: Prisma.InscricaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InscricaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload>[]
          }
          delete: {
            args: Prisma.InscricaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload>
          }
          update: {
            args: Prisma.InscricaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload>
          }
          deleteMany: {
            args: Prisma.InscricaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InscricaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InscricaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload>[]
          }
          upsert: {
            args: Prisma.InscricaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload>
          }
          aggregate: {
            args: Prisma.InscricaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInscricao>
          }
          groupBy: {
            args: Prisma.InscricaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<InscricaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.InscricaoCountArgs<ExtArgs>
            result: $Utils.Optional<InscricaoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    vaga?: VagaOmit
    candidato?: CandidatoOmit
    mensage?: MensageOmit
    inscricao?: InscricaoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    vagas: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vagas?: boolean | UserCountOutputTypeCountVagasArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVagasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VagaWhereInput
  }


  /**
   * Count Type VagaCountOutputType
   */

  export type VagaCountOutputType = {
    inscricoes: number
  }

  export type VagaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inscricoes?: boolean | VagaCountOutputTypeCountInscricoesArgs
  }

  // Custom InputTypes
  /**
   * VagaCountOutputType without action
   */
  export type VagaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VagaCountOutputType
     */
    select?: VagaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VagaCountOutputType without action
   */
  export type VagaCountOutputTypeCountInscricoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InscricaoWhereInput
  }


  /**
   * Count Type CandidatoCountOutputType
   */

  export type CandidatoCountOutputType = {
    inscricoes: number
  }

  export type CandidatoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inscricoes?: boolean | CandidatoCountOutputTypeCountInscricoesArgs
  }

  // Custom InputTypes
  /**
   * CandidatoCountOutputType without action
   */
  export type CandidatoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidatoCountOutputType
     */
    select?: CandidatoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CandidatoCountOutputType without action
   */
  export type CandidatoCountOutputTypeCountInscricoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InscricaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    nome: string
    email: string
    password: string
    role: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vagas?: boolean | User$vagasArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vagas?: boolean | User$vagasArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      vagas: Prisma.$VagaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      password: string
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vagas<T extends User$vagasArgs<ExtArgs> = {}>(args?: Subset<T, User$vagasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VagaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly nome: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.vagas
   */
  export type User$vagasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaga
     */
    select?: VagaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaga
     */
    omit?: VagaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagaInclude<ExtArgs> | null
    where?: VagaWhereInput
    orderBy?: VagaOrderByWithRelationInput | VagaOrderByWithRelationInput[]
    cursor?: VagaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VagaScalarFieldEnum | VagaScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Vaga
   */

  export type AggregateVaga = {
    _count: VagaCountAggregateOutputType | null
    _avg: VagaAvgAggregateOutputType | null
    _sum: VagaSumAggregateOutputType | null
    _min: VagaMinAggregateOutputType | null
    _max: VagaMaxAggregateOutputType | null
  }

  export type VagaAvgAggregateOutputType = {
    salario: number | null
    createdBy: number | null
  }

  export type VagaSumAggregateOutputType = {
    salario: number | null
    createdBy: number | null
  }

  export type VagaMinAggregateOutputType = {
    id: string | null
    nome: string | null
    localizacao: string | null
    descricao: string | null
    salario: number | null
    createdBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VagaMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    localizacao: string | null
    descricao: string | null
    salario: number | null
    createdBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VagaCountAggregateOutputType = {
    id: number
    nome: number
    localizacao: number
    descricao: number
    salario: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VagaAvgAggregateInputType = {
    salario?: true
    createdBy?: true
  }

  export type VagaSumAggregateInputType = {
    salario?: true
    createdBy?: true
  }

  export type VagaMinAggregateInputType = {
    id?: true
    nome?: true
    localizacao?: true
    descricao?: true
    salario?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VagaMaxAggregateInputType = {
    id?: true
    nome?: true
    localizacao?: true
    descricao?: true
    salario?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VagaCountAggregateInputType = {
    id?: true
    nome?: true
    localizacao?: true
    descricao?: true
    salario?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VagaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vaga to aggregate.
     */
    where?: VagaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vagas to fetch.
     */
    orderBy?: VagaOrderByWithRelationInput | VagaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VagaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vagas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vagas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vagas
    **/
    _count?: true | VagaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VagaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VagaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VagaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VagaMaxAggregateInputType
  }

  export type GetVagaAggregateType<T extends VagaAggregateArgs> = {
        [P in keyof T & keyof AggregateVaga]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVaga[P]>
      : GetScalarType<T[P], AggregateVaga[P]>
  }




  export type VagaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VagaWhereInput
    orderBy?: VagaOrderByWithAggregationInput | VagaOrderByWithAggregationInput[]
    by: VagaScalarFieldEnum[] | VagaScalarFieldEnum
    having?: VagaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VagaCountAggregateInputType | true
    _avg?: VagaAvgAggregateInputType
    _sum?: VagaSumAggregateInputType
    _min?: VagaMinAggregateInputType
    _max?: VagaMaxAggregateInputType
  }

  export type VagaGroupByOutputType = {
    id: string
    nome: string
    localizacao: string
    descricao: string
    salario: number
    createdBy: number
    createdAt: Date
    updatedAt: Date
    _count: VagaCountAggregateOutputType | null
    _avg: VagaAvgAggregateOutputType | null
    _sum: VagaSumAggregateOutputType | null
    _min: VagaMinAggregateOutputType | null
    _max: VagaMaxAggregateOutputType | null
  }

  type GetVagaGroupByPayload<T extends VagaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VagaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VagaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VagaGroupByOutputType[P]>
            : GetScalarType<T[P], VagaGroupByOutputType[P]>
        }
      >
    >


  export type VagaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    localizacao?: boolean
    descricao?: boolean
    salario?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    inscricoes?: boolean | Vaga$inscricoesArgs<ExtArgs>
    _count?: boolean | VagaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vaga"]>

  export type VagaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    localizacao?: boolean
    descricao?: boolean
    salario?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vaga"]>

  export type VagaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    localizacao?: boolean
    descricao?: boolean
    salario?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vaga"]>

  export type VagaSelectScalar = {
    id?: boolean
    nome?: boolean
    localizacao?: boolean
    descricao?: boolean
    salario?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VagaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "localizacao" | "descricao" | "salario" | "createdBy" | "createdAt" | "updatedAt", ExtArgs["result"]["vaga"]>
  export type VagaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    inscricoes?: boolean | Vaga$inscricoesArgs<ExtArgs>
    _count?: boolean | VagaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VagaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VagaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VagaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vaga"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      inscricoes: Prisma.$InscricaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      localizacao: string
      descricao: string
      salario: number
      createdBy: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vaga"]>
    composites: {}
  }

  type VagaGetPayload<S extends boolean | null | undefined | VagaDefaultArgs> = $Result.GetResult<Prisma.$VagaPayload, S>

  type VagaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VagaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VagaCountAggregateInputType | true
    }

  export interface VagaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vaga'], meta: { name: 'Vaga' } }
    /**
     * Find zero or one Vaga that matches the filter.
     * @param {VagaFindUniqueArgs} args - Arguments to find a Vaga
     * @example
     * // Get one Vaga
     * const vaga = await prisma.vaga.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VagaFindUniqueArgs>(args: SelectSubset<T, VagaFindUniqueArgs<ExtArgs>>): Prisma__VagaClient<$Result.GetResult<Prisma.$VagaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vaga that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VagaFindUniqueOrThrowArgs} args - Arguments to find a Vaga
     * @example
     * // Get one Vaga
     * const vaga = await prisma.vaga.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VagaFindUniqueOrThrowArgs>(args: SelectSubset<T, VagaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VagaClient<$Result.GetResult<Prisma.$VagaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vaga that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VagaFindFirstArgs} args - Arguments to find a Vaga
     * @example
     * // Get one Vaga
     * const vaga = await prisma.vaga.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VagaFindFirstArgs>(args?: SelectSubset<T, VagaFindFirstArgs<ExtArgs>>): Prisma__VagaClient<$Result.GetResult<Prisma.$VagaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vaga that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VagaFindFirstOrThrowArgs} args - Arguments to find a Vaga
     * @example
     * // Get one Vaga
     * const vaga = await prisma.vaga.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VagaFindFirstOrThrowArgs>(args?: SelectSubset<T, VagaFindFirstOrThrowArgs<ExtArgs>>): Prisma__VagaClient<$Result.GetResult<Prisma.$VagaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vagas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VagaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vagas
     * const vagas = await prisma.vaga.findMany()
     * 
     * // Get first 10 Vagas
     * const vagas = await prisma.vaga.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vagaWithIdOnly = await prisma.vaga.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VagaFindManyArgs>(args?: SelectSubset<T, VagaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VagaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vaga.
     * @param {VagaCreateArgs} args - Arguments to create a Vaga.
     * @example
     * // Create one Vaga
     * const Vaga = await prisma.vaga.create({
     *   data: {
     *     // ... data to create a Vaga
     *   }
     * })
     * 
     */
    create<T extends VagaCreateArgs>(args: SelectSubset<T, VagaCreateArgs<ExtArgs>>): Prisma__VagaClient<$Result.GetResult<Prisma.$VagaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vagas.
     * @param {VagaCreateManyArgs} args - Arguments to create many Vagas.
     * @example
     * // Create many Vagas
     * const vaga = await prisma.vaga.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VagaCreateManyArgs>(args?: SelectSubset<T, VagaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vagas and returns the data saved in the database.
     * @param {VagaCreateManyAndReturnArgs} args - Arguments to create many Vagas.
     * @example
     * // Create many Vagas
     * const vaga = await prisma.vaga.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vagas and only return the `id`
     * const vagaWithIdOnly = await prisma.vaga.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VagaCreateManyAndReturnArgs>(args?: SelectSubset<T, VagaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VagaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vaga.
     * @param {VagaDeleteArgs} args - Arguments to delete one Vaga.
     * @example
     * // Delete one Vaga
     * const Vaga = await prisma.vaga.delete({
     *   where: {
     *     // ... filter to delete one Vaga
     *   }
     * })
     * 
     */
    delete<T extends VagaDeleteArgs>(args: SelectSubset<T, VagaDeleteArgs<ExtArgs>>): Prisma__VagaClient<$Result.GetResult<Prisma.$VagaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vaga.
     * @param {VagaUpdateArgs} args - Arguments to update one Vaga.
     * @example
     * // Update one Vaga
     * const vaga = await prisma.vaga.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VagaUpdateArgs>(args: SelectSubset<T, VagaUpdateArgs<ExtArgs>>): Prisma__VagaClient<$Result.GetResult<Prisma.$VagaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vagas.
     * @param {VagaDeleteManyArgs} args - Arguments to filter Vagas to delete.
     * @example
     * // Delete a few Vagas
     * const { count } = await prisma.vaga.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VagaDeleteManyArgs>(args?: SelectSubset<T, VagaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vagas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VagaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vagas
     * const vaga = await prisma.vaga.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VagaUpdateManyArgs>(args: SelectSubset<T, VagaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vagas and returns the data updated in the database.
     * @param {VagaUpdateManyAndReturnArgs} args - Arguments to update many Vagas.
     * @example
     * // Update many Vagas
     * const vaga = await prisma.vaga.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vagas and only return the `id`
     * const vagaWithIdOnly = await prisma.vaga.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VagaUpdateManyAndReturnArgs>(args: SelectSubset<T, VagaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VagaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vaga.
     * @param {VagaUpsertArgs} args - Arguments to update or create a Vaga.
     * @example
     * // Update or create a Vaga
     * const vaga = await prisma.vaga.upsert({
     *   create: {
     *     // ... data to create a Vaga
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vaga we want to update
     *   }
     * })
     */
    upsert<T extends VagaUpsertArgs>(args: SelectSubset<T, VagaUpsertArgs<ExtArgs>>): Prisma__VagaClient<$Result.GetResult<Prisma.$VagaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vagas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VagaCountArgs} args - Arguments to filter Vagas to count.
     * @example
     * // Count the number of Vagas
     * const count = await prisma.vaga.count({
     *   where: {
     *     // ... the filter for the Vagas we want to count
     *   }
     * })
    **/
    count<T extends VagaCountArgs>(
      args?: Subset<T, VagaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VagaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vaga.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VagaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VagaAggregateArgs>(args: Subset<T, VagaAggregateArgs>): Prisma.PrismaPromise<GetVagaAggregateType<T>>

    /**
     * Group by Vaga.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VagaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VagaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VagaGroupByArgs['orderBy'] }
        : { orderBy?: VagaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VagaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVagaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vaga model
   */
  readonly fields: VagaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vaga.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VagaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    inscricoes<T extends Vaga$inscricoesArgs<ExtArgs> = {}>(args?: Subset<T, Vaga$inscricoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vaga model
   */
  interface VagaFieldRefs {
    readonly id: FieldRef<"Vaga", 'String'>
    readonly nome: FieldRef<"Vaga", 'String'>
    readonly localizacao: FieldRef<"Vaga", 'String'>
    readonly descricao: FieldRef<"Vaga", 'String'>
    readonly salario: FieldRef<"Vaga", 'Float'>
    readonly createdBy: FieldRef<"Vaga", 'Int'>
    readonly createdAt: FieldRef<"Vaga", 'DateTime'>
    readonly updatedAt: FieldRef<"Vaga", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vaga findUnique
   */
  export type VagaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaga
     */
    select?: VagaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaga
     */
    omit?: VagaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagaInclude<ExtArgs> | null
    /**
     * Filter, which Vaga to fetch.
     */
    where: VagaWhereUniqueInput
  }

  /**
   * Vaga findUniqueOrThrow
   */
  export type VagaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaga
     */
    select?: VagaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaga
     */
    omit?: VagaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagaInclude<ExtArgs> | null
    /**
     * Filter, which Vaga to fetch.
     */
    where: VagaWhereUniqueInput
  }

  /**
   * Vaga findFirst
   */
  export type VagaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaga
     */
    select?: VagaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaga
     */
    omit?: VagaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagaInclude<ExtArgs> | null
    /**
     * Filter, which Vaga to fetch.
     */
    where?: VagaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vagas to fetch.
     */
    orderBy?: VagaOrderByWithRelationInput | VagaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vagas.
     */
    cursor?: VagaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vagas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vagas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vagas.
     */
    distinct?: VagaScalarFieldEnum | VagaScalarFieldEnum[]
  }

  /**
   * Vaga findFirstOrThrow
   */
  export type VagaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaga
     */
    select?: VagaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaga
     */
    omit?: VagaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagaInclude<ExtArgs> | null
    /**
     * Filter, which Vaga to fetch.
     */
    where?: VagaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vagas to fetch.
     */
    orderBy?: VagaOrderByWithRelationInput | VagaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vagas.
     */
    cursor?: VagaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vagas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vagas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vagas.
     */
    distinct?: VagaScalarFieldEnum | VagaScalarFieldEnum[]
  }

  /**
   * Vaga findMany
   */
  export type VagaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaga
     */
    select?: VagaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaga
     */
    omit?: VagaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagaInclude<ExtArgs> | null
    /**
     * Filter, which Vagas to fetch.
     */
    where?: VagaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vagas to fetch.
     */
    orderBy?: VagaOrderByWithRelationInput | VagaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vagas.
     */
    cursor?: VagaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vagas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vagas.
     */
    skip?: number
    distinct?: VagaScalarFieldEnum | VagaScalarFieldEnum[]
  }

  /**
   * Vaga create
   */
  export type VagaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaga
     */
    select?: VagaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaga
     */
    omit?: VagaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagaInclude<ExtArgs> | null
    /**
     * The data needed to create a Vaga.
     */
    data: XOR<VagaCreateInput, VagaUncheckedCreateInput>
  }

  /**
   * Vaga createMany
   */
  export type VagaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vagas.
     */
    data: VagaCreateManyInput | VagaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vaga createManyAndReturn
   */
  export type VagaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaga
     */
    select?: VagaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vaga
     */
    omit?: VagaOmit<ExtArgs> | null
    /**
     * The data used to create many Vagas.
     */
    data: VagaCreateManyInput | VagaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vaga update
   */
  export type VagaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaga
     */
    select?: VagaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaga
     */
    omit?: VagaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagaInclude<ExtArgs> | null
    /**
     * The data needed to update a Vaga.
     */
    data: XOR<VagaUpdateInput, VagaUncheckedUpdateInput>
    /**
     * Choose, which Vaga to update.
     */
    where: VagaWhereUniqueInput
  }

  /**
   * Vaga updateMany
   */
  export type VagaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vagas.
     */
    data: XOR<VagaUpdateManyMutationInput, VagaUncheckedUpdateManyInput>
    /**
     * Filter which Vagas to update
     */
    where?: VagaWhereInput
    /**
     * Limit how many Vagas to update.
     */
    limit?: number
  }

  /**
   * Vaga updateManyAndReturn
   */
  export type VagaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaga
     */
    select?: VagaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vaga
     */
    omit?: VagaOmit<ExtArgs> | null
    /**
     * The data used to update Vagas.
     */
    data: XOR<VagaUpdateManyMutationInput, VagaUncheckedUpdateManyInput>
    /**
     * Filter which Vagas to update
     */
    where?: VagaWhereInput
    /**
     * Limit how many Vagas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vaga upsert
   */
  export type VagaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaga
     */
    select?: VagaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaga
     */
    omit?: VagaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagaInclude<ExtArgs> | null
    /**
     * The filter to search for the Vaga to update in case it exists.
     */
    where: VagaWhereUniqueInput
    /**
     * In case the Vaga found by the `where` argument doesn't exist, create a new Vaga with this data.
     */
    create: XOR<VagaCreateInput, VagaUncheckedCreateInput>
    /**
     * In case the Vaga was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VagaUpdateInput, VagaUncheckedUpdateInput>
  }

  /**
   * Vaga delete
   */
  export type VagaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaga
     */
    select?: VagaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaga
     */
    omit?: VagaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagaInclude<ExtArgs> | null
    /**
     * Filter which Vaga to delete.
     */
    where: VagaWhereUniqueInput
  }

  /**
   * Vaga deleteMany
   */
  export type VagaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vagas to delete
     */
    where?: VagaWhereInput
    /**
     * Limit how many Vagas to delete.
     */
    limit?: number
  }

  /**
   * Vaga.inscricoes
   */
  export type Vaga$inscricoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    where?: InscricaoWhereInput
    orderBy?: InscricaoOrderByWithRelationInput | InscricaoOrderByWithRelationInput[]
    cursor?: InscricaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InscricaoScalarFieldEnum | InscricaoScalarFieldEnum[]
  }

  /**
   * Vaga without action
   */
  export type VagaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaga
     */
    select?: VagaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaga
     */
    omit?: VagaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagaInclude<ExtArgs> | null
  }


  /**
   * Model Candidato
   */

  export type AggregateCandidato = {
    _count: CandidatoCountAggregateOutputType | null
    _min: CandidatoMinAggregateOutputType | null
    _max: CandidatoMaxAggregateOutputType | null
  }

  export type CandidatoMinAggregateOutputType = {
    id: string | null
    cv_path: string | null
    createdAt: Date | null
  }

  export type CandidatoMaxAggregateOutputType = {
    id: string | null
    cv_path: string | null
    createdAt: Date | null
  }

  export type CandidatoCountAggregateOutputType = {
    id: number
    cv_path: number
    createdAt: number
    _all: number
  }


  export type CandidatoMinAggregateInputType = {
    id?: true
    cv_path?: true
    createdAt?: true
  }

  export type CandidatoMaxAggregateInputType = {
    id?: true
    cv_path?: true
    createdAt?: true
  }

  export type CandidatoCountAggregateInputType = {
    id?: true
    cv_path?: true
    createdAt?: true
    _all?: true
  }

  export type CandidatoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Candidato to aggregate.
     */
    where?: CandidatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidatoes to fetch.
     */
    orderBy?: CandidatoOrderByWithRelationInput | CandidatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CandidatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Candidatoes
    **/
    _count?: true | CandidatoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidatoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidatoMaxAggregateInputType
  }

  export type GetCandidatoAggregateType<T extends CandidatoAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidato]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidato[P]>
      : GetScalarType<T[P], AggregateCandidato[P]>
  }




  export type CandidatoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidatoWhereInput
    orderBy?: CandidatoOrderByWithAggregationInput | CandidatoOrderByWithAggregationInput[]
    by: CandidatoScalarFieldEnum[] | CandidatoScalarFieldEnum
    having?: CandidatoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CandidatoCountAggregateInputType | true
    _min?: CandidatoMinAggregateInputType
    _max?: CandidatoMaxAggregateInputType
  }

  export type CandidatoGroupByOutputType = {
    id: string
    cv_path: string
    createdAt: Date
    _count: CandidatoCountAggregateOutputType | null
    _min: CandidatoMinAggregateOutputType | null
    _max: CandidatoMaxAggregateOutputType | null
  }

  type GetCandidatoGroupByPayload<T extends CandidatoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidatoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidatoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidatoGroupByOutputType[P]>
            : GetScalarType<T[P], CandidatoGroupByOutputType[P]>
        }
      >
    >


  export type CandidatoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cv_path?: boolean
    createdAt?: boolean
    inscricoes?: boolean | Candidato$inscricoesArgs<ExtArgs>
    _count?: boolean | CandidatoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidato"]>

  export type CandidatoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cv_path?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["candidato"]>

  export type CandidatoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cv_path?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["candidato"]>

  export type CandidatoSelectScalar = {
    id?: boolean
    cv_path?: boolean
    createdAt?: boolean
  }

  export type CandidatoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cv_path" | "createdAt", ExtArgs["result"]["candidato"]>
  export type CandidatoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inscricoes?: boolean | Candidato$inscricoesArgs<ExtArgs>
    _count?: boolean | CandidatoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CandidatoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CandidatoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CandidatoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Candidato"
    objects: {
      inscricoes: Prisma.$InscricaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cv_path: string
      createdAt: Date
    }, ExtArgs["result"]["candidato"]>
    composites: {}
  }

  type CandidatoGetPayload<S extends boolean | null | undefined | CandidatoDefaultArgs> = $Result.GetResult<Prisma.$CandidatoPayload, S>

  type CandidatoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CandidatoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CandidatoCountAggregateInputType | true
    }

  export interface CandidatoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Candidato'], meta: { name: 'Candidato' } }
    /**
     * Find zero or one Candidato that matches the filter.
     * @param {CandidatoFindUniqueArgs} args - Arguments to find a Candidato
     * @example
     * // Get one Candidato
     * const candidato = await prisma.candidato.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CandidatoFindUniqueArgs>(args: SelectSubset<T, CandidatoFindUniqueArgs<ExtArgs>>): Prisma__CandidatoClient<$Result.GetResult<Prisma.$CandidatoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Candidato that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CandidatoFindUniqueOrThrowArgs} args - Arguments to find a Candidato
     * @example
     * // Get one Candidato
     * const candidato = await prisma.candidato.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CandidatoFindUniqueOrThrowArgs>(args: SelectSubset<T, CandidatoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CandidatoClient<$Result.GetResult<Prisma.$CandidatoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidato that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatoFindFirstArgs} args - Arguments to find a Candidato
     * @example
     * // Get one Candidato
     * const candidato = await prisma.candidato.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CandidatoFindFirstArgs>(args?: SelectSubset<T, CandidatoFindFirstArgs<ExtArgs>>): Prisma__CandidatoClient<$Result.GetResult<Prisma.$CandidatoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidato that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatoFindFirstOrThrowArgs} args - Arguments to find a Candidato
     * @example
     * // Get one Candidato
     * const candidato = await prisma.candidato.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CandidatoFindFirstOrThrowArgs>(args?: SelectSubset<T, CandidatoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CandidatoClient<$Result.GetResult<Prisma.$CandidatoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Candidatoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Candidatoes
     * const candidatoes = await prisma.candidato.findMany()
     * 
     * // Get first 10 Candidatoes
     * const candidatoes = await prisma.candidato.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const candidatoWithIdOnly = await prisma.candidato.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CandidatoFindManyArgs>(args?: SelectSubset<T, CandidatoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Candidato.
     * @param {CandidatoCreateArgs} args - Arguments to create a Candidato.
     * @example
     * // Create one Candidato
     * const Candidato = await prisma.candidato.create({
     *   data: {
     *     // ... data to create a Candidato
     *   }
     * })
     * 
     */
    create<T extends CandidatoCreateArgs>(args: SelectSubset<T, CandidatoCreateArgs<ExtArgs>>): Prisma__CandidatoClient<$Result.GetResult<Prisma.$CandidatoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Candidatoes.
     * @param {CandidatoCreateManyArgs} args - Arguments to create many Candidatoes.
     * @example
     * // Create many Candidatoes
     * const candidato = await prisma.candidato.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CandidatoCreateManyArgs>(args?: SelectSubset<T, CandidatoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Candidatoes and returns the data saved in the database.
     * @param {CandidatoCreateManyAndReturnArgs} args - Arguments to create many Candidatoes.
     * @example
     * // Create many Candidatoes
     * const candidato = await prisma.candidato.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Candidatoes and only return the `id`
     * const candidatoWithIdOnly = await prisma.candidato.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CandidatoCreateManyAndReturnArgs>(args?: SelectSubset<T, CandidatoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Candidato.
     * @param {CandidatoDeleteArgs} args - Arguments to delete one Candidato.
     * @example
     * // Delete one Candidato
     * const Candidato = await prisma.candidato.delete({
     *   where: {
     *     // ... filter to delete one Candidato
     *   }
     * })
     * 
     */
    delete<T extends CandidatoDeleteArgs>(args: SelectSubset<T, CandidatoDeleteArgs<ExtArgs>>): Prisma__CandidatoClient<$Result.GetResult<Prisma.$CandidatoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Candidato.
     * @param {CandidatoUpdateArgs} args - Arguments to update one Candidato.
     * @example
     * // Update one Candidato
     * const candidato = await prisma.candidato.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CandidatoUpdateArgs>(args: SelectSubset<T, CandidatoUpdateArgs<ExtArgs>>): Prisma__CandidatoClient<$Result.GetResult<Prisma.$CandidatoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Candidatoes.
     * @param {CandidatoDeleteManyArgs} args - Arguments to filter Candidatoes to delete.
     * @example
     * // Delete a few Candidatoes
     * const { count } = await prisma.candidato.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CandidatoDeleteManyArgs>(args?: SelectSubset<T, CandidatoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidatoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Candidatoes
     * const candidato = await prisma.candidato.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CandidatoUpdateManyArgs>(args: SelectSubset<T, CandidatoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidatoes and returns the data updated in the database.
     * @param {CandidatoUpdateManyAndReturnArgs} args - Arguments to update many Candidatoes.
     * @example
     * // Update many Candidatoes
     * const candidato = await prisma.candidato.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Candidatoes and only return the `id`
     * const candidatoWithIdOnly = await prisma.candidato.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CandidatoUpdateManyAndReturnArgs>(args: SelectSubset<T, CandidatoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Candidato.
     * @param {CandidatoUpsertArgs} args - Arguments to update or create a Candidato.
     * @example
     * // Update or create a Candidato
     * const candidato = await prisma.candidato.upsert({
     *   create: {
     *     // ... data to create a Candidato
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Candidato we want to update
     *   }
     * })
     */
    upsert<T extends CandidatoUpsertArgs>(args: SelectSubset<T, CandidatoUpsertArgs<ExtArgs>>): Prisma__CandidatoClient<$Result.GetResult<Prisma.$CandidatoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Candidatoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatoCountArgs} args - Arguments to filter Candidatoes to count.
     * @example
     * // Count the number of Candidatoes
     * const count = await prisma.candidato.count({
     *   where: {
     *     // ... the filter for the Candidatoes we want to count
     *   }
     * })
    **/
    count<T extends CandidatoCountArgs>(
      args?: Subset<T, CandidatoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidatoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Candidato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CandidatoAggregateArgs>(args: Subset<T, CandidatoAggregateArgs>): Prisma.PrismaPromise<GetCandidatoAggregateType<T>>

    /**
     * Group by Candidato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CandidatoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CandidatoGroupByArgs['orderBy'] }
        : { orderBy?: CandidatoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CandidatoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidatoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Candidato model
   */
  readonly fields: CandidatoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Candidato.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CandidatoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inscricoes<T extends Candidato$inscricoesArgs<ExtArgs> = {}>(args?: Subset<T, Candidato$inscricoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Candidato model
   */
  interface CandidatoFieldRefs {
    readonly id: FieldRef<"Candidato", 'String'>
    readonly cv_path: FieldRef<"Candidato", 'String'>
    readonly createdAt: FieldRef<"Candidato", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Candidato findUnique
   */
  export type CandidatoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidato
     */
    select?: CandidatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidato
     */
    omit?: CandidatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatoInclude<ExtArgs> | null
    /**
     * Filter, which Candidato to fetch.
     */
    where: CandidatoWhereUniqueInput
  }

  /**
   * Candidato findUniqueOrThrow
   */
  export type CandidatoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidato
     */
    select?: CandidatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidato
     */
    omit?: CandidatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatoInclude<ExtArgs> | null
    /**
     * Filter, which Candidato to fetch.
     */
    where: CandidatoWhereUniqueInput
  }

  /**
   * Candidato findFirst
   */
  export type CandidatoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidato
     */
    select?: CandidatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidato
     */
    omit?: CandidatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatoInclude<ExtArgs> | null
    /**
     * Filter, which Candidato to fetch.
     */
    where?: CandidatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidatoes to fetch.
     */
    orderBy?: CandidatoOrderByWithRelationInput | CandidatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Candidatoes.
     */
    cursor?: CandidatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Candidatoes.
     */
    distinct?: CandidatoScalarFieldEnum | CandidatoScalarFieldEnum[]
  }

  /**
   * Candidato findFirstOrThrow
   */
  export type CandidatoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidato
     */
    select?: CandidatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidato
     */
    omit?: CandidatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatoInclude<ExtArgs> | null
    /**
     * Filter, which Candidato to fetch.
     */
    where?: CandidatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidatoes to fetch.
     */
    orderBy?: CandidatoOrderByWithRelationInput | CandidatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Candidatoes.
     */
    cursor?: CandidatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Candidatoes.
     */
    distinct?: CandidatoScalarFieldEnum | CandidatoScalarFieldEnum[]
  }

  /**
   * Candidato findMany
   */
  export type CandidatoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidato
     */
    select?: CandidatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidato
     */
    omit?: CandidatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatoInclude<ExtArgs> | null
    /**
     * Filter, which Candidatoes to fetch.
     */
    where?: CandidatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidatoes to fetch.
     */
    orderBy?: CandidatoOrderByWithRelationInput | CandidatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Candidatoes.
     */
    cursor?: CandidatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidatoes.
     */
    skip?: number
    distinct?: CandidatoScalarFieldEnum | CandidatoScalarFieldEnum[]
  }

  /**
   * Candidato create
   */
  export type CandidatoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidato
     */
    select?: CandidatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidato
     */
    omit?: CandidatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatoInclude<ExtArgs> | null
    /**
     * The data needed to create a Candidato.
     */
    data: XOR<CandidatoCreateInput, CandidatoUncheckedCreateInput>
  }

  /**
   * Candidato createMany
   */
  export type CandidatoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Candidatoes.
     */
    data: CandidatoCreateManyInput | CandidatoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Candidato createManyAndReturn
   */
  export type CandidatoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidato
     */
    select?: CandidatoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Candidato
     */
    omit?: CandidatoOmit<ExtArgs> | null
    /**
     * The data used to create many Candidatoes.
     */
    data: CandidatoCreateManyInput | CandidatoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Candidato update
   */
  export type CandidatoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidato
     */
    select?: CandidatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidato
     */
    omit?: CandidatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatoInclude<ExtArgs> | null
    /**
     * The data needed to update a Candidato.
     */
    data: XOR<CandidatoUpdateInput, CandidatoUncheckedUpdateInput>
    /**
     * Choose, which Candidato to update.
     */
    where: CandidatoWhereUniqueInput
  }

  /**
   * Candidato updateMany
   */
  export type CandidatoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Candidatoes.
     */
    data: XOR<CandidatoUpdateManyMutationInput, CandidatoUncheckedUpdateManyInput>
    /**
     * Filter which Candidatoes to update
     */
    where?: CandidatoWhereInput
    /**
     * Limit how many Candidatoes to update.
     */
    limit?: number
  }

  /**
   * Candidato updateManyAndReturn
   */
  export type CandidatoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidato
     */
    select?: CandidatoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Candidato
     */
    omit?: CandidatoOmit<ExtArgs> | null
    /**
     * The data used to update Candidatoes.
     */
    data: XOR<CandidatoUpdateManyMutationInput, CandidatoUncheckedUpdateManyInput>
    /**
     * Filter which Candidatoes to update
     */
    where?: CandidatoWhereInput
    /**
     * Limit how many Candidatoes to update.
     */
    limit?: number
  }

  /**
   * Candidato upsert
   */
  export type CandidatoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidato
     */
    select?: CandidatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidato
     */
    omit?: CandidatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatoInclude<ExtArgs> | null
    /**
     * The filter to search for the Candidato to update in case it exists.
     */
    where: CandidatoWhereUniqueInput
    /**
     * In case the Candidato found by the `where` argument doesn't exist, create a new Candidato with this data.
     */
    create: XOR<CandidatoCreateInput, CandidatoUncheckedCreateInput>
    /**
     * In case the Candidato was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CandidatoUpdateInput, CandidatoUncheckedUpdateInput>
  }

  /**
   * Candidato delete
   */
  export type CandidatoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidato
     */
    select?: CandidatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidato
     */
    omit?: CandidatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatoInclude<ExtArgs> | null
    /**
     * Filter which Candidato to delete.
     */
    where: CandidatoWhereUniqueInput
  }

  /**
   * Candidato deleteMany
   */
  export type CandidatoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Candidatoes to delete
     */
    where?: CandidatoWhereInput
    /**
     * Limit how many Candidatoes to delete.
     */
    limit?: number
  }

  /**
   * Candidato.inscricoes
   */
  export type Candidato$inscricoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    where?: InscricaoWhereInput
    orderBy?: InscricaoOrderByWithRelationInput | InscricaoOrderByWithRelationInput[]
    cursor?: InscricaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InscricaoScalarFieldEnum | InscricaoScalarFieldEnum[]
  }

  /**
   * Candidato without action
   */
  export type CandidatoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidato
     */
    select?: CandidatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidato
     */
    omit?: CandidatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatoInclude<ExtArgs> | null
  }


  /**
   * Model Mensage
   */

  export type AggregateMensage = {
    _count: MensageCountAggregateOutputType | null
    _min: MensageMinAggregateOutputType | null
    _max: MensageMaxAggregateOutputType | null
  }

  export type MensageMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    message: string | null
    createdAt: Date | null
  }

  export type MensageMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    message: string | null
    createdAt: Date | null
  }

  export type MensageCountAggregateOutputType = {
    id: number
    name: number
    email: number
    message: number
    createdAt: number
    _all: number
  }


  export type MensageMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    message?: true
    createdAt?: true
  }

  export type MensageMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    message?: true
    createdAt?: true
  }

  export type MensageCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type MensageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mensage to aggregate.
     */
    where?: MensageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensages to fetch.
     */
    orderBy?: MensageOrderByWithRelationInput | MensageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MensageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mensages
    **/
    _count?: true | MensageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MensageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MensageMaxAggregateInputType
  }

  export type GetMensageAggregateType<T extends MensageAggregateArgs> = {
        [P in keyof T & keyof AggregateMensage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMensage[P]>
      : GetScalarType<T[P], AggregateMensage[P]>
  }




  export type MensageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensageWhereInput
    orderBy?: MensageOrderByWithAggregationInput | MensageOrderByWithAggregationInput[]
    by: MensageScalarFieldEnum[] | MensageScalarFieldEnum
    having?: MensageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MensageCountAggregateInputType | true
    _min?: MensageMinAggregateInputType
    _max?: MensageMaxAggregateInputType
  }

  export type MensageGroupByOutputType = {
    id: string
    name: string
    email: string
    message: string
    createdAt: Date
    _count: MensageCountAggregateOutputType | null
    _min: MensageMinAggregateOutputType | null
    _max: MensageMaxAggregateOutputType | null
  }

  type GetMensageGroupByPayload<T extends MensageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MensageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MensageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MensageGroupByOutputType[P]>
            : GetScalarType<T[P], MensageGroupByOutputType[P]>
        }
      >
    >


  export type MensageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["mensage"]>

  export type MensageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["mensage"]>

  export type MensageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["mensage"]>

  export type MensageSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type MensageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "message" | "createdAt", ExtArgs["result"]["mensage"]>

  export type $MensagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mensage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      message: string
      createdAt: Date
    }, ExtArgs["result"]["mensage"]>
    composites: {}
  }

  type MensageGetPayload<S extends boolean | null | undefined | MensageDefaultArgs> = $Result.GetResult<Prisma.$MensagePayload, S>

  type MensageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MensageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MensageCountAggregateInputType | true
    }

  export interface MensageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mensage'], meta: { name: 'Mensage' } }
    /**
     * Find zero or one Mensage that matches the filter.
     * @param {MensageFindUniqueArgs} args - Arguments to find a Mensage
     * @example
     * // Get one Mensage
     * const mensage = await prisma.mensage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MensageFindUniqueArgs>(args: SelectSubset<T, MensageFindUniqueArgs<ExtArgs>>): Prisma__MensageClient<$Result.GetResult<Prisma.$MensagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mensage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MensageFindUniqueOrThrowArgs} args - Arguments to find a Mensage
     * @example
     * // Get one Mensage
     * const mensage = await prisma.mensage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MensageFindUniqueOrThrowArgs>(args: SelectSubset<T, MensageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MensageClient<$Result.GetResult<Prisma.$MensagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mensage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensageFindFirstArgs} args - Arguments to find a Mensage
     * @example
     * // Get one Mensage
     * const mensage = await prisma.mensage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MensageFindFirstArgs>(args?: SelectSubset<T, MensageFindFirstArgs<ExtArgs>>): Prisma__MensageClient<$Result.GetResult<Prisma.$MensagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mensage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensageFindFirstOrThrowArgs} args - Arguments to find a Mensage
     * @example
     * // Get one Mensage
     * const mensage = await prisma.mensage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MensageFindFirstOrThrowArgs>(args?: SelectSubset<T, MensageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MensageClient<$Result.GetResult<Prisma.$MensagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mensages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mensages
     * const mensages = await prisma.mensage.findMany()
     * 
     * // Get first 10 Mensages
     * const mensages = await prisma.mensage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mensageWithIdOnly = await prisma.mensage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MensageFindManyArgs>(args?: SelectSubset<T, MensageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mensage.
     * @param {MensageCreateArgs} args - Arguments to create a Mensage.
     * @example
     * // Create one Mensage
     * const Mensage = await prisma.mensage.create({
     *   data: {
     *     // ... data to create a Mensage
     *   }
     * })
     * 
     */
    create<T extends MensageCreateArgs>(args: SelectSubset<T, MensageCreateArgs<ExtArgs>>): Prisma__MensageClient<$Result.GetResult<Prisma.$MensagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mensages.
     * @param {MensageCreateManyArgs} args - Arguments to create many Mensages.
     * @example
     * // Create many Mensages
     * const mensage = await prisma.mensage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MensageCreateManyArgs>(args?: SelectSubset<T, MensageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mensages and returns the data saved in the database.
     * @param {MensageCreateManyAndReturnArgs} args - Arguments to create many Mensages.
     * @example
     * // Create many Mensages
     * const mensage = await prisma.mensage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mensages and only return the `id`
     * const mensageWithIdOnly = await prisma.mensage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MensageCreateManyAndReturnArgs>(args?: SelectSubset<T, MensageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mensage.
     * @param {MensageDeleteArgs} args - Arguments to delete one Mensage.
     * @example
     * // Delete one Mensage
     * const Mensage = await prisma.mensage.delete({
     *   where: {
     *     // ... filter to delete one Mensage
     *   }
     * })
     * 
     */
    delete<T extends MensageDeleteArgs>(args: SelectSubset<T, MensageDeleteArgs<ExtArgs>>): Prisma__MensageClient<$Result.GetResult<Prisma.$MensagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mensage.
     * @param {MensageUpdateArgs} args - Arguments to update one Mensage.
     * @example
     * // Update one Mensage
     * const mensage = await prisma.mensage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MensageUpdateArgs>(args: SelectSubset<T, MensageUpdateArgs<ExtArgs>>): Prisma__MensageClient<$Result.GetResult<Prisma.$MensagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mensages.
     * @param {MensageDeleteManyArgs} args - Arguments to filter Mensages to delete.
     * @example
     * // Delete a few Mensages
     * const { count } = await prisma.mensage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MensageDeleteManyArgs>(args?: SelectSubset<T, MensageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mensages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mensages
     * const mensage = await prisma.mensage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MensageUpdateManyArgs>(args: SelectSubset<T, MensageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mensages and returns the data updated in the database.
     * @param {MensageUpdateManyAndReturnArgs} args - Arguments to update many Mensages.
     * @example
     * // Update many Mensages
     * const mensage = await prisma.mensage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mensages and only return the `id`
     * const mensageWithIdOnly = await prisma.mensage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MensageUpdateManyAndReturnArgs>(args: SelectSubset<T, MensageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mensage.
     * @param {MensageUpsertArgs} args - Arguments to update or create a Mensage.
     * @example
     * // Update or create a Mensage
     * const mensage = await prisma.mensage.upsert({
     *   create: {
     *     // ... data to create a Mensage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mensage we want to update
     *   }
     * })
     */
    upsert<T extends MensageUpsertArgs>(args: SelectSubset<T, MensageUpsertArgs<ExtArgs>>): Prisma__MensageClient<$Result.GetResult<Prisma.$MensagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mensages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensageCountArgs} args - Arguments to filter Mensages to count.
     * @example
     * // Count the number of Mensages
     * const count = await prisma.mensage.count({
     *   where: {
     *     // ... the filter for the Mensages we want to count
     *   }
     * })
    **/
    count<T extends MensageCountArgs>(
      args?: Subset<T, MensageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MensageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mensage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MensageAggregateArgs>(args: Subset<T, MensageAggregateArgs>): Prisma.PrismaPromise<GetMensageAggregateType<T>>

    /**
     * Group by Mensage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MensageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MensageGroupByArgs['orderBy'] }
        : { orderBy?: MensageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MensageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMensageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mensage model
   */
  readonly fields: MensageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mensage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MensageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mensage model
   */
  interface MensageFieldRefs {
    readonly id: FieldRef<"Mensage", 'String'>
    readonly name: FieldRef<"Mensage", 'String'>
    readonly email: FieldRef<"Mensage", 'String'>
    readonly message: FieldRef<"Mensage", 'String'>
    readonly createdAt: FieldRef<"Mensage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mensage findUnique
   */
  export type MensageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensage
     */
    select?: MensageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensage
     */
    omit?: MensageOmit<ExtArgs> | null
    /**
     * Filter, which Mensage to fetch.
     */
    where: MensageWhereUniqueInput
  }

  /**
   * Mensage findUniqueOrThrow
   */
  export type MensageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensage
     */
    select?: MensageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensage
     */
    omit?: MensageOmit<ExtArgs> | null
    /**
     * Filter, which Mensage to fetch.
     */
    where: MensageWhereUniqueInput
  }

  /**
   * Mensage findFirst
   */
  export type MensageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensage
     */
    select?: MensageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensage
     */
    omit?: MensageOmit<ExtArgs> | null
    /**
     * Filter, which Mensage to fetch.
     */
    where?: MensageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensages to fetch.
     */
    orderBy?: MensageOrderByWithRelationInput | MensageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mensages.
     */
    cursor?: MensageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mensages.
     */
    distinct?: MensageScalarFieldEnum | MensageScalarFieldEnum[]
  }

  /**
   * Mensage findFirstOrThrow
   */
  export type MensageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensage
     */
    select?: MensageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensage
     */
    omit?: MensageOmit<ExtArgs> | null
    /**
     * Filter, which Mensage to fetch.
     */
    where?: MensageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensages to fetch.
     */
    orderBy?: MensageOrderByWithRelationInput | MensageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mensages.
     */
    cursor?: MensageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mensages.
     */
    distinct?: MensageScalarFieldEnum | MensageScalarFieldEnum[]
  }

  /**
   * Mensage findMany
   */
  export type MensageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensage
     */
    select?: MensageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensage
     */
    omit?: MensageOmit<ExtArgs> | null
    /**
     * Filter, which Mensages to fetch.
     */
    where?: MensageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensages to fetch.
     */
    orderBy?: MensageOrderByWithRelationInput | MensageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mensages.
     */
    cursor?: MensageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensages.
     */
    skip?: number
    distinct?: MensageScalarFieldEnum | MensageScalarFieldEnum[]
  }

  /**
   * Mensage create
   */
  export type MensageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensage
     */
    select?: MensageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensage
     */
    omit?: MensageOmit<ExtArgs> | null
    /**
     * The data needed to create a Mensage.
     */
    data: XOR<MensageCreateInput, MensageUncheckedCreateInput>
  }

  /**
   * Mensage createMany
   */
  export type MensageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mensages.
     */
    data: MensageCreateManyInput | MensageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mensage createManyAndReturn
   */
  export type MensageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensage
     */
    select?: MensageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mensage
     */
    omit?: MensageOmit<ExtArgs> | null
    /**
     * The data used to create many Mensages.
     */
    data: MensageCreateManyInput | MensageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mensage update
   */
  export type MensageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensage
     */
    select?: MensageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensage
     */
    omit?: MensageOmit<ExtArgs> | null
    /**
     * The data needed to update a Mensage.
     */
    data: XOR<MensageUpdateInput, MensageUncheckedUpdateInput>
    /**
     * Choose, which Mensage to update.
     */
    where: MensageWhereUniqueInput
  }

  /**
   * Mensage updateMany
   */
  export type MensageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mensages.
     */
    data: XOR<MensageUpdateManyMutationInput, MensageUncheckedUpdateManyInput>
    /**
     * Filter which Mensages to update
     */
    where?: MensageWhereInput
    /**
     * Limit how many Mensages to update.
     */
    limit?: number
  }

  /**
   * Mensage updateManyAndReturn
   */
  export type MensageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensage
     */
    select?: MensageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mensage
     */
    omit?: MensageOmit<ExtArgs> | null
    /**
     * The data used to update Mensages.
     */
    data: XOR<MensageUpdateManyMutationInput, MensageUncheckedUpdateManyInput>
    /**
     * Filter which Mensages to update
     */
    where?: MensageWhereInput
    /**
     * Limit how many Mensages to update.
     */
    limit?: number
  }

  /**
   * Mensage upsert
   */
  export type MensageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensage
     */
    select?: MensageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensage
     */
    omit?: MensageOmit<ExtArgs> | null
    /**
     * The filter to search for the Mensage to update in case it exists.
     */
    where: MensageWhereUniqueInput
    /**
     * In case the Mensage found by the `where` argument doesn't exist, create a new Mensage with this data.
     */
    create: XOR<MensageCreateInput, MensageUncheckedCreateInput>
    /**
     * In case the Mensage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MensageUpdateInput, MensageUncheckedUpdateInput>
  }

  /**
   * Mensage delete
   */
  export type MensageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensage
     */
    select?: MensageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensage
     */
    omit?: MensageOmit<ExtArgs> | null
    /**
     * Filter which Mensage to delete.
     */
    where: MensageWhereUniqueInput
  }

  /**
   * Mensage deleteMany
   */
  export type MensageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mensages to delete
     */
    where?: MensageWhereInput
    /**
     * Limit how many Mensages to delete.
     */
    limit?: number
  }

  /**
   * Mensage without action
   */
  export type MensageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensage
     */
    select?: MensageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensage
     */
    omit?: MensageOmit<ExtArgs> | null
  }


  /**
   * Model Inscricao
   */

  export type AggregateInscricao = {
    _count: InscricaoCountAggregateOutputType | null
    _min: InscricaoMinAggregateOutputType | null
    _max: InscricaoMaxAggregateOutputType | null
  }

  export type InscricaoMinAggregateOutputType = {
    id: string | null
    vagaId: string | null
    candidatoId: string | null
    createdAt: Date | null
  }

  export type InscricaoMaxAggregateOutputType = {
    id: string | null
    vagaId: string | null
    candidatoId: string | null
    createdAt: Date | null
  }

  export type InscricaoCountAggregateOutputType = {
    id: number
    vagaId: number
    candidatoId: number
    createdAt: number
    _all: number
  }


  export type InscricaoMinAggregateInputType = {
    id?: true
    vagaId?: true
    candidatoId?: true
    createdAt?: true
  }

  export type InscricaoMaxAggregateInputType = {
    id?: true
    vagaId?: true
    candidatoId?: true
    createdAt?: true
  }

  export type InscricaoCountAggregateInputType = {
    id?: true
    vagaId?: true
    candidatoId?: true
    createdAt?: true
    _all?: true
  }

  export type InscricaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inscricao to aggregate.
     */
    where?: InscricaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inscricaos to fetch.
     */
    orderBy?: InscricaoOrderByWithRelationInput | InscricaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InscricaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inscricaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inscricaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inscricaos
    **/
    _count?: true | InscricaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InscricaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InscricaoMaxAggregateInputType
  }

  export type GetInscricaoAggregateType<T extends InscricaoAggregateArgs> = {
        [P in keyof T & keyof AggregateInscricao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInscricao[P]>
      : GetScalarType<T[P], AggregateInscricao[P]>
  }




  export type InscricaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InscricaoWhereInput
    orderBy?: InscricaoOrderByWithAggregationInput | InscricaoOrderByWithAggregationInput[]
    by: InscricaoScalarFieldEnum[] | InscricaoScalarFieldEnum
    having?: InscricaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InscricaoCountAggregateInputType | true
    _min?: InscricaoMinAggregateInputType
    _max?: InscricaoMaxAggregateInputType
  }

  export type InscricaoGroupByOutputType = {
    id: string
    vagaId: string
    candidatoId: string
    createdAt: Date
    _count: InscricaoCountAggregateOutputType | null
    _min: InscricaoMinAggregateOutputType | null
    _max: InscricaoMaxAggregateOutputType | null
  }

  type GetInscricaoGroupByPayload<T extends InscricaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InscricaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InscricaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InscricaoGroupByOutputType[P]>
            : GetScalarType<T[P], InscricaoGroupByOutputType[P]>
        }
      >
    >


  export type InscricaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vagaId?: boolean
    candidatoId?: boolean
    createdAt?: boolean
    vaga?: boolean | VagaDefaultArgs<ExtArgs>
    candidato?: boolean | CandidatoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inscricao"]>

  export type InscricaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vagaId?: boolean
    candidatoId?: boolean
    createdAt?: boolean
    vaga?: boolean | VagaDefaultArgs<ExtArgs>
    candidato?: boolean | CandidatoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inscricao"]>

  export type InscricaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vagaId?: boolean
    candidatoId?: boolean
    createdAt?: boolean
    vaga?: boolean | VagaDefaultArgs<ExtArgs>
    candidato?: boolean | CandidatoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inscricao"]>

  export type InscricaoSelectScalar = {
    id?: boolean
    vagaId?: boolean
    candidatoId?: boolean
    createdAt?: boolean
  }

  export type InscricaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vagaId" | "candidatoId" | "createdAt", ExtArgs["result"]["inscricao"]>
  export type InscricaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vaga?: boolean | VagaDefaultArgs<ExtArgs>
    candidato?: boolean | CandidatoDefaultArgs<ExtArgs>
  }
  export type InscricaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vaga?: boolean | VagaDefaultArgs<ExtArgs>
    candidato?: boolean | CandidatoDefaultArgs<ExtArgs>
  }
  export type InscricaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vaga?: boolean | VagaDefaultArgs<ExtArgs>
    candidato?: boolean | CandidatoDefaultArgs<ExtArgs>
  }

  export type $InscricaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inscricao"
    objects: {
      vaga: Prisma.$VagaPayload<ExtArgs>
      candidato: Prisma.$CandidatoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vagaId: string
      candidatoId: string
      createdAt: Date
    }, ExtArgs["result"]["inscricao"]>
    composites: {}
  }

  type InscricaoGetPayload<S extends boolean | null | undefined | InscricaoDefaultArgs> = $Result.GetResult<Prisma.$InscricaoPayload, S>

  type InscricaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InscricaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InscricaoCountAggregateInputType | true
    }

  export interface InscricaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inscricao'], meta: { name: 'Inscricao' } }
    /**
     * Find zero or one Inscricao that matches the filter.
     * @param {InscricaoFindUniqueArgs} args - Arguments to find a Inscricao
     * @example
     * // Get one Inscricao
     * const inscricao = await prisma.inscricao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InscricaoFindUniqueArgs>(args: SelectSubset<T, InscricaoFindUniqueArgs<ExtArgs>>): Prisma__InscricaoClient<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inscricao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InscricaoFindUniqueOrThrowArgs} args - Arguments to find a Inscricao
     * @example
     * // Get one Inscricao
     * const inscricao = await prisma.inscricao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InscricaoFindUniqueOrThrowArgs>(args: SelectSubset<T, InscricaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InscricaoClient<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inscricao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscricaoFindFirstArgs} args - Arguments to find a Inscricao
     * @example
     * // Get one Inscricao
     * const inscricao = await prisma.inscricao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InscricaoFindFirstArgs>(args?: SelectSubset<T, InscricaoFindFirstArgs<ExtArgs>>): Prisma__InscricaoClient<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inscricao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscricaoFindFirstOrThrowArgs} args - Arguments to find a Inscricao
     * @example
     * // Get one Inscricao
     * const inscricao = await prisma.inscricao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InscricaoFindFirstOrThrowArgs>(args?: SelectSubset<T, InscricaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__InscricaoClient<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inscricaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscricaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inscricaos
     * const inscricaos = await prisma.inscricao.findMany()
     * 
     * // Get first 10 Inscricaos
     * const inscricaos = await prisma.inscricao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inscricaoWithIdOnly = await prisma.inscricao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InscricaoFindManyArgs>(args?: SelectSubset<T, InscricaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inscricao.
     * @param {InscricaoCreateArgs} args - Arguments to create a Inscricao.
     * @example
     * // Create one Inscricao
     * const Inscricao = await prisma.inscricao.create({
     *   data: {
     *     // ... data to create a Inscricao
     *   }
     * })
     * 
     */
    create<T extends InscricaoCreateArgs>(args: SelectSubset<T, InscricaoCreateArgs<ExtArgs>>): Prisma__InscricaoClient<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inscricaos.
     * @param {InscricaoCreateManyArgs} args - Arguments to create many Inscricaos.
     * @example
     * // Create many Inscricaos
     * const inscricao = await prisma.inscricao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InscricaoCreateManyArgs>(args?: SelectSubset<T, InscricaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inscricaos and returns the data saved in the database.
     * @param {InscricaoCreateManyAndReturnArgs} args - Arguments to create many Inscricaos.
     * @example
     * // Create many Inscricaos
     * const inscricao = await prisma.inscricao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inscricaos and only return the `id`
     * const inscricaoWithIdOnly = await prisma.inscricao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InscricaoCreateManyAndReturnArgs>(args?: SelectSubset<T, InscricaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inscricao.
     * @param {InscricaoDeleteArgs} args - Arguments to delete one Inscricao.
     * @example
     * // Delete one Inscricao
     * const Inscricao = await prisma.inscricao.delete({
     *   where: {
     *     // ... filter to delete one Inscricao
     *   }
     * })
     * 
     */
    delete<T extends InscricaoDeleteArgs>(args: SelectSubset<T, InscricaoDeleteArgs<ExtArgs>>): Prisma__InscricaoClient<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inscricao.
     * @param {InscricaoUpdateArgs} args - Arguments to update one Inscricao.
     * @example
     * // Update one Inscricao
     * const inscricao = await prisma.inscricao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InscricaoUpdateArgs>(args: SelectSubset<T, InscricaoUpdateArgs<ExtArgs>>): Prisma__InscricaoClient<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inscricaos.
     * @param {InscricaoDeleteManyArgs} args - Arguments to filter Inscricaos to delete.
     * @example
     * // Delete a few Inscricaos
     * const { count } = await prisma.inscricao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InscricaoDeleteManyArgs>(args?: SelectSubset<T, InscricaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inscricaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscricaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inscricaos
     * const inscricao = await prisma.inscricao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InscricaoUpdateManyArgs>(args: SelectSubset<T, InscricaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inscricaos and returns the data updated in the database.
     * @param {InscricaoUpdateManyAndReturnArgs} args - Arguments to update many Inscricaos.
     * @example
     * // Update many Inscricaos
     * const inscricao = await prisma.inscricao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inscricaos and only return the `id`
     * const inscricaoWithIdOnly = await prisma.inscricao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InscricaoUpdateManyAndReturnArgs>(args: SelectSubset<T, InscricaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inscricao.
     * @param {InscricaoUpsertArgs} args - Arguments to update or create a Inscricao.
     * @example
     * // Update or create a Inscricao
     * const inscricao = await prisma.inscricao.upsert({
     *   create: {
     *     // ... data to create a Inscricao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inscricao we want to update
     *   }
     * })
     */
    upsert<T extends InscricaoUpsertArgs>(args: SelectSubset<T, InscricaoUpsertArgs<ExtArgs>>): Prisma__InscricaoClient<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inscricaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscricaoCountArgs} args - Arguments to filter Inscricaos to count.
     * @example
     * // Count the number of Inscricaos
     * const count = await prisma.inscricao.count({
     *   where: {
     *     // ... the filter for the Inscricaos we want to count
     *   }
     * })
    **/
    count<T extends InscricaoCountArgs>(
      args?: Subset<T, InscricaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InscricaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inscricao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscricaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InscricaoAggregateArgs>(args: Subset<T, InscricaoAggregateArgs>): Prisma.PrismaPromise<GetInscricaoAggregateType<T>>

    /**
     * Group by Inscricao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscricaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InscricaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InscricaoGroupByArgs['orderBy'] }
        : { orderBy?: InscricaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InscricaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInscricaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inscricao model
   */
  readonly fields: InscricaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inscricao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InscricaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vaga<T extends VagaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VagaDefaultArgs<ExtArgs>>): Prisma__VagaClient<$Result.GetResult<Prisma.$VagaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    candidato<T extends CandidatoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidatoDefaultArgs<ExtArgs>>): Prisma__CandidatoClient<$Result.GetResult<Prisma.$CandidatoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Inscricao model
   */
  interface InscricaoFieldRefs {
    readonly id: FieldRef<"Inscricao", 'String'>
    readonly vagaId: FieldRef<"Inscricao", 'String'>
    readonly candidatoId: FieldRef<"Inscricao", 'String'>
    readonly createdAt: FieldRef<"Inscricao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Inscricao findUnique
   */
  export type InscricaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    /**
     * Filter, which Inscricao to fetch.
     */
    where: InscricaoWhereUniqueInput
  }

  /**
   * Inscricao findUniqueOrThrow
   */
  export type InscricaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    /**
     * Filter, which Inscricao to fetch.
     */
    where: InscricaoWhereUniqueInput
  }

  /**
   * Inscricao findFirst
   */
  export type InscricaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    /**
     * Filter, which Inscricao to fetch.
     */
    where?: InscricaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inscricaos to fetch.
     */
    orderBy?: InscricaoOrderByWithRelationInput | InscricaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inscricaos.
     */
    cursor?: InscricaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inscricaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inscricaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inscricaos.
     */
    distinct?: InscricaoScalarFieldEnum | InscricaoScalarFieldEnum[]
  }

  /**
   * Inscricao findFirstOrThrow
   */
  export type InscricaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    /**
     * Filter, which Inscricao to fetch.
     */
    where?: InscricaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inscricaos to fetch.
     */
    orderBy?: InscricaoOrderByWithRelationInput | InscricaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inscricaos.
     */
    cursor?: InscricaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inscricaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inscricaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inscricaos.
     */
    distinct?: InscricaoScalarFieldEnum | InscricaoScalarFieldEnum[]
  }

  /**
   * Inscricao findMany
   */
  export type InscricaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    /**
     * Filter, which Inscricaos to fetch.
     */
    where?: InscricaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inscricaos to fetch.
     */
    orderBy?: InscricaoOrderByWithRelationInput | InscricaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inscricaos.
     */
    cursor?: InscricaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inscricaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inscricaos.
     */
    skip?: number
    distinct?: InscricaoScalarFieldEnum | InscricaoScalarFieldEnum[]
  }

  /**
   * Inscricao create
   */
  export type InscricaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Inscricao.
     */
    data: XOR<InscricaoCreateInput, InscricaoUncheckedCreateInput>
  }

  /**
   * Inscricao createMany
   */
  export type InscricaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inscricaos.
     */
    data: InscricaoCreateManyInput | InscricaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inscricao createManyAndReturn
   */
  export type InscricaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * The data used to create many Inscricaos.
     */
    data: InscricaoCreateManyInput | InscricaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inscricao update
   */
  export type InscricaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Inscricao.
     */
    data: XOR<InscricaoUpdateInput, InscricaoUncheckedUpdateInput>
    /**
     * Choose, which Inscricao to update.
     */
    where: InscricaoWhereUniqueInput
  }

  /**
   * Inscricao updateMany
   */
  export type InscricaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inscricaos.
     */
    data: XOR<InscricaoUpdateManyMutationInput, InscricaoUncheckedUpdateManyInput>
    /**
     * Filter which Inscricaos to update
     */
    where?: InscricaoWhereInput
    /**
     * Limit how many Inscricaos to update.
     */
    limit?: number
  }

  /**
   * Inscricao updateManyAndReturn
   */
  export type InscricaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * The data used to update Inscricaos.
     */
    data: XOR<InscricaoUpdateManyMutationInput, InscricaoUncheckedUpdateManyInput>
    /**
     * Filter which Inscricaos to update
     */
    where?: InscricaoWhereInput
    /**
     * Limit how many Inscricaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inscricao upsert
   */
  export type InscricaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Inscricao to update in case it exists.
     */
    where: InscricaoWhereUniqueInput
    /**
     * In case the Inscricao found by the `where` argument doesn't exist, create a new Inscricao with this data.
     */
    create: XOR<InscricaoCreateInput, InscricaoUncheckedCreateInput>
    /**
     * In case the Inscricao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InscricaoUpdateInput, InscricaoUncheckedUpdateInput>
  }

  /**
   * Inscricao delete
   */
  export type InscricaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    /**
     * Filter which Inscricao to delete.
     */
    where: InscricaoWhereUniqueInput
  }

  /**
   * Inscricao deleteMany
   */
  export type InscricaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inscricaos to delete
     */
    where?: InscricaoWhereInput
    /**
     * Limit how many Inscricaos to delete.
     */
    limit?: number
  }

  /**
   * Inscricao without action
   */
  export type InscricaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VagaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    localizacao: 'localizacao',
    descricao: 'descricao',
    salario: 'salario',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VagaScalarFieldEnum = (typeof VagaScalarFieldEnum)[keyof typeof VagaScalarFieldEnum]


  export const CandidatoScalarFieldEnum: {
    id: 'id',
    cv_path: 'cv_path',
    createdAt: 'createdAt'
  };

  export type CandidatoScalarFieldEnum = (typeof CandidatoScalarFieldEnum)[keyof typeof CandidatoScalarFieldEnum]


  export const MensageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type MensageScalarFieldEnum = (typeof MensageScalarFieldEnum)[keyof typeof MensageScalarFieldEnum]


  export const InscricaoScalarFieldEnum: {
    id: 'id',
    vagaId: 'vagaId',
    candidatoId: 'candidatoId',
    createdAt: 'createdAt'
  };

  export type InscricaoScalarFieldEnum = (typeof InscricaoScalarFieldEnum)[keyof typeof InscricaoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    nome?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    vagas?: VagaListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vagas?: VagaOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nome?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    vagas?: VagaListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    nome?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VagaWhereInput = {
    AND?: VagaWhereInput | VagaWhereInput[]
    OR?: VagaWhereInput[]
    NOT?: VagaWhereInput | VagaWhereInput[]
    id?: StringFilter<"Vaga"> | string
    nome?: StringFilter<"Vaga"> | string
    localizacao?: StringFilter<"Vaga"> | string
    descricao?: StringFilter<"Vaga"> | string
    salario?: FloatFilter<"Vaga"> | number
    createdBy?: IntFilter<"Vaga"> | number
    createdAt?: DateTimeFilter<"Vaga"> | Date | string
    updatedAt?: DateTimeFilter<"Vaga"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    inscricoes?: InscricaoListRelationFilter
  }

  export type VagaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    localizacao?: SortOrder
    descricao?: SortOrder
    salario?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creator?: UserOrderByWithRelationInput
    inscricoes?: InscricaoOrderByRelationAggregateInput
  }

  export type VagaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VagaWhereInput | VagaWhereInput[]
    OR?: VagaWhereInput[]
    NOT?: VagaWhereInput | VagaWhereInput[]
    nome?: StringFilter<"Vaga"> | string
    localizacao?: StringFilter<"Vaga"> | string
    descricao?: StringFilter<"Vaga"> | string
    salario?: FloatFilter<"Vaga"> | number
    createdBy?: IntFilter<"Vaga"> | number
    createdAt?: DateTimeFilter<"Vaga"> | Date | string
    updatedAt?: DateTimeFilter<"Vaga"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    inscricoes?: InscricaoListRelationFilter
  }, "id">

  export type VagaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    localizacao?: SortOrder
    descricao?: SortOrder
    salario?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VagaCountOrderByAggregateInput
    _avg?: VagaAvgOrderByAggregateInput
    _max?: VagaMaxOrderByAggregateInput
    _min?: VagaMinOrderByAggregateInput
    _sum?: VagaSumOrderByAggregateInput
  }

  export type VagaScalarWhereWithAggregatesInput = {
    AND?: VagaScalarWhereWithAggregatesInput | VagaScalarWhereWithAggregatesInput[]
    OR?: VagaScalarWhereWithAggregatesInput[]
    NOT?: VagaScalarWhereWithAggregatesInput | VagaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vaga"> | string
    nome?: StringWithAggregatesFilter<"Vaga"> | string
    localizacao?: StringWithAggregatesFilter<"Vaga"> | string
    descricao?: StringWithAggregatesFilter<"Vaga"> | string
    salario?: FloatWithAggregatesFilter<"Vaga"> | number
    createdBy?: IntWithAggregatesFilter<"Vaga"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Vaga"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vaga"> | Date | string
  }

  export type CandidatoWhereInput = {
    AND?: CandidatoWhereInput | CandidatoWhereInput[]
    OR?: CandidatoWhereInput[]
    NOT?: CandidatoWhereInput | CandidatoWhereInput[]
    id?: StringFilter<"Candidato"> | string
    cv_path?: StringFilter<"Candidato"> | string
    createdAt?: DateTimeFilter<"Candidato"> | Date | string
    inscricoes?: InscricaoListRelationFilter
  }

  export type CandidatoOrderByWithRelationInput = {
    id?: SortOrder
    cv_path?: SortOrder
    createdAt?: SortOrder
    inscricoes?: InscricaoOrderByRelationAggregateInput
  }

  export type CandidatoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CandidatoWhereInput | CandidatoWhereInput[]
    OR?: CandidatoWhereInput[]
    NOT?: CandidatoWhereInput | CandidatoWhereInput[]
    cv_path?: StringFilter<"Candidato"> | string
    createdAt?: DateTimeFilter<"Candidato"> | Date | string
    inscricoes?: InscricaoListRelationFilter
  }, "id">

  export type CandidatoOrderByWithAggregationInput = {
    id?: SortOrder
    cv_path?: SortOrder
    createdAt?: SortOrder
    _count?: CandidatoCountOrderByAggregateInput
    _max?: CandidatoMaxOrderByAggregateInput
    _min?: CandidatoMinOrderByAggregateInput
  }

  export type CandidatoScalarWhereWithAggregatesInput = {
    AND?: CandidatoScalarWhereWithAggregatesInput | CandidatoScalarWhereWithAggregatesInput[]
    OR?: CandidatoScalarWhereWithAggregatesInput[]
    NOT?: CandidatoScalarWhereWithAggregatesInput | CandidatoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Candidato"> | string
    cv_path?: StringWithAggregatesFilter<"Candidato"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Candidato"> | Date | string
  }

  export type MensageWhereInput = {
    AND?: MensageWhereInput | MensageWhereInput[]
    OR?: MensageWhereInput[]
    NOT?: MensageWhereInput | MensageWhereInput[]
    id?: StringFilter<"Mensage"> | string
    name?: StringFilter<"Mensage"> | string
    email?: StringFilter<"Mensage"> | string
    message?: StringFilter<"Mensage"> | string
    createdAt?: DateTimeFilter<"Mensage"> | Date | string
  }

  export type MensageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type MensageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MensageWhereInput | MensageWhereInput[]
    OR?: MensageWhereInput[]
    NOT?: MensageWhereInput | MensageWhereInput[]
    name?: StringFilter<"Mensage"> | string
    email?: StringFilter<"Mensage"> | string
    message?: StringFilter<"Mensage"> | string
    createdAt?: DateTimeFilter<"Mensage"> | Date | string
  }, "id">

  export type MensageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    _count?: MensageCountOrderByAggregateInput
    _max?: MensageMaxOrderByAggregateInput
    _min?: MensageMinOrderByAggregateInput
  }

  export type MensageScalarWhereWithAggregatesInput = {
    AND?: MensageScalarWhereWithAggregatesInput | MensageScalarWhereWithAggregatesInput[]
    OR?: MensageScalarWhereWithAggregatesInput[]
    NOT?: MensageScalarWhereWithAggregatesInput | MensageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Mensage"> | string
    name?: StringWithAggregatesFilter<"Mensage"> | string
    email?: StringWithAggregatesFilter<"Mensage"> | string
    message?: StringWithAggregatesFilter<"Mensage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Mensage"> | Date | string
  }

  export type InscricaoWhereInput = {
    AND?: InscricaoWhereInput | InscricaoWhereInput[]
    OR?: InscricaoWhereInput[]
    NOT?: InscricaoWhereInput | InscricaoWhereInput[]
    id?: StringFilter<"Inscricao"> | string
    vagaId?: StringFilter<"Inscricao"> | string
    candidatoId?: StringFilter<"Inscricao"> | string
    createdAt?: DateTimeFilter<"Inscricao"> | Date | string
    vaga?: XOR<VagaScalarRelationFilter, VagaWhereInput>
    candidato?: XOR<CandidatoScalarRelationFilter, CandidatoWhereInput>
  }

  export type InscricaoOrderByWithRelationInput = {
    id?: SortOrder
    vagaId?: SortOrder
    candidatoId?: SortOrder
    createdAt?: SortOrder
    vaga?: VagaOrderByWithRelationInput
    candidato?: CandidatoOrderByWithRelationInput
  }

  export type InscricaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InscricaoWhereInput | InscricaoWhereInput[]
    OR?: InscricaoWhereInput[]
    NOT?: InscricaoWhereInput | InscricaoWhereInput[]
    vagaId?: StringFilter<"Inscricao"> | string
    candidatoId?: StringFilter<"Inscricao"> | string
    createdAt?: DateTimeFilter<"Inscricao"> | Date | string
    vaga?: XOR<VagaScalarRelationFilter, VagaWhereInput>
    candidato?: XOR<CandidatoScalarRelationFilter, CandidatoWhereInput>
  }, "id">

  export type InscricaoOrderByWithAggregationInput = {
    id?: SortOrder
    vagaId?: SortOrder
    candidatoId?: SortOrder
    createdAt?: SortOrder
    _count?: InscricaoCountOrderByAggregateInput
    _max?: InscricaoMaxOrderByAggregateInput
    _min?: InscricaoMinOrderByAggregateInput
  }

  export type InscricaoScalarWhereWithAggregatesInput = {
    AND?: InscricaoScalarWhereWithAggregatesInput | InscricaoScalarWhereWithAggregatesInput[]
    OR?: InscricaoScalarWhereWithAggregatesInput[]
    NOT?: InscricaoScalarWhereWithAggregatesInput | InscricaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Inscricao"> | string
    vagaId?: StringWithAggregatesFilter<"Inscricao"> | string
    candidatoId?: StringWithAggregatesFilter<"Inscricao"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Inscricao"> | Date | string
  }

  export type UserCreateInput = {
    nome: string
    email: string
    password: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vagas?: VagaCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    password: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vagas?: VagaUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vagas?: VagaUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vagas?: VagaUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    nome: string
    email: string
    password: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VagaCreateInput = {
    id?: string
    nome: string
    localizacao: string
    descricao: string
    salario: number
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutVagasInput
    inscricoes?: InscricaoCreateNestedManyWithoutVagaInput
  }

  export type VagaUncheckedCreateInput = {
    id?: string
    nome: string
    localizacao: string
    descricao: string
    salario: number
    createdBy: number
    createdAt?: Date | string
    updatedAt?: Date | string
    inscricoes?: InscricaoUncheckedCreateNestedManyWithoutVagaInput
  }

  export type VagaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    salario?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutVagasNestedInput
    inscricoes?: InscricaoUpdateManyWithoutVagaNestedInput
  }

  export type VagaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    salario?: FloatFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inscricoes?: InscricaoUncheckedUpdateManyWithoutVagaNestedInput
  }

  export type VagaCreateManyInput = {
    id?: string
    nome: string
    localizacao: string
    descricao: string
    salario: number
    createdBy: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VagaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    salario?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VagaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    salario?: FloatFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidatoCreateInput = {
    id?: string
    cv_path: string
    createdAt?: Date | string
    inscricoes?: InscricaoCreateNestedManyWithoutCandidatoInput
  }

  export type CandidatoUncheckedCreateInput = {
    id?: string
    cv_path: string
    createdAt?: Date | string
    inscricoes?: InscricaoUncheckedCreateNestedManyWithoutCandidatoInput
  }

  export type CandidatoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cv_path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inscricoes?: InscricaoUpdateManyWithoutCandidatoNestedInput
  }

  export type CandidatoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cv_path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inscricoes?: InscricaoUncheckedUpdateManyWithoutCandidatoNestedInput
  }

  export type CandidatoCreateManyInput = {
    id?: string
    cv_path: string
    createdAt?: Date | string
  }

  export type CandidatoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cv_path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidatoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cv_path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensageCreateInput = {
    id?: string
    name: string
    email: string
    message: string
    createdAt?: Date | string
  }

  export type MensageUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    message: string
    createdAt?: Date | string
  }

  export type MensageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensageCreateManyInput = {
    id?: string
    name: string
    email: string
    message: string
    createdAt?: Date | string
  }

  export type MensageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InscricaoCreateInput = {
    id?: string
    createdAt?: Date | string
    vaga: VagaCreateNestedOneWithoutInscricoesInput
    candidato: CandidatoCreateNestedOneWithoutInscricoesInput
  }

  export type InscricaoUncheckedCreateInput = {
    id?: string
    vagaId: string
    candidatoId: string
    createdAt?: Date | string
  }

  export type InscricaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vaga?: VagaUpdateOneRequiredWithoutInscricoesNestedInput
    candidato?: CandidatoUpdateOneRequiredWithoutInscricoesNestedInput
  }

  export type InscricaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vagaId?: StringFieldUpdateOperationsInput | string
    candidatoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InscricaoCreateManyInput = {
    id?: string
    vagaId: string
    candidatoId: string
    createdAt?: Date | string
  }

  export type InscricaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InscricaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vagaId?: StringFieldUpdateOperationsInput | string
    candidatoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type VagaListRelationFilter = {
    every?: VagaWhereInput
    some?: VagaWhereInput
    none?: VagaWhereInput
  }

  export type VagaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type InscricaoListRelationFilter = {
    every?: InscricaoWhereInput
    some?: InscricaoWhereInput
    none?: InscricaoWhereInput
  }

  export type InscricaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VagaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    localizacao?: SortOrder
    descricao?: SortOrder
    salario?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VagaAvgOrderByAggregateInput = {
    salario?: SortOrder
    createdBy?: SortOrder
  }

  export type VagaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    localizacao?: SortOrder
    descricao?: SortOrder
    salario?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VagaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    localizacao?: SortOrder
    descricao?: SortOrder
    salario?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VagaSumOrderByAggregateInput = {
    salario?: SortOrder
    createdBy?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CandidatoCountOrderByAggregateInput = {
    id?: SortOrder
    cv_path?: SortOrder
    createdAt?: SortOrder
  }

  export type CandidatoMaxOrderByAggregateInput = {
    id?: SortOrder
    cv_path?: SortOrder
    createdAt?: SortOrder
  }

  export type CandidatoMinOrderByAggregateInput = {
    id?: SortOrder
    cv_path?: SortOrder
    createdAt?: SortOrder
  }

  export type MensageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type MensageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type MensageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type VagaScalarRelationFilter = {
    is?: VagaWhereInput
    isNot?: VagaWhereInput
  }

  export type CandidatoScalarRelationFilter = {
    is?: CandidatoWhereInput
    isNot?: CandidatoWhereInput
  }

  export type InscricaoCountOrderByAggregateInput = {
    id?: SortOrder
    vagaId?: SortOrder
    candidatoId?: SortOrder
    createdAt?: SortOrder
  }

  export type InscricaoMaxOrderByAggregateInput = {
    id?: SortOrder
    vagaId?: SortOrder
    candidatoId?: SortOrder
    createdAt?: SortOrder
  }

  export type InscricaoMinOrderByAggregateInput = {
    id?: SortOrder
    vagaId?: SortOrder
    candidatoId?: SortOrder
    createdAt?: SortOrder
  }

  export type VagaCreateNestedManyWithoutCreatorInput = {
    create?: XOR<VagaCreateWithoutCreatorInput, VagaUncheckedCreateWithoutCreatorInput> | VagaCreateWithoutCreatorInput[] | VagaUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: VagaCreateOrConnectWithoutCreatorInput | VagaCreateOrConnectWithoutCreatorInput[]
    createMany?: VagaCreateManyCreatorInputEnvelope
    connect?: VagaWhereUniqueInput | VagaWhereUniqueInput[]
  }

  export type VagaUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<VagaCreateWithoutCreatorInput, VagaUncheckedCreateWithoutCreatorInput> | VagaCreateWithoutCreatorInput[] | VagaUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: VagaCreateOrConnectWithoutCreatorInput | VagaCreateOrConnectWithoutCreatorInput[]
    createMany?: VagaCreateManyCreatorInputEnvelope
    connect?: VagaWhereUniqueInput | VagaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VagaUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<VagaCreateWithoutCreatorInput, VagaUncheckedCreateWithoutCreatorInput> | VagaCreateWithoutCreatorInput[] | VagaUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: VagaCreateOrConnectWithoutCreatorInput | VagaCreateOrConnectWithoutCreatorInput[]
    upsert?: VagaUpsertWithWhereUniqueWithoutCreatorInput | VagaUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: VagaCreateManyCreatorInputEnvelope
    set?: VagaWhereUniqueInput | VagaWhereUniqueInput[]
    disconnect?: VagaWhereUniqueInput | VagaWhereUniqueInput[]
    delete?: VagaWhereUniqueInput | VagaWhereUniqueInput[]
    connect?: VagaWhereUniqueInput | VagaWhereUniqueInput[]
    update?: VagaUpdateWithWhereUniqueWithoutCreatorInput | VagaUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: VagaUpdateManyWithWhereWithoutCreatorInput | VagaUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: VagaScalarWhereInput | VagaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VagaUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<VagaCreateWithoutCreatorInput, VagaUncheckedCreateWithoutCreatorInput> | VagaCreateWithoutCreatorInput[] | VagaUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: VagaCreateOrConnectWithoutCreatorInput | VagaCreateOrConnectWithoutCreatorInput[]
    upsert?: VagaUpsertWithWhereUniqueWithoutCreatorInput | VagaUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: VagaCreateManyCreatorInputEnvelope
    set?: VagaWhereUniqueInput | VagaWhereUniqueInput[]
    disconnect?: VagaWhereUniqueInput | VagaWhereUniqueInput[]
    delete?: VagaWhereUniqueInput | VagaWhereUniqueInput[]
    connect?: VagaWhereUniqueInput | VagaWhereUniqueInput[]
    update?: VagaUpdateWithWhereUniqueWithoutCreatorInput | VagaUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: VagaUpdateManyWithWhereWithoutCreatorInput | VagaUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: VagaScalarWhereInput | VagaScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVagasInput = {
    create?: XOR<UserCreateWithoutVagasInput, UserUncheckedCreateWithoutVagasInput>
    connectOrCreate?: UserCreateOrConnectWithoutVagasInput
    connect?: UserWhereUniqueInput
  }

  export type InscricaoCreateNestedManyWithoutVagaInput = {
    create?: XOR<InscricaoCreateWithoutVagaInput, InscricaoUncheckedCreateWithoutVagaInput> | InscricaoCreateWithoutVagaInput[] | InscricaoUncheckedCreateWithoutVagaInput[]
    connectOrCreate?: InscricaoCreateOrConnectWithoutVagaInput | InscricaoCreateOrConnectWithoutVagaInput[]
    createMany?: InscricaoCreateManyVagaInputEnvelope
    connect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
  }

  export type InscricaoUncheckedCreateNestedManyWithoutVagaInput = {
    create?: XOR<InscricaoCreateWithoutVagaInput, InscricaoUncheckedCreateWithoutVagaInput> | InscricaoCreateWithoutVagaInput[] | InscricaoUncheckedCreateWithoutVagaInput[]
    connectOrCreate?: InscricaoCreateOrConnectWithoutVagaInput | InscricaoCreateOrConnectWithoutVagaInput[]
    createMany?: InscricaoCreateManyVagaInputEnvelope
    connect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutVagasNestedInput = {
    create?: XOR<UserCreateWithoutVagasInput, UserUncheckedCreateWithoutVagasInput>
    connectOrCreate?: UserCreateOrConnectWithoutVagasInput
    upsert?: UserUpsertWithoutVagasInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVagasInput, UserUpdateWithoutVagasInput>, UserUncheckedUpdateWithoutVagasInput>
  }

  export type InscricaoUpdateManyWithoutVagaNestedInput = {
    create?: XOR<InscricaoCreateWithoutVagaInput, InscricaoUncheckedCreateWithoutVagaInput> | InscricaoCreateWithoutVagaInput[] | InscricaoUncheckedCreateWithoutVagaInput[]
    connectOrCreate?: InscricaoCreateOrConnectWithoutVagaInput | InscricaoCreateOrConnectWithoutVagaInput[]
    upsert?: InscricaoUpsertWithWhereUniqueWithoutVagaInput | InscricaoUpsertWithWhereUniqueWithoutVagaInput[]
    createMany?: InscricaoCreateManyVagaInputEnvelope
    set?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    disconnect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    delete?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    connect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    update?: InscricaoUpdateWithWhereUniqueWithoutVagaInput | InscricaoUpdateWithWhereUniqueWithoutVagaInput[]
    updateMany?: InscricaoUpdateManyWithWhereWithoutVagaInput | InscricaoUpdateManyWithWhereWithoutVagaInput[]
    deleteMany?: InscricaoScalarWhereInput | InscricaoScalarWhereInput[]
  }

  export type InscricaoUncheckedUpdateManyWithoutVagaNestedInput = {
    create?: XOR<InscricaoCreateWithoutVagaInput, InscricaoUncheckedCreateWithoutVagaInput> | InscricaoCreateWithoutVagaInput[] | InscricaoUncheckedCreateWithoutVagaInput[]
    connectOrCreate?: InscricaoCreateOrConnectWithoutVagaInput | InscricaoCreateOrConnectWithoutVagaInput[]
    upsert?: InscricaoUpsertWithWhereUniqueWithoutVagaInput | InscricaoUpsertWithWhereUniqueWithoutVagaInput[]
    createMany?: InscricaoCreateManyVagaInputEnvelope
    set?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    disconnect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    delete?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    connect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    update?: InscricaoUpdateWithWhereUniqueWithoutVagaInput | InscricaoUpdateWithWhereUniqueWithoutVagaInput[]
    updateMany?: InscricaoUpdateManyWithWhereWithoutVagaInput | InscricaoUpdateManyWithWhereWithoutVagaInput[]
    deleteMany?: InscricaoScalarWhereInput | InscricaoScalarWhereInput[]
  }

  export type InscricaoCreateNestedManyWithoutCandidatoInput = {
    create?: XOR<InscricaoCreateWithoutCandidatoInput, InscricaoUncheckedCreateWithoutCandidatoInput> | InscricaoCreateWithoutCandidatoInput[] | InscricaoUncheckedCreateWithoutCandidatoInput[]
    connectOrCreate?: InscricaoCreateOrConnectWithoutCandidatoInput | InscricaoCreateOrConnectWithoutCandidatoInput[]
    createMany?: InscricaoCreateManyCandidatoInputEnvelope
    connect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
  }

  export type InscricaoUncheckedCreateNestedManyWithoutCandidatoInput = {
    create?: XOR<InscricaoCreateWithoutCandidatoInput, InscricaoUncheckedCreateWithoutCandidatoInput> | InscricaoCreateWithoutCandidatoInput[] | InscricaoUncheckedCreateWithoutCandidatoInput[]
    connectOrCreate?: InscricaoCreateOrConnectWithoutCandidatoInput | InscricaoCreateOrConnectWithoutCandidatoInput[]
    createMany?: InscricaoCreateManyCandidatoInputEnvelope
    connect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
  }

  export type InscricaoUpdateManyWithoutCandidatoNestedInput = {
    create?: XOR<InscricaoCreateWithoutCandidatoInput, InscricaoUncheckedCreateWithoutCandidatoInput> | InscricaoCreateWithoutCandidatoInput[] | InscricaoUncheckedCreateWithoutCandidatoInput[]
    connectOrCreate?: InscricaoCreateOrConnectWithoutCandidatoInput | InscricaoCreateOrConnectWithoutCandidatoInput[]
    upsert?: InscricaoUpsertWithWhereUniqueWithoutCandidatoInput | InscricaoUpsertWithWhereUniqueWithoutCandidatoInput[]
    createMany?: InscricaoCreateManyCandidatoInputEnvelope
    set?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    disconnect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    delete?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    connect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    update?: InscricaoUpdateWithWhereUniqueWithoutCandidatoInput | InscricaoUpdateWithWhereUniqueWithoutCandidatoInput[]
    updateMany?: InscricaoUpdateManyWithWhereWithoutCandidatoInput | InscricaoUpdateManyWithWhereWithoutCandidatoInput[]
    deleteMany?: InscricaoScalarWhereInput | InscricaoScalarWhereInput[]
  }

  export type InscricaoUncheckedUpdateManyWithoutCandidatoNestedInput = {
    create?: XOR<InscricaoCreateWithoutCandidatoInput, InscricaoUncheckedCreateWithoutCandidatoInput> | InscricaoCreateWithoutCandidatoInput[] | InscricaoUncheckedCreateWithoutCandidatoInput[]
    connectOrCreate?: InscricaoCreateOrConnectWithoutCandidatoInput | InscricaoCreateOrConnectWithoutCandidatoInput[]
    upsert?: InscricaoUpsertWithWhereUniqueWithoutCandidatoInput | InscricaoUpsertWithWhereUniqueWithoutCandidatoInput[]
    createMany?: InscricaoCreateManyCandidatoInputEnvelope
    set?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    disconnect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    delete?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    connect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    update?: InscricaoUpdateWithWhereUniqueWithoutCandidatoInput | InscricaoUpdateWithWhereUniqueWithoutCandidatoInput[]
    updateMany?: InscricaoUpdateManyWithWhereWithoutCandidatoInput | InscricaoUpdateManyWithWhereWithoutCandidatoInput[]
    deleteMany?: InscricaoScalarWhereInput | InscricaoScalarWhereInput[]
  }

  export type VagaCreateNestedOneWithoutInscricoesInput = {
    create?: XOR<VagaCreateWithoutInscricoesInput, VagaUncheckedCreateWithoutInscricoesInput>
    connectOrCreate?: VagaCreateOrConnectWithoutInscricoesInput
    connect?: VagaWhereUniqueInput
  }

  export type CandidatoCreateNestedOneWithoutInscricoesInput = {
    create?: XOR<CandidatoCreateWithoutInscricoesInput, CandidatoUncheckedCreateWithoutInscricoesInput>
    connectOrCreate?: CandidatoCreateOrConnectWithoutInscricoesInput
    connect?: CandidatoWhereUniqueInput
  }

  export type VagaUpdateOneRequiredWithoutInscricoesNestedInput = {
    create?: XOR<VagaCreateWithoutInscricoesInput, VagaUncheckedCreateWithoutInscricoesInput>
    connectOrCreate?: VagaCreateOrConnectWithoutInscricoesInput
    upsert?: VagaUpsertWithoutInscricoesInput
    connect?: VagaWhereUniqueInput
    update?: XOR<XOR<VagaUpdateToOneWithWhereWithoutInscricoesInput, VagaUpdateWithoutInscricoesInput>, VagaUncheckedUpdateWithoutInscricoesInput>
  }

  export type CandidatoUpdateOneRequiredWithoutInscricoesNestedInput = {
    create?: XOR<CandidatoCreateWithoutInscricoesInput, CandidatoUncheckedCreateWithoutInscricoesInput>
    connectOrCreate?: CandidatoCreateOrConnectWithoutInscricoesInput
    upsert?: CandidatoUpsertWithoutInscricoesInput
    connect?: CandidatoWhereUniqueInput
    update?: XOR<XOR<CandidatoUpdateToOneWithWhereWithoutInscricoesInput, CandidatoUpdateWithoutInscricoesInput>, CandidatoUncheckedUpdateWithoutInscricoesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type VagaCreateWithoutCreatorInput = {
    id?: string
    nome: string
    localizacao: string
    descricao: string
    salario: number
    createdAt?: Date | string
    updatedAt?: Date | string
    inscricoes?: InscricaoCreateNestedManyWithoutVagaInput
  }

  export type VagaUncheckedCreateWithoutCreatorInput = {
    id?: string
    nome: string
    localizacao: string
    descricao: string
    salario: number
    createdAt?: Date | string
    updatedAt?: Date | string
    inscricoes?: InscricaoUncheckedCreateNestedManyWithoutVagaInput
  }

  export type VagaCreateOrConnectWithoutCreatorInput = {
    where: VagaWhereUniqueInput
    create: XOR<VagaCreateWithoutCreatorInput, VagaUncheckedCreateWithoutCreatorInput>
  }

  export type VagaCreateManyCreatorInputEnvelope = {
    data: VagaCreateManyCreatorInput | VagaCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type VagaUpsertWithWhereUniqueWithoutCreatorInput = {
    where: VagaWhereUniqueInput
    update: XOR<VagaUpdateWithoutCreatorInput, VagaUncheckedUpdateWithoutCreatorInput>
    create: XOR<VagaCreateWithoutCreatorInput, VagaUncheckedCreateWithoutCreatorInput>
  }

  export type VagaUpdateWithWhereUniqueWithoutCreatorInput = {
    where: VagaWhereUniqueInput
    data: XOR<VagaUpdateWithoutCreatorInput, VagaUncheckedUpdateWithoutCreatorInput>
  }

  export type VagaUpdateManyWithWhereWithoutCreatorInput = {
    where: VagaScalarWhereInput
    data: XOR<VagaUpdateManyMutationInput, VagaUncheckedUpdateManyWithoutCreatorInput>
  }

  export type VagaScalarWhereInput = {
    AND?: VagaScalarWhereInput | VagaScalarWhereInput[]
    OR?: VagaScalarWhereInput[]
    NOT?: VagaScalarWhereInput | VagaScalarWhereInput[]
    id?: StringFilter<"Vaga"> | string
    nome?: StringFilter<"Vaga"> | string
    localizacao?: StringFilter<"Vaga"> | string
    descricao?: StringFilter<"Vaga"> | string
    salario?: FloatFilter<"Vaga"> | number
    createdBy?: IntFilter<"Vaga"> | number
    createdAt?: DateTimeFilter<"Vaga"> | Date | string
    updatedAt?: DateTimeFilter<"Vaga"> | Date | string
  }

  export type UserCreateWithoutVagasInput = {
    nome: string
    email: string
    password: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutVagasInput = {
    id?: number
    nome: string
    email: string
    password: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutVagasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVagasInput, UserUncheckedCreateWithoutVagasInput>
  }

  export type InscricaoCreateWithoutVagaInput = {
    id?: string
    createdAt?: Date | string
    candidato: CandidatoCreateNestedOneWithoutInscricoesInput
  }

  export type InscricaoUncheckedCreateWithoutVagaInput = {
    id?: string
    candidatoId: string
    createdAt?: Date | string
  }

  export type InscricaoCreateOrConnectWithoutVagaInput = {
    where: InscricaoWhereUniqueInput
    create: XOR<InscricaoCreateWithoutVagaInput, InscricaoUncheckedCreateWithoutVagaInput>
  }

  export type InscricaoCreateManyVagaInputEnvelope = {
    data: InscricaoCreateManyVagaInput | InscricaoCreateManyVagaInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutVagasInput = {
    update: XOR<UserUpdateWithoutVagasInput, UserUncheckedUpdateWithoutVagasInput>
    create: XOR<UserCreateWithoutVagasInput, UserUncheckedCreateWithoutVagasInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVagasInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVagasInput, UserUncheckedUpdateWithoutVagasInput>
  }

  export type UserUpdateWithoutVagasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutVagasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InscricaoUpsertWithWhereUniqueWithoutVagaInput = {
    where: InscricaoWhereUniqueInput
    update: XOR<InscricaoUpdateWithoutVagaInput, InscricaoUncheckedUpdateWithoutVagaInput>
    create: XOR<InscricaoCreateWithoutVagaInput, InscricaoUncheckedCreateWithoutVagaInput>
  }

  export type InscricaoUpdateWithWhereUniqueWithoutVagaInput = {
    where: InscricaoWhereUniqueInput
    data: XOR<InscricaoUpdateWithoutVagaInput, InscricaoUncheckedUpdateWithoutVagaInput>
  }

  export type InscricaoUpdateManyWithWhereWithoutVagaInput = {
    where: InscricaoScalarWhereInput
    data: XOR<InscricaoUpdateManyMutationInput, InscricaoUncheckedUpdateManyWithoutVagaInput>
  }

  export type InscricaoScalarWhereInput = {
    AND?: InscricaoScalarWhereInput | InscricaoScalarWhereInput[]
    OR?: InscricaoScalarWhereInput[]
    NOT?: InscricaoScalarWhereInput | InscricaoScalarWhereInput[]
    id?: StringFilter<"Inscricao"> | string
    vagaId?: StringFilter<"Inscricao"> | string
    candidatoId?: StringFilter<"Inscricao"> | string
    createdAt?: DateTimeFilter<"Inscricao"> | Date | string
  }

  export type InscricaoCreateWithoutCandidatoInput = {
    id?: string
    createdAt?: Date | string
    vaga: VagaCreateNestedOneWithoutInscricoesInput
  }

  export type InscricaoUncheckedCreateWithoutCandidatoInput = {
    id?: string
    vagaId: string
    createdAt?: Date | string
  }

  export type InscricaoCreateOrConnectWithoutCandidatoInput = {
    where: InscricaoWhereUniqueInput
    create: XOR<InscricaoCreateWithoutCandidatoInput, InscricaoUncheckedCreateWithoutCandidatoInput>
  }

  export type InscricaoCreateManyCandidatoInputEnvelope = {
    data: InscricaoCreateManyCandidatoInput | InscricaoCreateManyCandidatoInput[]
    skipDuplicates?: boolean
  }

  export type InscricaoUpsertWithWhereUniqueWithoutCandidatoInput = {
    where: InscricaoWhereUniqueInput
    update: XOR<InscricaoUpdateWithoutCandidatoInput, InscricaoUncheckedUpdateWithoutCandidatoInput>
    create: XOR<InscricaoCreateWithoutCandidatoInput, InscricaoUncheckedCreateWithoutCandidatoInput>
  }

  export type InscricaoUpdateWithWhereUniqueWithoutCandidatoInput = {
    where: InscricaoWhereUniqueInput
    data: XOR<InscricaoUpdateWithoutCandidatoInput, InscricaoUncheckedUpdateWithoutCandidatoInput>
  }

  export type InscricaoUpdateManyWithWhereWithoutCandidatoInput = {
    where: InscricaoScalarWhereInput
    data: XOR<InscricaoUpdateManyMutationInput, InscricaoUncheckedUpdateManyWithoutCandidatoInput>
  }

  export type VagaCreateWithoutInscricoesInput = {
    id?: string
    nome: string
    localizacao: string
    descricao: string
    salario: number
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutVagasInput
  }

  export type VagaUncheckedCreateWithoutInscricoesInput = {
    id?: string
    nome: string
    localizacao: string
    descricao: string
    salario: number
    createdBy: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VagaCreateOrConnectWithoutInscricoesInput = {
    where: VagaWhereUniqueInput
    create: XOR<VagaCreateWithoutInscricoesInput, VagaUncheckedCreateWithoutInscricoesInput>
  }

  export type CandidatoCreateWithoutInscricoesInput = {
    id?: string
    cv_path: string
    createdAt?: Date | string
  }

  export type CandidatoUncheckedCreateWithoutInscricoesInput = {
    id?: string
    cv_path: string
    createdAt?: Date | string
  }

  export type CandidatoCreateOrConnectWithoutInscricoesInput = {
    where: CandidatoWhereUniqueInput
    create: XOR<CandidatoCreateWithoutInscricoesInput, CandidatoUncheckedCreateWithoutInscricoesInput>
  }

  export type VagaUpsertWithoutInscricoesInput = {
    update: XOR<VagaUpdateWithoutInscricoesInput, VagaUncheckedUpdateWithoutInscricoesInput>
    create: XOR<VagaCreateWithoutInscricoesInput, VagaUncheckedCreateWithoutInscricoesInput>
    where?: VagaWhereInput
  }

  export type VagaUpdateToOneWithWhereWithoutInscricoesInput = {
    where?: VagaWhereInput
    data: XOR<VagaUpdateWithoutInscricoesInput, VagaUncheckedUpdateWithoutInscricoesInput>
  }

  export type VagaUpdateWithoutInscricoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    salario?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutVagasNestedInput
  }

  export type VagaUncheckedUpdateWithoutInscricoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    salario?: FloatFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidatoUpsertWithoutInscricoesInput = {
    update: XOR<CandidatoUpdateWithoutInscricoesInput, CandidatoUncheckedUpdateWithoutInscricoesInput>
    create: XOR<CandidatoCreateWithoutInscricoesInput, CandidatoUncheckedCreateWithoutInscricoesInput>
    where?: CandidatoWhereInput
  }

  export type CandidatoUpdateToOneWithWhereWithoutInscricoesInput = {
    where?: CandidatoWhereInput
    data: XOR<CandidatoUpdateWithoutInscricoesInput, CandidatoUncheckedUpdateWithoutInscricoesInput>
  }

  export type CandidatoUpdateWithoutInscricoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    cv_path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidatoUncheckedUpdateWithoutInscricoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    cv_path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VagaCreateManyCreatorInput = {
    id?: string
    nome: string
    localizacao: string
    descricao: string
    salario: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VagaUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    salario?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inscricoes?: InscricaoUpdateManyWithoutVagaNestedInput
  }

  export type VagaUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    salario?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inscricoes?: InscricaoUncheckedUpdateManyWithoutVagaNestedInput
  }

  export type VagaUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    salario?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InscricaoCreateManyVagaInput = {
    id?: string
    candidatoId: string
    createdAt?: Date | string
  }

  export type InscricaoUpdateWithoutVagaInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidato?: CandidatoUpdateOneRequiredWithoutInscricoesNestedInput
  }

  export type InscricaoUncheckedUpdateWithoutVagaInput = {
    id?: StringFieldUpdateOperationsInput | string
    candidatoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InscricaoUncheckedUpdateManyWithoutVagaInput = {
    id?: StringFieldUpdateOperationsInput | string
    candidatoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InscricaoCreateManyCandidatoInput = {
    id?: string
    vagaId: string
    createdAt?: Date | string
  }

  export type InscricaoUpdateWithoutCandidatoInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vaga?: VagaUpdateOneRequiredWithoutInscricoesNestedInput
  }

  export type InscricaoUncheckedUpdateWithoutCandidatoInput = {
    id?: StringFieldUpdateOperationsInput | string
    vagaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InscricaoUncheckedUpdateManyWithoutCandidatoInput = {
    id?: StringFieldUpdateOperationsInput | string
    vagaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}