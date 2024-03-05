class Restaurant {
  constructor(name, capacity, reservations, menu, orders) {
    this.name = name;
    this.capacity = capacity;
    this.reservations = reservations;
    this.menu = menu;
    this.orders = orders;
  }

  addReservation(newReservation) {
    this.reservations.push(newReservation);
    console.log(`${newReservation.name} made a reservation on ${newReservation.date} at ${newReservation.time} for ${newReservation.guestCount}.`);
  }

  removeReservation(reservationName) {
    this.reservations = this.reservations.filter(reservation => reservation.name !== reservationName);
    console.log(`${reservationName}'s reservation was removed from the reservation list.`);
  }

  listReservations() {
    console.log('The restaurant has the following people on the reservation list:');

    this.reservations.forEach(reservation => {
      reservationList.push(reservation.name);
    })
    console.log(reservationList);
  }

  sortReservationsAlphabetically() {
    const orderedList = reservationList.sort();
    console.log(orderedList);
  }

  addMenuItem(item) {
    this.menu.push(item);
    console.log(`${item.name} was added to the menu and it costs ${item.price} lei.`);
  }

  removeMenuItem(itemName) {
    this.menu = this.menu.filter(item => item.name !== itemName);
    console.log(`${itemName} was removed from the menu.`);
  }

  listMenuItems() {
    console.log('The restaurant has the following items on the menu:');
    this.menu.forEach(item => {
      menuItemList .push(item.name);
    })
    console.log(menuItemList);
  }

  addOrder(order) {
    this.orders.push(order);
    console.log(`The table ${order.tableNumber} ordered something.`);
  }

  removeOrder(tableNumber) {
    this.orders = this.orders.filter(order => order.tableNumber !== tableNumber);
    console.log(`The order for table ${tableNumber} was removed.`);
  }

  listOrders() {
    console.log('The restaurant has the following orders:');
    this.orders.forEach(order => {
      orderList.push(order);
    })
    console.log(orderList);
  }

  getGuestCount() {
    let totalGuestCount = 0;
    this.reservations.forEach(reservation => {
      totalGuestCount += reservation.guestCount;
    });
    console.log(totalGuestCount);
    return totalGuestCount;
  }

  checkAvailability() {
    let availableSeats = this.capacity - this.getGuestCount();
    if (availableSeats > 0) {
      console.log(`There are ${availableSeats} available seats in the restaurant.`); 
    } else {
      console.log('There are no available seats in the restaurant.')
    }
    
  }

  isFullyBooked() {
    const totalGuestCount = this.reservations.reduce((total, reservation) => total + reservation.guestCount, 0);

    if (totalGuestCount >= this.capacity) {
      console.log('The restaurant is fully booked.');
    } else {
      console.log('The restaurant is not fully booked.');      
    }
  }

  isReservationAvailable(reservationName) {
    const checkReservation = this.reservations.some(reservation => reservation.name === reservationName);
    if (checkReservation === true) {
      console.log(`There is a reservation for ${reservationName}.`);
    } else {console.log(`There is no reservation for ${reservationName}.`);}
  }

  getTotalRevenue() {
    const revenue = this.orders.reduce((total, order) => total + order.calculateTotalPrice(), 0);
    //console.log(revenue);
    return revenue;
  }



}

class Reservation {
  constructor(name, date, time, guestCount) {
    this.name = name;
    this.date = date;
    this.time = time;
    this.guestCount = guestCount;
  }
}

class Guest extends Reservation {
  constructor(name, date, time, guestCount, specialRequests) {
    super(name, date, time, guestCount);
    this.specialRequests = specialRequests;
  }
}

class Order {
  constructor(tableNumber, items, totalPrice) {
    this.tableNumber = tableNumber;
    this.items = items;
    this.totalPrice = totalPrice;
  }

  calculateTotalPrice() {
    let totalPrice = 0;
    this.items.forEach(item => {
      totalPrice += item.price;
    });
    return totalPrice;
  }
}

class OnlineOrder extends Order {
  constructor (deliveryAdress, items, totalPrice) {
    super(items, totalPrice);
    this.deliveryAdress = deliveryAdress;
  }
}

class MenuItem {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
let orderList = [];
let reservationList = [];
let menuItemList = [];
const napoleon = new Restaurant('Napoleon', 50, [], [], []);
console.log(napoleon);
const pizzaNapoelonMare = new MenuItem('Pizza Napoleon Mare (40cm)', 54);
const pizzaNapoelonMedie = new MenuItem('Pizza Napoleon Medie (32cm)', 44);
const pizzaNapoelonMica = new MenuItem('Pizza Napoleon Mica (25cm)', 35);
const pepsi = new MenuItem('Pepsi', 9);
const ursusPremium = new MenuItem ('Ursus Premium', 10);
console.log(pizzaNapoelonMare);
console.log(pizzaNapoelonMedie);
console.log(pizzaNapoelonMica);
console.log(pepsi);
console.log(ursusPremium);


const mihaiReservation = new Reservation ('Mihai Dragu', '12/02/2024', '19:00', 4);
const ioanaReservation = new Reservation ('Ioana Florescu', '12/02/2024', '18:30', 6);
const cristianReservation = new Reservation('Cristian Cojocaru', '12/02/2024', '19:00', 2);
const georgeRervation = new Reservation('George Dumitru', '12/02/2024', '20:00', 3);
//console.log(mihaiReservation);
napoleon.addReservation(mihaiReservation);
napoleon.addReservation(ioanaReservation);
napoleon.addReservation(cristianReservation);
napoleon.addReservation(georgeRervation);
napoleon.removeReservation('Ioana Florescu');
//napoleon.removeReservation('Mihai Dragu');
napoleon.listReservations();
napoleon.sortReservationsAlphabetically();
napoleon.addMenuItem(pizzaNapoelonMare);
napoleon.addMenuItem(pizzaNapoelonMedie);
napoleon.addMenuItem(pizzaNapoelonMica);
napoleon.addMenuItem(pepsi);
napoleon.addMenuItem(ursusPremium);
napoleon.removeMenuItem('Ursus Premium');
napoleon.listMenuItems();
const cristianOrder = new Order (2, [pizzaNapoelonMare, pizzaNapoelonMedie, pepsi]);
const mihaiOrder = new Order (4, [pizzaNapoelonMare, pepsi]);
const georgeOrder = new Order (1, [pizzaNapoelonMare, pizzaNapoelonMare, pepsi, pepsi, pepsi]);
//const mirceaOnlineOrder = new OnlineOrder('Str. Carpati 8, Nr. 65', [pizzaNapoelonMedie, pepsi]);
napoleon.addOrder(mihaiOrder);
napoleon.addOrder(cristianOrder);
napoleon.addOrder(georgeOrder);
//napoleon.addOrder(mirceaOnlineOrder);
console.log(mihaiOrder);
console.log(mihaiOrder.calculateTotalPrice());
console.log(cristianOrder.calculateTotalPrice());
console.log(georgeOrder.calculateTotalPrice());
//console.log(mirceaOnlineOrder.calculateTotalPrice());
napoleon.removeOrder(2);
napoleon.listOrders();
napoleon.getGuestCount();
napoleon.checkAvailability();
napoleon.isReservationAvailable('Mihai Dragu');
napoleon.isReservationAvailable('Mircea Lucescu');
napoleon.isFullyBooked();
console.log(napoleon.getTotalRevenue());





