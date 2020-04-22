import { Component, OnInit } from '@angular/core';
import { UserServiceClient } from 'src/app/services/user.service.client';

@Component({
    selector: 'app-privacy',
    templateUrl: './privacy.component.html',
    styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {

    constructor(private userService: UserServiceClient) { }

    profile = { _id: '', username: '', password: '', firstname: '', lastname: '', github: '', email: '', joinDate: '', role: '' }
    loggedIn = false;

    ngOnInit(): void {
        this.userService.profile()
            .then(response => {
                if (!response.message) {
                    this.loggedIn = true;
                    this.profile = response
                }
                else {
                    this.loggedIn = false;
                }
            });
    }

}
