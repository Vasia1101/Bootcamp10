const faker = require('faker');
const fs = require('fs');
const path = require('path');
const {
    schema,
    normalize
} = require('normalizr');

const generateProducts = amount => {
    const products = [];

    for (let i = 0; i < amount; i += 1) {
        const product = {
            id: faker.random.uuid(),
            name: faker.lorem.words(),
            price: faker.random.number({
                min: 1,
                max: 100
            }),
        };

        products.push(product);
    }

    return products;
};

const products = generateProducts(6);
const ProductSchema = new schema.Entity('products');
const normalizedProducts = normalize(products, [ProductSchema]);

fs.writeFileSync(
    path.resolve(__dirname, '../products.json'),
    JSON.stringify(normalizedProducts.entities),
);