import { Component } from '@angular/core';
import { ServicesService } from '../../service/services.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent {
  constructor( private router:Router) { }

// to hide and show dropdown
  selectedOption: string = '';

// variables declared for ngmodel 
  qstnCode=''
  qstnMode=''
  difficultylevel=''
  totalscore=''
  usedTime=''
  txtformat=''
  questionType=''
  questionname=''

  // variables and array declared for getting values in localStorage
  code:any
  question: any
  timeLimit:any
  difficulty:any
  type:any

  myArrayData:any[]=[]
  mainArray: any[] = []
  displayArray: any[] = []



  // for get required dropdown value
  onDropdownChange(event: any) {
    this.selectedOption = event.target.value;
    console.log(event);
  }


// set the values to localStorage
  submit(data: any) {
    console.log(data)
    this.mainArray =JSON.parse( localStorage.getItem('updated')  || '')
    
    // push values to array
    this.mainArray.push(data)

    
    // set values into  localstaorage
    localStorage.setItem("updated", JSON.stringify(this.mainArray))
    console.log("after push*******",this.mainArray);//
    
    // navigate to landing page
    this.router.navigate(['/questionField/landingpage'])
  }

}

