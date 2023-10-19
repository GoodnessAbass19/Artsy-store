import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "xs00526l",
  dataset: "production",
  apiVersion: "2023-10-17",
  useCdn: false,
};

const client = createClient(config);

export default client;
