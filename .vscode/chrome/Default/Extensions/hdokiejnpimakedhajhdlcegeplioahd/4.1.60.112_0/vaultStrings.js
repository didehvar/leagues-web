Strings={},function(e){Topics.get(Topics.INITIALIZED).subscribe(function(){e.translateStrings(e.Vault)}),e.Vault={EDIT:"Edit",SHARE:"Share",DELETE:"Delete",LAUNCH:"Launch",ADMIN_CONSOLE:"Admin Console",HELP_CENTER:"Help Center",ACCOUNT_SETTINGS:"Account Settings",LOGOUT:"Logout",ACCEPT:"Accept",REJECT:"Reject",ENABLE:"Enable",COPY_USERNAME:"Copy Username",COPY_PASSWORD:"Copy Password",COPY_ADDRESS_1:"Copy Address 1",COPY_ADDRESS_2:"Copy Address 2",COPY_CITY_SLASH_TOWN:"Copy City / Town",COPY_ZIP_SLASH_POSTAL_CODE:"Copy ZIP / Postal Code",COPY_EMAIL_ADDRESS:"Copy Email Address",COPY_PHONE_NUMBER:"Copy Phone Number",COPY_BANK_NAME:"Copy Bank Name",COPY_ACCOUNT_NUMBER:"Copy Account Number",COPY_ROUTING_NUMBER:"Copy Routing Number",COPY_NAME_ON_CARD:"Copy Name on Card",COPY_SECURITY_CODE:"Copy Security Code",COPY_LICENSE_NUMBER:"Copy License Number",COPY_POLICY_NUMBER:"Copy Policy Number",COPY_GROUP_ID:"Copy Group ID",COPY_MEMBER_ID:"Copy Member ID",COPY_MEMBERSHIP_NUMBER:"Copy Membership Number",COPY_NUMBER:"Copy Number",COPY_LICENSE_KEY:"Copy License Key",COPY_ORDER_NUMBER:"Copy Order Number",COPY_SSH_PASSPHRASE:"Copy Passphrase",COPY_SSH_PUBLIC_KEY:"Copy Public Key",COPY_HOSTNAME:"Copy Hostname",COPY_URL:"Copy URL",MOVE_TO_FOLDER:"Move to Group",MOVE_TO_SUB_FOLDER:"Move to Sub-Group",DELETE_FOLDER:"Delete Group",RENAME_FOLDER:"Rename Group",SHARE_FOLDER:"Share Folder",RENAME:"Rename",CREATE_SUB_FOLDER:"Create Sub-Group",OPEN_ALL:"Open All Sites",COPY_NOTE:"Copy Note",COPY_KEY:"Copy Key",FILL:"Fill",OPEN:"Open",SAVE:"Save",CANCEL:"Cancel",REVOKE:"Revoke Access",RESEND:"Resend Invitation",CANCEL_INVITE:"Cancel Invitation",REMOVE:"Remove",PURGE:"Purge",RESTORE:"Restore",CLOSE:"Close",MAXIMIZE:"Maximize",MINIMIZE:"Minimize",EDIT_ACCESS:"Edit Access",UNLINK_PERSONAL:"Unlink Personal Account",STOP_DOWNLOADING:"Stop Downloading Folder",START_DOWNLOADING:"Start Downloading Folder",CONFIRM_REQUEST_ACCESS:"Confirm Request Access",VAULT_TOGGLE:"Toggle LastPass 3.0",AUTO_FILL:"Auto Fill",DELETED:"deleted",ADDED:"added",RENAMED:"renamed",SAVED:"saved",REMOVED:"removed",ACCEPTED:"accepted",DECLINED:"declined",PURGED:"purged",RESTORED:"restored",FOLDER_PURGE:"this folder's items",SELECTED_PURGE:"the selected items",CLONE:"Clone",MORE_OPTIONS:"More Options",COPY:"Copy",MANAGE:"Manage",MANAGE_FOLDER:"Manage Folder",REQUEST_ACCESS:"Request Access",SHARED_WITH:"Shared with",SHARED_BY:"Shared by",PENDING_SHARE:"Pending share",LAST_USED:"Last used",WAITING_PERIOD:"Waiting period",ACCESS_PENDING:"Access pending until",ACCESS_GRANTED:"Access granted",ACCOUNT_LINKED:"Account linked",GO_TO_URL:"Go to URL",UNEXPECTED_ERROR:"An unexpected error has occurred",READ_ONLY:"Read-Only",EMERGENCY_ACCESS_RECIPIENT:"Emergency Access Recipient",UNLINK:"Unlink",GENERATED:"Generated",NOT_DOWNLOADED:"Not downloaded",LINKED:"Linked",OUTSIDE_ENT:"Outside Enterprise",NO_SHARING_KEYS:"No Sharing Keys",GENERATED_PREFIX:"Generated Password for",PURGE_ALL:"Purge All",LINKED_PERSONAL_ACCOUNT:"Linked Personal Account",EMERGENCY_ACCESS:"Emergency Access",COLLAPSE_ALL:"Collapse All",EXPAND_ALL:"Expand All",COMPACT_VIEW:"Show Compact View",LARGE_VIEW:"Show Large View",SHOW_PASSWORD:"Show Password",HIDE_PASSWORD:"Hide Password",GENERATE_PASSWORD:"Generate Password",ERROR:"Error",YES:"Yes",NO:"No",OPEN_DASHBOARD:"Open Dashboard",UPGRADE_PREMIUM:"Upgrade to Premium",SHOW:"SHOW",HIDE:"HIDE",NONE_GROUP:"(none)",NO_FOLDER:"No folder",ADD_ITEM:"Add Item",AGO:"ago",NEVER:"Never",JUST_NOW:"just now",SECOND:"second",SECONDS:"seconds",MINUTE:"minute",MINUTES:"minutes",HOUR:"hour",HOURS:"hours",DAY:"day",DAYS:"days",WEEK:"week",WEEKS:"weeks",MONTH:"month",MONTHS:"months",YEAR:"year",YEARS:"years",SITE:"Site",APPLICATION:"Application:",GROUP:"Group:",SECURE_NOTE:"Secure Note",FORM_FILL:"Form Fill",IDENTITY:"Identity",USER:"User",USER_GROUP:"User Group",SHARED_FOLDER:"Shared Folder",ADD_FOLDER:"Add New Folder",SHARE_ITEMS:"Share Item",ADD_FORM_FILL:"Add Form Fill",ADD_NOTE:"Add Secure Note",ADD_SITE:"Add Site",ADD_SHARED_FOLDER:"Add Shared Folder",ADD_IDENTITY:"Add Identity",GIVE_EMER_ACCESS:"Give Emergency Access",ADD_CREDIT_MON:"Enable Credit Monitoring",DUUMY_TERMINATING_ENTRY:""},e.VaultDynamic={CONFIRM_PURGE:"Are you sure you want to purge %1? It will be permanently deleted from LastPass.",CONFIRM_RESTORE:"Are you sure you want to restore %1 to your vault?"},e.Consts={NONE_GROUP:"(none)"};var t=function(t){for(var E="",n=[],r=t.firstChild;r;)3===r.nodeType?E+=r.textContent:1===r.nodeType&&(E+="%"+n.length+r.textContent+"%"+n.length,n.push(r)),r=r.nextSibling;return{string:e.translateString(E),elements:n}},E=function(e){var E=t(e);LPTools.removeDOMChildren(e);for(var n=E.string.indexOf("%"),r=null;n>-1;){var o=E.string.substring(0,n);if(null===r)e.appendChild(document.createTextNode(o)),r=parseInt(E.string.charAt(n+1));else{var s=E.elements[r];s?(s.textContent=o,e.appendChild(s)):e.appendChild(document.createTextNode(o)),r=null}E.string=E.string.substring(n+2),n=E.string.indexOf("%")}E.string.length>0&&e.appendChild(document.createTextNode(E.string))};e.translateString=function(e){if("undefined"!=typeof bg?e=bg.StringUtils.translate.apply(bg.StringUtils,arguments):"undefined"!=typeof StringUtils&&(e=StringUtils.translate.apply(StringUtils,arguments)),arguments.length>1){for(var t=[],E=1,n=arguments.length;E<n;++E){var r=arguments[E];if("object"==typeof r){var o=e.indexOf("%"+E);t.push(document.createTextNode(e.substring(0,o))),t.push(LPTools.createElement(r.type,r.attributes,r.text)),e=e.substring(o+2)}}if(t.length>0)return e.length>0&&t.push(e),t}return e},e.translate=function(t,n){for(var r=t;r;){if(3===r.nodeType)r.textContent=this.translateString(r.textContent);else if(1===r.nodeType){var o=r.getAttribute("placeholder");null!==o&&r.setAttribute("placeholder",this.translateString(o));var s=r.getAttribute("title");null!==s&&r.setAttribute("title",this.translateString(s)),null!==r.getAttribute("compoundtranslation")?E(r):e.translate(r.firstChild)}r=r.nextSibling}},e.translateStrings=function(t){for(var E in t)t[E]=e.translateString(t[E])}}(Strings);