
class Table {
    constructor(tableNumber) {
        this.tableNumber = tableNumber;
        this.orders = [];
    };
    addOrder(order) {
        this.orders.push(order);
    };
    cancelOrder() {
        this.orders = [];
    };
    getTotalAmount() {
        let totalSum = 0;
        for (let order of this.orders) {
            for (let dish of order.dishes) {
                totalSum += dish.price;
            }
        }
        return totalSum;
    };
}

class Order {
    constructor(table, dishes, status) {
        this.table = table;
        this.dishes = dishes;
        this.status = status;
    }
    getTotalAmount() {
        let totalSum = 0;
        for (let dish of this.dishes) {
            totalSum += dish.price;
        }
        return totalSum;
    }
    changeOrderStatus() {
        this.status = prompt("Enter new order status");
    }
}
class System {
    constructor() {
        this.tables = [];
    }
    addTable(tableNumber) {
        const newTable = new Table(tableNumber);
        this.tables.push(newTable);
        return newTable;
    }
}

const admin = new System();

const table1 = admin.addTable(1);
const order1 = new Order(1, [
    { name: "Coffee", price: 30 },
    { name: "Cheesecake", price: 50 }
], "Processing");
table1.addOrder(order1);

const table2 = admin.addTable(2);
const order2 = new Order(2, [
    { name: "Latte", price: 40 },
    { name: "Tiramisu", price: 60 }
], "Cooking");
table2.addOrder(order2);