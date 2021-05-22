import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Userdetail } from './userdetail';
import { Repos } from './repos';


@Injectable({
  providedIn: 'root'
})
export class GithubsearchService {

  userdetail : Userdetail;
  repos : Repos;
  repoData : any = [] // repo data full
  singleRepoData : any = [] // single repo data


  constructor(private http:HttpClient) { 
    this.userdetail = new Userdetail('', '', '', ''); // for userdetails
    this.repos = new Repos('', '', new Date()); // for repos
  }

  // RECEIVING THE DATA
  getUserDetails(user:string){

    this.userdetail = new Userdetail('', '', '', '');  // make sure userdetail is empty

    interface ApiResponse {
      login:string,
      avatar_url:string,
      repos_url:string,
      name:string,
    }

    let promise = new Promise((resolve, reject) =>{
      this.http.get<ApiResponse>('https://api.github.com/users/'+ user +'?access_token=' + environment.apiKey).toPromise().then(response => {
        this.userdetail.login = response.login,
        this.userdetail.avatar_url = response.avatar_url,
        this.userdetail.repos_url = response.repos_url,
        this.userdetail.name = response.name

        resolve("it's a Success")
      }), (error:any )=>{
        reject(error);
      }
    })
    return promise;
  }
  // RECEIVE REPOS
  getUserRepos(user:string){

    this.repoData.splice(0, this.repoData.length) // deleting an array

    let promise = new Promise((resolve, reject) => {
      this.http.get<any>('https://api.github.com/users/' + user + '/repos?access_token=' + environment.apiKey).toPromise().then(response => {
        for (var i = 0; i < response.length; i++) {
          this.singleRepoData = new Repos(response[i].name, response[i].html_url, response[i].updated_at)
          this.repoData.push(this.singleRepoData)
        }
        resolve('Success')
      }), (error: any) => {
        reject(error)
      }
    })
    
    return promise;
  }
}
