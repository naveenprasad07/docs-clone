import { parseAsString, useQueryState } from "nuqs";
import { useState } from "react";

export function useSearchParams() {
  return useQueryState(
    "search",
    parseAsString.withDefault("").withOptions({
      clearOnDefault: true,
    })
  );
}
