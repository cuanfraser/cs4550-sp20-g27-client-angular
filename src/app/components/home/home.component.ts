import { Component, OnInit } from '@angular/core';
import { GithubServiceClient } from 'src/app/services/github.service.client';
import { UserServiceClient } from 'src/app/services/user.service.client';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private githubService: GithubServiceClient, private userService: UserServiceClient) { }

    navName = "home"

    results = []
    profile = { _id: '', username: '', password: '', firstname: '', lastname: '', github: '', email: '', joinDate: '', role: '' }
    loggedIn = false;

    ngOnInit(): void {
        this.githubService.getLatestRepos()
            .then(resp => {
                this.results = resp
            });
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
