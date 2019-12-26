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

