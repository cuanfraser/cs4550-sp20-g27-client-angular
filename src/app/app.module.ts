import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { UserServiceClient } from './services/user.service.client';
import { RegisterComponent } from './components/register/register.component';
import { NavComponent } from './components/nav/nav.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { RepositoriesComponent } from './components/repositories/repositories/repositories.component';
import { RepositoryComponent } from './components/repositories/repository/repository.component';
import { RepositoryServiceClient } from './services/repository.service.client';
import { AddRepoComponent } from './components/repositories/add-repo/add-repo.component';
import { GithubServiceClient } from './services/github.service.client';
import { SearchComponent } from './components/search/search.component';
import { DetailsComponent } from './components/details/details.component';
import { IssuesComponent } from './components/issues/issues/issues.component';
import { IssueServiceClient } from './services/issue.service.client';
import { AddIssueComponent } from './components/issues/add-issue/add-issue.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    PrivacyComponent,
    RepositoriesComponent,
    RepositoryComponent,
    AddRepoComponent,
    SearchComponent,
    DetailsComponent,
    IssuesComponent,
    AddIssueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    UserServiceClient,
    RepositoryServiceClient,
    GithubServiceClient,
    IssueServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
