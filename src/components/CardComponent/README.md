# AdvanceInput Component

Card Component is a component that gives more flexibility to the developer to easily style and reactively use and presentate article. 


## Usage

```javascript
import { CardComponent } from "./CardComponent";
const ExampleComponent = (props) => {
  styles = {

    size: "small",
    cardWidth: "400px",
    cardHeight: "800px",
    background: "blue",
    title: "New Title",
    titleShadow: "",
    titleColor: "",
    subtitle: "subtitle",
    description: "Enter descrption here",
    descriptionColor: "",
    image: "https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930__480.jpg",
    subtitleColor: "",
    subtitleBackground: "",
    textRows: ""  //not work for now
  }
    
  return (<CardComponent {...styles}/>)
}
```

## API

| Prop              | Type     | Required | Description                                   |
| ----------------- | -------- | -------- | -------------------------------------------   |
| title             | string   | Yes      | Text for Title                                |
| size              | string   | Yes      | use one of "small", "medium", "large"         |
| subtitle          | string   | Yes      | Text for Subtitle                             |
| description       | string   | Yes      | Text for description                          |
| image             | string   | Yes      | Image url                                     |
| cardWidth         | string   | No       | you can use "px", "vw"                        |
| cardHeight        | string   | No       | you can use "px", "vw"                        |
| background        | string   | No       | color of background                           |
| titleShadow       | string   | No       | Shadow for Title                              |
| descriptionColor  | string   | No       | color of description                          |
| subtitleColor     | string   | No       | color of subtitle                             |
| subtitleBackground| string   | No       | color of subtitle background                  |
| textRows          | string   | No       | not work yet                                  |

## Example

Run storybook

```bash
$ npm run storybook
```

Open:
[Example Demo in Storybook](http://localhost:6006/?path=/story/components-cardcomponent--default)
