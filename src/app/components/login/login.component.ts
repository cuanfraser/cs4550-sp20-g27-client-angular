import { Component, OnInit } from '@angular/core';
import { UserServiceClient } from 'src/app/services/user.service.client';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private router: Router, private service: UserServiceClient) { }

    navName = "login"
    username = ''
    password = ''
    profile = { _id: '', username: '', password: '', firstname: '', lastname: '', github: '', email: '', joinDate: '', role: '' }
    loggedIn = false

    ngOnInit(): void {
        this.service.profile()
            .then(response => {
                if (!response.message) {
                    this.loggedIn = true;
                    this.profile = response
                    alert('You are already logged in! Please log out first!')
                    this.router.navigate(['/profile'])
                }
                else {
                    this.loggedIn = false;
                }
            });
    }

    login = () =>
        this.service.login(this.username, this.password)
            .then(resp => {
                console.log(resp)
                this.router.navigate(['/profile'])
            })

}
