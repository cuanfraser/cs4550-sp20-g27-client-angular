import { Component, OnInit } from '@angular/core';
import { RepositoryServiceClient } from 'src/app/services/repository.service.client';

@Component({
    selector: 'app-repositories',
    templateUrl: './repositories.component.html',
    styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

    constructor(private service: RepositoryServiceClient) { }

    repos = []

    ngOnInit(): void {
        this.service.findAllRepositories()
            .then(repos => this.repos = repos)
    }

}
