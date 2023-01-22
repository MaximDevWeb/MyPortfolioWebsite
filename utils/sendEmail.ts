import { MessageType } from "assets/types/app";

export const sendMessage = (data: MessageType) => {
  const runtimeConfig = useRuntimeConfig();
  const url = runtimeConfig.public.apiBase + "/mail/portfolio/feedback";

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  });
};
