export type mixtureDataType = {
  mixture: string[];
  makes: string[];
}[];

export type extractionDataType = {
  from: string;
  to: string[];
}[];

export type alchemyItemsDataType = {
  id: string;
  name: string;
  prettyPrint: string;
  imgSrc: null | string;
}[];
