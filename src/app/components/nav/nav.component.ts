import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    constructor(private navRouter: Router) { }

    @Input()
    navPage = ''

    searchTerm = ''

    ngOnInit(): void {
    }

    search = () => {
        if (this.searchTerm.length > 0) {
            this.navRouter.navigate([`/search/${this.searchTerm}`])
        }
    }

}
