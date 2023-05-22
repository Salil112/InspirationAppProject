import { Component, OnInit } from '@angular/core';
import { WebView } from '@awesome-cordova-plugins/ionic-webview/ngx';
import { ImagePicker, ImagePickerOptions } from '@awesome-cordova-plugins/image-picker/ngx';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/sercices/common.service';

@Component({
  selector: 'app-inspiration-details',
  templateUrl: './inspiration-details.page.html',
  styleUrls: ['./inspiration-details.page.scss'],
})
export class InspirationDetailsPage implements OnInit {
  displayImage:any;
  displayForm:any = FormGroup;
  imageUpload:boolean = false;
  detailsId:any = '';
  values:any = {};

  constructor(private webview: WebView,private imagePicker: ImagePicker,private formBuilder: FormBuilder, private route: ActivatedRoute,public _commonService:CommonService,private router:Router) { }

  ngOnInit() {
    this.displayForm = this.formBuilder.group({
      Title: ['', [Validators.required]],
      Description: ['',[Validators.required]],
    });

    this.detailsId = this.route.snapshot.paramMap.get('id');
    //checking if this is new post or old update
    if(this.detailsId=='0'){
      this.detailsId = null;
    }
    if(this.detailsId){
      this.getDetails();
    }
  }

  getDetails(){
    //retreiving data for update and view
    this.values = this._commonService.inspirationRecords.find((x: any)=>x.id==this.detailsId);
    if(this.values){
      this.displayForm.patchValue({
        Title: this.values.title,
        Description: this.values.description,
      })
      this.displayImage = this.values.image?this.values.image:"";
      if(this.displayImage!='' && this.displayImage!=null){
        this.imageUpload = true;
      }
    }
  }

  pickImage(){
    //asking for permission to retreive image
    this.imagePicker.hasReadPermission().then(res=>{
      if(res==false){
        this.imagePicker.requestReadPermission().then(perm=>{
          if(perm==true){
            this.accessImage();
          }
        })
      }else{
        this.accessImage();
      }
    })
  }

  accessImage(){
    let options: ImagePickerOptions = {
      maximumImagesCount: 1
    }
    this.imagePicker.getPictures(options).then(result=>{
        if(result?.length>0){
          this.displayImage = this.webview.convertFileSrc(result[0]);
          this.imageUpload = true;
        }else{
          this.displayImage = null;
          this.imageUpload = false;
        }
    })
  }

  deleteImage() {
    this.displayImage = null;
    this.imageUpload = false;
  }

  submitData(){
    if(!this.displayForm.valid){
      return
    }else{
      //checking and accessing the record from Array
      if(this.detailsId){
        const valIndex = this._commonService.inspirationRecords.findIndex((x: any) => x.id === this.detailsId);
        if (valIndex !== -1) {
          const recordToUpdate = this._commonService.inspirationRecords[valIndex];
          recordToUpdate.title = this.displayForm.get('Title').value;
          recordToUpdate.description = this.displayForm.get('Description').value;
          recordToUpdate.image = this.displayImage;
        }
      }else{
        let k = {
          id: this._commonService.inspirationRecords.length + 1,
          title: this.displayForm.get('Title').value,
          description: this.displayForm.get('Description').value,
          image: this.displayImage
        }
        this._commonService.inspirationRecords.push(k);
        this.detailsId = k.id
      }
      this._commonService.showToast('Record saved');
    }
  }

  deleteDetails(){
    this._commonService.presentAlertConfirm('Are you sure you want to delete this record')
      .then(async (res) => {
        try {
          this._commonService.inspirationRecords.splice(this.detailsId, 1);
          this.back();
        } catch (error) {
          console.log("The error",error);
        }
      })
      .catch((err) => {
        console.log("The error",err);
      })
  }

  back(){
    this.router.navigate(['inspiration'],{replaceUrl:true});
  }

  logOut(){
    this._commonService.presentAlertConfirm('Are you sure you want to logout?')
    .then(async (res) => {
      try {
        this._commonService.authToken = '';
        this.router.navigate(['login']);
      } catch (error) {
        console.log("The error",error);
      }
    })
    .catch((err) => {
      console.log("The error",err);
    })
  }



}
