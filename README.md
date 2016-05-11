# curver

> Easily fetch the latest version of node module available on npm.

Scraps the current version of a node module from it's readme page. Basically from sidebar.
Does not look version from package.json file.

## Install 

```
$ npm install --save curver
```

## Usage

```js

const curver = require('curver');

curver('packstat').then(currentVersion => {
	console.log(currentVersion);
	// { latestVersion: '1.0.4' }
})

```
## Related

- [curver-cli](https://github.com/CodeDotJS/curver-cli) : CLI Tool for curver.

## License

MIT &copy; [Rishi Giri](http://rishigiri.com)