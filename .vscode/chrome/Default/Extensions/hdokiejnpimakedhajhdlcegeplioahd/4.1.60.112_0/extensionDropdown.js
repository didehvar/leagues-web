ExtensionDropdown=function(e){var t=$(e.body),n=e.getElementById("items"),o=e.getElementById("searchResults"),i=e.getElementById("recentSites"),a=e.getElementById("identitiesMenuItem"),l=e.getElementById("matchingSitesTopLevel"),r=e.getElementById("matchingSites"),s=e.getElementById("addCustomItems"),c=$("#topLevelContainer"),u=$("#vaultMenuItem"),d=$("#addOmariaItems"),p=$("#allItems"),m=$("#groupLabel"),g=$("#backButton"),f=$("#debugconsole"),b=$("#encryptedExportMenuItem"),v=$("#wifiExportMenuItem"),P=$("#matchingSitesMenuItem"),h=$("#recentSitesMenuItem"),I=$("#container"),y=$("#searchInput"),L=$("#applicationsMenuItem"),_=null,S=function(){var e=null,t=null;return function(){var n=I.outerHeight(),o=I.outerWidth();n===e&&o===t||(e=n,t=o,LPPlatform.setDropdownPopoverSize(n,o))}}(),T=null,C=null,E=null,w=null,M=null,x=null,k=null,D=null,A=null,O=null,N=!1,F=!1,B=!1,R=!1,H={},K=null,V={},G=[],z={},U=function(e){if(m.empty(),e){var t=e.getName();t=t.replace(/\\/g," \\ ");var n=t.indexOf("\\",t.length/2);if(-1===n&&(n=t.lastIndexOf("\\")),n>0){var o=LPTools.createElement("div","textOverflowContainer groupLabel");o.appendChild(LPTools.createElement("span",null,t.substring(0,n))),m.append(LPTools.createElement("span","textTail"," "+t.substring(n))),m.append(o),LPTools.setupMiddleEllipsis(m)}else m.append(LPTools.createElement("span","groupLabel",t));m.find(".groupLabel").attr("title",e.toString())}};z.GroupState=function(e){var t=LPTools.getNavIndex();this.pop=function(){e.rebuildItems(),LPTools.setNavIndex(t),U(e._model)}},z.SearchState=function(){var e=new z.CSSState("searchItem",{restoreKeyboardNav:!1});this.pop=function(){re(),e.pop()}},z.TopLevelMatchingSitesState=function(e){var t=new z.CSSState("matchingSites"),n=new z.GroupState(e);this.pop=function(){n.pop(),t.pop()}},z.CSSState=function(){var e=t.attr("class"),n=function(n){t.removeClass(e),t.addClass(n),e=n};return function(t,o){var i=e;n(t),LPTools.getOption(o,"applyKeyboardNav",!0)&&LPTools.addKeyBoardNavigation($(".extensionMenuItem:visible"),{selectFirst:!0}),this.pop=function(){U(null),n(i),LPTools.getOption(o,"restoreKeyboardNav",!0)&&LPTools.addKeyBoardNavigation($(".extensionMenuItem:visible")),o&&"function"==typeof o.onPop&&o.onPop()}}}();var j=function(){LPTools.parseUserSpecificMenu(e.getElementById("mainMenu"),LPProxy.getAccountClass()),$("#username").text(bg.get("g_username"))},W=function(){var e=bg.get("LPContentScriptFeatures").ziggy,t=bg.get("LPContentScriptFeatures").omaria;_={isZiggySet:e,isOmarSet:t,showHelpText:e};var n=function(){Y(),te(),ae(_),j(),setTimeout(function(){J(_,0)}),e||($("#mainMenu").addClass("showIcons"),Z()),bg.sendLpImprove("openicondropdown")},o=LPPlatform.getExtensionDropdownDelay();o>=0?setTimeout(n,o):n()},Y=function(){I.addClass("loading")},Z=function(){S(),I.addClass("initialized"),LPTools.addKeyBoardNavigation($(".extensionMenuItem:visible")),y.focus()},q=function(){LPFeatures.updateFeatures({import:!0,noexport:!1,show_notes:!0,hideidentities:!1,show_formfills:!0})},J=function(e){LPProxy.initializeModel(),ne(e),X(e),F=!0,I.removeClass("loading");for(var t in V)V[t]();var n=y.val();n&&se(n)},Q=function(e,t){var t=t||{};return LPProxy.getPreference("showAcctsInGroups",!0)&&(e=LPProxy.assignItemsToGroups(e,!1),t.separateFavorites=!0),new Container(e,t)},X=function(e){e.isOmarSet?(E=new Container(LPProxy.getAllItems(),$.extend({},e,{omarItems:!0,trackAction:!0})),E.setElement(n),O=new Container(LPProxy.getCustomNoteTemplates().map(function(e){return new AddCustomItemDisplay(e)}),$.extend({},e,{additionalItemClasses:"addOmariaItem",autoExpandSingleItem:!1,value:"Custom"})),ee(O.getItemCount())):(w=Q(LPProxy.getSites(),e),w.setElement(n),M=Q(LPProxy.getNotes(),e),M.setElement(n),x=new Container(LPProxy.getFormFills(),e),x.setElement(n),k=new Container(LPProxy.getApplications(),e),k.setElement(n)),A=new Container(LPProxy.getAllItems(),$.extend({},e,{moreOptionsState:z.SearchState}))},ee=function(e){var t=LPProxy.getRecordConfig(),o=LPProxy.getAllModelTypes();t.viewConfig.forEach(function(n){if(n.forEach(function(n){if("all"!==n){var i=LPProxy.getConfigViewObject(n);i.types.forEach(function(n){var a=LPProxy.getConfigTypeObject(n);if(i.default||o.includes(a.recordType)){var l=LPTools.createElement("li",{class:"extensionMenuItem omariaItem",value:a.recordType,childview:"omariaItems"},i.name),r=LPTools.createElement("div","more"),s=LPTools.createElement("i",t.icons[a.id]+" menuIcon");l.appendChild(s),l.appendChild(r),p.append(l)}var c=null;if("Custom"===a.recordType){if(e>0){c=LPTools.createElement("li",{class:"extensionMenuItem addOmariaItem",value:a.recordType,childview:"addCustomItems"},a.name);var u=LPTools.createElement("div","more");c.appendChild(u)}}else c=LPTools.createElement("li",{class:"extensionMenuItem addOmariaItem",value:a.recordType},a.name);if(c){var m=LPTools.createElement("i",t.icons[a.id]+" menuIcon");c.appendChild(m),d.append(c)}})}}),n!==t.viewConfig[0]){if(!p[0].lastChild.classList.contains("omarSpacer")){var i=LPTools.createElement("li","omarSpacer");p.append(i)}var a=LPTools.createElement("li","omarSpacer");d.append(a)}});var i=LPTools.createElement("li",{class:"extensionMenuItem addOmariaItem",value:"saveAll"},Strings.translateString("Save All Entered Data"));d.append(i),$(".omariaItem").bind("click",function(e){var t=e.target.getAttribute("value");switch(Pe(pe(e.target)),de(e),E._buildOptions.currentType=t,E.rebuildItems(n),t){case"Account":Se(E,"Empty_Site_Omaria",Strings.translateString("You can save and fill usernames and passwords for any website or app."),Strings.translateString("Add a password"),t);break;case"Generic":Se(E,"Empty_Note_Omaria",Strings.translateString("Use a secure note to save important documents in your LastPass vault."),Strings.translateString("Add a secure note"),t);break;case"Address":Se(E,"Empty_Address_Omaria",Strings.translateString("Add an address to auto-fill your email, phone number, and other contact info."),Strings.translateString("Add an address"),t);break;case"Credit Card":Se(E,"Empty_Credit_Card_Omaria",Strings.translateString("Next time you go shopping, they'll be waiting!"),Strings.translateString("Add a payment card"),t);break;case"Bank Account":Se(E,"Empty_Bank_Account_Omaria",Strings.translateString("Save and fill your bank accounts securely on any device with LastPass."),Strings.translateString("Add a bank account"),t)}}),$('.addOmariaItem:not([value="Custom"]):not([value="saveAll"])').bind("click",function(e){bg.get_selected_tab_data_no_extension(null,function(t){bg.lpevent("m_add");var n=e.target.getAttribute("value");"Account"===n?ge({defaultData:{url:t?t.url:""}}):fe({defaultData:{notetype:n}}),LPPlatform.closePopup()}),e.stopPropagation()}),$('.addOmariaItem[value="Custom"]').bind("click",function(e){Pe(pe(e.target)),de(e),O.rebuildItems(s)}),$('.addOmariaItem[value="saveAll"]').bind("click",function(){bg.lpevent("m_saed"),bg.get_selected_tab_data(null,function(e){bg.sendLpImprove("save_all_entered_data",{domain:bg.lp_gettld_url(e.url)})}),bg.saveall()})},te=function(){f.LP_removeAttr("style"),b.LP_removeAttr("style"),v.LP_removeAttr("style"),L.LP_removeAttr("style"),bg.is_user_debug_enabled()&&f.show(),bg.have_binary()&&(b.show(),bg.LPPlatform.isWin()&&v.show()),LPTools.hasProperties(bg.get("g_applications"))&&L.show()},ne=function(t){if(t.isOmarSet&&(a=e.getElementById("omarIdentitiesMenuItem")),C=LPProxy.getIdentities(),LPProxy.enableCurrentIdentity(C),C.length>0){ce(T);for(var n=[],o=0,i=C.length;o<i;++o)n.push(C[o].newDisplayObject());new IdentityContainer(n,t).initialize(e.getElementById("identities"))}else $(a).hide()},oe=function(e){return!0===H[e]},ie=function(e,t,n){var o,i,a=function(e){var t=bg.lpmdec(e.extra,!0),n=/Language:(.+)/.exec(t);return n&&n.length>1?n[1].substr(0,2):"en"},l=[],r=[];for(o=0,i=K.length;o<i;++o){var s=LPProxy.getNoteModel(K[o].aid);if(s){var c=a(s._data);-1===r.indexOf(c)&&r.push(c)}}for(o=0,i=K.length;o<i;++o){var u=K[o].aid;if("account"===K[o].type)l.push(new MatchingAccountDisplay(LPProxy.getSiteModel(u)));else if("note"===K[o].type){var d=LPProxy.getNoteModel(u);l.push(new MatchingNoteDisplay(d,r.length>1?a(d._data):null))}}var p=new Container(l,t);p.setElement(e),p.rebuildItems()},ae=function(t){K=bg.getmatchingsites(!1,!0,!1);for(var n=0,o=K.length;n<o;++n)H[K[n].aid]=!0;t.isZiggySet||LPProxy.getPreference("toplevelmatchingsites",!1)?(h.addClass("divider"),u.addClass("divider"),c.removeClass("hidden"),K.length>2?u.addClass("topLevelMatchesShadow"):(u.removeClass("topLevelMatchesShadow"),0===K.length&&(u.removeClass("divider"),c.addClass("hidden"))),ue("topLevelMatchingSites",function(){ie(l,$.extend({},t,{autoExpandSingleItem:!1,moreOptionsElement:e.getElementById("matchingSites"),moreOptionsState:z.TopLevelMatchingSitesState,addLastClass:!1,trackAction:!0,sortFunction:VaultItemBaseDisplay.prototype.sortOmarMatchingItems})),Z()})()):(0===K.length?P.LP_removeAttr("style"):(P.show(),$("#matchingSiteCounter").text(K.length)),u.removeClass("divider"),u.removeClass("topLevelMatchesShadow"),c.addClass("hidden"))},le=function(){var e=bg.getClearRecentTime(),t=bg.Preferences.get("recentUsedCount"),n=null;n=bg.get("LPContentScriptFeatures").omaria?E.getItemChildren():w.getItemChildren().concat(M.getItemChildren()),n.sort(VaultItemBaseDisplay.prototype.sortByMostRecent);for(var o=[],a=0,l=n.length;a<l&&a<t;++a){var r=n[a];r.getLastTouchValue()>=e&&o.push(r._model.newDisplayObject())}if(o.length>0){new Container(o,$.extend({},_,{sortFunction:VaultItemBaseDisplay.prototype.sortByMostRecent})).initialize(i)}else ve(i)},re=function(){LPTools.removeDOMChildren(o);for(var e=0,t=D.length;e<t;++e){var n=D[e],i=n.build(_);n.postBuild(i),o.appendChild(i)}if(0===D.length){var a=LPTools.buildEmptyPlaceholder(Strings.translateString("No Matching Results"),"extensionSearchPlaceholder",o);o.appendChild(a)}LPTools.addKeyBoardNavigation(o.children,{rightArrowSelector:".moreItem",selectFirst:!0})},se=function(){var e=null;return function(t){t.length>0?(F&&(D=A.getSearchResultItems(t),re()),N||(Pe("search",{applyKeyboardNav:!1,onPop:function(){y.val("")}}),N=!0,bg.sendLpImprove("search",{source:"icon"}))):e&&e.length>0&&(he(),N=!1),e=t}}(),ce=function(t){var n=Strings.translateString("Identities")+" ("+t.getName()+")",o=a.firstChild;3!==o.nodeType?(o=e.createTextNode(n),a.insertBefore(o,a.firstChild)):o.textContent=n},ue=function(e,t){return function(){F?t():V[e]=t}},de=function(e){e&&(e.stopPropagation(),e.preventDefault())},pe=function(e){for(var t=null;null!==e&&null===(t=e.getAttribute("childview"));)e=e.parentElement;return t},me=function(e){return e||(e={}),e.saveOptions={source:"icon"},e},ge=function(e){bg.LPPlatform.openTabDialog("site",me(e))},fe=function(e){bg.LPPlatform.openTabDialog("note",me(e))},be=function(e){bg.LPPlatform.openTabDialog("formFill",me(e))},ve=function(e){e.appendChild(LPTools.createElement("li","extensionMenuItem none","None Available"))},Pe=function(e,t){G.push(new z.CSSState(e,t))},he=function(){var e=G.pop();e&&e.pop()},Ie=dialogs.generatePassword,ye=function(){Ie.getDialog().close(),g.unbind("click",ye)},Le=null,_e=function(){!0===bg.get("LPContentScriptFeatures").better_generate_password_enabled&&(Ie=dialogs.betterGeneratePassword),Ie.open({preSetup:function(e){if(null===Le){var t=Ie.parentElementID,n=e.options.hideHeader,o=e.dynamicHeight;Le=function(){Ie.parentElementID=t,e.options.hideHeader=n,e.useDynamicHeignt(o)}}Ie.parentElementID="extensionDropdownGeneratePassword",e.options.hideHeader=!0,e.useDynamicHeignt(!1)},onClose:function(){he()},onCopy:function(){LPPlatform.closePopup(!0)},saveOptions:{source:"icon"}}),g.unbind("click",ye),g.bind("click",ye)},Se=function(e,t,n,o,i){if(i=i||"Generic",e.isEmpty()){var a=LPTools.createElement("div","emptyView");a.appendChild(LPTools.createElement("img",{src:"images/vault_4.0/"+t+".png",class:"emptyViewIcon"})),a.appendChild(LPTools.createElement("h1","emptyViewText",n));var l=LPTools.createElement("input",{class:"addItem rbtn",type:"button",value:o,"data-type":i});l.appendChild(LPTools.createElement("i","fa fa-trash")),a.appendChild(l),l.addEventListener("click",function(e){bg.get_selected_tab_data_no_extension(null,function(t){bg.lpevent("m_add");var n=e.target.dataset.type;"Account"===n?ge({defaultData:{url:t?t.url:""}}):fe({defaultData:{notetype:n}}),LPPlatform.closePopup()}),e.stopPropagation()}),LPTools.addKeyBoardNavigation($(l),{selectFirst:!0}),document.getElementById("items").appendChild(a)}},Te=function(e,t,n){if(e.isEmpty()){var o=LPTools.createElement("div","emptyView");o.appendChild(LPTools.createElement("img",{src:"images/vault_4.0/"+t,class:"emptyViewIcon"})),o.appendChild(LPTools.createElement("h1","emptyViewText",n)),document.getElementById("items").appendChild(o)}};y.LP_addSearchHandlers("inputDialog",function(e){se(e)}),g.bind("click",he),$("[childview]").bind("click",function(e){Pe(pe(e.target)),de(e)}),$("#addSite").bind("click",function(e){bg.get_selected_tab_data_no_extension(null,function(e){bg.lpevent("m_add"),ge({defaultData:{url:e?e.url:""}}),LPPlatform.closePopup()}),e.stopPropagation()}),$("#saveAllEnteredData").bind("click",function(){bg.lpevent("m_saed"),bg.get_selected_tab_data(null,function(e){bg.sendLpImprove("save_all_entered_data",{domain:bg.lp_gettld_url(e.url)})}),bg.saveall()}),$("#addNote").bind("click",function(){bg.lpevent("m_addn"),fe()}),$("#addFormFill").bind("click",function(){bg.lpevent("m_af"),be()}),$("#addCreditCard").bind("click",function(){bg.lpevent("m_af"),be({defaultData:{profiletype:FormFill.prototype.FORM_FILL_TYPE_CREDIT_CARD}})}),$("#clearForms").bind("click",function(){bg.lpevent("m_clrf"),bg.clearforms("icon")});var Ce=null;$("#chooseProfile").bind("click",function(){dialogs.chooseProfile.open({preSetup:function(e){if(null===Ce){var t=dialogs.chooseProfile.parentElementID,n=e.options.hideHeader;Ce=function(){dialogs.chooseProfile.parentElementID=t,e.options.hideHeader=n,e.$element.css("min-height","")}}e.$element.css("min-height",0),dialogs.chooseProfile.parentElementID="chooseProfileCreditCard",e.options.hideHeader=!0},onClose:function(){he()},saveOptions:{source:"icon"}})}),$("#vaultMenuItem").bind("click",function(){bg.lpevent("m_ov"),bg.openvault()}),$("#sitesMenuItem").bind("click",function(){return ue("sites",function(){w.rebuildItems(n),Te(w,"Empty_Site.png",Strings.translateString("Remember every password"))})}()),$("#formFillsMenuItem").bind("click",function(){return ue("formFills",function(){x.rebuildItems(n),Te(x,"Empty_Form.png",Strings.translateString("Fill Every Form"))})}()),$("#applicationsMenuItem").bind("click",function(){return ue("applications",function(){k.rebuildItems(n),Te(k,"Empty_Site.png",Strings.translateString("Remember every password"))})}()),$("#generateMenuItem").bind("click",_e),$("#notesMenuItem").bind("click",function(){return ue("notes",function(){M.rebuildItems(n),Te(M,"Empty_Note.png",Strings.translateString("Store Every Note"))})}()),$("#clearMostRecent").bind("click",function(){bg.clearrecent(),LPTools.removeDOMChildren(i),ve(i)});var Ee=ue("mostRecent",function(e){B||(le(),B=!0),LPTools.addKeyBoardNavigation(i.children,{rightArrowSelector:".moreItem",selectFirst:!0})});h.bind("click",Ee);var we=ue("matchingSites",function(t){R||(ie(r),R=!0),LPTools.addKeyBoardNavigation(e.getElementById("matchingSites").children,{rightArrowSelector:".moreItem",selectFirst:!0})});if(P.bind("click",we),$("#prefMenuItem").bind("click",function(){bg.lpevent("m_op"),bg.openprefs()}),$("#helpMenuItem").bind("click",function(){bg.lpevent("m_oh"),bg.openhelp()}),$("#adminConsoleMenuItem").bind("click",function(){bg.lpevent("m_oec"),bg.openentconsole()}),$("#logoutMenuItem").bind("click",function(){bg.lpevent("m_lo"),bg.loggedOut(!1,"menu")}),$("#challengeMenuItem").bind("click",function(){bg.lpevent("m_sec"),bg.openseccheck()}),$("#favoritesMenuItem").bind("click",function(){bg.lpevent("m_of"),bg.openfavorites()}),$("#aboutMenuItem").bind("click",function(){bg.lpevent("m_abt"),bg.openabout()}),f.bind("click",function(){bg.lpevent("m_dbgcon"),bg.opendebugtab()}),$("#csvExportMenuItem").bind("click",function(){bg.lpevent("m_e"),bg.openexport()}),$("#formFillExportMenuItem").bind("click",function(){bg.lpevent("m_eff"),bg.formfillexport()}),b.bind("click",function(){bg.lpevent("m_elp"),bg.openlastpassexport()}),v.bind("click",function(){bg.lpevent("m_ewlan"),bg.wlanexport()}),$("#printSitesMenuItem").bind("click",function(){bg.lpevent("m_p"),bg.openprint(!1)}),$("#printNotesMenuItem").bind("click",function(){bg.lpevent("m_pn"),bg.openprint(!0)}),$("#refreshMenuItem").bind("click",function(){bg.lpevent("m_ref"),LPProxy.refreshSites()}),$("#clearCachMenuItem").bind("click",function(){bg.lpevent("m_cl"),bg.clearCache(!1,!0,!1)}),$("#myAccountMenuItem").bind("click",function(){bg.lpevent("m_mya"),bg.openmyaccount()}),$("#sessionsMenuItem").bind("click",function(){bg.lpevent("m_ses"),bg.opensessions()}),LPPlatform.addEventListener(window,"unload",function(){ke()}),t.on("click",".extensionMenuItem, .footer",function(){LPPlatform.closePopup()}),LPFeatures.allowGift()){var Me=$("#specialOfferMenuItem");Me.show(),Me.bind("click",function(){bg.openURL(LPProxy.getBaseURL()+"gift.php")})}$("#omarChallengeMenuItem").bind("click",function(){bg.lpevent("m_sec"),bg.openseccheck()}),$("#omarFavoritesMenuItem").bind("click",function(){bg.lpevent("m_of"),bg.openfavorites()}),$("#omarPrefMenuItem").bind("click",function(){bg.lpevent("m_op"),bg.openprefs()}),$("#omarHelpMenuItem").bind("click",function(){bg.lpevent("m_oh"),bg.openhelp()}),$("#omarAboutMenuItem").bind("click",function(){bg.lpevent("m_abt"),bg.openabout()}),$("#omarRefreshMenuItem").bind("click",function(){bg.lpevent("m_ref"),LPProxy.refreshSites()}),$("#omarClearCachMenuItem").bind("click",function(){bg.lpevent("m_cl"),bg.clearCache(!1,!0,!1)}),$("#omarSessionsMenuItem").bind("click",function(){bg.lpevent("m_ses"),bg.opensessions()}),Topics.get(Topics.PUSH_STATE).subscribe(function(e){G.push(e)}),Topics.get(Topics.EDIT_SITE).subscribe(function(e){e.vaultItem=e.vaultItem.getID(),ge(e)}),Topics.get(Topics.EDIT_NOTE).subscribe(function(e){e.vaultItem=e.vaultItem.getID(),fe(e)}),Topics.get(Topics.EDIT_FORM_FILL).subscribe(function(e){e.vaultItem=e.vaultItem.getID(),be(e)}),Topics.get(Topics.EDIT_APPLICATION).subscribe(function(e){e.vaultItem=e.vaultItem.getID(),bg.LPPlatform.openTabDialog("application",e)}),Topics.get(Topics.IDENTITY_ENABLE).subscribe(function(e){LPProxy.enableIdentity(e),T=e}),Topics.get(Topics.CONFIRM).subscribe(function(e){xe("confirmation",e)}),Topics.get(Topics.ERROR).subscribe(function(e){xe("alert",{title:Strings.Vault.ERROR,text:e})}),Topics.get(Topics.REPROMPT).subscribe(function(e){xe("reprompt",{successCallback:e})}),Topics.get(Topics.LEFT_ARROW).subscribe(function(){LPTools.disableMouse(),he()}),Topics.get(Topics.CLEAR_DATA).subscribe(function(){for(var e=G.length-1;e>-1;--e)G[e].pop();G=[],LPTools.setNavIndex(0),y.val(""),N=!1,F=!1,B=!1,R=!1,H={},V={},K=null,Le&&Le(),Ce&&Ce(),I.removeClass("initialized"),Dialog.prototype.closeAllDialogs(!0)}),Topics.get(Topics.INITIALIZED).subscribe(function(){Strings.translate(e.body),q(),LPPlatform.setupDropdownImportMenu(I)});var xe=function(e,t){$("#container").LP_hide(),LPTools.removeKeyBoardNavigation(),t=$.extend(t,{onResize:function(e,t){LPPlatform.setDropdownPopoverSize(e,t)},onClose:function(){LPPlatform.closePopup()}}),LPDialog.openDialog(e,t)},$e=function(){var e=bg.get("g_badgedata");if(e&&"notification"===e.cmd){switch(e.alerttype){case"duplicate":xe("duplicatePassword",{notification:e});break;case"weak":xe("weakPassword",{notification:e})}switch(e.type){case"error":xe("notification",{notification:bg.get("g_notification_data")})}bg.clear_badge()}else $("#container").LP_show(),W()},ke=function(){Topics.get(Topics.CLEAR_DATA).publish()};return{setup:W,State:z,isMatchingSite:oe,setGroupLabel:U,open:$e,openDialog:xe,reset:ke,setBigIcons:function(e){bg.set("g_bigicons",e)}}}(document);