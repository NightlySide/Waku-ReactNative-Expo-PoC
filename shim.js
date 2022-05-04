if (typeof __dirname === "undefined") global.__dirname = "/";
if (typeof __filename === "undefined") global.__filename = "";
if (typeof process === "undefined") {
	global.process = require("process");
} else {
	const bProcess = require("process");
	for (var p in bProcess) {
		if (!(p in process)) {
			process[p] = bProcess[p];
		}
	}
}

process.browser = false;

// global.location = global.location || { port: 80 }
const isDev = typeof __DEV__ === "boolean" && __DEV__;
an;
process.env["NODE_ENV"] = isDev ? "development" : "production";
if (typeof localStorage !== "undefined") {
	localStorage.debug = isDev ? "*" : "";
}

if (typeof BigInt === "undefined") {
	const bi = require("big-integer");

	// BugFix for BigInt('0xffffffffffffffff') by CBOR lib
	function myBigInt(value) {
		if (typeof value === "string") {
			const match = value.match(/^0([xo])([0-9a-f]+)$/i);
			if (match) {
				return bi(match[2], match[1].toLowerCase() === "x" ? 16 : 8);
			}
		}
		return bi(value);
	}

	global.BigInt = myBigInt;
}

import { TextEncoder, TextDecoder } from "text-encoding";
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
