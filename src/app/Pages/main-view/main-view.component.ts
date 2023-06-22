import { Component, OnInit } from '@angular/core';
import { CdkDragDrop,moveItemInArray, transferArrayItem, CdkDrag, CdkDropList} from '@angular/cdk/drag-drop';
import { NgFor } from '@angular/common';
import { Board } from 'src/app/Models/board.model';
import { Column } from 'src/app/Models/column.model';


@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {


  constructor() {}

  board: Board = new Board("test bpard" , [
    new Column("things", ["thing 1" , "thing 2" , "thing 3" ,"thing 4"]) , 

    new Column("VMs", ["VM 1" , "VM 2" , "VM 3" ,"VM  4"]) ,

    new Column("In Use", []) ,

    new Column("Need fixing / Broken", []) ,



  ])

  ngOnInit(): void {
  }
  
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
