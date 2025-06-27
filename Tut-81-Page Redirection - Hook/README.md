## Page Redirection
- "useNavigate" Hook allows you to navigate to the next and previous page easily.

## Note: 
We have already done this in the previous code file that is "ErrorPage.jsx" file.
- Code => 
 const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);   // go back to previous page
    // navigate(1)  // go back to next page
  };