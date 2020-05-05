import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { VideoEmbedderComponent } from './video-embedder/video-embedder.component';
import { VideoListComponent } from './video-list/video-list.component';
import { ViewBreakdownComponent } from './view-breakdown/view-breakdown.component';
import { ViewFilterComponent } from './view-filter/view-filter.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardComponent, VideoEmbedderComponent, VideoListComponent, ViewBreakdownComponent, ViewFilterComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }