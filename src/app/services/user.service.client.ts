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
    updateUser = (id, user) =>
        fetch(`${HEROKUNODE}/api/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        })


    logout = () =>
        fetch(`${HEROKUNODE}/api/users/logout`, {
            method: 'POST',
            credentials: 'include'
        })

    profile = () =>
        fetch(`${HEROKUNODE}/api/users/profile`, {
            method: 'POST',
            credentials: 'include'
        }).then(response => response.json())

    login = (username, password) =>
        fetch(`${HEROKUNODE}/api/users/login`, {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'include'
        }).then(response => response.json())

    register = (user) =>
        fetch(`${HEROKUNODE}/api/users/register`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'include'
        }).then(response => response.json())
}