import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { SocialComponent } from './components/social/social.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { BannerComponent } from './components/banner/banner.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './components/hys/hys.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    SocialComponent,
    AcercaDeComponent,
    BannerComponent,
    ExperienciaComponent,
    EducacionComponent,
    HysComponent
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({
      backgroundGradient: true,
      backgroundGradientStopColor: "'transparent'",
      backgroundOpacity: 1,
      backgroundStrokeWidth: 8,
      backgroundPadding: -9,
      radius: 87,
      space: -16,
      toFixed: 0,
      maxPercent: 100,
      unitsColor: "#575757",
      outerStrokeGradient: true,
      outerStrokeWidth: 21,
      outerStrokeColor: "#081c15",
      outerStrokeGradientStopColor: "#1b4332",
      innerStrokeColor: "#6e4c0d",
      innerStrokeWidth: 10,
      title: "UI",
      titleColor: "#f18701",
      subtitleColor: "#0a0d01",
      imageHeight: 20,
      animateTitle: false,
      animationDuration: 3000,
      showUnits: false,
      showBackground: true,
      backgroundColor: "#2d6a4f",
      clockwise: false,
      startFromZero: false,
      lazy: false,
      subtitleFontSize: "26",
      subtitleFontWeight: "900",
      titleFontWeight: "900",
      titleFontSize: "33",
      renderOnClick: true,
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
