import { Component, OnInit } from '@angular/core';
import { IArchStackGet, ITechStack } from 'src/app/interfaces/arch-stack.interface';

@Component({
  selector: 'app-stack-design',
  templateUrl: './stack-design.component.html',
  styleUrls: ['./stack-design.component.scss']
})
export class StackDesignComponent implements OnInit {
  allStack: IArchStackGet | undefined;
  front: ITechStack[] = [];
  back: ITechStack[] = [];
  more: ITechStack[] = [];

  constructor() { }


  ngOnInit(): void {
  }
}
