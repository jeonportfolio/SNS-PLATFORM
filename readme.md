## 프로젝트 생성 

`npx expo init sns-Platfrom`

## esLint 설치

`npm install --save-dev eslint`
`npx eslint --init`
package.json에 ` "test: typescript": "tsc","test: lint": "eslint ."` 추가


## 부가기능 설치 

`npm install react-native-safe-area-context`
`npm install --save @react-navigation/native`
`npm install --save @react-navigation/native-stack @react-navigation/bottom-tabs`
`npm install --save react-native-screens react-native-safe-area-context`
`npm install --save redux react-redux redux-thunk redux-logger ` => 리덕스 상태관리
`npm install --save-dev @types/redux-logger`

## 네비게이션 

rootStack네비게이션과 BottomTabNavigation을 활용해 이동 

## 리덕스 상태관리

action reducers store 
store에서 thunk와 logger 사용