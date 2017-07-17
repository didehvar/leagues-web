var IntroTourData=function(t,e,n,o,i){"use strict";var a=function(){return t.getModelCount()};return{introTour:{welcomeStep:{class:"tour-welcome-step",title:n.translateString("Welcome to your vault!"),contentText1:n.translateString("Your vault is a safe place to store passwords, notes, profiles for online shopping, and even documents."),contentText2:n.translateString("And no matter where you work, your vault keeps everything in sync, so you can stay organized and save time."),buttons:[{style:"btn-blue",sizeStyle:"col-2 btn-container-lg",text:n.translateString("Show me around"),action:"start"},{style:"btn-link",sizeStyle:"col-1 btn-container-sm",text:n.translateString("Later"),action:"later"},{style:"btn-link",sizeStyle:"col-1 btn-container-sm",text:n.translateString("Never"),action:"never"}],position:{targetId:"#header",align:"left",orientation:"top",fillWidth:"#main"},openAction:function(){e.maximizeLeftMenu(),i("#vault").addClass("tour-overrides")},closeAction:function(){i("#vault").removeClass("tour-overrides")},exitAction:"never"},laterStep:{class:"tour-welcome-step",title:n.translateString("Welcome back!"),contentText1:n.translateString("Ready to get started? We’ll help you set up your vault. It’s easy-to-use, searchable, and organized just the way you like."),buttons:[{style:"btn-blue",sizeStyle:"col-2 btn-container-lg",text:n.translateString("Show me around"),action:"start"},{style:"btn-link",sizeStyle:"col-2 btn-container-sm",text:n.translateString("No thanks"),action:"never"}],position:{targetId:"#header",align:"left",orientation:"top",fillWidth:"#main"},openAction:function(){e.maximizeLeftMenu(),i("#vault").addClass("tour-overrides")},closeAction:function(){i("#vault").removeClass("tour-overrides")},exitAction:"never"},steps:[{title:n.translateString("All your passwords, in one safe place. "),contentText1:function(){return a()>=1?n.translateString("LastPass remembers the login information for all of your favorite websites - and helps you create stronger passwords, too. Click any site in your vault to launch it and log in instantly."):n.translateString("Save usernames and passwords for all the websites and apps you visit, so LastPass can remember and fill them for you. You can save as you browse, too!")},buttons:[{style:"btn-blue",sizeStyle:"col-6 col-push-6",text:n.translateString("Next"),action:"next"}],position:{targetId:"#vaultMenuItem",align:"top",orientation:"left",offset:{left:-20,top:-25},pingOffset:{left:80,top:0},arrowPosition:50},openAction:function(){e.maximizeLeftMenu(),i(this.position.targetId).click()},exitAction:"exit"},{title:n.translateString("Who needs sticky notes?"),contentText1:n.translateString("Keep track of all the odds and ends of your digital life with secure notes. Store memberships, Wi-Fi passwords, credit card numbers, and more. They’re always there, when and where you need them."),buttons:[{style:"btn-link",text:n.translateString("Back"),action:"previous"},{style:"btn-blue",text:n.translateString("Next"),action:"next"}],position:{targetId:"#notesMenuItem",align:"top",orientation:"left",offset:{left:-20,top:-25},pingOffset:{left:80,top:0},arrowPosition:50},openAction:function(){i(this.position.targetId).click()},exitAction:"exit"},{title:n.translateString("Don’t reach for your wallet."),contentText1:n.translateString("We’ve got you covered with form fill profiles. Add your payment cards and contact info, so you can checkout in a few clicks, no typing required."),buttons:[{style:"btn-link",text:n.translateString("Back"),action:"previous"},{style:"btn-blue",text:n.translateString("Next"),action:"next"}],position:{targetId:"#formFillMenuItem",align:"top",orientation:"left",offset:{left:-20,top:-25},pingOffset:{left:80,top:0},arrowPosition:50},openAction:function(){i(this.position.targetId).click()},exitAction:"exit"},{title:n.translateString("Psst! Need to share a secret?"),contentText1:n.translateString("When you need to give friends or family access to one of your accounts, don’t send a text or email. Just share through LastPass, so you both can login when and where you need to."),buttons:[{style:"btn-link",text:n.translateString("Back"),action:"previous"},{style:"btn-blue",text:n.translateString("Next"),action:"next"}],position:{targetId:".sharingMenuItem",align:"top",orientation:"left",offset:{left:-20,top:-25},pingOffset:{left:80,top:0},arrowPosition:50},openAction:function(){i(this.position.targetId).click()},exitAction:"exit"},{title:n.translateString("Save"),contentText1:n.translateString("Use this button to add new sites, notes, and profiles, from anywhere in your vault."),buttons:[{style:"btn-link",text:n.translateString("Back"),action:"previous"},{style:"btn-blue",text:n.translateString("Next"),action:"next"}],position:{targetId:"#addMenuButton",align:"bottom",orientation:"right",offset:{left:-80,top:-35},pingOffset:{left:-150,top:-80},arrowPosition:90},openAction:function(){e.openVault(),setTimeout(function(){i("#addMenu").addClass("open"),o.get(o.VAULT_LEFT_MENU_TOGGLE).publish()},400)},closeAction:function(){i("#addMenu").removeClass("open")},exitAction:"exit"},{title:n.translateString("You’re ready to get started!"),contentText1:n.translateString("There’s a lot more to discover, but we hope this tour was a helpful start. You can revisit any time by selecting More options > Help > Vault Tour."),buttons:[{style:"btn-link",text:n.translateString("Back"),action:"previous"},{style:"btn-blue",text:n.translateString("Ok"),action:"close"}],exitAction:"close",position:{targetId:"#advancedMenuItem",align:"left",orientation:"bottom",offset:{left:30,top:0},pingOffset:{left:90,top:0},arrowPosition:180}}],exitStep:{title:n.translateString("Not a good time?"),contentText1:n.translateString("If you change your mind, you can revisit this tour by selecting More options > Help > Vault Tour."),buttons:[{style:"btn-blue",sizeStyle:"col-6 col-push-6",text:n.translateString("Ok"),action:"close"}],exitAction:"close",position:{targetId:"#advancedMenuItem",align:"left",orientation:"bottom",offset:{left:30,top:0},pingOffset:{left:90,top:0},arrowPosition:180},autoClose:5e3}},omarMigrationTour:{welcomeStep:{class:"omar-migration-override migration-first-step",title:n.translateString("We've got something new for you!"),contentText1:n.translateString("We've organized the Vault by what things are instead of how they're used."),contentText2:n.translateString(" All your saved items are here, in the left sidebar."),buttons:[{style:"btn-link",sizeStyle:"col-1 btn-container-sm",text:n.translateString("Later"),action:"later"},{style:"btn-primary",sizeStyle:"col-2 btn-container-lg",text:n.translateString("Learn more"),action:"start"}],position:{targetId:"#header",align:"left",orientation:"top",offset:{left:200,top:150}},openAction:function(){e.maximizeLeftMenu(),bg.sendLpImprove("migration::formfill::tour::welcome")},shadeOn:!0,exitAction:"never"},steps:[{class:"omar-migration-override",title:n.translateString("Addresses, everything about you"),contentText1:n.translateString("These can be auto-filled into any form. They contain your contact information: address, phone, email, and more."),buttons:[{style:"btn-link",text:n.translateString("Close"),action:"later"},{style:"btn-primary",text:n.translateString("Next"),action:"next"}],position:{targetId:"#addresses",align:"top",orientation:"left",offset:{left:-20,top:-25},pingOffset:{left:80,top:0},arrowPosition:50},openAction:function(){i("#addresses").click()},exitAction:"exit"},{class:"omar-migration-override",title:n.translateString("Payment cards, your digital wallet"),contentText1:n.translateString("Payment cards include credit cards, debit cards, and anything else you use to shop. They can be auto-filled into any form."),buttons:[{style:"btn-link",text:n.translateString("Close"),action:"later"},{style:"btn-primary",text:n.translateString("Next"),action:"next"}],position:{targetId:"#payment-cards",align:"top",orientation:"left",offset:{left:-20,top:-25},pingOffset:{left:80,top:0},arrowPosition:50},openAction:function(){i("#payment-cards").click()},exitAction:"exit"},{class:"omar-migration-override",title:n.translateString("Bank accounts, secure in your Vault"),contentText1:n.translateString("Bank accounts include your bank, routing, anc account information for savings and checking accounts. They can be auto-filled into any form."),buttons:[{style:"btn-link",text:n.translateString("Close"),action:"later"},{style:"btn-primary",text:n.translateString("Next"),action:"next"}],position:{targetId:"#bank-accounts",align:"top",orientation:"left",offset:{left:-20,top:-25},pingOffset:{left:80,top:0},arrowPosition:50},openAction:function(){i("#bank-accounts").click()},exitAction:"exit"},{class:"omar-migration-override migration-last-step",title:n.translateString("Custom items just for you"),contentText1:n.translateString("These include any custom items you've created as well as custom fields from converted form-fills. You can set these to auto-fill."),buttons:[{style:"btn-primary migration-last-step",text:n.translateString("Finish"),action:"close"}],position:{targetId:"#custom-items",align:"top",orientation:"left",offset:{left:-20,top:-25},pingOffset:{left:80,top:0},arrowPosition:50},openAction:function(){i("#custom-items").click()},closeAction:function(){i("#all").click()},exitAction:"close"}]}}}(LPProxy,LPVault,Strings,Topics,jQuery);