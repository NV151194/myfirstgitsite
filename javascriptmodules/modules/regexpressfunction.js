/*In web applications, web URLs often pass in parameters in the URL
for routing or database query purposes.*/
// define the let uri = 'http://your.domain/product.aspx?category=4&product_id=2140&query=lcd+tv' ;
 let queryString = {};
 uri.replace(new RegExp ("([^?=&]+)(=([^&]*))?" , "g" ),
 function ($0, $1, $2, $3) {
    queryString[$1] = $3; }
);
 //console.log('ID: ' + queryString['product_id']); // ID: 2140
 //console.log('Name: ' + queryString['query' ]); // Name: undefined
 //console.log('Category: ' + queryString['category' ]); // Category: 4