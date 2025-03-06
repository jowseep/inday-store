export class Transaction {
    id: number = 0;
    borrowerId: number = 0;
    borrowerName: string = '';
    amount: number = 0;
    date: Date = new Date();
    notes: string = '';
    products: string[] = [];
}

export const TRANSACTIONS: Transaction[] = [
    {
        id: 1,
        borrowerId: 101,
        borrowerName: "John Doe",
        amount: 150.75,
        date: new Date("2024-02-01"),
        notes: "Paid in full",
        products: ["Notebook", "Pen"]
    },
    {
        id: 2,
        borrowerId: 102,
        borrowerName: "Jane Smith",
        amount: 85.50,
        date: new Date("2024-02-05"),
        notes: "Partial payment",
        products: ["Pencil", "Eraser"]
    },
    {
        id: 3,
        borrowerId: 103,
        borrowerName: "Alice Johnson",
        amount: 200.00,
        date: new Date("2024-02-10"),
        notes: "Late payment",
        products: ["Laptop", "Charger"]
    },
    {
        id: 4,
        borrowerId: 104,
        borrowerName: "Bob Williams",
        amount: 120.25,
        date: new Date("2024-02-15"),
        notes: "",
        products: ["Backpack", "Water Bottle"]
    },
    {
        id: 5,
        borrowerId: 105,
        borrowerName: "Charlie Brown",
        amount: 300.00,
        date: new Date("2024-02-20"),
        notes: "Paid in full",
        products: ["Shoes", "Socks"]
    },
    {
        id: 6,
        borrowerId: 106,
        borrowerName: "David Jones",
        amount: 75.00,
        date: new Date("2024-02-25"),
        notes: "Discount applied",
        products: ["Notebook", "Bag"]
    },
    {
        id: 7,
        borrowerId: 107,
        borrowerName: "Emma Davis",
        amount: 95.50,
        date: new Date("2024-03-01"),
        notes: "",
        products: ["Phone Case", "Screen Protector"]
    },
    {
        id: 8,
        borrowerId: 108,
        borrowerName: "Frank Miller",
        amount: 400.00,
        date: new Date("2024-03-05"),
        notes: "Pending approval",
        products: ["Monitor", "Keyboard", "Mouse"]
    },
    {
        id: 9,
        borrowerId: 109,
        borrowerName: "Grace Wilson",
        amount: 50.00,
        date: new Date("2024-03-10"),
        notes: "Returned item",
        products: ["T-Shirt"]
    },
    {
        id: 10,
        borrowerId: 110,
        borrowerName: "Henry Moore",
        amount: 220.00,
        date: new Date("2024-03-15"),
        notes: "Final installment",
        products: ["Desk", "Chair"]
    }
]