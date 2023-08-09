import { ErrorPage } from "@components";

export default function Error500Page() {
  return (
    <ErrorPage statusCode={500} description={"서버에서 문제가 발생했습니다."} />
  );
}
