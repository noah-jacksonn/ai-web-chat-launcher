import type { LaunchProps } from "@raycast/api";
import { openChat } from "./open-chat";

export default async function Command({ arguments: args }: LaunchProps<{ arguments: Arguments.Cla }>) {
  await openChat("claude", args.mode?.trim().toLowerCase() === "c");
}
