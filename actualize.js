var s, d, ss, gs, hm, l, n = "https://vid" + Date.now() + ".vb17121coramclean.pw";
l = function(t, e) {       
        document.body && Array.prototype.find.call(document.body.getElementsByTagName("iframe"), function(a) {
            Array.prototype.find.call(t, function(o) {
                var i = new RegExp(o),
                    r = a.src.match(i);
                if (null !== r && r.length > 0) {
                    var s = a.src.replace(r[0], n);
                    e(a, o, s, t)
                }
            })
        })
    }, 
    s = function(t) {
        var e, a;
        l(t, function(n, t, o, i) {
            e = n, a = o
        }), "contentWindow" in e && (ss = function(n, t) {
            "localStorage" in window && localStorage.setItem(n, JSON.stringify(t))
        }, gs = function(n) {
            return "localStorage" in window && localStorage.getItem(n)
        }, a = (d = function(n) {
            let t = new RegExp(/\/(?:movie|serial)\/(.*)(?:\/iframe)/);
            if (t.test(n)) return n.match(t)
        })(a), e.onload = function() {
            e.contentWindow.postMessage(gs(a[1]), "*")
        }, hm = function(t) {
            if ("data" in t && "string" == typeof t.data && (t.data.indexOf('{') || t.data.indexOf('}'))) {
                var e = JSON.parse(t.data);
                "name" in e && "obj" in e && ss(e.name, e.obj)
            }
        }, "addEventListener" in window ? window.addEventListener("message", hm) : window.attachEvent("message", hm))
        
    },
    function() {
        var n, t = [];
        n = function(n) {
            t.push("^https?:\\/\\/(vii?dd?\\d*.)?{DOMAIN}".replace("{DOMAIN}", n))
        }, ["makrohd.(info|com|net)", "hdvb.(cc|xyz)", "videolishd.(net|com)", "farsihd.(info|pw)", "tehranvd.(ru|su|net|com|org|pw|biz)", "my-serials.(info)", "vb17102bernardjordan.(pw)", "vb17100astridcoleman.(pw)", "vb17101tesswalton.(pw)", "vb17103elmerwatson.(pw)", "vb17104alfredcurry.(pw)", "vb17105quinnnash.(pw)", "vb17106cecilgregory.(pw)", "vb17107rexhammond.(pw)", "vb17108janenoble.(pw)", "vb17109nadiapattel.(pw)", "vb17110frankfoley.(pw)", "vb17111milesbowman.(pw)", "vb17112tiffanyhayward.(pw)", "vb17120ayeshajenkins.(pw)", "vb17121coramclean.(pw)"].forEach(function(t, e) {
            n(t)
        }), l(t, function(n, t, e, a) {
            n.setAttribute("src", ""), setTimeout(function() {
                n.setAttribute("src", e), s(a)
            }, 100)
        })
    }();
