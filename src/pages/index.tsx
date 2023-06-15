import {
  BaseLayout,
  BaseLayoutContents,
  BaseLayoutDrawer,
  CommonDrawer,
} from "@/components";

export default function Index() {
  return (
    <BaseLayout>
      <BaseLayoutDrawer>
        <CommonDrawer isShowMinified />
      </BaseLayoutDrawer>
      <BaseLayoutContents>ㅁㄴㅇㄹ</BaseLayoutContents>
    </BaseLayout>
  );
}
