import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubServiceClient } from 'src/app/services/github.service.client';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    constructor(private route: ActivatedRoute, private router: Router, private githubService: GithubServiceClient) { }

    results = []
    count = -1
    nosearch = false;
    newSearch = ''

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            if (params.keywords) {
                this.githubService.searchRepos(params.keywords)
                    .then(resp => {
                        this.results = resp.items
                        this.count = resp.total_count
                    })
            }
            else {
                this.nosearch = true
            }
        })
    }

    search = () => {
        if (this.newSearch.length > 0) {
            this.router.navigate([`/search/${this.newSearch}`])
        }
    }

}
