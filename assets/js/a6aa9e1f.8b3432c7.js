"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3089],{813:function(e,a,t){t.r(a),t.d(a,{default:function(){return p}});var n=t(9496),i=t(9762),r=t(7345),l=t(9047),s=t(5414),o=t(2006);var g=function(e){var a=e.metadata,t=a.previousPage,i=a.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,o.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(s.Z,{className:"pagination-nav__link",to:t},n.createElement("div",{className:"pagination-nav__label"},"\xab"," ",n.createElement(o.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},i&&n.createElement(s.Z,{className:"pagination-nav__link",to:i},n.createElement("div",{className:"pagination-nav__label"},n.createElement(o.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},m=t(8795);var p=function(e){var a=e.metadata,t=e.items,s=e.sidebar,o=(0,i.Z)().siteConfig.title,p=a.blogDescription,c=a.blogTitle,d="/"===a.permalink?o:c;return n.createElement(r.Z,{title:d,description:p,wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogListPage,searchMetadata:{tag:"blog_posts_list"},sidebar:s},t.map((function(e){var a=e.content;return n.createElement(l.Z,{key:a.metadata.permalink,frontMatter:a.frontMatter,assets:a.assets,metadata:a.metadata,truncated:a.metadata.truncated},n.createElement(a,null))})),n.createElement(g,{metadata:a}))}}}]);