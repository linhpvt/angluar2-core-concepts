import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Course } from '../../../../model/course';

@Directive({
  selector: '[ngxUnless]',
})
export class NgxUnlessDirective {
  // the View at the portion of the page is not instantiated
  private viewInstantiated = false;

  constructor(
    // what template would be instantiated
    private readonly templateRef: TemplateRef<any>,
    // where the template would be positioned
    private readonly containerRef: ViewContainerRef
  ) {}
  // Convention for set method. it's value will be passed as Input property
  @Input()
  set ngxUnless(condition: Course) {
    /*
      We don't know how many times the directive gets called.
      We want only one View instance for a given portion on the page.
    */

    // Be sure the view at the specific portion of the page only has one intance in memory
    if (condition && !this.viewInstantiated) {
      this.containerRef.createEmbeddedView(this.templateRef);
      this.viewInstantiated = true;
    } else if (!condition && this.viewInstantiated) {
      // Clear view in memory when the condition is coersed to FALSE
      this.containerRef.clear();
      this.viewInstantiated = false;
    }
  }
}
