import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "76vgjv0n",
  dataset: "production",
  apiVersion: "2021-05-30",
  token: "sanity-auth-token",
  useCdn: false,
  ignoreBrowserTokenWarning: true,
});
