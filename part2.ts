interface Product {
    id: number;
    name: string;
    price: number;
    discount?: number; 
}

class Electronics implements Product {
    getItem() {
        throw new Error("Method not implemented.");
    }
    id!: number;
    name!: string;
    price!: number;
    discount?: number;

    getFinalPrice(): number {
        if (this.discount) {
            return this.price - (this.price * this.discount) / 100;
        }
        return this.price;
    }
}

class Store<T extends Product> {
    items: T[] = [];

    addItem(item: T): void {
        this.items.push(item);
        console.log(`${item.name} added to the store.`);
    }

    removeItem(id: number): T | undefined {
        const index = this.items.findIndex(item => item.id === id);
        if (index !== -1) {
            console.log(`${this.items[index].name} removed from the store.`);
            const [removed_item] = this.items.splice(index, 1);
            return removed_item;
        } else {
            console.log(`Item with ID ${id} not found.`);
            return undefined;
        }
    }

    getItems(): string[] {
        return this.items.map(item => item.name);
    }

    getItem(id: number): T | undefined {
        return this.items.find(item => item.id === id);
    }
}

const electronicsStore = new Store<Electronics>();

const laptop = new Electronics();
laptop.id = 1;
laptop.name = "Laptop";
laptop.price = 100000;
laptop.discount = 10;

electronicsStore.addItem(laptop);

console.log("All Products in Store:", electronicsStore.getItems());

console.log(`Final price of Laptop: Rs${laptop.getFinalPrice()}`);

console.log("We are getting a single item:", electronicsStore.getItem(1));

electronicsStore.removeItem(1);

console.log("Updated Products in Store:", electronicsStore.getItems());
