export class Repos {
  constructor(
    public name : string,
    public html_url : string,
    public updated_at : string,
    public created_at : string,
    public forks : number,
    public language : string,
    public clone_url : string,
    public homepage : string,
    public description: string,
  ){}  
}
