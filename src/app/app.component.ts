import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Subscription } from 'rxjs';

import { ChangeColor, ChangeShape, UndoChange } from './figure.actions';
import { Figure } from './figure.state';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('stage', {static: false}) canvas;

  shape: string;
  color: string;

  figureSubscription: Subscription;

  constructor(
    private store: Store<{ figure: Figure }>
  ) {
    this.figureSubscription = store.pipe(select('figure')).subscribe(res => {
      this.shape = res.shape || 'rectangle';
      this.color = res.color || 'red';

      this.update();
    })
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.update();
  }

  ngOnDestroy() {
    if (this.figureSubscription) {
      this.figureSubscription.unsubscribe();
    }
  }

  selectShange(evt) {
    this.store.dispatch(new ChangeShape({
      shape: evt
    }));
  }

  selectColor(evt) {
    this.store.dispatch(new ChangeColor({
      color: evt
    }));
  }

  undo() {
    this.store.dispatch(new UndoChange());
  }

  update() {
    if (this.canvas) {
      const canvasDom = this.canvas.nativeElement;
      const ctx = canvasDom.getContext('2d');
      
      ctx.fillStyle = this.color;
      ctx.clearRect(0, 0, 400, 400);

      switch (this.shape) {
        case 'rectangle': {
          ctx.fillRect(0, 0, 260, 260);
          break;
        }
        case 'triangle': {
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(200,0);
          ctx.lineTo(100,200);
          ctx.fill();
          break;
        }
        case 'circle': {
          ctx.beginPath();
          ctx.arc(100, 100, 100, 0, 2 * Math.PI);
          ctx.fill();
          break;
        }
      }
    }
  }
}
