import { TypedSupabaseClient } from "../utils/types";

export function getProperties(client: TypedSupabaseClient) {
  return client.from("properties_view_materialized").select("*");
}
