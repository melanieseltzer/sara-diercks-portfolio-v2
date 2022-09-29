async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(process.env.HYGRAPH_PROJECT_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.HYGRAPH_PROD_AUTH_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const json = await res.json();

  if (json.errors) {
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    {
      posts(orderBy: date_DESC, first: 20) {
        title
        slug
        excerpt
        date
        coverImage {
          url(transformation: {
            image: {
              resize: {
                fit:crop,
                width:2000,
                height:1000
              }
            }
          })
        }
        author {
          name
          picture {
            url(transformation: {
              image: {
                resize: {
                  width:100,
                  height:100,
                  fit:crop
                }
              }
            })
          }
        }
      }
    }
  `,
    { preview }
  );
  return data.posts;
}
