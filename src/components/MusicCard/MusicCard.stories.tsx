import type { Meta, StoryObj } from "@storybook/react";

import { MusicCard } from "./MusicCard";

const meta: Meta<typeof MusicCard> = {
  title: "Common/MusicCard",
  component: MusicCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MusicCard>;

export const Default: Story = {
  args: {
    className: "",
    music: {
      id: "2d7fdd24-389b-4474-83a6-0e4898c5ffa1",
      title: "アイドル",
      category: "J-POP",
      description: "",
      previewURL: null,
      previewType: null,
      mrURL: null,
      mrType: null,
      likeCount: 0,
      isAllowRequest: true,
      isHide: false,
      isPaid: false,
      createdAt: "2023-07-02T14:07:21.887Z",
      updatedAt: "2023-07-02T14:07:21.887Z",
      deletedAt: null,
      broadcaster: {
        id: "51d34a20-6c8c-4339-b752-8b8d2bf863a0",
        displayName: "베타맨",
        profileImgURL:
          "https://static-cdn.jtvnw.net/jtv_user_pictures/2563ab1c-d9e9-44e8-817b-2589342fddb5-profile_image-300x300.png",
        email: "skymin0417@gmail.com",
        description: "나는 베타맨",
        createdAt: "2023-06-18T07:28:23.912Z",
        updatedAt: "2023-07-02T14:04:27.000Z",
        deletedAt: null,
      },
      book: {
        id: "cad07325-9ed3-4a58-86de-5c3df5138495",
        customId: "user-68391da9-dae6-4bb3-a0de-81ff4c1c6de8",
        title: "베타맨의 노래책",
        description: "",
        requestCommandPrefix: "!노래책",
        thumbnailURL: null,
        backgroundImgURL: null,
        likeCount: 0,
        requestLimitCount: 0,
        isHide: false,
        isPaid: false,
        isAllowRequest: true,
        isAllowRequestLimit: false,
        isAllowDuplicateRequest: false,
        createdAt: "2023-06-18T07:28:24.090Z",
        updatedAt: "2023-06-18T07:28:24.090Z",
        deletedAt: null,
      },
      musicSourceOriginal: null,
      musicSourceMelon: {
        songId: 36355817,
        songTitle: "アイドル",
        artistName: "YOASOBI",
        artistThumbnail:
          "https://cdnimg.melon.co.kr/cm2/artistcrop/images/028/71/809/2871809_20210603175336.jpg",
        category: "J-POP",
        albumTitle: "アイドル",
        albumThumbnail200:
          "https://proxy.musicbook.kr/melon/cm2/album/images/112/20/338/11220338_20230407224115.jpg",
        albumThumbnail500:
          "https://proxy.musicbook.kr/melon/cm2/album/images/112/20/338/11220338_20230407224115_500.jpg",
        albumThumbnail1000:
          "https://proxy.musicbook.kr/melon/cm2/album/images/112/20/338/11220338_20230407224115_1000.jpg",
        lyrics:
          "無敵の笑顔で荒らすメディア\n무테키노 에가오데 아라스 메디아\n무적의 미소로 휩쓸리는 미디어\n\n知りたいその秘密ミステリアス\n시리타이 소노 히미츠 미스테리아스\n알고 싶은 그 비밀 미스테리어스\n\n抜けてるとこさえ彼女のエリア\n누케테루 토코사에 카노죠노 에리아\n얼빠진 부분조차 그녀의 에리어\n\n完璧で嘘つきの君は\n칸페키데 우소츠키노 키미와\n완벽하고 거짓말쟁이인 너는\n\n天才的なアイドル様\n텐사이테키나 아이도루 사마\n천재적인 아이돌 님\n\n\n今日何食べた？好きな本は？\n쿄-나니 타베타? 스키나 혼와?\n오늘은 뭘 먹었어? 좋아하는 책은?\n\n遊びに行くならどこに行くの？\n아소비니 이쿠나라 도코니 이쿠노?\n놀러 갈 때는 어디로 가?\n\n何も食べてない、それは内緒\n나니모 타베테나이 소레와 나이쇼\n아무것도 안 먹었어, 그건 비밀\n\n何を聞かれてものらりくらり\n나니오 키카레테모 노라리쿠라리\n무슨 질문을 받아도 반질 반질\n\nそう淡々と、だけど燦々と\n소- 탄탄토, 다케도 산산토\n그렇게 담담하게, 하지만 눈부시게\n\n見えそうで見えない秘密は蜜の味\n미에소우데 미에나이 히미츠와 미츠노 아지\n보일 듯 보이지 않는 비밀은 꿀맛\n\nあれもないないない\n아레모 나이나이나이\n저것도 아냐 아냐 아냐\n\nこれもないないない\n코레모 나이나이나이\n이것도 아냐 아냐 아냐\n\n好きなタイプは？相手は？\n스키나 타이프와? 아이테와?\n좋아하는 타입은? 사람은?\n\nさあ答えて\n사아 코타에테\n자 대답해줘\n\n誰かを好きになること\n다레카오 스키니 나루코토\n누군가를 좋아하는 것\n\nなんて私分からなくてさ\n난테 와타시 와카라나쿠테사\n같은 건 난 잘 모르거든\n\n嘘か本当か知り得ない\n우소카 혼토-카 시리에나이\n거짓말인지 진짜인지 알 수 없는\n\nそんな言葉にまた一人堕ちる\n손나 코토바니 마타 히토리오치루\n그런 말에 또 한 사람 넘어가네\n\nまた好きにさせる\n마타 스키니 사세루\n또 좋아하게 만드네\n\n誰もが目を奪われてく\n다레모가 메오 우바와레테쿠\n누구든 시선을 빼앗기는\n\n君は完璧で究極のアイドル\n키미와 칸페키데 큐-쿄쿠노 아이도루\n너는 완벽한 궁극의 아이돌\n\n金輪際現れない\n콘린자이 아라와레나이\n결단코 나타나지 않는\n\n一番星の生まれ変わり\n이치반보시노 우마레카와리\n다시 태어난 첫 별인 거야\n\nその笑顔で「愛してる」で\n소노 에가오데 '아이시테루'데\n그 미소로, '사랑해'로\n\n誰も彼も虜にしていく\n다레모 카레모 토리코니 시테이쿠\n누구나 모두 포로로 만들어\n\nその瞳がその言葉が\n소노 히토미가 소노 코토바가\n그 눈동자가 그 말이\n\n嘘でもそれは完全なアイ\n우소데모 소레와 칸젠나 아이\n거짓이라도 그것은 완전한 사랑\n\nはいはいあの子は特別です\n하이 하이 아노 코와 토쿠베츠데스\n네 그 아이는 특별합니다\n\n我々は端からオマケです\n와레와레와 하나카라 오마케데스\n저희들은 애초부터 덤이랍니다\n\nお星様の引き立て役Bです\n오호시사마노 히키타테 야쿠B데스\n별님을 돋보이게 하는 역할 B입니다\n\n全てがあの子のおかげなわけ\n스베테가 아노 코노 오카게나 와케\n모든 것이 그 아이 덕분\n\nない、洒落臭い\n나이 샤라쿠사이\n일리가 없잖아, 아는 체 하지마\n\n妬み嫉妬なんてないわけがない\n네타미싯토난테 나이 와케가 나이\n시기 질투 따위 안 할 리가 없잖아\n\nこれはネタじゃないからこそ許せない\n코레와 네타자 나이카라 코소 유루세나이\n이건 장난이 아니니까 용서를 못 해\n\n完璧じゃない 君じゃ許せない\n칸페키쟈 나이 키미쟈 유루세나이\n완벽하지 않은 넌 용서할 수 없어\n\n自分を許せない\n지분오 유루세나이\n스스로가 용서가 안돼\n\n誰よりも強い君以外は認めない\n다레요리모 츠요이 키미이가이와 미토메나이\n누구보다도 강한 너 말고는 인정하지 않아\n\n誰もが信じ崇めてる\n다레모가 신지 아가메테루\n누구나 믿고 받들고 있어\n\nまさに最強で無敵のアイドル\n마사니 사이쿄오데 무테키노 아이도루\n그야말로 최강의 무적의 아이돌\n\n弱点なんて見当たらない\n자쿠텐난테 미아타라나이\n약점 따위 보이지 않아\n\n一番星を宿してる\n이치반보시오 야도시테루\n첫 번째 별을 머금고 있어\n\n弱い心で見せちゃダメダメ\n요와이 코코로데 미세차 다메다메\n약한 마음을 보이면 안돼\n\n知りたくないとこは見せずに\n시리타쿠 나이 토코와 미세즈니\n알고 싶지 않은 것은 보여주지 않고\n\n唯一無二じゃなくちゃイヤイヤ\n유이이츠 무니자 나쿠차 이야이야\n유일무이 하지 않으면 싫어\n\nそれこそ本物のアイ\n소레코소 혼모노노 아이\n이게 바로 진짜 사랑\n\n特技の笑顔で沸かすメディア\n토쿠기노 에가오데 와카스 메디아\n특기인 웃는 얼굴로 열광 시키는 미디어\n\n隠し切るこの秘密だけは\n카쿠시키루 코노 히미츠다케와\n이 비밀만은 숨기고 싶어\n\n愛してるって嘘で積むキャリア\n아이시테룻테 우소데 츠무 캬리아\n사랑한다며 거짓말로 쌓는 커리어\n\nこれこそ私なりの愛だ\n코레코소 와타시나리노 아이다\n이게 바로 나만의 사랑이야\n\n流れる汗も綺麗なアクア\n나가레루 아세모 키레이나 아쿠아\n흐르는 땀도 아름다운 아쿠아\n\nルビーを隠したこの瞼\n루비오 카쿠시타 코노 마부타\n루비를 숨긴 이 눈꺼풀\n\n歌い踊り舞う私はマリア\n우타이오도리 마우 와타시와 마리아\n노래하고 춤추는 나는 마리아\n\nそう、嘘はとびきりの愛だ\n소우, 우소와 토비키리노 아이다\n그래, 거짓말은 최고의 사랑이야\n\n誰かに愛されたことも\n다레카니 아이사레타 코토모\n누군가에게 사랑 받은 적도\n\n誰かのこと愛したこともない\n다레카노 코토 아이시타 코토모 나이\n누군가를 사랑해 본 적도 없는\n\nそんな私の嘘が\n손나 와타시노 우소가\n그런 나의 거짓말이\n\nいつか本当になること\n이츠카 혼토오니 나루 코토\n언젠가 진심이 될 거라고\n\n信じてる\n신지테루\n믿고 있어\n\nいつかきっと全部手に入れる\n이츠카 킷토 젠부 테니 이레루\n언젠가 분명 전부 손에 들어올 거야\n\n私はそう欲張りのアイドル\n와타시와 소오 요쿠바리노 아이도루\n나는, 그래 욕심쟁이 아이돌\n\n等身大でみんなのこと\n토오신다이데 민나노 코토\n등신대로서 모두를\n\nちゃんと愛したいから\n챤토 아이시타이카라\n제대로 사랑하고 싶으니까\n\n今日も嘘をつくの\n쿄오모 우소오 츠쿠노\n오늘도 거짓말 하는\n\nこの言葉が\n코노 코토바가\n이 말이\n\nいつか本当になる日を願って\n이츠카 혼토오니 나루 히오 네갓테\n언젠가 진짜가 될 날을 바라며\n\nそれでもまだ\n소레데모 마다\n그래도 아직\n\n君と君にだけは言えずにいたけど\n키미토 키미니 다케와 이에즈니 이타케도\n너와 너에게만은 말하지 않고 있었지만\n\nあ、やっと言えた\n아 얏토 이에타\n아, 드디어 말했다\n\nこれは絶対嘘じゃない\n코레와 젯타이 우소쟈 나이\n이건 절대로 거짓말이 아냐\n\n愛してる\n아이시테루\n사랑해",
        releasedAt: "2023-04-12T00:00:00.000Z",
        createdAt: "2023-07-02T14:05:34.644Z",
        updatedAt: "2023-07-02T14:05:34.644Z",
        deletedAt: null,
      },
    },
  },
  render(args) {
    return <MusicCard {...args} />;
  },
};
