export const siteConfig = {
  basePath: "/apm101-web", // GitHub Pages repository name
  meta: {
    title: "차근차근",
    description: "아동 일상활동 관리 모바일 어플리케이션",
  },
  hero: {
    title: "아동 일상활동 관리\n모바일 어플리케이션",
    subtitle:
      "차근차근은 시작과 마무리가 어려운 아이에게,\n일상의 구조를 설계하고 동기를 부여합니다.",
    badges: ["심리전문가 개발", "과학적 원리 기반", "AI 솔루션"],
  },
  features: [
    {
      title: "아이가 해야 할 일을 추가하세요",
      description:
        "시간대(아침/점심/저녁)를 지정하고 아이의 할 일을 간편하게 추가하세요.\n오늘 할 일, 30분 안에 시작해야 하는 일, 진행 중인 일을 한 눈에 확인할 수 있어요.",
      imagePlaceholder: "add_task_feature",
    },
    {
      title: "AI가 복잡한 일을 작게 나눠줘요.",
      description:
        "AI가 복잡한 일을 더 작은 단위로 나눠주고, 순서와 소요시간을 자동으로 계산해요.\n더 이상 무엇부터 시작해야 할 지 몰라서 일을 미루지 않게 돼요. ",
      imagePlaceholder: "ai_schedule_feature",
    },
    {
      title: "할 일을 끝내면 보상을 받아요",
      description:
        "아이가 해야 할 일을 완수하면 포인트를 받고, 일정한 수행 기준에 도달하면 뱃지를 받아요. 스토어에서 아이가 원하는 보상을 만들고, 양육자는 보상의 포인트 가격을 설정해요. 아이가 보상을 얻기 위해 할 일을 수행하고 양육자는 입 아픈 잔소리를 하지 않아도 돼요. 아이가 원하는 보상을 직접 만들기 때문에 매 번 어떤 걸 해줘야 할 지 고민하지 않아도 돼요.",
      imagePlaceholder: "notification_feature",
    },
    {
      title: "할 일이 시작되기 전 알림을 받아요",
      description:
        "아이가 해야 할 일이 시작되기 전에 알림을 받아요. 몇 시에 무엇을 해야 하는지 전부 기억하지 않아도 돼요. 아이의 머리 속에 알림-수행-보상의 연결고리가 학습되어서 수행률이 올라가요.",
      imagePlaceholder: "reward_feature",
    },
    {
      title: "양육자와 아이의 화면이 연동돼요",
      description:
        "양육자가 할 일을 추가하면 아이의 디바이스에 자동으로 지금 해야 할 일이 표시돼요. 아이가 완수 확인을 요청하면 양육자의 디바이스에 요청이 수신돼요. 물리적으로 떨어져 있을 때도 아이의 할 일을 관리할 수 있어요. ",
      imagePlaceholder: "sync_feature",
    },
  ],
  differentiation: {
    title: "차근차근만의 특별함",
    items: [
      {
        title: "국가 공인 심리전문가 그룹 개발",
        description:
          "서울대학교병원, 서울아산병원 등 국내 최상위 종합병원 출신의 정신건강임상심리사 팀이 개발했어요.",
        icon: "User",
      },
      {
        title: "과학적인 행동수정 원리 적용",
        description:
          "ADHD 등 일상활동 관리가 어려운 아이들에게 가장 효과적인 행동수정 원리를 적용했어요.",
        icon: "LineChart",
      },
      {
        title: "AI를 활용한 맞춤형 스케줄링",
        description:
          "AI가 할 일을 자동으로 분석해요. 계획이 어려운 아이들도 순서와 시간에 맞춰 과제를 수행할 수 있어요.",
        icon: "Sparkles",
      },
      {
        title: "부담없는 양육과 동기 부여",
        description:
          "양육자의 입 아픈 잔소리 없이도 보상 스토어 기능을 통해 해야 할 일을 스스로 챙겨서 해요.",
        icon: "Heart",
      },
    ],
  },
  company: {
    name: "굿이너프",
    ceo: "박찬솔",
    registrationNumber: "229-99-01716",
    address: "서울 강남구 논현로71길 28 2층",
    phone: "010-5023-1742",
    email: "goodenoughofficial@naver.com",
  },
  footer: {
    links: [
      { label: "개인정보처리방침", href: "/privacy" },
      { label: "서비스 이용약관", href: "/terms" },
    ],
  },
};
