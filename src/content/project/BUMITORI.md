---
title: BUMITORI
projectName: BUMITORI
publishDate: 2019-10-02 00:00:00
status: 진행중
img: /assets/project/Group2(1).jpg
img_alt: Soft pink and baby blue water ripples together in a subtle texture.
description: |
  We developed brand positioning and design assets for the launch
  of a new colored water product.
tags:
  - STM32
  - RaspberryPI
  - Fusion360
  - KiCad
  - TinyCAD
  - PyQt5
  - AutoCAD
---

<img
  src="/assets/stock-4.jpg"
  alt="Soft pink and baby blue water ripples together in a subtle texture."
/>

    ✅ 프로젝트 개요

프로젝트명: RFID 기반 출입/대여 확인 디바이스

목적:
RFID 태그를 인식하면 Qt로 제작된 UI 디바이스가 이를 읽고, HTTP 통신을 통해 백엔드 서버에 데이터를 전송하여 출입 인증 또는 대여 인증을 처리할 수 있도록 한다. 이 디바이스는 학교, 도서관, 우산 대여소 등에서 활용 가능하다.
💡 주요 기능

    RFID 인식

        RFID 리더를 통해 태그 ID를 읽음

        UID 값 추출 후 이벤트 발생

    Qt 기반 UI 디바이스

        C++ 기반 Qt Framework 사용

        태그 인식 시 사용자에게 UID와 인증 결과 표시

        예: "00034A1B → 인증 성공!" / "등록되지 않은 사용자" 등

    HTTP 통신

        Qt에서 QNetworkAccessManager 등을 활용

        REST API 방식으로 백엔드에 JSON 포맷으로 전송

        예:

        {
          "uid": "00034A1B",
          "timestamp": "2025-04-22T14:23:00",
          "device": "UmbrellaStation01"
        }

        서버로부터 인증 결과 수신 및 UI에 반영

    장치 하드웨어 구성

        라즈베리파이 또는 리눅스 기반 보드 사용

        Qt 애플리케이션 구동 환경 제공

        RFID 모듈 (예: RC522) SPI/I2C 연결

🧩 시스템 구조도 (간단한 흐름)

[RFID 태그] 
    ↓ 
[RFID 리더기] 
    ↓ 
[Qt 애플리케이션] 
    ↓ (HTTP POST)
[백엔드 서버] 
    ↓ (인증 결과)
[Qt 애플리케이션 → 화면 출력]

🛠️ 사용 기술 스택

    RFID 모듈: RC522 (SPI 또는 I2C)

    프로그래밍 언어: C++, Qt

    네트워크: Qt의 QNetworkAccessManager로 HTTP POST 요청

    디바이스 OS: Raspberry Pi OS or Ubuntu (ARM 기반)

    서버: Node.js / Flask / Firebase 등(백엔드는 상황에 따라 다름)

🎯 기대 효과

    손쉬운 출입/대여 인증 시스템 구현

    별도 키보드/마우스 없이 터치 또는 RFID만으로 인증

    실시간 서버 연동으로 데이터 기록 및 분석 가능

📝 향후 개선 방향

    NFC 지원 스마트폰으로 확장

    오프라인 모드 및 로컬 캐싱 기능

    관리자 모드로 특정 태그 등록/삭제

    Qt UI 고도화 (애니메이션, 사용자 사진 등 표시)