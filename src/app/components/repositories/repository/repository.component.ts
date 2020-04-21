import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RepositoryServiceClient } from 'src/app/services/repository.service.client';

@Component({
    selector: 'app-repository',
    templateUrl: './repository.component.html',
    styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

    constructor(private route: ActivatedRoute, private router: Router, private service: RepositoryServiceClient) { }

    repoId = ''
    repo = { name: '', url: '', description: '', issueTickets: [] }
    success = false
    submitted = false

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.repoId = params.rid;
            this.service.findRepositoryById(params.rid)
                .then(repo => this.repo = repo);
        });
    }

    updateRepo = () => {
        this.service.updateRepository(this.repoId, this.repo)
            .then(resp => this.success = resp.ok)
        this.submitted = true;
    }

    deleteRepo = () => {
        if (confirm("Are you sure you want to delete this repository?")) {
            this.service.deleteRepository(this.repoId)
                .then(resp => console.log(resp))
                .then(resp => this.router.navigate(['/repositories']))
        }
    }

}
