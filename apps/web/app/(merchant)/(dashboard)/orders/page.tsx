import React from "react";
import { useQuery } from "convex/react";
import { api } from "@repo/convex/convex/api";

function Page() {
  const orders = useQuery(api.order.getOrders);

  return <div></div>;
}

export default Page;
