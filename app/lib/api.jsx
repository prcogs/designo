const API_URL = process.env.WP_API_URL;

export async function fetchAPI(query, { variables } = {}) {
  // Set up some headers to tell the fetch call
  // that this is an application/json type
  const headers = { 'Content-Type': 'application/json' };

  // build out the fetch() call using the API_URL
  // environment variable pulled in at the start
  // Note the merging of the query and variables
  const res = await fetch(API_URL, {
    method: 'POST',
    headers : headers,
    body: JSON.stringify({ query, variables })
  });

  // error handling work
  const json = await res.json();


  if (json.errors) {
    console.log(json.errors);
    console.log('error details', query, variables);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function getAllPosts() {
  const data = await fetchAPI(
    `
    query articles {
      posts {
        edges {
          node {
            id
            date
            title
            slug
            featuredImage {
              node {
                mediaItemUrl
                slug
              }
            }
            extraPostInfo {
              auteurExtrait
            }
          }
        }
      }
    }
    `
  );

  return data?.posts;
}

export async function getAllSlug() {
  const data = await fetchAPI(
    `
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  return data?.posts;
}


export async function getPost(slug) {
  const data = await fetchAPI(
    `
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
    }

    query PostBySlug($id: ID!, $idType: PostIdType!) {
        post(id: $id, idType: $idType) {
          ...PostFields
          content
        }
      }
      `,
      {
        variables: {
          "id": slug,
          "idType": 'SLUG'
        }
      }

  );

  return data?.post;
}

export const postComment = async(author, content, idArticle) => {
  const data = await fetchAPI(
    `
    mutation CREATE_COMMENT($id : Int, $author: String, $content: String) {
      createComment(input: {
        commentOn: $id, 
        content: $content, 
        author: $author
      }) {
        success
        comment {
          id
          content
          author {
            node {
              name
            }
          }
        }
      }
    }
    `, 
    {
      variables: {
        "id":idArticle,
        "author":author,
        "content":content
      }
    }
  )

  return data?.createComment;
}


export const getComments = async(id) => {
  const data = await fetchAPI(
    `
    query getComments($id:ID!){
      post(id: $id, idType: DATABASE_ID) {
        id
        title
        comments(first: 100) {
          nodes {
            id
            author {
              node {
                name
              }
            }
            content
            date
          }
        }
        commentCount
      }
    }
    `, 
    {
      variables: {
        "id": id,
      }
    }
  )

  return data?.post
}
