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

    ngOnInit(): void {
    }

    login = () =>
        this.service.login(this.username, this.password)
            .then(resp => {
                console.log(resp)
                this.router.navigate(['/profile'])
            })

}
