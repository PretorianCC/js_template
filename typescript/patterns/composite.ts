namespace Composite {

  abstract class DeliveryItem {
    items: DeliveryItem[] = [];

    addItem(item: DeliveryItem) {
      this.items.push(item);
    }

    getItemPrices(): number {
      return this.items.reduce((acc: number, i: DeliveryItem) => acc += i.getPrice(), 0);
    }

    abstract getPrice(): number;
  }

  class DeliveryShop extends DeliveryItem {

    constructor(private deliveryFee: number) {
      super();
    }

    getPrice(): number {
      return this.getItemPrices() + this.deliveryFee;
    }
  }

  class Package extends DeliveryItem {
    getPrice(): number {
      return this.getItemPrices();
    }
  }

  class Product extends DeliveryItem {
    constructor(private price: number) {
      super();
    }
    getPrice(): number {
      return this.price;
    }
  }

  const shop = new DeliveryShop(100);

  shop.addItem(new Product(1000));

  const pack1 = new Package();
  shop.addItem(pack1);
  pack1.addItem(new Product(200));
  pack1.addItem(new Product(300));

  const pack2 = new Package();
  shop.addItem(pack2);
  pack2.addItem(new Product(30));

  console.log(shop.getPrice());
}