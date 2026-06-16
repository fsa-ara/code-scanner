# Events

All scanner events can be listened to using the `listener()` method.

Available events:

- `onScan`
- `onReturn`

## onScan

Triggered when a code is successfully scanned.

### Event detail

- `code` (`string`) — The scanned code value.

```js
cs.listener('onScan', (e) => {
    console.log(e.detail.code);
});
```

## onReturn

Triggered when the user cancels the scan.

```js
cs.listener('onReturn', () => {
    console.log('Scan cancelled');
});
```

---

[Documentations](../index.md)
