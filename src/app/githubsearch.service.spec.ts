import { TestBed } from '@angular/core/testing';

import { GithubsearchService } from './githubsearch.service';

describe('GithubsearchService', () => {
  let service: GithubsearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubsearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
