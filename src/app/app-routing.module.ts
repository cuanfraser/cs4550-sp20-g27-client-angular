import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { RepositoriesComponent } from './components/repositories/repositories/repositories.component';
import { RepositoryComponent } from './components/repositories/repository/repository.component';
import { AddRepoComponent } from './components/repositories/add-repo/add-repo.component';
import { SearchComponent } from './components/search/search.component';
import { DetailsComponent } from './components/details/details.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'privacy', component: PrivacyComponent },
    { path: 'repositories', component: RepositoriesComponent },
    { path: 'repositories/new', component: AddRepoComponent },
    { path: 'repository/:rid', component: RepositoryComponent },
    { path: 'search', component: SearchComponent },
    { path: 'search/:keywords', component: SearchComponent },
    { path: 'details/:owner/:repo', component: DetailsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
