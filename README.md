# Project Title   
 Live Ticket Booking App     

 
## Demo

[Frontend](https://live-ticket-booking.netlify.app/)  https://live-ticket-booking.netlify.app/

# Problem Statement

1. There are 80 seats in a coach of a train with only 7 seats in a row and last row of only 3 seats. For
simplicity, there is only one coach in this train.
2. One person can reserve up to 7 seats at a time.
3. If person is reserving seats, the priority will be to book them in one row.
4. If seats are not available in one row then the booking should be done in such a way that the nearby
seats are booked.
5. User can book as many tickets as s/he wants until the coach is full. 6. You don’t have to create login
functionality for this application

# Assumptions for Train Seat Booking Logic
 ## Structure of the Coach:

1. The train coach is represented as a 2D array (rows), where each row contains a fixed number of seats.
Seat numbers are unique within the coach and follow a sequential numbering system (e.g., 1, 2, 3...).
Seat Status:

2. Each seat can have one of two statuses: booked or available.
A booked seat is displayed with a material-icons icon for "airline_seat_recline_normal," while an available seat is displayed with the "event_seat" icon.
Input Validation:

3. The number of seats to be booked (seatInput.value) is a positive integer within a valid range (1–7).
If the input exceeds the available seats or is invalid (e.g., negative or non-numeric), an appropriate message is shown or no action is taken.
Booking Logic:

4. Seats are booked in a contiguous manner, starting from the earliest available seat in the coach.
If contiguous seats are unavailable, booking fails, and an appropriate message is displayed.
Resetting:

5. The reset button clears all bookings, marking all seats as available.
Icon and Seat Number Display:

6. Each seat icon is displayed above its respective seat number.
Icons are dynamically updated based on the isSeatBooked(seat) function.
Footer Information:

7. The footer includes the developer’s name and contact information.
The contact email is clickable and includes an icon for better visualization.
Responsiveness:

8. The layout of the coach and footer is responsive, ensuring usability across various screen sizes.
Performance:

9. The implementation ensures efficient iteration over the seats, even for larger numbers of rows and columns.
Styling and Accessibility:

10. The booking buttons, icons, and text are styled to be visually clear and accessible to all users.
Hover states or focus outlines are provided for better usability.

# Assumptions for Booking Seats Close Together
## Contiguity of Seats:

1. Seats are booked in a contiguous manner, meaning that consecutive seats within the same row are prioritized.
If enough contiguous seats are not available in the same row, booking spans across multiple rows, starting with the earliest available seats.
Row Preference:

2. Booking logic prioritizes seats in the same row over splitting bookings across multiple rows.
Rows are considered sequentially (from top to bottom or based on the coach's array index).
Seat Availability:

3. Only unbooked seats (!isSeatBooked(seat)) are considered during the booking process.
If the number of requested seats exceeds the available seats, no booking is made, and the user is notified.
Input Validation:

4. The input for the number of seats to book (seatInput.value) is always a valid positive integer.
Invalid inputs (negative numbers, zero, non-numeric values, or numbers exceeding the maximum seat count) are handled gracefully, showing an error or ignoring the input.
Partial Bookings:

5. Partial bookings (e.g., booking fewer than the requested number of seats) are not allowed. Either all requested seats are booked together, or the booking fails.
Algorithmic Efficiency:

6. The logic scans each row sequentially, identifying groups of contiguous unbooked seats.
The implementation is optimized to avoid unnecessary re-checking of seats, ensuring efficient performance even for large datasets.
Fallback Mechanism:

7. If a single block of contiguous seats is not available:
The logic attempts to book the closest possible group of seats.
Seats are split across rows only if absolutely necessary, minimizing the gap between groups.
No Rearrangement:

8. The logic does not attempt to rearrange previously booked seats to accommodate new bookings.
Row and Seat Indexing:

9. Rows and seats are indexed in a standard order (e.g., left to right and top to bottom).
Edge Cases:

10. The logic accounts for edge cases, such as:
Booking the last remaining seat(s).
Booking when only scattered seats are available.
Handling rows with mixed booked and unbooked seats.

# How to run project

In the project directory, you can run:


Install the necessary dependencies by running the following command:

### `npm install`

Start the frontend development server using the following command:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



Feel free to explore the application and interact with its features.





## Tech Stack

**Client:**  Angular
## Deployment Link

[Frontend](https://live-ticket-booking.netlify.app/)  <br />



## Screenshots





