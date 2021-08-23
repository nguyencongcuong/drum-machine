(this["webpackJsonpreactjs-template"]=this["webpackJsonpreactjs-template"]||[]).push([[0],{20:function(e,c,t){},21:function(e,c,t){"use strict";t.r(c);var n=t(1),a=t.n(n),r=t(4),s=t.n(r),o=[{name:"Q",code:81,desc:"Heater 1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{name:"W",code:87,desc:"Heater 2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{name:"E",code:69,desc:"Heater 3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{name:"A",code:65,desc:"Heater 4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{name:"S",code:83,desc:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{name:"D",code:68,desc:"Open HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{name:"Z",code:90,desc:"Kick 'n Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{name:"X",code:88,desc:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{name:"C",code:67,desc:"Close HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],d=[{name:"Q",code:81,desc:"Chord 1",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{name:"W",code:87,desc:"Chord 2",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{name:"E",code:69,desc:"Chord 3",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},{name:"A",code:65,desc:"Shaker",url:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},{name:"S",code:83,desc:"Open HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},{name:"D",code:68,desc:"Closed HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},{name:"Z",code:90,desc:"Punchy Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{name:"X",code:88,desc:"Side Stick",url:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},{name:"C",code:67,desc:"Snare",url:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}],m=t(3),i=function(e){return{type:"getDatabase",database:e}},u=t(2);function l(e){var c=function(c){c.keyCode===e.keyCode&&e.onKeyDown()};return Object(n.useEffect)((function(){document.addEventListener("keydown",c)})),Object(u.jsxs)("div",{id:e.keyDesc.split(" ").join("-"),className:"drum-pad bg-gray-500 text-white text-center font-bold rounded cursor-pointer gap-2 p-4",onClick:e.onClick,children:[Object(u.jsx)("audio",{id:e.keyName,className:"clip",src:e.audioURL,hidden:!0}),Object(u.jsx)("span",{className:"uppercase",children:e.keyName})]})}var p=function(){var e=Object(m.c)((function(e){return e.powerReducer})),c=Object(m.c)((function(e){return e.modeReducer})),t=Object(m.c)((function(e){return e.volumeReducer}))/100,r=Object(m.c)((function(e){return e.databaseReducer})),s=Object(m.b)(),p=function(c,n){!function(c){var n=document.getElementById(c);e?(n.muted=!1,n.volume=t,n.play()):e||(n.muted=!0)}(c),s({type:"dislayKeyDesc",description:n})};return Object(n.useEffect)((function(){s(i(1===c?o:d))}),[c]),Object(u.jsx)(a.a.Fragment,{children:Object(u.jsx)("div",{className:"grid grid-cols-3 gap-1",children:r.map((function(e){return Object(u.jsx)(l,{keyName:e.name,keyCode:e.code,keyDesc:e.desc,audioURL:e.url,onClick:function(){return p(e.name,e.desc)},onKeyDown:function(){return p(e.name,e.desc)}},e.code)}))})})},j=t(9);function h(e){var c=Object(m.c)((function(e){return e.modeReducer}));return Object(u.jsx)("div",{onClick:e.onClick,children:1===c?Object(u.jsx)("div",{className:"text-gray-600",children:Object(u.jsx)(j.a,{size:"30px"})}):Object(u.jsx)("div",{className:"text-gray-600",children:Object(u.jsx)(j.b,{size:"30px"})})})}var b=function(){var e=Object(m.b)();return Object(u.jsxs)("div",{className:"modeSwitcher",children:[Object(u.jsx)("span",{className:"uppercase font-bold",children:"Mode"}),Object(u.jsx)(h,{onClick:function(){return e({type:"mode"})}})]})},f=t(10);function v(e){var c=Object(m.c)((function(e){return e.powerReducer}));return Object(u.jsx)("div",{onClick:e.onClick,children:c?Object(u.jsx)("div",{className:"text-gray-600",children:Object(u.jsx)(f.b,{size:"30px"})}):Object(u.jsx)("div",{className:"text-gray-600",children:Object(u.jsx)(f.a,{size:"30px"})})})}var O=function(){var e=Object(m.b)();return Object(u.jsxs)("div",{className:"powerSwitcher",children:[Object(u.jsx)("span",{className:"uppercase font-bold",children:"Power"}),Object(u.jsx)(v,{onClick:function(){return e({type:"power"})}})]})};var x=function(){var e=Object(m.c)((function(e){return e.volumeReducer})),c=Object(m.b)();return Object(u.jsxs)("div",{className:"volumeChanger",children:[Object(u.jsxs)("span",{className:"uppercase font-bold pb-2",children:["Volume ",e]}),Object(u.jsx)("input",{type:"range",name:"volume",value:e,onChange:function(e){return c({type:"volume",volumeLevel:e.target.value})},min:"0",max:"100",step:"10",className:"outline-none cursor-pointer"})]})};var w=function(){var e=Object(m.c)((function(e){return e.keyDescReducer}));return Object(u.jsx)("div",{id:"display",className:"flex justify-center items-center bg-white rounded mb-4 p-2 h-24",children:Object(u.jsx)("span",{className:"text-4xl text-center",children:e})})};var g=function(){return Object(u.jsxs)("div",{id:"drum-machine",className:"grid md:grid-cols-12 w-screen p-4",children:[Object(u.jsx)("div",{className:"md:col-start-4 md:col-end-10",children:Object(u.jsx)("h1",{className:"text-2xl text-center font-bold uppercase px-4 py-8",children:"Drum Machine"})}),Object(u.jsxs)("div",{className:"md:col-start-4 md:col-end-10 grid grid-col-2 md:grid-cols-3 gap-2 mb-2",children:[Object(u.jsx)("div",{className:"col-span-1 md:col-span-1",children:Object(u.jsx)(O,{})}),Object(u.jsx)("div",{className:"col-span-1 md:col-span-1",children:Object(u.jsx)(b,{})}),Object(u.jsx)("div",{className:"col-span-2 md:col-span-1",children:Object(u.jsx)(x,{})})]}),Object(u.jsx)("div",{className:"md:col-start-4 md:col-end-10",children:Object(u.jsx)(w,{})}),Object(u.jsx)("div",{className:"md:col-start-4 md:col-end-10",children:Object(u.jsx)(p,{})})]})};var y=function(){return Object(u.jsx)(a.a.Fragment,{children:Object(u.jsx)(g,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,22)).then((function(c){var t=c.getCLS,n=c.getFID,a=c.getFCP,r=c.getLCP,s=c.getTTFB;t(e),n(e),a(e),r(e),s(e)}))},N=(t(20),t(5)),_=Object(N.a)({powerReducer:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],c=arguments.length>1?arguments[1]:void 0;switch(c.type){case"power":return!e;default:return e}},modeReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case"mode":return 1===e?2:1;default:return e}},volumeReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case"volume":return c.volumeLevel;default:return e}},keyDescReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",c=arguments.length>1?arguments[1]:void 0;switch(c.type){case"dislayKeyDesc":return c.description;default:return e}},databaseReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],c=arguments.length>1?arguments[1]:void 0;switch(c.type){case"getDatabase":return c.database;default:return e}}}),C=Object(N.b)(_,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(Object(u.jsx)(m.a,{store:C,children:Object(u.jsx)(y,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),k()}},[[21,1,2]]]);
//# sourceMappingURL=main.0fcc2d8a.chunk.js.map