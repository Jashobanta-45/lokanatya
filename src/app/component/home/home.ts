import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

interface Slide {
  title: string;
  subtitle: string;
  date: string;
  location: string;
  image: string;
}

interface Jatra {
  title: string;
  night: string;
  gananatya: string;
  date: string;
  location: string;
  image: string;
  promoted?: boolean;
  available: boolean;
}

interface UpCommingJatra {
  title: string;
  night: string;
  gananatya: string;
  date: string;
  location: string;
  image: string;
  available: boolean;
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

  jatraList: Jatra[] = [
    {
      title: 'Panatkani',
      night: '1st Night',
      gananatya : "Opera Suryamandir",
      date: 'Aug 14 2025 Thursday',
      location: 'Grand Cultural Center',
      image: 'https://readdy.ai/api/search-image?query=Traditional%20Ramayana%20theater%20poster%20with%20ornate%20golden%20border%2C%20classical%20Indian%20art%20style%2C%20vibrant%20colors%2C%20cultural%20motifs%2C%20elegant%20typography%2C%20theatrical%20promotional%20design&width=300&height=400&seq=show1&orientation=portrait',
      promoted: true,
      available: true
    },
    {
      title: 'Badanam galira badsha',
      night: '2nd Night',
      gananatya : "Jtra Shree Biswadarabar",
      date: 'Aug 14 2025 Thursday',
      location: 'Regional Arts Theater',
      image: 'https://readdy.ai/api/search-image?query=Mahabharata%20theater%20promotional%20poster%20with%20warrior%20motifs%2C%20epic%20battle%20scenes%2C%20rich%20colors%2C%20traditional%20Indian%20artwork%2C%20dramatic%20composition%2C%20cultural%20heritage%20design&width=300&height=400&seq=show2&orientation=portrait',
      promoted: false,
      available: true
    },
    {
      title: 'Na Anka Durbhikhya',
      night: '3rd Night',
      gananatya : "Jatra Durga Mandir",
      date: 'Aug 14 2025 Thursday',
      location: 'Community Arts Hall',
      image: 'https://readdy.ai/api/search-image?query=Goddess%20Durga%20theater%20poster%20with%20divine%20imagery%2C%20ornate%20decorations%2C%20spiritual%20symbols%2C%20vibrant%20festival%20colors%2C%20traditional%20art%20style%2C%20cultural%20celebration%20theme&width=300&height=400&seq=show3&orientation=portrait',
      promoted: true,
      available: true
    },
    {
      title: 'Kati Kati Double Kati',
      night: '4th Night',
      gananatya : "Jatra Indrabhuban",
      date: 'Aug 14 2025 Thursday',
      location: 'Heritage Theater',
      image: 'https://readdy.ai/api/search-image?query=Krishna%20Leela%20theater%20poster%20with%20peacock%20feathers%2C%20flute%20imagery%2C%20pastoral%20scenes%2C%20blue%20and%20gold%20colors%2C%20devotional%20art%20style%2C%20classical%20Indian%20theatrical%20design&width=300&height=400&seq=show4&orientation=portrait',
      promoted: false,
      available: false
    }
  ];

  upCommingJatraList: Jatra[] = [
    {
      title: 'Panatkani',
      night: '1st Night',
      gananatya : "Opera Suryamandir",
      date: 'Aug 14 2025 Thursday',
      location: 'Grand Cultural Center',
      image: 'https://readdy.ai/api/search-image?query=Traditional%20Ramayana%20theater%20poster%20with%20ornate%20golden%20border%2C%20classical%20Indian%20art%20style%2C%20vibrant%20colors%2C%20cultural%20motifs%2C%20elegant%20typography%2C%20theatrical%20promotional%20design&width=300&height=400&seq=show1&orientation=portrait',
      promoted: true,
      available: true
    },
    {
      title: 'Badanam galira badsha',
      night: '2nd Night',
      gananatya : "Jtra Shree Biswadarabar",
      date: 'Aug 14 2025 Thursday',
      location: 'Regional Arts Theater',
      image: 'https://readdy.ai/api/search-image?query=Mahabharata%20theater%20promotional%20poster%20with%20warrior%20motifs%2C%20epic%20battle%20scenes%2C%20rich%20colors%2C%20traditional%20Indian%20artwork%2C%20dramatic%20composition%2C%20cultural%20heritage%20design&width=300&height=400&seq=show2&orientation=portrait',
      promoted: false,
      available: true
    },
    {
      title: 'Na Anka Durbhikhya',
      night: '3rd Night',
      gananatya : "Jatra Durga Mandir",
      date: 'Aug 14 2025 Thursday',
      location: 'Community Arts Hall',
      image: 'https://readdy.ai/api/search-image?query=Goddess%20Durga%20theater%20poster%20with%20divine%20imagery%2C%20ornate%20decorations%2C%20spiritual%20symbols%2C%20vibrant%20festival%20colors%2C%20traditional%20art%20style%2C%20cultural%20celebration%20theme&width=300&height=400&seq=show3&orientation=portrait',
      promoted: true,
      available: true
    },
    {
      title: 'Kati Kati Double Kati',
      night: '4th Night',
      gananatya : "Jatra Indrabhuban",
      date: 'Aug 14 2025 Thursday',
      location: 'Heritage Theater',
      image: 'https://readdy.ai/api/search-image?query=Krishna%20Leela%20theater%20poster%20with%20peacock%20feathers%2C%20flute%20imagery%2C%20pastoral%20scenes%2C%20blue%20and%20gold%20colors%2C%20devotional%20art%20style%2C%20classical%20Indian%20theatrical%20design&width=300&height=400&seq=show4&orientation=portrait',
      promoted: false,
      available: false
    }
  ];

  bannerData = {
    image:
      'https://images.unsplash.com/photo-1508766206392-8bd5cf550d1d?auto=format&fit=crop&w=1400&q=80',
    title: 'Experience the Magic of Jatra',
    subtitle: 'Discover unforgettable performances and cultural heritage',
    buttonText: 'Book Your Ticket'
  };

  actors = [
    {
      name: 'Suman Behera',
      gananatya: 'Tulasi Gananatya',
      image: 'assets/actors/suman.jpg'
    },
    {
      name: 'Priya Das',
      gananatya: 'Suyaj mandir',
      image: 'assets/actors/priya.jpg'
    },
    {
      name: 'Ankit Mohanty',
      gananatya: 'Suyaj mandir',
      image: 'assets/actors/ankit.jpg'
    },
    {
      name: 'Sneha Patnaik',
      gananatya: 'Suyaj mandir',
      image: 'assets/actors/sneha.jpg'
    },
    {
      name: 'Amit Kumar',
      gananatya: 'Supporting Actor',
      image: 'assets/actors/amit.jpg'
    },
    {
      name: 'Akshay Kumar',
      gananatya: 'Supporting Actor',
      image: 'assets/actors/akshay.jpg'
    },
    {
      name: 'Amitabh Bachchan',
      gananatya: 'Supporting Actor',
      image: 'assets/actors/amitabh.jpg'
    },
    {
      name: 'Ranbir Kapoor',
      gananatya: 'Supporting Actor',
      image: 'assets/actors/ranbir.jpg'
    },
    {
      name: 'Deepika Padukone',
      gananatya: 'Supporting Actress',
      image: 'assets/actors/deepika.jpg'
    },
    {
      name: 'Salman Khan',
      gananatya: 'Supporting Actor',
      image: 'assets/actors/salman.jpg'
    },
    {
      name: 'Shahrukh Khan',
      gananatya: 'Supporting Actor',
      image: 'assets/actors/shahrukh.jpg'
    },
    {
      name: 'Kareena Kapoor',
      gananatya: 'Supporting Actress',
      image: 'assets/actors/kareena.jpg'
    }
  ];
}
