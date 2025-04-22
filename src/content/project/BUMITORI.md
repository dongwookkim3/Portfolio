---
title: BUMITORI
projectName: BUMITORI
publishDate: 2025-04-23 00:00:00
status: 진행중
img: /assets/project/Group2(1).jpg
img_alt: Soft pink and baby blue water ripples together in a subtle texture.
description: |
  학생증으로 간편하게 관리하는 교내 기숙사 입사 관리 서비스
tags:
  - STM32
  - RaspberryPI
  - KiCAD
  - TinyCAD
  - PyQt5
---

### 1. 프로젝트 소개


**BUMITORI**는 기존의 번거로운 기숙사 입사 절차를 자동화한 시스템입니다.  

학생증의 RFID 기능을 활용해 STM32가 태그를 인식하고, 라즈베리파이와 통신하여 실시간으로 입사 결과를 시각화합니다.

이를 통해 학생은 복잡한 절차 없이 간편하게 입사할 수 있고, 관리자는 웹을 통해 실시간으로 입사 현황을 확인할 수 있어 관리 효율성이 크게 향상됩니다.


### 2. 프로젝트 미리보기

##### GUI - PyQt5

<img src="/assets/project/BUMITORI/h.png">
<img src="/assets/project/BUMITORI/i.png">


##### PCB - KiCAD

**스케메틱 파일**

<img src="/assets/project/BUMITORI/e.png">

**PCB Multi Layer**

<img src="/assets/project/BUMITORI/f.png">

**PCB 3D Simulation**

<img src="/assets/project/BUMITORI/g.png">

##### PCB - TinyCAD

<img src="/assets/project/BUMITORI/d.png">

##### MCU - STM32CUBEMX - NUCLEO-F303K8

<img src="/assets/project/BUMITORI/a.png">
<img src="/assets/project/BUMITORI/b.png">
<img src="/assets/project/BUMITORI/c.png">


##### 중간 결과물

<img src="/assets/project/BUMITORI/j.png">


### 3. 프로젝트 동기

기존 기숙사 입사 방식은 학생이 특정 위치에 가서 직접 서명을 해야 했고, 이로 인해 시간 소모가 크고 관리 효율성도 떨어졌습니다.  

이를 개선하기 위해, 학생증을 활용한 자동화 시스템을 구상하게 되었고, 보다 **신속하고 편리한 입사 관리 시스템**을 목표로 본 프로젝트를 기획했습니다.


### 4. 팀 소개

##### 팀원 역할 분배, 협업 방식


**김동욱**
- **역할**: PCB 설계, MCU 프로그래밍

**조윤서, 정수환** - 팀장
- **역할**: 백엔드 개발

**김규민, 김시연**
- **역할**: 프론트엔드 개발

협업 방식: GitHub를 통한 코드 관리, Discord을 통한 실시간 커뮤니케이션

### 5. 기여 사항

- **PCB 설계 및 제작**: 기기의 회로 설계 및 보드 제작 전반 담당  
- **STM32 프로그래밍**: RFID 리더기 연동, 데이터 처리, UART 통신 구현  
- **PyQt5 기반 GUI**: 라즈베리파이에서 동작하는 입사 시각화 UI 구현  
- **HAL 코드 커스터마이징**: F103에서 F303 시리즈로 변경됨에 따라 HAL 함수 직접 수정  
- **CRC 기반 통신 최적화**: 신뢰도 높은 UART 통신을 위해 CRC 검증 로직 적용  
- **RFID 처리 최적화**: 응답속도 개선을 위한 루틴 정리 및 인터럽트 구조 정비


### 6. 프로젝트 개발과정
초기에는 **NUCLEO-F103RBT6** 보드를 기반으로 개발을 시작했지만, 임베디드 개발자가 저 혼자만 남게 되면서 하드웨어, 펌웨어, PCB 설계까지 모두 도맡아야 했습니다.

이 과정에서 UPS, 라즈베리파이, STM32, RFID 모듈을 한 기기에 모두 넣는 데 공간적 한계를 느꼈고, **최종적으로는 라즈베리파이 7인치 모니터 뒤에 디바이스를 부착하는 방식**으로 방향을 전환했습니다.

MCU도 F103에서 **NUCLEO-F303K8**로 변경하게 되었고, 이로 인해 기존의 라이브러리들이 호환되지 않아 많은 수정 작업이 필요했습니다.  
관련 함수와 헤더들을 모두 분석해 F3 시리즈에 맞게 수정한 끝에 시스템이 정상 작동하도록 만들었습니다.

또한, TinyCAD를 처음 활용하며 **회로도 관리의 효율성을 높이는 방법**도 배웠습니다.  
이러한 경험들은 새로운 도구와 기술을 빠르게 익히고 적용할 수 있는 자신감으로 이어졌습니다.

### 7. 프로세스 개선

- **CRC 적용**: UART 통신 오류 방지를 위해 직접 CRC 알고리즘을 구현해 통신 안정성 강화  
- **RFID 처리 최적화**: 연산 최소화 및 인터럽트 구조 개선을 통해 응답속도 향상

### 8. 트러블슈팅

**STM32F303 라이브러리 이슈**  
대부분의 오픈소스 예제는 F103 시리즈 기반이어서, F303 사용 시 컴파일 에러가 발생했습니다.

- 해결 방법: HAL 초기화 및 클럭 설정 코드 분석 → 직접 수정하여 F303 환경에 맞게 재구성

### 9. 기대효과 / 결과


- **학생**: 특정 위치에 갈 필요 없이, RFID 태그 한 번으로 입사 완료  
- **관리자**: 웹을 통해 실시간 입사 현황 확인 가능 → 업무 효율성 대폭 향상



### 10. 향후 방향

- **다지점 시스템 확장**: 여러 기숙사 출입구에 적용 가능한 구조로 확장  
- **RTOS 도입**: 멀티태스킹 기반 구조로 시스템 안정성 및 유지보수성 향상  
- **고도화된 통신 프로토콜 적용**: UART → CAN / RS-485 / TCP-IP 전환 고려  
- **통합 관리자 페이지**: 여러 장비의 출입 데이터를 대시보드에서 통합 관리

### 11. ETC

<a href="https://github.com/BUMITORI"><h5>GitHub Repository</h5></a>


**느낀 점**: 이번 프로젝트를 통해, 제한된 공간에 다양한 장치를 통합하는 설계의 현실적인 어려움을 직접 겪으며,  
**디자인과 기능 사이의 균형을 고민하는 경험**을 했습니다.

또한, TinyCAD와 같은 새로운 툴을 빠르게 익히고 적용하면서,  
**변화하는 환경에 유연하게 적응하는 능력**이 제 개발자로서의 성장에 얼마나 중요한지 다시금 느꼈습니다.

앞으로도 새로운 기술을 두려워하지 않고, 능동적으로 배우고 도전하는 개발자가 되겠습니다.