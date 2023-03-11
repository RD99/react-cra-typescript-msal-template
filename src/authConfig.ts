export const maslAuthConfig = {
    auth: {
      clientId: "ClientID", // This is your client ID
      authority: "https://login.microsoftonline.com/common", // /common for multi-tenant, /tenantId for single-tenant, /organizations for multi-tenant with MSA accounts
      redirectUri: `${window.location.origin}`, // Must be registered as "spa" type
    },
    cache: {
      storeAuthStateInCookie: true, // recommended to avoid certain IE/Edge issues
    },
  }