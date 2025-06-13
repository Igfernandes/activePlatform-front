import { Dispatch, SetStateAction } from "react";

export type HandleSubscribeProps = {
  setSubscription: Dispatch<SetStateAction<SubscriptionShape | null>>;
};

export type SubscriptionShape = {
  endpoint: string;
  keys: KeysShape;
};

type KeysShape = {
  p256dh?: string;
  auth?: string;
};
