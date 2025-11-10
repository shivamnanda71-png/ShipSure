import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
export default defineSchema({
    orders: defineTable({
        orderid: v.string(),
        product: v.object({
            name: v.string(),
            description: v.string(),
            dimension: v.object({
                width: v.string(),
                height: v.string(),
            }),
        }),
        shippingAddress: v.object({
            address: v.string(),
            pincode: v.string(),
            streetname: v.string(),
            city: v.string(),
            state: v.string(),
            country: v.string(),
        }),
    }),
});
