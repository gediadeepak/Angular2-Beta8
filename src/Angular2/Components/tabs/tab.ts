import { Component } from 'angular2/core';
import {Tabs} from './tabs';
import { Inject} from 'angular2/core';
@Component({
    selector: 'tab',
    inputs: ['title:tabTitle', 'active'],
    styles: ['.pane{padding: 1em; }'],
    templateUrl:'./components/tabs/tab.html'
})
export class Tab {
    title: string;
    active = this.active || false;

    constructor( @Inject(Tabs) public tabs: Tabs) {

        tabs.addTab(this);

    }
}