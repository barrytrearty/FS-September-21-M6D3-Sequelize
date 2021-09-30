import Products from "./productsTable.js";
import Reviews from "./reviewsTable.js";
import Categories from "./categoriesTable.js";
import Users from "./usersTable.js";
import ProductCategories from "./productCategories.js";

Products.hasMany(Reviews);
Reviews.belongsTo(Products);

Users.hasMany(Reviews);
Reviews.belongsTo(Users);

// Categories.belongsToMany(Products, { through: "productCategories" });
// Products.belongsToMany(Categories, { through: "productCategories" });

Categories.belongsToMany(Products, {
  through: { model: "productCategories", unique: false },
});
Products.belongsToMany(Categories, {
  through: { model: "productCategories", unique: false },
});

export default { Products, Reviews, Categories, Users, ProductCategories };
