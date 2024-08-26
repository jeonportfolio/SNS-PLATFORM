## 프로젝트 생성 

＠ `npx expo init sns-Platfrom`<br>

## esLint 설치

@ `npm install --save-dev eslint`<br>
@ `npx eslint --init`<br>
@ package.json에 ` "test: typescript": "tsc","test: lint": "eslint ."` 추가<br>


## 부가기능 설치 

@ `npm install react-native-safe-area-context`<br>
@ `npm install --save @react-navigation/native`<br>
@ `npm install --save @react-navigation/native-stack @react-navigation/bottom-tabs`<br>
@ `npm install --save react-native-screens react-native-safe-area-context`<br>
@ `npm install --save redux react-redux redux-thunk redux-logger ` => 리덕스 상태관리<br>
@ `npm install --save-dev @types/redux-logger`<br>

## 네비게이션 

@ rootStack네비게이션과 BottomTabNavigation을 활용해 이동 <br>

## 리덕스 상태관리

@ action reducers store <br>
@ store에서 thunk와 logger 사용<br>
@ utils는 아무 작업도 안할때 사용하는 것<br>
@ types 폴더에 Feed와 User에 관한 데이터정의 <br>
@ action에서는 feed의 정보를 요청하여 성공과 실패를 보여준다.<br>
@ ThunkAction을 통해 각 action들을 관리
@ 각각 action과 Reducer 타입 정의가 이루어져야 한다.