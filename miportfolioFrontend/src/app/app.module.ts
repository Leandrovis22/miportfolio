import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { BannerComponent } from './components/banner/banner.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './components/hys/hys.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewSkillComponent } from './components/hys/new-skill.component';
import { EditSkillComponent } from './components/hys/edit-skill.component';
import { NewProyectoComponent } from './components/proyecto/new-proyecto.component';
import { EditProyectoComponent } from './components/proyecto/edit-proyecto.component';
import { EditPersonaComponent } from './components/acerca-de/edit-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    AcercaDeComponent,
    BannerComponent,
    ExperienciaComponent,
    EducacionComponent,
    HysComponent,
    ProyectoComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    NewSkillComponent,
    EditSkillComponent,
    NewProyectoComponent,
    EditProyectoComponent,
    EditPersonaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SlickCarouselModule,
    NgCircleProgressModule.forRoot({
      backgroundGradient: true,
      backgroundGradientStopColor: "'transparent'",
      backgroundOpacity: 1,
      backgroundStrokeWidth: 20,
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
      subtitleColor: "#f18701",
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
      responsive: true,
    }),
    AppRoutingModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
