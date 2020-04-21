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

    profile = { username: '', password: '', firstname: '', lastname: '', github: '', email: '', joinDate: '', role: '' }
    date = ''

    ngOnInit(): void {
        this.service.profile()
            .then(response => {
                if (response) {
                    this.profile = response
                    this.formatDate()
                    console.log(response)
                }
                else {
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

}
