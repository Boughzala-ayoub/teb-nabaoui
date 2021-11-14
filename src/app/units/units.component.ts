import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {
  displaymod: boolean;
  displaymod1: boolean;

  constructor(private route: ActivatedRoute, private router: Router) { }
  @HostListener('document:click', ['$event'])
  clickout() {
    if (this.displaymod) {
      this.hide()
    }
    if (this.displaymod1) {
      this.hide1()
    }
  }

  ngOnInit(): void {
  }
  show(): void {
    this.displaymod=true
  }
  hide(): void {
    this.displaymod=false;
  }
  show1(): void {
    this.displaymod1=true
  }
  hide1(): void {
    this.displaymod1=false;
  }
  alternate(): void{
    this.displaymod=!this.displaymod
    this.displaymod1=!this.displaymod1
  }
  toHome(): void{
    this.router.navigate(['/home' , {section: "principal"}])
  }
  toManaging(): void{
    this.router.navigate(['/home' , {section: "board"}])

  }
  display(id: number): void{
    this.router.navigate(['/unit' , {unitid: id}])

    
  }
  toEducation(): void{
    window.location.reload();
  }

}
