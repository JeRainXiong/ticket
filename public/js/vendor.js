! function(factory) {
	"function" == typeof define && define.amd ? define(["jquery"], factory) : factory("object" == typeof exports ? require("jquery") : jQuery)
}(function($) {
	function encode(s) {
		return config.raw ? s : encodeURIComponent(s)
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s)
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value))
	}

	function parseCookieValue(s) {
		0 === s.indexOf('"') && (s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
		try {
			return s = decodeURIComponent(s.replace(pluses, " ")), config.json ? JSON.parse(s) : s
		} catch (e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value
	}
	var pluses = /\+/g,
		config = $.cookie = function(key, value, options) {
			if (void 0 !== value && !$.isFunction(value)) {
				if (options = $.extend({}, config.defaults, options), "number" == typeof options.expires) {
					var days = options.expires,
						t = options.expires = new Date;
					t.setTime(+t + 864e5 * days)
				}
				return document.cookie = [encode(key), "=", stringifyCookieValue(value), options.expires ? "; expires=" + options.expires.toUTCString() : "", options.path ? "; path=" + options.path : "", options.domain ? "; domain=" + options.domain : "", options.secure ? "; secure" : ""].join("")
			}
			for (var result = key ? void 0 : {}, cookies = document.cookie ? document.cookie.split("; ") : [], i = 0, l = cookies.length; i < l; i++) {
				var parts = cookies[i].split("="),
					name = decode(parts.shift()),
					cookie = parts.join("=");
				if (key && key === name) {
					result = read(cookie, value);
					break
				}
				key || void 0 === (cookie = read(cookie)) || (result[name] = cookie)
			}
			return result
		};
	config.defaults = {}, $.removeCookie = function(key, options) {
		return void 0 !== $.cookie(key) && ($.cookie(key, "", $.extend({}, options, {
			expires: -1
		})), !$.cookie(key))
	}
}),
function() {
	function a(a) {
		return a.replace(t, "").replace(u, ",").replace(v, "").replace(w, "").replace(x, "").split(y)
	}

	function b(a) {
		return "'" + a.replace(/('|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n") + "'"
	}

	function c(c, d) {
		function e(a) {
			return m += a.split(/\n/).length - 1, k && (a = a.replace(/\s+/g, " ").replace(/<!--[\w\W]*?-->/g, "")), a && (a = s[1] + b(a) + s[2] + "\n"), a
		}

		function f(b) {
			var c = m;
			if (j ? b = j(b, d) : g && (b = b.replace(/\n/g, function() {
					return "$line=" + ++m + ";"
				})), 0 === b.indexOf("=")) {
				var e = l && !/^=[=#]/.test(b);
				if (b = b.replace(/^=[=#]?|[\s;]*$/g, ""), e) {
					var f = b.replace(/\s*\([^\)]+\)/, "");
					n[f] || /^(include|print)$/.test(f) || (b = "$escape(" + b + ")")
				} else b = "$string(" + b + ")";
				b = s[1] + b + s[2]
			}
			return g && (b = "$line=" + c + ";" + b), r(a(b), function(a) {
				if (a && !p[a]) {
					var b;
					b = "print" === a ? u : "include" === a ? v : n[a] ? "$utils." + a : o[a] ? "$helpers." + a : "$data." + a, w += a + "=" + b + ",", p[a] = !0
				}
			}), b + "\n"
		}
		var g = d.debug,
			h = d.openTag,
			i = d.closeTag,
			j = d.parser,
			k = d.compress,
			l = d.escape,
			m = 1,
			p = {
				$data: 1,
				$filename: 1,
				$utils: 1,
				$helpers: 1,
				$out: 1,
				$line: 1
			},
			q = "".trim,
			s = q ? ["$out='';", "$out+=", ";", "$out"] : ["$out=[];", "$out.push(", ");", "$out.join('')"],
			t = q ? "$out+=text;return $out;" : "$out.push(text);",
			u = "function(){var text=''.concat.apply('',arguments);" + t + "}",
			v = "function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);" + t + "}",
			w = "'use strict';var $utils=this,$helpers=$utils.$helpers," + (g ? "$line=0," : ""),
			x = s[0],
			y = "return new String(" + s[3] + ");";
		r(c.split(h), function(a) {
			a = a.split(i);
			var b = a[0],
				c = a[1];
			1 === a.length ? x += e(b) : (x += f(b), c && (x += e(c)))
		});
		var z = w + x + y;
		g && (z = "try{" + z + "}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:" + b(c) + ".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");
		try {
			var A = new Function("$data", "$filename", z);
			return A.prototype = n, A
		} catch (B) {
			throw B.temp = "function anonymous($data,$filename) {" + z + "}", B
		}
	}
	var d = function(a, b) {
		return "string" == typeof b ? q(b, {
			filename: a
		}) : g(a, b)
	};
	d.version = "3.0.0", d.config = function(a, b) {
		e[a] = b
	};
	var e = d.defaults = {
			openTag: "<%",
			closeTag: "%>",
			escape: !0,
			cache: !0,
			compress: !1,
			parser: null
		},
		f = d.cache = {};
	d.render = function(a, b) {
		return q(a, b)
	};
	var g = d.renderFile = function(a, b) {
		var c = d.get(a) || p({
			filename: a,
			name: "Render Error",
			message: "Template not found"
		});
		return b ? c(b) : c
	};
	d.get = function(a) {
		var b;
		if (f[a]) b = f[a];
		else if ("object" == typeof document) {
			var c = document.getElementById(a);
			if (c) {
				var d = (c.value || c.innerHTML).replace(/^\s*|\s*$/g, "");
				b = q(d, {
					filename: a
				})
			}
		}
		return b
	};
	var h = function(a, b) {
			return "string" != typeof a && (b = typeof a, "number" === b ? a += "" : a = "function" === b ? h(a.call(a)) : ""), a
		},
		i = {
			"<": "&#60;",
			">": "&#62;",
			'"': "&#34;",
			"'": "&#39;",
			"&": "&#38;"
		},
		j = function(a) {
			return i[a]
		},
		k = function(a) {
			return h(a).replace(/&(?![\w#]+;)|[<>"']/g, j)
		},
		l = Array.isArray || function(a) {
			return "[object Array]" === {}.toString.call(a)
		},
		m = function(a, b) {
			var c, d;
			if (l(a))
				for (c = 0, d = a.length; d > c; c++) b.call(a, a[c], c, a);
			else
				for (c in a) b.call(a, a[c], c)
		},
		n = d.utils = {
			$helpers: {},
			$include: g,
			$string: h,
			$escape: k,
			$each: m
		};
	d.helper = function(a, b) {
		o[a] = b
	};
	var o = d.helpers = n.$helpers;
	d.onerror = function(a) {
		var b = "Template Error\n\n";
		for (var c in a) b += "<" + c + ">\n" + a[c] + "\n\n";
		"object" == typeof console && console.error(b)
	};
	var p = function(a) {
			return d.onerror(a),
				function() {
					return "{Template Error}"
				}
		},
		q = d.compile = function(a, b) {
			function d(c) {
				try {
					return new i(c, h) + ""
				} catch (d) {
					return b.debug ? p(d)() : (b.debug = !0, q(a, b)(c))
				}
			}
			b = b || {};
			for (var g in e) void 0 === b[g] && (b[g] = e[g]);
			var h = b.filename;
			try {
				var i = c(a, b)
			} catch (j) {
				return j.filename = h || "anonymous", j.name = "Syntax Error", p(j)
			}
			return d.prototype = i.prototype, d.toString = function() {
				return i.toString()
			}, h && b.cache && (f[h] = d), d
		},
		r = n.$each,
		s = "break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",
		t = /\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,
		u = /[^\w$]+/g,
		v = new RegExp(["\\b" + s.replace(/,/g, "\\b|\\b") + "\\b"].join("|"), "g"),
		w = /^\d[^,]*|,\d[^,]*/g,
		x = /^,+|,+$/g,
		y = /^$|,+/;
	"function" == typeof define ? define(function() {
		return d
	}) : "undefined" != typeof exports ? module.exports = d : this.template = d
}();