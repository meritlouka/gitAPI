import { Component, OnInit, Input} from '@angular/core';
import { Repo } from '../repo';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
 

import { RepoService }  from '../repo.service';

@Component({
  selector: 'app-repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.css']
})
export class RepoDetailComponent implements OnInit {
  @Input() repo: Repo;
  repos : Repo[];
  constructor(private route: ActivatedRoute,
    private repoService: RepoService,
    private location: Location) { }

 
  ngOnInit(): void {
      this.getRepo();
  }
 
  getRepo(): void {
     const id = +this.route.snapshot.paramMap.get('id');
     const userName = this.route.snapshot.paramMap.get('userName');


      this.repoService.getUserRepos(userName).subscribe(
          repos => {this.repos = repos ;
               
                const arr =  this.repos;
        
                for (var i=0, iLen=arr.length; i<iLen; i++) {

                  if (arr[i].id == id) {this.repo= arr[i];}
                }
             }
        );
  }
 
  goBack(): void {
    this.location.back();
  }
}
