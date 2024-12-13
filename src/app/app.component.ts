// app.component.ts
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  rows: number[][] = [];
  totalSeats = 80;
  seatsPerRow = 7;

  constructor() {
    this.initializeSeats();
  }
  // initialising the number of seats
  initializeSeats() {
    let seatNumber = 1;
    for (let i = 0; i < 12; i++) {
      const row = [];
      for (let j = 0; j < (i === 11 ? 3 : this.seatsPerRow); j++) {
        row.push(seatNumber++);
      }
      this.rows.push(row);
    }
  }

  seatStatus: { [key: number]: boolean } = {};
  // alerts for inappropriate enteries
  bookSeats(count: number) {
    if (count <= 0 || count > 7) {
      alert('You can only book between 1 to 7 seats.');
      return;
    }

    const bookedSeats: number[] = [];

    // Priority 1: Book seats in the same row
    for (const row of this.rows) {
      const availableSeats = row.filter((seat) => !this.seatStatus[seat]);
      if (availableSeats.length >= count) {
        for (let i = 0; i < count; i++) {
          const seat = availableSeats[i];
          this.seatStatus[seat] = true;
          bookedSeats.push(seat);
        }
        this.displayBooking(bookedSeats);
        return;
      }
    }

    // Priority 2: Book nearby seats
    for (const row of this.rows) {
      const availableSeats = row.filter((seat) => !this.seatStatus[seat]);
      for (const seat of availableSeats) {
        if (bookedSeats.length < count) {
          this.seatStatus[seat] = true;
          bookedSeats.push(seat);
        } else {
          this.displayBooking(bookedSeats);
          return;
        }
      }
    }

    if (bookedSeats.length < count) {
      alert('Not enough seats available.');
    } else {
      this.displayBooking(bookedSeats);
    }
  }
  // alter for booked seat numbers
  displayBooking(bookedSeats: number[]) {
    alert(`Seats booked: ${bookedSeats.join(', ')}`);
  }

  isSeatBooked(seat: number): boolean {
    return !!this.seatStatus[seat];
  }
  // on click of reset button the window is reloaded
  resetPage() {
    window.location.reload();
  }
}
