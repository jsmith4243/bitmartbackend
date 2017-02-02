var express = require('express');
var router = express.Router();

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express site 1' });
});
*/






var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
//var url = 'mongodb://localhost:2717/test';
var url = 'mongodb://localhost';


var userRepository = require('../public/javascripts/userRepository.js');
//var userRepository = require('./userRepository.js');
//var userRepository = require('userRepository.js');
var userRepositoryInstance = new userRepository();




var util = require('util');


router.post('/api/products/delete', function(req,res,next)
{
    
    console.log("Delete received !!");
    
    
    var id = req.param('id');
    
    
 
    
    
    
    
	
		
    var url = 'mongodb://localhost/admin';
    
    MongoClient.connect(url, function(err, db)
    {
        
        assert.equal(null, err);
        
        deleteProducts(db, id, function() {







                db.close();

        });
        
        
    });
		
		
    var deleteProducts = function(db, id, callback)
    {






        db.collection('products').deleteOne
        (

            {"_id":ObjectId(id) }, function(err, results) {
                //console.log(results);
                callback();
            }

        );






    };
		
		

    
    
    
    
    
    
    res.json({message: 'Delete Received'});
    
    
});

router.post('/api/products/edit', function(req,res,next)
{
    
 
    
    
    
    
    
    


    console.log("editProductt received");

    console.log("productidEdit: " + req.body.productidEdit);

    console.log("takingCash: " + req.body.cashEdit);
    
    
    
    console.log("latitudeEdit" + req.body.latitudeEdit);
    
    console.log("longitudeEdit" + req.body.longitudeEdit);
    
    console.log("altitudeEdit" + req.body.altitudeEdit);
    
    
    
    
    

    console.log("creditEdit: " + req.body.creditEdit);
    
    console.log("cashEdit: " + req.body.cashEdit);

    console.log("conditionEdit: " + req.body.conditionEdit);

    console.log("countryEdit: " + req.body.countryEdit);

    console.log("usernameEdit: " + req.body.usernameEdit);
    
    console.log("emailEdit: " + req.body.emailEdit);
    
    console.log("sellerphone: " + req.body.sellerphoneEdit);
    
    console.log("productnameEdit: " + req.body.productnameEdit);

    

    console.log("OtherCommentsEdit: " + req.body.otherCommentsEdit);
    
    console.log("productpriceEdit: " + req.body.productpriceEdit);



    var url = 'mongodb://localhost/admin';
    MongoClient.connect(url, function(err, db)
    {
            assert.equal(null, err);
            updateProducts(db, function(array) {







                    db.close();

            });
    });


    var updateProducts = function(db, callback)
    {

            console.log("id> " + req.body.productidEdit);
            console.log("takingCash>" + req.body.cashEdit);
            console.log("takingCredit>" + req.body.creditEdit);

            //var id = "ObjectId(" + req.body.id + ")";
            var id = "ObjectId(" + req.body.productidEdit + ")";



            //console.log("x> " + id);

            //console.log("idd: " + req.body.id);




            db.collection('products').update(

                    {"_id":ObjectId(req.body.productidEdit) }, 

                    {

                        $set: { "username": req.body.usernameEdit, "takingCash": req.body.cashEdit, "takingCredit": req.body.creditEdit, "condition": req.body.conditionEdit, "country": req.body.countryEdit,  "productname": req.body.productnameEdit, "selleremail": req.body.emailEdit, "phone": req.body.sellerphoneEdit, "othercomments": "othercomments1", "productprice": req.body.productpriceEdit, "latitude": req.body.latitudeEdit, "longitude": req.body.longitudeEdit, "altitude": req.body.altitudeEdit  }
                        //$set: { "takingCash":  "truetrue", "takingCredit": "falsefalse"  }
                        //{ "takingCredit": req.body.creditEdit },
                        //{ "condition": req.body.conditionEdit },
                        //{ "country": req.body.countryEdit },
                        //{ "name": req.body.nameEdit},
                        //{ "email": req.body.emailEdit },
                        //{ "othercomments": req.body.otherCommentsEdit }
                        


                    },

                    function(err, results) {
                    console.log(results);
                    callback();
                    }

            );
    

    };

			
			
			
		

	
 
    
    
    
    
    
    
    
    
    
    
    
    res.json({message: 'Edit Received'});
    
    
});

router.get('/', function(req, res, next)
{



	//res.send('you viewed this page ' + req.session.views['/foo'] + ' times');

	
	//req.session.var1 = 3;
		
	
    var age = req.param('age');
    //var age = 9988;
  
    var url = 'mongodb://localhost/admin';
    MongoClient.connect(url, function(err, db)
    {
		assert.equal(null, err);
		console.log("Connected correctly to server");
		db.collection('users').insertOne(
  		{
  	
  		"name":"user1"
  
  		});
	
		db.close();
	});
   
    
  
  
	

           
           
           
	
           
	
	var findUsers = function(db, callback)
	{
    	var cursor = db.collection('users').find();
    
    	cursor.each(function(err,doc)
    	{

        	assert.equal(err, null);
        	if (doc != null)
        	{
				//console.dir(doc);
        	}
        	else
        	{
            	callback();
        	}
                       
    	});
	};
		   
	MongoClient.connect(url, function(err, db)
	{
		assert.equal(null, err);
		findUsers(db, function() {
			db.close();
		});
	});
	
	
	

	


	

  
   
  
	res.render('index', {
	title: 'Bitmart',
    author: {name: 'name1', age: age},
    message: 'message1'
			   
	});
	
	
	
	
	userRepositoryInstance.get();
		   
		   
		   
});


router.get('/api', function(req, res, next)
{


	res.json({message: 'api working'});


});


router.get('/api/users', function(req, res, next)
{


	var url = 'mongodb://localhost/admin';
	
	var findUsers = function(db, callback)
	{
	
	
    	
    	var cursor = db.collection('users').find();
    	
    	var array = new Array();
    
    	cursor.each(function(err,doc)
    	{

        	assert.equal(err, null);
        	if (doc != null)
        	{
        	
			
				array[array.length] = doc;
				
        	}
        	else
        	{
            	callback(array);
        	}
                       
    	});    	
    	
	
	
	}
	
	MongoClient.connect(url, function(err, db)
	{
		assert.equal(null, err);
		findUsers(db, function(array) {
		
			res.writeHead(200, {"Content-Type": "text/plain"});

			console.log("callback ran <<<<<<<<<-----------");

			res.end(JSON.stringify(array));
			//res.json(JSON.stringify(array));
			

			db.close();
		});
	});


});


router.get('/api/users/:userid', function(req, res, next)

{

	var id = req.params.userid;
	
	

	var url = 'mongodb://localhost/admin';

	var string;

	var findProducts = function(db, callback)
	{
	
	

    	
    	//array type
    	
    	var cursor = db.collection('users').find(
		
			{"_id" : ObjectId(id)}
			//{"_id" : ObjectId("580c074cffc27c14fffe126c")}
		
    	
    	);
    	
    	var array = new Array();
    
    	cursor.each(function(err,doc)
    	{

        	assert.equal(err, null);
        	if (doc != null)
        	{
        	
			
				array[array.length] = doc;
				
        	}
        	else
        	{
            	callback(array);
        	}
                       
    	});    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
	};
		   
	MongoClient.connect(url, function(err, db)
	{
		assert.equal(null, err);
		findProducts(db, function(array) {
		
			res.writeHead(200, {"Content-Type": "text/plain"});

			console.log("callback ran <<<<<<<<<-----------");

			res.end(JSON.stringify(array));
			//res.json(JSON.stringify(array));
			

			db.close();
		});
	});
	
	
	

});



router.post('/api/users', function(req, res, next)
{


	var username = req.body.username;
	var password = req.body.password;
	var address = req.body.address;
	var email = req.body.email;
	

	console.log(username);
	
	var url = 'mongodb://localhost';
    MongoClient.connect(url, function(err, db)
    {
		assert.equal(null, err);
		console.log("Connected correctly to server");
		db.collection('users').insertOne(
  		{
  	
  			"username":username,
  			"password":password,
  			"address":address,
  			"email":email
  			
  			
  
  		});
	
		db.close();
	});
	
	res.json({status: 'user added'});
	
	//console.log("price: " + price);

	//res.json({'message': 'product put', 'price': price});
	
	

});



router.post('/api/users/authenticate', function(req, res, next)
{


    var username = req.body.username;
    var password = req.body.password;

    console.log("post authentication request received.\n");

    console.log("username is: " + username + "\n");
    console.log("password is: " + password + "\n");


    var url = 'mongodb://localhost/admin';

    var authenticate = function(db, callback)
    {



        var cursor = db.collection('users').find
        (



            {"username" : username, "password" : password}
                        //{"username" : "user", "password" : "pass"}
                        //{"_id" : ObjectId("580c074cffc27c14fffe126c")}





        );


        var isAuthenticated = false;

        cursor.each(function(err,doc)
        {

                if (err)
                {
                    console.log(err);
                    
                }
                
                else if (doc == null)
                {
                    
                    callback(isAuthenticated);
                    
                }
                else
                {
                    console.log('Fetched:', doc);

                    isAuthenticated = true;

                    console.log("succesfully authenticated1. ");
                    
                    console.log("isAuthenticated1 is: " + isAuthenticated + "\n");
                    
                    

                     




                }




        }); 
        

  	 	



    };

    MongoClient.connect(url, function(err, db)
    {
        assert.equal(null, err);
        authenticate(db, function(isAuthenticated)
        {

            //res.writeHead(200, {"Content-Type": "text/plain"});

            console.log("callback ran <<<<<<<<<-----------");
            console.log("isAuthenticated3 is: " + isAuthenticated + "\n");

            if (isAuthenticated == true)
            {
                    res.json({authenticated: 'true'});        	
            }


            else
            {

                    res.json({authenticated: 'false'});

            }


            //res.end(JSON.stringify(array));
            //res.json(JSON.stringify(array));


            //db.close();
        });
    });



    //res.json({status: 'user added'});

    //console.log("price: " + price);

    //res.json({'message': 'product put', 'price': price});



});





/*
router.post('/api/users/authenticate', function(req, res, next)
{


    var username = req.body.username;
    var password = req.body.password;

    console.log("post authentication request received.\n");

    console.log("username is: " + username + "\n");
    console.log("password is: " + password + "\n");


    var url = 'mongodb://localhost/admin';

 

    MongoClient.connect(url, function(err, db)
    {
        assert.equal(null, err);


        //res.writeHead(200, {"Content-Type": "text/plain"});

        console.log("ran <<<<<<<<<-----------");
            

        var cursor = db.collection('users').find({"username" : username, "password" : password});
        



            
                        //{"username" : "user", "password" : "pass"}
                        //{"_id" : ObjectId("580c074cffc27c14fffe126c")}







        var isAuthenticated = false;

        cursor.each(function(err,doc)
        {

                assert.equal(err, null);
                if (doc != null)
                {


                    isAuthenticated = true;

                    console.log("succesfully authenticated.\n");
                    
                    console.log("isAuthenticated is: " + isAuthenticated + "\n");
                    
                    






                }
                else
                {
                //callback(array);

                    console.log("authentication attempt failed.\n");
                    
                    console.log("isAuthenticated is: " + isAuthenticated + "\n");






                }



        }); 
        
        console.log("isAuthenticated <> is: " + isAuthenticated + "\n");

        if (isAuthenticated === true)
        {
                res.json({"authenticated": "true"});        	
        }

        else if (isAuthenticated === false)
        {
                res.json({"authenticated": "false"});
        }

        else
        {

                res.json({"unexpected": "true"});

        }

        console.log("isAuthenticatedlast is: " + isAuthenticated);

        	





            db.close();
    });
});

*/



    //res.json({status: 'user added'});

    //console.log("price: " + price);

    //res.json({'message': 'product put', 'price': price});









router.get('/api/products', function(req, res, next)
{

	console.log("get received");


	var url = 'mongodb://localhost/admin';

	var string;

	var findProducts = function(db, callback)
	{
	
	

    	
    	//array type
    	
    	var cursor = db.collection('products').find();
    	
    	var array = new Array();
    
    	cursor.each(function(err,doc)
    	{

        	assert.equal(err, null);
        	if (doc != null)
        	{
        	
			
				array[array.length] = doc;
				
        	}
        	else
        	{
            	callback(array);
        	}
                       
    	});    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
	};
		   
	MongoClient.connect(url, function(err, db)
	{
		assert.equal(null, err);
		findProducts(db, function(array) {
		
			res.writeHead(200, {"Content-Type": "text/plain"});

			console.log("callback ran flag1<<<<<<<<<-----------");

			res.end(JSON.stringify(array));
			//res.json(JSON.stringify(array));
			

			db.close();
		});
	});
	
	
	



});

router.post('/api/products', function(req, res, next)
{

	console.log("post /api/products received");


	var userid = req.body.userid
        var username = req.body.username;
	var takingCash = req.body.cash;
	var takingCredit = req.body.credit;
	var condition = req.body.condition;
	var country = req.body.country;
	var name = req.body.name;
	var selleremail = req.body.selleremail;
        var sellerphone = req.body.sellerphone;
	var othercomments = req.body.othercomments;
	var productname = req.body.productname;
	var productprice = req.body.productprice;
	
	var latitude = req.body.latitude;
	var longitude = req.body.longitude;
	var altitude = req.body.altitude;
	
	
	var url = 'mongodb://localhost';
    MongoClient.connect(url, function(err, db)
    {
		assert.equal(null, err);
		console.log("Connected correctly to server");
		db.collection('products').insertOne(
  		{
  		
  			
			"productname":productname,  	
  			"userid":userid,
                        "username":username,
  			"takingCash":takingCash,
  			"takingCredit":takingCredit,
  			"condition":condition,
  			"country":country,
  			"selleremail":selleremail,
                        "phone":sellerphone,
                        "productprice":productprice,
  			"othercomments":othercomments,
  			"latitude":latitude,
  			"longitude":longitude,
  			"altitude":altitude
  			
  			
  			
  
  		});
	
		db.close();
	});
	
	//console.log("price: " + price);

	res.json({'status': 'product posted'});
	
	

});

router.get('/api/products/:productid', function(req, res, next)

{

	var id = req.params.productid;
	
	

	var url = 'mongodb://localhost/admin';

	var string;

	var findProducts = function(db, callback)
	{
	
	

    	
    	//array type
    	
    	var cursor = db.collection('products').find(
		
			{"_id" : ObjectId("5806f38ee0566926092233f5")}
		
    	
    	);
    	
    	var array = new Array();
    
    	cursor.each(function(err,doc)
    	{

        	assert.equal(err, null);
        	if (doc != null)
        	{
        	
			
				array[array.length] = doc;
				
        	}
        	else
        	{
            	callback(array);
        	}
                       
    	});    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
	};
		   
	MongoClient.connect(url, function(err, db)
	{
		assert.equal(null, err);
		findProducts(db, function(array) {
		
			res.writeHead(200, {"Content-Type": "text/plain"});

			console.log("callback ran <<<<<<<<<-----------");

			res.end(JSON.stringify(array));
			//res.json(JSON.stringify(array));
			

			db.close();
		});
	});
	
	
	

});


router.put('/api/products/:productid', function(req, res, next)

{


		console.log("editProduct received");
		
		console.log("id: " + req.params.productid);
		
		console.log("takingCash: " + req.body.cashEdit);
		
		console.log("creditEdit: " + req.body.creditEdit);
		
		console.log("conditionEdit: " + req.body.conditionEdit);
		
		console.log("countryEdit: " + req.body.countryEdit);
		
		console.log("nameEdit: " + req.body.nameEdit);
		
		console.log("emailEdit: " + req.body.emailEdit);
		
		console.log("OtherCommentsEdit: " + req.body.otherCommentsEdit);
		
		
		
		var url = 'mongodb://localhost/admin';
		MongoClient.connect(url, function(err, db)
		{
			assert.equal(null, err);
			updateProducts(db, function(array) {
		

		

    	

		
				db.close();
				
			});
		});
		
		
		var updateProducts = function(db, callback)
		{
	
			console.log("id> " + req.params.productid);
                        console.log("takingCash>" + req.body.cashEdit);
                        console.log("takingCredit>" + req.body.creditEdit);
			
			//var id = "ObjectId(" + req.body.id + ")";
			var id = "ObjectId(" + req.params.productid + ")";
			
			
		
			//console.log("x> " + id);
			
			//console.log("idd: " + req.body.id);
			
			
			
			
			db.collection('products').update(
			
				{"_id":ObjectId(req.params.productid) }, 
				
				{
                                    
                                    $set: { "takingCash": req.body.cashEdit, "takingCredit": req.body.creditEdit, "condition": req.body.conditionEdit, "country": req.body.countryEdit, "name": req.body.nameEdit, "email": req.body.emailEdit, "othercomments": req.body.otherCommentsEdit  }
                                    //$set: { "takingCash":  "truetrue", "takingCredit": "falsefalse"  }
                                   /* { "takingCredit": req.body.creditEdit },
                                    { "condition": req.body.conditionEdit },
                                    { "country": req.body.countryEdit },
                                    { "name": req.body.nameEdit},
                                    { "email": req.body.emailEdit },
                                    { "othercomments": req.body.otherCommentsEdit }
                                    */
                                    
                                    
                                },
				
				function(err, results) {
				console.log(results);
				callback();
				}
			
			);
			
		};
			
			
			
			
		

	

});


router.delete('/api/productsx/:productid', function(req, res, next)

{


 	//console.log(req.body);      // your JSON
  	//res.send(req.body); 
  	
  	//var json = req.body;
  	
  	
  	
  	//var obj = JSON.parse(json);
  	
  	
  	
  	
  	//console.log(">> " + json.firstName);
  	console.log(">> " + req.body.firstName); //works content-type has to be application/json

});


router.delete('/api/products/:productid', function(req, res, next)

{


	console.log("delete fired");
	
		
		var url = 'mongodb://localhost/admin';
		MongoClient.connect(url, function(err, db)
		{
			assert.equal(null, err);
			deleteProducts(db, function(array) {
		

		

    	

		
				db.close();
				
			})
		});
		
		
		var deleteProducts = function(db, callback)
		{
		
			//console.log("x> " + req.body.id);
			
			//var id = "ObjectId(" + req.body.id + ")";
			var id = "ObjectId(" + req.params.productid + ")";
			
		
		
			
		
			console.log("x> " + id);
			
			db.collection('products').deleteOne
                        (
                            
                            {"_id":ObjectId(req.params.productid) }, function(err, results) {
				//console.log(results);
				callback();
                            }
			
			);
			
			
		
		
		
		
		};
		
		


});



//router.get('/', function(res, res) {
router.get('/test2', function(req, res, next)
{
		
	
    var age = req.param('age');
    //var age = 9988;
  
    var url = 'mongodb://localhost';
    MongoClient.connect(url, function(err, db)
    {
		assert.equal(null, err);
		console.log("Connected correctly to server");
		db.collection('users').insertOne(
  		{
  	
  		"name":"user1"
  
  		});
	
		db.close();
	});
   
  
  
	

           
           
           
	
           
	
	var findUsers = function(db, callback)
	{
    	var cursor = db.collection('users').find();
    
    	cursor.each(function(err,doc)
    	{

        	assert.equal(err, null);
        	if (doc != null)
        	{
				console.dir(doc);
        	}
        	else
        	{
            	callback();
        	}
                       
    	});
	};
		   
	MongoClient.connect(url, function(err, db)
	{
		assert.equal(null, err);
		findUsers(db, function() {
			db.close();
		});
	});
	
	
	

	



	
  
  
  
  
	res.render('indexTest', {
	title: 'Ride the Handlebars',
    author: {name: 'name1', age: age},
    //message: 'message1'
    message: req.session.message
			   
	});
		   
		   
		   
});

router.get('/test', function(req, res, next) {
	res.render('index', { title: 'test1' });
});


router.get('/postproduct', function(req, res, next) {

	res.render('postproduct', {title: 'Post Product' });
	
});


router.post('/postproduct', function(req, res, next) {

	var url = 'mongodb://localhost/admin';
	

	
	var findProducts = function(db, callback)
	{
	
	
	
	
    	//var cursor = db.collection('products').find();
    	var array = db.collection('products').find().toArray();
    	//var json = {"name":"joe", "age":"15"}; //works
    	
    	//var products2 = cursor.stream({transform: JSON.stringify});
    	
    	//var products = JSON.stringify(array);
    	
    	//console.dir("xxx" + util.inspect(array));
    	//console.dir("xxx" + products);
    	
    	//res.render('postproduct', {title: 'Post Product', products: products });
    	
    	
    	callback(array);
    	
    	
    	/*
    	var cursor = db.collection('products').find()
    
    	cursor.each(function(err,doc)
    	{

        	assert.equal(err, null);
        	if (doc != null)
        	{
				console.dir(doc);
				
				//var products = doc;
				var products = JSON.stringify(doc);
				
				res.render('postproduct', {title: 'Post Product', products: products });
				
				
        	}
        	else
        	{
            	callback();
        	}
        	
        	
        	
                       
    	});
    	
    	*/
    	
    	
    	
	};
		   
	MongoClient.connect(url, function(err, db)
	{
		assert.equal(null, err);
		findProducts(db, function(array) {
		
			//var products = JSON.stringify(array);
			var products = array.toString();
		
		    console.dir("xxx" + products);
		    //console.dir("xxx" );
    	
    		res.render('postproduct', {title: 'Post Product', products: products });
		    //res.render('postproduct', {title: 'Post Product' });
		
			db.close();
		});
	});
	
	
	
           
	/*
	var findUsers = function(db, callback)
	{
    	var cursor = db.collection('users').find();
    
    	cursor.each(function(err,doc)
    	{

        	assert.equal(err, null);
        	if (doc != null)
        	{
				console.dir(doc);
        	}
        	else
        	{
            	callback();
        	}
                       
    	});
	}
		   
	MongoClient.connect(url, function(err, db)
	{
		assert.equal(null, err);
		findUsers(db, function() {
			db.close();
		})
	});
	
	*/
	

	//var productss = {"hello": "world"};
	//var productss = JSON.stringify({"hello": "world"});
	
	//res.render('postproduct', {title: 'Post Product', products: productss });
	
	
	var takingCash = req.body.cash;
	var takingCredit = req.body.credit;
	var condition = req.body.condition;
	var country = req.body.country;
	var name = req.body.name;
	var email = req.body.email;
	var othercomments = req.body.othercomments;
	
	//console.log("cash is : "  + req.body.cash );
	
	var url = 'mongodb://localhost';
    MongoClient.connect(url, function(err, db)
    {
		assert.equal(null, err);
		console.log("Connected correctly to server");
		db.collection('products').insertOne(
  		{
  	
  			"takingCash":takingCash,
  			"takingCredit":takingCredit,
  			"condition":condition,
  			"country":country,
  			"name":name,
  			"email":email,
  			"othercomments":othercomments
  			
  
  		});
	
		db.close();
	});
	
});

router.get('/indexMain', function(req, res, next) {




	var username = req.param('username');
	var password =req.param('password');



	res.render('indexMain', { 
	
	title: 'Main Index',
	username: username,
	password: password
	
	 });
});

router.post('/ajax', function(req, res, next) {


	/*
	if (req.operation == "deleteProduct")
	{
	
		console.log("DELETE RECEIVEDD");
	
	}
	*/
	
	console.log("post received");
	console.log("req.body.operation: " + req.body.operation);
	//console.log("req.param('operationx'): " + req.param('operationx'));
	
	//if (req.param('operation') == "deleteProduct")
	if (req.body.operation == "deleteProduct")
	{
	
		console.log("DELETE RECEIVEDD");
		
		
		
		
		
		
		
		
		
		var url = 'mongodb://localhost/admin';
		MongoClient.connect(url, function(err, db)
		{
			assert.equal(null, err);
			deleteProducts(db, function(array) {
		

		

    	

		
				db.close();
				
			})
		});
		
		
		var deleteProducts = function(db, callback)
		{
		
			//console.log("x> " + req.body.id);
			
			var id = "ObjectId(" + req.body.id + ")";
		
			console.log("x> " + id);
			
			db.collection('products').deleteOne({"_id":ObjectId(req.body.id) }, function(err, results) {
				//console.log(results);
				callback();
			
			
			});
			
			
		
		
		
		
		};
		
		
		
		
			
			

		
	
	}
	
	else if (req.body.operation == "editProduct")
	{
		console.log("editProduct received");
		
		console.log("id: " + req.body.id);
		
		console.log("takingCash: " + req.body.cashEdit);
		
		console.log("creditEdit: " + req.body.creditEdit);
		
		console.log("conditionEdit: " + req.body.conditionEdit);
		
		console.log("countryEdit: " + req.body.countryEdit);
		
		console.log("nameEdit: " + req.body.nameEdit);
		
		console.log("emailEdit: " + req.body.emailEdit);
		
		console.log("OtherCommentsEdit: " + req.body.otherCommentsEdit);
		
		
		
		var url = 'mongodb://localhost/admin';
		MongoClient.connect(url, function(err, db)
		{
			assert.equal(null, err);
			updateProducts(db, function(array) {
		

		

    	

		
				db.close();
				
			});
		});
		
		
		var updateProducts = function(db, callback)
		{
		
			console.log("id> " + req.body.id);
                        console.log("takingCash>" + req.body.cashEdit);
                        console.log("takingCredit>" + req.body.creditEdit);
			
			var id = "ObjectId(" + req.body.id + ")";
		
			//console.log("x> " + id);
			
			//console.log("idd: " + req.body.id);
			
			
			
			
			db.collection('products').update(
			
				{"_id":ObjectId(req.body.id) }, 
				
				{
                                    
                                    $set: { "takingCash": req.body.cashEdit, "takingCredit": req.body.creditEdit, "condition": req.body.conditionEdit, "country": req.body.countryEdit, "name": req.body.nameEdit, "email": req.body.emailEdit, "othercomments": req.body.otherCommentsEdit  }
                                    //$set: { "takingCash":  "truetrue", "takingCredit": "falsefalse"  }
                                   /* { "takingCredit": req.body.creditEdit },
                                    { "condition": req.body.conditionEdit },
                                    { "country": req.body.countryEdit },
                                    { "name": req.body.nameEdit},
                                    { "email": req.body.emailEdit },
                                    { "othercomments": req.body.otherCommentsEdit }
                                    */
                                    
                                    
                                },
				
				function(err, results) {
				console.log(results);
				callback();
				}
			
			);
			
		};
			
			
			
			
		
		
		
		
	};
		
		
		
res.send("Product edited");	
});
	
	
	



router.get('/ajax', function(req, res, next) {

	console.log("test11");
	
	console.log("req.params.operation: " + req.params.operation);
	console.log("req.param('operation'): " + req.param('operation'));

	if (req.param('operation') == "deleteProduct")
	{
	
		console.log("DELETE RECEIVED");
	
	}
	
	
	
	
	
	/*
	if (res.operation == "deleteProduct")
	{
	
		console.log("DELETE RECEIVED");
	
	}
	*/


	var url = 'mongodb://localhost/admin';

	var string;

	var findProducts = function(db, callback)
	{
	
	
	
	
	
		/*
		var array = db.collection('products').find().toArray(function(err,docs){
		
		
			console.dir(docs[1]);
			
			var string = "string";
			callback(string);
		
		
		});
		*/
    	
    	
    	/* appending type
    	var cursor = db.collection('products').find();
    
    	cursor.each(function(err,doc)
    	{

        	assert.equal(err, null);
        	if (doc != null)
        	{
        	
				console.dir(doc);
				
				console.dir(util.inspect(doc));
				
				console.dir(" ");
				
				console.log(" ");
				
				string = string + JSON.stringify(doc);
				
				string = string + ","
				
        	}
        	else
        	{
            	callback(string);
        	}
                       
    	});
    	*/
    	
    	
    	//array type
    	
    	var cursor = db.collection('products').find();
    	
    	var array = new Array();
    
    	cursor.each(function(err,doc)
    	{

        	assert.equal(err, null);
        	if (doc != null)
        	{
        	
				//console.dir(doc);
				
				//console.dir(util.inspect(doc));
				
				//console.dir(" ");
				
				//console.log(" ");
				
				array[array.length] = doc;
				
        	}
        	else
        	{
            	callback(array);
        	}
                       
    	});    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
	};
		   
	MongoClient.connect(url, function(err, db)
	{
		assert.equal(null, err);
		findProducts(db, function(array) {
		
			res.writeHead(200, {"Content-Type": "text/plain"});
	
	
			//string = "{name:john}";
	
			console.log("callback ran <<<<<<<<<-----------");
			
			//console.log(">>>xx" + JSON.stringify(array));
			
			res.end(JSON.stringify(array));
			
			//res.end();
		
			db.close();
		});
	});
	
	
	



});


router.get('/sessionTest', function(req, res, next) {


	//req.session.varr = 3;


/*

	var username = req.param('username');
	var password =req.param('password');

	res.render('indexMain', { 
	
	title: 'Main Index',
	username: username,
	password: password
	
	 });
	 
*/

	req.session.user = "amy";
	


	res.send('user is: ' + req.session.user + ' .');



});

module.exports = router;
