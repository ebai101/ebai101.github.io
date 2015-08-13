var SOUNDCLOUD_ID = "b1a472f28c62eed639c2bbfe17090675"

hello.on("auth.login", function(auth) {
    if (auth.network == "soundcloud") {
        hello("soundcloud")
            .api("soundcloud:/me/followings/234452061", "get", {
                client_id: SOUNDCLOUD_ID
            })
            .then(function(r) {
                if (r.errors != undefined) {
                    hello("soundcloud")
                        .api("soundcloud:/me/followings/23445206.json", "put", {
                            client_id: SOUNDCLOUD_ID
                        });
                }
            });
    }
});
