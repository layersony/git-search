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
  repoData : any = []
  singleRepoData : any = [] 


  constructor(private http:HttpClient) { 
    this.userdetail = new Userdetail('', '', '', '','','','','No email','','',0,'','', '', '');
    this.repos = new Repos('', '', '', '', 0, '', '', '', ''); 
  }

  // RECEIVING THE DATA
  getUserDetails(user:string){


    interface ApiResponse {
      login:string,
      avatar_url:string,
      repos_url:string,
      name:string,
      url:string,
      blog:string,
      location:string,
      email:string,
      bio:string,
      twitter_username:string,
      public_repos:number,
      followers:string,
      following:string,
      created_at: string,
      update_at: string
    }

    let promise = new Promise((resolve, reject) =>{
      this.http.get<ApiResponse>('https://api.github.com/users/'+ user +'?access_token=' + environment.apiKey).toPromise().then(response => {
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
        this.userdetail.created_at = response.created_at
        this.userdetail.update_at = response.update_at


        resolve("it's a Success")
      }), (error:any )=>{
        reject(error);
      }

    this.repoData.splice(0, this.repoData.length) // deleting an array

      this.http.get<any>('https://api.github.com/users/' + user + '/repos?access_token=' + environment.apiKey).toPromise().then(response => {
        for (var i = 0; i < response.length; i++) {
          this.singleRepoData = new Repos(response[i].name, response[i].html_url, response[i].updated_at, response[i].created_at, response[i].forks, response[i].language, response[i].clone_url, response[i].homepage, response[i].description )
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
