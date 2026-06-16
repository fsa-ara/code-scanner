# Quick start

## HTML / CSS

The scanner container must have an explicit width and height.

```html
<div id="scanner"></div>
```

```css
#scanner {
    width: 100%;
    height: 100dvh;
}
```

## JS

```js
import { CodeScanner } from './CodeScanner';

const cs = new CodeScanner('scanner');

cs.start();

cs.listener('onScan', (e) => {});
```

---

[Documentations](../index.md)
