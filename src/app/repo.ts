export class Repo {
  id: number;
  name: string;
  description: string;
  stargazers_count:number;
  created_at:date;
  owner:{
  	login:string;
  	avatar:string;
  };
}