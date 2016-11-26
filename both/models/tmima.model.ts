import { CollectionObject } from './collection-object.model';

export interface Tmima extends CollectionObject {
    name: string;
    day: string;
    timeFrom: string;
    timeTo: string;
    payment: number;
}