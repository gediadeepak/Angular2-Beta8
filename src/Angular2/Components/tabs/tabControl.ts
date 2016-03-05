//our root app component
import {Component} from 'angular2/core';
import {Tabs} from './tabs';
import {Tab} from './tab';


@Component({
    selector: 'tab-control',
    templateUrl:'./components/tabs/tabExample.html',
    directives: [Tabs, Tab]
})
export class TabControl { }