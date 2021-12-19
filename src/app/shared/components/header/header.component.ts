import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChild('appTitle') appTitle: ElementRef;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    console.log('ngOnInit: ' + this.appTitle?.nativeElement.innerHTML);
  }

  ngAfterViewInit() {
    this.appTitle.nativeElement.innerHTML = 'Angular2+ Shop';
  }

  ngAfterViewChecked() {
    console.log('After viewChecked: ' + this.appTitle.nativeElement.innerHTML);
  }

  navigateHome(): void {
    this.router.navigate(['/']);
  }

  navigateToContacts(): void {
    this.router.navigate(['/contact-us']);
  }
}
