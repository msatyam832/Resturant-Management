import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { RestoService } from '../resto.service'

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {

  constructor(private resto:RestoService) { }
  collection:any;

  ngOnInit(): void {
    this.resto.getlist().subscribe((result)=>{
      this.collection=result

    })
  }


}