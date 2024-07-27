import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { error } from 'console';
import { interval, Subject, takeUntil } from 'rxjs';

interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'carousel',
  standalone: true,
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit {
  @Input() images: carouselImage[] = [];
  @Input() indicators = true;
  @Input() autoSlide = true;
  @Input() interval = 1000;
  selectedIndex = 0;
  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    // try {
    //   if (this.autoSlide) {
    //     this.startAutoSlide();
    //   }
    // } catch (e) {
    //   console.log(e);
    // }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  startAutoSlide(): void {
    interval(this.interval)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.onNext();
      });
  }

  onNext(): void {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

  selectImage(index: number): void {
    this.selectedIndex = index;
  }
}
