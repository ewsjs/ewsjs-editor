// export class CertificateValidationHelper {
    
//   private static allowedUserAgents: List<String> = new List<string>();
  
//   private static allowedUrls: List<Uri> = new List<Uri>();
  
//   private static uaLock: Object = new Object();
  
//   private static urlLock: Object = new Object();
  
//   public static ServerCertificateValidationCallback(obj: Object, certificate: X509Certificate, chain: X509Chain, errors: SslPolicyErrors): boolean {
//       let result: boolean = false;
//       let request: HttpWebRequest = (<HttpWebRequest>(obj));
//       if ((request != null)) {
//           //  Check for allowed UserAgent
//           CertificateValidationHelper.uaLock;
//           // TODO: lock is not supported at this time
//           if (CertificateValidationHelper.allowedUserAgents.Contains(request.UserAgent)) {
//               result = true;
//           }
          
//           //  Check for allowed Url
//           CertificateValidationHelper.urlLock;
//           // TODO: lock is not supported at this time
//           if (CertificateValidationHelper.allowedUrls.Contains(request.RequestUri)) {
//               result = true;
//           }
          
//       }
      
//       return result;
//   }
// }