import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BlogCardsModule } from './blog-cards/blog-cards.module';
import { HeadTabsModule } from './head-tabs/head-tabs.module';
import { HeaderModule } from './header/header.module';
import { SideBarModule } from './side-bar/side-bar.module';

export const modules = [HeaderModule, SideBarModule, BlogCardsModule, HeadTabsModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...modules],
  exports: [...modules],
})
export class SharedModule {}
