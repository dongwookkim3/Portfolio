---
title: Cloud
projectName: 바로우산
publishDate: 2025-01-08 00:00:00
status: 완료
img: /assets/project/Cloud/Mask.jpg
description: |
  우산 없는 하교는 끝! 학생들을 위한 교내 우산 대여 서비스
tags:
  - STM32
  - RaspberryPI
  - AutoCAD
  - Fusion360
  - WinForm
  - NestJS
  - OpenAI API
  - CircuirMaker2
---

### 1. 프로젝트 소개

**바로우산**은 기숙사 퇴소 시 우산이 없어 비를 맞는 학생들의 불편함을 해소하기 위해 기획된 교내 우산 대여 서비스입니다. 

학생들은 학생증을 이용해 우산을 자동으로 대여 및 반납할 수 있으며,
웹 대시보드와 라즈베리파이 기반 GUI(WinForm)를 통해 우산의 상태를 실시간으로 확인 및 관리할 수 있습니다.

이 서비스를 통해 학생들의 불편함을 줄이고, 편의성을 높이는 것을 목표로 했습니다.

### 2. 프로젝트 미리보기

<a href="https://www.youtube.com/watch?v=2xjrkkmunP8"><h4>시연영상</h4></a>

##### WEB

<div class="grid-layout">
  <div class="grid-item">
    <p>메인페이지</p>
    <img src="/assets/project/Cloud/A.png" class="grid-image">
  </div>
  <div class="grid-item">
    <p>AI페이지</p>
    <img src="/assets/project/Cloud/B.png" class="grid-image">
  </div>
  <div class="grid-item">
    <p>마이페이지</p>
    <img src="/assets/project/Cloud/C.png" class="grid-image">
  </div>
</div>

##### WinForm

<div class="grid-layout">
  <div class="grid-item">
    <p>WinForm 메인페이지 및 대여화면</p>
    <img src="/assets/project/Cloud/J.png" class="grid-image">
  </div>
</div>

##### CAD - AutoCAD

<div class="grid-layout">
  <div class="grid-item">
    <p>본테 덮개 & 라즈베리파이 모니터 고정용 아크릴</p>
    <img src="/assets/project/Cloud/E.png" class="grid-image">
  </div>
</div>

##### CAD - Fusion360

<div class="grid-layout">
  <div class="grid-item">
    <p>본체 프로파일 모델링</p>
    <img src="/assets/project/Cloud/D.png" class="grid-image">
  </div>
</div>

##### PCB - Circuit Maker 2

<div class="grid-layout">
  <div class="grid-item">
    <p>스케메틱 파일</p>
    <img src="/assets/project/Cloud/F.png" class="grid-image">
  </div>
  <div class="grid-item">
    <p>PCB Multi Layer</p>
    <img src="/assets/project/Cloud/G.png" class="grid-image">
  </div>
  <div class="grid-item">
    <p>PCB Top Layer</p>
    <img src="/assets/project/Cloud/H.png" class="grid-image">
  </div>
  <div class="grid-item">
    <p>PCB Bottom Layer</p>
    <img src="/assets/project/Cloud/I.png" class="grid-image">
  </div>
  <div class="grid-item">
    <p>PCB 3D Simulation</p>
    <img src="/assets/project/Cloud/K.png" class="grid-image">
  </div>
</div>

##### MCU - STM32CUBEMX - NUCLEO-F103RBT6

<div class="grid-layout">
  <div class="grid-item">
    <img src="/assets/project/Cloud/P.png" class="grid-image">
  </div>
  <div class="grid-item">
    <img src="/assets/project/Cloud/Q.png" class="grid-image">
  </div>
  <div class="grid-item">
    <img src="/assets/project/Cloud/R.png" class="grid-image">
  </div>
</div>

##### 결과물

<div class="grid-layout">
  <div class="grid-item">
    <img src="/assets/project/Cloud/L.png" class="grid-image">
  </div>
  <div class="grid-item">
    <img src="/assets/project/Cloud/M.png" class="grid-image">
  </div>
</div>

### 3. 프로젝트 동기

저는 기숙사를 퇴소하던 날, 우산이 없어 비를 맞고 집에 갔던 기억이 있습니다.

그 경험을 계기로, 다른 학생들은 비를 맞지 않도록 학교 차원의 우산 대여 서비스가 필요하겠다는 생각을 하게 되었습니다.

하지만 학교 입장에서는 단순히 우산을 비치할 경우 도난 문제나 분실 위험을 피할 수 없고, 이로 인해 일부 학생의 비매너로 다수 학생이 피해를 입을 수 있습니다.

이러한 문제를 해결하기 위해 학생증을 활용한 우산 대여 및 반납 관리 시스템을 주제로 잡고 프로젝트를 시작하게 되었습니다.

### 4. 팀 소개

##### 팀원 역할 분배, 협업 방식


**김동욱** - 팀장
- **역할**: 프로젝트 설계 및 전체 하드웨어 통합, STM32 및 PCB 설계

**김은서**
- **역할**: 하드웨어 설계, 1축 로봇팔 및 우산 받침 제작, C# 서버 개발

**박초영**
- **역할**: Raspberry Pi 환경 구축, WinForm 개발, 시스템 통합

**신희성**
- **역할**: C# WinForm 개발, LLM API 연동, 웹 개발 (React)

**이동건**
- **역할**: 하드웨어 조립 및 서류 관리


협업 방식: GitHub를 통한 코드 관리, Discord을 통한 실시간 커뮤니케이션, 주간 회의를 통한 진행 상황 점검

### 5. 기여 사항

**설계 및 개발**
- 전체 시스템 아키텍처 설계, STM32 기반의 회로 및 PCB 설계

**하드웨어**
- 하드웨어 프로파일 설계 및 아크릴 부품 제작 (프로파일 간 결합 구조 포함)

**통신**
- STM32와 Raspberry Pi 간 UART 통신 구현
- STM32와 RC522 간 SPI 통신 구현

**펌웨어 개발**
- STM32CubeIDE와 HAL 라이브러리를 활용하여 NUCLEO-F103RBT6 보드 프로그래밍

**사용 기술 스택**
- STM32(NUCLEO-F103RBT6), AutoCAD, Fusion 360, Circuit Maker 2

### 6. 프로젝트 개발과정
저는 팀 내에서 맡은 역할이 많았기 때문에, 데드라인이 빠른 작업부터 우선적으로 진행했습니다.
가장 먼저 진행한 작업은 Fusion 360을 활용한 프로파일 모델링이었고, 이를 바탕으로 팀원들과 구조와 크기에 대해 논의하며 설계를 구체화했습니다.
이 과정에서 우산을 감지할 센서의 종류와 우산을 고정할 메커니즘에 대해서도 고민했고, 필요한 부품과 재료를 사전에 신청하였습니다.

이후 갑작스럽게 PCB 설계 일정이 확정되면서, 빠르게 Circuit Maker 2를 활용해 설계를 진행했습니다.
다른 팀들이 EasyEDA나 KiCAD 같은 플랫폼을 사용했던 것과 달리, 저는 현업에서 널리 사용되는 Altium, OrCAD의 워크플로우를 경험해보고자 Altium 기반의 무료 툴인 Circuit Maker 2를 선택했습니다.

그다음으로 맡은 역할은 MCU 프로그래밍이었습니다.
기본 시스템은 복잡하지 않았으며, 우산 감지값의 변화에 따라 UART로 데이터를 송신하거나, UART 입력에 따라 모터를 제어하는 구조였습니다.
센서 입력은 ADC와 DMA를 활용하여 효율적으로 수집했고, 모터는 구조체 배열로 관리하여 함수 재사용 및 최적화를 통해 깔끔하게 구현했습니다.

개발을 마친 후에는 하드웨어 조립 작업에도 참여하였습니다.
이후 WinForm 파트를 맡은 팀원들이 버그 해결에 어려움을 겪고 있는 상황을 보았고, 이미 WinForm은 두 명이 맡고 있었기 때문에 남은 시간을 고려해 다른 팀의 지원으로 방향을 전환하였습니다.
당시 다른 팀들은 STM32와의 통신 구현에서 큰 어려움을 겪고 있었고, 융합 프로젝트 특성상 팀 간 협력도 중요한 평가 요소였기에, 적극적으로 다른 팀의 STM32 및 UART 통신 구현을 도왔습니다.

그 결과, 저희 팀은 <b>전체 2위(최우수상)</b>를 수상하였고, 저는 <b>팀워크와 기술 기여도를 인정받아 전체 MVP(1위)</b>로 선정되는 영광을 얻었습니다.

### 7. 프로세스 개선

**소프트웨어 최적화**
- STM32에서 DMA를 이용한 ADC 최적화
- UART 인터럽트 적용
- 모터 사용 시 구조체 배열로 관리
- 모든 함수는 모듈화하여 관리

### 8. 트러블슈팅

**UART**
- 문제상황: STM32와 Raspberry Pi 간의 통신 문제 <br>
- 해결방법: UART 통신을 인터럽트 방식으로 구현하여 데이터 전송 안정성 확보 <br>
- 결과: 안정적인 데이터 통신과 시스템 안정성 확보


### 9. 기대효과 / 결과


- **학생 편의성 증대** : 우산 대여 서비스 도입으로 학생들의 불편함을 해소

- **비로 인한 건강 보호** : 학생들이 우산을 대여하여 비에 맞지 않고 안전하게 귀가 가능

- **우산 분실 방지** : 학생증을 통한 대여 및 반납 관리로 우산 분실을 방지


### 10. 향후 방향

**유지보수 계획**

- **시스템 안정성 향상** : API 및 UI 성능 개선

- **기능 확장** : 사용자 알림 기능 추가 (우산 반납 기한 알림)

### 11. ETC

<a href="https://github.com/barousan-org"><h5>GitHub Repository</h5></a>


**느낀 점**: 이 프로젝트를 진행하며 시간 관리와 팀 내 의사소통의 중요성을 깊이 깨닫게 되었습니다.
프로젝트의 많은 부분을 제가 직접 제작했지만, 다른 파트와의 통합 과정에서 팀원들의 작업 속도 차이로 인해 일정이 지연되는 상황이 예상보다 자주 발생했습니다.

당시에는 개발자 각자가 자신의 시간을 잘 관리해야 한다고 생각했지만, 프로젝트가 끝난 후 돌아보니 팀장인 제가 팀원들에게 명확한 일정과 우선순위, 진행 상황을 공유하고 조율하는 역할을 충분히 하지 못했다는 점을 반성하게 되었습니다.
조금은 부담스럽더라도, "현재 우리는 어디쯤 와 있고, 언제까지 무엇을 마쳐야 한다"는 기준을 제시했다면 상황이 달라졌을 수도 있다고 생각합니다.

앞으로는 제가 맡는 역할이 점점 세분화되고 팀 전체에서 차지하는 비중이 줄어들 수도 있겠지만, 그만큼 협업과 조율 능력은 더 중요해질 것이라 생각합니다.
이 경험을 통해 얻은 교훈을 바탕으로, 앞으로는 더 나은 리더십과 협업 능력을 갖춘 개발자로 성장해 나가고자 합니다.

**임베디드소프트웨어과 융합프로젝트 최우수상**

<div class="grid-layout">
  <div class="grid-item">
    <img src="/assets/project/Cloud/N.jpg" class="grid-image">
  </div>
</div>

**임베디드소프트웨어과 융합프로젝트 개인상 MVP 1등상**

<div class="grid-layout">
  <div class="grid-item">
    <img src="/assets/project/Cloud/O.jpg" class="grid-image">
  </div>
</div>

<style>
/* 그리드 레이아웃 스타일 */
.grid-layout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}

.grid-item {
  display: flex;
  flex-direction: column;
}

.grid-item p {
  margin: 0 0 0.5rem 0;
  font-weight: bold;
}

.grid-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 16/9;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .grid-layout {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .grid-layout {
    grid-template-columns: 1fr;
  }
}
</style>