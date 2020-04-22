import { Component, OnInit } from '@angular/core';
import { UserServiceClient } from 'src/app/services/user.service.client';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    constructor(private service: UserServiceClient, private router: Router) { }

    navName = "profile"

    profile = { _id: '', username: '', password: '', firstname: '', lastname: '', github: '', email: '', joinDate: '', role: '' }
    loggedIn = true;
    date = ''
    updated = false

    ngOnInit(): void {
        this.service.profile()
            .then(response => {
                if (!response.message) {
                    this.loggedIn = true;
                    this.profile = response
                    this.formatDate()
                }
                else {
                    this.loggedIn = false;
                    alert('Please Log In')
                    this.router.navigate(['/login'])
                }
            });
    }

    logout = () =>
        this.service.logout()
            .then(resp => this.router.navigate(['/login']))

    formatDate = () => {
        const pipe = new DatePipe('en-GB')
        this.date = pipe.transform(this.profile.joinDate, 'full')
    }

    update = () =>
        this.service.updateUser(this.profile._id, this.profile)
            .then(resp => console.log(resp))
}
