import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Tabs} from '../tabs/tabs';
import {Tab} from '../tabs/tab';

@Component({
    selector: 'about',
    directives: [ROUTER_DIRECTIVES, Tabs, Tab],
    templateUrl: './components/home/home.html'
})

export class Home {
    
} 