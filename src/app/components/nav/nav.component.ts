import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceClient } from 'src/app/services/user.service.client';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    constructor(private navRouter: Router, private userService: UserServiceClient) { }

    @Input()
    navPage = ''

    searchTerm = ''
    profile = { _id: '', username: '', password: '', firstname: '', lastname: '', github: '', email: '', joinDate: '', role: '' }
    @Input()
    loggedIn = false

    ngOnInit(): void {
        this.userService.profile()
            .then(response => {
                if (!response.message) {
                    this.profile = response
                    this.loggedIn = true;
                }
                else {
                    this.loggedIn = false;
                }
            });
    }

    search = () => {
        if (this.searchTerm.length > 0) {
            this.navRouter.navigate([`/search/${this.searchTerm}`])
        }
    }

}
