# Examples

## New instance

```js
const scanner = new CodeScanner('scanner');
```

## Basic scan

```js
scanner.start();

scanner.listener('onScan', (e) => {
    console.log(e.detail.code);
});
```

## Stop scanner video stream after successfully

```js
scanner.start();

scanner.listener('onScan', (e) => {
    scanner.stop();

    console.log(e.detail.code);
});
```

## Handle scan cancellation

```js
scanner.listener('onReturn', (e) => {
    console.log(e.detail.code);
});
```

## Store scanned codes

```js
const codes = [];

scanner.listener('onScan', (e) => {
    codes.push(e.detail.code);
});
```

## Prevent duplicate codes

```js
const codes = [];

scanner.listener('onScan', (e) => {
    if (codes.includes(e.detail.code)) {
        return;
    }

    codes.push(e.detail.code);
});
```

## Toggle scanner visibility

```js
openButton.addEventListener('click', () => {
    scannerContainer.classList.replace('hidden', 'visible');

    scanner.start();
});

scanner.listener(['onScan', 'onReturn'], () => {
    scannerContainer.classList.replace('visible', 'hidden');
});
```

---

[Documentations](../index.md)
