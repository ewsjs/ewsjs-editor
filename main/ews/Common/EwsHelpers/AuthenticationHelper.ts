import { ExchangeService, IRefParam, ExchangeCredentials, Uri } from "ews-javascript-api"

export type oAuthResult = null | {
  Credentials: ExchangeCredentials,
  MailboxBeingAccessed: string,
  AccountAccessingMailbox: string,
}

export class AuthenticationHelper {
  public async Do_OAuth(sAuthority: string, sAppId: string, sRedirectURL: string, sServername: string): Promise<oAuthResult> {
    //  See // https://msdn.microsoft.com/en-us/library/office/dn903761(v=exchg.150).aspx
    //  get authentication token
    const authority: string = sAuthority
    const clientID: string = sAppId
    const clientAppUri: Uri = new Uri(sRedirectURL)
    const serverName: string = sServername
    // const authenticationContext: AuthenticationContext = new AuthenticationContext(authority, false)
    // const oPlatformParameters: PlatformParameters = new PlatformParameters(PromptBehavior.Always)
    // const authenticationResult: AuthenticationResult = await authenticationContext.AcquireTokenAsync(serverName, clientID, clientAppUri, oPlatformParameters).Result
    return null
    // return {
    //   Credentials: new OAuthCredentials(authenticationResult.AccessToken), //  Add authenticaiton token to requests
    //   MailboxBeingAccessed: authenticationResult.UserInfo.DisplayableId,
    //   AccountAccessingMailbox: authenticationResult.UserInfo.DisplayableId, //  oAuth at this time does not support delegate or impersonation access - may need to change this in the future.
    // }
  }
}
