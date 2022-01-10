import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onClick(){
    this.router.navigate(['/date']);

  }
  goto(){
    this.router.navigate(['/table']);

  }
  jump(){
    this.router.navigate(['/keyboard']);

  }

}
