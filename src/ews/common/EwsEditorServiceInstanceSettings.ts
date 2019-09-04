
import { ExchangeService, ExchangeVersion, StringHelper, ImpersonatedUserId } from "ews-javascript-api";

export class EwsEditorAppSettings {

  public MailboxBeingAccessed: string = StringHelper.Empty; // calc
  public AccountAccessingMailbox: string = StringHelper.Empty; // calc

  public UrlHost: string = StringHelper.Empty;

  public AuthenticationMethod: RequestedAuthType = RequestedAuthType.DefaultAuth; // Default, UserSpecified, oAuth

  public UseAutoDiscover: boolean = false;
  public RequestedAutodiscoverEmail: string = StringHelper.Empty;
  public RequestedExchangeServiceURL: string = StringHelper.Empty;

  public RequestedExchangeVersion: ExchangeVersion = null;

  public UserName: string = StringHelper.Empty;
  public Password: string = StringHelper.Empty;
  public Domain: string = StringHelper.Empty;

  public UserImpersonationSelected: boolean = false;
  public UserToImpersonate: ImpersonatedUserId = null;
  public ImpersonationType: string = StringHelper.Empty;
  public ImpersonatedId: string = StringHelper.Empty;

  public UseoAuth: boolean = null;
  public oAuthRedirectUrl: string = StringHelper.Empty;
  public oAuthClientId: string = StringHelper.Empty;
  public oAuthServerName: string = StringHelper.Empty;
  public oAuthAuthority: string = StringHelper.Empty;

  public EnableAdditionalHeader1: boolean = false;
  public AdditionalHeader1: string = StringHelper.Empty;
  public AdditionalHeaderValue1: string = StringHelper.Empty;
  public EnableAdditionalHeader2: boolean = false;
  public AdditionalHeader2: string = StringHelper.Empty;
  public AdditionalHeaderValue2: string = StringHelper.Empty;
  public EnableAdditionalHeader3: boolean = false;
  public AdditionalHeader3: string = StringHelper.Empty;
  public AdditionalHeaderValue3: string = StringHelper.Empty;
}

export enum RequestedAuthType {

  DefaultAuth,
  SpecifiedCredentialsAuth,
  oAuth,
}

export class EwsSession {

  public SessionService: ExchangeService = null;
  public SessionEwsEditorAppSettings: EwsEditorAppSettings = null;
}
