import { HOST, IMAGES } from "@constants";
import Head from "next/head";

export type BaseSEOProps = {
  title?: string;
  description?: string;
  lang?: string;
  url?: string;
  thumbnail?: string;
  thumbnailWidth?: string;
  thumbnailHeight?: string;
  siteName?: string;
};

export const BaseSEO = ({
  title = "노래책 - 즐거운 음악 방송을 위한 신청곡 플랫폼",
  description = "즐거운 음악 방송을 위한 신청곡 플랫폼. 노래책에서는 귀가 사르르 녹는 꿀보이스들에게 신청곡을 보낼 수 있어요!",
  lang = "ko_KR",
  url = HOST,
  thumbnail = IMAGES.COMMON.DEFAULT_THUMBNAIL,
  thumbnailWidth = "200",
  thumbnailHeight = "200",
  siteName = `노래책 - 즐거운 음악 방송을 위한 신청곡 플랫폼`,
}: BaseSEOProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={thumbnail} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content={lang} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image:width" content={thumbnailWidth} />
      <meta property="og:image:height" content={thumbnailHeight} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={thumbnail} />
    </Head>
  );
};
