# hermes-lang-ko

**Hermes Desktop 한국어 언어팩.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

English: [README.md](./README.md)

Hermes 에는 이미 CLI·메시징 게이트웨이(`locales/ko.yaml`)와 TUI(`ko.tui.yaml`) 한국어가 들어 있습니다. 한국어가 없는 곳은 Desktop 앱 하나입니다. 이 팩은 그 빈자리만 `locales/ko.desktop.yaml` 로 채우고, 나머지는 Hermes 에 내장된 한국어에 맡깁니다.

백엔드는 번역 파일을 Desktop에 전달합니다. 선택적으로 켤 수 있는 `desktop/plugin.js` 보완 기능은 공식 번역 등록 기능만 사용해 시작 소개, 입력창 안내 배열, 조건에 따라 바뀌는 문구를 추가합니다. 기존 YAML 번역은 변경하지 않습니다. 데스크톱 보완을 끄면 기존 텍스트 언어팩만으로도 사용할 수 있습니다.

## 요구 사항

- 백엔드와 Desktop 앱 모두 Hermes Agent 0.21.6 이상. 언어팩 기능(`provides_locales`)은 hermes-agent #126296 에서 들어왔고, 이전 버전은 이 팩을 건너뜁니다.

## 설치

### 방법 A — Hermes Desktop

Capabilities → Plugins → **Git에서 설치**(Install from Git)에 `https://github.com/dandacompany/hermes-lang-ko` 를 넣고 **Review repository** → **Install** 을 누릅니다. 그다음 언어를 한국어로 바꾸고(방법 B 의 마지막 줄 또는 Desktop 언어 선택) Desktop 을 다시 시작합니다.

### 방법 B — `hermes plugins install`

```bash
hermes plugins install hermes-lang-ko                # 플러그인 카탈로그에서 설치
hermes plugins install dandacompany/hermes-lang-ko   # 이 저장소에서 바로
hermes config set display.language ko
```

Desktop(그리고 실행 중인 게이트웨이·TUI)을 다시 시작하면 Desktop 언어 선택에 **한국어** 가 보입니다.

플러그인은 프로필마다 따로 설치됩니다. Desktop 백엔드가 쓰는 프로필에 설치하거나 `-p <프로필>` 을 붙이세요.

### 방법 C — 플러그인 없이 개인 덮어쓰기

`locales/ko.desktop.yaml` 을 `<HERMES_HOME>/locales/ko.desktop.yaml` 로 복사합니다. 둘 다 있으면 플러그인 쪽이 우선합니다.

### 확인

```bash
hermes plugins list                  # hermes-lang-ko, enabled
hermes config get display.language   # ko
```

## 번역 범위

| 화면 | 출처 | 상태 |
| --- | --- | --- |
| CLI·게이트웨이 응답·승인 프롬프트 | 내장 `locales/ko.yaml` | hermes-agent 에서 관리 |
| TUI | 내장 `locales/ko.tui.yaml` | hermes-agent 에서 관리 |
| Desktop | 이 팩 `locales/ko.desktop.yaml` | v0.22.5 및 main `cb757fac59` 기준 5,384개 중 5,282개(98.1%) |

2026-10-23에 [v0.22.5](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.5)와 [main `cb757fac59`](https://github.com/NousResearch/hermes-agent/commit/cb757fac59c92b49e9b8f2910e5cd7ab75efffdd)를 대조했습니다. 0.2.4에서는 카탈로그, 하위 에이전트 라우팅, 사용량·결제, 채팅 명령과 복구 안내 등 349개를 추가하고, 영어 원문이 바뀐 기존 문구 4개를 수정했습니다. 파일에는 구버전 호환용 91개를 포함해 총 5,373개 항목이 있습니다. 최신 Hermes는 구버전 전용 키를 무시합니다.

위 번역률은 기존 텍스트 언어팩 기준으로 유지됩니다. 데스크톱 보완 기능은 그 파일에 없는 기본 번역 항목 30개와 기본 성격 15종의 소개 배열(총 75문장)을 추가합니다. 기존 파일에 이미 있는 문구는 덮어쓰지 않습니다. 브랜드명 등 번역이 필요 없는 값도 있어 화면 전체 100% 번역을 뜻하지는 않습니다.

설치 후 해당 플러그인 상세의 **데스크톱 스위치**를 켜고 언어를 한국어로 선택한 뒤 Desktop을 다시 시작하세요. `ctx.i18n.registerAppLocale`(플러그인용 번역 등록 기능)가 없는 버전은 보완 기능을 건너뛰며 기존 텍스트 언어팩은 유지됩니다. 기본 성격별 소개는 `intro.stock`을 읽는 Hermes 버전이 필요합니다. 검증한 소스 버전은 `e04614af7bb4e982b76e5256f5ec207198e0641e`입니다.

**제한:** 한국어 입력창 안내 목록은 등록하지만, Hermes가 번역 등록 전에 영어 문장을 선택해 저장하는 문제까지 고치지는 않습니다. 해당 버전에서는 최초 안내가 다른 문장을 선택할 때까지 영어로 남을 수 있습니다. 이 문제는 Hermes 본체 수정이 필요합니다. 화면 파일 교체나 내부 상태 변경으로 우회하지 않습니다. `CONNECTING`, 직접 작성된 `Add context`, 외부 플러그인 화면은 그대로입니다.

`locales/ko.yaml` 은 일부러 비워 두었습니다. 내장 카탈로그가 이미 채우고 있고, 검증기가 파일의 존재만 요구합니다.

## 이 플러그인이 하는 일과 하지 않는 일

- Python 등록 함수는 여전히 즉시 반환합니다. 데스크톱 보완은 공개된 번역 등록 기능만 호출하는 JavaScript입니다. 네트워크 접속, 명령 실행, 파일 접근, 인증 정보 접근, 백그라운드 작업, 자동 업데이트, 내부 화면 요소 변경을 하지 않습니다. 플러그인을 내릴 때 번역 등록 해제는 Hermes가 관리합니다.
- 팩을 등록해도 `display.language` 는 바뀌지 않습니다. `hermes config set display.language ko` 로 직접 켭니다.
- 설치 스캐너가 `sudo` 비밀번호를 언급하거나 공식 한 줄 설치 명령을 보여 주는 화면 문구 몇 개를 `caution` 으로 표시합니다. 실행되는 내용이 아니라 영어 원문과 같은 뜻의 화면 문구입니다.

## 새 Hermes 버전에 맞추기

`locales/ko.desktop.yaml` 이 원본이고 직접 고칩니다. Desktop 키가 바뀌면 대상 버전의 키 목록에 맞춥니다.

```bash
node tools/sync-keys.mjs --keys <hermes-agent>/locales/_keys.desktop.json --missing missing.txt   # 보고만
node tools/sync-keys.mjs --keys <hermes-agent>/locales/_keys.desktop.json --fix                   # 사라진 키 제거
hermes plugins validate .
```

`missing.txt`에는 위에서 설명한 의도적인 폴백을 포함해 팩에 없는 모든 키가 나옵니다. 영어 원문을 확인하고 표현 가능한 항목을 직접 번역합니다. `--fix`는 구버전용 키도 삭제하므로, 구버전 호환을 유지하려면 생략하세요. 이전 점검 시점과 영어 값도 비교해야 합니다. 키가 같아도 문구의 의미는 바뀔 수 있습니다.

## 번역과 출처

한국어 문구는 단테랩스가 영어 Desktop 카탈로그만 보고 AI 도움을 받아 독립적으로 번역했습니다. 어색한 번역은 이슈나 PR 로 알려 주세요.

0.1.1 까지의 릴리스는 [@dalgme](https://github.com/dalgme) 와 기여자들이 [NousResearch/hermes-agent#40716](https://github.com/NousResearch/hermes-agent/pull/40716) 에서 제안한 Desktop 한국어로 만들었고, 그 출처 표기를 유지합니다. 0.2.0 부터는 그 문구를 하나도 쓰지 않습니다. 이 팩은 #40716 을 대신하지 않습니다. Desktop 에 한국어가 내장되면 빠진 문구만 남기거나 팩을 정리합니다. [NOTICE](./NOTICE) 참조.

## 라이선스

[MIT](./LICENSE)

---
Built by [Dante Labs](https://dante-labs.com) · [YouTube @dante-labs](https://youtube.com/@dante-labs) · [dante@dante-labs.com](mailto:dante@dante-labs.com) · [Discord](https://discord.com/invite/rXyy5e9ujs) · [Buy Me a Coffee](https://buymeacoffee.com/dante.labs)
