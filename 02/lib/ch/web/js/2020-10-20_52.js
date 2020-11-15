/* combined js for web channel */
/* ----- filOtaz_de.conf.js ------------------------------------------------------------------- */

/* pat debug 1i11 */


if( ! window.filOtaz_de )       window.filOtaz_de = new Object;
if( ! window.filOtaz_de.conf )        //don't interfere!
window.filOtaz_de.conf = {
	
	canonical :	new function() {	var c = this;
		this.protocol =	'http';
		this.sub =	'www';
		this.domain =	'taz.de';
		this.path =	'/';
		this.host =	{  toString : function(){ return c.sub +'.'+ c.domain; }  };
		this.base =	{  toString : function(){ return c.protocol +'://'+ c.host; }  };
		this.toString =	function(){  return c.base + c.path;  };
		} ,


	flattr : {

		common : {		
			uid		: '10338' ,					// flatter user ID
			button		: 'compact' ,					// button style: 'compact' or none for the default
			url		: 'https://taz.de' ,
			title		: 'taz.de' ,					
			description	: 'taz, die tageszeitung - online News' ,
			tags		: 'News' ,
			category	: 'text' ,	// content type: text / images, ... see https://flattr.com/support/api
			language	: 'de_DE' ,
			hidden		: '0'		// '1' to hide things on flattr.com
			} ,

		api	: {
			protocol	: document.location.protocol ,
			domain		: 'api.flattr.com' ,
			base		: '/js/' ,
			version		: '0.5.0' ,
			file		: 'load.js' ,
			toString	: function(){  return this.protocol +'//'+ this.domain + this.base + this.version +'/'+ this.file;  }
			}

		} ,

	banking : {
		bridge    : 'Sch&ouml;n, dass Ihnen unsere Seite gef&auml;llt.',
		caption		:	'<br />Um unsere Arbeit zu honorieren, k&ouml;nnen Sie folgende Bankverbindung verwenden:' ,
		domestic	:	'TAZ Verlags- und Vertriebs GmbH' ,
		reference	:	'Verwendungszweck "taz-zahl-ich"' ,
		abroad		:	'IBAN DE81430609670100700104<br />BIC GENODEM1GLS'
		} ,
	bitcoin : {
                bridge    : 'Sch&ouml;n, dass Ihnen unsere Seite gef&auml;llt.',
                caption         :       '<br />Um unsere Arbeit zu honorieren, k&ouml;nnen Sie auch Bitcoins verwenden. Den Bitcoin-Betrag weisen Sie bitte in Ihrem Client zu:' ,
                domestic        :       '<center><br /><br /><img src="/static/images/bitcoinPNGll.png"i height="150" width="150" border="0"><br /><a href="bitcoin:165dtfwNvyMUbLGdqf87w8DfZX7i542Fyr?label=taz%20zahl%20ich" target="_blank" style="color:#961D2A;">165dtfwNvyMUbLGdqf87w8DfZX7i542Fyr</a><br /><strong>Hinweis:</strong> Der obige Link funktioniert nur, wenn ein entsprechender Bitcoin-Client auf Ihrem PC installiert ist.</center>'
                }

        }; //window.filOtaz_de.conf




/* ----- jquery-3.2.1.min.js ------------------------------------------------------------------- */

/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});


/* ----- jquery.cookie.js ------------------------------------------------------------------- */

/*!
 * jQuery Cookie Plugin v1.3
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function ($, document, undefined) {

	var pluses = /\+/g;

	function raw(s) {
		return s;
	}

	function decoded(s) {
		return decodeURIComponent(s.replace(pluses, ' '));
	}

	var config = $.cookie = function (key, value, options) {

		// write
		if (value !== undefined) {
			options = $.extend({}, config.defaults, options);

			if (value === null) {
				options.expires = -1;
			}

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = config.json ? JSON.stringify(value) : String(value);

			return (document.cookie = [
				encodeURIComponent(key), '=', config.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// read
		var decode = config.raw ? raw : decoded;
		var cookies = document.cookie.split('; ');
		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			if (decode(parts.shift()) === key) {
				var cookie = decode(parts.join('='));
				return config.json ? JSON.parse(cookie) : cookie;
			}
		}

		return null;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) !== null) {
			$.cookie(key, null, options);
			return true;
		}
		return false;
	};

})(jQuery, document);


/* ----- jquery.filOtaz_de_hashchange.js ------------------------------------------------------------------- */

/*	inspired and in parts copied from "Cowboy" Ben Alman's (c) 2010
	https://raw.github.com/cowboy/jquery-hashchange/v1.3/jquery.ba-hashchange.js
	dual licensed under the MIT and GPL licenses: http://benalman.com/about/license/
*/
(function(){

	// +++ "shortcut" binding and triggering, jQuery-style
	if( $.hashchange ) return;	// don't interfere

	$.fn[ 'hashchange' ] = function( fn ) {
		return fn ? this.on( 'hashchange', fn ) : this.trigger( 'hashchange' );
		};


	// +++ hashchange event
	if( $.event.special[ 'hashchange' ] ) return;	// don't interfere

	// stop here if natively supported
	if ( 'onhashchange' in window && ( document.documentMode === undefined || document.documentMode > 7 ) ) return;
		// IE8 running in IE7 compatibility mode reports true for 'onhashchange' in window, even
		// though the event isn't supported, so also test document.documentMode

	// polling loop for legacy browsers
	var timeout_id, hash;
	var poll = function() {
		if( window.location.hash != hash ) {
			hash = window.location.hash;
			$(window).trigger( 'hashchange' );
			}
		timeout_id = setTimeout( poll, 50 );
		};
	$.event.special[ 'hashchange' ] = {
		setup		: function() {		// Called only when the first 'hashchange' event is bound
			timeout_id || poll();
			},
		teardown	: function() {		// Called only when the last 'hashchange' event is unbound
			timeout_id && clearTimeout( timeout_id );
			timeout_id = undefined;
			}
		};

	})();


/* ----- jquery.overlay.js ------------------------------------------------------------------- */

/*
 * jQuery Simple Overlay
 * A jQuery Plugin for creating a simple, customizable overlay. Supports multiple instances,
 * custom callbacks, hide on click, glossy effect, and more.
 *
 * Copyright 2011 Tom McFarlin, http://tommcfarlin.com, @moretom
 * Released under the MIT License
 *
 * http://moreco.de/simple-overlay
 */

(function($) {

	$.fn.overlay = function(options) {

    var opts = $.extend({}, $.fn.overlay.defaults, options);
		return this.each(function(evt) {
      if(!$(this).hasClass('overlay-trigger')) {
        show(create($(this), opts), opts);
      }
		});
    
	}; // end overlay

  /*--------------------------------------------------*
   * helper functions
   *--------------------------------------------------*/
  
  /**
   * Creates the overlay element, applies the styles as specified in the 
   * options, and sets up the event handlers for closing the overlay.
   *
   * opts The plugin's array options.
   */
  function create($src, opts) {
  
    // prevents adding multiple overlays to a container
    $src.addClass('overlay-trigger');
  
    // create the overlay and add it to the dom
    var iTop = 0;
    if($.browser.mozilla && opts.container.toString() === 'body') { 
      iTop = $('html').scrollTop();
    } else {
      iTop = $(opts.container).scrollTop();
    } // end if/else
    
    var overlay = $('<div></div>')
      .addClass('overlay')
      .css({
        background: opts.color,
        opacity: opts.opacity,
        top: opts.container.toString() === 'body' ? iTop : $(opts.container).offset().top,
        left: $(opts.container).offset().left,
        width: opts.container === 'body' ? '100%' : $(opts.container).width(),
        height: opts.container === 'body' ? '100%' : $(opts.container).height(),
	position: opts.show == 'viewport' ? 'absolute' : 'fixed',
        /* position: 'fixed', */
        zIndex: 1000,
        display: 'none',
	overflow: opts.show == 'viewport' ? 'hidden' : 'visible'
        /*overflow: 'hidden'*/
      });

    // if specified, apply the gloss
    if(opts.glossy) {
      applyGloss(opts, overlay);     
    } // end if
    
    // setup the event handlers for closing the overlay
    if(opts.closeOnClick) {
      $(overlay).click(function() {
        close(overlay, opts);
        $src.removeClass('overlay-trigger');
      });
    } // end if

    
    // finally add the overlay
    $(opts.container).append(overlay);
   
    return overlay;
    
  } // end createOverlay
  
  /**
   * Displays the overlay using the effect specified in the options. Optionally
   * triggers the onShow callback function.
   *
   * opts The plugin's array options.
   */
  function show(overlay, opts) {
    
    switch(opts.effect.toString().toLowerCase()) {
    
      case 'fade':
        $(overlay).fadeIn('fast', opts.onShow);
        break;
      
      case 'slide':
        $(overlay).slideDown('fast', opts.onShow);
        break;
        
      default:
        $(overlay).show(opts.onShow);
        break;
    
    } // end switch/case
    
   $(opts.container).css('overflow', 'hidden');
   if (opts.show == 'viewport') { 
   	$(opts.container).css('overflow', 'hidden');
   } else { 
   	$(opts.container).css('overflow', 'scroll');
   }
    
  } // end show
  
  /**
   * Hides the overlay using the effect specified in the options. Optionally
   * triggers the onHide callback function.
   *
   * opts The plugin's array options.
   */
  function close(overlay, opts) {
    
    switch(opts.effect.toString().toLowerCase()) {
        
      case 'fade':
        $(overlay).fadeOut('fast', function() {
          if(opts.onHide) {
            opts.onHide();
          }
          $(this).remove();
        });
        break;
            
      case 'slide':
        $(overlay).slideUp('fast', function() {
          if(opts.onHide) {
            opts.onHide();
          }
          $(this).remove();
        });
        break;
            
      default:
        $(overlay).hide();
        if(opts.onHide) {
          opts.onHide();
        }
        $(overlay).remove();
        break;
            
    } // end switch/case
    
    $(opts.container).css('overflow', 'auto');
    
  } // end close
  
  /**
   * Adds the gloss effect to the overlay.
   *
   * opts     The plugin's options array
   * overlay  The overlay on which the gloss will be applied
   */
  function applyGloss(opts, overlay) {
  
    var gloss = $('<div></div>');
    $(gloss).css({
      background: '#fff',
      opacity: 0.2,
      width: '200%',
      height: '100%',
      position: 'absolute',
      zIndex: 1001,
      msTransform: 'rotate(45deg)',
      webkitTransform: 'rotate(45deg)',
      oTransform: 'rotate(45deg)'
    });
      
    // at the time of development, mozTransform didn't work with >= jQuery 1.5
    if($.browser.mozilla) {
     $(gloss).css('-moz-transform', 'rotate(45deg');
    } // end if
     
    $(overlay).append(gloss);
    
  } // end applyGloss
 
  /*--------------------------------------------------*
   * default settings
   *--------------------------------------------------*/
   
	$.fn.overlay.defaults = {
    color: '#000',
    opacity: 0.5,
    effect: 'none',
    onShow: null,
    onHide: null,
    closeOnClick: false,
    glossy: false,
    container: 'body'
	}; // end defaults

})(jQuery);


/* ----- promise.polyfill-2.0.2.min.js ------------------------------------------------------------------- */

/* 
 * Polyfill for ECMA6 Promise for older Browser
 * 
 * https://github.com/taylorhakes/promise-polyfill
 * 
 * Version 2.0.2
 */

!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n():"function"==typeof define&&define.amd?define(n):n()}(0,function(){"use strict";function e(){}function n(e){if(!(this instanceof n))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=undefined,this._deferreds=[],f(e,this)}function t(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,n._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var i;try{i=n(e._value)}catch(f){return void r(t.promise,f)}o(t.promise,i)}else(1===e._state?o:r)(t.promise,e._value)})):e._deferreds.push(t)}function o(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var o=t.then;if(t instanceof n)return e._state=3,e._value=t,void i(e);if("function"==typeof o)return void f(function(e,n){return function(){e.apply(n,arguments)}}(o,t),e)}e._state=1,e._value=t,i(e)}catch(u){r(e,u)}}function r(e,n){e._state=2,e._value=n,i(e)}function i(e){2===e._state&&0===e._deferreds.length&&n._immediateFn(function(){e._handled||n._unhandledRejectionFn(e._value)});for(var o=0,r=e._deferreds.length;r>o;o++)t(e,e._deferreds[o]);e._deferreds=null}function f(e,n){var t=!1;try{e(function(e){t||(t=!0,o(n,e))},function(e){t||(t=!0,r(n,e))})}catch(i){if(t)return;t=!0,r(n,i)}}var u=function(e){var n=this.constructor;return this.then(function(t){return n.resolve(e()).then(function(){return t})},function(t){return n.resolve(e()).then(function(){return n.reject(t)})})},c=setTimeout;n.prototype["catch"]=function(e){return this.then(null,e)},n.prototype.then=function(n,o){var r=new this.constructor(e);return t(this,new function(e,n,t){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof n?n:null,this.promise=t}(n,o,r)),r},n.prototype["finally"]=u,n.all=function(e){return new n(function(n,t){function o(e,f){try{if(f&&("object"==typeof f||"function"==typeof f)){var u=f.then;if("function"==typeof u)return void u.call(f,function(n){o(e,n)},t)}r[e]=f,0==--i&&n(r)}catch(c){t(c)}}if(!e||"undefined"==typeof e.length)throw new TypeError("Promise.all accepts an array");var r=Array.prototype.slice.call(e);if(0===r.length)return n([]);for(var i=r.length,f=0;r.length>f;f++)o(f,r[f])})},n.resolve=function(e){return e&&"object"==typeof e&&e.constructor===n?e:new n(function(n){n(e)})},n.reject=function(e){return new n(function(n,t){t(e)})},n.race=function(e){return new n(function(n,t){for(var o=0,r=e.length;r>o;o++)e[o].then(n,t)})},n._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){c(e,0)},n._unhandledRejectionFn=function(e){void 0!==console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var l=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw Error("unable to locate global object")}();l.Promise?l.Promise.prototype["finally"]||(l.Promise.prototype["finally"]=u):l.Promise=n});


/* ----- bootstrap-tooltip.min.js ------------------------------------------------------------------- */

/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2017 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=0ea5cbdba2e03cf80a169b3fb0432823)
 * Config saved to config.json and https://gist.github.com/0ea5cbdba2e03cf80a169b3fb0432823
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.tooltip"),s="object"==typeof e&&e;!n&&/destroy|hide/.test(e)||(n||o.data("bs.tooltip",n=new i(this,s)),"string"==typeof e&&n[e]())})}var i=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};i.VERSION="3.3.7",i.TRANSITION_DURATION=150,i.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},i.prototype.init=function(e,i,o){if(this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&t(t.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var n=this.options.trigger.split(" "),s=n.length;s--;){var r=n[s];if("click"==r)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=r){var a="hover"==r?"mouseenter":"focusin",l="hover"==r?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},i.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults();return this._options&&t.each(this._options,function(t,o){i[t]!=o&&(e[t]=o)}),e},i.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusin"==e.type?"focus":"hover"]=!0),i.tip().hasClass("in")||"in"==i.hoverState?void(i.hoverState="in"):(clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?void(i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)):i.show())},i.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},i.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusout"==e.type?"focus":"hover"]=!1),i.isInStateTrue()?void 0:(clearTimeout(i.timeout),i.hoverState="out",i.options.delay&&i.options.delay.hide?void(i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)):i.hide())},i.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var o=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!o)return;var n=this,s=this.tip(),r=this.getUID(this.type);this.setContent(),s.attr("id",r),this.$element.attr("aria-describedby",r),this.options.animation&&s.addClass("fade");var a="function"==typeof this.options.placement?this.options.placement.call(this,s[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,p=l.test(a);p&&(a=a.replace(l,"")||"top"),s.detach().css({top:0,left:0,display:"block"}).addClass(a).data("bs."+this.type,this),this.options.container?s.appendTo(this.options.container):s.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var h=this.getPosition(),u=s[0].offsetWidth,f=s[0].offsetHeight;if(p){var c=a,d=this.getPosition(this.$viewport);a="bottom"==a&&h.bottom+f>d.bottom?"top":"top"==a&&h.top-f<d.top?"bottom":"right"==a&&h.right+u>d.width?"left":"left"==a&&h.left-u<d.left?"right":a,s.removeClass(c).addClass(a)}var v=this.getCalculatedOffset(a,h,u,f);this.applyPlacement(v,a);var g=function(){var t=n.hoverState;n.$element.trigger("shown.bs."+n.type),n.hoverState=null,"out"==t&&n.leave(n)};t.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",g).emulateTransitionEnd(i.TRANSITION_DURATION):g()}},i.prototype.applyPlacement=function(e,i){var o=this.tip(),n=o[0].offsetWidth,s=o[0].offsetHeight,r=parseInt(o.css("margin-top"),10),a=parseInt(o.css("margin-left"),10);isNaN(r)&&(r=0),isNaN(a)&&(a=0),e.top+=r,e.left+=a,t.offset.setOffset(o[0],t.extend({using:function(t){o.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),o.addClass("in");var l=o[0].offsetWidth,p=o[0].offsetHeight;"top"==i&&p!=s&&(e.top=e.top+s-p);var h=this.getViewportAdjustedDelta(i,e,l,p);h.left?e.left+=h.left:e.top+=h.top;var u=/top|bottom/.test(i),f=u?2*h.left-n+l:2*h.top-s+p,c=u?"offsetWidth":"offsetHeight";o.offset(e),this.replaceArrow(f,o[0][c],u)},i.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},i.prototype.hide=function(e){function o(){"in"!=n.hoverState&&s.detach(),n.$element&&n.$element.removeAttr("aria-describedby").trigger("hidden.bs."+n.type),e&&e()}var n=this,s=t(this.$tip),r=t.Event("hide.bs."+this.type);return this.$element.trigger(r),r.isDefaultPrevented()?void 0:(s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",o).emulateTransitionEnd(i.TRANSITION_DURATION):o(),this.hoverState=null,this)},i.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},i.prototype.hasContent=function(){return this.getTitle()},i.prototype.getPosition=function(e){e=e||this.$element;var i=e[0],o="BODY"==i.tagName,n=i.getBoundingClientRect();null==n.width&&(n=t.extend({},n,{width:n.right-n.left,height:n.bottom-n.top}));var s=window.SVGElement&&i instanceof window.SVGElement,r=o?{top:0,left:0}:s?null:e.offset(),a={scroll:o?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},l=o?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},n,a,l,r)},i.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},i.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,r=this.getPosition(this.$viewport);if(/right|left/.test(t)){var a=e.top-s-r.scroll,l=e.top+s-r.scroll+o;a<r.top?n.top=r.top-a:l>r.top+r.height&&(n.top=r.top+r.height-l)}else{var p=e.left-s,h=e.left+s+i;p<r.left?n.left=r.left-p:h>r.right&&(n.left=r.left+r.width-h)}return n},i.prototype.getTitle=function(){var t,e=this.$element,i=this.options;return t=e.attr("data-original-title")||("function"==typeof i.title?i.title.call(e[0]):i.title)},i.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},i.prototype.tip=function(){if(!this.$tip&&(this.$tip=t(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},i.prototype.enable=function(){this.enabled=!0},i.prototype.disable=function(){this.enabled=!1},i.prototype.toggleEnabled=function(){this.enabled=!this.enabled},i.prototype.toggle=function(e){var i=this;e&&(i=t(e.currentTarget).data("bs."+this.type),i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i))),e?(i.inState.click=!i.inState.click,i.isInStateTrue()?i.enter(i):i.leave(i)):i.tip().hasClass("in")?i.leave(i):i.enter(i)},i.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null,t.$element=null})};var o=t.fn.tooltip;t.fn.tooltip=e,t.fn.tooltip.Constructor=i,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=o,this}}(jQuery);

/* ----- marOtaz_de.gomobile.js ------------------------------------------------------------------- */

if( ! filOtaz_de )      filOtaz_de = new Object;
(function(){
	if( filOtaz_de.goMobile )  return; //don't interfere!

filOtaz_de.goMobile = function(){

	if ( ((location.href.match(/goMobile/g) || []).length) > 1 ) {
		console.log( 'prevent loop' );
		return
	}
	

 if( $.cookie('ratioURL_channel') == 'web' ){ 
 		return;
		// web view was selected explicitly
	}
	var getWidth;
	if (screen.width > screen.height){
		   getWidth = screen.height;
		} else {
		   getWidth = screen.width;
	}
	


	if (getWidth < 551) {
		//mobile

		var goto = location.pathname;
		// to do: look if this is running
		if ( (/goMobile/).test( location.search ) && (/count/).test( location.href ) || ( location.search.indexOf('goMobile') > 1 ) ){	// back here despite cache-killer: give up.
				
				if ((/;web/).test( location.pathname )) {
					location.href = goto
					
				};
//				document.createElement("img").src='/count/debug/go-mobile/quit/cachekiller+'+ (new Date()).getTime();
				return false;
			}
		
			if( (/moby/).test($.cookie('ratioURL_channel') ) ) { // back here despite cookie: reload w/ cache-killer to prevent loop
			// Google-Bot needs this to see mobile (https://search.google.com/search-console/inspect fil 2018-12-03)
			location.href = '/count/redirect/go-mobile-nocache'+ goto 
				+( location.search ? location.search +'&' : '?' ) +'goMobile2='+ (new Date()).getTime()
				+location.hash;
//			document.createElement("img").src='/count/debug/go-mobile/quit/cookie+'+ (new Date()).getTime();
			return;
			}

		$.cookie('ratioURL_channel', 'moby', {domain:'taz.de', path:'/'} );	// try to set channel cookie …
		if( (/moby/).test($.cookie('ratioURL_channel') ) ) {	// … cookie was successfully set: reload …
			if (location.search.indexOf('nocache') != -1) return;	// old cache killer for transition period
			location.reload( true );
			return;
			}
		else {						// … setting cookie failed: load explicit channel url …
			if (location.search.indexOf('nocache') != -1) return;	// old cache killer for transition period
			if( goto =='/' )
				goto = '/!p4608;moby/';
			else	goto = goto.replace(/[/]$/,';moby/');
			location.href = '/count/redirect/go-mobile-nocookie'+ goto 
				+location.search
				+location.hash;
			return;
			}

		} else {
		//desktop
	}

	};	//filOtaz_de.goMobile
	})();


/* ----- filOtaz_de.Href.js ------------------------------------------------------------------- */

(function(){
filOtaz_de ||( filOtaz_de ={} ); if( filOtaz_de.Href ) return;	// don't interfere!

/* parse a href/URL-string like window.location does.
   inspired by 	https://gist.github.com/jlong/2428561, http://james.padolsey.com/snippets/parsing-urls-with-the-dom/

   /!\                                            /!\
      do not use my instances as prototype!
      I carry instance data in constructor closure, 
      data would be shared beyond derived objects.
   /!\                                            /!\
*/


// gonna use Object.defineProperty() (ECMAScript 5.1 / JavaScript 1.8.5 / Gecko 2+, IE 9+)
// (https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#Specifications)
var defineProperty = undefined;

if(	(function( o ){			// inspired by https://github.com/es-shims/es5-shim/blob/master/es5-sham.js

		// IE 8 features Object.defineProperty for DOM Elements only …
		try{	// … so no testing for function existance. we have to try …
			Object.defineProperty( o, 'p', { value: true } );
			return o.p;
			} catch(e){ return false; }

		})( {} ) 
	)
	// phew, we're fine.
	defineProperty = Object.defineProperty;

else if( Object.prototype.__defineGetter__ instanceof Function ){

	// half so. Gecko <2 et al
	defineProperty = function( obj, prop, descriptor ) {
		// minimal subset implementation for our limited purposes only
		// inspired by https://gist.github.com/brettz9/4093766#file_html5_dataset.js
		var prop =''+ prop;
		if (descriptor.get)  Object.prototype.__defineGetter__.call(obj, prop, descriptor.get);
		if (descriptor.set)  Object.prototype.__defineSetter__.call(obj, prop, descriptor.set);
		};

	}
// else - no rescue. IE <9
	// cope later in code: check for our defineProperty's existance


var Href = filOtaz_de.Href = function( arg ) {
	if( arg instanceof Href )  return arg;
	if( typeof arg =='undefined' )  arg ='';	// no arg uses location, just as ''

	// let the DOM interface do the work
	var a = document.createElement('a');
	a.href = arg;
		// capsuled instance data, by means of closure w/ accessor methods below.
		// -> need to define those when constructing. No putting in prototype.

	if( !defineProperty ){	// IE <9
		a.getParams = proto.getParams, a.setAllParams = proto.setAllParams, a.setParams = proto.setParams;
		return a;	// wild west, no protection, just carry around that a Element out there
		}

	var me = this;

	// writeable properties
	['href','protocol','username','password','host','hostname','port','pathname','search','hash'].forEach( function( name ){
		defineProperty( me, name, {
			get: function( ) { return a[name];     },
			set: function(v) { return a[name] = v; },
			enumerable: true, configurable: false
			});
		});

	// readonly properties
	['origin'].forEach( function( name ){
		defineProperty( me, name, {
			get: function( ) { return a[name];     },
			enumerable: true, configurable: false
			});
		});

	// who we do think we are
	this.toString = function(){ return a.toString(); };


	/*	will not work for IE <9, so don't expose (yet?)
	// extended properties

	defineProperty( me, 'search', {
		get: function( ) { return a.search;     },
		set: function( v ) {
			if( typeof v !=='object' || v instanceof String )
				return a.search = v;
			var r = this.setAllParams( v );
			return r === this ? v : r;
			},
		enumerable: true, configurable: false
		});

	defineProperty( me, 'parameters', {
		get: function( ) {  return this.getParams(Object);  },
		set: function( v ) {
			var r = this.setParams( v );
			return r === this ? v : r;
			},
		enumerable: true, configurable: false
		});
	*/

	};


var proto = Href.prototype = {
	getParams	: function( k ){

		if( k ===undefined || k === String || k ==='' )
			return this.search;

		if( typeof k ==='string' || k instanceof String )
			return this.getParams( Object )[ k ];

		if( k === Array  || k instanceof Array )
			return this.search.replace(/^[?]/, '').split('&');

		if( k === Object || k instanceof Object ) {
			var o ={};
			$.each( this.getParams(Array), function(i,p){
				if( !p.length ) return;
				p = p.split('=');
				o[ p.shift() ] = p.length ? p.join('=') : true;
				} );
			return o;
			}
		},
	setAllParams	: function( params ){
		if( typeof params !=='object' || params instanceof String )
			this.search = params;
		else if( params instanceof Array  )
			this.search = params.join('&');
		else if( params instanceof Object ) {
			var a =[];
			$.each( params, function(k,v){
				if( v ===false || v ===undefined ) return;
				if( v ===true )  a.push( k );
				else a.push( k +'='+ v );
				});
			this.setAllParams( a );
			}
		return this;
		},
	setParams	: function( param ){

		if( typeof param !=='object' || param instanceof String )
			return this.setParams( (new Href).setAllParams( param ).getParams(Object) );

		if( param instanceof Array  )
			return this.setParams( (new Href).setAllParams( param ).getParams(Object) );

		if( param instanceof Object )
			return this.setAllParams( $.extend( this.getParams(Object), param ) );

		},

	none : null
	};

})()


/* ----- filOtaz_de.types.js ------------------------------------------------------------------- */

if( ! window.filOtaz_de )       window.filOtaz_de = new Object;
(function(){
var f = window.filOtaz_de;


if( ! f.URL )        //don't interfere!
f.URL = function(arg) {
	var u = this;
	
	var mydefault = {
		protocol	: ''+ f.conf.canonical.protocol +':',
		hostname	: ''+ f.conf.canonical.host,
		port		: '',
		dir		: ''+ f.conf.canonical.path,
		file		: ''
		};

	// defaults
	this.protocol	= mydefault.protocol;
	this.hostname	= mydefault.hostname;
	this.port	= mydefault.port; 
	this.dir	= mydefault.dir;
	this.file	= mydefault.file;
	this.search	= '';
	this.hash	= '';
	this.valid	= true;

	// argument?
	if( arg ) (function(){
		var a,e,p;

		if( arg instanceof f.URL ) {
			if( arg.protocol )  u.protocol	= arg.protocol;
			if( arg.hostname )  u.hostname	= arg.hostname;
			if( arg.port     )  u.port	= arg.port;
			e = arg.pathname.split('/'); 
			u.file		= e.pop();
			u.dir		= e.join('/') +'/';
			u.search	= arg.search;
			u.hash		= arg.hash;
			u.valid 	= true;
			}	
		else {
			e = arg.toString();
	
			// regard everything from the first '#' as anchor string
			a = e.split('#');
			e = a.shift();		// e has no more '#'
			u.hash   =  a.length>0 ? '#'+ a.join('#') : '';		// >1 times '#' valid ???

			// regard everything from first '?' to first '#' as query string
			a = e.split('?');
			e = a.shift();		// e has no more '?'
			u.search = a.length>0 ? '?'+ a.join('?') : '';		// >1 times '?' valid ???
		
			// regard everything before '://' as protocol name
			a = e.split('://');
			p = a.length>1;
			u.protocol = p ? a.shift()+':' : window.location.protocol;		// empty protocol valid ???
			e = a.join('://');				// >1 times '://' valid ???

			// path components
			a = e.split('/');
			e = p ? a.shift() : '';		// regard first path component as host if we have a protocol
			if( p )  a.unshift( '' );	// make path absolute
			u.file = a.pop();		// regard everything from last '/' as file
			var dir = '';
			if( !p ) if( a.length==0 || a[0] ) dir += (new f.URL( window.location )).dir;		// no dir or relative dir
			if( p || a.length>0 )  dir += a.join('/') +'/';
			u.dir  = dir;

			// regard everything after the first ':' as port if numeric
			a = e.split(':');
			u.hostname = p ? a.shift() : window.location.hostname;
			e = a.join(':');
			if( p ) if( e ) if( u.valid = e>0 )  u.port = e;	// port is positive numeric
			if( !p ) u.port = window.location.port;
			}
		})();

	this.host = 	{  toString : function(){ if( !u.hostname ) return ''; return ''+ u.hostname + ( u.port ? ':'+ u.port : '' ); }  };
	this.pathname =	{  toString : function(){ return ''+ u.dir + u.file; }  };
	this.href =	{  toString : function(){ return u.toString(); }  };

	this.toString = function() {
		if( !this.valid ) return undefined;
		var ph = '';
		if( this.protocol && this.host )  ph = this.protocol +'//' + this.host;
		return ph + this.pathname + this.search + this.hash;
		};

	this.canonicalize = function() {
/*		var C = new Function; C.prototype = this;
		var c = new C;
*/		var c = this;
		if( f.conf.canonical.protocol )  c.protocol = ''+ f.conf.canonical.protocol +':';
		if( f.conf.canonical.host     )  c.hostname = ''+ f.conf.canonical.host;
		if( f.conf.canonical.port     )  c.port     = ''+ f.conf.canonical.port;
		return c;
		};


        }; //f.URL


if( ! f.LegacyArticle )        //don't interfere!
f.LegacyArticle = function() {
        var a = this;

	this.defined = false;
	this.url =
	this.kicker = 
	this.headline =
	this.lead =
	this.author = '';

	this.fromNode = function( node ) {  
		var containerN = $( node ).first();
		if( containerN.length<1 ) return undefined;

		var urlN = $('a#articleURL');
		var isArticlePage = urlN.length>0;
		if( !isArticlePage ) urlN = $('a.objlink',containerN);

		var urlPath = urlN.first().attr('href');
		if( !urlPath ) return undefined;
		this.url = (new f.URL( urlPath )).canonicalize();
		if( !this.url.valid ) return undefined;

		var articleN    = isArticlePage ? $('.sectbody', containerN) : urlN;
		var kickerN     = $( 'h4'                            , articleN).first();
		var headlineN   = $( isArticlePage ? 'h1'      : 'h3', articleN).first();
		var introN      = $( isArticlePage ? 'p.intro' : 'p' , articleN).first();
		var authorN	= $( '.author'                       , introN  ).first();
		
		if(   kickerN.length>0 )  this.kicker   =   kickerN.text();
		if( headlineN.length>0 )  this.headline = headlineN.text();
		if(    introN.length>0 )  this.lead     =    introN.text();
		if(   authorN.length>0 )  this.author	=   authorN.text();

		this.defined = true;
		return this;
		};

	// this.fromURL = function( url  ) {}

	this.toThing = function() {
		var t = new f.Thing(this);
		t.title = this.kicker;
		if( this.kicker.length>0 && this.headline.length>0 ) t.title += ': ';
		t.title += this.headline;
		t.descr = this.lead;
		t.defined = true;
		return t;
		}
	
	}; //f.LegacyArticle


if( ! f.Picture )        //don't interfere!
f.Picture = function() {
	
	this.defined = false;
	this.url =
	this.src =
	this.title =
	this.caption =
	this.credit = '';

	}; //f.Picture


if( ! f.Tom )        //don't interfere!
f.Tom = function() {
	
	this.defined = false;
	this.url =
	this.src =
	this.published = '';

	this.fromNode = function( node ) {
		if( !node ) return undefined;

		var containerN = $( node ).first().parent();
		if( containerN.length<1 ) return undefined;

		var tomN = $('#popup_content_tom', containerN).first();
		if( tomN.length<1 ) return undefined;

		this.url = (new f.URL( window.location )).canonicalize();
		if( !this.url.valid ) return undefined;

		var imgsrc = $('.tom_content img', tomN).attr('src');
		if( !imgsrc ) return undefined;

		this.src = (new f.URL( imgsrc )).canonicalize();
		if( !this.src.valid ) return undefined;

		var tomdate = $('.form_big_left_popup', tomN).text().split(' ').pop().split('.');
		this.published = new Date( tomdate[2], tomdate[1]-1, tomdate[0] );

		this.defined = true;
		return this;
		}

	this.toThing = function() {
		var t = new f.Thing(this);
		t.title = 'ToUCHE vom '+ this.published.getDate() +'.'+ (this.published.getMonth()+1) +'.'+ this.published.getFullYear();
		t.descr = 'by (c)Tom';
		t.defined = true;
		return t;
		}
	
	}; //f.Tom



if( ! f.Thing )        //don't interfere!
f.Thing = function(obj) {

	if( !obj ) return undefined;

	this.defined = false;
	this.obj = obj;
	if( obj.id    ) this.id    = obj.id;
	if( obj.url && obj.url.valid ) this.url = obj.url;
	if( obj.title ) this.title = obj.title;
	if( obj.descr ) this.descr = obj.descr;
	
	if( obj instanceof f.LegacyArticle ) {	var a=obj;
		this.title = a.kicker + ( a.kicker ?': ' :'' ) + a.headline;
		this.descr = a.lead;
		}

	if( obj instanceof f.Picture ) {	var p=obj;
		this.title = p.title ? p.title : p.caption;
		this.descr = p.descr ? p.descr : p.caption;
		}

	if( this.url && this.title ) this.defined = true;
	}; //f.Thing


})()


/* ----- filOtaz_de.Article.js ------------------------------------------------------------------- */

if( ! filOtaz_de )	filOtaz_de = new Object;

(function(){
	if( filOtaz_de.Cxml )	return;	//don't interfere!


	// parser functions (to be generalized)

	var dom2obj = function( n, opt ){  var node = $(n);
		if( opt.handler && opt.handler[ n.tagName ] && opt.handler[ n.tagName ] instanceof Function )
			return opt.handler[ n.tagName ]( n, opt );
		var Node = function( text ) {
			this.toString = function(){ return text; }
			};
		var children = node.children();
		var obj = new Node;
		if( children.length )	children.each( function( i, n ){
			if( opt.ignore && opt.ignore[ n.tagName ] )
				return;
			if( typeof obj[ n.tagName ] === 'undefined' ) 
				obj[ n.tagName ] = dom2obj( n, opt )
			else	{	// some children share tag name
				if( !( obj[ n.tagName ] instanceof Array ) )
					obj[ n.tagName ] = [ obj[ n.tagName ] ];
				obj[ n.tagName ].push( dom2obj( n, opt ) );
				}
			} )
		else	obj = new Node( node.text() );
		$( node[0].attributes ).each( function( i, a ){
			obj['_'+ a.name ] = a.value;
			} );
		return obj;
		}

	var valXmlDomEl = function( xmlDomEl ) {
		var xmlDomEl = $( xmlDomEl )[0];	// unwrap jQ
//		if( ! xmlDomEl.ownerDocument instanceof window.XMLDocument )	//breaks in IE
		if( !xmlDomEl.firstChild )
			return undefined;
		return xmlDomEl;
		}

	var xmlDom2obj = function( xmlDomEl, opt ) {
		var xmlDomEl = valXmlDomEl( xmlDomEl );
		return	xmlDomEl
			? dom2obj( xmlDomEl, opt )
			: undefined
			;
		}

	var cXmlDom2Date = function( cXmlDomEl, opt ) {
		var cXmlDomEl = valXmlDomEl( cXmlDomEl );
		var ts = $( cXmlDomEl  ).find('>ts');
		if( ts.length !=1 )	return undefined;
		return new Date( parseInt( ts.text(), 10 ) *1000 );
		}

	var cXmlDom2obj = function( cXmlDomEl, opt ) {
		if( !opt )		var opt		= {};
		if( !opt.handler )	opt.handler	= {};
		opt.handler.published
			= opt.handler.modified
			= opt.handler.generated
			= cXmlDom2Date;
		return xmlDom2obj( cXmlDomEl, opt );
		}


	filOtaz_de.Cxml = function( cXmlDomEl, options ) {

		this.toObj = function() {
			return cXmlDom2obj( cXmlDomEl, options );
			}

		}; //Cxml constructor


	})(); //filOtaz_de.Cxml


(function(){
	if( filOtaz_de.Article )	return;	//don't interfere!


	// ratioURL handling to be generalized
	//var ratio_channel = document.location.pathname.replace(/^.*(;[A-z0-9_-]+).*$/, "$1");
	var ratio_channel = document.location.pathname.replace(/^.*![^;]*([^/]*).*$/, "$1");


	// class functions: input

	var cXmlDom2Article = function( xmlDomEl ) {

//		var article = cXmlDom2obj( xmlDomEl );
		var article = (new filOtaz_de.Cxml( xmlDomEl ) ).toObj();

		if( !( article && article._type == 'article' && article.meta && article.meta.id ) )
			return undefined;

		// data normalization / extrapolation
		article.category = article.category || ( article.meta && article.meta.category );
		article.category = article.category || { _id : 0 };
		if( article.category && article.category._id && !article.category._token ) (function() {
			var i = article.category._id;
			article.category._token =
				i==11 || i==15 || i==17			? 'product'	:
				i==12 || i==13 || i==14 || i==16	? 'story'	:
				'report'
				;
			})();
		$( article.related ).each( function( i, rel ){
			if( rel._rel == 'department' && rel.directory && rel.directory.title )
				article.department = rel.directory;
			} );

		return article;
		};


	// class functions: output

	var article2htmlTeaser = function( article, def ) {
		if( ! article )	return undefined;
		if( ! def )	var def = { kicker: true, headline: true };

		if( def.compact ) {
			if( article.category._token == 'product' ) {
				def.kicker	= false;
				def.headline	= false;
				def.picture	= true;
				def.teaser	= true;
				}
			if( article.category._token == 'story' ) {
				def.picture	= true;
				def.teaser	= true;
				}
			}
		if( def.teaser && article.teaser && article.teaser.lead )
				def.lead	= false;
		if( def.picture && ! article.picture ) {
				def.lead	= true;
				def.teaser	= false;
				}
		def.hint = true;

		var pictured = def.picture && article.picture ? 'pictured' :'';

		try {
		return (	def.department	&& article.department
					? $('<a class="dept" />')
						.attr('href', article.department.meta.url.path[0]._href + ratio_channel )
						.text(''+ article.department.title )
					: $()
			).add( $('<a class="objlink" />')
				// .attr('href', article.meta.url.path[0]._href + ratio_channel )
				.attr('href', 
					( article.meta.url.base._href !='http://www.taz.de' ? article.meta.url.base._href :'' ) +
					( article.meta.url.path._href ? article.meta.url.path._href : article.meta.url.path[0]._href )
					+ ratio_channel
					)
				.addClass( pictured )
				.addClass( article.category && article.category._token	? article.category._token	:'' )
				.append(
					def.kicker	&& article.kicker
						? $('<h4 />').text(''+ article.kicker )				:'',
					def.headline	&& article.headline
						? $('<h3 />').text(''+ article.headline )			:'',
					def.lead	&& article.lead
						? $('<p  />').text(''+ article.lead )				:'',
					def.teaser	&& article.teaser	&& article.teaser.lead
						? $('<p  />').html(''+ article.teaser.lead )			:'',
					pictured
						? $('<img />').attr('src', article.picture.pixmap[1]._src )	:'',
					def.hint	&& article.teaser	&& article.teaser.hint
						? $('<div class="hint" />').text(''+ article.teaser.hint )	:''
					)
				)
			;
		} catch ( e ) {  console.log(e);  }
		}; // article2htmlTeaser


filOtaz_de.Article = function( arg ) {	// arg : c.XML

	if( typeof arg === 'undefined' ) {
		// backward compatibility
		if( filOtaz_de.LegacyArticle instanceof Function )
			return new filOtaz_de.LegacyArticle;
		return undefined;
		}

	// private
	var article;

	// argument interpretation
	article =	cXmlDom2Article( arg );		// try c.xml DOM interpretation

	if( ! article && this.fromHtmlDom instanceof Function )
		article = this.fromHtmlDom( arg );	// try html DOM interpretation

	if( !article ) return undefined;


	// output
	this.teaser = function( def ) {
		return article2htmlTeaser( article, def );
		}; //this.teaser

	}; //Article constructor



})();


/* ----- filOtaz_de.HtmlList.js ------------------------------------------------------------------- */

(function(){	// "class" filOtaz_de.HtmlList
	if( filOtaz_de.HtmlList )	return;	// don't interfere!



// constructor
filOtaz_de.HtmlList = function( def ) {	//{ class, role }

		// private
		var node = $('<ul />')
			.addClass( def.className )
			.addClass( def.role )
			.attr('role', def.role )
			;
		var count = 0;
		var last = $();

		// publish
		this.definition	= function(){ return def; };
		this.length	= function(){ return node.find('>li').length; };


		// they may expand us
		this.append = function( inner ){
			count++;
			last.removeClass('last');
			last = $('<li />')
				.addClass( 
					( count==1 ? 'first ' : '' )
					+ 'last '
					+ ( count % 2 ? 'odd' : 'even' )
					+ ( count % 3 ? ' by3' : '' )
					)
				.append( inner )
				.appendTo( node )
				;
			return this;
			};

		// they may add classes
		this.addClass = function( cl ){
			node.addClass( cl );
			return this;
			};

		// they may put us somewhere
		this.appendTo = function( o ){
			node.appendTo( o );
			return this;
			};
		this.prependTo = function( o ){
			node.prependTo( o );
			return this;
			};
/*
		// they may remove us
		this.remove = function() {
			node.remove();
			};
*/

		}; //filOtaz_de.HtmlList constructor



})(); // "class" filOtaz_de.HtmlList


/* ----- steffiOtaz_de.WebelementSwitch.js ------------------------------------------------------------------- */

if (!window.steffiOtaz_de) window.steffiOtaz_de = new Object;

(function() {

	if (steffiOtaz_de.WebelementSwitch) {
		return;
	}

	steffiOtaz_de.WebelementSwitch = function(definition) {
		
		function setWebelementSwitch(webelementId) {
			
			// feature configuration
			const idCheckEnabled = true;
			const internalProviderCheckEnabled = true;
			const externalProviderCheckEnabled = true;
			
			// cookie name for saving allowed external providers
			const cookieName = "consentWebelementConfig";
			const cookieExpirationDays = 30;
			
			// allowed webelement ids
			const allowedIds = ['5667876'];
			
			// regex for allowed providers
			const allowedInternalProviders = ['id="abortionMap"', 'class="full picture webelement-html-content-videoloop"', 'action="https://taz.de/!', 'href="/lib/ch/web/css/form.css', 'id="informant_anchor"','onclick="window._sp_.loadPrivacyManagerModal', 'href="http://www.taz.de/!', 'action="https://taz.de/scripts/', 'id="reward', 'src="/fileadmin/static', "src='https://taz.de/fileadmin", 'href="/uploads/images', 'font-family: taz_', 'form id="formchr"', 'src="/static/' ];
			const allowedExternalProviders = ['src="//datawrapper.dwcdn.net','src="https://taz-vorgelesen.podigee.io', 'src="https://datawrapper.dwcdn.net', 'class="podigee-podcast-player"',"podigee.io/embed", "src='https://d2c0cdjj8gf5hk.cloudfront.net/js/dpa.js'" ];
			const previewExternalProviders = 	 ['src="https://www.youtu', 'class="twitter-tweet', 'class="instagram-media', 'src="https://open.spotify.com/', 'src="/fileadmin/quiz-files/tabletop.min.js', 'src="https://tazde.carto.com', 'src="https://giphy.com'];
			const previewExternalProvidersText = ['Youtube',				'Twitter', 				'Instagram', 			  'Spotify', 						'Zugriff auf google sheets',				  'Carto.com',					  'Giphy' ];
			//const allowedExternalProviders = [{ name: 'datawrapper1', pattern: 'src="//datawrapper.dwcdn.net'},
			//									{ name: 'datawrapper2', pattern: 'src="https://datawrapper.dwcdn.net'},
			//									{name: 'podigee', pattern: 'class="podigee-podcast-player"'}];
			
			// regex for content text optimization
			const twitterRegex = RegExp('');
			const youtubeRegex = RegExp('');
			
			// cookie functions for config			
//			function initialCookieCheck() {
//				var cookieValue = getCookieValue();
//				if(cookieValue === undefined) {
//					allowedExternalProviders.forEach(initialAddToCookie);
//				}
//			}
//			
//			function initialAddToCookie(providerRegexElement) {
//				addToCookie(providerRegexElement);
//			}
//			
//			function checkCookie(providerRegexElement) {
//				var cookieValue = getCookieValue();
//				if(cookieValue !== undefined && Array.isArray(cookieValue)  ) {
//					console.log( cookieValue ); 
//					if(cookieValue.indexOf(providerRegexElement.name) !== -1) {
//						return true;
//					} else {
//						return false;
//					}
//				} else {
//					return false;
//				}
//			}
//			
//			function getCookieValue() {
//				var name = cookieName + "=";
//				var result = '{}';
//				var decodedCookie = decodeURIComponent(document.cookie);
//				var ca = decodedCookie.split(';');
//				for(var i = 0; i <ca.length; i++) {
//					var c = ca[i];
//					while (c.charAt(0) == ' ') {
//						c = c.substring(1);
//					}
//					if (c.indexOf(name) == 0) {
//						result = c.substring(name.length, c.length);
//						var resultArray =  JSON.parse(result, { dataType: 'text'});
//						return resultArray;
//					}
//				}
//				return [];
//			}
//			
//			function setCookieValue(cookieValue) {
//				var date = new Date();
//				date.setTime(date.getTime() + (cookieExpirationDays*24*60*60*1000));
//				var expires = "expires="+ date.toUTCString();
//				document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
//			}
//			
//			function removeCookie(cookieValue) {
//				var expires = "expires=Thu, 01 Jan 1970 00:00:00 UTC";
//				document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
//			}
//			
//			function addToCookie(providerRegexElement) {
//				console.log("webelement addToCookie");
//				var cookieValue = getCookieValue();
//				if(checkCookie(providerRegexElement) === false) {		
//					cookieValue.push(providerRegexElement.name);
//					setCookieValue(cookieValue);
//				}
//			}
//			
//			function removeFromCookie(providerRegexElement) {
//				console.log("webelement removeFromCookie");
//				if(checkCookie(providerRegexElement) === true) {
//					var cookieValue = getCookieValue();
//					for(var i = 0; i < cookieValue.length; i++) {
//						if(providerRegexElement.name === cookieValue[i]) {
//							cookieValue.splice(i, 1); 
//							setCookieValue(cookieValue);
//							break;
//						}
//					}
//				}
//			}
			
			function setCookieValueForReloadIndication() {
				var date = new Date();
				date.setTime(date.getTime() + (30*1000));
				var expires = "expires="+ date.toUTCString();
				document.cookie = cookieName + "Reload" + "=reload;" + expires + ";path=/";
			}
			
			function getCookieValueForReloadIndication() {
				var name = cookieName + "Reload" + "=";
				var decodedCookie = decodeURIComponent(document.cookie);
				var ca = decodedCookie.split(';');
				for(var i = 0; i <ca.length; i++) {
					var c = ca[i];
					while (c.charAt(0) == ' ') {
						c = c.substring(1);
					}
					if (c.indexOf(name) == 0) {
						return c.substring(name.length, c.length);
					}
				}
				return undefined;
			}
			
			function removeCookieForReloadIndication() {
				var expires = "expires=Thu, 01 Jan 1970 00:00:00 UTC";
				document.cookie = cookieName + "Reload" + "=reload;" + expires + ";path=/";
			}
			
			// webelement functions for different types
			
			function replaceWithAllowedInternalContent() {
				var webelementContentContainer = $('div[webelementid="'+webelementId+'"].webelement-content-container');
				var webelementContentString = $('div[webelementid="'+webelementId+'"].webelement-html-content > noscript.html-content').text();
				$(webelementContentContainer).before(webelementContentString);
				$(webelementContentContainer).remove();
			}
			
			function initWithAllowedExternalContent(providerRegex) {
				var webelementContentContainerContent = $('div[webelementid="'+webelementId+'"].webelement-content-container > .webelement-content-container-content');
				var webelementContentContainerInner = $('div[webelementid="'+webelementId+'"].webelement-content-container > .webelement-content-container-inner');
				var webelementContentCheckbox = $('div[webelementid="'+webelementId+'"].webelement-content-container > .webelement-content-container-inner > .checkbox-switch > input');
				var webelementContentCheckboxSwitchText = $('div[webelementid="'+webelementId+'"].webelement-content-container > .webelement-content-container-inner > .checkbox-switch > .webelement-checkbox-switch-text');
				var webelementContentCheckboxSwitchDisclaimer = $('div[webelementid="'+webelementId+'"].webelement-content-container > .webelement-content-container-inner > .webelement-checkbox-switch-disclaimer');
				var webelementContentString = $('div[webelementid="'+webelementId+'"].webelement-html-content > noscript.html-content').text();
				
				//var webelementContentConfigCheckboxOuterLabel = $('div[webelementid="'+webelementId+'"].webelement-content-container > .webelement-content-container-inner > .checkbox-config');
				//var webelementContentConfigCheckbox = $('div[webelementid="'+webelementId+'"].webelement-content-container > .webelement-content-container-inner > .checkbox-config > input');
				//$(webelementContentConfigCheckboxOuterLabel).css({"display": "unset"});
				
				function activateWebelementContent() {
					$(webelementContentContainerContent).css({"background-color": "#fff", "padding": "0"});
					$(webelementContentContainerContent).html(webelementContentString);
					
					// mar: hide until there is no save function
					$(webelementContentContainerInner).css({ 'visibility': 'hidden', 'height': '0', 'padding': '0' });
					$('.thema.clip_large >.wing').find( webelementContentContainerInner ).css('display', 'none');
					$(webelementContentCheckboxSwitchText).html("Externen Inhalt deaktivieren");
					$(webelementContentCheckboxSwitchDisclaimer).html('<a href="https://taz.de/!166598" target="_blank">Mehr dazu in unserer Datenschutzerklärung.</a>');
					
				}	
				
				// load initial state from cookie
				//if(checkCookie(providerRegexElement)) {
				//	if(getCookieValueForReloadIndication() === "reload") {
				//		removeCookieForReloadIndication();
				//	} else {
				//		$(webelementContentConfigCheckbox).prop('checked', true);
				//		$(webelementContentCheckbox).prop('checked', true);
				//	}
				//}
				
				// set initial state
				if(getCookieValueForReloadIndication() === "reload") {
						removeCookieForReloadIndication();
						if($(webelementContentCheckbox).is(":checked")) {
							activateWebelementContent();
						}
				} else {
					$(webelementContentCheckbox).prop('checked', true);
					activateWebelementContent();
				}
				
				// set on change listener for switch
				$(webelementContentCheckbox).change(function() {
					if($(webelementContentCheckbox).is(":checked")) {
						//if($(webelementContentConfigCheckbox).is(":checked")) {
						//	addToCookie(providerRegexElement);
						//}
						activateWebelementContent();
					} else {
						//if($(webelementContentConfigCheckbox).is(":checked")) {
						//	removeFromCookie(providerRegexElement);
						//}
						//console.log("webelement content removed for id "+webelementId);
						setCookieValueForReloadIndication();
						location.reload();
					}		
				});
				
				
				// set on change listener for config checkbox
				//$(webelementContentConfigCheckbox).change(function() {
				//	if($(webelementContentConfigCheckbox).is(":checked")) {
				//		if($(webelementContentCheckbox).is(":checked")) {
				//			addToCookie(providerRegexElement);
				//		} else {
				//			removeFromCookie(providerRegexElement);
				//		}
				//	}		
				//});
				
			}
			
			function initWithUnknownExternalContent() {
				var webelementContentContainer = $('div[webelementid="'+webelementId+'"].webelement-content-container');
				var webelementContentContainerContent = $('div[webelementid="'+webelementId+'"].webelement-content-container > .webelement-content-container-content');
				var webelementContentCheckbox = $('div[webelementid="'+webelementId+'"].webelement-content-container > .webelement-content-container-inner > .checkbox-switch > input');
				var webelementContentCheckboxSwitchText = $('div[webelementid="'+webelementId+'"].webelement-content-container > .webelement-content-container-inner > .checkbox-switch > .webelement-checkbox-switch-text');
				var webelementContentCheckboxSwitchDisclaimer = $('div[webelementid="'+webelementId+'"].webelement-content-container > .webelement-content-container-inner > .webelement-checkbox-switch-disclaimer');
				var webelementContentString = $('div[webelementid="'+webelementId+'"].webelement-html-content > noscript.html-content').text();
				var webelementContentStringPrev = $(webelementContentCheckboxSwitchText).find('#consentPreview');

				// html element is empty - nothing to consent
				if( webelementContentString == '' ) $( webelementContentContainer ).remove();
				previewExternalProviders.forEach(detectExternalProviderForPreview);

				function detectExternalProviderForPreview(providerRegex, index) {
					const regex = RegExp(providerRegex);
					var webelementContentString = $('div[webelementid="'+webelementId+'"].webelement-html-content > noscript.html-content').text();
					if(regex.test(webelementContentString)) {

						webelementContentStringPrev.text( ': ' + previewExternalProvidersText[index]  )
						
					}
				}
				function activateWebelementContent() {

					// mar: do it once			
					if ( $(webelementContentContainerContent).hasClass('isoverlay') ) var overlayId = $(webelementContentContainerContent).closest( '.webelement-content-container' ).attr('webelementid')
					if ( $(webelementContentContainerContent).nextUntil( '.webelement-content-container' ).is("[data-initial-state]") 

					|| (typeof overlayId !== 'undefined' && $('.webelement-html-content').is('[data-initial-state][webelementid=' + overlayId +  ']'  ) ) )
						{
							console.log('activating');
						$(webelementContentContainerContent).nextUntil( '.webelement-content-container' ).removeAttr("data-initial-state");
						if (typeof overlayId !== 'undefined') {
							$( '.webelement-html-content[webelementid=' + overlayId +  '][data-initial-state]').removeAttr("data-initial-state");
						}
					$(webelementContentContainerContent).css({"background-color": "#fff", "padding": "0px"});
					$(webelementContentContainerContent).html(webelementContentString).addClass('activated');
					$(webelementContentCheckboxSwitchText).html("Externen Inhalt deaktivieren");
					$(webelementContentCheckboxSwitchDisclaimer).html('<a href="https://taz.de/!166598" target="_blank">Mehr dazu in unserer Datenschutzerklärung.</a>');
				}
			}
				
				// set initial state
				if($(webelementContentCheckbox).is(":checked")) {
					activateWebelementContent();
				}
				
				// set on change listener
				$(webelementContentCheckbox).change(function() {
					if($(webelementContentCheckbox).is(":checked")) {
						activateWebelementContent();
					} else {
						location.reload();
					}		
				});
			}
			
			function checkId(id) {
				var idString = webelementId.substring(webelementId.lastIndexOf('-')+1);
				if( id ===  idString ) {
					replaceWithAllowedInternalContent();
				} else {
					initWithUnknownExternalContent();
				}
			}
			
			function checkInternalProvider(providerRegex) {
				const regex = RegExp(providerRegex);
				var webelementContentString = $('div[webelementid="'+webelementId+'"].webelement-html-content > noscript.html-content').text();
				if(regex.test(webelementContentString)) {
					replaceWithAllowedInternalContent();
				} else {
					initWithUnknownExternalContent();
				}
			}
			
			function checkExternalProvider(providerRegex) {
				const regex = RegExp(providerRegex);
				var webelementContentString = $('div[webelementid="'+webelementId+'"].webelement-html-content > noscript.html-content').text();
				if(regex.test(webelementContentString)) {
					initWithAllowedExternalContent(providerRegex);
				} else {
					initWithUnknownExternalContent();
				}
			}
			
			function optimizeContentText() {
				
			}
			
			//initialCookieCheck();
			
			if(idCheckEnabled) {
				allowedIds.forEach(checkId);
			}
			
			if(internalProviderCheckEnabled) {
				allowedInternalProviders.forEach(checkInternalProvider);
			}
			
			if(externalProviderCheckEnabled) {
				allowedExternalProviders.forEach(checkExternalProvider);
			}
			
		}

		return {
			setWebelementSwitch: setWebelementSwitch
		}

	};

})();




/* ----- longread.js ------------------------------------------------------------------- */

$(document).ready(function(){

	var isLongread = $('div.longread.article').length > 0;
	
	if(!!isLongread && isLongread !== undefined && isLongread !== false) {
		


		// $('.tail .sect_tags').remove();


		// progress bar
		// $('.head:first > .news.navbar.newsnavigation').after( $('<div id="progressbar"><progress value="0"></progress></div>') );
		//     $(window).scroll(function () {
		//         var s = $(document).scrollTop(),
		//             d = $('.shariff').offset().top - $(window).height();          
		//         $("#progressbar progress").attr('max', d);
		//         $("#progressbar progress").attr('value', s);
		//      });


		// initiate kapitelboard
		if ($(" h6.kapitel ").length && ! $('#kapitelBoard').length  ) {
			$('.head:first > .news.navbar.newsnavigation').after( $('<div id="kapitelBoard"><ul></ul></div>').hide() )
			$('.longread >article h1 >span').last().attr('data-kapitelnummer','0').addClass(' first kapitel');
		};

		
	    $(" .kapitel ").each(function(){

			var number = parseInt( $(this).attr('data-kapitelnummer') );
			var numberPlus1 = number +1;
			$( '#kapitelBoard > ul' ).append( '<li data-kapitelnummer=' + number + ' ><a><span>' + numberPlus1 + '. ' + $(this).html() + '</span></a></li>'  );
			});

			// write kapitel board into kapitel p
	    // $(" .longread.article ").prepend( $( '#kapitelBoard' ).clone().hide()  );

		$( '#kapitelBoard > ul > li ').click(function(){
			var kapitelToGo = $(this).attr('data-kapitelnummer');
				$('html, body').animate({ scrollTop:  $('.kapitel[data-kapitelnummer="' + kapitelToGo + '"]').offset().top}, 500);
		});

			$(window).scroll(function() { 
				
					// hide kapitel navi in community area
				if ( $(this).scrollTop() >= $('.longread.article >.body >.main ~ div ').first().position().top - 300 ){
					$( '#kapitelBoard ').hide('fast');
				} 
				else if ( $(this).scrollTop() >=$('.longread > article .article.first').position().top ){
					// inital showing
					$( '#kapitelBoard ').show('fast');
				} 
					// hide kapitel navi on top of page
				else {
					$( '#kapitelBoard ').hide('fast');
				}

				$('.kapitel').each(function(){

					// detect current capitel
						var thisScreenYPos = $(this)[0].getBoundingClientRect().top;
						var numberOfCurrentKapitel = $(this).attr( 'data-kapitelnummer' );

						if ( numberOfCurrentKapitel == 0 && thisScreenYPos > -750 && thisScreenYPos < -50 ) {
							$( '#kapitelBoard ').find('li[data-kapitelnummer="' + numberOfCurrentKapitel + '"]').addClass('current');
						}
						else if ( thisScreenYPos > -150 && thisScreenYPos < 550 ) {
							$( '#kapitelBoard ').find('li[data-kapitelnummer="' + numberOfCurrentKapitel + '"]').addClass('current');
						}
						else {
							$( '#kapitelBoard ').find('li[data-kapitelnummer="' + numberOfCurrentKapitel + '"]').removeClass('current');
						}
				})
			});

			// show all kapitel
			$( '#kapitelBoard, #kapitelBoard ul li' ).hover(
				function() {
					$( '#kapitelBoard ul li').removeClass('hover');
					$( '#kapitelBoard ul li').addClass('hover')
				}, function() {
					$( '#kapitelBoard ul li').removeClass('hover')
				}
			);		
	}
 
		// doc ready   


});


/* ----- shariff.min.js ------------------------------------------------------------------- */

/* https://github.com/heiseonline/shariff
 Copyright (c) 2017 Ines Pauer, Philipp Busse, Sebastian Hilbig, Erich Kramer, Deniz Sesli
 Licensed under the MIT license
modified mar:
removed all but engl + ger
+ copyURL-Button
+ pocket

*/
! function(e) {
    function t(n) {
        if (r[n]) return r[n].exports;
        var a = r[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(a.exports, a, a.exports, t), a.l = !0, a.exports
    }
    var r = {};
    t.m = e, t.c = r, t.d = function(e, r, n) {
        t.o(e, r) || Object.defineProperty(e, r, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, t.n = function(e) {
        var r = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(r, "a", r), r
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 2)
}([function(e, t, r) {
    "use strict";

    function n() {
        this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
    }

    function a(e, t, r) {
        if (e && h.isObject(e) && e instanceof n) return e;
        var a = new n;
        return a.parse(e, t, r), a
    }

    function o(e) {
        return h.isString(e) && (e = a(e)), e instanceof n ? e.format() : n.prototype.format.call(e)
    }

    function i(e, t) {
        return a(e, !1, !0).resolve(t)
    }

    function s(e, t) {
        return e ? a(e, !1, !0).resolveObject(t) : t
    }
    var l = r(9),
        h = r(11);
    t.parse = a, t.resolve = i, t.resolveObject = s, t.format = o, t.Url = n;
    var p = /^([a-z0-9.+-]+:)/i,
        u = /:[0-9]*$/,
        c = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
        d = ["<", ">", '"', "`", " ", "\r", "\n", "\t"],
        f = ["{", "}", "|", "\\", "^", "`"].concat(d),
        m = ["'"].concat(f),
        g = ["%", "/", "?", ";", "#"].concat(m),
        v = ["/", "?", "#"],
        b = /^[+a-z0-9A-Z_-]{0,63}$/,
        y = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
        k = {
            javascript: !0,
            "javascript:": !0
        },
        j = {
            javascript: !0,
            "javascript:": !0
        },
        T = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0
        },
        w = r(12);
    n.prototype.parse = function(e, t, r) {
        if (!h.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
        var n = e.indexOf("?"),
            a = -1 !== n && n < e.indexOf("#") ? "?" : "#",
            o = e.split(a),
            i = /\\/g;
        o[0] = o[0].replace(i, "/"), e = o.join(a);
        var s = e;
        if (s = s.trim(), !r && 1 === e.split("#").length) {
            var u = c.exec(s);
            if (u) return this.path = s, this.href = s, this.pathname = u[1], u[2] ? (this.search = u[2], this.query = t ? w.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this
        }
        var d = p.exec(s);
        if (d) {
            d = d[0];
            var f = d.toLowerCase();
            this.protocol = f, s = s.substr(d.length)
        }
        if (r || d || s.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            var x = "//" === s.substr(0, 2);
            !x || d && j[d] || (s = s.substr(2), this.slashes = !0)
        }
        if (!j[d] && (x || d && !T[d])) {
            for (var z = -1, U = 0; U < v.length; U++) {
                var C = s.indexOf(v[U]); - 1 !== C && (-1 === z || C < z) && (z = C)
            }
            var I, R;
            R = -1 === z ? s.lastIndexOf("@") : s.lastIndexOf("@", z), -1 !== R && (I = s.slice(0, R), s = s.slice(R + 1), this.auth = decodeURIComponent(I)), z = -1;
            for (var U = 0; U < g.length; U++) {
                var C = s.indexOf(g[U]); - 1 !== C && (-1 === z || C < z) && (z = C)
            } - 1 === z && (z = s.length), this.host = s.slice(0, z), s = s.slice(z), this.parseHost(), this.hostname = this.hostname || "";
            var O = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!O)
                for (var A = this.hostname.split(/\./), U = 0, L = A.length; U < L; U++) {
                    var P = A[U];
                    if (P && !P.match(b)) {
                        for (var S = "", D = 0, q = P.length; D < q; D++) P.charCodeAt(D) > 127 ? S += "x" : S += P[D];
                        if (!S.match(b)) {
                            var N = A.slice(0, U),
                                G = A.slice(U + 1),
                                F = P.match(y);
                            F && (N.push(F[1]), G.unshift(F[2])), G.length && (s = "/" + G.join(".") + s), this.hostname = N.join(".");
                            break
                        }
                    }
                }
            this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), O || (this.hostname = l.toASCII(this.hostname));
            var E = this.port ? ":" + this.port : "",
                M = this.hostname || "";
            this.host = M + E, this.href += this.host, O && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== s[0] && (s = "/" + s))
        }
        if (!k[f])
            for (var U = 0, L = m.length; U < L; U++) {
                var W = m[U];
                if (-1 !== s.indexOf(W)) {
                    var B = encodeURIComponent(W);
                    B === W && (B = escape(W)), s = s.split(W).join(B)
                }
            }
        var J = s.indexOf("#"); - 1 !== J && (this.hash = s.substr(J), s = s.slice(0, J));
        var _ = s.indexOf("?");
        if (-1 !== _ ? (this.search = s.substr(_), this.query = s.substr(_ + 1), t && (this.query = w.parse(this.query)), s = s.slice(0, _)) : t && (this.search = "", this.query = {}), s && (this.pathname = s), T[f] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
            var E = this.pathname || "",
                Z = this.search || "";
            this.path = E + Z
        }
        return this.href = this.format(), this
    }, n.prototype.format = function() {
        var e = this.auth || "";
        e && (e = encodeURIComponent(e), e = e.replace(/%3A/i, ":"), e += "@");
        var t = this.protocol || "",
            r = this.pathname || "",
            n = this.hash || "",
            a = !1,
            o = "";
        this.host ? a = e + this.host : this.hostname && (a = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (a += ":" + this.port)), this.query && h.isObject(this.query) && Object.keys(this.query).length && (o = w.stringify(this.query));
        var i = this.search || o && "?" + o || "";
        return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || T[t]) && !1 !== a ? (a = "//" + (a || ""), r && "/" !== r.charAt(0) && (r = "/" + r)) : a || (a = ""), n && "#" !== n.charAt(0) && (n = "#" + n), i && "?" !== i.charAt(0) && (i = "?" + i), r = r.replace(/[?#]/g, function(e) {
            return encodeURIComponent(e)
        }), i = i.replace("#", "%23"), t + a + r + i + n
    }, n.prototype.resolve = function(e) {
        return this.resolveObject(a(e, !1, !0)).format()
    }, n.prototype.resolveObject = function(e) {
        if (h.isString(e)) {
            var t = new n;
            t.parse(e, !1, !0), e = t
        }
        for (var r = new n, a = Object.keys(this), o = 0; o < a.length; o++) {
            var i = a[o];
            r[i] = this[i]
        }
        if (r.hash = e.hash, "" === e.href) return r.href = r.format(), r;
        if (e.slashes && !e.protocol) {
            for (var s = Object.keys(e), l = 0; l < s.length; l++) {
                var p = s[l];
                "protocol" !== p && (r[p] = e[p])
            }
            return T[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r
        }
        if (e.protocol && e.protocol !== r.protocol) {
            if (!T[e.protocol]) {
                for (var u = Object.keys(e), c = 0; c < u.length; c++) {
                    var d = u[c];
                    r[d] = e[d]
                }
                return r.href = r.format(), r
            }
            if (r.protocol = e.protocol, e.host || j[e.protocol]) r.pathname = e.pathname;
            else {
                for (var f = (e.pathname || "").split("/"); f.length && !(e.host = f.shift()););
                e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== f[0] && f.unshift(""), f.length < 2 && f.unshift(""), r.pathname = f.join("/")
            }
            if (r.search = e.search, r.query = e.query, r.host = e.host || "", r.auth = e.auth, r.hostname = e.hostname || e.host, r.port = e.port, r.pathname || r.search) {
                var m = r.pathname || "",
                    g = r.search || "";
                r.path = m + g
            }
            return r.slashes = r.slashes || e.slashes, r.href = r.format(), r
        }
        var v = r.pathname && "/" === r.pathname.charAt(0),
            b = e.host || e.pathname && "/" === e.pathname.charAt(0),
            y = b || v || r.host && e.pathname,
            k = y,
            w = r.pathname && r.pathname.split("/") || [],
            f = e.pathname && e.pathname.split("/") || [],
            x = r.protocol && !T[r.protocol];
        if (x && (r.hostname = "", r.port = null, r.host && ("" === w[0] ? w[0] = r.host : w.unshift(r.host)), r.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === f[0] ? f[0] = e.host : f.unshift(e.host)), e.host = null), y = y && ("" === f[0] || "" === w[0])), b) r.host = e.host || "" === e.host ? e.host : r.host, r.hostname = e.hostname || "" === e.hostname ? e.hostname : r.hostname, r.search = e.search, r.query = e.query, w = f;
        else if (f.length) w || (w = []), w.pop(), w = w.concat(f), r.search = e.search, r.query = e.query;
        else if (!h.isNullOrUndefined(e.search)) {
            if (x) {
                r.hostname = r.host = w.shift();
                var z = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@");
                z && (r.auth = z.shift(), r.host = r.hostname = z.shift())
            }
            return r.search = e.search, r.query = e.query, h.isNull(r.pathname) && h.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r
        }
        if (!w.length) return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;
        for (var U = w.slice(-1)[0], C = (r.host || e.host || w.length > 1) && ("." === U || ".." === U) || "" === U, I = 0, R = w.length; R >= 0; R--) U = w[R], "." === U ? w.splice(R, 1) : ".." === U ? (w.splice(R, 1), I++) : I && (w.splice(R, 1), I--);
        if (!y && !k)
            for (; I--; I) w.unshift("..");
        !y || "" === w[0] || w[0] && "/" === w[0].charAt(0) || w.unshift(""), C && "/" !== w.join("/").substr(-1) && w.push("");
        var O = "" === w[0] || w[0] && "/" === w[0].charAt(0);
        if (x) {
            r.hostname = r.host = O ? "" : w.length ? w.shift() : "";
            var z = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@");
            z && (r.auth = z.shift(), r.host = r.hostname = z.shift())
        }
        return y = y || r.host && w.length, y && !O && w.unshift(""), w.length ? r.pathname = w.join("/") : (r.pathname = null, r.path = null), h.isNull(r.pathname) && h.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = e.auth || r.auth, r.slashes = r.slashes || e.slashes, r.href = r.format(), r
    }, n.prototype.parseHost = function() {
        var e = this.host,
            t = u.exec(e);
        t && (t = t[0], ":" !== t && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
    }
}, function(e, t) {
    var r;
    r = function() {
        return this
    }();
    try {
        r = r || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (r = window)
    }
    e.exports = r
}, function(e, t, r) {
    "use strict";
    r(3), e.exports = r(4)
}, function(e, t) {}, function(e, t, r) {
    "use strict";
    (function(t) {
        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            o = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(),
            i = r(5),
            s = r(6),
            l = r(0),
            h = {
                theme: "color",
                backendUrl: null,
                infoUrl: "/!165531/",
                lang: "de",
                langFallback: "en",
                mailUrl: function() {
                    var e = l.parse(this.getURL(), !0);
                    return e.query.view = "mail", delete e.search, l.format(e)
                },
                mailBody: function() {
                    return this.getURL()
                },
                mediaUrl: null,
                orientation: "horizontal",
                referrerTrack: null,
               // moby
                services: ["pocket", "diaspora", "facebook", "twitter", "mail", "reddit", "flattr", "info"],
               // services: ["facebook", "twitter", "reddit", "diaspora", "info"],
                title: function() {
                    return i("head title").text()
                },
                twitterVia: $('meta[name="twitter:site"]').length ? $('meta[name="twitter:site"]').attr('content').replace(/^@/, "") : '',
                flattrUser: null,
                flattrCategory: null,

                // added by mar: 
                listUseHref: null,
                listUseTitle: null,
                listUseImg: null,
                url: function() {
                    var e = t.document.location.href,
                        r = i("link[rel=canonical]").attr("href") || this.getMeta("og:url") || "";
                    return r.length > 0 && (r.indexOf("http") < 0 && (r = t.document.location.protocol + "//" + t.document.location.host + r), e = r), e
                }
            },
            p = function() {
                function e(t, r) {
                    var a = this;
                    n(this, e), this.element = t, i(t).empty(), this.options = i.extend({}, h, r, i(t).data()), this.services = Object.keys(s).filter(function(e) {
                        return a.isEnabledService(e)
                    }).sort(function(e, t) {
                        var r = a.options.services;
                        return r.indexOf(e) - r.indexOf(t)
                    }).map(function(e) {
                        return s[e](a)
                    }), this._addButtonList(), null !== this.options.backendUrl && this.getShares(this._updateCounts.on(this))
                }
                return o(e, [{
                    key: "isEnabledService",
                    value: function(e) {
                        return this.options.services.indexOf(e) > -1
                    }
                }, {
                    key: "$socialshareElement",
                    value: function() {
                        return i(this.element)
                    }
                }, {
                    key: "getLocalized",
                    value: function(e, t) {
                        return "object" === a(e[t]) ? void 0 === e[t][this.options.lang] ? e[t][this.options.langFallback] : e[t][this.options.lang] : "string" == typeof e[t] ? e[t] : void 0
                    }
                }, {
                    key: "getMeta",
                    value: function(e) {
                        return i('meta[name="' + e + '"],[property="' + e + '"]').attr("content") || ""
                    }
                }, {
                    key: "getInfoUrl",
                    value: function() {
                        return this.options.infoUrl
                    }
                }, {
                    key: "getURL",
                    value: function() {
                        return this.getOption("url")
                    }
                }, {
                    key: "getOption",
                    value: function(e) {
                        var t = this.options[e];
                        return "function" == typeof t ? t.call(this) : t
                    }
                }, {
                    key: "getTitle",
                    value: function() {
                        var e = this.getOption("title") || this.getMeta("DC.title"),
                            t = this.getMeta("DC.creator");
                        return e && t && (e = e + " - " + t), e
                    }
                }, {
                    key: "getReferrerTrack",
                    value: function() {
                        return this.options.referrerTrack || ""
                    }
                }, {
                    key: "getShares",
                    value: function(e) {
                        var t = l.parse(this.options.backendUrl, !0);
                        return t.query.url = this.getURL(), delete t.search, i.getJSON(l.format(t), e)
                    }
                }, {
                    key: "_updateCounts",
                    value: function(e, t, r) {
                        var n = this;
                        e && i.each(e, function(e, t) {
                            n.isEnabledService(e) && (t >= 1e3 && (t = Math.round(t / 1e3) + "k"), i(n.element).find("." + e + " a").append(i("<span/>").addClass("share_count").text(t)))
                        })
                    }
                }, {
                    key: "_addButtonList",
                    value: function() {
                        var e = this,
                            r = i("<ul/>").addClass(["theme-" + this.options.theme, "orientation-" + this.options.orientation, "col-" + this.options.services.length].join(" "));
                        this.services.forEach(function(t) {
                            var n = i("<li/>").addClass("shariff-button " + t.name),
                                a = i("<span/>").addClass("share_text").text(e.getLocalized(t, "shareText")),
                                o = i("<a/>").attr("href", t.shareUrl).append(a);
                            void 0 !== t.faName && o.prepend(i("<span/>").addClass("fa " + t.faName)), t.popup ? o.attr("data-rel", "popup") : t.blank && o.attr("target", "_blank"), o.attr("title", e.getLocalized(t, "title")), o.attr("role", "button"), o.attr("aria-label", e.getLocalized(t, "title")), n.append(o), r.append(n)
                        }), r.on("click", '[data-rel="popup"]', function(e) {
                            e.preventDefault();
                            var r = i(this).attr("href");
                            if (r.match(/twitter\.com\/intent\/(\w+)/)) {
                                var n = t.window;
                                if (n.__twttr && n.__twttr.widgets && n.__twttr.widgets.loaded) return
                            }
                            t.window.open(r, "_blank", "width=600,height=460")
                        }), this.$socialshareElement().append(r);
                        

                               $('<li class="shariff-button copyURL"></li>')
                                .append('<a aria-label="URL in den Zwischenspeicher kopieren" href="#" role="button" title="URL in den Zwischenspeicher kopieren"><span class="fa fa-copyURL"></span><span class="share_text"></span></a>')
                                .tooltip({title: "URL in den Zwischenspeicher kopiert", trigger: "click" })
                                .on('click', function(e){e.preventDefault();
                                    copyToClipboard(window.location.href);
                                })
                                .insertAfter($('.shariff-button.twitter'));               


                        $('.shariff .diaspora, .shariff .mail, .shariff .copyURL, .shariff .flipboard, .shariff .reddit, .shariff .signal, .shariff .info').addClass('unhide');

                        // articles only
                        if ( $('.sect_article ~ .shariff ').length ) {
                        var tooltipContent =   $(' <div class="shariff sectbody" role="heading"></div>' )
                                                .append(   $(' <ul></ul>' ) 
                                                    .append(   $('.unhide') )
                                                        );
                             }
                            
                        //  added by mar: more-button
                            $('<li class="shariff-button more"></li>')
                                .append('<a aria-label="Mehr Social Media Buttons anzeigen" href="#" role="button" title="Mehr Social Media Buttons anzeigen"><span class="fa-more_social_buttons fa"></span><span class="share_text"></span></a>')
                               // moby
                               .insertAfter($('.sect_article ~ .shariff .shariff-button').last() )
                               .on('click', function(e){ 
                               // do not scroll on hash click
                                   e.preventDefault();
                               });

                            $('.sect_article ~ .shariff .shariff-button.more').tooltip({
                                title:  tooltipContent,
                                trigger: "click",
                                // placement: "top",
                                'html': true
                            }); 

			                $('.fa-flipboard').append( 
                                '<svg viewBox="0 0 100 100" height="35" width="35"> \
                                    <g fill="#F52828"> \
                                        <path d="M0,0 L0,100 L100,100 L100,0 L0,0 Z M80,40 L60,40 L60,60 L40,60 L40,80 L20,80 L20,20 L80,20 L80,40 Z"></path> \
                                    </g> \
                                </svg>'
                                );

 			                $(".shariff-button > a").each(function(){                                                                                                                            
	    	              		var toolTitle = $(this).attr("aria-label");                                                                                                                        
                                $(this).tooltip({title: "'" + toolTitle + "'"});
                                $(this).attr('data-placement', 'bottom');   
			             	});  
                    }
                }]), e
            }();
        e.exports = p, t.Shariff = p, i(function() {
            i(".shariff").each(function() {
                this.hasOwnProperty("shariff") || (this.shariff = new p(this))
            })
        })
    }).call(t, r(1))
}, function(e, t, r) {
    "use strict";

    function n(e, t) {
        var r = [];
        return t = t || document, "function" == typeof e ? (t.attachEvent ? "complete" === t.readyState : "loading" !== t.readyState) ? e() : t.addEventListener("DOMContentLoaded", e) : r = e instanceof Element ? [e] : "string" == typeof e ? "<" === e[0] ? Array.prototype.slice.call(l(e)) : Array.prototype.slice.call(t.querySelectorAll(e)) : e, new a(r, t)
    }

    function a(e, t) {
        this.length = e.length, this.context = t;
        var r = this;
        s(e, function(e) {
            r[e] = this
        })
    }
    "function" != typeof Object.assign && (Object.assign = function(e, t) {
        if (null === e) throw new TypeError("Cannot convert undefined or null to object");
        for (var r = Object(e), n = 1; n < arguments.length; n++) {
            var a = arguments[n];
            if (null !== a)
                for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (r[o] = a[o])
        }
        return r
    }), a.prototype.each = function(e) {
        for (var t = this.length - 1; t >= 0; t--) e.call(this[t], t, this[t]);
        return this
    }, a.prototype.empty = function() {
        return this.each(o)
    }, a.prototype.text = function(e) {
        return void 0 === e ? this[0].textContent : this.each(function() {
            this.textContent = e
        })
    }, a.prototype.attr = function(e, t) {
        return this.length < 1 ? null : void 0 === t ? this[0].getAttribute(e) : this.each(function() {
            this.setAttribute(e, t)
        })
    }, a.prototype.data = function(e, t) {
        if (t) return this.attr("data-" + e, t);
        if (e) return this.attr("data-" + e);
        var r = Object.assign({}, this[0].dataset);
        return s(r, function(e, t) {
            r[e] = m(t)
        }), r
    }, a.prototype.find = function(e) {
        var t;
        return t = i(this, function(t) {
            return t.querySelectorAll(e)
        }), t = i(t, function(e) {
            return Array.prototype.slice.call(e)
        }), t = Array.prototype.concat.apply([], t), new a(t)
    }, a.prototype.append = function(e) {
        return "string" == typeof e && (e = l(e)), h(this[0], e), this
    }, a.prototype.prepend = function(e) {
        return "string" == typeof e && (e = l(e)), p(this[0], e), this
    }, a.prototype.addClass = function(e) {
        return this.each(function() {
            var t = this;
            e.split(" ").forEach(function(e) {
                t.classList.add(e)
            })
        })
    }, a.prototype.removeClass = function(e) {
        return this.each(function() {
            this.classList.remove(e)
        })
    }, a.prototype.on = function(e, t, r) {
        return this.each(function() {
            c(t, e, r, this)
        })
    };
    var o = function() {
            for (; this.hasChildNodes();) this.removeChild(this.firstChild)
        },
        i = function(e, t) {
            return Array.prototype.map.call(e, t)
        },
        s = function(e, t) {
            if (e instanceof Array)
                for (var r = 0; r < e.length; r++) t.call(e[r], r, e[r]);
            else if (e instanceof Object)
                for (var n in e) t.call(e[n], n, e[n], e);
            return e
        },
        l = function(e) {
            var t = document.createElement("div");
            return t.innerHTML = e, t.children
        },
        h = function(e, t) {
            for (var r = 0; r < t.length; r++) e.appendChild(t[r])
        },
        p = function(e, t) {
            for (var r = t.length - 1; r >= 0; r--) e.insertBefore(t[t.length - 1], e.firstChild)
        },
        u = function() {
            var e = HTMLElement.prototype,
                t = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector;
            return function e(r, n) {
                if (null !== r) return t.call(r, n) ? r : e(r.parentElement, n)
            }
        }(),
        c = function(e, t, r, n) {
            (n || document).addEventListener(t, function(t) {
                var n = u(t.target, e);
                n && r.call(n, t)
            })
        },
        d = function e(t) {
            var r = {},
                n = !1,
                a = 0,
                o = arguments.length;
            for ("[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (n = arguments[0], a++); a < o; a++) {
                var i = arguments[a];
                ! function(t) {
                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (n && "[object Object]" === Object.prototype.toString.call(t[a]) ? r[a] = e(!0, r[a], t[a]) : r[a] = t[a])
                }(i)
            }
            return r
        },
        f = function(e, t) {
            var r = new XMLHttpRequest;
            r.open("GET", e, !0), r.setRequestHeader("Content-Type", "application/json"), r.setRequestHeader("Accept", "application/json"), r.onload = function() {
                if (r.status >= 200 && r.status < 400) {
                    var e = JSON.parse(r.responseText);
                    t(e, r.status, r)
                } else t(null, r.status, r)
            }, r.onerror = function(e) {
                t(new Error(e), null, r)
            }, r.send()
        },
        m = function(e) {
            if ("true" === e) return !0;
            if ("false" === e) return !1;
            if ("null" === e) return null;
            if (+e + "" === e) return +e;
            if (/^[[{]/.test(e)) try {
                return JSON.parse(e)
            } catch (t) {
                return e
            }
            return e
        };
    n.extend = d, n.map = i, n.each = s, n.getJSON = f, e.exports = n
}, function(e, t, r) {
    "use strict";
    e.exports = {
        addthis: r(7),
        diaspora: r(8),
        facebook: r(15),
        flattr: r(16),
        googleplus: r(17),
        info: r(18),
        linkedin: r(19),
        mail: r(20),
        pinterest: r(21),
        print: r(22),
        qzone: r(23),
        reddit: r(24),
        stumbleupon: r(25),
        tencent: r(26),
        threema: r(27),
        tumblr: r(28),
        twitter: r(29),
        weibo: r(30),
        whatsapp: r(31),
        xing: r(32),
        pocket: r(33),
        flipboard: r(33),
        pinterestList: r(34),
        pocketList: r(35),
        flipboardList: r(36)
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        return {
            popup: !0,
            shareText: {
                de: "teilen",
                en: "share"
            },
            name: "addthis",
            faName: "fa-plus",
            title: {
                de: "Bei AddThis teilen",
                en: "Share on AddThis"
            },
            shareUrl: "http://api.addthis.com/oexchange/0.8/offer?url=" + encodeURIComponent(e.getURL()) + e.getReferrerTrack()
        }
    }
}, function(e, t, r) {
    "use strict";
    var n = r(0);
    e.exports = function(e) {
        var t = n.parse("https://share.diasporafoundation.org/", !0);
        return t.query.url = e.getURL(), t.query.title = e.getTitle(), t.protocol = "https", delete t.search, {
            popup: !0,
            shareText: {
                de: "teilen",
                en: "share"
            },
            name: "diaspora",
            faName: "fa-asterisk",
            title: {
                de: "Bei Diaspora teilen",
                en: "Share on Diaspora"
            },
            shareUrl: n.format(t) + e.getReferrerTrack()
        }
    }
}, function(e, t, r) {
    (function(e, n) {
        var a;
        ! function(n) {
            function o(e) {
                throw new RangeError(O[e])
            }

            function i(e, t) {
                for (var r = e.length, n = []; r--;) n[r] = t(e[r]);
                return n
            }

            function s(e, t) {
                var r = e.split("@"),
                    n = "";
                return r.length > 1 && (n = r[0] + "@", e = r[1]), e = e.replace(R, "."), n + i(e.split("."), t).join(".")
            }

            function l(e) {
                for (var t, r, n = [], a = 0, o = e.length; a < o;) t = e.charCodeAt(a++), t >= 55296 && t <= 56319 && a < o ? (r = e.charCodeAt(a++), 56320 == (64512 & r) ? n.push(((1023 & t) << 10) + (1023 & r) + 65536) : (n.push(t), a--)) : n.push(t);
                return n
            }

            function h(e) {
                return i(e, function(e) {
                    var t = "";
                    return e > 65535 && (e -= 65536, t += P(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += P(e)
                }).join("")
            }

            function p(e) {
                return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : y
            }

            function u(e, t) {
                return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
            }

            function c(e, t, r) {
                var n = 0;
                for (e = r ? L(e / w) : e >> 1, e += L(e / t); e > A * j >> 1; n += y) e = L(e / A);
                return L(n + (A + 1) * e / (e + T))
            }

            function d(e) {
                var t, r, n, a, i, s, l, u, d, f, m = [],
                    g = e.length,
                    v = 0,
                    T = z,
                    w = x;
                for (r = e.lastIndexOf(U), r < 0 && (r = 0), n = 0; n < r; ++n) e.charCodeAt(n) >= 128 && o("not-basic"), m.push(e.charCodeAt(n));
                for (a = r > 0 ? r + 1 : 0; a < g;) {
                    for (i = v, s = 1, l = y; a >= g && o("invalid-input"), u = p(e.charCodeAt(a++)), (u >= y || u > L((b - v) / s)) && o("overflow"), v += u * s, d = l <= w ? k : l >= w + j ? j : l - w, !(u < d); l += y) f = y - d, s > L(b / f) && o("overflow"), s *= f;
                    t = m.length + 1, w = c(v - i, t, 0 == i), L(v / t) > b - T && o("overflow"), T += L(v / t), v %= t, m.splice(v++, 0, T)
                }
                return h(m)
            }

            function f(e) {
                var t, r, n, a, i, s, h, p, d, f, m, g, v, T, w, C = [];
                for (e = l(e), g = e.length, t = z, r = 0, i = x, s = 0; s < g; ++s)(m = e[s]) < 128 && C.push(P(m));
                for (n = a = C.length, a && C.push(U); n < g;) {
                    for (h = b, s = 0; s < g; ++s)(m = e[s]) >= t && m < h && (h = m);
                    for (v = n + 1, h - t > L((b - r) / v) && o("overflow"), r += (h - t) * v, t = h, s = 0; s < g; ++s)
                        if (m = e[s], m < t && ++r > b && o("overflow"), m == t) {
                            for (p = r, d = y; f = d <= i ? k : d >= i + j ? j : d - i, !(p < f); d += y) w = p - f, T = y - f, C.push(P(u(f + w % T, 0))), p = L(w / T);
                            C.push(P(u(p, 0))), i = c(r, v, n == a), r = 0, ++n
                        }++r, ++t
                }
                return C.join("")
            }

            function m(e) {
                return s(e, function(e) {
                    return C.test(e) ? d(e.slice(4).toLowerCase()) : e
                })
            }

            function g(e) {
                return s(e, function(e) {
                    return I.test(e) ? "xn--" + f(e) : e
                })
            }
            var v, b = ("object" == typeof t && t && t.nodeType, "object" == typeof e && e && e.nodeType, 2147483647),
                y = 36,
                k = 1,
                j = 26,
                T = 38,
                w = 700,
                x = 72,
                z = 128,
                U = "-",
                C = /^xn--/,
                I = /[^\x20-\x7E]/,
                R = /[\x2E\u3002\uFF0E\uFF61]/g,
                O = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                },
                A = y - k,
                L = Math.floor,
                P = String.fromCharCode;
            v = {
                version: "1.4.1",
                ucs2: {
                    decode: l,
                    encode: h
                },
                decode: d,
                encode: f,
                toASCII: g,
                toUnicode: m
            }, void 0 !== (a = function() {
                return v
            }.call(t, r, t, e)) && (e.exports = a)
        }()
    }).call(t, r(10)(e), r(1))
}, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function(e, t, r) {
    "use strict";
    e.exports = {
        isString: function(e) {
            return "string" == typeof e
        },
        isObject: function(e) {
            return "object" == typeof e && null !== e
        },
        isNull: function(e) {
            return null === e
        },
        isNullOrUndefined: function(e) {
            return null == e
        }
    }
}, function(e, t, r) {
    "use strict";
    t.decode = t.parse = r(13), t.encode = t.stringify = r(14)
}, function(e, t, r) {
    "use strict";

    function n(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    e.exports = function(e, t, r, o) {
        t = t || "&", r = r || "=";
        var i = {};
        if ("string" != typeof e || 0 === e.length) return i;
        var s = /\+/g;
        e = e.split(t);
        var l = 1e3;
        o && "number" == typeof o.maxKeys && (l = o.maxKeys);
        var h = e.length;
        l > 0 && h > l && (h = l);
        for (var p = 0; p < h; ++p) {
            var u, c, d, f, m = e[p].replace(s, "%20"),
                g = m.indexOf(r);
            g >= 0 ? (u = m.substr(0, g), c = m.substr(g + 1)) : (u = m, c = ""), d = decodeURIComponent(u), f = decodeURIComponent(c), n(i, d) ? a(i[d]) ? i[d].push(f) : i[d] = [i[d], f] : i[d] = f
        }
        return i
    };
    var a = Array.isArray || function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }
}, function(e, t, r) {
    "use strict";

    function n(e, t) {
        if (e.map) return e.map(t);
        for (var r = [], n = 0; n < e.length; n++) r.push(t(e[n], n));
        return r
    }
    var a = function(e) {
        switch (typeof e) {
            case "string":
                return e;
            case "boolean":
                return e ? "true" : "false";
            case "number":
                return isFinite(e) ? e : "";
            default:
                return ""
        }
    };
    e.exports = function(e, t, r, s) {
        return t = t || "&", r = r || "=", null === e && (e = void 0), "object" == typeof e ? n(i(e), function(i) {
            var s = encodeURIComponent(a(i)) + r;
            return o(e[i]) ? n(e[i], function(e) {
                return s + encodeURIComponent(a(e))
            }).join(t) : s + encodeURIComponent(a(e[i]))
        }).join(t) : s ? encodeURIComponent(a(s)) + r + encodeURIComponent(a(e)) : ""
    };
    var o = Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        },
        i = Object.keys || function(e) {
            var t = [];
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
            return t
        }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        return {
            popup: !0,
            shareText: {
                de: "teilen",
                en: "share"
            },
            name: "facebook",
            faName: "fa-facebook",
            title: {
                de: "Bei Facebook teilen",
                en: "Share on Facebook"
            },
            shareUrl: "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(e.getURL()) + e.getReferrerTrack()
        }
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        var t = encodeURIComponent(e.getURL()),
            r = e.getTitle(),
            n = e.getMeta("description");
        return {
            blank: !0,
            popup: !1,
            shareText: "Flattr",
            name: "flattr",
            faName: "fa-money",
            title: {
                de: "Artikel flattrn",
                en: "Flattr this"
            },
            shareUrl: "https://flattr.com/submit/auto?title=" + encodeURIComponent(r) + "&description=" + encodeURIComponent(n) + "&category=" + encodeURIComponent(e.options.flattrCategory || "text") + "&user_id=" + encodeURIComponent(e.options.flattrUser) + "&url=" + t + e.getReferrerTrack()
        }
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        return {
            popup: !0,
            shareText: {
                de: "teilen",
                en: "share"
            },
            name: "googleplus",
            faName: "fa-google-plus",
            title: {
                de: "Bei Google+ teilen",
                en: "Share on Google+"
            },
            shareUrl: "https://plus.google.com/share?url=" + encodeURIComponent(e.getURL()) + e.getReferrerTrack()
        }
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        return {
            blank: !0,
            popup: !1,
            shareText: "Info",
            name: "info",
            faName: "fa-info",
            title: {
                de: "weitere Informationen",
                en: "more information"
            },
            shareUrl: e.getInfoUrl()
        }
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        var t = encodeURIComponent(e.getURL()),
            r = encodeURIComponent(e.getTitle());
        return {
            popup: !0,
            shareText: {
                de: "mitteilen",
                en: "share"
            },
            name: "linkedin",
            faName: "fa-linkedin",
            title: {
                de: "Bei LinkedIn teilen",
                en: "Share on LinkedIn"
            },
            shareUrl: "https://www.linkedin.com/shareArticle?mini=true&summary=" + encodeURIComponent(e.getMeta("description")) + "&title=" + r + "&url=" + t
        }
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        var t = e.getOption("mailUrl");
        return 0 === t.indexOf("mailto:") && (t += "?subject=" + encodeURIComponent(e.getTitle()), t += "&body=" + encodeURIComponent(e.getOption("mailBody").replace(/\{url\}/i, e.getURL()))), {
            blank: 0 === t.indexOf("http"),
            popup: !1,
            shareText: {
                en: "mail"
            },
            name: "mail",
            faName: "fa-envelope",
            title: {
                de: "Per E-Mail versenden",
                en: "Send by email"
            },
            shareUrl: "mailto:?subject=" + encodeURIComponent(e.getTitle()) + "&body=" + encodeURIComponent(e.getOption("mailBody").replace(/\{url\}/i, e.getURL()))
        }
    }
}, function(e, t, r) {
    "use strict";
    var n = r(0);
    e.exports = function(e) {
        var t = e.getTitle(),
            r = e.getMeta("DC.creator");
        r.length > 0 && (t += " - " + r);
        var a = e.getOption("mediaUrl");
        (!a || a.length <= 0) && (a = e.getMeta("og:image"));
        var o = n.parse("https://www.pinterest.com/pin/create/link/", !0);
        return o.query.url = e.getURL(), o.query.media = a, o.query.description = t, delete o.search, {
            popup: !0,
            shareText: "pin it",
            name: "pinterest",
            faName: "fa-pinterest-p",
            title: {
                de: "Bei Pinterest pinnen",
                en: "Pin it on Pinterest"
            },
            shareUrl: n.format(o) + e.getReferrerTrack()
        }
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        return {
            name: "print",
            faName: "fa-print",
            popup: !1,
            shareText: {
                de: "drucken",
                en: "print"
            },
            title: {
                de: "drucken",
                en: "print"
            },
            shareUrl: "javascript:window.print();"
        }
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        return {
            popup: !0,
            shareText: {
                de: "teilen",
                en: "share"
            },
            name: "qzone",
            faName: "fa-qq",
            title: {
                de: "Bei Qzone teilen",
                en: "Share on Qzone"
            },
            shareUrl: "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + encodeURIComponent(e.getURL()) + "&title=" + e.getTitle() + e.getReferrerTrack()
        }
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        var t = encodeURIComponent(e.getURL()),
            r = encodeURIComponent(e.getTitle());
        return "" !== r && (r = "&title=" + r), {
            popup: !0,
            shareText: {
                de: "teilen",
                en: "share"
            },
            name: "reddit",
            faName: "fa-reddit",
            title: {
                de: "Bei Reddit teilen",
                en: "Share on Reddit"
            },
            shareUrl: "https://reddit.com/submit?url=" + t + r + e.getReferrerTrack()
        }
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        var t = encodeURIComponent(e.getURL()),
            r = encodeURIComponent(e.getTitle());
        return "" !== r && (r = "&title=" + r), {
            popup: !0,
            shareText: {
                de: "teilen",
                en: "share"
            },
            name: "stumbleupon",
            faName: "fa-stumbleupon",
            title: {
                de: "Bei Stumbleupon teilen",
                en: "Share on Stumbleupon"
            },
            shareUrl: "https://www.stumbleupon.com/submit?url=" + t + r + e.getReferrerTrack()
        }
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        return {
            popup: !0,
            shareText: {
                de: "teilen",
                en: "share"
            },
            name: "tencent-weibo",
            faName: "fa-tencent-weibo",
            title: {
                de: "Bei tencent weibo teilen",
                en: "Share on tencent weibo"
            },
            shareUrl: "http://v.t.qq.com/share/share.php?url=" + encodeURIComponent(e.getURL()) + "&title=" + e.getTitle() + e.getReferrerTrack()
        }
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        var t = encodeURIComponent(e.getURL()),
            r = e.getTitle();
        return {
            popup: !1,
            shareText: {
                de: "teilen",
                en: "share"
            },
            name: "threema",
            faName: "fa-lock",
            title: {
                de: "Bei Threema teilen",
                en: "Share on Threema"
            },
            shareUrl: "threema://compose?text=" + encodeURIComponent(r) + "%20" + t + e.getReferrerTrack()
        }
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        return {
            popup: !0,
            shareText: {
                de: "teilen",
                en: "share"
            },
            name: "tumblr",
            faName: "fa-tumblr",
            title: {
                de: "Bei tumblr teilen",
                en: "Share on tumblr"
            },
            shareUrl: "http://tumblr.com/widgets/share/tool?canonicalUrl=" + encodeURIComponent(e.getURL()) + e.getReferrerTrack()
        }
    }
}, function(e, t, r) {
    "use strict";
    var n = r(0);
        // a = function(e, t) {
        //     var r = document.createElement("div");
        //     r.innerHTML = $('article.sectbody > .intro').text();
        //     var n = r.textContent;
        //      if (n.length <= t) return e;
        //     var a = n.substring(0, t - 1).lastIndexOf(" ");
        //     return n = n.substring(0, a) + "…"
        // };
    e.exports = function(e) {
        var t = n.parse("https://twitter.com/intent/tweet", !0),
            titletag = e.getTitle();
  
        return t.query.text = $('article.sectbody > .intro').text(), t.query.url = e.getURL(), null !== e.options.twitterVia && (t.query.via = e.options.twitterVia), delete t.search, {
            popup: !0,
            shareText: {
                en: "tweet"
            },
            name: "twitter",
            faName: "fa-twitter",
            title: {
                de: "Bei Twitter teilen",
                en: "Share on Twitter"
            }, 
            shareUrl: n.format(t) 
        }
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        return {
            popup: !0,
            shareText: {
                de: "teilen",
                en: "share"
            },
            name: "weibo",
            faName: "fa-weibo",
            title: {
                de: "Bei weibo teilen",
                en: "Share on weibo"
            },
            shareUrl: "http://service.weibo.com/share/share.php?url=" + encodeURIComponent(e.getURL()) + "&title=" + e.getTitle() + e.getReferrerTrack()
        }
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        var t = encodeURIComponent(e.getURL()),
            r = e.getTitle();
        return {
            popup: !1,
            shareText: {
                de: "teilen",
                en: "share"
            },
            name: "whatsapp",
            faName: "fa-whatsapp",
            title: {
                de: "Bei Whatsapp teilen",
                en: "Share on Whatsapp"
            },
            shareUrl: "whatsapp://send?text=" + encodeURIComponent(r) + "%20" + t + e.getReferrerTrack()
        }
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        return {
            popup: !0,
            shareText: {
                de: "teilen",
                en: "share"
            },
            name: "xing",
            faName: "fa-xing",
            title: {
                de: "Bei XING teilen",
                en: "Share on XING"
            },
            shareUrl: "https://www.xing.com/social_plugins/share?url=" + encodeURIComponent(e.getURL()) + e.getReferrerTrack()
        }
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        var t = encodeURIComponent(e.getURL());
        return {
            popup: !0,
            shareText: {
                de: "merken",
                en: "bookmark"
            },
            name: "pocket",
            faName: "fa-pocket",
            title: {
                de: "Bei pocket merken",
                en: "bookmark with pocket"
            },
            shareUrl: "https://getpocket.com/save?url=" + encodeURIComponent(e.getURL()) + '&title=' + e.getTitle() + e.getReferrerTrack()
        }
    }
}, function(e, t, r) {
    "use strict";
    var a = r(0);
    e.exports = function(e) {
        var t = e.getTitle(),
            r = e.getMeta("DC.creator");
        r.length > 0 && (t += " - " + r);
        var n = e.getOption("mediaUrl");
        (!n || n.length <= 0) && (n = e.getMeta("og:image"));
        var o = a.parse("https://www.pinterest.com/pin/create/link/", !0);
        return o.query.url = e.getURL(), o.query.media = n, o.query.description = t, delete o.search, {
            popup: !0,
            shareText: "pin it",
            name: "pinterest",
            faPrefix: "fab",
            faName: "fa-pinterest-p",
            title: {
                de: "Bei Pinterest pinnen",
                en: "Pin it on Pinterest"
            },

            shareUrl: "https://www.pinterest.com/pin/create/link?url=" + encodeURIComponent( e.getOption("listUseHref") ) + '&description=' + e.getOption("listUseTitle")  + '&image_url=' + e.getOption("listUseImg") + e.getReferrerTrack()
        }
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        return {
            popup: !0,
            shareText: {
                de: 'mit pocket merken',
                en: 'bookmark with pocket'
            },
            name: "pocket",
            faName: "fa-pocket",
            title: {
                de: 'mit pocket merken',
                en: 'bookmark with pocket'
            },
            shareUrl: "https://getpocket.com/save?url=" + encodeURIComponent( e.getOption("listUseHref") ) + '&title=' +  e.getOption("listUseTitle")  + e.getReferrerTrack()
        }
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        var t = encodeURIComponent(e.getURL());
        return {
            popup: !0,
            shareText: {
                de: "flip it",
                en: "flip it"
            },
            name: "flipboard",
            faName: "fa-flipboard",
            title: {
                de: "bei Flipboard sammeln",
                en: "Share on Flipboard"
            },
            // hier muss Weiche rein:
            shareUrl: "https://share.flipboard.com/bookmarklet/popout?v=2&title=" +  e.getOption("listUseTitle")  + "&url=" + encodeURIComponent( e.getOption("listUseHref") ) + e.getReferrerTrack()
        }
    }
}
]);

// added by mar: copy to clipboard

function copyToClipboard( sText ) {

    var oText = false,
        bResult = false;
    try
    {
        oText = document.createElement("textarea");
        $(oText).addClass('clipboardCopier').css('opacity','0.01').val(sText).insertAfter('.shariff');
        oText.select();
        document.execCommand("Copy");
        bResult = true;

        setTimeout(function(){
           $('.shariff .tooltip').tooltip('hide');
         }, 2000);

    } catch(e) {
         $('.shariff .tooltip > .tooltip-inner ').text('Kopieren in Ihrem Browser nicht möglich');
          setTimeout(function(){
           $('.shariff .tooltip').tooltip('hide');
         }, 3000);
    }
    
    $(oText).remove();
    return bResult;

}



/* ----- patOtaz_de.ivw.js ------------------------------------------------------------------- */

window.patOtaz_de     = window.patOtaz_de     || new Object;
window.patOtaz_de.ivw = window.patOtaz_de.ivw || function (settings) {

try {
  
  var setup = settings || { name: 'NN', gig: 'web', agof: true };
  var iam_data = {
    "st": setup.gig === 'mobile' ? 'mobtaz' : 'taz',
    "cp": setup.name,
    "sv": setup.agof ? 'i2' : 'ke',
    "sc": "yes"
  };

  iom.c( iam_data, 1 ); // with method appendChild()

/* DIFFHINT */

} catch( ex ) { console.log( "problem with patOtaz_de.ivw: "+ ex.message ); }

}; // patOtaz_de.ivw



/* ----- filOtaz_de.bugfix.js ------------------------------------------------------------------- */


$(document).ready(function(){
	/*
	 * Partially stolen from
	 * Bowser - a browser detector
	 * https://github.com/ded/bowser
	 * MIT License | (c) Dustin Diaz 2015
	 */
    if(window.navigator.userAgent.toLowerCase().indexOf('gecko') > -1) {
        var match = window.navigator.userAgent.match(/rv:(\d+(\.\d+)?)/i);
    	var version = parseInt((match && match.length > 1 && match[1]) || -1);
    	
    	if(-1 < version && 2 > version) {
    		$('iframe').each(function() {
    			this.contentWindow.location.href = this.src;
    		});
    	}
    }
// hotfix for CMP: Opera + tracker blockieren führt zu: kein CMP, scrollen geblockt. Das wird hiermit erkannt und behoben, 
var htmlTag = document.getElementsByTagName("html")[0];

window.MutationObserver = window.MutationObserver
    || window.WebKitMutationObserver
    || window.MozMutationObserver;
var target = htmlTag,
observer = new MutationObserver(function(mutation) {
     setTimeout(function(){ 
            if (  ( $('div[id^=sp_message_container_]').length) && ( $('div[id^=sp_message_container_]').css('display') != 'block' ) && ( $( htmlTag ).attr('class') == 'sp-message-open'   ) )
            {
                $( htmlTag ).get(0).style.cssText = 'position: relative !important; overflow: auto !important; margin-top: auto !important; top: auto !important; bottom: auto !important'   
            }
        }, 600); 
     observer.disconnect();
    }),
config = {
    attributes: true // this is to watch for attribute changes.
};
observer.observe(target, config);

    // mar: CSS feature detection
    var styleTestList = ["ColumnSpan", "FlexWrap", "JustifyContent", "AlignSelf"];
    var isSupported = false;
    var styles = document.body.style;

    for (var i = 0; i < styleTestList.length; i++) {
        if  (           styleTestList[i] in styles ||
             'Webkit' + styleTestList[i] in styles ||
             'Moz'    + styleTestList[i] in styles ||
             'Ms'     + styleTestList[i] in styles ||
             'O'      + styleTestList[i] in styles 
            ) {
            // CSS feature is available
        } else {
            $('#pages').addClass('no-support-' + styleTestList[i].toLowerCase() )
        }
    }
    // is safari

    function get_browser() {
        var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 
        if(/trident/i.test(M[1])){
            tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
            return {name:'IE',version:(tem[1]||'')};
            }   
        if(M[1]==='Chrome'){
            tem=ua.match(/\bOPR|Edge\/(\d+)/)
            if(tem!=null)   {return {name:'Opera', version:tem[1]};}
            }   
        M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
        if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
        return {
          name: M[0],
          version: M[1]
        };
     }

   if( /constructor/i.test(window.HTMLElement) ){
    var browser=get_browser();
    // browser.name = 'Chrome'
    // browser.version = '40'
    if ( parseInt(browser.version) < 10 )  { $('#pages').addClass( 'safariLt10' ) }
   }
// DEPRECATED: $.browser is deprecated and removed as of jQuery v1.9 
//
//	// https://bugzilla.mozilla.org/show_bug.cgi?id=356558
//	//	seems to hit only ff <v4, aka gecko <v2
//	if( $.browser.mozilla && parseInt( $.browser.version ) <2 )
//		$('iframe').each(function(){
//			this.contentWindow.location.href=this.src;
//			});
//		
	});


/* ----- jkOtaz_de.ajaxBugfix.js ------------------------------------------------------------------- */

// monkey patching jQuerys $.ajax to remove dtd refrences in xml responses and replace them with the most common html entities 
// @see https://bugs.webkit.org/show_bug.cgi?id=5888
(function($) {
	filOtaz_de.Browser = filOtaz_de.Browser || {};
	
	if (typeof filOtaz_de.Browser.supportsExternalEntityReferences == 'undefined') {
		filOtaz_de.Browser.supportsExternalEntityReferences = (function() {
	        var testXml = '<?xml version="1.0" encoding="UTF-8" ?><!DOCTYPE t [<!ENTITY % xhtml PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd" >%xhtml;]><t>&auml;</t>',
        	    parser = new DOMParser()
	            ;

        	try {
	            var dom = parser.parseFromString( testXml, "text/xml" );
        	    return dom.documentElement.tagName === 't';
	        } catch (e) {
        	    return false;
	        }
	    })();
	}

	if (!filOtaz_de.Browser.supportsExternalEntityReferences) {
		// all html entities found in our xml sources
		var docTypeWithEntites = '<!DOCTYPE taz-content [<!ENTITY aacute "&#225;"><!ENTITY Aacute "&#193;"><!ENTITY acirc "&#226;"><!ENTITY agrave "&#224;"><!ENTITY Agrave "&#192;"><!ENTITY aring "&#229;"><!ENTITY Aring "&#197;"><!ENTITY atilde "&#227;"><!ENTITY Atilde "&#195;"><!ENTITY auml "&#228;"><!ENTITY Auml "&#196;"><!ENTITY ccedil "&#231;"><!ENTITY Ccedil "&#199;"><!ENTITY copy "&#169;"><!ENTITY deg "&#176;"><!ENTITY eacute "&#233;"><!ENTITY Eacute "&#201;"><!ENTITY ecirc "&#234;"><!ENTITY egrave "&#232;"><!ENTITY euml "&#235;"><!ENTITY euro "&#8364;"><!ENTITY hellip "&#8230;"><!ENTITY iacute "&#237;"><!ENTITY icirc "&#238;"><!ENTITY Icirc "&#206;"><!ENTITY iuml "&#239;"><!ENTITY laquo "&#171;"><!ENTITY mdash "&#8212;"><!ENTITY nbsp "&#160;"><!ENTITY ndash "&#8211;"><!ENTITY ntilde "&#241;"><!ENTITY oacute "&#243;"><!ENTITY Oacute "&#211;"><!ENTITY ocirc "&#244;"><!ENTITY ograve "&#242;"><!ENTITY oslash "&#248;"><!ENTITY Oslash "&#216;"><!ENTITY otilde "&#245;"><!ENTITY ouml "&#246;"><!ENTITY Ouml "&#214;"><!ENTITY raquo "&#187;"><!ENTITY reg "&#174;"><!ENTITY sect "&#167;"><!ENTITY shy "&#173;"><!ENTITY szlig "&#223;"><!ENTITY trade "&#8482;"><!ENTITY uacute "&#250;"><!ENTITY ugrave "&#249;"><!ENTITY uuml "&#252;"><!ENTITY Uuml "&#220;"><!ENTITY bdquo "&#8222;"><!ENTITY ldquo "&#8220;"><!ENTITY rsquo "&#8217;">]>';
		// modified version of
		// @see https://raw.github.com/jquery/jquery/master/src/ajax/parseXML.js
		// that strips DOCTYPE
		var parseXml = function(data) {			
			var xml, tmp;
			if ( !data || typeof data !== "string" ) {
				return null;
			}
			try {
				tmp = new DOMParser();
				// exchage DOCTYPE declaration with a DOCTYPE declaration with embbed entities
				data = data.replace(/<\!DOCTYPE[^\>\[]+(\[[^\]]+)?]>/g, docTypeWithEntites);
				xml = tmp.parseFromString( data, "text/xml" );
			} catch ( e ) {
				xml = undefined;
			}

			if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
				jQuery.error( "Invalid XML: " + data );
			}
			return xml;	
		}


		var originalAjax = $.ajax;

		$.ajax = function (settings) {
			if (settings.dataType === 'xml') {
				settings.dataType = 'text';
				// Patching the callbacks
				if (typeof settings.success === 'function') {
					var origSuccess = settings.success;
					settings.success = function(data, status, jqx) {
						var xmlResponse = parseXml(jqx.responseText);
						settings.dataType = 'xml';
						jqx.responseText = xmlResponse;
						return origSuccess(xmlResponse, status, jqx);
					}
				}
				if (typeof settings.error === 'function') {
					var origError = settings.error;
					settings.error = function(jqx, statusText, errorThrown) {
						jqx.responseText = parseXml(jqx.responseText);
						settings.dataType = 'xml';
						return origError(jqx, statusText, errorThrown);
					}
				}
			} 
			return originalAjax(settings);
		}
	}
})(jQuery);


/* ----- marOtaz_de.commentCounter_2017_06.js ------------------------------------------------------------------- */

$(document).ready(function() {
	// --------- char counter
	$('form#send-comment input.submit').before('<span class="commentLength"><span>noch </span><span id="num"></span><span>Zeichen</span></div>');


	// when CharMax changes - has to be changed on snorch too
	var getCommentCharMax = 2000,
		commCounterRed = 9,
		commCounterShow = 500;

	$('form#send-comment textarea#form_post').keyup(updateCount).keydown(updateCount).attr('maxlength', getCommentCharMax);

	// SOLUTION FOR DOUBLE FORM BUG 
	$('form#send-comment input.submit').mousedown(function(e){
		if (($('form#send-comment textarea#form_post').val().length) === 0){
			$(this).attr('disabled','true');
		}

	});

	function updateCount() {
		var cs = getCommentCharMax - ($(this).val().length);
		if (($(this).val().length) > 0) {
			$('form#send-comment input.submit').removeAttr('disabled');
		};
		if (cs <= commCounterRed) {
			$('.commentLength').css('color', '#A80A1A')
		} else {
			$('.commentLength').css('color', '#779bab')
		};

		if (cs <= commCounterShow) {
					$('.commentLength').fadeIn();	
					$('#num').text(cs);	
		} else {
					$('.commentLength').fadeOut();	
		};

	}
}); // doc ready


/* ----- marOtaz_de.commentsReverse_2017_06.js ------------------------------------------------------------------- */

	$(document).ready(function() {

		// complete set (with comments on comments)
		var commentsSet = $('div.sect_commentlinks time');
		// = alone standing comments (without answers) - first level
		var seperateComments = $('.sect_commentlinks ul.sectbody > li');
		writeHumanDates(commentsSet);
	
		// no sorting buttons if < 2 comments (of first level)
		if (seperateComments.length < 2) {
			return false
		}


		// fade out after first comment
		if (seperateComments.length > 1 && !$('.community.profile').length && !(/bb_message/).test(window.location.hash) ) {

			// fade in all comments when scrollin to social media buttons. (google news doesn't extract acrticle when too much comments.)
			var done = false;
			$(window).on('scroll', function(){
				if (done != true) {
					var scrollBottom = $(this).scrollTop() + $(this).height();

			     	if( scrollBottom >=$('.sect_commentlinks ').offset().top ){
						showAllcomments()
			    }
	   	    }
			})

			var lastCommentToShow = $('.sect_commentlinks ul.sectbody > li:eq(0)').addClass('lastCommentToShow');

			lastCommentToShow.nextAll().css({"display":"none"});
			lastCommentToShow.find('.thread').css({"display":"none"});

			$('<input type="submit" id="fadeInComments" class="showAll submit" name="showAll" value="Alle ' +  commentsSet.length +  ' Kommentare anzeigen" />')
				.insertAfter( lastCommentToShow )
				.bind('click', function(){
						showAllcomments()
					});
		}

		function showAllcomments(){

				lastCommentToShow.removeClass('lastCommentToShow').addClass('done').nextAll().fadeIn('50');
				lastCommentToShow.find('.thread').fadeIn('50');
				$('#fadeInComments').fadeOut('50');
				done = true;
				// start comment order stuff
				initCommentOrder();

		}


			function initCommentOrder(){

		var firstComment = $('.sect_commentlinks ul.sectbody > li > time').first().attr('datetime');
		var lastComment = $('.sect_commentlinks ul.sectbody > li > time').last().attr('datetime');

		$('.sect_commentlinks > .secthead > ul.toolbar').append('<li><a href="#" id="sortCommentsNewToOld" class="CommentsRevToggle">Neueste</a></li><li><a href="#" id="sortCommentsOldToNew" class="CommentsRevToggle">Älteste</a></li>');

		// detect start sorting order 
		if (firstComment < lastComment) {
			// default: reverse if detecting from old to new and set new to old to active
			$('#sortCommentsNewToOld').addClass('active');
			sortComm('sortNewToOld');

		}
		if (firstComment > lastComment) {
			$('#sortCommentsNewToOld').addClass('active');

		}

		$('a.CommentsRevToggle').click(function(event) {
			event.preventDefault();
			if (!$(this).hasClass('active')) {

						$('.CommentsRevToggle').removeClass('active');$(this).addClass('active');

				if ($(this).is('#sortCommentsNewToOld')) {
					sortComm('sortNewToOld');
				}
				if ($(this).is('#sortCommentsOldToNew')) {
					sortComm('sortOldToNew');
				}
			}
		});

			}
	

		function sortComm(order) {

			// refresh first and last comment to check order
			var firstComment = $('.sect_commentlinks ul.sectbody > li > time').first().attr('datetime');
			var lastComment = $('.sect_commentlinks ul.sectbody > li > time').last().attr('datetime');

			// dont reverse if detected already correct sorting order
			if ((order === 'sortNewToOld' && (firstComment < lastComment)) || (order === 'sortOldToNew' && (firstComment > lastComment))) {

				var communityList = $('div.sect_commentlinks ul.sectbody.directory');
				var communitylistItems = communityList.children('ul>li');
				communityList.append(communitylistItems.get().reverse());

			}
		}



		//taken from xsl-files
		function writeHumanDates(commentsSet) {
			commentsSet.each(function() {
				var timeN = $(this);
				var then = new Date($(this).attr('datetime'));
				var now = new Date();
				var passed = new Date(now - then);
				var tell;
				if (passed < 2 * 60 * 60 * 1000) { // within last 2 hours
					tell = passed.getUTCMinutes() + ' Min';
					if (passed < 60 * 60 * 1000) // within last hour
						tell += 'uten';
					else // earlier
						tell = passed.getUTCHours() + ' Std, ' + tell;
					tell = 'vor ' + tell;
				} else { // earlier
					if (passed < 5 * 24 * 60 * 60 * 1000) { // within last 5 days
						var passedDays = now.getDay() - then.getDay();
						if (passedDays < 0) passedDays += 7;
						if (passedDays <= 1) tell = ['heute', 'gestern', 'vorgestern'][passedDays]
						else tell = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'][then.getDay()];
					} else if (then.getFullYear() == now.getFullYear()) // this year
						tell = then.getDate() + '. ' + ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'][then.getMonth()];
					else { // earlier
						var day = then.getDate();
						day = (day < 10 ? '0' : '') + day;
						var mon = then.getMonth() + 1;
						mon = (mon < 10 ? '0' : '') + mon;
						tell = day + '.' + mon + '.' + then.getFullYear(); // 'DD.MM.YYYY'
					}
					tell += ', ' + then.toTimeString().replace(/^(.*:.*):.*$/, '$1'); // append time
				}
				if (tell) timeN.text(tell);
			}); // for each
		}
	}); // doc ready


/* ----- filOtaz_de.float.js ------------------------------------------------------------------- */

if( ! window.filOtaz_de_float )  window.filOtaz_de_float = new Object;

window.filOtaz_de_float = {
		promise : $.Deferred()
}


$(document).ready(function(){
/* ToDo be early (-ier than DomContentLoaded) - seperate into load phases: 
	* handle each page directly after loading.
	* main menu after 1st page
	*/

/*
	var console = $('<div class="console"></div>')
		.css({ position:'fixed', bottom:'0px', right:'0px', width:'180px', background:'rgba(0,0,0,0.2)' })
		.appendTo( $('body') );
*/

	if(! $('#pages').length ) return;

	var win = $(window);


	// context for float()
	var f;

	var scroll;	// dynamically represent actual scroll position
	f = function(){  scroll = { x: win.scrollLeft() , y: win.scrollTop() };  };
	win.scroll( f ); f();

	var viewport;	// dynamically represent actual viewport size
	f = function(){  viewport = { w: win.width(), h: win.height() };  };
	win.resize( f ); f();

	var float = function( e ){	// add float to page element e

		var body = $('>.body', e), tail = $('>.tail', e);
		var conf = {
			runin  : viewport.h * 0.7,
			runout : tail.length ? 30 : 80,
			offset : { top:0, bottom:0 },
			addHeight : tail.length ? 153 : 0
			};

		var runout = false; 
//		(function(){ // chrisso: commented out (seems useless), function gets called asynchronously and runout (see above) will stay FALSE
			var calcRunout = false;
			var wing = $('>.wing',e);
			var nose = $('>.head >.nose',e);
			if( !calcRunout ) calcRunout = function() { 
				// chrisso: nose, tail or wing are sometimes non existent (element.length == 0). 
				//          On jQuery v1.4.2 those elements returned NULL when calling .outerHeight().
				//          As of jQuery v2 those calls return UNDEFINED. This leads to the original 
				//          calculation returning 'NaN' (e. g. UNDEFINED + 1 == 'NaN'). The following  
				//          fix sets those heights to 0. Also the outer Heights are not correctly calculated 
				//          anymore for inline elements. As an ugly fix we change the display style, calculate 
				//          our heights and reset the style.
				
				// chrisso: Declare variables
				var ret;

				// chrisso: Set display to block. Otherwise we will not get the correct height of the wing.
				$(wing).css('display', 'block');
				
				// chrisso: Calculate
				ret = (nose.outerHeight() ? nose.outerHeight() : 0)
					+ (wing.outerHeight() ? wing.outerHeight() : 0)
					+ (tail.outerHeight() ? tail.outerHeight() : 0)
					+ ($(e).hasClass('feed') ? 0 : conf.runout);

				// chrisso: Reset display to CSS default
				$(wing).css('display', '');
				
				return ret;
				
//				return nose.outerHeight() + wing.outerHeight() + tail.outerHeight() + conf.runout;  // chrisso: commented out (see above)
			};
/*
			if( !calcRunout && $(e).filter('.first.news').length )
				calcRunout = function() { return wing.height() + conf.runout;  };
			if( !calcRunout  ) calcRunout = function() { 
				return wing.outerHeight() + conf.runout;  
				};
*/

			setRunout = function() {  console.log('runout triggered')
				runout = calcRunout();

					goDecider();

					var height = ''+ ( runout - conf.offset.bottom ) +'px';
				if ( float ) float.N.css({ height:height });

				// jk 2015-11-06 Don't clip the floating wings
					body.css('min-height', ( runout + conf.addHeight -( body.outerHeight() - body.height() ) )+'px');
					// Element between float and nav
					if ($('.fullheader').length  ) insertFullheader();

			//	alert($('.fullheader')[0].getBoundingClientRect().height);

				
				};
//			setRunout(); wing.on('TAZadInserted filOtaz_de_float_mounted', setRunout );
//			setRunout(); // chrisso: commented out (useless)
			wing.on('TAZboxChange', setRunout ); 

//			$(window).on('load', setRunout); // chrisso: commented out (unreliable) // layout not ready on $(document).ready

			// chrisso: Add a one time scroll listener for calculation
			$(window).one('scroll', setRunout);

			//			})(); // chrisso: commented out (end of seemingly useless anonymous function)

		// chrisso: runout is always FALSE because of asynchronous anonymous function call 
		if(0 < body.length && $(e).hasClass('corp') && 300 > ((body.outerHeight() ? body.outerHeight() : 0) - calcRunout())) return false;
//		if( body.length && $(e).hasClass('corp') && body.outerHeight() - runout <300 ) return false; // chrisso: commented out (see above)


		var f;

		var page = {
			N: $(e),
			overTheTop: function(){  return page.vp.y < conf.offset.top;  },
			overTheBot: function(){  return page.vp.y + page.N.height() < viewport.h + conf.offset.bottom;  },
			present :   function(){  return page.vp.y + conf.runin < viewport.h;  },
			runout :    function(){  return page.vp.y + page.N.height() < runout;  }
			}
		f = function(){
			var offset = page.N.offset() ;
			page.vp = { x: offset.left - scroll.x , y: parseInt( offset.top - scroll.y ) };  

		};  win.scroll( f );  f();

/*
		f = function(){  
			page.w = page.N.width();  
			page.h = page.N.height();  
			};  page.N.on('DOMSubtreeModified', f );  f();
*/

		var float = {
			N : $('<div class="float" />').css({ position:'absolute', left:'0px', top:'0px', bottom:'0px', width:'0px' })
				.appendTo( page.N ),
			min: { h:464 },
			isMin: { h: function(){  return float.N.height() <= float.min.h;  }  }
			}
/*
		f = function(){
			float.w = float.N.width();
			float.h = float.N.height();
			};  page.N.on('DOMSubtreeModified', f );  f();
*/


		conf.offset = { top: -parseInt(float.N.css('margin-top')  ), bottom: parseInt(float.N.css('margin-bottom')) };
			
/* 
if ( $('.fullheader').length   ) console.log('fullheader height' + $('.fullheader').outerHeight() );
if ( $('.fullheader').length   ) console.log('hhhhheight' + -parseInt(float.N.css('margin-top') ) + 'xxx' + + parseInt($('.fullheader').outerHeight()  ) );


console.log('conf.offset.top' + conf.offset.top ); */

		var mode = {
			num : 0,
			handler : function(){},
			stable : function(){
				float.N.css({ 
					position:'absolute', left:'0px', top:'0px', bottom:'0px', 
					width:'0px', height:'', margin:'' 
					});
				},
			fixX : function(){
				float.N.css({ left:''+ page.vp.x +'px' });
				},
			go1 : function(){ // mode 1 "night": float matches page, at most marginally visible
				var lastmode = mode.num;
				if( mode.num == 10 ) return; mode.num = 10;
//console.log('go1');
				mode.handler = function(){
					//if( page.seeMin.h() )  mode.go2();	// fix bottom to viewport bottom
					}; mode.handler();
				mode.stable();
				if( lastmode >10 ) page.N.trigger('TAZdusk');
				},
			go2 : function(){ // mode 2 "morning": page rules view, top visible, float bottom aligned w/ viewport
				var lastmode = mode.num;
				if( mode.num == 20 ) return; mode.num = 20;
//console.log('go2');
				mode.handler = function(){
					//if( page.overTheTop() ){ mode.go3a(); return; }	// fix top to viewport top
					//if( page.overTheBot() ){ mode.go3b(); return; }	// fix bottom to page bottom
					//if( float.isMin.h()   ){ mode.go1();  return; }	// back to page aligned
					float.N.height( viewport.h - page.vp.y + conf.offset.top );	// update height
					}; mode.handler();
				float.N.css({ position:'absolute', left:'0px', top:'0px', bottom:'', width:'0px', margin:'' });
				float.N.removeClass('inFloat');

				if( lastmode <20 ) page.N.trigger('TAZdawn');
				if( lastmode >30 ) page.N.trigger('TAZunfix'); 
				},
			go3a : function(){ // mode 3a "summer day": clipped page fills view, float matches viewport 
				var lastmode = mode.num;
				if( mode.num == 35 ) return; mode.num = 35;
//console.log('go3a');
				mode.handler = function(){
					//if(  page.overTheBot() ){ mode.go4(); return; }	// fix bottom to page bottom
					//if( !page.overTheTop() ){ mode.go2(); return; }	// fix top to page top
					mode.fixX();
					}; mode.handler();
				float.N.css({ position:'fixed', top:'0px', bottom:'0px', width:'0px', height:'', marginTop:'0px' });
				float.N.addClass('inFloat');
				if( lastmode <30 ) page.N.trigger('TAZfix');
				},
			go3b : function(){ // mode 3b: "winter day": page fully visible, float matches page
				var lastmode = mode.num;
				if( mode.num == 30 ) return; mode.num = 30;
//console.log('go3b');
				mode.handler = function(){
					//if(  page.overTheTop() ){ mode.go4(); return; }	// fix top to viewport top
					//if( !page.overTheBot() ){ mode.go2(); return; }	// fix bottom to viewport bottom
					}; mode.handler();
				mode.stable();
				if( lastmode >30 ) page.N.trigger('TAZunfix'); 
				},
			go4 : function(){ // mode 4: "evening": page rules view, bottom visible, float top aligned w/ viewport
				var lastmode = mode.num;
				if( mode.num == 40 ) return; mode.num = 40;
//console.log('go4');
				float.N.css({ position:'fixed', top:'0px', bottom:'', width:'0px', marginTop:'0px' });
				float.N.addClass('inFloat');

				mode.handler = function(){
					float.N.height( page.N.height() + page.vp.y - conf.offset.bottom );	// update height
					//if(  float.isMin.h()   ){ mode.go5();  return; }	// free top from viewport top
					//if( !page.overTheTop() ){ mode.go3b(); return; }	// fix top to page top
					//if( !page.overTheBot() ){ mode.go3a(); return; }	// fix bottom to viewport bottom
					mode.fixX();
					}; mode.handler();
				if( lastmode <=30 ) page.N.trigger('TAZfix');
				if( lastmode >40 ) page.N.trigger('TAZback');
				},
			go5 : function(){ // mode 5: "tonight": float following page, at most marginally visible
				var lastmode = mode.num;
				if( mode.num == 50 ) return; mode.num = 50;
//console.log('go5');
				mode.handler = function(){
					//if( float.N.offset().top > scroll.y ) mode.go4();	// fix top to viewport top
					}; mode.handler();
				//var top = ''+ float.N.position().top +'px';
				//var top = ''+ ( float.N.offset().top - page.N.offset().top ) +'px';
				//float.N.css({ position:'absolute', left:'0px', top: top, bottom:'0px', width:'0px', height:'', margin:'' });
				//var height = ''+ float.N.height() +'px';
				var height = ''+ ( runout - conf.offset.bottom ) +'px';
				float.N.css({ position:'absolute', left:'0px', top:'', bottom:'0px', width:'0px', height:height, margin:'' });
				float.N.removeClass('inFloat');
				if( lastmode <50 ) page.N.trigger('TAZpast');
				}
			};
		if( page.N.height() > float.min.h ) {
			win.scroll(function(){  
					goDecider()
				});
			mode.go1(); // document reload ?!?
			}
			function goDecider(){
					// added by mar: check if page exists (when search word was not found)

					if (! page) return;

				if( 			! page.present()  )	mode.go1();
				else	if( 		page.runout()     )	mode.go5();
				else {	if(		page.overTheTop() )	{
						if(	page.overTheBot() )	mode.go4();
						else				mode.go3a();
						}
					else					{
						if(	page.overTheBot() )	mode.go3b();
						else				mode.go2();
						}
					}
				mode.handler();  
			}
//		$('>.head', page.N).appendTo( float.N ).css({ zIndex:0 });
		

/*
		$('<div>x</div>').css({ position:'absolute',    top:'0px', left:'0px'  , background:'blue' }).appendTo( float.N );
		$('<div>x</div>').css({ position:'absolute',    top:'0px', left:'940px', background:'blue' }).appendTo( float.N );
		$('<div>x</div>').css({ position:'absolute', bottom:'0px', left:'0px'  , background:'blue' }).appendTo( float.N );
		$('<div>x</div>').css({ position:'absolute', bottom:'0px', left:'940px', background:'blue' }).appendTo( float.N );
*/

		return float.N;
		}; // function float


	var mainmenu;
	var pages = $('#pages >.page:not(.thema.clip_large)');
	pages.each(function(i,e){
		var page = $(e);
		var fl = float( e );
		if(! fl ) return;

		page.on('TAZdawn TAZfix TAZpast TAZback TAZunfix TAZdusk', function(ev){
//console.log('' + ev.type + i);
			});

		var marge = $('<div class="rightbar" />').appendTo( fl );
		var nose = page.find('>.head >.nose').appendTo( marge ).css({ zIndex:0 });
		page.find('>.wing')
			.addClass('floating')
			.appendTo( marge )
			.trigger('filOtaz_de_float_mounted')
			;
		//page.on('TAZpast', function(){  marge.fadeOut();  });
		//page.on('TAZback', function(){  marge.fadeIn();  });

		var head = $('>.head', page);
	//	$('#pages > .sect_schwerpunkt ~ .page >.head ').css('top', '-400px' );

		var menu = $('>ul.newsnavigation', head);

		if( i>0 && $('>li',menu).length == 1 ) {
			// mar: no subnav if there is only one item ( taz leicht )
			$('>li',menu).remove();
			}
		if( i>0 && $('>li',menu).length >1 ) {
			
			menu.removeClass('newsnavigation').addClass('subnavigation');
			$('>li.home',menu).remove();
			page.on('TAZfix TAZback', function(){
//				mainmenu.prepend( menu.hide().fadeIn(100) );
				mainmenu.prepend( menu );
				});
			page.on('TAZunfix', function(){
				head.prepend( menu );
				});
			page.on('TAZpast', function(){
				menu.fadeOut(function(){ head.prepend( menu.show() ); });
				});
			page.on('TAZback', function(){
				mainmenu.prepend( menu.hide().fadeIn() );
				});
			}
		});
	
	(function(){
		var page = $('#pages');
		var isCorp = page.hasClass('corp') ? true : false;
		var fl = float( page );
		mainmenu = page.find('>.page.first >.head').appendTo( fl );

		// shrink tazze
		var home = {  
			node: $('>ul.newsnavigation >li.home', mainmenu),
			small: {  height: 27  },
			big: {}
			};

		home.big.height = parseInt(home.node.css('height'));

		var yStartPoint = isCorp ? 11 : 5;
		var xStartPoint = isCorp ? 0 : 168;
		var xEndPoint = isCorp ? 68 : 88;

		var afterHomeFirst = {
			node: home.node.next(),
			big: ({'margin-left': xStartPoint + 'px'}),
			small: ({'margin-left': xEndPoint + 'px'})
		};


		var afterHomeAll = {
			node: home.node.nextAll(),
			big: ({'margin-top' : yStartPoint + 'px'}),
			small: ({'margin-top' : '12px'})
		};

		var tazze = {
			node: home.node.find('>a >span'),
			big:   ({
    				'-ms-transform': 'scale(1)',
    				'webkit-transform': 'scale(1)',
    				'transform': 'scale(1)',
    				'transform-origin': 'initial'
				}),
			small: ({ 
    				'-ms-transform': 'scale(0.35)',
    				'webkit-transform': 'scale(0.35)',
    				'transform': 'scale(0.35)',
    				'transform-origin': '0% 93%'
			 }),
			smallForCorp: ({ 
    				'-ms-transform': 'scale(0.50)',
    				'webkit-transform': 'scale(0.50)',
    				'transform': 'scale(0.50)',
    				'transform-origin': '11% 200%'
			 })
			}

		var blocked;
		var shrink = function(){
			var delta = win.scrollTop() - mainmenu.offset().top;

			if( delta <0 ) {
				// default
				win.off('scroll.taz_shrink'); 
				tazze.node.css( tazze.big );
				afterHomeFirst.node.css( afterHomeFirst.big );
				afterHomeAll.node.css( afterHomeAll.big );
				win.on('scroll.taz_start', start);
				return;
				}
			if( !blocked ) {
				// scrolling

				var scaleFactor = isCorp ? (1 - delta/105).toFixed(2) : (1 - delta/82).toFixed(2);
			/*	tazze moving x and y */
				var originX = isCorp ? 11 : 0;
				var originY = isCorp ? 216 : 100;
				var moveleftFactor = isCorp ? -1.306 : 1.5;
				var movedownFactor = isCorp ? 9.4 : 4.7;
			/*	menu moving left */
				afterHomeFirst.node.css({'margin-left': xStartPoint - delta*moveleftFactor + 'px'});
			/*	menu moving down */
				afterHomeAll.node.css({'margin-top' : yStartPoint + delta/movedownFactor + 'px'});

				tazze.node.css({
    				'-ms-transform': 'scale(' + scaleFactor + ')',
    				'webkit-transform': 'scale(' + scaleFactor + ')',
    				'transform': 'scale(' + scaleFactor + ')',
    				'transform-origin': originX + '% ' + originY + '%'
				})
			}
			};
		var restart = function(ev){
			if( ev.target != page[0] ) return;
			tazze.node.removeClass('small');
			mainmenu.removeClass('small');
			blocked=false;
			win.on('scroll.taz_shrink', shrink);
			shrink();
			}
		var stop = function(ev){
			if( ev.target != page[0] ) return;
			blocked=true;
			win.off('scroll.taz_shrink'); 
			if (isCorp) {
				tazze.node.css( tazze.smallForCorp ) } 
			else {
				tazze.node.css( tazze.small )
			}
			afterHomeFirst.node.css( afterHomeFirst.small ); 
			afterHomeAll.node.css( afterHomeAll.small );
			tazze.node.addClass('small');
			mainmenu.addClass('small');
			};
		var start = function(ev){
			if( win.scrollTop() < mainmenu.offset().top )  return;
			win.on('scroll.taz_shrink', shrink );
			win.off('scroll.taz_start'); 
			};
		win.on('scroll.taz_start', start);
		page.on('TAZfix', stop );
		page.on('TAZunfix', restart );

		filOtaz_de_float.promise.resolve();
 		

	
		})();

		function insertFullheader() {
			$('.fullheader').css({
				'margin-top':   $('.fullheader')[0].scrollHeight + 60 + 'px',
				'top': - parseInt( $('.fullheader')[0].scrollHeight	- ( $('#pages >.float >.head').outerHeight() + $('#globalnavigation').outerHeight() )  + 44 ) + 'px'
			});
			$('.fullheader ~ span.body').css('margin-top',  - parseInt( $('.fullheader')[0].scrollHeight	- ( $('#pages >.float >.head').outerHeight() + $('#globalnavigation').outerHeight() )  + 44 ));
	
		}
		if ($('.fullheader').length  ) {  
			insertFullheader()
		}    


/*
			f = function(){  console.log('TAZdawn: '+ $('.nose >h2',fl).text() );  };
			win.scroll( f ); f();
*/

	});


/* ----- stefiOtaz_de.Flyout.js ------------------------------------------------------------------- */

if( ! window.stefiOtaz_de )	window.stefiOtaz_de = new Object;

(function(){

	if(stefiOtaz_de.Flyout) {
		return;
	}

	var sharedFlyout = $('<div />').attr('id', 'mainFlyout').addClass('flyout').hide();

	var triggers = $();
	var triggerSwap = null;
	var triggerHide = null;
	var primedTriggers = null;
	var currentContainer = null;

	stefiOtaz_de.Flyout = function(definition) {
		var flyout = this;
		var testversion = 'v0.1.3.8-1';
		var animationSpeed = 50;
		
		//if(!(definition && definition.trigger && definition.className)) {
		if(!definition) {
			return undefined;
		}
		
		var container = $('<div class="container" />').addClass(definition.className).hide();

		var lists = {};

		flyout.appendList = function(name, definition) {
			return lists[name] = new filOtaz_de.HtmlList(definition).appendTo(container);
		}

		flyout.prependList = function(name, definition) {
			return lists[name] = new filOtaz_de.HtmlList(definition).prependTo(container);
		}

		triggers = triggers.add(definition.trigger);
		
		this.prepareCurrentContainer = function() {
			return new Promise(function(resolve, reject) {
				if(container) {
					currentContainer = container;
					currentContainer.addClass('active')
						.appendTo(sharedFlyout)
						.hide();
					resolve();
				} else {
					reject('no-container-prepare');
				}
			});
		}
		
		this.fadeInCurrentContainer = function() {
			return new Promise(function(resolve, reject) {
				if(currentContainer) {
					currentContainer.fadeIn(animationSpeed, function() {
						resolve();
					});
				} else {
					reject('no-currentContainer-fadeIn');
				}
			});
		}
		
		this.fadeOutCurrentContainer = function() {
			return new Promise(function(resolve, reject) {
				if(currentContainer) {
					currentContainer
					.css({position: 'absolute'})
					.removeClass('active')
					.fadeOut(animationSpeed, function(){
						$(this).detach();
						currentContainer = null;
						resolve();
					});
				} else {
					reject('no-currentContainer-fadeOut')
				}
			});
		}
		
		this.animateSharedFlyout = function() {
			return new Promise(function(resolve, reject) {
				if(currentContainer) {
					if(sharedFlyout.is(':hidden')) {
						sharedFlyout.fadeIn(animationSpeed, function() {
							sharedFlyout.animate({height: currentContainer.height()}, animationSpeed, function() {
								resolve();
							});
						});
					} else {
						sharedFlyout.animate({height: currentContainer.height()}, animationSpeed, function() {
							resolve();
						});
					}
				} else {
					reject('no-container-animate')
				}
			});
		}
		
		this.animationWithCurrentContainer = function() {
			flyout.fadeOutCurrentContainer().then(function() {
				flyout.prepareCurrentContainer().then(function() {
					flyout.animateSharedFlyout().then(function() {
						flyout.fadeInCurrentContainer().then(function() {
							//console.log('initial animation finished');
						})['catch'](function(reason) {
							console.log(reason);
						});
					})['catch'](function(reason) {
						console.log(reason);
					});
				})['catch'](function(reason) {
					console.log(reason);
				});
			})['catch'](function(reason) {
				console.log(reason);
			});
		}
		
		this.animationWithoutCurrentContainer = function() {
			flyout.prepareCurrentContainer().then(function() {
				flyout.animateSharedFlyout().then(function() {
					flyout.fadeInCurrentContainer().then(function() {
						//console.log('swapping animation finished');
					})['catch'](function(reason) {
						console.log(reason);
					});
				})['catch'](function(reason) {
					console.log(reason);
				});
			})['catch'](function(reason) {
				console.log(reason);
			});
		}
		
		this.setupTriggerSwap = function() {
			if(triggerSwap) {
				clearTimeout(triggerSwap);
			}
			triggerSwap = setTimeout(function() {
				
				if(!container.is(':hidden')) {
					return;
				}
				
				sharedFlyout.height(sharedFlyout.height());
				
				if(currentContainer) {
					flyout.animationWithCurrentContainer();
				} else {
					flyout.animationWithoutCurrentContainer();
				}
				
			}, 222);
		}
		
		this.setupTriggerHide = function() {
			if(triggerHide) {
				clearTimeout(triggerHide);
			}
			triggerHide = setTimeout(function(){
				sharedFlyout.fadeOut('slow', function(){
					if(currentContainer) {
						currentContainer.detach();
						//currentContainer = null;
					}
					sharedFlyout.height(0);
				});
			}, 111);
		}
		
		this.clearTimeouts = function() {
			if(triggerSwap) {
				clearTimeout(triggerSwap);
			}
			if(triggerHide) {
				clearTimeout(triggerHide);
			}
		}
		
		if(primedTriggers) {
			primedTriggers.off('mouseenter.taz_on').off('mouseleave.taz_off');
		}
	
		primedTriggers = triggers.add(sharedFlyout).on('mouseenter.taz_on', function() {
			//console.log("mouseenter.taz_on - steffi "+testversion);
			if(triggerHide) {
				clearTimeout(triggerHide);
				triggerHide = null;
			}
		}).on('mouseleave.taz_off', function() {
			//console.log("mouseleave.taz_off - steffi "+testversion);
			flyout.setupTriggerHide();
		});

		definition.trigger.on('mouseenter.taz_swapping', function(){	
			//console.log("mouseenter.taz_swapping - stefiOtaz_de.Flyout "+testversion);	
			flyout.clearTimeouts();
			//flyout.setupTriggerHide();
			flyout.setupTriggerSwap();
			
		}).on('mouseleave.taz_swapping', function(){
			//console.log("mouseleave.taz_swapping - steffi "+testversion);
			flyout.clearTimeouts();
			flyout.setupTriggerHide();
		});
				
	};

	stefiOtaz_de.Flyout.mount = function(mountPoint) {
		$('<div />').addClass('pin').append(sharedFlyout).appendTo(mountPoint);
	};

})();

/* ----- filOtaz_de.Form.js ------------------------------------------------------------------- */

(function(){	// "class" filOtaz_de.Form
	if( filOtaz_de.Form )	return;	// don't interfere!

// === private "class" data
var formsList = [];
var formsById = {};


// === the Form constructor
filOtaz_de.Form = function( id_or_node ) {  var form = this;
	var formN = ( typeof id_or_node == 'string' || id_or_node instanceof String )
		? $('#'+ id_or_node )
		: $( id_or_node )
		;
	if( !formN[0] ) return;
	if( formN[0].filOtaz_de_Form && formN[0].filOtaz_de_Form instanceof filOtaz_de.Form )	// already initialized
		return formN[0].filOtaz_de_Form;

	formN.on('keypress', function(e){	// browser's native handling of pressing enter is twisted
		if( (e.which||e.keyCode) !=13 )  return true;	// don't mind anything but enter
		formN.find('button.default.submit')[0].click();
		e.preventDefault();
		});

	// make Safari behave: block invalid submits
	var noValidate =false; formN.find('button[formnovalidate]').click( function(e){ noValidate =true; });
	var handleInvalid =false;
	formN.on('submit', function(e){	// fired only after successful validation in brave browsers
		if( noValidate ){ noValidate =false; return true; }
		handleInvalid =true;
		return formN[0].checkValidity();	// … so this should have no effect on those but force validity on Safari
		});

	var bodyN = formN.find('>.sectbody, >fieldset>.sectbody, >.rack>fieldset>.sectbody');
	formN.addClass('js jsForm'); bodyN.addClass('jsForm');

	bodyN.find('>span')
	.each( function(i,e){	// ToDo: generalize for <label for="…" …>
		var n = $(e);
		var setN = bodyN.has( e ).parent();
		var inputN = n.find('>input,>textarea,>select').first();

		var hintN  = n.find('>p, >label').first();
		n.addClass('field'); hintN.addClass('label');	// normalize

		if( n.nextAll(':not([type=hidden]):first').is('input:submit') )  n.addClass('left narrow');

		var preset = function(){
			n.addClass('preset');
			};
		var clear = function(){
			n.removeClass('preset');
			};
		var resetN = $();
		var checkset = function(){
			var val = inputN.is(':checkbox')
				? inputN.is(':checked')
				: inputN.val();
			var defaultVal = n.attr('default') ||'';
			var worked = val && val != defaultVal;
			if( val )
				inputN.removeClass('neutral');
			else
				inputN.addClass('neutral');
			if( worked ){
				n.addClass('worked');
				clear();
				if(! resetN.length )  resetN = $('<p class="reset" />').text('X').click(function(){
					if( inputN.is(':checkbox') )
						inputN[0].checked = defaultVal != 0;
					else
						inputN.val( defaultVal );
					checkset();
					return false;
					});
				resetN.appendTo( hintN );
				inputN.next('.suffix').attr({ val: val });
				}
			else {
				n.removeClass('worked');
				preset();
				resetN.detach();
				}
			if( setN.find('>.sectbody>.worked').length )
				setN.addClass('worked');
			else	setN.removeClass('worked');
			};
		checkset();

		if( n.hasClass('disabled') ) return;
		var selectN = inputN.filter('select');
		var isSelect = selectN.length;
		inputN.focus( function(){ 
			if( inputN.is(':checkbox') && n.hasClass('worked') ) return;
			n.add( setN ).addClass('focus'); 
			if( isSelect )  this.size = this.length <7 ? this.length : 7;
			clear();    
			});
		var focused = false;
		selectN.mouseup( function(){
			if( focused )  selectN.blur();
			else focused = true;
			} );
		inputN.blur(  function(){ 
			focused = false;
			if( isSelect )  this.size=1;
			n.add( setN ).removeClass('focus'); 
			checkset(); 
			});
		hintN.add( inputN.filter(':checkbox') ).click( function(){
			if( inputN.is(':checkbox') )
				inputN.blur();
			else	inputN.focus();  
		} );

		// make Safari behave: handle blocked submits
		inputN.on('invalid', function(){
			if(! handleInvalid ) return;	// only on final check on submit, should only apply to iPhone
			handleInvalid =false;		// only for first reported invalid
			inputN.focus();
			});

		// on user interaction remove invalidity reported from server side 
		if( n.hasClass('invalid') ) inputN.on('input change', function(){
			n.removeClass('invalid');
			});

		});

	var submitN = bodyN.find('>input:submit');

	// register
	formsList.push( this );
	var id = formN.attr('id'); if( id ) formsById[ id ] = this;
	formN[0].filOtaz_de_Form = this;  // register ourselfes on DOM node

	var cancelN, cancel;
	var resetCancel = function() {
		formN.off('filOtaz_de.Form.done'); //, resetCancel );
		if( cancelN ) cancelN.remove(); cancelN = null;
		};
	this.cancel = function( callback ) {
		if( callback && callback instanceof Function ) {
			cancel = function() {
				resetCancel();
				callback();
				formN.trigger('filOtaz_de.Form.cancel');
				};
			if( cancelN ) cancelN.remove();
			cancelN = $('<input type="button" class="button" name="cancel" value="abbrechen" />')
				.insertAfter( submitN )
				.click( function(){  cancel(); return false;  } )
				;
			formN.on('filOtaz_de.Form.done', resetCancel );
			}
		else	cancel();
		};

	}; // filOtaz_de.Form contructor

// === public "class" methods



})(); // filOtaz_de.Form "class" container


/* ----- filOtaz_de.Overlay.js ------------------------------------------------------------------- */

(function(){	// "class" filOtaz_de.Overlay
	if( !window.filOtaz_de )  window.filOtaz_de = new Object;
	if(  window.filOtaz_de.Overlay )  return; // don't interfere!


// === private "class" data

// anchor nodes
var node = {
	doc		: $( document )
	};
var ready;
$(document).ready(function(){
	node.outer	= $('#background');			// to contain page background, frost and overlay
	node.inner	= node.outer.find('>#centered');	// page main content, to be background
	node.pages	= node.inner.find('>#pages');		// pages of main content
	ready = true;
	});

// state
var current;	// currently visible overlay

// all overlays use common fixation
var fixed;


// === private class methods

var fix = function() {
	if( fixed ) return;

	var minScroll = node.pages.find('>.float').offset().top;
	if( node.doc.scrollTop() < minScroll )  window.scrollTo( node.doc.scrollLeft(), minScroll );	// animate?

	fixed = {
		scroll	: { top: node.doc.scrollTop(), left: node.doc.scrollLeft() },
		inner	: node.inner.offset(),
//		pages	: node.pages.offset()
		pages	: node.pages.children('ul#globalnavigation').first().offset()
		};

	node.inner.css({  position:'fixed',
		top  : ''+( fixed.inner.top  - fixed.scroll.top  )+'px',
		left : ''+( fixed.inner.left - fixed.scroll.left )+'px'
		});
	window.scrollTo( 0, 0 );

	};

var unfix = function() {
	if( !fixed ) return;

	node.inner.css({  position: 'relative', top: 0, left: 0  });	// IE won't fall back to central css
	window.scrollTo( fixed.scroll.left, fixed.scroll.top );

	fixed = false;
	};


var close = function() {
	if( current ) current.unpop();
	return false;
	}


// === the Overlay constructor

window.filOtaz_de.Overlay = function( conf ) {

	var conf = conf || {};
	conf.animation	= conf.animation || 300;

	// === private state

	var last;	// optionally chain overlays

	var win = $('<div class="overlay" />').append( $('<a class="close">schließen</a>').click( close ) );	// will be my "self" object

	var popped = false;
	var beforeOpen = function(){};
	win.beforeOpen = function( fn ){  beforeOpen = fn;  };
	win.pop = function( callback ) {
		if( popped ) return false; popped = true;

		var draw = function() {
			if( !ready ) {	// DOM not ready - delay our call
				$(document).ready(function(){  draw();  });
				return;
				}

			// create dom fragements late
			if( ! node.frost )  node.frost = $('<div id="frost"><div /></div>')
				.click( close )
				.appendTo( node.outer );
			if( ! win.isMounted ) {
				win.appendTo( node.outer );
				win.isMounted = true;
				}

			fix();

			if( conf.black )  node.outer.addClass('black')
				else	  node.outer.removeClass('black');

			node.frost.fadeIn( conf.animation /2, function(){
				node.outer.addClass('frosted');
				beforeOpen();
				win.css({  marginLeft:''+ fixed.pages.left +'px'  }).fadeIn( conf.animation, function(){
					if( callback ) callback();
					});
				});
			}

		if( current ) {
			last = current;
			current.unpop( draw );
			}
		else draw();
		current = win;

		return win;
		};	//win.pop


	var beforeClose = function(){};
	win.beforeClose = function( fn ){  beforeClose = fn;  };
	win.unpop = function(callback) {
		if( !popped ) return false;

		beforeClose();
		// youtube hack: stop youtube when closing
		if ( win.find( 'iframe[src*="youtu"]').length  ){
			var el_src = win.find( 'iframe[src*="youtu"]').attr("src");
			win.find( 'iframe[src*="youtu"]').attr("src",el_src);
		}; 

		current = false;
		win.fadeOut( conf.animation, function(){
			window.location.hash = '';
			});
		node.frost.fadeOut( conf.animation *1.5, function(){
			node.outer.removeClass('frosted');
			if( conf.black )  node.outer.removeClass('black');
			if( last ) last.pop()
				else unfix();
			last = false;
			popped = false;
			if( callback ) callback();
			});

		return win;
		}	//win.unpop

	win.flip = function() {
		if( win == current ) win.unpop()
			else    win.pop();
		}

	return win;
	}; // Overlay constructor
			

})(); // filOtaz_de.Overlay "class" container


/* ----- filOtaz_de.accordion.js ------------------------------------------------------------------- */

if( ! window.filOtaz_de )	window.filOtaz_de = new Object;
if( ! window.filOtaz_de.accordion ) 	//don't interfere!
window.filOtaz_de.accordion = function( id, show ) {



	/*	
		should be called inline after each accordions's html to ensure early processing
	*/

	var me	= id instanceof jQuery		?        id 
		: id instanceof HTMLElement	? $(     id )
		:				  $('#'+ id )
		;

	if(!( me instanceof jQuery && me.length )) return false;
		
	me.addClass('js');

	var drawers = me.find('>.sect');


	var active, shown;
	drawers.each(function(i,n){
		var me = $( n );
		var trigger = me.find('>.secthead');
		var drawer = me.find('>.sectbody');

		if( i+1 == show ) {
			active = me.addClass('active shown');
			shown = drawer;
			}

		trigger.click(function(){

			if( active ) {
				// close accordion
				active.removeClass('active');
				shown.not('.jsForm').slideUp('linear')

				}
			
			if( me == active ) {
				//	reset active 
				active = shown = undefined;

				}
			else	{

				active = me.addClass('active');

				// added by mar: resize rightbar of form-accordions
				if (drawer.hasClass('jsForm')){
					setTimeout(function(){
						drawer.trigger('TAZboxChange');
					 }, 400);
				}

				// open accordion
				shown = drawer.not('.jsForm').slideDown('linear', function(){ 
					$(this).trigger('TAZboxChange');
					} );

				}
			return false;
			});

		
		});


}; // window.filOtaz_de.accordion


/* ----- filOtaz_de.carousel.js ------------------------------------------------------------------- */

if( ! window.filOtaz_de )	window.filOtaz_de = new Object;
if( ! window.filOtaz_de.carousel ) 	//don't interfere!
window.filOtaz_de.carousel = function( element ) {

	/*	
		should be called inline after each carousels's html to ensure early processing
	*/

		// mobile: setup for touch stuff
		var touchWait = false;
		var time = 1000, // allow movement if < 1000 ms (1 sec)
		range = 38,  // swipe movement of 50 pixels triggers the swipe
		// // detect touch support
		x = 0, t = 0, touch = "ontouchend" in document,
		tStart = (touch) ? 'touchstart' : 'mousedown',
		tMove = (touch) ? 'touchmove' : 'mousemove',
		tEnd = (touch) ? 'touchend' : 'mouseup';

		// mobile: end of setup for touch stuff



	var me = $( element ).addClass('js');

        if ( ! $( me ).hasClass( 'sect_carousel' ) ){       
	       $( me ).addClass( 'sect_carousel' );
	   }                                           


	var slider = me.find('>ul.directory');
	if (!slider[0]) return;
	var cars = slider.find('>li');

	var pos = Math.floor( slider.position().left /-624 );

	var active, activeIsProduct, activeIsLongread;
	var activate = function( pos ) {
		if( active ) active.removeClass('active');
		active = cars.eq( pos );
		activeIsProduct = active.hasClass('product');
		activeIsLongread = active.hasClass('longread');
		active.addClass('active')
		// mobile: touch effect
		.bind(tStart, function(e){

    		    	t = (new Date()).getTime();
    		    	x = e.originalEvent.touches ? e.originalEvent.touches[0].pageX : e.pageX;
    
    		})
    		.bind(tEnd, function(e){

    		     t = 0; x = 0;

    		})
    		.bind(tMove, function(e){

    		    var newx = e.originalEvent.touches ? e.originalEvent.touches[0].pageX : e.pageX,
    		    r = (x === 0) ? 0 : Math.abs(newx - x),
    		    // allow if movement < 1 sec
    		    ct = (new Date()).getTime();

    		    // do not change image before waiting countdown ends
    		    if (t !== 0 && ct - t < time && r > range && touchWait==false) {
    		        if ((newx < x) && ( pos+1 < cars.length )){
    		        	// swipe right
    		  			touchWait = true;
     					setTimeout(function(){ touchWait = false }, 500);	
    		        	rollR();
    		        }
    		        if ((newx > x) && ( pos > 0  )) {
    					// swipe left
    					touchWait = true;
     					setTimeout(function(){ touchWait = false }, 500);	
 						rollL();
    		        }
    		        t = 0; x = 0;    		     
    		    }

    		});
		};
	activate( pos );

	var stepWidth = function() {
		 return $(active).outerWidth();
		};

/*
	var roll = function( steps ) {
		if( steps >0 ) active.find('>a.objlink').animate({ padding-right: 0 });
		pos += steps; activate( pos );
		if( steps >0 ) active.find('>a.objlink').css({ padding-right: 116 });
		slider.animate({ left: pos *-516 }, function(){
			
			});
		}
*/


	var left, right;

	var rollR = function() {
		if( left && pos == 0 )  left.fadeIn();
		if( activeIsProduct )  active.find('>a.objlink').animate({ paddingRight: 0 });
		slider.animate({ left: slider.position().left - stepWidth() });
		pos +=1; activate( pos );
		if( right && pos+1 >= cars.length )  right.fadeOut();
		};
	var rollL = function() {
		if( right && pos+1 == cars.length )  right.fadeIn();
		pos -=1; activate( pos );
		slider.animate({ left: slider.position().left + stepWidth() });
		if( activeIsProduct )  active.find('>a.objlink').animate({ paddingRight: 116 });
		if( left && pos <= 0 )  left.fadeOut();
		};

	left = $('<div class="left cursor"></div>')
		.click(function(){ 
			if (touchWait == false){
    			touchWait = true;
     			setTimeout(function(){ touchWait = false }, 400);
				rollL(); 
			}
		});
	if( pos <= 0 )  left.hide();
	left.appendTo( me );

	right = $('<div class="right cursor"></div>')
		.click(function(){ 
			if (touchWait == false){
	    		touchWait = true;
    	 		setTimeout(function(){ touchWait = false }, 400);
				rollR(); 
				}
			});
	if( pos+1 >= cars.length ) right.hide();
	right.appendTo( me );


/*
	$('#'+ id ).each(function(){	if( this.racked ) return;	// already processed
	
		var boxes = $('.box, .plugin_rechts', this);
		boxes.eq(0).addClass('first_box');
		boxes.eq( boxes.length-1 ).addClass('last_box');
	
		this.racked = true;	// mark this done
		});
*/

}; // window.filOtaz_de.carousel


/* ----- marOtaz_de.countAnimation.js ------------------------------------------------------------------- */


// easing: easeOutExpo
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],function($){return factory($)})}else if(typeof module==="object"&&typeof module.exports==="object"){exports=factory(require("jquery"))}else{factory(jQuery)}})(function($){$.easing.jswing=$.easing.swing;var pow=Math.pow,sqrt=Math.sqrt,sin=Math.sin,cos=Math.cos,PI=Math.PI,c1=1.70158,c2=c1*1.525,c3=c1+1,c4=2*PI/3,c5=2*PI/4.5;function bounceOut(x){var n1=7.5625,d1=2.75;if(x<1/d1){return n1*x*x}else if(x<2/d1){return n1*(x-=1.5/d1)*x+.75}else if(x<2.5/d1){return n1*(x-=2.25/d1)*x+.9375}else{return n1*(x-=2.625/d1)*x+.984375}}$.extend($.easing,{easeOutExpo:function(x){return x===1?1:1-pow(2,-10*x)}})});(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],function($){return factory($)})}else if(typeof module==="object"&&typeof module.exports==="object"){exports=factory(require("jquery"))}else{factory(jQuery)}})(function($){$.easing.jswing=$.easing.swing;var pow=Math.pow,sqrt=Math.sqrt,sin=Math.sin,cos=Math.cos,PI=Math.PI,c1=1.70158,c2=c1*1.525,c3=c1+1,c4=2*PI/3,c5=2*PI/4.5;function bounceOut(x){var n1=7.5625,d1=2.75;if(x<1/d1){return n1*x*x}else if(x<2/d1){return n1*(x-=1.5/d1)*x+.75}else if(x<2.5/d1){return n1*(x-=2.25/d1)*x+.9375}else{return n1*(x-=2.625/d1)*x+.984375}}$.extend($.easing,{easeOutExpo:function(x){return x===1?1:1-pow(2,-10*x)}})});

function initNumAni(style) {

    var done = false;
    var overlayText = $('.number-teaser2 > h3');
    overlayText.css('opacity','0');

    // start animation when not scrolling but already in users field of view
    var elemToAnimate = $('.sect_number-teaser2> .sectbody  .corpus > a ');

    if (done == false && isElementScrolled(elemToAnimate)) {
        animateNum(style)
    }

    $(window).on('scroll', function() {
        // detect if the element is scrolled into view
        if (done == false && (isElementScrolled(elemToAnimate))) {
            animateNum(style)
        }
    });

    function animateNum(style) {

        var start = 0;
        var target = parseInt(elemToAnimate.attr('data-value').replace(/\./g, ""));
        elemToAnimate.text('');
        var numLength = target.toString().length;

        done = true;

        for (i = 0; i < numLength; ++i) {
            $(elemToAnimate).append($('<span class=' + style + '>').text('0'));
        }

        $({
            countNum: start
        }).animate({
            countNum: target
        }, {
            duration: 3333,
            easing: 'easeOutExpo',
            step: function() {

                if (style == 'default') {
                    // style_bold = tzi-number = one number
                    elemToAnimate.text((parseInt(this.countNum)).toLocaleString('en-US', {
                        minimumIntegerDigits: 5,
                        useGrouping: false
                    }).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, "."))
                } else if (style == 'flap-number'){
                    // style_flap = genonumber = splitted in spans                  
                    var splittedNum = (parseInt(this.countNum)).toLocaleString('en-US', {
                        minimumIntegerDigits: 5,
                        useGrouping: false
                    }).toString().replace(/,/g, "").split('');

                    for (i = 0; i < splittedNum.length; ++i) {
                        $(elemToAnimate).find('span:eq(' + i + ')').text(splittedNum[i]);
                    }
                }
            },
            complete: function() {
                //korrigierter Endpunkt - wenn sich animation "verschluckt"
                if (style == 'default') {
                    // tzi
                    elemToAnimate.text(target.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."));

                    if ( elemToAnimate.attr('data-value').indexOf('€') > -1 ) {
                         elemToAnimate.append('€')
                        }

                } else if (style == 'flap-number'){
                    // geno
                    var splittedNum = (parseInt(target)).toLocaleString('en-US', {
                        minimumIntegerDigits: 5,
                        useGrouping: false
                    }).toString().replace(/,/g, "").split('');
                    for (i = 0; i < splittedNum.length; ++i) {
                        $('.flap-number:eq(' + i + ')').text(splittedNum[i]);
                    }
                }
                overlayText.animate({ opacity: 1 }, 1111)
            }
        });
    }

    function isElementScrolled(elemToAnimate) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elemToAnimate).offset().top;
        return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
    }

}

/* ----- filOtaz_de.Embed.js ------------------------------------------------------------------- */

/*	makes and opens a embed overlay
	to be used from embed or video teasers
*/
(function(){    // "class" filOtaz_de.Embed
	if( filOtaz_de.Embed )	return; // don't interfere!

// === private "class" data

var embeds = {};


// === private methods


// === the Embed constructor

//filOtaz_de.Embed = function( html, identifier ) {
filOtaz_de.Embed = function( html, conf ) {	// { id, type }

	var html = $( html );
	var identifier = conf.id || html.text().trim().substr(0,128);
console.log( identifier );

	// only one embed per identifier
	if( embeds[ identifier ] ) {
console.log('found');
		if( embeds[ identifier ].ready )	embeds[ identifier ].pop();
		return embeds[ identifier ];
		}
	embeds[ identifier ] = this;


	// === private data

	var vid = this;

	var ol, rackN, sectN;


	// === public interface

	this.pop = function(){
    ol.pop();
    patOtaz_de.ivw({ gig: 'web', agof: false, name: conf.type || 'embed' });
    return this;
    };

	this.beforeClose = function( fn ){  ol.beforeClose( fn );  };
	this.beforeOpen = function( fn ){  ol.beforeOpen( fn );  };

	// === initialize

	ol = new filOtaz_de.Overlay({  black: conf.type=='video' }).addClass('page');
	rackN = $('<div class="rack" />')
	.append( html )
	.appendTo( ol );

	this.pop();

	this.ready = true;

	}; // filOtaz_de.Embed contructor


// === public "class" methods


})(); // filOtaz_de.Embed "class" container


/* ----- filOtaz_de.flyouts.js ------------------------------------------------------------------- */

$(document).ready(function(){	// instantiate flyouts

	// my triggering DOM elements
	var newsMenu = $('#pages >.float >.head > .newsnavigation, #pages >.float >.head > h1.title > .newsnavigation'); 
	var homeLogo = newsMenu.find('>li.home');
	var newsDepts = $( newsMenu.find('>li').not('li.home').find('>a') );
	
	// my tree.xml whereabouts
	var newsRootID = 4608;
	var corpRootID = 4205;

	// ToDo: replace with more general URL handling
	//var ratio_channel = document.location.pathname.replace(/^.*(;[A-z0-9_-]+).*$/, "$1");
	var ratio_channel = document.location.pathname.replace(/^.*![^;]*([^/]*).*$/, "$1");


	// mount flyout(s) to DOM ( shows up below given element usually -> details in CSS )
	stefiOtaz_de.Flyout.mount('#pages >.float >.head'); 



	// define flyouts synchronously, so we can prime triggers en bloc

	// create my home logo flyout
	var homeLogoFlyout = {
		flyout	: new stefiOtaz_de.Flyout({
			trigger		: homeLogo,	// triggering element
			className		: 'home',	// to be additionally set on #mainFlyout>div.container
			}),
		navigation	: {		// my content definition 
			id	: 4205,
			list	: [ { id : newsRootID }, { parentId : corpRootID } ]	// 
			},
		directory	: {		// my content definition
			id		: 4533,
			url		: '/!p4533/',
			length		: 1,
			leads		: 0,
			picts		: 1,
			depts		: 1,
			compact		: 1
			},
		
		};
//console.log( homeLogoFlyout.flyout );
	homeLogoFlyout.directory.obj = homeLogoFlyout.flyout.appendList( 'directory', { role : 'directory' } );

	// create my news departmens' flyouts
	var newsDeptsFlyouts = newsDepts.map( function( i, e ){
		var dept = $( e );

	//	var deptId = parseInt( deptUrl.replace( /^[^!]*!p([0-9]+).*$/,'$1'), 10 ); 
		var deptId = parseInt( dept.attr('id').replace( /^menu_p([0-9]+)$/, '$1' ), 10 );
		// mar: take href from id when there is no id
		var deptUrl = dept.attr('href') ? dept.attr('href') : '!p' + deptId;


		var flyout = {
			flyout	: new stefiOtaz_de.Flyout({
				trigger		: dept,		// triggering element
				}),
			navigation	: {		// my content definition
				list	: [ { id : deptId }, { parentId : deptId } ],
				id 	: deptId, 
				url 	: deptUrl
				},
			directory	: {		// my content definition
				id	: deptId, 
				url	: deptUrl,
				length	: 4,
				leads	: 0,
				picts	: 1,
				leads	: 0,
				compact : 1
				}
			};
		flyout.directory.obj = flyout.flyout.appendList( 'directory', { role : 'directory' } );
		return flyout;
		} ); //newsDepts.map

	// activate Triggers after they are all defined (within their flyouts)
	// filOtaz_de.Flyout.primeTriggers();



	// asynchronously fill flyouts

	// get my tree hierarchy to fill my flyouts' navigation lists
	$.get('/!/tree.xml', function( data, status, jqx ) {
		//var tree = $( data ).find('tree:first');	// !!! IE9 doesn't like :first
		var tree = $( data ).find('tree').first();
		$()	.add([ homeLogoFlyout ])
			.add( newsDeptsFlyouts )
			.each( function( i, flyout ){
				// get flyout's content definitions
				var def = flyout.navigation;

				// collect my navi nodes according to definition
				var nodes = $();
				var defList = def.list || [ { parentId : def.id } ];
				
				$(defList).each(function(i, def) {
					if(def.id) {
						nodes = nodes.add(
							tree
								.find('node#' + def.id)
								.not('[hidden]')
								.first()
						);
					}
					
					if(def.parentId) {
						// chrisso: find level 2 nodes
						tree
							.find('node#' + def.parentId)
							.not('[hidden]')
							.first()
							.find('> node')
							.not('[hidden]')
							.each(function(i, elem) {
								var $node = $(elem);
								
								// chrisso: add level 2 node
								nodes = nodes.add($node);
								
								// chrisso: if node is in corporate tree dismiss level 3 nodes 
								if(0 < $node.parents('#' + corpRootID).length) {
									return;
								}
								
								// chrisso: find and add level 3 nodes. mark level 3 nodes for indentation.
								nodes = nodes.add(
									$node
										.find('> node')
										.not('[hidden]')
										.prop('indent', true)
								);
							})
						;
					}
				});

				if( nodes.length ) {
					flyout.navigation.obj = flyout.flyout.prependList( 'navigation', { role : 'navigation' } );
					nodes.each( function( i, n ){
						// append each node's html to navigation list
						var node = $( n );
						var url = node.attr('href');
						// ToDo: replace with generalized ratioURL object
						if( /^\//.test( url ) || /^https?:\/\/(www\.)?taz\.de/.test( url ) )
							if( /!/.test( url ) )
								url = url.replace(/\/+$/, "") + ratio_channel +'/';
								// url = url.replace(/\/+$/, "") + "";
						
						// chrisso: create label from node
						$label = $('<span />')
							.text(node.attr('name'))
						;
						
						// chrisso: indent label if node is level 3 or is marked for indentation respectively
						if(node.prop('indent')) {
							$label.addClass('indent');
						}
						
						// chrisso: create menu item from label
						$item = $('<a />')
							.attr('href', url)
							.append($label)
						;
						
						// chrisso: add menu item
						flyout.navigation.obj.append($item);
					});
				} else {
					flyout.directory.obj.addClass('solo');
				};

				// mark my contents' according to lineage
				$([ flyout.navigation, flyout.directory ]).each(function( i, list ) {
					//var node = tree.find('node#'+ list.id +':first');	// !!! IE9 doesn't like :first
					var node = tree.find('node#'+ list.id ).first();
					var lineage = node.parents().add( node );
					lineage =
						lineage.is('#'+ newsRootID ) ? 'news' : 'corp';
					if( list.obj ) list.obj.addClass( lineage );				// mark content
					} );
				} )
			;
		}, 'xml' ); //get tree.xml


	// get my contents to fill my flyouts' directory lists
	$().add([ homeLogoFlyout ]).add( newsDeptsFlyouts ).each(function( i, flyout ) {
		var def = flyout.directory;
		var url = def.url; 
		if( !url || (/http|https/.test(url) && !/taz\.de/.test(url)) ) return;
		if( /http|https/.test(url) ) url = url.replace (/http:|https:/, window.location.protocol); // use same protocol

		// fetch xml and display directories' contents
		$.get( url + '/c.xml', function( data, status, jqx ){
			var xml = $( data ).find('content >directory').first();
			if( xml.length )	// got a directory
				var items = xml.find('>list>item').slice( 0, def.length );
				//var items = xml.find('>list>item:lt('+ def.length +')');	// // !!! IE9 doesn't like :lt()
			else {	xml = $( data ).find('content >item').first();	// look for article
				var items = xml.add( 
					xml	.find('>extra[name="tx_newspaper_extra_combolinkbox"] >linklist >list >item')
						.slice(0, def.length -1 )
					);	// use article and related
				}

			if( ! items.length ) return;
			items.each( function( i, n ){ var item = $( n );
			  var article = new filOtaz_de.Article( item );
			  if ( typeof(article.teaser) == 'function'){
				flyout.directory.obj.append( article.teaser({
					kicker		: true,
					headline	: true,
					lead		: ( i < def.leads ),
					picture		: ( i < def.picts ),
					compact		: ( i < def.compact ),
					department	: ( i < def.depts )
					}) );
				}
				} );

			}, 'xml' );
		} );



	});// instantiate news menu's flyouts






$(document).ready(function(){
/* ToDo be early (-ier than DomContentLoaded) - seperate into load phases: 
	* create flyouts as early as possible while loading header menus.
	*/


	/* corp menu dropdown */

	var corpMenu = $('ul#globalnavigation');
	var corpMenuItems = $('>li', corpMenu );

	var corpMenuDropdown = $('<ul />')
		.addClass('flyout')
		.hide()
		;
	var dropdownItems = corpMenuItems.slice(7)
		.appendTo( corpMenuDropdown )
		;
	corpMenu.css({ overflow:'visible' });

	var corpMenuDropdownTrigger = $('<li><a><span>weitere</span></a></li>')
		.addClass('more')
		.click( function(){
			if( corpMenuDropdown.shown ) {
				corpMenuDropdown.slideUp('fast');
				corpMenuDropdown.shown = false;
				}
			else	{
				corpMenuDropdown.slideDown('fast');
				corpMenuDropdown.shown = true;
				}
			} )
		.append( corpMenuDropdown )
		.appendTo( corpMenu )
		;
	dropdownItems.slice(-1)
		.addClass('right')
		.appendTo( corpMenu )
		;

	});// corp menu dropdown





/* ----- filOtaz_de.Gallery.js ------------------------------------------------------------------- */

/*	makes and opens an image gallery from href string
	to be used from gallery teasers or hash-links or hashed URLs
*/
(function(){	// "class" filOtaz_de.Gallery
	if( filOtaz_de.Gallery )	return;	// don't interfere!

// === private "class" data

var galleries = {};


// === private methods


// === the Gallery constructor

filOtaz_de.Gallery = function( href, noOverlay, me ) {

	if( href.search(/\/$/) ==-1 )	href = href +'/';

	// only one gallery per identical href
	if( galleries[ href ] ) {
		if( galleries[ href ].ready )	galleries[ href ].pop();
		return galleries[ href ];
		}
	galleries[ href ] = this;
	
	// === private data

	var gal = this;

	var	picts	// input data
	var 	pos;	// state
	var	ol, rackN, sectN, titleN, bodyN, imgN;	// output nodes


	// === public interface

	this.show = function( toPos ) {	// show picture at position toPos

		// mobile: wait 0.5 sec before swiping again
		touchWait = true;
     		setTimeout(function(){ touchWait = false }, 500);

		if( !picts ) return;
		pos	= toPos || 0;

		if( pos == 0 )			sectN.addClass('first'); else sectN.removeClass('first');
		if( pos == picts.length-1 )	sectN.addClass('last' ); else sectN.removeClass('last' );

		// mobile: setup for touch stuff

		var time = 1000, // allow movement if < 1000 ms (1 sec)
		range = 38,  // swipe movement of 50 pixels triggers the swipe
		// // detect touch support
		x = 0, y = 0, t = 0, touch = "ontouchend" in document,
		tStart = (touch) ? 'touchstart' : 'mousedown',
		tMove = (touch) ? 'touchmove' : 'mousemove',
		tEnd = (touch) ? 'touchend' : 'mouseup';

		// mobile: end of setup for touch stuff

		var 	pict	= picts.eq( pos );
			if ( $('.news.page:not(.longread) .body').length && noOverlay == true ) { 
				var pix = pict.find('>pixmap[width=624]')} else { 
					// default
				var pix	= pict.find('>pixmap[width=948]') };
			var alt	= pict.find('>descr[rel="alternate"]').text(),
			credit	= pict.find('>credit').html().replace(/href=/g,'target="_blank" href=').replace(/\<!\[CDATA\[/g,'').replace(/\]]>/, ''),
			caption = pict.find('>caption').html().replace(/href=/g,'target="_blank" href=').replace(/\<!\[CDATA\[/g,'').replace(/\]]>/, '');


		if( !pix.length ) 
			pix	= pict.find('>pixmap');
		var	src	= pix.attr('src');

		var newBodyN = $('<div class="sectbody" />').append(
			imgN = $('<img src="'+ src +'" alt="'+ alt +'" title="nächstes Bild" />')// mobile: begin of touch stuff
    		.bind(tStart, function(e){

	   				// prevent image drag (Firefox) and shakiness
    		    	//e.preventDefault();
    		    	t = (new Date()).getTime();
    		    	x = e.originalEvent.touches ? e.originalEvent.touches[0].pageX : e.pageX;
    		    	y = e.originalEvent.touches ? e.originalEvent.touches[0].pageY : e.pageY;
    
    		})
    		.bind(tEnd, function(e){

    		     t = 0; x = 0; y = 0;

    		})
    		.bind(tMove, function(e){

    		    //e.preventDefault();
    		    var newx = e.originalEvent.touches ? e.originalEvent.touches[0].pageX : e.pageX,
    		    newy = e.originalEvent.touches ? e.originalEvent.touches[0].pageY : e.pageY,
    		    r = (x === 0) ? 0 : Math.abs(newx - x),
    		    ry = (y === 0) ? 0 : Math.abs(newy - y),
    		    // allow if movement < 1 sec
    		    ct = (new Date()).getTime();

    		    // do not change image before waiting countdown ends
    		    if (t !== 0 && ct - t < time && r > range && touchWait == false ) {
			if ( ry && r/ry <2 ) { /* not our direction */
    		        	t = 0; x = 0; y = 0;	// wont be done on tEnd?
				return true;
				}
    		        if (newx < x) {
    		        		// swipe right
     						if( pos < picts.length-1 )
							gal.show( pos +1 ); 
							return false;  

    		        }
    		        if (newx > x) {
    		        		// swipe left
    		        		if( pos >0 )
							gal.show( pos -1 );
							return false;

    		        }
    		        t = 0; x = 0; y = 0;
    		    }

			})

    		// mobile: end of touch stuff
			.on('load', function() {
				newBodyN.addClass('sectbody').fadeIn( 0, function(){
					bodyN.remove();
					bodyN = $(this);

					$(this).append( $( '<p class="caption">'+ caption +' <span class="credit">Bild: '+ credit +'</span></p>'  )  );
					// set dynamic height for inline galerie
					if ( noOverlay == true ) $(this).parent().css( 'padding-bottom', bodyN.height() +20 );
					});
				})
			
			)
		.click( gal.next )
		.insertAfter( bodyN );
    
	$('#toolbar').text( pos + 1 + ' / ' + picts.length );
    
    patOtaz_de.ivw({ gig: 'web', agof: false, name: 'gallery' });
		};

	this.back = function(){		// show previous picture
		if( pos >0 )
			gal.show( pos -1 );
		return;	
		// to be used as event handler
		};

	this.next = function(){		// show next picture
		if( pos < picts.length-1 )
			gal.show( pos +1 );
		 return;   
		// to be used as event handler
		};

	this.pop = function(){ if (noOverlay != true) ol.pop(); return this;  };


	// === initialize


	if (noOverlay == true) {
		// me == gallery object
		ol = me;
		$(ol).closest('.sect_galleries ').addClass('noOverlay');

		}
	else {
		// default
		ol = new filOtaz_de.Overlay({  black : true  }).addClass('page');
	}
	rackN = $('<div class="rack" />').append(
		sectN = $('<div class="sect sect_gallery" />').append(
			$('<div class="left cursor" />').click(  gal.back ),
			$('<div class="right cursor" />').click( gal.next ),
			titleN	= $('<span>Bildergalerie</span>'),
			bodyN	= $('<div class="sectbody" />')
			)
		)
	.appendTo( ol );
	titleN.wrap('<div class="secthead" role="heading"><h2><a/></h2></div>');



	$.get( href +'c.xml', function( data ) {
		var	content	= $( data ).find('content >collection'),
			//mar: still in use?
			title	= content.find('>title ').first().text();
			// added by mar

		picts	= content.find('>list >item >picture');
		titleN.text( title );
		gal.show();
		if (noOverlay == true) {
			titleN.get(0).insertAdjacentHTML( 'beforeBegin', 'Bildergalerie: ' )
			titleN.closest('.secthead').append($('<span style="float: right" id="toolbar"></span>'  ));
			$('#toolbar').text( pos + 1 + ' / ' + picts.length );
			};

		}, 'xml' ); //$.get

	this.pop();

	this.ready = true;


	}; // filOtaz_de.Gallery contructor


// === public "class" methods



})(); // filOtaz_de.Gallery "class" container


/* ----- marOtaz_de.listBookmarks.js ------------------------------------------------------------------- */

(function(){ 

    var tooltipText = '<a title="schliessen" class="close"></a>\
                        <div class="secthead" role="heading">\
                            <h2>\
                                <a name="später lesen mit">\
                                    <span>später lesen mit</span>\
                                </a>\
                            </h2>\
                        </div>\
                        <div class="shariff sectbody"></div>\
                        <div class="sectbody">\
                            <ul>\
                                <li> <span class="fa help" title="Nutzen Sie eines der Tools, um sich Artikel zum Späterlesen zu merken. Melden Sie sich zum Beispiel bei POCKET an und lesen Sie damit offline."> </span></li>\
                            </ul>\
                        </div>';

    $(document).on("mouseover", ".news.directory > .article", function () {
        var link = $(this);
        link.addClass('hover');
        $('.news.directory > .article').not(this).removeClass('hover');

        if ( (!$(this).has('.bookmark').length) && ( ! $("#pages.news >.article").length )  && ( $(this).find( 'h4' ).length  ) ) {
            $(this).find('>.objlink '
            
            ).before('<span style="position: absolute; top: ' + $(this).find('h4').position().top + 'px" data-placement="left" class="bookmark"></span>');
        }
        }
    );
    $(document).on("click", ".bookmark", function () {

        // show only current tooltip
        $('.bookmark').tooltip('hide');       
        $(this).tooltip({
            title: tooltipText,
            trigger: "click",
            'html': true
        }).tooltip('show'); 
        
        initShariff($(this));
        $('.fa.help').tooltip();
    });
    $(document).on("click", ".tooltip .close ", function () {
        $('.tooltip').tooltip('hide');
    });
    function initShariff(choosedTeaser) {
        var buttonsContainer = choosedTeaser.siblings('.tooltip').find('.shariff');
        if (!$(buttonsContainer).find('.shariff-button').length) {
            new Shariff(buttonsContainer, {
                services: ["pocketList", "flipboardList", "pinterestList"],
                listUseHref: 'https://taz.de' + choosedTeaser.siblings('a').attr('href').split(';')[0],
                listUseTitle: $(this).siblings('a').find('h4').text() + ' - ' + choosedTeaser.siblings('a').find('h3').text(),
                listUseImg: 'https://taz.de' + choosedTeaser.siblings('a').find('img').attr('src')
            });
        }
    }

})();


/* ----- filOtaz_de.rack.js ------------------------------------------------------------------- */

if( ! window.filOtaz_de )	window.filOtaz_de = new Object;
if( ! window.filOtaz_de.rack ) 	//don't interfere!
window.filOtaz_de.rack = function() {

	/*	make all (not yet working) racks correctly styleable
		should be called inline after each racks's html to ensure early processing
		expects in DOM:	.rack { .box, ... }
	*/

	$('.rack').each(function(){	if( this.racked ) return;	// already processed
	
		var boxes = $('.box, .plugin_rechts', this);
		boxes.eq(0).addClass('first_box');
		boxes.eq( boxes.length-1 ).addClass('last_box');
	
		this.racked = true;	// mark this done
		});

}; // window.filOtaz_de.rack


/* ----- marOtaz_de.readmore.js ------------------------------------------------------------------- */

/*
 */

 function readmore(ReadmoreElem){

    ReadmoreElem.closest( '.sect' ).addClass('readmore');

    setTimeout(function(){   
        var originalHeight = $(ReadmoreElem).height();
        var fullHeight = $(ReadmoreElem)[0].scrollHeight;
        if ( fullHeight > originalHeight *1.5  ) {
                      $(ReadmoreElem).after('  <button href="#" class="read-more button">Weiterlesen</button> ');
                      $(ReadmoreElem).attr('data-pushed-height', originalHeight );
                      $(ReadmoreElem).addClass('compressed');

             } else {
             $(ReadmoreElem).addClass('too_small')
            } 
        }, 0);

}

$(document).ready(function(){

  $('.read-more.button').bind('click', myHandlerFunction);
     var first = true;

     function myHandlerFunction(e) {
       
       // enlarge
      if(first){

        var p = $(this).prev('.sectbody');
        var fullHeight = $(p)[0].scrollHeight;
        p.addClass('opened');

/*               $(this).hide();
*/  
      p.animate({
          height: fullHeight
      }, {
          duration: 600,
          step: function() {
            $('.wing').trigger('TAZboxChange')
            },
          complete:  function() {
            $('.wing').trigger('TAZboxChange');
/*             p.height('auto');
 */            p.removeClass('compressed');
               p.next( '.read-more.button' ).text('Einklappen')

           }
          }
        );// animate

      }else{
          // compress
      
        var p = $(this).prev('.sectbody');
        var originalHeight = p.attr('data-pushed-height');
        p.animate({
            height: originalHeight
        }, {
        duration: 600,
        step: function() {
          $('.wing').trigger('TAZboxChange')
          },
        complete: function () {
          $('.wing').trigger('TAZboxChange');
          p.addClass('compressed');
          p.removeClass('opened');
          p.next( '.read-more.button' ).text('Weiterlesen')
            }
          }
        ); // animate

      }
      first = !first; 
  }

  }) 



/* ----- filOtaz_de.searchslot.js ------------------------------------------------------------------- */

if( ! window.filOtaz_de )       window.filOtaz_de = new Object;
if( ! window.filOtaz_de.searchslot )      //don't interfere!
window.filOtaz_de.searchslot = function( selector, message ) {
	
	/* be a nice search input field */

	var inputs = $( selector ? selector : 'form.search input.text' );	// backward compatible by default

//	if ($(this).val()=='suchen ...' ) inputs.addClass( 'preset' ); // Looks like legacy

	if ( message && inputs.val()=='' ) {
		inputs.val( message )
		inputs.addClass( 'preset' );
	/*	 else	var message = inputs.val();*/
	}
	
	inputs.focus(function(){
			$(this).removeClass( 'preset' );
			if( ( message && $(this).val()==message ) || $(this).val()=='suchen ...' )
			$(this).val( '' );
		});

/*
        if ( message ) {
                inputs.val( message );
                inputs.focus(function(){ if ($(this).val()==message)
$(this).val( '' ).removeClass( 'preset' );  });
        } else {
                inputs.focus(function(){
$(this).val( '' ).removeClass( 'preset' );  });
        }
*/

}; // window.filOtaz_de.searchslot


/* ----- filOtaz_de.TomOL.js ------------------------------------------------------------------- */

/*	makes and opens "Tom" overlay from special id string, date string or url
	to be used from "Tom" teasers or hash-links or hashed URLs
*/
(function(){	// "class" filOtaz_de.TomOL
	if( filOtaz_de.TomOL )	return; // don't interfere!

// === private "class" data

var tom;

// === private methods


// === the TomOL constructor

filOtaz_de.TomOL = function( tomid ) {

	// only one Tom window at all
	if( tom ) {
		if( tom.ready )	tom.pop();
		tom.show( tomid );
		return tom;
		}
	tom = this;


	// === private data

	var	ol, rack, sect, titleN, body;	// output nodes

	// === public interface

	this.pop = function(){  ol.pop(); return this;  };

	this.load = function( href ) {
		$.get( href, function( data ) {
			
			var content	= $( data ).find('#popup_content_tom');
			var title	= content.find('>p').first().text();
			var strip	= content.find('>.tom_content >a');
			var img		= strip.find('>img');
      
      patOtaz_de.ivw({ gig: 'web', agof: false, name: 'tom' });
						
			strip.hide()
				.click( function(){
					if( window.location.hash == '#!tom=tomshuffle' )
						$(window).trigger('hashchange');
					else	window.location.hash = '!tom=tomshuffle';
					return false;  
					})
				.insertAfter( body );
						
			img.on('load', function() {
				titleN.text( title );
				strip.addClass('sectbody')
					.append('<p class="caption">Shuffle den Tom!</p>')
					.fadeIn( 300, function(){
						body.remove();
						body = $(this)
						});
				});
						
			}, 'html' ); //$.get
		}; //tom.load

	this.show = function( tomid ) {
		var href = '/scripts/tom/';
		var date = new Date( tomid );
		try {	date = date.toISOString();
			}
		catch(e) {
			if( tomid =='tomdestages' || tomid =='tomshuffle' )
				tom.load( href + tomid + '.php' )
			else
				tom.load( href = tomid );
			return;
			}
		if( date instanceof String || (typeof date) =='string'  )
			tom.load( href +'tomdestages.php?day='+ date.substr(0,10).replace(/-/g,'/') )
		else	console.log('filOtaz.de.TomOL.show error: could not handle argument "'+ tomid +'"');
		};


	// === initialize
	ol = new filOtaz_de.Overlay().addClass('body');
				
	rack = $('<div class="rack" />').append(
		sect = $('<div class="sect sect_touche" />').append(
			titleN	= $('<span>Tom des Tages</span>'),
			body	= $('<div class="sectbody" />')
			),
		'<div class="sect sect_tomlinks"><ul class="sectbody directory">' 
			+'<li class="first"><a href="/bei_tom/!t11462/" target="_blank"><span>Zu Hause „bei TOM“</span></a></li>'
			+'<li class="last" ><a href="http://shop.taz.de/index.php?cPath=144" target="_blank"><span>TOM im taz Shop</span></a></li>'
			+'</ul></div>'
		)
		.appendTo( ol );
	titleN.wrap('<div class="secthead" role="heading"><h2><a/></h2></div>');

	this.show( tomid ); this.pop();
	this.ready = true;

}; //window.filOtaz_de.TomOL
		
})();


/* ----- filOtaz_de.Video.js ------------------------------------------------------------------- */

/*	makes and opens a video overlay
	to be used from video teasers
*/
(function(){    // "class" filOtaz_de.Video
	if( filOtaz_de.Video )	return; // don't interfere!

// === private "class" data

//var videos = {};


// === private methods


// === the Video constructor

filOtaz_de.Video = function( html, identifier ) {
	return new filOtaz_de.Embed( html, { id: identifier, type: 'video' } );

	var html = $( html );
	var identifier = identifier || html.text().trim().substr(0,128);
console.log( identifier );

	// only one video per identifier
	if( videos[ identifier ] ) {
console.log('found');
		if( videos[ identifier ].ready )	videos[ identifier ].pop();
		return videos[ identifier ];
		}
	videos[ identifier ] = this;


	// === private data

	var vid = this;

	var ol, rackN, sectN;


	// === public interface

	this.pop = function(){
    ol.pop();
    patOtaz_de.ivw({ gig: 'web', agof: false, name: 'video' });
    return this;
    };

	this.beforeClose = function( fn ){  ol.beforeClose( fn );  };
	this.beforeOpen = function( fn ){  ol.beforeOpen( fn );  };

	// === initialize

	ol = new filOtaz_de.Overlay({  black : true  }).addClass('page');
	rackN = $('<div class="rack" />')
	.append( html )
	.appendTo( ol );

	this.pop();

	this.ready = true;

	}; // filOtaz_de.Video contructor


// === public "class" methods


})(); // filOtaz_de.Video "class" container


/* ----- filOtaz_de.VimeoVideo.js ------------------------------------------------------------------- */

(function(){	// "class" filOtaz_de.VimeoVideo
	if( filOtaz_de.VimeoVideo )	return;	// don't interfere!


// === private "class" data

var videos = {};


// === private methods


// === the VimeoVideo constructor

filOtaz_de.VimeoVideo = function( href ) {
console.log('filOtaz_de.VimeoVideo');
	if( href.search(/\/$/) ==-1 )   var href = href +'/';

	// only one video display per identical href
	if( videos[ href ] ) {
		if( videos[ href ].ready )	videos[ href ].pop();
		return videos[ href ];
		}


	// === private data

	var vid, sectN, titleN, bodyN, vidN, descrN;

	// === public interface

	// === initialize

	//fil 2014-11-12: use content predelivered w/ teaser if available
	var vimeoID = href.split('=')[1].split('/')[0];
	var deliveredContent, findDeliveredContent = function(){
		// script.referenced also in list.xsl 
		deliveredContent = $('.video[name="Vimeo-video_'+ vimeoID +'"] script.referenced').first().text().replace(/^\s*<!--/g,"").replace(/-->+\s*$/g,"");
		if( deliveredContent ) {
			var displayContent = $( deliveredContent );
			bodyN = displayContent.find('.sectbody');
			vidN = bodyN.find('>*');
			if( sectN && sectN.length )	// display already there
				sectN.replaceWith( displayContent );
			sectN = displayContent;
			return true;
			}
		return false;
		};

	if( findDeliveredContent() )  vidN.detach();	// opening display will reinsert video to start playing
	else {
		// construct content skeleton to fill via ajax
		sectN =	$('<div class="first last odd sect sect_video" role="region" />').append(
			titleN	= $('<span>Vimeo-Video</span>'),
			bodyN	= $('<div class="sectbody" />').append(
				descrN	= $('<p class="caption" />')
				)
			);
		titleN.wrap('<div class="secthead" role="heading"><h2><a/></h2></div>');
		}

	// open video display
	vid = new filOtaz_de.Video( sectN, href );
	vid.beforeClose( function(){
		vidN.remove();				// stop playing
		} );
	vid.beforeOpen( function(){
		if( vidN ) bodyN.prepend( vidN );	// start playing
		} );
	videos[ href ] = vid;	// register this video as loaded

	if(! deliveredContent )
		$.get( href +'c.xml?width=948&autoplay=true', function( data ) {

			if( findDeliveredContent() ) // predelivered content may now be available in DOM …
				return;

			var	content	= $( data ).find('content >item'),
				title	= content.find('>title').first().text(),
				corpus	= content.find('>corpus').first(),
				descr	= content.find('>descr').first().text();
			titleN.text( title );
			bodyN.prepend( vidN = corpus.children() );
			descrN.text( descr );

			}, 'xml' ); //$.get

	return vid;

	}; // filOtaz_de.VimeoVideo contructor


// === public "class" methods



})(); // filOtaz_de.VimeoVideo "class" container


/* ----- patOtaz_de.Ackerkartell.js ------------------------------------------------------------------- */

(function () { // class container Ackerkartell

  if( !window.patOtaz_de ) window.patOtaz_de = new Object;
  if(  window.patOtaz_de.Ackerkartell ) return; // don't interfere!

/* fil 2014-05-06
   ToDo: generalize Overlay w/ iframe as flexform
   data: key		eg
	title		'Ackerkartelle in Ostdeutschland'
	handle		'ackerkartelle'	derived from title
	src		'//apps.opendatacity.de/agrarstruktur/frame.html'
	width		624
	height		312
*/

  // === constructor
  window.patOtaz_de.Ackerkartell = function() {
    
    var ackerkartell = {};
    
    if( !ackerkartell.win ) ackerkartell.win = new filOtaz_de.Overlay()
      .append('<div class="sect sect_ackerkartell"><div class="sectbody"><iframe frameborder="0" src="//apps.opendatacity.de/agrarstruktur/frame.html" style="overflow: hidden; width: 624px; height: 312px;"></iframe></div></div>')
      ;
    
    ackerkartell.win.pop();
      
    return false;

  } // window.patOtaz_de.Ackerkartell

}) (); // class container Ackerkartell


/* ----- patOtaz_de.BbiFluglaermkarte.js ------------------------------------------------------------------- */

(function () { // class container BbiFluglaermkarte

  if( !window.patOtaz_de ) window.patOtaz_de = new Object;
  if(  window.patOtaz_de.BbiFluglaermkarte ) return; // don't interfere!


  // === constructor
  window.patOtaz_de.BbiFluglaermkarte = function() {
    
    var bbi = {};
    
    if( !bbi.win ) bbi.win = new filOtaz_de.Overlay()
      .append('<div class="sect sect_bbi"><div class="sectbody"><iframe frameborder="0" src="/scripts/odc-noisemap/" style="overflow: hidden; width: 825px; height: 633px;"></iframe></div></div>')
      ;
    
    bbi.win.pop();
      
    return false;

  } // window.patOtaz_de.BbiFluglaermkarte

}) (); // class container BbiFluglaermkarte


/* ----- patOtaz_de.Berlinfolgen.js ------------------------------------------------------------------- */

(function () { // class container patOtaz_de.Berlinfolgen
  
  
  if( !window.patOtaz_de ) window.patOtaz_de = new Object;
  if(  window.patOtaz_de.Berlinfolgen ) return; // don't interfere!
  
  
  // === private class data
  var src  = '//taz.berlinfolgen.de/';
  var hash = 'berlinfolgen';
  
  
  // === constructor
  window.patOtaz_de.Berlinfolgen = function( episode ) {
    var args         = episode.split('.');
    var berlinfolgen = {};
    
    if ( args[0]==hash && args[1]>0 ) {
      src += 'p/'+ [ args[1], args[2] ].join('.');
    }
    
    if ( !berlinfolgen.win ) {
      berlinfolgen.win = new filOtaz_de.Overlay({ black: true })
        .append('<div class="sect sect_berlinfolgen"><div class="sectbody"><iframe frameborder="0" src="' +src+ '"style="overflow: hidden; width: 935px; height: 752px;"></iframe></div></div>')
        ;
    }
    
    berlinfolgen.win.pop();
    
    return false;
    
  } // window.patOtaz_de.Berlinfolgen
  
  
}) (); // class container patOtaz_de.Berlinfolgen


/* ----- patOtaz_de.ParteispendenWatch.js ------------------------------------------------------------------- */

(function () { // class container ParteispendenWatch
  
  if( !window.patOtaz_de ) window.patOtaz_de = new Object;
  if(  window.patOtaz_de.ParteispendenWatch ) return; // don't interfere!
  
  
  // === constructor
  window.patOtaz_de.ParteispendenWatch = function() {
    
    var pwatch = {};
    
    if ( !pwatch.win ) pwatch.win = new filOtaz_de.Overlay()
      .append('<div class="sect sect_pwatch"><div class="sectbody"><iframe frameborder="0" src="http://apps.opendatacity.de/parteispenden/" style="overflow: hidden; width: 825px; height: 633px;"></iframe></div></div>')
      ;
    
    pwatch.win.pop();
    
    return false;
    
  } // window.patOtaz_de.ParteispendenWatch

}) (); // class container ParteispendenWatch


/* ----- filOtaz_de.tzi.js ------------------------------------------------------------------- */

filOtaz_de		= filOtaz_de		|| new Object;
filOtaz_de.flattr	=  filOtaz_de.flattr || function() {		//don't interfere!

	var	T = filOtaz_de ,
		F = filOtaz_de.conf.flattr ,
		B = filOtaz_de.conf.banking,
		C = filOtaz_de.conf.bitcoin
		;

	$(document).ready(function(){	// DOM is complete
		/*
		 * Partially stolen from
		 * Bowser - a browser detector
		 * https://github.com/ded/bowser
		 * MIT License | (c) Dustin Diaz 2015
		 */
		var browser = {
			isMsie: /msie|trident/i.test(window.navigator.userAgent),
		};
		
		if(browser.isMsie) {
			var match = window.navigator.userAgent.match(/(?:msie |rv:)(\d+(\.\d+)?)/i);
			browser.version = (match && match.length > 1 && match[1]) || 0;
		}
		
		// find and define URLs
		var url_protocol = window.location.protocol;
		var url_host     = window.location.host;
		var url_path     = window.location.pathname;
		var url_channel  = url_path.replace (/[^;]*(;[^\/]*).*/, '$1');
		var url_abo  = 'https://taz.de/!115932';
		var info_page = '/!p4697';
		//var url_info  = url_protocol + '//' + url_host + info_page + url_channel;
		var url_info  = url_protocol + '//' + url_host + info_page;

		// where am I?
		var pagetype = $(document.body).hasClass('homepage') ? 'home' : 'article';
		
		// find content
		var contentN;
		var             content = (new T.Article).fromNode( contentN = $('#thing')	);
		if( !content )	content = (new T.Article).fromNode( contentN = $('#hauptspalte .sect_article') );
		if( !content )	content = (new T.Article).fromNode( contentN = $('#pages >.page.first >.body >.sect_article') );
		if( !content )  content = (new T.Tom    ).fromNode( contentN = $('#popup_content_tom')         );
		
		var thing;
		if( content ) {
			// construct thing from page content
			thing = content.toThing();
			var idNcms = $('#cmsArticleID');
			if( idNcms.length >0 ) thing.articleid = idNcms.first().text();
			var idN = $('#articleID');
			if( idN.length >0 )	 thing.id = idN.first().text();
			}
		else {
			// construct default thing
			thing = new T.Thing({
				id:	'taz_online_0' ,
				//url:	new T.URL('http://taz.de/') ,
				url:	new T.URL('https://flattr.com/profile/taz.de') ,
				title:	'taz.de - online News'
				});
			}


		// define bank account text
		var bridge;
		if( content instanceof T.Tom || content instanceof T.Article )
			bridge = 'Unser '+ (content instanceof T.Tom ? 'Comic' : 'Artikel') +' hat Ihnen gefallen?';
		else	bridge = 'Unsere Arbeit gef&auml;llt Ihnen?';
		var bankingHtml = [
			B.caption, '<div class="taz_kto">'+ B.domestic,
			B.reference + (content instanceof T.Tom ? ' touche' :''),
			B.abroad +'</div>'
			].join('<br />');
		var bitcoinHtml = [
			C.caption, '<div class="taz_btc">'+ C.domestic
			].join('<br />');
		



		// build dom
		var anchorN = $( 'a#reward' ).last();	// wenn vorhanden Anker in der rechten Spalte bevorzugen
		var racked = anchorN.parents().is('.rack');
		var claim = anchorN.text();
		var containerN, listN, expanderN;
		anchorN.replaceWith(
			containerN = $('<div id="reward" class="reward" />')
			);
			// Einmal Zahlen Landing Page - get ancestry article id to post it to tzi success form for twitter field
		if( window.location.href.indexOf("163577") !== -1 && window.location.hash) { 
			var hash = window.location.hash.substring(1);  
			thing.articleid = hash.split(';')[1];
			var getTitleFromArticle =''; 
			$.ajax({
				type: "GET",
				url:  "/!" + thing.articleid + "/c.xml",
				dataType: "xml",
				async: false,
				error: function(){ },
				success: function(xml) {
				  getTitleFromArticle = $(xml).find("kicker").first().text() + ': ' + $(xml).find("headline").first().text();
				} 
			  });
			thing.title = getTitleFromArticle;
		}


		// if( claim && claim.length >0 )	containerN.append( $('<h6>'+ claim +'</h6>') );
		expanderN = $('\
<form id="micropay" name="micropay" action="https://taz.de/scripts/taz_zahl_ich/pay_check.php" method="POST" >	\
	<input type="submit" disabled="disabled" style="display:none;" />	\
	<input type="hidden" size="6" id="ppaid" name="aid" value="'+ thing.id +'"/>	\
	<input type="hidden" size="6" id="articleid" name="articleid" value="'+ thing.articleid +'"/>	\
	<input type="hidden" name="atitle" value="'+ thing.title +'"/>	\
\
	<div><select id="amount" name="amount">	\
			<option value="">Eingabe</option>	\
			<option value="30">0,30 &euro;</option>	\
			<option value="50" >0,50 &euro;</option>	\
			<option value="100" selected="true">1,- &euro;</option>	\
			<option value="200">2,- &euro;</option>	\
			<option value="500">5,- &euro;</option>	\
		</select>	\
\
	<span>oder</span> \
	<input type="text" size="6" id="amtman" name="amtman" value=""/> \
	<span>&euro;</span> \
	</div> \
\
	<div>	<input type="hidden" id="pay_way" name="pay_way" value="" />	\
		<ul role="toolbar" class="toolbar">	\
			<li><a id="pay_paypal" name="pay_paypal"          >PayPal</a></li>	\
			<li><a id="pay_ls"	   name="pay_ls"          >Lastschrift</a></li>	\
			<li><a id="pay_cc"	   name="pay_cc"          >Kreditkarte</a></li>	\
			<li><a id="pay_kto"	   name="pay_kto"         >&Uuml;berweisung</a></li> \
			<li><a id="pay_btc"        name="pay_btc"         >Bitcoin</a></li> \
		</ul>	\
	</div>	\
</form>'		);
		if( !racked )	expanderN.addClass('box sectbody');

		containerN.append( !racked	? $('<div class="rack style_taz"></div>').append( expanderN )	: expanderN	);
  containerN.append( listN = $('<ul role="toolbar" class="toolbar" />') );

		var tzi_sect = $('\
<div id="tzi_abo" style="display:none;" role="region" class="sect sect_tziabo box">\
    <!-- <div role="heading" class="secthead"><h2>taz zahl ich Abo</h2></div> -->\
</div>'			);
		if( !racked )	tzi_sect.addClass('style_taz');

		var sectN =  !racked ? expanderN : containerN.parents('.sect').first();
		sectN.addClass('sect_zahl ich corp');
		if (!$('.xxnohead')[0]) sectN.prepend('<div class="secthead" role="heading"><h2><a name="zahl ich"><span>zahl ich</span></a></h2></div>');

		// mar: tziBottomArticle

		//if ( $('.news.page.article').length ) {
		sectN.after( tzi_sect ); containerN.trigger('TAZboxChange');

		if ( $('.tziBottomArticle').length ) tziArticleBottom()
		
		// tracking which "Einmal bezahlen" service used on https://taz.de/!163577/ single page
		if( window.location.href.indexOf("163577") !== -1 && window.location.hash) {
			var hash = window.location.hash.substring(1);  
			// remove hash
			history.replaceState(null, null, ' ');
			if ( hash.toLowerCase().indexOf('abtest') !== -1 ) {

				var tziParameter = hash.split(';')[0];

				$('#pay_way +ul >li >a').click(function(){				
						var p = patOtaz_de.piwik;
						 p.trackEvent( 'TZI', 'einmalZahlen', tziParameter + ': ' + $(this).text() );
					})
				}	
			} 


			// next AB-Test -- matomo: track when using paying once
			// $('#pay_way +ul >li >a').click(function(){
			// 		p.trackEvent( 'TZI', 'einmalZahlen', hiddenDach + ': ' + $(this).text() );
			// 	})




 /*
		if (pagetype == 'article') {
			$.ajax({
				url: '/fileadmin/php/php_verlagsformulare_neu/tziabo/images/last50.txt',
				success: function(data) {
	                var tziimages_array=data.split("\n");
        	        var tmp_array=tziimages_array;
                	var tzi_imgs;
									var tziabo_text2 = '<p class="tziabonnement">Wir haben uns ' + (racked?'bereits ':'') + 'entschieden taz.de auf Dauer zu honorieren.</p>';
									$ ('a', tzi_sect).append ($ (tziabo_text2));
									tzi_sect.append( tzi_imgs = $('<div role="body" class="sectbody"/>') );
									tzi_imgs.append( tzi_imglink = $('<a class="modal-trigger" href="javascript:;" style="outline: 0;"></a>') );
									tzi_imglink.append ( img_list = $('<ul/>') );
									var imgcount = racked ? 3 : 6;
	                for (var i=1; i<=imgcount; i++) {
        	        	var rand_max=tziimages_array.length-2;
                	  var rand_id=parseInt( Math.random() * ( rand_max+1 ) );
	                  $('<li><img src="/fileadmin/php/php_verlagsformulare_neu/tziabo/images/thumbnail_images/'+ tziimages_array[rand_id] +'"/></li>')
        	          	.addClass(function(x,c){ 
                	            		var r = i % 2 ? 'odd' : 'even';
                        	    		if( i==1 ) r += ' first';
	                            		if( i==imgcount ) r += ' last';
        	                    		return r; 
                	            	})
	                    .appendTo( img_list );
        	            tziimages_array.splice(rand_id,1);
                	}
                  //console.log('DEBUG');
                  //console.log(tziButtonN);
				},
        async: false,
			});
		} // if (pagetype == 'article') { $.ajax({ ... }) }
 */
		
		var flattrButtonN;
		//listN	.append( $('.shariff-button.flattr')


		$('#pay_way + ul').append( $('.shariff-button.flattr') );

		/*		$( '<li class="flattr"></li>' )
					.prepend( flattrButtonN = $('<a />') )
					*/
			// 	)
			// ;




		// ======= taz zahl ich functionality =======

		var red  = "#d50d2e";
		var grey = "#888888";

		// how to show/hide bank account
		var expander2N = $();
		var expanded2=false;

		var kto_fkt = function(){
			$(this).blur();
			if( !expanded2 ) {	
				expander2N = $('<div class="expander2" />').html(bankingHtml).hide().appendTo(expanderN)
				if (browser.isMsie && parseFloat(browser.version) < 8) expander2N.show();
			else	{	
					expander2N.slideDown(function() {
						expander2N.trigger('TAZboxChange');
					})
				}
				expanded2 = true;
			} else {
					expander2N.slideUp(function(){
					expander2N.trigger('TAZboxChange').remove()
						});
					expanded2=false;
					}
			};
		var btc_fkt = function(){
                        $(this).blur();
                        if( !expanded2 ) {
				expander2N = $('<div class="expander2" />').html(bitcoinHtml).hide().appendTo(expanderN)
				if (browser.isMsie && parseFloat(browser.version) < 8) expander2N.show();
                        else    {
					expander2N.slideDown(function() {
						expander2N.trigger('TAZboxChange');
					})
				}
				expanded2 = true;
			} else {
                                        expander2N.slideUp(function(){
					expander2N.trigger('TAZboxChange').remove()
                                                });
                                        expanded2=false;
                                        }
                        };

		var cc_fkt = function(){
			var popupOpen = window.open( '','popup_cc','height=520,width=500');
			   popupCheck(popupOpen);
               document.getElementsByName('micropay')[0].target = 'popup_cc';
               $('#pay_way').val("cc");
               document.micropay.submit();
               return false;
    					};
		var ls_fkt = function(){
			var popupOpen =  window.open( '','popup_ls','height=520,width=500');
			   popupCheck(popupOpen);
               document.getElementsByName('micropay')[0].target = 'popup_ls';
               $('#pay_way').val("ls");
               document.micropay.submit();
               return false;
             };
		var pay_mbe_fkt = function(){ 
			   var popupOpen =  window.open( '','popup_mbe','height=600,width=500');
			   popupCheck(popupOpen);
               document.getElementsByName('micropay')[0].target = 'popup_mbe';
               $('<input type="hidden" name="pay_mbe" value="1" />')
               $('#pay_way').val("mbe");
               document.micropay.submit();
               return false;
             };
		var pay_paypal_fkt = function(){
			   var popupOpen = window.open( '','popup_pp','height=610,width=800,scrollbars=1');
			   popupCheck(popupOpen);
               document.getElementsByName('micropay')[0].target = 'popup_pp';
               $('#pay_way').val("paypal");
               document.micropay.submit();
               return false;
             };

		// pay amount vs method selection
		var amountN = $('#amount',containerN);
		var amtmanN = $('#amtman',containerN);

		function popupCheck(popupOpen) {
			try {
				popupOpen.focus();
				} catch (e) {
				alert("Dies kann nicht geöffnet werden, weil Sie einen Popup-Blocker aktiviert haben. Bitte deaktivieren Sie diesen vorübergehend oder fügen eine Ausnahme hinzu, um fortzufahren.");
				}
			}

		function ausgrau(){
			var amount = amountN.val();
			if( amtmanN.val() ) 
				amount = parseFloat( amtmanN.val().replace(/,/g, ".") ) * 100;
			if( ! amount>0 ) amount=0;

			$('#pay_kto').off('click.pay_tzi'); //, kto_fkt );
			$('#pay_ls').off('click.pay_tzi'); //,  ls_fkt  );
			$('#pay_btc').off('click.pay_tzi'); //);
			$('#pay_cc').off('click.pay_tzi'); //,  kto_fkt );

			if (amount<30) {

            $('#pay_kto').css({ 'color': grey });
            $('#pay_kto').tooltip({
            	'html': true,
            	'container': '#micropay',
            	'title': 'Bitte geben Sie einen Betrag von mindestens 30 Cent ein.'
    		}); 

            $('#pay_ls').css({ 'color': grey});
            $('#pay_ls').tooltip({
            	'html': true,
            	'container': '#micropay',
            	'title': 'Bitte geben Sie einen Betrag von mindestens 30 Cent ein.'
    		}); 

            $('#pay_cc').css({ 'color': grey});
            $('#pay_cc').tooltip({
            	'html': true,
            	'container': '#micropay',
            	'title': 'Bitte geben Sie einen Betrag von mindestens 30 Cent ein.'
    		}); 

            $('#pay_btc').css({ 'color': red });
            if( $('#pay_btc').tooltip() ) {$('#pay_btc').tooltip('destroy');}
            $( '#pay_btc', containerN ).on('click.pay_tzi', btc_fkt );

			} else {

		        	$('#pay_kto').css({ 'color': red });
	            		if($('#pay_kto').tooltip())  $('#pay_kto').tooltip('destroy');
				$( '#pay_kto', containerN ).on('click.pay_tzi', kto_fkt );
				$('#pay_btc').css({ 'color': red });
	            		if ($('#pay_btc').tooltip()) $('#pay_btc').tooltip('destroy');
	            		$( '#pay_btc', containerN ).on('click.pay_tzi', btc_fkt );
						
            $('#pay_ls').css({ 'color': red});
            if (  $('#pay_ls').tooltip() ) {$('#pay_ls').tooltip('destroy');}
            $('#pay_ls').on('click.pay_tzi', ls_fkt );

            $('#pay_cc').css({ 'color': red});
            if($('#pay_cc').tooltip())  {$('#pay_cc').tooltip('destroy');}
            $('#pay_cc').on('click.pay_tzi', cc_fkt );
			}


			$('#pay_mbe').off('click.pay_tzi'); 
			if (amount<30 || amount>1500) {

            $('#pay_mbe').css({ 'color': grey});
            if (amount<30) {
                $('#pay_mbe').tooltip({
                	'html': true,
                	'container': '#micropay',
                	'title': 'Bitte geben Sie einen Betrag von mindestens 30 Cent ein.'
        		}); 
            }
            if (amount>1500) {
                $('#pay_mbe').tooltip({
                	'html': true,
                	'container': '#micropay',
                	'title': 'Bitte bezahlen Sie Betr&auml;ge &uuml;ber 15 Euro per Lastschrift, Kreditkarte, Paypal oder &Uuml;berweisung.'
        		}); 
            }

			} else {

            $('#pay_mbe').css({ 'color': red});
            if( $('#pay_mbe').tooltip() )  $('#pay_mbe').tooltip('destroy');
            $('#pay_mbe').on('click.pay_tzi', pay_mbe_fkt );
			}


			$('#pay_paypal').off('click.pay_tzi'); 
			if (amount<100) {

            $('#pay_paypal').tooltip({
            	'html': true,
            	'container': '#micropay',
            	'title': 'Betr&auml;ge unter 1 &euro; sind derzeit mit Paypal leider nicht m&ouml;glich.'
    		}); 

            $('#pay_paypal').css({ 'color': grey});

			} else {

            $('#pay_paypal').css({ 'color': red});
            if($('#pay_paypal').tooltip()) {$('#pay_paypal').tooltip('destroy');}
            $('#pay_paypal').on('click.pay_tzi', pay_paypal_fkt );
			}

		}//ausgrau


		amountN.change(function(){
			amtmanN.val("");
			ausgrau();
			});

		amtmanN.keyup(function() {
			$("#amount option:eq(2)").prop("selected", false); 
			$("#amount option:eq(0)").prop("selected", true); 
            		$('#pay_mbe').tooltip('destroy');
			ausgrau();
			});

		ausgrau();



        // actually show stuff

		var toExpand = expanderN.add( tzi_sect );


		// show tzi!



// 2015-01-29
if( sectN.hasClass('last_box') || !racked ) {
  sectN.removeClass('last_box');
  tzi_sect.addClass('last_box');
}
//if( $.browser.msie && parseFloat( $.browser.version ) <8 ) toExpand.show();
//else                                                       toExpand.slideDown();


		containerN.show();

	function tziArticleBottom(){
		if ( $('.news.page.article').length ) {sectN.after( tzi_sect ); containerN.trigger('TAZboxChange') };
			 var p = patOtaz_de.piwik;

			// mar get tzi bottom articles from script
			var artCount = $('.tziBottomArticle').length; 
			var artChoose = Math.floor(Math.random() * Math.floor(artCount));
			var artQ = $('.tziBottomArticle');
			var artN = $(artQ.eq(artChoose).text());
			var headline = artN.find('h1 > span:last-of-type');
			var hiddenDach = artN.find('.kicker').text() !== '' ? artN.find('.kicker').text().replace(/\s/g, "") : "Bottom";
			var brottext = artN.find('p:not(:empty)');
			var fullFormURL = "https://taz.de/!115932/#!formfill:via=" + hiddenDach;


			tzi_sect.before( $(' <div class="sect_text tziBottom"> \
									<h6>' + headline.text() + ' </h6> \
										<a target="_blank" href="' + fullFormURL + '" class="button" role="link"><p><div class="hint">Voll dabei sein</div></a>\
								 </div>\
								')   );
			$('.tziBottom > h6').after( brottext );
			$('.tziBottom').append( sectN );
			sectN.wrap('<div id="tziacc"></div>');

			// new: tzi texts at the end of article
			// for next abTest
			// if( claim && claim.length > 0 ) $( sectN ).find('.secthead').append( $('<h6>'+ claim +'</h6>') );

			// mar191 to be removed
			// einmal zahlen
			if( claim && claim.length > 0 ) $( sectN ).find('.secthead').append( $('<a href="/!163577#' + hiddenDach + ';' + $('#cmsArticleID').first().text() + '" target="_blank">'+ claim +'</a>') );


			$( sectN ).find('.sectbody').hide();


		tzi_sect.after( $('<div class="tzi-paywahl__logo"><a name="zahl ich" title="Infos über die freiwillige Unterstützung" target="_blank" href="/Infos-ueber-die-freiwillige-Unterstützung/!156925/"></a></div>') );
		
		// new: tzi texts at the end of article
		// for next abTest
		// if( claim && claim.length > 0 ) $( sectN ).find('.secthead').append( $('<h6>'+ claim +'</h6>') );
				$( '.tziBottom > #tziacc a' ).click( function() {
	                        // tracking on Article goTo: https://taz.de/!163577/
					if ( $('.news.page.article').length ) p.trackEvent( 'TZI', 'einmalZahlen', hiddenDach + ': ExternalLinkEinmal' );
					if ( $('#pages.news >.article.longread').length ) p.trackEvent( 'TZI', 'einmalZahlen', hiddenDach + ': ExternalLinkEinmalLongread' );
				});
                $( '.tziBottom > .article + a.button' ).click( function() {
					if ( $('.news.page.article').length ) p.trackEvent( 'TZI', 'vollZahlen', hiddenDach + ': ExternalLinkVollDabei' );
					if ( $('#pages.news >.article.longread').length ) p.trackEvent( 'TZI', 'einmalZahlen', hiddenDach + ': ExternalLinkVollLongread' );
				});
                $( '.tziBottom ~ .tzi-paywahl__logo a' ).click( function() {
					if ( $('.news.page.article').length ) p.trackEvent( 'TZI', 'vollZahlen', hiddenDach + ': ExternalLinkLogo' );
					if ( $('#pages.news >.article.longread').length ) p.trackEvent( 'TZI', 'einmalZahlen', hiddenDach + ': ExternalLinkLogoLongread' );
				});
		}


	
		// load flattr api
	/*	if( !(thing && thing.url) )  return;
		$.getScript( F.api, function(){  // place the button(s)  
			// not fired in FF4, see filOtaz_de.xbrowser.js
			FlattrLoader.render(
				$.extend( {}, F.common, {
					url		: ''+ thing.url ,
					title		: ''+ thing.title ,
					description	: ''+ thing.descr ,
					tags		: thing.obj instanceof T.Tom ? 'tom, comic, webcomic'	: F.common.tags ,
					category	: thing.obj instanceof T.Tom ? 'images'			: F.common.category
					} ),
				flattrButtonN.get(0), 
				'replace' 
				);
			} );*/

		}); //$(document).ready	


        }; //filOtaz_de.flattr



/* ----- ulfOtaz_de.tzioverlay.js ------------------------------------------------------------------- */

$(document).ready(function(){
$('.modal-trigger').click(function(evt) {
  evt.preventDefault();


        var tzi_imgs='';
	var rows=2;
	var cols=4;

/*$.get('/fileadmin/php/php_verlagsformulare_neu/tziabo/images/gallery.txt', function(data) { */

$.ajax({
	url: '/fileadmin/php/php_verlagsformulare_neu/tziabo/images/gallery.txt',
	success: function(data) {

        var tziimages_array=data.split("\n");
        var imgcount = tziimages_array.length-1;
        var tmp_array=tziimages_array;
        for (var i=1; i<=imgcount; i++) {
                var rand_max=tziimages_array.length-2;
                var rand_id=parseInt( Math.random() * ( rand_max+1 ) );
		var chunk_array=tziimages_array[rand_id].split("\t");
		page = Math.ceil(i/(rows*cols));
		pages = Math.ceil(imgcount/(rows*cols));
		// row = Math.floor((i-1)/cols)+1-((page-1)*rows);
		row = (Math.floor ((i-1)/cols) % rows) + 1;
		col = i -((page-1)*rows*cols) - ((row-1)*cols);
		/* alert(row+', '+col+' i: '+i+' rows: '+rows+' page: '+page); */
		if (row==1 && col==1 && rand_max >=0) {
			tzi_imgs=tzi_imgs+'<div id="page'+page+'" style="position:absolute; left:50%; margin-left:-447px; ';
			if (page > 1) { tzi_imgs=tzi_imgs+'display:none;'; }
			tzi_imgs=tzi_imgs+'">';
			tzi_imgs=tzi_imgs+'<h1>zahl ich</h1><h3 style="float:left;width:800px;">Wir haben uns entschieden, taz.de auf Dauer zu honorieren.</h3><div align="right" style="position:relative;left:-5px;height:84px;"><div class="tzioverlay_nav back">';
			// zurueck ...  if (page > 1) { tzi_imgs=tzi_imgs+'<a href="javascript:void(0)" onClick="javascript:$(\'#page'+page+'\').hide();$(\'#page'+(page-1)+'\').show();"><img src="/fileadmin/templates/neu/images/prev19x19bw.gif" border="0" style="float:left;"></a>'; }
			if (page > 1) {
				tzi_imgs = tzi_imgs + '<a href="javascript:void(0)" onClick="javascript:$(\'#page'+page+'\').hide(); $(\'#page'+(page-1)+'\').show();" class="tzioverlay_navi">zur&uuml;ck</a>';
			}
			/*alert (tzi_imgs); */
			// tzi_imgs = tzi_imgs + '</div><div style="width:19px;height:19px;margin-right:5px;float:left;">';
			tzi_imgs = tzi_imgs + '</div><div class="tzioverlay_nav next">';
			// vor ...  if (page < pages) { tzi_imgs=tzi_imgs+'<a href="javascript:void(0)" onClick="javascript:$(\'#page'+page+'\').hide();$(\'#page'+(page+1)+'\').show();"><img src="/fileadmin/templates/neu/images/next19x19bw.gif" border="0" style="float:left;"></a>'; }
			if (page < pages) {
				tzi_imgs = tzi_imgs + '<a href="javascript:void(0)" onClick="javascript:$(\'#page'+page+'\').hide(); $(\'#page'+(page+1)+'\').show();" class="tzioverlay_navi">vor</a>';
			}
			// schliessen ...  tzi_imgs=tzi_imgs+'</div> <a style="" href="javascript:;" onClick="javascript:$(\'.overlay\').remove();$(\'#modal\').remove();$(\'body\').css(\'overflow\', \'auto\');"><img src="/fileadmin/templates/neu/images/schliessen19x19bw.gif" border="0" style="float:left;"></a></div><div style="clear:both;"></div>';
			tzi_imgs = tzi_imgs + '</div><a class="tzioverlay_nav close" style="" href="javascript:;" onClick="javascript:$(\'.overlay\').remove();$(\'#modal\').remove();$(\'body\').css(\'overflow\', \'auto\').css(\'width\', \'1661px\');" class="tzioverlay_navi">schlie&szlig;en</a></div>';
			/*tzi_imgs=tzi_imgs+'</div> <a style="" href="javascript:;" onClick="javascript:$(\'.overlay\').remove();$(\'#modal\').remove();"><img src="/fileadmin/templates/neu/images/schliessen19x19bw.gif" border="0" style="float:left;"></a></div><div style="clear:both;"></div>';*/
		} // if (row==1 && col==1 && rand_max >=0) { ... }
                /* tzi_imgs=tzi_imgs+'<img src="/fileadmin/php/php_verlagsformulare_neu/tziabo/images/gallery_images/'+ tziimages_array[rand_id] +'" width="180" height="180" style="margin-bottom:30px;'; */
                if (chunk_array[0]!="") {
			tzi_imgs=tzi_imgs+'<img id="'+ chunk_array[0] +'" src="/fileadmin/php/php_verlagsformulare_neu/tziabo/images/gallery_images/'+ chunk_array[0] +'" width="180" height="180" style="margin-bottom:30px;';
			if (col<cols) {tzi_imgs=tzi_imgs+'float:left;margin-right:45px;';}
			tzi_imgs=tzi_imgs+'"';
			if (typeof (chunk_array[1])!="undefined") {tzi_imgs=tzi_imgs+' title="'+ chunk_array[1] +'"';}
			tzi_imgs=tzi_imgs+'/>';
		}
                tziimages_array.splice(rand_id,1);
		if (i == imgcount || (row==rows && col==cols)) {
			tzi_imgs=tzi_imgs+'</div>';
		}
        } // for

var $modal = $('<div>' + tzi_imgs + '</div>')
  .attr('id', 'modal')
  .css({
    'background'    : 'transparent',
  	'zIndex'        : '3000',
  	'padding'       : '0',
  	'width'         : '100%',
  	'height'        : '100%',
  	'margin'        : '0',
  	'opacity'       : '1',
  	'position'      : 'fixed',
  	'top'           : '32px',
  	'left'          : '0'
	});

if (typeof $(this).overlay !== 'function') throw ReferenceError ();
  $(this).overlay({
    color: '#FFFFFF',
    effect: 'fade',
    opacity: 0.85,
    closeOnClick: true,
    show: 'viewport',
    onShow: function() {
      $('body').append($modal);
    },
    onHide: function() {
      $modal.remove();
    },
  })

        /*});*/
	},
	async: false,
});

        });

});


/* ----- filOtaz_de.reward.js ------------------------------------------------------------------- */

if( ! window.filOtaz_de )       window.filOtaz_de = new Object;
if( ! window.filOtaz_de.reward )        //don't interfere!
window.filOtaz_de.reward = function() {

        var articleNode = $('#hauptspalte .uplinks');
        if( articleNode.length<1 ) return;      // only regard pages w/ articles

        var myNode = $('.likeit', articleNode).first();
        var expanderNode;
        var expanded = false;

        var button = $('<a class="txtbutton" href="." />')
	.css({ marginLeft:'7px' })
        .text(' [ taz-Konto ]')
        .toggle(function(){
                        button.blur();
                        if( expanded ) return false; expanded = true;
			button.addClass('active');
                        expanderNode = $('<div class="expander" />')
			.css({ marginTop:'8px', width:'460px' })
                        .append( '<em>Schön, dass Ihnen der Artikel gefällt.<br /> Um unsere Arbeit zu honorieren, können Sie diese Bankverbindung verwenden:</em>' )
			.append( $('<div><em>die tageszeitung</em> | Kto-Nr <em>39316106</em> | BLZ <em>10010010</em> Postbank Berlin<br /> Verwendungszweck <em>taz.de</em><br /> IBAN <em>DE27 1001 0010 0039 3161 06</em> | BIC <em>PBNKDEFF</em></div>')
				.css({ borderWidth:'1px 0px', borderStyle:'solid', padding:'2px 0px', marginTop:'3px' })
				)
                        .appendTo(myNode);
                        return false;   // cancel default action (ie href)
                        },
                function(){
                        button.blur();
                        if( !expanded ) return false; expanded = false;
			button.removeClass('active');
                        expanderNode.remove();
                        }
                )
        .appendTo(myNode);

        }; //window.filOtaz_de.reward


/* ----- patOtaz_de.tzi_cookies.js ------------------------------------------------------------------- */

window.patOtaz_de = window.patOtaz_de || new Object;
window.patOtaz_de.tzi_cookies = window.patOtaz_de.tzi_cookies || function (setting) {
                                        // fallback
    var setup = setting || { campaign :'0000-00-00' };

    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     *  new campaign?
     */
    //console.log( "(before) setup.campaign  = "+ setup.campaign );
    //console.log( "(before) cookie.campaign = "+ $.cookie('tzi_paywall_campaign') );
    if (  ! $.cookie('tzi_paywall_campaign')  ||  $.cookie('tzi_paywall_campaign') !== setup.campaign  ) {

        console.log( "setting new cookie" );

        //console.log( "tzi_paywall_campaign: set new cookie" );
        $.cookie( 'tzi_paywall_campaign'     ,setup.campaign ,{ domain :'taz.de' ,path :'/' ,expires :365 } );
        $.cookie( 'tzi_paywall_payed'        ,'new'          ,{ domain :'taz.de' ,path :'/' ,expires :3   } );
        $.cookie( 'tzi_paywall_seen_home'    ,0              ,{ domain :'taz.de' ,path :'/' ,expires :30  } );
        $.cookie( 'tzi_paywall_seen_article' ,0              ,{ domain :'taz.de' ,path :'/' ,expires :30  } );
    }
    
}; // patOtaz_de.tzi_cookies


/* ----- patOtaz_de.tzi_track.js ------------------------------------------------------------------- */

window.patOtaz_de = window.patOtaz_de || new Object;
window.patOtaz_de.tzi_track = window.patOtaz_de.tzi_track || function (name, target) {

    /**
     * track call for hitlist
     * @param {String} name   track name (need a setup in apache config and hitlist)
     * @param {String} target track target (need a setup in hitlist)
     * @return {void}         ajax http head call to hitlist logs
     */
    var url = '/count/' + name + '/' + ('' + Math.random()).substring(2) + '/' + target + '.gif';
    $.ajax({
        type   :'HEAD'
        ,async :true
        ,url   :url
    });

}; // patOtaz_de.tzi_track


/* ----- patOtaz_de.layer_tzi_shackle_2016_11.js ------------------------------------------------------------------- */

window.patOtaz_de = window.patOtaz_de || new Object;
window.patOtaz_de.layer_tzi_shackle_2016_11 = window.patOtaz_de.layer_tzi_shackle_2016_11 || function (setting) {


    if (! setting) var cookieName = dateToCookieName();
    var setup = setting || { campaign: cookieName, delay: 0 }; // set in style/extra_layer.xsl
    
    // new campaign! -> refresh cookies
    patOtaz_de.tzi_cookies({ campaign :setup.campaign });
     
     
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     *  play shackle or not?
     */
    
    
    var form_id = '!115932';
    var form_et = '#!formfill:via=Lasche';
    
    // play shackle
    var container = $('<a id="tzi-shackle">')
        .attr({'target':'_blank','href':'https://taz.de/Regelmaessig-zahlen-per-Bankeinzug/'+ form_id +'/'+ form_et})
        .append($('<div>')
         // .append( shackletext )
        )
        .prependTo($('body'))
        .hide()
        ;
    container.fadeIn(setup.delay);


    if ($.cookie('tzi_paywall_payed') === 'yes'){
        var shackletext = $('<span class="tzi-shackle__yes"><span></span> Vielen Dank für Ihre Unterstützung!</span>'); 
    } 
    else if ( $.cookie('tzi_paywall_payed') === 'yesHide' ) {
         container.hide(); 
    } else {
        var shackletext = $('<span class="tzi-shackle__yes">Unterstützen Sie jetzt die <span>taz!</span>'); 
    }

    container.find('div').append( shackletext  );
    
    if ($.cookie('tzi_paywall_payed') === 'yes'){
        container.addClass('paying');
        if ($('#tzi-paywahl-fg').length ){  
            // once: heartbeat
            container.addClass('animated');
        }
        container.after(  $( '<a class="close" title="Schließen"></a>' ) );
        // add close link

    } else {
        container.addClass('notPaying');
    }
    
    // click handler
    // on click JA

    container.next('.close').click(function () {

        var now = new Date();
        var firstOfNextMonth = new Date(now.getFullYear(), now.getMonth()+1, 1);
        $.cookie('tzi_paywall_payed', 'yesHide',  {domain: 'taz.de', path: '/', expires: firstOfNextMonth });
        container.fadeOut();
        container.next('.close').fadeOut();
    });

    container.click(function () {
        container.fadeOut();
        patOtaz_de.tzi_track('tzipaywall', '1/shackle');
    });
    
}; // patOtaz_de.layer_tzi_shackle_2016_11





/* play shackle on lists and home page */
$( document ).ready(function() {
    if (  ($('#pages.news').length) && (!$('#tzi-paywahl-fg').length )  && (!$('#tzi-shackle').length )    ) {

        patOtaz_de.layer_tzi_shackle_2016_11();
        }
});

function dateToCookieName(){

    /* mar: no cookie reset when there is no layer on first article view
    var dateObj = new Date(), month = dateObj.getUTCMonth(), day = dateObj.getUTCDate(), year = dateObj.getUTCFullYear(); 
    var dayOfRefresh = 27;
    if ( day >= dayOfRefresh ) month += 1;
    var cookieName = year + '-' + month + '-' + dayOfRefresh;
    */
    var cookieName = '2019-5-27';
    return cookieName

}





/* ----- patOtaz_de.layer_tzi_paywahl_2017_08.js ------------------------------------------------------------------- */

window.patOtaz_de = window.patOtaz_de || new Object;
window.patOtaz_de.layer_tzi_paywahl = window.patOtaz_de.layer_tzi_paywahl || function (setting) {

    var setup = setting || {campaign: '0000-00-00'}; // set in style/extra_layer.xsl

    // piwik/matomo tracking for a/b test
    var p = patOtaz_de.piwik;

    // new campaign! -> refresh cookies
    patOtaz_de.tzi_cookies({ campaign :setup.campaign });

    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     *  play paywall or not? 
     */


    // mar: "seen" now means article seen
    var pagetype = $(document.body).hasClass('homepage') ? 'home' : 'article';
    var seen = $.cookie('tzi_paywall_seen_' + pagetype);

    seen = seen + 1 ? parseInt(seen) : 0;
    // if cookies not allowed --> to be refactored with line above 
    if ( isNaN(seen) ) {
        var noCookies = 1;
        seen = 0;
    }
    
    $.cookie('tzi_paywall_seen_' + pagetype, seen + 1, {domain: 'taz.de', path: '/', expires: 30});

    // added by mar: session cookie
    // changed after CMP start: always layer
  //  if ( ( $.cookie('tzi_session') != 'inSession') && ( $.cookie('euconsent-v2') ) ){
    if ( $.cookie('euconsent-v2') ){
        // first article in session --> continue
        //    $.cookie('tzi_session', 'inSession',  {domain: 'taz.de', path: '/'});

        } else {
            // layer not again in one session
            return
        }

    // Abonnenten nicht
    if (   $.cookie('tzi_paywall_payed') === 'yes' || $.cookie('tzi_paywall_payed') === 'yesHide' )
        return;


    // derzeit: no AB-Test
    // if ( ! $.cookie('tzi_AB')) $.cookie('tzi_AB', Math.floor(Math.random() * 2) ,{domain: 'taz.de', path: '/', expires: 365});
      
    // == 0 or 1

    $.cookie('tzi_AB', 1 ,{domain: 'taz.de', path: '/', expires: 365})

        // for testing only == force A or B

   // $.cookie('tzi_AB', 1 ,{domain: 'taz.de', path: '/', expires: 365});
    
    // get tzi article

    var artQ, artN, artId, theme_max, theme_n, headline, text, viaName, hiddenDach;
    try {
        artQ = $('.tziArticle');
        theme_max = artQ.length;
        theme_n = theme_max === 1
                ? 0
                : Math.floor(Math.random() * theme_max); // 0..(theme_max-1)
        artN = $(artQ.eq(theme_n).text());
        headline = artN.find('h1');
        brottext = artN.find('p:not(:empty)');
        //artId    = artN.attr('ratioURL-ressource');

        hiddenDach = artN.find('h1').find('.kicker').text();
 
        viaName = hiddenDach.toLowerCase().indexOf('abtest') !== -1 ? hiddenDach : "Layer";
        if ( hiddenDach.toLowerCase().indexOf('abtest') !== -1 ) p.trackEvent( 'TZI', hiddenDach, 'displayed' );     

        //console.log("DEBUG count", artId);
        artId = 1;
        //artQ.remove(); // remove all <script>-tags with tzi themes
    } catch (err) {
        console.log("artN ", err.message);
        return;
    }


    var showTziArticleText = true;

    var fullFormURL = "https://taz.de/!115932/"

    // /!\ hardcoded A/B-test case B ("abTestB") in aktion= Parameter
    //var form_et_link = fullFormURL +"#!formfill:via=" + viaName +",abTestB&referrer="+location.pathname;
    
    // var formSumInput = '<span class="number_field field preset"><label for="form_tzi[enrol][sum]" class="form_tzi[enrol][sum] label"><p>Betrag</p></label><span class="hint">min 5,- €</span><input type="number" inputmode="numeric" step="1" min="5" max="1000" pattern="[0-9]*" name="tzi[enrol][sum]" id="form_tzi[enrol][sum]" class="euro unit number neutral" required="yes" tabindex="1"><span class="suffix">,- €</span></span>';
    // var formIntervalInput = '<span class="dropdown_field field worked"><label for="form_tzi[enrol][interval]" class="form_tzi[enrol][interval] label"></label><select type="dropdown" name="tzi[enrol][interval]" id="form_tzi[enrol][interval]" class="dropdown" required="yes" size="1" tabindex="2"><option value="1">Im Monat</option><option value="2">Im Quartal</option><option value="3">Im Jahr</option></select></span>';
    // var formComplete = '<form id="tzi-paywall-form" class="tzi-paywall-form"><div class="sectbody">'+formSumInput+' '+formIntervalInput+'</div></form>';
    
    
    // background
    var container_bg = $('<div id="tzi-paywahl-bg">').appendTo($('#pages'));
    
    var container_fg;
    
/*     var serializeInput = function() {
    	var result = "sum="+$("#tzi-paywall-form input").val();
    	console.log("serializeInput: "+result);
    	return result;
    }
    
    var serializeSelect = function() {
    	var result = "interval="+$("#tzi-paywall-form select").val();
    	console.log("serializeSelect: "+result);
    	return result;
    }
    
    var hasResultInputValue = function(resultInput) {
    	if(resultInput && resultInput !== undefined && resultInput !== "sum=") {
    		return true;
    	} else {
    		return false;
    	}
    }
    
    var hasResultSelectValue = function(resultSelect) {
    	if(resultSelect && resultSelect !== undefined && resultSelect !== "interval=") {
    		return true;
    	} else {
    		return false;
    	}
    }
    
    var generateTargetLink = function() {
    	
		var fullFormLink = fullFormURL;
		fullFormLink += '#!formfill:';
		var resultInput = serializeInput();
		var resultSelect = serializeSelect();
		var result = "";
		if(hasResultInputValue(resultInput) === true && hasResultSelectValue(resultSelect) === true) {
			result = resultInput+"&"+resultSelect;
		} else if(hasResultInputValue(resultInput) === true && hasResultSelectValue(resultSelect) === false) {
			result = resultInput;
		} else if(hasResultInputValue(resultInput) === false && hasResultSelectValue(resultSelect) === true) {
			result = resultSelect;
		}
	if( result.length ) fullFormLink += result+'&';
	// /!\ hardcoded A/B-test case A ("abTestA") in aktion= Parameter
	fullFormLink += "via=" + viaName + ",abTestA&referrer="+location.pathname;
            
    		
    	console.log("result v5: "+result);
        
	form_et_link = fullFormLink;
    	$("a.tzi-paywall-link").attr("href", fullFormLink);
    } */
    
	// play selected theme
    
    if ( $.cookie('tzi_AB') == 0 ) {

        // default A == old

        var form_et_link = fullFormURL +"#!formfill:via=Layer,abTest5,Standard&referrer="+location.pathname;
       // var form_et_link = fullFormURL +"#!formfill:via=" + viaName +",uxA&referrer="+location.pathname;


    	container_fg = $('<div id="tzi-paywahl-fg">')
        .append($('<div class="ABTestA">')
    		    //.append('<img id="tazSticker" alt="" src="/lib/ch/mar05/pix/tzi-sticker/' + Math.floor(Math.random() * 11) + '_150.png" >')

       		      .append($('<div class="tzi-paywahl__sticker-box">')
                         	    .append($('<a>')
                                        .attr('target', '_blank')
                                        .attr('href', form_et_link)
                                        .append($('<img alt="taz tazze" src="/lib/ch/web/pix/tazze_100_d50d2e.png" />'))
                                        )
                                  )
    		    .append(headline)
                        .append(brottext)
      		//     .append($('<p class="tzi-paywahl__sticker-text">')
                //                 .text('Für ein offenes Internet und freien Zugang zu unabhängigem Journalismus.')
                //                 )
                        .append($('<ul class="article">')
                                .append($('<li class="tzi-paywahl__yes">')
                                        .append(
                                                $('<a class="hint" title="Ich möchte die taz mit einem regelmäßigen Beitrag unterstützen." tabindex="3"><span class="tzi-shackle__yes">Ja</span>, ich will</a>')
                                                .attr('target', '_blank')
                                                .attr('href', form_et_link)
                                                )
                                        )
                                .append($('<li class="tzi-paywahl__close">')
                                        .append($('<a title="Ich möchte die taz gerade nicht unterstützen und weiter zum Artikel.">Gerade nicht</a>'))
                                        )
                                .append($('<li class="tzi-paywahl__subscriber">')
                                        .append($('<a title="Ich unterstütze die taz bereits mit einem regelmäßigen Beitrag.">Schon dabei!</a>'))
                                        )
                                .append($('<li class="tzi-paywahl__logo">')
                                        .append($('<a name="zahl ich" title="Infos über die freiwillige Unterstützung">')
                                                .attr('target', '_blank')
                                                .attr('href', '/Infos-ueber-die-freiwillige-Unterstützung/!156925/')
                                                .text('mehr über… ')
                                                // .append($('<span>').text('zahl ich'))
                                                )
                                        )
                                )
                        )
                .appendTo('body');
    	
    	// Tracking for a/b test
        p.trackEvent( 'TZI', 'displayed', 'TZI_LAYER_abTest5,Standard' );
        
        $('.tzi-paywahl__yes', container_fg).click(function () {
            p.trackEvent( 'TZI', 'clicked', 'TZI_LAYER_Ja_abTest5,Standard' );
        });
        
        $(document).on("click", "#tzi-paywahl-fg .ABTestA .tzi-paywahl__close"      ,function(event){  p.trackEvent( 'TZI', 'clicked', 'LAYER-GERADE-NICHT_abTest5,Standard'  ) });
        $(document).on("click", "#tzi-paywahl-fg .ABTestA .tzi-paywahl__subscriber" ,function(event){  p.trackEvent( 'TZI', 'clicked', 'LAYER-SCHON-DABEI_abTest5,Standard'   ) });        

    } else {

    // $.cookie('tzi_AB') == 1
    // different Buttons 

  //  var form_et_link = fullFormURL +"#!formfill:via=" + viaName +",uxB&referrer="+location.pathname;
    var form_et_link = fullFormURL +"#!formfill:via=Layer,abTest5,Redesign&referrer="+location.pathname;


container_fg = $('<div id="tzi-paywahl-fg">')
.append($('<div class="ABTestB">')
        //.append('<img id="tazSticker" alt="" src="/lib/ch/mar05/pix/tzi-sticker/' + Math.floor(Math.random() * 11) + '_150.png" >')

         /*     .append($('<div class="tzi-paywahl__sticker-box">')
                         .append($('<a>')
                                .attr('target', '_blank')
                                .attr('href', form_et_link)
                                .append($('<img style="visibility: hidden" alt="taz tazze" src="/lib/ch/web/pix/tazze_100_d50d2e.png" />'))
                                )
                          ) */
                .append($('<div class="tzi-paywahl__sticker-box">')
                .append($('<a>')
                        .attr('target', '_blank')
                        .attr('href', form_et_link)
                        .append($('<img style="visibility: hidden" alt="taz tazze" src="/lib/ch/web/pix/tazze_100_d50d2e.png" />'))
                        )
                )

        .append( $('<ul class="article ABTestB">')
            .append($('<li class="tzi-paywahl__close">')
                .append($('<a title="Ich möchte die taz gerade nicht unterstützen und weiter zum Artikel.">Gerade nicht</a>'))
             )
        )
        .append(headline)

        .append(brottext)
        //   .append($('<p class="tzi-paywahl__sticker-text">')
        //                 .text('Für ein offenes Internet und freien Zugang zu unabhängigem Journalismus.')
        //                 )
                .append($('<ul class="article">')
                        .append($('<li class="tzi-paywahl__yes">')
                                .append(
                                        $('<a class="hint" title="Ich möchte die taz mit einem regelmäßigen Beitrag unterstützen." tabindex="3"><span class="tzi-shackle__yes">Ja</span>, ich will</a>')
                                        .attr('target', '_blank')
                                        .attr('href', form_et_link)
                                        )
                                )
      /*                   .append($('<li class="tzi-paywahl__close">')
                                .append($('<a title="Wir handeln aus der Überzeugung heraus, dass Worte die Welt verändern können. Deshalb machen wir unsere Inhalte auf taz.de kostenfrei zugänglich. Gerade in Zeiten von Falschmeldungen, Bezahlschranken und Rechtspopulismus müssen Menschen sich unabhängig informieren können. Wenn auch Sie für einen freien, kritischen Journalismus im Netz einstehen wollen, unterstützen Sie uns: Werden Sie Pressefreiheitskämpfer*in!">Gerade nicht</a>'))
                                ) */
                        .append($('<li class="tzi-paywahl__subscriber">')
                                .append($('<a title="Ich unterstütze die taz bereits mit einem regelmäßigen Beitrag.">Schon dabei!</a>'))
                                )
                        .append($('<li class="tzi-paywahl__logo">')
                                .append($('<a name="zahl ich" title="Infos über die freiwillige Unterstützung">')
                                        .attr('target', '_blank')
                                        .attr('href', '/Infos-ueber-die-freiwillige-Unterstützung/!156925/')
                                        .text('')
                                        // .append($('<span>').text('zahl ich'))
                                        )
                                )
                        )
                )
        .appendTo('body');
 
    	// Tracking for a/b test
        p.trackEvent( 'TZI', 'displayed', 'TZI_LAYER_abTest5,Redesign ' );
        
        $('.tzi-paywahl__yes', container_fg).click(function () {
            p.trackEvent( 'TZI', 'clicked', 'TZI_LAYER_Ja_abTest5,Redesign' );
        });
        
        $(document).on("click", "#tzi-paywahl-fg .ABTestB .tzi-paywahl__close"      ,function(event){ p.trackEvent( 'TZI', 'clicked', 'LAYER-GERADE-NICHT_abTest5,Redesign'  ) });
        $(document).on("click", "#tzi-paywahl-fg .ABTestB .tzi-paywahl__subscriber" ,function(event){ p.trackEvent( 'TZI', 'clicked', 'LAYER-SCHON-DABEI_abTest5,Redesign'   ) });        


    	// $("#tzi-paywall-form").submit(function( event ) {
    	// 	  console.log( "Handler for .submit() called." );
    	// 	  event.preventDefault();
    	// 	  generateTargetLink();
    	// 	  window.location.href = form_et_link;
    	// });
    	
    	// $("#tzi-paywall-form input, #tzi-paywall-form select").on('change mouseup', function() {
        // 	generateTargetLink();
        // });
    	
    }
    

    // click handler

    // on click 'jetzt nicht/weiter zum Artikel'
    $('.tzi-paywahl__close', container_fg).click(function () {
        //console.log("DEBUG: tzi-paywahl >Jetzt nicht<");
        patOtaz_de.tzi_track('tzipaywall', '' + artId + '/skip');
        container_fg.fadeOut(500, function () {
            container_bg.fadeOut(400, function () {
                patOtaz_de.layer_tzi_shackle_2016_11({campaign: setup.campaign, delay: 1500});
            });
        });
    });

    // on click 'JA/Ich bin dabei'
    $('.tzi-paywahl__yes', container_fg).click(function () {
        //console.log("DEBUG: tzi-paywahl >JA!<");
        patOtaz_de.tzi_track('tzipaywall', '' + artId + '/yes');
        container_fg.fadeOut(function () {
            container_bg.fadeOut();
        });
    });

    // on click 'bin schon Abonnent/zahle schon regelmäßig'
    $('.tzi-paywahl__subscriber', container_fg).click(function () {
        //console.log("DEBUG: tzi-paywahl >Bin schon Abonnent<");
        patOtaz_de.tzi_track('tzipaywall', '' + artId + '/subscriber');
	var now = new Date();
	var firstOfNextMonth = new Date(now.getFullYear(), now.getMonth()+1, 1);   
        $.cookie('tzi_paywall_payed', 'yes', {domain: 'taz.de', path: '/', expires: firstOfNextMonth });
        container_fg.fadeOut(300, function () {
            container_bg.fadeOut(200, function () {});
        });
        patOtaz_de.layer_tzi_shackle_2016_11();
    });


    // custom layer stuff (see l.xml, item type="layer-design")

// custom design greift nur für die Layer mit der Dachzeile, die in dem Webelement zur Gestaltung des Layers angegeben wurde: 
// hiddenDach == Dachzeile of current Layer
// setup.relationDachzeile == from tzi-layer-design in Seitengestaltung 

var allRelationDachzeilen = setup.relationDachzeile.toLowerCase().replace(/\s/g,'').split(';');

allRelationDachzeilen.forEach(function(current) {


    if ( (current != '' && current == hiddenDach.toLowerCase().replace(/\s/g,'') ) ){
        if (setup.background !== '' )  {        $('#tzi-paywahl-fg').css({'background': setup.background}) }
        if (setup.background !== '' && (/gradient/).test( setup.background ) ) { document.getElementById('tzi-paywahl-fg').style.backgroundImage = setup.background.replace(';','')};
        if (setup.color !== '')                 $('#tzi-paywahl-fg p, #tzi-paywahl-fg p a, .tzi-paywahl__close a, .tzi-paywahl__subscriber a').css('color', setup.color);
        if (setup.h1Color !== '')               $('#tzi-paywahl-fg h1').css('color', setup.h1Color);
        if (setup.yesButtonBackground !== '')   $('#tzi-paywahl-fg >div >ul >li .hint').css('background', setup.yesButtonBackground);
        if (setup.yesButtonColor !== '')        $('#tzi-paywahl-fg >div >ul >li .hint').css('color', setup.yesButtonColor);
        if (setup.yesButton !== '')             $('#tzi-paywahl-fg .tzi-paywahl__yes > a ').text( setup.yesButton);
        if (setup.laterButton !== '')           $('#tzi-paywahl-fg .tzi-paywahl__close > a ').text( setup.laterButton);
        if (setup.contributorButton !== '')     $('#tzi-paywahl-fg .tzi-paywahl__subscriber > a ').text( setup.contributorButton);
        if (setup.src !== '')                   $('#tzi-paywahl-fg .tzi-paywahl__sticker-box >a ').html( '<img class="custom" src="' + setup.src + '"   alt="taz zahl ich" />' );
}
});

}; // patOtaz_de.layer_tzi_paywahl


