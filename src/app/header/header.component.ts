import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { CvItemService } from "../cv-item/cv-item.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  generalData;
  navLinks = [
    { location:'/overview',       label:'Overview',         icon:'account_circle' },
  ];

  windowWidth: number = window.innerWidth;

  // initial values, the window object may still be undefined during this hook
  ngAfterViewInit() {
    this.windowWidth = window.innerWidth;
  }

  // if screen size changes it'll update
  @HostListener('window:resize', ['$event'])
  resize(event) {
    this.windowWidth = window.innerWidth;
  }

  constructor(
    private cvItemService: CvItemService,
  ) { }

  getItems(): void {
    this.generalData = this.cvItemService.getGeneralData();
  }

  ngOnInit() {
    this.getItems();
  }

}
