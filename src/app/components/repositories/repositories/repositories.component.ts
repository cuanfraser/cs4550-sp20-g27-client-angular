import { Component, OnInit } from '@angular/core';
import { RepositoryServiceClient } from 'src/app/services/repository.service.client';
import { UserServiceClient } from 'src/app/services/user.service.client';

@Component({
    selector: 'app-repositories',
    templateUrl: './repositories.component.html',
    styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

    constructor(private service: RepositoryServiceClient, private userService: UserServiceClient) { }

    repos = []
    profile = { _id: '', username: '', password: '', firstname: '', lastname: '', github: '', email: '', joinDate: '', role: '' }
    loggedIn = false;

    ngOnInit(): void {
        this.service.findAllRepositories()
            .then(repos => this.repos = repos);
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
