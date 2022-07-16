import React from "react";
import CardComponent from "./CardComponent.js";


const Config = {
  title: "Components/CardComponent",
  component: CardComponent,
  parameters: {

  },
  argTypes: {  

      size: {
        options: ['small', 'medium', 'large'],
        control: { type: 'radio' },
      },
      cardWidth: {
        control: { type: 'text' }
      },
      cardHeight: {
        control: { type: 'text' }
      },
      background: {
        control: { type: 'text' }
      },
      title: {
        control: { type: 'text' }
      },
      titleShadow: {
        control: { type: 'text' }
      },
      titleColor: {
        control: { type: 'text' }
      },
      subtitle: {
        control: { type: 'text' }
      },
      description: {
        control: { type: 'text' }
      },
      descriptionColor: {
        control: { type: 'text' }
      },
      image: {
        control: { type: 'text' }
      },

      subtitleColor: {
        control: { type: 'text' }
      },
      subtitleBackground: {
        control: { type: 'text' }
      },
      textRows: {
        control: { type: 'number' }
      }
      },
};

const Template = (args) => <CardComponent {...args} />;

const Default = Template.bind({});
Default.args = {
  
    size: 'small',
    title: 'Enter title here',
    subtitle: 'subtitle',
    description: 'Enter description here',
    image: 'https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930_1280.jpg'
 
};

export default Config;
export { Default };