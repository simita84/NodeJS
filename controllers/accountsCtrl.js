
var jsforce             =  require('jsforce');
var async               =  require('async');
var conn                =  new jsforce.Connection();
var mySDFC_Username     = 'simi.tresa.antony@gmail.com';
var mySDFC_Password     = 'simiraj2010nDDMSAazy9Qbqn5uG1t7qwoI';
var accounts            = [];
genericCallback = function(error,result){
    if(error) {
        console.log('Error--> '+error);
    }
    else{
        console.log('Result after connecting to SF ');
        console.log(result);
    }   
}

exports.accounts = function(req,res){
    
    async.waterfall([
        function(callback) {
            conn.login(mySDFC_Username,mySDFC_Password,genericCallback);
            console.log('Connecting to SF DB');
            setTimeout(function(){
                 callback(null); 
            },2000);    
        },
        function(callback) {
            conn.query('select id,name from Account limit 10',function(error,result){
            if(error){
                    console.log('Cannot fetch data'+error);
            }else{  
                    console.log(result.records);
                    res.render('accounts',{
                        title :"Top 10 Accounts in this org",
                        accounts :result.records
                     });
            }
            });
            //callback(accounts,null);
        }
        /*,
        function(callback,accountsResult){
            res.render('accounts',{
                        title :"accounts",
                        accounts :accountsResult
            });
        }*/
    ]); 
   
}

 