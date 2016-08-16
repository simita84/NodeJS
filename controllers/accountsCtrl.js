
var jsforce             =  require('jsforce');
var async               =  require('async');
var conn                =  new jsforce.Connection();
var mySDFC_Username     = 'simi.tresa.antony@gmail.com';
var mySDFC_Password     = 'simiraj2010nDDMSAazy9Qbqn5uG1t7qwoI';
var accounts            = [];
var accessToken         ='';
var instanceUrl          = '';

genericCallback = function(error,result){
    if(error) {
        console.log('Error--> '+error);
    }
    else{
        console.log('Connected to SF ');
        // get the access token and instance URL information.
        accessToken = conn.accessToken;
        instanceUrl = conn.instanceUrl;
        console.log('instanceUrl'+conn.instanceUrl);
        // logged in user properly
        console.log("User ID: " + result.id);
        console.log("Org ID: " + result.organizationId);
        //console.log('sfSessionId = '+sfSessionId+', sessionURL = '+sessionURL);
    }   
}
 conn.login(mySDFC_Username,mySDFC_Password,genericCallback); 

exports.addAccount = function(req,res){
    console.log('---------------Inside addAccount---------------');
    console.log(req.body);
    res.redirect('/accounts');
    // Single record creation
    conn.sobject("Account").create({ Name : req.body.name ,
                                     Site :   req.body.site  ,
                                     Industry :   req.body.industry     }, 
                function(err, ret) {
                    if (err || !ret.success) { return console.error(err, ret); }
                    console.log("Created record id : " + ret.id);
    });
}

exports.displayAccounts = function(req,res){
    //console.log('Inside displayAccounts');
   // async.waterfall([
        /*function(callback) {
            conn.login(mySDFC_Username,mySDFC_Password,genericCallback);
            console.log('Connecting to SF DB');
            //res.send('Connected successfully');
            setTimeout(function(){
                 callback(null); 
            },2000);    
        },
        function(callback) {*/
            conn.query('select id,name,Site from Account order by createddate desc limit 5',function(error,result){
            if(error){
                    console.log('Cannot fetch data'+error);
            }
            console.log("--------Accounts fetched--------");
            console.log(result.records);
            res.render('accounts',{
                title :"Top 10 Accounts in this org",
                accounts :result.records
                }); 
            });
            /*

            //callback(accounts,null);
        }
        /*,
        function(callback,accountsResult){
            res.render('accounts',{
                        title :"accounts",
                        accounts :accountsResult
            });
        }*/
   // ]); 
   
}

 