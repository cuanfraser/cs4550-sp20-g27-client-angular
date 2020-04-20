import { Component, OnInit } from '@angular/core';
import { UserServiceClient } from 'src/app/services/user.service.client';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    constructor(private userService: UserServiceClient) { }

    navName = "register"

    ngOnInit(): void {
    }

    register = (user) => {
        this.userService.createUser(user);
    }

}
