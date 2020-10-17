$(document).ready(function(){
    showCategories()
    showProducts()
    showReviews()
})

function showCategories() {
    $.get( "/categories", function( data ) {
        var html = ''
        data.forEach(function(category) {
            html = html + '<li><a href="#" onClick="showProducts('+category.id+')">'+category.name+'</a></li>'
        })
        $('#categories').html(html)
    });
}

//todo: implement showProducts method
function showProducts(categoryId) {
    if(categoryId) {
        var url = '/categories/'+ categoryId +'/products';
    } else {
        var url = '/products'   
    }
    $.get(url, function(data) {
        var html = '';
        data.forEach(
            function(product) {
                html = html + '<div class="product">'
                  +  '<h2>'+product.name+'</h2>'
                  +  '<p>'+product.description+'</p>'
                  +  '<p>Pret: '+product.pret+'</p>'
                  +  '<p>Categorie: '+product.category.name+'</p>'
                + '</div>';
                
                html = html + '<h3>Product reviews</h3>'
                
                if(product.reviews) {
                    product.reviews.forEach(
                        function(reviewData) {
                            html = html + reviewData.name + ' ' + reviewData.content;
                            html = html + '<br>';
                        }
                    )
                }
                
                
            }
        )
        $('#content').html(html);
    })
}

    function showReviews(productId) {
    if(productId) {
        var url = '/products/'+ productId +'/reviews';
    } else {
        var url = '/reviews'   
    }
    $.get(url, function(data) {
        var html = '';
        data.forEach(
            function(review) {
                html = html + '<div class="review">'
                  +  '<h2>'+review.name+'</h2>'
                  +  '<p>'+review.content+'</p>'
                  +  '<p>Nota: '+review.score+'</p>'
                  +  '<p>Produs: '+review.product.name+'</p>'
                + '</div>';
                
                html = html + '<h3>Product reviews</h3>'
                
            }
        )
        $('#content').html(html);
    })
}