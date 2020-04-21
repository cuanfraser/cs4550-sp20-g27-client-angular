import { Injectable } from '@angular/core';
import { GITHUBAPI } from '../../../constants.js'

@Injectable()
export class GithubServiceClient {
    searchRepos = (keywords) =>
        fetch(`${GITHUBAPI}/search/repositories?q=${keywords}`)
            .then(response => response.json())
    getRepo = (owner, repo) =>
        fetch(`${GITHUBAPI}/repos/${owner}/${repo}`)
            .then(response => response.json())
}