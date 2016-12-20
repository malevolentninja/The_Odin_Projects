
These skills will be helpful for you when you start building. Either try them yourself or at least make sure you know how to do it:

Two ways to move a div around on the page
Stick a div onto the bottom or top of the page
Identify the background color of an existing webpage
Grab the URL for an image from an existing webpage
Center an element horizontally
Identify three ways you can include your CSS styles in a page
Understand how to use classes and ids to target CSS at specific elements on the page
Build a very basic form (even if it doesn't "go" anywhere)



Easy Version: Build the Google.com homepage

(the simple one with just a search box).

Inside your project folder, create your index.html file

Tips:
DONT BE A PERFECTIONIST! You're just trying to make it look like google.com, not actually function like it and it doesn't have to be spaced exactly the same way to the pixel. Any dropdown menus or form submissions or hover-highlighting should be ignored.
USE GOOGLE! You'll probably run into roadblocks where you can't figure out how to do something so do what all good devs do... Google it!
If you're frustrated with trying to get buttons or inputs to style the way you want (for instance, they seem to just not respond to any styles), look into the css property -webkit-appearance: none; or -moz-appearance if you're using Firefox.
Start with just putting the main elements on the page (the logo image and search form), then get them placed horizontally. You can either download the Google logo or link directly to its URL on the web in your <img> tag.
Next do the navbar across the top, first building the content and then trying to position it. Check out how to build a horizontal CSS navbar if you're lost.
Finally, put in the footer, which should be very similar to the top navbar.
In general, do as much on your own as you can before relying on the developer tools (or viewing the page's source code) to help you along.
Push your project to Github using the instructions above!



Difficult Version: Build the Google.com search results page

You should be able to reuse much of your code from before if you started with that project. Again, don't worry about links to nowhere and forms that won't submit and hard coding the search results (which you'll have to do of course), just focus on placement and order of items on the page.

Note: All the classes and id's and names of elements that you inspect on Google's home page are nonsensical strings (like <div class='srg'>). This is because the code was Minified (see the Wikipedia entry here), which removes or shortens unnecessary characters and names to help the page load faster. The HTML (or Javascript or CSS) file will be smaller but the browser can still read it just fine.
