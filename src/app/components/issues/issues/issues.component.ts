import { Component, OnInit, Input } from '@angular/core';
import { IssueServiceClient } from 'src/app/services/issue.service.client';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-issues',
    templateUrl: './issues.component.html',
    styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {

    constructor(private issueService: IssueServiceClient, private route: ActivatedRoute) { }

    issues = []

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.issueService.findIssuesForRepo(params.rid)
                .then(resp => console.log(resp))
        });
    }

    addIssue = () => {
        this.issueService.createIssue
    }

}
