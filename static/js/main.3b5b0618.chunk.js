(this.webpackJsonpbag=this.webpackJsonpbag||[]).push([[0],[,,,,function(e){e.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,,function(e,a,t){"use strict";t.r(a);t(1);var c=t(3),s=t.n(c),n=t(4),i=t(0),r=function(e){var a=e.friend;return Object(i.jsxs)("li",{className:"item",children:[Object(i.jsx)("span",{className:"status",style:{backgroundColor:"green"}}),Object(i.jsx)("img",{className:"avatar",src:a.avatar,alt:a.name,width:"48"}),Object(i.jsx)("p",{className:"name",children:a.name})]})},d=function(e){var a=e.friends;return Object(i.jsx)("ul",{children:a.map((function(e){return Object(i.jsx)(r,{friend:e},e.id)}))})},l=function(e){var a=e.user;return Object(i.jsxs)("div",{className:"profile",children:[Object(i.jsxs)("div",{className:"description",children:[Object(i.jsx)("img",{src:a.avatar,alt:a.name,className:"avatar"}),Object(i.jsx)("p",{className:"name",children:a.name}),Object(i.jsx)("p",{className:"tag",children:a.tag}),Object(i.jsx)("p",{className:"location",children:a.location})]}),Object(i.jsxs)("ul",{className:"stats",children:[Object(i.jsxs)("li",{children:[Object(i.jsx)("span",{className:"label",children:"Followers"}),Object(i.jsx)("span",{className:"quantity",children:a.stats.followers})]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("span",{className:"label",children:"Views"}),Object(i.jsx)("span",{className:"quantity",children:a.stats.views})]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("span",{className:"label",children:"Likes"}),Object(i.jsx)("span",{className:"quantity",children:a.stats.likes})]})]})]})},b=t(5),o=function(e){var a=e.stat;return Object(i.jsxs)("li",{className:"item",children:[Object(i.jsx)("span",{className:"label",children:a.label}),Object(i.jsx)("span",{className:"percentage",children:a.percentage})]})},j=function(e){var a=e.title,t=e.stats;return Object(i.jsxs)("section",{className:"statistics",children:[Object(i.jsx)("h2",{className:"title",children:a}),Object(i.jsx)("ul",{className:"stat-list",children:t.map((function(e){return Object(i.jsx)(o,{stat:e},e.id)}))})]})},u=t(6),m=function(e){var a=e.item;return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:a.type}),Object(i.jsx)("td",{children:a.amount}),Object(i.jsx)("td",{children:a.currency})]})},p=function(e){var a=e.items;return Object(i.jsxs)("table",{className:"transaction-history",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Type"}),Object(i.jsx)("th",{children:"Amount"}),Object(i.jsx)("th",{children:"Currency"})]})}),Object(i.jsx)("tbody",{children:a.map((function(e){return Object(i.jsx)(m,{item:e},e.id)}))})]})},f=t(7),O=function(){return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(d,{friends:n}),Object(i.jsx)(l,{user:b}),Object(i.jsx)(j,{title:"Upload stats",stats:u}),Object(i.jsx)(p,{items:f})]})},h=document.getElementById("root");s.a.render(Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(O,{})}),h)}],[[13,1,2]]]);
//# sourceMappingURL=main.3b5b0618.chunk.js.map