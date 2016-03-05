import {Component} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {Tabs} from '../tabs/tabs';
import {Tab} from '../tabs/tab';
@Component({
    selector: 'about',
    directives: [ROUTER_DIRECTIVES, Tabs, Tab],
    templateUrl: './components/about/about.html'
    
})

export class About {
     
}