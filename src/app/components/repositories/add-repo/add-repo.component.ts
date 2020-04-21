import { Component, OnInit } from '@angular/core';
import { RepositoryServiceClient } from 'src/app/services/repository.service.client';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-repo',
    templateUrl: './add-repo.component.html',
    styleUrls: ['./add-repo.component.css']
})
export class AddRepoComponent implements OnInit {

    constructor(private router: Router, private service: RepositoryServiceClient) { }

    newRepo = { name: '', url: '', description: '', issueTickets: [] }

    ngOnInit(): void {
    }

    addRepo = () => {
        this.service.createRepository(this.newRepo)
            .then(resp => resp._id ? this.success() : this.error())
    }

    success = () => {
        alert('Repository added successfully!')
        this.router.navigate(['/repositories'])
    }

    error = () => {
        alert('Adding Repository failed!')
        this.router.navigate(['/repositories'])
    }

}
