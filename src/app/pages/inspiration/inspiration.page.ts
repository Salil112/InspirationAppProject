import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/sercices/common.service';

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.page.html',
  styleUrls: ['./inspiration.page.scss'],
})
export class InspirationPage implements OnInit {

  constructor(private router: Router, public _commonService: CommonService) { }

  ngOnInit() {
  }

  editDetails(id: string) {
    //navigating to detail page
    this.router.navigate(['inspiration/' + id]);
  }

  deleteDetails(id: string) {
    //delete the record from list
    this._commonService.presentAlertConfirm('Are you sure you want to delete this record').then(async (res) => {
      try {
        this._commonService.inspirationRecords.splice(id, 1);
      } catch (error) {
        console.log("The error", error);
      }
    })
      .catch((err) => {
        console.log("The error", err);
      })
  }

  logOut() {
    this._commonService.presentAlertConfirm('Are you sure you want to logout?')
      .then(async (res) => {
        try {
          this._commonService.authToken = '';
          this.router.navigate(['login']);
        } catch (error) {
          console.log("The error", error);
        }
      })
      .catch((err) => {
        console.log("The error", err);
      })
  }

}
