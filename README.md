# Waku-ReactNative-Expo-PoC

A PoC to finally make js-waku work on react native

In order to install js-waku you need the following deps:

```bash
yarn add process big-integer text-encoding
```

Add rn-nodeify and run the following command each time you install dependencies:

```
yarn add -D rn-nodeify
yarn run rn-nodeify --install --hack --yarn
```
