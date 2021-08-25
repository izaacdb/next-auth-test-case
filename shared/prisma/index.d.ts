
/**
 * Client
**/

import * as runtime from './runtime';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Account
 */

export type Account = {
  id: string
  userId: string
  providerType: string
  providerId: string
  providerAccountId: string
  refreshToken: string | null
  accessToken: string | null
  accessTokenExpires: Date | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Session
 */

export type Session = {
  id: string
  userId: string
  expires: Date
  sessionToken: string
  accessToken: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model User
 */

export type User = {
  id: string
  name: string | null
  email: string | null
  emailVerified: Date | null
  image: string | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model VerificationRequest
 */

export type VerificationRequest = {
  id: string
  identifier: string
  token: string
  expires: Date
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Category
 */

export type Category = {
  id: string
  value: string
}

/**
 * Model Country
 */

export type Country = {
  id: string
  value: string
}

/**
 * Model Finish
 */

export type Finish = {
  id: string
  value: string
}

/**
 * Model Legs
 */

export type Legs = {
  id: string
  value: string
}

/**
 * Model Order
 */

export type Order = {
  id: number
  linnworksId: string
  receivedDate: Date
  deliveryDate: Date
  manufactureDate: Date
  dispatchDate: Date
  boxQuantity: number
  deliveryService: DeliveryServiceEnum
  status: StatusEnum
  comment: string
  source: SourceEnum
}

/**
 * Model OrderSku
 */

export type OrderSku = {
  id: string
  status: StatusEnum
  comment: string
  quantity: number
  orderId: number
  skuId: string
}

/**
 * Model OrderSkuComponent
 */

export type OrderSkuComponent = {
  id: string
  status: StatusEnum
  comment: string
  bayNo: string
  stageStatuses: Prisma.JsonValue
  orderSkuId: string
  componentId: string
  boxSize: string
  boxNumber: number
  quantity: number
}

/**
 * Model Product
 */

export type Product = {
  id: string
  value: string
}

/**
 * Model Size
 */

export type Size = {
  id: string
  value: string
}

/**
 * Model Sku
 */

export type Sku = {
  id: string
  countryId: string
  categoryId: string
  productId: string
  sizeId: string
  finishId: string
  legsId: string
  boxQuantity: number
}

/**
 * Model SkuToComponent
 */

export type SkuToComponent = {
  componentId: string
  skuId: string
  boxSize: string
  boxNumber: number
  quantity: number
}

/**
 * Model ComponentType
 */

export type ComponentType = {
  id: number
  value: string
}

/**
 * Model Component
 */

export type Component = {
  id: string
  name: string
  length: number
  width: number
  depth: number
  weight: number
  stages: Prisma.JsonValue
  parentId: string | null
  inherit: boolean
  typeId: number
}

/**
 * Model Stage
 */

export type Stage = {
  id: number
  label: string
  order: number
  enabled: boolean
  barn: string
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const DeliveryServiceEnum: {
  GLB: 'GLB',
  GLB_A: 'GLB_A',
  FED_EX_INT: 'FED_EX_INT',
  FED_EX_UK: 'FED_EX_UK',
  WAY: 'WAY',
  COL: 'COL',
  UPS: 'UPS',
  XDP: 'XDP',
  PAN: 'PAN',
  TUF: 'TUF',
  TBC: 'TBC',
  ROY: 'ROY',
  ERR: 'ERR'
};

export type DeliveryServiceEnum = (typeof DeliveryServiceEnum)[keyof typeof DeliveryServiceEnum]


export const StatusEnum: {
  NOT_STARTED: 'NOT_STARTED',
  STARTED: 'STARTED',
  COMPLETED: 'COMPLETED',
  PROBLEM: 'PROBLEM',
  STOPPED: 'STOPPED',
  CANCELLED: 'CANCELLED',
  DISABLED: 'DISABLED'
};

export type StatusEnum = (typeof StatusEnum)[keyof typeof StatusEnum]


export const SourceEnum: {
  ETSY: 'ETSY',
  OPENCART: 'OPENCART',
  WAYFAIR: 'WAYFAIR',
  EBAY: 'EBAY',
  STAGING: 'STAGING',
  GLB_UK: 'GLB_UK',
  GLB_USA: 'GLB_USA'
};

export type SourceEnum = (typeof SourceEnum)[keyof typeof SourceEnum]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js (ORM replacement)
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js (ORM replacement)
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a raw query and returns the number of affected rows
   * @example
   * ```
   * // With parameters use prisma.$executeRaw``, values will be escaped automatically
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.$executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $executeRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.$queryRaw``, values will be escaped automatically
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.$queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $queryRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<GlobalReject>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.verificationRequest`: Exposes CRUD operations for the **VerificationRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationRequests
    * const verificationRequests = await prisma.verificationRequest.findMany()
    * ```
    */
  get verificationRequest(): Prisma.VerificationRequestDelegate<GlobalReject>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<GlobalReject>;

  /**
   * `prisma.country`: Exposes CRUD operations for the **Country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.country.findMany()
    * ```
    */
  get country(): Prisma.CountryDelegate<GlobalReject>;

  /**
   * `prisma.finish`: Exposes CRUD operations for the **Finish** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Finishes
    * const finishes = await prisma.finish.findMany()
    * ```
    */
  get finish(): Prisma.FinishDelegate<GlobalReject>;

  /**
   * `prisma.legs`: Exposes CRUD operations for the **Legs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Legs
    * const legs = await prisma.legs.findMany()
    * ```
    */
  get legs(): Prisma.LegsDelegate<GlobalReject>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<GlobalReject>;

  /**
   * `prisma.orderSku`: Exposes CRUD operations for the **OrderSku** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderSkus
    * const orderSkus = await prisma.orderSku.findMany()
    * ```
    */
  get orderSku(): Prisma.OrderSkuDelegate<GlobalReject>;

  /**
   * `prisma.orderSkuComponent`: Exposes CRUD operations for the **OrderSkuComponent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderSkuComponents
    * const orderSkuComponents = await prisma.orderSkuComponent.findMany()
    * ```
    */
  get orderSkuComponent(): Prisma.OrderSkuComponentDelegate<GlobalReject>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<GlobalReject>;

  /**
   * `prisma.size`: Exposes CRUD operations for the **Size** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sizes
    * const sizes = await prisma.size.findMany()
    * ```
    */
  get size(): Prisma.SizeDelegate<GlobalReject>;

  /**
   * `prisma.sku`: Exposes CRUD operations for the **Sku** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skus
    * const skus = await prisma.sku.findMany()
    * ```
    */
  get sku(): Prisma.SkuDelegate<GlobalReject>;

  /**
   * `prisma.skuToComponent`: Exposes CRUD operations for the **SkuToComponent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SkuToComponents
    * const skuToComponents = await prisma.skuToComponent.findMany()
    * ```
    */
  get skuToComponent(): Prisma.SkuToComponentDelegate<GlobalReject>;

  /**
   * `prisma.componentType`: Exposes CRUD operations for the **ComponentType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ComponentTypes
    * const componentTypes = await prisma.componentType.findMany()
    * ```
    */
  get componentType(): Prisma.ComponentTypeDelegate<GlobalReject>;

  /**
   * `prisma.component`: Exposes CRUD operations for the **Component** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Components
    * const components = await prisma.component.findMany()
    * ```
    */
  get component(): Prisma.ComponentDelegate<GlobalReject>;

  /**
   * `prisma.stage`: Exposes CRUD operations for the **Stage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stages
    * const stages = await prisma.stage.findMany()
    * ```
    */
  get stage(): Prisma.StageDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

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

  /**
   * Prisma Client JS version: 2.28.0
   * Query Engine version: 89facabd0366f63911d089156a7a70125bfbcd27
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | null | JsonObject | JsonArray

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = undefined |  string | number | boolean | null | InputJsonObject | InputJsonArray
   type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    VerificationRequest: 'VerificationRequest',
    Category: 'Category',
    Country: 'Country',
    Finish: 'Finish',
    Legs: 'Legs',
    Order: 'Order',
    OrderSku: 'OrderSku',
    OrderSkuComponent: 'OrderSkuComponent',
    Product: 'Product',
    Size: 'Size',
    Sku: 'Sku',
    SkuToComponent: 'SkuToComponent',
    ComponentType: 'ComponentType',
    Component: 'Component',
    Stage: 'Stage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
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
   * Model Account
   */


  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
    max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    providerType: string | null
    providerId: string | null
    providerAccountId: string | null
    refreshToken: string | null
    accessToken: string | null
    accessTokenExpires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    providerType: string | null
    providerId: string | null
    providerAccountId: string | null
    refreshToken: string | null
    accessToken: string | null
    accessTokenExpires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    providerType: number
    providerId: number
    providerAccountId: number
    refreshToken: number
    accessToken: number
    accessTokenExpires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    providerType?: true
    providerId?: true
    providerAccountId?: true
    refreshToken?: true
    accessToken?: true
    accessTokenExpires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    providerType?: true
    providerId?: true
    providerAccountId?: true
    refreshToken?: true
    accessToken?: true
    accessTokenExpires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    providerType?: true
    providerId?: true
    providerAccountId?: true
    refreshToken?: true
    accessToken?: true
    accessTokenExpires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs = {
    /**
     * Filter which Account to aggregate.
     * 
    **/
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }


    
    
  export type AccountGroupByArgs = {
    where?: AccountWhereInput
    orderBy?: Enumerable<AccountOrderByInput>
    by: Array<AccountScalarFieldEnum>
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }


  export type AccountGroupByOutputType = {
    id: string
    userId: string
    providerType: string
    providerId: string
    providerAccountId: string
    refreshToken: string | null
    accessToken: string | null
    accessTokenExpires: Date | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Promise<
    Array<
      PickArray<AccountGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], AccountGroupByOutputType[P]> 
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      > 
    >


  export type AccountSelect = {
    id?: boolean
    userId?: boolean
    providerType?: boolean
    providerId?: boolean
    providerAccountId?: boolean
    refreshToken?: boolean
    accessToken?: boolean
    accessTokenExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserArgs
  }

  export type AccountInclude = {
    user?: boolean | UserArgs
  }

  export type AccountGetPayload<
    S extends boolean | null | undefined | AccountArgs,
    U = keyof S
      > = S extends true
        ? Account
    : S extends undefined
    ? never
    : S extends AccountArgs | AccountFindManyArgs
    ?'include' extends U
    ? Account  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'user'
        ? UserGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Account ?Account [P]
  : 
          P extends 'user'
        ? UserGetPayload<S['select'][P]> : never
  } 
    : Account
  : Account


  type AccountCountArgs = Merge<
    Omit<AccountFindManyArgs, 'select' | 'include'> & {
      select?: AccountCountAggregateInputType | true
    }
  >

  export interface AccountDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AccountFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Account'> extends True ? CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>> : CheckSelect<T, Prisma__AccountClient<Account | null >, Prisma__AccountClient<AccountGetPayload<T> | null >>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AccountFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Account'> extends True ? CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>> : CheckSelect<T, Prisma__AccountClient<Account | null >, Prisma__AccountClient<AccountGetPayload<T> | null >>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountFindManyArgs>(
      args?: SelectSubset<T, AccountFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Account>>, PrismaPromise<Array<AccountGetPayload<T>>>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
    **/
    create<T extends AccountCreateArgs>(
      args: SelectSubset<T, AccountCreateArgs>
    ): CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>>

    /**
     * Create many Accounts.
     *     @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     *     @example
     *     // Create many Accounts
     *     const account = await prisma.account.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccountCreateManyArgs>(
      args?: SelectSubset<T, AccountCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
    **/
    delete<T extends AccountDeleteArgs>(
      args: SelectSubset<T, AccountDeleteArgs>
    ): CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountUpdateArgs>(
      args: SelectSubset<T, AccountUpdateArgs>
    ): CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountDeleteManyArgs>(
      args?: SelectSubset<T, AccountDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountUpdateManyArgs>(
      args: SelectSubset<T, AccountUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
    **/
    upsert<T extends AccountUpsertArgs>(
      args: SelectSubset<T, AccountUpsertArgs>
    ): CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AccountClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Throw an Error if a Account can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Account to fetch.
     * 
    **/
    where: AccountWhereUniqueInput
  }


  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Throw an Error if a Account can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Account to fetch.
     * 
    **/
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     * 
    **/
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     * 
    **/
    distinct?: Enumerable<AccountScalarFieldEnum>
  }


  /**
   * Account findMany
   */
  export type AccountFindManyArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter, which Accounts to fetch.
     * 
    **/
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     * 
    **/
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AccountScalarFieldEnum>
  }


  /**
   * Account create
   */
  export type AccountCreateArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * The data needed to create a Account.
     * 
    **/
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }


  /**
   * Account createMany
   */
  export type AccountCreateManyArgs = {
    data: Enumerable<AccountCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Account update
   */
  export type AccountUpdateArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * The data needed to update a Account.
     * 
    **/
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     * 
    **/
    where: AccountWhereUniqueInput
  }


  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs = {
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    where?: AccountWhereInput
  }


  /**
   * Account upsert
   */
  export type AccountUpsertArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * The filter to search for the Account to update in case it exists.
     * 
    **/
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     * 
    **/
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }


  /**
   * Account delete
   */
  export type AccountDeleteArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter which Account to delete.
     * 
    **/
    where: AccountWhereUniqueInput
  }


  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs = {
    where?: AccountWhereInput
  }


  /**
   * Account without action
   */
  export type AccountArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
  }



  /**
   * Model Session
   */


  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
    max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    expires: Date | null
    sessionToken: string | null
    accessToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    expires: Date | null
    sessionToken: string | null
    accessToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    expires: number
    sessionToken: number
    accessToken: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    expires?: true
    sessionToken?: true
    accessToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    expires?: true
    sessionToken?: true
    accessToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    expires?: true
    sessionToken?: true
    accessToken?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs = {
    /**
     * Filter which Session to aggregate.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }


    
    
  export type SessionGroupByArgs = {
    where?: SessionWhereInput
    orderBy?: Enumerable<SessionOrderByInput>
    by: Array<SessionScalarFieldEnum>
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }


  export type SessionGroupByOutputType = {
    id: string
    userId: string
    expires: Date
    sessionToken: string
    accessToken: string
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Promise<
    Array<
      PickArray<SessionGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], SessionGroupByOutputType[P]> 
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      > 
    >


  export type SessionSelect = {
    id?: boolean
    userId?: boolean
    expires?: boolean
    sessionToken?: boolean
    accessToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserArgs
  }

  export type SessionInclude = {
    user?: boolean | UserArgs
  }

  export type SessionGetPayload<
    S extends boolean | null | undefined | SessionArgs,
    U = keyof S
      > = S extends true
        ? Session
    : S extends undefined
    ? never
    : S extends SessionArgs | SessionFindManyArgs
    ?'include' extends U
    ? Session  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'user'
        ? UserGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Session ?Session [P]
  : 
          P extends 'user'
        ? UserGetPayload<S['select'][P]> : never
  } 
    : Session
  : Session


  type SessionCountArgs = Merge<
    Omit<SessionFindManyArgs, 'select' | 'include'> & {
      select?: SessionCountAggregateInputType | true
    }
  >

  export interface SessionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SessionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Session'> extends True ? CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>> : CheckSelect<T, Prisma__SessionClient<Session | null >, Prisma__SessionClient<SessionGetPayload<T> | null >>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SessionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Session'> extends True ? CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>> : CheckSelect<T, Prisma__SessionClient<Session | null >, Prisma__SessionClient<SessionGetPayload<T> | null >>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs>(
      args?: SelectSubset<T, SessionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Session>>, PrismaPromise<Array<SessionGetPayload<T>>>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs>(
      args: SelectSubset<T, SessionCreateArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionCreateManyArgs>(
      args?: SelectSubset<T, SessionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs>(
      args: SelectSubset<T, SessionDeleteArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs>(
      args: SelectSubset<T, SessionUpdateArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs>(
      args?: SelectSubset<T, SessionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs>(
      args: SelectSubset<T, SessionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs>(
      args: SelectSubset<T, SessionUpsertArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SessionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Throw an Error if a Session can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Session to fetch.
     * 
    **/
    where: SessionWhereUniqueInput
  }


  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Throw an Error if a Session can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Session to fetch.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     * 
    **/
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * Session findMany
   */
  export type SessionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Filter, which Sessions to fetch.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * Session create
   */
  export type SessionCreateArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * The data needed to create a Session.
     * 
    **/
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session createMany
   */
  export type SessionCreateManyArgs = {
    data: Enumerable<SessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * The data needed to update a Session.
     * 
    **/
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     * 
    **/
    where: SessionWhereUniqueInput
  }


  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs = {
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * The filter to search for the Session to update in case it exists.
     * 
    **/
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     * 
    **/
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }


  /**
   * Session delete
   */
  export type SessionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Filter which Session to delete.
     * 
    **/
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs = {
    where?: SessionWhereInput
  }


  /**
   * Session without action
   */
  export type SessionArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
    max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }


    
    
  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Promise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], UserGroupByOutputType[P]> 
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      > 
    >


  export type UserSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | AccountFindManyArgs
    sessions?: boolean | SessionFindManyArgs
  }

  export type UserInclude = {
    accounts?: boolean | AccountFindManyArgs
    sessions?: boolean | SessionFindManyArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'accounts'
        ? Array < AccountGetPayload<S['include'][P]>>  :
        P extends 'sessions'
        ? Array < SessionGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof User ?User [P]
  : 
          P extends 'accounts'
        ? Array < AccountGetPayload<S['select'][P]>>  :
        P extends 'sessions'
        ? Array < SessionGetPayload<S['select'][P]>>  : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
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
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

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
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

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
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    ): PrismaPromise<
      T extends _Record<'select', any>
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

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
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    accounts<T extends AccountFindManyArgs = {}>(args?: Subset<T, AccountFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Account>>, PrismaPromise<Array<AccountGetPayload<T>>>>;

    sessions<T extends SessionFindManyArgs = {}>(args?: Subset<T, SessionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Session>>, PrismaPromise<Array<SessionGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model VerificationRequest
   */


  export type AggregateVerificationRequest = {
    _count: VerificationRequestCountAggregateOutputType | null
    count: VerificationRequestCountAggregateOutputType | null
    _min: VerificationRequestMinAggregateOutputType | null
    min: VerificationRequestMinAggregateOutputType | null
    _max: VerificationRequestMaxAggregateOutputType | null
    max: VerificationRequestMaxAggregateOutputType | null
  }

  export type VerificationRequestMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    token: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationRequestMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    token: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationRequestCountAggregateOutputType = {
    id: number
    identifier: number
    token: number
    expires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationRequestMinAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationRequestMaxAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationRequestCountAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationRequestAggregateArgs = {
    /**
     * Filter which VerificationRequest to aggregate.
     * 
    **/
    where?: VerificationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationRequests to fetch.
     * 
    **/
    orderBy?: Enumerable<VerificationRequestOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: VerificationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationRequests from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationRequests.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationRequests
    **/
    _count?: true | VerificationRequestCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | VerificationRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationRequestMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: VerificationRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationRequestMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: VerificationRequestMaxAggregateInputType
  }

  export type GetVerificationRequestAggregateType<T extends VerificationRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationRequest[P]>
      : GetScalarType<T[P], AggregateVerificationRequest[P]>
  }


    
    
  export type VerificationRequestGroupByArgs = {
    where?: VerificationRequestWhereInput
    orderBy?: Enumerable<VerificationRequestOrderByInput>
    by: Array<VerificationRequestScalarFieldEnum>
    having?: VerificationRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationRequestCountAggregateInputType | true
    _min?: VerificationRequestMinAggregateInputType
    _max?: VerificationRequestMaxAggregateInputType
  }


  export type VerificationRequestGroupByOutputType = {
    id: string
    identifier: string
    token: string
    expires: Date
    createdAt: Date
    updatedAt: Date
    _count: VerificationRequestCountAggregateOutputType | null
    _min: VerificationRequestMinAggregateOutputType | null
    _max: VerificationRequestMaxAggregateOutputType | null
  }

  type GetVerificationRequestGroupByPayload<T extends VerificationRequestGroupByArgs> = Promise<
    Array<
      PickArray<VerificationRequestGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof VerificationRequestGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], VerificationRequestGroupByOutputType[P]> 
            : GetScalarType<T[P], VerificationRequestGroupByOutputType[P]>
        }
      > 
    >


  export type VerificationRequestSelect = {
    id?: boolean
    identifier?: boolean
    token?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationRequestGetPayload<
    S extends boolean | null | undefined | VerificationRequestArgs,
    U = keyof S
      > = S extends true
        ? VerificationRequest
    : S extends undefined
    ? never
    : S extends VerificationRequestArgs | VerificationRequestFindManyArgs
    ?'include' extends U
    ? VerificationRequest 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof VerificationRequest ?VerificationRequest [P]
  : 
     never
  } 
    : VerificationRequest
  : VerificationRequest


  type VerificationRequestCountArgs = Merge<
    Omit<VerificationRequestFindManyArgs, 'select' | 'include'> & {
      select?: VerificationRequestCountAggregateInputType | true
    }
  >

  export interface VerificationRequestDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one VerificationRequest that matches the filter.
     * @param {VerificationRequestFindUniqueArgs} args - Arguments to find a VerificationRequest
     * @example
     * // Get one VerificationRequest
     * const verificationRequest = await prisma.verificationRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VerificationRequestFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VerificationRequestFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'VerificationRequest'> extends True ? CheckSelect<T, Prisma__VerificationRequestClient<VerificationRequest>, Prisma__VerificationRequestClient<VerificationRequestGetPayload<T>>> : CheckSelect<T, Prisma__VerificationRequestClient<VerificationRequest | null >, Prisma__VerificationRequestClient<VerificationRequestGetPayload<T> | null >>

    /**
     * Find the first VerificationRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationRequestFindFirstArgs} args - Arguments to find a VerificationRequest
     * @example
     * // Get one VerificationRequest
     * const verificationRequest = await prisma.verificationRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VerificationRequestFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VerificationRequestFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'VerificationRequest'> extends True ? CheckSelect<T, Prisma__VerificationRequestClient<VerificationRequest>, Prisma__VerificationRequestClient<VerificationRequestGetPayload<T>>> : CheckSelect<T, Prisma__VerificationRequestClient<VerificationRequest | null >, Prisma__VerificationRequestClient<VerificationRequestGetPayload<T> | null >>

    /**
     * Find zero or more VerificationRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationRequestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationRequests
     * const verificationRequests = await prisma.verificationRequest.findMany()
     * 
     * // Get first 10 VerificationRequests
     * const verificationRequests = await prisma.verificationRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationRequestWithIdOnly = await prisma.verificationRequest.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VerificationRequestFindManyArgs>(
      args?: SelectSubset<T, VerificationRequestFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<VerificationRequest>>, PrismaPromise<Array<VerificationRequestGetPayload<T>>>>

    /**
     * Create a VerificationRequest.
     * @param {VerificationRequestCreateArgs} args - Arguments to create a VerificationRequest.
     * @example
     * // Create one VerificationRequest
     * const VerificationRequest = await prisma.verificationRequest.create({
     *   data: {
     *     // ... data to create a VerificationRequest
     *   }
     * })
     * 
    **/
    create<T extends VerificationRequestCreateArgs>(
      args: SelectSubset<T, VerificationRequestCreateArgs>
    ): CheckSelect<T, Prisma__VerificationRequestClient<VerificationRequest>, Prisma__VerificationRequestClient<VerificationRequestGetPayload<T>>>

    /**
     * Create many VerificationRequests.
     *     @param {VerificationRequestCreateManyArgs} args - Arguments to create many VerificationRequests.
     *     @example
     *     // Create many VerificationRequests
     *     const verificationRequest = await prisma.verificationRequest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VerificationRequestCreateManyArgs>(
      args?: SelectSubset<T, VerificationRequestCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a VerificationRequest.
     * @param {VerificationRequestDeleteArgs} args - Arguments to delete one VerificationRequest.
     * @example
     * // Delete one VerificationRequest
     * const VerificationRequest = await prisma.verificationRequest.delete({
     *   where: {
     *     // ... filter to delete one VerificationRequest
     *   }
     * })
     * 
    **/
    delete<T extends VerificationRequestDeleteArgs>(
      args: SelectSubset<T, VerificationRequestDeleteArgs>
    ): CheckSelect<T, Prisma__VerificationRequestClient<VerificationRequest>, Prisma__VerificationRequestClient<VerificationRequestGetPayload<T>>>

    /**
     * Update one VerificationRequest.
     * @param {VerificationRequestUpdateArgs} args - Arguments to update one VerificationRequest.
     * @example
     * // Update one VerificationRequest
     * const verificationRequest = await prisma.verificationRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VerificationRequestUpdateArgs>(
      args: SelectSubset<T, VerificationRequestUpdateArgs>
    ): CheckSelect<T, Prisma__VerificationRequestClient<VerificationRequest>, Prisma__VerificationRequestClient<VerificationRequestGetPayload<T>>>

    /**
     * Delete zero or more VerificationRequests.
     * @param {VerificationRequestDeleteManyArgs} args - Arguments to filter VerificationRequests to delete.
     * @example
     * // Delete a few VerificationRequests
     * const { count } = await prisma.verificationRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VerificationRequestDeleteManyArgs>(
      args?: SelectSubset<T, VerificationRequestDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationRequests
     * const verificationRequest = await prisma.verificationRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VerificationRequestUpdateManyArgs>(
      args: SelectSubset<T, VerificationRequestUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationRequest.
     * @param {VerificationRequestUpsertArgs} args - Arguments to update or create a VerificationRequest.
     * @example
     * // Update or create a VerificationRequest
     * const verificationRequest = await prisma.verificationRequest.upsert({
     *   create: {
     *     // ... data to create a VerificationRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationRequest we want to update
     *   }
     * })
    **/
    upsert<T extends VerificationRequestUpsertArgs>(
      args: SelectSubset<T, VerificationRequestUpsertArgs>
    ): CheckSelect<T, Prisma__VerificationRequestClient<VerificationRequest>, Prisma__VerificationRequestClient<VerificationRequestGetPayload<T>>>

    /**
     * Count the number of VerificationRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationRequestCountArgs} args - Arguments to filter VerificationRequests to count.
     * @example
     * // Count the number of VerificationRequests
     * const count = await prisma.verificationRequest.count({
     *   where: {
     *     // ... the filter for the VerificationRequests we want to count
     *   }
     * })
    **/
    count<T extends VerificationRequestCountArgs>(
      args?: Subset<T, VerificationRequestCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationRequestAggregateArgs>(args: Subset<T, VerificationRequestAggregateArgs>): PrismaPromise<GetVerificationRequestAggregateType<T>>

    /**
     * Group by VerificationRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationRequestGroupByArgs} args - Group by arguments.
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
      T extends VerificationRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationRequestGroupByArgs['orderBy'] }
        : { orderBy?: VerificationRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, VerificationRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationRequestGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VerificationRequestClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * VerificationRequest findUnique
   */
  export type VerificationRequestFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     * 
    **/
    select?: VerificationRequestSelect | null
    /**
     * Throw an Error if a VerificationRequest can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which VerificationRequest to fetch.
     * 
    **/
    where: VerificationRequestWhereUniqueInput
  }


  /**
   * VerificationRequest findFirst
   */
  export type VerificationRequestFindFirstArgs = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     * 
    **/
    select?: VerificationRequestSelect | null
    /**
     * Throw an Error if a VerificationRequest can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which VerificationRequest to fetch.
     * 
    **/
    where?: VerificationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationRequests to fetch.
     * 
    **/
    orderBy?: Enumerable<VerificationRequestOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationRequests.
     * 
    **/
    cursor?: VerificationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationRequests from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationRequests.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationRequests.
     * 
    **/
    distinct?: Enumerable<VerificationRequestScalarFieldEnum>
  }


  /**
   * VerificationRequest findMany
   */
  export type VerificationRequestFindManyArgs = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     * 
    **/
    select?: VerificationRequestSelect | null
    /**
     * Filter, which VerificationRequests to fetch.
     * 
    **/
    where?: VerificationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationRequests to fetch.
     * 
    **/
    orderBy?: Enumerable<VerificationRequestOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationRequests.
     * 
    **/
    cursor?: VerificationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationRequests from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationRequests.
     * 
    **/
    skip?: number
    distinct?: Enumerable<VerificationRequestScalarFieldEnum>
  }


  /**
   * VerificationRequest create
   */
  export type VerificationRequestCreateArgs = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     * 
    **/
    select?: VerificationRequestSelect | null
    /**
     * The data needed to create a VerificationRequest.
     * 
    **/
    data: XOR<VerificationRequestCreateInput, VerificationRequestUncheckedCreateInput>
  }


  /**
   * VerificationRequest createMany
   */
  export type VerificationRequestCreateManyArgs = {
    data: Enumerable<VerificationRequestCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * VerificationRequest update
   */
  export type VerificationRequestUpdateArgs = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     * 
    **/
    select?: VerificationRequestSelect | null
    /**
     * The data needed to update a VerificationRequest.
     * 
    **/
    data: XOR<VerificationRequestUpdateInput, VerificationRequestUncheckedUpdateInput>
    /**
     * Choose, which VerificationRequest to update.
     * 
    **/
    where: VerificationRequestWhereUniqueInput
  }


  /**
   * VerificationRequest updateMany
   */
  export type VerificationRequestUpdateManyArgs = {
    data: XOR<VerificationRequestUpdateManyMutationInput, VerificationRequestUncheckedUpdateManyInput>
    where?: VerificationRequestWhereInput
  }


  /**
   * VerificationRequest upsert
   */
  export type VerificationRequestUpsertArgs = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     * 
    **/
    select?: VerificationRequestSelect | null
    /**
     * The filter to search for the VerificationRequest to update in case it exists.
     * 
    **/
    where: VerificationRequestWhereUniqueInput
    /**
     * In case the VerificationRequest found by the `where` argument doesn't exist, create a new VerificationRequest with this data.
     * 
    **/
    create: XOR<VerificationRequestCreateInput, VerificationRequestUncheckedCreateInput>
    /**
     * In case the VerificationRequest was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<VerificationRequestUpdateInput, VerificationRequestUncheckedUpdateInput>
  }


  /**
   * VerificationRequest delete
   */
  export type VerificationRequestDeleteArgs = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     * 
    **/
    select?: VerificationRequestSelect | null
    /**
     * Filter which VerificationRequest to delete.
     * 
    **/
    where: VerificationRequestWhereUniqueInput
  }


  /**
   * VerificationRequest deleteMany
   */
  export type VerificationRequestDeleteManyArgs = {
    where?: VerificationRequestWhereInput
  }


  /**
   * VerificationRequest without action
   */
  export type VerificationRequestArgs = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     * 
    **/
    select?: VerificationRequestSelect | null
  }



  /**
   * Model Category
   */


  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
    max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    value: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    value: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    value: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    value?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    value?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    value?: true
    _all?: true
  }

  export type CategoryAggregateArgs = {
    /**
     * Filter which Category to aggregate.
     * 
    **/
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoryOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }


    
    
  export type CategoryGroupByArgs = {
    where?: CategoryWhereInput
    orderBy?: Enumerable<CategoryOrderByInput>
    by: Array<CategoryScalarFieldEnum>
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }


  export type CategoryGroupByOutputType = {
    id: string
    value: string
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Promise<
    Array<
      PickArray<CategoryGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], CategoryGroupByOutputType[P]> 
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      > 
    >


  export type CategorySelect = {
    id?: boolean
    value?: boolean
    skus?: boolean | SkuFindManyArgs
  }

  export type CategoryInclude = {
    skus?: boolean | SkuFindManyArgs
  }

  export type CategoryGetPayload<
    S extends boolean | null | undefined | CategoryArgs,
    U = keyof S
      > = S extends true
        ? Category
    : S extends undefined
    ? never
    : S extends CategoryArgs | CategoryFindManyArgs
    ?'include' extends U
    ? Category  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'skus'
        ? Array < SkuGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Category ?Category [P]
  : 
          P extends 'skus'
        ? Array < SkuGetPayload<S['select'][P]>>  : never
  } 
    : Category
  : Category


  type CategoryCountArgs = Merge<
    Omit<CategoryFindManyArgs, 'select' | 'include'> & {
      select?: CategoryCountAggregateInputType | true
    }
  >

  export interface CategoryDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CategoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Category'> extends True ? CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>> : CheckSelect<T, Prisma__CategoryClient<Category | null >, Prisma__CategoryClient<CategoryGetPayload<T> | null >>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CategoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Category'> extends True ? CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>> : CheckSelect<T, Prisma__CategoryClient<Category | null >, Prisma__CategoryClient<CategoryGetPayload<T> | null >>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs>(
      args?: SelectSubset<T, CategoryFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Category>>, PrismaPromise<Array<CategoryGetPayload<T>>>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs>(
      args: SelectSubset<T, CategoryCreateArgs>
    ): CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs>(
      args?: SelectSubset<T, CategoryCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs>(
      args: SelectSubset<T, CategoryDeleteArgs>
    ): CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs>(
      args: SelectSubset<T, CategoryUpdateArgs>
    ): CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs>(
      args?: SelectSubset<T, CategoryDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs>(
      args: SelectSubset<T, CategoryUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs>(
      args: SelectSubset<T, CategoryUpsertArgs>
    ): CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CategoryClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    skus<T extends SkuFindManyArgs = {}>(args?: Subset<T, SkuFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Sku>>, PrismaPromise<Array<SkuGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Throw an Error if a Category can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Category to fetch.
     * 
    **/
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Throw an Error if a Category can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Category to fetch.
     * 
    **/
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoryOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     * 
    **/
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     * 
    **/
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Filter, which Categories to fetch.
     * 
    **/
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoryOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     * 
    **/
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * The data needed to create a Category.
     * 
    **/
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs = {
    data: Enumerable<CategoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * The data needed to update a Category.
     * 
    **/
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     * 
    **/
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs = {
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * The filter to search for the Category to update in case it exists.
     * 
    **/
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     * 
    **/
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Filter which Category to delete.
     * 
    **/
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs = {
    where?: CategoryWhereInput
  }


  /**
   * Category without action
   */
  export type CategoryArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
  }



  /**
   * Model Country
   */


  export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null
    count: CountryCountAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
    max: CountryMaxAggregateOutputType | null
  }

  export type CountryMinAggregateOutputType = {
    id: string | null
    value: string | null
  }

  export type CountryMaxAggregateOutputType = {
    id: string | null
    value: string | null
  }

  export type CountryCountAggregateOutputType = {
    id: number
    value: number
    _all: number
  }


  export type CountryMinAggregateInputType = {
    id?: true
    value?: true
  }

  export type CountryMaxAggregateInputType = {
    id?: true
    value?: true
  }

  export type CountryCountAggregateInputType = {
    id?: true
    value?: true
    _all?: true
  }

  export type CountryAggregateArgs = {
    /**
     * Filter which Country to aggregate.
     * 
    **/
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     * 
    **/
    orderBy?: Enumerable<CountryOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countries
    **/
    _count?: true | CountryCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: CountryMaxAggregateInputType
  }

  export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountry[P]>
      : GetScalarType<T[P], AggregateCountry[P]>
  }


    
    
  export type CountryGroupByArgs = {
    where?: CountryWhereInput
    orderBy?: Enumerable<CountryOrderByInput>
    by: Array<CountryScalarFieldEnum>
    having?: CountryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCountAggregateInputType | true
    _min?: CountryMinAggregateInputType
    _max?: CountryMaxAggregateInputType
  }


  export type CountryGroupByOutputType = {
    id: string
    value: string
    _count: CountryCountAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  type GetCountryGroupByPayload<T extends CountryGroupByArgs> = Promise<
    Array<
      PickArray<CountryGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], CountryGroupByOutputType[P]> 
            : GetScalarType<T[P], CountryGroupByOutputType[P]>
        }
      > 
    >


  export type CountrySelect = {
    id?: boolean
    value?: boolean
    skus?: boolean | SkuFindManyArgs
  }

  export type CountryInclude = {
    skus?: boolean | SkuFindManyArgs
  }

  export type CountryGetPayload<
    S extends boolean | null | undefined | CountryArgs,
    U = keyof S
      > = S extends true
        ? Country
    : S extends undefined
    ? never
    : S extends CountryArgs | CountryFindManyArgs
    ?'include' extends U
    ? Country  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'skus'
        ? Array < SkuGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Country ?Country [P]
  : 
          P extends 'skus'
        ? Array < SkuGetPayload<S['select'][P]>>  : never
  } 
    : Country
  : Country


  type CountryCountArgs = Merge<
    Omit<CountryFindManyArgs, 'select' | 'include'> & {
      select?: CountryCountAggregateInputType | true
    }
  >

  export interface CountryDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Country that matches the filter.
     * @param {CountryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CountryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CountryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Country'> extends True ? CheckSelect<T, Prisma__CountryClient<Country>, Prisma__CountryClient<CountryGetPayload<T>>> : CheckSelect<T, Prisma__CountryClient<Country | null >, Prisma__CountryClient<CountryGetPayload<T> | null >>

    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CountryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CountryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Country'> extends True ? CheckSelect<T, Prisma__CountryClient<Country>, Prisma__CountryClient<CountryGetPayload<T>>> : CheckSelect<T, Prisma__CountryClient<Country | null >, Prisma__CountryClient<CountryGetPayload<T> | null >>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countryWithIdOnly = await prisma.country.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CountryFindManyArgs>(
      args?: SelectSubset<T, CountryFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Country>>, PrismaPromise<Array<CountryGetPayload<T>>>>

    /**
     * Create a Country.
     * @param {CountryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     * 
    **/
    create<T extends CountryCreateArgs>(
      args: SelectSubset<T, CountryCreateArgs>
    ): CheckSelect<T, Prisma__CountryClient<Country>, Prisma__CountryClient<CountryGetPayload<T>>>

    /**
     * Create many Countries.
     *     @param {CountryCreateManyArgs} args - Arguments to create many Countries.
     *     @example
     *     // Create many Countries
     *     const country = await prisma.country.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CountryCreateManyArgs>(
      args?: SelectSubset<T, CountryCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Country.
     * @param {CountryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     * 
    **/
    delete<T extends CountryDeleteArgs>(
      args: SelectSubset<T, CountryDeleteArgs>
    ): CheckSelect<T, Prisma__CountryClient<Country>, Prisma__CountryClient<CountryGetPayload<T>>>

    /**
     * Update one Country.
     * @param {CountryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CountryUpdateArgs>(
      args: SelectSubset<T, CountryUpdateArgs>
    ): CheckSelect<T, Prisma__CountryClient<Country>, Prisma__CountryClient<CountryGetPayload<T>>>

    /**
     * Delete zero or more Countries.
     * @param {CountryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CountryDeleteManyArgs>(
      args?: SelectSubset<T, CountryDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CountryUpdateManyArgs>(
      args: SelectSubset<T, CountryUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Country.
     * @param {CountryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
    **/
    upsert<T extends CountryUpsertArgs>(
      args: SelectSubset<T, CountryUpsertArgs>
    ): CheckSelect<T, Prisma__CountryClient<Country>, Prisma__CountryClient<CountryGetPayload<T>>>

    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountryCountArgs>(
      args?: Subset<T, CountryCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CountryAggregateArgs>(args: Subset<T, CountryAggregateArgs>): PrismaPromise<GetCountryAggregateType<T>>

    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryGroupByArgs} args - Group by arguments.
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
      T extends CountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryGroupByArgs['orderBy'] }
        : { orderBy?: CountryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CountryClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    skus<T extends SkuFindManyArgs = {}>(args?: Subset<T, SkuFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Sku>>, PrismaPromise<Array<SkuGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Country findUnique
   */
  export type CountryFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Country
     * 
    **/
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CountryInclude | null
    /**
     * Throw an Error if a Country can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Country to fetch.
     * 
    **/
    where: CountryWhereUniqueInput
  }


  /**
   * Country findFirst
   */
  export type CountryFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Country
     * 
    **/
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CountryInclude | null
    /**
     * Throw an Error if a Country can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Country to fetch.
     * 
    **/
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     * 
    **/
    orderBy?: Enumerable<CountryOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     * 
    **/
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     * 
    **/
    distinct?: Enumerable<CountryScalarFieldEnum>
  }


  /**
   * Country findMany
   */
  export type CountryFindManyArgs = {
    /**
     * Select specific fields to fetch from the Country
     * 
    **/
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CountryInclude | null
    /**
     * Filter, which Countries to fetch.
     * 
    **/
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     * 
    **/
    orderBy?: Enumerable<CountryOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countries.
     * 
    **/
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CountryScalarFieldEnum>
  }


  /**
   * Country create
   */
  export type CountryCreateArgs = {
    /**
     * Select specific fields to fetch from the Country
     * 
    **/
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CountryInclude | null
    /**
     * The data needed to create a Country.
     * 
    **/
    data: XOR<CountryCreateInput, CountryUncheckedCreateInput>
  }


  /**
   * Country createMany
   */
  export type CountryCreateManyArgs = {
    data: Enumerable<CountryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Country update
   */
  export type CountryUpdateArgs = {
    /**
     * Select specific fields to fetch from the Country
     * 
    **/
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CountryInclude | null
    /**
     * The data needed to update a Country.
     * 
    **/
    data: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
    /**
     * Choose, which Country to update.
     * 
    **/
    where: CountryWhereUniqueInput
  }


  /**
   * Country updateMany
   */
  export type CountryUpdateManyArgs = {
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    where?: CountryWhereInput
  }


  /**
   * Country upsert
   */
  export type CountryUpsertArgs = {
    /**
     * Select specific fields to fetch from the Country
     * 
    **/
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CountryInclude | null
    /**
     * The filter to search for the Country to update in case it exists.
     * 
    **/
    where: CountryWhereUniqueInput
    /**
     * In case the Country found by the `where` argument doesn't exist, create a new Country with this data.
     * 
    **/
    create: XOR<CountryCreateInput, CountryUncheckedCreateInput>
    /**
     * In case the Country was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
  }


  /**
   * Country delete
   */
  export type CountryDeleteArgs = {
    /**
     * Select specific fields to fetch from the Country
     * 
    **/
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CountryInclude | null
    /**
     * Filter which Country to delete.
     * 
    **/
    where: CountryWhereUniqueInput
  }


  /**
   * Country deleteMany
   */
  export type CountryDeleteManyArgs = {
    where?: CountryWhereInput
  }


  /**
   * Country without action
   */
  export type CountryArgs = {
    /**
     * Select specific fields to fetch from the Country
     * 
    **/
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CountryInclude | null
  }



  /**
   * Model Finish
   */


  export type AggregateFinish = {
    _count: FinishCountAggregateOutputType | null
    count: FinishCountAggregateOutputType | null
    _min: FinishMinAggregateOutputType | null
    min: FinishMinAggregateOutputType | null
    _max: FinishMaxAggregateOutputType | null
    max: FinishMaxAggregateOutputType | null
  }

  export type FinishMinAggregateOutputType = {
    id: string | null
    value: string | null
  }

  export type FinishMaxAggregateOutputType = {
    id: string | null
    value: string | null
  }

  export type FinishCountAggregateOutputType = {
    id: number
    value: number
    _all: number
  }


  export type FinishMinAggregateInputType = {
    id?: true
    value?: true
  }

  export type FinishMaxAggregateInputType = {
    id?: true
    value?: true
  }

  export type FinishCountAggregateInputType = {
    id?: true
    value?: true
    _all?: true
  }

  export type FinishAggregateArgs = {
    /**
     * Filter which Finish to aggregate.
     * 
    **/
    where?: FinishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Finishes to fetch.
     * 
    **/
    orderBy?: Enumerable<FinishOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: FinishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Finishes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Finishes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Finishes
    **/
    _count?: true | FinishCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | FinishCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinishMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: FinishMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinishMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: FinishMaxAggregateInputType
  }

  export type GetFinishAggregateType<T extends FinishAggregateArgs> = {
        [P in keyof T & keyof AggregateFinish]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinish[P]>
      : GetScalarType<T[P], AggregateFinish[P]>
  }


    
    
  export type FinishGroupByArgs = {
    where?: FinishWhereInput
    orderBy?: Enumerable<FinishOrderByInput>
    by: Array<FinishScalarFieldEnum>
    having?: FinishScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinishCountAggregateInputType | true
    _min?: FinishMinAggregateInputType
    _max?: FinishMaxAggregateInputType
  }


  export type FinishGroupByOutputType = {
    id: string
    value: string
    _count: FinishCountAggregateOutputType | null
    _min: FinishMinAggregateOutputType | null
    _max: FinishMaxAggregateOutputType | null
  }

  type GetFinishGroupByPayload<T extends FinishGroupByArgs> = Promise<
    Array<
      PickArray<FinishGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof FinishGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], FinishGroupByOutputType[P]> 
            : GetScalarType<T[P], FinishGroupByOutputType[P]>
        }
      > 
    >


  export type FinishSelect = {
    id?: boolean
    value?: boolean
    skus?: boolean | SkuFindManyArgs
  }

  export type FinishInclude = {
    skus?: boolean | SkuFindManyArgs
  }

  export type FinishGetPayload<
    S extends boolean | null | undefined | FinishArgs,
    U = keyof S
      > = S extends true
        ? Finish
    : S extends undefined
    ? never
    : S extends FinishArgs | FinishFindManyArgs
    ?'include' extends U
    ? Finish  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'skus'
        ? Array < SkuGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Finish ?Finish [P]
  : 
          P extends 'skus'
        ? Array < SkuGetPayload<S['select'][P]>>  : never
  } 
    : Finish
  : Finish


  type FinishCountArgs = Merge<
    Omit<FinishFindManyArgs, 'select' | 'include'> & {
      select?: FinishCountAggregateInputType | true
    }
  >

  export interface FinishDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Finish that matches the filter.
     * @param {FinishFindUniqueArgs} args - Arguments to find a Finish
     * @example
     * // Get one Finish
     * const finish = await prisma.finish.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FinishFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FinishFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Finish'> extends True ? CheckSelect<T, Prisma__FinishClient<Finish>, Prisma__FinishClient<FinishGetPayload<T>>> : CheckSelect<T, Prisma__FinishClient<Finish | null >, Prisma__FinishClient<FinishGetPayload<T> | null >>

    /**
     * Find the first Finish that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinishFindFirstArgs} args - Arguments to find a Finish
     * @example
     * // Get one Finish
     * const finish = await prisma.finish.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FinishFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FinishFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Finish'> extends True ? CheckSelect<T, Prisma__FinishClient<Finish>, Prisma__FinishClient<FinishGetPayload<T>>> : CheckSelect<T, Prisma__FinishClient<Finish | null >, Prisma__FinishClient<FinishGetPayload<T> | null >>

    /**
     * Find zero or more Finishes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinishFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Finishes
     * const finishes = await prisma.finish.findMany()
     * 
     * // Get first 10 Finishes
     * const finishes = await prisma.finish.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const finishWithIdOnly = await prisma.finish.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FinishFindManyArgs>(
      args?: SelectSubset<T, FinishFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Finish>>, PrismaPromise<Array<FinishGetPayload<T>>>>

    /**
     * Create a Finish.
     * @param {FinishCreateArgs} args - Arguments to create a Finish.
     * @example
     * // Create one Finish
     * const Finish = await prisma.finish.create({
     *   data: {
     *     // ... data to create a Finish
     *   }
     * })
     * 
    **/
    create<T extends FinishCreateArgs>(
      args: SelectSubset<T, FinishCreateArgs>
    ): CheckSelect<T, Prisma__FinishClient<Finish>, Prisma__FinishClient<FinishGetPayload<T>>>

    /**
     * Create many Finishes.
     *     @param {FinishCreateManyArgs} args - Arguments to create many Finishes.
     *     @example
     *     // Create many Finishes
     *     const finish = await prisma.finish.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FinishCreateManyArgs>(
      args?: SelectSubset<T, FinishCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Finish.
     * @param {FinishDeleteArgs} args - Arguments to delete one Finish.
     * @example
     * // Delete one Finish
     * const Finish = await prisma.finish.delete({
     *   where: {
     *     // ... filter to delete one Finish
     *   }
     * })
     * 
    **/
    delete<T extends FinishDeleteArgs>(
      args: SelectSubset<T, FinishDeleteArgs>
    ): CheckSelect<T, Prisma__FinishClient<Finish>, Prisma__FinishClient<FinishGetPayload<T>>>

    /**
     * Update one Finish.
     * @param {FinishUpdateArgs} args - Arguments to update one Finish.
     * @example
     * // Update one Finish
     * const finish = await prisma.finish.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FinishUpdateArgs>(
      args: SelectSubset<T, FinishUpdateArgs>
    ): CheckSelect<T, Prisma__FinishClient<Finish>, Prisma__FinishClient<FinishGetPayload<T>>>

    /**
     * Delete zero or more Finishes.
     * @param {FinishDeleteManyArgs} args - Arguments to filter Finishes to delete.
     * @example
     * // Delete a few Finishes
     * const { count } = await prisma.finish.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FinishDeleteManyArgs>(
      args?: SelectSubset<T, FinishDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Finishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinishUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Finishes
     * const finish = await prisma.finish.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FinishUpdateManyArgs>(
      args: SelectSubset<T, FinishUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Finish.
     * @param {FinishUpsertArgs} args - Arguments to update or create a Finish.
     * @example
     * // Update or create a Finish
     * const finish = await prisma.finish.upsert({
     *   create: {
     *     // ... data to create a Finish
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Finish we want to update
     *   }
     * })
    **/
    upsert<T extends FinishUpsertArgs>(
      args: SelectSubset<T, FinishUpsertArgs>
    ): CheckSelect<T, Prisma__FinishClient<Finish>, Prisma__FinishClient<FinishGetPayload<T>>>

    /**
     * Count the number of Finishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinishCountArgs} args - Arguments to filter Finishes to count.
     * @example
     * // Count the number of Finishes
     * const count = await prisma.finish.count({
     *   where: {
     *     // ... the filter for the Finishes we want to count
     *   }
     * })
    **/
    count<T extends FinishCountArgs>(
      args?: Subset<T, FinishCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinishCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Finish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinishAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FinishAggregateArgs>(args: Subset<T, FinishAggregateArgs>): PrismaPromise<GetFinishAggregateType<T>>

    /**
     * Group by Finish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinishGroupByArgs} args - Group by arguments.
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
      T extends FinishGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinishGroupByArgs['orderBy'] }
        : { orderBy?: FinishGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, FinishGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinishGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Finish.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FinishClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    skus<T extends SkuFindManyArgs = {}>(args?: Subset<T, SkuFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Sku>>, PrismaPromise<Array<SkuGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Finish findUnique
   */
  export type FinishFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Finish
     * 
    **/
    select?: FinishSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FinishInclude | null
    /**
     * Throw an Error if a Finish can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Finish to fetch.
     * 
    **/
    where: FinishWhereUniqueInput
  }


  /**
   * Finish findFirst
   */
  export type FinishFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Finish
     * 
    **/
    select?: FinishSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FinishInclude | null
    /**
     * Throw an Error if a Finish can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Finish to fetch.
     * 
    **/
    where?: FinishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Finishes to fetch.
     * 
    **/
    orderBy?: Enumerable<FinishOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Finishes.
     * 
    **/
    cursor?: FinishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Finishes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Finishes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Finishes.
     * 
    **/
    distinct?: Enumerable<FinishScalarFieldEnum>
  }


  /**
   * Finish findMany
   */
  export type FinishFindManyArgs = {
    /**
     * Select specific fields to fetch from the Finish
     * 
    **/
    select?: FinishSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FinishInclude | null
    /**
     * Filter, which Finishes to fetch.
     * 
    **/
    where?: FinishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Finishes to fetch.
     * 
    **/
    orderBy?: Enumerable<FinishOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Finishes.
     * 
    **/
    cursor?: FinishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Finishes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Finishes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<FinishScalarFieldEnum>
  }


  /**
   * Finish create
   */
  export type FinishCreateArgs = {
    /**
     * Select specific fields to fetch from the Finish
     * 
    **/
    select?: FinishSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FinishInclude | null
    /**
     * The data needed to create a Finish.
     * 
    **/
    data: XOR<FinishCreateInput, FinishUncheckedCreateInput>
  }


  /**
   * Finish createMany
   */
  export type FinishCreateManyArgs = {
    data: Enumerable<FinishCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Finish update
   */
  export type FinishUpdateArgs = {
    /**
     * Select specific fields to fetch from the Finish
     * 
    **/
    select?: FinishSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FinishInclude | null
    /**
     * The data needed to update a Finish.
     * 
    **/
    data: XOR<FinishUpdateInput, FinishUncheckedUpdateInput>
    /**
     * Choose, which Finish to update.
     * 
    **/
    where: FinishWhereUniqueInput
  }


  /**
   * Finish updateMany
   */
  export type FinishUpdateManyArgs = {
    data: XOR<FinishUpdateManyMutationInput, FinishUncheckedUpdateManyInput>
    where?: FinishWhereInput
  }


  /**
   * Finish upsert
   */
  export type FinishUpsertArgs = {
    /**
     * Select specific fields to fetch from the Finish
     * 
    **/
    select?: FinishSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FinishInclude | null
    /**
     * The filter to search for the Finish to update in case it exists.
     * 
    **/
    where: FinishWhereUniqueInput
    /**
     * In case the Finish found by the `where` argument doesn't exist, create a new Finish with this data.
     * 
    **/
    create: XOR<FinishCreateInput, FinishUncheckedCreateInput>
    /**
     * In case the Finish was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<FinishUpdateInput, FinishUncheckedUpdateInput>
  }


  /**
   * Finish delete
   */
  export type FinishDeleteArgs = {
    /**
     * Select specific fields to fetch from the Finish
     * 
    **/
    select?: FinishSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FinishInclude | null
    /**
     * Filter which Finish to delete.
     * 
    **/
    where: FinishWhereUniqueInput
  }


  /**
   * Finish deleteMany
   */
  export type FinishDeleteManyArgs = {
    where?: FinishWhereInput
  }


  /**
   * Finish without action
   */
  export type FinishArgs = {
    /**
     * Select specific fields to fetch from the Finish
     * 
    **/
    select?: FinishSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FinishInclude | null
  }



  /**
   * Model Legs
   */


  export type AggregateLegs = {
    _count: LegsCountAggregateOutputType | null
    count: LegsCountAggregateOutputType | null
    _min: LegsMinAggregateOutputType | null
    min: LegsMinAggregateOutputType | null
    _max: LegsMaxAggregateOutputType | null
    max: LegsMaxAggregateOutputType | null
  }

  export type LegsMinAggregateOutputType = {
    id: string | null
    value: string | null
  }

  export type LegsMaxAggregateOutputType = {
    id: string | null
    value: string | null
  }

  export type LegsCountAggregateOutputType = {
    id: number
    value: number
    _all: number
  }


  export type LegsMinAggregateInputType = {
    id?: true
    value?: true
  }

  export type LegsMaxAggregateInputType = {
    id?: true
    value?: true
  }

  export type LegsCountAggregateInputType = {
    id?: true
    value?: true
    _all?: true
  }

  export type LegsAggregateArgs = {
    /**
     * Filter which Legs to aggregate.
     * 
    **/
    where?: LegsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Legs to fetch.
     * 
    **/
    orderBy?: Enumerable<LegsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: LegsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Legs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Legs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Legs
    **/
    _count?: true | LegsCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | LegsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LegsMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: LegsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LegsMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: LegsMaxAggregateInputType
  }

  export type GetLegsAggregateType<T extends LegsAggregateArgs> = {
        [P in keyof T & keyof AggregateLegs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLegs[P]>
      : GetScalarType<T[P], AggregateLegs[P]>
  }


    
    
  export type LegsGroupByArgs = {
    where?: LegsWhereInput
    orderBy?: Enumerable<LegsOrderByInput>
    by: Array<LegsScalarFieldEnum>
    having?: LegsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LegsCountAggregateInputType | true
    _min?: LegsMinAggregateInputType
    _max?: LegsMaxAggregateInputType
  }


  export type LegsGroupByOutputType = {
    id: string
    value: string
    _count: LegsCountAggregateOutputType | null
    _min: LegsMinAggregateOutputType | null
    _max: LegsMaxAggregateOutputType | null
  }

  type GetLegsGroupByPayload<T extends LegsGroupByArgs> = Promise<
    Array<
      PickArray<LegsGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof LegsGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], LegsGroupByOutputType[P]> 
            : GetScalarType<T[P], LegsGroupByOutputType[P]>
        }
      > 
    >


  export type LegsSelect = {
    id?: boolean
    value?: boolean
    skus?: boolean | SkuFindManyArgs
  }

  export type LegsInclude = {
    skus?: boolean | SkuFindManyArgs
  }

  export type LegsGetPayload<
    S extends boolean | null | undefined | LegsArgs,
    U = keyof S
      > = S extends true
        ? Legs
    : S extends undefined
    ? never
    : S extends LegsArgs | LegsFindManyArgs
    ?'include' extends U
    ? Legs  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'skus'
        ? Array < SkuGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Legs ?Legs [P]
  : 
          P extends 'skus'
        ? Array < SkuGetPayload<S['select'][P]>>  : never
  } 
    : Legs
  : Legs


  type LegsCountArgs = Merge<
    Omit<LegsFindManyArgs, 'select' | 'include'> & {
      select?: LegsCountAggregateInputType | true
    }
  >

  export interface LegsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Legs that matches the filter.
     * @param {LegsFindUniqueArgs} args - Arguments to find a Legs
     * @example
     * // Get one Legs
     * const legs = await prisma.legs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LegsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LegsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Legs'> extends True ? CheckSelect<T, Prisma__LegsClient<Legs>, Prisma__LegsClient<LegsGetPayload<T>>> : CheckSelect<T, Prisma__LegsClient<Legs | null >, Prisma__LegsClient<LegsGetPayload<T> | null >>

    /**
     * Find the first Legs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegsFindFirstArgs} args - Arguments to find a Legs
     * @example
     * // Get one Legs
     * const legs = await prisma.legs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LegsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LegsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Legs'> extends True ? CheckSelect<T, Prisma__LegsClient<Legs>, Prisma__LegsClient<LegsGetPayload<T>>> : CheckSelect<T, Prisma__LegsClient<Legs | null >, Prisma__LegsClient<LegsGetPayload<T> | null >>

    /**
     * Find zero or more Legs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Legs
     * const legs = await prisma.legs.findMany()
     * 
     * // Get first 10 Legs
     * const legs = await prisma.legs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const legsWithIdOnly = await prisma.legs.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LegsFindManyArgs>(
      args?: SelectSubset<T, LegsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Legs>>, PrismaPromise<Array<LegsGetPayload<T>>>>

    /**
     * Create a Legs.
     * @param {LegsCreateArgs} args - Arguments to create a Legs.
     * @example
     * // Create one Legs
     * const Legs = await prisma.legs.create({
     *   data: {
     *     // ... data to create a Legs
     *   }
     * })
     * 
    **/
    create<T extends LegsCreateArgs>(
      args: SelectSubset<T, LegsCreateArgs>
    ): CheckSelect<T, Prisma__LegsClient<Legs>, Prisma__LegsClient<LegsGetPayload<T>>>

    /**
     * Create many Legs.
     *     @param {LegsCreateManyArgs} args - Arguments to create many Legs.
     *     @example
     *     // Create many Legs
     *     const legs = await prisma.legs.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LegsCreateManyArgs>(
      args?: SelectSubset<T, LegsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Legs.
     * @param {LegsDeleteArgs} args - Arguments to delete one Legs.
     * @example
     * // Delete one Legs
     * const Legs = await prisma.legs.delete({
     *   where: {
     *     // ... filter to delete one Legs
     *   }
     * })
     * 
    **/
    delete<T extends LegsDeleteArgs>(
      args: SelectSubset<T, LegsDeleteArgs>
    ): CheckSelect<T, Prisma__LegsClient<Legs>, Prisma__LegsClient<LegsGetPayload<T>>>

    /**
     * Update one Legs.
     * @param {LegsUpdateArgs} args - Arguments to update one Legs.
     * @example
     * // Update one Legs
     * const legs = await prisma.legs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LegsUpdateArgs>(
      args: SelectSubset<T, LegsUpdateArgs>
    ): CheckSelect<T, Prisma__LegsClient<Legs>, Prisma__LegsClient<LegsGetPayload<T>>>

    /**
     * Delete zero or more Legs.
     * @param {LegsDeleteManyArgs} args - Arguments to filter Legs to delete.
     * @example
     * // Delete a few Legs
     * const { count } = await prisma.legs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LegsDeleteManyArgs>(
      args?: SelectSubset<T, LegsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Legs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Legs
     * const legs = await prisma.legs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LegsUpdateManyArgs>(
      args: SelectSubset<T, LegsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Legs.
     * @param {LegsUpsertArgs} args - Arguments to update or create a Legs.
     * @example
     * // Update or create a Legs
     * const legs = await prisma.legs.upsert({
     *   create: {
     *     // ... data to create a Legs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Legs we want to update
     *   }
     * })
    **/
    upsert<T extends LegsUpsertArgs>(
      args: SelectSubset<T, LegsUpsertArgs>
    ): CheckSelect<T, Prisma__LegsClient<Legs>, Prisma__LegsClient<LegsGetPayload<T>>>

    /**
     * Count the number of Legs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegsCountArgs} args - Arguments to filter Legs to count.
     * @example
     * // Count the number of Legs
     * const count = await prisma.legs.count({
     *   where: {
     *     // ... the filter for the Legs we want to count
     *   }
     * })
    **/
    count<T extends LegsCountArgs>(
      args?: Subset<T, LegsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LegsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Legs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LegsAggregateArgs>(args: Subset<T, LegsAggregateArgs>): PrismaPromise<GetLegsAggregateType<T>>

    /**
     * Group by Legs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegsGroupByArgs} args - Group by arguments.
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
      T extends LegsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LegsGroupByArgs['orderBy'] }
        : { orderBy?: LegsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, LegsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLegsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Legs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LegsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    skus<T extends SkuFindManyArgs = {}>(args?: Subset<T, SkuFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Sku>>, PrismaPromise<Array<SkuGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Legs findUnique
   */
  export type LegsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Legs
     * 
    **/
    select?: LegsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LegsInclude | null
    /**
     * Throw an Error if a Legs can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Legs to fetch.
     * 
    **/
    where: LegsWhereUniqueInput
  }


  /**
   * Legs findFirst
   */
  export type LegsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Legs
     * 
    **/
    select?: LegsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LegsInclude | null
    /**
     * Throw an Error if a Legs can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Legs to fetch.
     * 
    **/
    where?: LegsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Legs to fetch.
     * 
    **/
    orderBy?: Enumerable<LegsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Legs.
     * 
    **/
    cursor?: LegsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Legs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Legs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Legs.
     * 
    **/
    distinct?: Enumerable<LegsScalarFieldEnum>
  }


  /**
   * Legs findMany
   */
  export type LegsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Legs
     * 
    **/
    select?: LegsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LegsInclude | null
    /**
     * Filter, which Legs to fetch.
     * 
    **/
    where?: LegsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Legs to fetch.
     * 
    **/
    orderBy?: Enumerable<LegsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Legs.
     * 
    **/
    cursor?: LegsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Legs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Legs.
     * 
    **/
    skip?: number
    distinct?: Enumerable<LegsScalarFieldEnum>
  }


  /**
   * Legs create
   */
  export type LegsCreateArgs = {
    /**
     * Select specific fields to fetch from the Legs
     * 
    **/
    select?: LegsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LegsInclude | null
    /**
     * The data needed to create a Legs.
     * 
    **/
    data: XOR<LegsCreateInput, LegsUncheckedCreateInput>
  }


  /**
   * Legs createMany
   */
  export type LegsCreateManyArgs = {
    data: Enumerable<LegsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Legs update
   */
  export type LegsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Legs
     * 
    **/
    select?: LegsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LegsInclude | null
    /**
     * The data needed to update a Legs.
     * 
    **/
    data: XOR<LegsUpdateInput, LegsUncheckedUpdateInput>
    /**
     * Choose, which Legs to update.
     * 
    **/
    where: LegsWhereUniqueInput
  }


  /**
   * Legs updateMany
   */
  export type LegsUpdateManyArgs = {
    data: XOR<LegsUpdateManyMutationInput, LegsUncheckedUpdateManyInput>
    where?: LegsWhereInput
  }


  /**
   * Legs upsert
   */
  export type LegsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Legs
     * 
    **/
    select?: LegsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LegsInclude | null
    /**
     * The filter to search for the Legs to update in case it exists.
     * 
    **/
    where: LegsWhereUniqueInput
    /**
     * In case the Legs found by the `where` argument doesn't exist, create a new Legs with this data.
     * 
    **/
    create: XOR<LegsCreateInput, LegsUncheckedCreateInput>
    /**
     * In case the Legs was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<LegsUpdateInput, LegsUncheckedUpdateInput>
  }


  /**
   * Legs delete
   */
  export type LegsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Legs
     * 
    **/
    select?: LegsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LegsInclude | null
    /**
     * Filter which Legs to delete.
     * 
    **/
    where: LegsWhereUniqueInput
  }


  /**
   * Legs deleteMany
   */
  export type LegsDeleteManyArgs = {
    where?: LegsWhereInput
  }


  /**
   * Legs without action
   */
  export type LegsArgs = {
    /**
     * Select specific fields to fetch from the Legs
     * 
    **/
    select?: LegsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LegsInclude | null
  }



  /**
   * Model Order
   */


  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
    max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    boxQuantity: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    boxQuantity: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    linnworksId: string | null
    receivedDate: Date | null
    deliveryDate: Date | null
    manufactureDate: Date | null
    dispatchDate: Date | null
    boxQuantity: number | null
    deliveryService: DeliveryServiceEnum | null
    status: StatusEnum | null
    comment: string | null
    source: SourceEnum | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    linnworksId: string | null
    receivedDate: Date | null
    deliveryDate: Date | null
    manufactureDate: Date | null
    dispatchDate: Date | null
    boxQuantity: number | null
    deliveryService: DeliveryServiceEnum | null
    status: StatusEnum | null
    comment: string | null
    source: SourceEnum | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    linnworksId: number
    receivedDate: number
    deliveryDate: number
    manufactureDate: number
    dispatchDate: number
    boxQuantity: number
    deliveryService: number
    status: number
    comment: number
    source: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    boxQuantity?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    boxQuantity?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    linnworksId?: true
    receivedDate?: true
    deliveryDate?: true
    manufactureDate?: true
    dispatchDate?: true
    boxQuantity?: true
    deliveryService?: true
    status?: true
    comment?: true
    source?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    linnworksId?: true
    receivedDate?: true
    deliveryDate?: true
    manufactureDate?: true
    dispatchDate?: true
    boxQuantity?: true
    deliveryService?: true
    status?: true
    comment?: true
    source?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    linnworksId?: true
    receivedDate?: true
    deliveryDate?: true
    manufactureDate?: true
    dispatchDate?: true
    boxQuantity?: true
    deliveryService?: true
    status?: true
    comment?: true
    source?: true
    _all?: true
  }

  export type OrderAggregateArgs = {
    /**
     * Filter which Order to aggregate.
     * 
    **/
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     * 
    **/
    orderBy?: Enumerable<OrderOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }


    
    
  export type OrderGroupByArgs = {
    where?: OrderWhereInput
    orderBy?: Enumerable<OrderOrderByInput>
    by: Array<OrderScalarFieldEnum>
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }


  export type OrderGroupByOutputType = {
    id: number
    linnworksId: string
    receivedDate: Date
    deliveryDate: Date
    manufactureDate: Date
    dispatchDate: Date
    boxQuantity: number
    deliveryService: DeliveryServiceEnum
    status: StatusEnum
    comment: string
    source: SourceEnum
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Promise<
    Array<
      PickArray<OrderGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], OrderGroupByOutputType[P]> 
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      > 
    >


  export type OrderSelect = {
    id?: boolean
    linnworksId?: boolean
    receivedDate?: boolean
    deliveryDate?: boolean
    manufactureDate?: boolean
    dispatchDate?: boolean
    boxQuantity?: boolean
    deliveryService?: boolean
    status?: boolean
    comment?: boolean
    source?: boolean
    orderSkus?: boolean | OrderSkuFindManyArgs
  }

  export type OrderInclude = {
    orderSkus?: boolean | OrderSkuFindManyArgs
  }

  export type OrderGetPayload<
    S extends boolean | null | undefined | OrderArgs,
    U = keyof S
      > = S extends true
        ? Order
    : S extends undefined
    ? never
    : S extends OrderArgs | OrderFindManyArgs
    ?'include' extends U
    ? Order  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'orderSkus'
        ? Array < OrderSkuGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Order ?Order [P]
  : 
          P extends 'orderSkus'
        ? Array < OrderSkuGetPayload<S['select'][P]>>  : never
  } 
    : Order
  : Order


  type OrderCountArgs = Merge<
    Omit<OrderFindManyArgs, 'select' | 'include'> & {
      select?: OrderCountAggregateInputType | true
    }
  >

  export interface OrderDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OrderFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Order'> extends True ? CheckSelect<T, Prisma__OrderClient<Order>, Prisma__OrderClient<OrderGetPayload<T>>> : CheckSelect<T, Prisma__OrderClient<Order | null >, Prisma__OrderClient<OrderGetPayload<T> | null >>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OrderFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Order'> extends True ? CheckSelect<T, Prisma__OrderClient<Order>, Prisma__OrderClient<OrderGetPayload<T>>> : CheckSelect<T, Prisma__OrderClient<Order | null >, Prisma__OrderClient<OrderGetPayload<T> | null >>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrderFindManyArgs>(
      args?: SelectSubset<T, OrderFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Order>>, PrismaPromise<Array<OrderGetPayload<T>>>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
    **/
    create<T extends OrderCreateArgs>(
      args: SelectSubset<T, OrderCreateArgs>
    ): CheckSelect<T, Prisma__OrderClient<Order>, Prisma__OrderClient<OrderGetPayload<T>>>

    /**
     * Create many Orders.
     *     @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     *     @example
     *     // Create many Orders
     *     const order = await prisma.order.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrderCreateManyArgs>(
      args?: SelectSubset<T, OrderCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
    **/
    delete<T extends OrderDeleteArgs>(
      args: SelectSubset<T, OrderDeleteArgs>
    ): CheckSelect<T, Prisma__OrderClient<Order>, Prisma__OrderClient<OrderGetPayload<T>>>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderUpdateArgs>(
      args: SelectSubset<T, OrderUpdateArgs>
    ): CheckSelect<T, Prisma__OrderClient<Order>, Prisma__OrderClient<OrderGetPayload<T>>>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderDeleteManyArgs>(
      args?: SelectSubset<T, OrderDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderUpdateManyArgs>(
      args: SelectSubset<T, OrderUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
    **/
    upsert<T extends OrderUpsertArgs>(
      args: SelectSubset<T, OrderUpsertArgs>
    ): CheckSelect<T, Prisma__OrderClient<Order>, Prisma__OrderClient<OrderGetPayload<T>>>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OrderClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    orderSkus<T extends OrderSkuFindManyArgs = {}>(args?: Subset<T, OrderSkuFindManyArgs>): CheckSelect<T, PrismaPromise<Array<OrderSku>>, PrismaPromise<Array<OrderSkuGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
    /**
     * Throw an Error if a Order can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Order to fetch.
     * 
    **/
    where: OrderWhereUniqueInput
  }


  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
    /**
     * Throw an Error if a Order can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Order to fetch.
     * 
    **/
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     * 
    **/
    orderBy?: Enumerable<OrderOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     * 
    **/
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     * 
    **/
    distinct?: Enumerable<OrderScalarFieldEnum>
  }


  /**
   * Order findMany
   */
  export type OrderFindManyArgs = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
    /**
     * Filter, which Orders to fetch.
     * 
    **/
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     * 
    **/
    orderBy?: Enumerable<OrderOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     * 
    **/
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     * 
    **/
    skip?: number
    distinct?: Enumerable<OrderScalarFieldEnum>
  }


  /**
   * Order create
   */
  export type OrderCreateArgs = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
    /**
     * The data needed to create a Order.
     * 
    **/
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }


  /**
   * Order createMany
   */
  export type OrderCreateManyArgs = {
    data: Enumerable<OrderCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Order update
   */
  export type OrderUpdateArgs = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
    /**
     * The data needed to update a Order.
     * 
    **/
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     * 
    **/
    where: OrderWhereUniqueInput
  }


  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs = {
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    where?: OrderWhereInput
  }


  /**
   * Order upsert
   */
  export type OrderUpsertArgs = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
    /**
     * The filter to search for the Order to update in case it exists.
     * 
    **/
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     * 
    **/
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }


  /**
   * Order delete
   */
  export type OrderDeleteArgs = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
    /**
     * Filter which Order to delete.
     * 
    **/
    where: OrderWhereUniqueInput
  }


  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs = {
    where?: OrderWhereInput
  }


  /**
   * Order without action
   */
  export type OrderArgs = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
  }



  /**
   * Model OrderSku
   */


  export type AggregateOrderSku = {
    _count: OrderSkuCountAggregateOutputType | null
    count: OrderSkuCountAggregateOutputType | null
    _avg: OrderSkuAvgAggregateOutputType | null
    avg: OrderSkuAvgAggregateOutputType | null
    _sum: OrderSkuSumAggregateOutputType | null
    sum: OrderSkuSumAggregateOutputType | null
    _min: OrderSkuMinAggregateOutputType | null
    min: OrderSkuMinAggregateOutputType | null
    _max: OrderSkuMaxAggregateOutputType | null
    max: OrderSkuMaxAggregateOutputType | null
  }

  export type OrderSkuAvgAggregateOutputType = {
    quantity: number | null
    orderId: number | null
  }

  export type OrderSkuSumAggregateOutputType = {
    quantity: number | null
    orderId: number | null
  }

  export type OrderSkuMinAggregateOutputType = {
    id: string | null
    status: StatusEnum | null
    comment: string | null
    quantity: number | null
    orderId: number | null
    skuId: string | null
  }

  export type OrderSkuMaxAggregateOutputType = {
    id: string | null
    status: StatusEnum | null
    comment: string | null
    quantity: number | null
    orderId: number | null
    skuId: string | null
  }

  export type OrderSkuCountAggregateOutputType = {
    id: number
    status: number
    comment: number
    quantity: number
    orderId: number
    skuId: number
    _all: number
  }


  export type OrderSkuAvgAggregateInputType = {
    quantity?: true
    orderId?: true
  }

  export type OrderSkuSumAggregateInputType = {
    quantity?: true
    orderId?: true
  }

  export type OrderSkuMinAggregateInputType = {
    id?: true
    status?: true
    comment?: true
    quantity?: true
    orderId?: true
    skuId?: true
  }

  export type OrderSkuMaxAggregateInputType = {
    id?: true
    status?: true
    comment?: true
    quantity?: true
    orderId?: true
    skuId?: true
  }

  export type OrderSkuCountAggregateInputType = {
    id?: true
    status?: true
    comment?: true
    quantity?: true
    orderId?: true
    skuId?: true
    _all?: true
  }

  export type OrderSkuAggregateArgs = {
    /**
     * Filter which OrderSku to aggregate.
     * 
    **/
    where?: OrderSkuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderSkus to fetch.
     * 
    **/
    orderBy?: Enumerable<OrderSkuOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: OrderSkuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderSkus from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderSkus.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderSkus
    **/
    _count?: true | OrderSkuCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | OrderSkuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderSkuAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: OrderSkuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSkuSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: OrderSkuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderSkuMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: OrderSkuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderSkuMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: OrderSkuMaxAggregateInputType
  }

  export type GetOrderSkuAggregateType<T extends OrderSkuAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderSku]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderSku[P]>
      : GetScalarType<T[P], AggregateOrderSku[P]>
  }


    
    
  export type OrderSkuGroupByArgs = {
    where?: OrderSkuWhereInput
    orderBy?: Enumerable<OrderSkuOrderByInput>
    by: Array<OrderSkuScalarFieldEnum>
    having?: OrderSkuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderSkuCountAggregateInputType | true
    _avg?: OrderSkuAvgAggregateInputType
    _sum?: OrderSkuSumAggregateInputType
    _min?: OrderSkuMinAggregateInputType
    _max?: OrderSkuMaxAggregateInputType
  }


  export type OrderSkuGroupByOutputType = {
    id: string
    status: StatusEnum
    comment: string
    quantity: number
    orderId: number
    skuId: string
    _count: OrderSkuCountAggregateOutputType | null
    _avg: OrderSkuAvgAggregateOutputType | null
    _sum: OrderSkuSumAggregateOutputType | null
    _min: OrderSkuMinAggregateOutputType | null
    _max: OrderSkuMaxAggregateOutputType | null
  }

  type GetOrderSkuGroupByPayload<T extends OrderSkuGroupByArgs> = Promise<
    Array<
      PickArray<OrderSkuGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof OrderSkuGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], OrderSkuGroupByOutputType[P]> 
            : GetScalarType<T[P], OrderSkuGroupByOutputType[P]>
        }
      > 
    >


  export type OrderSkuSelect = {
    id?: boolean
    status?: boolean
    comment?: boolean
    quantity?: boolean
    orderId?: boolean
    order?: boolean | OrderArgs
    skuId?: boolean
    sku?: boolean | SkuArgs
    orderSkuComponents?: boolean | OrderSkuComponentFindManyArgs
  }

  export type OrderSkuInclude = {
    order?: boolean | OrderArgs
    sku?: boolean | SkuArgs
    orderSkuComponents?: boolean | OrderSkuComponentFindManyArgs
  }

  export type OrderSkuGetPayload<
    S extends boolean | null | undefined | OrderSkuArgs,
    U = keyof S
      > = S extends true
        ? OrderSku
    : S extends undefined
    ? never
    : S extends OrderSkuArgs | OrderSkuFindManyArgs
    ?'include' extends U
    ? OrderSku  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'order'
        ? OrderGetPayload<S['include'][P]> :
        P extends 'sku'
        ? SkuGetPayload<S['include'][P]> :
        P extends 'orderSkuComponents'
        ? Array < OrderSkuComponentGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof OrderSku ?OrderSku [P]
  : 
          P extends 'order'
        ? OrderGetPayload<S['select'][P]> :
        P extends 'sku'
        ? SkuGetPayload<S['select'][P]> :
        P extends 'orderSkuComponents'
        ? Array < OrderSkuComponentGetPayload<S['select'][P]>>  : never
  } 
    : OrderSku
  : OrderSku


  type OrderSkuCountArgs = Merge<
    Omit<OrderSkuFindManyArgs, 'select' | 'include'> & {
      select?: OrderSkuCountAggregateInputType | true
    }
  >

  export interface OrderSkuDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one OrderSku that matches the filter.
     * @param {OrderSkuFindUniqueArgs} args - Arguments to find a OrderSku
     * @example
     * // Get one OrderSku
     * const orderSku = await prisma.orderSku.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderSkuFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OrderSkuFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'OrderSku'> extends True ? CheckSelect<T, Prisma__OrderSkuClient<OrderSku>, Prisma__OrderSkuClient<OrderSkuGetPayload<T>>> : CheckSelect<T, Prisma__OrderSkuClient<OrderSku | null >, Prisma__OrderSkuClient<OrderSkuGetPayload<T> | null >>

    /**
     * Find the first OrderSku that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderSkuFindFirstArgs} args - Arguments to find a OrderSku
     * @example
     * // Get one OrderSku
     * const orderSku = await prisma.orderSku.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderSkuFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OrderSkuFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'OrderSku'> extends True ? CheckSelect<T, Prisma__OrderSkuClient<OrderSku>, Prisma__OrderSkuClient<OrderSkuGetPayload<T>>> : CheckSelect<T, Prisma__OrderSkuClient<OrderSku | null >, Prisma__OrderSkuClient<OrderSkuGetPayload<T> | null >>

    /**
     * Find zero or more OrderSkus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderSkuFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderSkus
     * const orderSkus = await prisma.orderSku.findMany()
     * 
     * // Get first 10 OrderSkus
     * const orderSkus = await prisma.orderSku.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderSkuWithIdOnly = await prisma.orderSku.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrderSkuFindManyArgs>(
      args?: SelectSubset<T, OrderSkuFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<OrderSku>>, PrismaPromise<Array<OrderSkuGetPayload<T>>>>

    /**
     * Create a OrderSku.
     * @param {OrderSkuCreateArgs} args - Arguments to create a OrderSku.
     * @example
     * // Create one OrderSku
     * const OrderSku = await prisma.orderSku.create({
     *   data: {
     *     // ... data to create a OrderSku
     *   }
     * })
     * 
    **/
    create<T extends OrderSkuCreateArgs>(
      args: SelectSubset<T, OrderSkuCreateArgs>
    ): CheckSelect<T, Prisma__OrderSkuClient<OrderSku>, Prisma__OrderSkuClient<OrderSkuGetPayload<T>>>

    /**
     * Create many OrderSkus.
     *     @param {OrderSkuCreateManyArgs} args - Arguments to create many OrderSkus.
     *     @example
     *     // Create many OrderSkus
     *     const orderSku = await prisma.orderSku.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrderSkuCreateManyArgs>(
      args?: SelectSubset<T, OrderSkuCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a OrderSku.
     * @param {OrderSkuDeleteArgs} args - Arguments to delete one OrderSku.
     * @example
     * // Delete one OrderSku
     * const OrderSku = await prisma.orderSku.delete({
     *   where: {
     *     // ... filter to delete one OrderSku
     *   }
     * })
     * 
    **/
    delete<T extends OrderSkuDeleteArgs>(
      args: SelectSubset<T, OrderSkuDeleteArgs>
    ): CheckSelect<T, Prisma__OrderSkuClient<OrderSku>, Prisma__OrderSkuClient<OrderSkuGetPayload<T>>>

    /**
     * Update one OrderSku.
     * @param {OrderSkuUpdateArgs} args - Arguments to update one OrderSku.
     * @example
     * // Update one OrderSku
     * const orderSku = await prisma.orderSku.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderSkuUpdateArgs>(
      args: SelectSubset<T, OrderSkuUpdateArgs>
    ): CheckSelect<T, Prisma__OrderSkuClient<OrderSku>, Prisma__OrderSkuClient<OrderSkuGetPayload<T>>>

    /**
     * Delete zero or more OrderSkus.
     * @param {OrderSkuDeleteManyArgs} args - Arguments to filter OrderSkus to delete.
     * @example
     * // Delete a few OrderSkus
     * const { count } = await prisma.orderSku.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderSkuDeleteManyArgs>(
      args?: SelectSubset<T, OrderSkuDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderSkus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderSkuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderSkus
     * const orderSku = await prisma.orderSku.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderSkuUpdateManyArgs>(
      args: SelectSubset<T, OrderSkuUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderSku.
     * @param {OrderSkuUpsertArgs} args - Arguments to update or create a OrderSku.
     * @example
     * // Update or create a OrderSku
     * const orderSku = await prisma.orderSku.upsert({
     *   create: {
     *     // ... data to create a OrderSku
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderSku we want to update
     *   }
     * })
    **/
    upsert<T extends OrderSkuUpsertArgs>(
      args: SelectSubset<T, OrderSkuUpsertArgs>
    ): CheckSelect<T, Prisma__OrderSkuClient<OrderSku>, Prisma__OrderSkuClient<OrderSkuGetPayload<T>>>

    /**
     * Count the number of OrderSkus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderSkuCountArgs} args - Arguments to filter OrderSkus to count.
     * @example
     * // Count the number of OrderSkus
     * const count = await prisma.orderSku.count({
     *   where: {
     *     // ... the filter for the OrderSkus we want to count
     *   }
     * })
    **/
    count<T extends OrderSkuCountArgs>(
      args?: Subset<T, OrderSkuCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderSkuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderSku.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderSkuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderSkuAggregateArgs>(args: Subset<T, OrderSkuAggregateArgs>): PrismaPromise<GetOrderSkuAggregateType<T>>

    /**
     * Group by OrderSku.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderSkuGroupByArgs} args - Group by arguments.
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
      T extends OrderSkuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderSkuGroupByArgs['orderBy'] }
        : { orderBy?: OrderSkuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, OrderSkuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderSkuGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderSku.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OrderSkuClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    order<T extends OrderArgs = {}>(args?: Subset<T, OrderArgs>): CheckSelect<T, Prisma__OrderClient<Order | null >, Prisma__OrderClient<OrderGetPayload<T> | null >>;

    sku<T extends SkuArgs = {}>(args?: Subset<T, SkuArgs>): CheckSelect<T, Prisma__SkuClient<Sku | null >, Prisma__SkuClient<SkuGetPayload<T> | null >>;

    orderSkuComponents<T extends OrderSkuComponentFindManyArgs = {}>(args?: Subset<T, OrderSkuComponentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<OrderSkuComponent>>, PrismaPromise<Array<OrderSkuComponentGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * OrderSku findUnique
   */
  export type OrderSkuFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the OrderSku
     * 
    **/
    select?: OrderSkuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderSkuInclude | null
    /**
     * Throw an Error if a OrderSku can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which OrderSku to fetch.
     * 
    **/
    where: OrderSkuWhereUniqueInput
  }


  /**
   * OrderSku findFirst
   */
  export type OrderSkuFindFirstArgs = {
    /**
     * Select specific fields to fetch from the OrderSku
     * 
    **/
    select?: OrderSkuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderSkuInclude | null
    /**
     * Throw an Error if a OrderSku can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which OrderSku to fetch.
     * 
    **/
    where?: OrderSkuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderSkus to fetch.
     * 
    **/
    orderBy?: Enumerable<OrderSkuOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderSkus.
     * 
    **/
    cursor?: OrderSkuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderSkus from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderSkus.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderSkus.
     * 
    **/
    distinct?: Enumerable<OrderSkuScalarFieldEnum>
  }


  /**
   * OrderSku findMany
   */
  export type OrderSkuFindManyArgs = {
    /**
     * Select specific fields to fetch from the OrderSku
     * 
    **/
    select?: OrderSkuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderSkuInclude | null
    /**
     * Filter, which OrderSkus to fetch.
     * 
    **/
    where?: OrderSkuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderSkus to fetch.
     * 
    **/
    orderBy?: Enumerable<OrderSkuOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderSkus.
     * 
    **/
    cursor?: OrderSkuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderSkus from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderSkus.
     * 
    **/
    skip?: number
    distinct?: Enumerable<OrderSkuScalarFieldEnum>
  }


  /**
   * OrderSku create
   */
  export type OrderSkuCreateArgs = {
    /**
     * Select specific fields to fetch from the OrderSku
     * 
    **/
    select?: OrderSkuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderSkuInclude | null
    /**
     * The data needed to create a OrderSku.
     * 
    **/
    data: XOR<OrderSkuCreateInput, OrderSkuUncheckedCreateInput>
  }


  /**
   * OrderSku createMany
   */
  export type OrderSkuCreateManyArgs = {
    data: Enumerable<OrderSkuCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * OrderSku update
   */
  export type OrderSkuUpdateArgs = {
    /**
     * Select specific fields to fetch from the OrderSku
     * 
    **/
    select?: OrderSkuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderSkuInclude | null
    /**
     * The data needed to update a OrderSku.
     * 
    **/
    data: XOR<OrderSkuUpdateInput, OrderSkuUncheckedUpdateInput>
    /**
     * Choose, which OrderSku to update.
     * 
    **/
    where: OrderSkuWhereUniqueInput
  }


  /**
   * OrderSku updateMany
   */
  export type OrderSkuUpdateManyArgs = {
    data: XOR<OrderSkuUpdateManyMutationInput, OrderSkuUncheckedUpdateManyInput>
    where?: OrderSkuWhereInput
  }


  /**
   * OrderSku upsert
   */
  export type OrderSkuUpsertArgs = {
    /**
     * Select specific fields to fetch from the OrderSku
     * 
    **/
    select?: OrderSkuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderSkuInclude | null
    /**
     * The filter to search for the OrderSku to update in case it exists.
     * 
    **/
    where: OrderSkuWhereUniqueInput
    /**
     * In case the OrderSku found by the `where` argument doesn't exist, create a new OrderSku with this data.
     * 
    **/
    create: XOR<OrderSkuCreateInput, OrderSkuUncheckedCreateInput>
    /**
     * In case the OrderSku was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<OrderSkuUpdateInput, OrderSkuUncheckedUpdateInput>
  }


  /**
   * OrderSku delete
   */
  export type OrderSkuDeleteArgs = {
    /**
     * Select specific fields to fetch from the OrderSku
     * 
    **/
    select?: OrderSkuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderSkuInclude | null
    /**
     * Filter which OrderSku to delete.
     * 
    **/
    where: OrderSkuWhereUniqueInput
  }


  /**
   * OrderSku deleteMany
   */
  export type OrderSkuDeleteManyArgs = {
    where?: OrderSkuWhereInput
  }


  /**
   * OrderSku without action
   */
  export type OrderSkuArgs = {
    /**
     * Select specific fields to fetch from the OrderSku
     * 
    **/
    select?: OrderSkuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderSkuInclude | null
  }



  /**
   * Model OrderSkuComponent
   */


  export type AggregateOrderSkuComponent = {
    _count: OrderSkuComponentCountAggregateOutputType | null
    count: OrderSkuComponentCountAggregateOutputType | null
    _avg: OrderSkuComponentAvgAggregateOutputType | null
    avg: OrderSkuComponentAvgAggregateOutputType | null
    _sum: OrderSkuComponentSumAggregateOutputType | null
    sum: OrderSkuComponentSumAggregateOutputType | null
    _min: OrderSkuComponentMinAggregateOutputType | null
    min: OrderSkuComponentMinAggregateOutputType | null
    _max: OrderSkuComponentMaxAggregateOutputType | null
    max: OrderSkuComponentMaxAggregateOutputType | null
  }

  export type OrderSkuComponentAvgAggregateOutputType = {
    boxNumber: number | null
    quantity: number | null
  }

  export type OrderSkuComponentSumAggregateOutputType = {
    boxNumber: number | null
    quantity: number | null
  }

  export type OrderSkuComponentMinAggregateOutputType = {
    id: string | null
    status: StatusEnum | null
    comment: string | null
    bayNo: string | null
    orderSkuId: string | null
    componentId: string | null
    boxSize: string | null
    boxNumber: number | null
    quantity: number | null
  }

  export type OrderSkuComponentMaxAggregateOutputType = {
    id: string | null
    status: StatusEnum | null
    comment: string | null
    bayNo: string | null
    orderSkuId: string | null
    componentId: string | null
    boxSize: string | null
    boxNumber: number | null
    quantity: number | null
  }

  export type OrderSkuComponentCountAggregateOutputType = {
    id: number
    status: number
    comment: number
    bayNo: number
    stageStatuses: number
    orderSkuId: number
    componentId: number
    boxSize: number
    boxNumber: number
    quantity: number
    _all: number
  }


  export type OrderSkuComponentAvgAggregateInputType = {
    boxNumber?: true
    quantity?: true
  }

  export type OrderSkuComponentSumAggregateInputType = {
    boxNumber?: true
    quantity?: true
  }

  export type OrderSkuComponentMinAggregateInputType = {
    id?: true
    status?: true
    comment?: true
    bayNo?: true
    orderSkuId?: true
    componentId?: true
    boxSize?: true
    boxNumber?: true
    quantity?: true
  }

  export type OrderSkuComponentMaxAggregateInputType = {
    id?: true
    status?: true
    comment?: true
    bayNo?: true
    orderSkuId?: true
    componentId?: true
    boxSize?: true
    boxNumber?: true
    quantity?: true
  }

  export type OrderSkuComponentCountAggregateInputType = {
    id?: true
    status?: true
    comment?: true
    bayNo?: true
    stageStatuses?: true
    orderSkuId?: true
    componentId?: true
    boxSize?: true
    boxNumber?: true
    quantity?: true
    _all?: true
  }

  export type OrderSkuComponentAggregateArgs = {
    /**
     * Filter which OrderSkuComponent to aggregate.
     * 
    **/
    where?: OrderSkuComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderSkuComponents to fetch.
     * 
    **/
    orderBy?: Enumerable<OrderSkuComponentOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: OrderSkuComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderSkuComponents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderSkuComponents.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderSkuComponents
    **/
    _count?: true | OrderSkuComponentCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | OrderSkuComponentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderSkuComponentAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: OrderSkuComponentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSkuComponentSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: OrderSkuComponentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderSkuComponentMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: OrderSkuComponentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderSkuComponentMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: OrderSkuComponentMaxAggregateInputType
  }

  export type GetOrderSkuComponentAggregateType<T extends OrderSkuComponentAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderSkuComponent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderSkuComponent[P]>
      : GetScalarType<T[P], AggregateOrderSkuComponent[P]>
  }


    
    
  export type OrderSkuComponentGroupByArgs = {
    where?: OrderSkuComponentWhereInput
    orderBy?: Enumerable<OrderSkuComponentOrderByInput>
    by: Array<OrderSkuComponentScalarFieldEnum>
    having?: OrderSkuComponentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderSkuComponentCountAggregateInputType | true
    _avg?: OrderSkuComponentAvgAggregateInputType
    _sum?: OrderSkuComponentSumAggregateInputType
    _min?: OrderSkuComponentMinAggregateInputType
    _max?: OrderSkuComponentMaxAggregateInputType
  }


  export type OrderSkuComponentGroupByOutputType = {
    id: string
    status: StatusEnum
    comment: string
    bayNo: string
    stageStatuses: JsonValue
    orderSkuId: string
    componentId: string
    boxSize: string
    boxNumber: number
    quantity: number
    _count: OrderSkuComponentCountAggregateOutputType | null
    _avg: OrderSkuComponentAvgAggregateOutputType | null
    _sum: OrderSkuComponentSumAggregateOutputType | null
    _min: OrderSkuComponentMinAggregateOutputType | null
    _max: OrderSkuComponentMaxAggregateOutputType | null
  }

  type GetOrderSkuComponentGroupByPayload<T extends OrderSkuComponentGroupByArgs> = Promise<
    Array<
      PickArray<OrderSkuComponentGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof OrderSkuComponentGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], OrderSkuComponentGroupByOutputType[P]> 
            : GetScalarType<T[P], OrderSkuComponentGroupByOutputType[P]>
        }
      > 
    >


  export type OrderSkuComponentSelect = {
    id?: boolean
    status?: boolean
    comment?: boolean
    bayNo?: boolean
    stageStatuses?: boolean
    orderSkuId?: boolean
    orderSku?: boolean | OrderSkuArgs
    componentId?: boolean
    component?: boolean | ComponentArgs
    boxSize?: boolean
    boxNumber?: boolean
    quantity?: boolean
  }

  export type OrderSkuComponentInclude = {
    orderSku?: boolean | OrderSkuArgs
    component?: boolean | ComponentArgs
  }

  export type OrderSkuComponentGetPayload<
    S extends boolean | null | undefined | OrderSkuComponentArgs,
    U = keyof S
      > = S extends true
        ? OrderSkuComponent
    : S extends undefined
    ? never
    : S extends OrderSkuComponentArgs | OrderSkuComponentFindManyArgs
    ?'include' extends U
    ? OrderSkuComponent  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'orderSku'
        ? OrderSkuGetPayload<S['include'][P]> :
        P extends 'component'
        ? ComponentGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof OrderSkuComponent ?OrderSkuComponent [P]
  : 
          P extends 'orderSku'
        ? OrderSkuGetPayload<S['select'][P]> :
        P extends 'component'
        ? ComponentGetPayload<S['select'][P]> : never
  } 
    : OrderSkuComponent
  : OrderSkuComponent


  type OrderSkuComponentCountArgs = Merge<
    Omit<OrderSkuComponentFindManyArgs, 'select' | 'include'> & {
      select?: OrderSkuComponentCountAggregateInputType | true
    }
  >

  export interface OrderSkuComponentDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one OrderSkuComponent that matches the filter.
     * @param {OrderSkuComponentFindUniqueArgs} args - Arguments to find a OrderSkuComponent
     * @example
     * // Get one OrderSkuComponent
     * const orderSkuComponent = await prisma.orderSkuComponent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderSkuComponentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OrderSkuComponentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'OrderSkuComponent'> extends True ? CheckSelect<T, Prisma__OrderSkuComponentClient<OrderSkuComponent>, Prisma__OrderSkuComponentClient<OrderSkuComponentGetPayload<T>>> : CheckSelect<T, Prisma__OrderSkuComponentClient<OrderSkuComponent | null >, Prisma__OrderSkuComponentClient<OrderSkuComponentGetPayload<T> | null >>

    /**
     * Find the first OrderSkuComponent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderSkuComponentFindFirstArgs} args - Arguments to find a OrderSkuComponent
     * @example
     * // Get one OrderSkuComponent
     * const orderSkuComponent = await prisma.orderSkuComponent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderSkuComponentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OrderSkuComponentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'OrderSkuComponent'> extends True ? CheckSelect<T, Prisma__OrderSkuComponentClient<OrderSkuComponent>, Prisma__OrderSkuComponentClient<OrderSkuComponentGetPayload<T>>> : CheckSelect<T, Prisma__OrderSkuComponentClient<OrderSkuComponent | null >, Prisma__OrderSkuComponentClient<OrderSkuComponentGetPayload<T> | null >>

    /**
     * Find zero or more OrderSkuComponents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderSkuComponentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderSkuComponents
     * const orderSkuComponents = await prisma.orderSkuComponent.findMany()
     * 
     * // Get first 10 OrderSkuComponents
     * const orderSkuComponents = await prisma.orderSkuComponent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderSkuComponentWithIdOnly = await prisma.orderSkuComponent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrderSkuComponentFindManyArgs>(
      args?: SelectSubset<T, OrderSkuComponentFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<OrderSkuComponent>>, PrismaPromise<Array<OrderSkuComponentGetPayload<T>>>>

    /**
     * Create a OrderSkuComponent.
     * @param {OrderSkuComponentCreateArgs} args - Arguments to create a OrderSkuComponent.
     * @example
     * // Create one OrderSkuComponent
     * const OrderSkuComponent = await prisma.orderSkuComponent.create({
     *   data: {
     *     // ... data to create a OrderSkuComponent
     *   }
     * })
     * 
    **/
    create<T extends OrderSkuComponentCreateArgs>(
      args: SelectSubset<T, OrderSkuComponentCreateArgs>
    ): CheckSelect<T, Prisma__OrderSkuComponentClient<OrderSkuComponent>, Prisma__OrderSkuComponentClient<OrderSkuComponentGetPayload<T>>>

    /**
     * Create many OrderSkuComponents.
     *     @param {OrderSkuComponentCreateManyArgs} args - Arguments to create many OrderSkuComponents.
     *     @example
     *     // Create many OrderSkuComponents
     *     const orderSkuComponent = await prisma.orderSkuComponent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrderSkuComponentCreateManyArgs>(
      args?: SelectSubset<T, OrderSkuComponentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a OrderSkuComponent.
     * @param {OrderSkuComponentDeleteArgs} args - Arguments to delete one OrderSkuComponent.
     * @example
     * // Delete one OrderSkuComponent
     * const OrderSkuComponent = await prisma.orderSkuComponent.delete({
     *   where: {
     *     // ... filter to delete one OrderSkuComponent
     *   }
     * })
     * 
    **/
    delete<T extends OrderSkuComponentDeleteArgs>(
      args: SelectSubset<T, OrderSkuComponentDeleteArgs>
    ): CheckSelect<T, Prisma__OrderSkuComponentClient<OrderSkuComponent>, Prisma__OrderSkuComponentClient<OrderSkuComponentGetPayload<T>>>

    /**
     * Update one OrderSkuComponent.
     * @param {OrderSkuComponentUpdateArgs} args - Arguments to update one OrderSkuComponent.
     * @example
     * // Update one OrderSkuComponent
     * const orderSkuComponent = await prisma.orderSkuComponent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderSkuComponentUpdateArgs>(
      args: SelectSubset<T, OrderSkuComponentUpdateArgs>
    ): CheckSelect<T, Prisma__OrderSkuComponentClient<OrderSkuComponent>, Prisma__OrderSkuComponentClient<OrderSkuComponentGetPayload<T>>>

    /**
     * Delete zero or more OrderSkuComponents.
     * @param {OrderSkuComponentDeleteManyArgs} args - Arguments to filter OrderSkuComponents to delete.
     * @example
     * // Delete a few OrderSkuComponents
     * const { count } = await prisma.orderSkuComponent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderSkuComponentDeleteManyArgs>(
      args?: SelectSubset<T, OrderSkuComponentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderSkuComponents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderSkuComponentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderSkuComponents
     * const orderSkuComponent = await prisma.orderSkuComponent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderSkuComponentUpdateManyArgs>(
      args: SelectSubset<T, OrderSkuComponentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderSkuComponent.
     * @param {OrderSkuComponentUpsertArgs} args - Arguments to update or create a OrderSkuComponent.
     * @example
     * // Update or create a OrderSkuComponent
     * const orderSkuComponent = await prisma.orderSkuComponent.upsert({
     *   create: {
     *     // ... data to create a OrderSkuComponent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderSkuComponent we want to update
     *   }
     * })
    **/
    upsert<T extends OrderSkuComponentUpsertArgs>(
      args: SelectSubset<T, OrderSkuComponentUpsertArgs>
    ): CheckSelect<T, Prisma__OrderSkuComponentClient<OrderSkuComponent>, Prisma__OrderSkuComponentClient<OrderSkuComponentGetPayload<T>>>

    /**
     * Count the number of OrderSkuComponents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderSkuComponentCountArgs} args - Arguments to filter OrderSkuComponents to count.
     * @example
     * // Count the number of OrderSkuComponents
     * const count = await prisma.orderSkuComponent.count({
     *   where: {
     *     // ... the filter for the OrderSkuComponents we want to count
     *   }
     * })
    **/
    count<T extends OrderSkuComponentCountArgs>(
      args?: Subset<T, OrderSkuComponentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderSkuComponentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderSkuComponent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderSkuComponentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderSkuComponentAggregateArgs>(args: Subset<T, OrderSkuComponentAggregateArgs>): PrismaPromise<GetOrderSkuComponentAggregateType<T>>

    /**
     * Group by OrderSkuComponent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderSkuComponentGroupByArgs} args - Group by arguments.
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
      T extends OrderSkuComponentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderSkuComponentGroupByArgs['orderBy'] }
        : { orderBy?: OrderSkuComponentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, OrderSkuComponentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderSkuComponentGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderSkuComponent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OrderSkuComponentClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    orderSku<T extends OrderSkuArgs = {}>(args?: Subset<T, OrderSkuArgs>): CheckSelect<T, Prisma__OrderSkuClient<OrderSku | null >, Prisma__OrderSkuClient<OrderSkuGetPayload<T> | null >>;

    component<T extends ComponentArgs = {}>(args?: Subset<T, ComponentArgs>): CheckSelect<T, Prisma__ComponentClient<Component | null >, Prisma__ComponentClient<ComponentGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * OrderSkuComponent findUnique
   */
  export type OrderSkuComponentFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the OrderSkuComponent
     * 
    **/
    select?: OrderSkuComponentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderSkuComponentInclude | null
    /**
     * Throw an Error if a OrderSkuComponent can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which OrderSkuComponent to fetch.
     * 
    **/
    where: OrderSkuComponentWhereUniqueInput
  }


  /**
   * OrderSkuComponent findFirst
   */
  export type OrderSkuComponentFindFirstArgs = {
    /**
     * Select specific fields to fetch from the OrderSkuComponent
     * 
    **/
    select?: OrderSkuComponentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderSkuComponentInclude | null
    /**
     * Throw an Error if a OrderSkuComponent can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which OrderSkuComponent to fetch.
     * 
    **/
    where?: OrderSkuComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderSkuComponents to fetch.
     * 
    **/
    orderBy?: Enumerable<OrderSkuComponentOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderSkuComponents.
     * 
    **/
    cursor?: OrderSkuComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderSkuComponents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderSkuComponents.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderSkuComponents.
     * 
    **/
    distinct?: Enumerable<OrderSkuComponentScalarFieldEnum>
  }


  /**
   * OrderSkuComponent findMany
   */
  export type OrderSkuComponentFindManyArgs = {
    /**
     * Select specific fields to fetch from the OrderSkuComponent
     * 
    **/
    select?: OrderSkuComponentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderSkuComponentInclude | null
    /**
     * Filter, which OrderSkuComponents to fetch.
     * 
    **/
    where?: OrderSkuComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderSkuComponents to fetch.
     * 
    **/
    orderBy?: Enumerable<OrderSkuComponentOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderSkuComponents.
     * 
    **/
    cursor?: OrderSkuComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderSkuComponents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderSkuComponents.
     * 
    **/
    skip?: number
    distinct?: Enumerable<OrderSkuComponentScalarFieldEnum>
  }


  /**
   * OrderSkuComponent create
   */
  export type OrderSkuComponentCreateArgs = {
    /**
     * Select specific fields to fetch from the OrderSkuComponent
     * 
    **/
    select?: OrderSkuComponentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderSkuComponentInclude | null
    /**
     * The data needed to create a OrderSkuComponent.
     * 
    **/
    data: XOR<OrderSkuComponentCreateInput, OrderSkuComponentUncheckedCreateInput>
  }


  /**
   * OrderSkuComponent createMany
   */
  export type OrderSkuComponentCreateManyArgs = {
    data: Enumerable<OrderSkuComponentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * OrderSkuComponent update
   */
  export type OrderSkuComponentUpdateArgs = {
    /**
     * Select specific fields to fetch from the OrderSkuComponent
     * 
    **/
    select?: OrderSkuComponentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderSkuComponentInclude | null
    /**
     * The data needed to update a OrderSkuComponent.
     * 
    **/
    data: XOR<OrderSkuComponentUpdateInput, OrderSkuComponentUncheckedUpdateInput>
    /**
     * Choose, which OrderSkuComponent to update.
     * 
    **/
    where: OrderSkuComponentWhereUniqueInput
  }


  /**
   * OrderSkuComponent updateMany
   */
  export type OrderSkuComponentUpdateManyArgs = {
    data: XOR<OrderSkuComponentUpdateManyMutationInput, OrderSkuComponentUncheckedUpdateManyInput>
    where?: OrderSkuComponentWhereInput
  }


  /**
   * OrderSkuComponent upsert
   */
  export type OrderSkuComponentUpsertArgs = {
    /**
     * Select specific fields to fetch from the OrderSkuComponent
     * 
    **/
    select?: OrderSkuComponentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderSkuComponentInclude | null
    /**
     * The filter to search for the OrderSkuComponent to update in case it exists.
     * 
    **/
    where: OrderSkuComponentWhereUniqueInput
    /**
     * In case the OrderSkuComponent found by the `where` argument doesn't exist, create a new OrderSkuComponent with this data.
     * 
    **/
    create: XOR<OrderSkuComponentCreateInput, OrderSkuComponentUncheckedCreateInput>
    /**
     * In case the OrderSkuComponent was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<OrderSkuComponentUpdateInput, OrderSkuComponentUncheckedUpdateInput>
  }


  /**
   * OrderSkuComponent delete
   */
  export type OrderSkuComponentDeleteArgs = {
    /**
     * Select specific fields to fetch from the OrderSkuComponent
     * 
    **/
    select?: OrderSkuComponentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderSkuComponentInclude | null
    /**
     * Filter which OrderSkuComponent to delete.
     * 
    **/
    where: OrderSkuComponentWhereUniqueInput
  }


  /**
   * OrderSkuComponent deleteMany
   */
  export type OrderSkuComponentDeleteManyArgs = {
    where?: OrderSkuComponentWhereInput
  }


  /**
   * OrderSkuComponent without action
   */
  export type OrderSkuComponentArgs = {
    /**
     * Select specific fields to fetch from the OrderSkuComponent
     * 
    **/
    select?: OrderSkuComponentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderSkuComponentInclude | null
  }



  /**
   * Model Product
   */


  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
    max: ProductMaxAggregateOutputType | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    value: string | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    value: string | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    value: number
    _all: number
  }


  export type ProductMinAggregateInputType = {
    id?: true
    value?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    value?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    value?: true
    _all?: true
  }

  export type ProductAggregateArgs = {
    /**
     * Filter which Product to aggregate.
     * 
    **/
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }


    
    
  export type ProductGroupByArgs = {
    where?: ProductWhereInput
    orderBy?: Enumerable<ProductOrderByInput>
    by: Array<ProductScalarFieldEnum>
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }


  export type ProductGroupByOutputType = {
    id: string
    value: string
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Promise<
    Array<
      PickArray<ProductGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], ProductGroupByOutputType[P]> 
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      > 
    >


  export type ProductSelect = {
    id?: boolean
    value?: boolean
    skus?: boolean | SkuFindManyArgs
  }

  export type ProductInclude = {
    skus?: boolean | SkuFindManyArgs
  }

  export type ProductGetPayload<
    S extends boolean | null | undefined | ProductArgs,
    U = keyof S
      > = S extends true
        ? Product
    : S extends undefined
    ? never
    : S extends ProductArgs | ProductFindManyArgs
    ?'include' extends U
    ? Product  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'skus'
        ? Array < SkuGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Product ?Product [P]
  : 
          P extends 'skus'
        ? Array < SkuGetPayload<S['select'][P]>>  : never
  } 
    : Product
  : Product


  type ProductCountArgs = Merge<
    Omit<ProductFindManyArgs, 'select' | 'include'> & {
      select?: ProductCountAggregateInputType | true
    }
  >

  export interface ProductDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProductFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Product'> extends True ? CheckSelect<T, Prisma__ProductClient<Product>, Prisma__ProductClient<ProductGetPayload<T>>> : CheckSelect<T, Prisma__ProductClient<Product | null >, Prisma__ProductClient<ProductGetPayload<T> | null >>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProductFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Product'> extends True ? CheckSelect<T, Prisma__ProductClient<Product>, Prisma__ProductClient<ProductGetPayload<T>>> : CheckSelect<T, Prisma__ProductClient<Product | null >, Prisma__ProductClient<ProductGetPayload<T> | null >>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductFindManyArgs>(
      args?: SelectSubset<T, ProductFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Product>>, PrismaPromise<Array<ProductGetPayload<T>>>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends ProductCreateArgs>(
      args: SelectSubset<T, ProductCreateArgs>
    ): CheckSelect<T, Prisma__ProductClient<Product>, Prisma__ProductClient<ProductGetPayload<T>>>

    /**
     * Create many Products.
     *     @param {ProductCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const product = await prisma.product.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductCreateManyArgs>(
      args?: SelectSubset<T, ProductCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends ProductDeleteArgs>(
      args: SelectSubset<T, ProductDeleteArgs>
    ): CheckSelect<T, Prisma__ProductClient<Product>, Prisma__ProductClient<ProductGetPayload<T>>>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductUpdateArgs>(
      args: SelectSubset<T, ProductUpdateArgs>
    ): CheckSelect<T, Prisma__ProductClient<Product>, Prisma__ProductClient<ProductGetPayload<T>>>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductDeleteManyArgs>(
      args?: SelectSubset<T, ProductDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductUpdateManyArgs>(
      args: SelectSubset<T, ProductUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends ProductUpsertArgs>(
      args: SelectSubset<T, ProductUpsertArgs>
    ): CheckSelect<T, Prisma__ProductClient<Product>, Prisma__ProductClient<ProductGetPayload<T>>>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProductClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    skus<T extends SkuFindManyArgs = {}>(args?: Subset<T, SkuFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Sku>>, PrismaPromise<Array<SkuGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * Throw an Error if a Product can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Product to fetch.
     * 
    **/
    where: ProductWhereUniqueInput
  }


  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * Throw an Error if a Product can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Product to fetch.
     * 
    **/
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     * 
    **/
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     * 
    **/
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * Product findMany
   */
  export type ProductFindManyArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * Filter, which Products to fetch.
     * 
    **/
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     * 
    **/
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * Product create
   */
  export type ProductCreateArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * The data needed to create a Product.
     * 
    **/
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }


  /**
   * Product createMany
   */
  export type ProductCreateManyArgs = {
    data: Enumerable<ProductCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Product update
   */
  export type ProductUpdateArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * The data needed to update a Product.
     * 
    **/
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     * 
    **/
    where: ProductWhereUniqueInput
  }


  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs = {
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    where?: ProductWhereInput
  }


  /**
   * Product upsert
   */
  export type ProductUpsertArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * The filter to search for the Product to update in case it exists.
     * 
    **/
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     * 
    **/
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }


  /**
   * Product delete
   */
  export type ProductDeleteArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * Filter which Product to delete.
     * 
    **/
    where: ProductWhereUniqueInput
  }


  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs = {
    where?: ProductWhereInput
  }


  /**
   * Product without action
   */
  export type ProductArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
  }



  /**
   * Model Size
   */


  export type AggregateSize = {
    _count: SizeCountAggregateOutputType | null
    count: SizeCountAggregateOutputType | null
    _min: SizeMinAggregateOutputType | null
    min: SizeMinAggregateOutputType | null
    _max: SizeMaxAggregateOutputType | null
    max: SizeMaxAggregateOutputType | null
  }

  export type SizeMinAggregateOutputType = {
    id: string | null
    value: string | null
  }

  export type SizeMaxAggregateOutputType = {
    id: string | null
    value: string | null
  }

  export type SizeCountAggregateOutputType = {
    id: number
    value: number
    _all: number
  }


  export type SizeMinAggregateInputType = {
    id?: true
    value?: true
  }

  export type SizeMaxAggregateInputType = {
    id?: true
    value?: true
  }

  export type SizeCountAggregateInputType = {
    id?: true
    value?: true
    _all?: true
  }

  export type SizeAggregateArgs = {
    /**
     * Filter which Size to aggregate.
     * 
    **/
    where?: SizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sizes to fetch.
     * 
    **/
    orderBy?: Enumerable<SizeOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sizes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sizes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sizes
    **/
    _count?: true | SizeCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | SizeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SizeMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: SizeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SizeMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: SizeMaxAggregateInputType
  }

  export type GetSizeAggregateType<T extends SizeAggregateArgs> = {
        [P in keyof T & keyof AggregateSize]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSize[P]>
      : GetScalarType<T[P], AggregateSize[P]>
  }


    
    
  export type SizeGroupByArgs = {
    where?: SizeWhereInput
    orderBy?: Enumerable<SizeOrderByInput>
    by: Array<SizeScalarFieldEnum>
    having?: SizeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SizeCountAggregateInputType | true
    _min?: SizeMinAggregateInputType
    _max?: SizeMaxAggregateInputType
  }


  export type SizeGroupByOutputType = {
    id: string
    value: string
    _count: SizeCountAggregateOutputType | null
    _min: SizeMinAggregateOutputType | null
    _max: SizeMaxAggregateOutputType | null
  }

  type GetSizeGroupByPayload<T extends SizeGroupByArgs> = Promise<
    Array<
      PickArray<SizeGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof SizeGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], SizeGroupByOutputType[P]> 
            : GetScalarType<T[P], SizeGroupByOutputType[P]>
        }
      > 
    >


  export type SizeSelect = {
    id?: boolean
    value?: boolean
    skus?: boolean | SkuFindManyArgs
  }

  export type SizeInclude = {
    skus?: boolean | SkuFindManyArgs
  }

  export type SizeGetPayload<
    S extends boolean | null | undefined | SizeArgs,
    U = keyof S
      > = S extends true
        ? Size
    : S extends undefined
    ? never
    : S extends SizeArgs | SizeFindManyArgs
    ?'include' extends U
    ? Size  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'skus'
        ? Array < SkuGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Size ?Size [P]
  : 
          P extends 'skus'
        ? Array < SkuGetPayload<S['select'][P]>>  : never
  } 
    : Size
  : Size


  type SizeCountArgs = Merge<
    Omit<SizeFindManyArgs, 'select' | 'include'> & {
      select?: SizeCountAggregateInputType | true
    }
  >

  export interface SizeDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Size that matches the filter.
     * @param {SizeFindUniqueArgs} args - Arguments to find a Size
     * @example
     * // Get one Size
     * const size = await prisma.size.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SizeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SizeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Size'> extends True ? CheckSelect<T, Prisma__SizeClient<Size>, Prisma__SizeClient<SizeGetPayload<T>>> : CheckSelect<T, Prisma__SizeClient<Size | null >, Prisma__SizeClient<SizeGetPayload<T> | null >>

    /**
     * Find the first Size that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeFindFirstArgs} args - Arguments to find a Size
     * @example
     * // Get one Size
     * const size = await prisma.size.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SizeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SizeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Size'> extends True ? CheckSelect<T, Prisma__SizeClient<Size>, Prisma__SizeClient<SizeGetPayload<T>>> : CheckSelect<T, Prisma__SizeClient<Size | null >, Prisma__SizeClient<SizeGetPayload<T> | null >>

    /**
     * Find zero or more Sizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sizes
     * const sizes = await prisma.size.findMany()
     * 
     * // Get first 10 Sizes
     * const sizes = await prisma.size.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sizeWithIdOnly = await prisma.size.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SizeFindManyArgs>(
      args?: SelectSubset<T, SizeFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Size>>, PrismaPromise<Array<SizeGetPayload<T>>>>

    /**
     * Create a Size.
     * @param {SizeCreateArgs} args - Arguments to create a Size.
     * @example
     * // Create one Size
     * const Size = await prisma.size.create({
     *   data: {
     *     // ... data to create a Size
     *   }
     * })
     * 
    **/
    create<T extends SizeCreateArgs>(
      args: SelectSubset<T, SizeCreateArgs>
    ): CheckSelect<T, Prisma__SizeClient<Size>, Prisma__SizeClient<SizeGetPayload<T>>>

    /**
     * Create many Sizes.
     *     @param {SizeCreateManyArgs} args - Arguments to create many Sizes.
     *     @example
     *     // Create many Sizes
     *     const size = await prisma.size.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SizeCreateManyArgs>(
      args?: SelectSubset<T, SizeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Size.
     * @param {SizeDeleteArgs} args - Arguments to delete one Size.
     * @example
     * // Delete one Size
     * const Size = await prisma.size.delete({
     *   where: {
     *     // ... filter to delete one Size
     *   }
     * })
     * 
    **/
    delete<T extends SizeDeleteArgs>(
      args: SelectSubset<T, SizeDeleteArgs>
    ): CheckSelect<T, Prisma__SizeClient<Size>, Prisma__SizeClient<SizeGetPayload<T>>>

    /**
     * Update one Size.
     * @param {SizeUpdateArgs} args - Arguments to update one Size.
     * @example
     * // Update one Size
     * const size = await prisma.size.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SizeUpdateArgs>(
      args: SelectSubset<T, SizeUpdateArgs>
    ): CheckSelect<T, Prisma__SizeClient<Size>, Prisma__SizeClient<SizeGetPayload<T>>>

    /**
     * Delete zero or more Sizes.
     * @param {SizeDeleteManyArgs} args - Arguments to filter Sizes to delete.
     * @example
     * // Delete a few Sizes
     * const { count } = await prisma.size.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SizeDeleteManyArgs>(
      args?: SelectSubset<T, SizeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sizes
     * const size = await prisma.size.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SizeUpdateManyArgs>(
      args: SelectSubset<T, SizeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Size.
     * @param {SizeUpsertArgs} args - Arguments to update or create a Size.
     * @example
     * // Update or create a Size
     * const size = await prisma.size.upsert({
     *   create: {
     *     // ... data to create a Size
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Size we want to update
     *   }
     * })
    **/
    upsert<T extends SizeUpsertArgs>(
      args: SelectSubset<T, SizeUpsertArgs>
    ): CheckSelect<T, Prisma__SizeClient<Size>, Prisma__SizeClient<SizeGetPayload<T>>>

    /**
     * Count the number of Sizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeCountArgs} args - Arguments to filter Sizes to count.
     * @example
     * // Count the number of Sizes
     * const count = await prisma.size.count({
     *   where: {
     *     // ... the filter for the Sizes we want to count
     *   }
     * })
    **/
    count<T extends SizeCountArgs>(
      args?: Subset<T, SizeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SizeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Size.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SizeAggregateArgs>(args: Subset<T, SizeAggregateArgs>): PrismaPromise<GetSizeAggregateType<T>>

    /**
     * Group by Size.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeGroupByArgs} args - Group by arguments.
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
      T extends SizeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SizeGroupByArgs['orderBy'] }
        : { orderBy?: SizeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SizeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSizeGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Size.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SizeClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    skus<T extends SkuFindManyArgs = {}>(args?: Subset<T, SkuFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Sku>>, PrismaPromise<Array<SkuGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Size findUnique
   */
  export type SizeFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Size
     * 
    **/
    select?: SizeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SizeInclude | null
    /**
     * Throw an Error if a Size can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Size to fetch.
     * 
    **/
    where: SizeWhereUniqueInput
  }


  /**
   * Size findFirst
   */
  export type SizeFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Size
     * 
    **/
    select?: SizeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SizeInclude | null
    /**
     * Throw an Error if a Size can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Size to fetch.
     * 
    **/
    where?: SizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sizes to fetch.
     * 
    **/
    orderBy?: Enumerable<SizeOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sizes.
     * 
    **/
    cursor?: SizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sizes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sizes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sizes.
     * 
    **/
    distinct?: Enumerable<SizeScalarFieldEnum>
  }


  /**
   * Size findMany
   */
  export type SizeFindManyArgs = {
    /**
     * Select specific fields to fetch from the Size
     * 
    **/
    select?: SizeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SizeInclude | null
    /**
     * Filter, which Sizes to fetch.
     * 
    **/
    where?: SizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sizes to fetch.
     * 
    **/
    orderBy?: Enumerable<SizeOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sizes.
     * 
    **/
    cursor?: SizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sizes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sizes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SizeScalarFieldEnum>
  }


  /**
   * Size create
   */
  export type SizeCreateArgs = {
    /**
     * Select specific fields to fetch from the Size
     * 
    **/
    select?: SizeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SizeInclude | null
    /**
     * The data needed to create a Size.
     * 
    **/
    data: XOR<SizeCreateInput, SizeUncheckedCreateInput>
  }


  /**
   * Size createMany
   */
  export type SizeCreateManyArgs = {
    data: Enumerable<SizeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Size update
   */
  export type SizeUpdateArgs = {
    /**
     * Select specific fields to fetch from the Size
     * 
    **/
    select?: SizeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SizeInclude | null
    /**
     * The data needed to update a Size.
     * 
    **/
    data: XOR<SizeUpdateInput, SizeUncheckedUpdateInput>
    /**
     * Choose, which Size to update.
     * 
    **/
    where: SizeWhereUniqueInput
  }


  /**
   * Size updateMany
   */
  export type SizeUpdateManyArgs = {
    data: XOR<SizeUpdateManyMutationInput, SizeUncheckedUpdateManyInput>
    where?: SizeWhereInput
  }


  /**
   * Size upsert
   */
  export type SizeUpsertArgs = {
    /**
     * Select specific fields to fetch from the Size
     * 
    **/
    select?: SizeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SizeInclude | null
    /**
     * The filter to search for the Size to update in case it exists.
     * 
    **/
    where: SizeWhereUniqueInput
    /**
     * In case the Size found by the `where` argument doesn't exist, create a new Size with this data.
     * 
    **/
    create: XOR<SizeCreateInput, SizeUncheckedCreateInput>
    /**
     * In case the Size was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SizeUpdateInput, SizeUncheckedUpdateInput>
  }


  /**
   * Size delete
   */
  export type SizeDeleteArgs = {
    /**
     * Select specific fields to fetch from the Size
     * 
    **/
    select?: SizeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SizeInclude | null
    /**
     * Filter which Size to delete.
     * 
    **/
    where: SizeWhereUniqueInput
  }


  /**
   * Size deleteMany
   */
  export type SizeDeleteManyArgs = {
    where?: SizeWhereInput
  }


  /**
   * Size without action
   */
  export type SizeArgs = {
    /**
     * Select specific fields to fetch from the Size
     * 
    **/
    select?: SizeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SizeInclude | null
  }



  /**
   * Model Sku
   */


  export type AggregateSku = {
    _count: SkuCountAggregateOutputType | null
    count: SkuCountAggregateOutputType | null
    _avg: SkuAvgAggregateOutputType | null
    avg: SkuAvgAggregateOutputType | null
    _sum: SkuSumAggregateOutputType | null
    sum: SkuSumAggregateOutputType | null
    _min: SkuMinAggregateOutputType | null
    min: SkuMinAggregateOutputType | null
    _max: SkuMaxAggregateOutputType | null
    max: SkuMaxAggregateOutputType | null
  }

  export type SkuAvgAggregateOutputType = {
    boxQuantity: number | null
  }

  export type SkuSumAggregateOutputType = {
    boxQuantity: number | null
  }

  export type SkuMinAggregateOutputType = {
    id: string | null
    countryId: string | null
    categoryId: string | null
    productId: string | null
    sizeId: string | null
    finishId: string | null
    legsId: string | null
    boxQuantity: number | null
  }

  export type SkuMaxAggregateOutputType = {
    id: string | null
    countryId: string | null
    categoryId: string | null
    productId: string | null
    sizeId: string | null
    finishId: string | null
    legsId: string | null
    boxQuantity: number | null
  }

  export type SkuCountAggregateOutputType = {
    id: number
    countryId: number
    categoryId: number
    productId: number
    sizeId: number
    finishId: number
    legsId: number
    boxQuantity: number
    _all: number
  }


  export type SkuAvgAggregateInputType = {
    boxQuantity?: true
  }

  export type SkuSumAggregateInputType = {
    boxQuantity?: true
  }

  export type SkuMinAggregateInputType = {
    id?: true
    countryId?: true
    categoryId?: true
    productId?: true
    sizeId?: true
    finishId?: true
    legsId?: true
    boxQuantity?: true
  }

  export type SkuMaxAggregateInputType = {
    id?: true
    countryId?: true
    categoryId?: true
    productId?: true
    sizeId?: true
    finishId?: true
    legsId?: true
    boxQuantity?: true
  }

  export type SkuCountAggregateInputType = {
    id?: true
    countryId?: true
    categoryId?: true
    productId?: true
    sizeId?: true
    finishId?: true
    legsId?: true
    boxQuantity?: true
    _all?: true
  }

  export type SkuAggregateArgs = {
    /**
     * Filter which Sku to aggregate.
     * 
    **/
    where?: SkuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skus to fetch.
     * 
    **/
    orderBy?: Enumerable<SkuOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SkuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skus from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skus.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skus
    **/
    _count?: true | SkuCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | SkuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkuAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: SkuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkuSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: SkuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkuMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: SkuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkuMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: SkuMaxAggregateInputType
  }

  export type GetSkuAggregateType<T extends SkuAggregateArgs> = {
        [P in keyof T & keyof AggregateSku]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSku[P]>
      : GetScalarType<T[P], AggregateSku[P]>
  }


    
    
  export type SkuGroupByArgs = {
    where?: SkuWhereInput
    orderBy?: Enumerable<SkuOrderByInput>
    by: Array<SkuScalarFieldEnum>
    having?: SkuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkuCountAggregateInputType | true
    _avg?: SkuAvgAggregateInputType
    _sum?: SkuSumAggregateInputType
    _min?: SkuMinAggregateInputType
    _max?: SkuMaxAggregateInputType
  }


  export type SkuGroupByOutputType = {
    id: string
    countryId: string
    categoryId: string
    productId: string
    sizeId: string
    finishId: string
    legsId: string
    boxQuantity: number
    _count: SkuCountAggregateOutputType | null
    _avg: SkuAvgAggregateOutputType | null
    _sum: SkuSumAggregateOutputType | null
    _min: SkuMinAggregateOutputType | null
    _max: SkuMaxAggregateOutputType | null
  }

  type GetSkuGroupByPayload<T extends SkuGroupByArgs> = Promise<
    Array<
      PickArray<SkuGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof SkuGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], SkuGroupByOutputType[P]> 
            : GetScalarType<T[P], SkuGroupByOutputType[P]>
        }
      > 
    >


  export type SkuSelect = {
    id?: boolean
    country?: boolean | CountryArgs
    countryId?: boolean
    category?: boolean | CategoryArgs
    categoryId?: boolean
    product?: boolean | ProductArgs
    productId?: boolean
    size?: boolean | SizeArgs
    sizeId?: boolean
    finish?: boolean | FinishArgs
    finishId?: boolean
    legs?: boolean | LegsArgs
    legsId?: boolean
    boxQuantity?: boolean
    orderSkus?: boolean | OrderSkuFindManyArgs
    components?: boolean | SkuToComponentFindManyArgs
  }

  export type SkuInclude = {
    country?: boolean | CountryArgs
    category?: boolean | CategoryArgs
    product?: boolean | ProductArgs
    size?: boolean | SizeArgs
    finish?: boolean | FinishArgs
    legs?: boolean | LegsArgs
    orderSkus?: boolean | OrderSkuFindManyArgs
    components?: boolean | SkuToComponentFindManyArgs
  }

  export type SkuGetPayload<
    S extends boolean | null | undefined | SkuArgs,
    U = keyof S
      > = S extends true
        ? Sku
    : S extends undefined
    ? never
    : S extends SkuArgs | SkuFindManyArgs
    ?'include' extends U
    ? Sku  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'country'
        ? CountryGetPayload<S['include'][P]> :
        P extends 'category'
        ? CategoryGetPayload<S['include'][P]> :
        P extends 'product'
        ? ProductGetPayload<S['include'][P]> :
        P extends 'size'
        ? SizeGetPayload<S['include'][P]> :
        P extends 'finish'
        ? FinishGetPayload<S['include'][P]> :
        P extends 'legs'
        ? LegsGetPayload<S['include'][P]> :
        P extends 'orderSkus'
        ? Array < OrderSkuGetPayload<S['include'][P]>>  :
        P extends 'components'
        ? Array < SkuToComponentGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Sku ?Sku [P]
  : 
          P extends 'country'
        ? CountryGetPayload<S['select'][P]> :
        P extends 'category'
        ? CategoryGetPayload<S['select'][P]> :
        P extends 'product'
        ? ProductGetPayload<S['select'][P]> :
        P extends 'size'
        ? SizeGetPayload<S['select'][P]> :
        P extends 'finish'
        ? FinishGetPayload<S['select'][P]> :
        P extends 'legs'
        ? LegsGetPayload<S['select'][P]> :
        P extends 'orderSkus'
        ? Array < OrderSkuGetPayload<S['select'][P]>>  :
        P extends 'components'
        ? Array < SkuToComponentGetPayload<S['select'][P]>>  : never
  } 
    : Sku
  : Sku


  type SkuCountArgs = Merge<
    Omit<SkuFindManyArgs, 'select' | 'include'> & {
      select?: SkuCountAggregateInputType | true
    }
  >

  export interface SkuDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Sku that matches the filter.
     * @param {SkuFindUniqueArgs} args - Arguments to find a Sku
     * @example
     * // Get one Sku
     * const sku = await prisma.sku.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SkuFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SkuFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Sku'> extends True ? CheckSelect<T, Prisma__SkuClient<Sku>, Prisma__SkuClient<SkuGetPayload<T>>> : CheckSelect<T, Prisma__SkuClient<Sku | null >, Prisma__SkuClient<SkuGetPayload<T> | null >>

    /**
     * Find the first Sku that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkuFindFirstArgs} args - Arguments to find a Sku
     * @example
     * // Get one Sku
     * const sku = await prisma.sku.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SkuFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SkuFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Sku'> extends True ? CheckSelect<T, Prisma__SkuClient<Sku>, Prisma__SkuClient<SkuGetPayload<T>>> : CheckSelect<T, Prisma__SkuClient<Sku | null >, Prisma__SkuClient<SkuGetPayload<T> | null >>

    /**
     * Find zero or more Skus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkuFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skus
     * const skus = await prisma.sku.findMany()
     * 
     * // Get first 10 Skus
     * const skus = await prisma.sku.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skuWithIdOnly = await prisma.sku.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SkuFindManyArgs>(
      args?: SelectSubset<T, SkuFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Sku>>, PrismaPromise<Array<SkuGetPayload<T>>>>

    /**
     * Create a Sku.
     * @param {SkuCreateArgs} args - Arguments to create a Sku.
     * @example
     * // Create one Sku
     * const Sku = await prisma.sku.create({
     *   data: {
     *     // ... data to create a Sku
     *   }
     * })
     * 
    **/
    create<T extends SkuCreateArgs>(
      args: SelectSubset<T, SkuCreateArgs>
    ): CheckSelect<T, Prisma__SkuClient<Sku>, Prisma__SkuClient<SkuGetPayload<T>>>

    /**
     * Create many Skus.
     *     @param {SkuCreateManyArgs} args - Arguments to create many Skus.
     *     @example
     *     // Create many Skus
     *     const sku = await prisma.sku.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SkuCreateManyArgs>(
      args?: SelectSubset<T, SkuCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Sku.
     * @param {SkuDeleteArgs} args - Arguments to delete one Sku.
     * @example
     * // Delete one Sku
     * const Sku = await prisma.sku.delete({
     *   where: {
     *     // ... filter to delete one Sku
     *   }
     * })
     * 
    **/
    delete<T extends SkuDeleteArgs>(
      args: SelectSubset<T, SkuDeleteArgs>
    ): CheckSelect<T, Prisma__SkuClient<Sku>, Prisma__SkuClient<SkuGetPayload<T>>>

    /**
     * Update one Sku.
     * @param {SkuUpdateArgs} args - Arguments to update one Sku.
     * @example
     * // Update one Sku
     * const sku = await prisma.sku.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SkuUpdateArgs>(
      args: SelectSubset<T, SkuUpdateArgs>
    ): CheckSelect<T, Prisma__SkuClient<Sku>, Prisma__SkuClient<SkuGetPayload<T>>>

    /**
     * Delete zero or more Skus.
     * @param {SkuDeleteManyArgs} args - Arguments to filter Skus to delete.
     * @example
     * // Delete a few Skus
     * const { count } = await prisma.sku.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SkuDeleteManyArgs>(
      args?: SelectSubset<T, SkuDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skus
     * const sku = await prisma.sku.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SkuUpdateManyArgs>(
      args: SelectSubset<T, SkuUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Sku.
     * @param {SkuUpsertArgs} args - Arguments to update or create a Sku.
     * @example
     * // Update or create a Sku
     * const sku = await prisma.sku.upsert({
     *   create: {
     *     // ... data to create a Sku
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sku we want to update
     *   }
     * })
    **/
    upsert<T extends SkuUpsertArgs>(
      args: SelectSubset<T, SkuUpsertArgs>
    ): CheckSelect<T, Prisma__SkuClient<Sku>, Prisma__SkuClient<SkuGetPayload<T>>>

    /**
     * Count the number of Skus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkuCountArgs} args - Arguments to filter Skus to count.
     * @example
     * // Count the number of Skus
     * const count = await prisma.sku.count({
     *   where: {
     *     // ... the filter for the Skus we want to count
     *   }
     * })
    **/
    count<T extends SkuCountArgs>(
      args?: Subset<T, SkuCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sku.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkuAggregateArgs>(args: Subset<T, SkuAggregateArgs>): PrismaPromise<GetSkuAggregateType<T>>

    /**
     * Group by Sku.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkuGroupByArgs} args - Group by arguments.
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
      T extends SkuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkuGroupByArgs['orderBy'] }
        : { orderBy?: SkuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SkuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkuGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sku.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SkuClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    country<T extends CountryArgs = {}>(args?: Subset<T, CountryArgs>): CheckSelect<T, Prisma__CountryClient<Country | null >, Prisma__CountryClient<CountryGetPayload<T> | null >>;

    category<T extends CategoryArgs = {}>(args?: Subset<T, CategoryArgs>): CheckSelect<T, Prisma__CategoryClient<Category | null >, Prisma__CategoryClient<CategoryGetPayload<T> | null >>;

    product<T extends ProductArgs = {}>(args?: Subset<T, ProductArgs>): CheckSelect<T, Prisma__ProductClient<Product | null >, Prisma__ProductClient<ProductGetPayload<T> | null >>;

    size<T extends SizeArgs = {}>(args?: Subset<T, SizeArgs>): CheckSelect<T, Prisma__SizeClient<Size | null >, Prisma__SizeClient<SizeGetPayload<T> | null >>;

    finish<T extends FinishArgs = {}>(args?: Subset<T, FinishArgs>): CheckSelect<T, Prisma__FinishClient<Finish | null >, Prisma__FinishClient<FinishGetPayload<T> | null >>;

    legs<T extends LegsArgs = {}>(args?: Subset<T, LegsArgs>): CheckSelect<T, Prisma__LegsClient<Legs | null >, Prisma__LegsClient<LegsGetPayload<T> | null >>;

    orderSkus<T extends OrderSkuFindManyArgs = {}>(args?: Subset<T, OrderSkuFindManyArgs>): CheckSelect<T, PrismaPromise<Array<OrderSku>>, PrismaPromise<Array<OrderSkuGetPayload<T>>>>;

    components<T extends SkuToComponentFindManyArgs = {}>(args?: Subset<T, SkuToComponentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<SkuToComponent>>, PrismaPromise<Array<SkuToComponentGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Sku findUnique
   */
  export type SkuFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Sku
     * 
    **/
    select?: SkuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkuInclude | null
    /**
     * Throw an Error if a Sku can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Sku to fetch.
     * 
    **/
    where: SkuWhereUniqueInput
  }


  /**
   * Sku findFirst
   */
  export type SkuFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Sku
     * 
    **/
    select?: SkuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkuInclude | null
    /**
     * Throw an Error if a Sku can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Sku to fetch.
     * 
    **/
    where?: SkuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skus to fetch.
     * 
    **/
    orderBy?: Enumerable<SkuOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skus.
     * 
    **/
    cursor?: SkuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skus from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skus.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skus.
     * 
    **/
    distinct?: Enumerable<SkuScalarFieldEnum>
  }


  /**
   * Sku findMany
   */
  export type SkuFindManyArgs = {
    /**
     * Select specific fields to fetch from the Sku
     * 
    **/
    select?: SkuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkuInclude | null
    /**
     * Filter, which Skus to fetch.
     * 
    **/
    where?: SkuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skus to fetch.
     * 
    **/
    orderBy?: Enumerable<SkuOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skus.
     * 
    **/
    cursor?: SkuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skus from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skus.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SkuScalarFieldEnum>
  }


  /**
   * Sku create
   */
  export type SkuCreateArgs = {
    /**
     * Select specific fields to fetch from the Sku
     * 
    **/
    select?: SkuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkuInclude | null
    /**
     * The data needed to create a Sku.
     * 
    **/
    data: XOR<SkuCreateInput, SkuUncheckedCreateInput>
  }


  /**
   * Sku createMany
   */
  export type SkuCreateManyArgs = {
    data: Enumerable<SkuCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Sku update
   */
  export type SkuUpdateArgs = {
    /**
     * Select specific fields to fetch from the Sku
     * 
    **/
    select?: SkuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkuInclude | null
    /**
     * The data needed to update a Sku.
     * 
    **/
    data: XOR<SkuUpdateInput, SkuUncheckedUpdateInput>
    /**
     * Choose, which Sku to update.
     * 
    **/
    where: SkuWhereUniqueInput
  }


  /**
   * Sku updateMany
   */
  export type SkuUpdateManyArgs = {
    data: XOR<SkuUpdateManyMutationInput, SkuUncheckedUpdateManyInput>
    where?: SkuWhereInput
  }


  /**
   * Sku upsert
   */
  export type SkuUpsertArgs = {
    /**
     * Select specific fields to fetch from the Sku
     * 
    **/
    select?: SkuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkuInclude | null
    /**
     * The filter to search for the Sku to update in case it exists.
     * 
    **/
    where: SkuWhereUniqueInput
    /**
     * In case the Sku found by the `where` argument doesn't exist, create a new Sku with this data.
     * 
    **/
    create: XOR<SkuCreateInput, SkuUncheckedCreateInput>
    /**
     * In case the Sku was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SkuUpdateInput, SkuUncheckedUpdateInput>
  }


  /**
   * Sku delete
   */
  export type SkuDeleteArgs = {
    /**
     * Select specific fields to fetch from the Sku
     * 
    **/
    select?: SkuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkuInclude | null
    /**
     * Filter which Sku to delete.
     * 
    **/
    where: SkuWhereUniqueInput
  }


  /**
   * Sku deleteMany
   */
  export type SkuDeleteManyArgs = {
    where?: SkuWhereInput
  }


  /**
   * Sku without action
   */
  export type SkuArgs = {
    /**
     * Select specific fields to fetch from the Sku
     * 
    **/
    select?: SkuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkuInclude | null
  }



  /**
   * Model SkuToComponent
   */


  export type AggregateSkuToComponent = {
    _count: SkuToComponentCountAggregateOutputType | null
    count: SkuToComponentCountAggregateOutputType | null
    _avg: SkuToComponentAvgAggregateOutputType | null
    avg: SkuToComponentAvgAggregateOutputType | null
    _sum: SkuToComponentSumAggregateOutputType | null
    sum: SkuToComponentSumAggregateOutputType | null
    _min: SkuToComponentMinAggregateOutputType | null
    min: SkuToComponentMinAggregateOutputType | null
    _max: SkuToComponentMaxAggregateOutputType | null
    max: SkuToComponentMaxAggregateOutputType | null
  }

  export type SkuToComponentAvgAggregateOutputType = {
    boxNumber: number | null
    quantity: number | null
  }

  export type SkuToComponentSumAggregateOutputType = {
    boxNumber: number | null
    quantity: number | null
  }

  export type SkuToComponentMinAggregateOutputType = {
    componentId: string | null
    skuId: string | null
    boxSize: string | null
    boxNumber: number | null
    quantity: number | null
  }

  export type SkuToComponentMaxAggregateOutputType = {
    componentId: string | null
    skuId: string | null
    boxSize: string | null
    boxNumber: number | null
    quantity: number | null
  }

  export type SkuToComponentCountAggregateOutputType = {
    componentId: number
    skuId: number
    boxSize: number
    boxNumber: number
    quantity: number
    _all: number
  }


  export type SkuToComponentAvgAggregateInputType = {
    boxNumber?: true
    quantity?: true
  }

  export type SkuToComponentSumAggregateInputType = {
    boxNumber?: true
    quantity?: true
  }

  export type SkuToComponentMinAggregateInputType = {
    componentId?: true
    skuId?: true
    boxSize?: true
    boxNumber?: true
    quantity?: true
  }

  export type SkuToComponentMaxAggregateInputType = {
    componentId?: true
    skuId?: true
    boxSize?: true
    boxNumber?: true
    quantity?: true
  }

  export type SkuToComponentCountAggregateInputType = {
    componentId?: true
    skuId?: true
    boxSize?: true
    boxNumber?: true
    quantity?: true
    _all?: true
  }

  export type SkuToComponentAggregateArgs = {
    /**
     * Filter which SkuToComponent to aggregate.
     * 
    **/
    where?: SkuToComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkuToComponents to fetch.
     * 
    **/
    orderBy?: Enumerable<SkuToComponentOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SkuToComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkuToComponents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkuToComponents.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SkuToComponents
    **/
    _count?: true | SkuToComponentCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | SkuToComponentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkuToComponentAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: SkuToComponentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkuToComponentSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: SkuToComponentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkuToComponentMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: SkuToComponentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkuToComponentMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: SkuToComponentMaxAggregateInputType
  }

  export type GetSkuToComponentAggregateType<T extends SkuToComponentAggregateArgs> = {
        [P in keyof T & keyof AggregateSkuToComponent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkuToComponent[P]>
      : GetScalarType<T[P], AggregateSkuToComponent[P]>
  }


    
    
  export type SkuToComponentGroupByArgs = {
    where?: SkuToComponentWhereInput
    orderBy?: Enumerable<SkuToComponentOrderByInput>
    by: Array<SkuToComponentScalarFieldEnum>
    having?: SkuToComponentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkuToComponentCountAggregateInputType | true
    _avg?: SkuToComponentAvgAggregateInputType
    _sum?: SkuToComponentSumAggregateInputType
    _min?: SkuToComponentMinAggregateInputType
    _max?: SkuToComponentMaxAggregateInputType
  }


  export type SkuToComponentGroupByOutputType = {
    componentId: string
    skuId: string
    boxSize: string
    boxNumber: number
    quantity: number
    _count: SkuToComponentCountAggregateOutputType | null
    _avg: SkuToComponentAvgAggregateOutputType | null
    _sum: SkuToComponentSumAggregateOutputType | null
    _min: SkuToComponentMinAggregateOutputType | null
    _max: SkuToComponentMaxAggregateOutputType | null
  }

  type GetSkuToComponentGroupByPayload<T extends SkuToComponentGroupByArgs> = Promise<
    Array<
      PickArray<SkuToComponentGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof SkuToComponentGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], SkuToComponentGroupByOutputType[P]> 
            : GetScalarType<T[P], SkuToComponentGroupByOutputType[P]>
        }
      > 
    >


  export type SkuToComponentSelect = {
    componentId?: boolean
    component?: boolean | ComponentArgs
    skuId?: boolean
    sku?: boolean | SkuArgs
    boxSize?: boolean
    boxNumber?: boolean
    quantity?: boolean
  }

  export type SkuToComponentInclude = {
    component?: boolean | ComponentArgs
    sku?: boolean | SkuArgs
  }

  export type SkuToComponentGetPayload<
    S extends boolean | null | undefined | SkuToComponentArgs,
    U = keyof S
      > = S extends true
        ? SkuToComponent
    : S extends undefined
    ? never
    : S extends SkuToComponentArgs | SkuToComponentFindManyArgs
    ?'include' extends U
    ? SkuToComponent  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'component'
        ? ComponentGetPayload<S['include'][P]> :
        P extends 'sku'
        ? SkuGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof SkuToComponent ?SkuToComponent [P]
  : 
          P extends 'component'
        ? ComponentGetPayload<S['select'][P]> :
        P extends 'sku'
        ? SkuGetPayload<S['select'][P]> : never
  } 
    : SkuToComponent
  : SkuToComponent


  type SkuToComponentCountArgs = Merge<
    Omit<SkuToComponentFindManyArgs, 'select' | 'include'> & {
      select?: SkuToComponentCountAggregateInputType | true
    }
  >

  export interface SkuToComponentDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one SkuToComponent that matches the filter.
     * @param {SkuToComponentFindUniqueArgs} args - Arguments to find a SkuToComponent
     * @example
     * // Get one SkuToComponent
     * const skuToComponent = await prisma.skuToComponent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SkuToComponentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SkuToComponentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SkuToComponent'> extends True ? CheckSelect<T, Prisma__SkuToComponentClient<SkuToComponent>, Prisma__SkuToComponentClient<SkuToComponentGetPayload<T>>> : CheckSelect<T, Prisma__SkuToComponentClient<SkuToComponent | null >, Prisma__SkuToComponentClient<SkuToComponentGetPayload<T> | null >>

    /**
     * Find the first SkuToComponent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkuToComponentFindFirstArgs} args - Arguments to find a SkuToComponent
     * @example
     * // Get one SkuToComponent
     * const skuToComponent = await prisma.skuToComponent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SkuToComponentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SkuToComponentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SkuToComponent'> extends True ? CheckSelect<T, Prisma__SkuToComponentClient<SkuToComponent>, Prisma__SkuToComponentClient<SkuToComponentGetPayload<T>>> : CheckSelect<T, Prisma__SkuToComponentClient<SkuToComponent | null >, Prisma__SkuToComponentClient<SkuToComponentGetPayload<T> | null >>

    /**
     * Find zero or more SkuToComponents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkuToComponentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SkuToComponents
     * const skuToComponents = await prisma.skuToComponent.findMany()
     * 
     * // Get first 10 SkuToComponents
     * const skuToComponents = await prisma.skuToComponent.findMany({ take: 10 })
     * 
     * // Only select the `componentId`
     * const skuToComponentWithComponentIdOnly = await prisma.skuToComponent.findMany({ select: { componentId: true } })
     * 
    **/
    findMany<T extends SkuToComponentFindManyArgs>(
      args?: SelectSubset<T, SkuToComponentFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<SkuToComponent>>, PrismaPromise<Array<SkuToComponentGetPayload<T>>>>

    /**
     * Create a SkuToComponent.
     * @param {SkuToComponentCreateArgs} args - Arguments to create a SkuToComponent.
     * @example
     * // Create one SkuToComponent
     * const SkuToComponent = await prisma.skuToComponent.create({
     *   data: {
     *     // ... data to create a SkuToComponent
     *   }
     * })
     * 
    **/
    create<T extends SkuToComponentCreateArgs>(
      args: SelectSubset<T, SkuToComponentCreateArgs>
    ): CheckSelect<T, Prisma__SkuToComponentClient<SkuToComponent>, Prisma__SkuToComponentClient<SkuToComponentGetPayload<T>>>

    /**
     * Create many SkuToComponents.
     *     @param {SkuToComponentCreateManyArgs} args - Arguments to create many SkuToComponents.
     *     @example
     *     // Create many SkuToComponents
     *     const skuToComponent = await prisma.skuToComponent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SkuToComponentCreateManyArgs>(
      args?: SelectSubset<T, SkuToComponentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a SkuToComponent.
     * @param {SkuToComponentDeleteArgs} args - Arguments to delete one SkuToComponent.
     * @example
     * // Delete one SkuToComponent
     * const SkuToComponent = await prisma.skuToComponent.delete({
     *   where: {
     *     // ... filter to delete one SkuToComponent
     *   }
     * })
     * 
    **/
    delete<T extends SkuToComponentDeleteArgs>(
      args: SelectSubset<T, SkuToComponentDeleteArgs>
    ): CheckSelect<T, Prisma__SkuToComponentClient<SkuToComponent>, Prisma__SkuToComponentClient<SkuToComponentGetPayload<T>>>

    /**
     * Update one SkuToComponent.
     * @param {SkuToComponentUpdateArgs} args - Arguments to update one SkuToComponent.
     * @example
     * // Update one SkuToComponent
     * const skuToComponent = await prisma.skuToComponent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SkuToComponentUpdateArgs>(
      args: SelectSubset<T, SkuToComponentUpdateArgs>
    ): CheckSelect<T, Prisma__SkuToComponentClient<SkuToComponent>, Prisma__SkuToComponentClient<SkuToComponentGetPayload<T>>>

    /**
     * Delete zero or more SkuToComponents.
     * @param {SkuToComponentDeleteManyArgs} args - Arguments to filter SkuToComponents to delete.
     * @example
     * // Delete a few SkuToComponents
     * const { count } = await prisma.skuToComponent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SkuToComponentDeleteManyArgs>(
      args?: SelectSubset<T, SkuToComponentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkuToComponents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkuToComponentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SkuToComponents
     * const skuToComponent = await prisma.skuToComponent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SkuToComponentUpdateManyArgs>(
      args: SelectSubset<T, SkuToComponentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one SkuToComponent.
     * @param {SkuToComponentUpsertArgs} args - Arguments to update or create a SkuToComponent.
     * @example
     * // Update or create a SkuToComponent
     * const skuToComponent = await prisma.skuToComponent.upsert({
     *   create: {
     *     // ... data to create a SkuToComponent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SkuToComponent we want to update
     *   }
     * })
    **/
    upsert<T extends SkuToComponentUpsertArgs>(
      args: SelectSubset<T, SkuToComponentUpsertArgs>
    ): CheckSelect<T, Prisma__SkuToComponentClient<SkuToComponent>, Prisma__SkuToComponentClient<SkuToComponentGetPayload<T>>>

    /**
     * Count the number of SkuToComponents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkuToComponentCountArgs} args - Arguments to filter SkuToComponents to count.
     * @example
     * // Count the number of SkuToComponents
     * const count = await prisma.skuToComponent.count({
     *   where: {
     *     // ... the filter for the SkuToComponents we want to count
     *   }
     * })
    **/
    count<T extends SkuToComponentCountArgs>(
      args?: Subset<T, SkuToComponentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkuToComponentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SkuToComponent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkuToComponentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkuToComponentAggregateArgs>(args: Subset<T, SkuToComponentAggregateArgs>): PrismaPromise<GetSkuToComponentAggregateType<T>>

    /**
     * Group by SkuToComponent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkuToComponentGroupByArgs} args - Group by arguments.
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
      T extends SkuToComponentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkuToComponentGroupByArgs['orderBy'] }
        : { orderBy?: SkuToComponentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SkuToComponentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkuToComponentGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for SkuToComponent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SkuToComponentClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    component<T extends ComponentArgs = {}>(args?: Subset<T, ComponentArgs>): CheckSelect<T, Prisma__ComponentClient<Component | null >, Prisma__ComponentClient<ComponentGetPayload<T> | null >>;

    sku<T extends SkuArgs = {}>(args?: Subset<T, SkuArgs>): CheckSelect<T, Prisma__SkuClient<Sku | null >, Prisma__SkuClient<SkuGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * SkuToComponent findUnique
   */
  export type SkuToComponentFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the SkuToComponent
     * 
    **/
    select?: SkuToComponentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkuToComponentInclude | null
    /**
     * Throw an Error if a SkuToComponent can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which SkuToComponent to fetch.
     * 
    **/
    where: SkuToComponentWhereUniqueInput
  }


  /**
   * SkuToComponent findFirst
   */
  export type SkuToComponentFindFirstArgs = {
    /**
     * Select specific fields to fetch from the SkuToComponent
     * 
    **/
    select?: SkuToComponentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkuToComponentInclude | null
    /**
     * Throw an Error if a SkuToComponent can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which SkuToComponent to fetch.
     * 
    **/
    where?: SkuToComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkuToComponents to fetch.
     * 
    **/
    orderBy?: Enumerable<SkuToComponentOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkuToComponents.
     * 
    **/
    cursor?: SkuToComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkuToComponents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkuToComponents.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkuToComponents.
     * 
    **/
    distinct?: Enumerable<SkuToComponentScalarFieldEnum>
  }


  /**
   * SkuToComponent findMany
   */
  export type SkuToComponentFindManyArgs = {
    /**
     * Select specific fields to fetch from the SkuToComponent
     * 
    **/
    select?: SkuToComponentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkuToComponentInclude | null
    /**
     * Filter, which SkuToComponents to fetch.
     * 
    **/
    where?: SkuToComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkuToComponents to fetch.
     * 
    **/
    orderBy?: Enumerable<SkuToComponentOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SkuToComponents.
     * 
    **/
    cursor?: SkuToComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkuToComponents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkuToComponents.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SkuToComponentScalarFieldEnum>
  }


  /**
   * SkuToComponent create
   */
  export type SkuToComponentCreateArgs = {
    /**
     * Select specific fields to fetch from the SkuToComponent
     * 
    **/
    select?: SkuToComponentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkuToComponentInclude | null
    /**
     * The data needed to create a SkuToComponent.
     * 
    **/
    data: XOR<SkuToComponentCreateInput, SkuToComponentUncheckedCreateInput>
  }


  /**
   * SkuToComponent createMany
   */
  export type SkuToComponentCreateManyArgs = {
    data: Enumerable<SkuToComponentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SkuToComponent update
   */
  export type SkuToComponentUpdateArgs = {
    /**
     * Select specific fields to fetch from the SkuToComponent
     * 
    **/
    select?: SkuToComponentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkuToComponentInclude | null
    /**
     * The data needed to update a SkuToComponent.
     * 
    **/
    data: XOR<SkuToComponentUpdateInput, SkuToComponentUncheckedUpdateInput>
    /**
     * Choose, which SkuToComponent to update.
     * 
    **/
    where: SkuToComponentWhereUniqueInput
  }


  /**
   * SkuToComponent updateMany
   */
  export type SkuToComponentUpdateManyArgs = {
    data: XOR<SkuToComponentUpdateManyMutationInput, SkuToComponentUncheckedUpdateManyInput>
    where?: SkuToComponentWhereInput
  }


  /**
   * SkuToComponent upsert
   */
  export type SkuToComponentUpsertArgs = {
    /**
     * Select specific fields to fetch from the SkuToComponent
     * 
    **/
    select?: SkuToComponentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkuToComponentInclude | null
    /**
     * The filter to search for the SkuToComponent to update in case it exists.
     * 
    **/
    where: SkuToComponentWhereUniqueInput
    /**
     * In case the SkuToComponent found by the `where` argument doesn't exist, create a new SkuToComponent with this data.
     * 
    **/
    create: XOR<SkuToComponentCreateInput, SkuToComponentUncheckedCreateInput>
    /**
     * In case the SkuToComponent was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SkuToComponentUpdateInput, SkuToComponentUncheckedUpdateInput>
  }


  /**
   * SkuToComponent delete
   */
  export type SkuToComponentDeleteArgs = {
    /**
     * Select specific fields to fetch from the SkuToComponent
     * 
    **/
    select?: SkuToComponentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkuToComponentInclude | null
    /**
     * Filter which SkuToComponent to delete.
     * 
    **/
    where: SkuToComponentWhereUniqueInput
  }


  /**
   * SkuToComponent deleteMany
   */
  export type SkuToComponentDeleteManyArgs = {
    where?: SkuToComponentWhereInput
  }


  /**
   * SkuToComponent without action
   */
  export type SkuToComponentArgs = {
    /**
     * Select specific fields to fetch from the SkuToComponent
     * 
    **/
    select?: SkuToComponentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkuToComponentInclude | null
  }



  /**
   * Model ComponentType
   */


  export type AggregateComponentType = {
    _count: ComponentTypeCountAggregateOutputType | null
    count: ComponentTypeCountAggregateOutputType | null
    _avg: ComponentTypeAvgAggregateOutputType | null
    avg: ComponentTypeAvgAggregateOutputType | null
    _sum: ComponentTypeSumAggregateOutputType | null
    sum: ComponentTypeSumAggregateOutputType | null
    _min: ComponentTypeMinAggregateOutputType | null
    min: ComponentTypeMinAggregateOutputType | null
    _max: ComponentTypeMaxAggregateOutputType | null
    max: ComponentTypeMaxAggregateOutputType | null
  }

  export type ComponentTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type ComponentTypeSumAggregateOutputType = {
    id: number | null
  }

  export type ComponentTypeMinAggregateOutputType = {
    id: number | null
    value: string | null
  }

  export type ComponentTypeMaxAggregateOutputType = {
    id: number | null
    value: string | null
  }

  export type ComponentTypeCountAggregateOutputType = {
    id: number
    value: number
    _all: number
  }


  export type ComponentTypeAvgAggregateInputType = {
    id?: true
  }

  export type ComponentTypeSumAggregateInputType = {
    id?: true
  }

  export type ComponentTypeMinAggregateInputType = {
    id?: true
    value?: true
  }

  export type ComponentTypeMaxAggregateInputType = {
    id?: true
    value?: true
  }

  export type ComponentTypeCountAggregateInputType = {
    id?: true
    value?: true
    _all?: true
  }

  export type ComponentTypeAggregateArgs = {
    /**
     * Filter which ComponentType to aggregate.
     * 
    **/
    where?: ComponentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComponentTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<ComponentTypeOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ComponentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComponentTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComponentTypes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ComponentTypes
    **/
    _count?: true | ComponentTypeCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | ComponentTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComponentTypeAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: ComponentTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComponentTypeSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: ComponentTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComponentTypeMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: ComponentTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComponentTypeMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: ComponentTypeMaxAggregateInputType
  }

  export type GetComponentTypeAggregateType<T extends ComponentTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateComponentType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComponentType[P]>
      : GetScalarType<T[P], AggregateComponentType[P]>
  }


    
    
  export type ComponentTypeGroupByArgs = {
    where?: ComponentTypeWhereInput
    orderBy?: Enumerable<ComponentTypeOrderByInput>
    by: Array<ComponentTypeScalarFieldEnum>
    having?: ComponentTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComponentTypeCountAggregateInputType | true
    _avg?: ComponentTypeAvgAggregateInputType
    _sum?: ComponentTypeSumAggregateInputType
    _min?: ComponentTypeMinAggregateInputType
    _max?: ComponentTypeMaxAggregateInputType
  }


  export type ComponentTypeGroupByOutputType = {
    id: number
    value: string
    _count: ComponentTypeCountAggregateOutputType | null
    _avg: ComponentTypeAvgAggregateOutputType | null
    _sum: ComponentTypeSumAggregateOutputType | null
    _min: ComponentTypeMinAggregateOutputType | null
    _max: ComponentTypeMaxAggregateOutputType | null
  }

  type GetComponentTypeGroupByPayload<T extends ComponentTypeGroupByArgs> = Promise<
    Array<
      PickArray<ComponentTypeGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof ComponentTypeGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], ComponentTypeGroupByOutputType[P]> 
            : GetScalarType<T[P], ComponentTypeGroupByOutputType[P]>
        }
      > 
    >


  export type ComponentTypeSelect = {
    id?: boolean
    value?: boolean
    components?: boolean | ComponentFindManyArgs
  }

  export type ComponentTypeInclude = {
    components?: boolean | ComponentFindManyArgs
  }

  export type ComponentTypeGetPayload<
    S extends boolean | null | undefined | ComponentTypeArgs,
    U = keyof S
      > = S extends true
        ? ComponentType
    : S extends undefined
    ? never
    : S extends ComponentTypeArgs | ComponentTypeFindManyArgs
    ?'include' extends U
    ? ComponentType  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'components'
        ? Array < ComponentGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof ComponentType ?ComponentType [P]
  : 
          P extends 'components'
        ? Array < ComponentGetPayload<S['select'][P]>>  : never
  } 
    : ComponentType
  : ComponentType


  type ComponentTypeCountArgs = Merge<
    Omit<ComponentTypeFindManyArgs, 'select' | 'include'> & {
      select?: ComponentTypeCountAggregateInputType | true
    }
  >

  export interface ComponentTypeDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ComponentType that matches the filter.
     * @param {ComponentTypeFindUniqueArgs} args - Arguments to find a ComponentType
     * @example
     * // Get one ComponentType
     * const componentType = await prisma.componentType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ComponentTypeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ComponentTypeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ComponentType'> extends True ? CheckSelect<T, Prisma__ComponentTypeClient<ComponentType>, Prisma__ComponentTypeClient<ComponentTypeGetPayload<T>>> : CheckSelect<T, Prisma__ComponentTypeClient<ComponentType | null >, Prisma__ComponentTypeClient<ComponentTypeGetPayload<T> | null >>

    /**
     * Find the first ComponentType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentTypeFindFirstArgs} args - Arguments to find a ComponentType
     * @example
     * // Get one ComponentType
     * const componentType = await prisma.componentType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ComponentTypeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ComponentTypeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ComponentType'> extends True ? CheckSelect<T, Prisma__ComponentTypeClient<ComponentType>, Prisma__ComponentTypeClient<ComponentTypeGetPayload<T>>> : CheckSelect<T, Prisma__ComponentTypeClient<ComponentType | null >, Prisma__ComponentTypeClient<ComponentTypeGetPayload<T> | null >>

    /**
     * Find zero or more ComponentTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentTypeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ComponentTypes
     * const componentTypes = await prisma.componentType.findMany()
     * 
     * // Get first 10 ComponentTypes
     * const componentTypes = await prisma.componentType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const componentTypeWithIdOnly = await prisma.componentType.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ComponentTypeFindManyArgs>(
      args?: SelectSubset<T, ComponentTypeFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ComponentType>>, PrismaPromise<Array<ComponentTypeGetPayload<T>>>>

    /**
     * Create a ComponentType.
     * @param {ComponentTypeCreateArgs} args - Arguments to create a ComponentType.
     * @example
     * // Create one ComponentType
     * const ComponentType = await prisma.componentType.create({
     *   data: {
     *     // ... data to create a ComponentType
     *   }
     * })
     * 
    **/
    create<T extends ComponentTypeCreateArgs>(
      args: SelectSubset<T, ComponentTypeCreateArgs>
    ): CheckSelect<T, Prisma__ComponentTypeClient<ComponentType>, Prisma__ComponentTypeClient<ComponentTypeGetPayload<T>>>

    /**
     * Create many ComponentTypes.
     *     @param {ComponentTypeCreateManyArgs} args - Arguments to create many ComponentTypes.
     *     @example
     *     // Create many ComponentTypes
     *     const componentType = await prisma.componentType.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ComponentTypeCreateManyArgs>(
      args?: SelectSubset<T, ComponentTypeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ComponentType.
     * @param {ComponentTypeDeleteArgs} args - Arguments to delete one ComponentType.
     * @example
     * // Delete one ComponentType
     * const ComponentType = await prisma.componentType.delete({
     *   where: {
     *     // ... filter to delete one ComponentType
     *   }
     * })
     * 
    **/
    delete<T extends ComponentTypeDeleteArgs>(
      args: SelectSubset<T, ComponentTypeDeleteArgs>
    ): CheckSelect<T, Prisma__ComponentTypeClient<ComponentType>, Prisma__ComponentTypeClient<ComponentTypeGetPayload<T>>>

    /**
     * Update one ComponentType.
     * @param {ComponentTypeUpdateArgs} args - Arguments to update one ComponentType.
     * @example
     * // Update one ComponentType
     * const componentType = await prisma.componentType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ComponentTypeUpdateArgs>(
      args: SelectSubset<T, ComponentTypeUpdateArgs>
    ): CheckSelect<T, Prisma__ComponentTypeClient<ComponentType>, Prisma__ComponentTypeClient<ComponentTypeGetPayload<T>>>

    /**
     * Delete zero or more ComponentTypes.
     * @param {ComponentTypeDeleteManyArgs} args - Arguments to filter ComponentTypes to delete.
     * @example
     * // Delete a few ComponentTypes
     * const { count } = await prisma.componentType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ComponentTypeDeleteManyArgs>(
      args?: SelectSubset<T, ComponentTypeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ComponentTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ComponentTypes
     * const componentType = await prisma.componentType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ComponentTypeUpdateManyArgs>(
      args: SelectSubset<T, ComponentTypeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ComponentType.
     * @param {ComponentTypeUpsertArgs} args - Arguments to update or create a ComponentType.
     * @example
     * // Update or create a ComponentType
     * const componentType = await prisma.componentType.upsert({
     *   create: {
     *     // ... data to create a ComponentType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ComponentType we want to update
     *   }
     * })
    **/
    upsert<T extends ComponentTypeUpsertArgs>(
      args: SelectSubset<T, ComponentTypeUpsertArgs>
    ): CheckSelect<T, Prisma__ComponentTypeClient<ComponentType>, Prisma__ComponentTypeClient<ComponentTypeGetPayload<T>>>

    /**
     * Count the number of ComponentTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentTypeCountArgs} args - Arguments to filter ComponentTypes to count.
     * @example
     * // Count the number of ComponentTypes
     * const count = await prisma.componentType.count({
     *   where: {
     *     // ... the filter for the ComponentTypes we want to count
     *   }
     * })
    **/
    count<T extends ComponentTypeCountArgs>(
      args?: Subset<T, ComponentTypeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComponentTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ComponentType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComponentTypeAggregateArgs>(args: Subset<T, ComponentTypeAggregateArgs>): PrismaPromise<GetComponentTypeAggregateType<T>>

    /**
     * Group by ComponentType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentTypeGroupByArgs} args - Group by arguments.
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
      T extends ComponentTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComponentTypeGroupByArgs['orderBy'] }
        : { orderBy?: ComponentTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ComponentTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComponentTypeGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ComponentType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ComponentTypeClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    components<T extends ComponentFindManyArgs = {}>(args?: Subset<T, ComponentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Component>>, PrismaPromise<Array<ComponentGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ComponentType findUnique
   */
  export type ComponentTypeFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ComponentType
     * 
    **/
    select?: ComponentTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ComponentTypeInclude | null
    /**
     * Throw an Error if a ComponentType can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ComponentType to fetch.
     * 
    **/
    where: ComponentTypeWhereUniqueInput
  }


  /**
   * ComponentType findFirst
   */
  export type ComponentTypeFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ComponentType
     * 
    **/
    select?: ComponentTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ComponentTypeInclude | null
    /**
     * Throw an Error if a ComponentType can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ComponentType to fetch.
     * 
    **/
    where?: ComponentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComponentTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<ComponentTypeOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ComponentTypes.
     * 
    **/
    cursor?: ComponentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComponentTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComponentTypes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComponentTypes.
     * 
    **/
    distinct?: Enumerable<ComponentTypeScalarFieldEnum>
  }


  /**
   * ComponentType findMany
   */
  export type ComponentTypeFindManyArgs = {
    /**
     * Select specific fields to fetch from the ComponentType
     * 
    **/
    select?: ComponentTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ComponentTypeInclude | null
    /**
     * Filter, which ComponentTypes to fetch.
     * 
    **/
    where?: ComponentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComponentTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<ComponentTypeOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ComponentTypes.
     * 
    **/
    cursor?: ComponentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComponentTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComponentTypes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ComponentTypeScalarFieldEnum>
  }


  /**
   * ComponentType create
   */
  export type ComponentTypeCreateArgs = {
    /**
     * Select specific fields to fetch from the ComponentType
     * 
    **/
    select?: ComponentTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ComponentTypeInclude | null
    /**
     * The data needed to create a ComponentType.
     * 
    **/
    data: XOR<ComponentTypeCreateInput, ComponentTypeUncheckedCreateInput>
  }


  /**
   * ComponentType createMany
   */
  export type ComponentTypeCreateManyArgs = {
    data: Enumerable<ComponentTypeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ComponentType update
   */
  export type ComponentTypeUpdateArgs = {
    /**
     * Select specific fields to fetch from the ComponentType
     * 
    **/
    select?: ComponentTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ComponentTypeInclude | null
    /**
     * The data needed to update a ComponentType.
     * 
    **/
    data: XOR<ComponentTypeUpdateInput, ComponentTypeUncheckedUpdateInput>
    /**
     * Choose, which ComponentType to update.
     * 
    **/
    where: ComponentTypeWhereUniqueInput
  }


  /**
   * ComponentType updateMany
   */
  export type ComponentTypeUpdateManyArgs = {
    data: XOR<ComponentTypeUpdateManyMutationInput, ComponentTypeUncheckedUpdateManyInput>
    where?: ComponentTypeWhereInput
  }


  /**
   * ComponentType upsert
   */
  export type ComponentTypeUpsertArgs = {
    /**
     * Select specific fields to fetch from the ComponentType
     * 
    **/
    select?: ComponentTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ComponentTypeInclude | null
    /**
     * The filter to search for the ComponentType to update in case it exists.
     * 
    **/
    where: ComponentTypeWhereUniqueInput
    /**
     * In case the ComponentType found by the `where` argument doesn't exist, create a new ComponentType with this data.
     * 
    **/
    create: XOR<ComponentTypeCreateInput, ComponentTypeUncheckedCreateInput>
    /**
     * In case the ComponentType was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ComponentTypeUpdateInput, ComponentTypeUncheckedUpdateInput>
  }


  /**
   * ComponentType delete
   */
  export type ComponentTypeDeleteArgs = {
    /**
     * Select specific fields to fetch from the ComponentType
     * 
    **/
    select?: ComponentTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ComponentTypeInclude | null
    /**
     * Filter which ComponentType to delete.
     * 
    **/
    where: ComponentTypeWhereUniqueInput
  }


  /**
   * ComponentType deleteMany
   */
  export type ComponentTypeDeleteManyArgs = {
    where?: ComponentTypeWhereInput
  }


  /**
   * ComponentType without action
   */
  export type ComponentTypeArgs = {
    /**
     * Select specific fields to fetch from the ComponentType
     * 
    **/
    select?: ComponentTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ComponentTypeInclude | null
  }



  /**
   * Model Component
   */


  export type AggregateComponent = {
    _count: ComponentCountAggregateOutputType | null
    count: ComponentCountAggregateOutputType | null
    _avg: ComponentAvgAggregateOutputType | null
    avg: ComponentAvgAggregateOutputType | null
    _sum: ComponentSumAggregateOutputType | null
    sum: ComponentSumAggregateOutputType | null
    _min: ComponentMinAggregateOutputType | null
    min: ComponentMinAggregateOutputType | null
    _max: ComponentMaxAggregateOutputType | null
    max: ComponentMaxAggregateOutputType | null
  }

  export type ComponentAvgAggregateOutputType = {
    length: number | null
    width: number | null
    depth: number | null
    weight: number | null
    typeId: number | null
  }

  export type ComponentSumAggregateOutputType = {
    length: number | null
    width: number | null
    depth: number | null
    weight: number | null
    typeId: number | null
  }

  export type ComponentMinAggregateOutputType = {
    id: string | null
    name: string | null
    length: number | null
    width: number | null
    depth: number | null
    weight: number | null
    parentId: string | null
    inherit: boolean | null
    typeId: number | null
  }

  export type ComponentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    length: number | null
    width: number | null
    depth: number | null
    weight: number | null
    parentId: string | null
    inherit: boolean | null
    typeId: number | null
  }

  export type ComponentCountAggregateOutputType = {
    id: number
    name: number
    length: number
    width: number
    depth: number
    weight: number
    stages: number
    parentId: number
    inherit: number
    typeId: number
    _all: number
  }


  export type ComponentAvgAggregateInputType = {
    length?: true
    width?: true
    depth?: true
    weight?: true
    typeId?: true
  }

  export type ComponentSumAggregateInputType = {
    length?: true
    width?: true
    depth?: true
    weight?: true
    typeId?: true
  }

  export type ComponentMinAggregateInputType = {
    id?: true
    name?: true
    length?: true
    width?: true
    depth?: true
    weight?: true
    parentId?: true
    inherit?: true
    typeId?: true
  }

  export type ComponentMaxAggregateInputType = {
    id?: true
    name?: true
    length?: true
    width?: true
    depth?: true
    weight?: true
    parentId?: true
    inherit?: true
    typeId?: true
  }

  export type ComponentCountAggregateInputType = {
    id?: true
    name?: true
    length?: true
    width?: true
    depth?: true
    weight?: true
    stages?: true
    parentId?: true
    inherit?: true
    typeId?: true
    _all?: true
  }

  export type ComponentAggregateArgs = {
    /**
     * Filter which Component to aggregate.
     * 
    **/
    where?: ComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Components to fetch.
     * 
    **/
    orderBy?: Enumerable<ComponentOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Components from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Components.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Components
    **/
    _count?: true | ComponentCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | ComponentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComponentAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: ComponentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComponentSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: ComponentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComponentMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: ComponentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComponentMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: ComponentMaxAggregateInputType
  }

  export type GetComponentAggregateType<T extends ComponentAggregateArgs> = {
        [P in keyof T & keyof AggregateComponent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComponent[P]>
      : GetScalarType<T[P], AggregateComponent[P]>
  }


    
    
  export type ComponentGroupByArgs = {
    where?: ComponentWhereInput
    orderBy?: Enumerable<ComponentOrderByInput>
    by: Array<ComponentScalarFieldEnum>
    having?: ComponentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComponentCountAggregateInputType | true
    _avg?: ComponentAvgAggregateInputType
    _sum?: ComponentSumAggregateInputType
    _min?: ComponentMinAggregateInputType
    _max?: ComponentMaxAggregateInputType
  }


  export type ComponentGroupByOutputType = {
    id: string
    name: string
    length: number
    width: number
    depth: number
    weight: number
    stages: JsonValue
    parentId: string | null
    inherit: boolean
    typeId: number
    _count: ComponentCountAggregateOutputType | null
    _avg: ComponentAvgAggregateOutputType | null
    _sum: ComponentSumAggregateOutputType | null
    _min: ComponentMinAggregateOutputType | null
    _max: ComponentMaxAggregateOutputType | null
  }

  type GetComponentGroupByPayload<T extends ComponentGroupByArgs> = Promise<
    Array<
      PickArray<ComponentGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof ComponentGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], ComponentGroupByOutputType[P]> 
            : GetScalarType<T[P], ComponentGroupByOutputType[P]>
        }
      > 
    >


  export type ComponentSelect = {
    id?: boolean
    name?: boolean
    length?: boolean
    width?: boolean
    depth?: boolean
    weight?: boolean
    stages?: boolean
    orderSkuComponents?: boolean | OrderSkuComponentFindManyArgs
    skus?: boolean | SkuToComponentFindManyArgs
    parentId?: boolean
    parentComponent?: boolean | ComponentArgs
    childComponent?: boolean | ComponentArgs
    inherit?: boolean
    typeId?: boolean
    type?: boolean | ComponentTypeArgs
  }

  export type ComponentInclude = {
    orderSkuComponents?: boolean | OrderSkuComponentFindManyArgs
    skus?: boolean | SkuToComponentFindManyArgs
    parentComponent?: boolean | ComponentArgs
    childComponent?: boolean | ComponentArgs
    type?: boolean | ComponentTypeArgs
  }

  export type ComponentGetPayload<
    S extends boolean | null | undefined | ComponentArgs,
    U = keyof S
      > = S extends true
        ? Component
    : S extends undefined
    ? never
    : S extends ComponentArgs | ComponentFindManyArgs
    ?'include' extends U
    ? Component  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'orderSkuComponents'
        ? Array < OrderSkuComponentGetPayload<S['include'][P]>>  :
        P extends 'skus'
        ? Array < SkuToComponentGetPayload<S['include'][P]>>  :
        P extends 'parentComponent'
        ? ComponentGetPayload<S['include'][P]> | null :
        P extends 'childComponent'
        ? ComponentGetPayload<S['include'][P]> | null :
        P extends 'type'
        ? ComponentTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Component ?Component [P]
  : 
          P extends 'orderSkuComponents'
        ? Array < OrderSkuComponentGetPayload<S['select'][P]>>  :
        P extends 'skus'
        ? Array < SkuToComponentGetPayload<S['select'][P]>>  :
        P extends 'parentComponent'
        ? ComponentGetPayload<S['select'][P]> | null :
        P extends 'childComponent'
        ? ComponentGetPayload<S['select'][P]> | null :
        P extends 'type'
        ? ComponentTypeGetPayload<S['select'][P]> : never
  } 
    : Component
  : Component


  type ComponentCountArgs = Merge<
    Omit<ComponentFindManyArgs, 'select' | 'include'> & {
      select?: ComponentCountAggregateInputType | true
    }
  >

  export interface ComponentDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Component that matches the filter.
     * @param {ComponentFindUniqueArgs} args - Arguments to find a Component
     * @example
     * // Get one Component
     * const component = await prisma.component.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ComponentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ComponentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Component'> extends True ? CheckSelect<T, Prisma__ComponentClient<Component>, Prisma__ComponentClient<ComponentGetPayload<T>>> : CheckSelect<T, Prisma__ComponentClient<Component | null >, Prisma__ComponentClient<ComponentGetPayload<T> | null >>

    /**
     * Find the first Component that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentFindFirstArgs} args - Arguments to find a Component
     * @example
     * // Get one Component
     * const component = await prisma.component.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ComponentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ComponentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Component'> extends True ? CheckSelect<T, Prisma__ComponentClient<Component>, Prisma__ComponentClient<ComponentGetPayload<T>>> : CheckSelect<T, Prisma__ComponentClient<Component | null >, Prisma__ComponentClient<ComponentGetPayload<T> | null >>

    /**
     * Find zero or more Components that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Components
     * const components = await prisma.component.findMany()
     * 
     * // Get first 10 Components
     * const components = await prisma.component.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const componentWithIdOnly = await prisma.component.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ComponentFindManyArgs>(
      args?: SelectSubset<T, ComponentFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Component>>, PrismaPromise<Array<ComponentGetPayload<T>>>>

    /**
     * Create a Component.
     * @param {ComponentCreateArgs} args - Arguments to create a Component.
     * @example
     * // Create one Component
     * const Component = await prisma.component.create({
     *   data: {
     *     // ... data to create a Component
     *   }
     * })
     * 
    **/
    create<T extends ComponentCreateArgs>(
      args: SelectSubset<T, ComponentCreateArgs>
    ): CheckSelect<T, Prisma__ComponentClient<Component>, Prisma__ComponentClient<ComponentGetPayload<T>>>

    /**
     * Create many Components.
     *     @param {ComponentCreateManyArgs} args - Arguments to create many Components.
     *     @example
     *     // Create many Components
     *     const component = await prisma.component.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ComponentCreateManyArgs>(
      args?: SelectSubset<T, ComponentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Component.
     * @param {ComponentDeleteArgs} args - Arguments to delete one Component.
     * @example
     * // Delete one Component
     * const Component = await prisma.component.delete({
     *   where: {
     *     // ... filter to delete one Component
     *   }
     * })
     * 
    **/
    delete<T extends ComponentDeleteArgs>(
      args: SelectSubset<T, ComponentDeleteArgs>
    ): CheckSelect<T, Prisma__ComponentClient<Component>, Prisma__ComponentClient<ComponentGetPayload<T>>>

    /**
     * Update one Component.
     * @param {ComponentUpdateArgs} args - Arguments to update one Component.
     * @example
     * // Update one Component
     * const component = await prisma.component.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ComponentUpdateArgs>(
      args: SelectSubset<T, ComponentUpdateArgs>
    ): CheckSelect<T, Prisma__ComponentClient<Component>, Prisma__ComponentClient<ComponentGetPayload<T>>>

    /**
     * Delete zero or more Components.
     * @param {ComponentDeleteManyArgs} args - Arguments to filter Components to delete.
     * @example
     * // Delete a few Components
     * const { count } = await prisma.component.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ComponentDeleteManyArgs>(
      args?: SelectSubset<T, ComponentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Components.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Components
     * const component = await prisma.component.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ComponentUpdateManyArgs>(
      args: SelectSubset<T, ComponentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Component.
     * @param {ComponentUpsertArgs} args - Arguments to update or create a Component.
     * @example
     * // Update or create a Component
     * const component = await prisma.component.upsert({
     *   create: {
     *     // ... data to create a Component
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Component we want to update
     *   }
     * })
    **/
    upsert<T extends ComponentUpsertArgs>(
      args: SelectSubset<T, ComponentUpsertArgs>
    ): CheckSelect<T, Prisma__ComponentClient<Component>, Prisma__ComponentClient<ComponentGetPayload<T>>>

    /**
     * Count the number of Components.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentCountArgs} args - Arguments to filter Components to count.
     * @example
     * // Count the number of Components
     * const count = await prisma.component.count({
     *   where: {
     *     // ... the filter for the Components we want to count
     *   }
     * })
    **/
    count<T extends ComponentCountArgs>(
      args?: Subset<T, ComponentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComponentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Component.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComponentAggregateArgs>(args: Subset<T, ComponentAggregateArgs>): PrismaPromise<GetComponentAggregateType<T>>

    /**
     * Group by Component.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentGroupByArgs} args - Group by arguments.
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
      T extends ComponentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComponentGroupByArgs['orderBy'] }
        : { orderBy?: ComponentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ComponentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComponentGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Component.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ComponentClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    orderSkuComponents<T extends OrderSkuComponentFindManyArgs = {}>(args?: Subset<T, OrderSkuComponentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<OrderSkuComponent>>, PrismaPromise<Array<OrderSkuComponentGetPayload<T>>>>;

    skus<T extends SkuToComponentFindManyArgs = {}>(args?: Subset<T, SkuToComponentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<SkuToComponent>>, PrismaPromise<Array<SkuToComponentGetPayload<T>>>>;

    parentComponent<T extends ComponentArgs = {}>(args?: Subset<T, ComponentArgs>): CheckSelect<T, Prisma__ComponentClient<Component | null >, Prisma__ComponentClient<ComponentGetPayload<T> | null >>;

    childComponent<T extends ComponentArgs = {}>(args?: Subset<T, ComponentArgs>): CheckSelect<T, Prisma__ComponentClient<Component | null >, Prisma__ComponentClient<ComponentGetPayload<T> | null >>;

    type<T extends ComponentTypeArgs = {}>(args?: Subset<T, ComponentTypeArgs>): CheckSelect<T, Prisma__ComponentTypeClient<ComponentType | null >, Prisma__ComponentTypeClient<ComponentTypeGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Component findUnique
   */
  export type ComponentFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Component
     * 
    **/
    select?: ComponentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ComponentInclude | null
    /**
     * Throw an Error if a Component can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Component to fetch.
     * 
    **/
    where: ComponentWhereUniqueInput
  }


  /**
   * Component findFirst
   */
  export type ComponentFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Component
     * 
    **/
    select?: ComponentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ComponentInclude | null
    /**
     * Throw an Error if a Component can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Component to fetch.
     * 
    **/
    where?: ComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Components to fetch.
     * 
    **/
    orderBy?: Enumerable<ComponentOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Components.
     * 
    **/
    cursor?: ComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Components from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Components.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Components.
     * 
    **/
    distinct?: Enumerable<ComponentScalarFieldEnum>
  }


  /**
   * Component findMany
   */
  export type ComponentFindManyArgs = {
    /**
     * Select specific fields to fetch from the Component
     * 
    **/
    select?: ComponentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ComponentInclude | null
    /**
     * Filter, which Components to fetch.
     * 
    **/
    where?: ComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Components to fetch.
     * 
    **/
    orderBy?: Enumerable<ComponentOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Components.
     * 
    **/
    cursor?: ComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Components from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Components.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ComponentScalarFieldEnum>
  }


  /**
   * Component create
   */
  export type ComponentCreateArgs = {
    /**
     * Select specific fields to fetch from the Component
     * 
    **/
    select?: ComponentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ComponentInclude | null
    /**
     * The data needed to create a Component.
     * 
    **/
    data: XOR<ComponentCreateInput, ComponentUncheckedCreateInput>
  }


  /**
   * Component createMany
   */
  export type ComponentCreateManyArgs = {
    data: Enumerable<ComponentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Component update
   */
  export type ComponentUpdateArgs = {
    /**
     * Select specific fields to fetch from the Component
     * 
    **/
    select?: ComponentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ComponentInclude | null
    /**
     * The data needed to update a Component.
     * 
    **/
    data: XOR<ComponentUpdateInput, ComponentUncheckedUpdateInput>
    /**
     * Choose, which Component to update.
     * 
    **/
    where: ComponentWhereUniqueInput
  }


  /**
   * Component updateMany
   */
  export type ComponentUpdateManyArgs = {
    data: XOR<ComponentUpdateManyMutationInput, ComponentUncheckedUpdateManyInput>
    where?: ComponentWhereInput
  }


  /**
   * Component upsert
   */
  export type ComponentUpsertArgs = {
    /**
     * Select specific fields to fetch from the Component
     * 
    **/
    select?: ComponentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ComponentInclude | null
    /**
     * The filter to search for the Component to update in case it exists.
     * 
    **/
    where: ComponentWhereUniqueInput
    /**
     * In case the Component found by the `where` argument doesn't exist, create a new Component with this data.
     * 
    **/
    create: XOR<ComponentCreateInput, ComponentUncheckedCreateInput>
    /**
     * In case the Component was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ComponentUpdateInput, ComponentUncheckedUpdateInput>
  }


  /**
   * Component delete
   */
  export type ComponentDeleteArgs = {
    /**
     * Select specific fields to fetch from the Component
     * 
    **/
    select?: ComponentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ComponentInclude | null
    /**
     * Filter which Component to delete.
     * 
    **/
    where: ComponentWhereUniqueInput
  }


  /**
   * Component deleteMany
   */
  export type ComponentDeleteManyArgs = {
    where?: ComponentWhereInput
  }


  /**
   * Component without action
   */
  export type ComponentArgs = {
    /**
     * Select specific fields to fetch from the Component
     * 
    **/
    select?: ComponentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ComponentInclude | null
  }



  /**
   * Model Stage
   */


  export type AggregateStage = {
    _count: StageCountAggregateOutputType | null
    count: StageCountAggregateOutputType | null
    _avg: StageAvgAggregateOutputType | null
    avg: StageAvgAggregateOutputType | null
    _sum: StageSumAggregateOutputType | null
    sum: StageSumAggregateOutputType | null
    _min: StageMinAggregateOutputType | null
    min: StageMinAggregateOutputType | null
    _max: StageMaxAggregateOutputType | null
    max: StageMaxAggregateOutputType | null
  }

  export type StageAvgAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type StageSumAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type StageMinAggregateOutputType = {
    id: number | null
    label: string | null
    order: number | null
    enabled: boolean | null
    barn: string | null
  }

  export type StageMaxAggregateOutputType = {
    id: number | null
    label: string | null
    order: number | null
    enabled: boolean | null
    barn: string | null
  }

  export type StageCountAggregateOutputType = {
    id: number
    label: number
    order: number
    enabled: number
    barn: number
    _all: number
  }


  export type StageAvgAggregateInputType = {
    id?: true
    order?: true
  }

  export type StageSumAggregateInputType = {
    id?: true
    order?: true
  }

  export type StageMinAggregateInputType = {
    id?: true
    label?: true
    order?: true
    enabled?: true
    barn?: true
  }

  export type StageMaxAggregateInputType = {
    id?: true
    label?: true
    order?: true
    enabled?: true
    barn?: true
  }

  export type StageCountAggregateInputType = {
    id?: true
    label?: true
    order?: true
    enabled?: true
    barn?: true
    _all?: true
  }

  export type StageAggregateArgs = {
    /**
     * Filter which Stage to aggregate.
     * 
    **/
    where?: StageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stages to fetch.
     * 
    **/
    orderBy?: Enumerable<StageOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: StageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stages
    **/
    _count?: true | StageCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | StageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StageAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: StageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StageSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: StageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StageMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: StageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StageMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: StageMaxAggregateInputType
  }

  export type GetStageAggregateType<T extends StageAggregateArgs> = {
        [P in keyof T & keyof AggregateStage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStage[P]>
      : GetScalarType<T[P], AggregateStage[P]>
  }


    
    
  export type StageGroupByArgs = {
    where?: StageWhereInput
    orderBy?: Enumerable<StageOrderByInput>
    by: Array<StageScalarFieldEnum>
    having?: StageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StageCountAggregateInputType | true
    _avg?: StageAvgAggregateInputType
    _sum?: StageSumAggregateInputType
    _min?: StageMinAggregateInputType
    _max?: StageMaxAggregateInputType
  }


  export type StageGroupByOutputType = {
    id: number
    label: string
    order: number
    enabled: boolean
    barn: string
    _count: StageCountAggregateOutputType | null
    _avg: StageAvgAggregateOutputType | null
    _sum: StageSumAggregateOutputType | null
    _min: StageMinAggregateOutputType | null
    _max: StageMaxAggregateOutputType | null
  }

  type GetStageGroupByPayload<T extends StageGroupByArgs> = Promise<
    Array<
      PickArray<StageGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof StageGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], StageGroupByOutputType[P]> 
            : GetScalarType<T[P], StageGroupByOutputType[P]>
        }
      > 
    >


  export type StageSelect = {
    id?: boolean
    label?: boolean
    order?: boolean
    enabled?: boolean
    barn?: boolean
  }

  export type StageGetPayload<
    S extends boolean | null | undefined | StageArgs,
    U = keyof S
      > = S extends true
        ? Stage
    : S extends undefined
    ? never
    : S extends StageArgs | StageFindManyArgs
    ?'include' extends U
    ? Stage 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Stage ?Stage [P]
  : 
     never
  } 
    : Stage
  : Stage


  type StageCountArgs = Merge<
    Omit<StageFindManyArgs, 'select' | 'include'> & {
      select?: StageCountAggregateInputType | true
    }
  >

  export interface StageDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Stage that matches the filter.
     * @param {StageFindUniqueArgs} args - Arguments to find a Stage
     * @example
     * // Get one Stage
     * const stage = await prisma.stage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, StageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Stage'> extends True ? CheckSelect<T, Prisma__StageClient<Stage>, Prisma__StageClient<StageGetPayload<T>>> : CheckSelect<T, Prisma__StageClient<Stage | null >, Prisma__StageClient<StageGetPayload<T> | null >>

    /**
     * Find the first Stage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageFindFirstArgs} args - Arguments to find a Stage
     * @example
     * // Get one Stage
     * const stage = await prisma.stage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, StageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Stage'> extends True ? CheckSelect<T, Prisma__StageClient<Stage>, Prisma__StageClient<StageGetPayload<T>>> : CheckSelect<T, Prisma__StageClient<Stage | null >, Prisma__StageClient<StageGetPayload<T> | null >>

    /**
     * Find zero or more Stages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stages
     * const stages = await prisma.stage.findMany()
     * 
     * // Get first 10 Stages
     * const stages = await prisma.stage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stageWithIdOnly = await prisma.stage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StageFindManyArgs>(
      args?: SelectSubset<T, StageFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Stage>>, PrismaPromise<Array<StageGetPayload<T>>>>

    /**
     * Create a Stage.
     * @param {StageCreateArgs} args - Arguments to create a Stage.
     * @example
     * // Create one Stage
     * const Stage = await prisma.stage.create({
     *   data: {
     *     // ... data to create a Stage
     *   }
     * })
     * 
    **/
    create<T extends StageCreateArgs>(
      args: SelectSubset<T, StageCreateArgs>
    ): CheckSelect<T, Prisma__StageClient<Stage>, Prisma__StageClient<StageGetPayload<T>>>

    /**
     * Create many Stages.
     *     @param {StageCreateManyArgs} args - Arguments to create many Stages.
     *     @example
     *     // Create many Stages
     *     const stage = await prisma.stage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StageCreateManyArgs>(
      args?: SelectSubset<T, StageCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Stage.
     * @param {StageDeleteArgs} args - Arguments to delete one Stage.
     * @example
     * // Delete one Stage
     * const Stage = await prisma.stage.delete({
     *   where: {
     *     // ... filter to delete one Stage
     *   }
     * })
     * 
    **/
    delete<T extends StageDeleteArgs>(
      args: SelectSubset<T, StageDeleteArgs>
    ): CheckSelect<T, Prisma__StageClient<Stage>, Prisma__StageClient<StageGetPayload<T>>>

    /**
     * Update one Stage.
     * @param {StageUpdateArgs} args - Arguments to update one Stage.
     * @example
     * // Update one Stage
     * const stage = await prisma.stage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StageUpdateArgs>(
      args: SelectSubset<T, StageUpdateArgs>
    ): CheckSelect<T, Prisma__StageClient<Stage>, Prisma__StageClient<StageGetPayload<T>>>

    /**
     * Delete zero or more Stages.
     * @param {StageDeleteManyArgs} args - Arguments to filter Stages to delete.
     * @example
     * // Delete a few Stages
     * const { count } = await prisma.stage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StageDeleteManyArgs>(
      args?: SelectSubset<T, StageDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stages
     * const stage = await prisma.stage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StageUpdateManyArgs>(
      args: SelectSubset<T, StageUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Stage.
     * @param {StageUpsertArgs} args - Arguments to update or create a Stage.
     * @example
     * // Update or create a Stage
     * const stage = await prisma.stage.upsert({
     *   create: {
     *     // ... data to create a Stage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stage we want to update
     *   }
     * })
    **/
    upsert<T extends StageUpsertArgs>(
      args: SelectSubset<T, StageUpsertArgs>
    ): CheckSelect<T, Prisma__StageClient<Stage>, Prisma__StageClient<StageGetPayload<T>>>

    /**
     * Count the number of Stages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageCountArgs} args - Arguments to filter Stages to count.
     * @example
     * // Count the number of Stages
     * const count = await prisma.stage.count({
     *   where: {
     *     // ... the filter for the Stages we want to count
     *   }
     * })
    **/
    count<T extends StageCountArgs>(
      args?: Subset<T, StageCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StageAggregateArgs>(args: Subset<T, StageAggregateArgs>): PrismaPromise<GetStageAggregateType<T>>

    /**
     * Group by Stage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageGroupByArgs} args - Group by arguments.
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
      T extends StageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StageGroupByArgs['orderBy'] }
        : { orderBy?: StageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, StageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStageGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__StageClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Stage findUnique
   */
  export type StageFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Stage
     * 
    **/
    select?: StageSelect | null
    /**
     * Throw an Error if a Stage can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Stage to fetch.
     * 
    **/
    where: StageWhereUniqueInput
  }


  /**
   * Stage findFirst
   */
  export type StageFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Stage
     * 
    **/
    select?: StageSelect | null
    /**
     * Throw an Error if a Stage can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Stage to fetch.
     * 
    **/
    where?: StageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stages to fetch.
     * 
    **/
    orderBy?: Enumerable<StageOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stages.
     * 
    **/
    cursor?: StageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stages.
     * 
    **/
    distinct?: Enumerable<StageScalarFieldEnum>
  }


  /**
   * Stage findMany
   */
  export type StageFindManyArgs = {
    /**
     * Select specific fields to fetch from the Stage
     * 
    **/
    select?: StageSelect | null
    /**
     * Filter, which Stages to fetch.
     * 
    **/
    where?: StageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stages to fetch.
     * 
    **/
    orderBy?: Enumerable<StageOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stages.
     * 
    **/
    cursor?: StageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stages.
     * 
    **/
    skip?: number
    distinct?: Enumerable<StageScalarFieldEnum>
  }


  /**
   * Stage create
   */
  export type StageCreateArgs = {
    /**
     * Select specific fields to fetch from the Stage
     * 
    **/
    select?: StageSelect | null
    /**
     * The data needed to create a Stage.
     * 
    **/
    data: XOR<StageCreateInput, StageUncheckedCreateInput>
  }


  /**
   * Stage createMany
   */
  export type StageCreateManyArgs = {
    data: Enumerable<StageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Stage update
   */
  export type StageUpdateArgs = {
    /**
     * Select specific fields to fetch from the Stage
     * 
    **/
    select?: StageSelect | null
    /**
     * The data needed to update a Stage.
     * 
    **/
    data: XOR<StageUpdateInput, StageUncheckedUpdateInput>
    /**
     * Choose, which Stage to update.
     * 
    **/
    where: StageWhereUniqueInput
  }


  /**
   * Stage updateMany
   */
  export type StageUpdateManyArgs = {
    data: XOR<StageUpdateManyMutationInput, StageUncheckedUpdateManyInput>
    where?: StageWhereInput
  }


  /**
   * Stage upsert
   */
  export type StageUpsertArgs = {
    /**
     * Select specific fields to fetch from the Stage
     * 
    **/
    select?: StageSelect | null
    /**
     * The filter to search for the Stage to update in case it exists.
     * 
    **/
    where: StageWhereUniqueInput
    /**
     * In case the Stage found by the `where` argument doesn't exist, create a new Stage with this data.
     * 
    **/
    create: XOR<StageCreateInput, StageUncheckedCreateInput>
    /**
     * In case the Stage was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<StageUpdateInput, StageUncheckedUpdateInput>
  }


  /**
   * Stage delete
   */
  export type StageDeleteArgs = {
    /**
     * Select specific fields to fetch from the Stage
     * 
    **/
    select?: StageSelect | null
    /**
     * Filter which Stage to delete.
     * 
    **/
    where: StageWhereUniqueInput
  }


  /**
   * Stage deleteMany
   */
  export type StageDeleteManyArgs = {
    where?: StageWhereInput
  }


  /**
   * Stage without action
   */
  export type StageArgs = {
    /**
     * Select specific fields to fetch from the Stage
     * 
    **/
    select?: StageSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    providerType: 'providerType',
    providerId: 'providerId',
    providerAccountId: 'providerAccountId',
    refreshToken: 'refreshToken',
    accessToken: 'accessToken',
    accessTokenExpires: 'accessTokenExpires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    expires: 'expires',
    sessionToken: 'sessionToken',
    accessToken: 'accessToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationRequestScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    token: 'token',
    expires: 'expires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationRequestScalarFieldEnum = (typeof VerificationRequestScalarFieldEnum)[keyof typeof VerificationRequestScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    value: 'value'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const CountryScalarFieldEnum: {
    id: 'id',
    value: 'value'
  };

  export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum]


  export const FinishScalarFieldEnum: {
    id: 'id',
    value: 'value'
  };

  export type FinishScalarFieldEnum = (typeof FinishScalarFieldEnum)[keyof typeof FinishScalarFieldEnum]


  export const LegsScalarFieldEnum: {
    id: 'id',
    value: 'value'
  };

  export type LegsScalarFieldEnum = (typeof LegsScalarFieldEnum)[keyof typeof LegsScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    linnworksId: 'linnworksId',
    receivedDate: 'receivedDate',
    deliveryDate: 'deliveryDate',
    manufactureDate: 'manufactureDate',
    dispatchDate: 'dispatchDate',
    boxQuantity: 'boxQuantity',
    deliveryService: 'deliveryService',
    status: 'status',
    comment: 'comment',
    source: 'source'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderSkuScalarFieldEnum: {
    id: 'id',
    status: 'status',
    comment: 'comment',
    quantity: 'quantity',
    orderId: 'orderId',
    skuId: 'skuId'
  };

  export type OrderSkuScalarFieldEnum = (typeof OrderSkuScalarFieldEnum)[keyof typeof OrderSkuScalarFieldEnum]


  export const OrderSkuComponentScalarFieldEnum: {
    id: 'id',
    status: 'status',
    comment: 'comment',
    bayNo: 'bayNo',
    stageStatuses: 'stageStatuses',
    orderSkuId: 'orderSkuId',
    componentId: 'componentId',
    boxSize: 'boxSize',
    boxNumber: 'boxNumber',
    quantity: 'quantity'
  };

  export type OrderSkuComponentScalarFieldEnum = (typeof OrderSkuComponentScalarFieldEnum)[keyof typeof OrderSkuComponentScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    value: 'value'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const SizeScalarFieldEnum: {
    id: 'id',
    value: 'value'
  };

  export type SizeScalarFieldEnum = (typeof SizeScalarFieldEnum)[keyof typeof SizeScalarFieldEnum]


  export const SkuScalarFieldEnum: {
    id: 'id',
    countryId: 'countryId',
    categoryId: 'categoryId',
    productId: 'productId',
    sizeId: 'sizeId',
    finishId: 'finishId',
    legsId: 'legsId',
    boxQuantity: 'boxQuantity'
  };

  export type SkuScalarFieldEnum = (typeof SkuScalarFieldEnum)[keyof typeof SkuScalarFieldEnum]


  export const SkuToComponentScalarFieldEnum: {
    componentId: 'componentId',
    skuId: 'skuId',
    boxSize: 'boxSize',
    boxNumber: 'boxNumber',
    quantity: 'quantity'
  };

  export type SkuToComponentScalarFieldEnum = (typeof SkuToComponentScalarFieldEnum)[keyof typeof SkuToComponentScalarFieldEnum]


  export const ComponentTypeScalarFieldEnum: {
    id: 'id',
    value: 'value'
  };

  export type ComponentTypeScalarFieldEnum = (typeof ComponentTypeScalarFieldEnum)[keyof typeof ComponentTypeScalarFieldEnum]


  export const ComponentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    length: 'length',
    width: 'width',
    depth: 'depth',
    weight: 'weight',
    stages: 'stages',
    parentId: 'parentId',
    inherit: 'inherit',
    typeId: 'typeId'
  };

  export type ComponentScalarFieldEnum = (typeof ComponentScalarFieldEnum)[keyof typeof ComponentScalarFieldEnum]


  export const StageScalarFieldEnum: {
    id: 'id',
    label: 'label',
    order: 'order',
    enabled: 'enabled',
    barn: 'barn'
  };

  export type StageScalarFieldEnum = (typeof StageScalarFieldEnum)[keyof typeof StageScalarFieldEnum]


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
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: Enumerable<AccountWhereInput>
    OR?: Enumerable<AccountWhereInput>
    NOT?: Enumerable<AccountWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    providerType?: StringFilter | string
    providerId?: StringFilter | string
    providerAccountId?: StringFilter | string
    refreshToken?: StringNullableFilter | string | null
    accessToken?: StringNullableFilter | string | null
    accessTokenExpires?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AccountOrderByInput = {
    id?: SortOrder
    userId?: SortOrder
    providerType?: SortOrder
    providerId?: SortOrder
    providerAccountId?: SortOrder
    refreshToken?: SortOrder
    accessToken?: SortOrder
    accessTokenExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountWhereUniqueInput = {
    id?: string
    providerId_providerAccountId?: AccountProviderIdProviderAccountIdCompoundUniqueInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AccountScalarWhereWithAggregatesInput>
    OR?: Enumerable<AccountScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AccountScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    providerType?: StringWithAggregatesFilter | string
    providerId?: StringWithAggregatesFilter | string
    providerAccountId?: StringWithAggregatesFilter | string
    refreshToken?: StringNullableWithAggregatesFilter | string | null
    accessToken?: StringNullableWithAggregatesFilter | string | null
    accessTokenExpires?: DateTimeNullableWithAggregatesFilter | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type SessionWhereInput = {
    AND?: Enumerable<SessionWhereInput>
    OR?: Enumerable<SessionWhereInput>
    NOT?: Enumerable<SessionWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    expires?: DateTimeFilter | Date | string
    sessionToken?: StringFilter | string
    accessToken?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    sessionToken?: SortOrder
    accessToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionWhereUniqueInput = {
    id?: string
    sessionToken?: string
    accessToken?: string
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<SessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SessionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    expires?: DateTimeWithAggregatesFilter | Date | string
    sessionToken?: StringWithAggregatesFilter | string
    accessToken?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    name?: StringNullableFilter | string | null
    email?: StringNullableFilter | string | null
    emailVerified?: DateTimeNullableFilter | Date | string | null
    image?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
    email?: StringNullableWithAggregatesFilter | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter | Date | string | null
    image?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type VerificationRequestWhereInput = {
    AND?: Enumerable<VerificationRequestWhereInput>
    OR?: Enumerable<VerificationRequestWhereInput>
    NOT?: Enumerable<VerificationRequestWhereInput>
    id?: StringFilter | string
    identifier?: StringFilter | string
    token?: StringFilter | string
    expires?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type VerificationRequestOrderByInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationRequestWhereUniqueInput = {
    id?: string
    token?: string
    identifier_token?: VerificationRequestIdentifierTokenCompoundUniqueInput
  }

  export type VerificationRequestScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VerificationRequestScalarWhereWithAggregatesInput>
    OR?: Enumerable<VerificationRequestScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VerificationRequestScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    identifier?: StringWithAggregatesFilter | string
    token?: StringWithAggregatesFilter | string
    expires?: DateTimeWithAggregatesFilter | Date | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CategoryWhereInput = {
    AND?: Enumerable<CategoryWhereInput>
    OR?: Enumerable<CategoryWhereInput>
    NOT?: Enumerable<CategoryWhereInput>
    id?: StringFilter | string
    value?: StringFilter | string
    skus?: SkuListRelationFilter
  }

  export type CategoryOrderByInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type CategoryWhereUniqueInput = {
    id?: string
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    value?: StringWithAggregatesFilter | string
  }

  export type CountryWhereInput = {
    AND?: Enumerable<CountryWhereInput>
    OR?: Enumerable<CountryWhereInput>
    NOT?: Enumerable<CountryWhereInput>
    id?: StringFilter | string
    value?: StringFilter | string
    skus?: SkuListRelationFilter
  }

  export type CountryOrderByInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type CountryWhereUniqueInput = {
    id?: string
  }

  export type CountryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CountryScalarWhereWithAggregatesInput>
    OR?: Enumerable<CountryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CountryScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    value?: StringWithAggregatesFilter | string
  }

  export type FinishWhereInput = {
    AND?: Enumerable<FinishWhereInput>
    OR?: Enumerable<FinishWhereInput>
    NOT?: Enumerable<FinishWhereInput>
    id?: StringFilter | string
    value?: StringFilter | string
    skus?: SkuListRelationFilter
  }

  export type FinishOrderByInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type FinishWhereUniqueInput = {
    id?: string
  }

  export type FinishScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FinishScalarWhereWithAggregatesInput>
    OR?: Enumerable<FinishScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FinishScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    value?: StringWithAggregatesFilter | string
  }

  export type LegsWhereInput = {
    AND?: Enumerable<LegsWhereInput>
    OR?: Enumerable<LegsWhereInput>
    NOT?: Enumerable<LegsWhereInput>
    id?: StringFilter | string
    value?: StringFilter | string
    skus?: SkuListRelationFilter
  }

  export type LegsOrderByInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type LegsWhereUniqueInput = {
    id?: string
  }

  export type LegsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LegsScalarWhereWithAggregatesInput>
    OR?: Enumerable<LegsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LegsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    value?: StringWithAggregatesFilter | string
  }

  export type OrderWhereInput = {
    AND?: Enumerable<OrderWhereInput>
    OR?: Enumerable<OrderWhereInput>
    NOT?: Enumerable<OrderWhereInput>
    id?: IntFilter | number
    linnworksId?: StringFilter | string
    receivedDate?: DateTimeFilter | Date | string
    deliveryDate?: DateTimeFilter | Date | string
    manufactureDate?: DateTimeFilter | Date | string
    dispatchDate?: DateTimeFilter | Date | string
    boxQuantity?: IntFilter | number
    deliveryService?: EnumDeliveryServiceEnumFilter | DeliveryServiceEnum
    status?: EnumStatusEnumFilter | StatusEnum
    comment?: StringFilter | string
    source?: EnumSourceEnumFilter | SourceEnum
    orderSkus?: OrderSkuListRelationFilter
  }

  export type OrderOrderByInput = {
    id?: SortOrder
    linnworksId?: SortOrder
    receivedDate?: SortOrder
    deliveryDate?: SortOrder
    manufactureDate?: SortOrder
    dispatchDate?: SortOrder
    boxQuantity?: SortOrder
    deliveryService?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    source?: SortOrder
  }

  export type OrderWhereUniqueInput = {
    id?: number
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OrderScalarWhereWithAggregatesInput>
    OR?: Enumerable<OrderScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OrderScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    linnworksId?: StringWithAggregatesFilter | string
    receivedDate?: DateTimeWithAggregatesFilter | Date | string
    deliveryDate?: DateTimeWithAggregatesFilter | Date | string
    manufactureDate?: DateTimeWithAggregatesFilter | Date | string
    dispatchDate?: DateTimeWithAggregatesFilter | Date | string
    boxQuantity?: IntWithAggregatesFilter | number
    deliveryService?: EnumDeliveryServiceEnumWithAggregatesFilter | DeliveryServiceEnum
    status?: EnumStatusEnumWithAggregatesFilter | StatusEnum
    comment?: StringWithAggregatesFilter | string
    source?: EnumSourceEnumWithAggregatesFilter | SourceEnum
  }

  export type OrderSkuWhereInput = {
    AND?: Enumerable<OrderSkuWhereInput>
    OR?: Enumerable<OrderSkuWhereInput>
    NOT?: Enumerable<OrderSkuWhereInput>
    id?: StringFilter | string
    status?: EnumStatusEnumFilter | StatusEnum
    comment?: StringFilter | string
    quantity?: IntFilter | number
    orderId?: IntFilter | number
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    skuId?: StringFilter | string
    sku?: XOR<SkuRelationFilter, SkuWhereInput>
    orderSkuComponents?: OrderSkuComponentListRelationFilter
  }

  export type OrderSkuOrderByInput = {
    id?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    quantity?: SortOrder
    orderId?: SortOrder
    skuId?: SortOrder
  }

  export type OrderSkuWhereUniqueInput = {
    id?: string
  }

  export type OrderSkuScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OrderSkuScalarWhereWithAggregatesInput>
    OR?: Enumerable<OrderSkuScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OrderSkuScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    status?: EnumStatusEnumWithAggregatesFilter | StatusEnum
    comment?: StringWithAggregatesFilter | string
    quantity?: IntWithAggregatesFilter | number
    orderId?: IntWithAggregatesFilter | number
    skuId?: StringWithAggregatesFilter | string
  }

  export type OrderSkuComponentWhereInput = {
    AND?: Enumerable<OrderSkuComponentWhereInput>
    OR?: Enumerable<OrderSkuComponentWhereInput>
    NOT?: Enumerable<OrderSkuComponentWhereInput>
    id?: StringFilter | string
    status?: EnumStatusEnumFilter | StatusEnum
    comment?: StringFilter | string
    bayNo?: StringFilter | string
    stageStatuses?: JsonFilter
    orderSkuId?: StringFilter | string
    orderSku?: XOR<OrderSkuRelationFilter, OrderSkuWhereInput>
    componentId?: StringFilter | string
    component?: XOR<ComponentRelationFilter, ComponentWhereInput>
    boxSize?: StringFilter | string
    boxNumber?: IntFilter | number
    quantity?: IntFilter | number
  }

  export type OrderSkuComponentOrderByInput = {
    id?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    bayNo?: SortOrder
    stageStatuses?: SortOrder
    orderSkuId?: SortOrder
    componentId?: SortOrder
    boxSize?: SortOrder
    boxNumber?: SortOrder
    quantity?: SortOrder
  }

  export type OrderSkuComponentWhereUniqueInput = {
    id?: string
  }

  export type OrderSkuComponentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OrderSkuComponentScalarWhereWithAggregatesInput>
    OR?: Enumerable<OrderSkuComponentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OrderSkuComponentScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    status?: EnumStatusEnumWithAggregatesFilter | StatusEnum
    comment?: StringWithAggregatesFilter | string
    bayNo?: StringWithAggregatesFilter | string
    stageStatuses?: JsonWithAggregatesFilter
    orderSkuId?: StringWithAggregatesFilter | string
    componentId?: StringWithAggregatesFilter | string
    boxSize?: StringWithAggregatesFilter | string
    boxNumber?: IntWithAggregatesFilter | number
    quantity?: IntWithAggregatesFilter | number
  }

  export type ProductWhereInput = {
    AND?: Enumerable<ProductWhereInput>
    OR?: Enumerable<ProductWhereInput>
    NOT?: Enumerable<ProductWhereInput>
    id?: StringFilter | string
    value?: StringFilter | string
    skus?: SkuListRelationFilter
  }

  export type ProductOrderByInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type ProductWhereUniqueInput = {
    id?: string
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProductScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProductScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProductScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    value?: StringWithAggregatesFilter | string
  }

  export type SizeWhereInput = {
    AND?: Enumerable<SizeWhereInput>
    OR?: Enumerable<SizeWhereInput>
    NOT?: Enumerable<SizeWhereInput>
    id?: StringFilter | string
    value?: StringFilter | string
    skus?: SkuListRelationFilter
  }

  export type SizeOrderByInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type SizeWhereUniqueInput = {
    id?: string
  }

  export type SizeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SizeScalarWhereWithAggregatesInput>
    OR?: Enumerable<SizeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SizeScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    value?: StringWithAggregatesFilter | string
  }

  export type SkuWhereInput = {
    AND?: Enumerable<SkuWhereInput>
    OR?: Enumerable<SkuWhereInput>
    NOT?: Enumerable<SkuWhereInput>
    id?: StringFilter | string
    country?: XOR<CountryRelationFilter, CountryWhereInput>
    countryId?: StringFilter | string
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    categoryId?: StringFilter | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    productId?: StringFilter | string
    size?: XOR<SizeRelationFilter, SizeWhereInput>
    sizeId?: StringFilter | string
    finish?: XOR<FinishRelationFilter, FinishWhereInput>
    finishId?: StringFilter | string
    legs?: XOR<LegsRelationFilter, LegsWhereInput>
    legsId?: StringFilter | string
    boxQuantity?: IntFilter | number
    orderSkus?: OrderSkuListRelationFilter
    components?: SkuToComponentListRelationFilter
  }

  export type SkuOrderByInput = {
    id?: SortOrder
    countryId?: SortOrder
    categoryId?: SortOrder
    productId?: SortOrder
    sizeId?: SortOrder
    finishId?: SortOrder
    legsId?: SortOrder
    boxQuantity?: SortOrder
  }

  export type SkuWhereUniqueInput = {
    id?: string
  }

  export type SkuScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SkuScalarWhereWithAggregatesInput>
    OR?: Enumerable<SkuScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SkuScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    countryId?: StringWithAggregatesFilter | string
    categoryId?: StringWithAggregatesFilter | string
    productId?: StringWithAggregatesFilter | string
    sizeId?: StringWithAggregatesFilter | string
    finishId?: StringWithAggregatesFilter | string
    legsId?: StringWithAggregatesFilter | string
    boxQuantity?: IntWithAggregatesFilter | number
  }

  export type SkuToComponentWhereInput = {
    AND?: Enumerable<SkuToComponentWhereInput>
    OR?: Enumerable<SkuToComponentWhereInput>
    NOT?: Enumerable<SkuToComponentWhereInput>
    componentId?: StringFilter | string
    component?: XOR<ComponentRelationFilter, ComponentWhereInput>
    skuId?: StringFilter | string
    sku?: XOR<SkuRelationFilter, SkuWhereInput>
    boxSize?: StringFilter | string
    boxNumber?: IntFilter | number
    quantity?: IntFilter | number
  }

  export type SkuToComponentOrderByInput = {
    componentId?: SortOrder
    skuId?: SortOrder
    boxSize?: SortOrder
    boxNumber?: SortOrder
    quantity?: SortOrder
  }

  export type SkuToComponentWhereUniqueInput = {
    skuId_componentId?: SkuToComponentSkuIdComponentIdCompoundUniqueInput
  }

  export type SkuToComponentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SkuToComponentScalarWhereWithAggregatesInput>
    OR?: Enumerable<SkuToComponentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SkuToComponentScalarWhereWithAggregatesInput>
    componentId?: StringWithAggregatesFilter | string
    skuId?: StringWithAggregatesFilter | string
    boxSize?: StringWithAggregatesFilter | string
    boxNumber?: IntWithAggregatesFilter | number
    quantity?: IntWithAggregatesFilter | number
  }

  export type ComponentTypeWhereInput = {
    AND?: Enumerable<ComponentTypeWhereInput>
    OR?: Enumerable<ComponentTypeWhereInput>
    NOT?: Enumerable<ComponentTypeWhereInput>
    id?: IntFilter | number
    value?: StringFilter | string
    components?: ComponentListRelationFilter
  }

  export type ComponentTypeOrderByInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type ComponentTypeWhereUniqueInput = {
    id?: number
  }

  export type ComponentTypeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ComponentTypeScalarWhereWithAggregatesInput>
    OR?: Enumerable<ComponentTypeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ComponentTypeScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    value?: StringWithAggregatesFilter | string
  }

  export type ComponentWhereInput = {
    AND?: Enumerable<ComponentWhereInput>
    OR?: Enumerable<ComponentWhereInput>
    NOT?: Enumerable<ComponentWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    length?: IntFilter | number
    width?: IntFilter | number
    depth?: IntFilter | number
    weight?: IntFilter | number
    stages?: JsonFilter
    orderSkuComponents?: OrderSkuComponentListRelationFilter
    skus?: SkuToComponentListRelationFilter
    parentId?: StringNullableFilter | string | null
    parentComponent?: XOR<ComponentRelationFilter, ComponentWhereInput> | null
    childComponent?: XOR<ComponentRelationFilter, ComponentWhereInput> | null
    inherit?: BoolFilter | boolean
    typeId?: IntFilter | number
    type?: XOR<ComponentTypeRelationFilter, ComponentTypeWhereInput>
  }

  export type ComponentOrderByInput = {
    id?: SortOrder
    name?: SortOrder
    length?: SortOrder
    width?: SortOrder
    depth?: SortOrder
    weight?: SortOrder
    stages?: SortOrder
    parentId?: SortOrder
    inherit?: SortOrder
    typeId?: SortOrder
  }

  export type ComponentWhereUniqueInput = {
    id?: string
  }

  export type ComponentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ComponentScalarWhereWithAggregatesInput>
    OR?: Enumerable<ComponentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ComponentScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    length?: IntWithAggregatesFilter | number
    width?: IntWithAggregatesFilter | number
    depth?: IntWithAggregatesFilter | number
    weight?: IntWithAggregatesFilter | number
    stages?: JsonWithAggregatesFilter
    parentId?: StringNullableWithAggregatesFilter | string | null
    inherit?: BoolWithAggregatesFilter | boolean
    typeId?: IntWithAggregatesFilter | number
  }

  export type StageWhereInput = {
    AND?: Enumerable<StageWhereInput>
    OR?: Enumerable<StageWhereInput>
    NOT?: Enumerable<StageWhereInput>
    id?: IntFilter | number
    label?: StringFilter | string
    order?: IntFilter | number
    enabled?: BoolFilter | boolean
    barn?: StringFilter | string
  }

  export type StageOrderByInput = {
    id?: SortOrder
    label?: SortOrder
    order?: SortOrder
    enabled?: SortOrder
    barn?: SortOrder
  }

  export type StageWhereUniqueInput = {
    id?: number
  }

  export type StageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<StageScalarWhereWithAggregatesInput>
    OR?: Enumerable<StageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<StageScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    label?: StringWithAggregatesFilter | string
    order?: IntWithAggregatesFilter | number
    enabled?: BoolWithAggregatesFilter | boolean
    barn?: StringWithAggregatesFilter | string
  }

  export type AccountCreateInput = {
    id?: string
    providerType: string
    providerId: string
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    accessTokenExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    providerType: string
    providerId: string
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    accessTokenExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    providerType: string
    providerId: string
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    accessTokenExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    expires: Date | string
    sessionToken: string
    accessToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    expires: Date | string
    sessionToken: string
    accessToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    expires: Date | string
    sessionToken: string
    accessToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserInput
    sessions?: SessionUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserInput
    sessions?: SessionUncheckedUpdateManyWithoutUserInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationRequestCreateInput = {
    id?: string
    identifier: string
    token: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationRequestUncheckedCreateInput = {
    id?: string
    identifier: string
    token: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationRequestCreateManyInput = {
    id?: string
    identifier: string
    token: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id: string
    value: string
    skus?: SkuCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id: string
    value: string
    skus?: SkuUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    skus?: SkuUpdateManyWithoutCategoryInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    skus?: SkuUncheckedUpdateManyWithoutCategoryInput
  }

  export type CategoryCreateManyInput = {
    id: string
    value: string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type CountryCreateInput = {
    id: string
    value: string
    skus?: SkuCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateInput = {
    id: string
    value: string
    skus?: SkuUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    skus?: SkuUpdateManyWithoutCountryInput
  }

  export type CountryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    skus?: SkuUncheckedUpdateManyWithoutCountryInput
  }

  export type CountryCreateManyInput = {
    id: string
    value: string
  }

  export type CountryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type CountryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type FinishCreateInput = {
    id: string
    value: string
    skus?: SkuCreateNestedManyWithoutFinishInput
  }

  export type FinishUncheckedCreateInput = {
    id: string
    value: string
    skus?: SkuUncheckedCreateNestedManyWithoutFinishInput
  }

  export type FinishUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    skus?: SkuUpdateManyWithoutFinishInput
  }

  export type FinishUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    skus?: SkuUncheckedUpdateManyWithoutFinishInput
  }

  export type FinishCreateManyInput = {
    id: string
    value: string
  }

  export type FinishUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type FinishUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type LegsCreateInput = {
    id: string
    value: string
    skus?: SkuCreateNestedManyWithoutLegsInput
  }

  export type LegsUncheckedCreateInput = {
    id: string
    value: string
    skus?: SkuUncheckedCreateNestedManyWithoutLegsInput
  }

  export type LegsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    skus?: SkuUpdateManyWithoutLegsInput
  }

  export type LegsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    skus?: SkuUncheckedUpdateManyWithoutLegsInput
  }

  export type LegsCreateManyInput = {
    id: string
    value: string
  }

  export type LegsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type LegsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type OrderCreateInput = {
    id: number
    linnworksId: string
    receivedDate: Date | string
    deliveryDate: Date | string
    manufactureDate: Date | string
    dispatchDate: Date | string
    boxQuantity: number
    deliveryService?: DeliveryServiceEnum
    status?: StatusEnum
    comment?: string
    source?: SourceEnum
    orderSkus?: OrderSkuCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id: number
    linnworksId: string
    receivedDate: Date | string
    deliveryDate: Date | string
    manufactureDate: Date | string
    dispatchDate: Date | string
    boxQuantity: number
    deliveryService?: DeliveryServiceEnum
    status?: StatusEnum
    comment?: string
    source?: SourceEnum
    orderSkus?: OrderSkuUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    linnworksId?: StringFieldUpdateOperationsInput | string
    receivedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    manufactureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dispatchDate?: DateTimeFieldUpdateOperationsInput | Date | string
    boxQuantity?: IntFieldUpdateOperationsInput | number
    deliveryService?: EnumDeliveryServiceEnumFieldUpdateOperationsInput | DeliveryServiceEnum
    status?: EnumStatusEnumFieldUpdateOperationsInput | StatusEnum
    comment?: StringFieldUpdateOperationsInput | string
    source?: EnumSourceEnumFieldUpdateOperationsInput | SourceEnum
    orderSkus?: OrderSkuUpdateManyWithoutOrderInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    linnworksId?: StringFieldUpdateOperationsInput | string
    receivedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    manufactureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dispatchDate?: DateTimeFieldUpdateOperationsInput | Date | string
    boxQuantity?: IntFieldUpdateOperationsInput | number
    deliveryService?: EnumDeliveryServiceEnumFieldUpdateOperationsInput | DeliveryServiceEnum
    status?: EnumStatusEnumFieldUpdateOperationsInput | StatusEnum
    comment?: StringFieldUpdateOperationsInput | string
    source?: EnumSourceEnumFieldUpdateOperationsInput | SourceEnum
    orderSkus?: OrderSkuUncheckedUpdateManyWithoutOrderInput
  }

  export type OrderCreateManyInput = {
    id: number
    linnworksId: string
    receivedDate: Date | string
    deliveryDate: Date | string
    manufactureDate: Date | string
    dispatchDate: Date | string
    boxQuantity: number
    deliveryService?: DeliveryServiceEnum
    status?: StatusEnum
    comment?: string
    source?: SourceEnum
  }

  export type OrderUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    linnworksId?: StringFieldUpdateOperationsInput | string
    receivedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    manufactureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dispatchDate?: DateTimeFieldUpdateOperationsInput | Date | string
    boxQuantity?: IntFieldUpdateOperationsInput | number
    deliveryService?: EnumDeliveryServiceEnumFieldUpdateOperationsInput | DeliveryServiceEnum
    status?: EnumStatusEnumFieldUpdateOperationsInput | StatusEnum
    comment?: StringFieldUpdateOperationsInput | string
    source?: EnumSourceEnumFieldUpdateOperationsInput | SourceEnum
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    linnworksId?: StringFieldUpdateOperationsInput | string
    receivedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    manufactureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dispatchDate?: DateTimeFieldUpdateOperationsInput | Date | string
    boxQuantity?: IntFieldUpdateOperationsInput | number
    deliveryService?: EnumDeliveryServiceEnumFieldUpdateOperationsInput | DeliveryServiceEnum
    status?: EnumStatusEnumFieldUpdateOperationsInput | StatusEnum
    comment?: StringFieldUpdateOperationsInput | string
    source?: EnumSourceEnumFieldUpdateOperationsInput | SourceEnum
  }

  export type OrderSkuCreateInput = {
    id: string
    status?: StatusEnum
    comment?: string
    quantity: number
    order: OrderCreateNestedOneWithoutOrderSkusInput
    sku: SkuCreateNestedOneWithoutOrderSkusInput
    orderSkuComponents?: OrderSkuComponentCreateNestedManyWithoutOrderSkuInput
  }

  export type OrderSkuUncheckedCreateInput = {
    id: string
    status?: StatusEnum
    comment?: string
    quantity: number
    orderId: number
    skuId: string
    orderSkuComponents?: OrderSkuComponentUncheckedCreateNestedManyWithoutOrderSkuInput
  }

  export type OrderSkuUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | StatusEnum
    comment?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutOrderSkusInput
    sku?: SkuUpdateOneRequiredWithoutOrderSkusInput
    orderSkuComponents?: OrderSkuComponentUpdateManyWithoutOrderSkuInput
  }

  export type OrderSkuUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | StatusEnum
    comment?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    skuId?: StringFieldUpdateOperationsInput | string
    orderSkuComponents?: OrderSkuComponentUncheckedUpdateManyWithoutOrderSkuInput
  }

  export type OrderSkuCreateManyInput = {
    id: string
    status?: StatusEnum
    comment?: string
    quantity: number
    orderId: number
    skuId: string
  }

  export type OrderSkuUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | StatusEnum
    comment?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrderSkuUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | StatusEnum
    comment?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    skuId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderSkuComponentCreateInput = {
    id: string
    status?: StatusEnum
    comment?: string
    bayNo?: string
    stageStatuses?: InputJsonValue
    boxSize: string
    boxNumber: number
    quantity: number
    orderSku: OrderSkuCreateNestedOneWithoutOrderSkuComponentsInput
    component: ComponentCreateNestedOneWithoutOrderSkuComponentsInput
  }

  export type OrderSkuComponentUncheckedCreateInput = {
    id: string
    status?: StatusEnum
    comment?: string
    bayNo?: string
    stageStatuses?: InputJsonValue
    orderSkuId: string
    componentId: string
    boxSize: string
    boxNumber: number
    quantity: number
  }

  export type OrderSkuComponentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | StatusEnum
    comment?: StringFieldUpdateOperationsInput | string
    bayNo?: StringFieldUpdateOperationsInput | string
    stageStatuses?: InputJsonValue
    boxSize?: StringFieldUpdateOperationsInput | string
    boxNumber?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    orderSku?: OrderSkuUpdateOneRequiredWithoutOrderSkuComponentsInput
    component?: ComponentUpdateOneRequiredWithoutOrderSkuComponentsInput
  }

  export type OrderSkuComponentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | StatusEnum
    comment?: StringFieldUpdateOperationsInput | string
    bayNo?: StringFieldUpdateOperationsInput | string
    stageStatuses?: InputJsonValue
    orderSkuId?: StringFieldUpdateOperationsInput | string
    componentId?: StringFieldUpdateOperationsInput | string
    boxSize?: StringFieldUpdateOperationsInput | string
    boxNumber?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrderSkuComponentCreateManyInput = {
    id: string
    status?: StatusEnum
    comment?: string
    bayNo?: string
    stageStatuses?: InputJsonValue
    orderSkuId: string
    componentId: string
    boxSize: string
    boxNumber: number
    quantity: number
  }

  export type OrderSkuComponentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | StatusEnum
    comment?: StringFieldUpdateOperationsInput | string
    bayNo?: StringFieldUpdateOperationsInput | string
    stageStatuses?: InputJsonValue
    boxSize?: StringFieldUpdateOperationsInput | string
    boxNumber?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrderSkuComponentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | StatusEnum
    comment?: StringFieldUpdateOperationsInput | string
    bayNo?: StringFieldUpdateOperationsInput | string
    stageStatuses?: InputJsonValue
    orderSkuId?: StringFieldUpdateOperationsInput | string
    componentId?: StringFieldUpdateOperationsInput | string
    boxSize?: StringFieldUpdateOperationsInput | string
    boxNumber?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCreateInput = {
    id: string
    value: string
    skus?: SkuCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id: string
    value: string
    skus?: SkuUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    skus?: SkuUpdateManyWithoutProductInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    skus?: SkuUncheckedUpdateManyWithoutProductInput
  }

  export type ProductCreateManyInput = {
    id: string
    value: string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type SizeCreateInput = {
    id: string
    value: string
    skus?: SkuCreateNestedManyWithoutSizeInput
  }

  export type SizeUncheckedCreateInput = {
    id: string
    value: string
    skus?: SkuUncheckedCreateNestedManyWithoutSizeInput
  }

  export type SizeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    skus?: SkuUpdateManyWithoutSizeInput
  }

  export type SizeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    skus?: SkuUncheckedUpdateManyWithoutSizeInput
  }

  export type SizeCreateManyInput = {
    id: string
    value: string
  }

  export type SizeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type SizeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type SkuCreateInput = {
    id: string
    boxQuantity: number
    country: CountryCreateNestedOneWithoutSkusInput
    category: CategoryCreateNestedOneWithoutSkusInput
    product: ProductCreateNestedOneWithoutSkusInput
    size: SizeCreateNestedOneWithoutSkusInput
    finish: FinishCreateNestedOneWithoutSkusInput
    legs: LegsCreateNestedOneWithoutSkusInput
    orderSkus?: OrderSkuCreateNestedManyWithoutSkuInput
    components?: SkuToComponentCreateNestedManyWithoutSkuInput
  }

  export type SkuUncheckedCreateInput = {
    id: string
    countryId: string
    categoryId: string
    productId: string
    sizeId: string
    finishId: string
    legsId: string
    boxQuantity: number
    orderSkus?: OrderSkuUncheckedCreateNestedManyWithoutSkuInput
    components?: SkuToComponentUncheckedCreateNestedManyWithoutSkuInput
  }

  export type SkuUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    boxQuantity?: IntFieldUpdateOperationsInput | number
    country?: CountryUpdateOneRequiredWithoutSkusInput
    category?: CategoryUpdateOneRequiredWithoutSkusInput
    product?: ProductUpdateOneRequiredWithoutSkusInput
    size?: SizeUpdateOneRequiredWithoutSkusInput
    finish?: FinishUpdateOneRequiredWithoutSkusInput
    legs?: LegsUpdateOneRequiredWithoutSkusInput
    orderSkus?: OrderSkuUpdateManyWithoutSkuInput
    components?: SkuToComponentUpdateManyWithoutSkuInput
  }

  export type SkuUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    sizeId?: StringFieldUpdateOperationsInput | string
    finishId?: StringFieldUpdateOperationsInput | string
    legsId?: StringFieldUpdateOperationsInput | string
    boxQuantity?: IntFieldUpdateOperationsInput | number
    orderSkus?: OrderSkuUncheckedUpdateManyWithoutSkuInput
    components?: SkuToComponentUncheckedUpdateManyWithoutSkuInput
  }

  export type SkuCreateManyInput = {
    id: string
    countryId: string
    categoryId: string
    productId: string
    sizeId: string
    finishId: string
    legsId: string
    boxQuantity: number
  }

  export type SkuUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    boxQuantity?: IntFieldUpdateOperationsInput | number
  }

  export type SkuUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    sizeId?: StringFieldUpdateOperationsInput | string
    finishId?: StringFieldUpdateOperationsInput | string
    legsId?: StringFieldUpdateOperationsInput | string
    boxQuantity?: IntFieldUpdateOperationsInput | number
  }

  export type SkuToComponentCreateInput = {
    boxSize: string
    boxNumber: number
    quantity: number
    component: ComponentCreateNestedOneWithoutSkusInput
    sku: SkuCreateNestedOneWithoutComponentsInput
  }

  export type SkuToComponentUncheckedCreateInput = {
    componentId: string
    skuId: string
    boxSize: string
    boxNumber: number
    quantity: number
  }

  export type SkuToComponentUpdateInput = {
    boxSize?: StringFieldUpdateOperationsInput | string
    boxNumber?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    component?: ComponentUpdateOneRequiredWithoutSkusInput
    sku?: SkuUpdateOneRequiredWithoutComponentsInput
  }

  export type SkuToComponentUncheckedUpdateInput = {
    componentId?: StringFieldUpdateOperationsInput | string
    skuId?: StringFieldUpdateOperationsInput | string
    boxSize?: StringFieldUpdateOperationsInput | string
    boxNumber?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type SkuToComponentCreateManyInput = {
    componentId: string
    skuId: string
    boxSize: string
    boxNumber: number
    quantity: number
  }

  export type SkuToComponentUpdateManyMutationInput = {
    boxSize?: StringFieldUpdateOperationsInput | string
    boxNumber?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type SkuToComponentUncheckedUpdateManyInput = {
    componentId?: StringFieldUpdateOperationsInput | string
    skuId?: StringFieldUpdateOperationsInput | string
    boxSize?: StringFieldUpdateOperationsInput | string
    boxNumber?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ComponentTypeCreateInput = {
    value: string
    components?: ComponentCreateNestedManyWithoutTypeInput
  }

  export type ComponentTypeUncheckedCreateInput = {
    id?: number
    value: string
    components?: ComponentUncheckedCreateNestedManyWithoutTypeInput
  }

  export type ComponentTypeUpdateInput = {
    value?: StringFieldUpdateOperationsInput | string
    components?: ComponentUpdateManyWithoutTypeInput
  }

  export type ComponentTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    components?: ComponentUncheckedUpdateManyWithoutTypeInput
  }

  export type ComponentTypeCreateManyInput = {
    id?: number
    value: string
  }

  export type ComponentTypeUpdateManyMutationInput = {
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ComponentTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ComponentCreateInput = {
    id: string
    name: string
    length: number
    width: number
    depth: number
    weight: number
    stages?: InputJsonValue
    inherit: boolean
    orderSkuComponents?: OrderSkuComponentCreateNestedManyWithoutComponentInput
    skus?: SkuToComponentCreateNestedManyWithoutComponentInput
    parentComponent?: ComponentCreateNestedOneWithoutChildComponentInput
    childComponent?: ComponentCreateNestedOneWithoutParentComponentInput
    type: ComponentTypeCreateNestedOneWithoutComponentsInput
  }

  export type ComponentUncheckedCreateInput = {
    id: string
    name: string
    length: number
    width: number
    depth: number
    weight: number
    stages?: InputJsonValue
    parentId?: string | null
    inherit: boolean
    typeId: number
    orderSkuComponents?: OrderSkuComponentUncheckedCreateNestedManyWithoutComponentInput
    skus?: SkuToComponentUncheckedCreateNestedManyWithoutComponentInput
    childComponent?: ComponentUncheckedCreateNestedOneWithoutParentComponentInput
  }

  export type ComponentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    depth?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    stages?: InputJsonValue
    inherit?: BoolFieldUpdateOperationsInput | boolean
    orderSkuComponents?: OrderSkuComponentUpdateManyWithoutComponentInput
    skus?: SkuToComponentUpdateManyWithoutComponentInput
    parentComponent?: ComponentUpdateOneWithoutChildComponentInput
    childComponent?: ComponentUpdateOneWithoutParentComponentInput
    type?: ComponentTypeUpdateOneRequiredWithoutComponentsInput
  }

  export type ComponentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    depth?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    stages?: InputJsonValue
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    inherit?: BoolFieldUpdateOperationsInput | boolean
    typeId?: IntFieldUpdateOperationsInput | number
    orderSkuComponents?: OrderSkuComponentUncheckedUpdateManyWithoutComponentInput
    skus?: SkuToComponentUncheckedUpdateManyWithoutComponentInput
    childComponent?: ComponentUncheckedUpdateOneWithoutParentComponentInput
  }

  export type ComponentCreateManyInput = {
    id: string
    name: string
    length: number
    width: number
    depth: number
    weight: number
    stages?: InputJsonValue
    parentId?: string | null
    inherit: boolean
    typeId: number
  }

  export type ComponentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    depth?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    stages?: InputJsonValue
    inherit?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ComponentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    depth?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    stages?: InputJsonValue
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    inherit?: BoolFieldUpdateOperationsInput | boolean
    typeId?: IntFieldUpdateOperationsInput | number
  }

  export type StageCreateInput = {
    id: number
    label: string
    order: number
    enabled: boolean
    barn: string
  }

  export type StageUncheckedCreateInput = {
    id: number
    label: string
    order: number
    enabled: boolean
    barn: string
  }

  export type StageUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    barn?: StringFieldUpdateOperationsInput | string
  }

  export type StageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    barn?: StringFieldUpdateOperationsInput | string
  }

  export type StageCreateManyInput = {
    id: number
    label: string
    order: number
    enabled: boolean
    barn: string
  }

  export type StageUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    barn?: StringFieldUpdateOperationsInput | string
  }

  export type StageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    barn?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderIdProviderAccountIdCompoundUniqueInput = {
    providerId: string
    providerAccountId: string
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringFilter
    _max?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringNullableFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDateTimeNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDateTimeFilter
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type VerificationRequestIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type SkuListRelationFilter = {
    every?: SkuWhereInput
    some?: SkuWhereInput
    none?: SkuWhereInput
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type EnumDeliveryServiceEnumFilter = {
    equals?: DeliveryServiceEnum
    in?: Enumerable<DeliveryServiceEnum>
    notIn?: Enumerable<DeliveryServiceEnum>
    not?: NestedEnumDeliveryServiceEnumFilter | DeliveryServiceEnum
  }

  export type EnumStatusEnumFilter = {
    equals?: StatusEnum
    in?: Enumerable<StatusEnum>
    notIn?: Enumerable<StatusEnum>
    not?: NestedEnumStatusEnumFilter | StatusEnum
  }

  export type EnumSourceEnumFilter = {
    equals?: SourceEnum
    in?: Enumerable<SourceEnum>
    notIn?: Enumerable<SourceEnum>
    not?: NestedEnumSourceEnumFilter | SourceEnum
  }

  export type OrderSkuListRelationFilter = {
    every?: OrderSkuWhereInput
    some?: OrderSkuWhereInput
    none?: OrderSkuWhereInput
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _avg?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedIntFilter
    _min?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedIntFilter
    _max?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedIntFilter
  }

  export type EnumDeliveryServiceEnumWithAggregatesFilter = {
    equals?: DeliveryServiceEnum
    in?: Enumerable<DeliveryServiceEnum>
    notIn?: Enumerable<DeliveryServiceEnum>
    not?: NestedEnumDeliveryServiceEnumWithAggregatesFilter | DeliveryServiceEnum
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedEnumDeliveryServiceEnumFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedEnumDeliveryServiceEnumFilter
    _max?: NestedEnumDeliveryServiceEnumFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedEnumDeliveryServiceEnumFilter
  }

  export type EnumStatusEnumWithAggregatesFilter = {
    equals?: StatusEnum
    in?: Enumerable<StatusEnum>
    notIn?: Enumerable<StatusEnum>
    not?: NestedEnumStatusEnumWithAggregatesFilter | StatusEnum
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedEnumStatusEnumFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedEnumStatusEnumFilter
    _max?: NestedEnumStatusEnumFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedEnumStatusEnumFilter
  }

  export type EnumSourceEnumWithAggregatesFilter = {
    equals?: SourceEnum
    in?: Enumerable<SourceEnum>
    notIn?: Enumerable<SourceEnum>
    not?: NestedEnumSourceEnumWithAggregatesFilter | SourceEnum
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedEnumSourceEnumFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedEnumSourceEnumFilter
    _max?: NestedEnumSourceEnumFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedEnumSourceEnumFilter
  }

  export type OrderRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type SkuRelationFilter = {
    is?: SkuWhereInput
    isNot?: SkuWhereInput
  }

  export type OrderSkuComponentListRelationFilter = {
    every?: OrderSkuComponentWhereInput
    some?: OrderSkuComponentWhereInput
    none?: OrderSkuComponentWhereInput
  }
  export type JsonFilter = 
    | PatchUndefined<
        Either<Required<JsonFilterBase>, Exclude<keyof Required<JsonFilterBase>, 'path'>>,
        Required<JsonFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase>, 'path'>>

  export type JsonFilterBase = {
    equals?: InputJsonValue
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue
    array_starts_with?: InputJsonValue
    array_ends_with?: InputJsonValue
    not?: InputJsonValue
  }

  export type OrderSkuRelationFilter = {
    is?: OrderSkuWhereInput
    isNot?: OrderSkuWhereInput
  }

  export type ComponentRelationFilter = {
    is?: ComponentWhereInput
    isNot?: ComponentWhereInput
  }
  export type JsonWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase>, Exclude<keyof Required<JsonWithAggregatesFilterBase>, 'path'>>,
        Required<JsonWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase>, 'path'>>

  export type JsonWithAggregatesFilterBase = {
    equals?: InputJsonValue
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue
    array_starts_with?: InputJsonValue
    array_ends_with?: InputJsonValue
    not?: InputJsonValue
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedJsonFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedJsonFilter
    _max?: NestedJsonFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedJsonFilter
  }

  export type CountryRelationFilter = {
    is?: CountryWhereInput
    isNot?: CountryWhereInput
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type SizeRelationFilter = {
    is?: SizeWhereInput
    isNot?: SizeWhereInput
  }

  export type FinishRelationFilter = {
    is?: FinishWhereInput
    isNot?: FinishWhereInput
  }

  export type LegsRelationFilter = {
    is?: LegsWhereInput
    isNot?: LegsWhereInput
  }

  export type SkuToComponentListRelationFilter = {
    every?: SkuToComponentWhereInput
    some?: SkuToComponentWhereInput
    none?: SkuToComponentWhereInput
  }

  export type SkuToComponentSkuIdComponentIdCompoundUniqueInput = {
    skuId: string
    componentId: string
  }

  export type ComponentListRelationFilter = {
    every?: ComponentWhereInput
    some?: ComponentWhereInput
    none?: ComponentWhereInput
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type ComponentTypeRelationFilter = {
    is?: ComponentTypeWhereInput
    isNot?: ComponentTypeWhereInput
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedBoolFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedBoolFilter
    _max?: NestedBoolFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedBoolFilter
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: Enumerable<AccountWhereUniqueInput>
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: Enumerable<SessionWhereUniqueInput>
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: Enumerable<AccountWhereUniqueInput>
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: Enumerable<SessionWhereUniqueInput>
  }

  export type AccountUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AccountUpsertWithWhereUniqueWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: Enumerable<AccountWhereUniqueInput>
    set?: Enumerable<AccountWhereUniqueInput>
    disconnect?: Enumerable<AccountWhereUniqueInput>
    delete?: Enumerable<AccountWhereUniqueInput>
    update?: Enumerable<AccountUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AccountUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AccountScalarWhereInput>
  }

  export type SessionUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: Enumerable<SessionWhereUniqueInput>
    set?: Enumerable<SessionWhereUniqueInput>
    disconnect?: Enumerable<SessionWhereUniqueInput>
    delete?: Enumerable<SessionWhereUniqueInput>
    update?: Enumerable<SessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SessionScalarWhereInput>
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AccountUpsertWithWhereUniqueWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: Enumerable<AccountWhereUniqueInput>
    set?: Enumerable<AccountWhereUniqueInput>
    disconnect?: Enumerable<AccountWhereUniqueInput>
    delete?: Enumerable<AccountWhereUniqueInput>
    update?: Enumerable<AccountUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AccountUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AccountScalarWhereInput>
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: Enumerable<SessionWhereUniqueInput>
    set?: Enumerable<SessionWhereUniqueInput>
    disconnect?: Enumerable<SessionWhereUniqueInput>
    delete?: Enumerable<SessionWhereUniqueInput>
    update?: Enumerable<SessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SessionScalarWhereInput>
  }

  export type SkuCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<SkuCreateWithoutCategoryInput>, Enumerable<SkuUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<SkuCreateOrConnectWithoutCategoryInput>
    createMany?: SkuCreateManyCategoryInputEnvelope
    connect?: Enumerable<SkuWhereUniqueInput>
  }

  export type SkuUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<SkuCreateWithoutCategoryInput>, Enumerable<SkuUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<SkuCreateOrConnectWithoutCategoryInput>
    createMany?: SkuCreateManyCategoryInputEnvelope
    connect?: Enumerable<SkuWhereUniqueInput>
  }

  export type SkuUpdateManyWithoutCategoryInput = {
    create?: XOR<Enumerable<SkuCreateWithoutCategoryInput>, Enumerable<SkuUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<SkuCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<SkuUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: SkuCreateManyCategoryInputEnvelope
    connect?: Enumerable<SkuWhereUniqueInput>
    set?: Enumerable<SkuWhereUniqueInput>
    disconnect?: Enumerable<SkuWhereUniqueInput>
    delete?: Enumerable<SkuWhereUniqueInput>
    update?: Enumerable<SkuUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<SkuUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<SkuScalarWhereInput>
  }

  export type SkuUncheckedUpdateManyWithoutCategoryInput = {
    create?: XOR<Enumerable<SkuCreateWithoutCategoryInput>, Enumerable<SkuUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<SkuCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<SkuUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: SkuCreateManyCategoryInputEnvelope
    connect?: Enumerable<SkuWhereUniqueInput>
    set?: Enumerable<SkuWhereUniqueInput>
    disconnect?: Enumerable<SkuWhereUniqueInput>
    delete?: Enumerable<SkuWhereUniqueInput>
    update?: Enumerable<SkuUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<SkuUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<SkuScalarWhereInput>
  }

  export type SkuCreateNestedManyWithoutCountryInput = {
    create?: XOR<Enumerable<SkuCreateWithoutCountryInput>, Enumerable<SkuUncheckedCreateWithoutCountryInput>>
    connectOrCreate?: Enumerable<SkuCreateOrConnectWithoutCountryInput>
    createMany?: SkuCreateManyCountryInputEnvelope
    connect?: Enumerable<SkuWhereUniqueInput>
  }

  export type SkuUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<Enumerable<SkuCreateWithoutCountryInput>, Enumerable<SkuUncheckedCreateWithoutCountryInput>>
    connectOrCreate?: Enumerable<SkuCreateOrConnectWithoutCountryInput>
    createMany?: SkuCreateManyCountryInputEnvelope
    connect?: Enumerable<SkuWhereUniqueInput>
  }

  export type SkuUpdateManyWithoutCountryInput = {
    create?: XOR<Enumerable<SkuCreateWithoutCountryInput>, Enumerable<SkuUncheckedCreateWithoutCountryInput>>
    connectOrCreate?: Enumerable<SkuCreateOrConnectWithoutCountryInput>
    upsert?: Enumerable<SkuUpsertWithWhereUniqueWithoutCountryInput>
    createMany?: SkuCreateManyCountryInputEnvelope
    connect?: Enumerable<SkuWhereUniqueInput>
    set?: Enumerable<SkuWhereUniqueInput>
    disconnect?: Enumerable<SkuWhereUniqueInput>
    delete?: Enumerable<SkuWhereUniqueInput>
    update?: Enumerable<SkuUpdateWithWhereUniqueWithoutCountryInput>
    updateMany?: Enumerable<SkuUpdateManyWithWhereWithoutCountryInput>
    deleteMany?: Enumerable<SkuScalarWhereInput>
  }

  export type SkuUncheckedUpdateManyWithoutCountryInput = {
    create?: XOR<Enumerable<SkuCreateWithoutCountryInput>, Enumerable<SkuUncheckedCreateWithoutCountryInput>>
    connectOrCreate?: Enumerable<SkuCreateOrConnectWithoutCountryInput>
    upsert?: Enumerable<SkuUpsertWithWhereUniqueWithoutCountryInput>
    createMany?: SkuCreateManyCountryInputEnvelope
    connect?: Enumerable<SkuWhereUniqueInput>
    set?: Enumerable<SkuWhereUniqueInput>
    disconnect?: Enumerable<SkuWhereUniqueInput>
    delete?: Enumerable<SkuWhereUniqueInput>
    update?: Enumerable<SkuUpdateWithWhereUniqueWithoutCountryInput>
    updateMany?: Enumerable<SkuUpdateManyWithWhereWithoutCountryInput>
    deleteMany?: Enumerable<SkuScalarWhereInput>
  }

  export type SkuCreateNestedManyWithoutFinishInput = {
    create?: XOR<Enumerable<SkuCreateWithoutFinishInput>, Enumerable<SkuUncheckedCreateWithoutFinishInput>>
    connectOrCreate?: Enumerable<SkuCreateOrConnectWithoutFinishInput>
    createMany?: SkuCreateManyFinishInputEnvelope
    connect?: Enumerable<SkuWhereUniqueInput>
  }

  export type SkuUncheckedCreateNestedManyWithoutFinishInput = {
    create?: XOR<Enumerable<SkuCreateWithoutFinishInput>, Enumerable<SkuUncheckedCreateWithoutFinishInput>>
    connectOrCreate?: Enumerable<SkuCreateOrConnectWithoutFinishInput>
    createMany?: SkuCreateManyFinishInputEnvelope
    connect?: Enumerable<SkuWhereUniqueInput>
  }

  export type SkuUpdateManyWithoutFinishInput = {
    create?: XOR<Enumerable<SkuCreateWithoutFinishInput>, Enumerable<SkuUncheckedCreateWithoutFinishInput>>
    connectOrCreate?: Enumerable<SkuCreateOrConnectWithoutFinishInput>
    upsert?: Enumerable<SkuUpsertWithWhereUniqueWithoutFinishInput>
    createMany?: SkuCreateManyFinishInputEnvelope
    connect?: Enumerable<SkuWhereUniqueInput>
    set?: Enumerable<SkuWhereUniqueInput>
    disconnect?: Enumerable<SkuWhereUniqueInput>
    delete?: Enumerable<SkuWhereUniqueInput>
    update?: Enumerable<SkuUpdateWithWhereUniqueWithoutFinishInput>
    updateMany?: Enumerable<SkuUpdateManyWithWhereWithoutFinishInput>
    deleteMany?: Enumerable<SkuScalarWhereInput>
  }

  export type SkuUncheckedUpdateManyWithoutFinishInput = {
    create?: XOR<Enumerable<SkuCreateWithoutFinishInput>, Enumerable<SkuUncheckedCreateWithoutFinishInput>>
    connectOrCreate?: Enumerable<SkuCreateOrConnectWithoutFinishInput>
    upsert?: Enumerable<SkuUpsertWithWhereUniqueWithoutFinishInput>
    createMany?: SkuCreateManyFinishInputEnvelope
    connect?: Enumerable<SkuWhereUniqueInput>
    set?: Enumerable<SkuWhereUniqueInput>
    disconnect?: Enumerable<SkuWhereUniqueInput>
    delete?: Enumerable<SkuWhereUniqueInput>
    update?: Enumerable<SkuUpdateWithWhereUniqueWithoutFinishInput>
    updateMany?: Enumerable<SkuUpdateManyWithWhereWithoutFinishInput>
    deleteMany?: Enumerable<SkuScalarWhereInput>
  }

  export type SkuCreateNestedManyWithoutLegsInput = {
    create?: XOR<Enumerable<SkuCreateWithoutLegsInput>, Enumerable<SkuUncheckedCreateWithoutLegsInput>>
    connectOrCreate?: Enumerable<SkuCreateOrConnectWithoutLegsInput>
    createMany?: SkuCreateManyLegsInputEnvelope
    connect?: Enumerable<SkuWhereUniqueInput>
  }

  export type SkuUncheckedCreateNestedManyWithoutLegsInput = {
    create?: XOR<Enumerable<SkuCreateWithoutLegsInput>, Enumerable<SkuUncheckedCreateWithoutLegsInput>>
    connectOrCreate?: Enumerable<SkuCreateOrConnectWithoutLegsInput>
    createMany?: SkuCreateManyLegsInputEnvelope
    connect?: Enumerable<SkuWhereUniqueInput>
  }

  export type SkuUpdateManyWithoutLegsInput = {
    create?: XOR<Enumerable<SkuCreateWithoutLegsInput>, Enumerable<SkuUncheckedCreateWithoutLegsInput>>
    connectOrCreate?: Enumerable<SkuCreateOrConnectWithoutLegsInput>
    upsert?: Enumerable<SkuUpsertWithWhereUniqueWithoutLegsInput>
    createMany?: SkuCreateManyLegsInputEnvelope
    connect?: Enumerable<SkuWhereUniqueInput>
    set?: Enumerable<SkuWhereUniqueInput>
    disconnect?: Enumerable<SkuWhereUniqueInput>
    delete?: Enumerable<SkuWhereUniqueInput>
    update?: Enumerable<SkuUpdateWithWhereUniqueWithoutLegsInput>
    updateMany?: Enumerable<SkuUpdateManyWithWhereWithoutLegsInput>
    deleteMany?: Enumerable<SkuScalarWhereInput>
  }

  export type SkuUncheckedUpdateManyWithoutLegsInput = {
    create?: XOR<Enumerable<SkuCreateWithoutLegsInput>, Enumerable<SkuUncheckedCreateWithoutLegsInput>>
    connectOrCreate?: Enumerable<SkuCreateOrConnectWithoutLegsInput>
    upsert?: Enumerable<SkuUpsertWithWhereUniqueWithoutLegsInput>
    createMany?: SkuCreateManyLegsInputEnvelope
    connect?: Enumerable<SkuWhereUniqueInput>
    set?: Enumerable<SkuWhereUniqueInput>
    disconnect?: Enumerable<SkuWhereUniqueInput>
    delete?: Enumerable<SkuWhereUniqueInput>
    update?: Enumerable<SkuUpdateWithWhereUniqueWithoutLegsInput>
    updateMany?: Enumerable<SkuUpdateManyWithWhereWithoutLegsInput>
    deleteMany?: Enumerable<SkuScalarWhereInput>
  }

  export type OrderSkuCreateNestedManyWithoutOrderInput = {
    create?: XOR<Enumerable<OrderSkuCreateWithoutOrderInput>, Enumerable<OrderSkuUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<OrderSkuCreateOrConnectWithoutOrderInput>
    createMany?: OrderSkuCreateManyOrderInputEnvelope
    connect?: Enumerable<OrderSkuWhereUniqueInput>
  }

  export type OrderSkuUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<Enumerable<OrderSkuCreateWithoutOrderInput>, Enumerable<OrderSkuUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<OrderSkuCreateOrConnectWithoutOrderInput>
    createMany?: OrderSkuCreateManyOrderInputEnvelope
    connect?: Enumerable<OrderSkuWhereUniqueInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumDeliveryServiceEnumFieldUpdateOperationsInput = {
    set?: DeliveryServiceEnum
  }

  export type EnumStatusEnumFieldUpdateOperationsInput = {
    set?: StatusEnum
  }

  export type EnumSourceEnumFieldUpdateOperationsInput = {
    set?: SourceEnum
  }

  export type OrderSkuUpdateManyWithoutOrderInput = {
    create?: XOR<Enumerable<OrderSkuCreateWithoutOrderInput>, Enumerable<OrderSkuUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<OrderSkuCreateOrConnectWithoutOrderInput>
    upsert?: Enumerable<OrderSkuUpsertWithWhereUniqueWithoutOrderInput>
    createMany?: OrderSkuCreateManyOrderInputEnvelope
    connect?: Enumerable<OrderSkuWhereUniqueInput>
    set?: Enumerable<OrderSkuWhereUniqueInput>
    disconnect?: Enumerable<OrderSkuWhereUniqueInput>
    delete?: Enumerable<OrderSkuWhereUniqueInput>
    update?: Enumerable<OrderSkuUpdateWithWhereUniqueWithoutOrderInput>
    updateMany?: Enumerable<OrderSkuUpdateManyWithWhereWithoutOrderInput>
    deleteMany?: Enumerable<OrderSkuScalarWhereInput>
  }

  export type OrderSkuUncheckedUpdateManyWithoutOrderInput = {
    create?: XOR<Enumerable<OrderSkuCreateWithoutOrderInput>, Enumerable<OrderSkuUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<OrderSkuCreateOrConnectWithoutOrderInput>
    upsert?: Enumerable<OrderSkuUpsertWithWhereUniqueWithoutOrderInput>
    createMany?: OrderSkuCreateManyOrderInputEnvelope
    connect?: Enumerable<OrderSkuWhereUniqueInput>
    set?: Enumerable<OrderSkuWhereUniqueInput>
    disconnect?: Enumerable<OrderSkuWhereUniqueInput>
    delete?: Enumerable<OrderSkuWhereUniqueInput>
    update?: Enumerable<OrderSkuUpdateWithWhereUniqueWithoutOrderInput>
    updateMany?: Enumerable<OrderSkuUpdateManyWithWhereWithoutOrderInput>
    deleteMany?: Enumerable<OrderSkuScalarWhereInput>
  }

  export type OrderCreateNestedOneWithoutOrderSkusInput = {
    create?: XOR<OrderCreateWithoutOrderSkusInput, OrderUncheckedCreateWithoutOrderSkusInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderSkusInput
    connect?: OrderWhereUniqueInput
  }

  export type SkuCreateNestedOneWithoutOrderSkusInput = {
    create?: XOR<SkuCreateWithoutOrderSkusInput, SkuUncheckedCreateWithoutOrderSkusInput>
    connectOrCreate?: SkuCreateOrConnectWithoutOrderSkusInput
    connect?: SkuWhereUniqueInput
  }

  export type OrderSkuComponentCreateNestedManyWithoutOrderSkuInput = {
    create?: XOR<Enumerable<OrderSkuComponentCreateWithoutOrderSkuInput>, Enumerable<OrderSkuComponentUncheckedCreateWithoutOrderSkuInput>>
    connectOrCreate?: Enumerable<OrderSkuComponentCreateOrConnectWithoutOrderSkuInput>
    createMany?: OrderSkuComponentCreateManyOrderSkuInputEnvelope
    connect?: Enumerable<OrderSkuComponentWhereUniqueInput>
  }

  export type OrderSkuComponentUncheckedCreateNestedManyWithoutOrderSkuInput = {
    create?: XOR<Enumerable<OrderSkuComponentCreateWithoutOrderSkuInput>, Enumerable<OrderSkuComponentUncheckedCreateWithoutOrderSkuInput>>
    connectOrCreate?: Enumerable<OrderSkuComponentCreateOrConnectWithoutOrderSkuInput>
    createMany?: OrderSkuComponentCreateManyOrderSkuInputEnvelope
    connect?: Enumerable<OrderSkuComponentWhereUniqueInput>
  }

  export type OrderUpdateOneRequiredWithoutOrderSkusInput = {
    create?: XOR<OrderCreateWithoutOrderSkusInput, OrderUncheckedCreateWithoutOrderSkusInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderSkusInput
    upsert?: OrderUpsertWithoutOrderSkusInput
    connect?: OrderWhereUniqueInput
    update?: XOR<OrderUpdateWithoutOrderSkusInput, OrderUncheckedUpdateWithoutOrderSkusInput>
  }

  export type SkuUpdateOneRequiredWithoutOrderSkusInput = {
    create?: XOR<SkuCreateWithoutOrderSkusInput, SkuUncheckedCreateWithoutOrderSkusInput>
    connectOrCreate?: SkuCreateOrConnectWithoutOrderSkusInput
    upsert?: SkuUpsertWithoutOrderSkusInput
    connect?: SkuWhereUniqueInput
    update?: XOR<SkuUpdateWithoutOrderSkusInput, SkuUncheckedUpdateWithoutOrderSkusInput>
  }

  export type OrderSkuComponentUpdateManyWithoutOrderSkuInput = {
    create?: XOR<Enumerable<OrderSkuComponentCreateWithoutOrderSkuInput>, Enumerable<OrderSkuComponentUncheckedCreateWithoutOrderSkuInput>>
    connectOrCreate?: Enumerable<OrderSkuComponentCreateOrConnectWithoutOrderSkuInput>
    upsert?: Enumerable<OrderSkuComponentUpsertWithWhereUniqueWithoutOrderSkuInput>
    createMany?: OrderSkuComponentCreateManyOrderSkuInputEnvelope
    connect?: Enumerable<OrderSkuComponentWhereUniqueInput>
    set?: Enumerable<OrderSkuComponentWhereUniqueInput>
    disconnect?: Enumerable<OrderSkuComponentWhereUniqueInput>
    delete?: Enumerable<OrderSkuComponentWhereUniqueInput>
    update?: Enumerable<OrderSkuComponentUpdateWithWhereUniqueWithoutOrderSkuInput>
    updateMany?: Enumerable<OrderSkuComponentUpdateManyWithWhereWithoutOrderSkuInput>
    deleteMany?: Enumerable<OrderSkuComponentScalarWhereInput>
  }

  export type OrderSkuComponentUncheckedUpdateManyWithoutOrderSkuInput = {
    create?: XOR<Enumerable<OrderSkuComponentCreateWithoutOrderSkuInput>, Enumerable<OrderSkuComponentUncheckedCreateWithoutOrderSkuInput>>
    connectOrCreate?: Enumerable<OrderSkuComponentCreateOrConnectWithoutOrderSkuInput>
    upsert?: Enumerable<OrderSkuComponentUpsertWithWhereUniqueWithoutOrderSkuInput>
    createMany?: OrderSkuComponentCreateManyOrderSkuInputEnvelope
    connect?: Enumerable<OrderSkuComponentWhereUniqueInput>
    set?: Enumerable<OrderSkuComponentWhereUniqueInput>
    disconnect?: Enumerable<OrderSkuComponentWhereUniqueInput>
    delete?: Enumerable<OrderSkuComponentWhereUniqueInput>
    update?: Enumerable<OrderSkuComponentUpdateWithWhereUniqueWithoutOrderSkuInput>
    updateMany?: Enumerable<OrderSkuComponentUpdateManyWithWhereWithoutOrderSkuInput>
    deleteMany?: Enumerable<OrderSkuComponentScalarWhereInput>
  }

  export type OrderSkuCreateNestedOneWithoutOrderSkuComponentsInput = {
    create?: XOR<OrderSkuCreateWithoutOrderSkuComponentsInput, OrderSkuUncheckedCreateWithoutOrderSkuComponentsInput>
    connectOrCreate?: OrderSkuCreateOrConnectWithoutOrderSkuComponentsInput
    connect?: OrderSkuWhereUniqueInput
  }

  export type ComponentCreateNestedOneWithoutOrderSkuComponentsInput = {
    create?: XOR<ComponentCreateWithoutOrderSkuComponentsInput, ComponentUncheckedCreateWithoutOrderSkuComponentsInput>
    connectOrCreate?: ComponentCreateOrConnectWithoutOrderSkuComponentsInput
    connect?: ComponentWhereUniqueInput
  }

  export type OrderSkuUpdateOneRequiredWithoutOrderSkuComponentsInput = {
    create?: XOR<OrderSkuCreateWithoutOrderSkuComponentsInput, OrderSkuUncheckedCreateWithoutOrderSkuComponentsInput>
    connectOrCreate?: OrderSkuCreateOrConnectWithoutOrderSkuComponentsInput
    upsert?: OrderSkuUpsertWithoutOrderSkuComponentsInput
    connect?: OrderSkuWhereUniqueInput
    update?: XOR<OrderSkuUpdateWithoutOrderSkuComponentsInput, OrderSkuUncheckedUpdateWithoutOrderSkuComponentsInput>
  }

  export type ComponentUpdateOneRequiredWithoutOrderSkuComponentsInput = {
    create?: XOR<ComponentCreateWithoutOrderSkuComponentsInput, ComponentUncheckedCreateWithoutOrderSkuComponentsInput>
    connectOrCreate?: ComponentCreateOrConnectWithoutOrderSkuComponentsInput
    upsert?: ComponentUpsertWithoutOrderSkuComponentsInput
    connect?: ComponentWhereUniqueInput
    update?: XOR<ComponentUpdateWithoutOrderSkuComponentsInput, ComponentUncheckedUpdateWithoutOrderSkuComponentsInput>
  }

  export type SkuCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<SkuCreateWithoutProductInput>, Enumerable<SkuUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<SkuCreateOrConnectWithoutProductInput>
    createMany?: SkuCreateManyProductInputEnvelope
    connect?: Enumerable<SkuWhereUniqueInput>
  }

  export type SkuUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<SkuCreateWithoutProductInput>, Enumerable<SkuUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<SkuCreateOrConnectWithoutProductInput>
    createMany?: SkuCreateManyProductInputEnvelope
    connect?: Enumerable<SkuWhereUniqueInput>
  }

  export type SkuUpdateManyWithoutProductInput = {
    create?: XOR<Enumerable<SkuCreateWithoutProductInput>, Enumerable<SkuUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<SkuCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<SkuUpsertWithWhereUniqueWithoutProductInput>
    createMany?: SkuCreateManyProductInputEnvelope
    connect?: Enumerable<SkuWhereUniqueInput>
    set?: Enumerable<SkuWhereUniqueInput>
    disconnect?: Enumerable<SkuWhereUniqueInput>
    delete?: Enumerable<SkuWhereUniqueInput>
    update?: Enumerable<SkuUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<SkuUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<SkuScalarWhereInput>
  }

  export type SkuUncheckedUpdateManyWithoutProductInput = {
    create?: XOR<Enumerable<SkuCreateWithoutProductInput>, Enumerable<SkuUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<SkuCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<SkuUpsertWithWhereUniqueWithoutProductInput>
    createMany?: SkuCreateManyProductInputEnvelope
    connect?: Enumerable<SkuWhereUniqueInput>
    set?: Enumerable<SkuWhereUniqueInput>
    disconnect?: Enumerable<SkuWhereUniqueInput>
    delete?: Enumerable<SkuWhereUniqueInput>
    update?: Enumerable<SkuUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<SkuUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<SkuScalarWhereInput>
  }

  export type SkuCreateNestedManyWithoutSizeInput = {
    create?: XOR<Enumerable<SkuCreateWithoutSizeInput>, Enumerable<SkuUncheckedCreateWithoutSizeInput>>
    connectOrCreate?: Enumerable<SkuCreateOrConnectWithoutSizeInput>
    createMany?: SkuCreateManySizeInputEnvelope
    connect?: Enumerable<SkuWhereUniqueInput>
  }

  export type SkuUncheckedCreateNestedManyWithoutSizeInput = {
    create?: XOR<Enumerable<SkuCreateWithoutSizeInput>, Enumerable<SkuUncheckedCreateWithoutSizeInput>>
    connectOrCreate?: Enumerable<SkuCreateOrConnectWithoutSizeInput>
    createMany?: SkuCreateManySizeInputEnvelope
    connect?: Enumerable<SkuWhereUniqueInput>
  }

  export type SkuUpdateManyWithoutSizeInput = {
    create?: XOR<Enumerable<SkuCreateWithoutSizeInput>, Enumerable<SkuUncheckedCreateWithoutSizeInput>>
    connectOrCreate?: Enumerable<SkuCreateOrConnectWithoutSizeInput>
    upsert?: Enumerable<SkuUpsertWithWhereUniqueWithoutSizeInput>
    createMany?: SkuCreateManySizeInputEnvelope
    connect?: Enumerable<SkuWhereUniqueInput>
    set?: Enumerable<SkuWhereUniqueInput>
    disconnect?: Enumerable<SkuWhereUniqueInput>
    delete?: Enumerable<SkuWhereUniqueInput>
    update?: Enumerable<SkuUpdateWithWhereUniqueWithoutSizeInput>
    updateMany?: Enumerable<SkuUpdateManyWithWhereWithoutSizeInput>
    deleteMany?: Enumerable<SkuScalarWhereInput>
  }

  export type SkuUncheckedUpdateManyWithoutSizeInput = {
    create?: XOR<Enumerable<SkuCreateWithoutSizeInput>, Enumerable<SkuUncheckedCreateWithoutSizeInput>>
    connectOrCreate?: Enumerable<SkuCreateOrConnectWithoutSizeInput>
    upsert?: Enumerable<SkuUpsertWithWhereUniqueWithoutSizeInput>
    createMany?: SkuCreateManySizeInputEnvelope
    connect?: Enumerable<SkuWhereUniqueInput>
    set?: Enumerable<SkuWhereUniqueInput>
    disconnect?: Enumerable<SkuWhereUniqueInput>
    delete?: Enumerable<SkuWhereUniqueInput>
    update?: Enumerable<SkuUpdateWithWhereUniqueWithoutSizeInput>
    updateMany?: Enumerable<SkuUpdateManyWithWhereWithoutSizeInput>
    deleteMany?: Enumerable<SkuScalarWhereInput>
  }

  export type CountryCreateNestedOneWithoutSkusInput = {
    create?: XOR<CountryCreateWithoutSkusInput, CountryUncheckedCreateWithoutSkusInput>
    connectOrCreate?: CountryCreateOrConnectWithoutSkusInput
    connect?: CountryWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutSkusInput = {
    create?: XOR<CategoryCreateWithoutSkusInput, CategoryUncheckedCreateWithoutSkusInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSkusInput
    connect?: CategoryWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutSkusInput = {
    create?: XOR<ProductCreateWithoutSkusInput, ProductUncheckedCreateWithoutSkusInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSkusInput
    connect?: ProductWhereUniqueInput
  }

  export type SizeCreateNestedOneWithoutSkusInput = {
    create?: XOR<SizeCreateWithoutSkusInput, SizeUncheckedCreateWithoutSkusInput>
    connectOrCreate?: SizeCreateOrConnectWithoutSkusInput
    connect?: SizeWhereUniqueInput
  }

  export type FinishCreateNestedOneWithoutSkusInput = {
    create?: XOR<FinishCreateWithoutSkusInput, FinishUncheckedCreateWithoutSkusInput>
    connectOrCreate?: FinishCreateOrConnectWithoutSkusInput
    connect?: FinishWhereUniqueInput
  }

  export type LegsCreateNestedOneWithoutSkusInput = {
    create?: XOR<LegsCreateWithoutSkusInput, LegsUncheckedCreateWithoutSkusInput>
    connectOrCreate?: LegsCreateOrConnectWithoutSkusInput
    connect?: LegsWhereUniqueInput
  }

  export type OrderSkuCreateNestedManyWithoutSkuInput = {
    create?: XOR<Enumerable<OrderSkuCreateWithoutSkuInput>, Enumerable<OrderSkuUncheckedCreateWithoutSkuInput>>
    connectOrCreate?: Enumerable<OrderSkuCreateOrConnectWithoutSkuInput>
    createMany?: OrderSkuCreateManySkuInputEnvelope
    connect?: Enumerable<OrderSkuWhereUniqueInput>
  }

  export type SkuToComponentCreateNestedManyWithoutSkuInput = {
    create?: XOR<Enumerable<SkuToComponentCreateWithoutSkuInput>, Enumerable<SkuToComponentUncheckedCreateWithoutSkuInput>>
    connectOrCreate?: Enumerable<SkuToComponentCreateOrConnectWithoutSkuInput>
    createMany?: SkuToComponentCreateManySkuInputEnvelope
    connect?: Enumerable<SkuToComponentWhereUniqueInput>
  }

  export type OrderSkuUncheckedCreateNestedManyWithoutSkuInput = {
    create?: XOR<Enumerable<OrderSkuCreateWithoutSkuInput>, Enumerable<OrderSkuUncheckedCreateWithoutSkuInput>>
    connectOrCreate?: Enumerable<OrderSkuCreateOrConnectWithoutSkuInput>
    createMany?: OrderSkuCreateManySkuInputEnvelope
    connect?: Enumerable<OrderSkuWhereUniqueInput>
  }

  export type SkuToComponentUncheckedCreateNestedManyWithoutSkuInput = {
    create?: XOR<Enumerable<SkuToComponentCreateWithoutSkuInput>, Enumerable<SkuToComponentUncheckedCreateWithoutSkuInput>>
    connectOrCreate?: Enumerable<SkuToComponentCreateOrConnectWithoutSkuInput>
    createMany?: SkuToComponentCreateManySkuInputEnvelope
    connect?: Enumerable<SkuToComponentWhereUniqueInput>
  }

  export type CountryUpdateOneRequiredWithoutSkusInput = {
    create?: XOR<CountryCreateWithoutSkusInput, CountryUncheckedCreateWithoutSkusInput>
    connectOrCreate?: CountryCreateOrConnectWithoutSkusInput
    upsert?: CountryUpsertWithoutSkusInput
    connect?: CountryWhereUniqueInput
    update?: XOR<CountryUpdateWithoutSkusInput, CountryUncheckedUpdateWithoutSkusInput>
  }

  export type CategoryUpdateOneRequiredWithoutSkusInput = {
    create?: XOR<CategoryCreateWithoutSkusInput, CategoryUncheckedCreateWithoutSkusInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSkusInput
    upsert?: CategoryUpsertWithoutSkusInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<CategoryUpdateWithoutSkusInput, CategoryUncheckedUpdateWithoutSkusInput>
  }

  export type ProductUpdateOneRequiredWithoutSkusInput = {
    create?: XOR<ProductCreateWithoutSkusInput, ProductUncheckedCreateWithoutSkusInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSkusInput
    upsert?: ProductUpsertWithoutSkusInput
    connect?: ProductWhereUniqueInput
    update?: XOR<ProductUpdateWithoutSkusInput, ProductUncheckedUpdateWithoutSkusInput>
  }

  export type SizeUpdateOneRequiredWithoutSkusInput = {
    create?: XOR<SizeCreateWithoutSkusInput, SizeUncheckedCreateWithoutSkusInput>
    connectOrCreate?: SizeCreateOrConnectWithoutSkusInput
    upsert?: SizeUpsertWithoutSkusInput
    connect?: SizeWhereUniqueInput
    update?: XOR<SizeUpdateWithoutSkusInput, SizeUncheckedUpdateWithoutSkusInput>
  }

  export type FinishUpdateOneRequiredWithoutSkusInput = {
    create?: XOR<FinishCreateWithoutSkusInput, FinishUncheckedCreateWithoutSkusInput>
    connectOrCreate?: FinishCreateOrConnectWithoutSkusInput
    upsert?: FinishUpsertWithoutSkusInput
    connect?: FinishWhereUniqueInput
    update?: XOR<FinishUpdateWithoutSkusInput, FinishUncheckedUpdateWithoutSkusInput>
  }

  export type LegsUpdateOneRequiredWithoutSkusInput = {
    create?: XOR<LegsCreateWithoutSkusInput, LegsUncheckedCreateWithoutSkusInput>
    connectOrCreate?: LegsCreateOrConnectWithoutSkusInput
    upsert?: LegsUpsertWithoutSkusInput
    connect?: LegsWhereUniqueInput
    update?: XOR<LegsUpdateWithoutSkusInput, LegsUncheckedUpdateWithoutSkusInput>
  }

  export type OrderSkuUpdateManyWithoutSkuInput = {
    create?: XOR<Enumerable<OrderSkuCreateWithoutSkuInput>, Enumerable<OrderSkuUncheckedCreateWithoutSkuInput>>
    connectOrCreate?: Enumerable<OrderSkuCreateOrConnectWithoutSkuInput>
    upsert?: Enumerable<OrderSkuUpsertWithWhereUniqueWithoutSkuInput>
    createMany?: OrderSkuCreateManySkuInputEnvelope
    connect?: Enumerable<OrderSkuWhereUniqueInput>
    set?: Enumerable<OrderSkuWhereUniqueInput>
    disconnect?: Enumerable<OrderSkuWhereUniqueInput>
    delete?: Enumerable<OrderSkuWhereUniqueInput>
    update?: Enumerable<OrderSkuUpdateWithWhereUniqueWithoutSkuInput>
    updateMany?: Enumerable<OrderSkuUpdateManyWithWhereWithoutSkuInput>
    deleteMany?: Enumerable<OrderSkuScalarWhereInput>
  }

  export type SkuToComponentUpdateManyWithoutSkuInput = {
    create?: XOR<Enumerable<SkuToComponentCreateWithoutSkuInput>, Enumerable<SkuToComponentUncheckedCreateWithoutSkuInput>>
    connectOrCreate?: Enumerable<SkuToComponentCreateOrConnectWithoutSkuInput>
    upsert?: Enumerable<SkuToComponentUpsertWithWhereUniqueWithoutSkuInput>
    createMany?: SkuToComponentCreateManySkuInputEnvelope
    connect?: Enumerable<SkuToComponentWhereUniqueInput>
    set?: Enumerable<SkuToComponentWhereUniqueInput>
    disconnect?: Enumerable<SkuToComponentWhereUniqueInput>
    delete?: Enumerable<SkuToComponentWhereUniqueInput>
    update?: Enumerable<SkuToComponentUpdateWithWhereUniqueWithoutSkuInput>
    updateMany?: Enumerable<SkuToComponentUpdateManyWithWhereWithoutSkuInput>
    deleteMany?: Enumerable<SkuToComponentScalarWhereInput>
  }

  export type OrderSkuUncheckedUpdateManyWithoutSkuInput = {
    create?: XOR<Enumerable<OrderSkuCreateWithoutSkuInput>, Enumerable<OrderSkuUncheckedCreateWithoutSkuInput>>
    connectOrCreate?: Enumerable<OrderSkuCreateOrConnectWithoutSkuInput>
    upsert?: Enumerable<OrderSkuUpsertWithWhereUniqueWithoutSkuInput>
    createMany?: OrderSkuCreateManySkuInputEnvelope
    connect?: Enumerable<OrderSkuWhereUniqueInput>
    set?: Enumerable<OrderSkuWhereUniqueInput>
    disconnect?: Enumerable<OrderSkuWhereUniqueInput>
    delete?: Enumerable<OrderSkuWhereUniqueInput>
    update?: Enumerable<OrderSkuUpdateWithWhereUniqueWithoutSkuInput>
    updateMany?: Enumerable<OrderSkuUpdateManyWithWhereWithoutSkuInput>
    deleteMany?: Enumerable<OrderSkuScalarWhereInput>
  }

  export type SkuToComponentUncheckedUpdateManyWithoutSkuInput = {
    create?: XOR<Enumerable<SkuToComponentCreateWithoutSkuInput>, Enumerable<SkuToComponentUncheckedCreateWithoutSkuInput>>
    connectOrCreate?: Enumerable<SkuToComponentCreateOrConnectWithoutSkuInput>
    upsert?: Enumerable<SkuToComponentUpsertWithWhereUniqueWithoutSkuInput>
    createMany?: SkuToComponentCreateManySkuInputEnvelope
    connect?: Enumerable<SkuToComponentWhereUniqueInput>
    set?: Enumerable<SkuToComponentWhereUniqueInput>
    disconnect?: Enumerable<SkuToComponentWhereUniqueInput>
    delete?: Enumerable<SkuToComponentWhereUniqueInput>
    update?: Enumerable<SkuToComponentUpdateWithWhereUniqueWithoutSkuInput>
    updateMany?: Enumerable<SkuToComponentUpdateManyWithWhereWithoutSkuInput>
    deleteMany?: Enumerable<SkuToComponentScalarWhereInput>
  }

  export type ComponentCreateNestedOneWithoutSkusInput = {
    create?: XOR<ComponentCreateWithoutSkusInput, ComponentUncheckedCreateWithoutSkusInput>
    connectOrCreate?: ComponentCreateOrConnectWithoutSkusInput
    connect?: ComponentWhereUniqueInput
  }

  export type SkuCreateNestedOneWithoutComponentsInput = {
    create?: XOR<SkuCreateWithoutComponentsInput, SkuUncheckedCreateWithoutComponentsInput>
    connectOrCreate?: SkuCreateOrConnectWithoutComponentsInput
    connect?: SkuWhereUniqueInput
  }

  export type ComponentUpdateOneRequiredWithoutSkusInput = {
    create?: XOR<ComponentCreateWithoutSkusInput, ComponentUncheckedCreateWithoutSkusInput>
    connectOrCreate?: ComponentCreateOrConnectWithoutSkusInput
    upsert?: ComponentUpsertWithoutSkusInput
    connect?: ComponentWhereUniqueInput
    update?: XOR<ComponentUpdateWithoutSkusInput, ComponentUncheckedUpdateWithoutSkusInput>
  }

  export type SkuUpdateOneRequiredWithoutComponentsInput = {
    create?: XOR<SkuCreateWithoutComponentsInput, SkuUncheckedCreateWithoutComponentsInput>
    connectOrCreate?: SkuCreateOrConnectWithoutComponentsInput
    upsert?: SkuUpsertWithoutComponentsInput
    connect?: SkuWhereUniqueInput
    update?: XOR<SkuUpdateWithoutComponentsInput, SkuUncheckedUpdateWithoutComponentsInput>
  }

  export type ComponentCreateNestedManyWithoutTypeInput = {
    create?: XOR<Enumerable<ComponentCreateWithoutTypeInput>, Enumerable<ComponentUncheckedCreateWithoutTypeInput>>
    connectOrCreate?: Enumerable<ComponentCreateOrConnectWithoutTypeInput>
    createMany?: ComponentCreateManyTypeInputEnvelope
    connect?: Enumerable<ComponentWhereUniqueInput>
  }

  export type ComponentUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<Enumerable<ComponentCreateWithoutTypeInput>, Enumerable<ComponentUncheckedCreateWithoutTypeInput>>
    connectOrCreate?: Enumerable<ComponentCreateOrConnectWithoutTypeInput>
    createMany?: ComponentCreateManyTypeInputEnvelope
    connect?: Enumerable<ComponentWhereUniqueInput>
  }

  export type ComponentUpdateManyWithoutTypeInput = {
    create?: XOR<Enumerable<ComponentCreateWithoutTypeInput>, Enumerable<ComponentUncheckedCreateWithoutTypeInput>>
    connectOrCreate?: Enumerable<ComponentCreateOrConnectWithoutTypeInput>
    upsert?: Enumerable<ComponentUpsertWithWhereUniqueWithoutTypeInput>
    createMany?: ComponentCreateManyTypeInputEnvelope
    connect?: Enumerable<ComponentWhereUniqueInput>
    set?: Enumerable<ComponentWhereUniqueInput>
    disconnect?: Enumerable<ComponentWhereUniqueInput>
    delete?: Enumerable<ComponentWhereUniqueInput>
    update?: Enumerable<ComponentUpdateWithWhereUniqueWithoutTypeInput>
    updateMany?: Enumerable<ComponentUpdateManyWithWhereWithoutTypeInput>
    deleteMany?: Enumerable<ComponentScalarWhereInput>
  }

  export type ComponentUncheckedUpdateManyWithoutTypeInput = {
    create?: XOR<Enumerable<ComponentCreateWithoutTypeInput>, Enumerable<ComponentUncheckedCreateWithoutTypeInput>>
    connectOrCreate?: Enumerable<ComponentCreateOrConnectWithoutTypeInput>
    upsert?: Enumerable<ComponentUpsertWithWhereUniqueWithoutTypeInput>
    createMany?: ComponentCreateManyTypeInputEnvelope
    connect?: Enumerable<ComponentWhereUniqueInput>
    set?: Enumerable<ComponentWhereUniqueInput>
    disconnect?: Enumerable<ComponentWhereUniqueInput>
    delete?: Enumerable<ComponentWhereUniqueInput>
    update?: Enumerable<ComponentUpdateWithWhereUniqueWithoutTypeInput>
    updateMany?: Enumerable<ComponentUpdateManyWithWhereWithoutTypeInput>
    deleteMany?: Enumerable<ComponentScalarWhereInput>
  }

  export type OrderSkuComponentCreateNestedManyWithoutComponentInput = {
    create?: XOR<Enumerable<OrderSkuComponentCreateWithoutComponentInput>, Enumerable<OrderSkuComponentUncheckedCreateWithoutComponentInput>>
    connectOrCreate?: Enumerable<OrderSkuComponentCreateOrConnectWithoutComponentInput>
    createMany?: OrderSkuComponentCreateManyComponentInputEnvelope
    connect?: Enumerable<OrderSkuComponentWhereUniqueInput>
  }

  export type SkuToComponentCreateNestedManyWithoutComponentInput = {
    create?: XOR<Enumerable<SkuToComponentCreateWithoutComponentInput>, Enumerable<SkuToComponentUncheckedCreateWithoutComponentInput>>
    connectOrCreate?: Enumerable<SkuToComponentCreateOrConnectWithoutComponentInput>
    createMany?: SkuToComponentCreateManyComponentInputEnvelope
    connect?: Enumerable<SkuToComponentWhereUniqueInput>
  }

  export type ComponentCreateNestedOneWithoutChildComponentInput = {
    create?: XOR<ComponentCreateWithoutChildComponentInput, ComponentUncheckedCreateWithoutChildComponentInput>
    connectOrCreate?: ComponentCreateOrConnectWithoutChildComponentInput
    connect?: ComponentWhereUniqueInput
  }

  export type ComponentCreateNestedOneWithoutParentComponentInput = {
    create?: XOR<ComponentCreateWithoutParentComponentInput, ComponentUncheckedCreateWithoutParentComponentInput>
    connectOrCreate?: ComponentCreateOrConnectWithoutParentComponentInput
    connect?: ComponentWhereUniqueInput
  }

  export type ComponentTypeCreateNestedOneWithoutComponentsInput = {
    create?: XOR<ComponentTypeCreateWithoutComponentsInput, ComponentTypeUncheckedCreateWithoutComponentsInput>
    connectOrCreate?: ComponentTypeCreateOrConnectWithoutComponentsInput
    connect?: ComponentTypeWhereUniqueInput
  }

  export type OrderSkuComponentUncheckedCreateNestedManyWithoutComponentInput = {
    create?: XOR<Enumerable<OrderSkuComponentCreateWithoutComponentInput>, Enumerable<OrderSkuComponentUncheckedCreateWithoutComponentInput>>
    connectOrCreate?: Enumerable<OrderSkuComponentCreateOrConnectWithoutComponentInput>
    createMany?: OrderSkuComponentCreateManyComponentInputEnvelope
    connect?: Enumerable<OrderSkuComponentWhereUniqueInput>
  }

  export type SkuToComponentUncheckedCreateNestedManyWithoutComponentInput = {
    create?: XOR<Enumerable<SkuToComponentCreateWithoutComponentInput>, Enumerable<SkuToComponentUncheckedCreateWithoutComponentInput>>
    connectOrCreate?: Enumerable<SkuToComponentCreateOrConnectWithoutComponentInput>
    createMany?: SkuToComponentCreateManyComponentInputEnvelope
    connect?: Enumerable<SkuToComponentWhereUniqueInput>
  }

  export type ComponentUncheckedCreateNestedOneWithoutParentComponentInput = {
    create?: XOR<ComponentCreateWithoutParentComponentInput, ComponentUncheckedCreateWithoutParentComponentInput>
    connectOrCreate?: ComponentCreateOrConnectWithoutParentComponentInput
    connect?: ComponentWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type OrderSkuComponentUpdateManyWithoutComponentInput = {
    create?: XOR<Enumerable<OrderSkuComponentCreateWithoutComponentInput>, Enumerable<OrderSkuComponentUncheckedCreateWithoutComponentInput>>
    connectOrCreate?: Enumerable<OrderSkuComponentCreateOrConnectWithoutComponentInput>
    upsert?: Enumerable<OrderSkuComponentUpsertWithWhereUniqueWithoutComponentInput>
    createMany?: OrderSkuComponentCreateManyComponentInputEnvelope
    connect?: Enumerable<OrderSkuComponentWhereUniqueInput>
    set?: Enumerable<OrderSkuComponentWhereUniqueInput>
    disconnect?: Enumerable<OrderSkuComponentWhereUniqueInput>
    delete?: Enumerable<OrderSkuComponentWhereUniqueInput>
    update?: Enumerable<OrderSkuComponentUpdateWithWhereUniqueWithoutComponentInput>
    updateMany?: Enumerable<OrderSkuComponentUpdateManyWithWhereWithoutComponentInput>
    deleteMany?: Enumerable<OrderSkuComponentScalarWhereInput>
  }

  export type SkuToComponentUpdateManyWithoutComponentInput = {
    create?: XOR<Enumerable<SkuToComponentCreateWithoutComponentInput>, Enumerable<SkuToComponentUncheckedCreateWithoutComponentInput>>
    connectOrCreate?: Enumerable<SkuToComponentCreateOrConnectWithoutComponentInput>
    upsert?: Enumerable<SkuToComponentUpsertWithWhereUniqueWithoutComponentInput>
    createMany?: SkuToComponentCreateManyComponentInputEnvelope
    connect?: Enumerable<SkuToComponentWhereUniqueInput>
    set?: Enumerable<SkuToComponentWhereUniqueInput>
    disconnect?: Enumerable<SkuToComponentWhereUniqueInput>
    delete?: Enumerable<SkuToComponentWhereUniqueInput>
    update?: Enumerable<SkuToComponentUpdateWithWhereUniqueWithoutComponentInput>
    updateMany?: Enumerable<SkuToComponentUpdateManyWithWhereWithoutComponentInput>
    deleteMany?: Enumerable<SkuToComponentScalarWhereInput>
  }

  export type ComponentUpdateOneWithoutChildComponentInput = {
    create?: XOR<ComponentCreateWithoutChildComponentInput, ComponentUncheckedCreateWithoutChildComponentInput>
    connectOrCreate?: ComponentCreateOrConnectWithoutChildComponentInput
    upsert?: ComponentUpsertWithoutChildComponentInput
    connect?: ComponentWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<ComponentUpdateWithoutChildComponentInput, ComponentUncheckedUpdateWithoutChildComponentInput>
  }

  export type ComponentUpdateOneWithoutParentComponentInput = {
    create?: XOR<ComponentCreateWithoutParentComponentInput, ComponentUncheckedCreateWithoutParentComponentInput>
    connectOrCreate?: ComponentCreateOrConnectWithoutParentComponentInput
    upsert?: ComponentUpsertWithoutParentComponentInput
    connect?: ComponentWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<ComponentUpdateWithoutParentComponentInput, ComponentUncheckedUpdateWithoutParentComponentInput>
  }

  export type ComponentTypeUpdateOneRequiredWithoutComponentsInput = {
    create?: XOR<ComponentTypeCreateWithoutComponentsInput, ComponentTypeUncheckedCreateWithoutComponentsInput>
    connectOrCreate?: ComponentTypeCreateOrConnectWithoutComponentsInput
    upsert?: ComponentTypeUpsertWithoutComponentsInput
    connect?: ComponentTypeWhereUniqueInput
    update?: XOR<ComponentTypeUpdateWithoutComponentsInput, ComponentTypeUncheckedUpdateWithoutComponentsInput>
  }

  export type OrderSkuComponentUncheckedUpdateManyWithoutComponentInput = {
    create?: XOR<Enumerable<OrderSkuComponentCreateWithoutComponentInput>, Enumerable<OrderSkuComponentUncheckedCreateWithoutComponentInput>>
    connectOrCreate?: Enumerable<OrderSkuComponentCreateOrConnectWithoutComponentInput>
    upsert?: Enumerable<OrderSkuComponentUpsertWithWhereUniqueWithoutComponentInput>
    createMany?: OrderSkuComponentCreateManyComponentInputEnvelope
    connect?: Enumerable<OrderSkuComponentWhereUniqueInput>
    set?: Enumerable<OrderSkuComponentWhereUniqueInput>
    disconnect?: Enumerable<OrderSkuComponentWhereUniqueInput>
    delete?: Enumerable<OrderSkuComponentWhereUniqueInput>
    update?: Enumerable<OrderSkuComponentUpdateWithWhereUniqueWithoutComponentInput>
    updateMany?: Enumerable<OrderSkuComponentUpdateManyWithWhereWithoutComponentInput>
    deleteMany?: Enumerable<OrderSkuComponentScalarWhereInput>
  }

  export type SkuToComponentUncheckedUpdateManyWithoutComponentInput = {
    create?: XOR<Enumerable<SkuToComponentCreateWithoutComponentInput>, Enumerable<SkuToComponentUncheckedCreateWithoutComponentInput>>
    connectOrCreate?: Enumerable<SkuToComponentCreateOrConnectWithoutComponentInput>
    upsert?: Enumerable<SkuToComponentUpsertWithWhereUniqueWithoutComponentInput>
    createMany?: SkuToComponentCreateManyComponentInputEnvelope
    connect?: Enumerable<SkuToComponentWhereUniqueInput>
    set?: Enumerable<SkuToComponentWhereUniqueInput>
    disconnect?: Enumerable<SkuToComponentWhereUniqueInput>
    delete?: Enumerable<SkuToComponentWhereUniqueInput>
    update?: Enumerable<SkuToComponentUpdateWithWhereUniqueWithoutComponentInput>
    updateMany?: Enumerable<SkuToComponentUpdateManyWithWhereWithoutComponentInput>
    deleteMany?: Enumerable<SkuToComponentScalarWhereInput>
  }

  export type ComponentUncheckedUpdateOneWithoutParentComponentInput = {
    create?: XOR<ComponentCreateWithoutParentComponentInput, ComponentUncheckedCreateWithoutParentComponentInput>
    connectOrCreate?: ComponentCreateOrConnectWithoutParentComponentInput
    upsert?: ComponentUpsertWithoutParentComponentInput
    connect?: ComponentWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<ComponentUpdateWithoutParentComponentInput, ComponentUncheckedUpdateWithoutParentComponentInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringFilter
    _max?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDateTimeNullableFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDateTimeFilter
  }

  export type NestedEnumDeliveryServiceEnumFilter = {
    equals?: DeliveryServiceEnum
    in?: Enumerable<DeliveryServiceEnum>
    notIn?: Enumerable<DeliveryServiceEnum>
    not?: NestedEnumDeliveryServiceEnumFilter | DeliveryServiceEnum
  }

  export type NestedEnumStatusEnumFilter = {
    equals?: StatusEnum
    in?: Enumerable<StatusEnum>
    notIn?: Enumerable<StatusEnum>
    not?: NestedEnumStatusEnumFilter | StatusEnum
  }

  export type NestedEnumSourceEnumFilter = {
    equals?: SourceEnum
    in?: Enumerable<SourceEnum>
    notIn?: Enumerable<SourceEnum>
    not?: NestedEnumSourceEnumFilter | SourceEnum
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _avg?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedIntFilter
    _min?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedIntFilter
    _max?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedEnumDeliveryServiceEnumWithAggregatesFilter = {
    equals?: DeliveryServiceEnum
    in?: Enumerable<DeliveryServiceEnum>
    notIn?: Enumerable<DeliveryServiceEnum>
    not?: NestedEnumDeliveryServiceEnumWithAggregatesFilter | DeliveryServiceEnum
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedEnumDeliveryServiceEnumFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedEnumDeliveryServiceEnumFilter
    _max?: NestedEnumDeliveryServiceEnumFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedEnumDeliveryServiceEnumFilter
  }

  export type NestedEnumStatusEnumWithAggregatesFilter = {
    equals?: StatusEnum
    in?: Enumerable<StatusEnum>
    notIn?: Enumerable<StatusEnum>
    not?: NestedEnumStatusEnumWithAggregatesFilter | StatusEnum
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedEnumStatusEnumFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedEnumStatusEnumFilter
    _max?: NestedEnumStatusEnumFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedEnumStatusEnumFilter
  }

  export type NestedEnumSourceEnumWithAggregatesFilter = {
    equals?: SourceEnum
    in?: Enumerable<SourceEnum>
    notIn?: Enumerable<SourceEnum>
    not?: NestedEnumSourceEnumWithAggregatesFilter | SourceEnum
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedEnumSourceEnumFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedEnumSourceEnumFilter
    _max?: NestedEnumSourceEnumFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedEnumSourceEnumFilter
  }
  export type NestedJsonFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase>, Exclude<keyof Required<NestedJsonFilterBase>, 'path'>>,
        Required<NestedJsonFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase>, 'path'>>

  export type NestedJsonFilterBase = {
    equals?: InputJsonValue
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue
    array_starts_with?: InputJsonValue
    array_ends_with?: InputJsonValue
    not?: InputJsonValue
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedBoolFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedBoolFilter
    _max?: NestedBoolFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedBoolFilter
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    providerType: string
    providerId: string
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    accessTokenExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    providerType: string
    providerId: string
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    accessTokenExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: Enumerable<AccountCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    expires: Date | string
    sessionToken: string
    accessToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    expires: Date | string
    sessionToken: string
    accessToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: Enumerable<SessionCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutAccountsInput>
  }

  export type AccountScalarWhereInput = {
    AND?: Enumerable<AccountScalarWhereInput>
    OR?: Enumerable<AccountScalarWhereInput>
    NOT?: Enumerable<AccountScalarWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    providerType?: StringFilter | string
    providerId?: StringFilter | string
    providerAccountId?: StringFilter | string
    refreshToken?: StringNullableFilter | string | null
    accessToken?: StringNullableFilter | string | null
    accessTokenExpires?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutSessionsInput>
  }

  export type SessionScalarWhereInput = {
    AND?: Enumerable<SessionScalarWhereInput>
    OR?: Enumerable<SessionScalarWhereInput>
    NOT?: Enumerable<SessionScalarWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    expires?: DateTimeFilter | Date | string
    sessionToken?: StringFilter | string
    accessToken?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type SkuCreateWithoutCategoryInput = {
    id: string
    boxQuantity: number
    country: CountryCreateNestedOneWithoutSkusInput
    product: ProductCreateNestedOneWithoutSkusInput
    size: SizeCreateNestedOneWithoutSkusInput
    finish: FinishCreateNestedOneWithoutSkusInput
    legs: LegsCreateNestedOneWithoutSkusInput
    orderSkus?: OrderSkuCreateNestedManyWithoutSkuInput
    components?: SkuToComponentCreateNestedManyWithoutSkuInput
  }

  export type SkuUncheckedCreateWithoutCategoryInput = {
    id: string
    countryId: string
    productId: string
    sizeId: string
    finishId: string
    legsId: string
    boxQuantity: number
    orderSkus?: OrderSkuUncheckedCreateNestedManyWithoutSkuInput
    components?: SkuToComponentUncheckedCreateNestedManyWithoutSkuInput
  }

  export type SkuCreateOrConnectWithoutCategoryInput = {
    where: SkuWhereUniqueInput
    create: XOR<SkuCreateWithoutCategoryInput, SkuUncheckedCreateWithoutCategoryInput>
  }

  export type SkuCreateManyCategoryInputEnvelope = {
    data: Enumerable<SkuCreateManyCategoryInput>
    skipDuplicates?: boolean
  }

  export type SkuUpsertWithWhereUniqueWithoutCategoryInput = {
    where: SkuWhereUniqueInput
    update: XOR<SkuUpdateWithoutCategoryInput, SkuUncheckedUpdateWithoutCategoryInput>
    create: XOR<SkuCreateWithoutCategoryInput, SkuUncheckedCreateWithoutCategoryInput>
  }

  export type SkuUpdateWithWhereUniqueWithoutCategoryInput = {
    where: SkuWhereUniqueInput
    data: XOR<SkuUpdateWithoutCategoryInput, SkuUncheckedUpdateWithoutCategoryInput>
  }

  export type SkuUpdateManyWithWhereWithoutCategoryInput = {
    where: SkuScalarWhereInput
    data: XOR<SkuUpdateManyMutationInput, SkuUncheckedUpdateManyWithoutSkusInput>
  }

  export type SkuScalarWhereInput = {
    AND?: Enumerable<SkuScalarWhereInput>
    OR?: Enumerable<SkuScalarWhereInput>
    NOT?: Enumerable<SkuScalarWhereInput>
    id?: StringFilter | string
    countryId?: StringFilter | string
    categoryId?: StringFilter | string
    productId?: StringFilter | string
    sizeId?: StringFilter | string
    finishId?: StringFilter | string
    legsId?: StringFilter | string
    boxQuantity?: IntFilter | number
  }

  export type SkuCreateWithoutCountryInput = {
    id: string
    boxQuantity: number
    category: CategoryCreateNestedOneWithoutSkusInput
    product: ProductCreateNestedOneWithoutSkusInput
    size: SizeCreateNestedOneWithoutSkusInput
    finish: FinishCreateNestedOneWithoutSkusInput
    legs: LegsCreateNestedOneWithoutSkusInput
    orderSkus?: OrderSkuCreateNestedManyWithoutSkuInput
    components?: SkuToComponentCreateNestedManyWithoutSkuInput
  }

  export type SkuUncheckedCreateWithoutCountryInput = {
    id: string
    categoryId: string
    productId: string
    sizeId: string
    finishId: string
    legsId: string
    boxQuantity: number
    orderSkus?: OrderSkuUncheckedCreateNestedManyWithoutSkuInput
    components?: SkuToComponentUncheckedCreateNestedManyWithoutSkuInput
  }

  export type SkuCreateOrConnectWithoutCountryInput = {
    where: SkuWhereUniqueInput
    create: XOR<SkuCreateWithoutCountryInput, SkuUncheckedCreateWithoutCountryInput>
  }

  export type SkuCreateManyCountryInputEnvelope = {
    data: Enumerable<SkuCreateManyCountryInput>
    skipDuplicates?: boolean
  }

  export type SkuUpsertWithWhereUniqueWithoutCountryInput = {
    where: SkuWhereUniqueInput
    update: XOR<SkuUpdateWithoutCountryInput, SkuUncheckedUpdateWithoutCountryInput>
    create: XOR<SkuCreateWithoutCountryInput, SkuUncheckedCreateWithoutCountryInput>
  }

  export type SkuUpdateWithWhereUniqueWithoutCountryInput = {
    where: SkuWhereUniqueInput
    data: XOR<SkuUpdateWithoutCountryInput, SkuUncheckedUpdateWithoutCountryInput>
  }

  export type SkuUpdateManyWithWhereWithoutCountryInput = {
    where: SkuScalarWhereInput
    data: XOR<SkuUpdateManyMutationInput, SkuUncheckedUpdateManyWithoutSkusInput>
  }

  export type SkuCreateWithoutFinishInput = {
    id: string
    boxQuantity: number
    country: CountryCreateNestedOneWithoutSkusInput
    category: CategoryCreateNestedOneWithoutSkusInput
    product: ProductCreateNestedOneWithoutSkusInput
    size: SizeCreateNestedOneWithoutSkusInput
    legs: LegsCreateNestedOneWithoutSkusInput
    orderSkus?: OrderSkuCreateNestedManyWithoutSkuInput
    components?: SkuToComponentCreateNestedManyWithoutSkuInput
  }

  export type SkuUncheckedCreateWithoutFinishInput = {
    id: string
    countryId: string
    categoryId: string
    productId: string
    sizeId: string
    legsId: string
    boxQuantity: number
    orderSkus?: OrderSkuUncheckedCreateNestedManyWithoutSkuInput
    components?: SkuToComponentUncheckedCreateNestedManyWithoutSkuInput
  }

  export type SkuCreateOrConnectWithoutFinishInput = {
    where: SkuWhereUniqueInput
    create: XOR<SkuCreateWithoutFinishInput, SkuUncheckedCreateWithoutFinishInput>
  }

  export type SkuCreateManyFinishInputEnvelope = {
    data: Enumerable<SkuCreateManyFinishInput>
    skipDuplicates?: boolean
  }

  export type SkuUpsertWithWhereUniqueWithoutFinishInput = {
    where: SkuWhereUniqueInput
    update: XOR<SkuUpdateWithoutFinishInput, SkuUncheckedUpdateWithoutFinishInput>
    create: XOR<SkuCreateWithoutFinishInput, SkuUncheckedCreateWithoutFinishInput>
  }

  export type SkuUpdateWithWhereUniqueWithoutFinishInput = {
    where: SkuWhereUniqueInput
    data: XOR<SkuUpdateWithoutFinishInput, SkuUncheckedUpdateWithoutFinishInput>
  }

  export type SkuUpdateManyWithWhereWithoutFinishInput = {
    where: SkuScalarWhereInput
    data: XOR<SkuUpdateManyMutationInput, SkuUncheckedUpdateManyWithoutSkusInput>
  }

  export type SkuCreateWithoutLegsInput = {
    id: string
    boxQuantity: number
    country: CountryCreateNestedOneWithoutSkusInput
    category: CategoryCreateNestedOneWithoutSkusInput
    product: ProductCreateNestedOneWithoutSkusInput
    size: SizeCreateNestedOneWithoutSkusInput
    finish: FinishCreateNestedOneWithoutSkusInput
    orderSkus?: OrderSkuCreateNestedManyWithoutSkuInput
    components?: SkuToComponentCreateNestedManyWithoutSkuInput
  }

  export type SkuUncheckedCreateWithoutLegsInput = {
    id: string
    countryId: string
    categoryId: string
    productId: string
    sizeId: string
    finishId: string
    boxQuantity: number
    orderSkus?: OrderSkuUncheckedCreateNestedManyWithoutSkuInput
    components?: SkuToComponentUncheckedCreateNestedManyWithoutSkuInput
  }

  export type SkuCreateOrConnectWithoutLegsInput = {
    where: SkuWhereUniqueInput
    create: XOR<SkuCreateWithoutLegsInput, SkuUncheckedCreateWithoutLegsInput>
  }

  export type SkuCreateManyLegsInputEnvelope = {
    data: Enumerable<SkuCreateManyLegsInput>
    skipDuplicates?: boolean
  }

  export type SkuUpsertWithWhereUniqueWithoutLegsInput = {
    where: SkuWhereUniqueInput
    update: XOR<SkuUpdateWithoutLegsInput, SkuUncheckedUpdateWithoutLegsInput>
    create: XOR<SkuCreateWithoutLegsInput, SkuUncheckedCreateWithoutLegsInput>
  }

  export type SkuUpdateWithWhereUniqueWithoutLegsInput = {
    where: SkuWhereUniqueInput
    data: XOR<SkuUpdateWithoutLegsInput, SkuUncheckedUpdateWithoutLegsInput>
  }

  export type SkuUpdateManyWithWhereWithoutLegsInput = {
    where: SkuScalarWhereInput
    data: XOR<SkuUpdateManyMutationInput, SkuUncheckedUpdateManyWithoutSkusInput>
  }

  export type OrderSkuCreateWithoutOrderInput = {
    id: string
    status?: StatusEnum
    comment?: string
    quantity: number
    sku: SkuCreateNestedOneWithoutOrderSkusInput
    orderSkuComponents?: OrderSkuComponentCreateNestedManyWithoutOrderSkuInput
  }

  export type OrderSkuUncheckedCreateWithoutOrderInput = {
    id: string
    status?: StatusEnum
    comment?: string
    quantity: number
    skuId: string
    orderSkuComponents?: OrderSkuComponentUncheckedCreateNestedManyWithoutOrderSkuInput
  }

  export type OrderSkuCreateOrConnectWithoutOrderInput = {
    where: OrderSkuWhereUniqueInput
    create: XOR<OrderSkuCreateWithoutOrderInput, OrderSkuUncheckedCreateWithoutOrderInput>
  }

  export type OrderSkuCreateManyOrderInputEnvelope = {
    data: Enumerable<OrderSkuCreateManyOrderInput>
    skipDuplicates?: boolean
  }

  export type OrderSkuUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderSkuWhereUniqueInput
    update: XOR<OrderSkuUpdateWithoutOrderInput, OrderSkuUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderSkuCreateWithoutOrderInput, OrderSkuUncheckedCreateWithoutOrderInput>
  }

  export type OrderSkuUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderSkuWhereUniqueInput
    data: XOR<OrderSkuUpdateWithoutOrderInput, OrderSkuUncheckedUpdateWithoutOrderInput>
  }

  export type OrderSkuUpdateManyWithWhereWithoutOrderInput = {
    where: OrderSkuScalarWhereInput
    data: XOR<OrderSkuUpdateManyMutationInput, OrderSkuUncheckedUpdateManyWithoutOrderSkusInput>
  }

  export type OrderSkuScalarWhereInput = {
    AND?: Enumerable<OrderSkuScalarWhereInput>
    OR?: Enumerable<OrderSkuScalarWhereInput>
    NOT?: Enumerable<OrderSkuScalarWhereInput>
    id?: StringFilter | string
    status?: EnumStatusEnumFilter | StatusEnum
    comment?: StringFilter | string
    quantity?: IntFilter | number
    orderId?: IntFilter | number
    skuId?: StringFilter | string
  }

  export type OrderCreateWithoutOrderSkusInput = {
    id: number
    linnworksId: string
    receivedDate: Date | string
    deliveryDate: Date | string
    manufactureDate: Date | string
    dispatchDate: Date | string
    boxQuantity: number
    deliveryService?: DeliveryServiceEnum
    status?: StatusEnum
    comment?: string
    source?: SourceEnum
  }

  export type OrderUncheckedCreateWithoutOrderSkusInput = {
    id: number
    linnworksId: string
    receivedDate: Date | string
    deliveryDate: Date | string
    manufactureDate: Date | string
    dispatchDate: Date | string
    boxQuantity: number
    deliveryService?: DeliveryServiceEnum
    status?: StatusEnum
    comment?: string
    source?: SourceEnum
  }

  export type OrderCreateOrConnectWithoutOrderSkusInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderSkusInput, OrderUncheckedCreateWithoutOrderSkusInput>
  }

  export type SkuCreateWithoutOrderSkusInput = {
    id: string
    boxQuantity: number
    country: CountryCreateNestedOneWithoutSkusInput
    category: CategoryCreateNestedOneWithoutSkusInput
    product: ProductCreateNestedOneWithoutSkusInput
    size: SizeCreateNestedOneWithoutSkusInput
    finish: FinishCreateNestedOneWithoutSkusInput
    legs: LegsCreateNestedOneWithoutSkusInput
    components?: SkuToComponentCreateNestedManyWithoutSkuInput
  }

  export type SkuUncheckedCreateWithoutOrderSkusInput = {
    id: string
    countryId: string
    categoryId: string
    productId: string
    sizeId: string
    finishId: string
    legsId: string
    boxQuantity: number
    components?: SkuToComponentUncheckedCreateNestedManyWithoutSkuInput
  }

  export type SkuCreateOrConnectWithoutOrderSkusInput = {
    where: SkuWhereUniqueInput
    create: XOR<SkuCreateWithoutOrderSkusInput, SkuUncheckedCreateWithoutOrderSkusInput>
  }

  export type OrderSkuComponentCreateWithoutOrderSkuInput = {
    id: string
    status?: StatusEnum
    comment?: string
    bayNo?: string
    stageStatuses?: InputJsonValue
    boxSize: string
    boxNumber: number
    quantity: number
    component: ComponentCreateNestedOneWithoutOrderSkuComponentsInput
  }

  export type OrderSkuComponentUncheckedCreateWithoutOrderSkuInput = {
    id: string
    status?: StatusEnum
    comment?: string
    bayNo?: string
    stageStatuses?: InputJsonValue
    componentId: string
    boxSize: string
    boxNumber: number
    quantity: number
  }

  export type OrderSkuComponentCreateOrConnectWithoutOrderSkuInput = {
    where: OrderSkuComponentWhereUniqueInput
    create: XOR<OrderSkuComponentCreateWithoutOrderSkuInput, OrderSkuComponentUncheckedCreateWithoutOrderSkuInput>
  }

  export type OrderSkuComponentCreateManyOrderSkuInputEnvelope = {
    data: Enumerable<OrderSkuComponentCreateManyOrderSkuInput>
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithoutOrderSkusInput = {
    update: XOR<OrderUpdateWithoutOrderSkusInput, OrderUncheckedUpdateWithoutOrderSkusInput>
    create: XOR<OrderCreateWithoutOrderSkusInput, OrderUncheckedCreateWithoutOrderSkusInput>
  }

  export type OrderUpdateWithoutOrderSkusInput = {
    id?: IntFieldUpdateOperationsInput | number
    linnworksId?: StringFieldUpdateOperationsInput | string
    receivedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    manufactureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dispatchDate?: DateTimeFieldUpdateOperationsInput | Date | string
    boxQuantity?: IntFieldUpdateOperationsInput | number
    deliveryService?: EnumDeliveryServiceEnumFieldUpdateOperationsInput | DeliveryServiceEnum
    status?: EnumStatusEnumFieldUpdateOperationsInput | StatusEnum
    comment?: StringFieldUpdateOperationsInput | string
    source?: EnumSourceEnumFieldUpdateOperationsInput | SourceEnum
  }

  export type OrderUncheckedUpdateWithoutOrderSkusInput = {
    id?: IntFieldUpdateOperationsInput | number
    linnworksId?: StringFieldUpdateOperationsInput | string
    receivedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    manufactureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dispatchDate?: DateTimeFieldUpdateOperationsInput | Date | string
    boxQuantity?: IntFieldUpdateOperationsInput | number
    deliveryService?: EnumDeliveryServiceEnumFieldUpdateOperationsInput | DeliveryServiceEnum
    status?: EnumStatusEnumFieldUpdateOperationsInput | StatusEnum
    comment?: StringFieldUpdateOperationsInput | string
    source?: EnumSourceEnumFieldUpdateOperationsInput | SourceEnum
  }

  export type SkuUpsertWithoutOrderSkusInput = {
    update: XOR<SkuUpdateWithoutOrderSkusInput, SkuUncheckedUpdateWithoutOrderSkusInput>
    create: XOR<SkuCreateWithoutOrderSkusInput, SkuUncheckedCreateWithoutOrderSkusInput>
  }

  export type SkuUpdateWithoutOrderSkusInput = {
    id?: StringFieldUpdateOperationsInput | string
    boxQuantity?: IntFieldUpdateOperationsInput | number
    country?: CountryUpdateOneRequiredWithoutSkusInput
    category?: CategoryUpdateOneRequiredWithoutSkusInput
    product?: ProductUpdateOneRequiredWithoutSkusInput
    size?: SizeUpdateOneRequiredWithoutSkusInput
    finish?: FinishUpdateOneRequiredWithoutSkusInput
    legs?: LegsUpdateOneRequiredWithoutSkusInput
    components?: SkuToComponentUpdateManyWithoutSkuInput
  }

  export type SkuUncheckedUpdateWithoutOrderSkusInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    sizeId?: StringFieldUpdateOperationsInput | string
    finishId?: StringFieldUpdateOperationsInput | string
    legsId?: StringFieldUpdateOperationsInput | string
    boxQuantity?: IntFieldUpdateOperationsInput | number
    components?: SkuToComponentUncheckedUpdateManyWithoutSkuInput
  }

  export type OrderSkuComponentUpsertWithWhereUniqueWithoutOrderSkuInput = {
    where: OrderSkuComponentWhereUniqueInput
    update: XOR<OrderSkuComponentUpdateWithoutOrderSkuInput, OrderSkuComponentUncheckedUpdateWithoutOrderSkuInput>
    create: XOR<OrderSkuComponentCreateWithoutOrderSkuInput, OrderSkuComponentUncheckedCreateWithoutOrderSkuInput>
  }

  export type OrderSkuComponentUpdateWithWhereUniqueWithoutOrderSkuInput = {
    where: OrderSkuComponentWhereUniqueInput
    data: XOR<OrderSkuComponentUpdateWithoutOrderSkuInput, OrderSkuComponentUncheckedUpdateWithoutOrderSkuInput>
  }

  export type OrderSkuComponentUpdateManyWithWhereWithoutOrderSkuInput = {
    where: OrderSkuComponentScalarWhereInput
    data: XOR<OrderSkuComponentUpdateManyMutationInput, OrderSkuComponentUncheckedUpdateManyWithoutOrderSkuComponentsInput>
  }

  export type OrderSkuComponentScalarWhereInput = {
    AND?: Enumerable<OrderSkuComponentScalarWhereInput>
    OR?: Enumerable<OrderSkuComponentScalarWhereInput>
    NOT?: Enumerable<OrderSkuComponentScalarWhereInput>
    id?: StringFilter | string
    status?: EnumStatusEnumFilter | StatusEnum
    comment?: StringFilter | string
    bayNo?: StringFilter | string
    stageStatuses?: JsonFilter
    orderSkuId?: StringFilter | string
    componentId?: StringFilter | string
    boxSize?: StringFilter | string
    boxNumber?: IntFilter | number
    quantity?: IntFilter | number
  }

  export type OrderSkuCreateWithoutOrderSkuComponentsInput = {
    id: string
    status?: StatusEnum
    comment?: string
    quantity: number
    order: OrderCreateNestedOneWithoutOrderSkusInput
    sku: SkuCreateNestedOneWithoutOrderSkusInput
  }

  export type OrderSkuUncheckedCreateWithoutOrderSkuComponentsInput = {
    id: string
    status?: StatusEnum
    comment?: string
    quantity: number
    orderId: number
    skuId: string
  }

  export type OrderSkuCreateOrConnectWithoutOrderSkuComponentsInput = {
    where: OrderSkuWhereUniqueInput
    create: XOR<OrderSkuCreateWithoutOrderSkuComponentsInput, OrderSkuUncheckedCreateWithoutOrderSkuComponentsInput>
  }

  export type ComponentCreateWithoutOrderSkuComponentsInput = {
    id: string
    name: string
    length: number
    width: number
    depth: number
    weight: number
    stages?: InputJsonValue
    inherit: boolean
    skus?: SkuToComponentCreateNestedManyWithoutComponentInput
    parentComponent?: ComponentCreateNestedOneWithoutChildComponentInput
    childComponent?: ComponentCreateNestedOneWithoutParentComponentInput
    type: ComponentTypeCreateNestedOneWithoutComponentsInput
  }

  export type ComponentUncheckedCreateWithoutOrderSkuComponentsInput = {
    id: string
    name: string
    length: number
    width: number
    depth: number
    weight: number
    stages?: InputJsonValue
    parentId?: string | null
    inherit: boolean
    typeId: number
    skus?: SkuToComponentUncheckedCreateNestedManyWithoutComponentInput
    childComponent?: ComponentUncheckedCreateNestedOneWithoutParentComponentInput
  }

  export type ComponentCreateOrConnectWithoutOrderSkuComponentsInput = {
    where: ComponentWhereUniqueInput
    create: XOR<ComponentCreateWithoutOrderSkuComponentsInput, ComponentUncheckedCreateWithoutOrderSkuComponentsInput>
  }

  export type OrderSkuUpsertWithoutOrderSkuComponentsInput = {
    update: XOR<OrderSkuUpdateWithoutOrderSkuComponentsInput, OrderSkuUncheckedUpdateWithoutOrderSkuComponentsInput>
    create: XOR<OrderSkuCreateWithoutOrderSkuComponentsInput, OrderSkuUncheckedCreateWithoutOrderSkuComponentsInput>
  }

  export type OrderSkuUpdateWithoutOrderSkuComponentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | StatusEnum
    comment?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutOrderSkusInput
    sku?: SkuUpdateOneRequiredWithoutOrderSkusInput
  }

  export type OrderSkuUncheckedUpdateWithoutOrderSkuComponentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | StatusEnum
    comment?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    skuId?: StringFieldUpdateOperationsInput | string
  }

  export type ComponentUpsertWithoutOrderSkuComponentsInput = {
    update: XOR<ComponentUpdateWithoutOrderSkuComponentsInput, ComponentUncheckedUpdateWithoutOrderSkuComponentsInput>
    create: XOR<ComponentCreateWithoutOrderSkuComponentsInput, ComponentUncheckedCreateWithoutOrderSkuComponentsInput>
  }

  export type ComponentUpdateWithoutOrderSkuComponentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    depth?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    stages?: InputJsonValue
    inherit?: BoolFieldUpdateOperationsInput | boolean
    skus?: SkuToComponentUpdateManyWithoutComponentInput
    parentComponent?: ComponentUpdateOneWithoutChildComponentInput
    childComponent?: ComponentUpdateOneWithoutParentComponentInput
    type?: ComponentTypeUpdateOneRequiredWithoutComponentsInput
  }

  export type ComponentUncheckedUpdateWithoutOrderSkuComponentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    depth?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    stages?: InputJsonValue
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    inherit?: BoolFieldUpdateOperationsInput | boolean
    typeId?: IntFieldUpdateOperationsInput | number
    skus?: SkuToComponentUncheckedUpdateManyWithoutComponentInput
    childComponent?: ComponentUncheckedUpdateOneWithoutParentComponentInput
  }

  export type SkuCreateWithoutProductInput = {
    id: string
    boxQuantity: number
    country: CountryCreateNestedOneWithoutSkusInput
    category: CategoryCreateNestedOneWithoutSkusInput
    size: SizeCreateNestedOneWithoutSkusInput
    finish: FinishCreateNestedOneWithoutSkusInput
    legs: LegsCreateNestedOneWithoutSkusInput
    orderSkus?: OrderSkuCreateNestedManyWithoutSkuInput
    components?: SkuToComponentCreateNestedManyWithoutSkuInput
  }

  export type SkuUncheckedCreateWithoutProductInput = {
    id: string
    countryId: string
    categoryId: string
    sizeId: string
    finishId: string
    legsId: string
    boxQuantity: number
    orderSkus?: OrderSkuUncheckedCreateNestedManyWithoutSkuInput
    components?: SkuToComponentUncheckedCreateNestedManyWithoutSkuInput
  }

  export type SkuCreateOrConnectWithoutProductInput = {
    where: SkuWhereUniqueInput
    create: XOR<SkuCreateWithoutProductInput, SkuUncheckedCreateWithoutProductInput>
  }

  export type SkuCreateManyProductInputEnvelope = {
    data: Enumerable<SkuCreateManyProductInput>
    skipDuplicates?: boolean
  }

  export type SkuUpsertWithWhereUniqueWithoutProductInput = {
    where: SkuWhereUniqueInput
    update: XOR<SkuUpdateWithoutProductInput, SkuUncheckedUpdateWithoutProductInput>
    create: XOR<SkuCreateWithoutProductInput, SkuUncheckedCreateWithoutProductInput>
  }

  export type SkuUpdateWithWhereUniqueWithoutProductInput = {
    where: SkuWhereUniqueInput
    data: XOR<SkuUpdateWithoutProductInput, SkuUncheckedUpdateWithoutProductInput>
  }

  export type SkuUpdateManyWithWhereWithoutProductInput = {
    where: SkuScalarWhereInput
    data: XOR<SkuUpdateManyMutationInput, SkuUncheckedUpdateManyWithoutSkusInput>
  }

  export type SkuCreateWithoutSizeInput = {
    id: string
    boxQuantity: number
    country: CountryCreateNestedOneWithoutSkusInput
    category: CategoryCreateNestedOneWithoutSkusInput
    product: ProductCreateNestedOneWithoutSkusInput
    finish: FinishCreateNestedOneWithoutSkusInput
    legs: LegsCreateNestedOneWithoutSkusInput
    orderSkus?: OrderSkuCreateNestedManyWithoutSkuInput
    components?: SkuToComponentCreateNestedManyWithoutSkuInput
  }

  export type SkuUncheckedCreateWithoutSizeInput = {
    id: string
    countryId: string
    categoryId: string
    productId: string
    finishId: string
    legsId: string
    boxQuantity: number
    orderSkus?: OrderSkuUncheckedCreateNestedManyWithoutSkuInput
    components?: SkuToComponentUncheckedCreateNestedManyWithoutSkuInput
  }

  export type SkuCreateOrConnectWithoutSizeInput = {
    where: SkuWhereUniqueInput
    create: XOR<SkuCreateWithoutSizeInput, SkuUncheckedCreateWithoutSizeInput>
  }

  export type SkuCreateManySizeInputEnvelope = {
    data: Enumerable<SkuCreateManySizeInput>
    skipDuplicates?: boolean
  }

  export type SkuUpsertWithWhereUniqueWithoutSizeInput = {
    where: SkuWhereUniqueInput
    update: XOR<SkuUpdateWithoutSizeInput, SkuUncheckedUpdateWithoutSizeInput>
    create: XOR<SkuCreateWithoutSizeInput, SkuUncheckedCreateWithoutSizeInput>
  }

  export type SkuUpdateWithWhereUniqueWithoutSizeInput = {
    where: SkuWhereUniqueInput
    data: XOR<SkuUpdateWithoutSizeInput, SkuUncheckedUpdateWithoutSizeInput>
  }

  export type SkuUpdateManyWithWhereWithoutSizeInput = {
    where: SkuScalarWhereInput
    data: XOR<SkuUpdateManyMutationInput, SkuUncheckedUpdateManyWithoutSkusInput>
  }

  export type CountryCreateWithoutSkusInput = {
    id: string
    value: string
  }

  export type CountryUncheckedCreateWithoutSkusInput = {
    id: string
    value: string
  }

  export type CountryCreateOrConnectWithoutSkusInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutSkusInput, CountryUncheckedCreateWithoutSkusInput>
  }

  export type CategoryCreateWithoutSkusInput = {
    id: string
    value: string
  }

  export type CategoryUncheckedCreateWithoutSkusInput = {
    id: string
    value: string
  }

  export type CategoryCreateOrConnectWithoutSkusInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutSkusInput, CategoryUncheckedCreateWithoutSkusInput>
  }

  export type ProductCreateWithoutSkusInput = {
    id: string
    value: string
  }

  export type ProductUncheckedCreateWithoutSkusInput = {
    id: string
    value: string
  }

  export type ProductCreateOrConnectWithoutSkusInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSkusInput, ProductUncheckedCreateWithoutSkusInput>
  }

  export type SizeCreateWithoutSkusInput = {
    id: string
    value: string
  }

  export type SizeUncheckedCreateWithoutSkusInput = {
    id: string
    value: string
  }

  export type SizeCreateOrConnectWithoutSkusInput = {
    where: SizeWhereUniqueInput
    create: XOR<SizeCreateWithoutSkusInput, SizeUncheckedCreateWithoutSkusInput>
  }

  export type FinishCreateWithoutSkusInput = {
    id: string
    value: string
  }

  export type FinishUncheckedCreateWithoutSkusInput = {
    id: string
    value: string
  }

  export type FinishCreateOrConnectWithoutSkusInput = {
    where: FinishWhereUniqueInput
    create: XOR<FinishCreateWithoutSkusInput, FinishUncheckedCreateWithoutSkusInput>
  }

  export type LegsCreateWithoutSkusInput = {
    id: string
    value: string
  }

  export type LegsUncheckedCreateWithoutSkusInput = {
    id: string
    value: string
  }

  export type LegsCreateOrConnectWithoutSkusInput = {
    where: LegsWhereUniqueInput
    create: XOR<LegsCreateWithoutSkusInput, LegsUncheckedCreateWithoutSkusInput>
  }

  export type OrderSkuCreateWithoutSkuInput = {
    id: string
    status?: StatusEnum
    comment?: string
    quantity: number
    order: OrderCreateNestedOneWithoutOrderSkusInput
    orderSkuComponents?: OrderSkuComponentCreateNestedManyWithoutOrderSkuInput
  }

  export type OrderSkuUncheckedCreateWithoutSkuInput = {
    id: string
    status?: StatusEnum
    comment?: string
    quantity: number
    orderId: number
    orderSkuComponents?: OrderSkuComponentUncheckedCreateNestedManyWithoutOrderSkuInput
  }

  export type OrderSkuCreateOrConnectWithoutSkuInput = {
    where: OrderSkuWhereUniqueInput
    create: XOR<OrderSkuCreateWithoutSkuInput, OrderSkuUncheckedCreateWithoutSkuInput>
  }

  export type OrderSkuCreateManySkuInputEnvelope = {
    data: Enumerable<OrderSkuCreateManySkuInput>
    skipDuplicates?: boolean
  }

  export type SkuToComponentCreateWithoutSkuInput = {
    boxSize: string
    boxNumber: number
    quantity: number
    component: ComponentCreateNestedOneWithoutSkusInput
  }

  export type SkuToComponentUncheckedCreateWithoutSkuInput = {
    componentId: string
    boxSize: string
    boxNumber: number
    quantity: number
  }

  export type SkuToComponentCreateOrConnectWithoutSkuInput = {
    where: SkuToComponentWhereUniqueInput
    create: XOR<SkuToComponentCreateWithoutSkuInput, SkuToComponentUncheckedCreateWithoutSkuInput>
  }

  export type SkuToComponentCreateManySkuInputEnvelope = {
    data: Enumerable<SkuToComponentCreateManySkuInput>
    skipDuplicates?: boolean
  }

  export type CountryUpsertWithoutSkusInput = {
    update: XOR<CountryUpdateWithoutSkusInput, CountryUncheckedUpdateWithoutSkusInput>
    create: XOR<CountryCreateWithoutSkusInput, CountryUncheckedCreateWithoutSkusInput>
  }

  export type CountryUpdateWithoutSkusInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type CountryUncheckedUpdateWithoutSkusInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUpsertWithoutSkusInput = {
    update: XOR<CategoryUpdateWithoutSkusInput, CategoryUncheckedUpdateWithoutSkusInput>
    create: XOR<CategoryCreateWithoutSkusInput, CategoryUncheckedCreateWithoutSkusInput>
  }

  export type CategoryUpdateWithoutSkusInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutSkusInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUpsertWithoutSkusInput = {
    update: XOR<ProductUpdateWithoutSkusInput, ProductUncheckedUpdateWithoutSkusInput>
    create: XOR<ProductCreateWithoutSkusInput, ProductUncheckedCreateWithoutSkusInput>
  }

  export type ProductUpdateWithoutSkusInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUncheckedUpdateWithoutSkusInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type SizeUpsertWithoutSkusInput = {
    update: XOR<SizeUpdateWithoutSkusInput, SizeUncheckedUpdateWithoutSkusInput>
    create: XOR<SizeCreateWithoutSkusInput, SizeUncheckedCreateWithoutSkusInput>
  }

  export type SizeUpdateWithoutSkusInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type SizeUncheckedUpdateWithoutSkusInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type FinishUpsertWithoutSkusInput = {
    update: XOR<FinishUpdateWithoutSkusInput, FinishUncheckedUpdateWithoutSkusInput>
    create: XOR<FinishCreateWithoutSkusInput, FinishUncheckedCreateWithoutSkusInput>
  }

  export type FinishUpdateWithoutSkusInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type FinishUncheckedUpdateWithoutSkusInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type LegsUpsertWithoutSkusInput = {
    update: XOR<LegsUpdateWithoutSkusInput, LegsUncheckedUpdateWithoutSkusInput>
    create: XOR<LegsCreateWithoutSkusInput, LegsUncheckedCreateWithoutSkusInput>
  }

  export type LegsUpdateWithoutSkusInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type LegsUncheckedUpdateWithoutSkusInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type OrderSkuUpsertWithWhereUniqueWithoutSkuInput = {
    where: OrderSkuWhereUniqueInput
    update: XOR<OrderSkuUpdateWithoutSkuInput, OrderSkuUncheckedUpdateWithoutSkuInput>
    create: XOR<OrderSkuCreateWithoutSkuInput, OrderSkuUncheckedCreateWithoutSkuInput>
  }

  export type OrderSkuUpdateWithWhereUniqueWithoutSkuInput = {
    where: OrderSkuWhereUniqueInput
    data: XOR<OrderSkuUpdateWithoutSkuInput, OrderSkuUncheckedUpdateWithoutSkuInput>
  }

  export type OrderSkuUpdateManyWithWhereWithoutSkuInput = {
    where: OrderSkuScalarWhereInput
    data: XOR<OrderSkuUpdateManyMutationInput, OrderSkuUncheckedUpdateManyWithoutOrderSkusInput>
  }

  export type SkuToComponentUpsertWithWhereUniqueWithoutSkuInput = {
    where: SkuToComponentWhereUniqueInput
    update: XOR<SkuToComponentUpdateWithoutSkuInput, SkuToComponentUncheckedUpdateWithoutSkuInput>
    create: XOR<SkuToComponentCreateWithoutSkuInput, SkuToComponentUncheckedCreateWithoutSkuInput>
  }

  export type SkuToComponentUpdateWithWhereUniqueWithoutSkuInput = {
    where: SkuToComponentWhereUniqueInput
    data: XOR<SkuToComponentUpdateWithoutSkuInput, SkuToComponentUncheckedUpdateWithoutSkuInput>
  }

  export type SkuToComponentUpdateManyWithWhereWithoutSkuInput = {
    where: SkuToComponentScalarWhereInput
    data: XOR<SkuToComponentUpdateManyMutationInput, SkuToComponentUncheckedUpdateManyWithoutComponentsInput>
  }

  export type SkuToComponentScalarWhereInput = {
    AND?: Enumerable<SkuToComponentScalarWhereInput>
    OR?: Enumerable<SkuToComponentScalarWhereInput>
    NOT?: Enumerable<SkuToComponentScalarWhereInput>
    componentId?: StringFilter | string
    skuId?: StringFilter | string
    boxSize?: StringFilter | string
    boxNumber?: IntFilter | number
    quantity?: IntFilter | number
  }

  export type ComponentCreateWithoutSkusInput = {
    id: string
    name: string
    length: number
    width: number
    depth: number
    weight: number
    stages?: InputJsonValue
    inherit: boolean
    orderSkuComponents?: OrderSkuComponentCreateNestedManyWithoutComponentInput
    parentComponent?: ComponentCreateNestedOneWithoutChildComponentInput
    childComponent?: ComponentCreateNestedOneWithoutParentComponentInput
    type: ComponentTypeCreateNestedOneWithoutComponentsInput
  }

  export type ComponentUncheckedCreateWithoutSkusInput = {
    id: string
    name: string
    length: number
    width: number
    depth: number
    weight: number
    stages?: InputJsonValue
    parentId?: string | null
    inherit: boolean
    typeId: number
    orderSkuComponents?: OrderSkuComponentUncheckedCreateNestedManyWithoutComponentInput
    childComponent?: ComponentUncheckedCreateNestedOneWithoutParentComponentInput
  }

  export type ComponentCreateOrConnectWithoutSkusInput = {
    where: ComponentWhereUniqueInput
    create: XOR<ComponentCreateWithoutSkusInput, ComponentUncheckedCreateWithoutSkusInput>
  }

  export type SkuCreateWithoutComponentsInput = {
    id: string
    boxQuantity: number
    country: CountryCreateNestedOneWithoutSkusInput
    category: CategoryCreateNestedOneWithoutSkusInput
    product: ProductCreateNestedOneWithoutSkusInput
    size: SizeCreateNestedOneWithoutSkusInput
    finish: FinishCreateNestedOneWithoutSkusInput
    legs: LegsCreateNestedOneWithoutSkusInput
    orderSkus?: OrderSkuCreateNestedManyWithoutSkuInput
  }

  export type SkuUncheckedCreateWithoutComponentsInput = {
    id: string
    countryId: string
    categoryId: string
    productId: string
    sizeId: string
    finishId: string
    legsId: string
    boxQuantity: number
    orderSkus?: OrderSkuUncheckedCreateNestedManyWithoutSkuInput
  }

  export type SkuCreateOrConnectWithoutComponentsInput = {
    where: SkuWhereUniqueInput
    create: XOR<SkuCreateWithoutComponentsInput, SkuUncheckedCreateWithoutComponentsInput>
  }

  export type ComponentUpsertWithoutSkusInput = {
    update: XOR<ComponentUpdateWithoutSkusInput, ComponentUncheckedUpdateWithoutSkusInput>
    create: XOR<ComponentCreateWithoutSkusInput, ComponentUncheckedCreateWithoutSkusInput>
  }

  export type ComponentUpdateWithoutSkusInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    depth?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    stages?: InputJsonValue
    inherit?: BoolFieldUpdateOperationsInput | boolean
    orderSkuComponents?: OrderSkuComponentUpdateManyWithoutComponentInput
    parentComponent?: ComponentUpdateOneWithoutChildComponentInput
    childComponent?: ComponentUpdateOneWithoutParentComponentInput
    type?: ComponentTypeUpdateOneRequiredWithoutComponentsInput
  }

  export type ComponentUncheckedUpdateWithoutSkusInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    depth?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    stages?: InputJsonValue
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    inherit?: BoolFieldUpdateOperationsInput | boolean
    typeId?: IntFieldUpdateOperationsInput | number
    orderSkuComponents?: OrderSkuComponentUncheckedUpdateManyWithoutComponentInput
    childComponent?: ComponentUncheckedUpdateOneWithoutParentComponentInput
  }

  export type SkuUpsertWithoutComponentsInput = {
    update: XOR<SkuUpdateWithoutComponentsInput, SkuUncheckedUpdateWithoutComponentsInput>
    create: XOR<SkuCreateWithoutComponentsInput, SkuUncheckedCreateWithoutComponentsInput>
  }

  export type SkuUpdateWithoutComponentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    boxQuantity?: IntFieldUpdateOperationsInput | number
    country?: CountryUpdateOneRequiredWithoutSkusInput
    category?: CategoryUpdateOneRequiredWithoutSkusInput
    product?: ProductUpdateOneRequiredWithoutSkusInput
    size?: SizeUpdateOneRequiredWithoutSkusInput
    finish?: FinishUpdateOneRequiredWithoutSkusInput
    legs?: LegsUpdateOneRequiredWithoutSkusInput
    orderSkus?: OrderSkuUpdateManyWithoutSkuInput
  }

  export type SkuUncheckedUpdateWithoutComponentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    sizeId?: StringFieldUpdateOperationsInput | string
    finishId?: StringFieldUpdateOperationsInput | string
    legsId?: StringFieldUpdateOperationsInput | string
    boxQuantity?: IntFieldUpdateOperationsInput | number
    orderSkus?: OrderSkuUncheckedUpdateManyWithoutSkuInput
  }

  export type ComponentCreateWithoutTypeInput = {
    id: string
    name: string
    length: number
    width: number
    depth: number
    weight: number
    stages?: InputJsonValue
    inherit: boolean
    orderSkuComponents?: OrderSkuComponentCreateNestedManyWithoutComponentInput
    skus?: SkuToComponentCreateNestedManyWithoutComponentInput
    parentComponent?: ComponentCreateNestedOneWithoutChildComponentInput
    childComponent?: ComponentCreateNestedOneWithoutParentComponentInput
  }

  export type ComponentUncheckedCreateWithoutTypeInput = {
    id: string
    name: string
    length: number
    width: number
    depth: number
    weight: number
    stages?: InputJsonValue
    parentId?: string | null
    inherit: boolean
    orderSkuComponents?: OrderSkuComponentUncheckedCreateNestedManyWithoutComponentInput
    skus?: SkuToComponentUncheckedCreateNestedManyWithoutComponentInput
    childComponent?: ComponentUncheckedCreateNestedOneWithoutParentComponentInput
  }

  export type ComponentCreateOrConnectWithoutTypeInput = {
    where: ComponentWhereUniqueInput
    create: XOR<ComponentCreateWithoutTypeInput, ComponentUncheckedCreateWithoutTypeInput>
  }

  export type ComponentCreateManyTypeInputEnvelope = {
    data: Enumerable<ComponentCreateManyTypeInput>
    skipDuplicates?: boolean
  }

  export type ComponentUpsertWithWhereUniqueWithoutTypeInput = {
    where: ComponentWhereUniqueInput
    update: XOR<ComponentUpdateWithoutTypeInput, ComponentUncheckedUpdateWithoutTypeInput>
    create: XOR<ComponentCreateWithoutTypeInput, ComponentUncheckedCreateWithoutTypeInput>
  }

  export type ComponentUpdateWithWhereUniqueWithoutTypeInput = {
    where: ComponentWhereUniqueInput
    data: XOR<ComponentUpdateWithoutTypeInput, ComponentUncheckedUpdateWithoutTypeInput>
  }

  export type ComponentUpdateManyWithWhereWithoutTypeInput = {
    where: ComponentScalarWhereInput
    data: XOR<ComponentUpdateManyMutationInput, ComponentUncheckedUpdateManyWithoutComponentsInput>
  }

  export type ComponentScalarWhereInput = {
    AND?: Enumerable<ComponentScalarWhereInput>
    OR?: Enumerable<ComponentScalarWhereInput>
    NOT?: Enumerable<ComponentScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    length?: IntFilter | number
    width?: IntFilter | number
    depth?: IntFilter | number
    weight?: IntFilter | number
    stages?: JsonFilter
    parentId?: StringNullableFilter | string | null
    inherit?: BoolFilter | boolean
    typeId?: IntFilter | number
  }

  export type OrderSkuComponentCreateWithoutComponentInput = {
    id: string
    status?: StatusEnum
    comment?: string
    bayNo?: string
    stageStatuses?: InputJsonValue
    boxSize: string
    boxNumber: number
    quantity: number
    orderSku: OrderSkuCreateNestedOneWithoutOrderSkuComponentsInput
  }

  export type OrderSkuComponentUncheckedCreateWithoutComponentInput = {
    id: string
    status?: StatusEnum
    comment?: string
    bayNo?: string
    stageStatuses?: InputJsonValue
    orderSkuId: string
    boxSize: string
    boxNumber: number
    quantity: number
  }

  export type OrderSkuComponentCreateOrConnectWithoutComponentInput = {
    where: OrderSkuComponentWhereUniqueInput
    create: XOR<OrderSkuComponentCreateWithoutComponentInput, OrderSkuComponentUncheckedCreateWithoutComponentInput>
  }

  export type OrderSkuComponentCreateManyComponentInputEnvelope = {
    data: Enumerable<OrderSkuComponentCreateManyComponentInput>
    skipDuplicates?: boolean
  }

  export type SkuToComponentCreateWithoutComponentInput = {
    boxSize: string
    boxNumber: number
    quantity: number
    sku: SkuCreateNestedOneWithoutComponentsInput
  }

  export type SkuToComponentUncheckedCreateWithoutComponentInput = {
    skuId: string
    boxSize: string
    boxNumber: number
    quantity: number
  }

  export type SkuToComponentCreateOrConnectWithoutComponentInput = {
    where: SkuToComponentWhereUniqueInput
    create: XOR<SkuToComponentCreateWithoutComponentInput, SkuToComponentUncheckedCreateWithoutComponentInput>
  }

  export type SkuToComponentCreateManyComponentInputEnvelope = {
    data: Enumerable<SkuToComponentCreateManyComponentInput>
    skipDuplicates?: boolean
  }

  export type ComponentCreateWithoutChildComponentInput = {
    id: string
    name: string
    length: number
    width: number
    depth: number
    weight: number
    stages?: InputJsonValue
    inherit: boolean
    orderSkuComponents?: OrderSkuComponentCreateNestedManyWithoutComponentInput
    skus?: SkuToComponentCreateNestedManyWithoutComponentInput
    parentComponent?: ComponentCreateNestedOneWithoutChildComponentInput
    type: ComponentTypeCreateNestedOneWithoutComponentsInput
  }

  export type ComponentUncheckedCreateWithoutChildComponentInput = {
    id: string
    name: string
    length: number
    width: number
    depth: number
    weight: number
    stages?: InputJsonValue
    parentId?: string | null
    inherit: boolean
    typeId: number
    orderSkuComponents?: OrderSkuComponentUncheckedCreateNestedManyWithoutComponentInput
    skus?: SkuToComponentUncheckedCreateNestedManyWithoutComponentInput
  }

  export type ComponentCreateOrConnectWithoutChildComponentInput = {
    where: ComponentWhereUniqueInput
    create: XOR<ComponentCreateWithoutChildComponentInput, ComponentUncheckedCreateWithoutChildComponentInput>
  }

  export type ComponentCreateWithoutParentComponentInput = {
    id: string
    name: string
    length: number
    width: number
    depth: number
    weight: number
    stages?: InputJsonValue
    inherit: boolean
    orderSkuComponents?: OrderSkuComponentCreateNestedManyWithoutComponentInput
    skus?: SkuToComponentCreateNestedManyWithoutComponentInput
    childComponent?: ComponentCreateNestedOneWithoutParentComponentInput
    type: ComponentTypeCreateNestedOneWithoutComponentsInput
  }

  export type ComponentUncheckedCreateWithoutParentComponentInput = {
    id: string
    name: string
    length: number
    width: number
    depth: number
    weight: number
    stages?: InputJsonValue
    inherit: boolean
    typeId: number
    orderSkuComponents?: OrderSkuComponentUncheckedCreateNestedManyWithoutComponentInput
    skus?: SkuToComponentUncheckedCreateNestedManyWithoutComponentInput
    childComponent?: ComponentUncheckedCreateNestedOneWithoutParentComponentInput
  }

  export type ComponentCreateOrConnectWithoutParentComponentInput = {
    where: ComponentWhereUniqueInput
    create: XOR<ComponentCreateWithoutParentComponentInput, ComponentUncheckedCreateWithoutParentComponentInput>
  }

  export type ComponentTypeCreateWithoutComponentsInput = {
    value: string
  }

  export type ComponentTypeUncheckedCreateWithoutComponentsInput = {
    id?: number
    value: string
  }

  export type ComponentTypeCreateOrConnectWithoutComponentsInput = {
    where: ComponentTypeWhereUniqueInput
    create: XOR<ComponentTypeCreateWithoutComponentsInput, ComponentTypeUncheckedCreateWithoutComponentsInput>
  }

  export type OrderSkuComponentUpsertWithWhereUniqueWithoutComponentInput = {
    where: OrderSkuComponentWhereUniqueInput
    update: XOR<OrderSkuComponentUpdateWithoutComponentInput, OrderSkuComponentUncheckedUpdateWithoutComponentInput>
    create: XOR<OrderSkuComponentCreateWithoutComponentInput, OrderSkuComponentUncheckedCreateWithoutComponentInput>
  }

  export type OrderSkuComponentUpdateWithWhereUniqueWithoutComponentInput = {
    where: OrderSkuComponentWhereUniqueInput
    data: XOR<OrderSkuComponentUpdateWithoutComponentInput, OrderSkuComponentUncheckedUpdateWithoutComponentInput>
  }

  export type OrderSkuComponentUpdateManyWithWhereWithoutComponentInput = {
    where: OrderSkuComponentScalarWhereInput
    data: XOR<OrderSkuComponentUpdateManyMutationInput, OrderSkuComponentUncheckedUpdateManyWithoutOrderSkuComponentsInput>
  }

  export type SkuToComponentUpsertWithWhereUniqueWithoutComponentInput = {
    where: SkuToComponentWhereUniqueInput
    update: XOR<SkuToComponentUpdateWithoutComponentInput, SkuToComponentUncheckedUpdateWithoutComponentInput>
    create: XOR<SkuToComponentCreateWithoutComponentInput, SkuToComponentUncheckedCreateWithoutComponentInput>
  }

  export type SkuToComponentUpdateWithWhereUniqueWithoutComponentInput = {
    where: SkuToComponentWhereUniqueInput
    data: XOR<SkuToComponentUpdateWithoutComponentInput, SkuToComponentUncheckedUpdateWithoutComponentInput>
  }

  export type SkuToComponentUpdateManyWithWhereWithoutComponentInput = {
    where: SkuToComponentScalarWhereInput
    data: XOR<SkuToComponentUpdateManyMutationInput, SkuToComponentUncheckedUpdateManyWithoutSkusInput>
  }

  export type ComponentUpsertWithoutChildComponentInput = {
    update: XOR<ComponentUpdateWithoutChildComponentInput, ComponentUncheckedUpdateWithoutChildComponentInput>
    create: XOR<ComponentCreateWithoutChildComponentInput, ComponentUncheckedCreateWithoutChildComponentInput>
  }

  export type ComponentUpdateWithoutChildComponentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    depth?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    stages?: InputJsonValue
    inherit?: BoolFieldUpdateOperationsInput | boolean
    orderSkuComponents?: OrderSkuComponentUpdateManyWithoutComponentInput
    skus?: SkuToComponentUpdateManyWithoutComponentInput
    parentComponent?: ComponentUpdateOneWithoutChildComponentInput
    type?: ComponentTypeUpdateOneRequiredWithoutComponentsInput
  }

  export type ComponentUncheckedUpdateWithoutChildComponentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    depth?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    stages?: InputJsonValue
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    inherit?: BoolFieldUpdateOperationsInput | boolean
    typeId?: IntFieldUpdateOperationsInput | number
    orderSkuComponents?: OrderSkuComponentUncheckedUpdateManyWithoutComponentInput
    skus?: SkuToComponentUncheckedUpdateManyWithoutComponentInput
  }

  export type ComponentUpsertWithoutParentComponentInput = {
    update: XOR<ComponentUpdateWithoutParentComponentInput, ComponentUncheckedUpdateWithoutParentComponentInput>
    create: XOR<ComponentCreateWithoutParentComponentInput, ComponentUncheckedCreateWithoutParentComponentInput>
  }

  export type ComponentUpdateWithoutParentComponentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    depth?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    stages?: InputJsonValue
    inherit?: BoolFieldUpdateOperationsInput | boolean
    orderSkuComponents?: OrderSkuComponentUpdateManyWithoutComponentInput
    skus?: SkuToComponentUpdateManyWithoutComponentInput
    childComponent?: ComponentUpdateOneWithoutParentComponentInput
    type?: ComponentTypeUpdateOneRequiredWithoutComponentsInput
  }

  export type ComponentUncheckedUpdateWithoutParentComponentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    depth?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    stages?: InputJsonValue
    inherit?: BoolFieldUpdateOperationsInput | boolean
    typeId?: IntFieldUpdateOperationsInput | number
    orderSkuComponents?: OrderSkuComponentUncheckedUpdateManyWithoutComponentInput
    skus?: SkuToComponentUncheckedUpdateManyWithoutComponentInput
    childComponent?: ComponentUncheckedUpdateOneWithoutParentComponentInput
  }

  export type ComponentTypeUpsertWithoutComponentsInput = {
    update: XOR<ComponentTypeUpdateWithoutComponentsInput, ComponentTypeUncheckedUpdateWithoutComponentsInput>
    create: XOR<ComponentTypeCreateWithoutComponentsInput, ComponentTypeUncheckedCreateWithoutComponentsInput>
  }

  export type ComponentTypeUpdateWithoutComponentsInput = {
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ComponentTypeUncheckedUpdateWithoutComponentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    providerType: string
    providerId: string
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    accessTokenExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    expires: Date | string
    sessionToken: string
    accessToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkuCreateManyCategoryInput = {
    id: string
    countryId: string
    productId: string
    sizeId: string
    finishId: string
    legsId: string
    boxQuantity: number
  }

  export type SkuUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    boxQuantity?: IntFieldUpdateOperationsInput | number
    country?: CountryUpdateOneRequiredWithoutSkusInput
    product?: ProductUpdateOneRequiredWithoutSkusInput
    size?: SizeUpdateOneRequiredWithoutSkusInput
    finish?: FinishUpdateOneRequiredWithoutSkusInput
    legs?: LegsUpdateOneRequiredWithoutSkusInput
    orderSkus?: OrderSkuUpdateManyWithoutSkuInput
    components?: SkuToComponentUpdateManyWithoutSkuInput
  }

  export type SkuUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    sizeId?: StringFieldUpdateOperationsInput | string
    finishId?: StringFieldUpdateOperationsInput | string
    legsId?: StringFieldUpdateOperationsInput | string
    boxQuantity?: IntFieldUpdateOperationsInput | number
    orderSkus?: OrderSkuUncheckedUpdateManyWithoutSkuInput
    components?: SkuToComponentUncheckedUpdateManyWithoutSkuInput
  }

  export type SkuUncheckedUpdateManyWithoutSkusInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    sizeId?: StringFieldUpdateOperationsInput | string
    finishId?: StringFieldUpdateOperationsInput | string
    legsId?: StringFieldUpdateOperationsInput | string
    boxQuantity?: IntFieldUpdateOperationsInput | number
  }

  export type SkuCreateManyCountryInput = {
    id: string
    categoryId: string
    productId: string
    sizeId: string
    finishId: string
    legsId: string
    boxQuantity: number
  }

  export type SkuUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    boxQuantity?: IntFieldUpdateOperationsInput | number
    category?: CategoryUpdateOneRequiredWithoutSkusInput
    product?: ProductUpdateOneRequiredWithoutSkusInput
    size?: SizeUpdateOneRequiredWithoutSkusInput
    finish?: FinishUpdateOneRequiredWithoutSkusInput
    legs?: LegsUpdateOneRequiredWithoutSkusInput
    orderSkus?: OrderSkuUpdateManyWithoutSkuInput
    components?: SkuToComponentUpdateManyWithoutSkuInput
  }

  export type SkuUncheckedUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    sizeId?: StringFieldUpdateOperationsInput | string
    finishId?: StringFieldUpdateOperationsInput | string
    legsId?: StringFieldUpdateOperationsInput | string
    boxQuantity?: IntFieldUpdateOperationsInput | number
    orderSkus?: OrderSkuUncheckedUpdateManyWithoutSkuInput
    components?: SkuToComponentUncheckedUpdateManyWithoutSkuInput
  }

  export type SkuCreateManyFinishInput = {
    id: string
    countryId: string
    categoryId: string
    productId: string
    sizeId: string
    legsId: string
    boxQuantity: number
  }

  export type SkuUpdateWithoutFinishInput = {
    id?: StringFieldUpdateOperationsInput | string
    boxQuantity?: IntFieldUpdateOperationsInput | number
    country?: CountryUpdateOneRequiredWithoutSkusInput
    category?: CategoryUpdateOneRequiredWithoutSkusInput
    product?: ProductUpdateOneRequiredWithoutSkusInput
    size?: SizeUpdateOneRequiredWithoutSkusInput
    legs?: LegsUpdateOneRequiredWithoutSkusInput
    orderSkus?: OrderSkuUpdateManyWithoutSkuInput
    components?: SkuToComponentUpdateManyWithoutSkuInput
  }

  export type SkuUncheckedUpdateWithoutFinishInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    sizeId?: StringFieldUpdateOperationsInput | string
    legsId?: StringFieldUpdateOperationsInput | string
    boxQuantity?: IntFieldUpdateOperationsInput | number
    orderSkus?: OrderSkuUncheckedUpdateManyWithoutSkuInput
    components?: SkuToComponentUncheckedUpdateManyWithoutSkuInput
  }

  export type SkuCreateManyLegsInput = {
    id: string
    countryId: string
    categoryId: string
    productId: string
    sizeId: string
    finishId: string
    boxQuantity: number
  }

  export type SkuUpdateWithoutLegsInput = {
    id?: StringFieldUpdateOperationsInput | string
    boxQuantity?: IntFieldUpdateOperationsInput | number
    country?: CountryUpdateOneRequiredWithoutSkusInput
    category?: CategoryUpdateOneRequiredWithoutSkusInput
    product?: ProductUpdateOneRequiredWithoutSkusInput
    size?: SizeUpdateOneRequiredWithoutSkusInput
    finish?: FinishUpdateOneRequiredWithoutSkusInput
    orderSkus?: OrderSkuUpdateManyWithoutSkuInput
    components?: SkuToComponentUpdateManyWithoutSkuInput
  }

  export type SkuUncheckedUpdateWithoutLegsInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    sizeId?: StringFieldUpdateOperationsInput | string
    finishId?: StringFieldUpdateOperationsInput | string
    boxQuantity?: IntFieldUpdateOperationsInput | number
    orderSkus?: OrderSkuUncheckedUpdateManyWithoutSkuInput
    components?: SkuToComponentUncheckedUpdateManyWithoutSkuInput
  }

  export type OrderSkuCreateManyOrderInput = {
    id: string
    status?: StatusEnum
    comment?: string
    quantity: number
    skuId: string
  }

  export type OrderSkuUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | StatusEnum
    comment?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    sku?: SkuUpdateOneRequiredWithoutOrderSkusInput
    orderSkuComponents?: OrderSkuComponentUpdateManyWithoutOrderSkuInput
  }

  export type OrderSkuUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | StatusEnum
    comment?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    skuId?: StringFieldUpdateOperationsInput | string
    orderSkuComponents?: OrderSkuComponentUncheckedUpdateManyWithoutOrderSkuInput
  }

  export type OrderSkuUncheckedUpdateManyWithoutOrderSkusInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | StatusEnum
    comment?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    skuId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderSkuComponentCreateManyOrderSkuInput = {
    id: string
    status?: StatusEnum
    comment?: string
    bayNo?: string
    stageStatuses?: InputJsonValue
    componentId: string
    boxSize: string
    boxNumber: number
    quantity: number
  }

  export type OrderSkuComponentUpdateWithoutOrderSkuInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | StatusEnum
    comment?: StringFieldUpdateOperationsInput | string
    bayNo?: StringFieldUpdateOperationsInput | string
    stageStatuses?: InputJsonValue
    boxSize?: StringFieldUpdateOperationsInput | string
    boxNumber?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    component?: ComponentUpdateOneRequiredWithoutOrderSkuComponentsInput
  }

  export type OrderSkuComponentUncheckedUpdateWithoutOrderSkuInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | StatusEnum
    comment?: StringFieldUpdateOperationsInput | string
    bayNo?: StringFieldUpdateOperationsInput | string
    stageStatuses?: InputJsonValue
    componentId?: StringFieldUpdateOperationsInput | string
    boxSize?: StringFieldUpdateOperationsInput | string
    boxNumber?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrderSkuComponentUncheckedUpdateManyWithoutOrderSkuComponentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | StatusEnum
    comment?: StringFieldUpdateOperationsInput | string
    bayNo?: StringFieldUpdateOperationsInput | string
    stageStatuses?: InputJsonValue
    componentId?: StringFieldUpdateOperationsInput | string
    boxSize?: StringFieldUpdateOperationsInput | string
    boxNumber?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type SkuCreateManyProductInput = {
    id: string
    countryId: string
    categoryId: string
    sizeId: string
    finishId: string
    legsId: string
    boxQuantity: number
  }

  export type SkuUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    boxQuantity?: IntFieldUpdateOperationsInput | number
    country?: CountryUpdateOneRequiredWithoutSkusInput
    category?: CategoryUpdateOneRequiredWithoutSkusInput
    size?: SizeUpdateOneRequiredWithoutSkusInput
    finish?: FinishUpdateOneRequiredWithoutSkusInput
    legs?: LegsUpdateOneRequiredWithoutSkusInput
    orderSkus?: OrderSkuUpdateManyWithoutSkuInput
    components?: SkuToComponentUpdateManyWithoutSkuInput
  }

  export type SkuUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    sizeId?: StringFieldUpdateOperationsInput | string
    finishId?: StringFieldUpdateOperationsInput | string
    legsId?: StringFieldUpdateOperationsInput | string
    boxQuantity?: IntFieldUpdateOperationsInput | number
    orderSkus?: OrderSkuUncheckedUpdateManyWithoutSkuInput
    components?: SkuToComponentUncheckedUpdateManyWithoutSkuInput
  }

  export type SkuCreateManySizeInput = {
    id: string
    countryId: string
    categoryId: string
    productId: string
    finishId: string
    legsId: string
    boxQuantity: number
  }

  export type SkuUpdateWithoutSizeInput = {
    id?: StringFieldUpdateOperationsInput | string
    boxQuantity?: IntFieldUpdateOperationsInput | number
    country?: CountryUpdateOneRequiredWithoutSkusInput
    category?: CategoryUpdateOneRequiredWithoutSkusInput
    product?: ProductUpdateOneRequiredWithoutSkusInput
    finish?: FinishUpdateOneRequiredWithoutSkusInput
    legs?: LegsUpdateOneRequiredWithoutSkusInput
    orderSkus?: OrderSkuUpdateManyWithoutSkuInput
    components?: SkuToComponentUpdateManyWithoutSkuInput
  }

  export type SkuUncheckedUpdateWithoutSizeInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    finishId?: StringFieldUpdateOperationsInput | string
    legsId?: StringFieldUpdateOperationsInput | string
    boxQuantity?: IntFieldUpdateOperationsInput | number
    orderSkus?: OrderSkuUncheckedUpdateManyWithoutSkuInput
    components?: SkuToComponentUncheckedUpdateManyWithoutSkuInput
  }

  export type OrderSkuCreateManySkuInput = {
    id: string
    status?: StatusEnum
    comment?: string
    quantity: number
    orderId: number
  }

  export type SkuToComponentCreateManySkuInput = {
    componentId: string
    boxSize: string
    boxNumber: number
    quantity: number
  }

  export type OrderSkuUpdateWithoutSkuInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | StatusEnum
    comment?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutOrderSkusInput
    orderSkuComponents?: OrderSkuComponentUpdateManyWithoutOrderSkuInput
  }

  export type OrderSkuUncheckedUpdateWithoutSkuInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | StatusEnum
    comment?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    orderSkuComponents?: OrderSkuComponentUncheckedUpdateManyWithoutOrderSkuInput
  }

  export type SkuToComponentUpdateWithoutSkuInput = {
    boxSize?: StringFieldUpdateOperationsInput | string
    boxNumber?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    component?: ComponentUpdateOneRequiredWithoutSkusInput
  }

  export type SkuToComponentUncheckedUpdateWithoutSkuInput = {
    componentId?: StringFieldUpdateOperationsInput | string
    boxSize?: StringFieldUpdateOperationsInput | string
    boxNumber?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type SkuToComponentUncheckedUpdateManyWithoutComponentsInput = {
    componentId?: StringFieldUpdateOperationsInput | string
    boxSize?: StringFieldUpdateOperationsInput | string
    boxNumber?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ComponentCreateManyTypeInput = {
    id: string
    name: string
    length: number
    width: number
    depth: number
    weight: number
    stages?: InputJsonValue
    parentId?: string | null
    inherit: boolean
  }

  export type ComponentUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    depth?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    stages?: InputJsonValue
    inherit?: BoolFieldUpdateOperationsInput | boolean
    orderSkuComponents?: OrderSkuComponentUpdateManyWithoutComponentInput
    skus?: SkuToComponentUpdateManyWithoutComponentInput
    parentComponent?: ComponentUpdateOneWithoutChildComponentInput
    childComponent?: ComponentUpdateOneWithoutParentComponentInput
  }

  export type ComponentUncheckedUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    depth?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    stages?: InputJsonValue
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    inherit?: BoolFieldUpdateOperationsInput | boolean
    orderSkuComponents?: OrderSkuComponentUncheckedUpdateManyWithoutComponentInput
    skus?: SkuToComponentUncheckedUpdateManyWithoutComponentInput
    childComponent?: ComponentUncheckedUpdateOneWithoutParentComponentInput
  }

  export type ComponentUncheckedUpdateManyWithoutComponentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    length?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    depth?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    stages?: InputJsonValue
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    inherit?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrderSkuComponentCreateManyComponentInput = {
    id: string
    status?: StatusEnum
    comment?: string
    bayNo?: string
    stageStatuses?: InputJsonValue
    orderSkuId: string
    boxSize: string
    boxNumber: number
    quantity: number
  }

  export type SkuToComponentCreateManyComponentInput = {
    skuId: string
    boxSize: string
    boxNumber: number
    quantity: number
  }

  export type OrderSkuComponentUpdateWithoutComponentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | StatusEnum
    comment?: StringFieldUpdateOperationsInput | string
    bayNo?: StringFieldUpdateOperationsInput | string
    stageStatuses?: InputJsonValue
    boxSize?: StringFieldUpdateOperationsInput | string
    boxNumber?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    orderSku?: OrderSkuUpdateOneRequiredWithoutOrderSkuComponentsInput
  }

  export type OrderSkuComponentUncheckedUpdateWithoutComponentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | StatusEnum
    comment?: StringFieldUpdateOperationsInput | string
    bayNo?: StringFieldUpdateOperationsInput | string
    stageStatuses?: InputJsonValue
    orderSkuId?: StringFieldUpdateOperationsInput | string
    boxSize?: StringFieldUpdateOperationsInput | string
    boxNumber?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type SkuToComponentUpdateWithoutComponentInput = {
    boxSize?: StringFieldUpdateOperationsInput | string
    boxNumber?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    sku?: SkuUpdateOneRequiredWithoutComponentsInput
  }

  export type SkuToComponentUncheckedUpdateWithoutComponentInput = {
    skuId?: StringFieldUpdateOperationsInput | string
    boxSize?: StringFieldUpdateOperationsInput | string
    boxNumber?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type SkuToComponentUncheckedUpdateManyWithoutSkusInput = {
    skuId?: StringFieldUpdateOperationsInput | string
    boxSize?: StringFieldUpdateOperationsInput | string
    boxNumber?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
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
  export const dmmf: runtime.DMMF.Document;
}