var app = angular
  .module("myModule", [])
  .controller("myController", function ($scope) {
    $scope.carts=[];
    $scope.products = [
        {p_id: "1", p_name: "Hoodie!",p_desc:"Comfortable to wear for your workout", p_image: "ghoodie1.jpg", p_price: 1000},
        {p_id: "2", p_name: "Sports shoe",p_desc:"Comfortable for sports and casual wear", p_image: "girlshoe1.jpeg", p_price: 325},
        {p_id: "3", p_name: "pant1",p_desc:"Track pant for casual and cool look", p_image: "pant1.jpg", p_price: 400},
        {p_id: "4", p_name: "redshoe",p_desc:"cool sports shoe", p_image: "redshoe2.jpeg", p_price: 500},
        {p_id: "5", p_name: "sports wear",p_desc:"cool and comfortable wear for sports", p_image: "track1.jpg", p_price: 800},
        {p_id: "6", p_name: "track-suit",p_desc:"Track suit for men ", p_image: "sport.jpg", p_price: 700},
        {p_id: "7", p_name: "sport uniform",p_desc:"A Comfortable sports wear for girls.", p_image: "dress.jpg", p_price: 700},
        {p_id: "8", p_name: "Kids-wear",p_desc:"sports wear for kids", p_image: "kid.jpg", p_price: 900},
    ];
    $scope.add_cart = function(product){ 
        if(product){ 
            $scope.carts.push({p_id: product.p_id,p_image:product.p_image, p_name: product.p_name, p_price: product.p_price}); 
        }	
    }


    $scope.total = 0;

    $scope.setTotals = function(cart){ 
        if(cart){
            $scope.total += cart.p_price; 
        }
    }

    $scope.remove_cart = function(cart){
        if(cart){
            $scope.carts.splice($scope.carts.indexOf(cart), 1); 
            $scope.total -= cart.p_price;
        }
    }
  });
