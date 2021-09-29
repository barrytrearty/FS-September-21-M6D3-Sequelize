import Products from "./productsTable.js";
import Reviews from "./reviewsTable.js";

Products.hasMany(Reviews);
Reviews.belongsTo(Products);

export default { Products, Reviews };
