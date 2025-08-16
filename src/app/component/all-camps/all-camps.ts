import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { RouterModule } from '@angular/router';

interface Camps {
  gananatya: string;
  date: string;
  image: string;
  available: boolean;
}

@Component({
  selector: 'app-all-camps',
  imports: [CommonModule,
    RouterModule
  ],
  templateUrl: './all-camps.html',
  styleUrl: './all-camps.css'
})
export class AllCamps {
  campsList: Camps[] = [
    {
      gananatya : "Opera Suryamandir",
      date: '19 Aug to 22 Aug',
      image: 'https://readdy.ai/api/search-image?query=Traditional%20Ramayana%20theater%20poster%20with%20ornate%20golden%20border%2C%20classical%20Indian%20art%20style%2C%20vibrant%20colors%2C%20cultural%20motifs%2C%20elegant%20typography%2C%20theatrical%20promotional%20design&width=300&height=400&seq=show1&orientation=portrait',
      available: true
    },
    {
      gananatya : "Opera Suryamandir",
      date: '19 Aug to 22 Aug',
      image: 'https://readdy.ai/api/search-image?query=Traditional%20Ramayana%20theater%20poster%20with%20ornate%20golden%20border%2C%20classical%20Indian%20art%20style%2C%20vibrant%20colors%2C%20cultural%20motifs%2C%20elegant%20typography%2C%20theatrical%20promotional%20design&width=300&height=400&seq=show1&orientation=portrait',
      available: true
    },
    {
      gananatya : "Opera Suryamandir",
      date: '19 Aug to 22 Aug',
      image: 'https://readdy.ai/api/search-image?query=Traditional%20Ramayana%20theater%20poster%20with%20ornate%20golden%20border%2C%20classical%20Indian%20art%20style%2C%20vibrant%20colors%2C%20cultural%20motifs%2C%20elegant%20typography%2C%20theatrical%20promotional%20design&width=300&height=400&seq=show1&orientation=portrait',
      available: true
    },
    {
      gananatya : "Opera Suryamandir",
      date: '19 Aug to 22 Aug',
      image: 'https://readdy.ai/api/search-image?query=Traditional%20Ramayana%20theater%20poster%20with%20ornate%20golden%20border%2C%20classical%20Indian%20art%20style%2C%20vibrant%20colors%2C%20cultural%20motifs%2C%20elegant%20typography%2C%20theatrical%20promotional%20design&width=300&height=400&seq=show1&orientation=portrait',
      available: true
    },
    {
      gananatya : "Opera Suryamandir",
      date: '19 Aug to 22 Aug',
      image: 'https://readdy.ai/api/search-image?query=Traditional%20Ramayana%20theater%20poster%20with%20ornate%20golden%20border%2C%20classical%20Indian%20art%20style%2C%20vibrant%20colors%2C%20cultural%20motifs%2C%20elegant%20typography%2C%20theatrical%20promotional%20design&width=300&height=400&seq=show1&orientation=portrait',
      available: true
    },
    {
      gananatya : "Opera Suryamandir",
      date: '19 Aug to 22 Aug',
      image: 'https://readdy.ai/api/search-image?query=Traditional%20Ramayana%20theater%20poster%20with%20ornate%20golden%20border%2C%20classical%20Indian%20art%20style%2C%20vibrant%20colors%2C%20cultural%20motifs%2C%20elegant%20typography%2C%20theatrical%20promotional%20design&width=300&height=400&seq=show1&orientation=portrait',
      available: true
    },
  ];
}
