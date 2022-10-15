import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { PoPageModule } from "@po-ui/ng-components";
import {
  PoFieldModule,
  PoButtonModule,
  PoTableModule,
  PoBreadcrumbModule,
  PoDividerModule,
  PoWidgetModule,
  PoInfoModule,
  PoLoadingModule,
  PoGridModule,
  PoTabsModule,
  PoTooltipModule,
  PoModalModule,
  PoContainerModule,
  PoPopupModule,
} from "@po-ui/ng-components";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { PoSlideModule } from '@po-ui/ng-components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    CommonModule,
    PoPageModule,
    PoFieldModule,
    PoButtonModule,
    PoTableModule,
    PoBreadcrumbModule,
    PoDividerModule,
    PoWidgetModule,
    PoInfoModule,
    PoLoadingModule,
    PoGridModule,
    PoTabsModule,
    PoTooltipModule,
    PoModalModule,
    PoContainerModule,
    PoPopupModule,
    ReactiveFormsModule,
    FormsModule,
    PoModalModule,
    CommonModule,
    PoLoadingModule,
    PoPageModule,
    PoTableModule,
    FormsModule,
    ReactiveFormsModule,
    PoFieldModule,
    PoButtonModule,
    PoContainerModule,
    PoLoadingModule,
    PoDividerModule,
    PoModalModule,
    PoInfoModule,
    PoTabsModule,
    PoSlideModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
