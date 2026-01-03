# namaste-react
This contains all the react projects I have Build.

<!-- #Episode 2 -->
Pushed the code to github. 
Than install the npm by npm init command.
Npm is a package manager.
We will use parcel as a bundler. -D is for development.
So next is difference between ~ and ^. 
~ is used to upgrade the lastest version to next major version like 3.1.1 to 4.1.0. It moved from 3 to 4. Thats why its is called major version.
^ is used or stands for like it upgrades the minor update of current version. like 3.1.1 to 3.1.2.
I if I have package and package lock json I can re-install my node modules
npx means executing a package, npm installs a package
All about parcel


<!-- Episode 2 -->
JSX - HTML like or XML like syntax
Babel - Transpile the react code to a code that brwser understands. babel convert jsx -> react.createelemnt - Js Object -> Html Element(render)
Attribute in jsx is written in Camelcase

// React Component
Class Based Component - OLD way of writing code
Functional Component - New way of coding

can inject anu=y js code in jsx paranthesis. Meaning the return of a componnet.
cross site scripting - if someone tries to attacka  malicuous attacl through api and that datapasses in jsx than jsx will avutomatically sanitizes it.


<!-- Episode 3 -->
COnfig Driven Ui - Ui nased on repsonse data.
Always add index in map function.
Never add index as keys in map function.


<!-- Episode 4-5 -->

Hooks - 
Normal Js utility functions
2 most impotant hook - useState and useEffect
whenever a state variable is updated react re-render the component
react use reconsialisation ( react fiber)
Actual Dom is where we see all the tags
react creates a virtual DOM - which is representation of actual DOM.
Diff Alogorith finds out difference between Old Virtual DOM and new Virtual DOM. it calculate the difference and than update the actual DOM in render cycle.