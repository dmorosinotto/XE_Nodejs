var mssql = require("mssql");
const SRV = process.env.npm_package_config_sqlserver; //THIS IS NOT SECURE!!!
const UID = process.env.UID; //ENVIRONMENT SET BEFORE NPM START USING env-cmd
const XXX = process.env.XXX; //ndr: NEVER USE process.env.PWD it gives you curr dir!
const CNNSTR = `Server=tcp:${SRV},1433;Database=XeDotNet;User Id=${UID};Password=${XXX};Encrypt=true`;
console.log("Connection String: ", CNNSTR);

/* PROMISE DISPOSER PATTERN http://stackoverflow.com/questions/26627402/javascript-native-promise-execute-callback-on-both-results/26627948#26627948
Instead of messing with native prototypes, we should use a different pattern:

openDb().then(foo).then(bar).finally(close).then(more);
Is susceptible to us forgetting to call close, even if we open it 100 times in our app, forgetting to close it even once can still be devastating. On the other hand - we can use the disposer pattern which some promise libraries provide built in ourselves:

openDb(function(db){
    return foo(db).then(bar);// chain here
}).then(more);
Basically - this pattern means instead of having openDB return a promise - we have it take a function and return a promise, when the function is run, if it returns a promise we wait for that promise to resolve. It looks something like:

function openDb(withDb){
    return justOpenWithoutCleanUp().
           then(withDb).
           then(clean, function(e){ clean(); throw e; }); // note the rethrow
}
*/

function runDb(fnWith_cnn_as_Param) {
    var cnn = new mssql.Connection( CNNSTR );
    return cnn.connect()
             .then(fnWith_cnn_as_Param)
             .then(_ => { cnn.close(); return _ } , e => { cnn.close(); throw e; }) //.finally
}


exports.getAll = function() {
return runDb( cnn => cnn.query`SELECT CustomerID, Title, FirstName, MiddleName, LastName
                                , Suffix, CompanyName, EmailAddress, Phone, ModifiedDate
                               FROM SalesLT.Customer`
                        .then( rst => { console.dir(rst); return rst }) 
            );
}

exports.getOne = function(id) {
return runDb( cnn => cnn.query`SELECT CustomerID, Title, FirstName, MiddleName, LastName
                                , Suffix, CompanyName, EmailAddress, Phone, ModifiedDate
                               FROM SalesLT.Customer 
                               WHERE CustomerID=${id}`
                        .then( rst => {
                                if (rst && rst.length) {
                                    return rst[0];
                                } else return undefined;
                            })
            );
}

exports.update = function(id, data) {
return runDb( cnn => {
                var cmd = new mssql.Request(cnn);
                var SQL = "UPDATE SalesLT.Customer SET ModifiedDate=@now"
                for(let fld in data) {
                    cmd.input("par_"+fld, data[fld]); //@par_XXX = data[XXX]
                    SQL += `, ${fld}=@par_${fld}`; //accodaSQL, XXX=@par_XXX
                }
                SQL += " WHERE CustomerID=@cid";
                cmd.input("cid", id);
                cmd.input("now", new Date());
                return cmd.query(SQL)
                          .then( _ => cmd.rowsAffected );
            });
}