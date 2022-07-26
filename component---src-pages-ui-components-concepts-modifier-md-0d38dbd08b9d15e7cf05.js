"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[7499],{75512:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return d},default:function(){return s}});var t=n(87462),o=n(63366),r=(n(15007),n(64983)),i=n(91515),m=["components"],d={},l={_frontmatter:d},p=i.Z;function s(e){var a=e.components,n=(0,o.Z)(e,m);return(0,r.mdx)(p,(0,t.Z)({},l,n,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"php-modifiers"},"PHP modifiers"),(0,r.mdx)("p",null,"This topic describes how to use ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/php"},"PHP")," modifiers that are the server-side part of ",(0,r.mdx)("a",{parentName:"p",href:"configuration-flow.md"},"UI components configuration"),". Using modifiers is optional and might be necessary when ",(0,r.mdx)("a",{parentName:"p",href:"xml-declaration.md"},"static declaration in XML configuration files")," is not suitable for the tasks. For example, in cases when additional data should be loaded from database. Or the other specific example is the ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/tutorials/admin/custom-product-creation-form/"},"default product creation form"),", for which the modifier is a place where validations are added to display only certain fields for certain ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/product-types"},"product types"),"."),(0,r.mdx)("h2",{id:"general-implementation"},"General implementation"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"DataProvider()")," is a PHP part of a UI component, a class responsible for the component's data and metadata preparation. The pool of modifiers (virtual type) is injected to this data provider using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"__construct()")," method. The pool's preference is defined in ",(0,r.mdx)("inlineCode",{parentName:"p"},"di.xml"),"."),(0,r.mdx)("p",null,"So in runtime, the component structure set in the modifier is merged with the configuration that comes from the ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/xml"},"XML")," configuration."),(0,r.mdx)("h2",{id:"add-a-custom-php-modifier"},"Add a custom PHP modifier"),(0,r.mdx)("p",null,"To add a PHP modifier for a UI component, take the following steps:"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Step 1:")),(0,r.mdx)("p",null,"In your custom module, add a class that implements ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/DataProvider/Modifier/ModifierInterface.php"},(0,r.mdx)("inlineCode",{parentName:"a"},"\\Magento\\Ui\\DataProvider\\Modifier\\ModifierInterface"))," with the following methods:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"modifyData()"),": for modifying UI component's data (for example, the list of options for a select element)"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"modifyMeta()"),": for modifying UI component's ",(0,r.mdx)("a",{parentName:"li",href:"https://glossary.magento.com/metadata"},"metadata")," (for example, name, label, description, type)")),(0,r.mdx)("p",null,"Sample modifier:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n\nuse Magento\\Ui\\DataProvider\\Modifier\\ModifierInterface;\n\nclass Example implements ModifierInterface\n{\n    public function modifyMeta(array $meta)\n    {\n        $meta['test_fieldset_name'] = [\n            'arguments' => [\n                'data' => [\n                    'config' => [\n                        'label' => __('Label For Fieldset'),\n                        'sortOrder' => 50,\n                        'collapsible' => true\n                    ]\n                ]\n            ],\n            'children' => [\n                'test_field_name' => [\n                    'arguments' => [\n                        'data' => [\n                            'config' => [\n                                'formElement' => 'select',\n                                'componentType' => 'field',\n                                'options' => [\n                                    ['value' => 'test_value_1', 'label' => 'Test Value 1'],\n                                    ['value' => 'test_value_2', 'label' => 'Test Value 2'],\n                                    ['value' => 'test_value_3', 'label' => 'Test Value 3'],\n                                ],\n                                'visible' => 1,\n                                'required' => 1,\n                                'label' => __('Label For Element')\n                            ]\n                        ]\n                    ]\n                ]\n            ]\n        ];\n\n        return $meta;\n    }\n\n    /**\n     * {@inheritdoc}\n     */\n    public function modifyData(array $data)\n    {\n        return $data;\n    }\n}\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Step 2:")),(0,r.mdx)("p",null,"Declare your modifier in your module Di configuration ",(0,r.mdx)("inlineCode",{parentName:"p"},"<Your_Module_dir>/etc/adminhtml/di.xml"),". This declaration looks like the following:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<virtualType name="%YourNamespace\\YourModule\\DataProvider\\Modifier\\Pool%" type="Magento\\Ui\\DataProvider\\Modifier\\Pool">\n     <arguments>\n         <argument name="modifiers" xsi:type="array">\n             <item name="modifier_name" xsi:type="array">\n                 <item name="class" xsi:type="string">%YourNamespce\\YourModule\\Modifier\\YourModifierClass%</item>\n                 <item name="sortOrder" xsi:type="number">10</item>\n             </item>\n         </argument>\n     </arguments>\n</virtualType>\n')),(0,r.mdx)("p",null,"where ",(0,r.mdx)("inlineCode",{parentName:"p"},"YourNamespace\\YourModule\\DataProvider\\Modifier\\Pool")," is a ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/dependency-injection/#dependency-types"},"virtual class"),"."),(0,r.mdx)("p",null,"(If you want to use this sample in your ",(0,r.mdx)("inlineCode",{parentName:"p"},"di.xml"),", replace the sample values with the real names of your entities.)"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Step 3:")),(0,r.mdx)("p",null,"To use your modifier, add a dependency on ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/DataProvider/Modifier/PoolInterface.php"},(0,r.mdx)("inlineCode",{parentName:"a"},"\\Magento\\Ui\\DataProvider\\Modifier\\PoolInterface"))," to your UI component data provider."),(0,r.mdx)("p",null,"Sample dependency injection:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<type name="%YourNamespce\\YourModule\\Ui\\DataProvider\\YourDataProviderClass%">\n    <arguments>\n        <argument name="pool" xsi:type="object">%YourNamespace\\YourModule\\DataProvider\\Modifier\\Pool%</argument>\n    </arguments>\n</type>\n')),(0,r.mdx)("p",null,"For illustration see ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Catalog/Ui/DataProvider/Product/Form/Modifier/LayoutUpdate.php"},(0,r.mdx)("inlineCode",{parentName:"a"},"\\Magento\\Catalog\\Ui\\DataProvider\\Product\\Form\\Modifier\\LayoutUpdate")),"."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ui-components-concepts-modifier-md-0d38dbd08b9d15e7cf05.js.map