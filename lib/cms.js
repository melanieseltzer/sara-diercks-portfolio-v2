import { GraphQLClient } from 'graphql-request';

const hygraph = new GraphQLClient(process.env.HYGRAPH_PROJECT_API);

export async function getDataForHomepage() {
  const data = await hygraph.request(
    `
    {
      projects(orderBy: createdAt_ASC) {
        id
        title
        shortDescription
        thumbnail {
          url
          width
          height
        }
        projectPdf {
          url
          size
        }
        finalProject
        externalLinkUrl
        externalLinkName
      }
      sections() {
        about
        contact
      }
    }
  `
  );

  return data;
}
