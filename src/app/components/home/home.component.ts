import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { NewsFormComponent } from '../news-form/news-form.component';
import { FooterComponent } from '../footer/footer.component';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    NgOptimizedImage,
    BtnPrimaryComponent,
    NewsFormComponent,
    FooterComponent,
    CarouselComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  images = [
    {
      imageSrc:
        'https://i.pinimg.com/564x/1e/f0/b2/1ef0b2a49ca41d6cfe613b268df8b56d.jpg',
      imageAlt: 'Gato 1',
    },
    {
      imageSrc:
        'https://i.pinimg.com/564x/11/5b/86/115b86bf01c45289683d25b9ff810f22.jpg',
      imageAlt: 'Gato 2',
    },
    {
      imageSrc:
        'https://i.pinimg.com/564x/01/30/da/0130dabd6776eec92eaf43858c9bf556.jpg',
      imageAlt: 'Gato 3',
    },
    {
      imageSrc:
        'https://i.pinimg.com/564x/21/c8/54/21c854b650a8e22a82c46f44094e975c.jpg',
      imageAlt: 'Gato 4',
    },
  ];
}
