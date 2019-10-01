import { ImpersonatedUserId, ExchangeVersion, ExchangeService } from "ews-javascript-api"

export class EwsEditorAppSettings {
    public MailboxBeingAccessed: string  // calc
    public AccountAccessingMailbox: string // calc

    public UrlHost: string

    public AuthenticationMethod: RequestedAuthType  // Default, UserSpecified, oAuth

    public UseAutoDiscover: boolean
    public RequestedAutodiscoverEmail: string
    public RequestedExchangeServiceURL: string

    public RequestedExchangeVersion: ExchangeVersion | null

    public UserName: string
    public Password: string
    public Domain: string

    public UserImpersonationSelected: boolean
    public UserToImpersonate: ImpersonatedUserId
    public ImpersonationType: string
    public ImpersonatedId: string

    public UseoAuth: boolean | null
    public oAuthRedirectUrl: string
    public oAuthClientId: string
    public oAuthServerName: string
    public oAuthAuthority: string

    public EnableAdditionalHeader1: boolean
    public AdditionalHeader1: string
    public AdditionalHeaderValue1: string
    public EnableAdditionalHeader2: boolean
    public AdditionalHeader2: string
    public AdditionalHeaderValue2: string
    public EnableAdditionalHeader3: boolean
    public AdditionalHeader3: string
    public AdditionalHeaderValue3: string

}

export enum RequestedAuthType {
    DefaultAuth,
    SpecifiedCredentialsAuth,
    oAuth
}

export class EwsSession {
    public SessionService: ExchangeService
    public SessionEwsEditorAppSettings: EwsEditorAppSettings
}
