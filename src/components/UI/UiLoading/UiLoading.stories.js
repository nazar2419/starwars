import UiLoading from "./UiLoading";

export default {
  title: 'Ui-Kit/UiLoading',
  component: UiLoading
}
const Template = (args) => <UiLoading {...args} />;

const props = {
    theme: 'blue',
    isShadow: false,
    classes: '',
}


export const Blue = Template.bind({});


Blue.args = {
  ...props,
  theme: 'blue',
};

export const Dark = Template.bind({});


Dark.args = {
  ...props,
  theme: 'dark',
};


export const Light = Template.bind({});


Light.args = {
  ...props,
  theme: 'light',
  isShadow: true,
};


