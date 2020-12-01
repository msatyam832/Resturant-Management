import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms'
import { from } from 'rxjs';
import {RestoService} from '../resto.service'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-restro',
  templateUrl: './add-restro.component.html',
  styleUrls: ['./add-restro.component.css']
})
export class AddRestroComponent implements OnInit {
  constructor(public RestoService: RestoService) { }

  ngOnInit(): void {
  }
  collectResto(){
    this.RestoService.savePost().subscribe(data=>{
      let  prodata=(JSON.parse(data.toString()));
      this.RestoService.restoModeldata=prodata
      console.log(this.RestoService.restoModeldata)
    })  
  }

}
