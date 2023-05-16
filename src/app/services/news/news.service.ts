import { Injectable } from '@angular/core';
import { INew } from 'src/app/interfaces/news.interface';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  //now it is mocked
  private dataSet: INew[] = [
    {
      id: '1',
      title: 'Major Breakthrough: Researchers Develop Groundbreaking Treatment for Alzheimer\'s Disease, Offering Hope for Millions',
      content: 'Scientists at a leading medical institute have made a significant breakthrough in the fight against Alzheimer\'s disease, unveiling a revolutionary treatment that shows promise in halting the progression of the debilitating condition. This groundbreaking development has raised hopes for millions of patients and their families worldwide, ushering in a new era of potential therapies.' },
    {
      id: '2',
      title: 'Global Efforts Pay Off: Wildlife Conservation Project Saves Endangered Tiger Species from Extinction',
      content: 'In a remarkable conservation success story, an international wildlife preservation initiative has successfully pulled the endangered tiger species back from the brink of extinction. Through concerted efforts to protect habitats, combat poaching, and promote breeding programs, the project has seen a remarkable rise in tiger populations, offering a glimmer of hope for the world\'s most iconic big cat.'
    },
    {
      id: '3',
      title: 'Groundbreaking Study: Artificial Intelligence Predicts Earthquake Patterns with Unprecedented Accuracy',
      content: 'A groundbreaking study utilizing artificial intelligence (AI) algorithms has achieved remarkable success in predicting earthquake patterns with unprecedented accuracy. By analyzing vast amounts of seismic data and leveraging advanced machine learning techniques, scientists can now provide more reliable early warning systems, potentially saving lives and enabling better preparedness in earthquake-prone regions.'
    },
    {
      id: '4',
      title: 'Revolutionary Solar Energy Breakthrough: New Technology Harvests Sunlight During Rainy Days',
      content: 'Researchers have unveiled a groundbreaking solar energy innovation that allows photovoltaic panels to generate electricity even on cloudy and rainy days. By harnessing the power of a phenomenon known as "triboelectric effect," the technology efficiently captures energy from raindrops, opening up new possibilities for widespread renewable energy adoption and reducing reliance on fossil fuels.'
    },
  ];

  constructor() { }

  public getNewsSet(): INew[] {
    return this.dataSet;
  }
}
