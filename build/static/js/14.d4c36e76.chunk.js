(this.webpackJsonphister=this.webpackJsonphister||[]).push([[14],{1120:function(e,t,a){"use strict";var r=a(4),o=a(3),l=a(9),n=a(0),c=(a(13),a(12)),i=a(242),s=a(188),b=a(315),d=a(21),u=a(11),j=a(141),p=a(169);function O(e){return Object(j.a)("MuiTableRow",e)}var f=Object(p.a)("MuiTableRow",["root","selected","hover","head","footer"]),m=a(1),v=["className","component","hover","selected"],h=Object(u.a)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.head&&t.head,a.footer&&t.footer]}})((function(e){var t,a=e.theme;return t={color:"inherit",display:"table-row",verticalAlign:"middle",outline:0},Object(r.a)(t,"&.".concat(f.hover,":hover"),{backgroundColor:a.palette.action.hover}),Object(r.a)(t,"&.".concat(f.selected),{backgroundColor:Object(s.a)(a.palette.primary.main,a.palette.action.selectedOpacity),"&:hover":{backgroundColor:Object(s.a)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)}}),t})),x=n.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiTableRow"}),r=a.className,s=a.component,u=void 0===s?"tr":s,j=a.hover,p=void 0!==j&&j,f=a.selected,x=void 0!==f&&f,g=Object(l.a)(a,v),N=n.useContext(b.a),w=Object(o.a)({},a,{component:u,hover:p,selected:x,head:N&&"head"===N.variant,footer:N&&"footer"===N.variant}),y=function(e){var t=e.classes,a={root:["root",e.selected&&"selected",e.hover&&"hover",e.head&&"head",e.footer&&"footer"]};return Object(i.a)(a,O,t)}(w);return Object(m.jsx)(h,Object(o.a)({as:u,ref:t,className:Object(c.a)(y.root,r),role:"tr"===u?null:"row",ownerState:w},g))}));t.a=x},1121:function(e,t,a){"use strict";var r=a(9),o=a(3),l=a(0),n=(a(13),a(12)),c=a(242),i=a(326),s=a(21),b=a(11),d=a(141),u=a(169);function j(e){return Object(d.a)("MuiTable",e)}Object(u.a)("MuiTable",["root","stickyHeader"]);var p=a(1),O=["className","component","padding","size","stickyHeader"],f=Object(b.a)("table",{name:"MuiTable",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,a=e.ownerState;return Object(o.a)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(o.a)({},t.typography.body2,{padding:t.spacing(2),color:t.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},a.stickyHeader&&{borderCollapse:"separate"})})),m="table",v=l.forwardRef((function(e,t){var a=Object(s.a)({props:e,name:"MuiTable"}),b=a.className,d=a.component,u=void 0===d?m:d,v=a.padding,h=void 0===v?"normal":v,x=a.size,g=void 0===x?"medium":x,N=a.stickyHeader,w=void 0!==N&&N,y=Object(r.a)(a,O),M=Object(o.a)({},a,{component:u,padding:h,size:g,stickyHeader:w}),P=function(e){var t=e.classes,a={root:["root",e.stickyHeader&&"stickyHeader"]};return Object(c.a)(a,j,t)}(M),S=l.useMemo((function(){return{padding:h,size:g,stickyHeader:w}}),[h,g,w]);return Object(p.jsx)(i.a.Provider,{value:S,children:Object(p.jsx)(f,Object(o.a)({as:u,role:u===m?null:"table",ref:t,className:Object(n.a)(P.root,b),ownerState:M},y))})}));t.a=v},1122:function(e,t,a){"use strict";var r=a(3),o=a(9),l=a(0),n=(a(13),a(12)),c=a(242),i=a(315),s=a(21),b=a(11),d=a(141),u=a(169);function j(e){return Object(d.a)("MuiTableHead",e)}Object(u.a)("MuiTableHead",["root"]);var p=a(1),O=["className","component"],f=Object(b.a)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-header-group"}),m={variant:"head"},v="thead",h=l.forwardRef((function(e,t){var a=Object(s.a)({props:e,name:"MuiTableHead"}),l=a.className,b=a.component,d=void 0===b?v:b,u=Object(o.a)(a,O),h=Object(r.a)({},a,{component:d}),x=function(e){var t=e.classes;return Object(c.a)({root:["root"]},j,t)}(h);return Object(p.jsx)(i.a.Provider,{value:m,children:Object(p.jsx)(f,Object(r.a)({as:d,className:Object(n.a)(x.root,l),ref:t,role:d===v?null:"rowgroup",ownerState:h},u))})}));t.a=h},1123:function(e,t,a){"use strict";var r=a(3),o=a(9),l=a(0),n=(a(13),a(12)),c=a(242),i=a(315),s=a(21),b=a(11),d=a(141),u=a(169);function j(e){return Object(d.a)("MuiTableBody",e)}Object(u.a)("MuiTableBody",["root"]);var p=a(1),O=["className","component"],f=Object(b.a)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-row-group"}),m={variant:"body"},v="tbody",h=l.forwardRef((function(e,t){var a=Object(s.a)({props:e,name:"MuiTableBody"}),l=a.className,b=a.component,d=void 0===b?v:b,u=Object(o.a)(a,O),h=Object(r.a)({},a,{component:d}),x=function(e){var t=e.classes;return Object(c.a)({root:["root"]},j,t)}(h);return Object(p.jsx)(i.a.Provider,{value:m,children:Object(p.jsx)(f,Object(r.a)({className:Object(n.a)(x.root,l),as:d,ref:t,role:d===v?null:"rowgroup",ownerState:h},u))})}));t.a=h},1124:function(e,t,a){"use strict";var r=a(3),o=a(9),l=a(0),n=(a(13),a(12)),c=a(242),i=a(315),s=a(21),b=a(11),d=a(141),u=a(169);function j(e){return Object(d.a)("MuiTableFooter",e)}Object(u.a)("MuiTableFooter",["root"]);var p=a(1),O=["className","component"],f=Object(b.a)("tfoot",{name:"MuiTableFooter",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-footer-group"}),m={variant:"footer"},v="tfoot",h=l.forwardRef((function(e,t){var a=Object(s.a)({props:e,name:"MuiTableFooter"}),l=a.className,b=a.component,d=void 0===b?v:b,u=Object(o.a)(a,O),h=Object(r.a)({},a,{component:d}),x=function(e){var t=e.classes;return Object(c.a)({root:["root"]},j,t)}(h);return Object(p.jsx)(i.a.Provider,{value:m,children:Object(p.jsx)(f,Object(r.a)({as:d,className:Object(n.a)(x.root,l),ref:t,role:d===v?null:"rowgroup",ownerState:h},u))})}));t.a=h},1601:function(e,t,a){"use strict";a.r(t);var r=a(14),o=a(0),l=a.n(o),n=a(59),c=a(121),i=a(17),s=a(312),b=a(721),d=a(1593),u=a(118),j=a(39),p=a(1121),O=a(1122),f=a(1123),m=a(811),v=a(1120),h=a(1),x=function(){return Object(h.jsxs)(v.a,{sx:{"& th":{fontSize:13,padding:2,fontWeight:i.a.BOLD,"&:first-of-type":{pl:5},"&:last-of-type":{pr:5}}},children:[Object(h.jsx)(m.a,{align:"center",className:"tableCell",children:Object(h.jsx)(j.a,{id:"battle.table.battleName"})}),Object(h.jsx)(m.a,{align:"center",className:"tableCell",children:Object(h.jsx)(j.a,{id:"battle.table.collectionName"})}),Object(h.jsx)(m.a,{align:"center",className:"tableCell",children:Object(h.jsx)(j.a,{id:"battle.table.totalParticipant"})}),Object(h.jsx)(m.a,{align:"center",className:"tableCell",children:Object(h.jsx)(j.a,{id:"battle.table.winner"})}),Object(h.jsx)(m.a,{align:"center",className:"tableCell",children:Object(h.jsx)(j.a,{id:"battle.table.time"})})]})},g=function(e){var t=e.row;return Object(h.jsxs)(v.a,{sx:{"& .tableCell":{fontSize:13,padding:2,whiteSpace:"nowrap","&:first-of-type":{pl:5},"&:last-of-type":{pr:5}}},className:"item-hover",children:[Object(h.jsx)(m.a,{align:"center",className:"tableCell",children:t.battleName}),Object(h.jsx)(m.a,{align:"center",className:"tableCell",children:t.collectionName}),Object(h.jsx)(m.a,{align:"center",className:"tableCell",children:t.totalParticipant}),Object(h.jsx)(m.a,{align:"center",className:"tableCell",children:t.winner}),Object(h.jsx)(m.a,{align:"center",className:"tableCell",children:t.time})]})},N=a(1124),w=a(790),y=a(42),M=a(797),P=a(877),S=a.n(P),T=a(879),C=a.n(T),H=a(878),k=a.n(H),A=a(876),R=a.n(A),B=a(812),F=a(796);function z(e){var t=Object(y.a)(),a=e.count,r=e.page,o=e.rowsPerPage,l=e.onPageChange;return Object(h.jsxs)(s.a,{sx:{flexShrink:0,ml:2.5},children:[Object(h.jsx)(M.a,{onClick:function(e){l(e,0)},disabled:0===r,"aria-label":"first page",children:"rtl"===t.direction?Object(h.jsx)(R.a,{}):Object(h.jsx)(S.a,{})}),Object(h.jsx)(M.a,{onClick:function(e){l(e,r-1)},disabled:0===r,"aria-label":"previous page",children:"rtl"===t.direction?Object(h.jsx)(k.a,{}):Object(h.jsx)(C.a,{})}),Object(h.jsx)(M.a,{onClick:function(e){l(e,r+1)},disabled:r>=Math.ceil(a/o)-1,"aria-label":"next page",children:"rtl"===t.direction?Object(h.jsx)(C.a,{}):Object(h.jsx)(k.a,{})}),Object(h.jsx)(M.a,{onClick:function(e){l(e,Math.max(0,Math.ceil(a/o)-1))},disabled:r>=Math.ceil(a/o)-1,"aria-label":"last page",children:"rtl"===t.direction?Object(h.jsx)(S.a,{}):Object(h.jsx)(R.a,{})})]})}var G=function(e){var t=e.BattleData,a=l.a.useState(0),o=Object(r.a)(a,2),n=o[0],c=o[1],i=l.a.useState(5),s=Object(r.a)(i,2),b=s[0],d=s[1];return Object(h.jsx)(B.a,{sx:{borderRadius:"20px"},component:F.a,children:Object(h.jsxs)(p.a,{children:[Object(h.jsx)(O.a,{children:Object(h.jsx)(x,{})}),Object(h.jsx)(f.a,{children:t.map((function(e){return Object(h.jsx)(g,{row:e},e.id)}))}),Object(h.jsx)(N.a,{children:Object(h.jsx)(v.a,{children:Object(h.jsx)(w.a,{rowsPerPageOptions:[5,10,25,{label:"All",value:-1}],colSpan:7,count:t.length,rowsPerPage:b,page:n,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onPageChange:function(e,t){c(t)},onRowsPerPageChange:function(e){d(parseInt(e.target.value,10)),c(0)},ActionsComponent:z})})})]})})},L=[{battleName:"Battle of Guardians",collectionName:"Apes",totalParticipant:1734,totalNFTS:123,winner:"Alex Hales",time:"26,april,2022",status:"asd"},{battleName:"Battle of Guardians",collectionName:"Apes",totalParticipant:1734,totalNFTS:123,winner:"Alex Hales",time:"26,april,2022",status:"asd"},{battleName:"Battle of Guardians",collectionName:"Apes",totalParticipant:1734,totalNFTS:123,winner:"Alex Hales",time:"26,april,2022",status:"asd"},{battleName:"Battle of Guardians",collectionName:"Apes",totalParticipant:1734,totalNFTS:123,winner:"Alex Hales",time:"26,april,2022",status:"asd"},{battleName:"Battle of Guardians",collectionName:"Apes",totalParticipant:1734,totalNFTS:123,winner:"Alex Hales",time:"26,april,2022",status:"asd"},{battleName:"Battle of Guardians",collectionName:"Apes",totalParticipant:1734,totalNFTS:123,winner:"Alex Hales",time:"26,april,2022",status:"asd"},{battleName:"Battle of Guardians",collectionName:"Apes",totalParticipant:1734,totalNFTS:123,winner:"Alex Hales",time:"26,april,2022",status:"asd"},{battleName:"Battle of Guardians",collectionName:"Apes",totalParticipant:1734,totalNFTS:123,winner:"Alex Hales",time:"26,april,2022",status:"asd"}];t.default=function(){Object(n.d)();var e=Object(n.e)((function(e){return e.players})),t=l.a.useState(null),a=Object(r.a)(t,2),o=a[0],p=a[1];return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(u.a,{animation:"transition.slideUpIn",delay:200,children:Object(h.jsxs)(s.a,{children:[Object(h.jsx)(s.a,{onClick:function(){console.log("playerLIST",e)},component:"h2",sx:{color:"text.primary",fontWeight:i.a.BOLD,mb:6,fontSize:22,display:"inline-block"},children:Object(h.jsx)(j.a,{id:"battle.mainHeading"})}),Object(h.jsx)(c.b,{children:Object(h.jsxs)(b.a,{item:!0,xs:12,md:12,children:[Object(h.jsx)(b.a,{item:!0,lg:3,sm:6,xs:12,mb:6,children:Object(h.jsx)(d.a,{className:"textFieldDesign",fullWidth:!0,placeholder:"Search Text",label:"Search",value:o,onChange:function(e){p(e.target.value)}})}),Object(h.jsx)(G,{BattleData:L})]})})]})})})}},876:function(e,t,a){"use strict";var r=a(63);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a(64)),l=a(1),n=(0,o.default)((0,l.jsx)("path",{d:"M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage");t.default=n},877:function(e,t,a){"use strict";var r=a(63);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a(64)),l=a(1),n=(0,o.default)((0,l.jsx)("path",{d:"M18.41 16.59 13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage");t.default=n},878:function(e,t,a){"use strict";var r=a(63);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a(64)),l=a(1),n=(0,o.default)((0,l.jsx)("path",{d:"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}),"KeyboardArrowRight");t.default=n},879:function(e,t,a){"use strict";var r=a(63);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a(64)),l=a(1),n=(0,o.default)((0,l.jsx)("path",{d:"M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}),"KeyboardArrowLeft");t.default=n}}]);
//# sourceMappingURL=14.d4c36e76.chunk.js.map