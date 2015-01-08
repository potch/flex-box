# &lt;flex-box>

A Custom Element to make the basics of flexbox easier to use

## Usage


```html
  <flex-box axis="y">
    <header></header>
    <section flex></section>
    <footer></footer>
  </flex>
```

## Attributes

### `axis`

Controls direction of layout. `axis="x"` for horizontal layout, `axis="y"` for vertical layout (default)

### `fill`

The `<flex-box>` element will size itself to `width: 100%` and `height: 100%`. Useful for top-level layout.

### `flex`

Place this attribute on direct children to make them flex to take up available excess width.
