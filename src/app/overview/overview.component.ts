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
  title2 = "Work experience";
  generalData;
  interests;
  experienceItems: CvItem[];

  // education
  educationItems: CvItem[];
  certificationItems: CvItem[];
  languageItems;
  title = "Projects";

  // projects
  projectItems: CvItem[];
  title3 = "Projects";

  // contact
  contactItems;
  title4 = "Contact Information";

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
    this.cvItemService
      .getEducationItems()
      .then(items => this.educationItems = items);
    this.cvItemService
      .getCertificationItems()
      .then(items => this.certificationItems = items);
    this.cvItemService
      .getLanguageItems()
      .then(items => this.languageItems = items);
    this.cvItemService
      .getProjectItems()
      .then(items => this.projectItems = items);
    this.cvItemService
      .getContactItems()
      .then(items => this.contactItems = items);
  }

  ngOnInit() {
    this.getItems();
  }

}