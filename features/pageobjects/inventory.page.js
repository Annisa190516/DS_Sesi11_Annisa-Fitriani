const { $$, browser } = require('@wdio/globals');
const Page = require('./page');

class InventoryPage extends Page {
    get sortContainer() { return $('.product_sort_container'); }
    get productList() { return $$('.inventory_item'); }

    async open() {
        await browser.url('/inventory.html');
    }

    async filterProducts(filterOption) {
        await this.sortContainer.waitForDisplayed();
        await this.sortContainer.selectByVisibleText(filterOption);
    }

    async getProductPrices() {
        const prices = [];
        for (const product of this.productList) {
            // Cek apakah elemen .inventory_item_price ada dalam product
            const inventoryItemPrice = await product.$('.inventory_item_price');
            if (inventoryItemPrice) { // Periksa apakah elemen ditemukan
                const priceText = await inventoryItemPrice.getText();
                const price = parseFloat(priceText.replace('$', ''));
                prices.push(price);
            }
        }
        return prices;
    }

    async areProductsSortedByPriceLowToHigh() {
        const prices = await this.getProductPrices();
        return prices.slice().sort((a, b) => a - b).every((price, index) => prices[index] === price);
    }
}

module.exports = new InventoryPage();
