import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})
export class AppComponent 
{
  public header: string;

  ngOnInit() {
    this.header = "Angular2 has initialized correctly";
  }
}