"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[9335],{28204:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return r},default:function(){return c}});var a=t(87462),i=t(63366),l=(t(15007),t(64983)),o=t(91515),d=["components"],r={},m={_frontmatter:r},p=o.Z;function c(e){var n=e.components,t=(0,i.Z)(e,d);return(0,l.mdx)(p,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"alert-widget"},"Alert widget"),(0,l.mdx)("p",null,"The alert widget implements a modal pop-up window with a confirmation button. It extends the ",(0,l.mdx)("a",{parentName:"p",href:"confirm.md"},"confirmation widget")," which in turn extends the ",(0,l.mdx)("a",{parentName:"p",href:"modal.md"},"modal widget"),"."),(0,l.mdx)("p",null,"The alert widget source is ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/js/modal/alert.js"},(0,l.mdx)("inlineCode",{parentName:"a"},"<Magento_Ui_module_dir>/view/base/web/js/modal/alert.js")),"."),(0,l.mdx)("p",null,"The widget can be used for implementing alert windows for both Admin and ",(0,l.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/storefront"},"storefront"),". The design patterns for the pop-up modal windows in the Admin are described in the ",(0,l.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/admin-developer/pattern-library/containers/slideouts-modals-overlays/#modals"},"Admin Pattern Library, the Slide-out Panels, Modal Windows, and Overlays topic.")),(0,l.mdx)("h2",{id:"initialize"},"Initialize"),(0,l.mdx)("p",null,"The alert widget can be initialized with or without binding to a certain element."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Example1"),": initialization on an element"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"$('#init_element').alert({\n    title: $.mage.__('Warning'),\n    content: $.mage.__('Warning content'),\n    actions: {\n        always: function(){}\n    }\n});\n")),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Example2"),": standalone initialization"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"require([\n    'Magento_Ui/js/modal/alert',\n    'jquery'\n], function(alert, $) { // Variable that represents the `alert` function\n\n    alert({\n        title: $.mage.__('Some title'),\n        content: $.mage.__('Some content'),\n        actions: {\n            always: function(){}\n        }\n    });\n\n});\n")),(0,l.mdx)("p",null,"For details about how to initialize a widget in a",(0,l.mdx)("inlineCode",{parentName:"p"},".phtml")," template, refer to the ",(0,l.mdx)("a",{parentName:"p",href:"../init.md"},"JavaScript initialization")," topic."),(0,l.mdx)("h2",{id:"options"},"Options"),(0,l.mdx)("h3",{id:"actions"},(0,l.mdx)("inlineCode",{parentName:"h3"},"actions")),(0,l.mdx)("p",null,"Widget callbacks."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Type"),": Object.\n",(0,l.mdx)("strong",{parentName:"p"},"Default value"),":"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"actions: {\n    always: function(){}\n}\n")),(0,l.mdx)("h3",{id:"autoopen"},(0,l.mdx)("inlineCode",{parentName:"h3"},"autoOpen")),(0,l.mdx)("p",null,"Automatically open the alert window when the widget is initialized."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Type"),": Boolean"),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,l.mdx)("inlineCode",{parentName:"p"},"false")),(0,l.mdx)("h3",{id:"buttons"},(0,l.mdx)("inlineCode",{parentName:"h3"},"buttons")),(0,l.mdx)("p",null,"The buttons list."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Type"),": Array of Objects."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Default value"),":"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"buttons: [{\n    text: $.mage.__('OK'),\n    class: 'action-primary action-accept',\n    click: function () {\n        this.closeModal(true);\n    }\n}]\n")),(0,l.mdx)("h3",{id:"clickableoverlay"},(0,l.mdx)("inlineCode",{parentName:"h3"},"clickableOverlay")),(0,l.mdx)("p",null,"Close the alert window when a user clicks on the overlay."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Type"),": Boolean"),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,l.mdx)("inlineCode",{parentName:"p"},"true")),(0,l.mdx)("h3",{id:"content"},(0,l.mdx)("inlineCode",{parentName:"h3"},"content")),(0,l.mdx)("p",null,"The text displayed in the alert window."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Type"),": String."),(0,l.mdx)("h3",{id:"focus"},(0,l.mdx)("inlineCode",{parentName:"h3"},"focus")),(0,l.mdx)("p",null,"The selector of the element to be in focus when the alert window opens.\nIf ",(0,l.mdx)("inlineCode",{parentName:"p"},"focus")," is not specified or set to empty string, the focus is on the close button. If focusing is not required, set ",(0,l.mdx)("inlineCode",{parentName:"p"},"focus")," to ",(0,l.mdx)("inlineCode",{parentName:"p"},"none"),"."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Type"),": String."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,l.mdx)("inlineCode",{parentName:"p"},"''")),(0,l.mdx)("h3",{id:"title"},(0,l.mdx)("inlineCode",{parentName:"h3"},"title")),(0,l.mdx)("p",null,"The title of the alert window."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Type"),": String."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,l.mdx)("inlineCode",{parentName:"p"},"''")),(0,l.mdx)("h3",{id:"modalclass"},(0,l.mdx)("inlineCode",{parentName:"h3"},"modalClass")),(0,l.mdx)("p",null,"The CSS class of the alert window."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Type"),": String."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,l.mdx)("inlineCode",{parentName:"p"},"'confirm'")),(0,l.mdx)("h2",{id:"events"},"Events"),(0,l.mdx)("p",null,"The alert widget implements a single event: the ",(0,l.mdx)("inlineCode",{parentName:"p"},"always")," callback.\nThe ",(0,l.mdx)("inlineCode",{parentName:"p"},"always")," callback is invoked when a modal window is closed."),(0,l.mdx)("h2",{id:"keyboard-navigation"},"Keyboard navigation"),(0,l.mdx)("p",null,"The keyboard navigation for the alert windows is similar to the ",(0,l.mdx)("a",{parentName:"p",href:"modal.md#keyboard-navigation"},"navigation of the modal widget"),"."),(0,l.mdx)("h2",{id:"code-sample"},"Code Sample"),(0,l.mdx)("h3",{id:"standalone-initialization"},"Standalone initialization"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-html"},"<div class=\"alert-modal-content\">\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n</div>\n\n<script>\nrequire([\n    'jquery',\n    'Magento_Ui/js/modal/alert'\n], function ($, alert) {\n    'use strict';\n\n    alert({\n        title: 'Alert Title',\n        content: $('.alert-modal-content'),\n        modalClass: 'alert',\n        actions: {\n            always: function() {\n                // do something when the modal is closed\n            }\n        },\n        buttons: [{\n            text: $.mage.__('Accept'),\n            class: 'action primary accept',\n\n            /**\n             * Click handler.\n             */\n            click: function () {\n                this.closeModal(true);\n            }\n        }, {\n            text: $.mage.__('New Action'),\n            class: 'action',\n\n            /**\n             * Click handler.\n             */\n            click: function () {\n                // New action\n            }\n        }]\n    });\n});\n<\/script>\n")),(0,l.mdx)("h3",{id:"initialization-on-an-element"},"Initialization on an element"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-html"},"<div class=\"alert-modal-content\">\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n</div>\n\n<script>\nrequire([\n    'jquery',\n    'Magento_Ui/js/modal/alert'\n], function ($) {\n    'use strict';\n\n    $('.alert-modal-content').alert({\n        title: 'Alert Title',\n        modalClass: 'alert',\n        actions: {\n            always: function() {\n                // do something when the modal is closed\n            }\n        },\n        buttons: [{\n            text: $.mage.__('Accept'),\n            class: 'action primary accept',\n\n            /**\n             * Click handler.\n             */\n            click: function () {\n                this.closeModal(true);\n            }\n        }, {\n            text: $.mage.__('New Action'),\n            class: 'action',\n\n            /**\n             * Click handler.\n             */\n            click: function () {\n                // New action\n            }\n        }]\n    });\n});\n<\/script>\n")),(0,l.mdx)("h2",{id:"result"},"Result"),(0,l.mdx)("p",null,(0,l.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,l.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"22.499999999999996%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,l.mdx)("picture",{parentName:"span"},"\n          ",(0,l.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/6d336c0be943bf11c593c8db22469299/5530d/alert-widget-result.webp 320w","/commerce-frontend-core/static/6d336c0be943bf11c593c8db22469299/0c8fb/alert-widget-result.webp 640w","/commerce-frontend-core/static/6d336c0be943bf11c593c8db22469299/94b1e/alert-widget-result.webp 1280w","/commerce-frontend-core/static/6d336c0be943bf11c593c8db22469299/0b34d/alert-widget-result.webp 1920w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,l.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/6d336c0be943bf11c593c8db22469299/dd4a7/alert-widget-result.png 320w","/commerce-frontend-core/static/6d336c0be943bf11c593c8db22469299/0f09e/alert-widget-result.png 640w","/commerce-frontend-core/static/6d336c0be943bf11c593c8db22469299/bbbf7/alert-widget-result.png 1280w","/commerce-frontend-core/static/6d336c0be943bf11c593c8db22469299/ac7a9/alert-widget-result.png 1920w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,l.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/6d336c0be943bf11c593c8db22469299/bbbf7/alert-widget-result.png",alt:"Alert Widget",title:"Alert Widget",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-javascript-jquery-widgets-alert-md-4cc9cc0cd51e3122049d.js.map