SC.initialize({
    client_id: = "068d7b70ba3ff663fc2f252c8533d291"
    redirect_uri: = "/redirect.html"
});

SC.connect(function(){
    SC.get('/me/followings/23445206')
            .then(function(r) {
                if (r.errors != undefined) {
                        SC.put('/me/followings/23445206');
                }
            });
    }
});
