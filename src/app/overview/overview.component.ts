import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { CvItem } from "../cv-item/cv-item";
import { CvItemService } from "../cv-item/cv-item.service";
import { PictureModalComponent } from "../picture-modal/picture-modal.component";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  title1 = "Overview";
  title2 = "Professional experience";
  generalData;
  interests;
  experienceItems: CvItem[];

  constructor(
    private cvItemService: CvItemService,
    private dialog: MatDialog,
  ) { }

  showAvatar() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      imagePath: "assets/img/avatar.jpg",
      title: this.generalData.name,
    };
    this.dialog.open(PictureModalComponent, dialogConfig);
  }

  getItems(): void {
    this.generalData = this.cvItemService.getGeneralData();
    this.cvItemService
      .getInterestItems()
      .then(items => this.interests = items);
    this.cvItemService
      .getCvItems()
      .then(items => this.experienceItems = items);
  }

  ngOnInit() {
    this.getItems();
  }

}

@Component({
  selector: 'app-experience',
  templateUrl: './overview.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experienceItems: CvItem[];
  title = "Professional Experience";

  constructor(
    private cvItemService: CvItemService
  ) { }

  getItems(): void {
    this.cvItemService
      .getCvItems()
      .then(items => this.experienceItems = items);
  }

  ngOnInit() {
    this.getItems();
  }

}
