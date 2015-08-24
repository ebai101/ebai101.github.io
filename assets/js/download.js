var insert_sql = "  INSERT INTO data.downloads VALUES (%[REMOTE_ADDR]||%(usrId), %(tstamp));"

$(document).ready(function () {
    $.rdbHostConfig({ 'userName' : 'p0000001604',
		      'authcode' : '-'})
})

function exit() {
    window.location.replace(ddd);
}

function download() {
    var usrId = Math.floor(Math.random()*1000);
    var time = $.now();
    $.postData( { q : insert_sql,
		   namedParams : { 'usrId' : usrId, 'tstamp' : time },
		   callback : exit,
		   errback : function (err) {
		       console.log('sql error '+err[0]+err[1])
		   }});
}
