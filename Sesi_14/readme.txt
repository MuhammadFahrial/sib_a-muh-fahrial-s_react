1. install expo
2. npm install -g eas-cli
3. npm install -g sharp-cli
4. set up avd (android studio)
5. alternatif emulator (memu)
6. setup adb 
    - https://adb.clockworkmod.com/

7. instalasi react native 
    - npx create-expo-app my-app
    - expo init my-app
    - running expo :
        - npx expo start
        - npx expo run:android
        - npx expo run:ios
    - npx expo start -c (untk nge clear metro bundler cache)
    - ctrl + m (untuk developer menu expo)
    - adb shell input keyevent 82
    - npx expo start --no-dev --minify (buat production)

8. deploy app react native (production / generate apk)
    - expo login (disaat pertama kali)
    - expo whoami
    - install eas (disaat pertama kali)
    - eas build:configure (generate file eas.json)
    - eas build --platform android
    - eas build -p android --profile preview (untuk custon no.9)
    - eas build --platform ios
    - eas build:list (new tab terminal untuk cek status build)
    - expo build:status (buat melihat status expo generate)

9. deploy aplikasi react native (preview apk)
    custom eas.json di bagian preview :
    "preview": {
            "android": {
                "buildType": "apk"
            }
        },

https://docs.expo.dev/
https://reactnative.dev/
https://snack.expo.dev/