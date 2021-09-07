import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseModuleModule } from './modules/course-module/course-module.module';

@NgModule({
  declarations: [
    // components, directives, pipes that are being used in the application
    AppComponent,
  ],
  imports: [
    // the dependent modules of our application
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CourseModuleModule,
  ],
  providers: [
    // services that are being used over the application
    // CourseServiceService
  ],
  bootstrap: [
    // entry point of the application, usually, there is only one component
    AppComponent,
  ],
})
export class AppModule {}
