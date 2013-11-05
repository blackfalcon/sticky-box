#Example project: Sticky menu
This repo is a simple example for creating a 'sticky menu' that you can apply to your project. 

###The basic set up
This is a static HTML project except for using Sass w/Compass. The completed CSS is committed to this project, but to edit make sure that you have the Sass and Compass gems loaded in your setup. 

###What's happening?
The basic idea is that in a design there is the need to trap the scrolling event and apply changes to DOM element(s) based on the position of the scroll and the element(s). 

In this example, there are two columns. On the left is static content and on the right are a series of stacked block elements. A specified block element, when the user scrolls the page, will stop at the top of the view allowing this element to stay within the view as the user scrolls through all the content. 

As the user scrolls back down the view, the fixed element will fall back into it's original placement. 

###Something extra
Using additional jQuery awesome, this example will dynamically capture the position of the fixed block regardless of it's original static position allowing consistent performance regardless of CSS and/or content updates. 