"use client";
export const dynamic = "error";

import useSupabaseBrowser from "../../utils/supabase-browser";
import { getPropertyBySlug } from "../../queries/get-property-by-slug";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import Image from "next/image";

export default function CountryPage({ params }: { params: { slug: string } }) {
  const supabase = useSupabaseBrowser();
  const { data, isLoading, isError, error } = useQuery(
    getPropertyBySlug(supabase, params.slug)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>{JSON.stringify(error)}</div>;
  }

  return (
    <div>
      <h1>{JSON.stringify(data.media_urls[0])}</h1>
      <Image
        src={data.media_urls[0]}
        alt={data.property_slug}
        width={150}
        height={150}
      />
    </div>
  );
}
