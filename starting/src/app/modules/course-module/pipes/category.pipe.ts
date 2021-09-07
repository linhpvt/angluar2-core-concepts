import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/model/course';

@Pipe({
  // the name of pipe fo matching in template html
  name: 'categoryFilter',
  pure: false,
})
export class CategoryPipe implements PipeTransform {
  /**
   *
   * @param courses the input of the pipe function, list of course.
   * @param category The argument being used for filter.
   */
  transform(courses: Course[], category: string) {
    console.log('transform() run !!!');
    return (courses || []).filter(
      (course: Course) => course.category === category
    );
  }
}
