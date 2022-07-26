"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[8081],{34157:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return u}});var a,i=t(87462),o=t(63366),r=(t(15007),t(64983)),m=t(91515),d=["components"],l={},s=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),p={_frontmatter:l},c=m.Z;function u(e){var n=e.components,t=(0,o.Z)(e,d);return(0,r.mdx)(c,(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"wysiwyg-component"},"WYSIWYG component"),(0,r.mdx)("p",null,"The WYSIWYG component is an ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/adapter"},"adapter")," for ",(0,r.mdx)("a",{parentName:"p",href:"https://www.tiny.cloud/"},"TinyMCE")," that integrates an editor instance with the ",(0,r.mdx)("a",{parentName:"p",href:"../form.md"},"form component"),". It expects a complete ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/widget"},"widget")," declaration in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"content")," option, which should contain both ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/markup"},"markup")," and the script responsible for creating the editor's instance."),(0,r.mdx)("p",null,"The application supports all selector, plugin, and toolbar/menu configuration options supported by the TinyMCE ",(0,r.mdx)("inlineCode",{parentName:"p"},"tinymce.init()")," method. However, the application doesn't validate TinyMCE configuration options or flag invalid values before adding the editor to a page."),(0,r.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"Refer to ",(0,r.mdx)("a",{parentName:"p",href:"https://www.tiny.cloud/docs/"},"TinyMCE's documentation")," for more information."),(0,r.mdx)("h2",{id:"options"},"Options"),(0,r.mdx)("p",null,"Extends all ",(0,r.mdx)("inlineCode",{parentName:"p"},"abstract")," configuration."),(0,r.mdx)("p",null,"Wysiwyg-specific options:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Option"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Default"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"class")),(0,r.mdx)("td",{parentName:"tr",align:null},"The path to the component class."),(0,r.mdx)("td",{parentName:"tr",align:null},"Object"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"Magento\\Ui\\Component\\Form\\Element\\Wysiwyg"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"component")),(0,r.mdx)("td",{parentName:"tr",align:null},"The path to the component’s ",(0,r.mdx)("inlineCode",{parentName:"td"},".js")," file in terms of RequireJS."),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"'Magento_Ui/js/form/element/wysiwyg'"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"content")),(0,r.mdx)("td",{parentName:"tr",align:null},"Initial WYSIWYG content."),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"''"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"elementSelector")),(0,r.mdx)("td",{parentName:"tr",align:null},"The selector of the HTML element that is wrapped by the WYSIWYG editor."),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"'textarea'"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"elementTmpl")),(0,r.mdx)("td",{parentName:"tr",align:null},"The path to the template particular field type template, specific for this component."),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"'ui/form/element/wysiwyg'"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"links"),".",(0,r.mdx)("inlineCode",{parentName:"td"},"value")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"../../concepts/linking.md"},"Links")," the component's ",(0,r.mdx)("inlineCode",{parentName:"td"},"value")," property with the provider, using the path that is declared in the ",(0,r.mdx)("inlineCode",{parentName:"td"},"dataScope")," property."),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"'${ $.provider }:${ $.dataScope }'"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"template")),(0,r.mdx)("td",{parentName:"tr",align:null},"The path to the general Field template."),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"'ui/form/field'"))))),(0,r.mdx)("h2",{id:"events"},"Events"),(0,r.mdx)("p",null,"Events are dispatched by modules when certain actions are triggered. When an event is dispatched, it can pass data to any observers configured to watch that event."),(0,r.mdx)("p",null,"Use a global ",(0,r.mdx)("inlineCode",{parentName:"p"},"varienGlobalEvents")," to attach a custom event handler to WYSIWYG events. For example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"require([\n    'mage/adminhtml/events'\n], function () {\n    /**\n     * Editor focused.\n     */\n    function editorFocused() {\n        console.log('The editor is focused!');\n    }\n\n    varienGlobalEvents.attachEventHandler('tinymceFocus', editorFocused);\n});\n")),(0,r.mdx)("p",null,"The following are available events for use in the WYSIWYG component adapter for TinyMCE:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"tinymceBeforeSetContent")," - fires before the contents are inserted into the editor"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"tinymcePaste")," - fires when a paste is done within the editor"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"tinymceSaveContent")," - fires when the contents in the editor are saved"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"tinymceSaveContent")," (",(0,r.mdx)("inlineCode",{parentName:"li"},"PostProcess"),") - fires when the contents in the editor are being serialized"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"tinymceUndo")," - fires when the contents have been reverted to a previous state"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"tinymceFocus")," - fires when the editor is focused"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"tinymceBlur")," - fires when the editor is blurred"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"tinymceChange")," - fires when undo level is added to the editor"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"wysiwygEditorInitialized")," - fires when the WYSIWYG editor is initialized")),(0,r.mdx)("h2",{id:"source-files"},"Source files"),(0,r.mdx)("p",null,"Extends ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/js/form/element/abstract.js"},(0,r.mdx)("inlineCode",{parentName:"a"},"Abstract")),":"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/js/form/element/wysiwyg.js"},"app/code/Magento/Ui/view/base/web/js/form/element/wysiwyg.js")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/templates/form/field.html"},"app/code/Magento/Ui/view/base/web/templates/form/field.html")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/templates/form/element/wysiwyg.html"},"app/code/Magento/Ui/view/base/web/templates/form/element/wysiwyg.html")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/Component/Form/Element/Wysiwyg.php"},"app/code/Magento/Ui/Component/Form/Element/Wysiwyg.php"))),(0,r.mdx)("h2",{id:"add-a-default-editor"},"Add a default editor"),(0,r.mdx)("p",null,"Adding the default WYSIWYG editor to a page requires the following steps:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Create a layout"),(0,r.mdx)("li",{parentName:"ol"},"Create a form"),(0,r.mdx)("li",{parentName:"ol"},"Add a data provider, controller, and routes")),(0,r.mdx)("p",null,"The following example shows how to integrate the default WYSIWYG editor as a UI component inside a custom form."),(0,r.mdx)("p",null,"First, create a layout file in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"ModuleName\\view\\adminhtml\\layout")," directory and register the UI component:"),(0,r.mdx)("h3",{id:"modulenameviewadminhtmllayoutwysiwyg_on_custom_pagexml"},(0,r.mdx)("inlineCode",{parentName:"h3"},"ModuleName\\view\\adminhtml\\layout\\wysiwyg_on_custom_page.xml")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n\x3c!--\n/**\n * Copyright © Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n--\x3e\n<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">\n    <body>\n        <referenceContainer name="content">\n            <uiComponent name="wysiwyg_on_custom_page"/>\n        </referenceContainer>\n    </body>\n</page>\n')),(0,r.mdx)("p",null,"Next, create a custom form in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"ModuleName\\view\\adminhtml\\ui_component")," directory:"),(0,r.mdx)("h3",{id:"modulenameviewadminhtmlui_componentwysiwyg_custom_formxml"},(0,r.mdx)("inlineCode",{parentName:"h3"},"ModuleName\\view\\adminhtml\\ui_component\\wysiwyg_custom_form.xml")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n\x3c!--\n/**\n * Copyright © Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n--\x3e\n<form xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">\n    <fieldset name="content">\n        <settings>\n            <label>Wysiwyg Content</label>\n        </settings>\n        <field name="wysiwyg_example" sortOrder="50" formElement="wysiwyg">\n            <argument name="data" xsi:type="array">\n                <item name="config" xsi:type="array">\n                    <item name="wysiwygConfigData" xsi:type="array">\n                        <item name="height" xsi:type="string">100px</item>\n                        <item name="add_variables" xsi:type="boolean">true</item>\n                        <item name="add_widgets" xsi:type="boolean">true</item>\n                        <item name="add_images" xsi:type="boolean">true</item>\n                        <item name="add_directives" xsi:type="boolean">true</item>\n                    </item>\n                </item>\n            </argument>\n            <settings>\n                <label>Content</label>\n            </settings>\n            <formElements>\n                <wysiwyg>\n                    <settings>\n                        <rows>8</rows>\n                        <wysiwyg>true</wysiwyg>\n                    </settings>\n                </wysiwyg>\n            </formElements>\n        </field>\n    </fieldset>\n</form>\n')),(0,r.mdx)("h4",{id:"result"},"Result"),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"26.25%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/3fdf64889ca3ddf349711f8cf5118016/cb523/ui-wysiwyg-result.webp 320w","/commerce-frontend-core/static/3fdf64889ca3ddf349711f8cf5118016/797b9/ui-wysiwyg-result.webp 640w","/commerce-frontend-core/static/3fdf64889ca3ddf349711f8cf5118016/4b075/ui-wysiwyg-result.webp 1280w","/commerce-frontend-core/static/3fdf64889ca3ddf349711f8cf5118016/f3ff0/ui-wysiwyg-result.webp 1920w","/commerce-frontend-core/static/3fdf64889ca3ddf349711f8cf5118016/a662b/ui-wysiwyg-result.webp 2560w","/commerce-frontend-core/static/3fdf64889ca3ddf349711f8cf5118016/6230d/ui-wysiwyg-result.webp 2602w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/3fdf64889ca3ddf349711f8cf5118016/72799/ui-wysiwyg-result.png 320w","/commerce-frontend-core/static/3fdf64889ca3ddf349711f8cf5118016/6af66/ui-wysiwyg-result.png 640w","/commerce-frontend-core/static/3fdf64889ca3ddf349711f8cf5118016/21b4d/ui-wysiwyg-result.png 1280w","/commerce-frontend-core/static/3fdf64889ca3ddf349711f8cf5118016/29114/ui-wysiwyg-result.png 1920w","/commerce-frontend-core/static/3fdf64889ca3ddf349711f8cf5118016/c2d13/ui-wysiwyg-result.png 2560w","/commerce-frontend-core/static/3fdf64889ca3ddf349711f8cf5118016/afa16/ui-wysiwyg-result.png 2602w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/3fdf64889ca3ddf349711f8cf5118016/21b4d/ui-wysiwyg-result.png",alt:"Wysiwyg Component example",title:"Wysiwyg Component example",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,r.mdx)("p",null,"Last, add your data provider, controller, and routes. Refer to ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/tutorials/admin/create-admin-page/"},"Creating an Admin page")," for more information."),(0,r.mdx)("h2",{id:"modify-the-default-editor"},"Modify the default editor"),(0,r.mdx)("p",null,"The most common way to configure UI components in the application is to add a configuration section inside the XMl element when declaring it on a form. If you need to apply dynamic modifications to a UI component, we recommend using PHP modifiers since the application supports replacing the default WYSIWYG editor with other WYSIWYG libraries."),(0,r.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"Refer to ",(0,r.mdx)("a",{parentName:"p",href:"../../concepts/modifier.md"},"About PHP modifiers in UI components")," for more information."),(0,r.mdx)("p",null,"To use PHP modifiers, your data provider must inherit from ",(0,r.mdx)("inlineCode",{parentName:"p"},"ModifierPoolDataProvider"),". The following class adds support for modifier pools, which are required when using modifiers. Inheriting from this class allows you to use modifiers."),(0,r.mdx)("h3",{id:"magentouidataprovidermodifierpooldataprovider"},(0,r.mdx)("inlineCode",{parentName:"h3"},"Magento\\Ui\\DataProvider\\ModifierPoolDataProvider")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright © Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\nnamespace Magento\\Ui\\DataProvider;\n\nuse Magento\\Framework\\App\\ObjectManager;\nuse Magento\\Ui\\DataProvider\\Modifier\\ModifierInterface;\nuse Magento\\Ui\\DataProvider\\Modifier\\Pool;\nuse Magento\\Ui\\DataProvider\\Modifier\\PoolInterface;\n\nclass ModifierPoolDataProvider extends AbstractDataProvider\n{\n    /**\n     * @var PoolInterface\n     */\n    private $pool;\n\n    /**\n     * @param string $name\n     * @param string $primaryFieldName\n     * @param string $requestFieldName\n     * @param PoolInterface|null $pool\n     * @param array $meta\n     * @param array $data\n     */\n    public function __construct(\n        $name,\n        $primaryFieldName,\n        $requestFieldName,\n        array $meta = [],\n        array $data = [],\n        PoolInterface $pool = null\n    ) {\n        parent::__construct($name, $primaryFieldName, $requestFieldName, $meta, $data);\n        $this->pool = $pool ?: ObjectManager::getInstance()->get(PoolInterface::class);\n    }\n\n    /**\n     * {@inheritdoc}\n     */\n    public function getData()\n    {\n        $this->getConfigData();\n\n        foreach ($this->pool->getModifiersInstances() as $modifier) {\n            $this->data = $modifier->modifyData($this->data);\n        }\n\n        return $this->data;\n    }\n\n    /**\n     * {@inheritdoc}\n     */\n    public function getMeta()\n    {\n        $this->meta = parent::getMeta();\n\n        /** @var ModifierInterface $modifier */\n        $this->pool->getModifiers();\n\n        foreach ($this->pool->getModifiersInstances() as $modifier) {\n            $this->meta = $modifier->modifyMeta($this->meta);\n        }\n\n        return $this->meta;\n    }\n}\n")),(0,r.mdx)("p",null,"Your form must then use a data provider that inherits from ",(0,r.mdx)("inlineCode",{parentName:"p"},"ModifierPoolDataProvider"),". For example:"),(0,r.mdx)("h3",{id:"testmodulemodeldataprovider"},(0,r.mdx)("inlineCode",{parentName:"h3"},"Test\\Module\\Model\\DataProvider")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright © Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\nnamespace Test\\Module\\Model;\n\nuse Magento\\Ui\\DataProvider\\Modifier\\PoolInterface;\nuse Test\\Module\\Model\\ResourceModel\\WysiwygContent\\CollectionFactory;\n\n/**\n * Class DataProvider\n */\nclass DataProvider extends \\Magento\\Ui\\DataProvider\\ModifierPoolDataProvider\n{\n    public function __construct(\n        $name,\n        $primaryFieldName,\n        $requestFieldName,\n        CollectionFactory $collectionFactory,\n        array $meta = [],\n        array $data = [],\n        PoolInterface $pool = null\n    ) {\n        parent::__construct($name, $primaryFieldName, $requestFieldName, $meta, $data, $pool);\n        $this->collection = $collectionFactory->create();\n    }\n}\n")),(0,r.mdx)("p",null,"After you configure the modifier pool in your data provider, you must create the modifier. This is the code that changes the default configuration defined in ",(0,r.mdx)("inlineCode",{parentName:"p"},"Magento\\Cms\\Model\\Wysiwyg\\Config.php"),". Modifier values override the default configuration, so they allow you to change default behavior."),(0,r.mdx)("p",null,"The following example shows how to change the default WYSIWYG editor toolbar and plugins configuration:"),(0,r.mdx)("h3",{id:"testmoduleuidataprovidercustommodifierwysiwygconfigmodifier"},(0,r.mdx)("inlineCode",{parentName:"h3"},"Test\\Module\\Ui\\DataProvider\\Custom\\Modifier\\WysiwygConfigModifier")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright © Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\nnamespace Test\\Module\\Ui\\DataProvider\\Custom\\Modifier;\n\nuse Magento\\Ui\\DataProvider\\Modifier\\ModifierInterface;\nuse Magento\\Ui\\DataProvider\\Modifier\\WysiwygModifierInterface;\n\n/**\n * Class WysiwygConfigModifier\n *\n * @api\n *\n * @SuppressWarnings(PHPMD.NumberOfChildren)\n * @since 101.0.0\n */\nclass WysiwygConfigModifier implements ModifierInterface\n{\n    /**\n     * @param array $data\n     * @return array\n     * @since 100.1.0\n     */\n    public function modifyData(array $data)\n    {\n        return $data;\n    }\n\n    /**\n     * @param array $meta\n     * @return array\n     * @since 100.1.0\n     */\n    public function modifyMeta(array $meta)\n    {\n        $meta['content']['children']['custom_wysiwyg_on_custom_page']['arguments']['data']['config']['wysiwygConfigData']['tinymce']['toolbar'] = 'bold italic underline | alignleft aligncenter alignright | code';\n        $meta['content']['children']['custom_wysiwyg_on_custom_page']['arguments']['data']['config']['wysiwygConfigData']['tinymce']['plugins'] = 'advlist autolink lists link image charmap media table contextmenu paste code help table';\n        return $meta;\n    }\n}\n")),(0,r.mdx)("p",null,"The last thing you need to do is configure the data provider's pool and connect the pool to your modifier. This is done through dependency injection, so you need to add a ",(0,r.mdx)("inlineCode",{parentName:"p"},"di.xml")," file to your project at ",(0,r.mdx)("inlineCode",{parentName:"p"},"ModuleName\\etc\\adminhtml\\di.xml"),"."),(0,r.mdx)("p",null,"Here's an example that connects the data provider and modifier created in the previous steps:"),(0,r.mdx)("h3",{id:"testmoduleetcadminhtmldixml"},(0,r.mdx)("inlineCode",{parentName:"h3"},"Test\\Module\\etc\\adminhtml\\di.xml")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},'<?xml version="1.0"?>\n\x3c!--\n/**\n * Copyright © Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n--\x3e\n<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">\n    <virtualType name="CustomModifierPool" type="Magento\\Ui\\DataProvider\\Modifier\\Pool">\n        <arguments>\n            <argument name="modifiers" xsi:type="array">\n                <item name="wysiwyg-custom" xsi:type="array">\n                    <item name="class" xsi:type="string">Test\\Module\\Ui\\DataProvider\\Custom\\Modifier\\WysiwygConfigModifier</item>\n                    <item name="sortOrder" xsi:type="number">10</item>\n                </item>\n            </argument>\n        </arguments>\n    </virtualType>\n    <type name="Test\\Module\\Model\\DataProvider">\n        <arguments>\n            <argument name="pool" xsi:type="object">CustomModifierPool</argument>\n        </arguments>\n    </type>\n</config>\n')),(0,r.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"If your form already uses the ",(0,r.mdx)("a",{parentName:"p",href:"../../concepts/modifier.md"},"ModifierPool"),", you can continue using it to control the configuration of your WYSIWYG components."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ui-components-components-wysiwyg-index-md-e7d37658fa8b7d99cc71.js.map