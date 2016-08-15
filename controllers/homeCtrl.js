// Exposing a method: https://nodejs.org/api/modules.html#modules_modules
// Rendering a template: http://expressjs.com/en/api.html#res.render

var siteDetails = {
    author :"Simi Tresa Antony",
    Project :"Fetching records from Salesforce DB using JSForce ",
    Technologies :{
          "JSForce":"a Salesforce API Library for JavaScript applications",
          "Node" :"Node.js is an open-source, cross-platform runtime environment for developing server-side Web applications",
          "Jade":"A Node Template engine",
          'Express': "A Node.js framework."
    }
}


exports.home = function(req,res){
     res.render('home', {details: siteDetails}); 
} 
 