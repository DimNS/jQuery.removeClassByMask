# jQuery.removeClassByMask
jQuery plugin for remove class by mask

## Requirements
1. jQuery v2+

## Install
```bash
npm i jquery-remove-class-by-mask
```

## Connect
```html
<script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
<script src="dist/jquery.remove-class-by-mask.min.js" type="text/javascript"></script>
```

## removeClassByMask(mask)
- `mask` *(string)* **required** - Mask with `*` symbols, symbol `*` changes to `\S+` regular expression

## Usage
```javascript
var elem = $('#elem');

// bg-success bg-danger text-white text-center
elem.addClass('bg-success bg-danger text-white text-center');

// text-white text-center
elem.removeClassByMask('bg-*');

// text-center
elem.removeClassByMask('*-white');
```