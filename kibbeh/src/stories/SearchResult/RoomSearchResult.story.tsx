import React from "react";
import { Story } from "@storybook/react";

import { RoomSearchResult, RoomSearchResultProps } from "../../ui/SearchResult";

export default {
  title: "SearchResult/RoomSearchResult",
  component: RoomSearchResult,
};

const room = {
  displayName: "The developer’s hangout",
  joinedUsers: ["Terry Owen", "Grace Abraham", "Ben Awad"],
  onlineCount: 355,
};

export const Main: Story<RoomSearchResultProps> = ({ ...props }) => (
  <RoomSearchResult {...props} room={props.room || room} />
);

Main.bind({});
