import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'barchart',
  templateUrl: './barchart.html'
})
export class BarChartComponent implements OnInit {
  public mbarChartLabels:string[] = [];
  public barChartType:string = 'bar';
  public barChartData:any[] = [
    {data: [], label: 'Corona cases'}
  ];
  public barChartColors:Array<any> = [
    {
      backgroundColor: 'rgba(77,20,96,0.3)',
      borderColor: 'rgba(77,20,96,1)',
      pointBackgroundColor: 'rgba(77,20,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,20,96,1)'
    }
  ];

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.getData();
  }

  public getData() {
    this.http.get<any[]>('https://corona.lmao.ninja/v2/countries').subscribe(
      data => {
        data = data.sort((ele1,ele2) => ele2['cases'] - ele1['cases']);
        this.assignData(data.slice(0,50));
      })
  }

  public assignData(data) {
    data.forEach(element => {
      this.pushLabels(element);
      this.pushdata(element);
    });
  }

  public pushdata(element: any) {
    this.barChartData[0]['data'].push(element['cases']);
  }

  public pushLabels(element: any) {
    this.mbarChartLabels.push(element['country']);
  }

  
    
}