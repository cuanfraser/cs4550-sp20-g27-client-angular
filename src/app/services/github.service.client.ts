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
    getLatestRepos = () => {
        const id = Math.ceil(Math.random() * 100)
        return fetch(`${GITHUBAPI}/repositories?since=${id}`)
            .then(response => response.json())
    }
}