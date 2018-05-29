export class Repo {
  id: number;
  name: string;
  description: string;
  stargazers_count:number;
  created_at:string;
  owner:{
  	login:string;
  	avatar:string;
  };
}