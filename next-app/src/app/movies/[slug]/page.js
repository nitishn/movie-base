import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";

const builder = imageUrlBuilder(client);

export default async function Page({ params }) {
  const query = groq`*[_type == "movie" && slug.current == $slug][0]{
    title,
    poster,
    overview
  }`;
  const queryParams = { slug: params?.slug ?? `` };
  const movie = await client.fetch(query, queryParams);

  return (
    <main>
      {movie.title && <h1>{movie.title}</h1>}
        {movie.poster &&
          <Image
            src={builder.image(movie.poster).width(300).height(300).url()}
            width={300}
            height={300}
            alt={movie.title}
          />
        }
      {movie.overview && <PortableText value={movie.overview} />}
    </main>
  )
}
