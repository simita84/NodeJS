
var jsforce             =  require('jsforce');
var conn                =  new jsforce.Connection();
var mySDFC_Username     = 'simi@kndy.dev';
var mySDFC_Password     = 'July2016fMfW4iLF2XyakGobvBwNyBsHH';
var accounts            = [];
 

exports.accounts = function(req,res){
    conn.query('select id,name,site from accounts',function(error,result){
       if(error){
            console.log('Cannot fetch data from SF server'+error);
       }else{
            accounts.push(result.records);
       }
    });
    res.render('accounts',{
        title :"accounts",
        accounts :accounts
    });
}

 