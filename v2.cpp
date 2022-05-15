#include <iostream>

using namespace std;

// working -- > shows each flights travel time.
void flightTimes(float departures[], float arrivals[]) {
    cout << "The available travel times for flights are: " << endl ;
    cout << "\tDepart \t Arrive" << endl ;
    for (int i = 0; i < 5 ; i++ ) {
        cout << i+1 << ".\t" << departures[i] << "\t " << arrivals[i] <<  endl ;

    }
}

// working -- > Validates flight number and minus 1 from number
void validateFlight(int & number) {
    while (number < 1 || number > 5) {
        cout << "Incorrect option! Please choose from 1-5." << endl ;
        cin >> number ;
    }
    number -= 1 ; // counting/index start at 0
}


void displaySeats(string array[], int ticket) {
    cout << "First Class(" << ticket+(ticket *0.20) << ")"<< endl ;
    for (int i = 0 ; i < 50; i++) {
        if (i == 3 || i == 9 || i == 15 || i == 21 || i == 27 || i == 33 || i == 39 || i == 45) {
            cout << "---- " ;
        }
        if (i == 6 || i == 12 || i == 18 || i == 24 || i == 30 || i == 36 || i == 42 || i == 48) {
            cout << endl ;
            if (i == 24) {
                cout << "Economy class(" << ticket << ")"<<endl;
            }
        }
        cout << array[i];

    }

}

void seatValidation(string & seat,string array[]) {
    for (int i = 0; i < 50 ; i++) {
        while (array[i] == seat) {
            cout << "Seats that are already taken will be indicated with an asterisk" << endl ;
            cout << "Please key in a seat number to choose a seat(eg:A2)" << endl ;
            cin >> seat ;
        }
    }
}

// working -- > books a seat and appends to booked array[restricted seats] and sets ticket type
void booking(string array[], string booked[], int & pos) {
    string seat ;   // passenger choose seat
    string ticketType ; // economy/first


    cout << "Please key in a seat number to choose a seat(eg:A2)" << endl ;
    cin >> seat ;

    // seat validation
    for (int j = 0; j < 50; j++) {
        seatValidation(seat,booked) ;
    }


    booked[pos] = seat ;  // add seat to booked array --> These seats will be restricted
    cout << endl;
    pos += 1 ;

    for (int j = 0; j < 50; j++) {

        if (array[j] == "|" + seat + "|") {
            array[j] = "|**|";
            if (j <= 23 ) {ticketType = "First class" ;}
            else if (j > 23) {ticketType = "Economy class" ;}
        }
    }


    cout << ticketType << endl ;
}


void bookSeats(string array[], float departure[], int flight, int ticket) {
    string rows[9] = {"A", "B", "C", "D", "E", "F", "G", "H", "I"} ;
    int columns[6] = {1 ,2 ,3 ,4 ,5 ,6} ;
    string booked[50] ;         // empty array size 50 to add booked seats
    int pos = 0;                // posistion to add to booked[]
    int bookings = 0 ;
    string seat;

    // only add seats once
    if (bookings == 0) {
        // add seats to array
        for (int i = 0 ; i < 50 ; i++) {

            if (i < 6) {
                array[i] = "|" + rows[0] + to_string(columns[i]) + "|" ;
            }

            if (i >= 6 and i < 12) {
                array[i] = "|" + rows[1] + to_string(columns[i%6]) + "|" ;
            }

            if (i >= 12 and i < 18) {
                array[i] = "|" + rows[2] + to_string(columns[i%6]) + "|" ;
            }

            if (i >= 18 and i < 24) {
                array[i] = "|" + rows[3] + to_string(columns[i%6]) + "|" ;
            }

            if (i >= 24 and i < 30) {
                array[i] = "|" + rows[4] + to_string(columns[i%6]) + "|" ;
            }

            if (i >= 30 and i < 36) {
                array[i] = "|" + rows[5] + to_string(columns[i%6]) + "|" ;
            }

            if (i >= 36 and i < 42) {
                array[i] = "|" + rows[6] + to_string(columns[i%6]) + "|" ;
            }

            if (i >= 42 and i < 48) {
                array[i] = "|" + rows[7] + to_string(columns[i%6]) + "|" ;
            }

            if (i >= 48 and i < 50) {
                array[i] = "|" + rows[8] + to_string(columns[i%6]) + "|" ;
            }

        }
        cout << endl ;
    }

    //  display seats
    cout << "The available seats for " << departure[flight] << " are as follows" << endl;
    displaySeats(array, ticket) ;

    cout << endl ;
    booking(array, booked, pos) ; // add a booking

    

}

int main()
{
    string name, surname, fullname ;
    float economyTicket = 1600.00 ;
    float departures[5] = {7.00, 9.00, 11.00, 13.00, 15.00} ;
    float arrivals[5] = {9.30, 11.30, 13.30, 15.30, 17.30} ;
    string arraySeats[50] ; // associate flights pre booking
    int flight ; // flight number

    cout.setf(ios::fixed) ;
    cout.precision(2);

    cout << "Welcome to COS1511 Flight Booking system" << endl ;
    cout << endl ;

    cout << "Enter full name" << endl ;
    cin >> name >> surname ;
    fullname = name + " " + surname ;

    cout << endl ;

    flightTimes(departures, arrivals) ;
    cout << "Choose the time by entering the option number from the displayed list:" << endl ;
    cin >> flight ;
    validateFlight(flight) ;

    cout << flight << endl ;

    bookSeats(arraySeats, departures, flight, economyTicket) ;


    return 0;
}






























