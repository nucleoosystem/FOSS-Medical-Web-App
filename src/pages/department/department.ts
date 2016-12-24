import { Component } from '@angular/core';
import { NavController, AlertController, ModalController } from 'ionic-angular';
import { FirebaseService } from '../../providers/firebase-service';
import { DepartmentDetailPage } from '../department-detail/department-detail';

@Component({
  selector: 'page-department',
  templateUrl: 'department.html'
})
export class Department {

  public departmentListData;

  constructor(public navCtrl: NavController, public fbServ: FirebaseService, public alertCtrl:AlertController, public modalCtrl: ModalController) {
    // this.departmentListData = fbServ.getDepartmentList();
    fbServ.getList("department")
    .then((data)=>{this.departmentListData = data;
    });
  }

  showDetail(info){
    // console.log('item ', info);
    let index = this.departmentListData.indexOf(info);
    console.log("index is ",index);
    this.navCtrl.push(DepartmentDetailPage,{info:info, index:index});
  }

  moveUp(info){
    this.fbServ.moveItem("department",-1,info);
  }

  moveDown(info){
    this.fbServ.moveItem("department",1,info);
  }

  publishDeptData(){
    this.fbServ.publishData("department");
  }

  localSave(){
    this.fbServ.localSave("department");
  }

  localLoad(){
    this.fbServ.getLocalFlag("department")
    .then((data)=>{
      if (!data){
        this.showAlert("Error", "No Department data saved locally");
        return
      }

      else{
        this.fbServ.localLoad("department")
       .then((data)=>{
         this.departmentListData = data;
       })
       .catch((err)=>{
         console.warn(err);
       })
      }
    })


  }

  showAlert(title:string, message:string) {
   let alert = this.alertCtrl.create({
     title: title,
     subTitle: message,
     buttons: ['OK']
   });
   alert.present();
 }

 createNew(info){

   let newItem ={"group":"BLANK",
                  "data":[{"type":"","detail":""}]
       };

      //TODO- suggest this opens a Modal to take the title then opens that in the editting option to start filling it in

   let index = this.departmentListData.indexOf(info);
   this.departmentListData.splice(1,0,newItem)
 }

 delete(info){
   //TODO
 }

}
