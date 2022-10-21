import { Component, OnInit } from '@angular/core';
import { EmployeeData } from 'src/app/models/empData';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.css']
})
export class EmpDashboardComponent implements OnInit {

  data!: EmployeeData[];

  constructor(private _dataServce: DataService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._dataServce.getData().subscribe(
      (data: any) => {
        this.data = data["employees"];
      }
    )
  }

}
