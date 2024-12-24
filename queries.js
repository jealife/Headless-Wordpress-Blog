import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      nodes {
        id
        title
        content
        slug
        featuredImage { # Ajout du champ featuredImage
          node {
            sourceUrl # URL de l'image
          }
        }
      }
    }
  }
`;

export const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($id: ID!) {
    post(id: $id, idType: SLUG) {
      title
      content
      featuredImage { 
        node {
          sourceUrl
        }
      }
    }
  }
`;