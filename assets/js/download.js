var insert_sql = "  INSERT INTO downloads SELECT %[REMOTE_ADDR]||%(usrId), %(CURRENT_TIMESTAMP);"

$(document).ready(function () {
    $.rdbHostConfig({ 'userName' : 'p0000001604',
		      'authcode' : '-'})
})

function exit() {
    window.location.replace(ddd);
}

function download() {
    var usrId = Math.floor(Math.random()*1000);
    $.postData( { q : insert_sql,
		   namedParams : { 'usrId' : usrId },
		   callback : exit,
		   errback : function (err) {
		       alert('sql error '+err[0]+err[1])
		   }});
}
