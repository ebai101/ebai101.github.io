window.gate = {};

var SOUNDCLOUD_ID = "068d7b70ba3ff663fc2f252c8533d291";

function locker() {
    var g = window.gate;
    if(g.soundcloud) {
        $("img.download").attr({
	    src: "../assets/buttons/dlbutton_2.png"
	});
        $("a.download").attr({
            href: ddd
        }).css("cursor","pointer");
	$("img.soundcloud").attr({
	   src: "../assets/buttons/scbutton_2.png" 
	});
	$("a.soundcloud").attr({
	    href: "javascript:download();"
	}).css("cursor","default");
    }
}

hello.on("auth.login", function(auth) {
    if(auth.network == "soundcloud") {
        console.log("Logging into soundcloud.");
        hello("soundcloud")
        .api("soundcloud:/me/followings/23445206", "get", {client_id: SOUNDCLOUD_ID})
        .then(function(r) {
            window.gate.soundcloud = true;	    
            if(r.errors != undefined) {
                hello("soundcloud")
                .api("soundcloud:/me/followings/23445206.json", "put",
                     {client_id: SOUNDCLOUD_ID});
            }
            locker();
        });
    }
});

hello.init({
    soundcloud: SOUNDCLOUD_ID,
}, {redirect_uri: 'http://soupandreas.com/callback.html'});
