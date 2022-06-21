import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { PublicComponent } from './public/public.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PrivateComponent } from './private/private.component';
import { ErrorDialogComponent } from './Dialogs/error-dialog/error-dialog.component';
import { DialogsModule } from './Dialogs/dialogs.module';
import { RequestInterceptorService } from './Services/request-interceptor/request-interceptor.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    DialogsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
