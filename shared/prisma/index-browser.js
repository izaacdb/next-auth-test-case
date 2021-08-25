
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 2.28.0
 * Query Engine version: 89facabd0366f63911d089156a7a70125bfbcd27
 */
Prisma.prismaVersion = {
  client: "2.28.0",
  engine: "89facabd0366f63911d089156a7a70125bfbcd27"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */

Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AccountScalarFieldEnum = makeEnum({
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
});

exports.Prisma.SessionScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  expires: 'expires',
  sessionToken: 'sessionToken',
  accessToken: 'accessToken',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  email: 'email',
  emailVerified: 'emailVerified',
  image: 'image',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.VerificationRequestScalarFieldEnum = makeEnum({
  id: 'id',
  identifier: 'identifier',
  token: 'token',
  expires: 'expires',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.CategoryScalarFieldEnum = makeEnum({
  id: 'id',
  value: 'value'
});

exports.Prisma.CountryScalarFieldEnum = makeEnum({
  id: 'id',
  value: 'value'
});

exports.Prisma.FinishScalarFieldEnum = makeEnum({
  id: 'id',
  value: 'value'
});

exports.Prisma.LegsScalarFieldEnum = makeEnum({
  id: 'id',
  value: 'value'
});

exports.Prisma.OrderScalarFieldEnum = makeEnum({
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
});

exports.Prisma.OrderSkuScalarFieldEnum = makeEnum({
  id: 'id',
  status: 'status',
  comment: 'comment',
  quantity: 'quantity',
  orderId: 'orderId',
  skuId: 'skuId'
});

exports.Prisma.OrderSkuComponentScalarFieldEnum = makeEnum({
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
});

exports.Prisma.ProductScalarFieldEnum = makeEnum({
  id: 'id',
  value: 'value'
});

exports.Prisma.SizeScalarFieldEnum = makeEnum({
  id: 'id',
  value: 'value'
});

exports.Prisma.SkuScalarFieldEnum = makeEnum({
  id: 'id',
  countryId: 'countryId',
  categoryId: 'categoryId',
  productId: 'productId',
  sizeId: 'sizeId',
  finishId: 'finishId',
  legsId: 'legsId',
  boxQuantity: 'boxQuantity'
});

exports.Prisma.SkuToComponentScalarFieldEnum = makeEnum({
  componentId: 'componentId',
  skuId: 'skuId',
  boxSize: 'boxSize',
  boxNumber: 'boxNumber',
  quantity: 'quantity'
});

exports.Prisma.ComponentTypeScalarFieldEnum = makeEnum({
  id: 'id',
  value: 'value'
});

exports.Prisma.ComponentScalarFieldEnum = makeEnum({
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
});

exports.Prisma.StageScalarFieldEnum = makeEnum({
  id: 'id',
  label: 'label',
  order: 'order',
  enabled: 'enabled',
  barn: 'barn'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});
exports.DeliveryServiceEnum = makeEnum({
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
});

exports.StatusEnum = makeEnum({
  NOT_STARTED: 'NOT_STARTED',
  STARTED: 'STARTED',
  COMPLETED: 'COMPLETED',
  PROBLEM: 'PROBLEM',
  STOPPED: 'STOPPED',
  CANCELLED: 'CANCELLED',
  DISABLED: 'DISABLED'
});

exports.SourceEnum = makeEnum({
  ETSY: 'ETSY',
  OPENCART: 'OPENCART',
  WAYFAIR: 'WAYFAIR',
  EBAY: 'EBAY',
  STAGING: 'STAGING',
  GLB_UK: 'GLB_UK',
  GLB_USA: 'GLB_USA'
});

exports.Prisma.ModelName = makeEnum({
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
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
