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
    localStorage.setItem('code', data['code'])
    localStorage.setItem('question', data['questionname'])
    localStorage.setItem('timeLimit', data['timeLimit'])
    localStorage.setItem('difficulty', data['difficulty1'])
    localStorage.setItem('type', data['questionType'])
    
    // navigate to landing page
    this.router.navigate(['/questionField/landingpage'])
  }

// get values from localStorage

  localstoragedata(){

      this.code = localStorage.getItem('code') || null
      // console.log(this.code)
      this.question = localStorage.getItem('question') || null
      // console.log(this.question)
      this.timeLimit = localStorage.getItem('timeLimit') || null
      // console.log(this.timeLimit)
      this.difficulty = localStorage.getItem('difficulty') || null
      // console.log(this.difficulty)
      this.type = localStorage.getItem('type') || null
  
    
    this.mainArray =JSON.parse( localStorage.getItem('updated')  || '')
    // push values
    this.mainArray.push({"code":this.code,"question":this.question,"timeLimit":this.timeLimit,"difficulty":this.difficulty,"questionType":this.type})
    // set values into  previous array
    localStorage.setItem("updated", JSON.stringify(this.mainArray))
    console.log("after push*******",this.mainArray);
  
  
  }
}

