import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TodayShow {
  title: string;
  gananatya: string;
  status: string;
  statusClass: string;
  description: string;
  date: string;
  location: string;
  price: string;
  image: string;
  link: string;
  buttonText: string;
  buttonClass: string;
}

@Component({
  selector: 'app-todayshow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todayshow.html',
  styleUrls: ['./todayshow.css']
})
export class Todayshow {
  todayShows: TodayShow[] = [
    // Past events
    {
      title: 'Krishna Leela',
      gananatya: 'Krishna Leela',
      status: 'Completed',
      statusClass: 'bg-gray-200 text-gray-800',
      description: 'A devotional dance-drama based on the life and miracles of Lord Krishna.',
      date: 'August 16, 2025',
      location: 'Open Air Theater',
      price: '₹250 - ₹600',
      image: 'https://readdy.ai/api/search-image?query=Krishna%20Leela%20Indian%20theater%20poster&width=400&height=300&seq=1',
      link: 'book-ticket',
      buttonText: 'Event Ended',
      buttonClass: 'bg-gray-400 cursor-not-allowed'
    },
    {
      title: 'Shiva Tandav',
      gananatya: 'Shiva Tandav',
      status: 'Completed',
      statusClass: 'bg-gray-200 text-gray-800',
      description: 'An intense performance depicting the cosmic dance of Lord Shiva.',
      date: 'August 8, 2025',
      location: 'City Cultural Hall',
      price: '₹300 - ₹700',
      image: 'https://readdy.ai/api/search-image?query=Shiva%20Tandav%20Indian%20theater%20poster&width=400&height=300&seq=2',
      link: 'book-ticket',
      buttonText: 'Event Ended',
      buttonClass: 'bg-gray-400 cursor-not-allowed'
    },
    {
      title: 'Ramayan',
      gananatya: 'Ramayan',
      status: 'Completed',
      statusClass: 'bg-gray-200 text-gray-800',
      description: 'A grand theatrical retelling of the Ramayana.',
      date: 'August 12, 2025',
      location: 'Grand Theater',
      price: '₹400 - ₹1000',
      image: 'https://readdy.ai/api/search-image?query=Ramayan%20Indian%20theater%20poster&width=400&height=300&seq=3',
      link: 'book-ticket',
      buttonText: 'Event Ended',
      buttonClass: 'bg-gray-400 cursor-not-allowed'
    },
    {
      title: 'Meera Bhajan Sandhya',
      gananatya: 'Meera Bhajan Sandhya',
      status: 'Completed',
      statusClass: 'bg-gray-200 text-gray-800',
      description: 'An evening of devotional songs inspired by Meera Bai.',
      date: 'August 16, 2025',
      location: 'Temple Auditorium',
      price: '₹150 - ₹400',
      image: 'https://readdy.ai/api/search-image?query=Meera%20Bhajan%20Sandhya%20Indian%20poster&width=400&height=300&seq=4',
      link: 'book-ticket',
      buttonText: 'Event Ended',
      buttonClass: 'bg-gray-400 cursor-not-allowed'
    },

    // Today's events
    {
      title: 'Gopal Utsav',
      gananatya: 'Gopal Utsav',
      status: 'Available',
      statusClass: 'bg-blue-100 text-blue-800',
      description: 'Celebrate Krishna Janmashtami with devotional performances and dance.',
      date: 'August 16, 2025',
      location: 'Town Square Stage',
      price: '₹200 - ₹500',
      image: 'https://readdy.ai/api/search-image?query=Traditional%20Indian%20theater%20poster%20for%20Sita%20Swayamvar%20with%20ornate%20palace%20setting%2C%20royal%20court%20scene%2C%20vibrant%20colors%2C%20classical%20Indian%20art%20style%2C%20elegant%20typography%2C%20cultural%20heritage%20design&width=400&height=300&seq=upcoming1&orientation=landscape',
      link: 'book-ticket',
      buttonText: 'Book Now',
      buttonClass: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      title: 'Radha Krishna Raas',
      gananatya: 'Radha Krishna Raas',
      status: 'Available',
      statusClass: 'bg-blue-100 text-blue-800',
      description: 'A romantic and devotional depiction of Radha and Krishna’s Raas Leela.',
      date: 'August 15, 2025',
      location: 'Riverbank Amphitheater',
      price: '₹300 - ₹800',
      image: 'https://readdy.ai/api/search-image?query=Dramatic%20Mahabharata%20theater%20poster%20featuring%20Draupadi%20scene%2C%20royal%20court%20setting%2C%20intense%20dramatic%20composition%2C%20rich%20colors%2C%20traditional%20Indian%20theatrical%20art%20style&width=400&height=300&seq=upcoming2&orientation=landscape',
      link: 'book-ticket',
      buttonText: 'Book Now',
      buttonClass: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      title: 'Gopal Utsav',
      gananatya: 'Gopal Utsav',
      status: 'Available',
      statusClass: 'bg-blue-100 text-blue-800',
      description: 'Celebrate Krishna Janmashtami with devotional performances and dance.',
      date: 'August 16, 2025',
      location: 'Town Square Stage',
      price: '₹200 - ₹500',
      image: 'https://readdy.ai/api/search-image?query=Traditional%20Indian%20theater%20poster%20for%20Sita%20Swayamvar%20with%20ornate%20palace%20setting%2C%20royal%20court%20scene%2C%20vibrant%20colors%2C%20classical%20Indian%20art%20style%2C%20elegant%20typography%2C%20cultural%20heritage%20design&width=400&height=300&seq=upcoming1&orientation=landscape',
      link: 'book-ticket',
      buttonText: 'Book Now',
      buttonClass: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      title: 'Radha Krishna Raas',
      gananatya: 'Radha Krishna Raas',
      status: 'Available',
      statusClass: 'bg-blue-100 text-blue-800',
      description: 'A romantic and devotional depiction of Radha and Krishna’s Raas Leela.',
      date: 'August 15, 2025',
      location: 'Riverbank Amphitheater',
      price: '₹300 - ₹800',
      image: 'https://readdy.ai/api/search-image?query=Dramatic%20Mahabharata%20theater%20poster%20featuring%20Draupadi%20scene%2C%20royal%20court%20setting%2C%20intense%20dramatic%20composition%2C%20rich%20colors%2C%20traditional%20Indian%20theatrical%20art%20style&width=400&height=300&seq=upcoming2&orientation=landscape',
      link: 'book-ticket',
      buttonText: 'Book Now',
      buttonClass: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      title: 'Gopal Utsav',
      gananatya: 'Gopal Utsav',
      status: 'Available',
      statusClass: 'bg-blue-100 text-blue-800',
      description: 'Celebrate Krishna Janmashtami with devotional performances and dance.',
      date: 'August 16, 2025',
      location: 'Town Square Stage',
      price: '₹200 - ₹500',
      image: 'https://readdy.ai/api/search-image?query=Traditional%20Indian%20theater%20poster%20for%20Sita%20Swayamvar%20with%20ornate%20palace%20setting%2C%20royal%20court%20scene%2C%20vibrant%20colors%2C%20classical%20Indian%20art%20style%2C%20elegant%20typography%2C%20cultural%20heritage%20design&width=400&height=300&seq=upcoming1&orientation=landscape',
      link: 'book-ticket',
      buttonText: 'Book Now',
      buttonClass: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      title: 'Radha Krishna Raas',
      gananatya: 'Radha Krishna Raas',
      status: 'Available',
      statusClass: 'bg-blue-100 text-blue-800',
      description: 'A romantic and devotional depiction of Radha and Krishna’s Raas Leela.',
      date: 'August 16, 2025',
      location: 'Riverbank Amphitheater',
      price: '₹300 - ₹800',
      image: 'https://readdy.ai/api/search-image?query=Dramatic%20Mahabharata%20theater%20poster%20featuring%20Draupadi%20scene%2C%20royal%20court%20setting%2C%20intense%20dramatic%20composition%2C%20rich%20colors%2C%20traditional%20Indian%20theatrical%20art%20style&width=400&height=300&seq=upcoming2&orientation=landscape',
      link: 'book-ticket',
      buttonText: 'Book Now',
      buttonClass: 'bg-purple-600 hover:bg-purple-700'
    },

    // Upcoming events
    {
      title: 'Mahabharata – Kurukshetra',
      gananatya: 'Mahabharata',
      status: 'Available',
      statusClass: 'bg-green-100 text-green-800',
      description: 'An epic dramatization of the Kurukshetra war.',
      date: 'August 16, 2025 ',
      location: 'Royal Stage Arena',
      price: '₹500 - ₹1500',
      image: 'https://readdy.ai/api/search-image?query=Mahabharata%20Kurukshetra%20Indian%20poster&width=400&height=300&seq=7',
      link: 'book-ticket',
      buttonText: 'Book Now',
      buttonClass: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      title: 'Durga Mahotsav',
      gananatya: 'Durga Mahotsav',
      status: 'Available',
      statusClass: 'bg-green-100 text-green-800',
      description: 'A powerful performance in honor of Goddess Durga.',
      date: 'August 17, 2025 ',
      location: 'Cultural Ground',
      price: '₹250 - ₹700',
      image: 'https://readdy.ai/api/search-image?query=Durga%20Mahotsav%20Indian%20poster&width=400&height=300&seq=8',
      link: '/preview/.../book/104',
      buttonText: 'Book Now',
      buttonClass: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      title: 'Ganesh Utsav',
      gananatya: 'Ganesh Utsav',
      status: 'Available',
      statusClass: 'bg-green-100 text-green-800',
      description: 'A colorful musical in celebration of Lord Ganesha.',
      date: 'August 18, 2025',
      location: 'Community Hall',
      price: '₹200 - ₹500',
      image: 'https://readdy.ai/api/search-image?query=Ganesh%20Utsav%20Indian%20poster&width=400&height=300&seq=9',
      link: '/preview/.../book/105',
      buttonText: 'Book Now',
      buttonClass: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      title: 'Ganga Aarti',
      gananatya: 'Ganga Aarti',
      status: 'Coming Soon',
      statusClass: 'bg-yellow-100 text-yellow-800',
      description: 'A mesmerizing evening ritual celebrating the sacred river Ganga.',
      date: 'August 20, 2025',
      location: 'Riverside Amphitheater',
      price: '₹250 - ₹500',
      image: 'https://readdy.ai/api/search-image?query=Ganga%20Aarti%20theater%20poster&width=400&height=300&seq=10',
      link: 'book-ticket',
      buttonText: 'Get Notified',
      buttonClass: 'bg-yellow-500 hover:bg-yellow-600'
    },
    {
      title: 'Kali Puja',
      gananatya: 'Kali Puja',
      status: 'Coming Soon',
      statusClass: 'bg-yellow-100 text-yellow-800',
      description: 'An energetic performance dedicated to Goddess Kali.',
      date: 'August 22, 2025',
      location: 'Temple Grounds',
      price: '₹300 - ₹900',
      image: 'https://readdy.ai/api/search-image?query=Kali%20Puja%20Indian%20poster&width=400&height=300&seq=11',
      link: 'book-ticket',
      buttonText: 'Get Notified',
      buttonClass: 'bg-yellow-500 hover:bg-yellow-600'
    },
    {
      title: 'Navratri Raas Garba',
      gananatya: 'Navratri Raas Garba',
      status: 'Coming Soon',
      statusClass: 'bg-yellow-100 text-yellow-800',
      description: 'Dance the night away in traditional Raas Garba style.',
      date: 'August 25, 2025',
      location: 'Festival Ground',
      price: '₹150 - ₹400',
      image: 'https://readdy.ai/api/search-image?query=Navratri%20Raas%20Garba%20Indian%20poster&width=400&height=300&seq=12',
      link: 'book-ticket',
      buttonText: 'Get Notified',
      buttonClass: 'bg-yellow-500 hover:bg-yellow-600'
    },
    {
      title: 'Draupadi Vastraharan',
      gananatya: 'Draupadi Vastraharan',
      status: 'Available',
      statusClass: 'bg-green-100 text-green-800',
      description: 'A powerful dramatization of one of the most significant episodes from the Mahabharata.',
      date: 'August 27, 2025 ',
      location: 'Grand Theater',
      price: '₹400 - ₹1000',
      image: 'https://readdy.ai/api/search-image?query=Draupadi%20Vastraharan%20Indian%20poster&width=400&height=300&seq=13',
      link: '/preview/.../book/106',
      buttonText: 'Book Now',
      buttonClass: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      title: 'Hanuman Chalisa Utsav',
      gananatya: 'Hanuman Chalisa Utsav',
      status: 'Coming Soon',
      statusClass: 'bg-yellow-100 text-yellow-800',
      description: 'A grand mass recital and cultural event.',
      date: 'August 29, 2025',
      location: 'Public Ground',
      price: '₹100 - ₹300',
      image: 'https://readdy.ai/api/search-image?query=Hanuman%20Chalisa%20Indian%20poster&width=400&height=300&seq=14',
      link: 'book-ticket',
      buttonText: 'Get Notified',
      buttonClass: 'bg-yellow-500 hover:bg-yellow-600'
    },
    {
      title: 'Saraswati Vandana',
      gananatya: 'Saraswati Vandana',
      status: 'Coming Soon',
      statusClass: 'bg-yellow-100 text-yellow-800',
      description: 'A poetic evening dedicated to Goddess Saraswati.',
      date: 'August 31, 2025 ',
      location: 'Art & Music Hall',
      price: '₹200 - ₹600',
      image: 'https://readdy.ai/api/search-image?query=Saraswati%20Vandana%20Indian%20poster&width=400&height=300&seq=15',
      link: 'book-ticket',
      buttonText: 'Get Notified',
      buttonClass: 'bg-yellow-500 hover:bg-yellow-600'
    },
    {
      title: 'Bhajan Sandhya',
      gananatya: 'Bhajan Sandhya',
      status: 'Coming Soon',
      statusClass: 'bg-yellow-100 text-yellow-800',
      description: 'An evening of soulful bhajans by renowned artists.',
      date: 'September 2, 2025 ',
      location: 'Music Auditorium',
      price: '₹150 - ₹500',
      image: 'https://readdy.ai/api/search-image?query=Bhajan%20Sandhya%20Indian%20poster&width=400&height=300&seq=16',
      link: 'book-ticket',
      buttonText: 'Get Notified',
      buttonClass: 'bg-yellow-500 hover:bg-yellow-600'
    },
    {
      title: 'Rama Navami Utsav',
      gananatya: 'Rama Navami Utsav',
      status: 'Coming Soon',
      statusClass: 'bg-yellow-100 text-yellow-800',
      description: 'A festive celebration of Lord Rama’s birth.',
      date: 'September 5, 2025',
      location: 'City Park',
      price: '₹250 - ₹700',
      image: 'https://readdy.ai/api/search-image?query=Rama%20Navami%20Indian%20poster&width=400&height=300&seq=17',
      link: 'book-ticket',
      buttonText: 'Get Notified',
      buttonClass: 'bg-yellow-500 hover:bg-yellow-600'
    },
    {
      title: 'Janmashtami Leela',
      gananatya: 'Janmashtami Leela',
      status: 'Coming Soon',
      statusClass: 'bg-yellow-100 text-yellow-800',
      description: 'A colorful play on the life of Lord Krishna.',
      date: 'September 7, 2025',
      location: 'Heritage Ground',
      price: '₹300 - ₹800',
      image: 'https://readdy.ai/api/search-image?query=Janmashtami%20Leela%20Indian%20poster&width=400&height=300&seq=18',
      link: 'book-ticket',
      buttonText: 'Get Notified',
      buttonClass: 'bg-yellow-500 hover:bg-yellow-600'
    }
  ];

  // Add this getter to filter for today's date
  get todayOnlyShows(): TodayShow[] {
  const today = new Date();
  // Format today's date as "Month Day, Year" (e.g., "August 15, 2025")
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const todayString = today.toLocaleDateString('en-US', options);

  return this.todayShows.filter(show => {
    // Extract date part before " at"
    const showDatePart = show.date.split(' at')[0];
    return showDatePart === todayString;
  });
}
}
