import { Component, OnInit } from '@angular/core';
import { IssueServiceClient } from 'src/app/services/issue.service.client';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-add-issue',
    templateUrl: './add-issue.component.html',
    styleUrls: ['./add-issue.component.css']
})
export class AddIssueComponent implements OnInit {

    constructor(private issueService: IssueServiceClient, private route: ActivatedRoute, private router: Router) { }

    repoId = ''
    issue = { title: '', repository: '', dateOpened: Date.now(), priority: '', description: '', resolved: false }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.repoId = params.rid
        })
    }

    addIssue = () => {
        this.issue.repository = this.repoId;
        this.issueService.createIssue(this.issue)
            .then(resp => console.log(resp))
    }

    success = () => {
        alert('Issue added successfully!')
        this.router.navigate([`/repositories/${this.repoId}`])
    }

    error = () => {
        alert('Adding Issue failed!')
        this.router.navigate([`/repositories/${this.repoId}`])
    }

}
