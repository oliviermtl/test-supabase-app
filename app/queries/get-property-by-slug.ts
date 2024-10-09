import { TypedSupabaseClient } from "../utils/types";

export function getPropertyBySlug(client: TypedSupabaseClient, slug: string) {
  return client
    .from("properties_view_materialized")
    .select("*")
    .eq("property_slug", `properties/${slug}`)
    .throwOnError()
    .single();
}
