import { Component } from '@angular/core';
import { NewsService } from 'src/app/services/news/news.service';
import { INew } from 'src/app/interfaces/news.interface';

@Component({
  selector: 'app-flows',
  templateUrl: 'flows.page.html',
  styleUrls: ['flows.page.scss']
})
export class FlowsPage {
  public flow: INew[] = [];

  constructor(private news: NewsService) {}

  ionViewDidEnter() {
    this.flow = this.news.getNewsSet()
  }

  public selectCard(id: string) {
    if (this.flow.length) {
      this.flow.forEach((item) => {
        item.selected = item.id === id;
      })
    }
  }
}
