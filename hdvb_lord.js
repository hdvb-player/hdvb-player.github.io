function getParams () {
	var a = document.getElementsByTagName('script'), 
		b = a.length,
		options = {};
		
	while( b-- ) {
		if ( ~a[b].src.indexOf("hdvb_lord.js") ) {
			options = a[b].innerHTML.trim();
			if (options != '') {
				options = JSON.parse( options );
			}
		}
	}
	return options;
}

function get(url, callb) {
	var xhr = new XMLHttpRequest;
	xhr.open('GET', url);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) callb(xhr.response);
	};
	xhr.send();
}

var hdvb_domain = 'vb17121coramclean.pw';
var actual = 'https://vid' + Date.now() + '.' + hdvb_domain;

window.onload = function () {
	
	var domain;
	var hdvb_kp;
	var hdvb_id 	= false;
	var hdvb_width 	= '100%';
	var hdvb_height = '100%';

	var params = getParams();	

	if (typeof params != 'undefined' && typeof params.idkp != 'undefined') {
		hdvb_kp = params.idkp;
		domain = params.d;
		get(actual + '/api/idkp?check=' + hdvb_kp, function (r) {
			if (r === 'success') {
				if (typeof params.id != 'undefined') {
					hdvb_id = params.id;		
					hdvb_id = document.getElementById(hdvb_id) || false;		
				}
				
				if (typeof params.width != 'undefined') {
					hdvb_width = params.width;		
				}
				
				if (typeof params.height != 'undefined') {
					hdvb_height = params.height;		
				}
				
				var url = actual + '/api/idkp?kp_id=' + hdvb_kp + '&d=' + domain;
				
				if (hdvb_id !== false) {			
					var iframe = '<iframe width="'+hdvb_width+'" height="'+hdvb_height+'" src="'+url+'" frameborder="0" allowfullscreen=""></iframe>';
					hdvb_id.innerHTML = iframe;
				}
			}
		});
	}			
}