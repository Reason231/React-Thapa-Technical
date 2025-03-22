## CSS Modules
- CSS Modules help you to keep styles specific to the component they're used in. 
- Each module encapsulates it styles, preventing united style conflicts with other modules.
- The class names in CSS modules ar often automatically generated reducing the likelihood of naming clashes.


## CSS Module - Rules to Keep in Mind
- Name you CSS module files with the .module.css or .module.scss extension.
- Import the CSS module file in your React component. Access class names as properties of the imported styles object.
- Access class names as properties of the imported styles object.
- Combine multiple class names using template literals. 
- Dynamically apply class names based on component state.


## What we have done in our folder today
- We have changed the name of the cardFiles to the Netflix
- Then, we create "Netflix.moudule.css" file.
- After that, we import the "Netflix.moudule.css" file in the NetlfixSeries.jsx file. 

## When ClassName are with hypens
.low-rating{
    font-size:20px
}

Note: If the class name in CSS is with hypens like "low-rating" then we have to use it in the component as className={NetflixCSS["low-rating"]}