(this["webpackJsonpreact-app-after-theory"]=this["webpackJsonpreact-app-after-theory"]||[]).push([[0],{11:function(e,t,a){e.exports={header:"Header_header__2zDJt",active:"Header_active__3q_Fm",logo:"Header_logo__2y2Yj"}},16:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"d",(function(){return d})),a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return s})),a.d(t,"f",(function(){return p})),a.d(t,"e",(function(){return f}));var l=a(13),n=a.n(l),c=a(19),r=a(20),o=a(9),i="LOGIN_REQUEST",d="LOGIN_SUCCESS",u="LOGIN_FAILURE",s="EXIT";function p(e,t){return function(){var a=Object(c.a)(n.a.mark((function a(l){var c;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return l({type:i}),a.next=3,r.b.post("/validate/",{email:e,password:t});case 3:"ok"===(c=a.sent).data.status?(console.log("ok!"),localStorage.setItem("loggedIn","true"),localStorage.setItem("userId",c.data.data.id),l({type:d,payload:{login:e,id:c.data.data.id}})):200!==c.status?(console.log(c.status),l({type:u,payload:{message:o.a.fetchError}})):"err"===c.data.status&&(console.log("not ok:("),l({type:u,payload:{message:o.a[c.data.message]||o.a.baseError}}));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}function f(){return function(e){localStorage.setItem("loggedIn","false"),localStorage.setItem("userId",0),e({type:s})}}},17:function(e,t,a){e.exports={wrap:"LoadingComponent_wrap__G6KSJ",loading:"LoadingComponent_loading__1dgpu",fullWrap:"LoadingComponent_fullWrap__2qfeZ"}},18:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return d})),a.d(t,"c",(function(){return u}));var l=a(0),n=a.n(l),c=a(17),r=a(30),o=a.n(r),i=n.a.createElement("div",{className:c.fullWrap},n.a.createElement("img",{className:c.loading,src:o.a,alt:"loading"}));function d(e){return n.a.createElement("div",{className:c.fullWrap},n.a.createElement("img",{className:c.loading,id:"loading",src:o.a,alt:"loading"}))}function u(e){return n.a.createElement("div",{className:c.wrap},n.a.createElement("img",{className:c.loading,src:o.a,alt:"loading"}))}},20:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var l=a(34),n=a.n(l);t.b=n.a.create({baseURL:"https://mysterious-reef-29460.herokuapp.com/api/v1",responseType:"json"});var c=n.a.create({baseURL:"https://randomuser.me/api/",responseType:"json"})},27:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return d})),a.d(t,"a",(function(){return u})),a.d(t,"d",(function(){return s}));var l=a(13),n=a.n(l),c=a(19),r=a(20),o=a(9),i="GET_USER_INFO_REQUEST",d="GET_USER_INFO_SUCCESS",u="GET_USER_INFO_FAILURE";function s(e){return function(){var t=Object(c.a)(n.a.mark((function t(a){var l;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:i}),t.next=3,r.b.get("/user-info/".concat(e,"/"));case 3:200!==(l=t.sent).status?(console.error(l),a({type:u,payload:{message:o.a.fetchError}})):"err"===l.data.status?(console.log(o.a[l.data.message]),a({type:u,payload:{message:o.a[l.data.message]}})):"ok"===l.data.status?(console.log("ok:)"),a({type:d,payload:{data:l.data.data}})):(console.log(o.a.baseError),a({type:u,payload:{message:o.a.baseError}}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},28:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return r})),a.d(t,"d",(function(){return o}));var l=a(9),n="GET_NEWS_REQUEST",c="GET_NEWS_SUCCESS",r="GET_NEWS_FAILURE",o=function(){return function(e,t){return console.log(t()),e({type:n}),fetch("https://mysterious-reef-29460.herokuapp.com/api/v1/news",{method:"GET",headers:{"Content-Type":"application/json;charset=utf-8"}}).then((function(e){return e.json()})).then((function(t){if(console.log(t),"ok"===t.status)e({type:c,payload:t.data});else{if("err"!==t.status)throw e({type:r,payload:t}),new Error(l.a.baseError);e({type:r,payload:t.message})}})).catch(console.log)}}},29:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return d})),a.d(t,"a",(function(){return u})),a.d(t,"d",(function(){return s}));var l=a(13),n=a.n(l),c=a(21),r=a(19),o=a(20),i="GET_USERS_REQUEST",d="GET_USERS_SUCCESS",u="GET_USERS_FAILURE",s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return function(){var a=Object(r.a)(n.a.mark((function a(l){var r;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return l({type:i,payload:t}),a.prev=1,a.next=4,o.a.get("/",{params:{results:+e}});case 4:return 200===(r=a.sent).status?l({type:d,payload:[].concat(Object(c.a)(t),Object(c.a)(r.data.results))}):l({type:u,payload:r}),a.abrupt("return",r);case 9:a.prev=9,a.t0=a.catch(1),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[1,9]])})));return function(e){return a.apply(this,arguments)}}()}},30:function(e,t,a){e.exports=a.p+"static/media/loading.2f6d2536.gif"},37:function(e,t,a){e.exports={wrap:"Exit_wrap__1nN7T"}},38:function(e,t,a){e.exports={main:"App_main__135YA",app:"App_app__U1s1T"}},52:function(e,t,a){e.exports=a(81)},57:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),c=a(25),r=a.n(c),o=(a(57),a(12)),i=a.n(o),d=a(24),u=a(16),s=a(3),p=a(8),f=a(22);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},c=Object.keys(e);for(l=0;l<c.length;l++)a=c[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)a=c[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var g=n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#493310",d:"M95.829 88.914c3.585-2.669 5.424-6.045 6.278-10.224 4.158 4.112 5.623 8.948 5.28 14.41-.465 7.407-3.867 12.805-10.891 15.705-.55.228-1.046.827-1.349 1.375-3.292 5.965-8.135 9.74-14.96 10.819-.572.09-1.143.416-1.635.749-8.116 5.477-21.017 5.457-29.175-.038-.535-.361-1.192-.629-1.828-.738-6.137-1.061-10.799-4.298-13.954-9.611-.917-1.546-1.983-2.586-3.641-3.343-11.845-5.406-11.643-22.932-4.233-29.038.723 1.785 1.281 3.66 2.215 5.326.942 1.681 2.256 3.153 3.407 4.717l.564-.154c.195-1.959.455-3.914.568-5.877.159-2.764.28-5.535.288-8.304.01-3.38-1.254-6.012-4.446-7.656-2.337-1.204-4.67-2.537-6.704-4.184-4.972-4.026-4.846-9.453.18-13.347 1.207-.934 1.923-2.001 2.064-3.511.297-3.182.797-6.355-1.482-9.161-.632-.778-.95-1.858-1.252-2.849-1.472-4.817.898-8.657 5.89-9.44 1.439-.226 2.222-.598 2.394-2.273.307-2.985-.334-5.035-3.084-6.473-2.189-1.146-4.63-1.812-7.047-2.725 2.824-4.058 7.024-5.908 11.946-6.205 6.508-.394 11.61 2.577 15.951 7.134.721.756 1.324 1.63 2.083 2.342.375.353.993.645 1.472.606.249-.021.584-.809.624-1.271.326-3.821 2.052-6.905 4.869-9.419.48-.428 1.088-.713 1.649-1.072l1.382 6.472.6-.006c.99-5.185 4.528-7.827 9.161-9.493-.097 1.552-.324 3.006-.239 4.441.083 1.375.488 2.732.803 4.359 2.635-1.838 4.929-3.746 7.934-3.667-.647 2.462-1.35 4.859-1.888 7.293-.276 1.249.069 2.433 1.658 2.4.581-.012 1.298-.465 1.701-.934 3.424-3.979 7.22-7.383 12.502-8.692 6.737-1.67 13.518.59 17.356 5.953-.729.179-1.415.292-2.062.518-1.671.586-3.442 1.015-4.96 1.88-3.216 1.833-3.731 3.565-2.961 7.677.07.371.66.762 1.09.92.683.25 1.452.256 2.155.464 4.107 1.209 6.069 4.611 4.896 8.717-.416 1.456-1.07 2.894-1.876 4.177-2.089 3.325-1.314 6.75-.458 10.14.19.751 1.187 1.348 1.896 1.913 4.33 3.451 4.747 8.714.589 12.396-2.313 2.048-5.117 3.585-7.829 5.126-2.491 1.415-3.956 3.483-3.964 6.208-.021 5.155.295 10.311.473 15.468zm-17.901-8.872l-.02.015c-.014.115.023.21.112.285l.313.75c1.112 2.919 2.178 5.857 3.347 8.752 1.395 3.457.43 3.329 4.852 2.93l3.656-.669c1.913-.037 2.411-.992 2.261-2.854-.366-4.526-.499-9.071-.755-13.607-.327-5.783 1.935-9.909 7.354-12.362 1.968-.891 3.84-2.261 5.368-3.798 2.324-2.339 1.663-5.892-1.174-7.519l-.244 2.003c-2.154-3.37-2.778-6.792-3.341-10.236l-.058-1.837c.088-.109.098-.225.027-.346l.879-6.657.34.05.495 2.085c.711-1.244 1.296-2.104 1.718-3.035 1.656-3.664.166-6.115-3.903-6.062-2.426.031-4.901.391-7.256.988-6.147 1.559-11.187 5.234-16.205 8.906-.501.367-1.026.703-1.54 1.053l-.238-.278 2.604-3.729.641-.748c.088-.057.142-.137.161-.241l9.737-7.8-5.92-3.158-.08.013-.429-.317c-6.837-3.207-14.108-3.861-21.441-2.985-4.021.48-7.921 1.971-11.876 3.005-2.329.905-4.544 1.985-6.054 3.649l9.732 7.91-.004-.016.351.483 2.74 3.949c-3.093-1.732-5.883-3.707-8.754-5.557-4.446-2.864-9.268-4.779-14.585-5.153-2.251-.158-4.912-.428-6.082 1.983-1.211 2.496.439 4.702 1.83 6.753.052.077.214.08.394.141l.225-1.946c.449.953.726 1.895.836 2.856.216 1.886.34 3.783.503 5.676-.367 1.793-.607 3.626-1.137 5.37-.541 1.781-1.366 3.475-2.067 5.208l-.399-.185-.115-1.783c-3.2 1.951-3.384 5.95-.309 8.402 1.858 1.481 3.981 2.67 6.093 3.787 3.973 2.1 5.779 5.461 5.716 9.782-.071 4.974-.372 9.946-.658 14.915-.154 2.674-.234 2.67 2.196 3.238l4.008.685c1.275-.103 2.919 1.074 3.694-.819 1.53-3.735 2.938-7.52 4.396-11.284.063-.09.093-.19.091-.3l.371-.789 1.484-2.832.443.156c-.663 6.637-3.001 12.894-4.993 19.399 11.109 0 21.915.001 32.72-.006.174 0 .347-.083.463-.113l-5.401-20.483.608-.187 2.013 4.064.266.45zm12.658 30.609c-4.079-.202-5.498.998-6.464 5.601 2.658-1.411 4.987-3 6.436-5.625l.056-.138-.028.162zm11.852-23.638c-3.496 7.166-10.123 8.802-17.019 9.588l3.291 6.277-.511 4.114c5.525-.342 10.373-2 13.492-6.758 2.904-4.432 2.777-9.332 1.235-14.321l-.488 1.1zm-77.224-.562c-.02-.116-.022-.324-.064-.333-.126-.026-.383.012-.388.05-.262 2.045-.738 4.098-.703 6.142.122 7.133 3.973 12.004 10.859 13.893 1.583.434 3.245.582 4.938.874l-.625-4.198 3.395-6.311c-7.302-.684-13.935-2.694-17.412-10.117zm57.22 24.912l.394-.725c.587-1.341 1.273-2.649 1.744-4.029 1.516-4.451-.194-6.876-4.903-7.07-.307-.013-.614-.018-.921-.018-9.829-.001-19.658-.011-29.486.014-.972.002-1.965.115-2.911.337-2.918.685-4.064 2.405-3.295 5.288.5 1.877 1.388 3.651 2.102 5.472l.37.678.277.457c1.599 2.067 2.877 4.529 4.854 6.129 6.5 5.262 13.94 5.696 21.585 3.03 4.715-1.645 8.111-4.97 10.191-9.562l-.001-.001zm19.333-99.527c-7.302-3.192-14.822-.398-19.156 7.122l2.544 1.235c3.333-4.952 7.951-8.023 13.699-7.434.815.084 1.701-.518 2.913-.923zm-75.06.311c1.085.205 2.172.595 3.255.581 3.265-.044 6.236.738 8.7 2.911 1.542 1.359 2.908 2.918 4.429 4.466l2.321-1.191c-3.911-7.178-11.964-10.332-18.705-6.767zm69.116 3.548c-.308.048-.834.085-1.335.219-2.59.693-4.169 2.517-5.121 4.884-.291.723-.451 1.907-.063 2.41.805 1.044 1.511 2.477 3.513 1.8 1.343-.454 1.697-1.23 1.884-2.352.369-2.214.716-4.432 1.122-6.961zm-63.702.101c.3 1.698.586 3.301.865 4.904.146.843.263 1.69.422 2.53.334 1.752 2.019 2.214 3.07 1.862 1.105-.37 2.492-1.801 2.598-2.883.287-2.925-3.853-6.43-6.955-6.413zm5.201 94.87c1.622 2.41 3.773 4.262 6.916 5.677-1.702-3.114-2.233-6.847-6.916-5.677z"}),v=n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#F5A900",d:"M28.444 43.369c-.163-1.894-.287-3.79-.503-5.676-.11-.961-.387-1.903-.836-2.856l-.225 1.946c-.18-.061-.342-.063-.394-.141-1.391-2.051-3.041-4.257-1.83-6.753 1.17-2.411 3.831-2.141 6.082-1.983 5.317.375 10.14 2.29 14.585 5.153 2.871 1.85 5.661 3.825 8.754 5.557l-2.74-3.949-.351-.482.005.016c-.604-1.435-1.105-2.923-1.833-4.292-1.216-2.289-2.946-4.406-1.846-7.268 3.955-1.035 7.855-2.525 11.876-3.005 7.333-.876 14.604-.222 21.441 2.986l.429.316.078-.012c.088 2.524-.88 4.675-2.152 6.797-.758 1.265-1.122 2.765-1.663 4.16-.019.104-.073.184-.16.242l-.642.747-2.604 3.729.238.278c.514-.35 1.039-.686 1.54-1.053 5.018-3.672 10.057-7.348 16.205-8.906 2.355-.597 4.831-.957 7.256-.988 4.069-.053 5.559 2.398 3.903 6.062-.422.932-1.007 1.792-1.718 3.035l-.495-2.085-.34-.05-.879 6.657-.083.102.055.245.058 1.837c-.195.523-.557 1.045-.561 1.569-.037 4.258.342 8.422 3.608 12.165-2.589 1.316-4.879 2.583-7.255 3.66-2.155.978-4.393 1.852-5.167 4.333-.642 2.06-1.01 4.205-1.496 6.294l-1.197-3.32c-.349 8.095.021 16.019 2.597 23.672l-3.656.669c-2.442-3.714-4.877-7.432-7.341-11.131-.173-.259-.566-.371-.857-.551l-.313-.75.157-.222-.269-.063.021-.015-.268-.448-2.013-4.064-.608.187c1.799 6.82 3.597 13.641 5.401 20.483-.116.03-.29.113-.463.113-10.805.007-21.61.006-32.72.006 1.991-6.506 4.33-12.762 4.993-19.399l-.443-.156-1.485 2.832-.371.789c.002.11-.028.209-.09.3-.36.287-.819.508-1.065.872-1.8 2.671-3.582 5.356-5.316 8.071-.643 1.007-1.144 2.104-1.709 3.16l-4.008-.685c2.695-7.634 3.03-15.542 2.673-23.542l-1.268 3.312c-.271-5.412-1.882-9.494-7.597-11.164-2.179-.637-4.073-2.247-5.643-3.151.979-2.485 2.092-4.329 2.383-6.296.386-2.583.121-5.261.135-7.896zm41.428.407l.371-.383.904-1.048c-2.348.23-4.634.638-6.918.626-2.304-.013-4.607-.443-6.91-.689l-.48-.134.48.133.736 1.479c4.106 4.667 7.536 4.76 11.666.313.08-.086.119-.21.177-.316l-.026.019zm-22.901 24.735l4.404-2.722c.989-1.944 2.169-3.822 2.882-5.862.34-.975.525-1.511 1.586-1.79 2.329-.61 3.526-2.182 3.467-4.209l-2.333.285c-2.496-1.417-4.387-3.386-5.922-5.834-.854-1.362-2.183-2.476-3.443-3.527-2.685-2.24-6.047-2.75-9.332-2.82-2.018-.042-4.057.918-6.086 1.428-.062.061-.13.067-.204.023l-.535.228-.103.15c-.009.05.017.146.05.158.73.259 1.463.51 2.324.808-1.957 2.457-1.711 4.791-.216 7.343l.776-2.733.374.035.189 1.932.247.857.144.573c-.203 6.192 5.334 10.651 13.567 10.499l-1.831 5.184-.084.149.079-.155zm33.995-.001l.146.088-.152-.082-1.766-5.241c9.595.948 13.532-5.575 13.878-11.533l.379-2.249.312.012.72 2.677c1.45-2.578 1.823-4.927-.206-7.306l2.408-.946-1.002-.393c-.49-.298-.959-.81-1.472-.857-2.212-.208-4.447-.479-6.653-.357-4.382.242-7.989 2.152-10.46 5.846-1.643 2.456-3.413 4.716-6.137 6.043l-2.523-.286c.403 2.402 1.772 3.651 3.877 4.317.498.158 1.002.693 1.247 1.184 1.052 2.096 2.009 4.24 3 6.367l4.404 2.716z"}),h=n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#F5A800",d:"M45.156 110.632c-.714-1.82-1.602-3.594-2.102-5.472-.769-2.883.377-4.603 3.295-5.288.946-.222 1.939-.335 2.911-.337 9.829-.024 19.658-.015 29.486-.014.307 0 .615.005.921.018 4.709.193 6.419 2.619 4.903 7.07-.47 1.38-1.156 2.688-1.744 4.029l-.394.725-.001.002c-1.271.826-2.508 1.711-3.82 2.466-3.299 1.893-6.894 2.751-10.66 3.203-5.151.619-10.176.227-14.996-1.621-2.485-.953-4.775-2.415-7.153-3.646l-.277-.457-.369-.678zm35.398-2.974l.405-.728c1.126-2.9.622-3.686-2.443-3.722-2.276-.025-4.554-.044-6.83.006-2.209.048-2.7.762-2.111 2.877.266 1.104.379 2.277.83 3.3 1.147 2.607 3.221 4.062 5.057 3.755 2.499-.417 4.74-2.834 5.103-5.503l-.011.015zm-33.181-.002l-.005-.009c.417 2.772 2.093 4.478 4.67 5.313 1.817.588 3.416-.232 4.299-1.65.964-1.549 1.394-3.43 2.057-5.167.632-2.164.186-2.856-2.014-2.921-1.965-.059-3.933-.028-5.9-.012-4.222.033-4.304.135-3.49 4.065l.383.381z"}),b=n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#E08700",d:"M28.444 43.369c-.014 2.635.251 5.313-.132 7.893-.292 1.967-1.405 3.811-2.383 6.296 1.57.904 3.464 2.514 5.643 3.151 5.714 1.67 7.326 5.752 7.597 11.164l1.268-3.312c.356 8 .021 15.907-2.673 23.542-2.43-.567-2.35-.563-2.196-3.238.287-4.968.587-9.941.658-14.915.063-4.321-1.743-7.682-5.716-9.782-2.112-1.116-4.234-2.305-6.093-3.787-3.075-2.453-2.891-6.451.309-8.402l.115 1.783.399.185c.701-1.732 1.526-3.427 2.067-5.208.53-1.744.77-3.576 1.137-5.37zM90.187 92.106c-2.576-7.654-2.946-15.578-2.597-23.672l1.197 3.32c.485-2.09.854-4.235 1.496-6.294.774-2.48 3.012-3.355 5.167-4.333 2.375-1.077 4.666-2.343 7.255-3.66-3.266-3.743-3.645-7.907-3.608-12.165.004-.524.366-1.046.561-1.569.563 3.444 1.187 6.867 3.341 10.236l.244-2.003c2.836 1.627 3.498 5.18 1.174 7.519-1.527 1.538-3.399 2.907-5.368 3.798-5.42 2.453-7.682 6.579-7.354 12.362.256 4.536.389 9.081.755 13.607.148 1.862-.35 2.817-2.263 2.854zm13.132-37.907l-.051.098.077.01-.026-.108z"}),R=n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#E08600",d:"M45.804 111.767c2.378 1.231 4.668 2.693 7.153 3.646 4.819 1.848 9.845 2.24 14.996 1.621 3.766-.452 7.361-1.31 10.66-3.203 1.313-.754 2.549-1.64 3.82-2.466-2.08 4.592-5.476 7.917-10.191 9.562-7.645 2.666-15.085 2.231-21.585-3.03-1.976-1.601-3.255-4.063-4.853-6.13z"}),y=n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#fff",d:"M25.214 86.451c3.478 7.423 10.11 9.433 17.412 10.118l-3.395 6.311c-8.735-.714-14.363-7.31-14.017-16.429zM88.71 102.879c-1.089-2.079-2.178-4.156-3.291-6.277 6.896-.787 13.523-2.423 17.019-9.588.11.454.329.911.313 1.361-.258 7.505-5.405 13.825-14.041 14.504z"}),O=n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#C7C6C6",d:"M25.214 86.451c-.346 9.119 5.282 15.714 14.017 16.428l.625 4.198c-1.694-.292-3.355-.44-4.938-.874-6.886-1.888-10.737-6.76-10.859-13.893-.035-2.043.441-4.096.703-6.142.005-.039.262-.077.388-.05.042.009.044.217.064.333zM88.71 102.879c8.636-.679 13.783-6.999 14.042-14.505.016-.45-.204-.907-.313-1.361l.488-1.1c1.542 4.989 1.669 9.889-1.235 14.321-3.119 4.759-7.967 6.416-13.492 6.758l.51-4.113z"}),z=n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#F0A500",d:"M101.767 11.836c-1.212.405-2.098 1.007-2.913.923-5.748-.589-10.365 2.482-13.699 7.434l-2.544-1.235c4.334-7.52 11.854-10.314 19.156-7.122zM26.707 12.147c6.741-3.565 14.794-.411 18.705 6.766l-2.321 1.191c-1.521-1.548-2.888-3.106-4.429-4.466-2.464-2.172-5.435-2.955-8.7-2.911-1.083.015-2.17-.375-3.255-.58z"}),_=n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#DE8500",d:"M95.823 15.695c-.407 2.529-.753 4.747-1.122 6.961-.187 1.122-.541 1.898-1.884 2.352-2.001.677-2.708-.756-3.513-1.8-.388-.503-.229-1.687.063-2.41.951-2.367 2.53-4.191 5.121-4.884.501-.134 1.027-.171 1.335-.219zM32.121 15.796c3.102-.017 7.242 3.487 6.955 6.414-.106 1.082-1.493 2.513-2.598 2.883-1.051.352-2.736-.11-3.07-1.862-.159-.84-.276-1.688-.422-2.53-.279-1.604-.565-3.207-.865-4.905z"}),j=n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#E08600",d:"M47.313 22.641c-1.1 2.862.63 4.979 1.846 7.268.727 1.369 1.229 2.856 1.833 4.292-3.203-2.603-6.406-5.206-9.732-7.91 1.508-1.665 3.723-2.745 6.053-3.65z"}),w=n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#DE8600",d:"M77.321 33.883c.541-1.395.905-2.895 1.663-4.16 1.272-2.123 2.24-4.273 2.152-6.797 2.001 1.065 4 2.131 5.922 3.157-3.488 2.793-6.612 5.297-9.737 7.8zM78.333 81.093c.291.18.684.292.857.551 2.464 3.699 4.899 7.417 7.341 11.131-4.422.399-3.457.527-4.852-2.93-1.168-2.895-2.234-5.833-3.346-8.752zM41.771 92.787c.566-1.056 1.066-2.153 1.709-3.16 1.734-2.714 3.516-5.399 5.316-8.071.246-.364.705-.585 1.065-.872-1.459 3.764-2.867 7.549-4.396 11.284-.775 1.893-2.419.716-3.694.819z"}),M=n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#ECA200",d:"M37.322 110.666c4.683-1.17 5.214 2.563 6.916 5.677-3.143-1.416-5.295-3.267-6.916-5.677zM90.558 110.627c-1.449 2.624-3.778 4.214-6.436 5.625.967-4.603 2.386-5.803 6.464-5.601l-.028-.024zM90.586 110.651l.027-.163-.056.139.029.024z"}),I=n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#DE8600",d:"M77.908 80.057l.269.063-.157.222c-.089-.074-.126-.17-.112-.285z"}),S=n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#E08700",d:"M99.599 41.896l-.055-.245.083-.102c.07.122.061.237-.028.347z"}),x=n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#49330E",d:"M76.563 65.794c-.991-2.126-1.948-4.271-3-6.367-.245-.49-.749-1.026-1.247-1.184-2.105-.667-3.474-1.916-3.877-4.317l2.523.286c.474.033.958.147 1.419.085 2.207-.299 3.714-1.697 5.181-3.243 4.916-5.184 10.683-8.387 18.124-7.516l1.002.393-2.408.946c2.028 2.379 1.656 4.728.206 7.306l-.72-2.677-.312-.012-.379 2.25c-1.058 2.485-2.065 4.994-4.646 6.388-3.756 2.028-7.527 2.915-11.326.22-1.623 2.466-.664 4.981-.54 7.442zm12.433-13.94v-4.628c-3.894 2.292-7.218 4.52-9.882 7.614l-1.099 1.328c3.718 2.788 10.989.954 10.981-4.314z"}),N=n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#49330F",d:"M35.239 52.833l-.144-.573-.247-.857-.189-1.932-.374-.035-.776 2.733c-1.495-2.552-1.741-4.886.216-7.343-.861-.297-1.594-.548-2.324-.808-.033-.012-.06-.108-.05-.158l.103-.15.535-.228c.073.044.142.038.204-.023 2.786.306 5.659.286 8.339.993 4.209 1.111 7.459 3.9 10.367 7.081 1.617 1.768 3.475 3.095 6.077 2.679l2.333-.285c.059 2.028-1.138 3.599-3.467 4.209-1.061.279-1.246.815-1.586 1.79-.713 2.041-1.893 3.918-2.882 5.861.247-2.49 1.094-5.026-.542-7.473-1.98 1.479-4.139 2.021-6.474 1.602-4.258-.766-7.411-3.006-9.119-7.083zm13.612 1.973c-2.666-3.085-5.982-5.317-9.872-7.583v4.625c.062 5.38 7.409 7.086 10.925 4.365-.105-.193-.193-.416-.334-.597-.221-.285-.478-.542-.719-.81z"}),F=n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#E08700",d:"M76.563 65.794c-.124-2.462-1.083-4.976.539-7.443 3.799 2.694 7.57 1.808 11.326-.22 2.581-1.395 3.588-3.903 4.646-6.388-.346 5.957-4.284 12.48-13.878 11.532l1.766 5.241.005-.006-4.404-2.716zM35.239 52.833c1.708 4.077 4.86 6.317 9.12 7.083 2.335.42 4.494-.123 6.474-1.602 1.635 2.447.788 4.983.542 7.473l-4.404 2.724.005.005 1.831-5.184c-8.233.152-13.771-4.307-13.568-10.499z"}),C=n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#DE8600",d:"M56.977 54.212c-2.602.416-4.46-.911-6.077-2.679-2.908-3.181-6.158-5.97-10.367-7.081-2.68-.708-5.553-.688-8.339-.993 2.029-.51 4.068-1.471 6.085-1.428 3.285.07 6.647.58 9.332 2.82 1.261 1.051 2.589 2.165 3.443 3.527 1.536 2.448 3.427 4.417 5.923 5.834z"}),k=n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#DF8600",d:"M95.684 43.538c-7.44-.871-13.208 2.332-18.124 7.516-1.466 1.546-2.974 2.944-5.181 3.243-.461.063-.945-.052-1.419-.085 2.724-1.327 4.495-3.587 6.137-6.043 2.471-3.694 6.078-5.604 10.46-5.846 2.207-.122 4.441.15 6.653.357.515.049.984.56 1.474.858zM58.054 43.76l-.736-1.479v.001c2.303.247 4.605.676 6.91.689 2.284.012 4.57-.396 6.918-.626l-.903 1.048-.371.383.025-.021c-2.306.388-4.606 1.02-6.921 1.08-1.63.044-3.281-.689-4.922-1.075z"}),U=n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#52380B",d:"M58.054 43.76c1.641.387 3.292 1.119 4.921 1.076 2.315-.061 4.615-.692 6.921-1.08-.058.106-.097.23-.177.316-4.129 4.448-7.558 4.355-11.665-.312z"}),T=n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#47310D",d:"M69.575 106.091c-.589-2.115-.098-2.829 2.111-2.877 2.276-.05 4.554-.031 6.83-.006 3.065.036 3.57.822 2.443 3.722l-.405.728.01-.015c-.532.576-1.049 1.167-1.6 1.726-2.498 2.536-5.238 2.372-7.4-.459-.697-.913-1.328-1.877-1.989-2.819z"}),G=n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#47310E",d:"M46.99 107.274c-.814-3.931-.732-4.033 3.49-4.065 1.967-.016 3.935-.047 5.9.012 2.2.065 2.646.758 2.014 2.921-.746 1.048-1.454 2.126-2.246 3.139-1.853 2.369-4.484 2.518-6.695.41-.704-.671-1.391-1.363-2.086-2.044l.004.009-.381-.382z"}),L=n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#DC8400",d:"M47.368 107.647c.695.682 1.382 1.373 2.086 2.044 2.211 2.107 4.842 1.959 6.695-.41.792-1.013 1.5-2.091 2.246-3.139-.663 1.737-1.092 3.618-2.057 5.167-.884 1.418-2.482 2.238-4.299 1.65-2.578-.834-4.254-2.54-4.671-5.312z"}),A=n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#DE8500",d:"M69.575 106.091c.661.941 1.292 1.905 1.989 2.819 2.162 2.831 4.902 2.995 7.4.459.551-.559 1.067-1.15 1.6-1.726-.363 2.669-2.604 5.086-5.103 5.503-1.835.307-3.91-1.148-5.057-3.755-.449-1.023-.563-2.196-.829-3.3z"}),D=n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#493310",d:"M103.319 54.199l.026.108-.077-.01z"}),W=n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#fff",d:"M79.114 54.841c2.664-3.095 5.989-5.323 9.882-7.614v4.628c-1.606 2.047-3.421 3.875-6.217 3.872-1.222-.003-2.444-.574-3.665-.886z"}),J=n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#C5C4C3",d:"M79.114 54.841c1.222.312 2.443.883 3.665.885 2.796.004 4.611-1.824 6.217-3.872.008 5.268-7.263 7.102-10.981 4.314l1.099-1.327z"}),q=n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#fff",d:"M38.979 51.847v-4.625c3.889 2.267 7.206 4.498 9.872 7.583-1.536 1.385-4.652 1.428-6.902-.117-1.115-.765-1.988-1.883-2.97-2.841z"}),B=n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#C5C4C3",d:"M38.979 51.847c.982.958 1.855 2.077 2.97 2.842 2.25 1.545 5.366 1.502 6.902.117.242.269.499.525.719.81.141.181.229.403.334.597-3.516 2.72-10.863 1.014-10.925-4.366z"}),P=function(e){var t=e.svgRef,a=e.title,l=E(e,["svgRef","title"]);return n.a.createElement("svg",m({viewBox:"0 0 128 128",ref:t},l),a?n.a.createElement("title",null,a):null,g,v,h,b,R,y,O,z,_,j,w,M,I,S,x,N,F,C,k,U,T,G,L,A,D,W,J,q,B)},Q=n.a.forwardRef((function(e,t){return n.a.createElement(P,m({svgRef:t},e))})),H=(a.p,a(11));function Y(e){return n.a.createElement("header",{className:H.header},n.a.createElement("div",{className:H.logo},n.a.createElement(p.d,{strict:!0,to:"/",activeClassName:H.active},n.a.createElement(Q,{width:"60",heigth:"60"}))),n.a.createElement("nav",null,n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(p.d,{to:"/profile",activeClassName:H.active},"Profile")),n.a.createElement("li",null,n.a.createElement(p.d,{to:"/users",activeClassName:H.active},"Users")),n.a.createElement("li",null,n.a.createElement(p.d,{to:"/news",activeClassName:H.active},"News")))),e.loggedIn?n.a.createElement(p.d,{to:"./exit",activeClassName:H.active},n.a.createElement("button",{className:H.btn},"Exit")):n.a.createElement(p.d,{to:"./login",activeClassName:H.active},n.a.createElement("button",{className:H.btn},"Login")))}var K=a(37);function X(e){return n.a.createElement("div",{className:K.wrap},n.a.createElement("div",{className:K.window},n.a.createElement("h2",null,"\u0412\u044b \u0442\u043e\u0447\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0432\u044b\u0439\u0442\u0438?"),n.a.createElement(p.c,{to:"/profile"},n.a.createElement("button",{onClick:e.handlerExit},"\u0434\u0430")),n.a.createElement(p.c,{to:"/profile"},n.a.createElement("button",null,"\u043d\u0435\u0442"))))}var Z=a(18),$=a(38);function V(e){var t=Object(s.g)();return n.a.createElement(p.b,{history:t},n.a.createElement("div",{className:$.app},n.a.createElement(Y,{loggedIn:e.loggedIn}),n.a.createElement("main",null,n.a.createElement("section",{className:$.main},n.a.createElement(s.d,null,n.a.createElement(s.b,{exact:!0,path:"/"},n.a.createElement(ee,null)),n.a.createElement(s.b,{exact:!0,path:"/profile"},n.a.createElement(te,null)),n.a.createElement(s.b,{exact:!0,path:"/users"},n.a.createElement(ae,null)),n.a.createElement(s.b,{exact:!0,path:"/news"},n.a.createElement(le,null)),n.a.createElement(s.b,{exact:!0,path:"/login"},n.a.createElement(ne,null)),n.a.createElement(s.b,{exact:!0,path:"/exit"},n.a.createElement(X,{handlerExit:e.handlerExit,loggedIn:e.loggedIn})))))))}var ee=Object(f.a)((function(){return a.e(6).then(a.bind(null,89))}),{fallback:Z.b}),te=Object(f.a)((function(){return a.e(4).then(a.bind(null,92))}),{fallback:Z.b}),ae=Object(f.a)((function(){return a.e(3).then(a.bind(null,91))}),{fallback:Z.b}),le=Object(f.a)((function(){return a.e(7).then(a.bind(null,93))}),{fallback:Z.b}),ne=Object(f.a)((function(){return a.e(5).then(a.bind(null,90))}),{fallback:Z.b});V.propTypes={loggedIn:i.a.bool.isRequired,handlerExit:i.a.func.isRequired};var ce=Object(d.b)((function(e){return{loggedIn:e.user.loggedIn}}),(function(e){return{handlerExit:function(){return e(Object(u.e)())}}}))((function(e){return n.a.createElement(V,{loggedIn:e.loggedIn,handlerExit:e.handlerExit})}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var re=a(15),oe=a(50),ie=a(51),de=a.n(ie),ue=a(2),se={success:!1,isFetching:!1,login:"",message:"",loggedIn:JSON.parse(localStorage.getItem("loggedIn"))||!1,userId:+localStorage.getItem("userId")||0};var pe=a(27),fe={isFetching:!1,data:{},message:""};var me=a(28),Ee={isFetching:!1,data:[],message:""};var ge=a(21),ve=a(29),he={isFetching:!1,data:[],message:null},be=Object(re.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.c:return Object(ue.a)(Object(ue.a)({},e),{},{isFetching:!0,success:!1,message:"Loading..."});case u.d:return Object(ue.a)(Object(ue.a)({},e),{},{isFetching:!1,success:!0,login:t.payload.login,message:"",loggedIn:!0,userId:t.payload.id});case u.b:return Object(ue.a)(Object(ue.a)({},e),{},{isFetching:!1,success:!1,message:t.payload.message});case u.a:return Object(ue.a)(Object(ue.a)({},se),{},{loggedIn:!1});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe.b:return Object(ue.a)(Object(ue.a)({},e),{},{isFetching:!0,message:""});case pe.c:return Object(ue.a)(Object(ue.a)({},e),{},{isFetching:!1,message:"",data:t.payload.data});case pe.a:return Object(ue.a)(Object(ue.a)({},e),{},{isFetching:!1,message:t.payload.message});default:return e}},news:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case me.b:return Object(ue.a)(Object(ue.a)({},e),{},{isFetching:!0,message:""});case me.c:return Object(ue.a)(Object(ue.a)({},e),{},{isFetching:!1,data:t.payload});case me.a:return Object(ue.a)(Object(ue.a)({},e),{},{isFetching:!1,message:t.payload});default:return e}},people:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ve.b:return Object(ue.a)(Object(ue.a)({},e),{},{isFetching:!0,message:null,data:Object(ge.a)(t.payload)});case ve.c:return Object(ue.a)(Object(ue.a)({},e),{},{isFetching:!1,data:Object(ge.a)(t.payload)});case ve.a:return Object(ue.a)(Object(ue.a)({},e),{},{isFetching:!1,message:t.payload});default:return e}}}),Re=Object(re.d)(be,Object(re.a)(oe.a,de.a));r.a.render(n.a.createElement(d.a,{store:Re},n.a.createElement(n.a.StrictMode,null,n.a.createElement(ce,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var l={emptyFieldForm:"\u0414\u043b\u044f \u0432\u0445\u043e\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u043b\u043e\u0433\u0438\u043d \u0438 \u043f\u0430\u0440\u043e\u043b\u044c!",wrong_email_or_password:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u0432\u0432\u0435\u0434\u0435\u043d\u044b \u043d\u0435 \u0432\u0435\u0440\u043d\u043e!",baseError:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a :( \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u043d\u043e\u0432\u0430",fatalError:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a :( \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",fetchError:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u043d\u043e\u0432\u0430",user_not_found:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438. \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d."}}},[[52,1,2]]]);
//# sourceMappingURL=main.dacbbb50.chunk.js.map