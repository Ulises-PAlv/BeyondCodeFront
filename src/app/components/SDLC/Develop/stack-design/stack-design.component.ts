import { Component, OnInit } from '@angular/core';
import { IArchStackGet, IArchStackPost, ITechStackGet, ITechStackPost } from 'src/app/interfaces/arraystack.interface';
import { arrayStackService } from 'src/app/services/nosql/arraystack.service';
import { NotifierService } from 'angular-notifier';
import { LsHelper } from 'src/app/helpers/localstorage.helper';
import { DateHelper } from 'src/app/helpers/dateJS.helper';

@Component({
  selector: 'app-stack-design',
  templateUrl: './stack-design.component.html',
  styleUrls: ['./stack-design.component.scss']
})
export class StackDesignComponent implements OnInit {
  archStack: any;
  front: ITechStackGet[] = [];
  back: ITechStackGet[] = [];
  more: ITechStackGet[] = [];

  prs: any;

  constructor( private _stack: arrayStackService, private _notifier: NotifierService ) { }

  createArchStack() {
    let obj: IArchStackPost = {
      ProjectID: this.prs.project_id,
      date: DateHelper.formatDate(new Date()),
      arrayStack: []
    };

    this._stack.postArchStack(obj);
    this.showNotification('success', 'Creado con exito!');
  }

  addTechStack(name: string, concept: string, description: string, reason: string, type: any) {
    let objTech: ITechStackPost = {
      technology: name,
      concept: concept,
      type: type,
      description: description,
      reason: reason,
      id: this.prs.project_id
    };

    this._stack.postTech(objTech);
    this.showNotification('info', 'Agregado');
    this.load();
  }

  assign(auxStack: IArchStackGet) {
    auxStack.arrayStack.forEach((stack: ITechStackGet) => {
      console.log(stack.type)
      switch(stack.type) {
        case 'Frontend': this.front.push(stack); break;
        case 'Backend': this.back.push(stack); break;
        case 'More requirements': this.more.push(stack); break;
      }
    });
  }

  clean(data: any) {
    let auxArray: any;
    data.forEach((arch: IArchStackGet) => {
      if(arch.ProjectID == this.prs.project_id) {
        auxArray = arch;
        this.assign(auxArray);
      }
    });

    return auxArray;
  }

  async load() {
    await this._stack.getTechStack().subscribe((data: any) => {
      this.archStack = this.clean(data);
      console.log(this.archStack)
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
