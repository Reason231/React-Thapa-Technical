## Destructuring in react.js

Simple Destructuring

- const {data}=props.currData

Exact destructuring

- export function CardData(props) {
  const {name,id,description,cast,genre,watch_url,img_url,rating}=props.currData
  }
  Note: The varaible name and the json data key should be same.

Direct destructruing from the props passing

- export function CardData({currData}){
  const {name,id,description,cast,genre,watch_url,img_url,rating}=currData
  }
