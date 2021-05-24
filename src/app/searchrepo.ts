export class Searchrepo {
  constructor(
    public full_name : string,
    public html_url : string,
    public description: string,
    public updated_at : Date,
    public created_at : Date,
    public language : string,
    public forks_count : number,
    public name : string,

  ){} 
}
