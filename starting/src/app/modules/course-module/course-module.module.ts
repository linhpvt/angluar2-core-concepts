import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseServiceService } from './course/course-service.service';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseImageComponent } from './course-image/course-image.component';
import { CourseLongdescriptionComponent } from './course-longdescription/course-longdescription.component';
import { NgxUnlessDirective } from './directives/ngx-unless/ngx-unless.directive';
import { HighlightedDirective } from './directives/highlighted/highlighted.directive';
import { CategoryPipe } from './pipes/category.pipe';

@NgModule({
  declarations: [
    // components, directives, pipes are being used in this module
    CourseCardComponent,
    CourseImageComponent,
    CourseLongdescriptionComponent,
    NgxUnlessDirective,
    HighlightedDirective,
    CategoryPipe,
  ],
  imports: [
    // common directives like *ngIf, *ngFor, *ngSwitch, ect.
    CommonModule,
  ],
  providers: [
    // get exported by default
    CourseServiceService,
  ],
  exports: [
    // list of components, services, directives, pipes that are being used out of the module
    // CourseServiceService,
    CourseCardComponent,
    CourseImageComponent,
    CourseLongdescriptionComponent,
    NgxUnlessDirective,
    HighlightedDirective,
    CategoryPipe,
  ],
})
export class CourseModuleModule {}
