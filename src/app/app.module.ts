import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { CreateStoryComponent } from './create-story/create-story.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateStoryComponent,
    BoardComponent,],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'summary', component: BoardComponent },
      { path: 'create', component: CreateStoryComponent },
      { path: '', redirectTo: 'summary', pathMatch: 'full' },
      { path: '**', redirectTo: 'create', pathMatch: 'full' }
      
    ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
