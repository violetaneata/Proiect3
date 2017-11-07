$(document).ready(function(){
    showCategories()
})

function showCategories() {
    $.get('/categories', function(){
        $.get( "/categories", function( data ) {
            var html = ''
            data.forEach(function(category) {
                html = html + '<li><a href="#" onClick="showProducts('+category.id+')">'+category.name+'</a></li>'
            })
            $('#categories').html(html)
        });
    })
}

//todo: implement showProducts method
function showProducts(categoryId) {
    alert(categoryId)
}