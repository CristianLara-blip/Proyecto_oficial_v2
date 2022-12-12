import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
   if (
     document.body.scrollTop > 100 ||
     document.documentElement.scrollTop > 100
   ) {
     document.getElementById('appear')?.classList.add('active')
   }
   else(
     document.getElementById('appear')?.classList.remove('active')
   )
 }
 title = 'WhatsApp';
}

