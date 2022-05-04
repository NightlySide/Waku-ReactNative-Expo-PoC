# Waku-ReactNative-Expo-PoC

A PoC to finally make js-waku work on react native

In order to install js-waku you need the following deps:

```bash
yarn add process big-integer text-encoding
```

Add the latest js-waku from github

```bash
cd ./node_modules/
git clone https://github.com/status-im/js-waku
```

Create a `metro.config.js` file in the root folder with the following content:

```js
const { getDefaultConfig } = require("@expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
	...defaultConfig,
	resolver: {
		extraNodeModules: {
			crypto: "node_modules/expo-crypto",
			stream: "node_modules/stream-browserify",
			process: "node_modules/process/browser.js",
			buffer: "node_modules/buffer",
			BigInt: "node_modules/big-integer"
		}
	}
};
```

Cd in js-waku and build the project:

```bash
cd ./js-waku/
yarn && yarn build
```

Then add it to the package.json file:

```json
{
	"dependencies": {
		"js-waku": "./node_modules/js-waku/"
	}
}
```

Go back to the root directory, add rn-nodeify and run the following command each time you install dependencies:

```
yarn add -D rn-nodeify
yarn run rn-nodeify --install --hack --yarn
```
