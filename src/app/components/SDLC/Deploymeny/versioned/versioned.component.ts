import { Component, OnInit } from '@angular/core';
import { IVersionedGet, IVersionedPost } from 'src/app/interfaces/versioned.interface';
import { VersionedService } from 'src/app/services/nosql/versioned.service';
import { DocumentsService } from 'src/app/services/nosql/documents.service';
import { NotifierService } from 'angular-notifier';
import { LsHelper } from 'src/app/helpers/localstorage.helper';
import { IDocumentsGet, IDocumentsPost } from 'src/app/interfaces/documents.interface';

@Component({
  selector: 'app-versioned',
  templateUrl: './versioned.component.html',
  styleUrls: ['./versioned.component.scss']
})

export class VersionedComponent implements OnInit {
  log: IVersionedGet[] = [];
  documentsArray: IDocumentsGet[] = [];
  prs: any;

  constructor( private _versioned: VersionedService, private _documents: DocumentsService,
    private _notifier: NotifierService ) { }

  addVersion(version: string, type: any, description: string) {
    let versionObj: IVersionedPost = {
      ProjectID: this.prs.project_id,
      version: version,
      description: description,
      type: type
    };

    this._versioned.postVersion(versionObj);
    this.load();
    this.showNotification('info', 'Nueva version agregada al sistema');
  }

  cleanPetition(data: any) {
    let auxArray: IVersionedGet[] = [];
    data.forEach((head: IVersionedGet) => {
      if(head.ProjectID == this.prs.project_id) {
        auxArray.push(head);
      }
    });

    return auxArray;
  }

  async load() {
    await this._versioned.getVersion().subscribe((data: any) => {
      this.log = this.cleanPetition(data);
    });
    await this._documents.getDocuments().subscribe((data: any) => {
      this.documentsArray = data;
    });
  }

  public showNotification( type: string, message: string ): void {
		this._notifier.notify( type, message );
	}

  ngOnInit(): void {
    this.prs = LsHelper.getItem('prs');
    this.load();
  }
}
