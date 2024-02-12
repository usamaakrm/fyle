import { tap, throwError } from 'rxjs';
import { environment } from './../../environments/environment';
import { Pagination } from './../models/pagination';
import { UiState } from './../models/ui-state';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  /** * Initial uistate of the application  */
  initialUIState: UiState = {
    profileDetailState: 'LOADING',
    repoDetailState: 'LOADING'
  };

  /**
   * Initial pagination state of the application */
  initialPagination: Pagination = {
    previousPage: 1,
    currentPage: 1,
    perPage: 10,
  };
  http: any;
  constructor(private httpClient: HttpClient) { }
  /*** Loading state observable of data service*/
  private loadingState: BehaviorSubject<UiState> = 
  new BehaviorSubject<UiState>(this.initialUIState);
  /*** exposes private property for loadingState*/
  readonly dataLoadStatus$: Observable<UiState> = this.loadingState.asObservable();
  /*** Pagination state of data service*/
  private paginationState: BehaviorSubject<Pagination> =
    new BehaviorSubject<Pagination>(this.initialPagination);
  /*** exposes private property for paginationState*/
  readonly paginationStatus$: Observable<Pagination> = this.paginationState.asObservable();
  /**
   * Profile  of the provided user
  */
  private profile: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  readonly profileDetail$: Observable<any> = this.profile.asObservable();
  /**
   * Repos list of the provided user
  */
 private reposList: BehaviorSubject<any> = new BehaviorSubject<any>(null);
 /**
  * Repo details$ of data service
 */
readonly repoDetails$: Observable<any> = this.reposList.asObservable();

fetchReposSubscription !: Subscription;
/**
 * Fetchs profile details based on the username
 * @param username
*/
  fetchProfileDetails(username: string) {
    this.httpClient.get(environment.BASE_ENDPOINT + `users/${username}`).pipe(retry(1)).subscribe({
      next: (res: any) => {
        this.profile.next(res);
        this.fetchAssociatedRepo(1, username);
        this.setLoadingState('PROFILE', 'LOADED');
      },
      error: (err: HttpErrorResponse) => {
        if (err?.status === 404) {
          this.setLoadingState('PROFILE', 'NOT_FOUND');
        } else {
          this.setLoadingState('PROFILE', 'ERROR');
        }

      },
    });
  }
  /**
   * Fetchs repository associated with a github user
   * @param [pageNumber]
   * @param userName
  */
 fetchAssociatedRepo(pageNumber: number = 1, userName: string,perPage = this.initialPagination.perPage) {
   // implement getRepos method by referring to the documentation. Add proper types for the return type and params 
   this.fetchReposSubscription ? this.fetchReposSubscription.unsubscribe() :null;
   this.setLoadingState('REPO', 'LOADING');
    let params = new HttpParams();
    params = params.append('per_page', perPage);
    params = params.append('page', pageNumber);
    this.fetchReposSubscription = this.httpClient
      .get(environment.BASE_ENDPOINT + `users/${userName}/repos`, { params })
      .subscribe({
        next: (response) => {
          this.reposList.next(response);
          this.setLoadingState('REPO', 'LOADED');
          this.setPage(pageNumber);
        },
        error: (err: HttpErrorResponse) => {
          this.setLoadingState('REPO', 'ERROR');
        },
      });
  }
  /**
   * Sets loading state based on API call status
   * @param stateType
   * @param value
   */
  setLoadingState(
    stateType: 'PROFILE' | 'REPO',
    value: 'LOADED' | 'LOADING' | 'ERROR' | 'NOT_FOUND'
  ) {
    const currentState: UiState = { ...this.loadingState.getValue() };
    console.log(currentState);
    
    switch (stateType) {
      case 'PROFILE': {
        currentState.profileDetailState = value;
        break;
      }
      case 'REPO': {
        currentState.repoDetailState = value;
        break;
      }
    }
    console.log('State', currentState);
    this.loadingState.next(currentState);
  }
  /**
   * Sets page on page change in pagination state
   * @param pageNumber
   */
  setPage(pageNumber: number) {
    this.paginationState.next({
      ...this.paginationState.getValue(),
      ...{
        previousPage: this.paginationState.getValue().currentPage,
        currentPage: pageNumber,
      },
    });
  }

}
