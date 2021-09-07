import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Attribute,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  DoCheck,
  ElementRef,
  EventEmitter,
  Host,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  QueryList,
  Self,
} from '@angular/core';
// import { EventEmitter } from 'events';
import { Course } from '../../../model/course';
import { CourseImageComponent } from '../course-image/course-image.component';
import { CourseLongdescriptionComponent } from '../course-longdescription/course-longdescription.component';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
  // providers: [CourseServiceService],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardComponent
  implements
    OnChanges,
    OnInit,
    AfterContentInit,
    AfterViewInit,
    AfterContentChecked,
    AfterViewChecked,
    OnDestroy,
    DoCheck
{
  constructor(@Attribute('type') private type: string) {
    console.log('Attribute type: ', type);
  }

  ngOnChanges(changes: any) {
    // run many times, In case you want to do your custom comparison for the current and the previous state
    console.log('Run with any changes');
  }

  ngOnInit() {
    // run once, a good place to call APIs to fech DATA
  }

  ngAfterContentInit() {
    // run once, at this time, the variable content of @ContentChild, @ContentChildrend() are available
    console.log('Run on the content child, children');
  }

  ngAfterViewInit() {
    // run once
    console.log('Run after the View of component instantiate');
  }

  ngAfterContentChecked() {
    // run may times, this is a good place to do the last modification of models
    // before getting rendered completely on the screen.
  }

  ngAfterViewChecked() {
    // run many times, this is a good place to do some logic such as fetch more data from API by scrolling or set focus on input text, ect
  }

  ngOnDestroy() {
    // clean up resources such as event listeners, unsubscribe manually, ect
  }

  ngDoCheck() {
    // you might want to do your custom check Change Detection for the OnPush strategy, ect.
  }
  // this value of model will be passed to the component as a property from parent component.
  @Input()
  course: Course;
  @Input()
  cardIndex: number;
  numberOfRender = 1;
  onClick() {
    console.log(`notify a course card data`);
    // fire event `notifyCourseCard`
    this.notifyCourseCard.emit(this.course);
  }
  // EMITTERS

  // indicate that the outside can receive the event right after .emit function get called.
  @Output()
  notifyCourseCard = new EventEmitter<Course>();

  // FUNCTIONS
  isIconAvailable() {
    return this.course && this.course.iconUrl;
  }
  // CONST
  CSS_Classes = {
    INTERMEDIATE: 'intermediate',
    BEGINNER: 'beginner',
    ADVANCED: 'advanced',
  };
  cssClassByCategory() {
    if (!this.course) {
      return '';
    }
    let className = this.CSS_Classes[this.course.category] || 'intermediate';
    return {
      [className]: true,
    };
  }
  styleBackgroundImage() {
    return {
      'background-image': `url('${this.course.iconUrl}')`,
    };
  }

  @ContentChild('courseImage')
  courseImage: CourseCardComponent;
  @ContentChild('courseDescription')
  courseDescription;

  // Query list
  @ContentChildren(CourseImageComponent, { read: ElementRef })
  cardImages: QueryList<CourseImageComponent>;

  @ContentChildren('inlinedesc')
  courseDescriptions: QueryList<ElementRef>;

  @ContentChild(CourseLongdescriptionComponent, { read: ElementRef })
  courseLongDescription: CourseLongdescriptionComponent;
  // ngAfterContentInit() {
  //   // console.log('ngAfterContentInit', this.cardImages);
  //   // console.log('ngAfterContentInit', this.courseDescriptions);
  //   this.courseDescriptions.changes.subscribe(
  //     () => console.log('a'),
  //     (err) => console.log(err)
  //   );
  // }

  // handle data change
  onChangeHandler(evt) {
    this.course.description = evt.target.value;
    // this.course = { ...this.course, description: evt.target.value };
    // console.log(evt.target.value);
  }
}
