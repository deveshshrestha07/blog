import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
  projectId: "51aq6he2",
  dataset: "production",
  apiVersion: "2023-10-06",
  useCdn: false,
});

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

export default client