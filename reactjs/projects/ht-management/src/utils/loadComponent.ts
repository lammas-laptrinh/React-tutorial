import React from "react";

export function loadComponent(name: string) {
  const Component = React.lazy(() =>
    import(`@src/Members/${name}/index.tsx`).catch(
      () => import("@src/Pages/Error/NotFound")
    )
  );
  return Component;
}
