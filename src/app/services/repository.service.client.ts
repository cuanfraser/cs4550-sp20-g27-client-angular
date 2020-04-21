import { Injectable } from '@angular/core';
import { HEROKUNODE } from '../../../constants.js'
@Injectable()
export class RepositoryServiceClient {
    findAllRepositories = () =>
        fetch(`${HEROKUNODE}/api/repos`)
            .then(response => response.json())
    findRepositoryById = (id) =>
        fetch(`${HEROKUNODE}/api/repos/${id}`)
            .then(response => response.json())
    createRepository = (repo) =>
        fetch(`${HEROKUNODE}/api/repos`, {
            method: 'POST',
            body: JSON.stringify(repo),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
    updateRepository = (id, repo) =>
        fetch(`${HEROKUNODE}/api/repos/${id}`, {
            method: 'PUT',
            body: JSON.stringify(repo),
            headers: {
                'content-type': 'application/json'
            }
        })

    deleteRepository = (id) =>
        fetch(`${HEROKUNODE}/api/repos/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
}