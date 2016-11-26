import { CollectionObject } from './collection-object.model';

export interface Student extends CollectionObject{
    eponymo: string;
    onoma: string;
    kinito: string;
    tmima: string;
    spPayment?: number;
}