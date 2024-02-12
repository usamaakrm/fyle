import { TestBed } from '@angular/core/testing';
import { from, of } from 'rxjs';
import { UserDetails } from '../models/user-details';

import { DataService } from './api.service';
import { userDetails } from './testing-data';
import {HttpClientTestingModule,HttpTestingController} from   '@angular/common/http/testing';
import { Inject } from '@angular/core';
describe('DataService', () => {
  let service: DataService;
  let httpMock : HttpTestingController;
  beforeEach(() => {
    
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set profile details', (done: DoneFn) => {
    const expectedUserDetails:any =  userDetails;
    service.fetchProfileDetails('freeCodeCamp');
    

    const sub1 = service.profileDetail$.subscribe({
      next:(userDetails)=>{
        if(userDetails){
          expect(userDetails)
          .withContext('expected user details')
          .toEqual(expectedUserDetails);
          done();
        }
      },
      error:()=>{
        fail('Error Occured')
      }
    }) 
    const req = httpMock.expectOne('https://api.github.com/users/freeCodeCamp');
    expect(req.request.method === 'GET');
    req.flush(expectedUserDetails);
    sub1.unsubscribe();
    
  });
});


