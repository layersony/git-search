import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { environment } from '../environments/environment';
import { environment } from '../environments/environment.prod'
import { Userdetail } from './userdetail';
import { Repos } from './repos';
import { Searchrepo } from './searchrepo';


@Injectable({
  providedIn: 'root'
})
export class GithubsearchService {

  userdetail: Userdetail;
  repos: Repos;
  searchrepo:Searchrepo;
  repoData: any = []
  singleRepoData: any = []
  searchreps:any = []
  totalCount: number = 0


  constructor(private http: HttpClient) {
    this.userdetail = new Userdetail('', '', '', '', '', '', '', 'No email', '', '', 0, '', '', new Date(), new Date());
    this.repos = new Repos('', '', new Date(), new Date(), 0, '', '', '', '');
    this.searchrepo = new Searchrepo('', '', '', new Date(), new Date(), '', 0, '');
  }

  // RECEIVING THE DATA
  getUserDetails(user: string) {


    interface ApiResponse {
      login: string,
      avatar_url: string,
      repos_url: string,
      name: string,
      url: string,
      blog: string,
      location: string,
      email: string,
      bio: string,
      twitter_username: string,
      public_repos: number,
      followers: string,
      following: string,
      created_at: Date,
      updated_at: Date,
    }

    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>('https://api.github.com/users/' + user + '?access_token=' + environment.apiKey).toPromise().then(response => {
        this.userdetail.login = response.login,
        this.userdetail.avatar_url = response.avatar_url,
        this.userdetail.repos_url = response.repos_url,
        this.userdetail.name = response.name
        this.userdetail.url = response.url
        this.userdetail.blog = response.blog
        this.userdetail.location = response.location
        this.userdetail.email = response.email
        this.userdetail.bio = response.bio
        this.userdetail.twitter_username = response.twitter_username
        this.userdetail.followers = response.followers
        this.userdetail.following = response.following
        this.userdetail.created_at = new Date(response.created_at)
        this.userdetail.update_at = new Date(response.updated_at)
        this.userdetail.public_repos = response.public_repos

        resolve("it's a Success")
      }), (error: any) => {
        reject(error);
      }

      this.repoData.splice(0, this.repoData.length) // deleting an array

      this.http.get<any>('https://api.github.com/users/' + user + '/repos?access_token=' + environment.apiKey).toPromise().then(response => {
        for (var i = 0; i < response.length; i++) {
          this.singleRepoData = new Repos(response[i].name, response[i].html_url, response[i].updated_at, new Date(response[i].created_at), response[i].forks, response[i].language, response[i].clone_url, response[i].homepage, response[i].description)
          this.repoData.push(this.singleRepoData)

        }
        resolve('Success')
      }), (error: any) => {
        reject(error)
      }
    })
    return promise;
  }

  getRepos(query: string) {
    interface ApiResponse {
      total_count: number,
    }
    this.repoData.splice(0, this.repoData.length) // deleting an array
    let promise = new Promise((resolve, reject) => {
      this.http.get<any>('https://api.github.com/search/repositories?q=' + query).toPromise().then(response => {
        this.totalCount = response.total_count

        for (var i = 0; i < response.items.length; i++) {
          console.log(response.items[i].full_name)
          this.singleRepoData = new Searchrepo(response.items[i].full_name, response.items[i].html_url, response.items[i].description, new Date(response.items[i].updated_at), new Date(response.items[i].created_at), response.items[i].language, response.items[i].forks_count,  response.items[i].name )
          this.searchreps.push(this.singleRepoData)
        }
        resolve('Success')
      }), (error: any) => {
        reject(error)
      }

      this.http.get<ApiResponse>('https://api.github.com/search/repositories?q=' + query).toPromise().then(response => {
        this.totalCount = response.total_count
        console.log(this.totalCount)
        resolve('Success')
      }), (error: any) => {
        reject(error)
      }
    })
    return promise;
  }
}
