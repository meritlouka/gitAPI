import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { User } from '../user';
import { RepoService } from '../repo.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {
  selectedRepo: Repo;
  repos : Repo[];
  repoOwner: User;
  error : string;
  constructor(private repoService: RepoService ,private messageService: MessageService) { }

 
  ngOnInit() {
    
  }

  onSelect(repo: Repo): void {
    this.selectedRepo = repo;
  }

  getRepos(userName: string): void {
     if (!userName) { 
          this.messageService.add('No UserName Entered');     
                  this.repos =[];
                  this.repoOwner = null; 
                  return; 
       }
     this.repoService.getUserRepos(userName).subscribe(
               repos => {
                  this.repos = repos;
                  this.repoOwner = null;
                  if(repos.length >0 ){this.repoOwner = repos['0'].owner;}
                  
                }  
             
               
          );
  } 
}
