import { GET_POSTS } from '../../queries';
import client from '../../apollo-client';
import Link from 'next/link';
import Image from 'next/image';

async function getPostsData() {
  try {
    const { data } = await client.query({ query: GET_POSTS });
    if (!data || !data.posts || !data.posts.nodes) {
      console.error("Données des articles non valides :", data);
      return [];
    }
    return data.posts.nodes;
  } catch (error) {
    console.error("Erreur lors de la récupération des articles :", error);
    return [];
  }
}

export default async function Posts() {
  const posts = await getPostsData();

  if (posts.length === 0) {
    return <div className="container mx-auto p-4">Aucun article trouvé.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <header className='w-full mx-auto flex justify-center items-center py-5'>
        <nav className="px-3 flex gap-5">
          <Link href={"/"}>Accueil</Link>
          <Link href={"/posts"}>Posts</Link>
        </nav>
      </header>
      <section className='max-w-6xl w-full mx-auto flex flex-col gap-3 justify-center items-center h-96 rounded-xl mt-4 bg-blue-700 text-white'>

        <h1 className='text-4xl font-bold'>Blog</h1>
        <p className='font-thin'>Bienvenue sur mon blog.</p>
      </section>
      <div className='max-w-6xl w-full mx-auto mt-10'>
        <h2 className='font-semibold text-2xl'>Tout les articles</h2>
      </div>
      <ul className='max-w-6xl w-full mx-auto my-10'>
        {posts.map((post) => (
          <li key={post.id} className="border border-1 rounded p-4 w-max"> 
          <Link href={`/posts/${post.slug}`} className="font-bold hover:underline">
          {post.featuredImage && post.featuredImage.node && post.featuredImage.node.sourceUrl && (
            <Image
              src={post.featuredImage.node.sourceUrl}
              alt={post.title}
              width={300} 
              height={300} 
              className="mb-2 rounded object-cover" 
            />
          )}
            {post.title}
          </Link>
        </li>
        ))}
      </ul>
    </div>
  );
}