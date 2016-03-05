import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import { Inject} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Location, ROUTER_BINDINGS, LocationStrategy, HashLocationStrategy, Route, AsyncRoute, Router} from 'angular2/router';

import {Confirm} from './confirm'
import {ThankYou} from './thankyou'
import {Registration} from './registrationObject'
import {RegisterService} from './registerService'
import {FORM_DIRECTIVES, FormBuilder, CORE_DIRECTIVES, Validators, ControlGroup} from 'angular2/common'
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';
import {Tabs} from '../tabs/tabs';
import {Tab} from '../tabs/tab';
@Component({
    selector: 'register',
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, CORE_DIRECTIVES, Tabs, Tab],
    templateUrl: './components/location/register.html',
    providers: [RegisterService]
})
     
export class Register {
    location: any;
    form;
    payload=null;
    showLoading: boolean = false;
    formBuilder: FormBuilder;
    result: any;
    regdata: any;
    registrationService: RegisterService;
    fname: string = '';
    lname: string = '';
    type: string = 'home';
    address: string = '';


    constructor( @Inject(Location) private locationObj: Location,
        @Inject(Router) private router: Router,
        @Inject(RegisterService) private regService: RegisterService,
        @Inject(FormBuilder) private fb: FormBuilder) {
        this.location = locationObj;
        this.registrationService = regService;
        this.formBuilder = fb;
        this.getRegistrationDetails();

       
        this.form = this.formBuilder.group({
            "fname": [this.fname, Validators.required],
            "lname": [this.lname, Validators.required],
            "type": [this.type],
            "address": [this.address, Validators.required]
        });
        
    }

    gotoConfirm() {
        let self = this;
        self.showLoading = true;
        this.payload = JSON.stringify(this.form.value);
        var registration = new Registration(this.form.controls.fname.value, this.form.controls.lname.value, this.form.controls.type.value, this.form.controls.address.value);
        this.registrationService.saveRegistrationDetails(registration).map((res: Response) => res.json()).subscribe(function (res) {
            self.showLoading = false;
            self.result = res;
            console.log(self.result)
            if (self.result.RegDetails.DataSaved == true) {
                self.registrationService.setReturnedResult(self.result);
                self.router.navigateByUrl('/Register/Confirm');
            }
        });
        
    }

    getRegistrationDetails() {
        let self = this;
        self.showLoading = true;
        this.registrationService.getRegistrationDetails().map((res: Response) => res.json()).subscribe(res=> this.mapResult(res));
    }
    mapResult(data) {
        this.regdata = data.registrationDetails;
        console.log(this.regdata);
        if (this.regdata != null) {
            this.fname = this.regdata.FirstName;
            this.lname = this.regdata.LastName;
            this.type = this.regdata.Type;
            this.address = this.regdata.Address;
        }
        this.showLoading = false;

    }
}