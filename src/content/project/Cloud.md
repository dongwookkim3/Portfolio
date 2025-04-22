---
title: Cloud
projectName: 바로우산
publishDate: 2025-01-08 00:00:00
status: 완료
img: /assets/project/Maskgroup.jpg
img_alt: Soft pink and baby blue water ripples together in a subtle texture.
description: |
  We developed brand positioning and design assets for the launch
  of a new colored water product.
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

### 1. 프로젝트 설명 & 소개

##### 이 프로젝트는 무엇인가?
‘바로우산’은 기숙사에서 퇴소할 때 우산이 없어서 비를 맞고 가는 학생들을 위해 우산 대여 서비스입니다. <br>
학생들은 학생증을 통해 자동으로 우산을 대여하고 반납할 수 있으며, 웹과 라즈베리파이의 GUI(Winform)를 통해 실시간 상태를 확인하고 관리할 수 있습니다. <br>이를 통해 불편함을 해결하고, 학생들의 편리함을 보장합니다.

### 2. 프로젝트 미리보기

##### WEB

**메인페이지**

<img src="/assets/project/Cloud/A.png">

**AI페이지**

<img src="/assets/project/Cloud/B.png">

**마이페이지**

<img src="/assets/project/Cloud/C.png">

##### WinForm

**WinForm 메인페이지 및 대여화면**

<img src="/assets/project/Cloud/J.png">

##### CAD - AutoCAD

**본테 덮개 & 라즈베리파이 모니터 고정용 아크릴**

<img src="/assets/project/Cloud/E.png">

##### CAD - Fusion360

**본체 프로파일 모델링**

<img src="/assets/project/Cloud/D.png">

##### PCB - Circuit Maker 2

**스케메틱 파일**

<img src="/assets/project/Cloud/F.png">

**PCB Multi Layer**

<img src="/assets/project/Cloud/G.png">

**PCB Top Layer**

<img src="/assets/project/Cloud/H.png">

**PCB Bottom Layer**

<img src="/assets/project/Cloud/I.png">

**PCB 3D Simulation**

<img src="/assets/project/Cloud/K.png">

##### 결과물

<img src="/assets/project/Cloud/L.png">
<img src="/assets/project/Cloud/M.png">


### 3. 프로젝트 동기

##### 왜 이 프로젝트를 했는가?
기숙사를 퇴소하는 날, 비를 맞고 집에 가야 했던 기억이 있습니다. 학생들이 비를 맞지 않도록 학교에서 우산을 대여해주는 서비스가 필요하다는 생각을 하게 되었습니다. 또한, 학생증을 활용한 우산 반납 관리 시스템을 도입하여 우산 분실을 방지하고 효율적인 관리를 구현할 수 있었습니다.
### 4. 팀 소개

##### 팀원 역할 분배, 협업 방식


**김동욱**
- **역할**: 프로젝트 설계 및 전체 하드웨어/소프트웨어 통합, STM32 및 PCB 설계

**김은서**
- **역할**: 하드웨어 설계, 1축 로봇팔 및 우산 받침 제작, C# 서버 개발

**박초영**
- **역할**: Raspberry Pi 환경 구축, WinForm 개발, 시스템 통합

**신희성**
- **역할**: C# WinForm 개발, LLM API 연동, 웹 개발 (React)

**이동건**
- **역할**: 하드웨어 조립 및 서류 관리


협업 방식: GitHub를 통한 코드 관리, Slack을 통한 실시간 커뮤니케이션, 주간 미팅을 통한 진행 상황 점검
### 5. 기여 사항

##### 내가 뭘 했는가?

    설계 및 개발: 전체 시스템 설계, STM32 및 PCB 설계

    하드웨어: 1축 로봇팔과 우산 받침 설계 및 제작

    통신: STM32와 Raspberry Pi 간 UART 통신 구현

    소프트웨어: 데이터베이스 설계 및 API 연동, WinForm 개발

사용한 기술 스택: STM32, Raspberry Pi

### 6. 프로젝트 개발과정
단계	내용
기획	아이디어 구상, 팀원 역할 분담, 하드웨어 및 소프트웨어 구성
디자인	하드웨어 설계, PCB 제작, 3D 모델링 (Fusion360)
개발	STM32 및 Raspberry Pi를 활용한 시스템 구축, C# 서버 및 웹 개발
배포	시스템 통합 후 최종 시연 및 발표 준비

### 7. 프로세스 개선

다음에 더 잘할 수 있는 부분

    소프트웨어 최적화: STM32에서 DMA를 이용한 ADC 최적화, UART 인터럽트 적용

    UI 개선: 사용자 경험을 고려하여 인터페이스를 더욱 직관적으로 설계

### 8. 트러블슈팅

문제상황: STM32와 Raspberry Pi 간의 통신 문제
해결방법: UART 통신을 인터럽트 방식으로 구현하여 데이터 전송 안정성 확보
결과: 안정적인 데이터 통신과 시스템 안정성 확보

### 9. 고객 유치 (운영 프로젝트일 경우)

고객 피드백: 프로젝트 후, 기숙사 학생들이 매우 긍정적인 반응을 보였음. 특히 비 오는 날 대여 서비스가 매우 유용하다고 평가됨. 현재는 실내외 시스템을 완전하게 통합하여 운영할 계획입니다.

### 10. 기대효과 / 결과

어떤 가치나 효과가 있었는지

    학생 편의성 증대: 우산 대여 서비스 도입으로 학생들의 불편함을 해소

    비로 인한 건강 보호: 학생들이 우산을 대여하여 비에 맞지 않고 안전하게 귀가 가능

    우산 분실 방지: 학생증을 통한 대여 및 반납 관리로 우산 분실을 방지

결과:

    대여 및 반납 처리 99% 성공률

    실시간 우산 상태 확인 기능 활성화

    사용자 만족도 90% 이상

### 11. 향후 방향

유지보수 계획:

    시스템 안정성 향상: API 및 UI 성능 개선

    기능 확장: 사용자 알림 기능 추가 (우산 반납 기한 알림)

추가 개발 아이디어:

    우산 대여 알림 시스템 추가

    RFID를 통한 자동 대여 시스템 개발

### 12. ETC (기타)

참고 자료:

    GitHub Repository: [https://github.com/barousan-org]


느낀 점: 이번 프로젝트를 통해 하드웨어와 소프트웨어를 통합하는 경험을 얻었고, 팀워크와 협업의 중요성을 깊게 느낄 수 있었습니다. 또한, 실시간 데이터 처리와 자동화 시스템 설계에 대한 깊은 이해를 쌓을 수 있었습니다.