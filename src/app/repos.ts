export class Repos {
  constructor(
    public name:string,
    public html_url:string,
    public updated_at:Date,
    public created_at: Date,
    public forks: number,
    public language:string,
    public clone_url: string,
    public homepage: string,
  ){}  
}
