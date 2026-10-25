// Korean array/conditional translations through Hermes's public Desktop SDK.
// Existing YAML strings remain authoritative; no core/DOM/file/network access.
const translations = {
  "intro": {
    "stock": {
      "helpful": [
        "코드 저장소 열기, 테스트 실행, 오류 수정, 코드 변경 검토 요청서 작성까지 맡겨 주세요. 각 단계를 함께 진행하겠습니다.",
        "파일을 알려주시거나 오류를 붙여 넣고, 무엇을 만들고 있는지 설명해 주세요. 그다음은 제가 이어서 도와드리겠습니다.",
        "변경 내용 검토, 전체 테스트 실행, 함수 설명 등을 요청해 보세요. 코드에 관해 무엇이든 물어보셔도 좋습니다.",
        "파일 수정, 명령어 실행, 웹 검색부터 까다로운 오류 해결까지 도와드릴 수 있습니다. 할 일을 설명해 주세요.",
        "코드 저장소 경로나 질문으로 시작해 보세요. 명확하게 답변하고, 수정한 파일도 바로 확인할 수 있도록 연결해 드리겠습니다."
      ],
      "concise": [
        "할 일을 알려주세요. 바로 하겠습니다.",
        "코드, 오류, 목표를 붙여 넣으세요. 답은 짧게, 수정은 빠르게.",
        "요청하세요. 파일을 읽고, 테스트하고, 수정하겠습니다. 군더더기 없이.",
        "한 줄이면 충분합니다. 꼭 필요한 내용만 자세히 설명하겠습니다.",
        "명령어, 질문, 파일 경로를 알려주세요. 나머지는 맡겨 주세요."
      ],
      "technical": [
        "코드 저장소 경로, 실패한 테스트, 오류 발생 경로를 알려주세요. 파일 처리, 버전 관리, 명령 실행, 검색, 수정, 웹 요청 도구를 사용할 수 있습니다.",
        "요청을 입력하면 필요한 도구를 실행합니다. 여러 파일 수정, 테스트 실행, Git을 통한 버전 관리, 웹 자료 불러오기를 지원합니다.",
        "작업을 입력하세요. 계획을 세우고 도구를 실행한 뒤 결과를 검증합니다. 실행 기록은 화면에 표시하고, 변경 내용은 적용 전에 보여드립니다.",
        "일상 언어나 정해진 형식의 명령으로 요청할 수 있습니다. 일반적인 작업 순서는 읽기 → 계획 → 수정 → 테스트 → 결과 보고입니다.",
        "파일, 명령 실행 창, Git 버전 관리, 브라우저, 검색 도구를 사용할 수 있습니다. 원하는 변경을 설명하면 수정 내용과 테스트 결과를 보여드립니다."
      ],
      "creative": [
        "무엇을 만들어 볼까요? 아이디어, 반쯤 고장 난 함수, 혹은 꿈을 적어 주세요. 함께 구체적인 모습으로 그려 보겠습니다.",
        "새 기능, 코드 구조 개선, 엉뚱한 시제품까지 작은 영감 하나만 주세요. 실제로 실행할 수 있는 코드로 만들어 보겠습니다.",
        "아직 세상에 없는 것을 설명해 주세요. 테스트와 파일, 외부 기능을 연결해 작동하는 첫 결과물을 만들겠습니다.",
        "자세한 설계서가 없어도 괜찮아요. 만들고 싶은 것을 알려주세요. 빠르게 시도하고 차근차근 다듬으며 새로운 가능성을 찾아보겠습니다.",
        "무엇을 이루고 싶은지 알려주세요. 예제를 새롭게 조합하고 코드 조각을 다듬어, 깔끔한 변경 기록을 남기겠습니다."
      ],
      "teacher": [
        "파일, 개념, 오류에 관해 무엇이든 물어보세요. 해결 방법뿐 아니라 그 이유도 설명하고, 실제로 풀어 가는 예제를 보여드리겠습니다.",
        "검토할 코드, 해결할 오류, 이해하고 싶은 개념을 알려주세요. 한 단계씩 안내하겠습니다.",
        "문제를 알려주세요. 작은 부분으로 나누어 하나씩 설명하고, 다음에는 혼자 해결할 수 있도록 도와드리겠습니다.",
        "함께 코드를 읽고 근본 원인을 찾아보겠습니다. 다음에도 활용할 수 있도록 원리를 이해하는 틀을 세워 드리겠습니다.",
        "주제를 알려주시거나 코드 일부를 붙여 넣으세요. 쉬운 설명과 말로 풀어 쓴 구조도, 연습할 질문을 준비하겠습니다."
      ],
      "kawaii": [
        "오류나 파일 경로를 보내 주면 조심조심 고쳐 드릴게요. 테스트도, 변경 내용도, 코드 검토 요청서도 정성 가득! 반짝~",
        "무엇을 만들고 있는지 알려 주세요! 코드 정리도, 작은 도우미 함수도, 크고 무서운 저장소도 모두 좋아해요 (>w<)",
        "오류나 목표, 폴더 하나를 통째로 보내 줘도 좋아요. 애정을 담아 정리하고 변경 기록 설명도 깔끔하게 남길게요!",
        "한 번에 하나씩, 깔끔하게! 테스트를 실행하고 파일을 고쳐서 코드 저장소를 다시 아늑하게 만들어 드릴게요 <3",
        "인사부터 해도 좋고 오류 기록을 보내 줘도 좋아요! 너무 작은 일도, 너무 복잡한 저장소도 없어요. 함께 차근차근 풀어 봐요!"
      ],
      "catgirl": [
        "파일을 보내 주거나 오류를 콕 짚어 줘도 좋고, 코드 저장소를 던져 줘도 좋아냥. 실패한 테스트를 덥석 잡고 깔끔하게 고쳐 줄게냥~",
        "할 일을 알려 줘냥. 수정하고 테스트한 뒤 코드 검토 요청서까지 기분 좋게 살펴볼게. 조심해, 안 쓰는 불러오기 코드는 콕 물어 버린다냥!",
        "목표를 주면 코드 구석구석까지 쫓아갈게냥. 읽고, 고치고, 실행하는 동안에도 꼬리는 살랑살랑!",
        "오류나 계획을 보내 줘냥. 사냥하듯 조용하고 꼼꼼하게 오류를 잡을게. 가끔 신나서 우다다 달릴지도 몰라!",
        "한마디만 해 줘냥. 파일을 읽고 테스트를 실행한 다음, 네 작업 공간에 웅크려 앉아 깔끔한 변경 기록을 남겨 줄게."
      ],
      "pirate": [
        "사냥감을 말해 보게. 오류든 새 기능이든 저주받은 테스트든 끝까지 쫓아가겠네, 친구! 전리품은 깔끔한 수정 내역이라네.",
        "항해 지도, 그러니까 코드를 보여 주게. 선체를 수리하고 테스트 대포를 쏜 다음, 말끔한 코드 검토 요청서를 돛처럼 올리겠네!",
        "오류나 계획을 내놓게, 이 바다의 무법자여! 오류의 항로를 따라가서 테스트 통과라는 보물을 가져오겠네.",
        "보물 지도의 X가 어디인지 알려 주게. 제대로 된 선원답게 질서를 지키며 읽고, 고치고, 변경 기록을 남기겠네. 어이!",
        "오류나 코드 저장소 경로, 기상천외한 생각을 던져 보게. 문서를 샅샅이 뒤져 작동하는 코드를 싣고 돌아오겠네."
      ],
      "shakespeare": [
        "그대의 오류와 파일, 지친 테스트를 말해 주시오. 학자의 손길과 정직한 수정으로 바로잡으리다.",
        "그대를 괴롭히는 코드를 알려 주시오. 읽고 다듬어 더없이 정갈한 수정본을 내어 놓으리다.",
        "오류의 발자취든 그대의 꿈이든 보여 주시오. 파일을 누비고 테스트를 수행하여 누구나 알기 쉬운 말로 전하리다.",
        "그대가 바라는 바를 말해 주시오. 작업의 가지를 다듬고 오류를 이 왕국 밖으로 몰아내리다.",
        "뜻을 담은 한 줄이면 족하오. 읽고, 고치고, 변경을 기록하되 그대의 이력에는 흠을 남기지 않으리다."
      ],
      "surfer": [
        "파일이든 오류든 거친 오류 기록이든 던져 줘. 내가 그 파도를 타 볼게. 수정은 깔끔하게, 테스트는 통과, 넘어지는 일 없이!",
        "코드 저장소 경로나 골치 아픈 오류를 보내 줘. 함께 노를 저어 들어가 고치고 돌아오면 돼. 느긋하게 가자!",
        "새 기능, 코드 정리, 긴급 수정 중 어떤 느낌인지 알려 줘. 테스트하고 수정본을 준비할게. 너무 힘주지 말고 편하게 가자, 친구!",
        "큰 오류? 작은 오타? 전부 새로 쓰기? 어디인지 가리키기만 해. 코드는 내가 맡을 테니 너는 멋진 변경 기록을 보며 쉬어!",
        "할 일을 말해 줘, 바로 출발하자. 읽고, 고치고, 테스트해서 새벽 파도보다 매끄러운 변경 기록을 남길게."
      ],
      "noir": [
        "무엇이 망가졌는지 말해 줘. 파일을 읽고 흔적을 찾아, 아침이 오기 전에 수정 내역을 책상 위에 놓아두지.",
        "네겐 오류가 있고, 내겐 인내심과 명령 실행 창이 있어. 사건을 맡겨. 입을 열 때까지 파헤쳐 보지.",
        "오류 기록, 수상한 파일, 알리바이를 보내 줘. 코드 행간을 읽고 진실을 찾아 돌아오지.",
        "모든 오류는 흔적을 남기지. 코드 저장소와 단서 하나를 줘. 뒤를 밟고, 고치고, 사건을 종결하겠어.",
        "오타든 메모리 접근 오류든 속속들이 썩은 구조든, 열쇠를 넘겨. 깔끔하게 통과한 테스트를 들고 돌아오지."
      ],
      "uwu": [
        "고장 난 파일이나 하고 시픈 일을 보내 줘~ 읽고 고치고 테스트해서, 수정 내역에 쪼그만 발자국도 남길게 owo",
        "아무리 쪼끄만 일이라도 말해 줘~ 깔끔하게 기록하고 살살 코드를 다듬어 줄게, 냐아~",
        "오류 메시지를 여기에 톡 놓아 줘! 범인을 찾아 고치고 테스트가 모두 방긋 웃게 해 줄게 owo",
        "코드 저장소 경로나 말썽쟁이 오류를 주면 내가 돌봐 줄게 uwu. 나쁜 코드엔 으르렁, 너에겐 다정하게~",
        "테스트도 하고 파일도 고치고, 내 코드를 봐 달라는 검토 요청서도 열 수 이써. 한마디만 해 줘, 친구야 uwu"
      ],
      "philosopher": [
        "어떤 문제를 마주하고 있나요? 설명해 주시면 그 형태와 원인, 해결책을 함께 살펴보겠습니다.",
        "모든 오류는 모습을 바꾼 질문입니다. 당신의 질문을 나눠 주세요. 읽고 추론하여 답과 수정안을 가져오겠습니다.",
        "무엇을 만들고 싶고, 무엇을 이해하고 싶으신가요? 가장 기본적인 원리부터 생각하고 코드를 수정한 뒤 테스트로 확인하겠습니다.",
        "바라는 결과를 설명해 주세요. 파일과 테스트, 문서를 따라가며 그 목표를 찾고, 도중에 알게 된 것을 전하겠습니다.",
        "경로 하나, 풀리지 않는 문제, 혹은 원칙을 나눠 주세요. 논리를 따라가며 변경을 제안하고, 각각의 수정에 이유를 밝히겠습니다."
      ],
      "hype": [
        "오류든 코드 저장소든 엄청난 새 기능 아이디어든 보내 줘! 완전히 집중했어. 수정은 깔끔하게! 테스트는 통과! 바로 지금!",
        "할 일을 던지고 내가 해내는 걸 봐! 파일 읽고, 테스트하고, 코드 검토 요청서까지! 오늘은 반드시 해내자, 친구!",
        "가장 골치 아픈 오류를 가져와! 온 힘을 다해 읽고, 고치고, 테스트하고, 변경을 기록할게. 가 보자!",
        "할 일을 말해 줘! 파일을 빠르게 훑고 실패한 테스트를 해결해서 멋진 변경 기록을 남길게. 출발, 출발!",
        "작은 오타든 대대적인 코드 정리든 상관없어! 오늘은 깔끔하게 완성한다. 할 일을 말해 줘, 바로 시작하자!"
      ],
      "none": [
        "질문하거나 오류를 붙여 넣고, 코드 저장소를 알려주세요. 코드를 읽고 도구를 실행해 작업을 완성하도록 도와드릴 수 있습니다.",
        "할 일을 편하게 설명해 주세요. 적절한 도구를 고르고 계획을 설명하며, 위험이 따르는 단계에서는 먼저 확인하겠습니다.",
        "파일 경로, 오류 기록, 아직 정리되지 않은 아이디어를 보내 주세요. 내용을 살펴보고 다음 단계를 제안하며, 변경을 되돌릴 수 있도록 하겠습니다.",
        "코드 저장소 검색, 파일 수정, 테스트 실행, 코드 검토 요청서 작성까지. 목표를 알려주시면 반복적인 작업은 제가 맡겠습니다.",
        "작업, 질문, 코드 일부를 입력해 주세요. 대화 내용을 기억하고 출처를 밝히며, 확실하지 않을 때는 질문하겠습니다."
      ]
    },
    "custom": (personality) => ["\uC791\uC5C5, \uD30C\uC77C, \uC544\uC9C1 \uC815\uB9AC\uB418\uC9C0 \uC54A\uC740 \uC544\uC774\uB514\uC5B4\uB97C \uBCF4\uB0B4 \uC8FC\uC138\uC694. \uC124\uC815\uD558\uC2E0 \uB9D0\uD22C\uB97C \uB530\uB974\uBA70, \uC774 \uCF54\uB4DC \uC800\uC7A5\uC18C\uC5D0 \uB9DE\uAC8C \uC791\uC5C5\uD558\uACA0\uC2B5\uB2C8\uB2E4.", "\uAD00\uB828 \uB0B4\uC6A9\uC774\uB098 \uB9C9\uD78C \uBD80\uBD84\uC744 \uC54C\uB824\uC8FC\uC138\uC694. \uC124\uC815\uD558\uC2E0 \uC131\uACA9\uC5D0 \uB9DE\uCDB0 \uB3C4\uC640\uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4.", "\uBB38\uC81C, \uD30C\uC77C, \uC544\uC774\uB514\uC5B4\uB97C \uBCF4\uB0B4 \uC8FC\uC138\uC694. \uC124\uC815\uD558\uC2E0 \uC131\uACA9\uC5D0 \uB9DE\uCDB0 \uC9C4\uD589\uD558\uACA0\uC2B5\uB2C8\uB2E4.", "\uD560 \uC77C\uC744 \uC5EC\uAE30\uC5D0 \uC801\uC5B4 \uC8FC\uC138\uC694. \uCF54\uB4DC \uC800\uC7A5\uC18C\uC758 \uC2E4\uC81C \uB0B4\uC6A9\uC744 \uBC14\uD0D5\uC73C\uB85C \uC791\uC5C5\uD558\uACA0\uC2B5\uB2C8\uB2E4.", "\uAD00\uB828 \uB0B4\uC6A9\uC744 \uC54C\uB824\uC8FC\uC2DC\uBA74 {personality} \uBAA8\uB4DC\uB85C \uB2F5\uBCC0\uD558\uACA0\uC2B5\uB2C8\uB2E4."].map((text) => text.replace("{personality}", () => personality || "\uC0AC\uC6A9\uC790 \uC9C0\uC815"))
  },
  "composer": {
    "newSessionPlaceholders": [
      "무엇을 만들어 볼까요?",
      "Hermes에게 작업을 맡겨 보세요",
      "어떤 생각을 하고 계신가요?",
      "필요한 것을 설명해 주세요",
      "어떤 일을 해 볼까요?",
      "무엇이든 물어보세요",
      "목표부터 알려주세요"
    ],
    "followUpPlaceholders": [
      "이어서 메시지 보내기",
      "추가 정보 알려주기",
      "요청 구체화하기",
      "다음은 무엇을 할까요?",
      "계속 진행해 보세요",
      "한 단계 더 발전시켜 보세요",
      "수정하거나 이어서 진행하기"
    ]
  },
  "sidebar": {
    "projects": {
      "branchOff": () => ({ before: "", after: "\uC5D0\uC11C \uBD84\uAE30" }),
      "toggle": (label, open) => `${label} \uC138\uC158 ${open ? "\uD45C\uC2DC" : "\uC228\uAE30\uAE30"}`
    }
  },
  "connectorsPage": {
    "tools": {
      "conflictBody": (off, on) => `\uB2E4\uB978 \uACF3\uC5D0\uC11C \uC124\uC815\uC774 \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC5EC\uAE30\uC11C \uCF20 \uB3C4\uAD6C \uC911 ${off}\uAC1C\uAC00 \uAEBC\uC84C\uACE0, \uC5EC\uAE30\uC11C \uB048 \uB3C4\uAD6C \uC911 ${on}\uAC1C\uAC00 \uCF1C\uC838 \uC788\uC2B5\uB2C8\uB2E4. \uD3B8\uC9D1 \uB0B4\uC6A9\uC740 \uD654\uBA74\uC5D0 \uB0A8\uC544 \uC788\uC73C\uBA70 \uC544\uC9C1 \uC800\uC7A5\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.`
    }
  },
  "promptNotices": {
    "desktopCommands": {
      "restored": (hash) => hash ? `\uCCB4\uD06C\uD3EC\uC778\uD2B8 ${hash}\uC744(\uB97C) \uBCF5\uC6D0\uD588\uC2B5\uB2C8\uB2E4.` : "\uCCB4\uD06C\uD3EC\uC778\uD2B8\uB97C \uBCF5\uC6D0\uD588\uC2B5\uB2C8\uB2E4."
    }
  },
  "settings": {
    "plugins": {
      "installModal": {
        "reviewedPin": (sha) => sha ? `\uAC80\uD1A0\uB41C \uACE0\uC815 \uBC84\uC804 ${sha}` : "\uAC80\uD1A0\uB41C \uACE0\uC815 \uBC84\uC804"
      }
    },
    "gateway": {
      "connectedTo": (url, version) => `${url}\uC5D0 \uC5F0\uACB0\uB428${version ? ` \xB7 Hermes ${version}` : ""}`
    },
    "model": {
      "moaReferenceToggle": (enabled, index) => `\uCC38\uC870 ${index} ${enabled ? "\uC0AC\uC6A9 \uC548 \uD568" : "\uC0AC\uC6A9"}`
    },
    "billing": {
      "charge": {
        "added": (amount) => amount != null ? `$${amount} \uD06C\uB808\uB527\uC744 \uCD94\uAC00\uD588\uC2B5\uB2C8\uB2E4.` : "\uD06C\uB808\uB527\uC744 \uCD94\uAC00\uD588\uC2B5\uB2C8\uB2E4."
      },
      "plan": {
        "effectScheduled": (name, at, delta) => `${name} \uC694\uAE08\uC81C\uB85C \uBCC0\uACBD\uB418\uBA70 ${at}\uC5D0 \uC801\uC6A9\uB429\uB2C8\uB2E4. \uC9C0\uAE08\uC740 \uACB0\uC81C\uB418\uC9C0 \uC54A\uC73C\uBA70 \uADF8\uB54C\uAE4C\uC9C0 \uD604\uC7AC \uC694\uAE08\uC81C\uAC00 \uC720\uC9C0\uB429\uB2C8\uB2E4.${delta ? ` \uC6D4\uAC04 \uD06C\uB808\uB527 \uBCC0\uACBD: ${delta}.` : ""}`
      },
      "errors": {
        "rateLimited": {
          "message": (mins) => mins > 0 ? `\u{1F7E1} \uACB0\uC81C \uC694\uCCAD\uC774 \uB108\uBB34 \uB9CE\uC2B5\uB2C8\uB2E4. \uC57D ${mins}\uBD84 \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694. \uACB0\uC81C \uC2E4\uD328\uB294 \uC544\uB2D9\uB2C8\uB2E4.` : "\u{1F7E1} \uACB0\uC81C \uC694\uCCAD\uC774 \uB108\uBB34 \uB9CE\uC2B5\uB2C8\uB2E4. \uACB0\uC81C \uC2E4\uD328\uB294 \uC544\uB2D9\uB2C8\uB2E4."
        },
        "stripeUnavailable": {
          "message": (mins) => mins > 0 ? `Stripe\uC5D0 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4. \uC57D ${mins}\uBD84 \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694.` : "Stripe\uC5D0 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694."
        }
      }
    }
  },
  "skills": {
    "toggleToolset": (label, enabled) => `${label} \uB3C4\uAD6C \uBAA8\uC74C ${enabled ? "\uCF1C\uAE30" : "\uB044\uAE30"}`,
    "plugins": {
      "catalogProvenance": (sha) => `Hermes \uCE74\uD0C8\uB85C\uADF8\uC5D0\uC11C \uC124\uCE58\uD588\uC2B5\uB2C8\uB2E4${sha ? ` \xB7 \uACE0\uC815 \uBC84\uC804 ${sha}` : ""}.`
    }
  },
  "commandCenter": {
    "pets": {
      "toggleFailed": (enabled) => `\uD3AB\uC744 ${enabled ? "\uCF1C\uC9C0" : "\uB044\uC9C0"} \uBABB\uD588\uC2B5\uB2C8\uB2E4.`
    }
  },
  "webhooks": {
    "toggleFailed": (name, enabled) => `"${name}"\uC744(\uB97C) ${enabled ? "\uCF1C\uC9C0" : "\uB044\uC9C0"} \uBABB\uD588\uC2B5\uB2C8\uB2E4.`
  },
  "messaging": {
    "waitingSince": (minutes) => minutes < 1 ? "\uBC29\uAE08" : `${minutes}\uBD84 \uC804`
  },
  "statusStack": {
    "control": {
      "gateLastExit": (code) => code === null ? "\uB300\uAE30 \uC911" : `\uC885\uB8CC \uCF54\uB4DC: ${code}`
    }
  },
  "install": {
    "testSucceeded": (url, version) => `${url}\uC5D0 \uC5F0\uACB0\uD588\uC2B5\uB2C8\uB2E4${version ? ` (${version})` : ""}.`
  },
  "shell": {
    "modelMenu": {
      "priceTitle": (input, output, cache) => `100\uB9CC \uD1A0\uD070\uB2F9 \uC785\uB825 ${input} \xB7 \uCD9C\uB825 ${output}${cache ? ` \xB7 \uCE90\uC2DC \uC77D\uAE30 ${cache}` : ""}`,
      "limitedTip": (provider, time) => `${provider} \uC0AC\uC6A9 \uD55C\uB3C4\uC5D0 \uB3C4\uB2EC\uD588\uC2B5\uB2C8\uB2E4.${time ? ` ${time}\uC5D0 \uCD08\uAE30\uD654\uB429\uB2C8\uB2E4.` : ""} \uCD08\uAE30\uD654 \uD6C4 \uC0AC\uC6A9\uD560 \uBAA8\uB378\uC740 \uBBF8\uB9AC \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`,
      "usageLeft": (percent, time) => `${percent}% \uB0A8\uC74C${time ? ` \xB7 \uCD08\uAE30\uD654: ${time}` : ""}`,
      "usageWindow": (label, percent, time) => `${label}: ${percent}% \uB0A8\uC74C${time ? ` \xB7 \uCD08\uAE30\uD654: ${time}` : ""}`
    },
    "statusbar": {
      "planUsageTitle": (used, resetsIn) => `\uC694\uAE08\uC81C \uC0AC\uC6A9\uB7C9 ${used} \uC0AC\uC6A9${resetsIn ? ` \xB7 ${resetsIn} \uD6C4 \uCD08\uAE30\uD654` : ""} \xB7 \uACB0\uC81C \uC124\uC815 \uC5F4\uAE30`
    }
  },
  "preview": {
    "web": {
      "loadFailedConsole": (code, message) => `\uBD88\uB7EC\uC624\uAE30 \uC2E4\uD328${code ? ` (${code})` : ""}: ${message}`
    }
  },
  "assistant": {
    "thread": {
      "errorSwitchToModel": (model, note) => `${model} \uBAA8\uB378\uB85C \uC804\uD658${note ? ` (${note})` : ""}`
    }
  },
  "desktop": {
    "yoloSystem": (active) => `\uC774 \uC138\uC158\uC758 YOLO ${active ? "\uCF1C\uC9D0" : "\uAEBC\uC9D0"}`
  },
  "ui": {
    "sidebar": {
      "toggle": (open) => `\uC0AC\uC774\uB4DC\uBC14 ${open ? "\uD45C\uC2DC" : "\uC228\uAE30\uAE30"}`
    }
  }
};

export default {
  id: 'hermes-lang-ko',
  name: 'Korean language pack',
  register(ctx) {
    // Older Desktop builds can still use the backend YAML language pack.
    if (typeof ctx.i18n?.registerAppLocale !== 'function') return;
    ctx.i18n.registerAppLocale('ko', {
      endonym: '한국어', englishName: 'Korean', rtl: false, translations
    });
  }
};
