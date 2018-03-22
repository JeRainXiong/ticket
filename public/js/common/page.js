var app = {
	channelKey: "session_channel",
	cellphoneKey: "user_cellphone",
	sessionKey: "oss",
	oauthKey: "tt_oauth",
	ologinKey: "tt_ologin",
	ologinOID: "o_login_OID",
	uuid_session: "uid_session",
	mask: function() {
		$("div.modal-loading").show()
	},
	unmask: function() {
		$("div.modal-loading").hide()
	},
	alertMsg: function(msg, callBack) {
		$(".error_tip").show(), $(".error_tip").html(msg), setTimeout(function() {
			$(".error_tip").hide(callBack)
		}, 2e3)
	},
	queryStringToObject: function(str) {
		if (str) {
			for (var params = str.split("&"), obj = {}, i = 0, len = params.length; i < len; i++) {
				var subs = params[i].split("=");
				obj[decodeURIComponent(subs[0])] = decodeURIComponent(subs[1])
			}
			return obj
		}
	},
	md5_encode: function(s) {
		function bit_rol(num, cnt) {
			return num << cnt | num >>> 32 - cnt
		}

		function md5_cmn(q, a, b, x, s, t) {
			return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b)
		}

		function md5_ff(a, b, c, d, x, s, t) {
			return md5_cmn(b & c | ~b & d, a, b, x, s, t)
		}

		function md5_gg(a, b, c, d, x, s, t) {
			return md5_cmn(b & d | c & ~d, a, b, x, s, t)
		}

		function md5_hh(a, b, c, d, x, s, t) {
			return md5_cmn(b ^ c ^ d, a, b, x, s, t)
		}

		function md5_ii(a, b, c, d, x, s, t) {
			return md5_cmn(c ^ (b | ~d), a, b, x, s, t)
		}

		function safe_add(x, y) {
			var lsw = (65535 & x) + (65535 & y);
			return (x >> 16) + (y >> 16) + (lsw >> 16) << 16 | 65535 & lsw
		}
		var chrsz = 8;
		return function(binarray) {
			for (var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef", str = "", i = 0; i < 4 * binarray.length; i++) str += hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 + 4 & 15) + hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 & 15);
			return str
		}(function(x, len) {
			x[len >> 5] |= 128 << len % 32, x[14 + (len + 64 >>> 9 << 4)] = len;
			for (var a = 1732584193, b = -271733879, c = -1732584194, d = 271733878, i = 0; i < x.length; i += 16) {
				var olda = a,
					oldb = b,
					oldc = c,
					oldd = d;
				a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936), d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586), c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819), b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330), a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897), d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426), c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341), b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983), a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416), d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417), c = md5_ff(c, d, a, b, x[i + 10], 17, -42063), b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162), a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682), d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101), c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290), b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329), a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510), d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632), c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713), b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302), a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691), d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083), c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335), b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848), a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438), d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690), c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961), b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501), a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467), d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784), c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473), b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734), a = md5_hh(a, b, c, d, x[i + 5], 4, -378558), d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463), c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562), b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556), a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060), d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353), c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632), b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640), a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174), d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222), c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979), b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189), a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487), d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835), c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520), b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651), a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844), d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415), c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905), b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055), a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571), d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606), c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523), b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799), a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359), d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744), c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380), b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649), a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070), d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379), c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259), b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551), a = safe_add(a, olda), b = safe_add(b, oldb), c = safe_add(c, oldc), d = safe_add(d, oldd)
			}
			return Array(a, b, c, d)
		}(function(str) {
			for (var bin = Array(), mask = (1 << chrsz) - 1, i = 0; i < str.length * chrsz; i += chrsz) bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << i % 32;
			return bin
		}(s), s.length * chrsz))
	},
	base64_decode: function(str) {
		if (!str) return "";
		var c1, c2, c3, c4, i, len, out, base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
		for (len = str.length, i = 0, out = ""; i < len;) {
			do {
				c1 = base64DecodeChars[255 & str.charCodeAt(i++)]
			} while (i < len && -1 == c1);
			if (-1 == c1) break;
			do {
				c2 = base64DecodeChars[255 & str.charCodeAt(i++)]
			} while (i < len && -1 == c2);
			if (-1 == c2) break;
			out += String.fromCharCode(c1 << 2 | (48 & c2) >> 4);
			do {
				if (61 == (c3 = 255 & str.charCodeAt(i++))) return out;
				c3 = base64DecodeChars[c3]
			} while (i < len && -1 == c3);
			if (-1 == c3) break;
			out += String.fromCharCode((15 & c2) << 4 | (60 & c3) >> 2);
			do {
				if (61 == (c4 = 255 & str.charCodeAt(i++))) return out;
				c4 = base64DecodeChars[c4]
			} while (i < len && -1 == c4);
			if (-1 == c4) break;
			out += String.fromCharCode((3 & c3) << 6 | c4)
		}
		return out
	},
	base64_encode: function(str) {
		if (!str) return "";
		for (var c1, c2, c3, base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, len = str.length, string = ""; i < len;) {
			if (c1 = 255 & str.charCodeAt(i++), i == len) {
				string += base64EncodeChars.charAt(c1 >> 2), string += base64EncodeChars.charAt((3 & c1) << 4), string += "==";
				break
			}
			if (c2 = str.charCodeAt(i++), i == len) {
				string += base64EncodeChars.charAt(c1 >> 2), string += base64EncodeChars.charAt((3 & c1) << 4 | (240 & c2) >> 4), string += base64EncodeChars.charAt((15 & c2) << 2), string += "=";
				break
			}
			c3 = str.charCodeAt(i++), string += base64EncodeChars.charAt(c1 >> 2), string += base64EncodeChars.charAt((3 & c1) << 4 | (240 & c2) >> 4), string += base64EncodeChars.charAt((15 & c2) << 2 | (192 & c3) >> 6), string += base64EncodeChars.charAt(63 & c3)
		}
		return string
	},
	encryptLoginCode: function(uuid, timestamp) {
		return uuid + "_:_" + timestamp
	},
	isEmptyOrUndefined: function(value) {
		return "" == (value += "") || null == value || void 0 == value || "undefined" == value || "null" == value
	},
	localSave: function(key, value, options) {
		app.isEmptyOrUndefined(key) || app.isEmptyOrUndefined(value) || (app.supportLocalStorage() ? (localStorage.setItem(key, value), navigator.cookieEnabled && $.removeCookie(key)) : navigator.cookieEnabled ? $.cookie(key, value, $.extend({
			path: "/"
		}, options)) : alert("设备cookie功能被禁用,请启用!"))
	},
	cookieSave: function(key, value, options) {
		app.isEmptyOrUndefined(key) || app.isEmptyOrUndefined(value) || !navigator.cookieEnabled ? alert("设备cookie功能被禁用,请启用!") : $.cookie(key, value, $.extend({
			path: "/"
		}, options))
	},
	supportLocalStorage: function() {
		if (app.localStorageIsSupported) return app.localStorageIsSupported;
		try {
			return localStorage.setItem("lstorage_test", "ok"), localStorage.removeItem("lstorage_test"), app.localStorageIsSupported = !0, !0
		} catch (error) {
			return console.log("不支持本地存储!"), app.localStorageIsSupported = !1, !1
		}
	},
	localRemove: function(key) {
		app.isEmptyOrUndefined(key) || (app.supportLocalStorage() ? localStorage.removeItem(key) : navigator.cookieEnabled ? $.removeCookie(key) : alert("设备cookie功能被禁用,请启用!"))
	},
	localGet: function(key) {
		if (!app.isEmptyOrUndefined(key)) return localStorage.getItem(key) || $.cookie(key)
	},
	dequery: function(url) {
		var param = {};
		if (url = url.substr(url.indexOf("?") + 1)) {
			url = url.split("&");
			for (var i = 0, len = url.length; i < len; i++) {
				var arr = url[i].split("=");
				param[arr[0]] = decodeURIComponent(arr[1])
			}
		}
		return param
	},
	getCookieDomain: function() {
		return location.host.indexOf("tking") >= 0 ? ".tking.cn" : location.host.indexOf("qa") > -1 ? ".qa.ticketdashi.com" : location.host.indexOf("ticketdashi") > -1 ? ".ticketdashi.com" : location.host.indexOf("localhost") > -1 ? "localhost" : location.host
	},
	fetch: function(options) {
		var _self = this;
		return $.ajax({
			type: options.type,
			url: options.url,
			data: options.data,
			dataType: options.dataType,
			beforeSend: function(req) {
				req.setRequestHeader("tsessionid", app.getSessionId())
			},
			success: function(data, status, xhr) {
				var headers = xhr.getResponseHeader;
				headers("saveDate") && (app.localGet("tt_oauth") || headers("saveDate") != app.localGet("tt_oauth")) && app.localSave("tt_oauth", headers("saveDate")), headers("loginDate") && (app.localGet("tt_ologin") || headers("loginDate") != app.localGet("tt_ologin")) && app.localSave("tt_ologin", headers("loginDate")), headers("sms_token") && (app.sms_token = headers("sms_token")), 1005 == data.statusCode ? options.authorizationLogin ? ($("#loading_box").hide(), (new BaseController).tryGetUserSession(function() {
					! function(options) {
						_self.fetch(options)
					}(options)
				}, new LoginComponent(function() {
					! function(options) {
						_self.fetch(options)
					}(options)
				}))) : (new BaseController).tryGetUserSession(function() {
					! function(options) {
						_self.fetch(options)
					}(options)
				}, {
					trySessionFailureDone: options.trySessionFailureDone
				}) : options.success && "function" == typeof options.success && options.success(data, status, xhr)
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				options.error && "function" == typeof options.error && options.error(XMLHttpRequest, textStatus)
			}
		}).promise()
	},
	newGuid: function() {
		for (var guid = "", i = 1; i <= 32; i++) {
			guid += Math.floor(16 * Math.random()).toString(16), 8 != i && 12 != i && 16 != i && 20 != i || (guid += "-")
		}
		return guid
	},
	getSessionId: function() {
		return window.sessionStorage && !window.sessionStorage.sessionOId ? window.sessionStorage.sessionOId = app.newGuid() + "pc" + (new Date).getTime() : window.sessionStorage || !window.localStorage || window.localStorage.sessionOId ? window.sessionStorage || window.localStorage || (window.sessionOId = app.newGuid() + "pc" + (new Date).getTime()) : window.localStorage.sessionOId = app.newGuid() + "pc" + (new Date).getTime(), window.sessionStorage.sessionOId || window.localStorage.sessionOId || window.sessionOId
	}
};

function UserComponent() {
	this.API = {
		loginURL: '/login/dologin',
		logoutURL: "/login/dologout",
		registerURL: '/register/doregister',
		makeOrderURL:'/buy/makeorder'
	}
}
UserComponent.prototype.login = function(username, password) {
	$.ajax({
		url: this.API.loginURL,
		method: 'post',
		data: {
			'username': username,
			'password': password
		},
		success: function(data) {
			var data = JSON.parse(data);
			if (data.code == '2000') {
				app.alertMsg(data.msg);
				location.reload();
			} else {
				app.alertMsg(data.msg);
			}
		},
		error: function() {
			app.alertMsg('登陆失败')
		}
	});
};
UserComponent.prototype.isLogin = function() {
	return ($('#user_info').attr('isLogin') == '1') ? true : false;
};
UserComponent.prototype.logout = function() {
	$.ajax({
		url: this.API.logoutURL,
		method: 'get',
		data: {},
		success: function(data) {
			var data = JSON.parse(data);
			if (data.code == '2000') {
				app.alertMsg(data.msg);
				location.reload();
			} else {
				app.alertMsg(data.msg);
			}
		},
		error: function() {
			app.alertMsg('注销失败')
		}
	});
};
UserComponent.prototype.register = function(username, password, realename, idCard, tel) {
	$.ajax({
		url: this.API.registerURL,
		method: 'post',
		data: {
			'username': username,
			'password': password,
/*			'realname': realename,
			'idCard': idCard,
			'tel': tel*/
		},
		success: function(data) {
			var data = JSON.parse(data);
			if (data.code == '2000') {
				app.alertMsg(data.msg);
				location.reload();
			} else {
				app.alertMsg(data.msg);
			}
		},
		error: function() {
			app.alertMsg('注册失败')
		}
	});
};
UserComponent.prototype.preorder = function(concert_id, ticket_type_id) {
	var _self = this;
	if (!_self.isLogin()) {
		return void $("#js_open_login").click();
	}
	window.open('/buy/order?concert_id=' + concert_id + '&ticket_type_id=' + ticket_type_id);
};
UserComponent.prototype.makeOrder = function(concert_id,ticket_type_id,name,telphone,idCardNum,photo_path){
		$.ajax({
		url: this.API.makeOrderURL,
		method: 'post',
		data: {
            'concert_id' :concert_id,
            'ticket_type_id':ticket_type_id ,
            'name':name,
            'tel':telphone,
            'id_card':idCardNum,
            'photo_path':photo_path
		},
		success: function(data) {
			var data = JSON.parse(data);
			if (data.code == '2000') {
				app.alertMsg(data.msg);
				location.href=data.data.redirectURL;
			} else {
				app.alertMsg(data.msg);
			}
		},
		error: function() {
			app.alertMsg('创建订单失败')
		}
	});
}


function PageController(){

};
PageController.prototype.init = function() {
	var _self = this;
	this.User = new UserComponent;
	$('#js_login_btn').click(function() {
			var username = $('#js_username').val();
			var password = $('#js_password').val();
			if (username == '' || password == "") return void app.alertMsg("请输入用户名或者密码！");
			_self.User.login(username, password);
			// var md5_password = app.md5_encode(password);

		}),
		$('#js_register_btn').click(function() {
			var username = $('#js_register_username').val();
			var password = $('#js_register_password').val();
			var password_again = $('#js_register_password_again').val();
			var realname = $('#js_register_realname').val();
			var idCard = $('#js_register_idCard').val();
			var tel = $('#js_register_tel').val();
			if (username == '' || password == "" || password_again == "" || password_again == '' || realname == '' || idCard == '' || tel == '')
				return void app.alertMsg("请输入完整的信息！");
			if (password_again != password) return void app.alertMsg("两次密码不一致！");
			// _self.User.register(username, password, realname, idCard, tel);
				_self.User.register(username, password);
		}), 
		$("#js_logout_btn").click(function() {
			_self.User.logout();
		}),
		$("#js_open_login").click(function() {
			$(".login-component").show();
		}),
		$("#js_open_register").click(function() {
			$("#register_component").show();
		}),
		$("#js_open_logout").click(function() {
			$("#cancelLogin_component").show()
		}),
		$('#js_open_register_btn').click(function(){
			$(".login-component").hide();
			$("#register_component").show();
		}),
       $('#js-preorder-btn').click(function(){
			var ticket_type_id = $('#sessionPar-container .list-one.active').attr('data-id');
			var concert_id = $(".show-detail-page").attr('concert_id');
       		_self.User.preorder(concert_id,ticket_type_id);
       	}),
        $('#sessionPar-container .list-one').click(function(){
            $('#sessionPar-container .list-one.active').removeClass("active");
            $(this).addClass("active");
            var price = $(this).attr('data-price');
            $('#unit-price').html(price+ '元').prev().prev().html(price)
        }),
   	 	$('#comfirm-moneyTotal-buy').click(function(){
   	    	var name = $('#comfirm-qpfsList-container .shipment-name').val();
 	  	   	var telphone = $('#comfirm-qpfsList-container .shipment-telphone').val();
 	  	   	var idCardNum = $('#comfirm-qpfsList-container .shipment-idCardNum').val();
 	  	   	var concert_id = $('#comfirm-show-container').attr('concert_id');
 	  	   	var ticket_type_id = $('#comfirm-show-container').attr('ticket_type_id');
 	  	   	var photo_path = '';
 	  	   	_self.User.makeOrder(concert_id,ticket_type_id,name,telphone,idCardNum,photo_path);
 	  	 }),
 	  	 $("#js_search_btn").click(function(){
 	  	 	var key_word = $(".search-text").val();
 	  	 	if ($.trim(key_word)) {
			encodeURIComponent(key_word);
			window.location.href = "/search/s?key_word=" + key_word;
		}
 	  	 });        
		

    $('#sessionPar-container .list-one').eq(0).click();
	if (_self.User.isLogin()){
		$('#login_info').hide(),$('#user_info').show();
	}


};

$(function(){
	var _pageController = new PageController;
	_pageController.init();	
});
