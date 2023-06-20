import { Component } from '@angular/core';
import { ServicesService } from '../../service/services.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent {
  
// for searching
  questioncode=''
  isSelected:boolean=false


// for modal
  pappercodeModal: any=''
  questionsModal: any=''
  timeLimitModal: any=''
  difficultyModal: any=''
  typeModal: any=''

// arrays for storing data
  myArrayData:any[]=[]
  mainArray: any[] = []
  displayArray: any[] = []



  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    this.landingData()
  
  }


  landingData(){
    const jsonstring = localStorage.getItem('updated')
    if(jsonstring){
      this.myArrayData = JSON.parse(jsonstring)
      this.displayArray = this.myArrayData
    }
    else{
      this.service.getData().subscribe((values)=>{
        // console.log(values);
        if(values.length >=0){
          this.myArrayData= values
          this.displayArray = this.myArrayData
          localStorage.setItem('updated',JSON.stringify(this.myArrayData))
        }
        
      })
    }

  }


// modal
modalFunction(selectedrow: any){
  console.log(selectedrow['code']);
  
  this.pappercodeModal=selectedrow['code']
  this.questionsModal=selectedrow['question']
  this.timeLimitModal=selectedrow['timeLimit']
  this.difficultyModal=selectedrow['difficulty']
  this.typeModal=selectedrow['questionType']
}


// fillter
filterCode() {
  if (this.questioncode != 'all') {
    if (this.isSelected == false) {
      this.displayArray = this.myArrayData.filter((item: any) => {
        return item.code === this.questioncode;
      });
      this.isSelected = true
    }
    else {
      this.displayArray = this.myArrayData
      this.displayArray = this.myArrayData.filter((item: any) => {
        return item.code === this.questioncode;
      });
    }
  }
  else {
    this.displayArray = this.myArrayData
  }
}



}
