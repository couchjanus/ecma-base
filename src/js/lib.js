export function makeProductItemJq($template, product){
        $template.find('.product-menu').attr('productId', product["id"]);
        $template.find('.product-name').text(product.name);
        $template.find('img').attr('src', product.picture);
        $template.find('.product-price').text(product["price"]);
        $template.find('.product-description').text( product["description"]);
        return $template;
}

export function makeProductItem($template, product){
    const keys = Object.keys(product);
    keys.forEach(function(key) {
        let selector = '.product-'+ key;
        switch(key){
            case 'id':
                $template.find(selector).attr('productId', product[key]);
                break;
            case 'picture':
                $template.find(selector).attr('src', product[key]);
                break;
            default:
                $template.find(selector).text(product[key]);
        }
    });
    return $template;
}

export function createProduct(){
    var article = document.createElement("article");
    var div = document.createElement("div");
    var p = document.createElement("p");
    p.textContent = "Very Nice Cat";
    div.appendChild(p);
    article.setAttribute('class', "grid-item");

    article.appendChild(div);
    document.querySelector('.grid-layout').appendChild(article);
}
