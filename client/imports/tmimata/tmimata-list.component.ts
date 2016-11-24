import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { MeteorObservable } from 'meteor-rxjs';
import { PaginationService } from 'ng2-pagination';
import { Counts } from 'meteor/tmeasday:publish-counts';
import { InjectUser } from 'angular2-meteor-accounts-ui';

import 'rxjs/add/operator/cobineLatest';

import { Tmimata } from '../../../both/collections/tmimata.collection';
import { Tmima } from '../../../both/models/tmima.model';

import template from './tmimata-list.component.html';
import style from './tmimata-list.component.scss';

interface Pagination {
    limit: number;
    skip: number;
}

interface Options extends Pagination{
    [key: string]: any
}

@Component({
    selector: 'tmimata-list',
    template,
    styles: [style]
})
@InjectUser('user')
exprt class TmimataListComponent implements OnInit, OnDestroy{
    tmimata: Observable<Tmima[]>;
    tmimataSub: Subscription;
    pageSize: Subject<number> = new Subject<number>();
    curPage: Subject<number> = new Subject<number>();
    nameOrder: Subject<number> = new Subject<number>();
    optionsSub: Subscription;
    tmimataSize: number = 0;
    autorunSub: Subscription;
    searchText: Subject<string> = new Subject<string>();
    user: Meteor.User;

    constructor(
        private paginationService: PaginationService
    ){}

    ngOnInit(){
        this.optionsSub = Observable.combineLatest(
            this.pageSize,
            this.curPage,
            this.nameOrder
            this.searchText
        ).subscribe(([pageSize, curPage, nameOrder, searchText]) => {
            const options: Options = {
                limit: pageSize as number,
                skip: ((curPage as number)-1 ) * (pageSize as number),
                sort: {name: nameOrder as number}
            };

            this.paginationService.setCurrentPage(this.paginationService.defaultId, curPage as number);

            if (this.tmimataSub){
                this.tmimataSub.unsubscribe();
            }

            this.tmimataSub = MeteorObservable.subscribe('tmimata', options, searchText).subscribe(()=>{
                this.tmimata = Tmimata.find({}, {
                    sort: {
                        name: nameOrder
                    }
                }).zone();
            });
        });

        this.paginationService.register({
            id: this.paginationService.defaultId,
            itemsPerPage: 10,
            curPage: 1,
            totalItems: this.tmimataSize
        });

        this.pageSize.next(10);
        this.curPage.next(1);
        this.nameOrder.next(1);
        this.searchText.next('')

        this.autorunSub = MeteorObservable.autorun().subscribe(()=>{
            this.tmimataSize = Counts.get('numberOfTmimata');
            this.paginationService.setTotalItems(this.paginationService.defaultId, this.tmimataSize);
        });
    }

    removeTmima(tmima: Tmima):void{
        Tmimata.remove(tmima._id);
    }

    search(value: string):void{
        this.curPage.next(1);
        this.searchText.next(value);
    }

    onPageChanged(page: number):void{
        this.curPage.next(page);
    }

    changeSortOrder(nameOrder: string): void{
        this.nameOrder.next(parseInt(nameOrder))
    }

    canDelete(tmima: Tmima):boolean{
        //TODO: add users' privillages... 
        return true;
    }

    ngOnDestroy(){
        this.tmimataSub.unsubscribe();
        this.optionsSub.unsubscribe();
        this.autorunSub.unsubscribe();
    }
}