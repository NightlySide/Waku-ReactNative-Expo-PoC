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
