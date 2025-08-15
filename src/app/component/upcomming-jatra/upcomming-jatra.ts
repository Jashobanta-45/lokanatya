import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';

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

@Component({
  selector: 'app-upcomming-jatra',
  imports: [CommonModule,
    RouterModule
  ],
  templateUrl: './upcomming-jatra.html',
  styleUrl: './upcomming-jatra.css'
})
export class UpcommingJatra {
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
    },
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
}
