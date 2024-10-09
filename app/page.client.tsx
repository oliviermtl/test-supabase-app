"use client";

import useSupabaseBrowser from "./utils/supabase-browser";
import { getProperties } from "./queries/get-properties";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import Link from "next/link";

export default function PostsClient() {
  const supabase = useSupabaseBrowser();
  const {
    data: properties,
    isPending,
    isError,
    error,
  } = useQuery(getProperties(supabase));

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError || !properties) {
    return <div>Error: {error?.message || "Unknown error"}</div>;
  }

  return (
    <div>
      {properties?.map((property) => (
        <div key={property.property_id}>
          <Link prefetch={true} href={property.property_slug}>
            {property.property_slug}
          </Link>
        </div>
      ))}
    </div>
  );
}
