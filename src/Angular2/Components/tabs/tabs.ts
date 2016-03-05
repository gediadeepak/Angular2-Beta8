import {Component, View } from 'angular2/core';
import {Location,Route,Router } from 'angular2/router';
import {Tab} from './tab'
import { Inject} from 'angular2/core';
@Component({
    selector: 'tabs',
    templateUrl: './components/tabs/Tabs.html' 
})
export class Tabs {
    tabs: Tab[];
    location: any;
    constructor( @Inject(Location) private locationObj: Location) {
        this.tabs = [];
        this.location = locationObj;
    }

    selectTab(tab) {

        _deactivateAllTabs(this.tabs);
        tab.active = true;

        function _deactivateAllTabs(tabs: Tab[]) {
            tabs.forEach((tab) => tab.active = false);
        }

    }
  
    addTab(tab: Tab) {
        if (this.tabs.length === 0) {
            tab.active = true;
        }
        this.tabs.push(tab);
    }

    getCurrentLocation() {
        return this.location.path();
    }
}