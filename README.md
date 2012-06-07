jQuery Super Marks
==================

The customer-managed content throughout your site is littered with copyright, registered, trade mark, and service mark symbols.  Since these symbols can appear anywhere (including headers that use custom web fonts that don't support the symbols), it is necessary to dynamically wrap those service marks with markup so they can be styled explicitly.  

**Being able to select and style your service mark symbols**

SuperMarks searches through HTML and wraps four types of symbols in a tag with a class.  The supported symbols are:

[Service Mark](http://graphemica.com/%E2%84%A0), [Trade Mark](http://graphemica.com/%E2%84%A2), [Registered](http://graphemica.com/%C2%AE), [Copyright](http://graphemica.com/%C2%A9)

For default behavior, SuperMarks wraps symbols in a sup tag with a class of "supermarked".

```javascript
$('.content-area').superMarks();
```

To provide a custom tag type and class:

```javascript
$('.content-area').superMarks({
    tag: 'span',
    tagClass: 'cleansymbol'
});
```


**Inclusion of service mark symbols when they're missing**

Most fonts have the copyright symbol, but most do not have the [service mark](http://graphemica.com/%E2%84%A0) symbol.  When you include the jquery.supermarks.css, there is a base64 encoded font stack named "LucidaSansUnicodeServiceMarks" which contains 4 unicode symbols: Service Mark, Trade Mark, Copyright, and Registered Trade Mark from the Lucida Sans Unicode font.  (This may be distribution of copyrighted material, if that is the case, please write me and I will kindly find a new solution).

SuperMarks uses this font stack to ensure the accurate display (and control) of four types of service marks on all browsers and devices that support the inclusion of fonts using @font-face (including Android, [which does not support the service mark](http://code.google.com/p/android/issues/detail?id=18919)).