import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

interface Slide {
  title: string;
  subtitle: string;
  date: string;
  location: string;
  image: string;
}

@Component({
  selector: 'app-home',
  standalone: true, // If using standalone components in Angular 15+
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit, OnDestroy {
  slides: Slide[] = [
    {
      title: 'Ramayana: The Epic Saga',
      subtitle: 'A mesmerizing tale of love, valor, and devotion',
      date: 'December 15-20, 2024',
      location: 'Grand Cultural Center',
      image: 'https://readdy.ai/api/search-image?query=Traditional%20Indian%20theater%20stage%20performance%20of%20Ramayana%20with%20elaborate%20costumes%2C%20ornate%20backdrop%2C%20dramatic%20lighting%2C%20cultural%20heritage%20setting%2C%20vibrant%20colors%2C%20theatrical%20atmosphere%2C%20artistic%20composition&width=1200&height=600&seq=hero1&orientation=landscape'
    },
    {
      title: 'Mahabharata: The Great War',
      subtitle: 'An immortal story of dharma and destiny',
      date: 'January 5-12, 2025',
      location: 'Regional Arts Theater',
      image: 'https://readdy.ai/api/search-image?query=Epic%20Mahabharata%20theater%20performance%20with%20warriors%20in%20traditional%20armor%2C%20dramatic%20stage%20setup%2C%20golden%20lighting%2C%20cultural%20storytelling%20atmosphere%2C%20rich%20textures%2C%20theatrical%20grandeur&width=1200&height=600&seq=hero2&orientation=landscape'
    },
    {
      title: 'Goddess Durga Chronicles',
      subtitle: 'Celebrating the divine feminine power',
      date: 'February 18-25, 2025',
      location: 'Community Arts Hall',
      image: 'https://readdy.ai/api/search-image?query=Divine%20Goddess%20Durga%20theater%20performance%20with%20elaborate%20goddess%20costume%2C%20spiritual%20stage%20decoration%2C%20mystical%20lighting%2C%20cultural%20celebration%20atmosphere%2C%20ornate%20details%2C%20theatrical%20majesty&width=1200&height=600&seq=hero3&orientation=landscape'
    }
  ];

  currentSlide = 0;
  intervalId: any;

  ngOnInit() {
  this.intervalId = setInterval(() => {
    this.nextSlide();
  }, 4000); // 4 seconds per slide
}

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}
