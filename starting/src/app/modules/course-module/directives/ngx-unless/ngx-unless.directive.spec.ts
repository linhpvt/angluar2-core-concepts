import { TemplateRef } from '@angular/core';
import { NgxUnlessDirective } from './ngx-unless.directive';

describe('NgxUnlessDirective', () => {
  it('should create an instance', () => {
    const directive = new NgxUnlessDirective(null, null);
    expect(directive).toBeTruthy();
  });
});
