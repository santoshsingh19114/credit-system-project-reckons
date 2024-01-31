import { identifierName } from '@angular/compiler';
import { Component,ElementRef,Input,OnInit, ViewChild} from '@angular/core';

import { NgSelectOption } from '@angular/forms';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
// import * as html2canvas from 'html2canvas';
// import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-agreement-page2',
  templateUrl: './agreement-page2.component.html',
  styleUrls: ['./agreement-page2.component.css']
})
export class AgreementPage2Component {

@ViewChild('pdfContent',{static:false}) e1!:ElementRef

onClickButtonA() {
  console.log('Hello from Button A!');
  let pdf=new jsPDF('p','pt','a4')

  // const options = {
  //   margin: 40, // Set your desired margin
  //   filename: 'sample.pdf',
  //   image: { type: 'jpeg', quality: 0.98 },
  //   html2canvas: { scale: 2 },
  //   jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  // };



  

  pdf.html(this.e1.nativeElement,{
    callback: (pdf) =>{

      pdf.save("sample.pdf")
    }
  })
}



  


  // owner details
  OwnerName='__________';
  ownerRelation='_________'
  ownerRelatedName='__________'
  getOwnerName(data:any){
    
  this.OwnerName=(data.target.value)
 }

 getOwnerRelation(data:any){
  this.ownerRelation=(data.target.value)
 }


 getOwnerRelatedName(data:any){
  this.ownerRelatedName=(data.target.value)
 }

// Tenant details


 TenantName='__________';
 TenantRelation='_________'
 TenantRelatedName='___________'
 getTenantName(data:any){
 this.TenantName=(data.target.value)
}

getTenantRelation(data:any){
 this.TenantRelation=(data.target.value)
}


getTenantRelatedName(data:any){
 this.TenantRelatedName=(data.target.value)
}
 
  


}

