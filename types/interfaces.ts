export type ServiceDialogFormType = {
  useAutoD: boolean;
  autodEmail: string;
  url: string;
  exchangeVersion: string;
  authType: string;
  userName: string;
  password: string;
  domain: string;
  redirectUri: string;
  clientAppId: string;
  serverName: string;
  authAuthority: string;
  impersonate: boolean;
  impersonateIdType: string;
  impersonateId: string;
  setAnchorMailbox: boolean;
  anchorMailboxSmtp: string;
  setPublicFolderHeader: boolean;
  publicFolderHeaderSmtp: string;
  [x: string]: any;
}

export type FormType<T> = {
  [K in keyof T]: T[K]
  [K in keyof T]: () => void
}