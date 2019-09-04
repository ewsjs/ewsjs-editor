// import { StringHelper, Exception } from "ews-javascript-api";

// const ApplicationException = Exception;

// export class ActiveDirectoryHelper {

//   /**
//    * Get the primary SMTP address of the given user name
//    *
//    * @param   {string}   upnUserName   UPN formatted user name to look up
//    * @return  {string}                 Primary SMTP address of the user if found
//    */
//   public static GetPrimarySmtp(upnUserName: string): string {
//     let primarySmtp: string = StringHelper.Empty;
//     //  Use the current user's identity to get their
//     //  default SMTP address from the default domain.
//     //  In other words - make a lot of assumptions!
//     //  This logic is very thin but maybe it will stand up...
//     //  Expecting the format of the identity to be
//     //  'DomainName\sAMAccountName', if not BOOM!
//     if (!upnUserName.includes("\\")) {
//       throw new ApplicationException("Unknown identity name pattern, cannot retrieve default SMTP address.");
//     }

//     //  Tear off the sAMAccountName from the identity string
//     let sAMAccountName: string = upnUserName.split('\\')[1];
//     //  Search AD for the sAMAccountName
//     let ds: DirectorySearcher = new DirectorySearcher();
//     ds.Filter = StringHelper.Format("sAMAccountName={0}", sAMAccountName);
//     let result: SearchResult = ds.FindOne();
//     if ((result == null)) {
//       //  If there are no results go BOOM!
//       throw new ApplicationException("Directory entry not found, cannot retrieve default SMTP address.");
//     }

//     //  Get the 'mail' property and assume the
//     //  first value is the primary SMTP address
//     return result.Properties["mail"][0].ToString();
//   }
// }