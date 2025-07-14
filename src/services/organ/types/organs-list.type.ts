import { OrganSimpleDataType } from './organ-simple-data.type';

type ID = string;

export type OrgansListType = Array<OrganSimpleDataType & { id: ID }>;
