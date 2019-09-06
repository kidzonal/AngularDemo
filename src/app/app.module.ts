import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContentComponent } from './layout/content/content.component';
import { UserListComponent } from './site/user-list/user-list.component';
import { DashboardComponent } from './site/dashboard/dashboard.component';
import { BreadcrumbComponent } from './layout/breadcrumb/breadcrumb.component';
import { HelloComponent } from './hello/hello.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    UserListComponent,
    DashboardComponent,
    BreadcrumbComponent,
    HelloComponent,
    LoginComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
