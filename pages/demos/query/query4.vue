<script setup>
  // https://content.nuxtjs.org/api/composables/query-content#wherequery
  const product1 = await queryContent("products")
    .where({ title: { $eq: "Product 1" } })
    .only(["title"]) // Only return the title field
    .find(); // find() returns an array， findOne() returns an object

  const products = await queryContent("products")
    // .where({ tags: { '$contains': 'computer' } })
    // .where({ price: { '$gte': 100 } })
    .where({ tags: { $contains: "computer" }, price: { $gte: 100 } })
    .only(["title", "price", "tags", "categories"])
    // https://content.nuxtjs.org/api/composables/query-content#sortoptions
    .sort({ price: -1 })
    .find();
</script>

<template>
  <div>
    <h2>Product: title = 'Product 1'</h2>
    <pre>{{ product1 }}</pre>

    <h2>Products: tags contains 'computer' and price >= 100:</h2>
    <pre>{{ products }}</pre>
  </div>
</template>
