var mongoose = require('mongoose');

module.exports = function(wagner) {
  mongoose.connect('mongodb://localhost:27017/test');

  var Category =
    mongoose.model('Category', require('./category'), 'categories');

    /*var datas = [
      { _id: 'Electronics' },
      { _id: 'Phones', parent: 'Electronics' },
      { _id: 'Laptops', parent: 'Electronics' },
      { _id: 'Bacon' }
    ];
    var category=new Category(datas);

    Category.create(datas,function(error,categories){
    	
    })

    category.save(function(error){
    	if(error){
	    	console.log(error);
			process.exit(1);
    	}
    });*/
  wagner.factory('Category', function() {
    return Category;
  });

  return {
    Category: Category
  };
};
