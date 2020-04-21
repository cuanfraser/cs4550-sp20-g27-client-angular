import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubServiceClient } from 'src/app/services/github.service.client';
import { RepositoryServiceClient } from 'src/app/services/repository.service.client';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

    constructor(private route: ActivatedRoute, private router: Router, private githubService: GithubServiceClient, private repoService: RepositoryServiceClient) { }

    response = { name: '', description: '', html_url: '' }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.githubService.getRepo(params.owner, params.repo)
                .then(response => {
                    this.response = response
                })
        })
    }

    addRepo = () => {
        this.repoService.createRepository({ name: this.response.name, description: this.response.description, url: this.response.html_url })
            .then(resp => resp._id ? this.success(resp._id) : this.error())
    }

    success = (id) => {
        alert('Repository added successfully!')
        this.router.navigate([`/repository/${id}`])
    }

    error = () => {
        alert('Adding Repository failed!')
    }

}
