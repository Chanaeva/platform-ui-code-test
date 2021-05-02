import { stripSummaryForJitFileSuffix } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public selectedProviders = [];
  public unselectedProviders = [
    {
      id: '1',
      name: 'John',
      address: '123 Greenway Blvd',
      phone: '8991234321'
    },
    {
      id: '2',
      name: 'Mary',
      address: '443 Windwhisper Road',
      phone: '2233211903'
    },
    {
      id: '3',
      name: 'Jason',
      address: '9992 Pumpkin Hollow',
      phone: '4343219384'
    }
  ];

  constructor(private state: StoreService) {}

  ngOnInit() {
    this.state.getItems().map(item => {
      this.selectedProviders.push(JSON.parse(item))
    })
  }

  add() {
    const item = this.unselectedProviders.pop()
    this.selectedProviders.push(item)
    this.state.setItem(item.id, JSON.stringify(item))
  }

  remove() {
    const remove = this.selectedProviders.pop()
    this.state.removeItem(remove.id)
  }
}
