import { ErrorPage } from "@components";

export default function Error404Page() {
  return (
    <ErrorPage
      statusCode={404}
      description={
        "찾을 수 없는 페이지입니다.\n요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨어요"
      }
    />
  );
}
