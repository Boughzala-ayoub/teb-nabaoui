import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displaymod: boolean;
  displaymod1: boolean;
  displayy: boolean;
  connected: boolean=true
  section: string

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
    this.section=this.route.snapshot.paramMap.get('section')
    if(this.section=="principal"){
      this.toHome()
    }else if(this.section=="board"){
      this.toManaging()
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
    document.getElementById("home").scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
    // this.display=true
    // console.log(this.display)
  }
  toManaging(): void{
    document.getElementById("Managing Body").scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
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
    console.log(id)
    if(!this.connected) {
      this.displaymod1=true
    }
    else{
      this.router.navigate(['/unit' , {unitid: id}])
    }
  }
}
