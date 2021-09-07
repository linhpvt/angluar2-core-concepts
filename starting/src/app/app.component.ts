import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  Inject,
  InjectionToken,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { COURSES } from '../db-data';
import { CourseCardComponent } from './modules/course-module/course-card/course-card.component';
import { HighlightedDirective } from './modules/course-module/directives/highlighted/highlighted.directive';
import { Observable } from 'rxjs';
import { CourseServiceService } from './modules/course-module/course/course-service.service';
import { Course } from './model/course';
import { Post } from './model/post';
const ICONURL =
  'https://scotch-res.cloudinary.com/image/upload/w_1050,q_auto:good,f_auto/media/37954/f4o1WmLtQweWCJZABtgO_Angular-JS.jpg';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent
  implements AfterViewInit, OnInit, DoCheck, OnDestroy, OnChanges
{
  private apiLoaded = false;

  ngDoCheck() {
    if (this.apiLoaded) {
      // tell angular to do the check
      // we fully control when Check Detection should perform update check
      this.changeDetector.markForCheck();
      this.apiLoaded = false;
    }
  }

  posts$: Observable<Post[]>;
  posts: Post[] = null;
  ID: number;
  private URL_POST = '/posts';
  constructor(
    @Optional() private readonly courseService: CourseServiceService,
    private readonly changeDetector: ChangeDetectorRef
  ) {
    console.log('AppComponent, ', this.courseService);
  }
  ngOnInit() {
    if (!this.courseService) {
      return;
    }
    // passing query parameters to the request
    const params = new HttpParams().set('page', 1).set('pageSize', 10);

    // Return an Observable
    this.posts$ = this.courseService.loadPosts<Post[]>(this.URL_POST, params);
    // this.courseService
    //   .loadPosts<Post[]>(this.URL_POST, params)
    //   .subscribe((posts) => {
    //     this.posts = posts;
    //     // run ngDoCheck logic
    //     this.apiLoaded = true;
    //   });
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
  ngOnChanges(changes: any) {
    // changes: contains the new values and the previous ones
    console.log('ngOnChanges', changes);
  }

  // private data
  courses: Course[] = COURSES.map((c, index) => {
    if (!c) return c;
    if (index === 1) {
      delete c.iconUrl;
      return c;
    }
    return {
      ...c,
      iconUrl: ICONURL,
    };
  });
  coursesTotal = 1;
  course: Course = COURSES[0];
  event: any = {};
  // hanlders
  onDivClick() {
    console.log('Parent get fired');
  }
  onCourseCardClick() {
    console.log('<course-car> element');
  }

  // listeners
  upOneLevel = ((level: string) => (course: Course) => {
    console.log(`${level} ${course}`);
  })('Up next one level');
  onReceivedCourseCard = ((level: string) => (course: Course) => {})(
    'Nearest Receive data from App component: '
  );

  // reference to the list of children CourseCardComponent
  @ViewChildren(CourseCardComponent)
  cards: QueryList<CourseCardComponent>;

  // reference to the list of children native html <course-card> elements
  @ViewChildren(CourseCardComponent, { read: ElementRef })
  nativeHtmlCards: QueryList<CourseCardComponent>;

  ngAfterViewInit() {
    console.log('ngAfterViewInit', this.highlightDirective);
    // console.log('nativeHtmlCards', this.nativeHtmlCards);
    // observe every change has been made on the list of reference since the first time of achivement
    this.cards.changes.subscribe(
      (noti) => console.log(noti),
      (err) => console.log(err)
    );

    this.nativeHtmlCards.changes.subscribe(
      (noti) => console.log(noti),
      (err) => console.log(err)
    );
    setInterval(() => {
      if (!this.highlightDirective) {
        return;
      }
      // console.log('call function', Date.now());
      this.highlightDirective.toggleOnDoubleClick();
    }, 3000);
  }

  handleToggle(eData: boolean) {
    console.log('app.component.ts', eData);
  }

  @ViewChild(HighlightedDirective)
  highlightDirective: HighlightedDirective;

  onEditCard() {
    console.log('run');
    // 2 -> ADVANCED - BEGINNER
    this.courses[2] = { ...this.courses[2], category: 'BEGINNER' };
    // this.courses = [...this.courses];
  }
}
