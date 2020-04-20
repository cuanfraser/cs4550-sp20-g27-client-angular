import { Injectable } from '@angular/core';
import { HEROKUNODE } from '../../../constants.js'

@Injectable()
export class UserServiceClient {
    findAllUsers = () =>
        fetch(`${HEROKUNODE}/api/users`)
            .then(response => response.json())
    findUserById = (id) =>
        fetch(`${HEROKUNODE}/api/users/${id}`)
            .then(response => response.json())
    createUser = (user) =>
        fetch(`${HEROKUNODE}/api/users`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
}