<h1>몽블랑 리조트</h1>
<p>
가상의 스키장 리조트인 '몽블랑 리조트'를 만들어 반응형으로 퍼블리싱하였습니다. 몽블랑은 프랑스어로 설산을 의미하며 설원에서 펼쳐지는 겨울의 즐거움을 주제로 '몽블랑 리조트'라는 이름으로 결정하였습니다.
<br>
스키를 즐겨타는 어머니 덕분에 저는 겨울하면 스키가 먼저 떠오르곤 했습니다. 새로 만들 사이트를 정할 당시 계절은 겨울이었고, 그렇다면 스키장 사이트를 만들면 어떨까?라는 생각에 금방 도달할 수 있었습니다. 국내의 여러 기존 스키장 사이트를 참고하여 이미지와 자료를 수집하였고, 어머니께도 여쭈어보며 평소 스키장 사이트나 앱을 이용할 때 불편했던 점이나 필요하다고 생각했던 점을 정리하여 새로운 사이트를 기획할 때 이를 반영하려 노력하였습니다.
<br>
<br>
메인페이지와 서브페이지 6개를 구현하였으며, 현재 날씨 부분은 공공데이터포털의 초단기기상예보 api를 활용하였습니다.
</p>
<a href="http://hyj01.dothome.co.kr/">몽블랑리조트 사이트 바로가기</a>
<br>
<br>
<br>
<h2>🗓️ 제작 기간</h2>
> 2022. 11. 28. ~ 2022. 12. 30.
<h2>📸 완성 화면</h2>
<div align="center"><img alt="PC 완성화면" src="/capture/pc_main.jpg" /></div>
<table>
  <tr>
    <td width="55%"><img alt="태블릿 완성화면" src="/capture/t_main.jpg" /></td>
    <td width="45%"><img alt="모바일 완성화면" src="/capture/m_main.jpg" /></td>
  </tr>
</table>
<h2>🛠 활용 tool 및 language</h2>
<ul>
  <li>HTML5</li>
  <li>CSS3</li>
  <li>Javascript</li>
  <li>VS Code</li>
  <li>Photoshop</li>
</ul>
<br>
<h2>📚 화면 구조</h2>
<ul>
  <li>
    Main
    <ol>
      <li>header</li>
      <li>Section 1 : Main Visual</li>
      <li>Section 2 : Quick Menu</li>
      <li>Section 3 : Slope</li>
      <li>Section 4 : Promotion</li>
      <li>footer</li>
    </ol>
  </li>
  <li>
    Sub
    <ol>
      <li>Sub 1-1 : 몽블랑리조트 소개</li>
      <li>Sub 2-1 : 슬로프 안내</li>
      <li>Sub 3-1 : 워터파크 이용안내</li>
      <li>Sub 4-1 : 객실 이용안내</li>
      <li>Sub 5-1 : 다이닝</li>
      <li>Sub 6-1 : 공지사항</li>
    </ol>
  </li>
</ul>
<h2>📋 구현 기능</h2>
<h3>Main</h3>
  <table align="center">
    <tr>
      <td><img alt="PC 완성화면" src="/capture/resort_d_1.gif" /></td>
      <td><img alt="PC 내비게이션" src="/capture/resort_t_1.gif" /></td>
      <td><img alt="모바일 내비게이션" src="/capture/resort_m_1.gif" /></td>
    </tr>
  </table>
  <ul>
    <li>국내 여러 스키장 사이트를 참고하여 기본 스키장 + 워터파크와 숙박시설을 갖춘 스키장을 주제로 정보를 구성하였습니다.</li>
    <li>PC에서는 글로벌 내비게이션에 마우스를 갖다대면 풀다운 메뉴가 펼쳐지며, 태블릿과 모바일에서는 토글 버튼이 보이며, 버튼을 누르면 아코디언 메뉴가 슬라이드 되어 나타납니다.</li>
    <li>화면 하단에 중요 공지사항을 fixed하여 보여주는데, 태블릿과 모바일에서는 이 때 기준으로 삼은 강원도 평창의 현재 날씨를 함께 보여주며 PC에서는 글로벌 내비게이션에 포함되어 보입니다.</li>
    <li>스크롤을 내려 Quick Menu에 일정 부분 이상 진입하면 통통 튀어오르는 듯한 애니메이션을 class에 주었습니다.</li>
    <li>Promotion 섹션의 Swiper은 PC에서 contents header의 p와 pagination을 반응하도록 하고 태블릿과 모바일에서는 각 swiper-slide 안의 p가 반응하도록 하였으며 반응형에 따라 slide-per-view나 세부 사항을 바뀌도록 하였습니다.</li>
  </ul>
<h3>Sub 1</h3>
  <table align="center">
    <tr>
      <td><img alt="PC 완성화면" src="/capture/resort_d_2.gif" /></td>
      <td><img alt="PC 내비게이션" src="/capture/resort_t_2.gif" /></td>
      <td><img alt="모바일 내비게이션" src="/capture/resort_m_2.gif" /></td>
    </tr>
  </table>
  
  <ul>
    <li></li>
  </ul>
<h3>Sub 2</h3>
  <table align="center">
    <tr>
      <td><img alt="PC 완성화면" src="/capture/resort_d_3.gif" /></td>
      <td><img alt="PC 내비게이션" src="/capture/resort_t_3.gif" /></td>
      <td><img alt="모바일 내비게이션" src="/capture/resort_m_3.gif" /></td>
    </tr>
  </table>
  
  <ul>
    <li></li>
  </ul>
<h3>Sub 3</h3>
  <table align="center">
    <tr>
      <td><img alt="PC 완성화면" src="/capture/resort_d_4.gif" /></td>
      <td><img alt="PC 내비게이션" src="/capture/resort_t_4.gif" /></td>
      <td><img alt="모바일 내비게이션" src="/capture/resort_m_4.gif" /></td>
    </tr>
  </table>
  
  <ul>
    <li></li>
  </ul>
<h3>Sub 4</h3>
  <table align="center">
    <tr>
      <td><img alt="PC 완성화면" src="/capture/resort_d_5.gif" /></td>
      <td><img alt="PC 내비게이션" src="/capture/resort_t_5.gif" /></td>
      <td><img alt="모바일 내비게이션" src="/capture/resort_m_5.gif" /></td>
    </tr>
  </table>
  
  <ul>
    <li></li>
  </ul>
<h3>Sub 5</h3>
  <table align="center">
    <tr>
      <td><img alt="PC 완성화면" src="/capture/resort_d_6.gif" /></td>
      <td><img alt="PC 내비게이션" src="/capture/resort_t_6.gif" /></td>
      <td><img alt="모바일 내비게이션" src="/capture/resort_m_6.gif" /></td>
    </tr>
  </table>
  
  <ul>
    <li></li>
  </ul>
<h3>Sub 6</h3>
  <table align="center">
    <tr>
      <td><img alt="PC 완성화면" src="/capture/resort_d_7.gif" /></td>
      <td><img alt="PC 내비게이션" src="/capture/resort_t_7.gif" /></td>
      <td><img alt="모바일 내비게이션" src="/capture/resort_m_7.gif" /></td>
    </tr>
  </table>
  
  <ul>
    <li></li>
  </ul>
