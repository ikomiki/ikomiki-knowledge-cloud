import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BlogListRoutingModule } from './blog-list-routing.module';
import { BlogListComponent } from './blog-list.component';

@NgModule({
  declarations: [BlogListComponent],
  imports: [CommonModule, BlogListRoutingModule],
})
export class BlogListModule {}
