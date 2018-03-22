function UserCenterController() {
	this.API = {
		getNoPaymentOrderURL: "/prodapi/order/unpaid/000",
		getMyOrderURL: "/prodapi/client/000/orderWithItem",
		getFavShowsURL: "/showapi/pub/favour_show/",
		getAllAddressURL: "/prodapi/client/000/address",
		getFavourUrl: function(id) {
			return "/prodapi/show/" + id + "/client/000/favour?src=web&time=" + (new Date).getTime()
		},
		postCouponUrl: "/couponapi/coupons?src=web",
		getCouponUrl: "/couponapi/coupons?offset=0&length=1000&clientOID=000"
	}, this.navData = {
		allOrderCount: "",
		toPayOrderCount: "",
		coupons_use_count: "",
		favSHow_count: ""
	}, this.curPathName = "", this.couponData = {
		coupons_use_data: [],
		coupons_expire_data: [],
		coupons_unuse_data: [],
		coupons_used_data: [],
		coupons_all_count: ""
	}, this.orderSwitchBar = {
		statusStr: ""
	}, this.pageData = {
		totalPage: 0,
		currentPage: 0,
		totalCount: 0
	}, this.searchCon = ""
}

function PayController() {
	this.orderId = orderId, this.buyerInfo = null, this.order = null, this.reserveTime = 6e5, this.reserveTimeFormat = this.getReserveFormat(this.reserveTime), this.orderStatus = {}, this.paymentChecktimeId = null, this.paytimeInfo = "", this.API = {
		getOrderDetailUrl: function(orderId) {
			return "/prodapi/orderWithItem/transaction/" + orderId
		},
		getOrderReserveTimeUrl: function(transactionOID) {
			return "/prodapi/order/reserve_time?transactionOID=" + transactionOID
		},
		getPaymentUrl: function(orderId) {
			return "/prodapi/order/payment/" + orderId
		},
		getWXQRUrl: function(orderId) {
			return "/payapi/wx/QRCode?transactionOID=" + orderId
		},
		getAliPayUrl: function(orderId) {
			return "/payapi/alipay/counter/?transactionOID=" + orderId + "&src=web&time=" + (new Date).getTime()
		}
	}
}

function PaidController() {
	this.transactionOID = tranId, this.API = {
		getOrderDetailUrl: function(transactionOID) {
			return "/prodapi/orderWithItem/transaction/" + transactionOID
		}
	}
}

function OrderDetailController() {
	this.API = {
		getNoPaymentOrderURL: "/prodapi/order/unpaid/000",
		getMyOrderURL: "/prodapi/client/000/orderWithItem",
		getAllCouponURL: "/prodapi/client/000/coupon",
		getFavShowsURL: "/showapi/pub/favour_show/",
		getAllAddressURL: "/prodapi/client/000/address",
		getOrderByIdURL: function(oid) {
			return "/prodapi/orderWithItem/transaction/" + oid + "?ver=3.0.0&src=web"
		},
		getCancelOrderURL: function(tid, oid) {
			return "/prodapi/order/transaction/" + tid + "/cancel?src=web&userOID=000&orderOID=" + oid
		},
		getReserveTimeURL: function(tid) {
			return "/prodapi/order/reserve_time?transactionOID=" + tid + "&src=web&time=" + (new Date).getTime()
		},
		getOrderPayStatusURL: function(oid) {
			return "/prodapi/order/payment/" + oid + "?src=web&time=" + (new Date).getTime()
		},
		getOverdueSubmitURL: function(oid) {
			return "/prodapi/order/" + oid + "/overdue/submit?src=web&time=" + (new Date).getTime()
		}
	}, this.navData = {
		allOrderCount: "",
		coupons_use_count: "",
		favSHow_count: ""
	}, this.curOrderId = "", this.orderDetailData = []
}

function AboutController() {
	this.tar = tar || "", this.topics = [{
		code: "aboutus",
		name: "关于我们"
	}, {
		code: "contact",
		name: "联系我们"
	}, {
		code: "fankui",
		name: "意见反馈"
	}], this.API = {
		getCommentsUrl: function(comval) {
			return "/prodapi/client/000/comment?comment=" + encodeURIComponent(comval)
		}
	}
}

function ComfirmController() {
	this.expresses = [], this.express = {}, this.delivery = "", this.needIdCard = !1, this.idCardNum = "", this.shipment = {}, this.shipment.name = app.localGet("shipment_name"), this.shipment.telphone = app.localGet("shipment_telphone"), this.remark = "", this.addresses = [], this.address = {}, this.orderSaving = !1, this.reqAgreementStatus = !1, this.agree_check_status = !0, this.guarantee_money_switch = !1, this.priceDetail = [], this.API = {
		getPreOrderUrl: function(showId, compensatedPrice, originalPrice, price, sessionId, token, ticketID, qty) {
			return "/orderapi/preorder?show=" + showId + "&compensatedPrice=" + compensatedPrice + "&originalPrice=" + originalPrice + "&user=000&price=" + price + "&session=" + sessionId + "&token=" + token + "&ticketOID=" + ticketID + "&qty=" + qty
		},
		getCouponUrl: function(price, showOID) {
			return "/prodapi/client/000/matched_coupon?price=" + price + "&showOID=" + showOID
		},
		getAddressUrl: function() {
			return "/prodapi/client/000/address?"
		},
		getOrderPostUrl: function(token) {
			return "/orderapi/v1_1/order?src=web&token=" + token
		},
		getUserAgreementUrl: function(agreementOID) {
			return "/prodapi/orderAgreement/" + agreementOID
		},
		getDeliverfeeUrl: function(showId, locationId) {
			return "/orderapi/deliverfee_template/deliver_templates?showOID=" + showId + "&locationOID=" + locationId
		}
	}
}

function AddressComponent() {
	this.$Address = null, this.container = "", this.defaultAddress = {
		location: {
			locationOID: "310101",
			province: "上海市",
			city: "市辖区",
			district: "黄浦区"
		},
		addressOID: "",
		cellphone: "",
		clientName: "",
		clientOID: "",
		isDefault: !1,
		locationOID: "310101",
		detailAddress: ""
	}, this.address = {}, this.callback = {
		save: null,
		cancel: null
	}, this.addrSaving = !1, this.API = {
		getAddressUrl: function() {
			return "/prodapi/client/000/address"
		},
		getProvinceUrl: function() {
			return "/prodapi/pub/province"
		},
		getCityUrl: function(provinceCode) {
			return "/prodapi/pub/province/" + provinceCode + "/city"
		},
		getDistrictUrl: function(provinceCode, cityCode) {
			return "/prodapi/pub/province/" + provinceCode + "/city/" + cityCode + "/district"
		}
	}
}

function AddressMgr() {
	this.$AddressMgr = null, this.container = "", this.callback = {
		output: null
	}, this.cfg = {
		setDefaultAddressBtn: !1
	}, this.addresses = [], this.address = {}, this.API = {
		getAddressUrl: function() {
			return "/prodapi/client/000/address"
		},
		deleteAddressUrl: function(addressOID) {
			return "/prodapi/client/000/address?id=" + addressOID + "&src=web&time=" + (new Date).getTime()
		}
	}
}

function HelpController() {
	this.tar = tar || "", this.topics = [{
		code: "yczt",
		name: "演出状态"
	}, {
		code: "orderstyle",
		name: "订购方式"
	}, {
		code: "jg",
		name: "关于价格"
	}, {
		code: "sl",
		name: "数量与团购"
	}, {
		code: "xz",
		name: "关于座位"
	}, {
		code: "by",
		name: "是否包邮"
	}, {
		code: "pay",
		name: "支付方式"
	}, {
		code: "song",
		name: "配送方式"
	}, {
		code: "change",
		name: "退换票"
	}, {
		code: "wppf",
		name: "无票赔付"
	}, {
		code: "refund",
		name: "退款"
	}, {
		code: "tip",
		name: "订票提示"
	}]
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
UserCenterController.prototype.getAllOrder = function(page, status, keywords) {
	var _self = this;
	$("#loading_box").show(), app.fetch({
		url: this.API.getMyOrderURL,
		type: "GET",
		dataType: "json",
		data: {
			offset: 10 * page || 0,
			length: 10,
			src: "web",
			time: (new Date).getTime(),
			process: status || "",
			showName: keywords || ""
		},
		success: function(data) {
			$("#loading_box").hide(), _self.pageData.totalCount = data.result.pagination && data.result.pagination.count || 0, _self.pageData.totalPage = Math.ceil(_self.pageData.totalCount / 10) || 0;
			var tempData = {};
			tempData.ordersData = data.result.data || [], tempData.pageData = _self.pageData;
			var user_orderList_html = template("user_order_listTpl", tempData);
			$("#user_list_container").html(user_orderList_html), _self.loadImg()
		},
		authorizationLogin: !0
	})
}, UserCenterController.prototype.init = function(page, status) {
	switch (template.config("openTag", "<$"), template.config("closeTag", "$>"), curUrl) {
		case "order":
			this.curPathName = "我的订单", SensorTrack.click_user_service({
				service: "我的订单"
			}), this.getAllOrder();
			break;
		case "coupon":
			this.curPathName = "我的优惠券", SensorTrack.click_user_service({
				service: "我的抵用券"
			}), this.getUseCoupon();
			break;
		case "favourite":
			this.curPathName = "我想看的演出", SensorTrack.click_user_service({
				service: "想看的演出"
			}), this.getFavShows();
			break;
		case "address":
			this.curPathName = "收货地址管理", SensorTrack.click_user_service({
				service: "地址管理"
			}), this.getAllAddress();
			break;
		case "orderdetail":
			this.curPathName, this.getAllOrder()
	}
	$("#curPathName").html(this.curPathName), this.getAllNavCount(), this.getToPayOrderCount(), this.pageEvent()
}, UserCenterController.prototype.loadImg = function() {
	$("img[data-src]").each(function(index) {
		var _self = this;
		if ("" != $(_self).data("src") && "undefined" != $(_self).data("src")) {
			var img = document.createElement("img");
			img.src = $(_self).data("src"), img.onload = function() {
				_self.src = $(_self).data("src"), img = null
			}
		}
	})
}, UserCenterController.prototype.pageEvent = function(page, status) {
	var _self = this;
	$(document).ready(function() {
		$("#order_statusBar_container li").click(function() {
			_self.searchCon = "", $("#order_statusBar_container li").removeClass("order_tag_act"), $(this).addClass("order_tag_act"), $("#od_search_input").val(""), _self.orderSwitchBar.statusStr = $(this).data("tagval"), _self.getAllOrder(0, _self.orderSwitchBar.statusStr), _self.getToPayOrderCount()
		}), $("#od_search_btn").click(function() {
			_self.searchCon = $("#od_search_input").val(), _self.getAllOrder(0, _self.orderSwitchBar.statusStr, _self.searchCon)
		}), $("#user_list_container").on("click", ".orderPageEvent", function() {
			var curPage = $(this).data("page.97a2a2cf");
			_self.goToPage(curPage)
		}), $("#addCoupon_Btn").click(function() {
			_self.addCoupon()
		}), $("#user_fav_container").on("click", ".icon-c-list-favourite-active", function() {
			_self.cancelFavour($(this).data("fav"))
		}), $("#user_fav_container").on("click", ".orderPageEvent", function() {
			var curPage = $(this).data("page.97a2a2cf");
			_self.goToFavPage(curPage)
		}), $(document).delegate("#coupon_statusBar_container li span", "click", function() {
			if (!$(this).hasClass("active")) {
				var currentClass = $(this).attr("class");
				"couponuse" == currentClass ? _self.getUseCoupon() : "couponused" == currentClass ? _self.getUsedCoupon() : _self.getExpireCoupon()
			}
		}), $(document).delegate(".coupon_right span", "click", function() {
			var couponOID = $(this).data("couponoid"),
				showOID = $(this).data("showoid");
			location.href = showOID ? "/content/" + showOID : "/coupon/shows/" + couponOID
		})
	})
}, UserCenterController.prototype.getAllNavCount = function(page, status) {
	var _self = this;
	app.fetch({
		url: this.API.getMyOrderURL,
		type: "GET",
		dataType: "json",
		data: {
			offset: 10 * page || 0,
			length: 10,
			src: "web",
			time: (new Date).getTime()
		},
		success: function(data) {
			_self.navData.allOrderCount = data.result.pagination && data.result.pagination.count > 0 ? data.result.pagination.count + "个" : "", $("#nav_order_count").html(_self.navData.allOrderCount)
		},
		authorizationLogin: !0
	}), app.fetch({
		url: this.API.getCouponUrl,
		type: "GET",
		dataType: "json",
		data: {
			src: "web",
			time: (new Date).getTime(),
			couponStatusCode: "1"
		},
		success: function(data) {
			var count = 0;
			data.result.data && $.each(data.result.data, function(index, d) {
				!d || 1 != d.couponStatus.code && 4 != d.couponStatus.code || count++
			}), _self.navData.coupons_use_count = count > 0 ? count + "张" : "", $("#nav_coupon_count").html(_self.navData.coupons_use_count)
		},
		authorizationLogin: !0
	}), app.fetch({
		url: this.API.getFavShowsURL,
		type: "GET",
		dataType: "json",
		data: {
			offset: 10 * page || 0,
			length: 10,
			src: "web",
			time: (new Date).getTime(),
			userOID: 0
		},
		success: function(data) {
			_self.navData.favSHow_count = data.result.pagination && data.result.pagination.count > 0 ? data.result.pagination.count + "个" : "", $("#nav_favourite_count").html(_self.navData.favSHow_count)
		},
		authorizationLogin: !0
	})
}, UserCenterController.prototype.getToPayOrderCount = function(page, status) {
	var _self = this;
	app.fetch({
		url: this.API.getMyOrderURL,
		type: "GET",
		dataType: "json",
		data: {
			offset: 10 * page || 0,
			length: 10,
			src: "web",
			time: (new Date).getTime(),
			process: "1"
		},
		success: function(data) {
			_self.navData.toPayOrderCount = data.result.pagination && data.result.pagination.count > 0 ? data.result.pagination.count : "", $("#toPayCountBar").html(_self.navData.toPayOrderCount)
		},
		authorizationLogin: !0
	})
}, UserCenterController.prototype.getUseCoupon = function(page) {
	var _self = this;
	_self.couponData.coupons_use_data = [], _self.couponData.coupons_unuse_data = [], $("#loading_box").show(), app.fetch({
		url: this.API.getCouponUrl,
		type: "GET",
		dataType: "json",
		data: {
			src: "web",
			time: (new Date).getTime(),
			couponStatusCode: "1"
		},
		success: function(data) {
			_self.tempData = {};
			data.result;
			if (data.result.data && data.result.data.length > 0) {
				$.each(data.result.data, function(index, d) {
					d && !d.usable ? _self.couponData.coupons_unuse_data.push(d) : _self.couponData.coupons_use_data.push(d)
				})
			}
			_self.couponData.coupons_use_count = _self.couponData.coupons_use_data.length || "", _self.couponData.coupons_unuse_count = _self.couponData.coupons_unuse_data.length;
			var user_fav_html = template("user_coupon_couponTpl", _self.couponData);
			$("#user_coupon_container").html(user_fav_html), $("#couponuse").show(), $(".couponuse").addClass("active"), $("#loading_box").hide()
		},
		authorizationLogin: !0
	})
}, UserCenterController.prototype.getUsedCoupon = function(page) {
	var _self = this;
	_self.couponData.coupons_used_data = [], $("#loading_box").show(), app.fetch({
		url: this.API.getCouponUrl,
		type: "GET",
		dataType: "json",
		data: {
			src: "web",
			time: (new Date).getTime(),
			couponStatusCode: "2"
		},
		success: function(data) {
			_self.tempData = {};
			data.result;
			if (data.result.data && data.result.data.length > 0) {
				$.each(data.result.data, function(index, d) {
					d && _self.couponData.coupons_used_data.push(d)
				})
			}
			_self.couponData.coupons_used_count = _self.couponData.coupons_used_data.length;
			var user_fav_html = template("user_coupon_couponTpl", _self.couponData);
			$("#user_coupon_container").html(user_fav_html), $("#couponused").show(), $(".couponused").addClass("active"), $("#loading_box").hide()
		},
		authorizationLogin: !0
	})
}, UserCenterController.prototype.getExpireCoupon = function(page) {
	var _self = this;
	_self.couponData.coupons_expire_data = [], $("#loading_box").show(), app.fetch({
		url: this.API.getCouponUrl,
		type: "GET",
		dataType: "json",
		data: {
			src: "web",
			time: (new Date).getTime(),
			couponStatusCode: "3"
		},
		success: function(data) {
			_self.tempData = {};
			data.result;
			if (data.result.data && data.result.data.length > 0) {
				$.each(data.result.data, function(index, d) {
					d && _self.couponData.coupons_expire_data.push(d)
				})
			}
			_self.couponData.coupons_expire_count = _self.couponData.coupons_expire_data.length;
			var user_fav_html = template("user_coupon_couponTpl", _self.couponData);
			$("#user_coupon_container").html(user_fav_html), $("#couponexpire").show(), $(".couponexpire").addClass("active"), $("#loading_box").hide()
		},
		authorizationLogin: !0
	})
}, UserCenterController.prototype.addCoupon = function() {
	var _self = this;
	_self.couponCode = $("#couponCodeVal").val(), _self.couponCode && 6 == _self.couponCode.length ? ($("#loading_box").show(), app.fetch({
		url: this.API.postCouponUrl,
		type: "POST",
		dataType: "json",
		data: {
			user: 0,
			code: _self.couponCode
		},
		success: function(data) {
			$("#loading_box").hide(), 200 == data.statusCode ? (app.alertMsg("优惠券添加成功"), _self.getUseCoupon()) : app.alertMsg(data.comments)
		},
		authorizationLogin: !0
	})) : app.alertMsg("填写正确的优惠码")
}, UserCenterController.prototype.getFavShows = function(page) {
	var _self = this;
	$("#loading_box").show(), app.fetch({
		url: this.API.getFavShowsURL,
		type: "GET",
		dataType: "json",
		data: {
			offset: 6 * page || 0,
			length: 6,
			src: "web",
			time: (new Date).getTime(),
			userOID: 0
		},
		success: function(data) {
			$("#loading_box").hide(), _self.pageData.totalCount = data.result.pagination && data.result.pagination.count || 0, _self.pageData.totalPage = Math.ceil(_self.pageData.totalCount / 6) || 0, console.log(_self.pageData), _self.tempData = {};
			var tempData = data.result;
			tempData.pageData = _self.pageData;
			var user_fav_html = template("user_fav_showsTpl", tempData);
			$("#user_fav_container").html(user_fav_html), _self.loadImg()
		},
		authorizationLogin: !0
	})
}, UserCenterController.prototype.cancelFavour = function(showId) {
	var _self = this;
	app.fetch({
		url: _self.API.getFavourUrl(showId),
		type: "PUT",
		dataType: "json",
		success: function(data) {
			data.result.data || _self.getFavShows()
		}
	})
}, UserCenterController.prototype.getAllAddress = function(page) {
	var _self = this;
	app.fetch({
		url: this.API.getAllAddressURL,
		type: "GET",
		dataType: "json",
		data: {
			src: "web",
			time: (new Date).getTime()
		},
		success: function(data) {
			_self.tempData = {};
			var tempData = data.result;
			template("user_addr_addrTpl", tempData);
			(new AddressMgr).init("#compont-address-container", {
				setDefaultAddressBtn: !0
			}, null)
		},
		authorizationLogin: !0
	})
}, UserCenterController.prototype.goToPage = function(curPage) {
	var _self = this;
	_self.pageData.currentPage = curPage, _self.getAllOrder(_self.pageData.currentPage, _self.orderSwitchBar.statusStr, _self.searchCon || "")
}, UserCenterController.prototype.goToFavPage = function(curPage) {
	var _self = this;
	_self.pageData.currentPage = curPage, _self.getFavShows(_self.pageData.currentPage)
}, PayController.prototype.init = function() {
	var _self = this;
	_self.showLoading(), _self.getOrderDetailInfo(_self.orderId, function(result) {
		_self.buyerInfo = result.data, _self.order = result.data.items[0], _self.order.orderNumber = result.data.orderNumber, _self.order.totalPrice = result.data.total, _self.orderStatus = result.data.orderStatus, 12 == _self.orderStatus.code && (console.log("待补差价"), _self.order.totalPrice = result.data.total - result.data.payTotal), _self.renderOrderDetailInfo(), _self.hideLoading(), _self.pageEvent()
	}), _self.getOrderReserveTime(_self.orderId, function(result) {
		_self.paytimeInfo = result.data, _self.reserveTime = result.time, _self.reserveTimeFormat = _self.getReserveFormat(_self.reserveTime), _self.paymentChecktime()
	})
}, PayController.prototype.getOrderDetailInfo = function(orderId, next) {
	app.fetch({
		url: this.API.getOrderDetailUrl(orderId),
		type: "GET",
		dataType: "json",
		data: {
			time: (new Date).getTime(),
			src: "web"
		},
		success: function(data) {
			next && "function" == typeof next && next(data.result)
		},
		authorizationLogin: !0
	})
}, PayController.prototype.renderOrderDetailInfo = function() {
	var _self = this,
		order = _self.order,
		buyerInfo = _self.buyerInfo,
		orderStatus = _self.orderStatus,
		reserveTimeFormat = _self.reserveTimeFormat,
		paytimeInfo = _self.paytimeInfo;
	template.config("openTag", "<$"), template.config("closeTag", "$>");
	var temp_pay_top = document.getElementById("pay-top-ul").innerHTML,
		temp_pay_middle = document.getElementById("pay-middle-ul").innerHTML;
	$("#pay-top-container").html(template.compile(temp_pay_top)({
		order: order,
		buyerInfo: buyerInfo
	})), $("#pay-middle-container").html(template.compile(temp_pay_middle)({
		order: order,
		reserveTimeFormat: reserveTimeFormat,
		orderStatus: orderStatus,
		paytimeInfo: paytimeInfo
	})), _self.getWXQR(_self.orderId, function(result) {
		$("#ewmimg").attr("src", result)
	}), $("#js_zfblink a").attr("href", _self.API.getAliPayUrl(_self.orderId))
}, PayController.prototype.getReserveFormat = function(clTime) {
	var minute = parseInt(clTime / 6e4),
		leftMinuteTime = clTime % 6e4,
		second = parseInt(leftMinuteTime / 1e3);
	return second < 10 ? minute + ":0" + second : minute + ":" + second
}, PayController.prototype.getOrderReserveTime = function(transactionOID, next) {
	app.fetch({
		url: this.API.getOrderReserveTimeUrl(transactionOID),
		type: "GET",
		dataType: "json",
		data: {
			time: (new Date).getTime(),
			src: "web"
		},
		success: function(data) {
			next && "function" == typeof next && next(data.result)
		}
	})
}, PayController.prototype.paymentChecktime = function() {
	var _self = this;
	_self.paymentChecktimeId = setInterval(function() {
		_self.orderStatus.code && 12 == _self.orderStatus.code || (_self.reserveTime -= 1e3, _self.reserveTimeFormat = _self.getReserveFormat(_self.reserveTime), _self.reserveTime < 0 && (_self.reserveTime = 0, _self.reserveTimeFormat = "00:00"), $("#reserveTime").text(_self.reserveTimeFormat)), _self.getPayment(_self.order && _self.order.orderOID || "000", function(data) {
			200 == data.statusCode && ("Paid" !== data.result.data && "Canceled" !== data.result.data && "Compensated" !== data.result.data && "Ticket_Allocating" !== data.result.data || (clearInterval(_self.paymentChecktimeId), window.location.href = location.protocol + "//" + window.location.host + "/paying/" + _self.orderId, console.log("进入支付分支---成功或失败页")))
		})
	}, 1e3)
}, PayController.prototype.getPayment = function(transactionOID, next) {
	app.fetch({
		url: this.API.getPaymentUrl(transactionOID),
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
}, PayController.prototype.getWXQR = function(orderId, next) {
	app.fetch({
		url: this.API.getWXQRUrl(orderId),
		type: "GET",
		data: {
			time: (new Date).getTime(),
			src: "web"
		},
		success: function(data) {
			next && "function" == typeof next && next(data)
		}
	})
}, PayController.prototype.showLoading = function() {
	$("div.modal-loading").show()
}, PayController.prototype.hideLoading = function() {
	$("div.modal-loading").hide()
}, PayController.prototype.pageEvent = function() {
	var _self = this;
	$("#js_wxzf").click(function() {
		if ($("#wxzf").show(), "undefined" != typeof SensorTrack) {
			var sa_pay = {
				orderOID: _self.order && _self.order.orderOID,
				orderNumber: _self.order && _self.order.orderNumber,
				total: _self.order.totalPrice,
				transactionOID: _self.orderId,
				ticketOID: _self.order && _self.order.ticketOID,
				showOID: _self.order && _self.order.showOID,
				paymentMethod_code: 12,
				paymentMethod_displayName: "微信网站支付"
			};
			SensorTrack.confirm_pay(sa_pay)
		}
	}), $("#wxzf .common-modal-back").click(function() {
		$("#wxzf").hide()
	}), $("#wxzf .cancel").click(function() {
		$("#wxzf").hide()
	}), $("#js_zfblink").click(function() {
		if ("undefined" != typeof SensorTrack) {
			var sa_pay = {
				orderOID: _self.order && _self.order.orderOID,
				orderNumber: _self.order && _self.order.orderNumber,
				total: _self.order.totalPrice,
				transactionOID: _self.orderId,
				ticketOID: _self.order && _self.order.ticketOID,
				showOID: _self.order && _self.order.showOID,
				paymentMethod: "AliPay",
				paymentMethod_code: 2,
				paymentMethod_displayName: "支付宝"
			};
			SensorTrack.confirm_pay(sa_pay)
		}
	})
}, PaidController.prototype.init = function() {
	var _self = this;
	_self.getOrderDetailInfo(_self.transactionOID, function(result) {
		template.config("openTag", "<$"), template.config("closeTag", "$>");
		var temp_order = document.getElementById("order-ul").innerHTML,
			temp_tip = document.getElementById("tip-ul").innerHTML;
		$("#order-container").html(template.compile(temp_order)({
			order: result.data
		})), $("#tip-container").html(template.compile(temp_tip)({
			order: result.data
		})), 4 != result.data.orderStatus.code && 13 != result.data.orderStatus.code && 20 != result.data.orderStatus.code && (window.location.href = location.protocol + "//" + window.location.host + "/orderdetail/" + _self.transactionOID), window.TDH5SDK && window.TDH5SDK.iap && TDH5SDK.iap.currencyPurchase(result.data.orderOID, 100 * result.data.payTotal, "CNY", result.data.payment && result.data.payment.name || "", [], result.data.qty || 0)
	}), _self.pageEvent()
}, PaidController.prototype.getOrderDetailInfo = function(tranId, next) {
	app.fetch({
		url: this.API.getOrderDetailUrl(tranId),
		type: "GET",
		dataType: "json",
		data: {
			time: (new Date).getTime(),
			src: "web"
		},
		success: function(data) {
			next && "function" == typeof next && next(data.result)
		},
		authorizationLogin: !0
	})
}, PaidController.prototype.pageEvent = function() {
	var _self = this;
	$("#tip-container").delegate("#backToIndex", "click", function() {
		window.location.href = location.protocol + "//" + window.location.host
	}), $("#tip-container").delegate("#lookOrder", "click", function() {
		window.location.href = location.protocol + "//" + window.location.host + "/orderdetail/" + _self.transactionOID
	})
}, OrderDetailController.prototype.init = function() {
	this.getOrderById(transID)
}, OrderDetailController.prototype.getOrderById = function(tid) {
	var _self = this;
	template.config("openTag", "<$"), template.config("closeTag", "$>"), app.fetch({
		url: this.API.getOrderByIdURL(tid),
		type: "GET",
		dataType: "json",
		data: {
			src: "web",
			time: (new Date).getTime()
		},
		success: function(data) {
			var tempData = {};
			tempData.orderDetail = data.result.data, _self.curOrderId = data.result.data && data.result.data.orderOID, _self.orderDetailData = data.result.data;
			var user_orderList_html = template("orderDetailTpl", tempData);
			$("#orderDetailContainer").html(user_orderList_html), 1 == data.result.data.orderStatus.code && _self.getPayReserveTime(), _self.getAllNavCount();
			var seller = _self.orderDetailData.items[0].ticket.sellerOID,
				certificateStatus = _self.orderDetailData.items[0].ticket.sellerCertificationsAuthStatus.code;
			new SellerCertificate("#orderDetailContainer .certificate-container", seller, certificateStatus).init()
		},
		authorizationLogin: !0
	}), _self.pageEvent()
}, OrderDetailController.prototype.cancelOrder = function(tid, oid) {
	var _self = this;
	$("#loading_box").show(), app.fetch({
		url: this.API.getCancelOrderURL(transID, _self.curOrderId),
		type: "PUT",
		dataType: "json",
		success: function(data) {
			var order = _self.orderDetailData;
			if ("undefined" != typeof SensorTrack) {
				var sa_order = {
					orderOID: order.orderOID,
					orderNumber: order.orderNumber,
					total: order.total,
					transactionOID: order.transactions[0] && order.transactions[0].transactionOID || "",
					showSessionOID: order.items[0].showSessionOID,
					showTime: order.items[0].showTime,
					seatPlanOID: order.items[0].seatPlanOID,
					originalPrice: order.items[0].originalPrice,
					ticketOID: order.items[0].ticketOID,
					qty: order.items[0].qty,
					price: order.items[0].price,
					compensatedPrice: order.items[0].compensatedPrice,
					showOID: order.showOID,
					showName: order.items[0].showName,
					venue: order.items[0].venueName,
					comments: order.comments || ""
				};
				SensorTrack.cancel_order(sa_order)
			}
			_self.getOrderById(transID), $("#loading_box").hide(), $("#cancelOrder_component").hide()
		},
		authorizationLogin: !0
	})
}, OrderDetailController.prototype.pageEvent = function() {
	var _self = this;
	$(document).ready(function() {
		$("body").on("mouseenter", "#cdf_text", function() {
			$("#cdf_noteBox").show()
		}).on("mouseleave", "#cdf_text", function() {
			$("#cdf_noteBox").hide()
		}), $("#orderCancel_btn").click(function() {
			_self.cancelOrder()
		}), _self.urgeFlag = !1, $("body").on("click", ".urgable", function() {
			_self.urgeFlag || (_self.urgeFlag = !0, app.fetch({
				url: _self.API.getOverdueSubmitURL(_self.curOrderId),
				type: "POST",
				dataType: "json",
				data: {
					src: "web",
					time: (new Date).getTime()
				},
				success: function(data) {
					_self.urgeFlag = !1, $(".urgable").hide(), $(".urged").show(), $("#detail_note").text("您已提交催票申请，客服人员会尽快为您处理")
				},
				authorizationLogin: !0
			}))
		})
	})
}, OrderDetailController.prototype.getAllNavCount = function(page, status) {
	var _self = this;
	app.fetch({
		url: this.API.getMyOrderURL,
		type: "GET",
		dataType: "json",
		data: {
			offset: 10 * page || 0,
			length: 10,
			src: "web",
			time: (new Date).getTime()
		},
		success: function(data) {
			_self.navData.allOrderCount = data.result.pagination && data.result.pagination.count > 0 ? data.result.pagination.count + "个" : "", $("#nav_order_count").text(_self.navData.allOrderCount)
		},
		authorizationLogin: !0
	}), app.fetch({
		url: this.API.getAllCouponURL,
		type: "GET",
		dataType: "json",
		data: {
			src: "web",
			time: (new Date).getTime()
		},
		success: function(data) {
			var count = 0;
			$.each(data.result.data, function(index, d) {
				d && 1 == d.couponStatus.code && count++
			}), _self.navData.coupons_use_count = count > 0 ? count + "张" : "", $("#nav_coupon_count").text(_self.navData.coupons_use_count)
		},
		authorizationLogin: !0
	}), app.fetch({
		url: this.API.getFavShowsURL,
		type: "GET",
		dataType: "json",
		data: {
			offset: 10 * page || 0,
			length: 10,
			src: "web",
			time: (new Date).getTime(),
			userOID: 0
		},
		success: function(data) {
			_self.navData.favSHow_count = data.result.pagination && data.result.pagination.count > 0 ? data.result.pagination.count + "个" : "", $("#nav_favourite_count").text(_self.navData.favSHow_count)
		},
		authorizationLogin: !0
	})
}, OrderDetailController.prototype.getPayReserveTime = function() {
	var _self = this,
		getReserveFormat = function(clTime) {
			var minute = parseInt(clTime / 6e4),
				leftMinuteTime = clTime % 6e4,
				second = parseInt(leftMinuteTime / 1e3);
			return second < 10 ? minute + ":0" + second : minute + ":" + second
		};
	! function(tid) {
		app.fetch({
			url: _self.API.getReserveTimeURL(tid),
			type: "GET",
			dataType: "json",
			data: {},
			success: function(data) {
				(data.statusCode = 200) && (_self.reserveTime = data.result.time, _self.reserveTimeFormat = getReserveFormat(_self.reserveTime))
			},
			authorizationLogin: !0
		})
	}(transID), _self.reserveTimeFlag = setInterval(function() {
		_self.reserveTime -= 1e3, _self.reserveTimeFormat = getReserveFormat(_self.reserveTime), _self.reserveTime <= 0 && (_self.reserveTime = 0, _self.reserveTimeFormat = "00:00"), _self.reserveTime && _self.reserveTime > 0 ? ($("#payReserveTime").html(_self.reserveTimeFormat), $("#payReserveTimeTag").show()) : $("#payReserveTimeTag").hide(), app.fetch({
			url: _self.API.getOrderPayStatusURL(_self.curOrderId),
			type: "GET",
			dataType: "json",
			data: {},
			success: function(data) {
				200 == data.statusCode && "Unpaid" != data.result.data && (window.clearInterval(_self.reserveTimeFlag), _self.getOrderById(transID))
			},
			authorizationLogin: !0
		})
	}, 1e3)
}, AboutController.prototype = {
	init: function() {
		this.render()
	},
	render: function() {
		this.renderUI(), this.bindUI()
	},
	renderUI: function(tar) {
		var _self = this,
			topics = _self.topics,
			topic = tar || _self.tar,
			temp_about_main = document.getElementById("about-main-ul").innerHTML;
		template.config("openTag", "<$"), template.config("closeTag", "$>"), $("#about-main-container").html(template.compile(temp_about_main)({
			topics: topics,
			topic: topic
		}))
	},
	bindUI: function() {
		var _self = this;
		$("#about-main-container").on("click", ".single_l .single_menu li", function() {
			var code = $(this).data("code");
			_self.renderUI(code)
		}), $("#about-main-container").on("click", "#js_fankui_btn", function() {
			var tel = app.localGet(app.cellphoneKey),
				comval = $("#js_fankui_val").val();
			if (comval)
				if (tel) _self.postComments(comval, function() {
					$("#js_fankui_val").val(""), app.alertMsg("反馈已提交!")
				});
				else {
					var User = new UserController;
					User.getNoPaymentOrder(function() {}, !0)
				}
			else app.alertMsg("请输入您想提的意见反馈!")
		}), $("#about-main-container").on("keypress", "#js_fankui_val", function() {
			var comval = $(this).val(),
				inputLength = comval ? comval.length : 0;
			200 - inputLength >= 0 ? $("#js_fankui_zf").text(200 - inputLength) : $("#js_fankui_zf").text(0)
		})
	},
	postComments: function(comval, callback) {
		this.getCommentsInfo(comval, function(data) {
			callback && callback(data)
		})
	},
	getCommentsInfo: function(comval, next) {
		app.fetch({
			url: this.API.getCommentsUrl(comval),
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
	}
}, ComfirmController.prototype.init = function() {
	var _self = this,
		ticketSalePrice = (_self.userId = app.localGet("user"), _self.token = app.localGet("token"), _self.t_showOID = app.localGet("t_showOID"), _self.sa_showType = app.localGet("sa_showType"), _self.sa_showType_displayName = app.localGet("sa_showType_displayName"), _self.sessionId = app.localGet("t_sessionID"), _self.seat_plan = app.localGet("t_seat_plan"), _self.ticketTime = app.localGet("t_time"), _self.ticketOriginalPrice = parseFloat(app.localGet("t_originalPrice")), _self.ticketSalePrice = parseFloat(app.localGet("t_salePrice"))),
		ticketAmount = (_self.ticketCount = parseFloat(app.localGet("t_count")), _self.compensatedPrice = parseFloat(app.localGet("t_compensatedPrice")) || 0, _self.ticketAmount = ticketSalePrice);
	_self.totalAmount = ticketAmount, _self.t_ticketID = app.localGet("t_ticketID");
	_self.seller = app.localGet("t_seller") || "", _self.hasSeller = !app.isEmptyOrUndefined(_self.seller);
	_self.t_seatPlanUnitCNName = app.localGet("t_seatPlanUnitCNName") || "";
	_self.getPreOrderInfo(_self.t_showOID, _self.compensatedPrice, _self.ticketOriginalPrice, _self.ticketAmount, _self.sessionId, _self.token, _self.t_ticketID, _self.ticketCount, function(data) {
		_self.preOrderCallBack(data), _self.pageEvent()
	})
}, ComfirmController.prototype.getPreOrderInfo = function(showId, compensatedPrice, originalPrice, price, sessionId, token, ticketID, qty, next) {
	app.fetch({
		url: this.API.getPreOrderUrl(showId, compensatedPrice, originalPrice, price, sessionId, token, ticketID, qty),
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
}, ComfirmController.prototype.loadExpressTypes = function(next) {
	var address = this.address;
	address && app.fetch({
		url: this.API.getDeliverfeeUrl(this.t_showOID, address.locationOID),
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
}, ComfirmController.prototype.preOrderCallBack = function(data) {
	var _self = this;
	if (1003 === data.statusCode) return app.alertMsg("页面过期"), app.localRemove("token"), app.localRemove("t_salePrice"), app.localRemove("t_sessionID"), app.localRemove("t_seat_plan"), app.localRemove("t_time"), app.localRemove("t_originalPrice"), app.localRemove("t_ticketID"), app.localRemove("t_count"), app.localRemove("t_compensatedPrice"), app.localRemove("t_seller"), void(window.location = "/content/" + _self.t_showOID);
	var show = _self.show = data.result.data;
	_self.token = data.result.token, _self.orderAgreementOID = data.result && data.result.data && data.result.data.agreement && data.result.data.agreement.orderAgreementOID || "", show.support_express || show.supportExpress ? _self.delivery = "express" : show.support_venue ? _self.delivery = "venue" : show.support_onsite && (_self.delivery = "onsite"), show.supportComments ? _self.supportComments = !0 : _self.supportComments = !1, _self.needIdCard = show.isGuaranteed || !1, _self.selectedCouponId = show.cash_couponOID || show.couponOID, (show.discount || show.cash_couponOID) && (_self.discount = show.cash_discount || show.discount,
		_self.getCouponInfo(_self.ticketAmount + _self.compensatedPrice, _self.t_showOID, function(data) {
			_self.couponCallback(data)
		})), data.result.data.priceItems && (this.guarantee_money_switch = !0, this.priceDetail = data.result.data.priceItems || []), _self.getAmount(), _self.renderShowZone(), _self.refreshPage_Price(), _self.renderQpfsZone(), _self.renderQpfsListZone(), _self.renderQpfsList_onsiteZone(), _self.renderQpfsList_shipment(), _self.renderComments(), (show.supportExpress || show.support_express) && (new AddressMgr).init("#compont-address-container", null, {
		output: function(address, addresses) {
			_self.address = address, _self.addresses = addresses, _self.expresses = [], _self.loadExpressTypes(function(res) {
				res.result.data.forEach(function(exp) {
					var obj = {
						name: exp.expressName,
						price: exp.deliverFee,
						code: exp.expressCode,
						available: !0
					};
					_self.expresses.push(obj), exp.defaultExpress && (_self.express = obj)
				}), _self.renderExpressZone(), _self.refreshPage_Price()
			})
		}
	}), _self.bindUI_qpfs();
	var seller = _self.show.sellerOID;
	new SellerCertificate("#comfirm-show-container .ticket-show-desc", seller, _self.show.sellerCertificationsAuthStatus && _self.show.sellerCertificationsAuthStatus.code).init()
}, ComfirmController.prototype.getCouponInfo = function(price, showOID, next) {
	app.fetch({
		url: this.API.getCouponUrl(price, showOID),
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
}, ComfirmController.prototype.couponCallback = function(data) {
	_self.coupons = data.result.data, _self.renderCouponsZone(), $("#comfirm-coupons-container").on("mouseleave", ".yhq_hide", function() {
		$("#comfirm-coupons-container .yhq_show").removeClass("border_bottom_none"), $("#comfirm-coupons-container .yhq_hide").hide()
	})
}, ComfirmController.prototype.getAddressInfo = function(next) {
	app.fetch({
		url: this.API.getAddressUrl(),
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
}, ComfirmController.prototype.getAddress = function(addressID) {
	var _self = this;
	_self.getAddressInfo(function(data) {
		_self.addresses = data.result.data, app.isEmptyOrUndefined(addressID) ? (_self.address = myApp.findAvailabeItem(_self.addresses, "isDefault"), _self.address) : (_self.address = myApp.findAddressById(self.addresses, addressID), _self.address)
	})
}, ComfirmController.prototype.validateReceiver = function() {
	if (!this.delivery) return app.alertMsg("该票没有配送方式,暂时不能购买"), !1;
	if ("express" !== this.delivery) {
		if (app.isEmptyOrUndefined(this.shipment)) return app.alertMsg("请填写取票人信息"), !1;
		if (app.isEmptyOrUndefined(this.shipment.name)) return app.alertMsg("请填写取票人"), !1;
		if (app.isEmptyOrUndefined(this.shipment.telphone)) return app.alertMsg("请填写取票电话"), !1;
		if (!myApp.validPhone(this.shipment.telphone)) return app.alertMsg("请输入有效的手机号码"), !1
	} else if (app.isEmptyOrUndefined(this.address) || app.isEmptyOrUndefined(this.address.addressOID)) return app.alertMsg("请选择或者添加配送地址"), !1;
	return !0
}, ComfirmController.prototype.getPostData = function() {
	var postData = {};
	if (this.shipment = this.shipment || {}, postData.source = "web", postData.user = this.userId || "000", postData.show = this.t_showOID, postData.session = this.sessionId, postData.seat_plan = this.seat_plan, postData.qty = this.ticketCount, postData.price = this.ticketSalePrice, postData.total = this.amount, postData.orderAgreementOID = this.orderAgreementOID, postData.compensatedPrice = this.compensatedPrice, this.selectedCouponId && (postData.coupon = this.selectedCouponId), this.needIdCard && (postData.identity = this.idCardNum), "express" === this.delivery ? (postData.deliver = 2, postData.deliver_fee = this.express.price, postData.addrOID = this.address.addressOID, postData.express = this.express.code, app.isEmptyOrUndefined(this.remark) || (postData.comments = this.remark)) : (postData.deliver = "venue" === this.delivery ? 4 : 1, postData.receiver = this.shipment.name, postData.cellphone = this.shipment.telphone, app.localSave("shipment_name", postData.receiver), app.localSave("shipment_telphone", postData.cellphone), app.isEmptyOrUndefined(this.remark) || (postData.comments = this.remark)), postData.ticketOID = this.t_ticketID, 0 === this.amount && (postData.payment = 7), app.isEmptyOrUndefined(app.localGet("channel")) && app.isEmptyOrUndefined(sessionStorage.getItem("utm_source")) && $.cookie("utm_source"));
	else {
		var _channel = app.isEmptyOrUndefined(app.localGet("channel")) ? sessionStorage.getItem("utm_source") || $.cookie("utm_source") : app.localGet("channel");
		postData.channel = _channel
	}
	return postData
}, ComfirmController.prototype.postOrder = function(data, token, callback, errorCallback) {
	this.postOrderInfo(data, token, callback, errorCallback)
}, ComfirmController.prototype.postOrderInfo = function(data, token, next, errorCallback) {
	var _self = this;
	if ($.cookie("tkingCPS")) {
		var cpsParams = app.queryStringToObject(app.base64_decode($.cookie("tkingCPS")));
		cpsParams && cpsParams.aid && (data.channel = cpsParams.aid), cpsParams && cpsParams.cid && (data.campaign = cpsParams.cid), cpsParams && cpsParams.wi && (data.feedback = cpsParams.wi), cpsParams && cpsParams.feedback && (data.feedback = cpsParams.feedback)
	}
	app.fetch({
		url: this.API.getOrderPostUrl(token),
		type: "POST",
		dataType: "json",
		data: data,
		success: function(_data) {
			function getAmount() {
				return orderData.products && orderData.products.length ? orderData.products[0].amount : data.qty
			}

			function getPrice() {
				return orderData.products && orderData.products.length ? orderData.products[0].price : data.price
			}

			function getShowName() {
				return orderData.products && orderData.products.length ? orderData.products[0].name : orderData.showName
			}

			function getOrderNo() {
				return orderData.products && orderData.products.length, orderData.orderNumber
			}

			function getFare() {
				return orderData.products && orderData.products.length ? orderData.fare : data.deliver_fee
			}

			function getOrderTime() {
				return orderData.products && orderData.products.length ? orderData.createTime : orderData.orderCreateTime
			}

			function getProductNo() {
				if (orderData.products && orderData.products.length) return orderData.products[0].productNo
			}
			var orderData = _data.result.data;
			orderData && cpsParams && (cpsParams.cid ? function() {
				var jsonObj = {
						orderNo: getOrderNo(),
						cid: cpsParams.cid,
						feedback: cpsParams.wi,
						orderTime: getOrderTime() || "",
						products: [{
							amount: getAmount(),
							price: getPrice(),
							name: getShowName(),
							updateTime: "",
							productNo: getProductNo() || "",
							category: "",
							commissionType: ""
						}],
						fare: getFare() || 0,
						favorable: orderData.favorable || 0,
						favorableCode: orderData.favorableCode || "",
						orderStatus: orderData.orderStatus || "",
						paymentStatus: orderData.paymentStatus || "",
						paymentType: orderData.paymentType || ""
					},
					head = document.getElementsByTagName("head").item(0),
					script = document.createElement("script");
				script.setAttribute("type", "text/javascript"), script.setAttribute("src", "https://o.yiqifa.com/servlet/handleCpsInterIn?interId=58d2177444f422627326bbe9&json=" + encodeURIComponent(JSON.stringify({
					orders: [jsonObj]
				})) + "&encoding=" + (orderData.encoding || "utf-8")), head.appendChild(script)
			}() : cpsParams.feedback && (orderData.amount = _self.getAmount(), CPSGlobal.pushOrder("linkstars", orderData, cpsParams))), next && "function" == typeof next && setTimeout(function() {
				next(_data)
			}, 200)
		},
		error: function(data) {
			errorCallback && "function" == typeof errorCallback && errorCallback(data)
		}
	})
}, ComfirmController.prototype.saveOrder = function() {
	var _self = this;
	if (!this.orderSaving) {
		if (!this.validateReceiver()) return void app.alertMsg("请填写个人信息");
		if (this.needIdCard) {
			if (!/(^\d{6}(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2]\d|3[0-1])\d{3}(\d|X|x)$)|(^\d{6}\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2]\d|3[0-1])\d{3}$)/i.test(this.idCardNum)) return app.alertMsg("身份证格式不正确"), !1
		}
		if (!_self.agree_check_status) return void _self.reqUserAgreementData();
		var postData = this.getPostData();
		if (0 != postData) {
			try {
				if ("undefined" != typeof SensorTrack) {
					var sa_order = {
						showName: this.show.showName,
						showOID: this.t_showOID,
						showType: this.sa_showType,
						showType_displayName: this.sa_showType_displayName,
						showSessionOID: this.sessionId,
						showTime: this.ticketTime,
						seatPlanOID: this.seat_plan,
						originalPrice: this.ticketOriginalPrice,
						ticketOID: this.t_ticketID,
						qty: postData.qty,
						price: postData.price,
						compensatedPrice: postData.compensatedPrice,
						zone: "",
						deliveryFee: parseInt(_self.express && _self.express.price) || 0,
						deliveryMethod: postData.deliver,
						deliveryMethod_displayName: this.delivery,
						cellphone: this.shipment.telphone,
						discount: this.discount || 0,
						couponOID: this.selectedCouponId || "",
						venue: this.show.venueName,
						total: postData.total
					};
					SensorTrack.confirm_order(sa_order)
				}
			} catch (error) {
				console.log(error)
			}
			this.orderSaving = !0, this.showLoading(), this.postOrder(postData, _self.token, function(data) {
				if (_self.orderSaving = !1, _self.hideLoading(), console.log(data), 511 === data.statusCode) return app.alertMsg("票已经被别的小伙伴抢走了<br>请选择其他的票!"), window.location = "/content/" + _self.t_showOID, !1;
				if (1003 === data.statusCode) return app.alertMsg("页面过期,请重新下单"), void(window.location = "/content/" + _self.t_showOID);
				if (200 !== data.statusCode) return data.comments ? void app.alertMsg(data.comments, function() {
					window.location = "/content/" + _self.t_showOID
				}) : void(window.location = "/content/" + _self.t_showOID);
				try {
					if ("undefined" != typeof SensorTrack) {
						var sa_order = {
							orderOID: data.result.data && data.result.data.orderOID,
							orderNumber: data.result.data && data.result.data.orderNumber,
							total: postData.total,
							showOID: _self.t_showOID,
							showName: _self.show.showName,
							showType: _self.sa_showType,
							showType_displayName: _self.sa_showType_displayName,
							showSessionOID: _self.sessionId,
							showTime: _self.ticketTime,
							seatPlanOID: _self.seat_plan,
							originalPrice: _self.ticketOriginalPrice,
							ticketOID: _self.t_ticketID,
							qty: postData.qty,
							price: postData.price,
							compensatedPrice: postData.compensatedPrice,
							zone: "",
							deliveryMethod: postData.deliver,
							deliveryMethod_displayName: _self.delivery,
							cellphone: _self.shipment.telphone,
							discount: _self.discount || 0,
							couponOID: _self.selectedCouponId || "",
							venue: _self.show.venueName,
							total: postData.total
						};
						SensorTrack.success_order(sa_order)
					}
					if (window.TDH5SDK && window.TDH5SDK.iap) {
						var td_orderId = data && data.result && data.result.data && data.result.data.orderOID || "",
							td_amount = postData && 100 * postData.total || 0;
						TDH5SDK.iap.placeOrder(td_orderId, td_amount, "CNY", [])
					}
				} catch (error) {
					console.log(error)
				}
				if (0 == _self.amount) return location.href = location.protocol + "//" + window.location.host + "/paying/" + data.result.data.transaction.transactionOID, !1;
				location.href = location.protocol + "//" + window.location.host + "/orderPay/" + data.result.data.transaction.transactionOID
			}, function(data) {
				app.alertMsg("错误:" + data), _self.orderSaving = !1, _self.hideLoading()
			})
		}
	}
}, ComfirmController.prototype.reqUserAgreementData = function() {
	var _self = this;
	_self.orderAgreementOID && (_self.reqAgreementStatus ? $("#user-agreement-component").show() : app.fetch({
		url: this.API.getUserAgreementUrl(_self.orderAgreementOID),
		type: "GET",
		dataType: "json",
		data: {
			time: (new Date).getTime(),
			src: "web"
		},
		success: function(data) {
			if (data && "200" == data.statusCode) {
				if (_self.user_agreement_Data = data && data.result && data.result.data || {}, _self.user_agreement_Data) {
					$("#user-agreement-component").show(), $("#userOrderAgreement").html(_self.user_agreement_Data.agreementTemplate), $("#agree_name").text(_self.user_agreement_Data.agreementName);
					var seatPlanCommentsStr = "";
					_self.user_agreement_Data.originalPrice && (seatPlanCommentsStr = _self.user_agreement_Data.originalPrice + "票面"), _self.user_agreement_Data.seatPlanComments && (seatPlanCommentsStr += "(" + _self.user_agreement_Data.seatPlanComments + ")"), $("#agree_seatPlanComments").text(seatPlanCommentsStr);
					var showBuyCountLimitStr = "",
						curUnit = _self.user_agreement_Data && _self.user_agreement_Data.seatPlanUnit && _self.user_agreement_Data.seatPlanUnit.displayName || "";
					_self.user_agreement_Data && _self.user_agreement_Data.showBuyCountLimit && (showBuyCountLimitStr = "(限购" + _self.user_agreement_Data.showBuyCountLimit + curUnit + ")"), $("#agree_qty").text(_self.user_agreement_Data.qty + curUnit + showBuyCountLimitStr), $("#agree_userCellphone").text(_self.user_agreement_Data.userCellphone), $("#agree_sellerName").text(_self.user_agreement_Data.sellerName), $("#agree_showName").text(_self.user_agreement_Data.showName), $("#agree_compensateNotes").text(_self.user_agreement_Data.compensateNotes), $("#agree_noTicketCompensatePrice").text(_self.user_agreement_Data.noTicketCompensatePrice), $("#agree_venueNoTicketCompensatePrice").text(_self.user_agreement_Data.venueNoTicketCompensatePrice)
				}
				_self.reqAgreementStatus = !0, SensorTrack.open_order_agreement({
					orderAgreementOID: _self.orderAgreementOID
				})
			}
		}
	}))
}, ComfirmController.prototype.renderShowZone = function() {
	var _self = this,
		show = _self.show,
		ticketOriginalPrice = _self.ticketOriginalPrice,
		ticketTime = _self.ticketTime,
		ticketCount = _self.ticketCount,
		seller = _self.seller,
		hasSeller = _self.hasSeller,
		showOID = _self.t_showOID,
		t_seatPlanUnitCNName = _self.t_seatPlanUnitCNName || "";
	template.config("openTag", "<$"), template.config("closeTag", "$>");
	var temp_comfirm_show = document.getElementById("comfirm-show-ul").innerHTML;
	$("#comfirm-show-container").html(template.compile(temp_comfirm_show)({
		show: show,
		ticketOriginalPrice: ticketOriginalPrice,
		ticketTime: ticketTime,
		ticketCount: ticketCount,
		seller: seller,
		hasSeller: hasSeller,
		showOID: showOID,
		t_seatPlanUnitCNName: t_seatPlanUnitCNName
	}))
}, ComfirmController.prototype.renderMoneyListZone = function() {
	var _self = this,
		totalAmount = _self.totalAmount,
		delivery = _self.delivery,
		express = _self.express,
		discount = _self.discount,
		compensatedPrice = _self.compensatedPrice,
		amount = _self.amount,
		guarantee_money_switch = this.guarantee_money_switch,
		priceDetail = this.priceDetail;
	template.config("openTag", "<$"), template.config("closeTag", "$>");
	var temp_comfirm_moneyList = document.getElementById("comfirm-moneyList-ul").innerHTML;
	$("#comfirm-moneyList-container").html(template.compile(temp_comfirm_moneyList)({
		totalAmount: totalAmount,
		delivery: delivery,
		express: express,
		discount: discount,
		compensatedPrice: compensatedPrice,
		amount: amount,
		guarantee_money_switch: guarantee_money_switch,
		priceDetail: priceDetail
	}))
}, ComfirmController.prototype.renderMoneyTotalZone = function() {
	var _self = this,
		amount = _self.amount;
	template.config("openTag", "<$"), template.config("closeTag", "$>");
	var temp_comfirm_moneyTotal = document.getElementById("comfirm-moneyTotal-ul").innerHTML;
	$("#comfirm-moneyTotal-container").html(template.compile(temp_comfirm_moneyTotal)({
		amount: parseFloat(amount).toFixed(2)
	})), $("#comfirm-moneyTotal-buy a span").text("￥" + parseFloat(amount).toFixed(2))
}, ComfirmController.prototype.renderQpfsZone = function() {
	var _self = this,
		delivery = _self.delivery,
		show = _self.show;
	console.log(_self.delivery), template.config("openTag", "<$"), template.config("closeTag", "$>");
	var temp_comfirm_qpfs = document.getElementById("comfirm-qpfs-ul").innerHTML;
	$("#comfirm-qpfs-container").html(template.compile(temp_comfirm_qpfs)({
		delivery: delivery,
		show: show
	}))
}, ComfirmController.prototype.renderQpfsListZone = function() {
	var _self = this,
		delivery = _self.delivery,
		needIdCard = _self.needIdCard;
	template.config("openTag", "<$"), template.config("closeTag", "$>");
	var temp_comfirm_qpfsList = document.getElementById("comfirm-qpfsList-ul").innerHTML;
	$("#comfirm-qpfsList-container").html(template.compile(temp_comfirm_qpfsList)({
		delivery: delivery,
		needIdCard: needIdCard
	}))
}, ComfirmController.prototype.renderQpfsList_onsiteZone = function() {
	var _self = this,
		offlineTime = _self.show.offlineTime,
		offlineAddress = _self.show.offlineAddress;
	template.config("openTag", "<$"), template.config("closeTag", "$>");
	var temp_comfirm_qpfsListOnsite = document.getElementById("comfirm-qpfsListOnsite-ul").innerHTML;
	$("#comfirm-qpfsListOnsite-container").html(template.compile(temp_comfirm_qpfsListOnsite)({
		offlineTime: offlineTime,
		offlineAddress: offlineAddress
	}))
}, ComfirmController.prototype.renderQpfsList_shipment = function() {
	var _self = this,
		shipment_name = _self.shipment.name,
		shipment_telphone = _self.shipment.telphone;
	$("input.shipment-name").val(shipment_name), $("input.shipment-telphone").val(shipment_telphone)
}, ComfirmController.prototype.renderExpressZone = function() {
	var _self = this,
		expresses = _self.expresses,
		express = _self.express;
	template.config("openTag", "<$"), template.config("closeTag", "$>");
	var temp_comfirm_expressList = document.getElementById("comfirm-expressList-ul").innerHTML;
	$("#comfirm-expressList-container").html(template.compile(temp_comfirm_expressList)({
		expresses: expresses,
		express: express
	}))
}, ComfirmController.prototype.renderCouponsZone = function() {
	var _self = this,
		coupons = _self.coupons,
		discount = _self.discount;
	template.config("openTag", "<$"), template.config("closeTag", "$>");
	var temp_comfirm_coupons = document.getElementById("comfirm-coupons-ul").innerHTML;
	$("#comfirm-coupons-container").html(template.compile(temp_comfirm_coupons)({
		coupons: coupons,
		discount: discount
	}))
}, ComfirmController.prototype.renderComments = function() {
	var _self = this,
		supportComments = _self.supportComments;
	template.config("openTag", "<$"), template.config("closeTag", "$>");
	var temp_comfirm_comments = document.getElementById("comfirm-comments-ul").innerHTML;
	$("#comfirm-comments-container").html(template.compile(temp_comfirm_comments)({
		supportComments: supportComments
	}))
}, ComfirmController.prototype.refreshPage_Price = function() {
	var _self = this;
	_self.getAmount(), _self.renderMoneyListZone(), _self.renderMoneyTotalZone()
}, ComfirmController.prototype.getAmount = function() {
	if (_self = this, this.guarantee_money_switch) {
		for (var detailTotal = 0, i = 0; i < this.priceDetail.length; i++) detailTotal += parseFloat(this.priceDetail[i].priceItemVal || 0);
		_self.amount = detailTotal + (_self.express && void 0 !== _self.express.price ? _self.express.price : 0) - (_self.discount || 0)
	} else _self.amount = _self.ticketAmount + (_self.compensatedPrice || 0) + (_self.express && void 0 !== _self.express.price ? _self.express.price : 0) - (_self.discount || 0);
	return _self.amount < 0 && (_self.amount = 0), _self.amount
}, ComfirmController.prototype.changeDelivery = function(str, next) {
	this.delivery = str, next && "function" == typeof next && next()
}, ComfirmController.prototype.refreshDeliveryModel = function() {
	var _self = this;
	if ("express" !== _self.delivery) _self.express = null;
	else {
		_self.express = _self.expresses[0];
		for (var i = 0; i < _self.expresses.length; i++) _self.expresses[i].available = !0;
		_self.renderExpressZone()
	}
}, ComfirmController.prototype.changeExpress = function(code, next) {
	var _self = this;
	if (code == _self.express.code) return !1;
	for (var i = 0; i < _self.expresses.length; i++) {
		var express = _self.expresses[i];
		code == express.code && (_self.express = express)
	}
	next && "function" == typeof next && next()
}, ComfirmController.prototype.changeCoupon = function(couponOID, next) {
	for (var _self = this, i = 0; i < _self.coupons.length; i++) {
		var coupon = _self.coupons[i];
		couponOID == coupon.couponOID && (_self.coupon = coupon, _self.discount = coupon.discount, _self.selectedCouponId = coupon.couponOID)
	}
	next && "function" == typeof next && next()
}, ComfirmController.prototype.showLoading = function() {
	$("div.modal-loading").show()
}, ComfirmController.prototype.hideLoading = function() {
	$("div.modal-loading").hide()
}, ComfirmController.prototype.bindUI_qpfs = function() {
	var _self = this;
	$("#comfirm-qpfs-container").on("click", "li", function() {
		var disabled = $(this).data("disabled"),
			model = $(this).data("model");
		if (disabled) return console.log("不支持"), !1;
		$("#express").hide(), $("#venue").hide(), $("#onsite").hide(), $("#" + model).show(), _self.changeDelivery(model, function() {
			_self.renderQpfsZone(), _self.refreshDeliveryModel(), _self.refreshPage_Price()
		})
	})
}, ComfirmController.prototype.pageEvent = function() {
	var _self = this;
	$("#comfirm-expressList-container").on("click", "li", function() {
		var disabled = $(this).data("disabled"),
			code = $(this).data("code");
		if (disabled) return console.log("不支持"), !1;
		console.log(code), _self.changeExpress(code, function() {
			_self.renderExpressZone(), _self.refreshPage_Price()
		})
	}), $("#comfirm-coupons-container").on("click", "ul.couponList", function() {
		var couponOID = $(this).data("model");
		_self.changeCoupon(couponOID, function() {
			_self.renderCouponsZone(), _self.refreshPage_Price(), $(this).removeClass("border_bottom_none"), $("#comfirm-coupons-container .yhq_hide").hide()
		})
	}), $("#comfirm-coupons-container").on("click", ".yhq_show", function() {
		$(this).addClass("border_bottom_none"), $("#comfirm-coupons-container .yhq_hide").show()
	}), $("input.shipment-name").change(function() {
		var val = $(this).val();
		_self.shipment.name = val
	}), $("input.shipment-telphone").change(function() {
		var val = $(this).val();
		_self.shipment.telphone = val
	}), $("input.idCardNum").change(function() {
		var val = $(this).val();
		_self.idCardNum = val, console.log("身份证", _self.idCardNum)
	}), $(".tip_kd textarea").change(function() {
		var val = $(this).val();
		_self.remark = val, console.log(_self)
	}), $("#user_orderAgreement_link").click(function() {
		_self.reqUserAgreementData()
	}), $(document.body).on("click", "#agree_check", function() {
		_self.agree_check_status ? (_self.agree_check_status = !1, SensorTrack.select_order_agreement({
			selected: 0
		}), $(this).find("i").removeClass("icon-checkbox-checked").addClass("icon-checkbox")) : (_self.agree_check_status = !0, SensorTrack.select_order_agreement({
			selected: 1
		}), $(this).find("i").addClass("icon-checkbox-checked").removeClass("icon-checkbox"))
	}), $(document.body).on("click", "#userAgreementBtn", function() {
		_self.agree_check_status = !0, $("#user-agreement-component").hide(), $("#agree_check").find("i").addClass("icon-checkbox-checked").removeClass("icon-checkbox")
	}), $("#comfirm-moneyTotal-buy").click(function() {
		_self.saveOrder()
	}), $("#comfirm-moneyList-container").on("mouseenter", "#comfirm-moneyList-container i.chaidan", function() {
		$(this).parent().find("div.chaidan-tip").show()
	}), $("#comfirm-moneyList-container").on("mouseleave", "#comfirm-moneyList-container i.chaidan", function() {
		$(this).parent().find("div.chaidan-tip").hide()
	})
}, AddressComponent.prototype = {
	init: function(container, addr, cfg, callback) {
		return this.container = container, this.address = addr || this.defaultAddress, this.address.isHiddenCancelBtn = cfg.isHiddenCancelBtn || !1, this.parse(), this.loadAddress(), $.extend(this.callback, callback), this.render(), this
	},
	render: function() {
		var _self = this;
		this.renderUI(), this.syncUI(), $(_self.container).append(this.$Address), this.bindUI()
	},
	destroy: function() {
		this.destructor(), this.$Address.off(), this.$Address.remove()
	},
	renderUI: function() {
		var _self = this,
			address = _self.address;
		template.config("openTag", "<$"), template.config("closeTag", "$>");
		var temp_compont_addressOne = document.getElementById("compont-addressOne-ul").innerHTML;
		this.$Address = $(template.compile(temp_compont_addressOne)({
			address: address
		}))
	},
	bindUI: function() {
		var _self = this;
		this.$Address.on("click", ".adress_save", function() {
			_self.saveAddress(function() {
				_self.callback.save && _self.callback.save(), _self.destroy()
			})
		}), this.$Address.on("click", ".adress_cancel", function() {
			_self.callback.cancel && _self.callback.cancel(), _self.destroy()
		}), this.$Address.on("click", "ul.sheng_con li", function() {
			var provinceCode = $(this).attr("provincecode"),
				provice = myApp.findPCDById(_self.address.provinces, provinceCode);
			_self.onProvinceSelected(provice), console.log(_self.address), _self.$Address.find("ul.sheng_con").hide()
		}), this.$Address.on("click", "ul.city_con li", function() {
			var cityCode = $(this).attr("citycode"),
				city = myApp.findPCDById(_self.address.cities, cityCode);
			_self.onCitySelected(city), console.log(_self.address), _self.$Address.find("ul.city_con").hide()
		}), this.$Address.on("click", "ul.qu_con li", function() {
			var districtCode = $(this).attr("districtcode");
			console.log(_self.address);
			var district = myApp.findPCDById(_self.address.districts, districtCode);
			_self.onDistrictSelected(district), console.log(_self.address), _self.$Address.find("ul.qu_con").hide()
		}), this.$Address.on("click", "ul.sheng", function() {
			_self.shengIsOpen = !_self.shengIsOpen, _self.shengIsOpen ? _self.$Address.find("ul.sheng_con").show() : _self.$Address.find("ul.sheng_con").hide()
		}), this.$Address.on("click", "ul.shi", function() {
			_self.shiIsOpen = !_self.shiIsOpen, _self.shiIsOpen ? _self.$Address.find("ul.city_con").show() : _self.$Address.find("ul.city_con").hide()
		}), this.$Address.on("click", "ul.qu", function() {
			_self.quIsOpen = !_self.quIsOpen, _self.quIsOpen ? _self.$Address.find("ul.qu_con").show() : _self.$Address.find("ul.qu_con").hide()
		}), this.$Address.on("mouseleave", ".ad_buy_se_hide", function() {
			$(this).hide(), _self.shengIsOpen = !1, _self.shiIsOpen = !1, _self.quIsOpen = !1
		}), this.$Address.on("change", "input.name", function() {
			var val = $(this).val();
			_self.address.clientName = val, console.log(_self.address)
		}), this.$Address.on("change", "input.cellphone", function() {
			var val = $(this).val();
			_self.address.cellphone = val, console.log(_self.address)
		}), this.$Address.on("change", "input.detailAddress", function() {
			var val = $(this).val();
			_self.address.detailAddress = val, console.log(_self.address)
		}), this.$Address.on("click", "ul.adress_check", function() {
			_self.address.isDefault ? (_self.address.isDefault = !1, $(this).find("i").removeClass("icon-checkbox-checked").addClass("icon-checkbox")) : (_self.address.isDefault = !0, $(this).find("i").addClass("icon-checkbox-checked").removeClass("icon-checkbox")), console.log(_self.address)
		}), $("input[placeholder],textarea[placeholder]").each(function() {
			var that = $(this),
				text = that.attr("placeholder");
			"" === that.val() && that.val(text).addClass("placeholder"), that.focus(function() {
				that.val() === text && that.val("").removeClass("placeholder")
			}).blur(function() {
				"" === that.val() && that.val(text).addClass("placeholder")
			}).closest("form").submit(function() {
				that.val() === text && that.val("")
			})
		})
	},
	syncUI: function() {},
	destructor: function() {},
	dealAddressModel: function() {},
	parse: function() {
		var aId = this.parseAddressId(this.address.location.locationOID);
		this.address.province = {
			code: aId.province,
			province: this.address.location.province
		}, this.address.city = {
			code: aId.city,
			city: this.address.location.city
		}, this.address.district = {
			code: aId.district,
			district: this.address.location.district
		}
	},
	parseAddressId: function(addressId) {
		return {
			province: addressId.substr(0, 2),
			city: addressId.substr(2, 2),
			district: addressId.substr(4, 2)
		}
	},
	loadAddress: function() {
		this.getProvinces(), this.getCities(this.address.province.code), this.getDistricts(this.address.province.code, this.address.city.code)
	},
	getProvinces: function() {
		var _self = this;
		this.getPrinceInfo(function(data) {
			_self.address.provinces = data.result.data, _self.renderProvinces(_self.address.provinces)
		})
	},
	getPrinceInfo: function(next) {
		app.fetch({
			url: this.API.getProvinceUrl(),
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
	getCities: function(proCode, updated, callback) {
		var _self = this;
		this.getCityInfo(proCode, function(data) {
			_self.address.cities = data.result.data, _self.address.city = _self.address.city || _self.address.cities[0], updated && (_self.address.city = _self.address.cities[0]), _self.renderCities(_self.address.cities), callback && callback(_self.address.city)
		})
	},
	getCityInfo: function(proCode, next) {
		app.fetch({
			url: this.API.getCityUrl(proCode),
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
	getDistricts: function(proCode, cityCode, updated, callback) {
		var _self = this;
		this.getDistrictInfo(proCode, cityCode, function(data) {
			_self.address.districts = data.result.data, _self.address.district = _self.address.district || _self.address.districts[0], updated && (_self.address.district = _self.address.districts[0]), _self.renderDistricts(_self.address.districts), callback && callback(_self.address.district)
		})
	},
	getDistrictInfo: function(provinceCode, cityCode, next) {
		app.fetch({
			url: this.API.getDistrictUrl(provinceCode, cityCode),
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
	renderProvinces: function(provinces) {
		for (var content = "", i = 0; i < provinces.length; i++) {
			var province = provinces[i];
			content += '<li ng-click="temp.onProvinceSelected(pro);temp.showProvince = false" provincecode="' + province.code + '" ng-repeat="pro in temp.provinces">' + province.province + "</li>"
		}
		this.$Address.find("ul.sheng_con").html(content)
	},
	renderCities: function(cities) {
		for (var content = "", i = 0; i < cities.length; i++) {
			var city = cities[i];
			content += '<li class="g_province" ng-click="temp.onCitySelected(city);temp.showCity = false;" citycode="' + city.code + '" ng-repeat="city in temp.cities">' + city.city + "</li>"
		}
		this.$Address.find("ul.city_con").html(content)
	},
	renderDistricts: function(districts) {
		for (var content = "", i = 0; i < districts.length; i++) {
			var district = districts[i];
			content += '<li class="g_province" ng-click="temp.onDistrictSelected(dt);temp.showDistrict = false" districtcode="' + district.code + '" ng-repeat="dt in temp.districts">' + district.district + "</li>"
		}
		this.$Address.find("ul.qu_con").html(content)
	},
	onProvinceSelected: function(province) {
		var _self = this;
		this.address.province = province, this.$Address.find("ul.sheng").html('<i class="icon icon-select-grey"></i>' + this.address.province.province), console.log("onProvinceSelected"), this.getCities(this.address.province.code, !0, function(city) {
			_self.$Address.find("ul.shi").html('<i class="icon icon-select-grey"></i>' + _self.address.city.city), _self.getDistricts(_self.address.province.code, city.code, !0, function() {
				_self.$Address.find("ul.qu").html('<i class="icon icon-select-grey"></i>' + _self.address.district.district)
			})
		})
	},
	onCitySelected: function(city) {
		var _self = this;
		console.log("onCitySelected"), this.address.city = city, this.$Address.find("ul.shi").html('<i class="icon icon-select-grey"></i>' + this.address.city.city), this.getDistricts(_self.address.province.code, city.code, !0, function() {
			_self.$Address.find("ul.qu").html('<i class="icon icon-select-grey"></i>' + _self.address.district.district)
		})
	},
	onDistrictSelected: function(district) {
		console.log("onDistrictSelected"), this.address.district = district, this.$Address.find("ul.qu").html('<i class="icon icon-select-grey"></i>' + this.address.district.district)
	},
	saveAddress: function(callback) {
		var _self = this,
			postData = this.getAddresPostData();
		postData && (postData.id ? this.putAddress(postData, function(data) {
			if (200 !== data.statusCode && data.comments) return void app.alertMsg(data.comments);
			_self.parse(_self.address), app.localSave("newAddressId", data.result.data.addressOID), callback && callback()
		}) : this.postAddress(postData, function(data) {
			if (200 !== data.statusCode && data.comments) return void app.alertMsg(data.comments);
			_self.parse(_self.address), app.localSave("newAddressId", data.result.data.addressOID), callback && callback()
		}))
	},
	getAddresPostData: function() {
		var postData1 = {
			src: "web"
		};
		return app.isEmptyOrUndefined(this.address.clientName) || app.isEmptyOrUndefined(this.address.cellphone) ? (app.alertMsg("收货人和联系电话不能为空"), !1) : myApp.validPhone(this.address.cellphone) ? app.isEmptyOrUndefined(this.address.detailAddress) ? (app.alertMsg("请填写详细地址"), !1) : (this.address.addressOID && (postData1.id = this.address.addressOID), postData1.name = this.address.clientName, postData1.cellphone = this.address.cellphone, postData1.province = this.address.province.code, postData1.city = this.address.city.code, this.address.district && (postData1.district = this.address.district.code), postData1.address = this.address.detailAddress, postData1.isDefault = this.address.isDefault, postData1.time = (new Date).getTime(), postData1) : (app.alertMsg("错误的电话号码"), !1)
	},
	postAddress: function(postData, callback) {
		this.postAddressInfo(postData, callback)
	},
	postAddressInfo: function(postData, next) {
		var addressStr = $.param(postData).replace("isDefault", "default");
		app.fetch({
			url: this.API.getAddressUrl(),
			type: "POST",
			dataType: "json",
			data: addressStr,
			success: function(data) {
				next && "function" == typeof next && next(data)
			}
		})
	},
	putAddress: function(postData, callback) {
		this.putAddressInfo(postData, callback)
	},
	putAddressInfo: function(postData, next) {
		var addressStr = $.param(postData).replace("isDefault", "default");
		app.fetch({
			url: this.API.getAddressUrl(),
			type: "PUT",
			dataType: "json",
			data: addressStr,
			success: function(data) {
				next && "function" == typeof next && next(data)
			}
		})
	}
}, AddressMgr.prototype = {
	init: function(container, cfg, callback) {
		var _self = this;
		return this.container = container, $.extend(this.callback, callback), $.extend(this.cfg, cfg), this.getAddress(null, function() {
			_self.dealAddressModel()
		}), this
	},
	render: function() {
		var _self = this;
		$(_self.container).off(), this.renderUI(), this.syncUI(), $(_self.container).html(this.$AddressMgr), this.bindUI()
	},
	destroy: function() {
		this.destructor(), this.$AddressMgr.off(), this.$AddressMgr.remove()
	},
	renderUI: function() {
		var _self = this,
			addresses = _self.addresses,
			address = _self.address,
			setDefaultAddressBtn = _self.cfg.setDefaultAddressBtn;
		template.config("openTag", "<$"), template.config("closeTag", "$>");
		var temp_compont_addressMgr = document.getElementById("compont-addressMgr-ul").innerHTML;
		this.$AddressMgr = $(template.compile(temp_compont_addressMgr)({
			addresses: addresses,
			address: address,
			setDefaultAddressBtn: setDefaultAddressBtn
		}))
	},
	showDelAddressPopup: function() {
		$("#delete-address-ppoup").show()
	},
	hideDelAddressPopup: function() {
		$("#delete-address-ppoup").hide()
	},
	bindUI: function() {
		var _self = this;
		$(_self.container).on("click", ".address-top a.editBtn", function(e) {
			var $li = $(this).parents("li.address-liBox"),
				addressOID = $li.data("addressoid");
			return console.log(addressOID), _self.addressOID ? (console.log("有组件了"), !1) : (_self.addressOID = !0, _self.newExistAddressBox(addressOID), $("#" + addressOID + " .edit-address-box").show(), e.stopPropagation(), !1)
		});
		var toDeleteAddressOID;
		$(_self.container).on("click", ".address-top a.removeBtn", function(e) {
			console.log("删除按钮");
			var $li = $(this).parents("li.address-liBox"),
				addressOID = $li.data("addressoid");
			return _self["deleteAddress" + addressOID] ? (console.log("已经删除了"), !1) : (toDeleteAddressOID = addressOID, _self.showDelAddressPopup(), e.stopPropagation(), !1)
		}), $("#delete-address-ppoup #js_del_yes").click(function() {
			_self["deleteAddress" + toDeleteAddressOID] = !0, _self.hideDelAddressPopup(), app.mask(), _self.deleteAddress(toDeleteAddressOID, function() {
				console.log("删除地址后回调"), _self["deleteAddress" + toDeleteAddressOID] = !1, app.unmask(), _self.getAddress(app.localGet("newAddressId"), function() {
					_self.dealAddressModel()
				})
			})
		}), $("#delete-address-ppoup #del_cancel,#delete-address-ppoup .close_icon ").click(function() {
			_self.hideDelAddressPopup()
		}), $(_self.container).on("click", ".addaddress li.addmoreaddress", function() {
			if (_self.moreAddress) return console.log("有组件了"), !1;
			_self.moreAddress = !0, (new AddressComponent).init("#compont-addressmgr-more-container", null, {
				isHiddenCancelBtn: !1
			}, {
				save: function() {
					console.log("更多组件刷新页面"), $("ul.addaddress").removeClass("jianaddress"), _self.moreAddress = !1, _self.getAddress(app.localGet("newAddressId"), function() {
						_self.dealAddressModel()
					})
				},
				cancel: function() {
					$("ul.addaddress").removeClass("jianaddress"), _self.moreAddress = !1
				}
			}), $(this).parents(".addaddress").addClass("jianaddress")
		}), $(_self.container).on("click", "li.address-liBox", function(e) {
			var addressOID = $(this).data("addressoid");
			return _self.selectAddress(addressOID), _self.output(_self.address, _self.addresses), $("li.address-liBox i.address-select.icon-radio-checked").removeClass("icon-radio-checked"), $(this).find("i.address-select").addClass("icon-radio-checked"), e.stopPropagation(), !1
		}), $(_self.container).on("click", "span.setDefaultAddress", function() {
			console.log("设置默认按钮");
			var $li = $(this).parents("li.address-liBox"),
				addressOID = $li.data("addressoid"),
				curAddress = myApp.findAddressById(_self.addresses, addressOID);
			curAddress.isDefault = !0, _self.parse(curAddress);
			var putData = _self.getAddresPutData(curAddress);
			_self.setDefaultAddress(putData, function(data) {
				app.localSave("newAddressId", putData.id), _self.getAddress(app.localGet("newAddressId"), function() {
					_self.dealAddressModel()
				})
			})
		})
	},
	syncUI: function() {},
	destructor: function() {},
	getAddress: function(addressID, callback) {
		var _self = this;
		_self.getAddressInfo(function(data) {
			_self.addresses = data.result.data, app.isEmptyOrUndefined(addressID) ? (_self.address = myApp.findAvailabeItem(_self.addresses, "isDefault"), _self.address) : (_self.address = myApp.findAddressById(_self.addresses, addressID), _self.address || (_self.address = myApp.findAvailabeItem(_self.addresses, "isDefault"))), callback && callback()
		})
	},
	getAddressInfo: function(next) {
		app.fetch({
			url: this.API.getAddressUrl(),
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
	deleteAddress: function(addressOID, callback) {
		this.deleteAddressInfo(addressOID, function() {
			callback && callback()
		})
	},
	deleteAddressInfo: function(addrId, next) {
		app.fetch({
			url: this.API.deleteAddressUrl(addrId),
			type: "DELETE",
			dataType: "json",
			data: {},
			success: function(data) {
				next && "function" == typeof next && next(data)
			}
		})
	},
	parse: function(address) {
		var aId = this.parseAddressId(address.location.locationOID);
		address.province = {
			code: aId.province,
			province: address.location.province
		}, address.city = {
			code: aId.city,
			city: address.location.city
		}, address.district = {
			code: aId.district,
			district: address.location.district
		}
	},
	parseAddressId: function(addressId) {
		return {
			province: addressId.substr(0, 2),
			city: addressId.substr(2, 2),
			district: addressId.substr(4, 2)
		}
	},
	getAddresPutData: function(address) {
		var postData1 = {
			src: "web"
		};
		return address.addressOID && (postData1.id = address.addressOID), postData1.name = address.clientName, postData1.cellphone = address.cellphone, postData1.province = address.province.code, postData1.city = address.city.code, address.district && (postData1.district = address.district.code), postData1.address = address.detailAddress, postData1.isDefault = address.isDefault, postData1.time = (new Date).getTime(), postData1
	},
	putAddress: function(putData, callback) {
		this.putAddressInfo(putData, callback)
	},
	putAddressInfo: function(putData, next) {
		var addressStr = $.param(putData).replace("isDefault", "default");
		app.fetch({
			url: this.API.getAddressUrl(),
			type: "PUT",
			dataType: "json",
			data: addressStr,
			success: function(data) {
				next && "function" == typeof next && next(data)
			}
		})
	},
	setDefaultAddress: function(putData, callback) {
		this.putAddress(putData, callback)
	},
	dealAddressModel: function() {
		var _self = this;
		this.render();
		var addresses = _self.addresses;
		(!addresses || addresses.length <= 0) && (new AddressComponent).init("#compont-addressmgr-null-container", null, {
			isHiddenCancelBtn: !0
		}, {
			save: function() {
				_self.getAddress(null, function() {
					_self.dealAddressModel()
				})
			}
		}), this.output(_self.address, _self.addresses)
	},
	newExistAddressBox: function(addressOID) {
		var _self = this,
			container = "#compont-addressmgr-list-container-" + addressOID,
			address = myApp.findAddressById(_self.addresses, addressOID);
		(new AddressComponent).init(container, address, {
			isHiddenCancelBtn: !1
		}, {
			save: function() {
				_self.addressOID = !1, _self.getAddress(app.localGet("newAddressId"), function() {
					_self.dealAddressModel()
				})
			},
			cancel: function() {
				$("#" + addressOID + " .edit-address-box").hide(), _self.addressOID = !1
			}
		})
	},
	selectAddress: function(addressOID) {
		var _self = this;
		_self.address = myApp.findAddressById(_self.addresses, addressOID)
	},
	output: function(address, addresses) {
		this.callback.output && this.callback.output(address, addresses)
	}
}, HelpController.prototype = {
	init: function() {
		this.render()
	},
	render: function() {
		this.renderUI(), this.bindUI()
	},
	renderUI: function(tar) {
		var _self = this,
			topics = _self.topics,
			topic = tar || _self.tar,
			temp_help_main = document.getElementById("help-main-ul").innerHTML;
		template.config("openTag", "<$"), template.config("closeTag", "$>"), $("#help-main-container").html(template.compile(temp_help_main)({
			topics: topics,
			topic: topic
		}))
	},
	bindUI: function() {
		var _self = this;
		$("#help-main-container").on("click", ".single_l .single_menu li", function() {
			var code = $(this).data("code");
			console.log(code), _self.renderUI(code)
		})
	}
}, ModuleLoader.prototype.register = function(pageRoute, moduleName) {}, ModuleLoader.prototype.start = function() {
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