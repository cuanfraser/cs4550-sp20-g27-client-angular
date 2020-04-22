import { Component, OnInit } from '@angular/core';
import { GithubServiceClient } from 'src/app/services/github.service.client';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private githubService: GithubServiceClient) { }

    navName = "home"

    results = []

    ngOnInit(): void {
        this.githubService.getLatestRepos()
            .then(resp => {
                this.results = resp
            })
    }

}
