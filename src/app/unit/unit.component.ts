import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
  displaymod: boolean;
  displaymod1: boolean;
  id: any
  connected: boolean= false;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('unitid')
    console.log(this.id)

  }
  @HostListener('document:click', ['$event'])
  clickout() {
    if (this.displaymod) {
      this.hide()
    }
    if (this.displaymod1) {
      this.hide1()
    }
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
  toEducation(): void{
    // document.getElementById("education program").scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'start',
    //   inline: 'nearest'
    // });
    this.router.navigate(['/units'])
  }
  display(id: number): void{
    if(!this.connected){
      this.displaymod1=true
    }

    
  }

}
