import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CheckboxModule} from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './pages/search/search.component';
import { RouterModule, Routes } from '@angular/router';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { UserDetailsLoaderComponent } from './shared/components/user-details-loader/user-details-loader.component';
import { UserDetailsComponent } from './shared/components/user-details/user-details.component';
import { CardLoaderComponent } from './shared/components/card-loader/card-loader.component';
import { RepoCardComponent } from './shared/components/repo-card/repo-card.component';
import { NoDataComponent } from './shared/components/no-data/no-data.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './services/token.interceptor';
const ROUTES : Routes = [
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  {
    path: 'profile',
    component: SearchComponent
  },
  {
    path: 'profile/:id',
    loadComponent:()=> import('./pages/profile-details/profile-details.component').then(c => c.ProfileDetailsComponent)
  },
  { path: '**', redirectTo: '/profile' }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    // CardLoaderComponent,
    // NoDataComponent,
    // RepoCardComponent,
    // UserDetailsComponent,
    // UserDetailsLoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    CheckboxModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
