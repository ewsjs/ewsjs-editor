// export class AuthenticationHelper {
    
//   public Do_OAuth(/* ref */oService: ExchangeService, /* ref */MailboxBeingAccessed: string, /* ref */AccountAccessingMailbox: string, sAuthority: string, sAppId: string, sRedirectURL: string, sServername: string): boolean {
//       let bRet: boolean = false;
//       //  See // https://msdn.microsoft.com/en-us/library/office/dn903761(v=exchg.150).aspx
//       //  get authentication token
//       let authority: string = sAuthority;
//       let clientID: string = sAppId;
//       let clientAppUri: Uri = new Uri(sRedirectURL);
//       let serverName: string = sServername;
//       let authenticationContext: AuthenticationContext = new AuthenticationContext(authority, false);
//       let oPlatformParameters: PlatformParameters = new PlatformParameters(PromptBehavior.Always);
//       let authenticationResult: AuthenticationResult = authenticationContext.AcquireTokenAsync(serverName, clientID, clientAppUri, oPlatformParameters).Result;
//       // System.Diagnostics.Debug.WriteLine(authenticationResult.UserInfo.DisplayableId);
//       MailboxBeingAccessed = authenticationResult.UserInfo.DisplayableId;
//       AccountAccessingMailbox = authenticationResult.UserInfo.DisplayableId;
//       //  oAuth at this time does not support delegate or impersonation access - may need to change this in the future.
//       //  Add authenticaiton token to requests
//       oService.Credentials = new OAuthCredentials(authenticationResult.AccessToken);
//       bRet = true;
//       return bRet;
//   }
  
//   public Do_OAuth(/* ref */MailboxBeingAccessed: string, /* ref */AccountAccessingMailbox: string, sAuthority: string, sAppId: string, sRedirectURL: string, sServername: string): ExchangeCredentials {
//       let oExchangeCredentials: ExchangeCredentials = null;
//       //  See // https://msdn.microsoft.com/en-us/library/office/dn903761(v=exchg.150).aspx
//       //  get authentication token
//       let authority: string = sAuthority;
//       let clientID: string = sAppId;
//       let clientAppUri: Uri = new Uri(sRedirectURL);
//       let serverName: string = sServername;
//       let authenticationContext: AuthenticationContext = new AuthenticationContext(authority, false);
//       let oPlatformParameters: PlatformParameters = new PlatformParameters(PromptBehavior.Always);
//       let authenticationResult: AuthenticationResult = authenticationContext.AcquireTokenAsync(serverName, clientID, clientAppUri, oPlatformParameters).Result;
//       //  Add authenticaiton token to requests
//       oExchangeCredentials = new OAuthCredentials(authenticationResult.AccessToken);
//       MailboxBeingAccessed = authenticationResult.UserInfo.DisplayableId;
//       AccountAccessingMailbox = authenticationResult.UserInfo.DisplayableId;
//       //  oAuth at this time does not support delegate or impersonation access - may need to change this in the future.
//       return oExchangeCredentials;
//   }
// }