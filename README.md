# 🚀 리액트의 Context API 

## 📌 소개  
React의 Context API는 컴포넌트 트리 전체에 걸쳐 데이터를 효율적으로 전달할 수 있는 방법을 제공합니다. 이를 통해 Props Drilling 문제를 해결하고 애플리케이션의 상태관리를 보다 용이하게 할 수 있습니다.
그러나 Context API에서 값이 변경될 때마다 해당 Context를 사용하는 모든 컴포넌트가 불필요한 리렌더링을 일으켜 웹사이트의 성능을 저하시킵니다.

## 🎯 설명
- context API를 사용한 미니 프로젝트를 통해 이를 테스트하고 개선하는 방안을 마련
- 2개의 context API
  - ThemeContext (다크/라이트모드)
  - TimeContext (타이머, 메세지)
- 여기서, 2번째 api인 타이머에 각각 타이머와 메세지 두가지 상태를 담은상태로 컴포넌트를 분리시킴. 문제는 타이머컴포넌트만 리렌더링 되면 되는데 같은 context api를 공유하는 메세지컴포넌트도 같이 리렌더링 되는 문제를 발견할 수 있음 (이게 context api의 단점!!!!!!)'
<strong>(contextAPI 사용)</strong>
<image src="./src/assets/readme/context.jpg" width="350px" />
<strong>(zustand 사용)</strong>
<image src="./src/assets/readme/zustand.jpg" width="350px" />


