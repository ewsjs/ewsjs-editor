// export class ValidationCallbackHelper {
    
//   public static CertificateValidationCallBack(sender: Object, certificate: System.Security.Cryptography.X509Certificates.X509Certificate, chain: System.Security.Cryptography.X509Certificates.X509Chain, sslPolicyErrors: System.Net.Security.SslPolicyErrors): boolean {
//       //  If we're overriding validation then always return true
//       if (GlobalSettings.OverrideCertValidation) {
//           return true;
//       }
      
//       //  If there were errors output error code and return false
//       if ((sslPolicyErrors != System.Net.Security.SslPolicyErrors.None)) {
//           DebugLog.WriteInfo("SSL certificate validation failed", "System.Net.Security.SslPolicyErrors = '{0}'", System.Enum.GetName(typeof(System.Net.Security.SslPolicyErrors), sslPolicyErrors));
//           return false;
//       }
      
//       //  Only write detailed certificate information if requested
//       if (GlobalSettings.EnableSslDetailLogging) {
//           ValidationCallbackHelper.DumpCertificationDetail(certificate, chain);
//       }
      
//       return true;
//   }
  
//   public static DumpCertificationDetail(certificate: System.Security.Cryptography.X509Certificates.X509Certificate, chain: System.Security.Cryptography.X509Certificates.X509Chain) {
//       let certificateDetail: StringBuilder = new StringBuilder();
//       certificateDetail.AppendLine("-----------------------------------------------");
//       certificateDetail.AppendLine("X509Certificate");
//       certificateDetail.AppendLine("-----------------------------------------------");
//       certificateDetail.AppendLine(certificate.ToString(true));
//       certificateDetail.AppendLine();
//       certificateDetail.AppendLine("-----------------------------------------------");
//       certificateDetail.AppendLine("X509Chain");
//       certificateDetail.AppendLine(("ChainContext: " + chain.ChainContext.ToString()));
//       // builder.AppendLine("ChainPolicy: " + chain.ChainPolicy.);
//       certificateDetail.AppendLine("ChainStatus: ");
//       for (let status: X509ChainStatus in chain.ChainStatus) {
//           certificateDetail.AppendLine(("    ChainStatus.Status:" + status.Status.ToString()));
//           certificateDetail.AppendLine(("    ChainStatus.StatusInformation:" + status.StatusInformation));
//       }
      
//       certificateDetail.AppendLine("-----------------------------------------------");
//       for (let element: X509ChainElement in chain.ChainElements) {
//           certificateDetail.AppendLine("-----------------------------------------------");
//           certificateDetail.AppendLine("X509ChainElement");
//           certificateDetail.AppendLine("ChainElementStatus:");
//           for (let status: X509ChainStatus in element.ChainElementStatus) {
//               certificateDetail.AppendLine(("    ChainElementStatus.Status:" + status.Status.ToString()));
//               certificateDetail.AppendLine(("    ChainElementStatus.StatusInformation:" + status.StatusInformation));
//           }
          
//           certificateDetail.AppendLine(("Information:" + element.Information));
//           certificateDetail.AppendLine("-----------------------------------------------");
//           certificateDetail.AppendLine(element.Certificate.ToString(true));
//           certificateDetail.AppendLine();
//       }
      
//       DebugLog.WriteInfo("SSL Certificate detail", certificateDetail.ToString());
//   }
  
//   public static RedirectionUrlValidationCallback(redirectionUrl: string): boolean {
//       //  Validate the contents of the redirection URL. In this simple validation
//       //  callback, the redirection URL is considered valid if it is using HTTPS
//       //  to encrypt the authentication credentials. 
//       let redirectionUri: Uri = new Uri(redirectionUrl);
//       if ((redirectionUri.Scheme != "https")) {
//           DebugLog.WriteInfo("Unsafe URL redirection blocked", ("Cannot allow potentially unsafe redirection to non-SSL URL: " + redirectionUrl));
//           return false;
//       }
      
//       //  online should go here:  "https://autodiscover-s.outlook.com/autodiscover/autodiscover.xml");
//       DebugLog.WriteInfo("Allow URL redirection", ("URL: " + redirectionUrl));
//       // TODO: Warning!!!, inline IF is not supported ?
//       GlobalSettings.AllowAutodiscoverRedirect;
//       "Blocked URL redirection to";
//       return GlobalSettings.AllowAutodiscoverRedirect;
//   }
// }