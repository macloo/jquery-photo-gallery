# jQuery Photo Gallery

This small collection of HTML, CSS and JavaScript files is intended to help *complete beginners* learn how to use jQuery. You can [see the live Web pages](http://macloo.github.com/jquery-photo-gallery/) to observe the differences among the four files.

[Version 0](photos0.html) of the photo gallery establishes the basic format in the HTML, but the jQuery for that file -- [photos0.js](scripts/photos0.js) -- is incomplete. It shows us something interesting in its incompleteness, though: When we move something with jQuery, it really is gone from its original place in the HTML. 

[Version 1](photos1.html) of the photo gallery fixes the problem (with <code>.clone()<code>) and gives us a functional photo gallery.

[Version 2](photos2.html) adds captions to the photo gallery. The jQuery is changed a bit to enable the big photo and its caption to travel together; this also required a change in the HTML: the tag <code>span</code> was added.

[Version 3](photos3.html) adds some style to the gallery. In the jQuery, we create a new DIV to hold the big photo and its caption.
