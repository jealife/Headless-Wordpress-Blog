import Link from 'next/link';
import React from 'react'

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <header className='w-full mx-auto flex justify-center items-center py-5'>
        <nav className="px-3 flex gap-5">
          <Link href={"/"}>Accueil</Link>
          <Link href={"/posts"}>Blog</Link>
        </nav>
      </header>
      

    </div>
  );
}


