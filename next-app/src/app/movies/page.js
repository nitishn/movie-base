import {previewData} from 'next/headers'
import PreviewSuspense from '@/components/PreviewSuspense'

import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import Link from "next/link";

export default async function Page() {
  const query = groq`*[_type == "movie" && defined(slug.current)]{
    _id,
    title,
    slug
  }`;

  const movies = await client.fetch(query);

  return (
    <main>
      <h1>Movies</h1>
      <p>{movies.length} Movies</p>
      {movies.map((movie) => (
        <div>
          <Link
            key={movie._id}
            href={"movies/" + movie.slug.current}
          >
            {movie.title}
          </Link>
        </div>
      ))}
    </main>
  )
}
