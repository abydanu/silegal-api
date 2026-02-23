
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model DataLegalisir
 * 
 */
export type DataLegalisir = $Result.DefaultSelection<Prisma.$DataLegalisirPayload>
/**
 * Model DataPengajuan
 * 
 */
export type DataPengajuan = $Result.DefaultSelection<Prisma.$DataPengajuanPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const StatusAkun: {
  aktif: 'aktif',
  non_aktif: 'non_aktif'
};

export type StatusAkun = (typeof StatusAkun)[keyof typeof StatusAkun]


export const ProgramStudi: {
  ILMU_HUKUM: 'ILMU_HUKUM',
  MANAJEMEN: 'MANAJEMEN',
  AKUNTANSI: 'AKUNTANSI',
  ADMINISTRASI_NEGARA: 'ADMINISTRASI_NEGARA',
  ILMU_KOMUNIKASI: 'ILMU_KOMUNIKASI',
  AGROTEKNOLOGI: 'AGROTEKNOLOGI',
  TEKNIK_MESIN: 'TEKNIK_MESIN',
  TEKNIK_SIPIL: 'TEKNIK_SIPIL',
  MANAJEMEN_INFORMATIKA: 'MANAJEMEN_INFORMATIKA'
};

export type ProgramStudi = (typeof ProgramStudi)[keyof typeof ProgramStudi]


export const Fakultas: {
  HUKUM: 'HUKUM',
  EKONOMI: 'EKONOMI',
  ILMU_SOSIAL_DAN_ILMU_POLITIK: 'ILMU_SOSIAL_DAN_ILMU_POLITIK',
  PERTANIAN: 'PERTANIAN',
  TEKNIK: 'TEKNIK'
};

export type Fakultas = (typeof Fakultas)[keyof typeof Fakultas]


export const Semester: {
  SEMESTER_1: 'SEMESTER_1',
  SEMESTER_2: 'SEMESTER_2',
  SEMESTER_3: 'SEMESTER_3',
  SEMESTER_4: 'SEMESTER_4',
  SEMESTER_5: 'SEMESTER_5',
  SEMESTER_6: 'SEMESTER_6',
  SEMESTER_7: 'SEMESTER_7',
  SEMESTER_8: 'SEMESTER_8'
};

export type Semester = (typeof Semester)[keyof typeof Semester]

}

export type StatusAkun = $Enums.StatusAkun

export const StatusAkun: typeof $Enums.StatusAkun

export type ProgramStudi = $Enums.ProgramStudi

export const ProgramStudi: typeof $Enums.ProgramStudi

export type Fakultas = $Enums.Fakultas

export const Fakultas: typeof $Enums.Fakultas

export type Semester = $Enums.Semester

export const Semester: typeof $Enums.Semester

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dataLegalisir`: Exposes CRUD operations for the **DataLegalisir** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataLegalisirs
    * const dataLegalisirs = await prisma.dataLegalisir.findMany()
    * ```
    */
  get dataLegalisir(): Prisma.DataLegalisirDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dataPengajuan`: Exposes CRUD operations for the **DataPengajuan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataPengajuans
    * const dataPengajuans = await prisma.dataPengajuan.findMany()
    * ```
    */
  get dataPengajuan(): Prisma.DataPengajuanDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.1
   * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Admin: 'Admin',
    DataLegalisir: 'DataLegalisir',
    DataPengajuan: 'DataPengajuan'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "dataLegalisir" | "dataPengajuan"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      DataLegalisir: {
        payload: Prisma.$DataLegalisirPayload<ExtArgs>
        fields: Prisma.DataLegalisirFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DataLegalisirFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataLegalisirPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DataLegalisirFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataLegalisirPayload>
          }
          findFirst: {
            args: Prisma.DataLegalisirFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataLegalisirPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DataLegalisirFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataLegalisirPayload>
          }
          findMany: {
            args: Prisma.DataLegalisirFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataLegalisirPayload>[]
          }
          create: {
            args: Prisma.DataLegalisirCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataLegalisirPayload>
          }
          createMany: {
            args: Prisma.DataLegalisirCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DataLegalisirCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataLegalisirPayload>[]
          }
          delete: {
            args: Prisma.DataLegalisirDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataLegalisirPayload>
          }
          update: {
            args: Prisma.DataLegalisirUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataLegalisirPayload>
          }
          deleteMany: {
            args: Prisma.DataLegalisirDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DataLegalisirUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DataLegalisirUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataLegalisirPayload>[]
          }
          upsert: {
            args: Prisma.DataLegalisirUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataLegalisirPayload>
          }
          aggregate: {
            args: Prisma.DataLegalisirAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDataLegalisir>
          }
          groupBy: {
            args: Prisma.DataLegalisirGroupByArgs<ExtArgs>
            result: $Utils.Optional<DataLegalisirGroupByOutputType>[]
          }
          count: {
            args: Prisma.DataLegalisirCountArgs<ExtArgs>
            result: $Utils.Optional<DataLegalisirCountAggregateOutputType> | number
          }
        }
      }
      DataPengajuan: {
        payload: Prisma.$DataPengajuanPayload<ExtArgs>
        fields: Prisma.DataPengajuanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DataPengajuanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPengajuanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DataPengajuanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPengajuanPayload>
          }
          findFirst: {
            args: Prisma.DataPengajuanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPengajuanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DataPengajuanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPengajuanPayload>
          }
          findMany: {
            args: Prisma.DataPengajuanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPengajuanPayload>[]
          }
          create: {
            args: Prisma.DataPengajuanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPengajuanPayload>
          }
          createMany: {
            args: Prisma.DataPengajuanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DataPengajuanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPengajuanPayload>[]
          }
          delete: {
            args: Prisma.DataPengajuanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPengajuanPayload>
          }
          update: {
            args: Prisma.DataPengajuanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPengajuanPayload>
          }
          deleteMany: {
            args: Prisma.DataPengajuanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DataPengajuanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DataPengajuanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPengajuanPayload>[]
          }
          upsert: {
            args: Prisma.DataPengajuanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPengajuanPayload>
          }
          aggregate: {
            args: Prisma.DataPengajuanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDataPengajuan>
          }
          groupBy: {
            args: Prisma.DataPengajuanGroupByArgs<ExtArgs>
            result: $Utils.Optional<DataPengajuanGroupByOutputType>[]
          }
          count: {
            args: Prisma.DataPengajuanCountArgs<ExtArgs>
            result: $Utils.Optional<DataPengajuanCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    admin?: AdminOmit
    dataLegalisir?: DataLegalisirOmit
    dataPengajuan?: DataPengajuanOmit
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
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    nama: string | null
    status: $Enums.StatusAkun | null
    role: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    status: $Enums.StatusAkun | null
    role: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    nama: number
    status: number
    role: number
    username: number
    password: number
    createdAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    nama?: true
    status?: true
    role?: true
    username?: true
    password?: true
    createdAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    nama?: true
    status?: true
    role?: true
    username?: true
    password?: true
    createdAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    nama?: true
    status?: true
    role?: true
    username?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    nama: string
    status: $Enums.StatusAkun
    role: string
    username: string
    password: string
    createdAt: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    status?: boolean
    role?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    status?: boolean
    role?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    status?: boolean
    role?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    nama?: boolean
    status?: boolean
    role?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "status" | "role" | "username" | "password" | "createdAt", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      status: $Enums.StatusAkun
      role: string
      username: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly nama: FieldRef<"Admin", 'String'>
    readonly status: FieldRef<"Admin", 'StatusAkun'>
    readonly role: FieldRef<"Admin", 'String'>
    readonly username: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Model DataLegalisir
   */

  export type AggregateDataLegalisir = {
    _count: DataLegalisirCountAggregateOutputType | null
    _avg: DataLegalisirAvgAggregateOutputType | null
    _sum: DataLegalisirSumAggregateOutputType | null
    _min: DataLegalisirMinAggregateOutputType | null
    _max: DataLegalisirMaxAggregateOutputType | null
  }

  export type DataLegalisirAvgAggregateOutputType = {
    sebanyak_ijazah: number | null
    sebanyak_transkip: number | null
    sebanyak_akreditasi: number | null
    jumlah_legalisir: number | null
  }

  export type DataLegalisirSumAggregateOutputType = {
    sebanyak_ijazah: number | null
    sebanyak_transkip: number | null
    sebanyak_akreditasi: number | null
    jumlah_legalisir: number | null
  }

  export type DataLegalisirMinAggregateOutputType = {
    id: string | null
    tanggal_pengajuan: Date | null
    nomor_surat: string | null
    nama_mahasiswa: string | null
    tempat_lahir: string | null
    nim: string | null
    tgl_lahir: Date | null
    tgl_kelulusan: Date | null
    program_studi: $Enums.ProgramStudi | null
    fakultas: $Enums.Fakultas | null
    nomor_seri_ijazah: string | null
    sebanyak_ijazah: number | null
    sebanyak_transkip: number | null
    sebanyak_akreditasi: number | null
    jumlah_legalisir: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DataLegalisirMaxAggregateOutputType = {
    id: string | null
    tanggal_pengajuan: Date | null
    nomor_surat: string | null
    nama_mahasiswa: string | null
    tempat_lahir: string | null
    nim: string | null
    tgl_lahir: Date | null
    tgl_kelulusan: Date | null
    program_studi: $Enums.ProgramStudi | null
    fakultas: $Enums.Fakultas | null
    nomor_seri_ijazah: string | null
    sebanyak_ijazah: number | null
    sebanyak_transkip: number | null
    sebanyak_akreditasi: number | null
    jumlah_legalisir: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DataLegalisirCountAggregateOutputType = {
    id: number
    tanggal_pengajuan: number
    nomor_surat: number
    nama_mahasiswa: number
    tempat_lahir: number
    nim: number
    tgl_lahir: number
    tgl_kelulusan: number
    program_studi: number
    fakultas: number
    nomor_seri_ijazah: number
    sebanyak_ijazah: number
    sebanyak_transkip: number
    sebanyak_akreditasi: number
    jumlah_legalisir: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DataLegalisirAvgAggregateInputType = {
    sebanyak_ijazah?: true
    sebanyak_transkip?: true
    sebanyak_akreditasi?: true
    jumlah_legalisir?: true
  }

  export type DataLegalisirSumAggregateInputType = {
    sebanyak_ijazah?: true
    sebanyak_transkip?: true
    sebanyak_akreditasi?: true
    jumlah_legalisir?: true
  }

  export type DataLegalisirMinAggregateInputType = {
    id?: true
    tanggal_pengajuan?: true
    nomor_surat?: true
    nama_mahasiswa?: true
    tempat_lahir?: true
    nim?: true
    tgl_lahir?: true
    tgl_kelulusan?: true
    program_studi?: true
    fakultas?: true
    nomor_seri_ijazah?: true
    sebanyak_ijazah?: true
    sebanyak_transkip?: true
    sebanyak_akreditasi?: true
    jumlah_legalisir?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DataLegalisirMaxAggregateInputType = {
    id?: true
    tanggal_pengajuan?: true
    nomor_surat?: true
    nama_mahasiswa?: true
    tempat_lahir?: true
    nim?: true
    tgl_lahir?: true
    tgl_kelulusan?: true
    program_studi?: true
    fakultas?: true
    nomor_seri_ijazah?: true
    sebanyak_ijazah?: true
    sebanyak_transkip?: true
    sebanyak_akreditasi?: true
    jumlah_legalisir?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DataLegalisirCountAggregateInputType = {
    id?: true
    tanggal_pengajuan?: true
    nomor_surat?: true
    nama_mahasiswa?: true
    tempat_lahir?: true
    nim?: true
    tgl_lahir?: true
    tgl_kelulusan?: true
    program_studi?: true
    fakultas?: true
    nomor_seri_ijazah?: true
    sebanyak_ijazah?: true
    sebanyak_transkip?: true
    sebanyak_akreditasi?: true
    jumlah_legalisir?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DataLegalisirAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataLegalisir to aggregate.
     */
    where?: DataLegalisirWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataLegalisirs to fetch.
     */
    orderBy?: DataLegalisirOrderByWithRelationInput | DataLegalisirOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DataLegalisirWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataLegalisirs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataLegalisirs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DataLegalisirs
    **/
    _count?: true | DataLegalisirCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DataLegalisirAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DataLegalisirSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataLegalisirMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataLegalisirMaxAggregateInputType
  }

  export type GetDataLegalisirAggregateType<T extends DataLegalisirAggregateArgs> = {
        [P in keyof T & keyof AggregateDataLegalisir]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataLegalisir[P]>
      : GetScalarType<T[P], AggregateDataLegalisir[P]>
  }




  export type DataLegalisirGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataLegalisirWhereInput
    orderBy?: DataLegalisirOrderByWithAggregationInput | DataLegalisirOrderByWithAggregationInput[]
    by: DataLegalisirScalarFieldEnum[] | DataLegalisirScalarFieldEnum
    having?: DataLegalisirScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataLegalisirCountAggregateInputType | true
    _avg?: DataLegalisirAvgAggregateInputType
    _sum?: DataLegalisirSumAggregateInputType
    _min?: DataLegalisirMinAggregateInputType
    _max?: DataLegalisirMaxAggregateInputType
  }

  export type DataLegalisirGroupByOutputType = {
    id: string
    tanggal_pengajuan: Date
    nomor_surat: string
    nama_mahasiswa: string
    tempat_lahir: string
    nim: string
    tgl_lahir: Date
    tgl_kelulusan: Date
    program_studi: $Enums.ProgramStudi
    fakultas: $Enums.Fakultas
    nomor_seri_ijazah: string
    sebanyak_ijazah: number
    sebanyak_transkip: number
    sebanyak_akreditasi: number
    jumlah_legalisir: number
    createdAt: Date
    updatedAt: Date
    _count: DataLegalisirCountAggregateOutputType | null
    _avg: DataLegalisirAvgAggregateOutputType | null
    _sum: DataLegalisirSumAggregateOutputType | null
    _min: DataLegalisirMinAggregateOutputType | null
    _max: DataLegalisirMaxAggregateOutputType | null
  }

  type GetDataLegalisirGroupByPayload<T extends DataLegalisirGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DataLegalisirGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataLegalisirGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataLegalisirGroupByOutputType[P]>
            : GetScalarType<T[P], DataLegalisirGroupByOutputType[P]>
        }
      >
    >


  export type DataLegalisirSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal_pengajuan?: boolean
    nomor_surat?: boolean
    nama_mahasiswa?: boolean
    tempat_lahir?: boolean
    nim?: boolean
    tgl_lahir?: boolean
    tgl_kelulusan?: boolean
    program_studi?: boolean
    fakultas?: boolean
    nomor_seri_ijazah?: boolean
    sebanyak_ijazah?: boolean
    sebanyak_transkip?: boolean
    sebanyak_akreditasi?: boolean
    jumlah_legalisir?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dataLegalisir"]>

  export type DataLegalisirSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal_pengajuan?: boolean
    nomor_surat?: boolean
    nama_mahasiswa?: boolean
    tempat_lahir?: boolean
    nim?: boolean
    tgl_lahir?: boolean
    tgl_kelulusan?: boolean
    program_studi?: boolean
    fakultas?: boolean
    nomor_seri_ijazah?: boolean
    sebanyak_ijazah?: boolean
    sebanyak_transkip?: boolean
    sebanyak_akreditasi?: boolean
    jumlah_legalisir?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dataLegalisir"]>

  export type DataLegalisirSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal_pengajuan?: boolean
    nomor_surat?: boolean
    nama_mahasiswa?: boolean
    tempat_lahir?: boolean
    nim?: boolean
    tgl_lahir?: boolean
    tgl_kelulusan?: boolean
    program_studi?: boolean
    fakultas?: boolean
    nomor_seri_ijazah?: boolean
    sebanyak_ijazah?: boolean
    sebanyak_transkip?: boolean
    sebanyak_akreditasi?: boolean
    jumlah_legalisir?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dataLegalisir"]>

  export type DataLegalisirSelectScalar = {
    id?: boolean
    tanggal_pengajuan?: boolean
    nomor_surat?: boolean
    nama_mahasiswa?: boolean
    tempat_lahir?: boolean
    nim?: boolean
    tgl_lahir?: boolean
    tgl_kelulusan?: boolean
    program_studi?: boolean
    fakultas?: boolean
    nomor_seri_ijazah?: boolean
    sebanyak_ijazah?: boolean
    sebanyak_transkip?: boolean
    sebanyak_akreditasi?: boolean
    jumlah_legalisir?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DataLegalisirOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tanggal_pengajuan" | "nomor_surat" | "nama_mahasiswa" | "tempat_lahir" | "nim" | "tgl_lahir" | "tgl_kelulusan" | "program_studi" | "fakultas" | "nomor_seri_ijazah" | "sebanyak_ijazah" | "sebanyak_transkip" | "sebanyak_akreditasi" | "jumlah_legalisir" | "createdAt" | "updatedAt", ExtArgs["result"]["dataLegalisir"]>

  export type $DataLegalisirPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DataLegalisir"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tanggal_pengajuan: Date
      nomor_surat: string
      nama_mahasiswa: string
      tempat_lahir: string
      nim: string
      tgl_lahir: Date
      tgl_kelulusan: Date
      program_studi: $Enums.ProgramStudi
      fakultas: $Enums.Fakultas
      nomor_seri_ijazah: string
      sebanyak_ijazah: number
      sebanyak_transkip: number
      sebanyak_akreditasi: number
      jumlah_legalisir: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dataLegalisir"]>
    composites: {}
  }

  type DataLegalisirGetPayload<S extends boolean | null | undefined | DataLegalisirDefaultArgs> = $Result.GetResult<Prisma.$DataLegalisirPayload, S>

  type DataLegalisirCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DataLegalisirFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DataLegalisirCountAggregateInputType | true
    }

  export interface DataLegalisirDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DataLegalisir'], meta: { name: 'DataLegalisir' } }
    /**
     * Find zero or one DataLegalisir that matches the filter.
     * @param {DataLegalisirFindUniqueArgs} args - Arguments to find a DataLegalisir
     * @example
     * // Get one DataLegalisir
     * const dataLegalisir = await prisma.dataLegalisir.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DataLegalisirFindUniqueArgs>(args: SelectSubset<T, DataLegalisirFindUniqueArgs<ExtArgs>>): Prisma__DataLegalisirClient<$Result.GetResult<Prisma.$DataLegalisirPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DataLegalisir that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DataLegalisirFindUniqueOrThrowArgs} args - Arguments to find a DataLegalisir
     * @example
     * // Get one DataLegalisir
     * const dataLegalisir = await prisma.dataLegalisir.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DataLegalisirFindUniqueOrThrowArgs>(args: SelectSubset<T, DataLegalisirFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DataLegalisirClient<$Result.GetResult<Prisma.$DataLegalisirPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataLegalisir that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataLegalisirFindFirstArgs} args - Arguments to find a DataLegalisir
     * @example
     * // Get one DataLegalisir
     * const dataLegalisir = await prisma.dataLegalisir.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DataLegalisirFindFirstArgs>(args?: SelectSubset<T, DataLegalisirFindFirstArgs<ExtArgs>>): Prisma__DataLegalisirClient<$Result.GetResult<Prisma.$DataLegalisirPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataLegalisir that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataLegalisirFindFirstOrThrowArgs} args - Arguments to find a DataLegalisir
     * @example
     * // Get one DataLegalisir
     * const dataLegalisir = await prisma.dataLegalisir.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DataLegalisirFindFirstOrThrowArgs>(args?: SelectSubset<T, DataLegalisirFindFirstOrThrowArgs<ExtArgs>>): Prisma__DataLegalisirClient<$Result.GetResult<Prisma.$DataLegalisirPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DataLegalisirs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataLegalisirFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataLegalisirs
     * const dataLegalisirs = await prisma.dataLegalisir.findMany()
     * 
     * // Get first 10 DataLegalisirs
     * const dataLegalisirs = await prisma.dataLegalisir.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dataLegalisirWithIdOnly = await prisma.dataLegalisir.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DataLegalisirFindManyArgs>(args?: SelectSubset<T, DataLegalisirFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataLegalisirPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DataLegalisir.
     * @param {DataLegalisirCreateArgs} args - Arguments to create a DataLegalisir.
     * @example
     * // Create one DataLegalisir
     * const DataLegalisir = await prisma.dataLegalisir.create({
     *   data: {
     *     // ... data to create a DataLegalisir
     *   }
     * })
     * 
     */
    create<T extends DataLegalisirCreateArgs>(args: SelectSubset<T, DataLegalisirCreateArgs<ExtArgs>>): Prisma__DataLegalisirClient<$Result.GetResult<Prisma.$DataLegalisirPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DataLegalisirs.
     * @param {DataLegalisirCreateManyArgs} args - Arguments to create many DataLegalisirs.
     * @example
     * // Create many DataLegalisirs
     * const dataLegalisir = await prisma.dataLegalisir.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DataLegalisirCreateManyArgs>(args?: SelectSubset<T, DataLegalisirCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DataLegalisirs and returns the data saved in the database.
     * @param {DataLegalisirCreateManyAndReturnArgs} args - Arguments to create many DataLegalisirs.
     * @example
     * // Create many DataLegalisirs
     * const dataLegalisir = await prisma.dataLegalisir.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DataLegalisirs and only return the `id`
     * const dataLegalisirWithIdOnly = await prisma.dataLegalisir.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DataLegalisirCreateManyAndReturnArgs>(args?: SelectSubset<T, DataLegalisirCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataLegalisirPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DataLegalisir.
     * @param {DataLegalisirDeleteArgs} args - Arguments to delete one DataLegalisir.
     * @example
     * // Delete one DataLegalisir
     * const DataLegalisir = await prisma.dataLegalisir.delete({
     *   where: {
     *     // ... filter to delete one DataLegalisir
     *   }
     * })
     * 
     */
    delete<T extends DataLegalisirDeleteArgs>(args: SelectSubset<T, DataLegalisirDeleteArgs<ExtArgs>>): Prisma__DataLegalisirClient<$Result.GetResult<Prisma.$DataLegalisirPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DataLegalisir.
     * @param {DataLegalisirUpdateArgs} args - Arguments to update one DataLegalisir.
     * @example
     * // Update one DataLegalisir
     * const dataLegalisir = await prisma.dataLegalisir.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DataLegalisirUpdateArgs>(args: SelectSubset<T, DataLegalisirUpdateArgs<ExtArgs>>): Prisma__DataLegalisirClient<$Result.GetResult<Prisma.$DataLegalisirPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DataLegalisirs.
     * @param {DataLegalisirDeleteManyArgs} args - Arguments to filter DataLegalisirs to delete.
     * @example
     * // Delete a few DataLegalisirs
     * const { count } = await prisma.dataLegalisir.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DataLegalisirDeleteManyArgs>(args?: SelectSubset<T, DataLegalisirDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataLegalisirs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataLegalisirUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataLegalisirs
     * const dataLegalisir = await prisma.dataLegalisir.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DataLegalisirUpdateManyArgs>(args: SelectSubset<T, DataLegalisirUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataLegalisirs and returns the data updated in the database.
     * @param {DataLegalisirUpdateManyAndReturnArgs} args - Arguments to update many DataLegalisirs.
     * @example
     * // Update many DataLegalisirs
     * const dataLegalisir = await prisma.dataLegalisir.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DataLegalisirs and only return the `id`
     * const dataLegalisirWithIdOnly = await prisma.dataLegalisir.updateManyAndReturn({
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
    updateManyAndReturn<T extends DataLegalisirUpdateManyAndReturnArgs>(args: SelectSubset<T, DataLegalisirUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataLegalisirPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DataLegalisir.
     * @param {DataLegalisirUpsertArgs} args - Arguments to update or create a DataLegalisir.
     * @example
     * // Update or create a DataLegalisir
     * const dataLegalisir = await prisma.dataLegalisir.upsert({
     *   create: {
     *     // ... data to create a DataLegalisir
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataLegalisir we want to update
     *   }
     * })
     */
    upsert<T extends DataLegalisirUpsertArgs>(args: SelectSubset<T, DataLegalisirUpsertArgs<ExtArgs>>): Prisma__DataLegalisirClient<$Result.GetResult<Prisma.$DataLegalisirPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DataLegalisirs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataLegalisirCountArgs} args - Arguments to filter DataLegalisirs to count.
     * @example
     * // Count the number of DataLegalisirs
     * const count = await prisma.dataLegalisir.count({
     *   where: {
     *     // ... the filter for the DataLegalisirs we want to count
     *   }
     * })
    **/
    count<T extends DataLegalisirCountArgs>(
      args?: Subset<T, DataLegalisirCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataLegalisirCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataLegalisir.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataLegalisirAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DataLegalisirAggregateArgs>(args: Subset<T, DataLegalisirAggregateArgs>): Prisma.PrismaPromise<GetDataLegalisirAggregateType<T>>

    /**
     * Group by DataLegalisir.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataLegalisirGroupByArgs} args - Group by arguments.
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
      T extends DataLegalisirGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataLegalisirGroupByArgs['orderBy'] }
        : { orderBy?: DataLegalisirGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DataLegalisirGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataLegalisirGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DataLegalisir model
   */
  readonly fields: DataLegalisirFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DataLegalisir.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DataLegalisirClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DataLegalisir model
   */
  interface DataLegalisirFieldRefs {
    readonly id: FieldRef<"DataLegalisir", 'String'>
    readonly tanggal_pengajuan: FieldRef<"DataLegalisir", 'DateTime'>
    readonly nomor_surat: FieldRef<"DataLegalisir", 'String'>
    readonly nama_mahasiswa: FieldRef<"DataLegalisir", 'String'>
    readonly tempat_lahir: FieldRef<"DataLegalisir", 'String'>
    readonly nim: FieldRef<"DataLegalisir", 'String'>
    readonly tgl_lahir: FieldRef<"DataLegalisir", 'DateTime'>
    readonly tgl_kelulusan: FieldRef<"DataLegalisir", 'DateTime'>
    readonly program_studi: FieldRef<"DataLegalisir", 'ProgramStudi'>
    readonly fakultas: FieldRef<"DataLegalisir", 'Fakultas'>
    readonly nomor_seri_ijazah: FieldRef<"DataLegalisir", 'String'>
    readonly sebanyak_ijazah: FieldRef<"DataLegalisir", 'Int'>
    readonly sebanyak_transkip: FieldRef<"DataLegalisir", 'Int'>
    readonly sebanyak_akreditasi: FieldRef<"DataLegalisir", 'Int'>
    readonly jumlah_legalisir: FieldRef<"DataLegalisir", 'Int'>
    readonly createdAt: FieldRef<"DataLegalisir", 'DateTime'>
    readonly updatedAt: FieldRef<"DataLegalisir", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DataLegalisir findUnique
   */
  export type DataLegalisirFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataLegalisir
     */
    select?: DataLegalisirSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataLegalisir
     */
    omit?: DataLegalisirOmit<ExtArgs> | null
    /**
     * Filter, which DataLegalisir to fetch.
     */
    where: DataLegalisirWhereUniqueInput
  }

  /**
   * DataLegalisir findUniqueOrThrow
   */
  export type DataLegalisirFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataLegalisir
     */
    select?: DataLegalisirSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataLegalisir
     */
    omit?: DataLegalisirOmit<ExtArgs> | null
    /**
     * Filter, which DataLegalisir to fetch.
     */
    where: DataLegalisirWhereUniqueInput
  }

  /**
   * DataLegalisir findFirst
   */
  export type DataLegalisirFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataLegalisir
     */
    select?: DataLegalisirSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataLegalisir
     */
    omit?: DataLegalisirOmit<ExtArgs> | null
    /**
     * Filter, which DataLegalisir to fetch.
     */
    where?: DataLegalisirWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataLegalisirs to fetch.
     */
    orderBy?: DataLegalisirOrderByWithRelationInput | DataLegalisirOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataLegalisirs.
     */
    cursor?: DataLegalisirWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataLegalisirs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataLegalisirs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataLegalisirs.
     */
    distinct?: DataLegalisirScalarFieldEnum | DataLegalisirScalarFieldEnum[]
  }

  /**
   * DataLegalisir findFirstOrThrow
   */
  export type DataLegalisirFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataLegalisir
     */
    select?: DataLegalisirSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataLegalisir
     */
    omit?: DataLegalisirOmit<ExtArgs> | null
    /**
     * Filter, which DataLegalisir to fetch.
     */
    where?: DataLegalisirWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataLegalisirs to fetch.
     */
    orderBy?: DataLegalisirOrderByWithRelationInput | DataLegalisirOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataLegalisirs.
     */
    cursor?: DataLegalisirWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataLegalisirs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataLegalisirs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataLegalisirs.
     */
    distinct?: DataLegalisirScalarFieldEnum | DataLegalisirScalarFieldEnum[]
  }

  /**
   * DataLegalisir findMany
   */
  export type DataLegalisirFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataLegalisir
     */
    select?: DataLegalisirSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataLegalisir
     */
    omit?: DataLegalisirOmit<ExtArgs> | null
    /**
     * Filter, which DataLegalisirs to fetch.
     */
    where?: DataLegalisirWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataLegalisirs to fetch.
     */
    orderBy?: DataLegalisirOrderByWithRelationInput | DataLegalisirOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DataLegalisirs.
     */
    cursor?: DataLegalisirWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataLegalisirs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataLegalisirs.
     */
    skip?: number
    distinct?: DataLegalisirScalarFieldEnum | DataLegalisirScalarFieldEnum[]
  }

  /**
   * DataLegalisir create
   */
  export type DataLegalisirCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataLegalisir
     */
    select?: DataLegalisirSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataLegalisir
     */
    omit?: DataLegalisirOmit<ExtArgs> | null
    /**
     * The data needed to create a DataLegalisir.
     */
    data: XOR<DataLegalisirCreateInput, DataLegalisirUncheckedCreateInput>
  }

  /**
   * DataLegalisir createMany
   */
  export type DataLegalisirCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DataLegalisirs.
     */
    data: DataLegalisirCreateManyInput | DataLegalisirCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DataLegalisir createManyAndReturn
   */
  export type DataLegalisirCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataLegalisir
     */
    select?: DataLegalisirSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DataLegalisir
     */
    omit?: DataLegalisirOmit<ExtArgs> | null
    /**
     * The data used to create many DataLegalisirs.
     */
    data: DataLegalisirCreateManyInput | DataLegalisirCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DataLegalisir update
   */
  export type DataLegalisirUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataLegalisir
     */
    select?: DataLegalisirSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataLegalisir
     */
    omit?: DataLegalisirOmit<ExtArgs> | null
    /**
     * The data needed to update a DataLegalisir.
     */
    data: XOR<DataLegalisirUpdateInput, DataLegalisirUncheckedUpdateInput>
    /**
     * Choose, which DataLegalisir to update.
     */
    where: DataLegalisirWhereUniqueInput
  }

  /**
   * DataLegalisir updateMany
   */
  export type DataLegalisirUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DataLegalisirs.
     */
    data: XOR<DataLegalisirUpdateManyMutationInput, DataLegalisirUncheckedUpdateManyInput>
    /**
     * Filter which DataLegalisirs to update
     */
    where?: DataLegalisirWhereInput
    /**
     * Limit how many DataLegalisirs to update.
     */
    limit?: number
  }

  /**
   * DataLegalisir updateManyAndReturn
   */
  export type DataLegalisirUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataLegalisir
     */
    select?: DataLegalisirSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DataLegalisir
     */
    omit?: DataLegalisirOmit<ExtArgs> | null
    /**
     * The data used to update DataLegalisirs.
     */
    data: XOR<DataLegalisirUpdateManyMutationInput, DataLegalisirUncheckedUpdateManyInput>
    /**
     * Filter which DataLegalisirs to update
     */
    where?: DataLegalisirWhereInput
    /**
     * Limit how many DataLegalisirs to update.
     */
    limit?: number
  }

  /**
   * DataLegalisir upsert
   */
  export type DataLegalisirUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataLegalisir
     */
    select?: DataLegalisirSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataLegalisir
     */
    omit?: DataLegalisirOmit<ExtArgs> | null
    /**
     * The filter to search for the DataLegalisir to update in case it exists.
     */
    where: DataLegalisirWhereUniqueInput
    /**
     * In case the DataLegalisir found by the `where` argument doesn't exist, create a new DataLegalisir with this data.
     */
    create: XOR<DataLegalisirCreateInput, DataLegalisirUncheckedCreateInput>
    /**
     * In case the DataLegalisir was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DataLegalisirUpdateInput, DataLegalisirUncheckedUpdateInput>
  }

  /**
   * DataLegalisir delete
   */
  export type DataLegalisirDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataLegalisir
     */
    select?: DataLegalisirSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataLegalisir
     */
    omit?: DataLegalisirOmit<ExtArgs> | null
    /**
     * Filter which DataLegalisir to delete.
     */
    where: DataLegalisirWhereUniqueInput
  }

  /**
   * DataLegalisir deleteMany
   */
  export type DataLegalisirDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataLegalisirs to delete
     */
    where?: DataLegalisirWhereInput
    /**
     * Limit how many DataLegalisirs to delete.
     */
    limit?: number
  }

  /**
   * DataLegalisir without action
   */
  export type DataLegalisirDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataLegalisir
     */
    select?: DataLegalisirSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataLegalisir
     */
    omit?: DataLegalisirOmit<ExtArgs> | null
  }


  /**
   * Model DataPengajuan
   */

  export type AggregateDataPengajuan = {
    _count: DataPengajuanCountAggregateOutputType | null
    _min: DataPengajuanMinAggregateOutputType | null
    _max: DataPengajuanMaxAggregateOutputType | null
  }

  export type DataPengajuanMinAggregateOutputType = {
    id: string | null
    tanggal_pengajuan: Date | null
    nomor_surat: string | null
    nama_mahasiswa: string | null
    tempat_lahir: string | null
    nim: string | null
    tgl_lahir: Date | null
    alamat_rumah: string | null
    semester: $Enums.Semester | null
    program_studi: $Enums.ProgramStudi | null
    fakultas: $Enums.Fakultas | null
    thn_akademik: string | null
    keterangan_keperluan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DataPengajuanMaxAggregateOutputType = {
    id: string | null
    tanggal_pengajuan: Date | null
    nomor_surat: string | null
    nama_mahasiswa: string | null
    tempat_lahir: string | null
    nim: string | null
    tgl_lahir: Date | null
    alamat_rumah: string | null
    semester: $Enums.Semester | null
    program_studi: $Enums.ProgramStudi | null
    fakultas: $Enums.Fakultas | null
    thn_akademik: string | null
    keterangan_keperluan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DataPengajuanCountAggregateOutputType = {
    id: number
    tanggal_pengajuan: number
    nomor_surat: number
    nama_mahasiswa: number
    tempat_lahir: number
    nim: number
    tgl_lahir: number
    alamat_rumah: number
    semester: number
    program_studi: number
    fakultas: number
    thn_akademik: number
    keterangan_keperluan: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DataPengajuanMinAggregateInputType = {
    id?: true
    tanggal_pengajuan?: true
    nomor_surat?: true
    nama_mahasiswa?: true
    tempat_lahir?: true
    nim?: true
    tgl_lahir?: true
    alamat_rumah?: true
    semester?: true
    program_studi?: true
    fakultas?: true
    thn_akademik?: true
    keterangan_keperluan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DataPengajuanMaxAggregateInputType = {
    id?: true
    tanggal_pengajuan?: true
    nomor_surat?: true
    nama_mahasiswa?: true
    tempat_lahir?: true
    nim?: true
    tgl_lahir?: true
    alamat_rumah?: true
    semester?: true
    program_studi?: true
    fakultas?: true
    thn_akademik?: true
    keterangan_keperluan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DataPengajuanCountAggregateInputType = {
    id?: true
    tanggal_pengajuan?: true
    nomor_surat?: true
    nama_mahasiswa?: true
    tempat_lahir?: true
    nim?: true
    tgl_lahir?: true
    alamat_rumah?: true
    semester?: true
    program_studi?: true
    fakultas?: true
    thn_akademik?: true
    keterangan_keperluan?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DataPengajuanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataPengajuan to aggregate.
     */
    where?: DataPengajuanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataPengajuans to fetch.
     */
    orderBy?: DataPengajuanOrderByWithRelationInput | DataPengajuanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DataPengajuanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataPengajuans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataPengajuans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DataPengajuans
    **/
    _count?: true | DataPengajuanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataPengajuanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataPengajuanMaxAggregateInputType
  }

  export type GetDataPengajuanAggregateType<T extends DataPengajuanAggregateArgs> = {
        [P in keyof T & keyof AggregateDataPengajuan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataPengajuan[P]>
      : GetScalarType<T[P], AggregateDataPengajuan[P]>
  }




  export type DataPengajuanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataPengajuanWhereInput
    orderBy?: DataPengajuanOrderByWithAggregationInput | DataPengajuanOrderByWithAggregationInput[]
    by: DataPengajuanScalarFieldEnum[] | DataPengajuanScalarFieldEnum
    having?: DataPengajuanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataPengajuanCountAggregateInputType | true
    _min?: DataPengajuanMinAggregateInputType
    _max?: DataPengajuanMaxAggregateInputType
  }

  export type DataPengajuanGroupByOutputType = {
    id: string
    tanggal_pengajuan: Date
    nomor_surat: string
    nama_mahasiswa: string
    tempat_lahir: string
    nim: string
    tgl_lahir: Date
    alamat_rumah: string
    semester: $Enums.Semester
    program_studi: $Enums.ProgramStudi
    fakultas: $Enums.Fakultas
    thn_akademik: string
    keterangan_keperluan: string
    createdAt: Date
    updatedAt: Date
    _count: DataPengajuanCountAggregateOutputType | null
    _min: DataPengajuanMinAggregateOutputType | null
    _max: DataPengajuanMaxAggregateOutputType | null
  }

  type GetDataPengajuanGroupByPayload<T extends DataPengajuanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DataPengajuanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataPengajuanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataPengajuanGroupByOutputType[P]>
            : GetScalarType<T[P], DataPengajuanGroupByOutputType[P]>
        }
      >
    >


  export type DataPengajuanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal_pengajuan?: boolean
    nomor_surat?: boolean
    nama_mahasiswa?: boolean
    tempat_lahir?: boolean
    nim?: boolean
    tgl_lahir?: boolean
    alamat_rumah?: boolean
    semester?: boolean
    program_studi?: boolean
    fakultas?: boolean
    thn_akademik?: boolean
    keterangan_keperluan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dataPengajuan"]>

  export type DataPengajuanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal_pengajuan?: boolean
    nomor_surat?: boolean
    nama_mahasiswa?: boolean
    tempat_lahir?: boolean
    nim?: boolean
    tgl_lahir?: boolean
    alamat_rumah?: boolean
    semester?: boolean
    program_studi?: boolean
    fakultas?: boolean
    thn_akademik?: boolean
    keterangan_keperluan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dataPengajuan"]>

  export type DataPengajuanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal_pengajuan?: boolean
    nomor_surat?: boolean
    nama_mahasiswa?: boolean
    tempat_lahir?: boolean
    nim?: boolean
    tgl_lahir?: boolean
    alamat_rumah?: boolean
    semester?: boolean
    program_studi?: boolean
    fakultas?: boolean
    thn_akademik?: boolean
    keterangan_keperluan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dataPengajuan"]>

  export type DataPengajuanSelectScalar = {
    id?: boolean
    tanggal_pengajuan?: boolean
    nomor_surat?: boolean
    nama_mahasiswa?: boolean
    tempat_lahir?: boolean
    nim?: boolean
    tgl_lahir?: boolean
    alamat_rumah?: boolean
    semester?: boolean
    program_studi?: boolean
    fakultas?: boolean
    thn_akademik?: boolean
    keterangan_keperluan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DataPengajuanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tanggal_pengajuan" | "nomor_surat" | "nama_mahasiswa" | "tempat_lahir" | "nim" | "tgl_lahir" | "alamat_rumah" | "semester" | "program_studi" | "fakultas" | "thn_akademik" | "keterangan_keperluan" | "createdAt" | "updatedAt", ExtArgs["result"]["dataPengajuan"]>

  export type $DataPengajuanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DataPengajuan"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tanggal_pengajuan: Date
      nomor_surat: string
      nama_mahasiswa: string
      tempat_lahir: string
      nim: string
      tgl_lahir: Date
      alamat_rumah: string
      semester: $Enums.Semester
      program_studi: $Enums.ProgramStudi
      fakultas: $Enums.Fakultas
      thn_akademik: string
      keterangan_keperluan: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dataPengajuan"]>
    composites: {}
  }

  type DataPengajuanGetPayload<S extends boolean | null | undefined | DataPengajuanDefaultArgs> = $Result.GetResult<Prisma.$DataPengajuanPayload, S>

  type DataPengajuanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DataPengajuanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DataPengajuanCountAggregateInputType | true
    }

  export interface DataPengajuanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DataPengajuan'], meta: { name: 'DataPengajuan' } }
    /**
     * Find zero or one DataPengajuan that matches the filter.
     * @param {DataPengajuanFindUniqueArgs} args - Arguments to find a DataPengajuan
     * @example
     * // Get one DataPengajuan
     * const dataPengajuan = await prisma.dataPengajuan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DataPengajuanFindUniqueArgs>(args: SelectSubset<T, DataPengajuanFindUniqueArgs<ExtArgs>>): Prisma__DataPengajuanClient<$Result.GetResult<Prisma.$DataPengajuanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DataPengajuan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DataPengajuanFindUniqueOrThrowArgs} args - Arguments to find a DataPengajuan
     * @example
     * // Get one DataPengajuan
     * const dataPengajuan = await prisma.dataPengajuan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DataPengajuanFindUniqueOrThrowArgs>(args: SelectSubset<T, DataPengajuanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DataPengajuanClient<$Result.GetResult<Prisma.$DataPengajuanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataPengajuan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPengajuanFindFirstArgs} args - Arguments to find a DataPengajuan
     * @example
     * // Get one DataPengajuan
     * const dataPengajuan = await prisma.dataPengajuan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DataPengajuanFindFirstArgs>(args?: SelectSubset<T, DataPengajuanFindFirstArgs<ExtArgs>>): Prisma__DataPengajuanClient<$Result.GetResult<Prisma.$DataPengajuanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataPengajuan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPengajuanFindFirstOrThrowArgs} args - Arguments to find a DataPengajuan
     * @example
     * // Get one DataPengajuan
     * const dataPengajuan = await prisma.dataPengajuan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DataPengajuanFindFirstOrThrowArgs>(args?: SelectSubset<T, DataPengajuanFindFirstOrThrowArgs<ExtArgs>>): Prisma__DataPengajuanClient<$Result.GetResult<Prisma.$DataPengajuanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DataPengajuans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPengajuanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataPengajuans
     * const dataPengajuans = await prisma.dataPengajuan.findMany()
     * 
     * // Get first 10 DataPengajuans
     * const dataPengajuans = await prisma.dataPengajuan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dataPengajuanWithIdOnly = await prisma.dataPengajuan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DataPengajuanFindManyArgs>(args?: SelectSubset<T, DataPengajuanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataPengajuanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DataPengajuan.
     * @param {DataPengajuanCreateArgs} args - Arguments to create a DataPengajuan.
     * @example
     * // Create one DataPengajuan
     * const DataPengajuan = await prisma.dataPengajuan.create({
     *   data: {
     *     // ... data to create a DataPengajuan
     *   }
     * })
     * 
     */
    create<T extends DataPengajuanCreateArgs>(args: SelectSubset<T, DataPengajuanCreateArgs<ExtArgs>>): Prisma__DataPengajuanClient<$Result.GetResult<Prisma.$DataPengajuanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DataPengajuans.
     * @param {DataPengajuanCreateManyArgs} args - Arguments to create many DataPengajuans.
     * @example
     * // Create many DataPengajuans
     * const dataPengajuan = await prisma.dataPengajuan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DataPengajuanCreateManyArgs>(args?: SelectSubset<T, DataPengajuanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DataPengajuans and returns the data saved in the database.
     * @param {DataPengajuanCreateManyAndReturnArgs} args - Arguments to create many DataPengajuans.
     * @example
     * // Create many DataPengajuans
     * const dataPengajuan = await prisma.dataPengajuan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DataPengajuans and only return the `id`
     * const dataPengajuanWithIdOnly = await prisma.dataPengajuan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DataPengajuanCreateManyAndReturnArgs>(args?: SelectSubset<T, DataPengajuanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataPengajuanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DataPengajuan.
     * @param {DataPengajuanDeleteArgs} args - Arguments to delete one DataPengajuan.
     * @example
     * // Delete one DataPengajuan
     * const DataPengajuan = await prisma.dataPengajuan.delete({
     *   where: {
     *     // ... filter to delete one DataPengajuan
     *   }
     * })
     * 
     */
    delete<T extends DataPengajuanDeleteArgs>(args: SelectSubset<T, DataPengajuanDeleteArgs<ExtArgs>>): Prisma__DataPengajuanClient<$Result.GetResult<Prisma.$DataPengajuanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DataPengajuan.
     * @param {DataPengajuanUpdateArgs} args - Arguments to update one DataPengajuan.
     * @example
     * // Update one DataPengajuan
     * const dataPengajuan = await prisma.dataPengajuan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DataPengajuanUpdateArgs>(args: SelectSubset<T, DataPengajuanUpdateArgs<ExtArgs>>): Prisma__DataPengajuanClient<$Result.GetResult<Prisma.$DataPengajuanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DataPengajuans.
     * @param {DataPengajuanDeleteManyArgs} args - Arguments to filter DataPengajuans to delete.
     * @example
     * // Delete a few DataPengajuans
     * const { count } = await prisma.dataPengajuan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DataPengajuanDeleteManyArgs>(args?: SelectSubset<T, DataPengajuanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataPengajuans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPengajuanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataPengajuans
     * const dataPengajuan = await prisma.dataPengajuan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DataPengajuanUpdateManyArgs>(args: SelectSubset<T, DataPengajuanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataPengajuans and returns the data updated in the database.
     * @param {DataPengajuanUpdateManyAndReturnArgs} args - Arguments to update many DataPengajuans.
     * @example
     * // Update many DataPengajuans
     * const dataPengajuan = await prisma.dataPengajuan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DataPengajuans and only return the `id`
     * const dataPengajuanWithIdOnly = await prisma.dataPengajuan.updateManyAndReturn({
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
    updateManyAndReturn<T extends DataPengajuanUpdateManyAndReturnArgs>(args: SelectSubset<T, DataPengajuanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataPengajuanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DataPengajuan.
     * @param {DataPengajuanUpsertArgs} args - Arguments to update or create a DataPengajuan.
     * @example
     * // Update or create a DataPengajuan
     * const dataPengajuan = await prisma.dataPengajuan.upsert({
     *   create: {
     *     // ... data to create a DataPengajuan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataPengajuan we want to update
     *   }
     * })
     */
    upsert<T extends DataPengajuanUpsertArgs>(args: SelectSubset<T, DataPengajuanUpsertArgs<ExtArgs>>): Prisma__DataPengajuanClient<$Result.GetResult<Prisma.$DataPengajuanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DataPengajuans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPengajuanCountArgs} args - Arguments to filter DataPengajuans to count.
     * @example
     * // Count the number of DataPengajuans
     * const count = await prisma.dataPengajuan.count({
     *   where: {
     *     // ... the filter for the DataPengajuans we want to count
     *   }
     * })
    **/
    count<T extends DataPengajuanCountArgs>(
      args?: Subset<T, DataPengajuanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataPengajuanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataPengajuan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPengajuanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DataPengajuanAggregateArgs>(args: Subset<T, DataPengajuanAggregateArgs>): Prisma.PrismaPromise<GetDataPengajuanAggregateType<T>>

    /**
     * Group by DataPengajuan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPengajuanGroupByArgs} args - Group by arguments.
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
      T extends DataPengajuanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataPengajuanGroupByArgs['orderBy'] }
        : { orderBy?: DataPengajuanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DataPengajuanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataPengajuanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DataPengajuan model
   */
  readonly fields: DataPengajuanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DataPengajuan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DataPengajuanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DataPengajuan model
   */
  interface DataPengajuanFieldRefs {
    readonly id: FieldRef<"DataPengajuan", 'String'>
    readonly tanggal_pengajuan: FieldRef<"DataPengajuan", 'DateTime'>
    readonly nomor_surat: FieldRef<"DataPengajuan", 'String'>
    readonly nama_mahasiswa: FieldRef<"DataPengajuan", 'String'>
    readonly tempat_lahir: FieldRef<"DataPengajuan", 'String'>
    readonly nim: FieldRef<"DataPengajuan", 'String'>
    readonly tgl_lahir: FieldRef<"DataPengajuan", 'DateTime'>
    readonly alamat_rumah: FieldRef<"DataPengajuan", 'String'>
    readonly semester: FieldRef<"DataPengajuan", 'Semester'>
    readonly program_studi: FieldRef<"DataPengajuan", 'ProgramStudi'>
    readonly fakultas: FieldRef<"DataPengajuan", 'Fakultas'>
    readonly thn_akademik: FieldRef<"DataPengajuan", 'String'>
    readonly keterangan_keperluan: FieldRef<"DataPengajuan", 'String'>
    readonly createdAt: FieldRef<"DataPengajuan", 'DateTime'>
    readonly updatedAt: FieldRef<"DataPengajuan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DataPengajuan findUnique
   */
  export type DataPengajuanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPengajuan
     */
    select?: DataPengajuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPengajuan
     */
    omit?: DataPengajuanOmit<ExtArgs> | null
    /**
     * Filter, which DataPengajuan to fetch.
     */
    where: DataPengajuanWhereUniqueInput
  }

  /**
   * DataPengajuan findUniqueOrThrow
   */
  export type DataPengajuanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPengajuan
     */
    select?: DataPengajuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPengajuan
     */
    omit?: DataPengajuanOmit<ExtArgs> | null
    /**
     * Filter, which DataPengajuan to fetch.
     */
    where: DataPengajuanWhereUniqueInput
  }

  /**
   * DataPengajuan findFirst
   */
  export type DataPengajuanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPengajuan
     */
    select?: DataPengajuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPengajuan
     */
    omit?: DataPengajuanOmit<ExtArgs> | null
    /**
     * Filter, which DataPengajuan to fetch.
     */
    where?: DataPengajuanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataPengajuans to fetch.
     */
    orderBy?: DataPengajuanOrderByWithRelationInput | DataPengajuanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataPengajuans.
     */
    cursor?: DataPengajuanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataPengajuans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataPengajuans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataPengajuans.
     */
    distinct?: DataPengajuanScalarFieldEnum | DataPengajuanScalarFieldEnum[]
  }

  /**
   * DataPengajuan findFirstOrThrow
   */
  export type DataPengajuanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPengajuan
     */
    select?: DataPengajuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPengajuan
     */
    omit?: DataPengajuanOmit<ExtArgs> | null
    /**
     * Filter, which DataPengajuan to fetch.
     */
    where?: DataPengajuanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataPengajuans to fetch.
     */
    orderBy?: DataPengajuanOrderByWithRelationInput | DataPengajuanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataPengajuans.
     */
    cursor?: DataPengajuanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataPengajuans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataPengajuans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataPengajuans.
     */
    distinct?: DataPengajuanScalarFieldEnum | DataPengajuanScalarFieldEnum[]
  }

  /**
   * DataPengajuan findMany
   */
  export type DataPengajuanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPengajuan
     */
    select?: DataPengajuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPengajuan
     */
    omit?: DataPengajuanOmit<ExtArgs> | null
    /**
     * Filter, which DataPengajuans to fetch.
     */
    where?: DataPengajuanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataPengajuans to fetch.
     */
    orderBy?: DataPengajuanOrderByWithRelationInput | DataPengajuanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DataPengajuans.
     */
    cursor?: DataPengajuanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataPengajuans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataPengajuans.
     */
    skip?: number
    distinct?: DataPengajuanScalarFieldEnum | DataPengajuanScalarFieldEnum[]
  }

  /**
   * DataPengajuan create
   */
  export type DataPengajuanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPengajuan
     */
    select?: DataPengajuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPengajuan
     */
    omit?: DataPengajuanOmit<ExtArgs> | null
    /**
     * The data needed to create a DataPengajuan.
     */
    data: XOR<DataPengajuanCreateInput, DataPengajuanUncheckedCreateInput>
  }

  /**
   * DataPengajuan createMany
   */
  export type DataPengajuanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DataPengajuans.
     */
    data: DataPengajuanCreateManyInput | DataPengajuanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DataPengajuan createManyAndReturn
   */
  export type DataPengajuanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPengajuan
     */
    select?: DataPengajuanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DataPengajuan
     */
    omit?: DataPengajuanOmit<ExtArgs> | null
    /**
     * The data used to create many DataPengajuans.
     */
    data: DataPengajuanCreateManyInput | DataPengajuanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DataPengajuan update
   */
  export type DataPengajuanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPengajuan
     */
    select?: DataPengajuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPengajuan
     */
    omit?: DataPengajuanOmit<ExtArgs> | null
    /**
     * The data needed to update a DataPengajuan.
     */
    data: XOR<DataPengajuanUpdateInput, DataPengajuanUncheckedUpdateInput>
    /**
     * Choose, which DataPengajuan to update.
     */
    where: DataPengajuanWhereUniqueInput
  }

  /**
   * DataPengajuan updateMany
   */
  export type DataPengajuanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DataPengajuans.
     */
    data: XOR<DataPengajuanUpdateManyMutationInput, DataPengajuanUncheckedUpdateManyInput>
    /**
     * Filter which DataPengajuans to update
     */
    where?: DataPengajuanWhereInput
    /**
     * Limit how many DataPengajuans to update.
     */
    limit?: number
  }

  /**
   * DataPengajuan updateManyAndReturn
   */
  export type DataPengajuanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPengajuan
     */
    select?: DataPengajuanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DataPengajuan
     */
    omit?: DataPengajuanOmit<ExtArgs> | null
    /**
     * The data used to update DataPengajuans.
     */
    data: XOR<DataPengajuanUpdateManyMutationInput, DataPengajuanUncheckedUpdateManyInput>
    /**
     * Filter which DataPengajuans to update
     */
    where?: DataPengajuanWhereInput
    /**
     * Limit how many DataPengajuans to update.
     */
    limit?: number
  }

  /**
   * DataPengajuan upsert
   */
  export type DataPengajuanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPengajuan
     */
    select?: DataPengajuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPengajuan
     */
    omit?: DataPengajuanOmit<ExtArgs> | null
    /**
     * The filter to search for the DataPengajuan to update in case it exists.
     */
    where: DataPengajuanWhereUniqueInput
    /**
     * In case the DataPengajuan found by the `where` argument doesn't exist, create a new DataPengajuan with this data.
     */
    create: XOR<DataPengajuanCreateInput, DataPengajuanUncheckedCreateInput>
    /**
     * In case the DataPengajuan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DataPengajuanUpdateInput, DataPengajuanUncheckedUpdateInput>
  }

  /**
   * DataPengajuan delete
   */
  export type DataPengajuanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPengajuan
     */
    select?: DataPengajuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPengajuan
     */
    omit?: DataPengajuanOmit<ExtArgs> | null
    /**
     * Filter which DataPengajuan to delete.
     */
    where: DataPengajuanWhereUniqueInput
  }

  /**
   * DataPengajuan deleteMany
   */
  export type DataPengajuanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataPengajuans to delete
     */
    where?: DataPengajuanWhereInput
    /**
     * Limit how many DataPengajuans to delete.
     */
    limit?: number
  }

  /**
   * DataPengajuan without action
   */
  export type DataPengajuanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPengajuan
     */
    select?: DataPengajuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPengajuan
     */
    omit?: DataPengajuanOmit<ExtArgs> | null
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


  export const AdminScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    status: 'status',
    role: 'role',
    username: 'username',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const DataLegalisirScalarFieldEnum: {
    id: 'id',
    tanggal_pengajuan: 'tanggal_pengajuan',
    nomor_surat: 'nomor_surat',
    nama_mahasiswa: 'nama_mahasiswa',
    tempat_lahir: 'tempat_lahir',
    nim: 'nim',
    tgl_lahir: 'tgl_lahir',
    tgl_kelulusan: 'tgl_kelulusan',
    program_studi: 'program_studi',
    fakultas: 'fakultas',
    nomor_seri_ijazah: 'nomor_seri_ijazah',
    sebanyak_ijazah: 'sebanyak_ijazah',
    sebanyak_transkip: 'sebanyak_transkip',
    sebanyak_akreditasi: 'sebanyak_akreditasi',
    jumlah_legalisir: 'jumlah_legalisir',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DataLegalisirScalarFieldEnum = (typeof DataLegalisirScalarFieldEnum)[keyof typeof DataLegalisirScalarFieldEnum]


  export const DataPengajuanScalarFieldEnum: {
    id: 'id',
    tanggal_pengajuan: 'tanggal_pengajuan',
    nomor_surat: 'nomor_surat',
    nama_mahasiswa: 'nama_mahasiswa',
    tempat_lahir: 'tempat_lahir',
    nim: 'nim',
    tgl_lahir: 'tgl_lahir',
    alamat_rumah: 'alamat_rumah',
    semester: 'semester',
    program_studi: 'program_studi',
    fakultas: 'fakultas',
    thn_akademik: 'thn_akademik',
    keterangan_keperluan: 'keterangan_keperluan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DataPengajuanScalarFieldEnum = (typeof DataPengajuanScalarFieldEnum)[keyof typeof DataPengajuanScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'StatusAkun'
   */
  export type EnumStatusAkunFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusAkun'>
    


  /**
   * Reference to a field of type 'StatusAkun[]'
   */
  export type ListEnumStatusAkunFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusAkun[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ProgramStudi'
   */
  export type EnumProgramStudiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProgramStudi'>
    


  /**
   * Reference to a field of type 'ProgramStudi[]'
   */
  export type ListEnumProgramStudiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProgramStudi[]'>
    


  /**
   * Reference to a field of type 'Fakultas'
   */
  export type EnumFakultasFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Fakultas'>
    


  /**
   * Reference to a field of type 'Fakultas[]'
   */
  export type ListEnumFakultasFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Fakultas[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Semester'
   */
  export type EnumSemesterFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Semester'>
    


  /**
   * Reference to a field of type 'Semester[]'
   */
  export type ListEnumSemesterFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Semester[]'>
    


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


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    nama?: StringFilter<"Admin"> | string
    status?: EnumStatusAkunFilter<"Admin"> | $Enums.StatusAkun
    role?: StringFilter<"Admin"> | string
    username?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    status?: SortOrder
    role?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    nama?: StringFilter<"Admin"> | string
    status?: EnumStatusAkunFilter<"Admin"> | $Enums.StatusAkun
    role?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
  }, "id" | "username">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    status?: SortOrder
    role?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    nama?: StringWithAggregatesFilter<"Admin"> | string
    status?: EnumStatusAkunWithAggregatesFilter<"Admin"> | $Enums.StatusAkun
    role?: StringWithAggregatesFilter<"Admin"> | string
    username?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type DataLegalisirWhereInput = {
    AND?: DataLegalisirWhereInput | DataLegalisirWhereInput[]
    OR?: DataLegalisirWhereInput[]
    NOT?: DataLegalisirWhereInput | DataLegalisirWhereInput[]
    id?: StringFilter<"DataLegalisir"> | string
    tanggal_pengajuan?: DateTimeFilter<"DataLegalisir"> | Date | string
    nomor_surat?: StringFilter<"DataLegalisir"> | string
    nama_mahasiswa?: StringFilter<"DataLegalisir"> | string
    tempat_lahir?: StringFilter<"DataLegalisir"> | string
    nim?: StringFilter<"DataLegalisir"> | string
    tgl_lahir?: DateTimeFilter<"DataLegalisir"> | Date | string
    tgl_kelulusan?: DateTimeFilter<"DataLegalisir"> | Date | string
    program_studi?: EnumProgramStudiFilter<"DataLegalisir"> | $Enums.ProgramStudi
    fakultas?: EnumFakultasFilter<"DataLegalisir"> | $Enums.Fakultas
    nomor_seri_ijazah?: StringFilter<"DataLegalisir"> | string
    sebanyak_ijazah?: IntFilter<"DataLegalisir"> | number
    sebanyak_transkip?: IntFilter<"DataLegalisir"> | number
    sebanyak_akreditasi?: IntFilter<"DataLegalisir"> | number
    jumlah_legalisir?: IntFilter<"DataLegalisir"> | number
    createdAt?: DateTimeFilter<"DataLegalisir"> | Date | string
    updatedAt?: DateTimeFilter<"DataLegalisir"> | Date | string
  }

  export type DataLegalisirOrderByWithRelationInput = {
    id?: SortOrder
    tanggal_pengajuan?: SortOrder
    nomor_surat?: SortOrder
    nama_mahasiswa?: SortOrder
    tempat_lahir?: SortOrder
    nim?: SortOrder
    tgl_lahir?: SortOrder
    tgl_kelulusan?: SortOrder
    program_studi?: SortOrder
    fakultas?: SortOrder
    nomor_seri_ijazah?: SortOrder
    sebanyak_ijazah?: SortOrder
    sebanyak_transkip?: SortOrder
    sebanyak_akreditasi?: SortOrder
    jumlah_legalisir?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DataLegalisirWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DataLegalisirWhereInput | DataLegalisirWhereInput[]
    OR?: DataLegalisirWhereInput[]
    NOT?: DataLegalisirWhereInput | DataLegalisirWhereInput[]
    tanggal_pengajuan?: DateTimeFilter<"DataLegalisir"> | Date | string
    nomor_surat?: StringFilter<"DataLegalisir"> | string
    nama_mahasiswa?: StringFilter<"DataLegalisir"> | string
    tempat_lahir?: StringFilter<"DataLegalisir"> | string
    nim?: StringFilter<"DataLegalisir"> | string
    tgl_lahir?: DateTimeFilter<"DataLegalisir"> | Date | string
    tgl_kelulusan?: DateTimeFilter<"DataLegalisir"> | Date | string
    program_studi?: EnumProgramStudiFilter<"DataLegalisir"> | $Enums.ProgramStudi
    fakultas?: EnumFakultasFilter<"DataLegalisir"> | $Enums.Fakultas
    nomor_seri_ijazah?: StringFilter<"DataLegalisir"> | string
    sebanyak_ijazah?: IntFilter<"DataLegalisir"> | number
    sebanyak_transkip?: IntFilter<"DataLegalisir"> | number
    sebanyak_akreditasi?: IntFilter<"DataLegalisir"> | number
    jumlah_legalisir?: IntFilter<"DataLegalisir"> | number
    createdAt?: DateTimeFilter<"DataLegalisir"> | Date | string
    updatedAt?: DateTimeFilter<"DataLegalisir"> | Date | string
  }, "id">

  export type DataLegalisirOrderByWithAggregationInput = {
    id?: SortOrder
    tanggal_pengajuan?: SortOrder
    nomor_surat?: SortOrder
    nama_mahasiswa?: SortOrder
    tempat_lahir?: SortOrder
    nim?: SortOrder
    tgl_lahir?: SortOrder
    tgl_kelulusan?: SortOrder
    program_studi?: SortOrder
    fakultas?: SortOrder
    nomor_seri_ijazah?: SortOrder
    sebanyak_ijazah?: SortOrder
    sebanyak_transkip?: SortOrder
    sebanyak_akreditasi?: SortOrder
    jumlah_legalisir?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DataLegalisirCountOrderByAggregateInput
    _avg?: DataLegalisirAvgOrderByAggregateInput
    _max?: DataLegalisirMaxOrderByAggregateInput
    _min?: DataLegalisirMinOrderByAggregateInput
    _sum?: DataLegalisirSumOrderByAggregateInput
  }

  export type DataLegalisirScalarWhereWithAggregatesInput = {
    AND?: DataLegalisirScalarWhereWithAggregatesInput | DataLegalisirScalarWhereWithAggregatesInput[]
    OR?: DataLegalisirScalarWhereWithAggregatesInput[]
    NOT?: DataLegalisirScalarWhereWithAggregatesInput | DataLegalisirScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DataLegalisir"> | string
    tanggal_pengajuan?: DateTimeWithAggregatesFilter<"DataLegalisir"> | Date | string
    nomor_surat?: StringWithAggregatesFilter<"DataLegalisir"> | string
    nama_mahasiswa?: StringWithAggregatesFilter<"DataLegalisir"> | string
    tempat_lahir?: StringWithAggregatesFilter<"DataLegalisir"> | string
    nim?: StringWithAggregatesFilter<"DataLegalisir"> | string
    tgl_lahir?: DateTimeWithAggregatesFilter<"DataLegalisir"> | Date | string
    tgl_kelulusan?: DateTimeWithAggregatesFilter<"DataLegalisir"> | Date | string
    program_studi?: EnumProgramStudiWithAggregatesFilter<"DataLegalisir"> | $Enums.ProgramStudi
    fakultas?: EnumFakultasWithAggregatesFilter<"DataLegalisir"> | $Enums.Fakultas
    nomor_seri_ijazah?: StringWithAggregatesFilter<"DataLegalisir"> | string
    sebanyak_ijazah?: IntWithAggregatesFilter<"DataLegalisir"> | number
    sebanyak_transkip?: IntWithAggregatesFilter<"DataLegalisir"> | number
    sebanyak_akreditasi?: IntWithAggregatesFilter<"DataLegalisir"> | number
    jumlah_legalisir?: IntWithAggregatesFilter<"DataLegalisir"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DataLegalisir"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DataLegalisir"> | Date | string
  }

  export type DataPengajuanWhereInput = {
    AND?: DataPengajuanWhereInput | DataPengajuanWhereInput[]
    OR?: DataPengajuanWhereInput[]
    NOT?: DataPengajuanWhereInput | DataPengajuanWhereInput[]
    id?: StringFilter<"DataPengajuan"> | string
    tanggal_pengajuan?: DateTimeFilter<"DataPengajuan"> | Date | string
    nomor_surat?: StringFilter<"DataPengajuan"> | string
    nama_mahasiswa?: StringFilter<"DataPengajuan"> | string
    tempat_lahir?: StringFilter<"DataPengajuan"> | string
    nim?: StringFilter<"DataPengajuan"> | string
    tgl_lahir?: DateTimeFilter<"DataPengajuan"> | Date | string
    alamat_rumah?: StringFilter<"DataPengajuan"> | string
    semester?: EnumSemesterFilter<"DataPengajuan"> | $Enums.Semester
    program_studi?: EnumProgramStudiFilter<"DataPengajuan"> | $Enums.ProgramStudi
    fakultas?: EnumFakultasFilter<"DataPengajuan"> | $Enums.Fakultas
    thn_akademik?: StringFilter<"DataPengajuan"> | string
    keterangan_keperluan?: StringFilter<"DataPengajuan"> | string
    createdAt?: DateTimeFilter<"DataPengajuan"> | Date | string
    updatedAt?: DateTimeFilter<"DataPengajuan"> | Date | string
  }

  export type DataPengajuanOrderByWithRelationInput = {
    id?: SortOrder
    tanggal_pengajuan?: SortOrder
    nomor_surat?: SortOrder
    nama_mahasiswa?: SortOrder
    tempat_lahir?: SortOrder
    nim?: SortOrder
    tgl_lahir?: SortOrder
    alamat_rumah?: SortOrder
    semester?: SortOrder
    program_studi?: SortOrder
    fakultas?: SortOrder
    thn_akademik?: SortOrder
    keterangan_keperluan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DataPengajuanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DataPengajuanWhereInput | DataPengajuanWhereInput[]
    OR?: DataPengajuanWhereInput[]
    NOT?: DataPengajuanWhereInput | DataPengajuanWhereInput[]
    tanggal_pengajuan?: DateTimeFilter<"DataPengajuan"> | Date | string
    nomor_surat?: StringFilter<"DataPengajuan"> | string
    nama_mahasiswa?: StringFilter<"DataPengajuan"> | string
    tempat_lahir?: StringFilter<"DataPengajuan"> | string
    nim?: StringFilter<"DataPengajuan"> | string
    tgl_lahir?: DateTimeFilter<"DataPengajuan"> | Date | string
    alamat_rumah?: StringFilter<"DataPengajuan"> | string
    semester?: EnumSemesterFilter<"DataPengajuan"> | $Enums.Semester
    program_studi?: EnumProgramStudiFilter<"DataPengajuan"> | $Enums.ProgramStudi
    fakultas?: EnumFakultasFilter<"DataPengajuan"> | $Enums.Fakultas
    thn_akademik?: StringFilter<"DataPengajuan"> | string
    keterangan_keperluan?: StringFilter<"DataPengajuan"> | string
    createdAt?: DateTimeFilter<"DataPengajuan"> | Date | string
    updatedAt?: DateTimeFilter<"DataPengajuan"> | Date | string
  }, "id">

  export type DataPengajuanOrderByWithAggregationInput = {
    id?: SortOrder
    tanggal_pengajuan?: SortOrder
    nomor_surat?: SortOrder
    nama_mahasiswa?: SortOrder
    tempat_lahir?: SortOrder
    nim?: SortOrder
    tgl_lahir?: SortOrder
    alamat_rumah?: SortOrder
    semester?: SortOrder
    program_studi?: SortOrder
    fakultas?: SortOrder
    thn_akademik?: SortOrder
    keterangan_keperluan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DataPengajuanCountOrderByAggregateInput
    _max?: DataPengajuanMaxOrderByAggregateInput
    _min?: DataPengajuanMinOrderByAggregateInput
  }

  export type DataPengajuanScalarWhereWithAggregatesInput = {
    AND?: DataPengajuanScalarWhereWithAggregatesInput | DataPengajuanScalarWhereWithAggregatesInput[]
    OR?: DataPengajuanScalarWhereWithAggregatesInput[]
    NOT?: DataPengajuanScalarWhereWithAggregatesInput | DataPengajuanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DataPengajuan"> | string
    tanggal_pengajuan?: DateTimeWithAggregatesFilter<"DataPengajuan"> | Date | string
    nomor_surat?: StringWithAggregatesFilter<"DataPengajuan"> | string
    nama_mahasiswa?: StringWithAggregatesFilter<"DataPengajuan"> | string
    tempat_lahir?: StringWithAggregatesFilter<"DataPengajuan"> | string
    nim?: StringWithAggregatesFilter<"DataPengajuan"> | string
    tgl_lahir?: DateTimeWithAggregatesFilter<"DataPengajuan"> | Date | string
    alamat_rumah?: StringWithAggregatesFilter<"DataPengajuan"> | string
    semester?: EnumSemesterWithAggregatesFilter<"DataPengajuan"> | $Enums.Semester
    program_studi?: EnumProgramStudiWithAggregatesFilter<"DataPengajuan"> | $Enums.ProgramStudi
    fakultas?: EnumFakultasWithAggregatesFilter<"DataPengajuan"> | $Enums.Fakultas
    thn_akademik?: StringWithAggregatesFilter<"DataPengajuan"> | string
    keterangan_keperluan?: StringWithAggregatesFilter<"DataPengajuan"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DataPengajuan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DataPengajuan"> | Date | string
  }

  export type AdminCreateInput = {
    id?: string
    nama: string
    status?: $Enums.StatusAkun
    role?: string
    username: string
    password: string
    createdAt?: Date | string
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    nama: string
    status?: $Enums.StatusAkun
    role?: string
    username: string
    password: string
    createdAt?: Date | string
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusAkunFieldUpdateOperationsInput | $Enums.StatusAkun
    role?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusAkunFieldUpdateOperationsInput | $Enums.StatusAkun
    role?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id?: string
    nama: string
    status?: $Enums.StatusAkun
    role?: string
    username: string
    password: string
    createdAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusAkunFieldUpdateOperationsInput | $Enums.StatusAkun
    role?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusAkunFieldUpdateOperationsInput | $Enums.StatusAkun
    role?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataLegalisirCreateInput = {
    id?: string
    tanggal_pengajuan: Date | string
    nomor_surat: string
    nama_mahasiswa: string
    tempat_lahir: string
    nim: string
    tgl_lahir: Date | string
    tgl_kelulusan: Date | string
    program_studi: $Enums.ProgramStudi
    fakultas: $Enums.Fakultas
    nomor_seri_ijazah: string
    sebanyak_ijazah?: number
    sebanyak_transkip?: number
    sebanyak_akreditasi?: number
    jumlah_legalisir: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataLegalisirUncheckedCreateInput = {
    id?: string
    tanggal_pengajuan: Date | string
    nomor_surat: string
    nama_mahasiswa: string
    tempat_lahir: string
    nim: string
    tgl_lahir: Date | string
    tgl_kelulusan: Date | string
    program_studi: $Enums.ProgramStudi
    fakultas: $Enums.Fakultas
    nomor_seri_ijazah: string
    sebanyak_ijazah?: number
    sebanyak_transkip?: number
    sebanyak_akreditasi?: number
    jumlah_legalisir: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataLegalisirUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal_pengajuan?: DateTimeFieldUpdateOperationsInput | Date | string
    nomor_surat?: StringFieldUpdateOperationsInput | string
    nama_mahasiswa?: StringFieldUpdateOperationsInput | string
    tempat_lahir?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    tgl_kelulusan?: DateTimeFieldUpdateOperationsInput | Date | string
    program_studi?: EnumProgramStudiFieldUpdateOperationsInput | $Enums.ProgramStudi
    fakultas?: EnumFakultasFieldUpdateOperationsInput | $Enums.Fakultas
    nomor_seri_ijazah?: StringFieldUpdateOperationsInput | string
    sebanyak_ijazah?: IntFieldUpdateOperationsInput | number
    sebanyak_transkip?: IntFieldUpdateOperationsInput | number
    sebanyak_akreditasi?: IntFieldUpdateOperationsInput | number
    jumlah_legalisir?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataLegalisirUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal_pengajuan?: DateTimeFieldUpdateOperationsInput | Date | string
    nomor_surat?: StringFieldUpdateOperationsInput | string
    nama_mahasiswa?: StringFieldUpdateOperationsInput | string
    tempat_lahir?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    tgl_kelulusan?: DateTimeFieldUpdateOperationsInput | Date | string
    program_studi?: EnumProgramStudiFieldUpdateOperationsInput | $Enums.ProgramStudi
    fakultas?: EnumFakultasFieldUpdateOperationsInput | $Enums.Fakultas
    nomor_seri_ijazah?: StringFieldUpdateOperationsInput | string
    sebanyak_ijazah?: IntFieldUpdateOperationsInput | number
    sebanyak_transkip?: IntFieldUpdateOperationsInput | number
    sebanyak_akreditasi?: IntFieldUpdateOperationsInput | number
    jumlah_legalisir?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataLegalisirCreateManyInput = {
    id?: string
    tanggal_pengajuan: Date | string
    nomor_surat: string
    nama_mahasiswa: string
    tempat_lahir: string
    nim: string
    tgl_lahir: Date | string
    tgl_kelulusan: Date | string
    program_studi: $Enums.ProgramStudi
    fakultas: $Enums.Fakultas
    nomor_seri_ijazah: string
    sebanyak_ijazah?: number
    sebanyak_transkip?: number
    sebanyak_akreditasi?: number
    jumlah_legalisir: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataLegalisirUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal_pengajuan?: DateTimeFieldUpdateOperationsInput | Date | string
    nomor_surat?: StringFieldUpdateOperationsInput | string
    nama_mahasiswa?: StringFieldUpdateOperationsInput | string
    tempat_lahir?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    tgl_kelulusan?: DateTimeFieldUpdateOperationsInput | Date | string
    program_studi?: EnumProgramStudiFieldUpdateOperationsInput | $Enums.ProgramStudi
    fakultas?: EnumFakultasFieldUpdateOperationsInput | $Enums.Fakultas
    nomor_seri_ijazah?: StringFieldUpdateOperationsInput | string
    sebanyak_ijazah?: IntFieldUpdateOperationsInput | number
    sebanyak_transkip?: IntFieldUpdateOperationsInput | number
    sebanyak_akreditasi?: IntFieldUpdateOperationsInput | number
    jumlah_legalisir?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataLegalisirUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal_pengajuan?: DateTimeFieldUpdateOperationsInput | Date | string
    nomor_surat?: StringFieldUpdateOperationsInput | string
    nama_mahasiswa?: StringFieldUpdateOperationsInput | string
    tempat_lahir?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    tgl_kelulusan?: DateTimeFieldUpdateOperationsInput | Date | string
    program_studi?: EnumProgramStudiFieldUpdateOperationsInput | $Enums.ProgramStudi
    fakultas?: EnumFakultasFieldUpdateOperationsInput | $Enums.Fakultas
    nomor_seri_ijazah?: StringFieldUpdateOperationsInput | string
    sebanyak_ijazah?: IntFieldUpdateOperationsInput | number
    sebanyak_transkip?: IntFieldUpdateOperationsInput | number
    sebanyak_akreditasi?: IntFieldUpdateOperationsInput | number
    jumlah_legalisir?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataPengajuanCreateInput = {
    id?: string
    tanggal_pengajuan: Date | string
    nomor_surat: string
    nama_mahasiswa: string
    tempat_lahir: string
    nim: string
    tgl_lahir: Date | string
    alamat_rumah: string
    semester: $Enums.Semester
    program_studi: $Enums.ProgramStudi
    fakultas: $Enums.Fakultas
    thn_akademik: string
    keterangan_keperluan: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataPengajuanUncheckedCreateInput = {
    id?: string
    tanggal_pengajuan: Date | string
    nomor_surat: string
    nama_mahasiswa: string
    tempat_lahir: string
    nim: string
    tgl_lahir: Date | string
    alamat_rumah: string
    semester: $Enums.Semester
    program_studi: $Enums.ProgramStudi
    fakultas: $Enums.Fakultas
    thn_akademik: string
    keterangan_keperluan: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataPengajuanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal_pengajuan?: DateTimeFieldUpdateOperationsInput | Date | string
    nomor_surat?: StringFieldUpdateOperationsInput | string
    nama_mahasiswa?: StringFieldUpdateOperationsInput | string
    tempat_lahir?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat_rumah?: StringFieldUpdateOperationsInput | string
    semester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    program_studi?: EnumProgramStudiFieldUpdateOperationsInput | $Enums.ProgramStudi
    fakultas?: EnumFakultasFieldUpdateOperationsInput | $Enums.Fakultas
    thn_akademik?: StringFieldUpdateOperationsInput | string
    keterangan_keperluan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataPengajuanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal_pengajuan?: DateTimeFieldUpdateOperationsInput | Date | string
    nomor_surat?: StringFieldUpdateOperationsInput | string
    nama_mahasiswa?: StringFieldUpdateOperationsInput | string
    tempat_lahir?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat_rumah?: StringFieldUpdateOperationsInput | string
    semester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    program_studi?: EnumProgramStudiFieldUpdateOperationsInput | $Enums.ProgramStudi
    fakultas?: EnumFakultasFieldUpdateOperationsInput | $Enums.Fakultas
    thn_akademik?: StringFieldUpdateOperationsInput | string
    keterangan_keperluan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataPengajuanCreateManyInput = {
    id?: string
    tanggal_pengajuan: Date | string
    nomor_surat: string
    nama_mahasiswa: string
    tempat_lahir: string
    nim: string
    tgl_lahir: Date | string
    alamat_rumah: string
    semester: $Enums.Semester
    program_studi: $Enums.ProgramStudi
    fakultas: $Enums.Fakultas
    thn_akademik: string
    keterangan_keperluan: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataPengajuanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal_pengajuan?: DateTimeFieldUpdateOperationsInput | Date | string
    nomor_surat?: StringFieldUpdateOperationsInput | string
    nama_mahasiswa?: StringFieldUpdateOperationsInput | string
    tempat_lahir?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat_rumah?: StringFieldUpdateOperationsInput | string
    semester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    program_studi?: EnumProgramStudiFieldUpdateOperationsInput | $Enums.ProgramStudi
    fakultas?: EnumFakultasFieldUpdateOperationsInput | $Enums.Fakultas
    thn_akademik?: StringFieldUpdateOperationsInput | string
    keterangan_keperluan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataPengajuanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal_pengajuan?: DateTimeFieldUpdateOperationsInput | Date | string
    nomor_surat?: StringFieldUpdateOperationsInput | string
    nama_mahasiswa?: StringFieldUpdateOperationsInput | string
    tempat_lahir?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat_rumah?: StringFieldUpdateOperationsInput | string
    semester?: EnumSemesterFieldUpdateOperationsInput | $Enums.Semester
    program_studi?: EnumProgramStudiFieldUpdateOperationsInput | $Enums.ProgramStudi
    fakultas?: EnumFakultasFieldUpdateOperationsInput | $Enums.Fakultas
    thn_akademik?: StringFieldUpdateOperationsInput | string
    keterangan_keperluan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumStatusAkunFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAkun | EnumStatusAkunFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAkun[] | ListEnumStatusAkunFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAkun[] | ListEnumStatusAkunFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAkunFilter<$PrismaModel> | $Enums.StatusAkun
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

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    status?: SortOrder
    role?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    status?: SortOrder
    role?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    status?: SortOrder
    role?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
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

  export type EnumStatusAkunWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAkun | EnumStatusAkunFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAkun[] | ListEnumStatusAkunFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAkun[] | ListEnumStatusAkunFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAkunWithAggregatesFilter<$PrismaModel> | $Enums.StatusAkun
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusAkunFilter<$PrismaModel>
    _max?: NestedEnumStatusAkunFilter<$PrismaModel>
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

  export type EnumProgramStudiFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgramStudi | EnumProgramStudiFieldRefInput<$PrismaModel>
    in?: $Enums.ProgramStudi[] | ListEnumProgramStudiFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProgramStudi[] | ListEnumProgramStudiFieldRefInput<$PrismaModel>
    not?: NestedEnumProgramStudiFilter<$PrismaModel> | $Enums.ProgramStudi
  }

  export type EnumFakultasFilter<$PrismaModel = never> = {
    equals?: $Enums.Fakultas | EnumFakultasFieldRefInput<$PrismaModel>
    in?: $Enums.Fakultas[] | ListEnumFakultasFieldRefInput<$PrismaModel>
    notIn?: $Enums.Fakultas[] | ListEnumFakultasFieldRefInput<$PrismaModel>
    not?: NestedEnumFakultasFilter<$PrismaModel> | $Enums.Fakultas
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

  export type DataLegalisirCountOrderByAggregateInput = {
    id?: SortOrder
    tanggal_pengajuan?: SortOrder
    nomor_surat?: SortOrder
    nama_mahasiswa?: SortOrder
    tempat_lahir?: SortOrder
    nim?: SortOrder
    tgl_lahir?: SortOrder
    tgl_kelulusan?: SortOrder
    program_studi?: SortOrder
    fakultas?: SortOrder
    nomor_seri_ijazah?: SortOrder
    sebanyak_ijazah?: SortOrder
    sebanyak_transkip?: SortOrder
    sebanyak_akreditasi?: SortOrder
    jumlah_legalisir?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DataLegalisirAvgOrderByAggregateInput = {
    sebanyak_ijazah?: SortOrder
    sebanyak_transkip?: SortOrder
    sebanyak_akreditasi?: SortOrder
    jumlah_legalisir?: SortOrder
  }

  export type DataLegalisirMaxOrderByAggregateInput = {
    id?: SortOrder
    tanggal_pengajuan?: SortOrder
    nomor_surat?: SortOrder
    nama_mahasiswa?: SortOrder
    tempat_lahir?: SortOrder
    nim?: SortOrder
    tgl_lahir?: SortOrder
    tgl_kelulusan?: SortOrder
    program_studi?: SortOrder
    fakultas?: SortOrder
    nomor_seri_ijazah?: SortOrder
    sebanyak_ijazah?: SortOrder
    sebanyak_transkip?: SortOrder
    sebanyak_akreditasi?: SortOrder
    jumlah_legalisir?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DataLegalisirMinOrderByAggregateInput = {
    id?: SortOrder
    tanggal_pengajuan?: SortOrder
    nomor_surat?: SortOrder
    nama_mahasiswa?: SortOrder
    tempat_lahir?: SortOrder
    nim?: SortOrder
    tgl_lahir?: SortOrder
    tgl_kelulusan?: SortOrder
    program_studi?: SortOrder
    fakultas?: SortOrder
    nomor_seri_ijazah?: SortOrder
    sebanyak_ijazah?: SortOrder
    sebanyak_transkip?: SortOrder
    sebanyak_akreditasi?: SortOrder
    jumlah_legalisir?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DataLegalisirSumOrderByAggregateInput = {
    sebanyak_ijazah?: SortOrder
    sebanyak_transkip?: SortOrder
    sebanyak_akreditasi?: SortOrder
    jumlah_legalisir?: SortOrder
  }

  export type EnumProgramStudiWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgramStudi | EnumProgramStudiFieldRefInput<$PrismaModel>
    in?: $Enums.ProgramStudi[] | ListEnumProgramStudiFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProgramStudi[] | ListEnumProgramStudiFieldRefInput<$PrismaModel>
    not?: NestedEnumProgramStudiWithAggregatesFilter<$PrismaModel> | $Enums.ProgramStudi
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProgramStudiFilter<$PrismaModel>
    _max?: NestedEnumProgramStudiFilter<$PrismaModel>
  }

  export type EnumFakultasWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Fakultas | EnumFakultasFieldRefInput<$PrismaModel>
    in?: $Enums.Fakultas[] | ListEnumFakultasFieldRefInput<$PrismaModel>
    notIn?: $Enums.Fakultas[] | ListEnumFakultasFieldRefInput<$PrismaModel>
    not?: NestedEnumFakultasWithAggregatesFilter<$PrismaModel> | $Enums.Fakultas
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFakultasFilter<$PrismaModel>
    _max?: NestedEnumFakultasFilter<$PrismaModel>
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

  export type EnumSemesterFilter<$PrismaModel = never> = {
    equals?: $Enums.Semester | EnumSemesterFieldRefInput<$PrismaModel>
    in?: $Enums.Semester[] | ListEnumSemesterFieldRefInput<$PrismaModel>
    notIn?: $Enums.Semester[] | ListEnumSemesterFieldRefInput<$PrismaModel>
    not?: NestedEnumSemesterFilter<$PrismaModel> | $Enums.Semester
  }

  export type DataPengajuanCountOrderByAggregateInput = {
    id?: SortOrder
    tanggal_pengajuan?: SortOrder
    nomor_surat?: SortOrder
    nama_mahasiswa?: SortOrder
    tempat_lahir?: SortOrder
    nim?: SortOrder
    tgl_lahir?: SortOrder
    alamat_rumah?: SortOrder
    semester?: SortOrder
    program_studi?: SortOrder
    fakultas?: SortOrder
    thn_akademik?: SortOrder
    keterangan_keperluan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DataPengajuanMaxOrderByAggregateInput = {
    id?: SortOrder
    tanggal_pengajuan?: SortOrder
    nomor_surat?: SortOrder
    nama_mahasiswa?: SortOrder
    tempat_lahir?: SortOrder
    nim?: SortOrder
    tgl_lahir?: SortOrder
    alamat_rumah?: SortOrder
    semester?: SortOrder
    program_studi?: SortOrder
    fakultas?: SortOrder
    thn_akademik?: SortOrder
    keterangan_keperluan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DataPengajuanMinOrderByAggregateInput = {
    id?: SortOrder
    tanggal_pengajuan?: SortOrder
    nomor_surat?: SortOrder
    nama_mahasiswa?: SortOrder
    tempat_lahir?: SortOrder
    nim?: SortOrder
    tgl_lahir?: SortOrder
    alamat_rumah?: SortOrder
    semester?: SortOrder
    program_studi?: SortOrder
    fakultas?: SortOrder
    thn_akademik?: SortOrder
    keterangan_keperluan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSemesterWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Semester | EnumSemesterFieldRefInput<$PrismaModel>
    in?: $Enums.Semester[] | ListEnumSemesterFieldRefInput<$PrismaModel>
    notIn?: $Enums.Semester[] | ListEnumSemesterFieldRefInput<$PrismaModel>
    not?: NestedEnumSemesterWithAggregatesFilter<$PrismaModel> | $Enums.Semester
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSemesterFilter<$PrismaModel>
    _max?: NestedEnumSemesterFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumStatusAkunFieldUpdateOperationsInput = {
    set?: $Enums.StatusAkun
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumProgramStudiFieldUpdateOperationsInput = {
    set?: $Enums.ProgramStudi
  }

  export type EnumFakultasFieldUpdateOperationsInput = {
    set?: $Enums.Fakultas
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumSemesterFieldUpdateOperationsInput = {
    set?: $Enums.Semester
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

  export type NestedEnumStatusAkunFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAkun | EnumStatusAkunFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAkun[] | ListEnumStatusAkunFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAkun[] | ListEnumStatusAkunFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAkunFilter<$PrismaModel> | $Enums.StatusAkun
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

  export type NestedEnumStatusAkunWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAkun | EnumStatusAkunFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAkun[] | ListEnumStatusAkunFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAkun[] | ListEnumStatusAkunFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAkunWithAggregatesFilter<$PrismaModel> | $Enums.StatusAkun
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusAkunFilter<$PrismaModel>
    _max?: NestedEnumStatusAkunFilter<$PrismaModel>
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

  export type NestedEnumProgramStudiFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgramStudi | EnumProgramStudiFieldRefInput<$PrismaModel>
    in?: $Enums.ProgramStudi[] | ListEnumProgramStudiFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProgramStudi[] | ListEnumProgramStudiFieldRefInput<$PrismaModel>
    not?: NestedEnumProgramStudiFilter<$PrismaModel> | $Enums.ProgramStudi
  }

  export type NestedEnumFakultasFilter<$PrismaModel = never> = {
    equals?: $Enums.Fakultas | EnumFakultasFieldRefInput<$PrismaModel>
    in?: $Enums.Fakultas[] | ListEnumFakultasFieldRefInput<$PrismaModel>
    notIn?: $Enums.Fakultas[] | ListEnumFakultasFieldRefInput<$PrismaModel>
    not?: NestedEnumFakultasFilter<$PrismaModel> | $Enums.Fakultas
  }

  export type NestedEnumProgramStudiWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgramStudi | EnumProgramStudiFieldRefInput<$PrismaModel>
    in?: $Enums.ProgramStudi[] | ListEnumProgramStudiFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProgramStudi[] | ListEnumProgramStudiFieldRefInput<$PrismaModel>
    not?: NestedEnumProgramStudiWithAggregatesFilter<$PrismaModel> | $Enums.ProgramStudi
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProgramStudiFilter<$PrismaModel>
    _max?: NestedEnumProgramStudiFilter<$PrismaModel>
  }

  export type NestedEnumFakultasWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Fakultas | EnumFakultasFieldRefInput<$PrismaModel>
    in?: $Enums.Fakultas[] | ListEnumFakultasFieldRefInput<$PrismaModel>
    notIn?: $Enums.Fakultas[] | ListEnumFakultasFieldRefInput<$PrismaModel>
    not?: NestedEnumFakultasWithAggregatesFilter<$PrismaModel> | $Enums.Fakultas
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFakultasFilter<$PrismaModel>
    _max?: NestedEnumFakultasFilter<$PrismaModel>
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

  export type NestedEnumSemesterFilter<$PrismaModel = never> = {
    equals?: $Enums.Semester | EnumSemesterFieldRefInput<$PrismaModel>
    in?: $Enums.Semester[] | ListEnumSemesterFieldRefInput<$PrismaModel>
    notIn?: $Enums.Semester[] | ListEnumSemesterFieldRefInput<$PrismaModel>
    not?: NestedEnumSemesterFilter<$PrismaModel> | $Enums.Semester
  }

  export type NestedEnumSemesterWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Semester | EnumSemesterFieldRefInput<$PrismaModel>
    in?: $Enums.Semester[] | ListEnumSemesterFieldRefInput<$PrismaModel>
    notIn?: $Enums.Semester[] | ListEnumSemesterFieldRefInput<$PrismaModel>
    not?: NestedEnumSemesterWithAggregatesFilter<$PrismaModel> | $Enums.Semester
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSemesterFilter<$PrismaModel>
    _max?: NestedEnumSemesterFilter<$PrismaModel>
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