"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4013],{6218:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(9229),r=a(9496),l=a(1626),c=a(1338),s=a(4170),i="sidebar_Sh3a",m="sidebarItemTitle_HBQZ",o="sidebarItemList_q9o6",u="sidebarItem_ne7v",g="sidebarItemLink_Ap5m",d="sidebarItemLinkActive_lKWe",b=a(1874);function E(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(i,"thin-scrollbar"),"aria-label":(0,b.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),r.createElement("ul",{className:o},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:d},e.title))}))))}var p=["sidebar","toc","children"];function v(e){var t=e.sidebar,a=e.toc,s=e.children,i=(0,n.Z)(e,p),m=t&&t.items.length>0;return r.createElement(c.Z,i,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},m&&r.createElement("aside",{className:"col col--3"},r.createElement(E,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&r.createElement("div",{className:"col col--2"},a))))}},1899:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var n=a(9496),r=a(6218),l=a(6166),c=a(2299),s="tag_NWdJ";function i(e){var t=e.letterEntry;return n.createElement("article",null,n.createElement("h2",null,t.letter),n.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return n.createElement("li",{key:e.permalink,className:s},n.createElement(l.Z,e))}))),n.createElement("hr",null))}function m(e){var t=e.tags,a=(0,c.PZ)(t);return n.createElement("section",{className:"margin-vert--lg"},a.map((function(e){return n.createElement(i,{key:e.letter,letterEntry:e})})))}function o(e){var t=e.tags,a=e.sidebar,l=(0,c.MA)();return n.createElement(r.Z,{title:l,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsListPage,searchMetadata:{tag:"blog_tags_list"},sidebar:a},n.createElement("h1",null,l),n.createElement(m,{tags:Object.values(t)}))}},6166:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(9496),r=a(1626),l=a(4170),c="tag_fHgL",s="tagRegular_BBJ_",i="tagWithCount_RHlG";function m(e){var t,a=e.permalink,m=e.name,o=e.count;return n.createElement(l.Z,{href:a,className:(0,r.Z)(c,(t={},t[s]=!o,t[i]=o,t))},m,o&&n.createElement("span",null,o))}}}]);