"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[1206],{91515:function(e,n,t){var r=t(42982),i=t(4942),l=(t(38559),t(15007)),o=t(1597),a=t(64983),s=t(86029),d=t(26777),u=t(158),c=t(42075),v=t(23576),p=t(69679),m=t(56013),h=t(24149),f=t(48261),g=t(31160),b=t(21183),y=t(45553),x=t(47029),Z=t(38512),w=t(1931),P=t(11768);function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var C=function(e){for(var n=e.childrenArray,t=e.query,r=e.hasSideNav,i=[],o=null,a=null,s=function(){var e=n[0],s=0;Object.keys(P.a).forEach((function(d){var c;(null==e||null===(c=e.props)||void 0===c?void 0:c.mdxType)===d&&function(){s++;var d=[];if((e.props.slots||e.props.repeat)&&function(){for(var t=Math.max(parseInt(e.props.repeat)||1,1),r=function(r){d=d.concat((e.props.slots||"element").split(",").map((function(e,i){return[""+e.trim()+(1===t?"":r),n[d.length+i+1]]})))},i=0;i<t;i++)r(i)}(),d.length){s+=d.length;var c=Object.fromEntries(d);"Variant"===e.props.mdxType&&(c.query=t),"Hero"===e.props.mdxType&&r&&(c.width="calc("+u.Av+" - "+u.dP+");");var v=(0,l.cloneElement)(e,j({},c));"Hero"===e.props.mdxType?o=o||v:"Resources"===e.props.mdxType?a=a||v:i.push(v)}else i.push(e)}()})),0===s&&(s++,i.push(e)),n=n.splice(s)};n.length;)s();return{filteredChildren:i,heroChild:o,resourcesChild:a}},q={name:"13fp5r9",styles:"display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;margin-bottom:var(--spectrum-global-dimension-size-200)"},A={name:"4zleql",styles:"display:block"},D={name:"1ggp1wf",styles:"margin-right:var(--spectrum-global-dimension-size-400)"},k={name:"zjik7",styles:"display:flex"},z={name:"7wiue4",styles:"align-items:center;justify-content:center;display:flex;flex-direction:column"};n.Z=function(e){var n,t=e.children,i=e.pageContext,O=e.query,S=(0,l.useContext)(d.Z),M=S.hasSideNav,N=S.siteMetadata,_=S.location,E=S.allSitePage,T=S.allMdx,L=S.allGithub,B=S.allGithubContributors,X=void 0===i,G=l.Children.toArray(t);if(X||"none"===(null==i||null===(n=i.frontmatter)||void 0===n?void 0:n.layout)){var H=C({childrenArray:(0,Z.L)(G),query:O,hasSideNav:M}).filteredChildren;return X?(0,s.tZ)(a.MDXProvider,null,H):(0,s.tZ)(a.MDXProvider,{components:j(j({},w.t),P.a)},H,(0,s.tZ)(c.$,{hasSideNav:M}))}var Y,J,K,R,$,I,V,F,Q,U,W,ee,ne,te,re,ie,le,oe,ae=(0,u.kR)(null==_?void 0:_.pathname,null==N?void 0:N.subPages),se=(0,u.P4)(null==_?void 0:_.pathname,null==N?void 0:N.subPages),de=(0,u.sl)(null==_?void 0:_.pathname,null==N?void 0:N.subPages),ue=de.nextPage,ce=de.previousPage,ve=null==i||null===(Y=i.frontmatter)||void 0===Y?void 0:Y.contributor_name,pe=null==i||null===(J=i.frontmatter)||void 0===J?void 0:J.contributor_link,me=null==i||null===(K=i.frontmatter)||void 0===K?void 0:K.edition,he=null==E?void 0:E.nodes.find((function(e){var n=e.path;return(0,o.dq)(n)===(null==_?void 0:_.pathname)})),fe=null!==(R=null==he?void 0:he.component)&&void 0!==R?R:"",ge=null==T?void 0:T.nodes.find((function(e){return e.fileAbsolutePath===fe})),be=null!==($=null==ge?void 0:ge.tableOfContents)&&void 0!==$?$:{},ye=null==L?void 0:L.nodes[0],xe=ye.repository,Ze=ye.default_branch,we=ye.root,Pe=null==B?void 0:B.nodes.find((function(e){return e.path===fe})),Oe=null!==(I=null==Pe?void 0:Pe.contributors)&&void 0!==I?I:[],je=fe.replace(/.*\/src\/pages\//g,""),Ce=void 0!==(null==i||null===(V=i.frontmatter)||void 0===V?void 0:V.hideBreadcrumbNav)&&i.frontmatter.hideBreadcrumbNav;if("boolean"!=typeof Ce)throw new Error("hideBreadcrumbNav is not a boolean. Correct use hideBreadcrumbNav: true");var qe=N.home,Ae=(0,u.A6)(_.pathname),De=(0,u.Gh)(null==N?void 0:N.pages),ke=(0,u.Yx)(Ae,De),ze=(0,u.xH)(Ae,ke),Se=(0,u.Lh)(null==_?void 0:_.pathname,null==N?void 0:N.subPages),Me=[];if(Se.length)for(var Ne=Se[Se.length-1].level+1,_e=function(e){var n=Se.filter((function(n){return n.level===e}));n.length&&Me.push(n.pop())},Ee=0;Ee<Ne;Ee++)_e(Ee);var Te=!1;null!=i&&null!==(F=i.frontmatter)&&void 0!==F&&F.jsDoc&&(Te=!0,G=(0,Z.L)(G));var Le=C({childrenArray:G,hasSideNav:M}),Be=Le.filteredChildren,Xe=Le.heroChild,Ge=Le.resourcesChild,He=null===Xe,Ye=null!==Xe&&(!Xe.props.variant||"default"===Xe.props.variant),Je=null!==Xe&&Xe.props.variant&&"default"!==Xe.props.variant,Ke=null==be||null===(Q=be.items)||void 0===Q||null===(U=Q[0])||void 0===U?void 0:U.items,Re=!Xe&&(M||Te)&&Ke&&(Ke.length>1||1===Ke.length&&(null===(W=Ke[0])||void 0===W||null===(ee=W.items)||void 0===ee?void 0:ee.length)>1||(null===(ne=Ke[0])||void 0===ne?void 0:ne.title)),$e=(null==ae?void 0:ae.pathname)===(null==se||null===(te=se[0])||void 0===te?void 0:te.pathname),Ie=[];return Re&&Ie.push((0,u.MY)(2)+" - var(--spectrum-global-dimension-size-400)"),M&&Ie.push(u.dP),(0,s.tZ)(a.MDXProvider,{components:j(j({},w.t),P.a)},(0,s.tZ)("main",{css:z},Xe&&Xe,(0,s.tZ)("div",{css:(0,s.iv)(Je?"width: var(--spectrum-global-dimension-static-grid-fluid-width);":"\n                max-width: "+u.Av+";\n                margin: 0 var(--spectrum-global-dimension-size-800);\n                "," ",Ye&&"\n                h2:first-of-type {\n                  margin-top: 0 !important;\n                }\n              ","@media screen and (max-width: ",u.Av,"){max-width:none;margin:0 var(--spectrum-global-dimension-size-400);}")},(0,s.tZ)("div",{css:k},(0,s.tZ)("div",{css:(0,s.iv)("width:",Je?"\n                      var(--spectrum-global-dimension-static-grid-fluid-width);\n                      text-align: center;\n                      ":(0,u.MY)(12,Ie),";@media screen and (max-width: ",u.Av,"){width:100%;}")},He&&(0,s.tZ)("div",{css:(0,s.iv)("display:flex;margin-top:var(--spectrum-global-dimension-size-500);margin-bottom:var(--spectrum-global-dimension-size-500);@media screen and (max-width: ",u.Av,"){flex-direction:column;}")},!Ce&&ke&&(0,s.tZ)("div",{css:D},!0!==(null==qe?void 0:qe.hidden)&&null!=qe&&qe.title&&null!=qe&&qe.href?(0,s.tZ)(h.O,{pages:[u.JK,qe,j(j({},ke),{},{href:(0,o.dq)(ke.href)}),ze&&j(j({},ze),{},{href:(0,o.dq)(ze.href)})].concat((0,r.Z)(Me.map((function(e){return j(j({},e),{},{href:(0,o.dq)((0,u.Mi)(e.href))})}))))}):(0,s.tZ)(h.O,{pages:[u.JK,j(j({},null==N||null===(re=N.pages)||void 0===re?void 0:re[0]),{},{href:(0,o.dq)(null==N||null===(ie=N.pages)||void 0===ie||null===(le=ie[0])||void 0===le?void 0:le.href)}),j(j({},ke),{},{href:(0,o.dq)(ke.href)}),ze&&j(j({},ze),{},{href:(0,o.dq)(ze.href)})].concat((0,r.Z)(Me.map((function(e){return j(j({},e),{},{href:(0,o.dq)((0,u.Mi)(e.href))})}))))})),(0,s.tZ)("div",{css:(0,s.iv)("margin-left:auto;display:flex;align-items:center;@media screen and (max-width: ",u.Av,"){margin-left:0;margin-top:var(--spectrum-global-dimension-size-200);}")},(0,s.tZ)(m.X,{repository:xe,branch:Ze,root:we,pagePath:je}))),(0,s.tZ)("div",{css:A},me&&(0,s.tZ)(g.c,{name:me}),pe&&(0,s.tZ)(f.x,{name:ve,link:pe})),Be,He&&$e&&(0,s.tZ)(y.x,{pages:se}),He&&(0,s.tZ)(x.m,{nextPage:ue,previousPage:ce}),!Je&&(0,s.tZ)("div",{css:q},(0,s.tZ)("div",null,(0,s.tZ)(v.T,{repository:xe,branch:Ze,root:we,pagePath:je,contributors:Oe,externalContributors:null==i||null===(oe=i.frontmatter)||void 0===oe?void 0:oe.contributors,date:Oe[0]?new Date(Oe[0].date).toLocaleDateString():(new Date).toLocaleDateString()})),(0,s.tZ)("div",{css:(0,s.iv)("@media screen and (max-width: ",u.Av,"){margin-top:var(--spectrum-global-dimension-size-200);}")},(0,s.tZ)(p.x,null)))),Re&&(0,s.tZ)(b.m,{tableOfContents:be}),Ge&&Ge)),(0,s.tZ)(c.$,{hasSideNav:M})))}}}]);
//# sourceMappingURL=2dee68d8-6d6105a75d47f9c22916.js.map