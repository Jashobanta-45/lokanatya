import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface SeatSection {
  name: string;
  seats: number;
  isOpen?: boolean;
}

interface Seat {
  id: string;
  status: 'available' | 'booked' | 'selfBooked';
}

@Component({
  selector: 'app-book-ticket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-ticket.html',
  styleUrls: ['./book-ticket.css']
})
export class JatraTicket {
  sections: SeatSection[] = [
    { name: 'Section A', seats: 45 },
    { name: 'Section B', seats: 23 },
    { name: 'Section D', seats: 12 },
    { name: 'Section F', seats: 34 },
    { name: 'Section G', seats: 78 },
  ];

  rowMappings: { [key: string]: string[] } = {
    'Section A': ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10'],
    'Section B': ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10'],
    'Section D': ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10'],
    'Section F': ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10'],
    'Section G': ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10'],
  };

  seatsPerRow = 20;
  seatsPerSection: { [sectionName: string]: Seat[][] } = {};

  selectedSectionIndex: number | null = null;

  selectedSeats: { section: string; row: string; number: number }[] = [];
  seatPrice = 250;
  totalPrice = 0;

  constructor(private router: Router) {}

  toggleSection(index: number) {
    if (this.selectedSectionIndex === index) {
      this.selectedSectionIndex = null;
    } else {
      this.selectedSectionIndex = index;
      const sectionName = this.sections[index].name;
      if (!this.seatsPerSection[sectionName]) {
        this.generateSeatsForSection(sectionName);
      }
    }
  }

  generateSeatsForSection(sectionName: string) {
    const rowsForSection = this.rowMappings[sectionName] || [];
    this.seatsPerSection[sectionName] = rowsForSection.map(row => {
      return Array.from({ length: this.seatsPerRow }, (_, i) => {
        const seatId = `${row}-${i + 1}`;
        const isBooked = Math.random() < 0.2; // 20% randomly booked
        return {
          id: seatId,
          status: isBooked ? 'booked' : 'available'
        };
      });
    });
  }

  toggleSeat(sectionName: string, rowIndex: number, seatIndex: number) {
    const seats = this.seatsPerSection[sectionName];
    if (!seats) return;

    const seat = seats[rowIndex][seatIndex];
    if (seat.status === 'booked') return;

    const rowName = this.rowMappings[sectionName][rowIndex];
    const seatNumber = seatIndex + 1;

    if (seat.status === 'selfBooked') {
      seat.status = 'available';
      this.selectedSeats = this.selectedSeats.filter(
        s => !(s.section === sectionName && s.row === rowName && s.number === seatNumber)
      );
    } else {
      seat.status = 'selfBooked';
      this.selectedSeats.push({ section: sectionName, row: rowName, number: seatNumber });
    }

    this.totalPrice = this.selectedSeats.length * this.seatPrice;
  }

  getSeatClass(seat: Seat) {
    switch (seat.status) {
      case 'booked':
        return 'bg-gray-500 cursor-not-allowed';
      case 'selfBooked':
        return 'bg-green-600 cursor-pointer';
      default:
        return 'bg-blue-600 cursor-pointer';
    }
  }

get selectedSeatsDisplay(): string {
  if (this.selectedSeats.length === 0) return '';

  // Group seats by section, then by row
  const grouped: { [section: string]: { [row: string]: number[] } } = {};

  this.selectedSeats.forEach(({ section, row, number }) => {
    if (!grouped[section]) grouped[section] = {};
    if (!grouped[section][row]) grouped[section][row] = [];
    grouped[section][row].push(number);
  });

  // Sort the numbers ascending per row
  Object.values(grouped).forEach(rowGroup => {
    Object.values(rowGroup).forEach(seats => seats.sort((a, b) => a - b));
  });

  // Format seats for a row: first seat with row name, remaining seats as numbers separated by commas
  const formatSeatsRow = (row: string, seats: number[]): string => {
    if (!seats.length) return '';
    const [first, ...rest] = seats;
    const restStr = rest.length ? ', ' + rest.join(', ') : '';
    return `${row}-${first}${restStr}`;
  };

  // Build lines per section
  const sectionsLines = Object.entries(grouped).map(([section, rowGroups]) => {
    const rowParts = Object.entries(rowGroups)
      .map(([row, seats]) => formatSeatsRow(row, seats))
      .join(', ');
    return `${section} - ${rowParts}`;
  });

  // Join sections by newline
  return sectionsLines.join('\n');
}

confirmBooking() {
  if (this.selectedSeats.length === 0) {
    alert('Please select at least one seat before booking.');
    return;
  }
  alert(`You have booked seats: ${this.selectedSeatsDisplay}\nTotal Price: ₹${this.totalPrice}`);
  this.router.navigate(['/payment']);
}
}
