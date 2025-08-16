import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface TodayShow {
  title: string;
  gananatya: string;
  status: string;
  statusClass: string;
  description: string;
  date: string;
  city: string;
  block: string;
  price: string;
  image: string;
  link: string;
  buttonText: string;
  buttonClass: string;
}

@Component({
  selector: 'app-todayshow',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './todayshow.html',
  styleUrls: ['./todayshow.css']
})
export class Todayshow {
  todayShows: TodayShow[] = [
    {
      title: 'Krishna Leela',
      gananatya: 'Krishna Leela',
      status: 'Available',
      statusClass: 'bg-green-800 text-white',
      description: 'A devotional dance-drama based on the life and miracles of Lord Krishna.',
      date: 'August 16, 2025',
      city: 'Bhadrak',
      block: 'Bhadrak',
      price: '₹250 - ₹600',
      image: 'https://readdy.ai/api/search-image?query=Krishna%20Leela%20Indian%20theater%20poster&width=400&height=300&seq=1',
      link: 'book-ticket',
      buttonText: 'Event Ended',
      buttonClass: 'bg-gray-400 cursor-not-allowed'
    },
    {
      title: 'Shiva Tandav',
      gananatya: 'Shiva Tandav',
      status: 'Available',
      statusClass: 'bg-green-800 text-white',
      description: 'An intense performance depicting the cosmic dance of Lord Shiva.',
      date: 'August 8, 2025',
      city: 'Bhadrak',
      block: 'Bhadrak',
      price: '₹300 - ₹700',
      image: 'https://readdy.ai/api/search-image?query=Shiva%20Tandav%20Indian%20theater%20poster&width=400&height=300&seq=2',
      link: 'book-ticket',
      buttonText: 'Event Ended',
      buttonClass: 'bg-gray-400 cursor-not-allowed'
    },
    {
      title: 'Ramayan',
      gananatya: 'Ramayan',
      status: 'Available',
      statusClass: 'bg-green-800 text-white',
      description: 'A grand theatrical retelling of the Ramayana.',
      date: 'August 12, 2025',
      city: 'Bhadrak',
      block: 'Bhadrak',
      price: '₹400 - ₹1000',
      image: 'https://readdy.ai/api/search-image?query=Ramayan%20Indian%20theater%20poster&width=400&height=300&seq=3',
      link: 'book-ticket',
      buttonText: 'Event Ended',
      buttonClass: 'bg-gray-400 cursor-not-allowed'
    },
    {
      title: 'Meera Bhajan Sandhya',
      gananatya: 'Meera Bhajan Sandhya',
      status: 'Available',
      statusClass: 'bg-green-800 text-white',
      description: 'An evening of devotional songs inspired by Meera Bai.',
      date: 'August 16, 2025',
      city: 'Bhadrak',
      block: 'Bhadrak',
      price: '₹150 - ₹400',
      image: 'https://readdy.ai/api/search-image?query=Meera%20Bhajan%20Sandhya%20Indian%20poster&width=400&height=300&seq=4',
      link: 'book-ticket',
      buttonText: 'Event Ended',
      buttonClass: 'bg-gray-400 cursor-not-allowed'
    }
  ];

  // Modal state
  isFilterOpen: boolean = false;

  // Filters
  selectedCity: string = '';
  selectedBlock: string = '';
  selectedStatus: string = '';

  cities = [...new Set(this.todayShows.map(s => s.city))];
  blocks = [...new Set(this.todayShows.map(s => s.block))];
  statuses = [...new Set(this.todayShows.map(s => s.status))];

  // Filtered shows based on dropdowns
  get filteredShows(): TodayShow[] {
    return this.todayShows.filter(show => {
      return (!this.selectedCity || show.city === this.selectedCity) &&
             (!this.selectedBlock || show.block === this.selectedBlock) &&
             (!this.selectedStatus || show.status === this.selectedStatus);
    });
  }

  // Shows for today only
  get todayOnlyShows(): TodayShow[] {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const todayString = today.toLocaleDateString('en-US', options);

    return this.filteredShows.filter(show => {
      const showDatePart = show.date.split(' at')[0].trim();
      return showDatePart === todayString;
    });
  }

  // Toggle filter modal
  toggleFilter() {
    this.isFilterOpen = !this.isFilterOpen;
  }

  // Close filter modal
  closeFilter() {
    this.isFilterOpen = false;
  }

  // Apply filters (example logic)
  applyFilters() {
    // Do filtering logic here, e.g., filter your shows array
    console.log('Filters applied:', this.selectedCity, this.selectedBlock, this.selectedStatus);

    // Close modal after applying
    this.closeFilter();
  }
}
