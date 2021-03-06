/* tslint:disable:typedef */
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {Post} from '../app.component';
import {AppCounterService} from '../services/app-counter.service';

// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PostComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input() myPost: Post;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onRemove = new EventEmitter<number>();
  @ContentChild('info', { static: true })
  infoRef: ElementRef;

  constructor(public appCounterService: AppCounterService) {
    // console.log('constructor');
  }

  removePost() {
    this.onRemove.emit(this.myPost.id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChanges', changes);
  }
  ngOnInit(): void {
    // console.log(this.infoRef.nativeElement);
    // console.log('ngOnInit');
  }
  ngDoCheck(): void {
    // console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    // console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    // console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    // console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    // console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    // console.log('ngOnDestroy');
  }
}
