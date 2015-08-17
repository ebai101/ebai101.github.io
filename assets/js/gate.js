window.gate = {};

var SOUNDCLOUD_ID = "068d7b70ba3ff663fc2f252c8533d291";
var DOWNLOAD_LINK = "https://dl.dropboxusercontent.com/u/3860578/song%20downloads/Longtime.mp3";

function locker() {
    var g = window.gate;
    if(g.soundcloud) {
	//changes things
        $("img.download").attr({
	    src: "assets/buttons/dlbutton.png"
	});
        $("a.download").attr({
            href: DOWNLOAD_LINK
        });
	$("img.soundcloud").attr({
	   src: "assets/buttons/scdonebutton.png" 
	});
	$("a.soundcloud").attr({
	    href: "#"
	});
    }
}

hello.on("auth.login", function(auth) {
    if(auth.network == "soundcloud") {
        console.log("Logging into soundcloud.");

	//makes handshake
        hello("soundcloud")
        .api("soundcloud:/me/followings/23445206", "get", {client_id: SOUNDCLOUD_ID})
        .then(function(r) {
            window.gate.soundcloud = true;
	    
	    //follows if not following
            if(r.errors != undefined) {
                hello("soundcloud")
                .api("soundcloud:/me/followings/23445206.json", "put",
                     {client_id: SOUNDCLOUD_ID});
            }

	    //opens locker
            locker();
        });
    }
});

hello.init({
    soundcloud: SOUNDCLOUD_ID,
}, {redirect_uri: 'http://soupandreas.com/callback.html'});
