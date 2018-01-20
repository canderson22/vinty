
sem3.products.products_field( "upc", "883974958450" );

sem3.products.get_products(
   function(err, products) {
      if (err) {
         console.log("Couldn't execute request: get_products");
         return;
      }
      console.log( "Results of request:\n" + JSON.stringify( products ) );
   }
);