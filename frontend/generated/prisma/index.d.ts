
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
 * Model TipoDeficiencia
 * 
 */
export type TipoDeficiencia = $Result.DefaultSelection<Prisma.$TipoDeficienciaPayload>
/**
 * Model SubtipoDeficiencia
 * 
 */
export type SubtipoDeficiencia = $Result.DefaultSelection<Prisma.$SubtipoDeficienciaPayload>
/**
 * Model Barreira
 * 
 */
export type Barreira = $Result.DefaultSelection<Prisma.$BarreiraPayload>
/**
 * Model Acessibilidade
 * 
 */
export type Acessibilidade = $Result.DefaultSelection<Prisma.$AcessibilidadePayload>
/**
 * Model SubtipoBarreira
 * 
 */
export type SubtipoBarreira = $Result.DefaultSelection<Prisma.$SubtipoBarreiraPayload>
/**
 * Model BarreiraAcessibilidade
 * 
 */
export type BarreiraAcessibilidade = $Result.DefaultSelection<Prisma.$BarreiraAcessibilidadePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TipoDeficiencias
 * const tipoDeficiencias = await prisma.tipoDeficiencia.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more TipoDeficiencias
   * const tipoDeficiencias = await prisma.tipoDeficiencia.findMany()
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
   * `prisma.tipoDeficiencia`: Exposes CRUD operations for the **TipoDeficiencia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoDeficiencias
    * const tipoDeficiencias = await prisma.tipoDeficiencia.findMany()
    * ```
    */
  get tipoDeficiencia(): Prisma.TipoDeficienciaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subtipoDeficiencia`: Exposes CRUD operations for the **SubtipoDeficiencia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubtipoDeficiencias
    * const subtipoDeficiencias = await prisma.subtipoDeficiencia.findMany()
    * ```
    */
  get subtipoDeficiencia(): Prisma.SubtipoDeficienciaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.barreira`: Exposes CRUD operations for the **Barreira** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Barreiras
    * const barreiras = await prisma.barreira.findMany()
    * ```
    */
  get barreira(): Prisma.BarreiraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.acessibilidade`: Exposes CRUD operations for the **Acessibilidade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Acessibilidades
    * const acessibilidades = await prisma.acessibilidade.findMany()
    * ```
    */
  get acessibilidade(): Prisma.AcessibilidadeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subtipoBarreira`: Exposes CRUD operations for the **SubtipoBarreira** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubtipoBarreiras
    * const subtipoBarreiras = await prisma.subtipoBarreira.findMany()
    * ```
    */
  get subtipoBarreira(): Prisma.SubtipoBarreiraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.barreiraAcessibilidade`: Exposes CRUD operations for the **BarreiraAcessibilidade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BarreiraAcessibilidades
    * const barreiraAcessibilidades = await prisma.barreiraAcessibilidade.findMany()
    * ```
    */
  get barreiraAcessibilidade(): Prisma.BarreiraAcessibilidadeDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
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
    TipoDeficiencia: 'TipoDeficiencia',
    SubtipoDeficiencia: 'SubtipoDeficiencia',
    Barreira: 'Barreira',
    Acessibilidade: 'Acessibilidade',
    SubtipoBarreira: 'SubtipoBarreira',
    BarreiraAcessibilidade: 'BarreiraAcessibilidade'
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
      modelProps: "tipoDeficiencia" | "subtipoDeficiencia" | "barreira" | "acessibilidade" | "subtipoBarreira" | "barreiraAcessibilidade"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TipoDeficiencia: {
        payload: Prisma.$TipoDeficienciaPayload<ExtArgs>
        fields: Prisma.TipoDeficienciaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoDeficienciaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDeficienciaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoDeficienciaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDeficienciaPayload>
          }
          findFirst: {
            args: Prisma.TipoDeficienciaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDeficienciaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoDeficienciaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDeficienciaPayload>
          }
          findMany: {
            args: Prisma.TipoDeficienciaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDeficienciaPayload>[]
          }
          create: {
            args: Prisma.TipoDeficienciaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDeficienciaPayload>
          }
          createMany: {
            args: Prisma.TipoDeficienciaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TipoDeficienciaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDeficienciaPayload>[]
          }
          delete: {
            args: Prisma.TipoDeficienciaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDeficienciaPayload>
          }
          update: {
            args: Prisma.TipoDeficienciaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDeficienciaPayload>
          }
          deleteMany: {
            args: Prisma.TipoDeficienciaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoDeficienciaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TipoDeficienciaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDeficienciaPayload>[]
          }
          upsert: {
            args: Prisma.TipoDeficienciaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDeficienciaPayload>
          }
          aggregate: {
            args: Prisma.TipoDeficienciaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoDeficiencia>
          }
          groupBy: {
            args: Prisma.TipoDeficienciaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoDeficienciaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoDeficienciaCountArgs<ExtArgs>
            result: $Utils.Optional<TipoDeficienciaCountAggregateOutputType> | number
          }
        }
      }
      SubtipoDeficiencia: {
        payload: Prisma.$SubtipoDeficienciaPayload<ExtArgs>
        fields: Prisma.SubtipoDeficienciaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubtipoDeficienciaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtipoDeficienciaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubtipoDeficienciaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtipoDeficienciaPayload>
          }
          findFirst: {
            args: Prisma.SubtipoDeficienciaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtipoDeficienciaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubtipoDeficienciaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtipoDeficienciaPayload>
          }
          findMany: {
            args: Prisma.SubtipoDeficienciaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtipoDeficienciaPayload>[]
          }
          create: {
            args: Prisma.SubtipoDeficienciaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtipoDeficienciaPayload>
          }
          createMany: {
            args: Prisma.SubtipoDeficienciaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubtipoDeficienciaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtipoDeficienciaPayload>[]
          }
          delete: {
            args: Prisma.SubtipoDeficienciaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtipoDeficienciaPayload>
          }
          update: {
            args: Prisma.SubtipoDeficienciaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtipoDeficienciaPayload>
          }
          deleteMany: {
            args: Prisma.SubtipoDeficienciaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubtipoDeficienciaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubtipoDeficienciaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtipoDeficienciaPayload>[]
          }
          upsert: {
            args: Prisma.SubtipoDeficienciaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtipoDeficienciaPayload>
          }
          aggregate: {
            args: Prisma.SubtipoDeficienciaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubtipoDeficiencia>
          }
          groupBy: {
            args: Prisma.SubtipoDeficienciaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubtipoDeficienciaGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubtipoDeficienciaCountArgs<ExtArgs>
            result: $Utils.Optional<SubtipoDeficienciaCountAggregateOutputType> | number
          }
        }
      }
      Barreira: {
        payload: Prisma.$BarreiraPayload<ExtArgs>
        fields: Prisma.BarreiraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BarreiraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarreiraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BarreiraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarreiraPayload>
          }
          findFirst: {
            args: Prisma.BarreiraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarreiraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BarreiraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarreiraPayload>
          }
          findMany: {
            args: Prisma.BarreiraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarreiraPayload>[]
          }
          create: {
            args: Prisma.BarreiraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarreiraPayload>
          }
          createMany: {
            args: Prisma.BarreiraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BarreiraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarreiraPayload>[]
          }
          delete: {
            args: Prisma.BarreiraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarreiraPayload>
          }
          update: {
            args: Prisma.BarreiraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarreiraPayload>
          }
          deleteMany: {
            args: Prisma.BarreiraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BarreiraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BarreiraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarreiraPayload>[]
          }
          upsert: {
            args: Prisma.BarreiraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarreiraPayload>
          }
          aggregate: {
            args: Prisma.BarreiraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBarreira>
          }
          groupBy: {
            args: Prisma.BarreiraGroupByArgs<ExtArgs>
            result: $Utils.Optional<BarreiraGroupByOutputType>[]
          }
          count: {
            args: Prisma.BarreiraCountArgs<ExtArgs>
            result: $Utils.Optional<BarreiraCountAggregateOutputType> | number
          }
        }
      }
      Acessibilidade: {
        payload: Prisma.$AcessibilidadePayload<ExtArgs>
        fields: Prisma.AcessibilidadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AcessibilidadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessibilidadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AcessibilidadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessibilidadePayload>
          }
          findFirst: {
            args: Prisma.AcessibilidadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessibilidadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AcessibilidadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessibilidadePayload>
          }
          findMany: {
            args: Prisma.AcessibilidadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessibilidadePayload>[]
          }
          create: {
            args: Prisma.AcessibilidadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessibilidadePayload>
          }
          createMany: {
            args: Prisma.AcessibilidadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AcessibilidadeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessibilidadePayload>[]
          }
          delete: {
            args: Prisma.AcessibilidadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessibilidadePayload>
          }
          update: {
            args: Prisma.AcessibilidadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessibilidadePayload>
          }
          deleteMany: {
            args: Prisma.AcessibilidadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AcessibilidadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AcessibilidadeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessibilidadePayload>[]
          }
          upsert: {
            args: Prisma.AcessibilidadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessibilidadePayload>
          }
          aggregate: {
            args: Prisma.AcessibilidadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAcessibilidade>
          }
          groupBy: {
            args: Prisma.AcessibilidadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AcessibilidadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AcessibilidadeCountArgs<ExtArgs>
            result: $Utils.Optional<AcessibilidadeCountAggregateOutputType> | number
          }
        }
      }
      SubtipoBarreira: {
        payload: Prisma.$SubtipoBarreiraPayload<ExtArgs>
        fields: Prisma.SubtipoBarreiraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubtipoBarreiraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtipoBarreiraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubtipoBarreiraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtipoBarreiraPayload>
          }
          findFirst: {
            args: Prisma.SubtipoBarreiraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtipoBarreiraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubtipoBarreiraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtipoBarreiraPayload>
          }
          findMany: {
            args: Prisma.SubtipoBarreiraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtipoBarreiraPayload>[]
          }
          create: {
            args: Prisma.SubtipoBarreiraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtipoBarreiraPayload>
          }
          createMany: {
            args: Prisma.SubtipoBarreiraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubtipoBarreiraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtipoBarreiraPayload>[]
          }
          delete: {
            args: Prisma.SubtipoBarreiraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtipoBarreiraPayload>
          }
          update: {
            args: Prisma.SubtipoBarreiraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtipoBarreiraPayload>
          }
          deleteMany: {
            args: Prisma.SubtipoBarreiraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubtipoBarreiraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubtipoBarreiraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtipoBarreiraPayload>[]
          }
          upsert: {
            args: Prisma.SubtipoBarreiraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubtipoBarreiraPayload>
          }
          aggregate: {
            args: Prisma.SubtipoBarreiraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubtipoBarreira>
          }
          groupBy: {
            args: Prisma.SubtipoBarreiraGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubtipoBarreiraGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubtipoBarreiraCountArgs<ExtArgs>
            result: $Utils.Optional<SubtipoBarreiraCountAggregateOutputType> | number
          }
        }
      }
      BarreiraAcessibilidade: {
        payload: Prisma.$BarreiraAcessibilidadePayload<ExtArgs>
        fields: Prisma.BarreiraAcessibilidadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BarreiraAcessibilidadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarreiraAcessibilidadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BarreiraAcessibilidadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarreiraAcessibilidadePayload>
          }
          findFirst: {
            args: Prisma.BarreiraAcessibilidadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarreiraAcessibilidadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BarreiraAcessibilidadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarreiraAcessibilidadePayload>
          }
          findMany: {
            args: Prisma.BarreiraAcessibilidadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarreiraAcessibilidadePayload>[]
          }
          create: {
            args: Prisma.BarreiraAcessibilidadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarreiraAcessibilidadePayload>
          }
          createMany: {
            args: Prisma.BarreiraAcessibilidadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BarreiraAcessibilidadeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarreiraAcessibilidadePayload>[]
          }
          delete: {
            args: Prisma.BarreiraAcessibilidadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarreiraAcessibilidadePayload>
          }
          update: {
            args: Prisma.BarreiraAcessibilidadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarreiraAcessibilidadePayload>
          }
          deleteMany: {
            args: Prisma.BarreiraAcessibilidadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BarreiraAcessibilidadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BarreiraAcessibilidadeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarreiraAcessibilidadePayload>[]
          }
          upsert: {
            args: Prisma.BarreiraAcessibilidadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarreiraAcessibilidadePayload>
          }
          aggregate: {
            args: Prisma.BarreiraAcessibilidadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBarreiraAcessibilidade>
          }
          groupBy: {
            args: Prisma.BarreiraAcessibilidadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<BarreiraAcessibilidadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.BarreiraAcessibilidadeCountArgs<ExtArgs>
            result: $Utils.Optional<BarreiraAcessibilidadeCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    tipoDeficiencia?: TipoDeficienciaOmit
    subtipoDeficiencia?: SubtipoDeficienciaOmit
    barreira?: BarreiraOmit
    acessibilidade?: AcessibilidadeOmit
    subtipoBarreira?: SubtipoBarreiraOmit
    barreiraAcessibilidade?: BarreiraAcessibilidadeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type TipoDeficienciaCountOutputType
   */

  export type TipoDeficienciaCountOutputType = {
    subtipos: number
  }

  export type TipoDeficienciaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subtipos?: boolean | TipoDeficienciaCountOutputTypeCountSubtiposArgs
  }

  // Custom InputTypes
  /**
   * TipoDeficienciaCountOutputType without action
   */
  export type TipoDeficienciaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDeficienciaCountOutputType
     */
    select?: TipoDeficienciaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoDeficienciaCountOutputType without action
   */
  export type TipoDeficienciaCountOutputTypeCountSubtiposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubtipoDeficienciaWhereInput
  }


  /**
   * Count Type SubtipoDeficienciaCountOutputType
   */

  export type SubtipoDeficienciaCountOutputType = {
    barreiras: number
  }

  export type SubtipoDeficienciaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barreiras?: boolean | SubtipoDeficienciaCountOutputTypeCountBarreirasArgs
  }

  // Custom InputTypes
  /**
   * SubtipoDeficienciaCountOutputType without action
   */
  export type SubtipoDeficienciaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubtipoDeficienciaCountOutputType
     */
    select?: SubtipoDeficienciaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubtipoDeficienciaCountOutputType without action
   */
  export type SubtipoDeficienciaCountOutputTypeCountBarreirasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubtipoBarreiraWhereInput
  }


  /**
   * Count Type BarreiraCountOutputType
   */

  export type BarreiraCountOutputType = {
    subtipos: number
    acessibilidades: number
  }

  export type BarreiraCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subtipos?: boolean | BarreiraCountOutputTypeCountSubtiposArgs
    acessibilidades?: boolean | BarreiraCountOutputTypeCountAcessibilidadesArgs
  }

  // Custom InputTypes
  /**
   * BarreiraCountOutputType without action
   */
  export type BarreiraCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarreiraCountOutputType
     */
    select?: BarreiraCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BarreiraCountOutputType without action
   */
  export type BarreiraCountOutputTypeCountSubtiposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubtipoBarreiraWhereInput
  }

  /**
   * BarreiraCountOutputType without action
   */
  export type BarreiraCountOutputTypeCountAcessibilidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarreiraAcessibilidadeWhereInput
  }


  /**
   * Count Type AcessibilidadeCountOutputType
   */

  export type AcessibilidadeCountOutputType = {
    barreiras: number
  }

  export type AcessibilidadeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barreiras?: boolean | AcessibilidadeCountOutputTypeCountBarreirasArgs
  }

  // Custom InputTypes
  /**
   * AcessibilidadeCountOutputType without action
   */
  export type AcessibilidadeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcessibilidadeCountOutputType
     */
    select?: AcessibilidadeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AcessibilidadeCountOutputType without action
   */
  export type AcessibilidadeCountOutputTypeCountBarreirasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarreiraAcessibilidadeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model TipoDeficiencia
   */

  export type AggregateTipoDeficiencia = {
    _count: TipoDeficienciaCountAggregateOutputType | null
    _avg: TipoDeficienciaAvgAggregateOutputType | null
    _sum: TipoDeficienciaSumAggregateOutputType | null
    _min: TipoDeficienciaMinAggregateOutputType | null
    _max: TipoDeficienciaMaxAggregateOutputType | null
  }

  export type TipoDeficienciaAvgAggregateOutputType = {
    id: number | null
  }

  export type TipoDeficienciaSumAggregateOutputType = {
    id: number | null
  }

  export type TipoDeficienciaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TipoDeficienciaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TipoDeficienciaCountAggregateOutputType = {
    id: number
    nome: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TipoDeficienciaAvgAggregateInputType = {
    id?: true
  }

  export type TipoDeficienciaSumAggregateInputType = {
    id?: true
  }

  export type TipoDeficienciaMinAggregateInputType = {
    id?: true
    nome?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TipoDeficienciaMaxAggregateInputType = {
    id?: true
    nome?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TipoDeficienciaCountAggregateInputType = {
    id?: true
    nome?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TipoDeficienciaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoDeficiencia to aggregate.
     */
    where?: TipoDeficienciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoDeficiencias to fetch.
     */
    orderBy?: TipoDeficienciaOrderByWithRelationInput | TipoDeficienciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoDeficienciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoDeficiencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoDeficiencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoDeficiencias
    **/
    _count?: true | TipoDeficienciaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoDeficienciaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoDeficienciaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoDeficienciaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoDeficienciaMaxAggregateInputType
  }

  export type GetTipoDeficienciaAggregateType<T extends TipoDeficienciaAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoDeficiencia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoDeficiencia[P]>
      : GetScalarType<T[P], AggregateTipoDeficiencia[P]>
  }




  export type TipoDeficienciaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoDeficienciaWhereInput
    orderBy?: TipoDeficienciaOrderByWithAggregationInput | TipoDeficienciaOrderByWithAggregationInput[]
    by: TipoDeficienciaScalarFieldEnum[] | TipoDeficienciaScalarFieldEnum
    having?: TipoDeficienciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoDeficienciaCountAggregateInputType | true
    _avg?: TipoDeficienciaAvgAggregateInputType
    _sum?: TipoDeficienciaSumAggregateInputType
    _min?: TipoDeficienciaMinAggregateInputType
    _max?: TipoDeficienciaMaxAggregateInputType
  }

  export type TipoDeficienciaGroupByOutputType = {
    id: number
    nome: string
    createdAt: Date
    updatedAt: Date
    _count: TipoDeficienciaCountAggregateOutputType | null
    _avg: TipoDeficienciaAvgAggregateOutputType | null
    _sum: TipoDeficienciaSumAggregateOutputType | null
    _min: TipoDeficienciaMinAggregateOutputType | null
    _max: TipoDeficienciaMaxAggregateOutputType | null
  }

  type GetTipoDeficienciaGroupByPayload<T extends TipoDeficienciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoDeficienciaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoDeficienciaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoDeficienciaGroupByOutputType[P]>
            : GetScalarType<T[P], TipoDeficienciaGroupByOutputType[P]>
        }
      >
    >


  export type TipoDeficienciaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subtipos?: boolean | TipoDeficiencia$subtiposArgs<ExtArgs>
    _count?: boolean | TipoDeficienciaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoDeficiencia"]>

  export type TipoDeficienciaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tipoDeficiencia"]>

  export type TipoDeficienciaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tipoDeficiencia"]>

  export type TipoDeficienciaSelectScalar = {
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TipoDeficienciaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "createdAt" | "updatedAt", ExtArgs["result"]["tipoDeficiencia"]>
  export type TipoDeficienciaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subtipos?: boolean | TipoDeficiencia$subtiposArgs<ExtArgs>
    _count?: boolean | TipoDeficienciaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TipoDeficienciaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TipoDeficienciaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TipoDeficienciaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoDeficiencia"
    objects: {
      subtipos: Prisma.$SubtipoDeficienciaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tipoDeficiencia"]>
    composites: {}
  }

  type TipoDeficienciaGetPayload<S extends boolean | null | undefined | TipoDeficienciaDefaultArgs> = $Result.GetResult<Prisma.$TipoDeficienciaPayload, S>

  type TipoDeficienciaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoDeficienciaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoDeficienciaCountAggregateInputType | true
    }

  export interface TipoDeficienciaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoDeficiencia'], meta: { name: 'TipoDeficiencia' } }
    /**
     * Find zero or one TipoDeficiencia that matches the filter.
     * @param {TipoDeficienciaFindUniqueArgs} args - Arguments to find a TipoDeficiencia
     * @example
     * // Get one TipoDeficiencia
     * const tipoDeficiencia = await prisma.tipoDeficiencia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoDeficienciaFindUniqueArgs>(args: SelectSubset<T, TipoDeficienciaFindUniqueArgs<ExtArgs>>): Prisma__TipoDeficienciaClient<$Result.GetResult<Prisma.$TipoDeficienciaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TipoDeficiencia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoDeficienciaFindUniqueOrThrowArgs} args - Arguments to find a TipoDeficiencia
     * @example
     * // Get one TipoDeficiencia
     * const tipoDeficiencia = await prisma.tipoDeficiencia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoDeficienciaFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoDeficienciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoDeficienciaClient<$Result.GetResult<Prisma.$TipoDeficienciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoDeficiencia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDeficienciaFindFirstArgs} args - Arguments to find a TipoDeficiencia
     * @example
     * // Get one TipoDeficiencia
     * const tipoDeficiencia = await prisma.tipoDeficiencia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoDeficienciaFindFirstArgs>(args?: SelectSubset<T, TipoDeficienciaFindFirstArgs<ExtArgs>>): Prisma__TipoDeficienciaClient<$Result.GetResult<Prisma.$TipoDeficienciaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoDeficiencia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDeficienciaFindFirstOrThrowArgs} args - Arguments to find a TipoDeficiencia
     * @example
     * // Get one TipoDeficiencia
     * const tipoDeficiencia = await prisma.tipoDeficiencia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoDeficienciaFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoDeficienciaFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoDeficienciaClient<$Result.GetResult<Prisma.$TipoDeficienciaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TipoDeficiencias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDeficienciaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoDeficiencias
     * const tipoDeficiencias = await prisma.tipoDeficiencia.findMany()
     * 
     * // Get first 10 TipoDeficiencias
     * const tipoDeficiencias = await prisma.tipoDeficiencia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipoDeficienciaWithIdOnly = await prisma.tipoDeficiencia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TipoDeficienciaFindManyArgs>(args?: SelectSubset<T, TipoDeficienciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoDeficienciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TipoDeficiencia.
     * @param {TipoDeficienciaCreateArgs} args - Arguments to create a TipoDeficiencia.
     * @example
     * // Create one TipoDeficiencia
     * const TipoDeficiencia = await prisma.tipoDeficiencia.create({
     *   data: {
     *     // ... data to create a TipoDeficiencia
     *   }
     * })
     * 
     */
    create<T extends TipoDeficienciaCreateArgs>(args: SelectSubset<T, TipoDeficienciaCreateArgs<ExtArgs>>): Prisma__TipoDeficienciaClient<$Result.GetResult<Prisma.$TipoDeficienciaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TipoDeficiencias.
     * @param {TipoDeficienciaCreateManyArgs} args - Arguments to create many TipoDeficiencias.
     * @example
     * // Create many TipoDeficiencias
     * const tipoDeficiencia = await prisma.tipoDeficiencia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoDeficienciaCreateManyArgs>(args?: SelectSubset<T, TipoDeficienciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TipoDeficiencias and returns the data saved in the database.
     * @param {TipoDeficienciaCreateManyAndReturnArgs} args - Arguments to create many TipoDeficiencias.
     * @example
     * // Create many TipoDeficiencias
     * const tipoDeficiencia = await prisma.tipoDeficiencia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TipoDeficiencias and only return the `id`
     * const tipoDeficienciaWithIdOnly = await prisma.tipoDeficiencia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TipoDeficienciaCreateManyAndReturnArgs>(args?: SelectSubset<T, TipoDeficienciaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoDeficienciaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TipoDeficiencia.
     * @param {TipoDeficienciaDeleteArgs} args - Arguments to delete one TipoDeficiencia.
     * @example
     * // Delete one TipoDeficiencia
     * const TipoDeficiencia = await prisma.tipoDeficiencia.delete({
     *   where: {
     *     // ... filter to delete one TipoDeficiencia
     *   }
     * })
     * 
     */
    delete<T extends TipoDeficienciaDeleteArgs>(args: SelectSubset<T, TipoDeficienciaDeleteArgs<ExtArgs>>): Prisma__TipoDeficienciaClient<$Result.GetResult<Prisma.$TipoDeficienciaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TipoDeficiencia.
     * @param {TipoDeficienciaUpdateArgs} args - Arguments to update one TipoDeficiencia.
     * @example
     * // Update one TipoDeficiencia
     * const tipoDeficiencia = await prisma.tipoDeficiencia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoDeficienciaUpdateArgs>(args: SelectSubset<T, TipoDeficienciaUpdateArgs<ExtArgs>>): Prisma__TipoDeficienciaClient<$Result.GetResult<Prisma.$TipoDeficienciaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TipoDeficiencias.
     * @param {TipoDeficienciaDeleteManyArgs} args - Arguments to filter TipoDeficiencias to delete.
     * @example
     * // Delete a few TipoDeficiencias
     * const { count } = await prisma.tipoDeficiencia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoDeficienciaDeleteManyArgs>(args?: SelectSubset<T, TipoDeficienciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoDeficiencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDeficienciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoDeficiencias
     * const tipoDeficiencia = await prisma.tipoDeficiencia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoDeficienciaUpdateManyArgs>(args: SelectSubset<T, TipoDeficienciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoDeficiencias and returns the data updated in the database.
     * @param {TipoDeficienciaUpdateManyAndReturnArgs} args - Arguments to update many TipoDeficiencias.
     * @example
     * // Update many TipoDeficiencias
     * const tipoDeficiencia = await prisma.tipoDeficiencia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TipoDeficiencias and only return the `id`
     * const tipoDeficienciaWithIdOnly = await prisma.tipoDeficiencia.updateManyAndReturn({
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
    updateManyAndReturn<T extends TipoDeficienciaUpdateManyAndReturnArgs>(args: SelectSubset<T, TipoDeficienciaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoDeficienciaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TipoDeficiencia.
     * @param {TipoDeficienciaUpsertArgs} args - Arguments to update or create a TipoDeficiencia.
     * @example
     * // Update or create a TipoDeficiencia
     * const tipoDeficiencia = await prisma.tipoDeficiencia.upsert({
     *   create: {
     *     // ... data to create a TipoDeficiencia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoDeficiencia we want to update
     *   }
     * })
     */
    upsert<T extends TipoDeficienciaUpsertArgs>(args: SelectSubset<T, TipoDeficienciaUpsertArgs<ExtArgs>>): Prisma__TipoDeficienciaClient<$Result.GetResult<Prisma.$TipoDeficienciaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TipoDeficiencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDeficienciaCountArgs} args - Arguments to filter TipoDeficiencias to count.
     * @example
     * // Count the number of TipoDeficiencias
     * const count = await prisma.tipoDeficiencia.count({
     *   where: {
     *     // ... the filter for the TipoDeficiencias we want to count
     *   }
     * })
    **/
    count<T extends TipoDeficienciaCountArgs>(
      args?: Subset<T, TipoDeficienciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoDeficienciaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoDeficiencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDeficienciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TipoDeficienciaAggregateArgs>(args: Subset<T, TipoDeficienciaAggregateArgs>): Prisma.PrismaPromise<GetTipoDeficienciaAggregateType<T>>

    /**
     * Group by TipoDeficiencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDeficienciaGroupByArgs} args - Group by arguments.
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
      T extends TipoDeficienciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoDeficienciaGroupByArgs['orderBy'] }
        : { orderBy?: TipoDeficienciaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TipoDeficienciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoDeficienciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoDeficiencia model
   */
  readonly fields: TipoDeficienciaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoDeficiencia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoDeficienciaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subtipos<T extends TipoDeficiencia$subtiposArgs<ExtArgs> = {}>(args?: Subset<T, TipoDeficiencia$subtiposArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubtipoDeficienciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TipoDeficiencia model
   */
  interface TipoDeficienciaFieldRefs {
    readonly id: FieldRef<"TipoDeficiencia", 'Int'>
    readonly nome: FieldRef<"TipoDeficiencia", 'String'>
    readonly createdAt: FieldRef<"TipoDeficiencia", 'DateTime'>
    readonly updatedAt: FieldRef<"TipoDeficiencia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TipoDeficiencia findUnique
   */
  export type TipoDeficienciaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDeficiencia
     */
    select?: TipoDeficienciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDeficiencia
     */
    omit?: TipoDeficienciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDeficienciaInclude<ExtArgs> | null
    /**
     * Filter, which TipoDeficiencia to fetch.
     */
    where: TipoDeficienciaWhereUniqueInput
  }

  /**
   * TipoDeficiencia findUniqueOrThrow
   */
  export type TipoDeficienciaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDeficiencia
     */
    select?: TipoDeficienciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDeficiencia
     */
    omit?: TipoDeficienciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDeficienciaInclude<ExtArgs> | null
    /**
     * Filter, which TipoDeficiencia to fetch.
     */
    where: TipoDeficienciaWhereUniqueInput
  }

  /**
   * TipoDeficiencia findFirst
   */
  export type TipoDeficienciaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDeficiencia
     */
    select?: TipoDeficienciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDeficiencia
     */
    omit?: TipoDeficienciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDeficienciaInclude<ExtArgs> | null
    /**
     * Filter, which TipoDeficiencia to fetch.
     */
    where?: TipoDeficienciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoDeficiencias to fetch.
     */
    orderBy?: TipoDeficienciaOrderByWithRelationInput | TipoDeficienciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoDeficiencias.
     */
    cursor?: TipoDeficienciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoDeficiencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoDeficiencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoDeficiencias.
     */
    distinct?: TipoDeficienciaScalarFieldEnum | TipoDeficienciaScalarFieldEnum[]
  }

  /**
   * TipoDeficiencia findFirstOrThrow
   */
  export type TipoDeficienciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDeficiencia
     */
    select?: TipoDeficienciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDeficiencia
     */
    omit?: TipoDeficienciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDeficienciaInclude<ExtArgs> | null
    /**
     * Filter, which TipoDeficiencia to fetch.
     */
    where?: TipoDeficienciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoDeficiencias to fetch.
     */
    orderBy?: TipoDeficienciaOrderByWithRelationInput | TipoDeficienciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoDeficiencias.
     */
    cursor?: TipoDeficienciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoDeficiencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoDeficiencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoDeficiencias.
     */
    distinct?: TipoDeficienciaScalarFieldEnum | TipoDeficienciaScalarFieldEnum[]
  }

  /**
   * TipoDeficiencia findMany
   */
  export type TipoDeficienciaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDeficiencia
     */
    select?: TipoDeficienciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDeficiencia
     */
    omit?: TipoDeficienciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDeficienciaInclude<ExtArgs> | null
    /**
     * Filter, which TipoDeficiencias to fetch.
     */
    where?: TipoDeficienciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoDeficiencias to fetch.
     */
    orderBy?: TipoDeficienciaOrderByWithRelationInput | TipoDeficienciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoDeficiencias.
     */
    cursor?: TipoDeficienciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoDeficiencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoDeficiencias.
     */
    skip?: number
    distinct?: TipoDeficienciaScalarFieldEnum | TipoDeficienciaScalarFieldEnum[]
  }

  /**
   * TipoDeficiencia create
   */
  export type TipoDeficienciaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDeficiencia
     */
    select?: TipoDeficienciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDeficiencia
     */
    omit?: TipoDeficienciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDeficienciaInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoDeficiencia.
     */
    data: XOR<TipoDeficienciaCreateInput, TipoDeficienciaUncheckedCreateInput>
  }

  /**
   * TipoDeficiencia createMany
   */
  export type TipoDeficienciaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoDeficiencias.
     */
    data: TipoDeficienciaCreateManyInput | TipoDeficienciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoDeficiencia createManyAndReturn
   */
  export type TipoDeficienciaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDeficiencia
     */
    select?: TipoDeficienciaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDeficiencia
     */
    omit?: TipoDeficienciaOmit<ExtArgs> | null
    /**
     * The data used to create many TipoDeficiencias.
     */
    data: TipoDeficienciaCreateManyInput | TipoDeficienciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoDeficiencia update
   */
  export type TipoDeficienciaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDeficiencia
     */
    select?: TipoDeficienciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDeficiencia
     */
    omit?: TipoDeficienciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDeficienciaInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoDeficiencia.
     */
    data: XOR<TipoDeficienciaUpdateInput, TipoDeficienciaUncheckedUpdateInput>
    /**
     * Choose, which TipoDeficiencia to update.
     */
    where: TipoDeficienciaWhereUniqueInput
  }

  /**
   * TipoDeficiencia updateMany
   */
  export type TipoDeficienciaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoDeficiencias.
     */
    data: XOR<TipoDeficienciaUpdateManyMutationInput, TipoDeficienciaUncheckedUpdateManyInput>
    /**
     * Filter which TipoDeficiencias to update
     */
    where?: TipoDeficienciaWhereInput
    /**
     * Limit how many TipoDeficiencias to update.
     */
    limit?: number
  }

  /**
   * TipoDeficiencia updateManyAndReturn
   */
  export type TipoDeficienciaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDeficiencia
     */
    select?: TipoDeficienciaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDeficiencia
     */
    omit?: TipoDeficienciaOmit<ExtArgs> | null
    /**
     * The data used to update TipoDeficiencias.
     */
    data: XOR<TipoDeficienciaUpdateManyMutationInput, TipoDeficienciaUncheckedUpdateManyInput>
    /**
     * Filter which TipoDeficiencias to update
     */
    where?: TipoDeficienciaWhereInput
    /**
     * Limit how many TipoDeficiencias to update.
     */
    limit?: number
  }

  /**
   * TipoDeficiencia upsert
   */
  export type TipoDeficienciaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDeficiencia
     */
    select?: TipoDeficienciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDeficiencia
     */
    omit?: TipoDeficienciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDeficienciaInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoDeficiencia to update in case it exists.
     */
    where: TipoDeficienciaWhereUniqueInput
    /**
     * In case the TipoDeficiencia found by the `where` argument doesn't exist, create a new TipoDeficiencia with this data.
     */
    create: XOR<TipoDeficienciaCreateInput, TipoDeficienciaUncheckedCreateInput>
    /**
     * In case the TipoDeficiencia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoDeficienciaUpdateInput, TipoDeficienciaUncheckedUpdateInput>
  }

  /**
   * TipoDeficiencia delete
   */
  export type TipoDeficienciaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDeficiencia
     */
    select?: TipoDeficienciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDeficiencia
     */
    omit?: TipoDeficienciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDeficienciaInclude<ExtArgs> | null
    /**
     * Filter which TipoDeficiencia to delete.
     */
    where: TipoDeficienciaWhereUniqueInput
  }

  /**
   * TipoDeficiencia deleteMany
   */
  export type TipoDeficienciaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoDeficiencias to delete
     */
    where?: TipoDeficienciaWhereInput
    /**
     * Limit how many TipoDeficiencias to delete.
     */
    limit?: number
  }

  /**
   * TipoDeficiencia.subtipos
   */
  export type TipoDeficiencia$subtiposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubtipoDeficiencia
     */
    select?: SubtipoDeficienciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubtipoDeficiencia
     */
    omit?: SubtipoDeficienciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtipoDeficienciaInclude<ExtArgs> | null
    where?: SubtipoDeficienciaWhereInput
    orderBy?: SubtipoDeficienciaOrderByWithRelationInput | SubtipoDeficienciaOrderByWithRelationInput[]
    cursor?: SubtipoDeficienciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubtipoDeficienciaScalarFieldEnum | SubtipoDeficienciaScalarFieldEnum[]
  }

  /**
   * TipoDeficiencia without action
   */
  export type TipoDeficienciaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDeficiencia
     */
    select?: TipoDeficienciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDeficiencia
     */
    omit?: TipoDeficienciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDeficienciaInclude<ExtArgs> | null
  }


  /**
   * Model SubtipoDeficiencia
   */

  export type AggregateSubtipoDeficiencia = {
    _count: SubtipoDeficienciaCountAggregateOutputType | null
    _avg: SubtipoDeficienciaAvgAggregateOutputType | null
    _sum: SubtipoDeficienciaSumAggregateOutputType | null
    _min: SubtipoDeficienciaMinAggregateOutputType | null
    _max: SubtipoDeficienciaMaxAggregateOutputType | null
  }

  export type SubtipoDeficienciaAvgAggregateOutputType = {
    id: number | null
    tipoId: number | null
  }

  export type SubtipoDeficienciaSumAggregateOutputType = {
    id: number | null
    tipoId: number | null
  }

  export type SubtipoDeficienciaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    tipoId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubtipoDeficienciaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    tipoId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubtipoDeficienciaCountAggregateOutputType = {
    id: number
    nome: number
    tipoId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubtipoDeficienciaAvgAggregateInputType = {
    id?: true
    tipoId?: true
  }

  export type SubtipoDeficienciaSumAggregateInputType = {
    id?: true
    tipoId?: true
  }

  export type SubtipoDeficienciaMinAggregateInputType = {
    id?: true
    nome?: true
    tipoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubtipoDeficienciaMaxAggregateInputType = {
    id?: true
    nome?: true
    tipoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubtipoDeficienciaCountAggregateInputType = {
    id?: true
    nome?: true
    tipoId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubtipoDeficienciaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubtipoDeficiencia to aggregate.
     */
    where?: SubtipoDeficienciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubtipoDeficiencias to fetch.
     */
    orderBy?: SubtipoDeficienciaOrderByWithRelationInput | SubtipoDeficienciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubtipoDeficienciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubtipoDeficiencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubtipoDeficiencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubtipoDeficiencias
    **/
    _count?: true | SubtipoDeficienciaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubtipoDeficienciaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubtipoDeficienciaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubtipoDeficienciaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubtipoDeficienciaMaxAggregateInputType
  }

  export type GetSubtipoDeficienciaAggregateType<T extends SubtipoDeficienciaAggregateArgs> = {
        [P in keyof T & keyof AggregateSubtipoDeficiencia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubtipoDeficiencia[P]>
      : GetScalarType<T[P], AggregateSubtipoDeficiencia[P]>
  }




  export type SubtipoDeficienciaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubtipoDeficienciaWhereInput
    orderBy?: SubtipoDeficienciaOrderByWithAggregationInput | SubtipoDeficienciaOrderByWithAggregationInput[]
    by: SubtipoDeficienciaScalarFieldEnum[] | SubtipoDeficienciaScalarFieldEnum
    having?: SubtipoDeficienciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubtipoDeficienciaCountAggregateInputType | true
    _avg?: SubtipoDeficienciaAvgAggregateInputType
    _sum?: SubtipoDeficienciaSumAggregateInputType
    _min?: SubtipoDeficienciaMinAggregateInputType
    _max?: SubtipoDeficienciaMaxAggregateInputType
  }

  export type SubtipoDeficienciaGroupByOutputType = {
    id: number
    nome: string
    tipoId: number
    createdAt: Date
    updatedAt: Date
    _count: SubtipoDeficienciaCountAggregateOutputType | null
    _avg: SubtipoDeficienciaAvgAggregateOutputType | null
    _sum: SubtipoDeficienciaSumAggregateOutputType | null
    _min: SubtipoDeficienciaMinAggregateOutputType | null
    _max: SubtipoDeficienciaMaxAggregateOutputType | null
  }

  type GetSubtipoDeficienciaGroupByPayload<T extends SubtipoDeficienciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubtipoDeficienciaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubtipoDeficienciaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubtipoDeficienciaGroupByOutputType[P]>
            : GetScalarType<T[P], SubtipoDeficienciaGroupByOutputType[P]>
        }
      >
    >


  export type SubtipoDeficienciaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tipo?: boolean | TipoDeficienciaDefaultArgs<ExtArgs>
    barreiras?: boolean | SubtipoDeficiencia$barreirasArgs<ExtArgs>
    _count?: boolean | SubtipoDeficienciaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subtipoDeficiencia"]>

  export type SubtipoDeficienciaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tipo?: boolean | TipoDeficienciaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subtipoDeficiencia"]>

  export type SubtipoDeficienciaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tipo?: boolean | TipoDeficienciaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subtipoDeficiencia"]>

  export type SubtipoDeficienciaSelectScalar = {
    id?: boolean
    nome?: boolean
    tipoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubtipoDeficienciaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "tipoId" | "createdAt" | "updatedAt", ExtArgs["result"]["subtipoDeficiencia"]>
  export type SubtipoDeficienciaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo?: boolean | TipoDeficienciaDefaultArgs<ExtArgs>
    barreiras?: boolean | SubtipoDeficiencia$barreirasArgs<ExtArgs>
    _count?: boolean | SubtipoDeficienciaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubtipoDeficienciaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo?: boolean | TipoDeficienciaDefaultArgs<ExtArgs>
  }
  export type SubtipoDeficienciaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo?: boolean | TipoDeficienciaDefaultArgs<ExtArgs>
  }

  export type $SubtipoDeficienciaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubtipoDeficiencia"
    objects: {
      tipo: Prisma.$TipoDeficienciaPayload<ExtArgs>
      barreiras: Prisma.$SubtipoBarreiraPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      tipoId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subtipoDeficiencia"]>
    composites: {}
  }

  type SubtipoDeficienciaGetPayload<S extends boolean | null | undefined | SubtipoDeficienciaDefaultArgs> = $Result.GetResult<Prisma.$SubtipoDeficienciaPayload, S>

  type SubtipoDeficienciaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubtipoDeficienciaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubtipoDeficienciaCountAggregateInputType | true
    }

  export interface SubtipoDeficienciaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubtipoDeficiencia'], meta: { name: 'SubtipoDeficiencia' } }
    /**
     * Find zero or one SubtipoDeficiencia that matches the filter.
     * @param {SubtipoDeficienciaFindUniqueArgs} args - Arguments to find a SubtipoDeficiencia
     * @example
     * // Get one SubtipoDeficiencia
     * const subtipoDeficiencia = await prisma.subtipoDeficiencia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubtipoDeficienciaFindUniqueArgs>(args: SelectSubset<T, SubtipoDeficienciaFindUniqueArgs<ExtArgs>>): Prisma__SubtipoDeficienciaClient<$Result.GetResult<Prisma.$SubtipoDeficienciaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubtipoDeficiencia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubtipoDeficienciaFindUniqueOrThrowArgs} args - Arguments to find a SubtipoDeficiencia
     * @example
     * // Get one SubtipoDeficiencia
     * const subtipoDeficiencia = await prisma.subtipoDeficiencia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubtipoDeficienciaFindUniqueOrThrowArgs>(args: SelectSubset<T, SubtipoDeficienciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubtipoDeficienciaClient<$Result.GetResult<Prisma.$SubtipoDeficienciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubtipoDeficiencia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtipoDeficienciaFindFirstArgs} args - Arguments to find a SubtipoDeficiencia
     * @example
     * // Get one SubtipoDeficiencia
     * const subtipoDeficiencia = await prisma.subtipoDeficiencia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubtipoDeficienciaFindFirstArgs>(args?: SelectSubset<T, SubtipoDeficienciaFindFirstArgs<ExtArgs>>): Prisma__SubtipoDeficienciaClient<$Result.GetResult<Prisma.$SubtipoDeficienciaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubtipoDeficiencia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtipoDeficienciaFindFirstOrThrowArgs} args - Arguments to find a SubtipoDeficiencia
     * @example
     * // Get one SubtipoDeficiencia
     * const subtipoDeficiencia = await prisma.subtipoDeficiencia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubtipoDeficienciaFindFirstOrThrowArgs>(args?: SelectSubset<T, SubtipoDeficienciaFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubtipoDeficienciaClient<$Result.GetResult<Prisma.$SubtipoDeficienciaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubtipoDeficiencias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtipoDeficienciaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubtipoDeficiencias
     * const subtipoDeficiencias = await prisma.subtipoDeficiencia.findMany()
     * 
     * // Get first 10 SubtipoDeficiencias
     * const subtipoDeficiencias = await prisma.subtipoDeficiencia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subtipoDeficienciaWithIdOnly = await prisma.subtipoDeficiencia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubtipoDeficienciaFindManyArgs>(args?: SelectSubset<T, SubtipoDeficienciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubtipoDeficienciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubtipoDeficiencia.
     * @param {SubtipoDeficienciaCreateArgs} args - Arguments to create a SubtipoDeficiencia.
     * @example
     * // Create one SubtipoDeficiencia
     * const SubtipoDeficiencia = await prisma.subtipoDeficiencia.create({
     *   data: {
     *     // ... data to create a SubtipoDeficiencia
     *   }
     * })
     * 
     */
    create<T extends SubtipoDeficienciaCreateArgs>(args: SelectSubset<T, SubtipoDeficienciaCreateArgs<ExtArgs>>): Prisma__SubtipoDeficienciaClient<$Result.GetResult<Prisma.$SubtipoDeficienciaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubtipoDeficiencias.
     * @param {SubtipoDeficienciaCreateManyArgs} args - Arguments to create many SubtipoDeficiencias.
     * @example
     * // Create many SubtipoDeficiencias
     * const subtipoDeficiencia = await prisma.subtipoDeficiencia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubtipoDeficienciaCreateManyArgs>(args?: SelectSubset<T, SubtipoDeficienciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubtipoDeficiencias and returns the data saved in the database.
     * @param {SubtipoDeficienciaCreateManyAndReturnArgs} args - Arguments to create many SubtipoDeficiencias.
     * @example
     * // Create many SubtipoDeficiencias
     * const subtipoDeficiencia = await prisma.subtipoDeficiencia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubtipoDeficiencias and only return the `id`
     * const subtipoDeficienciaWithIdOnly = await prisma.subtipoDeficiencia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubtipoDeficienciaCreateManyAndReturnArgs>(args?: SelectSubset<T, SubtipoDeficienciaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubtipoDeficienciaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubtipoDeficiencia.
     * @param {SubtipoDeficienciaDeleteArgs} args - Arguments to delete one SubtipoDeficiencia.
     * @example
     * // Delete one SubtipoDeficiencia
     * const SubtipoDeficiencia = await prisma.subtipoDeficiencia.delete({
     *   where: {
     *     // ... filter to delete one SubtipoDeficiencia
     *   }
     * })
     * 
     */
    delete<T extends SubtipoDeficienciaDeleteArgs>(args: SelectSubset<T, SubtipoDeficienciaDeleteArgs<ExtArgs>>): Prisma__SubtipoDeficienciaClient<$Result.GetResult<Prisma.$SubtipoDeficienciaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubtipoDeficiencia.
     * @param {SubtipoDeficienciaUpdateArgs} args - Arguments to update one SubtipoDeficiencia.
     * @example
     * // Update one SubtipoDeficiencia
     * const subtipoDeficiencia = await prisma.subtipoDeficiencia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubtipoDeficienciaUpdateArgs>(args: SelectSubset<T, SubtipoDeficienciaUpdateArgs<ExtArgs>>): Prisma__SubtipoDeficienciaClient<$Result.GetResult<Prisma.$SubtipoDeficienciaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubtipoDeficiencias.
     * @param {SubtipoDeficienciaDeleteManyArgs} args - Arguments to filter SubtipoDeficiencias to delete.
     * @example
     * // Delete a few SubtipoDeficiencias
     * const { count } = await prisma.subtipoDeficiencia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubtipoDeficienciaDeleteManyArgs>(args?: SelectSubset<T, SubtipoDeficienciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubtipoDeficiencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtipoDeficienciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubtipoDeficiencias
     * const subtipoDeficiencia = await prisma.subtipoDeficiencia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubtipoDeficienciaUpdateManyArgs>(args: SelectSubset<T, SubtipoDeficienciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubtipoDeficiencias and returns the data updated in the database.
     * @param {SubtipoDeficienciaUpdateManyAndReturnArgs} args - Arguments to update many SubtipoDeficiencias.
     * @example
     * // Update many SubtipoDeficiencias
     * const subtipoDeficiencia = await prisma.subtipoDeficiencia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubtipoDeficiencias and only return the `id`
     * const subtipoDeficienciaWithIdOnly = await prisma.subtipoDeficiencia.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubtipoDeficienciaUpdateManyAndReturnArgs>(args: SelectSubset<T, SubtipoDeficienciaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubtipoDeficienciaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubtipoDeficiencia.
     * @param {SubtipoDeficienciaUpsertArgs} args - Arguments to update or create a SubtipoDeficiencia.
     * @example
     * // Update or create a SubtipoDeficiencia
     * const subtipoDeficiencia = await prisma.subtipoDeficiencia.upsert({
     *   create: {
     *     // ... data to create a SubtipoDeficiencia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubtipoDeficiencia we want to update
     *   }
     * })
     */
    upsert<T extends SubtipoDeficienciaUpsertArgs>(args: SelectSubset<T, SubtipoDeficienciaUpsertArgs<ExtArgs>>): Prisma__SubtipoDeficienciaClient<$Result.GetResult<Prisma.$SubtipoDeficienciaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubtipoDeficiencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtipoDeficienciaCountArgs} args - Arguments to filter SubtipoDeficiencias to count.
     * @example
     * // Count the number of SubtipoDeficiencias
     * const count = await prisma.subtipoDeficiencia.count({
     *   where: {
     *     // ... the filter for the SubtipoDeficiencias we want to count
     *   }
     * })
    **/
    count<T extends SubtipoDeficienciaCountArgs>(
      args?: Subset<T, SubtipoDeficienciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubtipoDeficienciaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubtipoDeficiencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtipoDeficienciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubtipoDeficienciaAggregateArgs>(args: Subset<T, SubtipoDeficienciaAggregateArgs>): Prisma.PrismaPromise<GetSubtipoDeficienciaAggregateType<T>>

    /**
     * Group by SubtipoDeficiencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtipoDeficienciaGroupByArgs} args - Group by arguments.
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
      T extends SubtipoDeficienciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubtipoDeficienciaGroupByArgs['orderBy'] }
        : { orderBy?: SubtipoDeficienciaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubtipoDeficienciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubtipoDeficienciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubtipoDeficiencia model
   */
  readonly fields: SubtipoDeficienciaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubtipoDeficiencia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubtipoDeficienciaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tipo<T extends TipoDeficienciaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoDeficienciaDefaultArgs<ExtArgs>>): Prisma__TipoDeficienciaClient<$Result.GetResult<Prisma.$TipoDeficienciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    barreiras<T extends SubtipoDeficiencia$barreirasArgs<ExtArgs> = {}>(args?: Subset<T, SubtipoDeficiencia$barreirasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubtipoBarreiraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SubtipoDeficiencia model
   */
  interface SubtipoDeficienciaFieldRefs {
    readonly id: FieldRef<"SubtipoDeficiencia", 'Int'>
    readonly nome: FieldRef<"SubtipoDeficiencia", 'String'>
    readonly tipoId: FieldRef<"SubtipoDeficiencia", 'Int'>
    readonly createdAt: FieldRef<"SubtipoDeficiencia", 'DateTime'>
    readonly updatedAt: FieldRef<"SubtipoDeficiencia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubtipoDeficiencia findUnique
   */
  export type SubtipoDeficienciaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubtipoDeficiencia
     */
    select?: SubtipoDeficienciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubtipoDeficiencia
     */
    omit?: SubtipoDeficienciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtipoDeficienciaInclude<ExtArgs> | null
    /**
     * Filter, which SubtipoDeficiencia to fetch.
     */
    where: SubtipoDeficienciaWhereUniqueInput
  }

  /**
   * SubtipoDeficiencia findUniqueOrThrow
   */
  export type SubtipoDeficienciaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubtipoDeficiencia
     */
    select?: SubtipoDeficienciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubtipoDeficiencia
     */
    omit?: SubtipoDeficienciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtipoDeficienciaInclude<ExtArgs> | null
    /**
     * Filter, which SubtipoDeficiencia to fetch.
     */
    where: SubtipoDeficienciaWhereUniqueInput
  }

  /**
   * SubtipoDeficiencia findFirst
   */
  export type SubtipoDeficienciaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubtipoDeficiencia
     */
    select?: SubtipoDeficienciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubtipoDeficiencia
     */
    omit?: SubtipoDeficienciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtipoDeficienciaInclude<ExtArgs> | null
    /**
     * Filter, which SubtipoDeficiencia to fetch.
     */
    where?: SubtipoDeficienciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubtipoDeficiencias to fetch.
     */
    orderBy?: SubtipoDeficienciaOrderByWithRelationInput | SubtipoDeficienciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubtipoDeficiencias.
     */
    cursor?: SubtipoDeficienciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubtipoDeficiencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubtipoDeficiencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubtipoDeficiencias.
     */
    distinct?: SubtipoDeficienciaScalarFieldEnum | SubtipoDeficienciaScalarFieldEnum[]
  }

  /**
   * SubtipoDeficiencia findFirstOrThrow
   */
  export type SubtipoDeficienciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubtipoDeficiencia
     */
    select?: SubtipoDeficienciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubtipoDeficiencia
     */
    omit?: SubtipoDeficienciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtipoDeficienciaInclude<ExtArgs> | null
    /**
     * Filter, which SubtipoDeficiencia to fetch.
     */
    where?: SubtipoDeficienciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubtipoDeficiencias to fetch.
     */
    orderBy?: SubtipoDeficienciaOrderByWithRelationInput | SubtipoDeficienciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubtipoDeficiencias.
     */
    cursor?: SubtipoDeficienciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubtipoDeficiencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubtipoDeficiencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubtipoDeficiencias.
     */
    distinct?: SubtipoDeficienciaScalarFieldEnum | SubtipoDeficienciaScalarFieldEnum[]
  }

  /**
   * SubtipoDeficiencia findMany
   */
  export type SubtipoDeficienciaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubtipoDeficiencia
     */
    select?: SubtipoDeficienciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubtipoDeficiencia
     */
    omit?: SubtipoDeficienciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtipoDeficienciaInclude<ExtArgs> | null
    /**
     * Filter, which SubtipoDeficiencias to fetch.
     */
    where?: SubtipoDeficienciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubtipoDeficiencias to fetch.
     */
    orderBy?: SubtipoDeficienciaOrderByWithRelationInput | SubtipoDeficienciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubtipoDeficiencias.
     */
    cursor?: SubtipoDeficienciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubtipoDeficiencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubtipoDeficiencias.
     */
    skip?: number
    distinct?: SubtipoDeficienciaScalarFieldEnum | SubtipoDeficienciaScalarFieldEnum[]
  }

  /**
   * SubtipoDeficiencia create
   */
  export type SubtipoDeficienciaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubtipoDeficiencia
     */
    select?: SubtipoDeficienciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubtipoDeficiencia
     */
    omit?: SubtipoDeficienciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtipoDeficienciaInclude<ExtArgs> | null
    /**
     * The data needed to create a SubtipoDeficiencia.
     */
    data: XOR<SubtipoDeficienciaCreateInput, SubtipoDeficienciaUncheckedCreateInput>
  }

  /**
   * SubtipoDeficiencia createMany
   */
  export type SubtipoDeficienciaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubtipoDeficiencias.
     */
    data: SubtipoDeficienciaCreateManyInput | SubtipoDeficienciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubtipoDeficiencia createManyAndReturn
   */
  export type SubtipoDeficienciaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubtipoDeficiencia
     */
    select?: SubtipoDeficienciaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubtipoDeficiencia
     */
    omit?: SubtipoDeficienciaOmit<ExtArgs> | null
    /**
     * The data used to create many SubtipoDeficiencias.
     */
    data: SubtipoDeficienciaCreateManyInput | SubtipoDeficienciaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtipoDeficienciaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubtipoDeficiencia update
   */
  export type SubtipoDeficienciaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubtipoDeficiencia
     */
    select?: SubtipoDeficienciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubtipoDeficiencia
     */
    omit?: SubtipoDeficienciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtipoDeficienciaInclude<ExtArgs> | null
    /**
     * The data needed to update a SubtipoDeficiencia.
     */
    data: XOR<SubtipoDeficienciaUpdateInput, SubtipoDeficienciaUncheckedUpdateInput>
    /**
     * Choose, which SubtipoDeficiencia to update.
     */
    where: SubtipoDeficienciaWhereUniqueInput
  }

  /**
   * SubtipoDeficiencia updateMany
   */
  export type SubtipoDeficienciaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubtipoDeficiencias.
     */
    data: XOR<SubtipoDeficienciaUpdateManyMutationInput, SubtipoDeficienciaUncheckedUpdateManyInput>
    /**
     * Filter which SubtipoDeficiencias to update
     */
    where?: SubtipoDeficienciaWhereInput
    /**
     * Limit how many SubtipoDeficiencias to update.
     */
    limit?: number
  }

  /**
   * SubtipoDeficiencia updateManyAndReturn
   */
  export type SubtipoDeficienciaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubtipoDeficiencia
     */
    select?: SubtipoDeficienciaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubtipoDeficiencia
     */
    omit?: SubtipoDeficienciaOmit<ExtArgs> | null
    /**
     * The data used to update SubtipoDeficiencias.
     */
    data: XOR<SubtipoDeficienciaUpdateManyMutationInput, SubtipoDeficienciaUncheckedUpdateManyInput>
    /**
     * Filter which SubtipoDeficiencias to update
     */
    where?: SubtipoDeficienciaWhereInput
    /**
     * Limit how many SubtipoDeficiencias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtipoDeficienciaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubtipoDeficiencia upsert
   */
  export type SubtipoDeficienciaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubtipoDeficiencia
     */
    select?: SubtipoDeficienciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubtipoDeficiencia
     */
    omit?: SubtipoDeficienciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtipoDeficienciaInclude<ExtArgs> | null
    /**
     * The filter to search for the SubtipoDeficiencia to update in case it exists.
     */
    where: SubtipoDeficienciaWhereUniqueInput
    /**
     * In case the SubtipoDeficiencia found by the `where` argument doesn't exist, create a new SubtipoDeficiencia with this data.
     */
    create: XOR<SubtipoDeficienciaCreateInput, SubtipoDeficienciaUncheckedCreateInput>
    /**
     * In case the SubtipoDeficiencia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubtipoDeficienciaUpdateInput, SubtipoDeficienciaUncheckedUpdateInput>
  }

  /**
   * SubtipoDeficiencia delete
   */
  export type SubtipoDeficienciaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubtipoDeficiencia
     */
    select?: SubtipoDeficienciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubtipoDeficiencia
     */
    omit?: SubtipoDeficienciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtipoDeficienciaInclude<ExtArgs> | null
    /**
     * Filter which SubtipoDeficiencia to delete.
     */
    where: SubtipoDeficienciaWhereUniqueInput
  }

  /**
   * SubtipoDeficiencia deleteMany
   */
  export type SubtipoDeficienciaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubtipoDeficiencias to delete
     */
    where?: SubtipoDeficienciaWhereInput
    /**
     * Limit how many SubtipoDeficiencias to delete.
     */
    limit?: number
  }

  /**
   * SubtipoDeficiencia.barreiras
   */
  export type SubtipoDeficiencia$barreirasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubtipoBarreira
     */
    select?: SubtipoBarreiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubtipoBarreira
     */
    omit?: SubtipoBarreiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtipoBarreiraInclude<ExtArgs> | null
    where?: SubtipoBarreiraWhereInput
    orderBy?: SubtipoBarreiraOrderByWithRelationInput | SubtipoBarreiraOrderByWithRelationInput[]
    cursor?: SubtipoBarreiraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubtipoBarreiraScalarFieldEnum | SubtipoBarreiraScalarFieldEnum[]
  }

  /**
   * SubtipoDeficiencia without action
   */
  export type SubtipoDeficienciaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubtipoDeficiencia
     */
    select?: SubtipoDeficienciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubtipoDeficiencia
     */
    omit?: SubtipoDeficienciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtipoDeficienciaInclude<ExtArgs> | null
  }


  /**
   * Model Barreira
   */

  export type AggregateBarreira = {
    _count: BarreiraCountAggregateOutputType | null
    _avg: BarreiraAvgAggregateOutputType | null
    _sum: BarreiraSumAggregateOutputType | null
    _min: BarreiraMinAggregateOutputType | null
    _max: BarreiraMaxAggregateOutputType | null
  }

  export type BarreiraAvgAggregateOutputType = {
    id: number | null
  }

  export type BarreiraSumAggregateOutputType = {
    id: number | null
  }

  export type BarreiraMinAggregateOutputType = {
    id: number | null
    descricao: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BarreiraMaxAggregateOutputType = {
    id: number | null
    descricao: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BarreiraCountAggregateOutputType = {
    id: number
    descricao: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BarreiraAvgAggregateInputType = {
    id?: true
  }

  export type BarreiraSumAggregateInputType = {
    id?: true
  }

  export type BarreiraMinAggregateInputType = {
    id?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BarreiraMaxAggregateInputType = {
    id?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BarreiraCountAggregateInputType = {
    id?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BarreiraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Barreira to aggregate.
     */
    where?: BarreiraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barreiras to fetch.
     */
    orderBy?: BarreiraOrderByWithRelationInput | BarreiraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BarreiraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barreiras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barreiras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Barreiras
    **/
    _count?: true | BarreiraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BarreiraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BarreiraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BarreiraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BarreiraMaxAggregateInputType
  }

  export type GetBarreiraAggregateType<T extends BarreiraAggregateArgs> = {
        [P in keyof T & keyof AggregateBarreira]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBarreira[P]>
      : GetScalarType<T[P], AggregateBarreira[P]>
  }




  export type BarreiraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarreiraWhereInput
    orderBy?: BarreiraOrderByWithAggregationInput | BarreiraOrderByWithAggregationInput[]
    by: BarreiraScalarFieldEnum[] | BarreiraScalarFieldEnum
    having?: BarreiraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BarreiraCountAggregateInputType | true
    _avg?: BarreiraAvgAggregateInputType
    _sum?: BarreiraSumAggregateInputType
    _min?: BarreiraMinAggregateInputType
    _max?: BarreiraMaxAggregateInputType
  }

  export type BarreiraGroupByOutputType = {
    id: number
    descricao: string
    createdAt: Date
    updatedAt: Date
    _count: BarreiraCountAggregateOutputType | null
    _avg: BarreiraAvgAggregateOutputType | null
    _sum: BarreiraSumAggregateOutputType | null
    _min: BarreiraMinAggregateOutputType | null
    _max: BarreiraMaxAggregateOutputType | null
  }

  type GetBarreiraGroupByPayload<T extends BarreiraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BarreiraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BarreiraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BarreiraGroupByOutputType[P]>
            : GetScalarType<T[P], BarreiraGroupByOutputType[P]>
        }
      >
    >


  export type BarreiraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subtipos?: boolean | Barreira$subtiposArgs<ExtArgs>
    acessibilidades?: boolean | Barreira$acessibilidadesArgs<ExtArgs>
    _count?: boolean | BarreiraCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barreira"]>

  export type BarreiraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["barreira"]>

  export type BarreiraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["barreira"]>

  export type BarreiraSelectScalar = {
    id?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BarreiraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descricao" | "createdAt" | "updatedAt", ExtArgs["result"]["barreira"]>
  export type BarreiraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subtipos?: boolean | Barreira$subtiposArgs<ExtArgs>
    acessibilidades?: boolean | Barreira$acessibilidadesArgs<ExtArgs>
    _count?: boolean | BarreiraCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BarreiraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BarreiraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BarreiraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Barreira"
    objects: {
      subtipos: Prisma.$SubtipoBarreiraPayload<ExtArgs>[]
      acessibilidades: Prisma.$BarreiraAcessibilidadePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descricao: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["barreira"]>
    composites: {}
  }

  type BarreiraGetPayload<S extends boolean | null | undefined | BarreiraDefaultArgs> = $Result.GetResult<Prisma.$BarreiraPayload, S>

  type BarreiraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BarreiraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BarreiraCountAggregateInputType | true
    }

  export interface BarreiraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Barreira'], meta: { name: 'Barreira' } }
    /**
     * Find zero or one Barreira that matches the filter.
     * @param {BarreiraFindUniqueArgs} args - Arguments to find a Barreira
     * @example
     * // Get one Barreira
     * const barreira = await prisma.barreira.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BarreiraFindUniqueArgs>(args: SelectSubset<T, BarreiraFindUniqueArgs<ExtArgs>>): Prisma__BarreiraClient<$Result.GetResult<Prisma.$BarreiraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Barreira that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BarreiraFindUniqueOrThrowArgs} args - Arguments to find a Barreira
     * @example
     * // Get one Barreira
     * const barreira = await prisma.barreira.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BarreiraFindUniqueOrThrowArgs>(args: SelectSubset<T, BarreiraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BarreiraClient<$Result.GetResult<Prisma.$BarreiraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Barreira that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarreiraFindFirstArgs} args - Arguments to find a Barreira
     * @example
     * // Get one Barreira
     * const barreira = await prisma.barreira.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BarreiraFindFirstArgs>(args?: SelectSubset<T, BarreiraFindFirstArgs<ExtArgs>>): Prisma__BarreiraClient<$Result.GetResult<Prisma.$BarreiraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Barreira that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarreiraFindFirstOrThrowArgs} args - Arguments to find a Barreira
     * @example
     * // Get one Barreira
     * const barreira = await prisma.barreira.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BarreiraFindFirstOrThrowArgs>(args?: SelectSubset<T, BarreiraFindFirstOrThrowArgs<ExtArgs>>): Prisma__BarreiraClient<$Result.GetResult<Prisma.$BarreiraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Barreiras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarreiraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Barreiras
     * const barreiras = await prisma.barreira.findMany()
     * 
     * // Get first 10 Barreiras
     * const barreiras = await prisma.barreira.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const barreiraWithIdOnly = await prisma.barreira.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BarreiraFindManyArgs>(args?: SelectSubset<T, BarreiraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarreiraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Barreira.
     * @param {BarreiraCreateArgs} args - Arguments to create a Barreira.
     * @example
     * // Create one Barreira
     * const Barreira = await prisma.barreira.create({
     *   data: {
     *     // ... data to create a Barreira
     *   }
     * })
     * 
     */
    create<T extends BarreiraCreateArgs>(args: SelectSubset<T, BarreiraCreateArgs<ExtArgs>>): Prisma__BarreiraClient<$Result.GetResult<Prisma.$BarreiraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Barreiras.
     * @param {BarreiraCreateManyArgs} args - Arguments to create many Barreiras.
     * @example
     * // Create many Barreiras
     * const barreira = await prisma.barreira.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BarreiraCreateManyArgs>(args?: SelectSubset<T, BarreiraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Barreiras and returns the data saved in the database.
     * @param {BarreiraCreateManyAndReturnArgs} args - Arguments to create many Barreiras.
     * @example
     * // Create many Barreiras
     * const barreira = await prisma.barreira.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Barreiras and only return the `id`
     * const barreiraWithIdOnly = await prisma.barreira.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BarreiraCreateManyAndReturnArgs>(args?: SelectSubset<T, BarreiraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarreiraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Barreira.
     * @param {BarreiraDeleteArgs} args - Arguments to delete one Barreira.
     * @example
     * // Delete one Barreira
     * const Barreira = await prisma.barreira.delete({
     *   where: {
     *     // ... filter to delete one Barreira
     *   }
     * })
     * 
     */
    delete<T extends BarreiraDeleteArgs>(args: SelectSubset<T, BarreiraDeleteArgs<ExtArgs>>): Prisma__BarreiraClient<$Result.GetResult<Prisma.$BarreiraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Barreira.
     * @param {BarreiraUpdateArgs} args - Arguments to update one Barreira.
     * @example
     * // Update one Barreira
     * const barreira = await prisma.barreira.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BarreiraUpdateArgs>(args: SelectSubset<T, BarreiraUpdateArgs<ExtArgs>>): Prisma__BarreiraClient<$Result.GetResult<Prisma.$BarreiraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Barreiras.
     * @param {BarreiraDeleteManyArgs} args - Arguments to filter Barreiras to delete.
     * @example
     * // Delete a few Barreiras
     * const { count } = await prisma.barreira.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BarreiraDeleteManyArgs>(args?: SelectSubset<T, BarreiraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Barreiras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarreiraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Barreiras
     * const barreira = await prisma.barreira.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BarreiraUpdateManyArgs>(args: SelectSubset<T, BarreiraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Barreiras and returns the data updated in the database.
     * @param {BarreiraUpdateManyAndReturnArgs} args - Arguments to update many Barreiras.
     * @example
     * // Update many Barreiras
     * const barreira = await prisma.barreira.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Barreiras and only return the `id`
     * const barreiraWithIdOnly = await prisma.barreira.updateManyAndReturn({
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
    updateManyAndReturn<T extends BarreiraUpdateManyAndReturnArgs>(args: SelectSubset<T, BarreiraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarreiraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Barreira.
     * @param {BarreiraUpsertArgs} args - Arguments to update or create a Barreira.
     * @example
     * // Update or create a Barreira
     * const barreira = await prisma.barreira.upsert({
     *   create: {
     *     // ... data to create a Barreira
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Barreira we want to update
     *   }
     * })
     */
    upsert<T extends BarreiraUpsertArgs>(args: SelectSubset<T, BarreiraUpsertArgs<ExtArgs>>): Prisma__BarreiraClient<$Result.GetResult<Prisma.$BarreiraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Barreiras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarreiraCountArgs} args - Arguments to filter Barreiras to count.
     * @example
     * // Count the number of Barreiras
     * const count = await prisma.barreira.count({
     *   where: {
     *     // ... the filter for the Barreiras we want to count
     *   }
     * })
    **/
    count<T extends BarreiraCountArgs>(
      args?: Subset<T, BarreiraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BarreiraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Barreira.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarreiraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BarreiraAggregateArgs>(args: Subset<T, BarreiraAggregateArgs>): Prisma.PrismaPromise<GetBarreiraAggregateType<T>>

    /**
     * Group by Barreira.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarreiraGroupByArgs} args - Group by arguments.
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
      T extends BarreiraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BarreiraGroupByArgs['orderBy'] }
        : { orderBy?: BarreiraGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BarreiraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBarreiraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Barreira model
   */
  readonly fields: BarreiraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Barreira.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BarreiraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subtipos<T extends Barreira$subtiposArgs<ExtArgs> = {}>(args?: Subset<T, Barreira$subtiposArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubtipoBarreiraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    acessibilidades<T extends Barreira$acessibilidadesArgs<ExtArgs> = {}>(args?: Subset<T, Barreira$acessibilidadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarreiraAcessibilidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Barreira model
   */
  interface BarreiraFieldRefs {
    readonly id: FieldRef<"Barreira", 'Int'>
    readonly descricao: FieldRef<"Barreira", 'String'>
    readonly createdAt: FieldRef<"Barreira", 'DateTime'>
    readonly updatedAt: FieldRef<"Barreira", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Barreira findUnique
   */
  export type BarreiraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barreira
     */
    select?: BarreiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barreira
     */
    omit?: BarreiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarreiraInclude<ExtArgs> | null
    /**
     * Filter, which Barreira to fetch.
     */
    where: BarreiraWhereUniqueInput
  }

  /**
   * Barreira findUniqueOrThrow
   */
  export type BarreiraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barreira
     */
    select?: BarreiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barreira
     */
    omit?: BarreiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarreiraInclude<ExtArgs> | null
    /**
     * Filter, which Barreira to fetch.
     */
    where: BarreiraWhereUniqueInput
  }

  /**
   * Barreira findFirst
   */
  export type BarreiraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barreira
     */
    select?: BarreiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barreira
     */
    omit?: BarreiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarreiraInclude<ExtArgs> | null
    /**
     * Filter, which Barreira to fetch.
     */
    where?: BarreiraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barreiras to fetch.
     */
    orderBy?: BarreiraOrderByWithRelationInput | BarreiraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Barreiras.
     */
    cursor?: BarreiraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barreiras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barreiras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Barreiras.
     */
    distinct?: BarreiraScalarFieldEnum | BarreiraScalarFieldEnum[]
  }

  /**
   * Barreira findFirstOrThrow
   */
  export type BarreiraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barreira
     */
    select?: BarreiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barreira
     */
    omit?: BarreiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarreiraInclude<ExtArgs> | null
    /**
     * Filter, which Barreira to fetch.
     */
    where?: BarreiraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barreiras to fetch.
     */
    orderBy?: BarreiraOrderByWithRelationInput | BarreiraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Barreiras.
     */
    cursor?: BarreiraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barreiras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barreiras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Barreiras.
     */
    distinct?: BarreiraScalarFieldEnum | BarreiraScalarFieldEnum[]
  }

  /**
   * Barreira findMany
   */
  export type BarreiraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barreira
     */
    select?: BarreiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barreira
     */
    omit?: BarreiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarreiraInclude<ExtArgs> | null
    /**
     * Filter, which Barreiras to fetch.
     */
    where?: BarreiraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barreiras to fetch.
     */
    orderBy?: BarreiraOrderByWithRelationInput | BarreiraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Barreiras.
     */
    cursor?: BarreiraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barreiras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barreiras.
     */
    skip?: number
    distinct?: BarreiraScalarFieldEnum | BarreiraScalarFieldEnum[]
  }

  /**
   * Barreira create
   */
  export type BarreiraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barreira
     */
    select?: BarreiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barreira
     */
    omit?: BarreiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarreiraInclude<ExtArgs> | null
    /**
     * The data needed to create a Barreira.
     */
    data: XOR<BarreiraCreateInput, BarreiraUncheckedCreateInput>
  }

  /**
   * Barreira createMany
   */
  export type BarreiraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Barreiras.
     */
    data: BarreiraCreateManyInput | BarreiraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Barreira createManyAndReturn
   */
  export type BarreiraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barreira
     */
    select?: BarreiraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Barreira
     */
    omit?: BarreiraOmit<ExtArgs> | null
    /**
     * The data used to create many Barreiras.
     */
    data: BarreiraCreateManyInput | BarreiraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Barreira update
   */
  export type BarreiraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barreira
     */
    select?: BarreiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barreira
     */
    omit?: BarreiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarreiraInclude<ExtArgs> | null
    /**
     * The data needed to update a Barreira.
     */
    data: XOR<BarreiraUpdateInput, BarreiraUncheckedUpdateInput>
    /**
     * Choose, which Barreira to update.
     */
    where: BarreiraWhereUniqueInput
  }

  /**
   * Barreira updateMany
   */
  export type BarreiraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Barreiras.
     */
    data: XOR<BarreiraUpdateManyMutationInput, BarreiraUncheckedUpdateManyInput>
    /**
     * Filter which Barreiras to update
     */
    where?: BarreiraWhereInput
    /**
     * Limit how many Barreiras to update.
     */
    limit?: number
  }

  /**
   * Barreira updateManyAndReturn
   */
  export type BarreiraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barreira
     */
    select?: BarreiraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Barreira
     */
    omit?: BarreiraOmit<ExtArgs> | null
    /**
     * The data used to update Barreiras.
     */
    data: XOR<BarreiraUpdateManyMutationInput, BarreiraUncheckedUpdateManyInput>
    /**
     * Filter which Barreiras to update
     */
    where?: BarreiraWhereInput
    /**
     * Limit how many Barreiras to update.
     */
    limit?: number
  }

  /**
   * Barreira upsert
   */
  export type BarreiraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barreira
     */
    select?: BarreiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barreira
     */
    omit?: BarreiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarreiraInclude<ExtArgs> | null
    /**
     * The filter to search for the Barreira to update in case it exists.
     */
    where: BarreiraWhereUniqueInput
    /**
     * In case the Barreira found by the `where` argument doesn't exist, create a new Barreira with this data.
     */
    create: XOR<BarreiraCreateInput, BarreiraUncheckedCreateInput>
    /**
     * In case the Barreira was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BarreiraUpdateInput, BarreiraUncheckedUpdateInput>
  }

  /**
   * Barreira delete
   */
  export type BarreiraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barreira
     */
    select?: BarreiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barreira
     */
    omit?: BarreiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarreiraInclude<ExtArgs> | null
    /**
     * Filter which Barreira to delete.
     */
    where: BarreiraWhereUniqueInput
  }

  /**
   * Barreira deleteMany
   */
  export type BarreiraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Barreiras to delete
     */
    where?: BarreiraWhereInput
    /**
     * Limit how many Barreiras to delete.
     */
    limit?: number
  }

  /**
   * Barreira.subtipos
   */
  export type Barreira$subtiposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubtipoBarreira
     */
    select?: SubtipoBarreiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubtipoBarreira
     */
    omit?: SubtipoBarreiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtipoBarreiraInclude<ExtArgs> | null
    where?: SubtipoBarreiraWhereInput
    orderBy?: SubtipoBarreiraOrderByWithRelationInput | SubtipoBarreiraOrderByWithRelationInput[]
    cursor?: SubtipoBarreiraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubtipoBarreiraScalarFieldEnum | SubtipoBarreiraScalarFieldEnum[]
  }

  /**
   * Barreira.acessibilidades
   */
  export type Barreira$acessibilidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarreiraAcessibilidade
     */
    select?: BarreiraAcessibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarreiraAcessibilidade
     */
    omit?: BarreiraAcessibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarreiraAcessibilidadeInclude<ExtArgs> | null
    where?: BarreiraAcessibilidadeWhereInput
    orderBy?: BarreiraAcessibilidadeOrderByWithRelationInput | BarreiraAcessibilidadeOrderByWithRelationInput[]
    cursor?: BarreiraAcessibilidadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BarreiraAcessibilidadeScalarFieldEnum | BarreiraAcessibilidadeScalarFieldEnum[]
  }

  /**
   * Barreira without action
   */
  export type BarreiraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barreira
     */
    select?: BarreiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barreira
     */
    omit?: BarreiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarreiraInclude<ExtArgs> | null
  }


  /**
   * Model Acessibilidade
   */

  export type AggregateAcessibilidade = {
    _count: AcessibilidadeCountAggregateOutputType | null
    _avg: AcessibilidadeAvgAggregateOutputType | null
    _sum: AcessibilidadeSumAggregateOutputType | null
    _min: AcessibilidadeMinAggregateOutputType | null
    _max: AcessibilidadeMaxAggregateOutputType | null
  }

  export type AcessibilidadeAvgAggregateOutputType = {
    id: number | null
  }

  export type AcessibilidadeSumAggregateOutputType = {
    id: number | null
  }

  export type AcessibilidadeMinAggregateOutputType = {
    id: number | null
    descricao: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AcessibilidadeMaxAggregateOutputType = {
    id: number | null
    descricao: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AcessibilidadeCountAggregateOutputType = {
    id: number
    descricao: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AcessibilidadeAvgAggregateInputType = {
    id?: true
  }

  export type AcessibilidadeSumAggregateInputType = {
    id?: true
  }

  export type AcessibilidadeMinAggregateInputType = {
    id?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AcessibilidadeMaxAggregateInputType = {
    id?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AcessibilidadeCountAggregateInputType = {
    id?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AcessibilidadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Acessibilidade to aggregate.
     */
    where?: AcessibilidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Acessibilidades to fetch.
     */
    orderBy?: AcessibilidadeOrderByWithRelationInput | AcessibilidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AcessibilidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Acessibilidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Acessibilidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Acessibilidades
    **/
    _count?: true | AcessibilidadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AcessibilidadeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AcessibilidadeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AcessibilidadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AcessibilidadeMaxAggregateInputType
  }

  export type GetAcessibilidadeAggregateType<T extends AcessibilidadeAggregateArgs> = {
        [P in keyof T & keyof AggregateAcessibilidade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAcessibilidade[P]>
      : GetScalarType<T[P], AggregateAcessibilidade[P]>
  }




  export type AcessibilidadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcessibilidadeWhereInput
    orderBy?: AcessibilidadeOrderByWithAggregationInput | AcessibilidadeOrderByWithAggregationInput[]
    by: AcessibilidadeScalarFieldEnum[] | AcessibilidadeScalarFieldEnum
    having?: AcessibilidadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AcessibilidadeCountAggregateInputType | true
    _avg?: AcessibilidadeAvgAggregateInputType
    _sum?: AcessibilidadeSumAggregateInputType
    _min?: AcessibilidadeMinAggregateInputType
    _max?: AcessibilidadeMaxAggregateInputType
  }

  export type AcessibilidadeGroupByOutputType = {
    id: number
    descricao: string
    createdAt: Date
    updatedAt: Date
    _count: AcessibilidadeCountAggregateOutputType | null
    _avg: AcessibilidadeAvgAggregateOutputType | null
    _sum: AcessibilidadeSumAggregateOutputType | null
    _min: AcessibilidadeMinAggregateOutputType | null
    _max: AcessibilidadeMaxAggregateOutputType | null
  }

  type GetAcessibilidadeGroupByPayload<T extends AcessibilidadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AcessibilidadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AcessibilidadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AcessibilidadeGroupByOutputType[P]>
            : GetScalarType<T[P], AcessibilidadeGroupByOutputType[P]>
        }
      >
    >


  export type AcessibilidadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    barreiras?: boolean | Acessibilidade$barreirasArgs<ExtArgs>
    _count?: boolean | AcessibilidadeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["acessibilidade"]>

  export type AcessibilidadeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["acessibilidade"]>

  export type AcessibilidadeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["acessibilidade"]>

  export type AcessibilidadeSelectScalar = {
    id?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AcessibilidadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descricao" | "createdAt" | "updatedAt", ExtArgs["result"]["acessibilidade"]>
  export type AcessibilidadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barreiras?: boolean | Acessibilidade$barreirasArgs<ExtArgs>
    _count?: boolean | AcessibilidadeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AcessibilidadeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AcessibilidadeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AcessibilidadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Acessibilidade"
    objects: {
      barreiras: Prisma.$BarreiraAcessibilidadePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descricao: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["acessibilidade"]>
    composites: {}
  }

  type AcessibilidadeGetPayload<S extends boolean | null | undefined | AcessibilidadeDefaultArgs> = $Result.GetResult<Prisma.$AcessibilidadePayload, S>

  type AcessibilidadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AcessibilidadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AcessibilidadeCountAggregateInputType | true
    }

  export interface AcessibilidadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Acessibilidade'], meta: { name: 'Acessibilidade' } }
    /**
     * Find zero or one Acessibilidade that matches the filter.
     * @param {AcessibilidadeFindUniqueArgs} args - Arguments to find a Acessibilidade
     * @example
     * // Get one Acessibilidade
     * const acessibilidade = await prisma.acessibilidade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AcessibilidadeFindUniqueArgs>(args: SelectSubset<T, AcessibilidadeFindUniqueArgs<ExtArgs>>): Prisma__AcessibilidadeClient<$Result.GetResult<Prisma.$AcessibilidadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Acessibilidade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AcessibilidadeFindUniqueOrThrowArgs} args - Arguments to find a Acessibilidade
     * @example
     * // Get one Acessibilidade
     * const acessibilidade = await prisma.acessibilidade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AcessibilidadeFindUniqueOrThrowArgs>(args: SelectSubset<T, AcessibilidadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AcessibilidadeClient<$Result.GetResult<Prisma.$AcessibilidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Acessibilidade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessibilidadeFindFirstArgs} args - Arguments to find a Acessibilidade
     * @example
     * // Get one Acessibilidade
     * const acessibilidade = await prisma.acessibilidade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AcessibilidadeFindFirstArgs>(args?: SelectSubset<T, AcessibilidadeFindFirstArgs<ExtArgs>>): Prisma__AcessibilidadeClient<$Result.GetResult<Prisma.$AcessibilidadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Acessibilidade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessibilidadeFindFirstOrThrowArgs} args - Arguments to find a Acessibilidade
     * @example
     * // Get one Acessibilidade
     * const acessibilidade = await prisma.acessibilidade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AcessibilidadeFindFirstOrThrowArgs>(args?: SelectSubset<T, AcessibilidadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AcessibilidadeClient<$Result.GetResult<Prisma.$AcessibilidadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Acessibilidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessibilidadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Acessibilidades
     * const acessibilidades = await prisma.acessibilidade.findMany()
     * 
     * // Get first 10 Acessibilidades
     * const acessibilidades = await prisma.acessibilidade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const acessibilidadeWithIdOnly = await prisma.acessibilidade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AcessibilidadeFindManyArgs>(args?: SelectSubset<T, AcessibilidadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcessibilidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Acessibilidade.
     * @param {AcessibilidadeCreateArgs} args - Arguments to create a Acessibilidade.
     * @example
     * // Create one Acessibilidade
     * const Acessibilidade = await prisma.acessibilidade.create({
     *   data: {
     *     // ... data to create a Acessibilidade
     *   }
     * })
     * 
     */
    create<T extends AcessibilidadeCreateArgs>(args: SelectSubset<T, AcessibilidadeCreateArgs<ExtArgs>>): Prisma__AcessibilidadeClient<$Result.GetResult<Prisma.$AcessibilidadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Acessibilidades.
     * @param {AcessibilidadeCreateManyArgs} args - Arguments to create many Acessibilidades.
     * @example
     * // Create many Acessibilidades
     * const acessibilidade = await prisma.acessibilidade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AcessibilidadeCreateManyArgs>(args?: SelectSubset<T, AcessibilidadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Acessibilidades and returns the data saved in the database.
     * @param {AcessibilidadeCreateManyAndReturnArgs} args - Arguments to create many Acessibilidades.
     * @example
     * // Create many Acessibilidades
     * const acessibilidade = await prisma.acessibilidade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Acessibilidades and only return the `id`
     * const acessibilidadeWithIdOnly = await prisma.acessibilidade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AcessibilidadeCreateManyAndReturnArgs>(args?: SelectSubset<T, AcessibilidadeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcessibilidadePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Acessibilidade.
     * @param {AcessibilidadeDeleteArgs} args - Arguments to delete one Acessibilidade.
     * @example
     * // Delete one Acessibilidade
     * const Acessibilidade = await prisma.acessibilidade.delete({
     *   where: {
     *     // ... filter to delete one Acessibilidade
     *   }
     * })
     * 
     */
    delete<T extends AcessibilidadeDeleteArgs>(args: SelectSubset<T, AcessibilidadeDeleteArgs<ExtArgs>>): Prisma__AcessibilidadeClient<$Result.GetResult<Prisma.$AcessibilidadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Acessibilidade.
     * @param {AcessibilidadeUpdateArgs} args - Arguments to update one Acessibilidade.
     * @example
     * // Update one Acessibilidade
     * const acessibilidade = await prisma.acessibilidade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AcessibilidadeUpdateArgs>(args: SelectSubset<T, AcessibilidadeUpdateArgs<ExtArgs>>): Prisma__AcessibilidadeClient<$Result.GetResult<Prisma.$AcessibilidadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Acessibilidades.
     * @param {AcessibilidadeDeleteManyArgs} args - Arguments to filter Acessibilidades to delete.
     * @example
     * // Delete a few Acessibilidades
     * const { count } = await prisma.acessibilidade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AcessibilidadeDeleteManyArgs>(args?: SelectSubset<T, AcessibilidadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Acessibilidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessibilidadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Acessibilidades
     * const acessibilidade = await prisma.acessibilidade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AcessibilidadeUpdateManyArgs>(args: SelectSubset<T, AcessibilidadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Acessibilidades and returns the data updated in the database.
     * @param {AcessibilidadeUpdateManyAndReturnArgs} args - Arguments to update many Acessibilidades.
     * @example
     * // Update many Acessibilidades
     * const acessibilidade = await prisma.acessibilidade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Acessibilidades and only return the `id`
     * const acessibilidadeWithIdOnly = await prisma.acessibilidade.updateManyAndReturn({
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
    updateManyAndReturn<T extends AcessibilidadeUpdateManyAndReturnArgs>(args: SelectSubset<T, AcessibilidadeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcessibilidadePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Acessibilidade.
     * @param {AcessibilidadeUpsertArgs} args - Arguments to update or create a Acessibilidade.
     * @example
     * // Update or create a Acessibilidade
     * const acessibilidade = await prisma.acessibilidade.upsert({
     *   create: {
     *     // ... data to create a Acessibilidade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Acessibilidade we want to update
     *   }
     * })
     */
    upsert<T extends AcessibilidadeUpsertArgs>(args: SelectSubset<T, AcessibilidadeUpsertArgs<ExtArgs>>): Prisma__AcessibilidadeClient<$Result.GetResult<Prisma.$AcessibilidadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Acessibilidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessibilidadeCountArgs} args - Arguments to filter Acessibilidades to count.
     * @example
     * // Count the number of Acessibilidades
     * const count = await prisma.acessibilidade.count({
     *   where: {
     *     // ... the filter for the Acessibilidades we want to count
     *   }
     * })
    **/
    count<T extends AcessibilidadeCountArgs>(
      args?: Subset<T, AcessibilidadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AcessibilidadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Acessibilidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessibilidadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AcessibilidadeAggregateArgs>(args: Subset<T, AcessibilidadeAggregateArgs>): Prisma.PrismaPromise<GetAcessibilidadeAggregateType<T>>

    /**
     * Group by Acessibilidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessibilidadeGroupByArgs} args - Group by arguments.
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
      T extends AcessibilidadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AcessibilidadeGroupByArgs['orderBy'] }
        : { orderBy?: AcessibilidadeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AcessibilidadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAcessibilidadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Acessibilidade model
   */
  readonly fields: AcessibilidadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Acessibilidade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AcessibilidadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    barreiras<T extends Acessibilidade$barreirasArgs<ExtArgs> = {}>(args?: Subset<T, Acessibilidade$barreirasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarreiraAcessibilidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Acessibilidade model
   */
  interface AcessibilidadeFieldRefs {
    readonly id: FieldRef<"Acessibilidade", 'Int'>
    readonly descricao: FieldRef<"Acessibilidade", 'String'>
    readonly createdAt: FieldRef<"Acessibilidade", 'DateTime'>
    readonly updatedAt: FieldRef<"Acessibilidade", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Acessibilidade findUnique
   */
  export type AcessibilidadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acessibilidade
     */
    select?: AcessibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acessibilidade
     */
    omit?: AcessibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessibilidadeInclude<ExtArgs> | null
    /**
     * Filter, which Acessibilidade to fetch.
     */
    where: AcessibilidadeWhereUniqueInput
  }

  /**
   * Acessibilidade findUniqueOrThrow
   */
  export type AcessibilidadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acessibilidade
     */
    select?: AcessibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acessibilidade
     */
    omit?: AcessibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessibilidadeInclude<ExtArgs> | null
    /**
     * Filter, which Acessibilidade to fetch.
     */
    where: AcessibilidadeWhereUniqueInput
  }

  /**
   * Acessibilidade findFirst
   */
  export type AcessibilidadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acessibilidade
     */
    select?: AcessibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acessibilidade
     */
    omit?: AcessibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessibilidadeInclude<ExtArgs> | null
    /**
     * Filter, which Acessibilidade to fetch.
     */
    where?: AcessibilidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Acessibilidades to fetch.
     */
    orderBy?: AcessibilidadeOrderByWithRelationInput | AcessibilidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Acessibilidades.
     */
    cursor?: AcessibilidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Acessibilidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Acessibilidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Acessibilidades.
     */
    distinct?: AcessibilidadeScalarFieldEnum | AcessibilidadeScalarFieldEnum[]
  }

  /**
   * Acessibilidade findFirstOrThrow
   */
  export type AcessibilidadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acessibilidade
     */
    select?: AcessibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acessibilidade
     */
    omit?: AcessibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessibilidadeInclude<ExtArgs> | null
    /**
     * Filter, which Acessibilidade to fetch.
     */
    where?: AcessibilidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Acessibilidades to fetch.
     */
    orderBy?: AcessibilidadeOrderByWithRelationInput | AcessibilidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Acessibilidades.
     */
    cursor?: AcessibilidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Acessibilidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Acessibilidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Acessibilidades.
     */
    distinct?: AcessibilidadeScalarFieldEnum | AcessibilidadeScalarFieldEnum[]
  }

  /**
   * Acessibilidade findMany
   */
  export type AcessibilidadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acessibilidade
     */
    select?: AcessibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acessibilidade
     */
    omit?: AcessibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessibilidadeInclude<ExtArgs> | null
    /**
     * Filter, which Acessibilidades to fetch.
     */
    where?: AcessibilidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Acessibilidades to fetch.
     */
    orderBy?: AcessibilidadeOrderByWithRelationInput | AcessibilidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Acessibilidades.
     */
    cursor?: AcessibilidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Acessibilidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Acessibilidades.
     */
    skip?: number
    distinct?: AcessibilidadeScalarFieldEnum | AcessibilidadeScalarFieldEnum[]
  }

  /**
   * Acessibilidade create
   */
  export type AcessibilidadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acessibilidade
     */
    select?: AcessibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acessibilidade
     */
    omit?: AcessibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessibilidadeInclude<ExtArgs> | null
    /**
     * The data needed to create a Acessibilidade.
     */
    data: XOR<AcessibilidadeCreateInput, AcessibilidadeUncheckedCreateInput>
  }

  /**
   * Acessibilidade createMany
   */
  export type AcessibilidadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Acessibilidades.
     */
    data: AcessibilidadeCreateManyInput | AcessibilidadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Acessibilidade createManyAndReturn
   */
  export type AcessibilidadeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acessibilidade
     */
    select?: AcessibilidadeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Acessibilidade
     */
    omit?: AcessibilidadeOmit<ExtArgs> | null
    /**
     * The data used to create many Acessibilidades.
     */
    data: AcessibilidadeCreateManyInput | AcessibilidadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Acessibilidade update
   */
  export type AcessibilidadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acessibilidade
     */
    select?: AcessibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acessibilidade
     */
    omit?: AcessibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessibilidadeInclude<ExtArgs> | null
    /**
     * The data needed to update a Acessibilidade.
     */
    data: XOR<AcessibilidadeUpdateInput, AcessibilidadeUncheckedUpdateInput>
    /**
     * Choose, which Acessibilidade to update.
     */
    where: AcessibilidadeWhereUniqueInput
  }

  /**
   * Acessibilidade updateMany
   */
  export type AcessibilidadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Acessibilidades.
     */
    data: XOR<AcessibilidadeUpdateManyMutationInput, AcessibilidadeUncheckedUpdateManyInput>
    /**
     * Filter which Acessibilidades to update
     */
    where?: AcessibilidadeWhereInput
    /**
     * Limit how many Acessibilidades to update.
     */
    limit?: number
  }

  /**
   * Acessibilidade updateManyAndReturn
   */
  export type AcessibilidadeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acessibilidade
     */
    select?: AcessibilidadeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Acessibilidade
     */
    omit?: AcessibilidadeOmit<ExtArgs> | null
    /**
     * The data used to update Acessibilidades.
     */
    data: XOR<AcessibilidadeUpdateManyMutationInput, AcessibilidadeUncheckedUpdateManyInput>
    /**
     * Filter which Acessibilidades to update
     */
    where?: AcessibilidadeWhereInput
    /**
     * Limit how many Acessibilidades to update.
     */
    limit?: number
  }

  /**
   * Acessibilidade upsert
   */
  export type AcessibilidadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acessibilidade
     */
    select?: AcessibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acessibilidade
     */
    omit?: AcessibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessibilidadeInclude<ExtArgs> | null
    /**
     * The filter to search for the Acessibilidade to update in case it exists.
     */
    where: AcessibilidadeWhereUniqueInput
    /**
     * In case the Acessibilidade found by the `where` argument doesn't exist, create a new Acessibilidade with this data.
     */
    create: XOR<AcessibilidadeCreateInput, AcessibilidadeUncheckedCreateInput>
    /**
     * In case the Acessibilidade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AcessibilidadeUpdateInput, AcessibilidadeUncheckedUpdateInput>
  }

  /**
   * Acessibilidade delete
   */
  export type AcessibilidadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acessibilidade
     */
    select?: AcessibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acessibilidade
     */
    omit?: AcessibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessibilidadeInclude<ExtArgs> | null
    /**
     * Filter which Acessibilidade to delete.
     */
    where: AcessibilidadeWhereUniqueInput
  }

  /**
   * Acessibilidade deleteMany
   */
  export type AcessibilidadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Acessibilidades to delete
     */
    where?: AcessibilidadeWhereInput
    /**
     * Limit how many Acessibilidades to delete.
     */
    limit?: number
  }

  /**
   * Acessibilidade.barreiras
   */
  export type Acessibilidade$barreirasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarreiraAcessibilidade
     */
    select?: BarreiraAcessibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarreiraAcessibilidade
     */
    omit?: BarreiraAcessibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarreiraAcessibilidadeInclude<ExtArgs> | null
    where?: BarreiraAcessibilidadeWhereInput
    orderBy?: BarreiraAcessibilidadeOrderByWithRelationInput | BarreiraAcessibilidadeOrderByWithRelationInput[]
    cursor?: BarreiraAcessibilidadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BarreiraAcessibilidadeScalarFieldEnum | BarreiraAcessibilidadeScalarFieldEnum[]
  }

  /**
   * Acessibilidade without action
   */
  export type AcessibilidadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acessibilidade
     */
    select?: AcessibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acessibilidade
     */
    omit?: AcessibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessibilidadeInclude<ExtArgs> | null
  }


  /**
   * Model SubtipoBarreira
   */

  export type AggregateSubtipoBarreira = {
    _count: SubtipoBarreiraCountAggregateOutputType | null
    _avg: SubtipoBarreiraAvgAggregateOutputType | null
    _sum: SubtipoBarreiraSumAggregateOutputType | null
    _min: SubtipoBarreiraMinAggregateOutputType | null
    _max: SubtipoBarreiraMaxAggregateOutputType | null
  }

  export type SubtipoBarreiraAvgAggregateOutputType = {
    subtipoId: number | null
    barreiraId: number | null
  }

  export type SubtipoBarreiraSumAggregateOutputType = {
    subtipoId: number | null
    barreiraId: number | null
  }

  export type SubtipoBarreiraMinAggregateOutputType = {
    subtipoId: number | null
    barreiraId: number | null
  }

  export type SubtipoBarreiraMaxAggregateOutputType = {
    subtipoId: number | null
    barreiraId: number | null
  }

  export type SubtipoBarreiraCountAggregateOutputType = {
    subtipoId: number
    barreiraId: number
    _all: number
  }


  export type SubtipoBarreiraAvgAggregateInputType = {
    subtipoId?: true
    barreiraId?: true
  }

  export type SubtipoBarreiraSumAggregateInputType = {
    subtipoId?: true
    barreiraId?: true
  }

  export type SubtipoBarreiraMinAggregateInputType = {
    subtipoId?: true
    barreiraId?: true
  }

  export type SubtipoBarreiraMaxAggregateInputType = {
    subtipoId?: true
    barreiraId?: true
  }

  export type SubtipoBarreiraCountAggregateInputType = {
    subtipoId?: true
    barreiraId?: true
    _all?: true
  }

  export type SubtipoBarreiraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubtipoBarreira to aggregate.
     */
    where?: SubtipoBarreiraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubtipoBarreiras to fetch.
     */
    orderBy?: SubtipoBarreiraOrderByWithRelationInput | SubtipoBarreiraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubtipoBarreiraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubtipoBarreiras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubtipoBarreiras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubtipoBarreiras
    **/
    _count?: true | SubtipoBarreiraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubtipoBarreiraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubtipoBarreiraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubtipoBarreiraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubtipoBarreiraMaxAggregateInputType
  }

  export type GetSubtipoBarreiraAggregateType<T extends SubtipoBarreiraAggregateArgs> = {
        [P in keyof T & keyof AggregateSubtipoBarreira]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubtipoBarreira[P]>
      : GetScalarType<T[P], AggregateSubtipoBarreira[P]>
  }




  export type SubtipoBarreiraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubtipoBarreiraWhereInput
    orderBy?: SubtipoBarreiraOrderByWithAggregationInput | SubtipoBarreiraOrderByWithAggregationInput[]
    by: SubtipoBarreiraScalarFieldEnum[] | SubtipoBarreiraScalarFieldEnum
    having?: SubtipoBarreiraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubtipoBarreiraCountAggregateInputType | true
    _avg?: SubtipoBarreiraAvgAggregateInputType
    _sum?: SubtipoBarreiraSumAggregateInputType
    _min?: SubtipoBarreiraMinAggregateInputType
    _max?: SubtipoBarreiraMaxAggregateInputType
  }

  export type SubtipoBarreiraGroupByOutputType = {
    subtipoId: number
    barreiraId: number
    _count: SubtipoBarreiraCountAggregateOutputType | null
    _avg: SubtipoBarreiraAvgAggregateOutputType | null
    _sum: SubtipoBarreiraSumAggregateOutputType | null
    _min: SubtipoBarreiraMinAggregateOutputType | null
    _max: SubtipoBarreiraMaxAggregateOutputType | null
  }

  type GetSubtipoBarreiraGroupByPayload<T extends SubtipoBarreiraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubtipoBarreiraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubtipoBarreiraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubtipoBarreiraGroupByOutputType[P]>
            : GetScalarType<T[P], SubtipoBarreiraGroupByOutputType[P]>
        }
      >
    >


  export type SubtipoBarreiraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    subtipoId?: boolean
    barreiraId?: boolean
    subtipo?: boolean | SubtipoDeficienciaDefaultArgs<ExtArgs>
    barreira?: boolean | BarreiraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subtipoBarreira"]>

  export type SubtipoBarreiraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    subtipoId?: boolean
    barreiraId?: boolean
    subtipo?: boolean | SubtipoDeficienciaDefaultArgs<ExtArgs>
    barreira?: boolean | BarreiraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subtipoBarreira"]>

  export type SubtipoBarreiraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    subtipoId?: boolean
    barreiraId?: boolean
    subtipo?: boolean | SubtipoDeficienciaDefaultArgs<ExtArgs>
    barreira?: boolean | BarreiraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subtipoBarreira"]>

  export type SubtipoBarreiraSelectScalar = {
    subtipoId?: boolean
    barreiraId?: boolean
  }

  export type SubtipoBarreiraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"subtipoId" | "barreiraId", ExtArgs["result"]["subtipoBarreira"]>
  export type SubtipoBarreiraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subtipo?: boolean | SubtipoDeficienciaDefaultArgs<ExtArgs>
    barreira?: boolean | BarreiraDefaultArgs<ExtArgs>
  }
  export type SubtipoBarreiraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subtipo?: boolean | SubtipoDeficienciaDefaultArgs<ExtArgs>
    barreira?: boolean | BarreiraDefaultArgs<ExtArgs>
  }
  export type SubtipoBarreiraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subtipo?: boolean | SubtipoDeficienciaDefaultArgs<ExtArgs>
    barreira?: boolean | BarreiraDefaultArgs<ExtArgs>
  }

  export type $SubtipoBarreiraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubtipoBarreira"
    objects: {
      subtipo: Prisma.$SubtipoDeficienciaPayload<ExtArgs>
      barreira: Prisma.$BarreiraPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      subtipoId: number
      barreiraId: number
    }, ExtArgs["result"]["subtipoBarreira"]>
    composites: {}
  }

  type SubtipoBarreiraGetPayload<S extends boolean | null | undefined | SubtipoBarreiraDefaultArgs> = $Result.GetResult<Prisma.$SubtipoBarreiraPayload, S>

  type SubtipoBarreiraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubtipoBarreiraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubtipoBarreiraCountAggregateInputType | true
    }

  export interface SubtipoBarreiraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubtipoBarreira'], meta: { name: 'SubtipoBarreira' } }
    /**
     * Find zero or one SubtipoBarreira that matches the filter.
     * @param {SubtipoBarreiraFindUniqueArgs} args - Arguments to find a SubtipoBarreira
     * @example
     * // Get one SubtipoBarreira
     * const subtipoBarreira = await prisma.subtipoBarreira.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubtipoBarreiraFindUniqueArgs>(args: SelectSubset<T, SubtipoBarreiraFindUniqueArgs<ExtArgs>>): Prisma__SubtipoBarreiraClient<$Result.GetResult<Prisma.$SubtipoBarreiraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubtipoBarreira that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubtipoBarreiraFindUniqueOrThrowArgs} args - Arguments to find a SubtipoBarreira
     * @example
     * // Get one SubtipoBarreira
     * const subtipoBarreira = await prisma.subtipoBarreira.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubtipoBarreiraFindUniqueOrThrowArgs>(args: SelectSubset<T, SubtipoBarreiraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubtipoBarreiraClient<$Result.GetResult<Prisma.$SubtipoBarreiraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubtipoBarreira that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtipoBarreiraFindFirstArgs} args - Arguments to find a SubtipoBarreira
     * @example
     * // Get one SubtipoBarreira
     * const subtipoBarreira = await prisma.subtipoBarreira.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubtipoBarreiraFindFirstArgs>(args?: SelectSubset<T, SubtipoBarreiraFindFirstArgs<ExtArgs>>): Prisma__SubtipoBarreiraClient<$Result.GetResult<Prisma.$SubtipoBarreiraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubtipoBarreira that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtipoBarreiraFindFirstOrThrowArgs} args - Arguments to find a SubtipoBarreira
     * @example
     * // Get one SubtipoBarreira
     * const subtipoBarreira = await prisma.subtipoBarreira.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubtipoBarreiraFindFirstOrThrowArgs>(args?: SelectSubset<T, SubtipoBarreiraFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubtipoBarreiraClient<$Result.GetResult<Prisma.$SubtipoBarreiraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubtipoBarreiras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtipoBarreiraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubtipoBarreiras
     * const subtipoBarreiras = await prisma.subtipoBarreira.findMany()
     * 
     * // Get first 10 SubtipoBarreiras
     * const subtipoBarreiras = await prisma.subtipoBarreira.findMany({ take: 10 })
     * 
     * // Only select the `subtipoId`
     * const subtipoBarreiraWithSubtipoIdOnly = await prisma.subtipoBarreira.findMany({ select: { subtipoId: true } })
     * 
     */
    findMany<T extends SubtipoBarreiraFindManyArgs>(args?: SelectSubset<T, SubtipoBarreiraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubtipoBarreiraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubtipoBarreira.
     * @param {SubtipoBarreiraCreateArgs} args - Arguments to create a SubtipoBarreira.
     * @example
     * // Create one SubtipoBarreira
     * const SubtipoBarreira = await prisma.subtipoBarreira.create({
     *   data: {
     *     // ... data to create a SubtipoBarreira
     *   }
     * })
     * 
     */
    create<T extends SubtipoBarreiraCreateArgs>(args: SelectSubset<T, SubtipoBarreiraCreateArgs<ExtArgs>>): Prisma__SubtipoBarreiraClient<$Result.GetResult<Prisma.$SubtipoBarreiraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubtipoBarreiras.
     * @param {SubtipoBarreiraCreateManyArgs} args - Arguments to create many SubtipoBarreiras.
     * @example
     * // Create many SubtipoBarreiras
     * const subtipoBarreira = await prisma.subtipoBarreira.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubtipoBarreiraCreateManyArgs>(args?: SelectSubset<T, SubtipoBarreiraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubtipoBarreiras and returns the data saved in the database.
     * @param {SubtipoBarreiraCreateManyAndReturnArgs} args - Arguments to create many SubtipoBarreiras.
     * @example
     * // Create many SubtipoBarreiras
     * const subtipoBarreira = await prisma.subtipoBarreira.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubtipoBarreiras and only return the `subtipoId`
     * const subtipoBarreiraWithSubtipoIdOnly = await prisma.subtipoBarreira.createManyAndReturn({
     *   select: { subtipoId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubtipoBarreiraCreateManyAndReturnArgs>(args?: SelectSubset<T, SubtipoBarreiraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubtipoBarreiraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubtipoBarreira.
     * @param {SubtipoBarreiraDeleteArgs} args - Arguments to delete one SubtipoBarreira.
     * @example
     * // Delete one SubtipoBarreira
     * const SubtipoBarreira = await prisma.subtipoBarreira.delete({
     *   where: {
     *     // ... filter to delete one SubtipoBarreira
     *   }
     * })
     * 
     */
    delete<T extends SubtipoBarreiraDeleteArgs>(args: SelectSubset<T, SubtipoBarreiraDeleteArgs<ExtArgs>>): Prisma__SubtipoBarreiraClient<$Result.GetResult<Prisma.$SubtipoBarreiraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubtipoBarreira.
     * @param {SubtipoBarreiraUpdateArgs} args - Arguments to update one SubtipoBarreira.
     * @example
     * // Update one SubtipoBarreira
     * const subtipoBarreira = await prisma.subtipoBarreira.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubtipoBarreiraUpdateArgs>(args: SelectSubset<T, SubtipoBarreiraUpdateArgs<ExtArgs>>): Prisma__SubtipoBarreiraClient<$Result.GetResult<Prisma.$SubtipoBarreiraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubtipoBarreiras.
     * @param {SubtipoBarreiraDeleteManyArgs} args - Arguments to filter SubtipoBarreiras to delete.
     * @example
     * // Delete a few SubtipoBarreiras
     * const { count } = await prisma.subtipoBarreira.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubtipoBarreiraDeleteManyArgs>(args?: SelectSubset<T, SubtipoBarreiraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubtipoBarreiras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtipoBarreiraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubtipoBarreiras
     * const subtipoBarreira = await prisma.subtipoBarreira.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubtipoBarreiraUpdateManyArgs>(args: SelectSubset<T, SubtipoBarreiraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubtipoBarreiras and returns the data updated in the database.
     * @param {SubtipoBarreiraUpdateManyAndReturnArgs} args - Arguments to update many SubtipoBarreiras.
     * @example
     * // Update many SubtipoBarreiras
     * const subtipoBarreira = await prisma.subtipoBarreira.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubtipoBarreiras and only return the `subtipoId`
     * const subtipoBarreiraWithSubtipoIdOnly = await prisma.subtipoBarreira.updateManyAndReturn({
     *   select: { subtipoId: true },
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
    updateManyAndReturn<T extends SubtipoBarreiraUpdateManyAndReturnArgs>(args: SelectSubset<T, SubtipoBarreiraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubtipoBarreiraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubtipoBarreira.
     * @param {SubtipoBarreiraUpsertArgs} args - Arguments to update or create a SubtipoBarreira.
     * @example
     * // Update or create a SubtipoBarreira
     * const subtipoBarreira = await prisma.subtipoBarreira.upsert({
     *   create: {
     *     // ... data to create a SubtipoBarreira
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubtipoBarreira we want to update
     *   }
     * })
     */
    upsert<T extends SubtipoBarreiraUpsertArgs>(args: SelectSubset<T, SubtipoBarreiraUpsertArgs<ExtArgs>>): Prisma__SubtipoBarreiraClient<$Result.GetResult<Prisma.$SubtipoBarreiraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubtipoBarreiras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtipoBarreiraCountArgs} args - Arguments to filter SubtipoBarreiras to count.
     * @example
     * // Count the number of SubtipoBarreiras
     * const count = await prisma.subtipoBarreira.count({
     *   where: {
     *     // ... the filter for the SubtipoBarreiras we want to count
     *   }
     * })
    **/
    count<T extends SubtipoBarreiraCountArgs>(
      args?: Subset<T, SubtipoBarreiraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubtipoBarreiraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubtipoBarreira.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtipoBarreiraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubtipoBarreiraAggregateArgs>(args: Subset<T, SubtipoBarreiraAggregateArgs>): Prisma.PrismaPromise<GetSubtipoBarreiraAggregateType<T>>

    /**
     * Group by SubtipoBarreira.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtipoBarreiraGroupByArgs} args - Group by arguments.
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
      T extends SubtipoBarreiraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubtipoBarreiraGroupByArgs['orderBy'] }
        : { orderBy?: SubtipoBarreiraGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubtipoBarreiraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubtipoBarreiraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubtipoBarreira model
   */
  readonly fields: SubtipoBarreiraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubtipoBarreira.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubtipoBarreiraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subtipo<T extends SubtipoDeficienciaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubtipoDeficienciaDefaultArgs<ExtArgs>>): Prisma__SubtipoDeficienciaClient<$Result.GetResult<Prisma.$SubtipoDeficienciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    barreira<T extends BarreiraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BarreiraDefaultArgs<ExtArgs>>): Prisma__BarreiraClient<$Result.GetResult<Prisma.$BarreiraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SubtipoBarreira model
   */
  interface SubtipoBarreiraFieldRefs {
    readonly subtipoId: FieldRef<"SubtipoBarreira", 'Int'>
    readonly barreiraId: FieldRef<"SubtipoBarreira", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SubtipoBarreira findUnique
   */
  export type SubtipoBarreiraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubtipoBarreira
     */
    select?: SubtipoBarreiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubtipoBarreira
     */
    omit?: SubtipoBarreiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtipoBarreiraInclude<ExtArgs> | null
    /**
     * Filter, which SubtipoBarreira to fetch.
     */
    where: SubtipoBarreiraWhereUniqueInput
  }

  /**
   * SubtipoBarreira findUniqueOrThrow
   */
  export type SubtipoBarreiraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubtipoBarreira
     */
    select?: SubtipoBarreiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubtipoBarreira
     */
    omit?: SubtipoBarreiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtipoBarreiraInclude<ExtArgs> | null
    /**
     * Filter, which SubtipoBarreira to fetch.
     */
    where: SubtipoBarreiraWhereUniqueInput
  }

  /**
   * SubtipoBarreira findFirst
   */
  export type SubtipoBarreiraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubtipoBarreira
     */
    select?: SubtipoBarreiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubtipoBarreira
     */
    omit?: SubtipoBarreiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtipoBarreiraInclude<ExtArgs> | null
    /**
     * Filter, which SubtipoBarreira to fetch.
     */
    where?: SubtipoBarreiraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubtipoBarreiras to fetch.
     */
    orderBy?: SubtipoBarreiraOrderByWithRelationInput | SubtipoBarreiraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubtipoBarreiras.
     */
    cursor?: SubtipoBarreiraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubtipoBarreiras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubtipoBarreiras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubtipoBarreiras.
     */
    distinct?: SubtipoBarreiraScalarFieldEnum | SubtipoBarreiraScalarFieldEnum[]
  }

  /**
   * SubtipoBarreira findFirstOrThrow
   */
  export type SubtipoBarreiraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubtipoBarreira
     */
    select?: SubtipoBarreiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubtipoBarreira
     */
    omit?: SubtipoBarreiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtipoBarreiraInclude<ExtArgs> | null
    /**
     * Filter, which SubtipoBarreira to fetch.
     */
    where?: SubtipoBarreiraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubtipoBarreiras to fetch.
     */
    orderBy?: SubtipoBarreiraOrderByWithRelationInput | SubtipoBarreiraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubtipoBarreiras.
     */
    cursor?: SubtipoBarreiraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubtipoBarreiras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubtipoBarreiras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubtipoBarreiras.
     */
    distinct?: SubtipoBarreiraScalarFieldEnum | SubtipoBarreiraScalarFieldEnum[]
  }

  /**
   * SubtipoBarreira findMany
   */
  export type SubtipoBarreiraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubtipoBarreira
     */
    select?: SubtipoBarreiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubtipoBarreira
     */
    omit?: SubtipoBarreiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtipoBarreiraInclude<ExtArgs> | null
    /**
     * Filter, which SubtipoBarreiras to fetch.
     */
    where?: SubtipoBarreiraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubtipoBarreiras to fetch.
     */
    orderBy?: SubtipoBarreiraOrderByWithRelationInput | SubtipoBarreiraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubtipoBarreiras.
     */
    cursor?: SubtipoBarreiraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubtipoBarreiras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubtipoBarreiras.
     */
    skip?: number
    distinct?: SubtipoBarreiraScalarFieldEnum | SubtipoBarreiraScalarFieldEnum[]
  }

  /**
   * SubtipoBarreira create
   */
  export type SubtipoBarreiraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubtipoBarreira
     */
    select?: SubtipoBarreiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubtipoBarreira
     */
    omit?: SubtipoBarreiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtipoBarreiraInclude<ExtArgs> | null
    /**
     * The data needed to create a SubtipoBarreira.
     */
    data: XOR<SubtipoBarreiraCreateInput, SubtipoBarreiraUncheckedCreateInput>
  }

  /**
   * SubtipoBarreira createMany
   */
  export type SubtipoBarreiraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubtipoBarreiras.
     */
    data: SubtipoBarreiraCreateManyInput | SubtipoBarreiraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubtipoBarreira createManyAndReturn
   */
  export type SubtipoBarreiraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubtipoBarreira
     */
    select?: SubtipoBarreiraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubtipoBarreira
     */
    omit?: SubtipoBarreiraOmit<ExtArgs> | null
    /**
     * The data used to create many SubtipoBarreiras.
     */
    data: SubtipoBarreiraCreateManyInput | SubtipoBarreiraCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtipoBarreiraIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubtipoBarreira update
   */
  export type SubtipoBarreiraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubtipoBarreira
     */
    select?: SubtipoBarreiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubtipoBarreira
     */
    omit?: SubtipoBarreiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtipoBarreiraInclude<ExtArgs> | null
    /**
     * The data needed to update a SubtipoBarreira.
     */
    data: XOR<SubtipoBarreiraUpdateInput, SubtipoBarreiraUncheckedUpdateInput>
    /**
     * Choose, which SubtipoBarreira to update.
     */
    where: SubtipoBarreiraWhereUniqueInput
  }

  /**
   * SubtipoBarreira updateMany
   */
  export type SubtipoBarreiraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubtipoBarreiras.
     */
    data: XOR<SubtipoBarreiraUpdateManyMutationInput, SubtipoBarreiraUncheckedUpdateManyInput>
    /**
     * Filter which SubtipoBarreiras to update
     */
    where?: SubtipoBarreiraWhereInput
    /**
     * Limit how many SubtipoBarreiras to update.
     */
    limit?: number
  }

  /**
   * SubtipoBarreira updateManyAndReturn
   */
  export type SubtipoBarreiraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubtipoBarreira
     */
    select?: SubtipoBarreiraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubtipoBarreira
     */
    omit?: SubtipoBarreiraOmit<ExtArgs> | null
    /**
     * The data used to update SubtipoBarreiras.
     */
    data: XOR<SubtipoBarreiraUpdateManyMutationInput, SubtipoBarreiraUncheckedUpdateManyInput>
    /**
     * Filter which SubtipoBarreiras to update
     */
    where?: SubtipoBarreiraWhereInput
    /**
     * Limit how many SubtipoBarreiras to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtipoBarreiraIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubtipoBarreira upsert
   */
  export type SubtipoBarreiraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubtipoBarreira
     */
    select?: SubtipoBarreiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubtipoBarreira
     */
    omit?: SubtipoBarreiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtipoBarreiraInclude<ExtArgs> | null
    /**
     * The filter to search for the SubtipoBarreira to update in case it exists.
     */
    where: SubtipoBarreiraWhereUniqueInput
    /**
     * In case the SubtipoBarreira found by the `where` argument doesn't exist, create a new SubtipoBarreira with this data.
     */
    create: XOR<SubtipoBarreiraCreateInput, SubtipoBarreiraUncheckedCreateInput>
    /**
     * In case the SubtipoBarreira was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubtipoBarreiraUpdateInput, SubtipoBarreiraUncheckedUpdateInput>
  }

  /**
   * SubtipoBarreira delete
   */
  export type SubtipoBarreiraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubtipoBarreira
     */
    select?: SubtipoBarreiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubtipoBarreira
     */
    omit?: SubtipoBarreiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtipoBarreiraInclude<ExtArgs> | null
    /**
     * Filter which SubtipoBarreira to delete.
     */
    where: SubtipoBarreiraWhereUniqueInput
  }

  /**
   * SubtipoBarreira deleteMany
   */
  export type SubtipoBarreiraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubtipoBarreiras to delete
     */
    where?: SubtipoBarreiraWhereInput
    /**
     * Limit how many SubtipoBarreiras to delete.
     */
    limit?: number
  }

  /**
   * SubtipoBarreira without action
   */
  export type SubtipoBarreiraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubtipoBarreira
     */
    select?: SubtipoBarreiraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubtipoBarreira
     */
    omit?: SubtipoBarreiraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtipoBarreiraInclude<ExtArgs> | null
  }


  /**
   * Model BarreiraAcessibilidade
   */

  export type AggregateBarreiraAcessibilidade = {
    _count: BarreiraAcessibilidadeCountAggregateOutputType | null
    _avg: BarreiraAcessibilidadeAvgAggregateOutputType | null
    _sum: BarreiraAcessibilidadeSumAggregateOutputType | null
    _min: BarreiraAcessibilidadeMinAggregateOutputType | null
    _max: BarreiraAcessibilidadeMaxAggregateOutputType | null
  }

  export type BarreiraAcessibilidadeAvgAggregateOutputType = {
    barreiraId: number | null
    acessibilidadeId: number | null
  }

  export type BarreiraAcessibilidadeSumAggregateOutputType = {
    barreiraId: number | null
    acessibilidadeId: number | null
  }

  export type BarreiraAcessibilidadeMinAggregateOutputType = {
    barreiraId: number | null
    acessibilidadeId: number | null
  }

  export type BarreiraAcessibilidadeMaxAggregateOutputType = {
    barreiraId: number | null
    acessibilidadeId: number | null
  }

  export type BarreiraAcessibilidadeCountAggregateOutputType = {
    barreiraId: number
    acessibilidadeId: number
    _all: number
  }


  export type BarreiraAcessibilidadeAvgAggregateInputType = {
    barreiraId?: true
    acessibilidadeId?: true
  }

  export type BarreiraAcessibilidadeSumAggregateInputType = {
    barreiraId?: true
    acessibilidadeId?: true
  }

  export type BarreiraAcessibilidadeMinAggregateInputType = {
    barreiraId?: true
    acessibilidadeId?: true
  }

  export type BarreiraAcessibilidadeMaxAggregateInputType = {
    barreiraId?: true
    acessibilidadeId?: true
  }

  export type BarreiraAcessibilidadeCountAggregateInputType = {
    barreiraId?: true
    acessibilidadeId?: true
    _all?: true
  }

  export type BarreiraAcessibilidadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BarreiraAcessibilidade to aggregate.
     */
    where?: BarreiraAcessibilidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarreiraAcessibilidades to fetch.
     */
    orderBy?: BarreiraAcessibilidadeOrderByWithRelationInput | BarreiraAcessibilidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BarreiraAcessibilidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarreiraAcessibilidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarreiraAcessibilidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BarreiraAcessibilidades
    **/
    _count?: true | BarreiraAcessibilidadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BarreiraAcessibilidadeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BarreiraAcessibilidadeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BarreiraAcessibilidadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BarreiraAcessibilidadeMaxAggregateInputType
  }

  export type GetBarreiraAcessibilidadeAggregateType<T extends BarreiraAcessibilidadeAggregateArgs> = {
        [P in keyof T & keyof AggregateBarreiraAcessibilidade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBarreiraAcessibilidade[P]>
      : GetScalarType<T[P], AggregateBarreiraAcessibilidade[P]>
  }




  export type BarreiraAcessibilidadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarreiraAcessibilidadeWhereInput
    orderBy?: BarreiraAcessibilidadeOrderByWithAggregationInput | BarreiraAcessibilidadeOrderByWithAggregationInput[]
    by: BarreiraAcessibilidadeScalarFieldEnum[] | BarreiraAcessibilidadeScalarFieldEnum
    having?: BarreiraAcessibilidadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BarreiraAcessibilidadeCountAggregateInputType | true
    _avg?: BarreiraAcessibilidadeAvgAggregateInputType
    _sum?: BarreiraAcessibilidadeSumAggregateInputType
    _min?: BarreiraAcessibilidadeMinAggregateInputType
    _max?: BarreiraAcessibilidadeMaxAggregateInputType
  }

  export type BarreiraAcessibilidadeGroupByOutputType = {
    barreiraId: number
    acessibilidadeId: number
    _count: BarreiraAcessibilidadeCountAggregateOutputType | null
    _avg: BarreiraAcessibilidadeAvgAggregateOutputType | null
    _sum: BarreiraAcessibilidadeSumAggregateOutputType | null
    _min: BarreiraAcessibilidadeMinAggregateOutputType | null
    _max: BarreiraAcessibilidadeMaxAggregateOutputType | null
  }

  type GetBarreiraAcessibilidadeGroupByPayload<T extends BarreiraAcessibilidadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BarreiraAcessibilidadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BarreiraAcessibilidadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BarreiraAcessibilidadeGroupByOutputType[P]>
            : GetScalarType<T[P], BarreiraAcessibilidadeGroupByOutputType[P]>
        }
      >
    >


  export type BarreiraAcessibilidadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    barreiraId?: boolean
    acessibilidadeId?: boolean
    barreira?: boolean | BarreiraDefaultArgs<ExtArgs>
    acessibilidade?: boolean | AcessibilidadeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barreiraAcessibilidade"]>

  export type BarreiraAcessibilidadeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    barreiraId?: boolean
    acessibilidadeId?: boolean
    barreira?: boolean | BarreiraDefaultArgs<ExtArgs>
    acessibilidade?: boolean | AcessibilidadeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barreiraAcessibilidade"]>

  export type BarreiraAcessibilidadeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    barreiraId?: boolean
    acessibilidadeId?: boolean
    barreira?: boolean | BarreiraDefaultArgs<ExtArgs>
    acessibilidade?: boolean | AcessibilidadeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barreiraAcessibilidade"]>

  export type BarreiraAcessibilidadeSelectScalar = {
    barreiraId?: boolean
    acessibilidadeId?: boolean
  }

  export type BarreiraAcessibilidadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"barreiraId" | "acessibilidadeId", ExtArgs["result"]["barreiraAcessibilidade"]>
  export type BarreiraAcessibilidadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barreira?: boolean | BarreiraDefaultArgs<ExtArgs>
    acessibilidade?: boolean | AcessibilidadeDefaultArgs<ExtArgs>
  }
  export type BarreiraAcessibilidadeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barreira?: boolean | BarreiraDefaultArgs<ExtArgs>
    acessibilidade?: boolean | AcessibilidadeDefaultArgs<ExtArgs>
  }
  export type BarreiraAcessibilidadeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barreira?: boolean | BarreiraDefaultArgs<ExtArgs>
    acessibilidade?: boolean | AcessibilidadeDefaultArgs<ExtArgs>
  }

  export type $BarreiraAcessibilidadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BarreiraAcessibilidade"
    objects: {
      barreira: Prisma.$BarreiraPayload<ExtArgs>
      acessibilidade: Prisma.$AcessibilidadePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      barreiraId: number
      acessibilidadeId: number
    }, ExtArgs["result"]["barreiraAcessibilidade"]>
    composites: {}
  }

  type BarreiraAcessibilidadeGetPayload<S extends boolean | null | undefined | BarreiraAcessibilidadeDefaultArgs> = $Result.GetResult<Prisma.$BarreiraAcessibilidadePayload, S>

  type BarreiraAcessibilidadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BarreiraAcessibilidadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BarreiraAcessibilidadeCountAggregateInputType | true
    }

  export interface BarreiraAcessibilidadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BarreiraAcessibilidade'], meta: { name: 'BarreiraAcessibilidade' } }
    /**
     * Find zero or one BarreiraAcessibilidade that matches the filter.
     * @param {BarreiraAcessibilidadeFindUniqueArgs} args - Arguments to find a BarreiraAcessibilidade
     * @example
     * // Get one BarreiraAcessibilidade
     * const barreiraAcessibilidade = await prisma.barreiraAcessibilidade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BarreiraAcessibilidadeFindUniqueArgs>(args: SelectSubset<T, BarreiraAcessibilidadeFindUniqueArgs<ExtArgs>>): Prisma__BarreiraAcessibilidadeClient<$Result.GetResult<Prisma.$BarreiraAcessibilidadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BarreiraAcessibilidade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BarreiraAcessibilidadeFindUniqueOrThrowArgs} args - Arguments to find a BarreiraAcessibilidade
     * @example
     * // Get one BarreiraAcessibilidade
     * const barreiraAcessibilidade = await prisma.barreiraAcessibilidade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BarreiraAcessibilidadeFindUniqueOrThrowArgs>(args: SelectSubset<T, BarreiraAcessibilidadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BarreiraAcessibilidadeClient<$Result.GetResult<Prisma.$BarreiraAcessibilidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BarreiraAcessibilidade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarreiraAcessibilidadeFindFirstArgs} args - Arguments to find a BarreiraAcessibilidade
     * @example
     * // Get one BarreiraAcessibilidade
     * const barreiraAcessibilidade = await prisma.barreiraAcessibilidade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BarreiraAcessibilidadeFindFirstArgs>(args?: SelectSubset<T, BarreiraAcessibilidadeFindFirstArgs<ExtArgs>>): Prisma__BarreiraAcessibilidadeClient<$Result.GetResult<Prisma.$BarreiraAcessibilidadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BarreiraAcessibilidade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarreiraAcessibilidadeFindFirstOrThrowArgs} args - Arguments to find a BarreiraAcessibilidade
     * @example
     * // Get one BarreiraAcessibilidade
     * const barreiraAcessibilidade = await prisma.barreiraAcessibilidade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BarreiraAcessibilidadeFindFirstOrThrowArgs>(args?: SelectSubset<T, BarreiraAcessibilidadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__BarreiraAcessibilidadeClient<$Result.GetResult<Prisma.$BarreiraAcessibilidadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BarreiraAcessibilidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarreiraAcessibilidadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BarreiraAcessibilidades
     * const barreiraAcessibilidades = await prisma.barreiraAcessibilidade.findMany()
     * 
     * // Get first 10 BarreiraAcessibilidades
     * const barreiraAcessibilidades = await prisma.barreiraAcessibilidade.findMany({ take: 10 })
     * 
     * // Only select the `barreiraId`
     * const barreiraAcessibilidadeWithBarreiraIdOnly = await prisma.barreiraAcessibilidade.findMany({ select: { barreiraId: true } })
     * 
     */
    findMany<T extends BarreiraAcessibilidadeFindManyArgs>(args?: SelectSubset<T, BarreiraAcessibilidadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarreiraAcessibilidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BarreiraAcessibilidade.
     * @param {BarreiraAcessibilidadeCreateArgs} args - Arguments to create a BarreiraAcessibilidade.
     * @example
     * // Create one BarreiraAcessibilidade
     * const BarreiraAcessibilidade = await prisma.barreiraAcessibilidade.create({
     *   data: {
     *     // ... data to create a BarreiraAcessibilidade
     *   }
     * })
     * 
     */
    create<T extends BarreiraAcessibilidadeCreateArgs>(args: SelectSubset<T, BarreiraAcessibilidadeCreateArgs<ExtArgs>>): Prisma__BarreiraAcessibilidadeClient<$Result.GetResult<Prisma.$BarreiraAcessibilidadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BarreiraAcessibilidades.
     * @param {BarreiraAcessibilidadeCreateManyArgs} args - Arguments to create many BarreiraAcessibilidades.
     * @example
     * // Create many BarreiraAcessibilidades
     * const barreiraAcessibilidade = await prisma.barreiraAcessibilidade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BarreiraAcessibilidadeCreateManyArgs>(args?: SelectSubset<T, BarreiraAcessibilidadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BarreiraAcessibilidades and returns the data saved in the database.
     * @param {BarreiraAcessibilidadeCreateManyAndReturnArgs} args - Arguments to create many BarreiraAcessibilidades.
     * @example
     * // Create many BarreiraAcessibilidades
     * const barreiraAcessibilidade = await prisma.barreiraAcessibilidade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BarreiraAcessibilidades and only return the `barreiraId`
     * const barreiraAcessibilidadeWithBarreiraIdOnly = await prisma.barreiraAcessibilidade.createManyAndReturn({
     *   select: { barreiraId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BarreiraAcessibilidadeCreateManyAndReturnArgs>(args?: SelectSubset<T, BarreiraAcessibilidadeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarreiraAcessibilidadePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BarreiraAcessibilidade.
     * @param {BarreiraAcessibilidadeDeleteArgs} args - Arguments to delete one BarreiraAcessibilidade.
     * @example
     * // Delete one BarreiraAcessibilidade
     * const BarreiraAcessibilidade = await prisma.barreiraAcessibilidade.delete({
     *   where: {
     *     // ... filter to delete one BarreiraAcessibilidade
     *   }
     * })
     * 
     */
    delete<T extends BarreiraAcessibilidadeDeleteArgs>(args: SelectSubset<T, BarreiraAcessibilidadeDeleteArgs<ExtArgs>>): Prisma__BarreiraAcessibilidadeClient<$Result.GetResult<Prisma.$BarreiraAcessibilidadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BarreiraAcessibilidade.
     * @param {BarreiraAcessibilidadeUpdateArgs} args - Arguments to update one BarreiraAcessibilidade.
     * @example
     * // Update one BarreiraAcessibilidade
     * const barreiraAcessibilidade = await prisma.barreiraAcessibilidade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BarreiraAcessibilidadeUpdateArgs>(args: SelectSubset<T, BarreiraAcessibilidadeUpdateArgs<ExtArgs>>): Prisma__BarreiraAcessibilidadeClient<$Result.GetResult<Prisma.$BarreiraAcessibilidadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BarreiraAcessibilidades.
     * @param {BarreiraAcessibilidadeDeleteManyArgs} args - Arguments to filter BarreiraAcessibilidades to delete.
     * @example
     * // Delete a few BarreiraAcessibilidades
     * const { count } = await prisma.barreiraAcessibilidade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BarreiraAcessibilidadeDeleteManyArgs>(args?: SelectSubset<T, BarreiraAcessibilidadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BarreiraAcessibilidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarreiraAcessibilidadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BarreiraAcessibilidades
     * const barreiraAcessibilidade = await prisma.barreiraAcessibilidade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BarreiraAcessibilidadeUpdateManyArgs>(args: SelectSubset<T, BarreiraAcessibilidadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BarreiraAcessibilidades and returns the data updated in the database.
     * @param {BarreiraAcessibilidadeUpdateManyAndReturnArgs} args - Arguments to update many BarreiraAcessibilidades.
     * @example
     * // Update many BarreiraAcessibilidades
     * const barreiraAcessibilidade = await prisma.barreiraAcessibilidade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BarreiraAcessibilidades and only return the `barreiraId`
     * const barreiraAcessibilidadeWithBarreiraIdOnly = await prisma.barreiraAcessibilidade.updateManyAndReturn({
     *   select: { barreiraId: true },
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
    updateManyAndReturn<T extends BarreiraAcessibilidadeUpdateManyAndReturnArgs>(args: SelectSubset<T, BarreiraAcessibilidadeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarreiraAcessibilidadePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BarreiraAcessibilidade.
     * @param {BarreiraAcessibilidadeUpsertArgs} args - Arguments to update or create a BarreiraAcessibilidade.
     * @example
     * // Update or create a BarreiraAcessibilidade
     * const barreiraAcessibilidade = await prisma.barreiraAcessibilidade.upsert({
     *   create: {
     *     // ... data to create a BarreiraAcessibilidade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BarreiraAcessibilidade we want to update
     *   }
     * })
     */
    upsert<T extends BarreiraAcessibilidadeUpsertArgs>(args: SelectSubset<T, BarreiraAcessibilidadeUpsertArgs<ExtArgs>>): Prisma__BarreiraAcessibilidadeClient<$Result.GetResult<Prisma.$BarreiraAcessibilidadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BarreiraAcessibilidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarreiraAcessibilidadeCountArgs} args - Arguments to filter BarreiraAcessibilidades to count.
     * @example
     * // Count the number of BarreiraAcessibilidades
     * const count = await prisma.barreiraAcessibilidade.count({
     *   where: {
     *     // ... the filter for the BarreiraAcessibilidades we want to count
     *   }
     * })
    **/
    count<T extends BarreiraAcessibilidadeCountArgs>(
      args?: Subset<T, BarreiraAcessibilidadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BarreiraAcessibilidadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BarreiraAcessibilidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarreiraAcessibilidadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BarreiraAcessibilidadeAggregateArgs>(args: Subset<T, BarreiraAcessibilidadeAggregateArgs>): Prisma.PrismaPromise<GetBarreiraAcessibilidadeAggregateType<T>>

    /**
     * Group by BarreiraAcessibilidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarreiraAcessibilidadeGroupByArgs} args - Group by arguments.
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
      T extends BarreiraAcessibilidadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BarreiraAcessibilidadeGroupByArgs['orderBy'] }
        : { orderBy?: BarreiraAcessibilidadeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BarreiraAcessibilidadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBarreiraAcessibilidadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BarreiraAcessibilidade model
   */
  readonly fields: BarreiraAcessibilidadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BarreiraAcessibilidade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BarreiraAcessibilidadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    barreira<T extends BarreiraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BarreiraDefaultArgs<ExtArgs>>): Prisma__BarreiraClient<$Result.GetResult<Prisma.$BarreiraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    acessibilidade<T extends AcessibilidadeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AcessibilidadeDefaultArgs<ExtArgs>>): Prisma__AcessibilidadeClient<$Result.GetResult<Prisma.$AcessibilidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BarreiraAcessibilidade model
   */
  interface BarreiraAcessibilidadeFieldRefs {
    readonly barreiraId: FieldRef<"BarreiraAcessibilidade", 'Int'>
    readonly acessibilidadeId: FieldRef<"BarreiraAcessibilidade", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BarreiraAcessibilidade findUnique
   */
  export type BarreiraAcessibilidadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarreiraAcessibilidade
     */
    select?: BarreiraAcessibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarreiraAcessibilidade
     */
    omit?: BarreiraAcessibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarreiraAcessibilidadeInclude<ExtArgs> | null
    /**
     * Filter, which BarreiraAcessibilidade to fetch.
     */
    where: BarreiraAcessibilidadeWhereUniqueInput
  }

  /**
   * BarreiraAcessibilidade findUniqueOrThrow
   */
  export type BarreiraAcessibilidadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarreiraAcessibilidade
     */
    select?: BarreiraAcessibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarreiraAcessibilidade
     */
    omit?: BarreiraAcessibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarreiraAcessibilidadeInclude<ExtArgs> | null
    /**
     * Filter, which BarreiraAcessibilidade to fetch.
     */
    where: BarreiraAcessibilidadeWhereUniqueInput
  }

  /**
   * BarreiraAcessibilidade findFirst
   */
  export type BarreiraAcessibilidadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarreiraAcessibilidade
     */
    select?: BarreiraAcessibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarreiraAcessibilidade
     */
    omit?: BarreiraAcessibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarreiraAcessibilidadeInclude<ExtArgs> | null
    /**
     * Filter, which BarreiraAcessibilidade to fetch.
     */
    where?: BarreiraAcessibilidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarreiraAcessibilidades to fetch.
     */
    orderBy?: BarreiraAcessibilidadeOrderByWithRelationInput | BarreiraAcessibilidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BarreiraAcessibilidades.
     */
    cursor?: BarreiraAcessibilidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarreiraAcessibilidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarreiraAcessibilidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BarreiraAcessibilidades.
     */
    distinct?: BarreiraAcessibilidadeScalarFieldEnum | BarreiraAcessibilidadeScalarFieldEnum[]
  }

  /**
   * BarreiraAcessibilidade findFirstOrThrow
   */
  export type BarreiraAcessibilidadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarreiraAcessibilidade
     */
    select?: BarreiraAcessibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarreiraAcessibilidade
     */
    omit?: BarreiraAcessibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarreiraAcessibilidadeInclude<ExtArgs> | null
    /**
     * Filter, which BarreiraAcessibilidade to fetch.
     */
    where?: BarreiraAcessibilidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarreiraAcessibilidades to fetch.
     */
    orderBy?: BarreiraAcessibilidadeOrderByWithRelationInput | BarreiraAcessibilidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BarreiraAcessibilidades.
     */
    cursor?: BarreiraAcessibilidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarreiraAcessibilidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarreiraAcessibilidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BarreiraAcessibilidades.
     */
    distinct?: BarreiraAcessibilidadeScalarFieldEnum | BarreiraAcessibilidadeScalarFieldEnum[]
  }

  /**
   * BarreiraAcessibilidade findMany
   */
  export type BarreiraAcessibilidadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarreiraAcessibilidade
     */
    select?: BarreiraAcessibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarreiraAcessibilidade
     */
    omit?: BarreiraAcessibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarreiraAcessibilidadeInclude<ExtArgs> | null
    /**
     * Filter, which BarreiraAcessibilidades to fetch.
     */
    where?: BarreiraAcessibilidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarreiraAcessibilidades to fetch.
     */
    orderBy?: BarreiraAcessibilidadeOrderByWithRelationInput | BarreiraAcessibilidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BarreiraAcessibilidades.
     */
    cursor?: BarreiraAcessibilidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarreiraAcessibilidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarreiraAcessibilidades.
     */
    skip?: number
    distinct?: BarreiraAcessibilidadeScalarFieldEnum | BarreiraAcessibilidadeScalarFieldEnum[]
  }

  /**
   * BarreiraAcessibilidade create
   */
  export type BarreiraAcessibilidadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarreiraAcessibilidade
     */
    select?: BarreiraAcessibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarreiraAcessibilidade
     */
    omit?: BarreiraAcessibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarreiraAcessibilidadeInclude<ExtArgs> | null
    /**
     * The data needed to create a BarreiraAcessibilidade.
     */
    data: XOR<BarreiraAcessibilidadeCreateInput, BarreiraAcessibilidadeUncheckedCreateInput>
  }

  /**
   * BarreiraAcessibilidade createMany
   */
  export type BarreiraAcessibilidadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BarreiraAcessibilidades.
     */
    data: BarreiraAcessibilidadeCreateManyInput | BarreiraAcessibilidadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BarreiraAcessibilidade createManyAndReturn
   */
  export type BarreiraAcessibilidadeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarreiraAcessibilidade
     */
    select?: BarreiraAcessibilidadeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BarreiraAcessibilidade
     */
    omit?: BarreiraAcessibilidadeOmit<ExtArgs> | null
    /**
     * The data used to create many BarreiraAcessibilidades.
     */
    data: BarreiraAcessibilidadeCreateManyInput | BarreiraAcessibilidadeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarreiraAcessibilidadeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BarreiraAcessibilidade update
   */
  export type BarreiraAcessibilidadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarreiraAcessibilidade
     */
    select?: BarreiraAcessibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarreiraAcessibilidade
     */
    omit?: BarreiraAcessibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarreiraAcessibilidadeInclude<ExtArgs> | null
    /**
     * The data needed to update a BarreiraAcessibilidade.
     */
    data: XOR<BarreiraAcessibilidadeUpdateInput, BarreiraAcessibilidadeUncheckedUpdateInput>
    /**
     * Choose, which BarreiraAcessibilidade to update.
     */
    where: BarreiraAcessibilidadeWhereUniqueInput
  }

  /**
   * BarreiraAcessibilidade updateMany
   */
  export type BarreiraAcessibilidadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BarreiraAcessibilidades.
     */
    data: XOR<BarreiraAcessibilidadeUpdateManyMutationInput, BarreiraAcessibilidadeUncheckedUpdateManyInput>
    /**
     * Filter which BarreiraAcessibilidades to update
     */
    where?: BarreiraAcessibilidadeWhereInput
    /**
     * Limit how many BarreiraAcessibilidades to update.
     */
    limit?: number
  }

  /**
   * BarreiraAcessibilidade updateManyAndReturn
   */
  export type BarreiraAcessibilidadeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarreiraAcessibilidade
     */
    select?: BarreiraAcessibilidadeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BarreiraAcessibilidade
     */
    omit?: BarreiraAcessibilidadeOmit<ExtArgs> | null
    /**
     * The data used to update BarreiraAcessibilidades.
     */
    data: XOR<BarreiraAcessibilidadeUpdateManyMutationInput, BarreiraAcessibilidadeUncheckedUpdateManyInput>
    /**
     * Filter which BarreiraAcessibilidades to update
     */
    where?: BarreiraAcessibilidadeWhereInput
    /**
     * Limit how many BarreiraAcessibilidades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarreiraAcessibilidadeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BarreiraAcessibilidade upsert
   */
  export type BarreiraAcessibilidadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarreiraAcessibilidade
     */
    select?: BarreiraAcessibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarreiraAcessibilidade
     */
    omit?: BarreiraAcessibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarreiraAcessibilidadeInclude<ExtArgs> | null
    /**
     * The filter to search for the BarreiraAcessibilidade to update in case it exists.
     */
    where: BarreiraAcessibilidadeWhereUniqueInput
    /**
     * In case the BarreiraAcessibilidade found by the `where` argument doesn't exist, create a new BarreiraAcessibilidade with this data.
     */
    create: XOR<BarreiraAcessibilidadeCreateInput, BarreiraAcessibilidadeUncheckedCreateInput>
    /**
     * In case the BarreiraAcessibilidade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BarreiraAcessibilidadeUpdateInput, BarreiraAcessibilidadeUncheckedUpdateInput>
  }

  /**
   * BarreiraAcessibilidade delete
   */
  export type BarreiraAcessibilidadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarreiraAcessibilidade
     */
    select?: BarreiraAcessibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarreiraAcessibilidade
     */
    omit?: BarreiraAcessibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarreiraAcessibilidadeInclude<ExtArgs> | null
    /**
     * Filter which BarreiraAcessibilidade to delete.
     */
    where: BarreiraAcessibilidadeWhereUniqueInput
  }

  /**
   * BarreiraAcessibilidade deleteMany
   */
  export type BarreiraAcessibilidadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BarreiraAcessibilidades to delete
     */
    where?: BarreiraAcessibilidadeWhereInput
    /**
     * Limit how many BarreiraAcessibilidades to delete.
     */
    limit?: number
  }

  /**
   * BarreiraAcessibilidade without action
   */
  export type BarreiraAcessibilidadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarreiraAcessibilidade
     */
    select?: BarreiraAcessibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarreiraAcessibilidade
     */
    omit?: BarreiraAcessibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarreiraAcessibilidadeInclude<ExtArgs> | null
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


  export const TipoDeficienciaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TipoDeficienciaScalarFieldEnum = (typeof TipoDeficienciaScalarFieldEnum)[keyof typeof TipoDeficienciaScalarFieldEnum]


  export const SubtipoDeficienciaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    tipoId: 'tipoId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubtipoDeficienciaScalarFieldEnum = (typeof SubtipoDeficienciaScalarFieldEnum)[keyof typeof SubtipoDeficienciaScalarFieldEnum]


  export const BarreiraScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BarreiraScalarFieldEnum = (typeof BarreiraScalarFieldEnum)[keyof typeof BarreiraScalarFieldEnum]


  export const AcessibilidadeScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AcessibilidadeScalarFieldEnum = (typeof AcessibilidadeScalarFieldEnum)[keyof typeof AcessibilidadeScalarFieldEnum]


  export const SubtipoBarreiraScalarFieldEnum: {
    subtipoId: 'subtipoId',
    barreiraId: 'barreiraId'
  };

  export type SubtipoBarreiraScalarFieldEnum = (typeof SubtipoBarreiraScalarFieldEnum)[keyof typeof SubtipoBarreiraScalarFieldEnum]


  export const BarreiraAcessibilidadeScalarFieldEnum: {
    barreiraId: 'barreiraId',
    acessibilidadeId: 'acessibilidadeId'
  };

  export type BarreiraAcessibilidadeScalarFieldEnum = (typeof BarreiraAcessibilidadeScalarFieldEnum)[keyof typeof BarreiraAcessibilidadeScalarFieldEnum]


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


  export type TipoDeficienciaWhereInput = {
    AND?: TipoDeficienciaWhereInput | TipoDeficienciaWhereInput[]
    OR?: TipoDeficienciaWhereInput[]
    NOT?: TipoDeficienciaWhereInput | TipoDeficienciaWhereInput[]
    id?: IntFilter<"TipoDeficiencia"> | number
    nome?: StringFilter<"TipoDeficiencia"> | string
    createdAt?: DateTimeFilter<"TipoDeficiencia"> | Date | string
    updatedAt?: DateTimeFilter<"TipoDeficiencia"> | Date | string
    subtipos?: SubtipoDeficienciaListRelationFilter
  }

  export type TipoDeficienciaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subtipos?: SubtipoDeficienciaOrderByRelationAggregateInput
  }

  export type TipoDeficienciaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: TipoDeficienciaWhereInput | TipoDeficienciaWhereInput[]
    OR?: TipoDeficienciaWhereInput[]
    NOT?: TipoDeficienciaWhereInput | TipoDeficienciaWhereInput[]
    createdAt?: DateTimeFilter<"TipoDeficiencia"> | Date | string
    updatedAt?: DateTimeFilter<"TipoDeficiencia"> | Date | string
    subtipos?: SubtipoDeficienciaListRelationFilter
  }, "id" | "nome">

  export type TipoDeficienciaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TipoDeficienciaCountOrderByAggregateInput
    _avg?: TipoDeficienciaAvgOrderByAggregateInput
    _max?: TipoDeficienciaMaxOrderByAggregateInput
    _min?: TipoDeficienciaMinOrderByAggregateInput
    _sum?: TipoDeficienciaSumOrderByAggregateInput
  }

  export type TipoDeficienciaScalarWhereWithAggregatesInput = {
    AND?: TipoDeficienciaScalarWhereWithAggregatesInput | TipoDeficienciaScalarWhereWithAggregatesInput[]
    OR?: TipoDeficienciaScalarWhereWithAggregatesInput[]
    NOT?: TipoDeficienciaScalarWhereWithAggregatesInput | TipoDeficienciaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TipoDeficiencia"> | number
    nome?: StringWithAggregatesFilter<"TipoDeficiencia"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TipoDeficiencia"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TipoDeficiencia"> | Date | string
  }

  export type SubtipoDeficienciaWhereInput = {
    AND?: SubtipoDeficienciaWhereInput | SubtipoDeficienciaWhereInput[]
    OR?: SubtipoDeficienciaWhereInput[]
    NOT?: SubtipoDeficienciaWhereInput | SubtipoDeficienciaWhereInput[]
    id?: IntFilter<"SubtipoDeficiencia"> | number
    nome?: StringFilter<"SubtipoDeficiencia"> | string
    tipoId?: IntFilter<"SubtipoDeficiencia"> | number
    createdAt?: DateTimeFilter<"SubtipoDeficiencia"> | Date | string
    updatedAt?: DateTimeFilter<"SubtipoDeficiencia"> | Date | string
    tipo?: XOR<TipoDeficienciaScalarRelationFilter, TipoDeficienciaWhereInput>
    barreiras?: SubtipoBarreiraListRelationFilter
  }

  export type SubtipoDeficienciaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    tipoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tipo?: TipoDeficienciaOrderByWithRelationInput
    barreiras?: SubtipoBarreiraOrderByRelationAggregateInput
  }

  export type SubtipoDeficienciaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tipoId_nome?: SubtipoDeficienciaTipoIdNomeCompoundUniqueInput
    AND?: SubtipoDeficienciaWhereInput | SubtipoDeficienciaWhereInput[]
    OR?: SubtipoDeficienciaWhereInput[]
    NOT?: SubtipoDeficienciaWhereInput | SubtipoDeficienciaWhereInput[]
    nome?: StringFilter<"SubtipoDeficiencia"> | string
    tipoId?: IntFilter<"SubtipoDeficiencia"> | number
    createdAt?: DateTimeFilter<"SubtipoDeficiencia"> | Date | string
    updatedAt?: DateTimeFilter<"SubtipoDeficiencia"> | Date | string
    tipo?: XOR<TipoDeficienciaScalarRelationFilter, TipoDeficienciaWhereInput>
    barreiras?: SubtipoBarreiraListRelationFilter
  }, "id" | "tipoId_nome">

  export type SubtipoDeficienciaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    tipoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubtipoDeficienciaCountOrderByAggregateInput
    _avg?: SubtipoDeficienciaAvgOrderByAggregateInput
    _max?: SubtipoDeficienciaMaxOrderByAggregateInput
    _min?: SubtipoDeficienciaMinOrderByAggregateInput
    _sum?: SubtipoDeficienciaSumOrderByAggregateInput
  }

  export type SubtipoDeficienciaScalarWhereWithAggregatesInput = {
    AND?: SubtipoDeficienciaScalarWhereWithAggregatesInput | SubtipoDeficienciaScalarWhereWithAggregatesInput[]
    OR?: SubtipoDeficienciaScalarWhereWithAggregatesInput[]
    NOT?: SubtipoDeficienciaScalarWhereWithAggregatesInput | SubtipoDeficienciaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SubtipoDeficiencia"> | number
    nome?: StringWithAggregatesFilter<"SubtipoDeficiencia"> | string
    tipoId?: IntWithAggregatesFilter<"SubtipoDeficiencia"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SubtipoDeficiencia"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SubtipoDeficiencia"> | Date | string
  }

  export type BarreiraWhereInput = {
    AND?: BarreiraWhereInput | BarreiraWhereInput[]
    OR?: BarreiraWhereInput[]
    NOT?: BarreiraWhereInput | BarreiraWhereInput[]
    id?: IntFilter<"Barreira"> | number
    descricao?: StringFilter<"Barreira"> | string
    createdAt?: DateTimeFilter<"Barreira"> | Date | string
    updatedAt?: DateTimeFilter<"Barreira"> | Date | string
    subtipos?: SubtipoBarreiraListRelationFilter
    acessibilidades?: BarreiraAcessibilidadeListRelationFilter
  }

  export type BarreiraOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subtipos?: SubtipoBarreiraOrderByRelationAggregateInput
    acessibilidades?: BarreiraAcessibilidadeOrderByRelationAggregateInput
  }

  export type BarreiraWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    descricao?: string
    AND?: BarreiraWhereInput | BarreiraWhereInput[]
    OR?: BarreiraWhereInput[]
    NOT?: BarreiraWhereInput | BarreiraWhereInput[]
    createdAt?: DateTimeFilter<"Barreira"> | Date | string
    updatedAt?: DateTimeFilter<"Barreira"> | Date | string
    subtipos?: SubtipoBarreiraListRelationFilter
    acessibilidades?: BarreiraAcessibilidadeListRelationFilter
  }, "id" | "descricao">

  export type BarreiraOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BarreiraCountOrderByAggregateInput
    _avg?: BarreiraAvgOrderByAggregateInput
    _max?: BarreiraMaxOrderByAggregateInput
    _min?: BarreiraMinOrderByAggregateInput
    _sum?: BarreiraSumOrderByAggregateInput
  }

  export type BarreiraScalarWhereWithAggregatesInput = {
    AND?: BarreiraScalarWhereWithAggregatesInput | BarreiraScalarWhereWithAggregatesInput[]
    OR?: BarreiraScalarWhereWithAggregatesInput[]
    NOT?: BarreiraScalarWhereWithAggregatesInput | BarreiraScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Barreira"> | number
    descricao?: StringWithAggregatesFilter<"Barreira"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Barreira"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Barreira"> | Date | string
  }

  export type AcessibilidadeWhereInput = {
    AND?: AcessibilidadeWhereInput | AcessibilidadeWhereInput[]
    OR?: AcessibilidadeWhereInput[]
    NOT?: AcessibilidadeWhereInput | AcessibilidadeWhereInput[]
    id?: IntFilter<"Acessibilidade"> | number
    descricao?: StringFilter<"Acessibilidade"> | string
    createdAt?: DateTimeFilter<"Acessibilidade"> | Date | string
    updatedAt?: DateTimeFilter<"Acessibilidade"> | Date | string
    barreiras?: BarreiraAcessibilidadeListRelationFilter
  }

  export type AcessibilidadeOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    barreiras?: BarreiraAcessibilidadeOrderByRelationAggregateInput
  }

  export type AcessibilidadeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    descricao?: string
    AND?: AcessibilidadeWhereInput | AcessibilidadeWhereInput[]
    OR?: AcessibilidadeWhereInput[]
    NOT?: AcessibilidadeWhereInput | AcessibilidadeWhereInput[]
    createdAt?: DateTimeFilter<"Acessibilidade"> | Date | string
    updatedAt?: DateTimeFilter<"Acessibilidade"> | Date | string
    barreiras?: BarreiraAcessibilidadeListRelationFilter
  }, "id" | "descricao">

  export type AcessibilidadeOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AcessibilidadeCountOrderByAggregateInput
    _avg?: AcessibilidadeAvgOrderByAggregateInput
    _max?: AcessibilidadeMaxOrderByAggregateInput
    _min?: AcessibilidadeMinOrderByAggregateInput
    _sum?: AcessibilidadeSumOrderByAggregateInput
  }

  export type AcessibilidadeScalarWhereWithAggregatesInput = {
    AND?: AcessibilidadeScalarWhereWithAggregatesInput | AcessibilidadeScalarWhereWithAggregatesInput[]
    OR?: AcessibilidadeScalarWhereWithAggregatesInput[]
    NOT?: AcessibilidadeScalarWhereWithAggregatesInput | AcessibilidadeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Acessibilidade"> | number
    descricao?: StringWithAggregatesFilter<"Acessibilidade"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Acessibilidade"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Acessibilidade"> | Date | string
  }

  export type SubtipoBarreiraWhereInput = {
    AND?: SubtipoBarreiraWhereInput | SubtipoBarreiraWhereInput[]
    OR?: SubtipoBarreiraWhereInput[]
    NOT?: SubtipoBarreiraWhereInput | SubtipoBarreiraWhereInput[]
    subtipoId?: IntFilter<"SubtipoBarreira"> | number
    barreiraId?: IntFilter<"SubtipoBarreira"> | number
    subtipo?: XOR<SubtipoDeficienciaScalarRelationFilter, SubtipoDeficienciaWhereInput>
    barreira?: XOR<BarreiraScalarRelationFilter, BarreiraWhereInput>
  }

  export type SubtipoBarreiraOrderByWithRelationInput = {
    subtipoId?: SortOrder
    barreiraId?: SortOrder
    subtipo?: SubtipoDeficienciaOrderByWithRelationInput
    barreira?: BarreiraOrderByWithRelationInput
  }

  export type SubtipoBarreiraWhereUniqueInput = Prisma.AtLeast<{
    subtipoId_barreiraId?: SubtipoBarreiraSubtipoIdBarreiraIdCompoundUniqueInput
    AND?: SubtipoBarreiraWhereInput | SubtipoBarreiraWhereInput[]
    OR?: SubtipoBarreiraWhereInput[]
    NOT?: SubtipoBarreiraWhereInput | SubtipoBarreiraWhereInput[]
    subtipoId?: IntFilter<"SubtipoBarreira"> | number
    barreiraId?: IntFilter<"SubtipoBarreira"> | number
    subtipo?: XOR<SubtipoDeficienciaScalarRelationFilter, SubtipoDeficienciaWhereInput>
    barreira?: XOR<BarreiraScalarRelationFilter, BarreiraWhereInput>
  }, "subtipoId_barreiraId">

  export type SubtipoBarreiraOrderByWithAggregationInput = {
    subtipoId?: SortOrder
    barreiraId?: SortOrder
    _count?: SubtipoBarreiraCountOrderByAggregateInput
    _avg?: SubtipoBarreiraAvgOrderByAggregateInput
    _max?: SubtipoBarreiraMaxOrderByAggregateInput
    _min?: SubtipoBarreiraMinOrderByAggregateInput
    _sum?: SubtipoBarreiraSumOrderByAggregateInput
  }

  export type SubtipoBarreiraScalarWhereWithAggregatesInput = {
    AND?: SubtipoBarreiraScalarWhereWithAggregatesInput | SubtipoBarreiraScalarWhereWithAggregatesInput[]
    OR?: SubtipoBarreiraScalarWhereWithAggregatesInput[]
    NOT?: SubtipoBarreiraScalarWhereWithAggregatesInput | SubtipoBarreiraScalarWhereWithAggregatesInput[]
    subtipoId?: IntWithAggregatesFilter<"SubtipoBarreira"> | number
    barreiraId?: IntWithAggregatesFilter<"SubtipoBarreira"> | number
  }

  export type BarreiraAcessibilidadeWhereInput = {
    AND?: BarreiraAcessibilidadeWhereInput | BarreiraAcessibilidadeWhereInput[]
    OR?: BarreiraAcessibilidadeWhereInput[]
    NOT?: BarreiraAcessibilidadeWhereInput | BarreiraAcessibilidadeWhereInput[]
    barreiraId?: IntFilter<"BarreiraAcessibilidade"> | number
    acessibilidadeId?: IntFilter<"BarreiraAcessibilidade"> | number
    barreira?: XOR<BarreiraScalarRelationFilter, BarreiraWhereInput>
    acessibilidade?: XOR<AcessibilidadeScalarRelationFilter, AcessibilidadeWhereInput>
  }

  export type BarreiraAcessibilidadeOrderByWithRelationInput = {
    barreiraId?: SortOrder
    acessibilidadeId?: SortOrder
    barreira?: BarreiraOrderByWithRelationInput
    acessibilidade?: AcessibilidadeOrderByWithRelationInput
  }

  export type BarreiraAcessibilidadeWhereUniqueInput = Prisma.AtLeast<{
    barreiraId_acessibilidadeId?: BarreiraAcessibilidadeBarreiraIdAcessibilidadeIdCompoundUniqueInput
    AND?: BarreiraAcessibilidadeWhereInput | BarreiraAcessibilidadeWhereInput[]
    OR?: BarreiraAcessibilidadeWhereInput[]
    NOT?: BarreiraAcessibilidadeWhereInput | BarreiraAcessibilidadeWhereInput[]
    barreiraId?: IntFilter<"BarreiraAcessibilidade"> | number
    acessibilidadeId?: IntFilter<"BarreiraAcessibilidade"> | number
    barreira?: XOR<BarreiraScalarRelationFilter, BarreiraWhereInput>
    acessibilidade?: XOR<AcessibilidadeScalarRelationFilter, AcessibilidadeWhereInput>
  }, "barreiraId_acessibilidadeId">

  export type BarreiraAcessibilidadeOrderByWithAggregationInput = {
    barreiraId?: SortOrder
    acessibilidadeId?: SortOrder
    _count?: BarreiraAcessibilidadeCountOrderByAggregateInput
    _avg?: BarreiraAcessibilidadeAvgOrderByAggregateInput
    _max?: BarreiraAcessibilidadeMaxOrderByAggregateInput
    _min?: BarreiraAcessibilidadeMinOrderByAggregateInput
    _sum?: BarreiraAcessibilidadeSumOrderByAggregateInput
  }

  export type BarreiraAcessibilidadeScalarWhereWithAggregatesInput = {
    AND?: BarreiraAcessibilidadeScalarWhereWithAggregatesInput | BarreiraAcessibilidadeScalarWhereWithAggregatesInput[]
    OR?: BarreiraAcessibilidadeScalarWhereWithAggregatesInput[]
    NOT?: BarreiraAcessibilidadeScalarWhereWithAggregatesInput | BarreiraAcessibilidadeScalarWhereWithAggregatesInput[]
    barreiraId?: IntWithAggregatesFilter<"BarreiraAcessibilidade"> | number
    acessibilidadeId?: IntWithAggregatesFilter<"BarreiraAcessibilidade"> | number
  }

  export type TipoDeficienciaCreateInput = {
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subtipos?: SubtipoDeficienciaCreateNestedManyWithoutTipoInput
  }

  export type TipoDeficienciaUncheckedCreateInput = {
    id?: number
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subtipos?: SubtipoDeficienciaUncheckedCreateNestedManyWithoutTipoInput
  }

  export type TipoDeficienciaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtipos?: SubtipoDeficienciaUpdateManyWithoutTipoNestedInput
  }

  export type TipoDeficienciaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtipos?: SubtipoDeficienciaUncheckedUpdateManyWithoutTipoNestedInput
  }

  export type TipoDeficienciaCreateManyInput = {
    id?: number
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TipoDeficienciaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoDeficienciaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubtipoDeficienciaCreateInput = {
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tipo: TipoDeficienciaCreateNestedOneWithoutSubtiposInput
    barreiras?: SubtipoBarreiraCreateNestedManyWithoutSubtipoInput
  }

  export type SubtipoDeficienciaUncheckedCreateInput = {
    id?: number
    nome: string
    tipoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    barreiras?: SubtipoBarreiraUncheckedCreateNestedManyWithoutSubtipoInput
  }

  export type SubtipoDeficienciaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: TipoDeficienciaUpdateOneRequiredWithoutSubtiposNestedInput
    barreiras?: SubtipoBarreiraUpdateManyWithoutSubtipoNestedInput
  }

  export type SubtipoDeficienciaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barreiras?: SubtipoBarreiraUncheckedUpdateManyWithoutSubtipoNestedInput
  }

  export type SubtipoDeficienciaCreateManyInput = {
    id?: number
    nome: string
    tipoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubtipoDeficienciaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubtipoDeficienciaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarreiraCreateInput = {
    descricao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subtipos?: SubtipoBarreiraCreateNestedManyWithoutBarreiraInput
    acessibilidades?: BarreiraAcessibilidadeCreateNestedManyWithoutBarreiraInput
  }

  export type BarreiraUncheckedCreateInput = {
    id?: number
    descricao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subtipos?: SubtipoBarreiraUncheckedCreateNestedManyWithoutBarreiraInput
    acessibilidades?: BarreiraAcessibilidadeUncheckedCreateNestedManyWithoutBarreiraInput
  }

  export type BarreiraUpdateInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtipos?: SubtipoBarreiraUpdateManyWithoutBarreiraNestedInput
    acessibilidades?: BarreiraAcessibilidadeUpdateManyWithoutBarreiraNestedInput
  }

  export type BarreiraUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtipos?: SubtipoBarreiraUncheckedUpdateManyWithoutBarreiraNestedInput
    acessibilidades?: BarreiraAcessibilidadeUncheckedUpdateManyWithoutBarreiraNestedInput
  }

  export type BarreiraCreateManyInput = {
    id?: number
    descricao: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BarreiraUpdateManyMutationInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarreiraUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcessibilidadeCreateInput = {
    descricao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    barreiras?: BarreiraAcessibilidadeCreateNestedManyWithoutAcessibilidadeInput
  }

  export type AcessibilidadeUncheckedCreateInput = {
    id?: number
    descricao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    barreiras?: BarreiraAcessibilidadeUncheckedCreateNestedManyWithoutAcessibilidadeInput
  }

  export type AcessibilidadeUpdateInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barreiras?: BarreiraAcessibilidadeUpdateManyWithoutAcessibilidadeNestedInput
  }

  export type AcessibilidadeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barreiras?: BarreiraAcessibilidadeUncheckedUpdateManyWithoutAcessibilidadeNestedInput
  }

  export type AcessibilidadeCreateManyInput = {
    id?: number
    descricao: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AcessibilidadeUpdateManyMutationInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcessibilidadeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubtipoBarreiraCreateInput = {
    subtipo: SubtipoDeficienciaCreateNestedOneWithoutBarreirasInput
    barreira: BarreiraCreateNestedOneWithoutSubtiposInput
  }

  export type SubtipoBarreiraUncheckedCreateInput = {
    subtipoId: number
    barreiraId: number
  }

  export type SubtipoBarreiraUpdateInput = {
    subtipo?: SubtipoDeficienciaUpdateOneRequiredWithoutBarreirasNestedInput
    barreira?: BarreiraUpdateOneRequiredWithoutSubtiposNestedInput
  }

  export type SubtipoBarreiraUncheckedUpdateInput = {
    subtipoId?: IntFieldUpdateOperationsInput | number
    barreiraId?: IntFieldUpdateOperationsInput | number
  }

  export type SubtipoBarreiraCreateManyInput = {
    subtipoId: number
    barreiraId: number
  }

  export type SubtipoBarreiraUpdateManyMutationInput = {

  }

  export type SubtipoBarreiraUncheckedUpdateManyInput = {
    subtipoId?: IntFieldUpdateOperationsInput | number
    barreiraId?: IntFieldUpdateOperationsInput | number
  }

  export type BarreiraAcessibilidadeCreateInput = {
    barreira: BarreiraCreateNestedOneWithoutAcessibilidadesInput
    acessibilidade: AcessibilidadeCreateNestedOneWithoutBarreirasInput
  }

  export type BarreiraAcessibilidadeUncheckedCreateInput = {
    barreiraId: number
    acessibilidadeId: number
  }

  export type BarreiraAcessibilidadeUpdateInput = {
    barreira?: BarreiraUpdateOneRequiredWithoutAcessibilidadesNestedInput
    acessibilidade?: AcessibilidadeUpdateOneRequiredWithoutBarreirasNestedInput
  }

  export type BarreiraAcessibilidadeUncheckedUpdateInput = {
    barreiraId?: IntFieldUpdateOperationsInput | number
    acessibilidadeId?: IntFieldUpdateOperationsInput | number
  }

  export type BarreiraAcessibilidadeCreateManyInput = {
    barreiraId: number
    acessibilidadeId: number
  }

  export type BarreiraAcessibilidadeUpdateManyMutationInput = {

  }

  export type BarreiraAcessibilidadeUncheckedUpdateManyInput = {
    barreiraId?: IntFieldUpdateOperationsInput | number
    acessibilidadeId?: IntFieldUpdateOperationsInput | number
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

  export type SubtipoDeficienciaListRelationFilter = {
    every?: SubtipoDeficienciaWhereInput
    some?: SubtipoDeficienciaWhereInput
    none?: SubtipoDeficienciaWhereInput
  }

  export type SubtipoDeficienciaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TipoDeficienciaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TipoDeficienciaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TipoDeficienciaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TipoDeficienciaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TipoDeficienciaSumOrderByAggregateInput = {
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

  export type TipoDeficienciaScalarRelationFilter = {
    is?: TipoDeficienciaWhereInput
    isNot?: TipoDeficienciaWhereInput
  }

  export type SubtipoBarreiraListRelationFilter = {
    every?: SubtipoBarreiraWhereInput
    some?: SubtipoBarreiraWhereInput
    none?: SubtipoBarreiraWhereInput
  }

  export type SubtipoBarreiraOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubtipoDeficienciaTipoIdNomeCompoundUniqueInput = {
    tipoId: number
    nome: string
  }

  export type SubtipoDeficienciaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubtipoDeficienciaAvgOrderByAggregateInput = {
    id?: SortOrder
    tipoId?: SortOrder
  }

  export type SubtipoDeficienciaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubtipoDeficienciaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubtipoDeficienciaSumOrderByAggregateInput = {
    id?: SortOrder
    tipoId?: SortOrder
  }

  export type BarreiraAcessibilidadeListRelationFilter = {
    every?: BarreiraAcessibilidadeWhereInput
    some?: BarreiraAcessibilidadeWhereInput
    none?: BarreiraAcessibilidadeWhereInput
  }

  export type BarreiraAcessibilidadeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BarreiraCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BarreiraAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BarreiraMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BarreiraMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BarreiraSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AcessibilidadeCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AcessibilidadeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AcessibilidadeMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AcessibilidadeMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AcessibilidadeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SubtipoDeficienciaScalarRelationFilter = {
    is?: SubtipoDeficienciaWhereInput
    isNot?: SubtipoDeficienciaWhereInput
  }

  export type BarreiraScalarRelationFilter = {
    is?: BarreiraWhereInput
    isNot?: BarreiraWhereInput
  }

  export type SubtipoBarreiraSubtipoIdBarreiraIdCompoundUniqueInput = {
    subtipoId: number
    barreiraId: number
  }

  export type SubtipoBarreiraCountOrderByAggregateInput = {
    subtipoId?: SortOrder
    barreiraId?: SortOrder
  }

  export type SubtipoBarreiraAvgOrderByAggregateInput = {
    subtipoId?: SortOrder
    barreiraId?: SortOrder
  }

  export type SubtipoBarreiraMaxOrderByAggregateInput = {
    subtipoId?: SortOrder
    barreiraId?: SortOrder
  }

  export type SubtipoBarreiraMinOrderByAggregateInput = {
    subtipoId?: SortOrder
    barreiraId?: SortOrder
  }

  export type SubtipoBarreiraSumOrderByAggregateInput = {
    subtipoId?: SortOrder
    barreiraId?: SortOrder
  }

  export type AcessibilidadeScalarRelationFilter = {
    is?: AcessibilidadeWhereInput
    isNot?: AcessibilidadeWhereInput
  }

  export type BarreiraAcessibilidadeBarreiraIdAcessibilidadeIdCompoundUniqueInput = {
    barreiraId: number
    acessibilidadeId: number
  }

  export type BarreiraAcessibilidadeCountOrderByAggregateInput = {
    barreiraId?: SortOrder
    acessibilidadeId?: SortOrder
  }

  export type BarreiraAcessibilidadeAvgOrderByAggregateInput = {
    barreiraId?: SortOrder
    acessibilidadeId?: SortOrder
  }

  export type BarreiraAcessibilidadeMaxOrderByAggregateInput = {
    barreiraId?: SortOrder
    acessibilidadeId?: SortOrder
  }

  export type BarreiraAcessibilidadeMinOrderByAggregateInput = {
    barreiraId?: SortOrder
    acessibilidadeId?: SortOrder
  }

  export type BarreiraAcessibilidadeSumOrderByAggregateInput = {
    barreiraId?: SortOrder
    acessibilidadeId?: SortOrder
  }

  export type SubtipoDeficienciaCreateNestedManyWithoutTipoInput = {
    create?: XOR<SubtipoDeficienciaCreateWithoutTipoInput, SubtipoDeficienciaUncheckedCreateWithoutTipoInput> | SubtipoDeficienciaCreateWithoutTipoInput[] | SubtipoDeficienciaUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: SubtipoDeficienciaCreateOrConnectWithoutTipoInput | SubtipoDeficienciaCreateOrConnectWithoutTipoInput[]
    createMany?: SubtipoDeficienciaCreateManyTipoInputEnvelope
    connect?: SubtipoDeficienciaWhereUniqueInput | SubtipoDeficienciaWhereUniqueInput[]
  }

  export type SubtipoDeficienciaUncheckedCreateNestedManyWithoutTipoInput = {
    create?: XOR<SubtipoDeficienciaCreateWithoutTipoInput, SubtipoDeficienciaUncheckedCreateWithoutTipoInput> | SubtipoDeficienciaCreateWithoutTipoInput[] | SubtipoDeficienciaUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: SubtipoDeficienciaCreateOrConnectWithoutTipoInput | SubtipoDeficienciaCreateOrConnectWithoutTipoInput[]
    createMany?: SubtipoDeficienciaCreateManyTipoInputEnvelope
    connect?: SubtipoDeficienciaWhereUniqueInput | SubtipoDeficienciaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SubtipoDeficienciaUpdateManyWithoutTipoNestedInput = {
    create?: XOR<SubtipoDeficienciaCreateWithoutTipoInput, SubtipoDeficienciaUncheckedCreateWithoutTipoInput> | SubtipoDeficienciaCreateWithoutTipoInput[] | SubtipoDeficienciaUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: SubtipoDeficienciaCreateOrConnectWithoutTipoInput | SubtipoDeficienciaCreateOrConnectWithoutTipoInput[]
    upsert?: SubtipoDeficienciaUpsertWithWhereUniqueWithoutTipoInput | SubtipoDeficienciaUpsertWithWhereUniqueWithoutTipoInput[]
    createMany?: SubtipoDeficienciaCreateManyTipoInputEnvelope
    set?: SubtipoDeficienciaWhereUniqueInput | SubtipoDeficienciaWhereUniqueInput[]
    disconnect?: SubtipoDeficienciaWhereUniqueInput | SubtipoDeficienciaWhereUniqueInput[]
    delete?: SubtipoDeficienciaWhereUniqueInput | SubtipoDeficienciaWhereUniqueInput[]
    connect?: SubtipoDeficienciaWhereUniqueInput | SubtipoDeficienciaWhereUniqueInput[]
    update?: SubtipoDeficienciaUpdateWithWhereUniqueWithoutTipoInput | SubtipoDeficienciaUpdateWithWhereUniqueWithoutTipoInput[]
    updateMany?: SubtipoDeficienciaUpdateManyWithWhereWithoutTipoInput | SubtipoDeficienciaUpdateManyWithWhereWithoutTipoInput[]
    deleteMany?: SubtipoDeficienciaScalarWhereInput | SubtipoDeficienciaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SubtipoDeficienciaUncheckedUpdateManyWithoutTipoNestedInput = {
    create?: XOR<SubtipoDeficienciaCreateWithoutTipoInput, SubtipoDeficienciaUncheckedCreateWithoutTipoInput> | SubtipoDeficienciaCreateWithoutTipoInput[] | SubtipoDeficienciaUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: SubtipoDeficienciaCreateOrConnectWithoutTipoInput | SubtipoDeficienciaCreateOrConnectWithoutTipoInput[]
    upsert?: SubtipoDeficienciaUpsertWithWhereUniqueWithoutTipoInput | SubtipoDeficienciaUpsertWithWhereUniqueWithoutTipoInput[]
    createMany?: SubtipoDeficienciaCreateManyTipoInputEnvelope
    set?: SubtipoDeficienciaWhereUniqueInput | SubtipoDeficienciaWhereUniqueInput[]
    disconnect?: SubtipoDeficienciaWhereUniqueInput | SubtipoDeficienciaWhereUniqueInput[]
    delete?: SubtipoDeficienciaWhereUniqueInput | SubtipoDeficienciaWhereUniqueInput[]
    connect?: SubtipoDeficienciaWhereUniqueInput | SubtipoDeficienciaWhereUniqueInput[]
    update?: SubtipoDeficienciaUpdateWithWhereUniqueWithoutTipoInput | SubtipoDeficienciaUpdateWithWhereUniqueWithoutTipoInput[]
    updateMany?: SubtipoDeficienciaUpdateManyWithWhereWithoutTipoInput | SubtipoDeficienciaUpdateManyWithWhereWithoutTipoInput[]
    deleteMany?: SubtipoDeficienciaScalarWhereInput | SubtipoDeficienciaScalarWhereInput[]
  }

  export type TipoDeficienciaCreateNestedOneWithoutSubtiposInput = {
    create?: XOR<TipoDeficienciaCreateWithoutSubtiposInput, TipoDeficienciaUncheckedCreateWithoutSubtiposInput>
    connectOrCreate?: TipoDeficienciaCreateOrConnectWithoutSubtiposInput
    connect?: TipoDeficienciaWhereUniqueInput
  }

  export type SubtipoBarreiraCreateNestedManyWithoutSubtipoInput = {
    create?: XOR<SubtipoBarreiraCreateWithoutSubtipoInput, SubtipoBarreiraUncheckedCreateWithoutSubtipoInput> | SubtipoBarreiraCreateWithoutSubtipoInput[] | SubtipoBarreiraUncheckedCreateWithoutSubtipoInput[]
    connectOrCreate?: SubtipoBarreiraCreateOrConnectWithoutSubtipoInput | SubtipoBarreiraCreateOrConnectWithoutSubtipoInput[]
    createMany?: SubtipoBarreiraCreateManySubtipoInputEnvelope
    connect?: SubtipoBarreiraWhereUniqueInput | SubtipoBarreiraWhereUniqueInput[]
  }

  export type SubtipoBarreiraUncheckedCreateNestedManyWithoutSubtipoInput = {
    create?: XOR<SubtipoBarreiraCreateWithoutSubtipoInput, SubtipoBarreiraUncheckedCreateWithoutSubtipoInput> | SubtipoBarreiraCreateWithoutSubtipoInput[] | SubtipoBarreiraUncheckedCreateWithoutSubtipoInput[]
    connectOrCreate?: SubtipoBarreiraCreateOrConnectWithoutSubtipoInput | SubtipoBarreiraCreateOrConnectWithoutSubtipoInput[]
    createMany?: SubtipoBarreiraCreateManySubtipoInputEnvelope
    connect?: SubtipoBarreiraWhereUniqueInput | SubtipoBarreiraWhereUniqueInput[]
  }

  export type TipoDeficienciaUpdateOneRequiredWithoutSubtiposNestedInput = {
    create?: XOR<TipoDeficienciaCreateWithoutSubtiposInput, TipoDeficienciaUncheckedCreateWithoutSubtiposInput>
    connectOrCreate?: TipoDeficienciaCreateOrConnectWithoutSubtiposInput
    upsert?: TipoDeficienciaUpsertWithoutSubtiposInput
    connect?: TipoDeficienciaWhereUniqueInput
    update?: XOR<XOR<TipoDeficienciaUpdateToOneWithWhereWithoutSubtiposInput, TipoDeficienciaUpdateWithoutSubtiposInput>, TipoDeficienciaUncheckedUpdateWithoutSubtiposInput>
  }

  export type SubtipoBarreiraUpdateManyWithoutSubtipoNestedInput = {
    create?: XOR<SubtipoBarreiraCreateWithoutSubtipoInput, SubtipoBarreiraUncheckedCreateWithoutSubtipoInput> | SubtipoBarreiraCreateWithoutSubtipoInput[] | SubtipoBarreiraUncheckedCreateWithoutSubtipoInput[]
    connectOrCreate?: SubtipoBarreiraCreateOrConnectWithoutSubtipoInput | SubtipoBarreiraCreateOrConnectWithoutSubtipoInput[]
    upsert?: SubtipoBarreiraUpsertWithWhereUniqueWithoutSubtipoInput | SubtipoBarreiraUpsertWithWhereUniqueWithoutSubtipoInput[]
    createMany?: SubtipoBarreiraCreateManySubtipoInputEnvelope
    set?: SubtipoBarreiraWhereUniqueInput | SubtipoBarreiraWhereUniqueInput[]
    disconnect?: SubtipoBarreiraWhereUniqueInput | SubtipoBarreiraWhereUniqueInput[]
    delete?: SubtipoBarreiraWhereUniqueInput | SubtipoBarreiraWhereUniqueInput[]
    connect?: SubtipoBarreiraWhereUniqueInput | SubtipoBarreiraWhereUniqueInput[]
    update?: SubtipoBarreiraUpdateWithWhereUniqueWithoutSubtipoInput | SubtipoBarreiraUpdateWithWhereUniqueWithoutSubtipoInput[]
    updateMany?: SubtipoBarreiraUpdateManyWithWhereWithoutSubtipoInput | SubtipoBarreiraUpdateManyWithWhereWithoutSubtipoInput[]
    deleteMany?: SubtipoBarreiraScalarWhereInput | SubtipoBarreiraScalarWhereInput[]
  }

  export type SubtipoBarreiraUncheckedUpdateManyWithoutSubtipoNestedInput = {
    create?: XOR<SubtipoBarreiraCreateWithoutSubtipoInput, SubtipoBarreiraUncheckedCreateWithoutSubtipoInput> | SubtipoBarreiraCreateWithoutSubtipoInput[] | SubtipoBarreiraUncheckedCreateWithoutSubtipoInput[]
    connectOrCreate?: SubtipoBarreiraCreateOrConnectWithoutSubtipoInput | SubtipoBarreiraCreateOrConnectWithoutSubtipoInput[]
    upsert?: SubtipoBarreiraUpsertWithWhereUniqueWithoutSubtipoInput | SubtipoBarreiraUpsertWithWhereUniqueWithoutSubtipoInput[]
    createMany?: SubtipoBarreiraCreateManySubtipoInputEnvelope
    set?: SubtipoBarreiraWhereUniqueInput | SubtipoBarreiraWhereUniqueInput[]
    disconnect?: SubtipoBarreiraWhereUniqueInput | SubtipoBarreiraWhereUniqueInput[]
    delete?: SubtipoBarreiraWhereUniqueInput | SubtipoBarreiraWhereUniqueInput[]
    connect?: SubtipoBarreiraWhereUniqueInput | SubtipoBarreiraWhereUniqueInput[]
    update?: SubtipoBarreiraUpdateWithWhereUniqueWithoutSubtipoInput | SubtipoBarreiraUpdateWithWhereUniqueWithoutSubtipoInput[]
    updateMany?: SubtipoBarreiraUpdateManyWithWhereWithoutSubtipoInput | SubtipoBarreiraUpdateManyWithWhereWithoutSubtipoInput[]
    deleteMany?: SubtipoBarreiraScalarWhereInput | SubtipoBarreiraScalarWhereInput[]
  }

  export type SubtipoBarreiraCreateNestedManyWithoutBarreiraInput = {
    create?: XOR<SubtipoBarreiraCreateWithoutBarreiraInput, SubtipoBarreiraUncheckedCreateWithoutBarreiraInput> | SubtipoBarreiraCreateWithoutBarreiraInput[] | SubtipoBarreiraUncheckedCreateWithoutBarreiraInput[]
    connectOrCreate?: SubtipoBarreiraCreateOrConnectWithoutBarreiraInput | SubtipoBarreiraCreateOrConnectWithoutBarreiraInput[]
    createMany?: SubtipoBarreiraCreateManyBarreiraInputEnvelope
    connect?: SubtipoBarreiraWhereUniqueInput | SubtipoBarreiraWhereUniqueInput[]
  }

  export type BarreiraAcessibilidadeCreateNestedManyWithoutBarreiraInput = {
    create?: XOR<BarreiraAcessibilidadeCreateWithoutBarreiraInput, BarreiraAcessibilidadeUncheckedCreateWithoutBarreiraInput> | BarreiraAcessibilidadeCreateWithoutBarreiraInput[] | BarreiraAcessibilidadeUncheckedCreateWithoutBarreiraInput[]
    connectOrCreate?: BarreiraAcessibilidadeCreateOrConnectWithoutBarreiraInput | BarreiraAcessibilidadeCreateOrConnectWithoutBarreiraInput[]
    createMany?: BarreiraAcessibilidadeCreateManyBarreiraInputEnvelope
    connect?: BarreiraAcessibilidadeWhereUniqueInput | BarreiraAcessibilidadeWhereUniqueInput[]
  }

  export type SubtipoBarreiraUncheckedCreateNestedManyWithoutBarreiraInput = {
    create?: XOR<SubtipoBarreiraCreateWithoutBarreiraInput, SubtipoBarreiraUncheckedCreateWithoutBarreiraInput> | SubtipoBarreiraCreateWithoutBarreiraInput[] | SubtipoBarreiraUncheckedCreateWithoutBarreiraInput[]
    connectOrCreate?: SubtipoBarreiraCreateOrConnectWithoutBarreiraInput | SubtipoBarreiraCreateOrConnectWithoutBarreiraInput[]
    createMany?: SubtipoBarreiraCreateManyBarreiraInputEnvelope
    connect?: SubtipoBarreiraWhereUniqueInput | SubtipoBarreiraWhereUniqueInput[]
  }

  export type BarreiraAcessibilidadeUncheckedCreateNestedManyWithoutBarreiraInput = {
    create?: XOR<BarreiraAcessibilidadeCreateWithoutBarreiraInput, BarreiraAcessibilidadeUncheckedCreateWithoutBarreiraInput> | BarreiraAcessibilidadeCreateWithoutBarreiraInput[] | BarreiraAcessibilidadeUncheckedCreateWithoutBarreiraInput[]
    connectOrCreate?: BarreiraAcessibilidadeCreateOrConnectWithoutBarreiraInput | BarreiraAcessibilidadeCreateOrConnectWithoutBarreiraInput[]
    createMany?: BarreiraAcessibilidadeCreateManyBarreiraInputEnvelope
    connect?: BarreiraAcessibilidadeWhereUniqueInput | BarreiraAcessibilidadeWhereUniqueInput[]
  }

  export type SubtipoBarreiraUpdateManyWithoutBarreiraNestedInput = {
    create?: XOR<SubtipoBarreiraCreateWithoutBarreiraInput, SubtipoBarreiraUncheckedCreateWithoutBarreiraInput> | SubtipoBarreiraCreateWithoutBarreiraInput[] | SubtipoBarreiraUncheckedCreateWithoutBarreiraInput[]
    connectOrCreate?: SubtipoBarreiraCreateOrConnectWithoutBarreiraInput | SubtipoBarreiraCreateOrConnectWithoutBarreiraInput[]
    upsert?: SubtipoBarreiraUpsertWithWhereUniqueWithoutBarreiraInput | SubtipoBarreiraUpsertWithWhereUniqueWithoutBarreiraInput[]
    createMany?: SubtipoBarreiraCreateManyBarreiraInputEnvelope
    set?: SubtipoBarreiraWhereUniqueInput | SubtipoBarreiraWhereUniqueInput[]
    disconnect?: SubtipoBarreiraWhereUniqueInput | SubtipoBarreiraWhereUniqueInput[]
    delete?: SubtipoBarreiraWhereUniqueInput | SubtipoBarreiraWhereUniqueInput[]
    connect?: SubtipoBarreiraWhereUniqueInput | SubtipoBarreiraWhereUniqueInput[]
    update?: SubtipoBarreiraUpdateWithWhereUniqueWithoutBarreiraInput | SubtipoBarreiraUpdateWithWhereUniqueWithoutBarreiraInput[]
    updateMany?: SubtipoBarreiraUpdateManyWithWhereWithoutBarreiraInput | SubtipoBarreiraUpdateManyWithWhereWithoutBarreiraInput[]
    deleteMany?: SubtipoBarreiraScalarWhereInput | SubtipoBarreiraScalarWhereInput[]
  }

  export type BarreiraAcessibilidadeUpdateManyWithoutBarreiraNestedInput = {
    create?: XOR<BarreiraAcessibilidadeCreateWithoutBarreiraInput, BarreiraAcessibilidadeUncheckedCreateWithoutBarreiraInput> | BarreiraAcessibilidadeCreateWithoutBarreiraInput[] | BarreiraAcessibilidadeUncheckedCreateWithoutBarreiraInput[]
    connectOrCreate?: BarreiraAcessibilidadeCreateOrConnectWithoutBarreiraInput | BarreiraAcessibilidadeCreateOrConnectWithoutBarreiraInput[]
    upsert?: BarreiraAcessibilidadeUpsertWithWhereUniqueWithoutBarreiraInput | BarreiraAcessibilidadeUpsertWithWhereUniqueWithoutBarreiraInput[]
    createMany?: BarreiraAcessibilidadeCreateManyBarreiraInputEnvelope
    set?: BarreiraAcessibilidadeWhereUniqueInput | BarreiraAcessibilidadeWhereUniqueInput[]
    disconnect?: BarreiraAcessibilidadeWhereUniqueInput | BarreiraAcessibilidadeWhereUniqueInput[]
    delete?: BarreiraAcessibilidadeWhereUniqueInput | BarreiraAcessibilidadeWhereUniqueInput[]
    connect?: BarreiraAcessibilidadeWhereUniqueInput | BarreiraAcessibilidadeWhereUniqueInput[]
    update?: BarreiraAcessibilidadeUpdateWithWhereUniqueWithoutBarreiraInput | BarreiraAcessibilidadeUpdateWithWhereUniqueWithoutBarreiraInput[]
    updateMany?: BarreiraAcessibilidadeUpdateManyWithWhereWithoutBarreiraInput | BarreiraAcessibilidadeUpdateManyWithWhereWithoutBarreiraInput[]
    deleteMany?: BarreiraAcessibilidadeScalarWhereInput | BarreiraAcessibilidadeScalarWhereInput[]
  }

  export type SubtipoBarreiraUncheckedUpdateManyWithoutBarreiraNestedInput = {
    create?: XOR<SubtipoBarreiraCreateWithoutBarreiraInput, SubtipoBarreiraUncheckedCreateWithoutBarreiraInput> | SubtipoBarreiraCreateWithoutBarreiraInput[] | SubtipoBarreiraUncheckedCreateWithoutBarreiraInput[]
    connectOrCreate?: SubtipoBarreiraCreateOrConnectWithoutBarreiraInput | SubtipoBarreiraCreateOrConnectWithoutBarreiraInput[]
    upsert?: SubtipoBarreiraUpsertWithWhereUniqueWithoutBarreiraInput | SubtipoBarreiraUpsertWithWhereUniqueWithoutBarreiraInput[]
    createMany?: SubtipoBarreiraCreateManyBarreiraInputEnvelope
    set?: SubtipoBarreiraWhereUniqueInput | SubtipoBarreiraWhereUniqueInput[]
    disconnect?: SubtipoBarreiraWhereUniqueInput | SubtipoBarreiraWhereUniqueInput[]
    delete?: SubtipoBarreiraWhereUniqueInput | SubtipoBarreiraWhereUniqueInput[]
    connect?: SubtipoBarreiraWhereUniqueInput | SubtipoBarreiraWhereUniqueInput[]
    update?: SubtipoBarreiraUpdateWithWhereUniqueWithoutBarreiraInput | SubtipoBarreiraUpdateWithWhereUniqueWithoutBarreiraInput[]
    updateMany?: SubtipoBarreiraUpdateManyWithWhereWithoutBarreiraInput | SubtipoBarreiraUpdateManyWithWhereWithoutBarreiraInput[]
    deleteMany?: SubtipoBarreiraScalarWhereInput | SubtipoBarreiraScalarWhereInput[]
  }

  export type BarreiraAcessibilidadeUncheckedUpdateManyWithoutBarreiraNestedInput = {
    create?: XOR<BarreiraAcessibilidadeCreateWithoutBarreiraInput, BarreiraAcessibilidadeUncheckedCreateWithoutBarreiraInput> | BarreiraAcessibilidadeCreateWithoutBarreiraInput[] | BarreiraAcessibilidadeUncheckedCreateWithoutBarreiraInput[]
    connectOrCreate?: BarreiraAcessibilidadeCreateOrConnectWithoutBarreiraInput | BarreiraAcessibilidadeCreateOrConnectWithoutBarreiraInput[]
    upsert?: BarreiraAcessibilidadeUpsertWithWhereUniqueWithoutBarreiraInput | BarreiraAcessibilidadeUpsertWithWhereUniqueWithoutBarreiraInput[]
    createMany?: BarreiraAcessibilidadeCreateManyBarreiraInputEnvelope
    set?: BarreiraAcessibilidadeWhereUniqueInput | BarreiraAcessibilidadeWhereUniqueInput[]
    disconnect?: BarreiraAcessibilidadeWhereUniqueInput | BarreiraAcessibilidadeWhereUniqueInput[]
    delete?: BarreiraAcessibilidadeWhereUniqueInput | BarreiraAcessibilidadeWhereUniqueInput[]
    connect?: BarreiraAcessibilidadeWhereUniqueInput | BarreiraAcessibilidadeWhereUniqueInput[]
    update?: BarreiraAcessibilidadeUpdateWithWhereUniqueWithoutBarreiraInput | BarreiraAcessibilidadeUpdateWithWhereUniqueWithoutBarreiraInput[]
    updateMany?: BarreiraAcessibilidadeUpdateManyWithWhereWithoutBarreiraInput | BarreiraAcessibilidadeUpdateManyWithWhereWithoutBarreiraInput[]
    deleteMany?: BarreiraAcessibilidadeScalarWhereInput | BarreiraAcessibilidadeScalarWhereInput[]
  }

  export type BarreiraAcessibilidadeCreateNestedManyWithoutAcessibilidadeInput = {
    create?: XOR<BarreiraAcessibilidadeCreateWithoutAcessibilidadeInput, BarreiraAcessibilidadeUncheckedCreateWithoutAcessibilidadeInput> | BarreiraAcessibilidadeCreateWithoutAcessibilidadeInput[] | BarreiraAcessibilidadeUncheckedCreateWithoutAcessibilidadeInput[]
    connectOrCreate?: BarreiraAcessibilidadeCreateOrConnectWithoutAcessibilidadeInput | BarreiraAcessibilidadeCreateOrConnectWithoutAcessibilidadeInput[]
    createMany?: BarreiraAcessibilidadeCreateManyAcessibilidadeInputEnvelope
    connect?: BarreiraAcessibilidadeWhereUniqueInput | BarreiraAcessibilidadeWhereUniqueInput[]
  }

  export type BarreiraAcessibilidadeUncheckedCreateNestedManyWithoutAcessibilidadeInput = {
    create?: XOR<BarreiraAcessibilidadeCreateWithoutAcessibilidadeInput, BarreiraAcessibilidadeUncheckedCreateWithoutAcessibilidadeInput> | BarreiraAcessibilidadeCreateWithoutAcessibilidadeInput[] | BarreiraAcessibilidadeUncheckedCreateWithoutAcessibilidadeInput[]
    connectOrCreate?: BarreiraAcessibilidadeCreateOrConnectWithoutAcessibilidadeInput | BarreiraAcessibilidadeCreateOrConnectWithoutAcessibilidadeInput[]
    createMany?: BarreiraAcessibilidadeCreateManyAcessibilidadeInputEnvelope
    connect?: BarreiraAcessibilidadeWhereUniqueInput | BarreiraAcessibilidadeWhereUniqueInput[]
  }

  export type BarreiraAcessibilidadeUpdateManyWithoutAcessibilidadeNestedInput = {
    create?: XOR<BarreiraAcessibilidadeCreateWithoutAcessibilidadeInput, BarreiraAcessibilidadeUncheckedCreateWithoutAcessibilidadeInput> | BarreiraAcessibilidadeCreateWithoutAcessibilidadeInput[] | BarreiraAcessibilidadeUncheckedCreateWithoutAcessibilidadeInput[]
    connectOrCreate?: BarreiraAcessibilidadeCreateOrConnectWithoutAcessibilidadeInput | BarreiraAcessibilidadeCreateOrConnectWithoutAcessibilidadeInput[]
    upsert?: BarreiraAcessibilidadeUpsertWithWhereUniqueWithoutAcessibilidadeInput | BarreiraAcessibilidadeUpsertWithWhereUniqueWithoutAcessibilidadeInput[]
    createMany?: BarreiraAcessibilidadeCreateManyAcessibilidadeInputEnvelope
    set?: BarreiraAcessibilidadeWhereUniqueInput | BarreiraAcessibilidadeWhereUniqueInput[]
    disconnect?: BarreiraAcessibilidadeWhereUniqueInput | BarreiraAcessibilidadeWhereUniqueInput[]
    delete?: BarreiraAcessibilidadeWhereUniqueInput | BarreiraAcessibilidadeWhereUniqueInput[]
    connect?: BarreiraAcessibilidadeWhereUniqueInput | BarreiraAcessibilidadeWhereUniqueInput[]
    update?: BarreiraAcessibilidadeUpdateWithWhereUniqueWithoutAcessibilidadeInput | BarreiraAcessibilidadeUpdateWithWhereUniqueWithoutAcessibilidadeInput[]
    updateMany?: BarreiraAcessibilidadeUpdateManyWithWhereWithoutAcessibilidadeInput | BarreiraAcessibilidadeUpdateManyWithWhereWithoutAcessibilidadeInput[]
    deleteMany?: BarreiraAcessibilidadeScalarWhereInput | BarreiraAcessibilidadeScalarWhereInput[]
  }

  export type BarreiraAcessibilidadeUncheckedUpdateManyWithoutAcessibilidadeNestedInput = {
    create?: XOR<BarreiraAcessibilidadeCreateWithoutAcessibilidadeInput, BarreiraAcessibilidadeUncheckedCreateWithoutAcessibilidadeInput> | BarreiraAcessibilidadeCreateWithoutAcessibilidadeInput[] | BarreiraAcessibilidadeUncheckedCreateWithoutAcessibilidadeInput[]
    connectOrCreate?: BarreiraAcessibilidadeCreateOrConnectWithoutAcessibilidadeInput | BarreiraAcessibilidadeCreateOrConnectWithoutAcessibilidadeInput[]
    upsert?: BarreiraAcessibilidadeUpsertWithWhereUniqueWithoutAcessibilidadeInput | BarreiraAcessibilidadeUpsertWithWhereUniqueWithoutAcessibilidadeInput[]
    createMany?: BarreiraAcessibilidadeCreateManyAcessibilidadeInputEnvelope
    set?: BarreiraAcessibilidadeWhereUniqueInput | BarreiraAcessibilidadeWhereUniqueInput[]
    disconnect?: BarreiraAcessibilidadeWhereUniqueInput | BarreiraAcessibilidadeWhereUniqueInput[]
    delete?: BarreiraAcessibilidadeWhereUniqueInput | BarreiraAcessibilidadeWhereUniqueInput[]
    connect?: BarreiraAcessibilidadeWhereUniqueInput | BarreiraAcessibilidadeWhereUniqueInput[]
    update?: BarreiraAcessibilidadeUpdateWithWhereUniqueWithoutAcessibilidadeInput | BarreiraAcessibilidadeUpdateWithWhereUniqueWithoutAcessibilidadeInput[]
    updateMany?: BarreiraAcessibilidadeUpdateManyWithWhereWithoutAcessibilidadeInput | BarreiraAcessibilidadeUpdateManyWithWhereWithoutAcessibilidadeInput[]
    deleteMany?: BarreiraAcessibilidadeScalarWhereInput | BarreiraAcessibilidadeScalarWhereInput[]
  }

  export type SubtipoDeficienciaCreateNestedOneWithoutBarreirasInput = {
    create?: XOR<SubtipoDeficienciaCreateWithoutBarreirasInput, SubtipoDeficienciaUncheckedCreateWithoutBarreirasInput>
    connectOrCreate?: SubtipoDeficienciaCreateOrConnectWithoutBarreirasInput
    connect?: SubtipoDeficienciaWhereUniqueInput
  }

  export type BarreiraCreateNestedOneWithoutSubtiposInput = {
    create?: XOR<BarreiraCreateWithoutSubtiposInput, BarreiraUncheckedCreateWithoutSubtiposInput>
    connectOrCreate?: BarreiraCreateOrConnectWithoutSubtiposInput
    connect?: BarreiraWhereUniqueInput
  }

  export type SubtipoDeficienciaUpdateOneRequiredWithoutBarreirasNestedInput = {
    create?: XOR<SubtipoDeficienciaCreateWithoutBarreirasInput, SubtipoDeficienciaUncheckedCreateWithoutBarreirasInput>
    connectOrCreate?: SubtipoDeficienciaCreateOrConnectWithoutBarreirasInput
    upsert?: SubtipoDeficienciaUpsertWithoutBarreirasInput
    connect?: SubtipoDeficienciaWhereUniqueInput
    update?: XOR<XOR<SubtipoDeficienciaUpdateToOneWithWhereWithoutBarreirasInput, SubtipoDeficienciaUpdateWithoutBarreirasInput>, SubtipoDeficienciaUncheckedUpdateWithoutBarreirasInput>
  }

  export type BarreiraUpdateOneRequiredWithoutSubtiposNestedInput = {
    create?: XOR<BarreiraCreateWithoutSubtiposInput, BarreiraUncheckedCreateWithoutSubtiposInput>
    connectOrCreate?: BarreiraCreateOrConnectWithoutSubtiposInput
    upsert?: BarreiraUpsertWithoutSubtiposInput
    connect?: BarreiraWhereUniqueInput
    update?: XOR<XOR<BarreiraUpdateToOneWithWhereWithoutSubtiposInput, BarreiraUpdateWithoutSubtiposInput>, BarreiraUncheckedUpdateWithoutSubtiposInput>
  }

  export type BarreiraCreateNestedOneWithoutAcessibilidadesInput = {
    create?: XOR<BarreiraCreateWithoutAcessibilidadesInput, BarreiraUncheckedCreateWithoutAcessibilidadesInput>
    connectOrCreate?: BarreiraCreateOrConnectWithoutAcessibilidadesInput
    connect?: BarreiraWhereUniqueInput
  }

  export type AcessibilidadeCreateNestedOneWithoutBarreirasInput = {
    create?: XOR<AcessibilidadeCreateWithoutBarreirasInput, AcessibilidadeUncheckedCreateWithoutBarreirasInput>
    connectOrCreate?: AcessibilidadeCreateOrConnectWithoutBarreirasInput
    connect?: AcessibilidadeWhereUniqueInput
  }

  export type BarreiraUpdateOneRequiredWithoutAcessibilidadesNestedInput = {
    create?: XOR<BarreiraCreateWithoutAcessibilidadesInput, BarreiraUncheckedCreateWithoutAcessibilidadesInput>
    connectOrCreate?: BarreiraCreateOrConnectWithoutAcessibilidadesInput
    upsert?: BarreiraUpsertWithoutAcessibilidadesInput
    connect?: BarreiraWhereUniqueInput
    update?: XOR<XOR<BarreiraUpdateToOneWithWhereWithoutAcessibilidadesInput, BarreiraUpdateWithoutAcessibilidadesInput>, BarreiraUncheckedUpdateWithoutAcessibilidadesInput>
  }

  export type AcessibilidadeUpdateOneRequiredWithoutBarreirasNestedInput = {
    create?: XOR<AcessibilidadeCreateWithoutBarreirasInput, AcessibilidadeUncheckedCreateWithoutBarreirasInput>
    connectOrCreate?: AcessibilidadeCreateOrConnectWithoutBarreirasInput
    upsert?: AcessibilidadeUpsertWithoutBarreirasInput
    connect?: AcessibilidadeWhereUniqueInput
    update?: XOR<XOR<AcessibilidadeUpdateToOneWithWhereWithoutBarreirasInput, AcessibilidadeUpdateWithoutBarreirasInput>, AcessibilidadeUncheckedUpdateWithoutBarreirasInput>
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

  export type SubtipoDeficienciaCreateWithoutTipoInput = {
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
    barreiras?: SubtipoBarreiraCreateNestedManyWithoutSubtipoInput
  }

  export type SubtipoDeficienciaUncheckedCreateWithoutTipoInput = {
    id?: number
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
    barreiras?: SubtipoBarreiraUncheckedCreateNestedManyWithoutSubtipoInput
  }

  export type SubtipoDeficienciaCreateOrConnectWithoutTipoInput = {
    where: SubtipoDeficienciaWhereUniqueInput
    create: XOR<SubtipoDeficienciaCreateWithoutTipoInput, SubtipoDeficienciaUncheckedCreateWithoutTipoInput>
  }

  export type SubtipoDeficienciaCreateManyTipoInputEnvelope = {
    data: SubtipoDeficienciaCreateManyTipoInput | SubtipoDeficienciaCreateManyTipoInput[]
    skipDuplicates?: boolean
  }

  export type SubtipoDeficienciaUpsertWithWhereUniqueWithoutTipoInput = {
    where: SubtipoDeficienciaWhereUniqueInput
    update: XOR<SubtipoDeficienciaUpdateWithoutTipoInput, SubtipoDeficienciaUncheckedUpdateWithoutTipoInput>
    create: XOR<SubtipoDeficienciaCreateWithoutTipoInput, SubtipoDeficienciaUncheckedCreateWithoutTipoInput>
  }

  export type SubtipoDeficienciaUpdateWithWhereUniqueWithoutTipoInput = {
    where: SubtipoDeficienciaWhereUniqueInput
    data: XOR<SubtipoDeficienciaUpdateWithoutTipoInput, SubtipoDeficienciaUncheckedUpdateWithoutTipoInput>
  }

  export type SubtipoDeficienciaUpdateManyWithWhereWithoutTipoInput = {
    where: SubtipoDeficienciaScalarWhereInput
    data: XOR<SubtipoDeficienciaUpdateManyMutationInput, SubtipoDeficienciaUncheckedUpdateManyWithoutTipoInput>
  }

  export type SubtipoDeficienciaScalarWhereInput = {
    AND?: SubtipoDeficienciaScalarWhereInput | SubtipoDeficienciaScalarWhereInput[]
    OR?: SubtipoDeficienciaScalarWhereInput[]
    NOT?: SubtipoDeficienciaScalarWhereInput | SubtipoDeficienciaScalarWhereInput[]
    id?: IntFilter<"SubtipoDeficiencia"> | number
    nome?: StringFilter<"SubtipoDeficiencia"> | string
    tipoId?: IntFilter<"SubtipoDeficiencia"> | number
    createdAt?: DateTimeFilter<"SubtipoDeficiencia"> | Date | string
    updatedAt?: DateTimeFilter<"SubtipoDeficiencia"> | Date | string
  }

  export type TipoDeficienciaCreateWithoutSubtiposInput = {
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TipoDeficienciaUncheckedCreateWithoutSubtiposInput = {
    id?: number
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TipoDeficienciaCreateOrConnectWithoutSubtiposInput = {
    where: TipoDeficienciaWhereUniqueInput
    create: XOR<TipoDeficienciaCreateWithoutSubtiposInput, TipoDeficienciaUncheckedCreateWithoutSubtiposInput>
  }

  export type SubtipoBarreiraCreateWithoutSubtipoInput = {
    barreira: BarreiraCreateNestedOneWithoutSubtiposInput
  }

  export type SubtipoBarreiraUncheckedCreateWithoutSubtipoInput = {
    barreiraId: number
  }

  export type SubtipoBarreiraCreateOrConnectWithoutSubtipoInput = {
    where: SubtipoBarreiraWhereUniqueInput
    create: XOR<SubtipoBarreiraCreateWithoutSubtipoInput, SubtipoBarreiraUncheckedCreateWithoutSubtipoInput>
  }

  export type SubtipoBarreiraCreateManySubtipoInputEnvelope = {
    data: SubtipoBarreiraCreateManySubtipoInput | SubtipoBarreiraCreateManySubtipoInput[]
    skipDuplicates?: boolean
  }

  export type TipoDeficienciaUpsertWithoutSubtiposInput = {
    update: XOR<TipoDeficienciaUpdateWithoutSubtiposInput, TipoDeficienciaUncheckedUpdateWithoutSubtiposInput>
    create: XOR<TipoDeficienciaCreateWithoutSubtiposInput, TipoDeficienciaUncheckedCreateWithoutSubtiposInput>
    where?: TipoDeficienciaWhereInput
  }

  export type TipoDeficienciaUpdateToOneWithWhereWithoutSubtiposInput = {
    where?: TipoDeficienciaWhereInput
    data: XOR<TipoDeficienciaUpdateWithoutSubtiposInput, TipoDeficienciaUncheckedUpdateWithoutSubtiposInput>
  }

  export type TipoDeficienciaUpdateWithoutSubtiposInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoDeficienciaUncheckedUpdateWithoutSubtiposInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubtipoBarreiraUpsertWithWhereUniqueWithoutSubtipoInput = {
    where: SubtipoBarreiraWhereUniqueInput
    update: XOR<SubtipoBarreiraUpdateWithoutSubtipoInput, SubtipoBarreiraUncheckedUpdateWithoutSubtipoInput>
    create: XOR<SubtipoBarreiraCreateWithoutSubtipoInput, SubtipoBarreiraUncheckedCreateWithoutSubtipoInput>
  }

  export type SubtipoBarreiraUpdateWithWhereUniqueWithoutSubtipoInput = {
    where: SubtipoBarreiraWhereUniqueInput
    data: XOR<SubtipoBarreiraUpdateWithoutSubtipoInput, SubtipoBarreiraUncheckedUpdateWithoutSubtipoInput>
  }

  export type SubtipoBarreiraUpdateManyWithWhereWithoutSubtipoInput = {
    where: SubtipoBarreiraScalarWhereInput
    data: XOR<SubtipoBarreiraUpdateManyMutationInput, SubtipoBarreiraUncheckedUpdateManyWithoutSubtipoInput>
  }

  export type SubtipoBarreiraScalarWhereInput = {
    AND?: SubtipoBarreiraScalarWhereInput | SubtipoBarreiraScalarWhereInput[]
    OR?: SubtipoBarreiraScalarWhereInput[]
    NOT?: SubtipoBarreiraScalarWhereInput | SubtipoBarreiraScalarWhereInput[]
    subtipoId?: IntFilter<"SubtipoBarreira"> | number
    barreiraId?: IntFilter<"SubtipoBarreira"> | number
  }

  export type SubtipoBarreiraCreateWithoutBarreiraInput = {
    subtipo: SubtipoDeficienciaCreateNestedOneWithoutBarreirasInput
  }

  export type SubtipoBarreiraUncheckedCreateWithoutBarreiraInput = {
    subtipoId: number
  }

  export type SubtipoBarreiraCreateOrConnectWithoutBarreiraInput = {
    where: SubtipoBarreiraWhereUniqueInput
    create: XOR<SubtipoBarreiraCreateWithoutBarreiraInput, SubtipoBarreiraUncheckedCreateWithoutBarreiraInput>
  }

  export type SubtipoBarreiraCreateManyBarreiraInputEnvelope = {
    data: SubtipoBarreiraCreateManyBarreiraInput | SubtipoBarreiraCreateManyBarreiraInput[]
    skipDuplicates?: boolean
  }

  export type BarreiraAcessibilidadeCreateWithoutBarreiraInput = {
    acessibilidade: AcessibilidadeCreateNestedOneWithoutBarreirasInput
  }

  export type BarreiraAcessibilidadeUncheckedCreateWithoutBarreiraInput = {
    acessibilidadeId: number
  }

  export type BarreiraAcessibilidadeCreateOrConnectWithoutBarreiraInput = {
    where: BarreiraAcessibilidadeWhereUniqueInput
    create: XOR<BarreiraAcessibilidadeCreateWithoutBarreiraInput, BarreiraAcessibilidadeUncheckedCreateWithoutBarreiraInput>
  }

  export type BarreiraAcessibilidadeCreateManyBarreiraInputEnvelope = {
    data: BarreiraAcessibilidadeCreateManyBarreiraInput | BarreiraAcessibilidadeCreateManyBarreiraInput[]
    skipDuplicates?: boolean
  }

  export type SubtipoBarreiraUpsertWithWhereUniqueWithoutBarreiraInput = {
    where: SubtipoBarreiraWhereUniqueInput
    update: XOR<SubtipoBarreiraUpdateWithoutBarreiraInput, SubtipoBarreiraUncheckedUpdateWithoutBarreiraInput>
    create: XOR<SubtipoBarreiraCreateWithoutBarreiraInput, SubtipoBarreiraUncheckedCreateWithoutBarreiraInput>
  }

  export type SubtipoBarreiraUpdateWithWhereUniqueWithoutBarreiraInput = {
    where: SubtipoBarreiraWhereUniqueInput
    data: XOR<SubtipoBarreiraUpdateWithoutBarreiraInput, SubtipoBarreiraUncheckedUpdateWithoutBarreiraInput>
  }

  export type SubtipoBarreiraUpdateManyWithWhereWithoutBarreiraInput = {
    where: SubtipoBarreiraScalarWhereInput
    data: XOR<SubtipoBarreiraUpdateManyMutationInput, SubtipoBarreiraUncheckedUpdateManyWithoutBarreiraInput>
  }

  export type BarreiraAcessibilidadeUpsertWithWhereUniqueWithoutBarreiraInput = {
    where: BarreiraAcessibilidadeWhereUniqueInput
    update: XOR<BarreiraAcessibilidadeUpdateWithoutBarreiraInput, BarreiraAcessibilidadeUncheckedUpdateWithoutBarreiraInput>
    create: XOR<BarreiraAcessibilidadeCreateWithoutBarreiraInput, BarreiraAcessibilidadeUncheckedCreateWithoutBarreiraInput>
  }

  export type BarreiraAcessibilidadeUpdateWithWhereUniqueWithoutBarreiraInput = {
    where: BarreiraAcessibilidadeWhereUniqueInput
    data: XOR<BarreiraAcessibilidadeUpdateWithoutBarreiraInput, BarreiraAcessibilidadeUncheckedUpdateWithoutBarreiraInput>
  }

  export type BarreiraAcessibilidadeUpdateManyWithWhereWithoutBarreiraInput = {
    where: BarreiraAcessibilidadeScalarWhereInput
    data: XOR<BarreiraAcessibilidadeUpdateManyMutationInput, BarreiraAcessibilidadeUncheckedUpdateManyWithoutBarreiraInput>
  }

  export type BarreiraAcessibilidadeScalarWhereInput = {
    AND?: BarreiraAcessibilidadeScalarWhereInput | BarreiraAcessibilidadeScalarWhereInput[]
    OR?: BarreiraAcessibilidadeScalarWhereInput[]
    NOT?: BarreiraAcessibilidadeScalarWhereInput | BarreiraAcessibilidadeScalarWhereInput[]
    barreiraId?: IntFilter<"BarreiraAcessibilidade"> | number
    acessibilidadeId?: IntFilter<"BarreiraAcessibilidade"> | number
  }

  export type BarreiraAcessibilidadeCreateWithoutAcessibilidadeInput = {
    barreira: BarreiraCreateNestedOneWithoutAcessibilidadesInput
  }

  export type BarreiraAcessibilidadeUncheckedCreateWithoutAcessibilidadeInput = {
    barreiraId: number
  }

  export type BarreiraAcessibilidadeCreateOrConnectWithoutAcessibilidadeInput = {
    where: BarreiraAcessibilidadeWhereUniqueInput
    create: XOR<BarreiraAcessibilidadeCreateWithoutAcessibilidadeInput, BarreiraAcessibilidadeUncheckedCreateWithoutAcessibilidadeInput>
  }

  export type BarreiraAcessibilidadeCreateManyAcessibilidadeInputEnvelope = {
    data: BarreiraAcessibilidadeCreateManyAcessibilidadeInput | BarreiraAcessibilidadeCreateManyAcessibilidadeInput[]
    skipDuplicates?: boolean
  }

  export type BarreiraAcessibilidadeUpsertWithWhereUniqueWithoutAcessibilidadeInput = {
    where: BarreiraAcessibilidadeWhereUniqueInput
    update: XOR<BarreiraAcessibilidadeUpdateWithoutAcessibilidadeInput, BarreiraAcessibilidadeUncheckedUpdateWithoutAcessibilidadeInput>
    create: XOR<BarreiraAcessibilidadeCreateWithoutAcessibilidadeInput, BarreiraAcessibilidadeUncheckedCreateWithoutAcessibilidadeInput>
  }

  export type BarreiraAcessibilidadeUpdateWithWhereUniqueWithoutAcessibilidadeInput = {
    where: BarreiraAcessibilidadeWhereUniqueInput
    data: XOR<BarreiraAcessibilidadeUpdateWithoutAcessibilidadeInput, BarreiraAcessibilidadeUncheckedUpdateWithoutAcessibilidadeInput>
  }

  export type BarreiraAcessibilidadeUpdateManyWithWhereWithoutAcessibilidadeInput = {
    where: BarreiraAcessibilidadeScalarWhereInput
    data: XOR<BarreiraAcessibilidadeUpdateManyMutationInput, BarreiraAcessibilidadeUncheckedUpdateManyWithoutAcessibilidadeInput>
  }

  export type SubtipoDeficienciaCreateWithoutBarreirasInput = {
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tipo: TipoDeficienciaCreateNestedOneWithoutSubtiposInput
  }

  export type SubtipoDeficienciaUncheckedCreateWithoutBarreirasInput = {
    id?: number
    nome: string
    tipoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubtipoDeficienciaCreateOrConnectWithoutBarreirasInput = {
    where: SubtipoDeficienciaWhereUniqueInput
    create: XOR<SubtipoDeficienciaCreateWithoutBarreirasInput, SubtipoDeficienciaUncheckedCreateWithoutBarreirasInput>
  }

  export type BarreiraCreateWithoutSubtiposInput = {
    descricao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    acessibilidades?: BarreiraAcessibilidadeCreateNestedManyWithoutBarreiraInput
  }

  export type BarreiraUncheckedCreateWithoutSubtiposInput = {
    id?: number
    descricao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    acessibilidades?: BarreiraAcessibilidadeUncheckedCreateNestedManyWithoutBarreiraInput
  }

  export type BarreiraCreateOrConnectWithoutSubtiposInput = {
    where: BarreiraWhereUniqueInput
    create: XOR<BarreiraCreateWithoutSubtiposInput, BarreiraUncheckedCreateWithoutSubtiposInput>
  }

  export type SubtipoDeficienciaUpsertWithoutBarreirasInput = {
    update: XOR<SubtipoDeficienciaUpdateWithoutBarreirasInput, SubtipoDeficienciaUncheckedUpdateWithoutBarreirasInput>
    create: XOR<SubtipoDeficienciaCreateWithoutBarreirasInput, SubtipoDeficienciaUncheckedCreateWithoutBarreirasInput>
    where?: SubtipoDeficienciaWhereInput
  }

  export type SubtipoDeficienciaUpdateToOneWithWhereWithoutBarreirasInput = {
    where?: SubtipoDeficienciaWhereInput
    data: XOR<SubtipoDeficienciaUpdateWithoutBarreirasInput, SubtipoDeficienciaUncheckedUpdateWithoutBarreirasInput>
  }

  export type SubtipoDeficienciaUpdateWithoutBarreirasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: TipoDeficienciaUpdateOneRequiredWithoutSubtiposNestedInput
  }

  export type SubtipoDeficienciaUncheckedUpdateWithoutBarreirasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarreiraUpsertWithoutSubtiposInput = {
    update: XOR<BarreiraUpdateWithoutSubtiposInput, BarreiraUncheckedUpdateWithoutSubtiposInput>
    create: XOR<BarreiraCreateWithoutSubtiposInput, BarreiraUncheckedCreateWithoutSubtiposInput>
    where?: BarreiraWhereInput
  }

  export type BarreiraUpdateToOneWithWhereWithoutSubtiposInput = {
    where?: BarreiraWhereInput
    data: XOR<BarreiraUpdateWithoutSubtiposInput, BarreiraUncheckedUpdateWithoutSubtiposInput>
  }

  export type BarreiraUpdateWithoutSubtiposInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acessibilidades?: BarreiraAcessibilidadeUpdateManyWithoutBarreiraNestedInput
  }

  export type BarreiraUncheckedUpdateWithoutSubtiposInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acessibilidades?: BarreiraAcessibilidadeUncheckedUpdateManyWithoutBarreiraNestedInput
  }

  export type BarreiraCreateWithoutAcessibilidadesInput = {
    descricao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subtipos?: SubtipoBarreiraCreateNestedManyWithoutBarreiraInput
  }

  export type BarreiraUncheckedCreateWithoutAcessibilidadesInput = {
    id?: number
    descricao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subtipos?: SubtipoBarreiraUncheckedCreateNestedManyWithoutBarreiraInput
  }

  export type BarreiraCreateOrConnectWithoutAcessibilidadesInput = {
    where: BarreiraWhereUniqueInput
    create: XOR<BarreiraCreateWithoutAcessibilidadesInput, BarreiraUncheckedCreateWithoutAcessibilidadesInput>
  }

  export type AcessibilidadeCreateWithoutBarreirasInput = {
    descricao: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AcessibilidadeUncheckedCreateWithoutBarreirasInput = {
    id?: number
    descricao: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AcessibilidadeCreateOrConnectWithoutBarreirasInput = {
    where: AcessibilidadeWhereUniqueInput
    create: XOR<AcessibilidadeCreateWithoutBarreirasInput, AcessibilidadeUncheckedCreateWithoutBarreirasInput>
  }

  export type BarreiraUpsertWithoutAcessibilidadesInput = {
    update: XOR<BarreiraUpdateWithoutAcessibilidadesInput, BarreiraUncheckedUpdateWithoutAcessibilidadesInput>
    create: XOR<BarreiraCreateWithoutAcessibilidadesInput, BarreiraUncheckedCreateWithoutAcessibilidadesInput>
    where?: BarreiraWhereInput
  }

  export type BarreiraUpdateToOneWithWhereWithoutAcessibilidadesInput = {
    where?: BarreiraWhereInput
    data: XOR<BarreiraUpdateWithoutAcessibilidadesInput, BarreiraUncheckedUpdateWithoutAcessibilidadesInput>
  }

  export type BarreiraUpdateWithoutAcessibilidadesInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtipos?: SubtipoBarreiraUpdateManyWithoutBarreiraNestedInput
  }

  export type BarreiraUncheckedUpdateWithoutAcessibilidadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtipos?: SubtipoBarreiraUncheckedUpdateManyWithoutBarreiraNestedInput
  }

  export type AcessibilidadeUpsertWithoutBarreirasInput = {
    update: XOR<AcessibilidadeUpdateWithoutBarreirasInput, AcessibilidadeUncheckedUpdateWithoutBarreirasInput>
    create: XOR<AcessibilidadeCreateWithoutBarreirasInput, AcessibilidadeUncheckedCreateWithoutBarreirasInput>
    where?: AcessibilidadeWhereInput
  }

  export type AcessibilidadeUpdateToOneWithWhereWithoutBarreirasInput = {
    where?: AcessibilidadeWhereInput
    data: XOR<AcessibilidadeUpdateWithoutBarreirasInput, AcessibilidadeUncheckedUpdateWithoutBarreirasInput>
  }

  export type AcessibilidadeUpdateWithoutBarreirasInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcessibilidadeUncheckedUpdateWithoutBarreirasInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubtipoDeficienciaCreateManyTipoInput = {
    id?: number
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubtipoDeficienciaUpdateWithoutTipoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barreiras?: SubtipoBarreiraUpdateManyWithoutSubtipoNestedInput
  }

  export type SubtipoDeficienciaUncheckedUpdateWithoutTipoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barreiras?: SubtipoBarreiraUncheckedUpdateManyWithoutSubtipoNestedInput
  }

  export type SubtipoDeficienciaUncheckedUpdateManyWithoutTipoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubtipoBarreiraCreateManySubtipoInput = {
    barreiraId: number
  }

  export type SubtipoBarreiraUpdateWithoutSubtipoInput = {
    barreira?: BarreiraUpdateOneRequiredWithoutSubtiposNestedInput
  }

  export type SubtipoBarreiraUncheckedUpdateWithoutSubtipoInput = {
    barreiraId?: IntFieldUpdateOperationsInput | number
  }

  export type SubtipoBarreiraUncheckedUpdateManyWithoutSubtipoInput = {
    barreiraId?: IntFieldUpdateOperationsInput | number
  }

  export type SubtipoBarreiraCreateManyBarreiraInput = {
    subtipoId: number
  }

  export type BarreiraAcessibilidadeCreateManyBarreiraInput = {
    acessibilidadeId: number
  }

  export type SubtipoBarreiraUpdateWithoutBarreiraInput = {
    subtipo?: SubtipoDeficienciaUpdateOneRequiredWithoutBarreirasNestedInput
  }

  export type SubtipoBarreiraUncheckedUpdateWithoutBarreiraInput = {
    subtipoId?: IntFieldUpdateOperationsInput | number
  }

  export type SubtipoBarreiraUncheckedUpdateManyWithoutBarreiraInput = {
    subtipoId?: IntFieldUpdateOperationsInput | number
  }

  export type BarreiraAcessibilidadeUpdateWithoutBarreiraInput = {
    acessibilidade?: AcessibilidadeUpdateOneRequiredWithoutBarreirasNestedInput
  }

  export type BarreiraAcessibilidadeUncheckedUpdateWithoutBarreiraInput = {
    acessibilidadeId?: IntFieldUpdateOperationsInput | number
  }

  export type BarreiraAcessibilidadeUncheckedUpdateManyWithoutBarreiraInput = {
    acessibilidadeId?: IntFieldUpdateOperationsInput | number
  }

  export type BarreiraAcessibilidadeCreateManyAcessibilidadeInput = {
    barreiraId: number
  }

  export type BarreiraAcessibilidadeUpdateWithoutAcessibilidadeInput = {
    barreira?: BarreiraUpdateOneRequiredWithoutAcessibilidadesNestedInput
  }

  export type BarreiraAcessibilidadeUncheckedUpdateWithoutAcessibilidadeInput = {
    barreiraId?: IntFieldUpdateOperationsInput | number
  }

  export type BarreiraAcessibilidadeUncheckedUpdateManyWithoutAcessibilidadeInput = {
    barreiraId?: IntFieldUpdateOperationsInput | number
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