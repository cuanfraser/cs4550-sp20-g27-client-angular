import { Injectable } from '@angular/core';
import { HEROKUNODE } from '../../../constants.js'
@Injectable()
export class IssueServiceClient {
    findAllIssues = () =>
        fetch(`${HEROKUNODE}/api/issues`)
            .then(response => response.json())
    findIssueById = (id) =>
        fetch(`${HEROKUNODE}/api/issues/${id}`)
            .then(response => response.json())
    createIssue = (issue) =>
        fetch(`${HEROKUNODE}/api/issues`, {
            method: 'POST',
            body: JSON.stringify(issue),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
    updateIssue = (id, issue) =>
        fetch(`${HEROKUNODE}/api/issues/${id}`, {
            method: 'PUT',
            body: JSON.stringify(issue),
            headers: {
                'content-type': 'application/json'
            }
        })

    deleteIssue = (id) =>
        fetch(`${HEROKUNODE}/api/issues/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())

    findIssuesForRepo = (rid) =>
        fetch(`${HEROKUNODE}/api/repos/${rid}/issues`)
            .then(response => response.json())
}