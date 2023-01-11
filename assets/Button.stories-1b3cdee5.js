var m=Object.defineProperty;var o=(t,e)=>m(t,"name",{value:e,configurable:!0});import{B as n}from"./Button-4c14c33a.js";import{a as i}from"./iframe-0cd92935.js";import{m as p}from"./make-decorator-e568c1e4.js";import{j as c}from"./jsx-runtime-3d59c334.js";import"./clsx.m-26950cc3.js";import"./index.module-fe5e1900.js";import"./index-ab821199.js";import"./es.object.get-own-property-descriptor-1b90401a.js";import"./web.url.constructor-90543946.js";import"./es.number.is-integer-1f194f72.js";var l="STORYBOOK_ADDON_DESIGNS",d={UpdateConfig:l+"/update_config"},u="design",g=o(function(t,e,r){var a=r.parameters,s=i.getChannel();return s.emit(d.UpdateConfig,a),t(e)},"wrapper"),f=p({name:"withDesign",parameterName:u,skipIfNoParametersOrOptions:!0,wrapper:g});module&&module.hot&&module.hot.decline&&module.hot.decline();const I={parameters:{storySource:{source:`import { Button, ButtonProps } from "./Button";
import { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { ComponentStory } from "@storybook/react";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Create Account",
  },
  argTypes: {},
  decorators: [withDesign],
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};

const Template: ComponentStory<typeof Button> = () => (
  <Button>Create Account</Button>
);

export const Example = Template.bind({});
Example.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/y6CIvws1rHXJoWq0q2hgt2/Ignite-Lab-Design-System?node-id=1%3A170&t=LsEKNGgv7Ie5HLJK-0",
  },
};
`,locationsMap:{example:{startLoc:{col:48,line:18},endLoc:{col:1,line:20},startBody:{col:48,line:18},endBody:{col:1,line:20}}}}},title:"Components/Button",component:n,args:{children:"Create Account"},argTypes:{},decorators:[f]},L={},y=o(()=>c(n,{children:"Create Account"}),"Template"),B=y.bind({});B.parameters={design:{type:"figma",url:"https://www.figma.com/file/y6CIvws1rHXJoWq0q2hgt2/Ignite-Lab-Design-System?node-id=1%3A170&t=LsEKNGgv7Ie5HLJK-0"}};const N=["Default","Example"];export{L as Default,B as Example,N as __namedExportsOrder,I as default};
//# sourceMappingURL=Button.stories-1b3cdee5.js.map
