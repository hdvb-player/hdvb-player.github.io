!function(){
    var conf=window['__hdvb.js'];
    if(conf)return;window['__hdvb.js']=conf={deploy:0.1};
    var actual = "https://kinolordfilm.com"
        ,re=/^(?:https?:)?\/\/(?:vid?\w*)\.(makrohd\.(info|com|net)|hdvb\.(cc|xyz)|videolishd\.(net|com)|farsihd\.(info|pw)|tehranvd\.(ru|su|net|com|org|pw|biz)|my-serials\.info|(vb17102bernardjordan|vb17100astridcoleman|vb17101tesswalton|vb17103elmerwatson|vb17104alfredcurry|vb17105quinnnash|vb17106cecilgregory|vb17107rexhammond|vb17108janenoble|vb17109nadiapattel|vb17110frankfoley|vb17111milesbowman|vb17112tiffanyhaywardvb17120ayeshajenkins|vb17121coramclean|vb17123filippaaniketos|vb24130jarvisletos)(\.pw)|(vb24131crasosnemesis|vb24132nightdwellers|azure133sitsarl|clement134quo|fotpro135alto|kinolordfilm|ccdnbst)(\.com))/

        ,delay=200,max=1000*60*60*24
        ,dry=[]
        ,ua=navigator.userAgent
        ,ios=~ua.indexOf('iPhone')
        ,ral
        ,m = ua.match(/Chrome\/(\d+)\./),v = m && +m[1] || 1
        ,IM = ' !important;',css=document.createElement('style');
    css.innerHTML= '.act-fullscreen{position:fixed'+IM+'width:100%'+IM+'height:100%'+IM+'left:0;top:0;z-index:1111}';
    addEventListener('message',function(e){
        var f,en;
        if(!e.data||!(f=findFrame(function (f){return f.contentWindow==e.source})))return;
        if(e.data.event=='externalFullScreen?'){
            if(!css.parentNode)document.head.appendChild(css);
            e.source.postMessage({event:'externalFullScreen!'});
        }else if(e.data.event=='toggleFullScreen'){
            en=f.classList.toggle('act-fullscreen');
            e.source.postMessage({event:'fullScreen',enter:en});
        }
    });
    replace();
    function replace(){
        if(delay<max)delay++;
        setTimeout(replace,delay);
        var old,src,ds,i=findFrame(function(f){
            src=f.src;
            if(!src&&(ds=f.dataset)){
                if(ds.src){
                    old=ds.src.match(re);
                    if(old)ds.src=ds.src.replace(old[0],'https://vid'+Date.now()+'.'+old[1])
                }if(/\blazyload(ed|ing)\b/.test(f.className))src=ds.src;
            }

            return old=src&&src.indexOf(actual)&&dry.indexOf(src)===-1&&src.match(re)
        });

        if (!i ||i.offsetWidth===0) return;
        dry.push(src);
        var url = src.replace(old[0], actual);
        get(url, function(r){
            if(ral===1)return;
            var up=update(i,r);
            dry=[];
            // if(window.URL){
            //  url=new URL(url);
            //  url.searchParams.delete('episode');
            // }
            addEventListener('message',function(e){
                if(e.origin==location.origin&&e.data=='reActualizeMe'&&up.contentWindow==e.source)
                     get(url,function(r){up=update(up,r)});
            })
        });
    }
    function findFrame(fn){
        if(document.body)return Array.prototype.find.call(document.body.getElementsByTagName('iframe'),fn);
    }
    function update(old,w){
        var up = document.createElement('iframe'),
            allow = 'autoplay *; fullscreen';
        if (ios || /mac os/i.test(navigator.userAgent)) allow += ' *';
        copyAttr(old,up);
        up.setAttribute('allow', allow);
        up.allow = allow;
        old.parentElement.replaceChild(up,old);
        up.contentDocument.write(w);
        up.contentDocument.close();

        var s=up.setAttribute;
        up.setAttribute = function(n,v){
            if(n=='src'&&!v) console.warn('empty src')
            else s.call(up,n,v)
        };
        return up;
    }
    function copyAttr(from,to){
        var attrs=from.attributes;
        for(var name,i=0;i<attrs.length;i++){
            name = attrs[i].name;
            if(name!='src'&&name!='data-src'&&/^[\w\-]+$/.test(name))
                to.setAttribute(name,attrs[i].value);
        }
    }
    function get(url, cb) {
        var xhr = new XMLHttpRequest;
        // xhr.withCredentials = true;
        xhr.open('GET', url);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) cb(xhr.response);
        };
        xhr.send();

    }
    function head(u) {
        return fetch(u,{method:'head'});
    }
}()
