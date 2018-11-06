# E2E Testing React Native Expo App with Detox

## 1. Instruction How to install from this repo:

Run the commands:
```
npm install expo-cli -g detox-cli

npm install

brew update

brew tap wix/brew

brew install --HEAD applesimutils
```

**Run the file to copy the latest version of Exponent to /bin folder (the latest version you may find here https://expo.io/tools:**
```./setup.sh```

**In the first terminal window run the command:**
```expo start```
**After QR code will appeared click “i” on keyboard to open project in an emulator**

**In the second terminal window run:**
```detox test```
***And just wait some time until all tests pass**

**DONE!**

## 2. Instruction How To Create a new Expo/Detox project  follow these steps:

**Follow the steps:**
```
expo init
cd <project-folder>
npm install expo-cli detox-cli  -g 
npm install detox detox-expo-helpers expo-detox-hook mocha --save-dev
npm install
```
```
brew update
brew tap wix/brew
brew install --HEAD applesimutils
```
**Run the file to copy the latest version of Exponent to /bin folder (the latest version you may find here https://expo.io/tools:**
```./setup.sh```

**Also add these lines to Package.json:**
```
  "scripts": {
    "e2e": "detox test --configuration ios.sim"
  },

  "detox": {
    "configurations": {
      "ios.sim": {
        "binaryPath": "bin/Exponent.app",
        "type": "ios.simulator",
        "name": "iPhone 7"
      }
    }
  }
```
**In the first terminal window run the command:**
```expo start```
**After QR code will appeared click “i” on keyboard to open project in an emulator**

**In the second terminal window run:**
```detox test```
**And just wait some time until all tests pass**

**DONE!**
