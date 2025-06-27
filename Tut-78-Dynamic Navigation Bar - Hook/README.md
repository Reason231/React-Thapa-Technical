## Dynamic Navigation Bar
- Today we are going to make the dynamic navigation bar without the refresh of page. 
- We are going to work it in the Header.jsx file which is in the layout folder.
- Note: <a> using this can reload the page which we don't want, so we are going to use the <NavLink> which doesn't reload the pages.


Q. Why react is considered as a Single Page Application (SPA) ? 


Q. Difference between <Link> and <NavLink>
1. Link
- Basic navigation link.
- It changes the URL and renders the matching component.
- No automatic styling for active state (the page you’re currently on).

Example:
<Link to="/about">About</Link>


2. NavLink
- It’s like Link, plus it can detect if the link is "active" (i.e., the current page URL matches the link’s to prop).
- You can apply a different style or class automatically when the link is active.
- Great for navbars or sidebars where you want to highlight the current page.