import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { CreateStoryComponent } from './create-story/create-story.component';
import { AuthGuard } from './guard/auth.guard';
import { initializeKeycloak } from './init/keycloak-init.factory';

@NgModule({
  declarations: [
    AppComponent,
    CreateStoryComponent,
    BoardComponent,],
  imports: [
    BrowserModule,
    KeycloakAngularModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'summary', component: BoardComponent },
      { path: 'create', component: CreateStoryComponent },
      { path: '', component: CreateStoryComponent , canActivate: [AuthGuard]},
      { path: '**', redirectTo: '' }
      
    ])
    ],
  providers: [    
    {
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakService],
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
