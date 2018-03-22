function SellerCertificate(iconContainer, sellerOID, certificateStatus) {
	this.container = iconContainer, this.sellerOID = sellerOID, this.certificateStatus = certificateStatus, this.API = {
		postCertificationCodeUrl: function(sellerOID) {
			return "/orderapi/seller_certifications/code?userOID=000&sellerOID=" + sellerOID
		},
		getCertificationImgUrl: function(sellerOID, code) {
			return "/orderapi/seller_certifications?userOID=000&sellerOID=" + sellerOID + "&code=" + code
		}
	}, $('<div class="certi_icon_box"><div class="ok_icon">&nbsp;</div><i></i> <div class="text" id="show-certificate">资质认证</div></div>').appendTo(this.container)
}

function BannerShowSlider(container, interval) {
	this.belt = $(container), this.interval = interval || 2e3, this.init();
	var me = this;
	setTimeout(function() {
		me.belt.css("visibility", "visible")
	}, 500)
}

function ShowSlider(container) {
	this.container = $(container)
}

function LoginComponent(promiseCallback) {
	this.imageCode_required = !1, this.API = {
		code_required: "/userapi/pub/code_required",
		getSmsCode: "/userapi/pub/mmxx/",
		getCSRFData: "/userapi/pub/csrfCode",
		verify_mobile_web_token: "/userapi/pub/verify_mobile_web_token",
		logoutURL: "/userapi/user/logout",
		agreementURL: "/userdataapi/agreements?agreementTypeName=register_login_agreement",
		validateVerifyCodeUrl: "/userapi/pub/validateVerifyCode",
		registerAgreementsUrl: "/userdataapi/agreements?agreementTypeName=register_login_agreement"
	}, this.promiseCallback = promiseCallback
}

function ContentCalendar() {
	var _self = this;
	_self.currentYear = (new Date).getFullYear(), _self.currentMonth = (new Date).getMonth() + 1, _self.markDates = [], _self.activeDate = (new Date).getFullYear() + "/" + ((new Date).getMonth() + 1) + "/" + (new Date).getDate(), _self.selectDateFn, _self.today = {
		date: (new Date).getDate(),
		year: _self.currentYear,
		month: _self.currentMonth
	}
}

function Calendar(options) {
	this.ele = $('<div class="calendar-component"><div class="calendaer-title"><div class="pre-month">&lt;</div><div class="title-text"></div><div class="next-month">&gt;</div></div><table class="month-days"><thead><tr><td colspan="7"><div class="calender-weekday-names"><div class="weekday">日</div><div class="weekday">一</div><div class="weekday">二</div><div class="weekday">三</div><div class="weekday">四</div><div class="weekday">五</div><div class="weekday">六</div></div></td></tr></thead><tbody></tbody></table></div>'), options.dayClass && (this.customDayClass = options.dayClass), options.dayClick && (this.customDayClick = options.dayClick), this.init(options)
}

function Month(date) {
	this._originDate = new Date(date.getTime()), this._originDate.setDate(1);
	var _date = this._originDate.getDate();
	this.days = [];
	for (var i = 0;;) {
		var _d = new Date(this._originDate.getTime());
		if (_d.setDate(_date + i), !this.isInThisMonth(_d)) break;
		var _day = new Day(_d);
		this.days.push(_day), i++
	}
	this.weeks = [];
	for (var day = new Day(this._originDate); this.isInThisMonth(day.getDate());) {
		var week = new Week(day.getDate());
		this.weeks.push(week), day = day.nextDay(7)
	}
	for (var i = 1; i < 7; i++)
		if (day = day.nextDay(-i), this.isInThisMonth(day.getDate())) {
			var week = new Week(day.getDate());
			week.equals(this.weeks[this.weeks.length - 1]) || this.weeks.push(week);
			break
		}
}

function Week(date) {
	var weekDay = date.getDay();
	this.days = [];
	for (var i = 0; i < 7; i++) {
		var _d = new Date(date.getTime());
		_d.getDay();
		_d.setDate(i - weekDay + date.getDate()), this.days.push(new Day(_d))
	}
}

function Day(date) {
	this.date = new Date(date.getTime()), this.date.setHours(0), this.date.setMinutes(0), this.date.setSeconds(0), this.date.setMilliseconds(0), this._startTime = this.date.getTime(), this._endTime = this.date.getTime() + 864e5 - 1
}

function BatchDays(start, delta) {
	if (angular.isArray(start)) return void(this.days = start);
	var day = new Day(start),
		days = [];
	if (delta > 1) {
		days.push(day);
		for (var i = 2; i <= delta; i++) days.push(day.nextDay(i - 1))
	} else if (delta < -1) {
		for (var i = delta; i < -1; i++) days.push(day.nextDay(i + 1));
		days.push(day)
	} else days.push(day);
	this.days = days
}

function IndexController() {
	this.API = {
		calendarDataUrl: function(siteId) {
			return "/showapi/pub/site/" + siteId + "/calendarShow?src=web&siteCityOID=" + siteId
		},
		typeShowsUrl: function(siteId, type, cityOID) {
			return "/showapi/pub/site/" + siteId + "/active_show?src=web&offset=0&length=7&type=" + type + "&siteCityOID=" + siteId
		},
		seckillDataUrl: function(siteId) {
			return "/showapi/pub/site/" + siteId + "/topMarketingShows?src=web&siteCityOID=" + siteId
		},
		discoveriesUrl: function(siteId) {
			return "/showapi/pub/site/" + siteId + "/discovery?src=ios&siteCityOID=" + siteId
		}
	}
}

function BaseController() {
	this.API = {
		getCurrentUserDataUrl: "/dataapi/user/000/current",
		userInfoUrl: function(userid) {
			return "/userapi/user/" + userid
		}
	}
}

function UserController() {
	this.API = {
		getNoPaymentOrderURL: "/prodapi/order/unpaid/000",
		getMyOrderURL: "/prodapi/client/000/orderWithItem"
	}
}

function CommonController() {
	this.lastScrollTop = 0, this.API = {
		searchURL: "/prodapi/pub/active_show?offset=0&length=10&key_words=123",
		suggestUrl: "/prodapi/page/index",
		cityLocationUrl: "/prodapi/pub/site",
		userInfoUrl: "/userapi/user/000/info"
	}
}

function ListController() {
	this.API = {}
}

function CouponShowsController() {
	this.couponOID = location.pathname.substr(location.pathname.indexOf("/coupon/shows/") + 14, location.pathname.length), this.couponShowsData = {
		couponShows: []
	}, this.pageData = {
		totalPage: 0,
		currentPage: 1,
		totalCount: 0
	}, this.sorting = "weight", this.seq = "desc", this.API = {
		couponShowsUrl: "/couponapi/coupons/" + this.couponOID + "/shows?clientOID=000"
	}, this.pageobj = {}
}

function ContentController() {
	this.sessionToken = "", this.sessionID = "", this.currentNum = 1, this.totalPrice = 0, this.seller = "", this.showTip = !1, this.API = {
		getShowSessionPlanUrl: function(contentOID) {
			return "/showapi/pub/show/" + contentOID + "/sessionone"
		},
		getShowParBySessionUrl: function(sessionId) {
			return "/showapi/pub/showSession/" + sessionId + "/seatplans/sale"
		},
		generatorPreOrderUrl: "/prodapi/preorder",
		favourUrl: function(contentOID) {
			return "/prodapi/show/" + contentOID + "/client/000/favour?src=web&time=" + (new Date).getTime()
		},
		favour_GetUrl: function(contentOID) {
			return "/showapi/pub/show/" + contentOID + "/client/000/favour?src=web&time=" + (new Date).getTime()
		},
		enrollUrl: function(contentOID) {
			return "/prodapi/client/000/show/" + contentOID + "/oos"
		},
		reservationUrl: function(contentOID) {
			return "/prodapi/client/000/show/" + contentOID + "/reservation"
		},
		getCouponUrl: function() {
			return "/prodapi/client/000/coupon"
		},
		getCouponDisplayUrl: function(showOID) {
			return "/couponapi/client/availableCoupon/best?showOID=" + showOID + "&userOID=000"
		},
		getMathcCouponUrl: function(showOID, limitation, userOID) {
			return "/prodapi/pub/client/availableCoupon?client=piaodashi_weixin&showOID=" + showOID + "&limitation=" + limitation + "&userOID=" + userOID + "&src=web&time=" + (new Date).getTime()
		},
		propertiesUrl: function() {
			return "/openapi/system/properties?siteCityOID=1000"
		}
	}
}

function ModuleLoader() {
	this.registerModules = [{
		route: "/",
		controller: "IndexController",
		routeRegExp: /^(\/|\/beijing|\/shanghai|\/chengdu|\/guangzhou|\/nanjing)$/
	}, {
		route: "/list",
		controller: "ListController",
		routeRegExp: /^\/list|\/search/
	}, {
		route: "/content",
		controller: "ContentController",
		routeRegExp: /^\/content/
	}, {
		route: "/orderComfirm",
		controller: "ComfirmController",
		routeRegExp: /^\/orderComfirm/
	}, {
		route: "/orderPay",
		controller: "PayController",
		routeRegExp: /^\/orderPay/
	}, {
		route: "/paying",
		controller: "PaidController",
		routeRegExp: /^\/paying/
	}, {
		route: "/orderdetail",
		controller: "OrderDetailController",
		routeRegExp: /^\/orderdetail/
	}, {
		route: "/user",
		controller: "UserCenterController",
		routeRegExp: /^\/user/
	}, {
		route: "/help",
		controller: "HelpController",
		routeRegExp: /^\/help/
	}, {
		route: "/about",
		controller: "AboutController",
		routeRegExp: /^\/about/
	}, {
		route: "/coupon/shows",
		controller: "CouponShowsController",
		routeRegExp: /^\/coupon/
	}], this.defaultModule = {
		route: "",
		controller: "IndexController"
	}
}
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
		hidePrompt: function() {
			$("#prompt_component").hide(), this.promptCallBack = function() {
				$("#prompt_component").hide()
			}
		},
		prompt: function(opts) {
			var default_opts = {
				title: "",
				content: "",
				cancelTxt: "取消",
				okTxt: "确定",
				callBack: function() {}
			};
			for (var p in opts) default_opts[p] = opts[p];
			var cmp = $("#prompt_component").show(),
				body = $("#prompt_component .pop-body"),
				left = (cmp.width() - body.width()) / 2;
			body.css("left", left + "px"), body.find(".pop-title").html(default_opts.title), body.find(".pop-content").html(default_opts.content), body.find(".cancel-btn").html(default_opts.cancelTxt), body.find(".ok-btn").html(default_opts.okTxt), this.promptCallBack = function() {
				default_opts.callBack(), $("#prompt_component").hide()
			}
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
	},
	myApp = {
		findAvailabeItem: function(list, prop, value) {
			if (list && prop)
				for (var i = 0; i < list.length; i++) {
					var item = list[i];
					if (value && item[prop] === value || !value && item[prop]) return item
				}
			return null
		},
		findAddressById: function(list, id) {
			if (!list) return null;
			for (var i = list.length - 1; i >= 0; i--)
				if (list[i].addressOID === id) return list[i]
		},
		findPCDById: function(list, id) {
			if (!list) return null;
			for (var i = list.length - 1; i >= 0; i--)
				if (list[i].code === id) return list[i]
		},
		validPhone: function(tel) {
			return /(^1\d{10}$)/g.test(tel)
		},
		localGet: function(key) {
			if (!app.isEmptyOrUndefined(key)) return localStorage.getItem(key) || $.cookie(key)
		},
		urlGet: function(key) {
			for (var url_pid = window.location.search.substring(1), pairs = url_pid.split("&"), urlinfo = {}, i = 0; i < pairs.length; i++) {
				var pos = pairs[i].indexOf("=");
				urlinfo[pairs[i].substring(0, pos)] = pairs[i].substring(pos + 1)
			}
			return urlinfo[key]
		},
		sessionGet: function(key) {
			if (window.sessionStorage) {
				var item = window.sessionStorage[key];
				return item && "string" == typeof item ? JSON.parse(item) : item
			}
			return app.localGet(key)
		}
	};
SellerCertificate.prototype = {
	init: function() {
		var _self = this,
			wrapper = $('<div id="popup-window-wrapper" class="popup-window-wrapper"></div>').appendTo(document.body),
			seller = this.sellerOID;
		$(this.container).on("click", "#show-certificate", function() {
			2 === _self.certificateStatus ? app.alertMsg("平台已对个人卖家身份进行认证") : 3 === _self.certificateStatus && _self.getCertificationCodeImg(seller, function(res) {
				_self.freshCertificatePopup({
					certificateYZM: res.result.data.csrfCode
				})
			})
		}), wrapper.on("click", ".yzm-img-container", function() {
			_self.freshCertificatePopup({}), _self.getCertificationCodeImg(seller, function(res) {
				_self.freshCertificatePopup({
					certificateYZM: res.result.data.csrfCode
				})
			})
		}), wrapper.on("click", ".close-icon", function() {
			_self.closeCertificatePopup()
		}), wrapper.on("keyup", "#popup-window-wrapper .certificateYZM-input input", function() {
			$("#popup-window-wrapper .certificateYZM-input input").val() ? $("#popup-window-wrapper .verify-yzm").addClass("active") : $("#popup-window-wrapper .verify-yzm").removeClass("active")
		}), wrapper.on("click", ".verify-yzm.active", function() {
			var code = $("#popup-window-wrapper .certificateYZM-input input").val();
			_self.getCertificateImg(seller, code, function(res) {
				res && res.comments ? (app.alertMsg(res.comments), _self.getCertificationCodeImg(seller, function(res) {
					_self.freshCertificatePopup({
						certificateYZM: res.result.data.csrfCode
					})
				})) : _self.freshCertificatePopup({
					certificate: res.result.data.businessLicenseImageqUrl
				})
			})
		})
	},
	getCertificationCodeImg: function(seller, next) {
		app.fetch({
			url: this.API.postCertificationCodeUrl(seller),
			type: "POST",
			dataType: "json",
			data: {
				time: (new Date).getTime(),
				src: "web"
			},
			success: function(data) {
				next && "function" == typeof next && next(data)
			}
		})
	},
	getCertificateImg: function(seller, code, next) {
		app.fetch({
			url: this.API.getCertificationImgUrl(seller, code),
			type: "GET",
			dataType: "json",
			data: {
				time: (new Date).getTime(),
				src: "web"
			},
			success: function(data) {
				next && "function" == typeof next && next(data)
			}
		})
	},
	closeCertificatePopup: function() {
		$("#popup-window-wrapper").html("").hide()
	},
	freshCertificatePopup: function(data) {
		var tpl = document.getElementById("certificate-popup").innerHTML,
			content = template.compile(tpl)(data);
		$("#popup-window-wrapper").html(content).show()
	}
}, BannerShowSlider.prototype.init = function(options) {
	var me = (this.belt.children(), this);
	this.activeIndex = ~~(this.belt.children().length / 2), this.belt.children().eq(this.activeIndex).addClass("active"), this.calculatePosition(), this.applyPosition(), this.mainSlide(), window.onresize = function() {
		me.calculatePosition(), me.applyPosition()
	}
}, BannerShowSlider.prototype.mainSlide = function() {
	this.slideLeft()
}, BannerShowSlider.prototype.calculatePosition = function() {
	for (var cmps = this.belt.children(), viewportWidth = $(document.body).width(), margin = (viewportWidth - 2 * cmps.width()) / 3, unitWidth = cmps.width() + margin, centerPosition = this.belt.position().left + this.belt.width() / 2, datas = [], center = this.activeIndex, i = 0, len = cmps.length; i < len; i++) {
		var delta = i - center;
		delta > 0 ? datas.push(unitWidth * (delta - 1) + centerPosition + margin / 2) : 0 === delta ? datas.push(-449.5 + centerPosition) : datas.push(unitWidth * delta + centerPosition + margin / 2)
	}
	this.positions = datas
}, BannerShowSlider.prototype.manuelLeft = function() {
	var me = this;
	clearTimeout(me.timeout), me.timeout = setTimeout(function() {
		me.slideLeftOnce(), me.mainSlide()
	})
}, BannerShowSlider.prototype.manuelRight = function() {
	var me = this;
	clearTimeout(me.timeout), me.timeout = setTimeout(function() {
		me.slideRightOnce(), me.mainSlide()
	})
}, BannerShowSlider.prototype.slideLeft = function(unitTime) {
	function run() {
		me.timeout = setTimeout(function() {
			me.slideLeftOnce(), run()
		}, unitTime)
	}
	unitTime = unitTime || this.interval;
	var me = this;
	clearTimeout(me.timeout), run()
}, BannerShowSlider.prototype.slideRight = function(unitTime) {
	function run() {
		me.timeout = setTimeout(function() {
			me.slideRightOnce(), run()
		}, unitTime)
	}
	unitTime = unitTime || this.interval;
	var me = this;
	clearTimeout(me.timeout), run()
}, BannerShowSlider.prototype.slideLeftOnce = function() {
	var me = this,
		cmps = this.belt.children();
	cmps.eq(0).css("left", this.belt.width() + "px"), this.belt.append(cmps[0]), setTimeout(function() {
		me.applyPosition()
	}, 100)
}, BannerShowSlider.prototype.applyPosition = function() {
	for (var positions = this.positions, cmps = this.belt.children(), i = 0, len = cmps.length; i < len; i++) cmps.eq(i).css("left", positions[i] + "px");
	this.belt.children().removeClass("active"), this.belt.children().eq(this.activeIndex).addClass("active")
}, BannerShowSlider.prototype.slideRightOnce = function() {
	var me = this,
		cmps = this.belt.children();
	cmps.eq(cmps.length - 1).css("left", -this.belt.width() + "px"), this.belt.prepend(cmps.eq(cmps.length - 1)), setTimeout(function() {
		me.applyPosition()
	}, 100)
}, ShowSlider.prototype.init = function(options) {
	options = options || {}, template.config("openTag", "<$"), template.config("closeTag", "$>"), this.data = {
		date: options.date || new Date,
		pageIndex: options.pageIndex || 1,
		pageSize: options.pageSize || 3,
		count: options.count || 1,
		shows: options.shows || [],
		loadDataFn: options.loadDataFn
	}, this.data.pageCount = Math.ceil(this.data.count / this.data.pageSize), this.data.dateString = this.data.date.getFullYear() + "-" + (this.data.date.getMonth() + 1) + "-" + this.data.date.getDate(), this.applyToPage(), this.data.shows && this.data.shows.length && this.loadData(this.data.pageIndex + 1)
}, ShowSlider.prototype.addShows = function(shows) {
	this.data.shows = this.data.shows.concat(shows);
	var showsHtml = template("show-componentsTpl", {
		shows: shows || []
	});
	this.container.find(".show-component-container-inner").append(showsHtml)
}, ShowSlider.prototype.changeData = function(datas) {
	function fullFill(num) {
		return num < 10 ? "0" + num : "" + num
	}
	for (var p in datas) void 0 !== datas[p] && (this.data[p] = datas[p]);
	var dateStr = this.data.date.getFullYear() + "" + fullFill(this.data.date.getMonth() + 1) + fullFill(this.data.date.getDate());
	this.data.query = "startTime=" + dateStr + "&endTime=" + dateStr, this.data.dateString = this.data.date.getFullYear() + "-" + (this.data.date.getMonth() + 1) + "-" + this.data.date.getDate(), this.data.pageCount = Math.ceil(this.data.count / this.data.pageSize), this.applyToPage()
}, ShowSlider.prototype.applyToPage = function() {
	var html = template("show-sliderTpl", this.data);
	this.container.html(html);
	var showsHtml = template("show-componentsTpl", this.data);
	this.container.find(".show-component-container-inner").html(showsHtml);
	var _self = this;
	this.container.find(".left-slide").click(function() {
		_self.slideLeft()
	}), this.container.find(".right-slide").click(function() {
		_self.slideRight()
	})
}, ShowSlider.prototype.slideLeft = function() {
	this.sliding || this.data.pageIndex > 1 && (this.data.pageIndex--, this.data.pageIndex = 0 === this.data.pageIndex ? this.data.pageCount : this.data.pageIndex, this.slideToView())
}, ShowSlider.prototype.slideRight = function() {
	this.sliding || this.data.pageIndex < this.data.pageCount && (this.data.pageIndex++, this.data.shows.length <= this.data.pageIndex * this.data.pageSize && this.loadData(this.data.pageIndex + 1), this.slideToView())
}, ShowSlider.prototype.slideToView = function() {
	var _self = this;
	_self.sliding = !0;
	var targetShow = this.container.find(".show-component").eq((this.data.pageIndex - 1) * this.data.pageSize);
	if (!targetShow.length) return void(_self.sliding = !1);
	var left = targetShow.offset().left,
		container_left = this.container.find(".shows-slider").offset().left,
		originLeft = parseFloat(this.container.find(".show-component-container-inner").css("left"));
	this.container.find(".show-component-container-inner").animate({
		left: container_left - left + originLeft + "px"
	}, 300, function() {
		_self.sliding = !1, _self.container.find(".page-indicator span").removeClass("active"), _self.container.find(".page-indicator span:eq(" + (_self.data.pageIndex - 1) + ")").addClass("active")
	})
}, ShowSlider.prototype.loadData = function(pageIndex) {
	if (this.data && this.data.loadDataFn) {
		var _self = this;
		this.data.loadDataFn(this.data.date, (pageIndex - 1) * this.data.pageSize, function(data) {
			200 === data.statusCode && _self.addShows(data.result.data)
		})
	}
}, LoginComponent.prototype.init = function(next) {
	var _self = this;
	_self.beforeLogin(null, next), _self.getRegisterAgreements()
}, LoginComponent.prototype.loadComponent = function() {
	var _self = this;
	$(".login-component").show(), _self.init(null, function(data) {
		$("#li_yzm").show(), $("#li_yzm img").attr("src", data)
	})
}, LoginComponent.prototype.beforeLogin = function(successCallBack, failedCallBack) {
	var _self = this;
	app.fetch({
		url: this.API.code_required,
		type: "GET",
		dataType: "JSON",
		data: {
			time: (new Date).getTime()
		},
		success: function(data) {
			200 == data.statusCode ? (_self.imageCode_required = data.result.data, successCallBack && successCallBack(), console.log("不需要图片验证码")) : 1007 == data.statusCode && _self.getCsrfData(failedCallBack)
		}
	})
}, LoginComponent.prototype.getRegisterAgreements = function() {
	var _self = this;
	app.fetch({
		url: this.API.registerAgreementsUrl,
		type: "GET",
		dataType: "JSON",
		data: {
			time: (new Date).getTime()
		},
		success: function(data) {
			200 == data.statusCode ? (_self.registerAgreements = data.result.data.agreementContent, _self.agreementOID = data.result.data.agreementOID, $("#agree-content").html(_self.registerAgreements)) : app.alertMsg(data.comments)
		}
	})
}, LoginComponent.prototype.getSmsCode = function(opt, next) {
	var _self = this;
	if (opt.cellphone) {
		if (!app.sms_token) return void _self.beforeLogin(function() {
			_self.getSmsCode(opt, next)
		});
		var data = {
			cellphone: opt.cellphone,
			token: app.sms_token,
			time: (new Date).getTime(),
			src: "web"
		};
		opt.imgCode && (data.code = opt.imgCode), app.fetch({
			url: this.API.getSmsCode,
			type: "GET",
			dataType: "JSON",
			data: data,
			success: function(data) {
				200 == data.statusCode ? (console.log("亲，验证码已发送到手机！"), app.alertMsg("亲，验证码已发送到手机,敬请留意！"), opt.success && "function" == typeof opt.success && opt.success(), _self.haveConsentAgreement = data.result.data.haveConsentAgreement) : 1007 == data.statusCode ? (_self.imageCode_required = !0, _self.getCsrfData(next)) : 502 == data.statusCode ? (console.log("sms-token不合法"), app.alertMsg(data.comments)) : 1004 == data.statusCode && (console.log(data.comments), app.alertMsg(data.comments), _self.getCsrfData(next))
			}
		})
	}
}, LoginComponent.prototype.getCsrfData = function(next) {
	app.fetch({
		url: this.API.getCSRFData,
		type: "GET",
		data: {
			time: (new Date).getTime(),
			src: "web"
		},
		success: function(data) {
			next && "function" == typeof next && next(data)
		}
	})
}, LoginComponent.prototype.authorization = function(authInfo, next) {
	var _self = this;
	if (_self.haveConsentAgreement) {
		app.localGet(app.ologinOID) || console.log("异常代码：10001");
		var option = {
			cellphone: authInfo.cellphone,
			token: authInfo.smsCode,
			nonce: function(UUid) {
				var timestamp = app.localGet(app.ologinKey) || 1000459;
				return app.base64_encode(app.encryptLoginCode(UUid, timestamp))
			}(app.localGet(app.ologinOID)),
			time: (new Date).getTime(),
			src: "web",
			source: "web"
		};
		_self.agreementOID && (option.agreementOID = _self.agreementOID), app.fetch({
			url: this.API.verify_mobile_web_token,
			type: "GET",
			dataType: "json",
			data: option,
			success: function(data) {
				1003 == data.statusCode || 515 == data.statusCode ? app.alertMsg(data.comments) : next && "function" == typeof next && next(data), _self.promiseCallback && "function" == typeof _self.promiseCallback && _self.promiseCallback()
			}
		})
	} else app.fetch({
		url: this.API.validateVerifyCodeUrl,
		type: "GET",
		dataType: "json",
		data: {
			cellphone: authInfo.cellphone,
			token: authInfo.smsCode,
			time: (new Date).getTime(),
			src: "web",
			source: "web"
		},
		success: function(data) {
			200 == data.statusCode && data.result.validate ? $(".register-component").show() : app.alertMsg(data.comments || "验证码不通过")
		}
	})
}, LoginComponent.prototype.logout = function(next) {
	app.fetch({
		url: this.API.logoutURL,
		type: "GET",
		dataType: "json",
		success: function(data) {
			next && "function" == typeof next && (next(data), window.location.reload())
		}
	})
}, ContentCalendar.prototype.init = function(options) {
	var _session, _self = this;
	if (_self.initEvent(), options && options.markDates && (_self.markDates = options.markDates || [], _self.markDates.length >= 1 && (_session = _self.getAvaliableFirstSession(_self.markDates)) && (_self.currentYear = new Date(_session.showTime_long).getFullYear(), _self.currentMonth = new Date(_session.showTime_long).getMonth() + 1, _self.activeDate = new Date(_session.showTime_long).getFullYear() + "/" + (new Date(_session.showTime_long).getMonth() + 1) + "/" + new Date(_session.showTime_long).getDate())), _self.setCurrentYearAndMonth(_self.currentYear, _self.currentMonth), options && options.selectDateFn && "function" == typeof options.selectDateFn) {
		_self.selectDateFn = options.selectDateFn;
		var defaultDate = _self.markDates && _self.markDates.length ? new Date(_self.markDates[0].showTime_long) : new Date,
			_currentDate = _session ? new Date(_session.showTime_long) : defaultDate;
		_self.selectDateFn(_currentDate.getFullYear() + "/" + (_currentDate.getMonth() + 1) + "/" + _currentDate.getDate(), _session && _session.showSessionOID)
	}
}, ContentCalendar.prototype.getAvaliableFirstSession = function(markDates) {
	if (markDates && markDates.length > 0) {
		for (var defaultSession, index = 0; index < markDates.length; index++) {
			var _firstSession = markDates[index];
			if (_firstSession.available && _firstSession.seatPlan && _firstSession.seatPlan.length) return _firstSession;
			_firstSession.available && (defaultSession = defaultSession || _firstSession)
		}
		return defaultSession
	}
}, ContentCalendar.prototype.setActiveDate = function(date, showSessionOID) {
	var _self = this;
	"[object Date]" !== Object.prototype.toString.call(date) && (date = new Date(date));
	var year = date.getFullYear(),
		month = date.getMonth() + 1,
		day = date.getDate();
	_self.activeDate = year + "/" + month + "/" + day, _self.setCurrentYearAndMonth(year, month), _self.selectDateFn(_self.activeDate, showSessionOID)
}, ContentCalendar.prototype.setCurrentYearAndMonth = function(year, month) {
	var _self = this,
		currentYear = _self.currentYear = year,
		currentMonth = _self.currentMonth = month;
	document.querySelector(".currentyear").innerText = currentYear, document.querySelector(".currentmonth").innerText = currentMonth + "月";
	for (var daysOfCurrentMonth = ((new Date).getFullYear() == currentYear && (new Date).getMonth(), _self.getDaysOfMonth(currentYear, currentMonth)), daysLastMonth = _self.getLastMonthAndYear(currentYear, currentMonth), currentDom = (_self.getNextMonthAndYear(currentYear, currentMonth), ""), iteration = 0, i = 1; i <= daysOfCurrentMonth; i++) {
		var d = i,
			m = 1 == currentMonth || 2 == currentMonth ? currentMonth + 12 : currentMonth,
			y = 1 == currentMonth || 2 == currentMonth ? currentYear - 1 : currentYear,
			W = (d + 2 * m + Math.floor(3 * (m + 1) / 5) + y + Math.floor(y / 4) + Math.floor(y / 100) + 1) % 7;
		if (1 == i) {
			if (0 == W) {
				for (var index = 6; index > 0; index--) currentDom += "<div><label class='" + _self.getLastMarkCss(currentYear, currentMonth, daysLastMonth - index + 1) + "' data-year='" + (1 == currentMonth ? currentYear - 1 : currentYear) + "' data-month='" + (1 == currentMonth ? 12 : currentMonth - 1) + "'>" + (daysLastMonth - index + 1) + "</label></div>";
				iteration = 6
			} else {
				for (var index = W - 1; index > 0; index--) currentDom += "<div><label class='" + _self.getLastMarkCss(currentYear, currentMonth, daysLastMonth - index + 1) + "' data-year='" + (1 == currentMonth ? currentYear - 1 : currentYear) + "' data-month='" + (1 == currentMonth ? 12 : currentMonth - 1) + "'>" + (daysLastMonth - index + 1) + "</label></div>";
				iteration = W - 1
			}
			currentDom += "<div><label class='" + _self.getMarkCss(currentYear, currentMonth, i) + (currentYear + "/" + currentMonth + "/" + i == _self.activeDate ? " active" : "") + "' data-year='" + currentYear + "' data-month='" + currentMonth + "'>" + i + "</label></div>"
		} else if (i == daysOfCurrentMonth) {
			currentDom += "<div><label class='" + _self.getMarkCss(currentYear, currentMonth, i) + (currentYear + "/" + currentMonth + "/" + i == _self.activeDate ? " active" : "") + "' data-year='" + currentYear + "' data-month='" + currentMonth + "'>" + i + "</label></div>";
			for (var k = 1, _length = 42 - iteration - daysOfCurrentMonth; k <= _length; k++) currentDom += "<div><label class='" + _self.getNextMarkCss(currentYear, currentMonth, k) + ((12 == currentMonth ? currentYear + 1 : currentYear) + "/" + (12 == currentMonth ? 1 : currentMonth + 1) + "/" + k == _self.activeDate ? " active" : "") + "' data-year='" + (12 == currentMonth ? currentYear + 1 : currentYear) + "' data-month='" + (12 == currentMonth ? 1 : currentMonth + 1) + "'>" + k + "</label></div>"
		} else currentDom += "<div><label class='" + _self.getMarkCss(currentYear, currentMonth, i) + (currentYear + "/" + currentMonth + "/" + i == _self.activeDate ? " active" : "") + "' data-year='" + currentYear + "' data-month='" + currentMonth + "'>" + i + "</label></div>"
	}
	document.querySelector(".dinamicDom").innerHTML = currentDom;
	for (var labelList = document.querySelectorAll(".dinamicDom label.hasSession"), i = labelList.length - 1; i >= 0; i--) labelList[i].onclick = function() {
		document.querySelector(".dinamicDom label.active.noTicket") && (document.querySelector(".dinamicDom label.active.noTicket").className = document.querySelector(".dinamicDom label.active.noTicket").className.replace(/\s?active\s?/, "") + " noTicket"), document.querySelector(".dinamicDom label.active.hasTicket") && (document.querySelector(".dinamicDom label.active.hasTicket").className = document.querySelector(".dinamicDom label.active.hasTicket").className.replace(/\s?active\s?/, "") + " hasTicket"), this.className = this.className.replace(/\s?active\s?/) + " active";
		var _year = this.getAttribute("data-year"),
			_month = this.getAttribute("data-month"),
			selectedDate = _self.activeDate = _year + "/" + _month + "/" + this.innerText;
		_self.selectDateFn && "function" == typeof _self.selectDateFn && _self.selectDateFn(selectedDate)
	};
	for (var labelList2 = document.querySelectorAll(".dinamicDom label.available"), i = labelList2.length - 1; i >= 0; i--) labelList2[i].onclick = function() {
		document.querySelector(".dinamicDom label.active.available") && (document.querySelector(".dinamicDom label.active.available").className = "available"), this.className = this.className + " active";
		var _year = this.getAttribute("data-year"),
			_month = this.getAttribute("data-month"),
			selectedDate = _self.activeDate = _year + "/" + _month + "/" + this.innerText;
		_self.selectDateFn && "function" == typeof _self.selectDateFn && _self.selectDateFn(selectedDate)
	}
}, ContentCalendar.prototype.getMarkCss = function(currentYear, currentMonth, currentDate) {
	var _self = this,
		sessionsByDate = [],
		clsArr = [];
	_self.today.year === currentYear && _self.today.month === currentMonth && _self.today.date === currentDate && clsArr.push("today");
	for (var index = 0; index < _self.markDates.length; index++) {
		var _session = _self.markDates[index],
			_date = new Date(_session.showTime_long);
		if (!(_date.getFullYear() == currentYear && _date.getMonth() + 1 == currentMonth && _date.getDate() < currentDate))
			if (_date.getFullYear() == currentYear && _date.getMonth() + 1 == currentMonth && _date.getDate() == currentDate) sessionsByDate.push(_session);
			else if (_date.getFullYear() == currentYear && _date.getMonth() + 1 == currentMonth && _date.getDate() > currentDate) break
	}
	for (var j = 0; j < sessionsByDate.length; j++)
		if (sessionsByDate[j].available) return clsArr.push("hasTicket hasSession"), clsArr.join(" ");
	return sessionsByDate.length > 0 ? clsArr.push("noTicket hasSession") : clsArr.push("disabled"), clsArr.join(" ")
}, ContentCalendar.prototype.getLastMarkCss = function(year, month, date) {
	var _self = this,
		_month = 1 == month ? 12 : month - 1,
		_year = 1 == month ? year - 1 : year;
	return _self.getMarkCss(_year, _month, date)
}, ContentCalendar.prototype.getNextMarkCss = function(year, month, date) {
	var _self = this,
		_month = 12 == month ? 1 : month + 1,
		_year = 12 == month ? year + 1 : year;
	return _self.getMarkCss(_year, _month, date)
}, ContentCalendar.prototype.getLastMonthAndYear = function(year, month) {
	var _self = this,
		_month = 1 == month ? 12 : month - 1,
		_year = 1 == month ? _self.currentYear - 1 : _self.currentYear;
	return _self.getDaysOfMonth(_year, _month)
}, ContentCalendar.prototype.getNextMonthAndYear = function(year, month) {
	var _self = this,
		_month = 12 == month ? 1 : month + 1,
		_year = 12 == month ? _self.currentYear + 1 : _self.currentYear;
	return _self.getDaysOfMonth(_year, _month)
}, ContentCalendar.prototype.getDaysOfMonth = function(currentYear, currentMonth) {
	var is_leapYear = currentYear % 4 == 0 || currentYear % 100 == 0 && currentYear % 400 == 0,
		is_leapMonth = 2 == currentMonth;
	return Array.prototype.indexOf || (Array.prototype.indexOf = function(elt) {
		var len = this.length >>> 0,
			from = Number(arguments[1]) || 0;
		for (from = from < 0 ? Math.ceil(from) : Math.floor(from), from < 0 && (from += len); from < len; from++)
			if (from in this && this[from] === elt) return from;
		return -1
	}), is_leapYear && is_leapMonth ? 29 : is_leapMonth ? 28 : -1 != [1, 3, 5, 7, 8, 10, 12].indexOf(currentMonth) ? 31 : 30
}, ContentCalendar.prototype.initEvent = function() {
	var _self = this;
	document.querySelector(".lastyear").onclick = function() {
		var currentYear = _self.currentYear,
			currentMonth = _self.currentMonth;
		currentYear = currentYear - 1 < 1900 ? currentYear : currentYear - 1, _self.setCurrentYearAndMonth(currentYear, currentMonth)
	}, document.querySelector(".lastmonth").onclick = function() {
		var currentYear = _self.currentYear,
			currentMonth = _self.currentMonth;
		if (1 != currentMonth || 1900 != currentYear) {
			12 * currentYear + currentMonth > 12 * (new Date).getFullYear() + ((new Date).getMonth() + 1) && (currentYear = currentMonth - 1 < 1 ? currentYear - 1 : currentYear, currentMonth = currentMonth - 1 < 1 ? 12 : currentMonth - 1, _self.setCurrentYearAndMonth(currentYear, currentMonth))
		}
	}, document.querySelector(".nextyear").onclick = function() {
		var currentYear = _self.currentYear,
			currentMonth = _self.currentMonth;
		currentYear += 1, _self.setCurrentYearAndMonth(currentYear, currentMonth)
	}, document.querySelector(".nextmonth").onclick = function() {
		var currentYear = _self.currentYear,
			currentMonth = _self.currentMonth;
		currentYear = currentMonth + 1 > 12 ? currentYear + 1 : currentYear, currentMonth = currentMonth + 1 > 12 ? 1 : currentMonth + 1, currentYear >= (new Date).getFullYear() && currentMonth > (new Date).getMonth() + 1 && (document.querySelector(".lastmonth").className = document.querySelector(".lastmonth").className + " active"), _self.setCurrentYearAndMonth(currentYear, currentMonth)
	}, document.querySelector(".datepicker") && (document.querySelector(".datepicker").onfocus = function() {
		document.querySelector(".datepickerBox").style.display = "inline-block", document.querySelector(".datepickerBox").style.top = document.querySelector(".datepicker").offsetTop + document.querySelector(".datepicker").offsetHeight + "px", document.querySelector(".datepickerBox").style.left = document.querySelector(".datepicker").offsetLeft + "px"
	})
}, Calendar.prototype.init = function(options) {
	this.today = new Day(new Date);
	var me = this;
	if (this.activeDates = [], options.date) {
		var activeDate = new Day(options.date).getDate();
		setTimeout(function() {
			me.onDayClick(activeDate)
		}, 100)
	} else options.initShowDate && (this.activeDates = [new Day(options.initShowDate).getDate()]);
	this.month = new Month(options.date || this.today.getDate()), this.renderTitle(), this.renderMonthDays(), this.initEvents(), this.ele.appendTo(options.container)
}, Calendar.prototype.renderTitle = function() {
	this.ele.find(".title-text").html(this.month.getYear() + " / " + this.month.getMonthNumber())
}, Calendar.prototype.renderMonthDays = function() {
	var target = this.ele.find("tbody");
	template.config("openTag", "<$"), template.config("closeTag", "$>");
	var weeks = this.month.getWeeks(),
		html = template.compile('<$ for(var index=0;index<weeks.length;index++){ $><tr class="week"><$ for(var j=0;j<weeks[index].getDays().length;j++){ $><td class="month-day"><$ if(month.isInThisMonth(weeks[index].getDays()[j].getDate())) {$><div data-day="<$=weeks[index].getDays()[j].getDate().getTime()$>" class="day-wrapper <$=cxt.dayClass(weeks[index].getDays()[j])$>"><$=weeks[index].getDays()[j].getDateNumber()$></div><$}$></td><$}$></tr><$}$>')({
			month: this.month,
			weeks: weeks,
			cxt: this
		});
	target.html(html)
}, Calendar.prototype.nextMonth = function() {
	this.month = this.month.nextMonth(), this.renderTitle(), this.renderMonthDays()
}, Calendar.prototype.preMonth = function() {
	this.month = this.month.preMonth(), this.renderTitle(), this.renderMonthDays()
}, Calendar.prototype.isActiveDay = function(day) {
	for (var activeDates = this.activeDates, i = 0, len = activeDates.length; i < len; i++)
		if (activeDates[i].getTime() === day.getDate().getTime()) return !0;
	return !1
}, Calendar.prototype.dayClass = function(day) {
	var cls = "";
	return this.today.isBefore(day.getDate()) ? cls += "preday " : this.today.equals(day) && (cls += "today "), this.isActiveDay(day) && (cls += "active "), this.customDayClass && (cls += this.customDayClass(day.getDate())), cls
}, Calendar.prototype.initEvents = function() {
	var me = this;
	this.ele.delegate(".pre-month", "click", function() {
		me.preMonth()
	}), this.ele.delegate(".next-month", "click", function() {
		me.nextMonth()
	}), this.ele.delegate(".day-wrapper:not(.preday)", "click", function() {
		me.onDayClick(new Date($(this).data("day")))
	})
}, Calendar.prototype.onDayClick = function(date) {
	this.activeDates = [date], this.customDayClick && this.customDayClick(date), this.renderMonthDays()
}, Month.prototype = {
	isInThisMonth: function(date) {
		return date.getYear() === this._originDate.getYear() && date.getMonth() === this._originDate.getMonth()
	},
	getWeeks: function() {
		return this.weeks
	},
	nextMonth: function() {
		return new Month(this.days[this.days.length - 1].nextDay().getDate())
	},
	preMonth: function() {
		return new Month(this.days[0].nextDay(-1).getDate())
	},
	getYear: function() {
		return this.days[0].getDate().getFullYear()
	},
	getMonthNumber: function() {
		return this.days[0].getMonthNumber()
	},
	filter: function(fn) {
		var days = [];
		return this.days.forEach(function(day) {
			fn(day) && days.push(day)
		}), new BatchDays(days)
	}
}, Week.prototype = {
	isInThisWeek: function(date) {
		var _time = date.getTime(),
			start = this.days[0].getDate().getTime();
		return start <= _time && start + 6048e5 > _time
	},
	getDays: function() {
		return this.days
	},
	nextWeek: function() {
		return new Week(this.days[this.days.length - 1].nextDay().getDate())
	},
	preWeek: function() {
		return new Week(this.days[0].nextDay(-1).getDate())
	},
	getMonthNumber: function() {
		var num1 = this.days[0].getMonthNumber(),
			num2 = this.days[this.days.length - 1].getMonthNumber();
		return num1 === num2 ? num1 : num1 + "-" + num2
	},
	getYear: function() {
		return this.days[0].getDate().getFullYear()
	},
	equals: function(week) {
		return !!week && (week === this || week.days[0].equals(this.days[0]))
	},
	filter: function(fn) {
		var days = [];
		return this.days.forEach(function(day) {
			fn(day) && days.push(day)
		}), new BatchDays(days)
	}
}, Day.prototype = {
	getDay: function() {
		return this.date.getDay()
	},
	getDate: function() {
		return new Date(this.date.getTime())
	},
	getMonthNumber: function() {
		return this.date.getMonth() + 1
	},
	getDateNumber: function() {
		return this.date.getDate()
	},
	nextDay: function(delta) {
		var date = new Date(this.date.getTime());
		return date.setDate(date.getDate() + (delta || 1)), new Day(date)
	},
	isBefore: function(date) {
		return date.getTime() < this._startTime
	},
	isAfter: function(date) {
		return date.getTime() > this._endTime
	},
	isIn: function(date) {
		return date.getTime() >= this._startTime && date.getTime() <= this._endTime
	},
	isWeekend: function() {
		return [0, 6].indexOf(this.date.getDay()) > -1
	},
	equals: function(day) {
		return !!day && (day == this || day.getDate().getTime() === this.getDate().getTime())
	}
}, BatchDays.prototype.isInDays = function(date) {
	var start = (date.getTime(), this.days[0]),
		end = this.days[this.days.length - 1];
	return !start.isBefore(date) && !end.isAfter(date)
}, BatchDays.prototype.getStartDate = function() {
	return this.days[0].getDate()
}, BatchDays.prototype.getEndDate = function() {
	return this.days[this.days.length - 1].getDate()
}, BatchDays.prototype.filter = function(fn) {
	var days = [];
	return this.days.forEach(function(day) {
		fn(day) && days.push(day)
	}), new BatchDays(days)
};
var CPSGlobal = {
		recordYQFInfo: function() {},
		uploadYQFOrder: function() {},
		pushOrder: function(cpsName, originOrderData, cpsData) {
			var mapping = {
				linkstars: {
					getFormattedOrder: function() {
						for (var data = {
								feedback: cpsData.feedback,
								order_number: originOrderData.order_number,
								order_time: originOrderData.order_time,
								order_price: originOrderData.order_price,
								order_commission: originOrderData.order_commission,
								order_commission_type: originOrderData.order_commission_type,
								order_commission_rate: originOrderData.order_commission_rate,
								goods: []
							}, i = 0, len = originOrderData.goods.length; i < len; i++) {
							var obj = {
								goods_id: originOrderData.goods[i].goods_id,
								goods_name: originOrderData.goods[i].goods_name,
								goods_price: originOrderData.goods[i].goods_price,
								goods_count: originOrderData.goods[i].goods_count,
								goods_commission_type: originOrderData.goods[i].goods_commission_type,
								goods_commission_rate: originOrderData.goods[i].goods_commission_rate,
								goods_commission: originOrderData.goods[i].goods_commission
							};
							data.goods.push(obj)
						}
						return data
					},
					fn: function() {
						var orderData = this.getFormattedOrder();
						$.ajax({
							url: "https://www.linkstars.com/api/adv/cps/order",
							type: "Post",
							data: {
								key: originOrderData.md5Str,
								order: JSON.stringify(orderData)
							},
							contentType: "application/x-www-form-urlencoded"
						})
					},
					apiKey: "63f8b577327c5b20bdbb966d1fb636eb"
				}
			};
			return cpsName && mapping[cpsName.toLowerCase()] && mapping[cpsName.toLowerCase()].fn()
		}
	},
	SensorTrack = {
		sa_debug: !(location.hostname.indexOf("tking") > -1 && location.hostname.indexOf("qa") < 0 && location.hostname.indexOf("dev") < 0),
		filterObj: function(obj) {
			if ("undefined" != typeof sa) {
				var v, n = {};
				for (v in obj) "" === obj[v] || void 0 == obj[v] || null == obj[v] || "undefined" == obj[v] || "null" == obj[v] ? this.sa_debug && console.log(v + "未定义,前端删除") : n[v] = obj[v];
				return n
			}
		},
		setSaGlobalParam: function(options) {
			"undefined" != typeof sa && (options && options.siteName && sa.register({
				siteName: options.siteName
			}), options && options.userCityName && sa.register({
				userCityName: options.userCityName
			}), options && options.showEntrance && sa.register({
				showEntrance: options.showEntrance
			}), options && options.channel && sa.register({
				channel: options.channel
			}))
		},
		setChannel: function() {
			if (window.location.search) {
				var search_obj = app.dequery(window.location.search),
					sa_channel = !!search_obj && search_obj.channel;
				sa_channel && (sessionStorage.setItem("channel", sa_channel), app.localSave("channel", sa_channel))
			}
		},
		getChannel: function() {
			return sessionStorage.getItem("channel") || app.localGet("channel") || ""
		},
		login: function(options) {
			options.userOID && sa.login(options.userOID), sa.track("login", {
				cellphone: options.cellphone
			}), sa.setProfile({
				cellphone: options.cellphone || ""
			})
		},
		logout: function(options) {
			sa.logout(!0)
		},
		search_show: function(options) {
			sa.track("search_show", this.filterObj({
				keywords: options.keywords,
				isResultEmpty: Boolean(options.isResultEmpty),
				from: options.from
			}))
		},
		click_banner: function(options) {
			sa.track("click_banner", this.filterObj({
				bannerOID: options.bannerOID,
				bannerName: options.bannerName,
				bannerType_code: parseInt(options.bannerType_code),
				bannerType_displayName: options.bannerType_displayName,
				bannerCategory_displayName: options.bannerCategory_displayName,
				bannerCategory_code: parseInt(options.bannerCategory_code),
				showType_displayName: options.showType_displayName,
				bannerUrl: options.bannerUrl
			}))
		},
		click_marketing_show: function(options) {
			sa.track("click_marketing_show", {
				showOID: options.showOID,
				marketingType: options.marketingType,
				showName: options.showName,
				marketingNotes: options.marketingNotes
			})
		},
		click_super_deals: function(options) {
			sa.track("click_super_deals", {
				linkUrl: options.linkUrl,
				superDealsStatus: options.superDealsStatus
			})
		},
		click_calendar_show: function(options) {
			sa.track("click_calendar_show", this.filterObj({
				showOID: options.showOID,
				showType: options.showType && parseInt(options.showType),
				showType_displayName: options.showType_displayName,
				showName: options.showName
			}))
		},
		click_recent_show: function(options) {
			sa.track("click_recent_show", this.filterObj({
				showOID: options.showOID,
				showType: options.showType && parseInt(options.showType),
				showType_displayName: options.showType_displayName,
				showName: options.showName
			}))
		},
		click_favor_show: function(options) {
			sa.track("click_favor_show", this.filterObj({
				showOID: options.showOID,
				showName: options.showName
			}))
		},
		click_discount_show: function(options) {
			sa.track("click_discount_show", this.filterObj({
				showOID: options.showOID,
				showType: options.showType && parseInt(options.showType),
				showType_displayName: options.showType_displayName,
				showName: options.showName
			}))
		},
		click_hot_show: function(options) {
			sa.track("click_hot_show", this.filterObj({
				showOID: options.showOID,
				showType: options.showType && parseInt(options.showType.code),
				showType_displayName: options.showType && options.showType.displayName,
				showName: options.showName
			}))
		},
		share: function(options) {
			sa.track("share.a486f73d", {
				platform: options.platform,
				shareUrl: options.shareUrl,
				sharePlatform: options.sharePlatform
			})
		},
		show_detail: function(options) {
			sa.track("show_detail", this.filterObj({
				showOID: options.showOID,
				showType: parseInt(options.showType),
				showType_displayName: options.showType_displayName,
				showName: options.showName,
				venue: options.venue,
				latestShowTime: options.latestShowTime,
				firstShowTime: options.firstShowTime,
				lastShowTime: options.lastShowTime,
				minPrice: parseInt(options.minPrice),
				discount: Number(parseFloat(options.discount).toFixed(2)),
				$latest_referrer: options.$latest_referrer
			}))
		},
		pick_ticket: function(options) {
			sa.track("pick_ticket", {
				showOID: options.showOID,
				showName: options.showName,
				showType: parseInt(options.showType),
				showType_displayName: options.showType_displayName,
				showSessionOID: options.showSessionOID,
				showTime: options.showTime,
				seatPlanOID: options.seatPlanOID,
				originalPrice: parseInt(options.originalPrice),
				ticketOID: options.ticketOID,
				qty: options.qty,
				price: parseInt(options.price),
				compensatedPrice: parseInt(options.compensatedPrice),
				zone: options.zone
			})
		},
		confirm_order: function(options) {
			sa.track("confirm_order", {
				showOID: options.showOID,
				showName: options.show.showName,
				showType: parseInt(options.showType),
				showType_displayName: options.showType_displayName,
				deliveryMethod: options.deliveryMethod,
				deliveryMethod_displayName: options.deliveryMethod_displayName,
				cellphone: String(options.cellphone),
				showSessionOID: options.showSessionOID,
				showTime: options.showTime,
				seatPlanOID: options.seatPlanOID,
				originalPrice: parseInt(options.originalPrice),
				ticketOID: options.ticketOID,
				qty: options.qty,
				price: parseInt(options.price),
				compensatedPrice: parseInt(options.compensatedPrice),
				zone: options.zone,
				discount: Number(parseFloat(options.discount).toFixed(2)),
				total: parseInt(options.total),
				randomCode: options.randomCode
			})
		},
		success_order: function(options) {
			sa.track("success_order", {
				orderOID: options.orderOID,
				orderNumber: options.orderNumber,
				total: parseInt(options.total),
				showOID: options.showOID,
				showName: options.showName,
				showType: parseInt(options.showType),
				showType_displayName: options.showType_displayName,
				venue: options.venue,
				venueOID: options.venueOID,
				showSessionOID: options.showSessionOID,
				showTime: options.showTime,
				seatPlanOID: options.seatPlanOID,
				originalPrice: parseInt(options.originalPrice),
				ticketOID: options.ticketOID,
				qty: options.qty,
				price: parseInt(options.price),
				compensatedPrice: parseInt(options.compensatedPrice),
				zone: options.zone,
				deliveryMethod: parseInt(options.deliveryMethod),
				deliveryMethod_displayName: options.deliveryMethod_displayName,
				cellphone: String(options.cellphone),
				couponOID: options.couponOID,
				discount: Number(options.discount)
			})
		},
		confirm_pay: function(options) {
			sa.track("confirm_pay", {
				showOID: options.showOID || "",
				orderOID: options.orderOID || "",
				orderNumber: options.orderNumber || "",
				total: parseInt(options.total),
				transactionOID: options.transactionOID,
				paymentMethod_code: parseInt(options.paymentMethod_code),
				paymentMethod_displayName: options.paymentMethod_displayName
			})
		},
		pay_order: function(options) {
			sa.track("pay_order", {})
		},
		cancel_order: function(options) {
			sa.track("cancel_order", {
				orderOID: options.orderOID,
				orderNumber: options.orderNumber,
				total: parseInt(options.total),
				transactionOID: options.transactionOID || "",
				showSessionOID: options.showSessionOID,
				showTime: options.showTime,
				seatPlanOID: options.seatPlanOID,
				originalPrice: parseInt(options.originalPrice),
				ticketOID: options.ticketOID,
				qty: parseInt(options.qty),
				price: parseInt(options.price),
				compensatedPrice: parseInt(options.compensatedPrice),
				showOID: options.showOID,
				showName: options.showName,
				venue: options.venueName,
				comments: options.comments
			})
		},
		click_user_service: function(options) {
			sa.track("click_user_service", this.filterObj({
				service: options
			}))
		},
		online_customer: function(options) {
			sa.track("online_customer", {
				fromPage: options.fromPage,
				showOID: options.showOID
			})
		},
		get_smscode: function(options) {
			sa.track("get_smscode", {
				cellphone: options.cellphone,
				result: options.result
			})
		},
		listen_api: function(options) {
			sa.track("listen_api", {
				url: options.url,
				usedTime: options.usedTime,
				statuscode: options.statuscode,
				params: options.params
			})
		},
		click_confirm_delivery: function(options) {
			sa.track("click_confirm_delivery", this.filterObj({
				showOID: options.showOID,
				showName: options.show.showName,
				showType: parseInt(options.show.showType && options.show.showType.code),
				showType_displayName: options.show.showType && options.show.showType.displayName,
				deliveryMethod_displayName: options.deliveryMethod_displayName
			}))
		},
		click_confirm_coupon: function(options) {
			sa.track("click_confirm_coupon", this.filterObj({}))
		},
		open_order_agreement: function(options) {
			sa.track("open_order_agreement", this.filterObj({
				orderAgreementOID: options.orderAgreementOID
			}))
		},
		select_order_agreement: function(options) {
			sa.track("select_order_agreement", this.filterObj({
				selected: parseInt(options.selected)
			}))
		}
	};
IndexController.prototype.init = function() {
	template.config("openTag", "<$"), template.config("closeTag", "$>"), this.autoSlide(".slide-component-container"), this.loadDiscoveries(), this.initCalendar(), this.initSeckillAndTypeShows(), this.pageEvent()
}, IndexController.prototype.renderCounter = function(hour, min, sec) {
	function fill(num) {
		var s;
		return s = num >= 10 ? num + "" : "0" + num, [s.charAt(0), s.charAt(1)]
	}
	var tpl = document.getElementById("index-seckill-counter").innerHTML,
		tplFn = template.compile(tpl);
	$(".seckill-counter-container").html(tplFn({
		hour: fill(hour),
		min: fill(min),
		sec: fill(sec)
	}))
}, IndexController.prototype.initSeckillAndTypeShows = function() {
	var site = currentSite || 1001,
		tpl = document.getElementById("index-seckill").innerHTML,
		tplFn = template.compile(tpl),
		container = ".seckill-show-container",
		me = this,
		today = new Date;
	today.setHours(0), today.setMinutes(0), today.setSeconds(0), today.setMilliseconds(0);
	var tomorrow = new Date(today.getTime());
	tomorrow.setDate(tomorrow.getDate() + 1), app.fetch({
		url: this.API.seckillDataUrl(site),
		type: "GET",
		success: function(data) {
			me.seckillData = {
				targetTime: null,
				image: "",
				getState: function() {
					return null === this.targetTime ? "null" : this.targetTime >= tomorrow ? "start-days-later" : this.targetTime < new Date ? "started" : this.targetTime >= today ? "start-today" : "null"
				}
			}, me.loadTypeShows(data.result.data.showTypes);
			var seckillData = data.result.data.activitySuperDeals;
			if (seckillData && seckillData.startTime && ($(".sa_seckill_banner").data("link", seckillData.linkUrl), $(".sa_seckill_banner").data("displayname", seckillData.superDealsStatus.displayName), me.seckillData.targetTime = new Date(seckillData.startTime), me.seckillData.image = seckillData.thumbnailUrl), seckillData && "start-today" === me.seckillData.getState()) me.startCounting(), me.seckillData.linkUrl = seckillData.linkUrl.replace("w.", "www.").replace("mqa666.", "nodeqa666.").replace("m.", "www."), $($(".has-seckill #seckillpc")[0]).attr("href", me.seckillData.linkUrl), $(container).html(tplFn({
				seckill: me.seckillData
			}));
			else if (seckillData && "start-days-later" === me.seckillData.getState()) {
				var date = new Date(seckillData.startTime);
				me.seckillData = {
					title: seckillData.desc,
					linkUrl: seckillData.linkUrl.replace("w.", "www.").replace("mqa666.", "nodeqa666.").replace("m.", "www."),
					image: seckillData.thumbnailUrl,
					desc: date.getMonth() + 1 + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes()
				}, $($(".has-seckill #seckillpc")[0]).attr("href", me.seckillData.linkUrl), $(container).html(tplFn({
					seckill: me.seckillData
				}))
			} else if (seckillData && "started" === me.seckillData.getState()) {
				var date = new Date(seckillData.startTime);
				me.seckillData = {
					title: seckillData.desc,
					linkUrl: seckillData.linkUrl.replace("w.", "www.").replace("mqa666.", "nodeqa666.").replace("m.", "www."),
					image: seckillData.thumbnailUrl
				}, $($(".has-seckill #seckillpc")[0]).attr("href", me.seckillData.linkUrl), $(container).html(tplFn({
					seckill: me.seckillData
				}))
			} else $(".no-seckill-backup").show(), $(".has-seckill").hide()
		}
	})
}, IndexController.prototype.startCounting = function() {
	var today = new Date;
	today.setHours(0), today.setMinutes(0), today.setSeconds(0), today.setMilliseconds(0);
	var me = this,
		countDonwRunning = null;
	! function() {
		countDonwRunning = setInterval(function() {
			var delta = me.seckillData.targetTime.getTime() - (new Date).getTime();
			if (delta <= 0) return me.initSeckill(), clearInterval(countDonwRunning), void(countDonwRunning = null);
			var d = new Date(delta + today.getTime());
			me.renderCounter(d.getHours(), d.getMinutes(), d.getSeconds())
		}, 1e3)
	}()
}, IndexController.prototype.initCalendar = function() {
	var _self = this;
	this.calender = new Calendar({
		date: new Date,
		container: ".calender-container",
		dayClick: function(date) {
			_self.getCalendarShow(date, 8, 0, function(data) {
				var page = data.result.pagination;
				_self.showSlider.changeData({
					date: date,
					count: page.count || 0,
					pageIndex: 1,
					pageSize: 4,
					shows: data.result.data || []
				})
			})
		}
	}), this.showSlider = new ShowSlider("#show-slider-container"), this.showSlider.init({
		pageIndex: 1,
		pageSize: 4,
		loadDataFn: function(date, offset, callBack) {
			_self.getCalendarShow(date, 4, offset, callBack)
		}
	})
}, IndexController.prototype.getCalendarShow = function(date, pageSize, offset, next) {
	var site = currentSite || 1001;
	app.fetch({
		url: this.API.calendarDataUrl(site),
		type: "GET",
		data: {
			time: (new Date).getTime(),
			src: "web",
			fromDate: new Date(date).getTime(),
			offset: offset,
			length: pageSize
		},
		success: function(data) {
			next && "function" == typeof next && next(data)
		}
	})
}, IndexController.prototype.pageEvent = function() {}, IndexController.prototype.loadDiscoveries = function() {
	var site = currentSite || 1001,
		tpl = document.getElementById("index-discoveries").innerHTML,
		tplFn = template.compile(tpl);
	app.fetch({
		url: this.API.discoveriesUrl(site),
		type: "GET",
		success: function(data) {
			var datas = data.result.data;
			datas && datas.length ? $(".discoveries-containers").html(tplFn({
				discoveries: data.result.data.slice(0, 3)
			})) : $("discoveries-section").hide()
		}
	})
}, IndexController.prototype.loadTypeShows = function(typeShows) {
	function displayShowsHandler(section, container, shows) {
		if (shows) {
			for (var _shows = [], i = 0, len = shows.length; i < len; i++) shows[i].minPrice > 0 && (shows[i].latestShowTime = shows[i].latestShowTime.replace(/-/g, "."), _shows.push(shows[i]));
			shows = _shows
		}
		if (shows.length >= MIN_SHOW_COUNT) {
			for (var i = 0; i < 7; i++) shows[i] || shows.push({});
			$(section).show(), $(container).html(tplFn({
				shows: shows.slice(0, 7)
			}))
		}
	}
	for (var tpl = (currentSite, document.getElementById("index-type-show").innerHTML), tplFn = template.compile(tpl), MIN_SHOW_COUNT = 5, i = 0, len = typeShows.length; i < len; i++) {
		var showtype = typeShows[i].showType.code;
		1 === showtype ? displayShowsHandler("#yan_chang_hui-section", "#yan_chang_hui_shows", typeShows[i].shows) : 3 === showtype ? displayShowsHandler("#hua_ju_ge_ju-section", "#hua_ju_ge_ju_shows", typeShows[i].shows) : 6 === showtype ? displayShowsHandler("#ti_yu_sai_shi-section", "#ti_yu_sai_shi_shows", typeShows[i].shows) : 2 === showtype && displayShowsHandler("#yin_yue_hui-section", "#yin_yue_hui_shows", typeShows[i].shows)
	}
}, IndexController.prototype.autoSlide = function(ele) {
	var cal = new BannerShowSlider(ele, 6e3);
	$(".right-slide").click(function() {
		cal.manuelLeft()
	}), $(".left-slide").click(function() {
		cal.manuelRight()
	})
}, BaseController.prototype.generateUUID = function() {
	var uuidUrl = function() {
		return window.location.host.indexOf("tking.cn") >= 0 && window.location.host.indexOf("qa") < 0 && window.location.host.indexOf("dev") < 0 ? location.protocol + "//571ccdcf0cf2f4c96dda1d50.tking.cn/userapi/583bd07ee1acad6b83cebde0" : window.location.host.indexOf("qa") >= 0 ? location.protocol + "//nodeqa666.tking.cn/userapi/579092791b3cfba3fe226f73" : location.protocol + "//node.dev.ticketdashi.com/userapi/579092791b3cfba3fe226f73"
	}();
	app.fetch({
		url: uuidUrl,
		type: "get",
		dataType: "json",
		data: {
			time: (new Date).getTime(),
			src: "web"
		},
		success: function(data, status, xhr) {
			var uuid = (xhr.getResponseHeader, data.result.data);
			uuid && app.localSave(app.ologinOID, uuid, {
				expires: 730
			})
		}
	})
}, BaseController.prototype.tryGetUserSession = function(next, LoginObj) {
	if (!app.localGet(app.ologinOID) || !app.localGet(app.oauthKey)) return console.log("异常代码：10001"), LoginObj && "function" == typeof LoginObj.loadComponent && LoginObj.loadComponent(), void(LoginObj && "function" == typeof LoginObj.trySessionFailureDone && LoginObj.trySessionFailureDone());
	$.ajax({
		url: this.API.userInfoUrl(function(uuid) {
			var timestamp = app.localGet(app.oauthKey) || 1000459;
			return app.base64_encode(app.encryptLoginCode(uuid, timestamp))
		}(app.localGet(app.ologinOID))),
		type: "GET",
		data: {
			time: (new Date).getTime(),
			src: "web"
		},
		beforeSend: function(req) {
			req.setRequestHeader("tsessionid", app.getSessionId())
		},
		success: function(data) {
			200 == data.statusCode ? (data.result.cellphone && app.localSave(app.cellphoneKey, data.result.cellphone), next && "function" == typeof next && next(data)) : (data.statusCode = 1006) && (LoginObj && "function" == typeof LoginObj.loadComponent && LoginObj.loadComponent(), LoginObj && "function" == typeof LoginObj.trySessionFailureDone && LoginObj.trySessionFailureDone())
		}
	})
}, BaseController.prototype.getCurrentUserData = function(next) {
	var _self = this;
	app.fetch({
		url: this.API.getCurrentUserDataUrl,
		type: "GET",
		data: {
			time: (new Date).getTime(),
			src: "web"
		},
		success: function(data) {
			200 == data.statusCode && next && "function" == typeof next ? next(data) : 1005 == data.statusCode && _self.tryGetUserSession(next, new LoginComponent)
		},
		authorizationLogin: !0
	})
}, UserController.prototype.getNoPaymentOrder = function(next, authorizationLogin) {
	app.fetch({
		url: this.API.getNoPaymentOrderURL,
		type: "GET",
		dataType: "json",
		data: {
			time: (new Date).getTime(),
			src: "web"
		},
		success: function(data) {
			next && "function" == typeof next && next(data)
		},
		authorizationLogin: authorizationLogin || !1
	})
}, CommonController.prototype = new BaseController, CommonController.prototype.loadUserInfo = function(callback) {
	app.fetch({
		url: this.API.userInfoUrl,
		type: "GET",
		dataType: "json",
		data: {
			time: (new Date).getTime(),
			src: "web"
		},
		success: function(data) {
			callback && callback(data)
		}
	})
}, CommonController.prototype.init = function() {
	var _self = this;
	this.inited || (this.registerComponent(), this.pageEvent(), app.localGet(app.ologinOID) || $.cookie(app.ologinOID) || this.generateUUID(), User = new UserController, User.getNoPaymentOrder(function() {
		app.localGet("*cell_phone*") ? $(".user-info span").html(app.localGet("*cell_phone*")) : _self.loadUserInfo(function(data) {
			$(".user-info span").html(data.result.data.cellPhone), app.localSave("*cell_phone*", data.result.data.cellPhone)
		}), $(".login-component").hide(), $(".login-info").hide(), $(".user-info").show()
	}), this.inited = !0), _self.cityLocation(function(data) {
		var data = data && data.result ? data.result.data : {};
		data && data.locationCityOID && $.cookie("locationCityOID", data.locationCityOID, $.extend({
			path: "/"
		})), data && data.locationCityName && $.cookie("locationCityName", data.locationCityName, $.extend({
			path: "/"
		}))
	})
}, CommonController.prototype.cityLocation = function(next) {
	var _self = this;
	app.fetch({
		url: _self.API.cityLocationUrl,
		type: "GET",
		dataType: "json",
		data: {
			time: (new Date).getTime(),
			src: "web"
		},
		success: function(data) {
			next && "function" == typeof next && next(data), _self.promiseCallback && "function" == typeof _self.promiseCallback && _self.promiseCallback()
		}
	})
}, CommonController.prototype.registerComponent = function() {
	this.Login = new LoginComponent
}, CommonController.prototype.pageEvent = function() {
	var _self = this;
	$("#js-open-login").click(function() {
		$(".login-component").show(), _self.Login.init(function(data) {
			$("#li_yzm").show(), $("#li_yzm img").attr("src", data)
		})
	}), $("#js_login_yzm").click(function() {
		if (!myApp.validPhone($("#js_login_phone").val())) return void app.alertMsg("请输入正确手机号");
		var cellphone = $("#js_login_phone").val(),
			imgCode = $("#authm").val();
		_self.Login.getSmsCode({
			cellphone: cellphone,
			imgCode: imgCode,
			success: function() {
				if (void 0 !== SensorTrack) {
					var sa_smscode = {
						cellphone: cellphone,
						result: !0
					};
					SensorTrack.get_smscode(sa_smscode)
				}
				$("#js_login_yzm").text("60秒后重新获取");
				var interval = 60,
					smsInterval = setInterval(function() {
						interval--, $("#js_login_yzm").attr("disabled", "disabled"), $("#js_login_yzm").text(interval + "秒后重新获取"), 0 == interval && (clearInterval(smsInterval), $("#js_login_yzm").removeAttr("disabled"), $("#js_login_yzm").text("获取验证码"), _self.Login.getCsrfData(function(data) {
							$("#li_yzm").show(), $("#li_yzm img").attr("src", data)
						}))
					}, 1e3)
			}
		}, function(data) {
			if ($("#li_yzm").show(), $("#li_yzm img").attr("src", data), void 0 !== SensorTrack) {
				var sa_smscode = {
					cellphone: cellphone,
					result: !1
				};
				SensorTrack.get_smscode(sa_smscode)
			}
		})
	}), $("#js_login_btn").click(function() {
		var cellphone = $("#js_login_phone").val(),
			smsCode = $("#js_top_yzm").val(),
			imgCode = $("#authm").val();
		return myApp.validPhone(cellphone) ? smsCode ? _self.Login.imageCode_required && !imgCode ? void app.alertMsg("请输入正确图片验证码") : (window._hmt && window._hmt.push && window._hmt.push(["_trackEvent", "PC登录", "login", "pclogin"]), void _self.Login.authorization({
			cellphone: cellphone,
			smsCode: smsCode,
			imgCode: imgCode
		}, function(data) {
			SensorTrack.login({
				cellphone: data.result.data && data.result.data.cellPhone,
				userOID: data.result.data && data.result.data.userOID
			}), _self.loadUserInfo(function(data) {
				$(".user-info span").html(data.result.data.cellPhone), app.localSave("*cell_phone*", data.result.data.cellPhone)
			}), app.localSave(app.cellphoneKey, data.result.data.cellPhone), $(".login-component").hide(), $(".login-info").hide(), $(".user-info").show()
		})) : void app.alertMsg("请输入正确手机验证码") : void app.alertMsg("请输入正确手机号")
	}), $("#js_logout_btn").click(function() {
		$("#cancelLogin_component").show()
	}), $("#logoutCancel_btn").click(function() {
		_self.Login.logout(function() {
			app.localRemove(app.cellphoneKey), $(".login-info").show(), $(".user-info span").text(""), $(".user-info").hide(), setTimeout(function() {
				for (var ignorePath = [/\/list\/.+/, /\/content\/.+/], i = 0, len = ignorePath.length; i < len; i++)
					if (ignorePath[i].test(window.location.href)) return;
				window.location = ""
			}, 1)
		}), void 0 !== SensorTrack && SensorTrack.logout()
	}), $("img[data-src]").each(function(index) {
		var _self = this;
		if ("" != $(_self).data("src") && "undefined" != $(_self).data("src")) {
			var img = document.createElement("img");
			img.src = $(_self).data("src"), img.onload = function() {
				_self.src = $(_self).data("src"), img = null
			}
		}
	}), $(document).click(function(event) {
		"search-text" == event.target.className && "INPUT" == event.target.nodeName && 1 == event.target.nodeType && $(".associate-container li").size() ? $(".associate-container").show() : $(".associate-container").hide()
	}), $(".search-text").keyup(function() {
		var text = _self.sa_text = $(this).val();
		app.fetch({
			url: _self.API.suggestUrl,
			type: "GET",
			dataType: "JSON",
			data: {
				keyword: text,
				offset: 0,
				length: 10
			},
			success: function(data) {
				if (200 == data.statusCode) {
					_self.suggestResults = data.result.data || [], $(".associate-container ul").html("");
					for (var ulStr = "", index = 0; index < _self.suggestResults.length; index++) {
						var element = _self.suggestResults[index];
						ulStr += '<li data-id="' + element.showOID + '"><a href="/content/' + element.showOID + '">' + element.showName + "</a></li>"
					}
					_self.suggestResults.length > 0 && $(".associate-container").show(), $(".associate-container ul").html(ulStr)
				} else 510 == data.statusCode && ($(".associate-container ul").html(""), $(".associate-container").hide());
				SensorTrack.search_show({
					keywords: _self.sa_text,
					isResultEmpty: Boolean(_self.suggestResult && _self.suggestResults.length > 0)
				})
			}
		})
	}), $(".search-text").on("keypress", function(event) {
		if ("13" == event.keyCode && $.trim($(".search-text").val())) {
			$(".search-text").val();
			window.location.href = "/search/" + $.trim($(".search-text").val())
		}
	}), $(".pop_register_disagree").on("click", function(event) {
		$(".register-component").hide()
	}), $(".pop_register_agree").on("click", function(event) {
		$(".register-component").hide();
		var cellphone = $("#js_login_phone").val(),
			smsCode = $("#js_top_yzm").val(),
			imgCode = $("#authm").val();
		return myApp.validPhone(cellphone) ? smsCode ? _self.Login.imageCode_required && !imgCode ? void app.alertMsg("请输入正确图片验证码") : (window._hmt && window._hmt.push && window._hmt.push(["_trackEvent", "PC登录", "login", "pclogin"]), _self.Login.haveConsentAgreement = !0, void _self.Login.authorization({
			cellphone: cellphone,
			smsCode: smsCode,
			imgCode: imgCode
		}, function(data) {
			SensorTrack.login({
				cellphone: data.result.data && data.result.data.cellPhone,
				userOID: data.result.data && data.result.data.userOID
			}), _self.loadUserInfo(function(data) {
				$(".user-info span").html(data.result.data.cellPhone), app.localSave("*cell_phone*", data.result.data.cellPhone)
			}), app.localSave(app.cellphoneKey, data.result.data.cellPhone), $(".login-component").hide(), $(".login-info").hide(), $(".user-info").show()
		})) : void app.alertMsg("请输入正确手机验证码") : void app.alertMsg("请输入正确手机号")
	}), $(document).on("click", ".letter-filter-item", function(event) {
		var scrollBarScrollHeight = $(".letter-list").prop("scrollHeight") - $(".letter-list").height();
		if ($(this).data("letter") != _self.lastLetter) {
			var positionTop = $("#" + $(this).data("letter")).position().top;
			positionTop > 0 && positionTop >= scrollBarScrollHeight ? ($(".letter-list").scrollTop(scrollBarScrollHeight), _self.lastScrollTop = $(".letter-list").scrollTop()) : ($(".letter-list").scrollTop(_self.lastScrollTop + positionTop), _self.lastScrollTop = $(".letter-list").scrollTop()), _self.lastLetter = $(this).data("letter")
		}
	}), $(document).on("click", ".single-city", function(event) {
		var cityOID = $(this).data("cityid"),
			cityName = $(this).data("cityname"),
			citypinyin = $(this).data("citypinyin");
		app.cookieSave("site_city", JSON.stringify({
			cityOID: cityOID,
			cityName: cityName
		})), window.location.href = "/" + citypinyin
	}), $("#js_search_btn").on("click", function(event) {
		if ($.trim($(".search-text").val())) {
			encodeURIComponent($(".search-text").val());
			window.location.href = "/search/" + $.trim(encodeURIComponent($(".search-text").val()))
		}
	}), $(".slide-component-section a").on("click", function(event) {
		if (void 0 !== SensorTrack) {
			var sa_banner_con = {
				bannerOID: $(this).data("sabanneroid"),
				bannerName: $(this).data("sabannername"),
				bannerType_code: $(this).data("sabannertypecode"),
				bannerType_displayName: $(this).data("sabannertypedisplayname"),
				bannerCategory_displayName: $(this).data("sabannercategorydisplayname"),
				bannerCategory_code: $(this).data("sabannercategorycode"),
				showType_displayName: $(this).data("sashowtypedisplayname"),
				bannerUrl: $(this).attr("href")
			};
			SensorTrack.click_banner(sa_banner_con), SensorTrack.setSaGlobalParam({
				showEntrance: "首页banner"
			})
		}
	}), $(document).on("click", ".sa_index_entrance", function() {
		SensorTrack.setSaGlobalParam({
			showEntrance: $(this).data("sasectionname")
		})
	}), $(".contact-service").click(function() {
		$("#triggerIM").click()
	}), $(document).on("click", ".sa_calendar", function() {
		var sa_show = {
			showOID: $(this).data("sashowoid"),
			showType: $(this).data("sashowtype"),
			showType_displayName: $(this).data("showtypedisplayname"),
			showName: $(this).data("sashowname")
		};
		SensorTrack.click_calendar_show(sa_show)
	}), $(document).on("click", ".sa_recent", function() {
		var sa_show = {
			showOID: $(this).data("sashowoid"),
			showType: $(this).data("sashowtype"),
			showType_displayName: $(this).data("showtypedisplayname"),
			showName: $(this).data("sashowname")
		};
		SensorTrack.setSaGlobalParam({
			showEntrance: $(this).data("sasectionname") + "-" + $(this).data("showtypedisplayname")
		}), SensorTrack.click_recent_show(sa_show)
	}), $(document).on("click", ".sa-type-click", function() {
		var sa_show = {
			showOID: $(this).data("sashowoid"),
			showType: $(this).data("sashowtype"),
			showType_displayName: $(this).data("showtypedisplayname"),
			showName: $(this).data("sashowname")
		};
		SensorTrack.setSaGlobalParam({
			showEntrance: $(this).data("sasectionname") + "-" + $(this).data("showtypedisplayname")
		}), SensorTrack.click_recent_show(sa_show)
	}), $(document).on("click", ".sa_hot_click", function() {
		var sa_show = {
			showOID: $(this).data("sashowoid"),
			showType: $(this).data("sashowtype"),
			showType_displayName: $(this).data("showtypedisplayname"),
			showName: $(this).data("sashowname")
		};
		SensorTrack.setSaGlobalParam({
			showEntrance: $(this).data("sasectionname") + "-" + $(this).data("showtypedisplayname")
		}), SensorTrack.click_hot_show(sa_show)
	}), $(document).on("click", ".sa_discount", function() {
		var sa_show = {
			showOID: $(this).data("sashowoid"),
			showType: $(this).data("sashowtype"),
			showType_displayName: $(this).data("showtypedisplayname"),
			showName: $(this).data("sashowname")
		};
		SensorTrack.setSaGlobalParam({
			showEntrance: $(this).data("sasectionname") + "-" + $(this).data("showtypedisplayname")
		}), SensorTrack.click_discount_show(sa_show)
	}), $(document).on("click", ".sa_seckill_banner", function() {
		var sa_seckill_data = {
			linkUrl: $(this).data("link"),
			superDealsStatus: $(this).data("displayname")
		};
		SensorTrack.click_super_deals(sa_seckill_data), SensorTrack.setSaGlobalParam({
			showEntrance: "首页秒杀专区banner"
		})
	}), $(".icon-weixin").hover(function() {
		$(this).addClass("icon-weixin-hover")
	}, function() {
		$(this).removeClass("icon-weixin-hover")
	}), $(".icon-sina").hover(function() {
		$(this).addClass("icon-sina-hover")
	}, function() {
		$(this).removeClass("icon-sina-hover")
	})
}, ListController.prototype.init = function() {
	this.initDateFilter(), this.pageEvent()
}, ListController.prototype.addTimeFilterParam = function(start, end, addition) {
	var search = location.search.replace(/&?(startTime|endTime|batchFilter|offset|length)=[^=&]*(&$)?/g, ""),
		timeQuery = "startTime=" + this.dateParamFotmat(start) + "&endTime=" + this.dateParamFotmat(end);
	location.href = location.pathname + "?" + (search + "&" + (addition ? addition + "&" : "") + timeQuery + "&offset=0&length=10").replace(/^[\?&]*|[\?&]*$/g, "").replace(/&{2,}/g, "&")
}, ListController.prototype.addSortParam = function(query) {
	var search = location.search.replace(/&?(offset|length|seq|sorting)=[^=&]*(&$)?/g, "");
	location.href = location.pathname + "?" + (search + "&" + query + "&offset=0&length=10").replace(/^[\?&]*|[\?&]*$/g, "").replace(/&{2,}/g, "&")
}, ListController.prototype.addCityParam = function(query) {
	var search = location.search.replace(/&?(offset|length|city)=[^=&]*(&$)?/g, "");
	location.href = location.pathname + "?" + (search + "&" + query + "&offset=0&length=10").replace(/^[\?&]*|[\?&]*$/g, "").replace(/&{2,}/g, "&")
}, ListController.prototype.addTypeParam = function(query) {
	var search = location.search.replace(/&?(offset|length|type)=[^=&]*(&$)?/g, "");
	location.href = location.pathname + "?" + (search + "&" + query + "&offset=0&length=10").replace(/^[\?&]*|[\?&]*$/g, "").replace(/&{2,}/g, "&")
}, ListController.prototype.toPage = function(query) {
	var search = location.search.replace(/&?(offset|length)=[^=&]*(&$)?/g, "");
	location.href = location.pathname + "?" + (search + "&" + query).replace(/^[\?&]*|[\?&]*$/g, "").replace(/&{2,}/g, "&")
}, ListController.prototype.removeTimeFilterParam = function(addition) {
	var search = location.search.replace(/&?(startTime|endTime|batchFilter|offset|length)=[^=&]*(&$)?/g, "");
	location.href = location.pathname + "?" + (search + "&" + (addition ? addition + "&" : "") + "offset=0&length=10").replace(/^[\?&]*|[\?&]*$/g, "").replace(/&{2,}/g, "&")
}, ListController.prototype.dateParamFotmat = function(date) {
	function fullFill(num) {
		return num < 10 ? "0" + num : "" + num
	}
	var m = date.getMonth() + 1,
		year = date.getFullYear(),
		day = date.getDate();
	return year + fullFill(m) + fullFill(day)
}, ListController.prototype.fetchStartEndDate = function(url) {
	var reg1 = /startTime=([^=&]+)/,
		reg2 = /endTime=([^=&]+)/,
		reg3 = /batchFilter=([^=&]+)/,
		ret1 = reg1.exec(url),
		ret2 = reg2.exec(url),
		ret3 = reg3.exec(url);
	if (ret1 && ret2) return {
		start: this.getDate(ret1[1]),
		end: this.getDate(ret2[1]),
		batch: ret3 && ret3[1]
	}
}, ListController.prototype.getDate = function(datestr) {
	var dateReg = /(\d{4})(\d{2})(\d{2})/,
		ret = dateReg.exec(datestr);
	if (ret) return new Date(ret[1], ret[2] - 1, ret[3])
}, ListController.prototype.initDateFilter = function() {
	var calendarDate, filter = this.fetchStartEndDate(location.search),
		me = this;
	if (filter)
		if (filter.batch) {
			var batch = filter.batch;
			$("[date-filter]").removeClass("active"), $("[date-filter=" + batch + "]").addClass("active")
		} else calendarDate = filter.start, $("#current-date").html(calendarDate.getFullYear() + "." + (calendarDate.getMonth() + 1) + "." + calendarDate.getDate()), $("[date-filter=calendar]").addClass("active");
	else $("[date-filter=all]").addClass("active");
	this.calender = new Calendar({
		initShowDate: calendarDate,
		container: ".calendar-container",
		dayClick: function(date) {
			me.addTimeFilterParam(date, date)
		}
	})
}, ListController.prototype.setDateFilterTypeParam = function(type) {
	var now = new Date,
		end = new Date(now.getTime());
	"all" === type ? this.removeTimeFilterParam() : "month" === type ? (end.setMonth(end.getMonth() + 1), this.addTimeFilterParam(now, end, "batchFilter=month")) : "week" === type ? (end.setDate(end.getDate() + 7), this.addTimeFilterParam(now, end, "batchFilter=week")) : "weekend" === type && (0 !== now.getDay() && (now.setDate(now.getDate() + (6 - now.getDay())), end.setDate(end.getDate() + (7 - end.getDay()))), this.addTimeFilterParam(now, end, "batchFilter=weekend"))
}, ListController.prototype.pageEvent = function() {
	var me = this;
	$("[date-filter]").click(function(e) {
		var filterType = $(this).attr("date-filter");
		me.setDateFilterTypeParam(filterType)
	}), $("[sort]").click(function(e) {
		var sort = $(this).attr("sort");
		me.addSortParam(sort)
	}), $("[pagination]").click(function(e) {
		var pagination = $(this).attr("pagination");
		me.toPage(pagination)
	}), $("[city-filter]").click(function(e) {
		var city = $(this).attr("city-filter");
		me.addCityParam(city)
	}), $("[type-filter]").click(function(e) {
		var type = $(this).attr("type-filter");
		me.addTypeParam(type)
	})
}, CouponShowsController.prototype.splitLength = function(pagination, key) {
	for (var _self = this, pagination = pagination.split("&"), i = 0; i < pagination.length; i++) {
		var pos = pagination[i].indexOf("=");
		_self.pageobj[pagination[i].substring(0, pos)] = pagination[i].substring(pos + 1)
	}
	return _self.pageobj[key]
}, CouponShowsController.prototype.init = function() {
	var me = this;
	me.initDateFilter(), me.pageEvent(), me.getCouponShows(0)
}, CouponShowsController.prototype.getCouponShows = function(page) {
	var _self = this;
	$("#loading_box").show(), app.fetch({
		url: this.API.couponShowsUrl,
		type: "GET",
		dataType: "json",
		data: {
			offset: 10 * page || 0,
			length: 10,
			src: "web",
			time: (new Date).getTime(),
			sorting: _self.sorting,
			seq: _self.seq,
			siteCityOID: currentSite
		},
		success: function(data) {
			_self.couponShowsData.couponShows = data.result.data || [], _self.pageData.totalCount = data.result.pagination && data.result.pagination.count || 0, _self.pageData.totalPage = Math.ceil(_self.pageData.totalCount / 10) || 0, _self.couponShowsData.pageData = _self.pageData, template.helper("tparseInt", function(num) {
				return parseInt(num)
			}), template.helper("tmax", function(a, b) {
				return a > b ? a : b
			}), template.helper("tmin", function(a, b) {
				return a < b ? a : b
			});
			var coupon_shows_html = template("coupon_shows_couponTpl", _self.couponShowsData);
			$("#coupon_shows").html(coupon_shows_html), $(".sort" + _self.sorting).addClass("active"), $("#loading_box").hide(), $("img[data-src]").each(function(index) {
				var _self = this;
				if ("" != $(_self).data("src") && "undefined" != $(_self).data("src")) {
					var img = document.createElement("img");
					img.src = $(_self).data("src"), img.onload = function() {
						_self.src = $(_self).data("src"), img = null
					}
				}
			})
		},
		authorizationLogin: !0
	})
}, CouponShowsController.prototype.goToPage = function(curPage) {
	var _self = this;
	_self.pageData.currentPage = curPage, _self.getCouponShows(_self.pageData.currentPage - 1)
}, CouponShowsController.prototype.fetchStartEndDate = function(url) {
	var reg1 = /startTime=([^=&]+)/,
		reg2 = /endTime=([^=&]+)/,
		reg3 = /batchFilter=([^=&]+)/,
		ret1 = reg1.exec(url),
		ret2 = reg2.exec(url),
		ret3 = reg3.exec(url);
	if (ret1 && ret2) return {
		start: this.getDate(ret1[1]),
		end: this.getDate(ret2[1]),
		batch: ret3 && ret3[1]
	}
}, CouponShowsController.prototype.getDate = function(datestr) {
	var dateReg = /(\d{4})(\d{2})(\d{2})/,
		ret = dateReg.exec(datestr);
	if (ret) return new Date(ret[1], ret[2] - 1, ret[3])
}, CouponShowsController.prototype.initDateFilter = function() {
	var calendarDate, filter = this.fetchStartEndDate(location.search),
		me = this;
	if (filter)
		if (filter.batch) {
			var batch = filter.batch;
			$("[date-filter]").removeClass("active"), $("[date-filter=" + batch + "]").addClass("active")
		} else calendarDate = filter.start, $("#current-date").html(calendarDate.getFullYear() + "." + (calendarDate.getMonth() + 1) + "." + calendarDate.getDate()), $("[date-filter=calendar]").addClass("active");
	else $("[date-filter=all]").addClass("active");
	this.calender = new Calendar({
		initShowDate: calendarDate,
		container: ".calendar-container",
		dayClick: function(date) {
			me.addTimeFilterParam(date, date)
		}
	})
}, CouponShowsController.prototype.pageEvent = function() {
	var me = this;
	$(document).delegate("#coupshowspage li a", "click", function() {
		var pagination = $(this).attr("pagination"),
			curPage = me.splitLength(pagination, "offset") / 10 + 1;
		me.goToPage(curPage)
	}), $(document).delegate(".sort-item-container a", "click", function() {
		if (!$(this).hasClass("active")) {
			me.pageData.currentPage = 1;
			var sort = $(this).attr("sort");
			me.sorting = me.splitLength(sort, "sorting"), me.seq = me.splitLength(sort, "seq"), me.getCouponShows(0)
		}
	})
}, ContentController.prototype.init = function() {
	var _self = this;
	template.config("openTag", "<$"), template.config("closeTag", "$>");
	var saStartTime = new Date;
	window.onbeforeunload = function() {
		var end = new Date,
			sa_duration = (end.getTime() - saStartTime.getTime()) / 1e3;
		SensorTrack.SCREEN_VIEW_DURATION({
			event_duration: sa_duration,
			$screen_name: window.location.href,
			view_name: "show_detail",
			showOID: currentContentId,
			showType_code: sa_showType,
			showName: sa_showName
		})
	}, $(".buy-num").val(_self.currentNum), _self.loadProperties(), _self.getShowSessionPlanInfo(currentContentId, currentShowSessionID, function(result) {
		_self.sessionToken = result.token;
		var tempShowSessions = result.data || [],
			templ = document.getElementById("sessions-ul").innerHTML,
			templ2 = document.getElementById("par-ul").innerHTML;
		if (tempShowSessions.length >= 7) {
			$("#calendarBox").show(), _self.hasCalender = !0;
			(_self.calender = new ContentCalendar).init({
				markDates: tempShowSessions,
				selectDateFn: function(selectedDate, selectShowSession) {
					for (var sessionsByfilterDate = [], index = 0; index < tempShowSessions.length; index++) {
						var _date = new Date(tempShowSessions[index].showTime_long);
						_date.getFullYear() + "/" + (_date.getMonth() + 1) + "/" + _date.getDate() == selectedDate && sessionsByfilterDate.push(tempShowSessions[index])
					}
					if (sessionsByfilterDate && sessionsByfilterDate.length) {
						var sessionPars = _self.currentSessionPars = _self.getFirstLoadSessionPars(sessionsByfilterDate, selectShowSession);
						if (sessionPars.length) _self.currentTickets = _self.getFirstLoadSessionParTickets(sessionPars, currentSessionParID), $("#sessionPar-container").html(template.compile(templ2)({
							sessionPars: sessionPars,
							activeSessionParOID: _self.selectedSessionParID
						})), _self.updatePrice(), $("#session-container").html(template.compile(templ)({
							sessions: sessionsByfilterDate,
							activeshowSessionOID: _self.activeshowSessionOID
						})), $("#show-session-container").html(template.compile(templ)({
							sessions: tempShowSessions.slice(0, 5),
							activeshowSessionOID: _self.activeshowSessionOID
						})), $("#show-session-container ul").append('<li><div class="list-one" style="line-height:40px;"><p>更多</p></div></li>');
						else {
							var sessionPar = _self.filterFirstAvaliableSession(sessionsByfilterDate);
							_self.getSessionParInfo(sessionPar.showSessionOID, function(data, token) {
								sessionPar.seatPlan = data, sessionPars = _self.currentSessionPars = _self.getFirstLoadSessionPars(sessionsByfilterDate, selectShowSession), _self.sessionToken = token, _self.currentTickets = _self.getFirstLoadSessionParTickets(sessionPar.seatPlan, currentSessionParID), $("#sessionPar-container").html(template.compile(templ2)({
									sessionPars: sessionPar.seatPlan,
									activeSessionParOID: _self.selectedSessionParID
								})), _self.updatePrice(), $("#session-container").html(template.compile(templ)({
									sessions: sessionsByfilterDate,
									activeshowSessionOID: _self.activeshowSessionOID
								})), $("#show-session-container").html(template.compile(templ)({
									sessions: tempShowSessions.slice(0, 5),
									activeshowSessionOID: _self.activeshowSessionOID
								})), $("#show-session-container ul").append('<li><div class="list-one" style="line-height:40px;"><p>更多</p></div></li>')
							})
						}
					}
					$(".buy-num").val(1), _self.currentNum = 1
				}
			}), result.seatPlan && "undefined" != result.seatPlan[0].seatPlanURL && "" != result.seatPlan[0].seatPlanURL && $(".seatPlan-pic img").attr("src", result.seatPlan[0].seatPlanURL)
		} else {
			_self.hasCalender = !1;
			var sessionPars = _self.currentSessionPars = _self.getFirstLoadSessionPars(tempShowSessions);
			$("#session-container").html(template.compile(templ)({
				sessions: tempShowSessions,
				activeshowSessionOID: _self.activeshowSessionOID
			})), $("#show-session-container").html(template.compile(templ)({
				sessions: tempShowSessions.slice(0, 6),
				activeshowSessionOID: _self.activeshowSessionOID
			})), sessionPars.length ? (_self.currentTickets = _self.getFirstLoadSessionParTickets(sessionPars, currentSessionParID), $("#sessionPar-container").html(template.compile(templ2)({
				sessionPars: sessionPars,
				activeSessionParOID: _self.selectedSessionParID
			})), _self.updatePrice(), result.seatPlan && "undefined" != result.seatPlan[0].seatPlanURL && "" != result.seatPlan[0].seatPlanURL && $(".seatPlan-pic img").attr("src", result.seatPlan[0].seatPlanURL)) : _self.loadSessionPairs(_self.sessionID, _self.sessionName)
		}
	}), app.fetch({
		url: _self.API.favour_GetUrl(currentContentId),
		type: "GET",
		dataType: "json",
		success: function(data) {
			data.result.data ? $(".icon-like").addClass("icon-like-hover") : $(".icon-like").removeClass("icon-like-hover")
		}
	}), _self.getEnrollResult(), _self.getCouponResult(), _self.pageEvent(), _self.initBackTopBtn(), _self.listenOnScroll(), _self.initTabNav()
}, ContentController.prototype.initTabNav = function() {
	this.getFixedTabNav().find("a").click(function(e) {
		$(".normal .show_tab li").removeClass("active");
		var lis = $(".fixed-content-nav-container .show_tab li").removeClass("active"),
			li = $(this).parents("li"),
			tabIndex = lis.index(li);
		li.addClass("active"), $(".normal .show_tab li:eq(" + tabIndex + ")").addClass("active")
	}), this.getNormalTabNav().find("a").click(function(e) {
		$(".fixed-content-nav-container .show_tab li").removeClass("active");
		var lis = $(".normal .show_tab li").removeClass("active"),
			li = $(this).parents("li"),
			tabIndex = lis.index(li);
		$(this).parents("li").addClass("active"), $(".fixed-content-nav-container .show_tab li:eq(" + tabIndex + ")").addClass("active")
	})
}, ContentController.prototype.getFixedTabNav = function() {
	return this._fixedTabNav || (this._fixedTabNav = $(".fixed-content-nav-container")), this._fixedTabNav
}, ContentController.prototype.getNormalTabNav = function() {
	return this._normalTabNav || (this._normalTabNav = $(".normal .show_tab")), this._normalTabNav
}, ContentController.prototype.showFixedTabNav = function() {
	this.getFixedTabNav().show()
}, ContentController.prototype.hideFixedTabNav = function() {
	this.getFixedTabNav().hide()
}, ContentController.prototype.isTabNavScrollOut = function() {
	if (!this._noramlTabTop) {
		var nav = this.getNormalTabNav();
		this._noramlTabTop = nav.offset().top + nav.height()
	}
	return (document.documentElement.scrollTop || document.body.scrollTop) > this._noramlTabTop
}, ContentController.prototype.listenOnScroll = function() {
	var _self = this;
	window.onscroll = function() {
		_self.isTabNavScrollOut() ? _self.showFixedTabNav() : _self.hideFixedTabNav()
	}
}, ContentController.prototype.initBackTopBtn = function() {
	$(".back-top").click(function() {
		document.body.scrollTop = 0, document.documentElement.scrollTop = 0
	}), $(".buy-back-top").click(function() {
		document.body.scrollTop = 0, document.documentElement.scrollTop = 0
	})
}, ContentController.prototype.getShowSessionPlanInfo = function(contentOID, showSessionOID, next) {
	app.fetch({
		url: this.API.getShowSessionPlanUrl(contentOID),
		type: "GET",
		dataType: "json",
		data: {
			time: (new Date).getTime(),
			src: "web",
			sessionOID: showSessionOID
		},
		success: function(data) {
			next && "function" == typeof next && next(data.result)
		}
	})
}, ContentController.prototype.getFirstLoadSessionPars = function(sessions, activeshowSessionOID) {
	var _self = this;
	if (sessions && sessions instanceof Array)
		for (var i = 0; i < sessions.length; i++) {
			var session = sessions[i];
			if (session.available && session.seatPlan && session.seatPlan.length) return _self.sessionID = session.showSessionOID, _self.limitation = session.limitation || 6, _self.sessionName = session.sessionName, _self.activeshowSessionOID = activeshowSessionOID == _self.sessionID ? activeshowSessionOID : _self.sessionID, session.seatPlan
		}
	return _self.sessionID = sessions[0].showSessionOID, _self.limitation = sessions[0].limitation, _self.sessionName = sessions[0].sessionName, _self.activeshowSessionOID = _self.sessionID, []
}, ContentController.prototype.filterFirstAvaliableSession = function(sessions) {
	if (sessions && sessions instanceof Array)
		for (var i = 0; i < sessions.length; i++) {
			var session = sessions[i];
			if (session.available) return session
		}
	return sessions && sessions instanceof Array ? sessions[0] : {}
}, ContentController.prototype.getFirstLoadSessionParTickets = function(sessionPars, activeSessionParOID) {
	var defaultSessionPar, _self = this;
	if (sessionPars && sessionPars instanceof Array) {
		for (var i = 0; i < sessionPars.length; i++) {
			var sessionPar = sessionPars[i];
			if (sessionPar.available && sessionPar.tickets && activeSessionParOID == sessionPar.seatPlanOID) return _self.originalPrice = sessionPar.originalPrice || 0, _self.limitation = sessionPar.limitation || 6, _self.selectedSessionParID = sessionPar.seatPlanOID, _self.seatPlanUnitCNName = sessionPar.seatPlanUnit && sessionPar.seatPlanUnit.displayName || "张", sessionPar.tickets || [];
			sessionPar.available && sessionPar.priority ? defaultSessionPar = sessionPar : sessionPar.available && sessionPar.tickets && (defaultSessionPar = defaultSessionPar || sessionPar)
		}
		return defaultSessionPar && (_self.originalPrice = defaultSessionPar.originalPrice || 0, _self.limitation = defaultSessionPar.limitation || 6, _self.selectedSessionParID = defaultSessionPar.seatPlanOID, _self.seatPlanUnitCNName = defaultSessionPar.seatPlanUnit && defaultSessionPar.seatPlanUnit.displayName || "张"), defaultSessionPar && defaultSessionPar.tickets || []
	}
}, ContentController.prototype.getSessionParInfo = function(sessionID, next) {
	app.fetch({
		url: this.API.getShowParBySessionUrl(sessionID),
		type: "GET",
		dataType: "json",
		data: {
			time: (new Date).getTime(),
			src: "web"
		},
		success: function(data) {
			next && "function" == typeof next && next(data.result.data, data.result.token)
		}
	})
}, ContentController.prototype.getEnrollResult = function() {
	var _self = this;
	"2" != currentShowStatusCode && "3" != currentShowStatusCode || "0" != currentShowMinPrice ? "1" == currentShowStatusCode && app.fetch({
		url: _self.API.reservationUrl(currentContentId),
		type: "GET",
		dataType: "json",
		data: {
			time: (new Date).getTime(),
			src: "web",
			cellphone: app.localGet("user_cellphone") || "",
			client: "piaodashi_weixin",
			name: ""
		},
		success: function(data) {
			1106 == data.statusCode && data.result.data && "1" == currentShowStatusCode && currentShowMinPrice || 1106 == data.statusCode && !data.result.data && "1" == currentShowStatusCode && currentShowMinPrice && $("[id=js-prebook-btn]").text("已预约提醒").addClass("opacity_5")
		}
	}) : app.fetch({
		url: _self.API.enrollUrl(currentContentId),
		type: "GET",
		dataType: "json",
		data: {
			time: (new Date).getTime(),
			src: "web",
			cellphone: app.localGet("user_cellphone") || "",
			client: "piaodashi_weixin",
			name: ""
		},
		success: function(data) {
			(1107 != data.statusCode || !data.result.data || "2" != currentShowStatusCode && "3" != currentShowStatusCode || "0" != currentShowMinPrice) && (1107 != data.statusCode || data.result.data || "2" != currentShowStatusCode && "3" != currentShowStatusCode || "0" != currentShowMinPrice || $("[id=js-enroll-btn]").text("已缺货登记").addClass("opacity_5"))
		}
	})
}, ContentController.prototype.getCouponResult = function() {
	function renderCoupon(couponInfo) {
		var cnt;
		"string" == typeof couponInfo ? cnt = '<div class="show-tag coupon">' + couponInfo + "</div>" : couponInfo.isLogin ? ("2" == couponInfo.showStatusCode || "3" == couponInfo.showStatusCode) && couponInfo.showMinPrice > 0 && couponInfo.discount > 0 && ("Cash" == couponInfo.couponType ? cnt = '<div class="show-tag coupon">下单立减' + couponInfo.discount + "</div>" : "Reduction" == couponInfo.couponType && (cnt = '<div class="show-tag coupon">满' + couponInfo.limitation + "减" + couponInfo.discount + "</div>")) : cnt = '<div class="show-tag new-user">新用户注册即送266元红包</div>', cnt && $(".shaow-tag-container").append(cnt)
	}
	var _self = this,
		couponInfo = {
			isLogin: !1
		};
	"2" != currentShowStatusCode && "3" != currentShowStatusCode || !supportCoupon || app.fetch({
		url: _self.API.getCouponDisplayUrl(currentContentId),
		type: "GET",
		dataType: "json",
		data: {
			time: (new Date).getTime(),
			src: "web",
			client: "piaodashi_weixin"
		},
		trySessionFailureDone: function() {
			couponInfo.isLogin = !1, renderCoupon(couponInfo)
		},
		success: function(data) {
			if (200 == data.statusCode) {
				if (data.result.data.msg) return void renderCoupon(data.result.data.msg);
				var couponList = data.result.data || [],
					couponInfo = managerCouponList(couponList);
				couponInfo.isLogin = !0, renderCoupon(couponInfo)
			}
		}
	});
	var managerCouponList = function(couponList) {
		var couponInfo = {};
		couponInfo.discount = 0, couponInfo.limitation = 0, couponInfo.couponType = "", couponInfo.showStatusCode = currentShowStatusCode, couponInfo.showMinPrice = currentShowMinPrice;
		for (var i = couponList.length - 1; i >= 0; i--) {
			var coupon = couponList[i];
			1 == coupon.couponStatus.code && (coupon.discount > couponInfo.discount || coupon.discount == couponInfo.discount && couponInfo.limitation > coupon.limitation) && (couponInfo.discount = coupon.discount, couponInfo.limitation = coupon.limitation, couponInfo.couponType = coupon.couponType)
		}
		return couponInfo
	}
}, ContentController.prototype.hasTicketByNum = function(num) {
	var _self = this;
	return !(!_self.currentTickets[num - 1] || 0 == _self.currentTickets[num - 1].price)
}, ContentController.prototype.calcTotalFeeInfo = function(num) {
	var _self = this,
		salePrice = _self.currentTickets.length ? _self.currentTickets[num - 1].price : 0,
		compensatedPrice = _self.currentTickets.length ? _self.currentTickets[num - 1].compensatedPrice : 0;
	return num && (_self.totalPrice = parseInt(num * salePrice) || 0), _self.unitPrice = salePrice, _self.count = num, _self.compensatedPrice = compensatedPrice || 0, _self.ticketOID = _self.currentTickets.length ? _self.currentTickets[num - 1].ticketOID : "", _self.seller = _self.currentTickets.length ? _self.currentTickets[num - 1].sellerName : "", _self.totalPrice + _self.compensatedPrice
}, ContentController.prototype.generatorPreOrder = function(next) {
	var _self = this;
	if (void 0 !== SensorTrack) {
		var sa_ticket = {
			showOID: currentContentId,
			showName: sa_showName,
			showType: sa_showType,
			showType_displayName: sa_showType_displayName,
			showSessionOID: _self.sessionID,
			showTime: _self.sessionName,
			venue: _self.venueName,
			seatPlanOID: _self.selectedSessionParID,
			originalPrice: _self.originalPrice,
			ticketOID: _self.ticketOID,
			qty: _self.count,
			price: _self.totalPrice,
			compensatedPrice: _self.compensatedPrice
		};
		SensorTrack.pick_ticket(sa_ticket)
	}(new UserController).getNoPaymentOrder(function() {
		app.localSave("t_showOID", currentContentId), app.localSave("token", _self.sessionToken), app.localSave("t_salePrice", _self.totalPrice), app.localSave("t_sessionID", _self.sessionID), app.localSave("t_seat_plan", _self.selectedSessionParID), app.localSave("t_time", _self.sessionName), app.localSave("t_originalPrice", _self.originalPrice), app.localSave("t_seatPlanUnitCNName", _self.seatPlanUnitCNName), app.localSave("t_ticketID", _self.ticketOID), app.localSave("t_count", _self.count), app.localSave("t_compensatedPrice", _self.compensatedPrice), app.localSave("t_seller", _self.seller), app.localSave("sa_showType", sa_showType), app.localSave("sa_showType_displayName", sa_showType_displayName), window.location = "/orderComfirm"
	}, !0)
}, ContentController.prototype.getTickets = function(selectedSessionParID) {
	var _self = this;
	_self.currentSessionPars = _self.currentSessionPars || [];
	for (var i = 0; i < _self.currentSessionPars.length; i++) {
		var sessionPar = _self.currentSessionPars[i];
		if (sessionPar.seatPlanOID == selectedSessionParID) return _self.seatPlanUnitCNName = sessionPar.seatPlanUnit && sessionPar.seatPlanUnit.displayName || "", _self.currentTickets = sessionPar.tickets || []
	}
}, ContentController.prototype.showDialog = function() {
	$(".buy-component").show(function() {
		$(".buy-component .modal-right-dialog").animate({
			right: 0
		}, 500)
	}), $(document.body).css({
		"overflow-y": "hidden"
	})
}, ContentController.prototype.hideDialog = function() {
	$(".buy-component .modal-right-dialog").animate({
		right: -$(".buy-component .modal-right-dialog").width() + "px"
	}, 500, function() {
		$(".buy-component").hide(), $(document.body).css({
			"overflow-y": "auto"
		})
	})
}, ContentController.prototype.loadSessionPairs = function(sessionID, sessionName) {
	var _self = this;
	_self.sessionID = sessionID, _self.sessionName = sessionName, _self.getSessionParInfo(sessionID, function(data, token) {
		var templ = document.getElementById("par-ul").innerHTML;
		_self.currentSessionPars = data, _self.sessionToken = token, _self.currentTickets = _self.getFirstLoadSessionParTickets(data), $("#sessionPar-container").html(template.compile(templ)({
			sessionPars: data,
			activeSessionParOID: _self.selectedSessionParID
		})), _self.updatePrice()
	})
}, ContentController.prototype.updatePrice = function() {
	var total = this.calcTotalFeeInfo(this.currentNum);
	$(".money span.red").text(total - (this.compensatedPrice || 0)), this.compensatedPrice ? ($("#price-tip .price-tip-content").html("(将产生拆单费<a>" + this.compensatedPrice + "</a>元)"), $("#price-tip").show()) : $("#price-tip").hide(), this.showTip && total - this.compensatedPrice > this.originalPrice * this.currentNum ? $("#unit-price-tip").show() : $("#unit-price-tip").hide(), this.seatPlanUnitCNName && $("#unit-price").text(this.unitPrice + "元/" + this.seatPlanUnitCNName)
}, ContentController.prototype.pageEvent = function() {
	var _self = this;
	$(".buy-component .close").click(function() {
		_self.hideDialog()
	}), $(".buy-component .return").click(function() {
		_self.hideDialog()
	}), $("[id=js-buy-btn]").bind("click", function() {
		_self.showDialog()
	}), $(".buy-component .modal-backdrop").click(function() {
		_self.hideDialog()
	}), $("#session-container").on("click", ".list-one", function() {
		$("#session-container .list-one.active").removeClass("active"), $(this).addClass("active");
		var sessionID = $(this).data("id"),
			sessionName = $(this).data("time");
		_self.loadSessionPairs(sessionID, sessionName), $("#show-session-container .list-one.active").removeClass("active"), $('#show-session-container [data-id="' + _self.sessionID + '"]').addClass("active")
	}), $("#show-session-container").on("click", ".list-one", function() {
		_self.showDialog();
		var sessionID = $(this).data("id"),
			sessionName = $(this).data("time");
		if (sessionID)
			if ($("#show-session-container .list-one.active").removeClass("active"), $(this).addClass("active"), _self.sessionID = sessionID, _self.sessionName = sessionName, $("#session-container .list-one.active").removeClass("active"), $('#session-container [data-id="' + _self.sessionID + '"]').addClass("active"), _self.hasCalender) {
				var date = sessionName.replace(/[^0-9:\-\\/\s]*/g, "").replace(/-/g, "/");
				_self.calender.setActiveDate(date, _self.sessionID)
			} else _self.getSessionParInfo(sessionID, function(data, token) {
				var templ = document.getElementById("par-ul").innerHTML;
				_self.currentSessionPars = data, _self.sessionToken = token, _self.currentTickets = _self.getFirstLoadSessionParTickets(data), $("#sessionPar-container").html(template.compile(templ)({
					sessionPars: data,
					activeSessionParOID: _self.selectedSessionParID
				})), _self.updatePrice()
			})
	}), $("#sessionPar-container").on("click", ".list-one", function() {
		$("#sessionPar-container .list-one.active").removeClass("active"), $(this).addClass("active");
		var selectedSessionParID = $(this).data("id");
		_self.originalPrice = $(this).data("price") || 0, _self.selectedSessionParID = selectedSessionParID, _self.getTickets(selectedSessionParID), _self.currentNum = 1, $(".buy-num").val(1), _self.updatePrice()
	}), $("#reduce-one").click(function() {
		var currentNum = _self.currentNum;
		currentNum > 1 && _self.hasTicketByNum(currentNum - 1) ? (currentNum = parseInt($(".buy-num").val()), currentNum = currentNum > 1 ? currentNum - 1 : 1, _self.currentNum = currentNum, $(".buy-num").val(currentNum), _self.updatePrice()) : _self.currentTickets.length || ($(".buy-num").val(1), _self.currentNum = 1)
	}), $("#add-one").click(function() {
		var currentNum = _self.currentNum;
		currentNum < _self.limitation && _self.hasTicketByNum(currentNum + 1) ? (currentNum = parseInt($(".buy-num").val()), currentNum = currentNum < _self.limitation ? currentNum + 1 : _self.limitation, _self.currentNum = currentNum, $(".buy-num").val(currentNum), _self.updatePrice()) : currentNum < _self.limitation && !_self.hasTicketByNum(currentNum + 1) ? app.alertMsg("库存不足！") : (app.alertMsg(_self.currentTickets.length ? "本场次每订单限购" + _self.currentTickets.length + "张!" : "当前日期场次暂时缺票！"), _self.currentTickets.length || ($(".buy-num").val(1), _self.currentNum = 1))
	}), $("#js-preorder-btn").click(function() {
		_self.totalPrice ? _self.generatorPreOrder() : app.alertMsg("当前日期场次暂时缺票！")
	}), $(".picOpen").click(function() {
		$(".seatPlan-pic").show(), $(".picOpen").hide(), $(".picClose").show().css("display", "inline-block")
	}), $(".picClose").click(function() {
		$(".seatPlan-pic").hide(), $(".picOpen").show().css("display", "inline-block"), $(".picClose").hide()
	}), $(".icon-like").click(function() {
		var _like = this;
		app.fetch({
			url: _self.API.favourUrl(currentContentId),
			type: "PUT",
			dataType: "json",
			success: function(data) {
				data.result.data ? ($(_like).removeClass("icon-like").addClass("icon-like-hover"), $("#favourNum").text(parseInt($("#favourNum").text()) + 1)) : ($(_like).removeClass("icon-like-hover").addClass("icon-like"), $("#favourNum").text(parseInt($("#favourNum").text()) - 1))
			},
			authorizationLogin: !0
		})
	}), $("[id=js-enroll-btn]").click(function(e) {
		if (!$(this).hasClass("opacity_5")) {
			app.fetch({
				url: _self.API.enrollUrl(currentContentId),
				type: "POST",
				dataType: "json",
				data: {
					time: (new Date).getTime(),
					src: "web",
					cellphone: app.localGet("user_cellphone") || "",
					client: "piaodashi_weixin",
					name: ""
				},
				success: function(data) {
					200 == data.statusCode ? ($("[id=js-enroll-btn]").text("已缺货登记").addClass("opacity_5"), app.alertMsg("我们将在卖家报价后第一时间通知您")) : console.log("缺货登记失败")
				},
				authorizationLogin: !0
			})
		}
	}), $("[id=js-prebook-btn]").click(function(e) {
		if (!$(this).hasClass("opacity_5")) {
			app.fetch({
				url: _self.API.reservationUrl(currentContentId),
				type: "POST",
				dataType: "json",
				data: {
					time: (new Date).getTime(),
					src: "web",
					cellphone: app.localGet("user_cellphone") || "",
					client: "piaodashi_weixin",
					name: ""
				},
				success: function(data) {
					200 == data.statusCode ? ($("[id=js-prebook-btn]").text("已预约提醒").addClass("opacity_5"), app.alertMsg("我们将在演出确定后第一时间通知您！")) : console.log("预约登记失败")
				},
				authorizationLogin: !0
			})
		}
	}), $("#js-seatApp-dl").click(function() {
		$(".seat-component.seat-dl").show()
	}), $(".seat-component .modal-backdrop").click(function() {
		$(".seat-component").hide()
	}), $(".seat-component .close_icon").click(function() {
		$(".seat-component").hide()
	}), $("#js-seatPic-btn").click(function() {
		$(".seat-component.seat-pic").show()
	})
}, ContentController.prototype.loadProperties = function() {
	var _self = this;
	app.fetch({
		url: this.API.propertiesUrl(),
		type: "GET",
		data: {
			time: (new Date).getTime(),
			src: "web"
		},
		success: function(data) {
			_self.showTip = 1 == (data.result.data && data.result.data.guaranteeFeeSwitch)
		}
	})
};
var zhiManager = getzhiSDKInstance();
zhiManager.on("load", function() {
	zhiManager.initBtnDOM()
}), zhiManager.set("color", "E9474D"), zhiManager.set("telFlag", !0), zhiManager.set("title", "欢迎咨询-摩天轮票务客服"), zhiManager.set("location", 1), zhiManager.set("horizontal", 0), zhiManager.set("vertical", 50), zhiManager.set("size", {
	width: 360,
	height: 540
}), zhiManager.set("powered", !1), $(function() {
	function isNotNUll(obj) {
		return !!obj && "null" != obj && "undefined" != obj
	}
	$("#triggerIM").on("click", function() {
		if (isNotNUll(app.localGet("user_cellphone"))) {
			var cellphone = app.localGet("user_cellphone"),
				customObj = {
					tel: cellphone
				};
			zhiManager.set("userinfo", customObj), $("#zhike").click()
		} else $("#js-open-login").click()
	})
}), ModuleLoader.prototype.register = function(pageRoute, moduleName) {}, ModuleLoader.prototype.start = function() {
	var _self = this,
		route = window.location.pathname,
		registerModules = _self.registerModules,
		routeModuleLoaded = !1;
	_self.CommonModule = _self.CommonModule || new CommonController, _self.CommonModule.init();
	for (var i = 0; i < registerModules.length; i++) {
		var module = registerModules[i];
		if (route && "" !== registerModules[i].controller && void 0 !== registerModules[i].routeRegExp && registerModules[i].routeRegExp.test(route) && !_self.pageModule) try {
			_self.pageModule = eval("(new " + registerModules[i].controller + "())"), _self.pageModule.init(), routeModuleLoaded = !0
		} catch (error) {
			return void console.log(error)
		}
	}
	if (!routeModuleLoaded) try {
		_self.pageModule = eval("(new " + _self.defaultModule.controller + "())"), _self.pageModule.init(), routeModuleLoaded = !0
	} catch (error) {
		console.log(error)
	}
};
var privateModuleLoader;
$(document).ready(function() {
	privateModuleLoader = privateModuleLoader || new ModuleLoader, privateModuleLoader.start()
});