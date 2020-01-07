# BTB
Back To Basic - HTML, CSS, Javascript self-study

## HTML
1. HTML
https://opentutorials.org/course/3084

- 사람이 하는 일 = 원인
코드 또는 소스 또는 (컴퓨터)언어

- 기계가 하는 일 = 결과
어플리케이션(줄여서 앱, 한국어로 응용프로그램) 또는 프로그램

- 웹에셔는 결과가 웹페이지. 웹페이지가 모여있으면 웹사이트
기능이 많으면 웹어플리케이션 (웹앱)

즉, 원인인 코드를 통해서 결과를 만들어 내는 것이 코딩을 이해하는 핵심

---

웹페이지를 만드는 코드 = HTML!
HTML은 쉽고 저작권이 없는 퍼블릭 도메인이다


---
- 통계로 보는 웹페이지
https://www.advancedwebranking.com/html/

전 세계의 웹페이지들은 보통 25~26개 정도의 태그를 사용.
Top 25?
<head> <body> <html> <title> <meta>
<div> <a> <script> <link> <img>
<p> <span> <li> <ul> <br>
<style> <h1> <h2> <input> <form>
<strong> <h3> <table> <tr> <td>
---

- new line == <br>
어? 닫는 태그가 없네...
HTML의 여러 태그 중 무엇인가를 설명하지 않는 태그들은 감싸야하는 컨텐츠가 없으므로 태그를 닫지 않는 규칙이 있음. (ex. <img>, <input>, <br>, <hr>, <meta>)

- 단락을 만들려면 <p></p>

- <br>? <p></p>?
단락을 표현할 때는 줄바꿈보다는 단락태그가 낫다.
왜? 단락에 단락 태그를 사용하는 것이 웹페이지를 정보로써 보다 가치있게 해주기 때문.

단, p태근는 단락과 단락의 간격이 고정되어 있어서 시각적 자유도가 떨어짐
근데, br태그는 쓰는만큼 줄바꿈이 되어서 원하는 만큼 간격 줄 수 있음 -> 그래서 사람들이 br 많이 쓰는데...
해당 문제는 CSS 사용하면 극복 가능!

- HTML이 정보를 표현한다면, CSS는 정보를 꾸며준다!
`<p style="margin-top: 45px;">....</p>`

---

`<h3>coding</h3>`
`<strong><span style="font-size:22px;">coding</span></strong>`

둘 다 시각적으로는 동일한 제목임.
검색 엔진은 전세계 웹페이지를 분석하고 검색결과를 보여주는데, 만약 사용자가 검색엔진에게 coding이라는 정보를 검색했다면, 검색엔진은 <h3> 으로 감싸진 페이지를 먼저 보여준다.
왜? <h3>은 제목을 의미하지만 <strong><span>... 이건 그냥 시각적인 장식이기 때문.

오늘날 정보의 세계에서 검색엔진의 검색결과에 노출되느냐 아니냐는 실제로 존재하는가 아닌가의 차이라고 생각할 수도 있을 정도로 크다.
따라서.. HTML을 의미에 잘 맞게 사용하는 것이 중요하다! (business 적으로 이득)
또한, HTML을 의미론적으로 잘 사용하는 것은 다른 사람들에게 도움이 될 수 있게 하는 것과 같다. (humanism 적으로 이득)

---

- 속성 (attribute)
태그의 심화된 문법

태그를 만든 사람들은 태그 이름 만으로는 정보가 부족하다는 것을 깨달음.
따라서 새로운 문법인 `속성`을 도입/적용.
- <img> == 태그
이미지이긴 한데 도대체 뭔 이미지를 표현하라는거야?
<img src="final.jpg"> === 속성을 적용한 태그
아하! ...이 source인 img를 표현하라는 거구나!

img - 태그
src - 속성
final.jpg - 속성의 값

---

- 부모/자식
태그 간의 관계를 나타냄
<p> - 부모
  <a> - 자식
  </a>
</p>

단, 꼭 p태그가 a태그의 부모라는 법은 없음.
그런데, 몇몇 태그들은 고정된 관계임. (밑에서 사용할 <ul><li></li</ul> / <ol><li></li></ol>)

- 목차..
list!  -> <li>

목차와 목록 간 구분, 즉 경계가 필요하다! -> <ul> == unordered list
숫자를 수반한 태그는 -> <ol> == ordered list
<ul> 태그는 <li> 태그를 반드시 필요로 하고, <li> 태그는 <ul> 태그를 반드시 필요로 한다. 밀접한 관계

---
<문서의 구조>
- 제목 지정 == <title>
title 태그는 검색엔진이 웹페이즈를 분석할 때 가장 중요하게 생각하는 태그!!

가끔씩 문자가 깨질 때가 있는데 웹페이지가 UTF-8 방식으로 저장되었다면 웹페이지를 열 때도 UTF-8 방식으로 열어야한다. 
즉, 웹페이지가 저장된 문자 표현 방식과 웹브라우저가 웹페이지를 해석하는 방식이 일치하지 않아서 생기는 문제.
해결? 브라우저한테 말하는거지. "웹 브라우저야~ 이 웹페이지는 UTF-8로 만들어졌으니까 UTF-8로 열어줘야해!" == <meta charset="utf-8">

HTML 만든 사람들은 본문과 본문을 설명하는 정보를 서로 다른 태그로 분리해서 정리 정돈하기로 함
<body> == 본문
<head> == 본문을 설명하는 태그

또, body 태그와 head 태그를 감싸는 하나의 태그를 둔다. -> 그게 html 태그임

또, 이 웹페이지가 HTML로서 만들어졌다는 것을 표현하기 위해 문서 시작에 <!doctype html> 코드 추가

---

<HTML 태그의 제왕>
HyperText가 바로 이 태그를 의미한다!
뭐냐구? <a> 태그! 링크 태그!
<a href="https://www.w3.org/TR/html5/" target="_blank" title="html5 specification"></a>
a == anchor
href == hypertext reference
target == 링크 클릭시 어떻게 페이지 열릴지 지정하는 속성
title == 링크가 어떤 내용을 담고 있는지 툴팁으로 보여주는 속성


- 여기까지가 웹페이지 만드는 방법과 페이지와 페이지를 연결하는 방법(링크)을 배움
- 링크를 통해 서로 결합되어 있는 웹페이지의 그룹을 웹사이트라고 칭함

... 이젠 웹사이트를 만들어보자!
웹페이지와 그것을 연결하는 링크만 있으면 웹사이트 만들 수 있다.

---
<원시웹>
- 인터넷 vs 웹
인터넷이 도시라면 웹은 도시 위에 있는 건물.
인터넷이 도로라면 웹은 도로 위를 달리는 자동차.
1960 인터넷 탄생
1990 웹 시작

- 최초의 웹페이지 by 팀 버너스리
http://info.cern.ch


---
<서버와 클라이언트>
인터넷이 동작하려면 최소 2개의 컴퓨터가 필요.
팀 버너스리가 인터넷을 이용해서 웹을 만들기로 함
Web Browser <---connected---> Web Server
(program)                     (program)

웹 서버가 설치된 컴에는 info.cern.ch라는 주소 부여. 그리고 이 컴퓨터의 어떤 디렉토리에 index.html 파일 저장.

웹 브라우저가 설치된 컴퓨터의 주소창에 info.cern.ch/index.html 이라는 주소를 입력하고 엔터치면...

(client)                   (server)
Web Browser ---request---> Web Server
           <---response---
index.html                 index.html 


- 요청하는 컴퓨터는 클라이언트 컴퓨터, 응답하는 컴퓨터는 서버 컴퓨터 
- 그래서 웹브라우저가 웹클라이언트라고 불리기도 함 (웹브라우저가 클라이언트에서 동작하니까)
- 그래서 웹서버가 웹서버라고 불리는것 (웹서버거 서버에서 동작하니까)
- same as 채팅서버, 채팅클라이언트 / 게임서버, 게임클라이언트

- (Easy) Web hosting
- (Hard) Web server 직접 설치

---
<Web hosting>

- using github pages

---
<웹서버 운영하기>
- 웹서버라는 프로그램을 설치해야 한다.
웹 서버라는 제품군에는 여러 제품들이 있다. (Apache, IIS, Nginx 등등)

- bitnami MAMP Stack
M(ac) A(pache) M(ySQL) P(HP)
Apache 웹서버를 설치하기 위해 bitnami를 까는 것

웹서버 설치 완료!

- http://localhost:8081 === http://localhost:8081/index.html === http://127.0.0.1:8081/index.html
localhost - 도메인 네임
127.0.0.1 - ip 주소 

- 응용프로그램 > mampstack-7.3.12-0 > apache2 > htdocs
여기다가 프로젝트 파일들 옮기가

- 웹서버와 웹브라우저의 통신
현재 ip 주소 확인하기: 설정 > 네트워크 > 고급 > TCP/IP탭 > ip 주소
172.30.63.9:8081/index.html
Web Browser ---------------------> Web Server
            <--------------------- index.html
                                172.30.63.9:8081
                                   
스벅은 주소를 가변으로 줘서 안되는듯

---
<마치며>
- 웹페이지(웹사이트)를 아름답게 하려면 CSS를 배워야한다. > 이거 이후에 웹 다자이너, 웹 퍼블리셔같은 직업이 생김
- 사용자와 상호작용 하는 웹페이지(웹사이트)를 만들고 샆으면 Javascript를 배워야한다. > 웹 프론트앤드 엔지니어 같은 직업이 발달

---
<부록>
- 댓글 기능 달기 using Disqus
https://disqus.com/

---

## CSS

<CSS 등장 이전에는...>
```
<li>
  <a href="html.html">
    <font color="red">HTML</font>
  </a>
</li>
```
- li, a 라는 정보 안에 폰트 컬러라는 의미없는 정보가 담겨져있음
- a 태그가 1억개면 어떻게 다 바꿀건데?
- 태그는 근본적인 해결책이 되지 못한다.

--
<CSS의 등장>

- 웹브라우저가 처음 나왔을때 웹브라우저는 HTML만 해석해서 처리하는 프로그램이었다. 그래서 웹브라우저는 기본적으로 코드를 HTML이라고 생각한다.

- 그러니까 이건 CSS 문법이라고 해석해야한다고 알려줘야 함. === <style></style> 태그 사용

- 코딩을 잘하는 법 => `중복의 제거`

---
<속성의 기본>
- 전체에다가 적용 안하고 싶으면 style 이라는 속성을 사용
<a href="2.html" style="color:red;">CSS</a>
"color:red;" 는 html의 속성이다.
style 이라는 속성은 그 값으로 css의 효과가 들어와야 함.

선택자? `a {color:red}`에서 a가 선택자임

따라서, 웹페이지 안에서 CSS를 삽입하는 방법 2가지
1. 스타일 태그를 쓴다 <style> a {color: red} </style>
2. 스타일 속성을 쓴다 <a href="..." style="color: red"> </a>

---

a {  // selector
  color: red; // declaration 어떤 효과를 줄 것인가? 선언. 효과
// property: value  
} 

---

<CSS 선택자를 스스로 알아내는 방법>
모든 링크는 검은색 / 방문한 링크는 회색 / 현재 링크는 빨간색으로 바꾸고 싶어...
우리가 알던 방법? 인라인 스타일 태그 사용 > but, 중복되는 코드 발생(불-편)
그 그룹에 대해서 폰트 컬러를 회색으로 주면 된다. > class라는 html의 속성을 주는 것. 

- class 값 지정? . 붙이자! (선택자)
- 여러개 지정 가능 (class="saw active" .saw {..}  .active {...}) > 좋은 방법이 아니다. 
왜? saw보다 active가 먼저 있기 때문에 빨간색이 된 것. 동일한 우선순위면 마지막거에 영향력을 받는다. 
- 좀 더 우선순위 높은거 쓰는게 좋음 > id!
- id 값 지정? # 붙이자!
- id 선택자 > class 선택자 > 일반 태그 선택자 (우선순위 높은 순)
- 왜 우선순위가 이따구임? 
웹 페이지에서 id의 값은 단 한번만 등장해야 함. 유일무이한 값
일반 태그 선택자가 id 선택자보다 훨씬 포괄적임. 그래서 구체적인 것이 포괄적인 것 보다 우선순위가 높다. class 선택자는 중간 정도임. 
- CSS Selectors

---

<CSS Box Model>
- h1 태그는 한줄을 차지하고 있음. 
- 반면 링크(a태그)는 한줄 차지하지 않고 딱 자기 컨텐츠 크기 만큼만을 쓴다.
- 화면 전체를 쓰는 태그: block level element (ex. h1)
- 자기 컨텐츠 크기만큼 갖는 태그: inline element (ex. a)
- 블록 레벨 엘리먼트를 자신의 부피만큼 쓰게 하려면 display: inline으로 쓰면 됌. 
- 인라인 엘리먼트를 화면 전체를 쓰게 하고 싶으면 display: block으로 쓰면 됌.


- 컨텐트와 테두리 사이 여백 주고싶으면: padding
- 테두리와 테두리 사이에 간격 주고싶으면: margin

- 개발자도구 사용해서 보자 

- CSS Box Model이란... html 태그 하나하나를 박스로 생각해서 부피감을 결정하는 것

<Box Model 써먹기>
- ol 태그는 화면 전체를 쓰는 block level element임


---
<그리드>
- 최신기술~
- 아니 그냥 칸만 나누려고 태그를 쓰는데 h1태그 이런거 쓰면 이상하잖아...
- 디자인을 목적으로 사용하는 무색무취의 태그 > div 태그! 
- 아무 의미 없고 디자인을 위해서 사용하는 태그
- div 태그: 기본적으로 block level element. 따라서 화면 전체를 사용한다.
- span 태그: div와 동일한 목적으로 사용되지만 inline element.


- 두개의 div(block level element)를 나란히 두고 싶으면 일단 부모 div 태그가 필요함.
- 부모에 display의 grid라는 속성을 쓰게 되면... 아무런 변화가 없음 ㅎ
- 여기다가 `grid-template-columns: 150px 1fr;` 을 주면 한줄에 첫번째 애는 150px, 두번째 애는 나머지 공간 차지하게 됌.
- 1fr? 이거 쓰면 좋은게 텍스트 길이가 바뀌어도 그리드의 다른 요소도 자동으로 크기가 줄어들고 늘어나고 함.

- 최신 기술을 써도 되는가 판단하는 법? https://caniuse.com/
- 현재 웹 브라우저들이 얼마나 기술을 지원하고 있는지 보여줌


<그리드 써먹기>
- 의미도, 기능도 없는 태그 div

---
<반응형 디자인과 미디어 쿼리 소개>
- 반응형 웹. 반응형 디자인. Responsive Web
- 운영체제와 상관 없이, 디바이스와 상관없이 모든 시스템에서 동작하는 정보시스템임. 수많은 형태의 화면에서 동작해야 함.
- 그래서 웹을 만드는 사람들은 여러화면에 대응하는 웹페이지를 만들어야 했음. 걸림돌이고 단점이고 그랬음. > 반응형 디자인이 나온 이유

- 반응형 디자인: 화면에 크기에 따라서 웹페이지의 각 요소들이 반응해서 동작하게 된다. 

<미디어 쿼리>
- 화면의 크기에 따라서 디자인을 다르게 해보자.
```
<!-- screen width > 800px -->
최소한의 너비가 800px은 되어야 한다. 
800px이 안되면 div가 사라지게 만들 것
@media(min-width: 800px) {
  div {
    display: none;
  }
}
```

```
<!-- screen width < 800px -->
최대한의 너비가 800px이 되어야 한다.
800px이 넘으면 div가 사라지게 만들 것
@media(max-width: 800px) {
  div {
    display: none;
  }
}
```

---

<CSS 코드의 재사용>
- `<link rel="stylesheet" href="style.css">`
- 링크 태그를 사용하자아

- 웹 페이지 안에 css를 놓는게 더 효율적임
- 하지만 캐싱때문에 그렇지 않음 (?)
- 한번 style.css를 받으면 웹브라우저는 우리 컴퓨터에 저장해놨다가 저장된 결과를 가져와서 속도를 높일 수 있음 (네트워크 사용 X), 사업자들은 돈을 덜 쓸 수 있음
- 캐시로 인해서 훨씬 더 빠르게 웹페이지를 보여줄 수 있으면서 네트워크 사용료도 더 적게 낼 수 있다.

- 따라서 별도의 파일로 꺼내서 중복을 제거하는 게 결과론적으로는 더 효율적이다.

---

<마무리>
- 선택자와 속성
속성을 알면 알 수록 더 풍부하게 표현할 수 있고
선택자를 알면 알 수록 더 정확햐게 표현할 수 있음.


---

## Javascript

- 자바스크립트는 사용자와의 상호작용을 위한 것
- 웹페이지를 동적으로 만들어 줌

---
<script 태그>
- 자바스크립트는 HTML 위에서 동작하는 언어
- <script></script> 안의 태그를 자바스크립트로 인식
- 
```
<script>
  document.write("same")
</script>
```
body 태그 안에 same 쓰는 거랑 동일한 모양새의 코드인데 뭐가 다름?

- html 1+1은 영원히 1+1임
- javascript 1+1은 숫자로 인식해서 계산기처럼 2로 인식

---

<이벤트>
- onclick 속성: 속성 값으로 반드시 javascript가 와야한다. onclick 속성의 속성값은 웹브라우저가 기억하고있다가 js 코드를 js 문법에 따라 해석해서 웹브라우저가 동작함.  -> onclick을 이벤트라고 함
- 이벤트
- 웹브라우저에서 일어 날 수 있는 이벤트? onclick / onchange/ onkeydown 등등 (검색해봐)



---

<콘솔>
- 관리자 페이지 > console
- 문자열.length
- 콘솔에서 실행되는 자바스크립트는 해당 웹페이지 안에서 삽입되어 있는 자바스크립트처럼 동작한다.
해당 웹페이지 대상으로 실행된다.


---

<데이터타입(자료형) - 문자열과 숫자>
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures

- Boolean, Null, Undefined, Number, String, Symbol(ES6) + Object

- javascript s tring event
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String
.length
.toUpperCase()
.indexOf()
.trim() 앞 뒤 공백 삭제

- 1+1 => 2
- "1"+"1" => "11"

---

<변수와 대입 연산자>
```
x = 1;
x는 변수
=는 대입 연산자

좌항과 우항을 결합하여 우항의 값을 만들어 낸다.


1 = 2; // 오류남
1은 상수이기 때문에 변수를 대입할 수 없다.

constant vs variable
```
- 콘솔창에서 실행을 유보시키고 싶으면 shift+Enter
- 변수를 사용할땐 가급적 var 붙여주길.....

---

<웹브라우저 제어>
- 버튼 클릭 했을 때 `<body style="background-color: black; color: white;">` 이렇게 스타일 바꾸고 싶다.
- 그런데 html은 정적인 언어라 로딩되면 바꿀 수가 없는데...

---

<CSS 기초> -> 넘어감
* CSS는 어떤 목적의 언어인가요?
웹페이지를 스타일링 하기 위한 언어
* CSS를 웹페이지에 삽입하는 방법은 무엇인가요?
스타일 태그를 사용하거나 스타일 속성을 사용한다
* style 속성은 무엇인가요? 
<a style="color:red"></a>와 같이 태그 안에 속성으로 CSS 값을 삽입해서 스타일을 표현하는 것을 말한다.
* 선택자가 무엇인가요?
a {
   color: red;
} 
라는 코드에서 a를 선택자라고 하면 html의 특정 태그를 선택하여 어떤 효과를 줄것인지 선택/결정하는 것.
태그 선택자 외에 클래스 선택자(.), id 선택자(#) 등이 있다. 


---

<제어할 태그 선택하기>
- javascript select tag by css selector
https://developer.mozilla.org/ko/docs/Web/API/Document/querySelector
`document.querySelector(selectors);`

getElementById
querySelector('body').style.color="red";

---

<프로그램, 프로그래밍, 프로그래머>

시초는 연주회의 순서를 부르는 단어가 프로그램.
순서를 프로그램이라고 함.
이 순서를 만드는 행위를 프로그래밍.
순서를 만드는 사람을 프로그래머.

반복적인이게 하는 일.. 불행하고 빡치는 일... 이를 극복하기 위해 프로그래밍 언어를 만듦.

다만 html은 묘사의 언어라서 (웹페이지를 그려내는) 순서고 반복이고가 없음. 
하지만 js는 사용자와 상호작용하기 위해 고안된거고 시간의 순서에따라 웹브라우저의 여러 기능이 실행되어야하기 때문에 프로그래밍이라는 형태를 띄고 있고 이가 html과 Js가 다르게 된 큰 특징이다.

근데... 쓰다보니까 
조건에 따라서 다른기능이 실행되게 하고
반복적으로 기능이 실행되게 하고
순서를 정리정돈하고 싶어하고
이러한 방법들이 고안된 것. (조건문, 반복문, 함수)


---
<조건문>
- 토글 구현!
- 비교연산자, boolean, 조건문 강의 스킵

콘솔에서 
document.querySelector('#night_day).value 쳐보면서 확인하고... 

---
<리팩토링>
코딩을 하고 나면 코드가 좀 비효율 적인 면이 생기기 마련.
동작하는 것은 그대로 두고 코드 자체를 효율적으로 만들어서 가독성 높이고, 유지보수 쉽게 하고, 중복된 것 낮추고 -> 리펙토링
틈틈히 리팩토링 해야 좋은 프로그램 만들 수 있다. 

- `this라는 키워드는 자신이 포함된 tag를 가리킨다.`

- 코딩 잘하는 법? 중복을 끝까지 찾아가서 없애라아

--- 
<반복문/배열>
- 배열
연관된 데이터를 담아두는 수납상자
`var message = ["Diana", "hello"];`

- 반복문 
while()

<배열과 반복문의 활용>
- 야간모드일때는 링크가 밝게, 주간모드일때는 링크가 어둡게 

- querySelector은 맨처음 한개만 가져옴. 모든 a 엘레먼트들을 가져오고싶으면?
`querySelectorAll('a')`
근데 배열이라 반복문으로 돌려야함.

---
<함수>
- 웹페이지가 커지면 인터넷을 통해서 전송할때 비용, 시간, 노력도 비례해서 커진다는 소리.

```
function nightDayHandler() { 
  ...
}
```

- 함수는 수납상자 같은 것.
- parameter & argument, return

```
function nightDayHandler(parameter) { // 매개변수
  ...

  return parameter++; // 반환값
}

nightDayHandler(argument); // 인자
```

- 기존코드 리펙토링 (this는 더이상 this가 아니게 된다. 인자로 전달하고 함수에서 매개변수로 받이서 this를 대체할 수 있게 해야함)

---
<객체>
- 객체: 이름이 있는 정리정돈 상자
property란 객체 내부의 속성으로 key, value로 구성된다. .으로 접근 가능하다
```
var coworkers = {
  "programmer" : "hello", // key : value
  "designer" : "world",
}
// 추가 시
coworkers.bookkeeper = "duru";
coworkers["data scientist"] = "taeho";
```

- 객체와 반복문
```
for(var key in coworkers) {
  document.write(key + ": " + coworkers[key] + "<br>");
}
```

- 객체 프로퍼티와 메소드
Object 안에 property로 function도 넣을 수 있다. 
```
// 함수 선언
coworkers.showAll = function () {
  for (var key in cowokers) {
      document.write(key + ": " + coworkers[key] + '<br>')
  }
}

coworkers.showAll(); //호출
```
근데 객체 이름이 바뀌면 어쩔건데? coworkers 가 colleagues로 바뀌면... -> this 쓰자!

```
//이젠 여기 coworkers만 바꿔주면 된다!
coworkers.showAll = function () {
  for (var key in this) {
      document.write(key + ": " + this[key] + '<br>')
  }
}
```
