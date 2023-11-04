import type { Meta, StoryObj } from "@storybook/react";

import { BookCard } from "./BookCard";

const meta: Meta<typeof BookCard> = {
  title: "Common/BookCard",
  component: BookCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BookCard>;

export const Default: Story = {
  args: {
    className: "",
    book: {
      "id": "29b536fa-f724-4502-b53c-af2ab67bfa52",
      "customId": null,
      "title": "트위치닉네임임2의 노래책",
      "description": "",
      "requestCommandPrefix": "!노래책",
      "thumbnailURL": null,
      "backgroundImgURL": null,
      "likeCount": 0,
      "requestLimitCount": 0,
      "isHide": false,
      "isPaid": false,
      "isAllowRequest": true,
      "isAllowRequestLimit": false,
      "isAllowDuplicateRequest": false,
      "createdAt": "2023-08-11T07:07:47.309Z",
      "updatedAt": "2023-08-13T08:09:25.503Z",
      "deletedAt": null,
      "bookLikes": [],
      "broadcaster": {
        "id": "c8ae7ccc-e0c0-4b43-b424-9fe4da76815a",
        "displayName": "트위치닉네임임2",
        "profileImgURL": "https://static-cdn.jtvnw.net/user-default-pictures-uv/ebe4cd89-b4f4-4cd9-adac-2f30151b4209-profile_image-300x300.png",
        "email": "js.cha@ejn.gg",
        "description": "",
        "createdAt": "2023-08-11T07:07:47.120Z",
        "updatedAt": "2023-08-11T07:07:47.120Z",
        "deletedAt": null
      }
    }
  },
  render(args) {
    return <BookCard {...args} />;
  },
};
