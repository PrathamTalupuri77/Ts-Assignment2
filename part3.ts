
enum OrderStatus {
    Pending = "Pending",
    Shipped = "Shipped",
    Delivered = "Delivered",
    Cancelled = "Cancelled"
}


type Order = [orderId: number, status: OrderStatus];


type Coordinates = [latitude: number, longitude: number];


let orders: Order[] = [];
let locations: Coordinates[] = [];


function createOrder(orderId: number, status: OrderStatus): void {
    orders.push([orderId, status]);
    console.log(`Order ID: ${orderId} created with status: ${status}`);
}


function updateOrderStatus(orderId: number, status: OrderStatus): void {
    const index = orders.findIndex(order => order[0] === orderId);
    if (index !== -1) {
        orders[index][1] = status;
        console.log(`Order ID: ${orderId} updated to status: ${status}`);
    } else {
        console.log(`Order ID: ${orderId} not found.`);
    }
}


function addLocation(latitude: number, longitude: number): void {
    locations.push([latitude, longitude]);
    console.log(`Location stored: Latitude ${latitude}, Longitude ${longitude}`);
}


function getLocationInfo(index: number): void {
    if (index >= 0 && index < locations.length) {
        console.log(`Latitude: ${locations[index][0]}, Longitude: ${locations[index][1]}`);
    } else {
        console.log(`Location at index ${index} not found.`);
    }
}

createOrder(101, OrderStatus.Pending);
updateOrderStatus(101, OrderStatus.Shipped);

addLocation(12.3456, 78.9012);
getLocationInfo(0);
