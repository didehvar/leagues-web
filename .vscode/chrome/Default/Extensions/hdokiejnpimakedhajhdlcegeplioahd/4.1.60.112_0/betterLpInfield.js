"use strict";function sendRequest(e){if(null!=e)if(e.cmd&&"popupfillinputget"!=e.cmd&&"popupfilliconnumber"!=e.cmd&&L("IF -> BG : cmd="+e.cmd),g_ischrome)try{chrome_runtime_sendMessage(e,function(){})}catch(e){}else g_issafari?safari.self.tab?safari.self.tab.dispatchMessage(e.cmd,e):safari.extension&&safari.extension.globalPage&&safari.extension.globalPage.contentWindow&&safari.extension.globalPage.contentWindow.message_handler({name:e.cmd,message:e,target:window}):g_isfirefoxsdk?(e.messagetype=e.cmd,send_message(e)):g_iscasper&&"function"==typeof t_sendmsg&&t_sendmsg(e)}var g_reference_url="",InfieldIcons={pw:"fa-lock",sn:"fa-sticky-note",address:"fa-address-book",ccDefault:"fa-credit-card-alt",ccAmex:"fa-cc-amex",ccMastercard:"fa-cc-mastercard",ccDiscover:"fa-cc-discover",ccVisa:"fa-cc-visa",ccDiners:"fa-cc-diners-club",ccJcb:"fa-cc-jcb",ba:"fa-bank",dl:"fa-car",pp:"fa-globe",ssn:"fa-balance-scale",insurance:"fa-umbrella",member:"fa-barcode",wifi:"fa-wifi",db:"fa-database",server:"fa-server",ssh:"fa-user-secret",software:"fa-laptop",custom:"fa-puzzle-piece"},advancedOptionsViewed=!1,debounceWait=500,InfieldCommands=function(){function e(e){csTop.LPInfieldFrame.close(e)}function n(e){bg.InfieldCommands.editSite(e,!0)}function t(n){sendRequest({cmd:"autofillaid",aid:n,from_iframe:!0,no_manualfill_on_saveall:!0,fromiframe:1,source:"formv2"}),e("action")}function i(e){bg.InfieldCommands.copyUrl(e,!0)}function o(e){bg.InfieldCommands.copyUserName(e,!0)}function a(e){bg.InfieldCommands.copyPassword(e,!0,"formv2")}function r(e,n){bg.InfieldCommands.copyProp(e,n,!0)}function s(e,n){bg.InfieldCommands.setGeneratePasswordPrefs({prefstr:e,genpwstr:n})}function c(n){bg.InfieldCommands.editFormFill(n,!0,"formv2"),e("action")}function d(n){bg.InfieldCommands.fillForm(n,!0,"formv2"),e("action")}function l(e,n){bg.copytoclipboard(e),h("copypass",{action:n,source:"formv2"})}function p(e){bg.InfieldCommands.getGeneratePasswordPrefs(e)}function u(n,t){bg.InfieldCommands.fillGeneratedPassword(n,t,!0),e("action")}function f(e,n,t){bg.InfieldCommands.searchVaultAll(e,n,t)}function m(e){bg.InfieldCommands.getPopupFillData(e)}function h(e,n){bg.sendLpImprove(e,n)}return{closePopup:e,copyToClipboard:l,editSite:n,fillUsernamePass:t,copyUrl:i,copyUserName:o,copyPassword:a,copyProp:r,editFormFill:c,fillForm:d,getGeneratePrefs:p,writeAllPrefs:s,fillGeneratedPassword:u,searchVault:f,getInitialData:m,sendLPImprove:h}}();!function(e){var n=function(n,t,i){var o=this;o._onResizeCallback=i,n&&(n instanceof jQuery?o._triggerElement=n:o._triggerElement=e("#"+n),t?(o._triggerElement.click(function(e){o.show(),o._setPosition(e)}),o._triggerElement.keypress(function(n){o.show(),e(o._menuElement[0]).children().children()[0].focus(),o._setPosition(n)})):(o._triggerElement.children().click(function(e){o.show()}),o._triggerElement.children().keypress(function(n){o.show(),e(o._menuElement[0]).children().children()[0].focus()})))};n.prototype._setPosition=function(n){var t=e(n.currentTarget).offset();t.top+=20,t.left+=20,this._menuElement.offset(t)},n.prototype.show=function(){e(".dropdown").hide(),e(".menuTriggered").removeClass("menuTriggered");var n=this;n._triggerElement.closest(".tile").addClass("menuTriggered"),n._triggerElement.addClass("menuTriggered"),this._menuElement&&this._menuElement.show(0,function(){n._onResizeCallback&&n._onResizeCallback(n._menuElement.height(),90)})},n.prototype.hide=function(e){var n=this;n._triggerElement.closest(".tile").removeClass("menuTriggered"),n._triggerElement.removeClass("menuTriggered"),n._triggerElement.blur(),this._menuElement&&(this._menuElement.hide(e),n._onResizeCallback(),n._triggerElement.trigger("reset"))},n.prototype.resetTimer=function(e){var n=this;n._menuElement&&(n._menuTimer=setTimeout(function(){n.hide()},e||1e3))},n.prototype.createMenu=function(n,t,i){var o=this;return o._menuElement=e("<div></div>").attr("id",n+"Menu").addClass("dropdown").addClass(t).hide().hover(function(){o._triggerElement.closest(".tile");clearTimeout(o._menuTimer)},function(){o.resetTimer(300)}).append(o._createMenuItems(i)),o._menuElement},n.prototype._createMenuItems=function(n){var t=this;t._menuItems=n;for(var i=e("<ul></ul>").addClass("menuList"),o=0;o<t._menuItems.length;o++){var a=e("<li></li>").attr("data-viewId",t._menuItems[o].id).attr("tabindex","1").click(function(e){t._triggerElement.trigger("reset",["action"]),t.hide(),t.select(e.currentTarget.getAttribute("data-viewId"),!0)}).focus(function(){clearTimeout(t._menuTimer)}).keypress(function(e){t._triggerElement.trigger("reset",["action"]),t.hide(),t.select(e.currentTarget.getAttribute("data-viewId"),!0)}).append(e("<p></p>").text(t._menuItems[o].text));i.append(a)}return i},n.prototype._findMenu=function(n){var t=e.grep(this._menuItems,function(e){return e.id===n});return t&&t.length>0?t[0]:null},n.prototype.select=function(e,n){var t=this._findMenu(e);t&&this._triggerElement&&this._triggerElement.find("p").text(t.selectedText),!0===n&&t&&t.action&&t.action()},window.InfieldMenu=n}(jQuery);var InfieldView=function(e){function n(e){Array.isArray(e)&&e.length>0&&(o=e,i())}function t(n){-1!=o.indexOf(n)&&("generatePassView"!==n?(i(),e(".views").show()):(i(),e("#"+n).show()))}function i(){e(".views").hide(),e("#generatePassView").hide()}var o=[];return{init:n,show:t}}(jQuery),InfieldGeneratePassword=function(e){function n(n,i){e("#moreOptions").click(function(){c(),i&&i()}),e(".iconMoreInfo").hover(function(){e(this).children().fadeIn(200)},function(){e(this).children().fadeOut(100)}),e("#showHistory").click(function(){p(),i&&i()}),e("#lengthInput").on("input",function(){InfieldSearch.debounce(o(e("#lengthInput").val()),debounceWait)}),e("#length").on("input",function(){InfieldSearch.debounce(o(e("#length").val()),debounceWait)}),e(".pwgen").change(t),e("#generateBtn").click(t),e("#pronounceable").click(function(){e("#pronounceable").prop("checked")?(e("#digits").prop("checked",!1),e("#digits").prop("disabled",!0),e("#special").prop("checked",!1),e("#special").prop("disabled",!0),e("#ambig").prop("checked",!1),e("#all").prop("checked",!1),e("#upper").prop("checked",!0),e("#lower").prop("checked",!0)):(e("#digits").prop("checked",!0),e("#digits").prop("disabled",!1),e("#special").prop("checked",!0),e("#special").prop("disabled",!1))}),e("#ambig").click(function(){e("#ambig").prop("checked")&&(e("#pronounceable").prop("checked",!1),e("#all").prop("checked",!1),e("#digits").prop("disabled",!1),e("#special").prop("disabled",!1))}),e("#all").click(function(){e("#all").prop("checked")&&(e("#pronounceable").prop("checked",!1),e("#ambig").prop("checked",!1),e("#digits").prop("checked",!0),e("#special").prop("checked",!0),e("#upper").prop("checked",!0),e("#lower").prop("checked",!0),e("#digits").prop("disabled",!1),e("#special").prop("disabled",!1))}),e("#password").on("copy",function(){bg.LPTabState.setCopiedGeneratedPassword(this.value)}).LP_addGeneratePasswordMeter(!0),e("#btnCopy").click(function(){var t=e("#password").val();n.copyToClipboard(t,"generatepassword"),u(),bg.LPTabState.setCopiedGeneratedPassword(t),e(this).children().fadeIn(1,function(){e(this).fadeOut(1200)})}),e("#clearHistory").bind("click",function(){f()});var a=function(){n.fillGeneratedPassword(e("#password").val(),{pronounceable:e("#pronounceable").prop("checked"),length:e("#password").val().length,expand:advancedOptionsViewed,uppercase:e("#upper").prop("checked"),lowercase:e("#lower").prop("checked"),numeric:e("#digits").prop("checked"),special:e("#special").prop("checked"),avoidAmbiguous:e("#ambig").prop("checked"),passwordType:s(),source:"formv2",variation:"new",generatedPasswordCount:e("#generatedPasswordCount").val()}),y[Object.keys(y).length]=e("#password").val(),n.writeAllPrefs(JSON.stringify({generate_allcombos:e("#all").prop("checked")?1:0,generate_pronounceable:e("#pronounceable").prop("checked")?1:0,generate_length:e("#length").val(),generate_upper:e("#upper").prop("checked")?1:0,generate_lower:e("#lower").prop("checked")?1:0,generate_digits:e("#digits").prop("checked")?1:0,generate_special:e("#special").prop("checked")?1:0,generate_ambig:e("#ambig").prop("checked")?1:0,generate_mindigits:2,generate_reqevery:0}),LPJSON.stringify(y))};e("#fillPasswordBtn").click(a),e("#generateAndFillBtn").click(a),e("#generateAndFillBtn").keypress(a),g(),e("#password").on("change paste keyup",function(e){g()}),e("#advancedView").hide(),e("#generateBtnContainer").hide(),e("#history").hide(),e("#clearHistory").hide()}function t(){m(),e("#generatedPasswordCount").val(function(){return parseInt(e("#generatedPasswordCount").val())+1});var n=lpCreatePass(e("#length").val(),e("#upper").prop("checked"),e("#lower").prop("checked"),e("#digits").prop("checked"),e("#special").prop("checked"),2,e("#ambig").prop("checked"),e("#all").prop("checked"),e("#pronounceable").prop("checked"));e("#password").val(n).change()}function i(n){y=LPJSON.parse(n.genpwstr);var t=JSON.parse(n.prefstr);e("#length").val(parseInt(t.generate_length)),e("#upper").prop("checked",!!parseInt(t.generate_upper)),e("#lower").prop("checked",!!parseInt(t.generate_lower)),e("#digits").prop("checked",!!parseInt(t.generate_digits)),e("#special").prop("checked",!!parseInt(t.generate_special)),e("#ambig").prop("checked",!!parseInt(t.generate_ambig)),e("#all").prop("checked",!!parseInt(t.generate_allcombos)),e("#advancedView").hide(),e("#generateAndFillView").show(),parseInt(t.generate_pronounceable)?a():e("#pronounceable").prop("pronounceable",!1),e("#ambig").prop("checked")||e("#pronounceable").prop("checked")||r(),o(parseInt(parseInt(t.generate_length))?parseInt(t.generate_length):10),u(),e("#password").val(lpCreatePass(e("#length").val(),e("#upper").prop("checked"),e("#lower").prop("checked"),e("#digits").prop("checked"),e("#special").prop("checked"),2,e("#ambig").prop("checked"),e("#all").prop("checked"),e("#pronounceable").prop("checked"))).change()}function o(n){n>99&&(n=99),e("#length").val(n),e("#sliderFill").width(n+"%"),e("#lengthInput").val(n)}function a(){e("#pronounceable").prop("checked")||e("#pronounceable").prop("checked",!0),e("#digits").prop("checked",!1),e("#digits").prop("disabled",!0),e("#special").prop("checked",!1),e("#special").prop("disabled",!0),e("#upper").prop("checked",!0),e("#lower").prop("checked",!0)}function r(){e("#all").prop("checked")||e("#all").prop("checked",!0),e("#digits").prop("disabled",!1),e("#special").prop("disabled",!1),e("#upper").prop("checked",!0),e("#lower").prop("checked",!0)}function s(){return e("#ambig").prop("checked")?"ambig":e("#pronounceable").prop("checked")?"pronounceable":"all"}function c(){advancedOptionsViewed=!0,e("#advancedView").toggle(),e("#generateBtnContainer").toggle(),e("#moreOptions").html("Show Options"==e("#moreOptions").text()?"Hide Options":"Show Options")}function d(){e("#moreOptions").show(),e("#fillPasswordBtn").show(),e("#generateBtnContainer").hide()}function l(){e("#moreOptions").hide(),e("#fillPasswordBtn").hide(),e("#generateBtnContainer").hide()}function p(){"Show History"==e("#showHistory").text()?(e("#showHistory").html("Hide History"),e("#advanced-features").hide(),e("#history").show(),e("#clearHistory").show(),InfieldCommands.sendLPImprove("historyviewed",{source:"formv2"})):(e("#showHistory").html("Show History"),e("#advanced-features").show(),e("#history").hide(),e("#clearHistory").hide())}function u(){e("#historyBody").empty();var n=bg.get("g_genpws")||[];if(0===n.length)e("#historyTable").hide(),e("#historyEmptyState").show();else{e("#historyTable").show(),e("#historyEmptyState").hide();for(var t=e("#historyBody"),i=0;i<n.length;i++){var o=LPTools.createElement("tr"),a=LPTools.createElement("td","",n[i]),r=LPTools.createElement("td","",h());o.appendChild(a),o.appendChild(r),t.append(o)}}}function f(){e("#historyBody").empty(),bg.set("g_genpws",[]),e("#historyTable").hide(),e("#historyEmptyState").show(),InfieldCommands.sendLPImprove("historycleared",{source:"formv2"})}function m(){var n=e("#password").val();if(n&&n.length>0){var t=bg.get("g_genpws")||[];t.unshift(n),t.length>20&&t.splice(20,t.length-20),bg.set("g_genpws",t),u()}}function h(){var e=new Date,n=("0"+e.getMinutes()).slice(-2),t=e.getHours(),i=e.getHours()<12?"AM":"PM";t=t>12?t-12:t,t=0===t?12:t;var o=e.getDate();return e.toLocaleString("en-us",{month:"long"})+" "+o+", "+e.getFullYear()+" at "+t+":"+n+" "+i}function g(){e("#password").val().length>0?e("#fillPasswordBtn").removeAttr("disabled"):e("#fillPasswordBtn").attr("disabled","disabled")}var y={};return{init:n,setup:i,show:d,hide:l}}(jQuery),InfieldTiles=function(e,n,t,i){function o(t,o,r,s,l,p){d=l;var u=[];if(e("#menuContainer").empty(),e("#"+t).empty().append(e('<p class="italic"></p>').text(p)),r){var f=[],m=e.map(r,function(e,n){return e&&e.language&&e.language.length>1&&-1===f.indexOf(e.language.substr(0,2))&&f.push(e.language.substr(0,2)),e});m.sort(function(e,n){return e.name.localeCompare(n.name)}),e.each(m,function(e,t){var r=!1;e+1===m.length&&(r=!0);var d=c(o,{id:t.aid||t.ffid,name:"sites"===o?t.name:t.decprofilename,description:"sites"===o?t.unencryptedUsername:null!==t.description?t.description:null,icons:a(s,o,t),noteType:t.notetype,moreText:"sites"===o?i.translateString("More"):i.translateString("Edit"),language:f.length>1?t.language.substr(0,2):null,moreHandler:"sites"===o?null:function(){n.editFormFill(t.aid||t.ffid)},clickHandler:"sites"===o?function(){csTop.Topics.publish(Topics.INFIELD_NOTIFICATION_FILLED),n.fillUsernamePass(t.aid)}:function(){n.fillForm(t.aid||t.ffid)},lastTile:r});d&&u.push(d)}),u.length>0?e("#"+t).empty().append(u):"sites"==o&&e("#"+t).empty().append(e('<p class="italic"></p>').text(p))}return u.length}function a(t,i,o){var a="",s="";if("formfills"===i)if(0==o.profiletype)a=InfieldIcons.profile;else switch(o.notetype){case"Credit Card":a=r(o.ccType);break;case"Bank Account":a=InfieldIcons.ba;break;case"Social Security":a=InfieldIcons.ssn;break;case"Address":a=InfieldIcons.address;break;default:a=InfieldIcons.pw}else s="icon-site",t&&o.aid&&t[o.aid]?a=t[o.aid]:(a=InfieldIcons.pw,n.sendLPImprove("iconnotfound",{domain:o.tld}));var c;return c=0!=o.profiletype&&"formfills"===i?e("<span/>").addClass("omarImgIcon fa fa-fw fa-2x "+a).attr("aria-hidden","true"):a==InfieldIcons.pw?e("<span/>").addClass("omarImgIcon fa fa-fw fa-2x "+a).attr("aria-hidden","true"):e("<img/>").attr("src",a).addClass("icon-default omarImgIcon "+s),{normalEl:c}}function r(e){if(!e||!e.length)return InfieldIcons.ccDefault;switch(e){case"AMEX":return InfieldIcons.ccAmex;case"MC":return InfieldIcons.ccMastercard;case"DISC":return InfieldIcons.ccDiscover;case"VISA":return InfieldIcons.ccVisa;case"DINERS":return InfieldIcons.ccDiners;case"JCB":return InfieldIcons.ccJcb;case"GENERIC":default:return InfieldIcons.ccDefault}}function s(n){return e(m).addClass("col-2 cardIcon no-left-gutter no-right-gutter").append(e(m).addClass("icon").append(n))}function c(i,o){if(!o)return null;var a=null,r=null,c=null,h=e(m).addClass("col-10 cardBody"),g=e(m).addClass("cardInside"),y=e(m).addClass("fa-lg fa-stack"),w=e("<i></i>").addClass("fa fa-clone").attr("aria-hidden","true"),v=e(m).addClass("fa fa-caret-down fa-stack-1x fontAwesomeIcon").attr("aria-hidden","true"),b=e(m).addClass("fa fa-circle fa-stack-1x circle");b.append(v),y.append(w),y.append(b);var C=e("<i></i>").addClass("fa fa-pencil fa-lg").attr("aria-hidden","true"),I=e(m).attr("id",o.id+"copyBtn").attr("tabindex","1").addClass("copyAction").append(y),k=e(m).attr("id",o.id+"editBtn").attr("tabindex","2").addClass("editAction").append(C);c=e(m).addClass("cardMainAction").text(f),h.hover(function(){c.addClass(l),g.addClass(l)},function(){c.removeClass(l),g.removeClass(l)}),g.append(e(m).addClass("cardPrimary").text(o.name+(o.language?" ("+o.language+")":""))),g.append(e(m).addClass("cardSecondary").text(o.description||String.fromCharCode(160))),h.append(c),h.append(g);var _=e(m).addClass("col-2 cardActions no-right-gutter no-left-gutter").append(I,k);a=new t(I,!0,d),_.hover(function(){_._timer&&clearTimeout(_._timer)},function(){_._timer=setTimeout(function(){a.hide()},300)});var P=[];bg.InfieldCommands.canCopy(function(t){t&&("sites"===i?(P.push({id:"copyPassword",text:"Copy password",action:function(){n.copyPassword(o.id)}}),P.push({id:"copyUsername",text:"Copy username",action:function(){n.copyUserName(o.id)}}),P.push({id:"copyURL",text:"Copy URL",action:function(){n.copyUrl(o.id)}})):"Credit Card"===o.noteType?(P.push({id:"copyCardNum",text:"Copy card number",action:function(){n.copyProp(o.id,"Number")}}),P.push({id:"copySecurityCode",text:"Copy security code",action:function(){n.copyProp(o.id,"Security Code")}})):"Bank Account"===o.noteType?(P.push({id:"copyAccountNum",text:"Copy account number",action:function(){n.copyProp(o.id,"Account Number")}}),P.push({id:"copyRoutingNum",text:"Copy routing number",action:function(){n.copyProp(o.id,"Routing Number")}})):"Social Security"===o.noteType?P.push({id:"copySSN",text:"Copy SSN",action:function(){n.copyProp(o.id,"Number")}}):"Address"===o.noteType&&(P.push({id:"copyFirstName",text:"Copy first name",action:function(){n.copyProp(o.id,"First Name")}}),P.push({id:"copyLastName",text:"Copy last name",action:function(){n.copyProp(o.id,"Last Name")}}),P.push({id:"copyAddressFirst",text:"Copy address 1",action:function(){n.copyProp(o.id,"Address 1")}}),P.push({id:"copyCity",text:"Copy city/town",action:function(){n.copyProp(o.id,"City / Town")}}),P.push({id:"copyZip",text:"Copy zip/postal code",action:function(){n.copyProp(o.id,"Zip / Postal Code")}}),P.push({id:"copyEmail",text:"Copy email address",action:function(){n.copyProp(o.id,"Email Address")}}),P.push({id:"copyPhone",text:"Copy phone number",action:function(){n.copyProp(o.id,"Phone")}}))),r=a.createMenu("copy","tileDropdown",P),r.hover(function(){_._timer&&clearTimeout(_._timer)},function(){_._timer&&(_._timer=setTimeout(function(){a.hide()},300))}),e("#menuContainer").append(r)}),I.click(function(e){e.stopPropagation(),a.show()}),k.click(function(e){e.stopPropagation(),"sites"===i?n.editSite(o.id):"formfills"===i&&n.editFormFill(o.id)}),I.bind("reset",function(e,n){E.removeClass("triggered"),!n&&h.hasClass(l)||(w.removeClass(l),b.removeClass(l)),c&&(c.text(f),g.hasClass(l)||c.removeClass(l))}),I.hover(function(e){r.is(":visible")||(w.addClass(l),b.addClass(l),c&&(c.text(p),c.addClass(l)))},function(){r.is(":visible")||I.hasClass("menuTriggered")||(w.removeClass(l),b.removeClass(l),c&&(c.text(f),h.hasClass(l)||c.removeClass(l)))}),k.hover(function(e){r.is(":visible")||(C.addClass(l),c&&(c.text(u),c.addClass(l)))},function(){r.is(":visible")||(C.removeClass(l),c&&(c.text(f),c.removeClass(l)))}),new MutationObserver(function(e){e.forEach(function(e){if("class"==e.attributeName&&!e.target.classList.contains("menuTriggered")){e.target.children[0].firstChild.classList.contains("hovered")&&(w.removeClass(l),b.removeClass(l))}})}).observe(I[0],{attributes:!0,childList:!0});var T=s([o.icons.normalEl]),E=e(m).addClass("cardContainer col-12").attr("id",o.id).attr("tabindex","1").append(e(m).addClass("omarCard").append(T,h,_)).hover(function(){_.addClass(l),h.addClass(l)},function(){I.hasClass("menuTriggered")||(E.removeClass("triggered"),_.removeClass(l),h.removeClass(l),g.removeClass(l),c&&c.removeClass(l))});return E.click(o.clickHandler),o.lastTile&&E.addClass("lastTile"),e(".copyAction",".editAction").focus(function(){E.addClass("triggered")}).blur(function(){E.removeClass("triggered")}).click(function(){E.addClass("menuTriggered"),E.removeClass("triggered")}),E}var d,l="hovered",p="Copy...",u="Edit",f="Fill",m="<div></div>";return{setup:o}}(jQuery,InfieldCommands,InfieldMenu,Strings),InfieldSearch=function(e){function n(n){if(l=e("#searchContainer"),p=e("#inlineSearch"),u=e("#searchCloseBtn"),f=e("#searchBtn"),d=e("#headerMain"),a(),e("#searchBtn").click(function(){e(this).hasClass("search")&&i()}).keypress(function(){e(this).hasClass("search")&&i()}),e("#searchCloseBtn").click(function(){o(),n("")}).keypress(function(){o(),n("")}),n){var r=t(function(t){n(e(t.currentTarget).val())},debounceWait);p.keyup(r)}e("#inlineSearch").focus(function(){e(".searchBar").addClass("hoverOver").fadeIn(100)}),e("#inlineSearch").focusout(function(){e(".searchBar").removeClass("hoverOver")})}function t(e,n){var t;return function(){var i=this,o=arguments;clearTimeout(t),t=setTimeout(function(){t=null,e.apply(i,o)},n)}}function i(){l.show(),d.hide(),l.animate({},m,function(){u.show(),p.fadeIn().focus()}),f.addClass("searchBtnActive")}function o(){l.hide(),d.show(),l.animate({},m,function(){u.hide(),p.fadeOut()}),p.val(""),f.removeClass("searchBtnActive")}function a(){l.hide(),f.removeClass("searchBtnActive")}function r(){l.show()}function s(){p.hide(),u.hide(),l.hide()}function c(e){e&&!0===e?r():s()}var d,l,p,u,f,m=250;return{init:n,debounce:t,showIcon:r,hideIcon:s,display:c}}(jQuery),lpInfield=function(e,n,t,i,o,a,r,s,c){function d(){document.addEventListener("DOMContentLoaded",function(){f(function(){c.translate(document.body),l(),u(),i.init(["sitesView","formFillView","generatePassView"]),a.init(m),r.init(n,g),new MutationObserver(function(){g()}).observe(e(".infield-dialog")[0],{subtree:!0,childList:!0}),n.getInitialData(v)})})}function l(){C=new s({$parentEl:e(".infield-dialog")}),p({position:360})}function p(n){C&&n&&n.position&&e.isNumeric(n.position)&&n.position>10&&n.position<370&&C.show("top",n.position)}function u(){e("#btnClose").click(function(){n.closePopup("close")}),e("#btnClose").keypress(function(){n.closePopup("close")})}function f(e){var n=document.createElement("iframe");n.setAttribute("class","backgroundFrame"),n.src="backgroundFrame.html",n.style.display="none",n.addEventListener("load",function(){n.contentWindow.LPPlatform.getBackgroundInterface({mainRequestFramework:!1,interfaceDefinition:Interfaces.InfieldPopupInterface,context:"infieldPopup",callback:function(n){window.bg=n,e&&e()}}),n.contentWindow.Topics.get(n.contentWindow.Topics.REQUEST_FRAMEWORK_INITIALIZED).subscribe(function(e,n){var t=parseInt(e.topFrameID);window.csTop=Interfaces.createInstance(Interfaces.ContentScriptInterface,{direct:!1,context:"infieldPopup",requestFunction:function(e){n.sendRequest({type:"contentScriptRequest",data:e,frameID:t})}}),window.csTop.LPFrame.initializeRequestFramework(LPTools.getURLParams().dialogID)})}),document.body.appendChild(n)}function m(e){n.searchVault(e,b.type,h)}function h(e){b.type;if(e){var n=JSON.parse(e);n&&(o.setup("sitesView","sites",n.sites,n.bigicons,g,k),o.setup("formFillView","formfills",n.formfills,null,g,P))}}function g(n,t){var i=e(".infield-dialog").outerHeight()+20,o=e(".infield-dialog").outerWidth()+10;n&&e.isNumeric(n)&&(i+=n),t&&e.isNumeric(t)&&(o+=t),csTop.LPInfieldFrame.resizeFrame(i,o)}function y(e){var n=JSON.parse(e.fillData.sites),t=e.fillData.bigIcons?JSON.parse(e.fillData.bigIcons):null;o.setup("sitesView","sites",n,t,g,I);var a=e.fillData.formFills?JSON.parse(e.fillData.formFills):{};o.setup("formFillView","formfills",a,null,g,_),i.show("formFillView"),r.hide()}function w(){i.show("generatePassView"),n.getGeneratePrefs(r.setup),r.show()}function v(t){if(!t)return void n.closePopup("close");if(b=t,t.type)switch(t.type){case"generate":w(),a.display(!1);break;case"formfills":e(".lblSites").insertAfter("#formFillView"),e("#sitesView").insertAfter(".lblSites");default:y(t)}e("#searchBtn").click(function(){y(t),g()}).keypress(function(){y(t),g()}),e("#generatePassInfieldIconInfield").click(function(){w()}).keypress(function(){w()}),csTop.LPInfieldFrame.positionFrame(function(e){csTop.Topics.publish(Topics.INFIELD_NOTIFICATION_OPENED,e)}),csTop.LPInfieldFrame.show(),e(".infield-dialog").show()}var b,C,I=c.translateString("No passwords found for this site."),k=c.translateString("No passwords found for this site."),_=c.translateString("Nothing in your vault to fill on this site."),P=c.translateString("Nothing in your vault to fill on this site.");return{init:d,setArrowPosition:p}}(jQuery,InfieldCommands,InfieldMenu,InfieldView,InfieldTiles,InfieldSearch,InfieldGeneratePassword,lpArrow,Strings);lpInfield&&lpInfield.init();