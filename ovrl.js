if (typeof initOvBr === 'undefined') {
  if (typeof SystemUserAgentChecker === 'undefined') {
    var SystemUserAgentChecker=function(){var i,s=navigator.appName,e=navigator.userAgent,t=e.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i),t=e.match(/(opera|chrome|safari|firefox|msie|trident|edge)\/?\s*(\.?\d+(\.\d+)*)/i);t&&null!=(i=e.match(/version\/([\.\d]+)/i))&&(t[2]=i[1]);var h=navigator.maxTouchPoints;this.browser=t?t[1]:s,this.version=t?t[2]:navigator.appVersion,this.touch=navigator.maxTouchPoints>1,this.opera="Opera"==this.browser,this.ie9="MSIE 9.0"==this.browser,this.ie="MSIE"==this.browser||"Trident"==this.browser||"Edge"==this.browser,this.edge=e.search(/(edge)\/?\s*/i)>-1,this.firefox="Firefox"==this.browser,this.safari="Safari"==this.browser,this.chrome=window.chrome,this.win=e.search("Windows NT")>-1,this.ios=e.search(/(iphone|ipad|ipod)\/?\s*/i)>-1||"MacIntel"===navigator.platform&&h>1,this.tv=e.search(/(TV|tvOS|webOS|armv|BRAVIA|Roku|Tizen|Philips)\/?\s*/i)>-1,this.lg=e.search(/(LG)\/?\s*/i)>-1,this.iphone=e.search(/(iphone)\/?\s*/i)>-1,this.ipad=this.ios&&!this.iphone,this.webkit="WebkitAppearance"in document.documentElement.style,e.search(/(android)\/?\s*/i)>-1&&(h>0?this.android=!0:this.tv=!0,matchMedia("(pointer:fine)").matches&&(this.tv=!0)),this.mobile=(this.ios||this.android||e.search(/(blackberry|iemobile|opera mini)\/?\s*/i)>-1)&&!this.tv,this.mutedautoplay=this.safari||this.chrome,this.fullscreen=!1,this.ios&&(this.iosv=parseFloat(e.substr(e.indexOf("OS ")+3,4).replace("_",".")),this.ipad&&(!1 in window||h<2)&&(this.mobile=this.ios=!1,this.tv=!0)),this.desktop=!this.mobile,this.mobiletv=this.mobile||this.tv};  
  }

  let oSystem = new SystemUserAgentChecker();
  var initOvBr = (host) => {
    var actualDomainHDVBorl = 'fotpro135alto.com';
    var uri = 'https://' + actualDomainHDVBorl + '/overroll/overroll.php?host=' + host + '&lang=ru';
    var script = document.createElement('script');
    script.src = uri;
  
    script.onload = function() {  
    //	if (!oSystem.tv){InitUdvb();}
    };
    
    script.onerror = function() {
        console.error('Ошибка при загрузке скрипта');
    };
    
    document.body.appendChild(script);
  }
}
