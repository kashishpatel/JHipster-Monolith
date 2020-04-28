import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipstermonolithSharedModule } from 'app/shared/shared.module';
import { JhipstermonolithCoreModule } from 'app/core/core.module';
import { JhipstermonolithAppRoutingModule } from './app-routing.module';
import { JhipstermonolithHomeModule } from './home/home.module';
import { JhipstermonolithEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipstermonolithSharedModule,
    JhipstermonolithCoreModule,
    JhipstermonolithHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipstermonolithEntityModule,
    JhipstermonolithAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class JhipstermonolithAppModule {}
