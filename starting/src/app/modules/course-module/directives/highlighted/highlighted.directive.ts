import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  Output,
  EventEmitter,
  Host,
  Optional,
  Self,
  SkipSelf,
} from '@angular/core';
import { CourseServiceService } from '../../course/course-service.service';

@Directive({
  // Notice to attribute selector
  selector: '[highlighted]',
  // export directive to be reference in template.html
  exportAs: 'highlightDirective',
  providers: [CourseServiceService],
})
export class HighlightedDirective {
  constructor() {
    //  @Self() private readonly courseService: CourseServiceService // @Host() // @Optional()
    // console.log('HighlightedDirective, ', this.courseService);
  }

  @Input('highlighted')
  isHighlighted = false; // default to false

  // add `highlighted` css class by using attribute `className`
  // @HostBinding('className')
  // get byClassName() {
  //   return 'highlighted';
  // }
  @HostBinding('class.highlighted')
  get byClass() {
    return this.isHighlighted;
  }

  @Input('disabled')
  isDisabled = false; // default to false
  @HostBinding('attr.disabled')
  get byAttributes() {
    return this.isDisabled;
  }

  @Output()
  toggleHighlighted = new EventEmitter();

  // $event: the original eventData of the Host
  @HostListener('mouseenter', ['$event'])
  mouseOver($event) {
    console.log($event);
    this.isHighlighted = true;
    this.toggleHighlighted.emit(this.isHighlighted);
  }
  @HostListener('mouseleave')
  mouseLeave() {
    this.isHighlighted = false;
    this.toggleHighlighted.emit(this.isHighlighted);
  }

  toggleOnDoubleClick() {
    this.isHighlighted = !this.isHighlighted;
  }
}
