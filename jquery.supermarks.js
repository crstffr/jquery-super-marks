/**
 * jQuery SuperMarks Plugin
 *
 * by Chris Mason
 * http://crstffr.com
 *
 * Searches through the HTML content of a selected element and wraps any service marks 
 * (copyright, trademark, etc) with a pair of tags.  This makes it easier to style otherwise 
 * unruly and unpredictable characters.  You can pass the type of tag and the class you want
 * the content to be wrapped in.
 *
 * If you include the CSS file, you gain support for Service Mark, Trade Mark, Copyright, 
 * and Registered symbols for devices/browsers that may not appropriately display the symbols.
 * Additionally, if the font stack you are using doesn't support the symbols, using this 
 * plugin will allow you to render them correctly.
 *
 * Example:
 * <h1>This is SuperMarks©</h1>
 *
 * Usage: $('h1').superMarks();
 * Result: <h1>This is SuperMarks<sup class='supermarked'>©</sup></h1>
 *
 * or
 *
 * Usage: $('h1').superMarks({tag: 'span', tagClass: 'super'});
 * Result: <h1>This is SuperMarks<span class='super'>©</span></h1>
 */
(function($) {
    $.fn.superMarks = function(options) {

        var defaults = {
                tag:        "sup",
                tagClass:   "supermarked"
        };

        var s  = $.extend({}, defaults, options);
        var re = new RegExp('(\xA9|\u2120|\u2122|\xAE)', "g");
        var st = "<" + s.tag + " class='" + s.tagClass + "'>$1</" + s.tag + ">";

        return this.each(function(){
            var html = $(this).html().replace(re, st);
            $(this).html(html);
        });

    };
}(jQuery));