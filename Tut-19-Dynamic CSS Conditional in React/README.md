## Condition CSS Rendering

Note: You can use ternary opeators to add conditional stylings to your CSS

1. Through ClassName
<p>Rating: 
            <span className={rating >= 8.5 ? "high_rating" : "low_rating"}>
                {rating}
            </span>
        </p>

- we are going to change the className through the condition check.

2. Combination of both normalClass and Conditional ClassName
<p>
       Rating:
       <span
         className={`normalClass ${
           rating >= 8.5 ? "high_rating" : "low_rating"
         }`}
       >
         {rating}
       </span>
     </p>

3. Optimizing code
   const ratingClass = rating >= 8.5 ? "high_rating" : "low_rating"

 <p>Rating: 
                <span className=`normalClass ${ratingClass}`>
                    {rating}
                </span>
            </p>

4. Inline Conditional CSS
 <p style={{color:`${rating >= 8.5 ? "blue" : "red"}`}}>Description: {description}</p>