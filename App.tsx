import "./shim.js";
import "react-native-get-random-values";

import { StatusBar } from "expo-status-bar";
import { Waku } from "js-waku";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
	const [waku, setWaku] = useState<undefined | Waku>();
	const [status, setStatus] = useState("Not connected");

	useEffect(() => {
		if (waku) return;
		if (status !== "Not connected") return;

		const initWaku = async () => {
			setStatus("Connection...");
			const w = await Waku.create({ bootstrap: { default: true } });
			setWaku(w);
			setStatus("Connected!");
		};
		initWaku();
	}, [waku, status]);

	return (
		<View style={styles.container}>
			<Text>Open up App.tsx to start working on your app!</Text>
			<Text>{status}</Text>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
