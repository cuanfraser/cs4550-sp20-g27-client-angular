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

    user = { username: '', password: '', joinDate: Date.now() }

    ngOnInit(): void {
    }

    register = () => {
        this.userService.register(this.user)
            .then(resp => console.log(resp))
    }

}
