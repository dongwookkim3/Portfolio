---
title: PECO
projectName: R2BOT
publishDate: 2025-04-23 00:00:01
status: 완료
img: /assets/project/peco/Group1.jpg
description: |
  자율주행 교내 짐 운반 및 안내 서비스
tags:
  - ROS2
  - STM32
  - RaspberryPI
  - Arduino
  - AutoCAD
  - Fusion360
  - RDK X3
  - Jetson Nano
  - JavaScript
  - FastAPI
  - MQTT
  - LLAMA3.1 8B
---


### 1. 프로젝트 소개

R2BOT은 교내를 자율적으로 이동하며 짐을 운반하거나 방문객을 목적지까지 안내할 수 있는 자율주행 서비스 로봇이다.

이 프로젝트는 학교에 처음 방문하는 신입생이나 외부 손님처럼 캠퍼스 구조에 익숙하지 않은 사람들을 돕기 위해 시작되었다. 

사용자는 목적지를 입력하면 로봇이 해당 위치까지 안내하며, 캠퍼스를 잘 알고 있는 사용자라면 물건을 싣고 짐 운반용으로도 활용할 수 있다.

이처럼 R2BOT은 안내와 운반이라는 두 가지 기능을 겸비한 실용적인 자율주행 로봇으로, 누구나 쉽게 사용할 수 있도록 설계되었다.

### 2. 프로젝트 미리보기

##### 2륜 초기 시연영상

<button class="toggle-btn" data-id="robot-specs">
  <span class="arrow">▶</span> 영상 당시 세팅
</button>
<div class="spec-list" id="robot-specs">
  <ul>
    <li>메인 컨트롤러 : RDK X3</li>
    <li>MCU : NUCLEO-F755ZI-Q</li>
    <li>배터리 : 24V, 3.4A, 45C (2개 병렬연결)</li>
    <li>로봇 무게 : 약 50KG ~ 60KG</li>
    <li>로봇 크기 : 50 * 50 * 35+a (cm)</li>
    <li>모터 : BL41105</li>
    <li>모터드라이버 : BDD-860S</li>
    <li>로봇 정격중량 : 약 100KG (150KG-로봇 무게)</li>
    <li>최소속도 : 5Km/h (현재 최소속도가 매우 빠른편임)</li>
  </ul>
</div>

<video controls style="width: 50%; max-width: 800px;">
  <source src="/assets/project/peco/A.mp4" type="video/mp4">
  브라우저가 비디오를 지원하지 않습니다.
  다른 브라우저로 접속해주세요.
</video>

##### 4륜 중간시연영상

<button class="toggle-btn" data-id="robot-specs">
  <span class="arrow">▶</span> 영상 당시 세팅
</button>
<div class="spec-list" id="robot-specs">
  <ul>
    <li>메인 컨트롤러 : Jetson Nano, RDK X3</li>
    <li>MCU : NUCLEO-F755ZI-Q</li>
    <li>배터리 : 24V, 3.4A, 45C (4개 병렬연결)</li>
    <li>로봇 무게 : 약 60KG ~ 65KG</li>
    <li>로봇 크기 : 50 * 50 * 35+a (cm)</li>
    <li>모터 : BL41105</li>
    <li>모터드라이버 : BDD-860S</li>
    <li>로봇 정격중량 : 약 250KG (300KG-로봇 무게)</li>
    <li>최소속도 : 3Km/h</li>
  </ul>
</div>

<video controls style="width: 50%; max-width: 800px;">
  <source src="/assets/project/peco/D.mp4" type="video/mp4">
  브라우저가 비디오를 지원하지 않습니다.
  다른 브라우저로 접속해주세요.
</video>
<video controls style="width: 50%; max-width: 800px;">
  <source src="/assets/project/peco/C.mp4" type="video/mp4">
  브라우저가 비디오를 지원하지 않습니다.
  다른 브라우저로 접속해주세요.
</video>

##### WEB

<img src="/assets/project/peco/a.png">

<div class="two-column-grid">
  <div>
    <h5>Fusion360</h5>
    <img src="/assets/project/peco/b.png" class="smaller-image">
  </div>
  <div>
    <h5>AutoCAD</h5>
    <img src="/assets/project/peco/c.png" class="smaller-image">
  </div>
</div>

##### 중간 결과물

<img src="/assets/project/peco/A.jpg" style="width: 20%; max-width: 800px;">
<img src="/assets/project/peco/B.jpg" style="width: 20%; max-width: 800px;">


### 3. 프로젝트 동기

R2BOT 프로젝트는 개인적인 경험에서 비롯된 문제의식에서 시작되었다.

처음 학교에 입학했을 때, 실습실의 이름이 너무 복잡하고 직관적이지 않아 반 학기가 지나서도 여전히 새로운 건물의 실습실을 찾는 데 어려움을 겪었다. 

이 경험은 나뿐만 아니라 다른 신입생이나 외부 손님, 학부모님들에게도 동일한 불편함이 있을 것이라는 생각으로 이어졌다.

또한 기숙사 입사나 주말마다의 짐 정리 과정에서 무거운 짐을 옮기는 것이 매우 번거롭고 힘든 일이었다. 

몇 번씩 짐을 나르거나, 한 번에 들고 이동하는 것은 체력적으로 부담이 컸다.

이러한 어려움들을 해결하고자, 안내와 짐 운반을 동시에 수행할 수 있는 자율주행 로봇의 필요성을 느끼게 되었고, R2BOT이라는 아이디어가 탄생하게 되었다.

### 4. 팀 소개

##### 팀원 역할 분배, 협업 방식

김동욱	팀장, 기획, ROS2, 펌웨어, 2D 설계

강도현	3D 모델링

김상윤	펌웨어, MQTT 서버 구축 및 통신

오창민	LLM(AI) 모델 관리 및 응답 시스템 구성

김규민	웹 서비스 개발 및 사용자 인터페이스 구축

### 5. 기여 사항

STM32 기반 펌웨어 개발:
R2BOT의 주행 로직 및 주변 장치 제어를 위한 펌웨어를 개발하여, 하드웨어와 소프트웨어의 원활한 통신을 가능하게 했다.

Jetson Nano와의 UART 통신 구현:
Jetson에서 간단한 테스트용 웹 서버를 구현하고, 이를 통해 STM32와의 UART 통신을 테스트 및 디버깅하였다. 

이 과정을 통해 주행 제어 명령이나 외부 센서 데이터를 실시간으로 주고받을 수 있게 구성하였다.

시스템 통합 및 데이터 흐름 설계:
Jetson이 외부와 통신하거나 로봇의 전반적인 동작을 관리할 수 있도록 시스템 통합을 설계하였으며, 

다양한 기술 스택(MQTT, ROS2 등)과의 연결을 고려하여 안정적인 통신 구조를 마련하였다.

### 6. 프로젝트 개발과정

R2BOT 프로젝트는 초기에는 실물 중심의 빠른 구현 방식으로 시작되었다.

처음에는 프로토타입 설계나 시뮬레이션 없이, 단순히 모터를 구동하고 통신 기능만을 시험해보는 형태로 진행되었지만,

이 과정에서 자원의 소모가 크고, 작은 실수가 전체 일정에 큰 영향을 준다는 교훈을 얻게 되었다.

이후 팀은 전략을 전환하여 개발 효율과 안정성을 높이기 위한 절차를 도입하였다:

- 3D 모델링 및 시뮬레이션 기반 설계: 
각 부품을 3D로 설계하고 시뮬레이션을 통해 간섭 여부와 동작 안정성을 확인한 후 실제 제작에 들어갔다.

- 2D 설계와 연동 테스트: 
2D 설계 단계에서부터 3D 환경으로 불러와서 배치 상태와 연결 구조를 사전에 검토하였다.

- 모터 제어 및 통신 사전 검증: 
각종 제어 및 통신 프로토콜(UART 등)은 하드웨어 조립 전부터 충분히 테스트하였고, 조립 단계에서도 지속적으로 디버깅 과정을 병행하여 오류를 줄였다.



### 8. 트러블슈팅

ROS2 버전 호환성 문제

    문제: 초기에는 ROS2 Humble 버전을 사용하려 했으나, Jetson Nano는 Ubuntu 18.04까지만 지원되었고, 대부분의 오픈소스는 Ubuntu 20.04에서 호환되었다.

    해결 과정: Jetson Orin NX로 고성능 보드 교체를 시도했으나, 보드의 고장으로 인해 프로젝트에 큰 지장이 발생.

    결과: Jetson Nano에서 Docker를 사용하여 ROS2 HUmble환경을 구성하고 DRobotics의 RDK X3보드와 연산을 나눠서 성능 부족을 개선함.

Jetson Orin NX 고장

    문제: 전원 연결 과정에서 팀원의 실수로 Jetson Orin NX 보드가 고장났다.

    해결 과정: 고장 원인은 밝혀지지 않았지만, 보드 고장으로 인해 프로젝트 진행에 큰 어려움이 생겼음.

중량 문제

    문제: 프로젝트 외형 디자인에서 알루미늄 프로파일 3030을 사용했으나, 무게가 예상보다 커져서 모터 선택에 큰 영향을 미쳤다.

    해결 과정: 초기에는 DC유성기어감속엔코더나 BLDC 모터를 선택하려고 생각했으나 무게에 비례한 성능에서 BLDC 인휠모터가 월등히 뛰어난 성능을 가져서 BLDC 인휠모터를 최종 선택했다.

BLDC 드라이버 사양 문제

    문제: 구매한 BLDC 모터 드라이버가 데이터시트에 명시된 사양에 미치지 못해 초반 토크 부족 문제 발생.

    해결 과정: 문제 추적 결과, 센서리스 타입 드라이버가 원인으로 밝혀졌고, 센서드 타입 드라이버로 교체하여 해결했다.

센서드 모터의 토크 문제

    문제: 센서드 타입 드라이버를 구매한 후에도 예상보다 낮은 토크로 문제 발생.

    해결 과정: STM32에서 지금까지 주파수의 정확도를 낮게 설정한 것이 문제였다. 하지만 NUCLEO-F103RB에서는 72MHz가 최대여서 올바르게 ARR와 CCR을 분배하는것이 불가능에 가까웠지만 NUCLEO-H755ZI-Q를 사용하면서 최대 주파수를 올려서 문제를 해결했다.

배경지식 및 의사소통 문제

    문제: 프로젝트의 기술적 내용을 공유하고 협력하는 과정에서 각 팀원의 이해도와 숙련도의 차이로 작업 효율성이 떨어짐. 내가 프로젝트 방향을 강하게 주도했기 때문에 팀원들이 내용을 충분히 이해하지 못하고 따라오는 경우가 많았다.

    해결 과정: 기술적 사양과 진행 상황을 문서화하여 체계를 잡으려 노력했지만, 개선에는 한계가 있었다.

2륜의 문제점

    문제: 2륜 운행 시, 보조바퀴가 있더라도 지면이 고르지 않거나 무게가 많이 실리면 모터가 본래의 토크를 충분히 내지 못함.

    해결 과정: 현재 4륜으로 시도하려고 구조를 바꾸고 있음 (2025.4.22 기준)

모터 양쪽의 RPM이 다름

    문제: 2륜 운행 시, 모터 양쪽의 RPM이 달라서 심하게 한쪽으로 기운다.

    해결 과정: STM32단에서 전처리를 해서 해야 할 것 같음 하지만 4륜으로 바꾸는게 먼저

PWM 한계 문제

    문제: Nucleo-F103RBT6 보드에서 PWM 주파수를 5MHz로 설정했을 때 파형이 불안정해졌다.

    해결 과정: STM32 H 시리즈 보드를 구매하여 더 안정적인 파형을 얻을 수 있었다.

4륜구조의 회전 불가능 문제

    문제: 바퀴가 고정된 4륜구조의 경우 회전이 불가능하다. 왜냐하면 회전이 원을 그려야하는데 2륜의 경우 밖으로 밀리면서 회전이 가능하지만 4륜의 경우 회전이 어렵다.

    해결 과정: 현재 움직임의 연산을 직진, 회전만 두는것이 아니라 CCR을 높히고 바퀴의 속도에 차이를 줘서 완만하게 회전이 가능하도록 만들고 있다.



<style>
.toggle-btn {
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  font-weight: bold;
  color: var(--gray-0);
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.arrow {
  display: inline-block;
  margin-right: 0.5rem;
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.arrow.active {
  transform: rotate(90deg);
}

.spec-list {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  margin-top: 0;
  transition: 
    max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    margin-top 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.spec-list.active {
  max-height: 400px;
  opacity: 1;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
}

.spec-list ul {
  padding-left: 1.5rem;
  margin: 0;
}

.spec-list li {
  margin: 0.5rem 0;
  color: var(--gray-300);
  transform: translateY(-10px);
  opacity: 0;
  transition:
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.spec-list.active li {
  transform: translateY(0);
  opacity: 1;
}

.spec-list.active li:nth-child(1) { transition-delay: 0.05s; }
.spec-list.active li:nth-child(2) { transition-delay: 0.1s; }
.spec-list.active li:nth-child(3) { transition-delay: 0.15s; }
.spec-list.active li:nth-child(4) { transition-delay: 0.2s; }
.spec-list.active li:nth-child(5) { transition-delay: 0.25s; }
.spec-list.active li:nth-child(6) { transition-delay: 0.3s; }
.spec-list.active li:nth-child(7) { transition-delay: 0.35s; }
.spec-list.active li:nth-child(8) { transition-delay: 0.4s; }
.spec-list.active li:nth-child(9) { transition-delay: 0.45s; }

/* 추가된 스타일 */
.two-column-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.smaller-image {
  max-width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 16/9;
}

.two-column-grid > div {
  display: flex;
  flex-direction: column;
}

.two-column-grid h5 {
  margin-bottom: 0.5rem;
}
</style>

<script>
function toggleSpecs(id) {
  const specList = document.getElementById(id);
  if (!specList) return;

  const button = document.querySelector(`[data-id="${id}"]`);
  const arrow = button.querySelector(".arrow");

  specList.classList.toggle("active");
  arrow?.classList.toggle("active");
}

// 이벤트 위임을 사용하여 토글 버튼 클릭 처리
document.addEventListener("click", (e) => {
  const target = e.target;
  const toggleBtn = target.closest(".toggle-btn");

  if (toggleBtn) {
    const id = toggleBtn.getAttribute("data-id");
    if (id) toggleSpecs(id);
  }
});
</script>
