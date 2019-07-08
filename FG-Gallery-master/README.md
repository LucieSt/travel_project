# FG-Gallery
Stand alone javascript gallery plugin. No libraries.
## How to use
Wrap images inside the "fg-gallery" div
Add additional class if necessary
```
<div class="fg-gallery additional-class">
  <img src="image.jpg" />
  <img src="image.jpg" />
  <img src="image.jpg" />
</div>
```
You can provide image columns and styles
Initialize and add options using code below
```
new FgGallery('.fg-gallery', {
    cols: 4,
    style: {
        border: '10px solid #fff',
        height: '180px',
        borderRadius: '5px',
        boxShadow: '0 2px 10px -5px #858585',
    }
})
```
