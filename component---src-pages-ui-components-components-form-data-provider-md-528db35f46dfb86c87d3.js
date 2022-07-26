"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[3876],{28338:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return s}});var n=a(87462),r=a(63366),m=(a(15007),a(64983)),o=a(91515),d=["components"],l={},i={_frontmatter:l},p=o.Z;function s(e){var t=e.components,a=(0,r.Z)(e,d);return(0,m.mdx)(p,(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"formdataprovider-component"},"FormDataProvider component"),(0,m.mdx)("p",null,"The FormDataProvider ",(0,m.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/ui-component"},"UI component")," is a data provider for the ",(0,m.mdx)("a",{parentName:"p",href:"form.md"},"Form")," component. It stores form data in a specific format that is shared among all UI components in the scope of ",(0,m.mdx)("a",{parentName:"p",href:"form.md"},"Form")," component and provides the functionality for submitting the data."),(0,m.mdx)("h2",{id:"options"},"Options"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Option"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Default Value"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"class")),(0,m.mdx)("td",{parentName:"tr",align:null},"Path to the ",(0,m.mdx)("a",{parentName:"td",href:"https://glossary.magento.com/php"},"PHP")," class responsible for the ",(0,m.mdx)("a",{parentName:"td",href:"https://glossary.magento.com/backend"},"backend")," implementation of the component"),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"Magento\\Framework\\View\\Element\\UiComponent\\DataProvider\\DataProvider"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"component")),(0,m.mdx)("td",{parentName:"tr",align:null},"The path to the component's ",(0,m.mdx)("inlineCode",{parentName:"td"},".js")," file, relative to RequireJS."),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"Magento_Ui/js/form/provider"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"clientConfig")),(0,m.mdx)("td",{parentName:"tr",align:null},"Configuration of the ",(0,m.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/js/form/client.js"},"FormClient")," component."),(0,m.mdx)("td",{parentName:"tr",align:null},"Object"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"urls: {save: '${ $.submit_url }',beforeSave: '${ $.validate_url }'}"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"submit_url")),(0,m.mdx)("td",{parentName:"tr",align:null},"Path to controller that will process the form data submitting request."),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"-"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"validate_url")),(0,m.mdx)("td",{parentName:"tr",align:null},"Path to controller that will process the form data validation request."),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"-"))))),(0,m.mdx)("h2",{id:"sources-files"},"Sources files"),(0,m.mdx)("p",null,"Extends ",(0,m.mdx)("a",{parentName:"p",href:"../concepts/element.md"},(0,m.mdx)("inlineCode",{parentName:"a"},"UiElement")),":"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/js/form/provider.js"},"app/code/Magento/Ui/view/base/web/js/form/provider.js"))),(0,m.mdx)("h2",{id:"examples"},"Examples"),(0,m.mdx)("h3",{id:"integration"},"Integration"),(0,m.mdx)("p",null,"This is an example of how the FormDataProvider component integrates with the ",(0,m.mdx)("a",{parentName:"p",href:"form.md"},"Form")," component:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<form>\n    <dataSource name="sales_rule_form_data_source">\n        <argument name="data" xsi:type="array">\n            <item name="js_config" xsi:type="array">\n                <item name="component" xsi:type="string">Magento_Ui/js/form/provider</item>\n            </item>\n        </argument>\n        <settings>\n            <submitUrl path="path/to/submit_form_data_controller"/>\n            <validateUrl path="path/to/validate_form_data_controller"/>\n        </settings>\n    </dataSource>\n</form>\n')))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ui-components-components-form-data-provider-md-528db35f46dfb86c87d3.js.map