declare const _default: import("convex/server").SchemaDefinition<{
    orders: import("convex/server").TableDefinition<import("convex/values").VObject<{
        orderid: string;
        product: {
            name: string;
            description: string;
            dimension: {
                width: string;
                height: string;
            };
        };
        shippingAddress: {
            address: string;
            pincode: string;
            streetname: string;
            city: string;
            state: string;
            country: string;
        };
    }, {
        orderid: import("convex/values").VString<string, "required">;
        product: import("convex/values").VObject<{
            name: string;
            description: string;
            dimension: {
                width: string;
                height: string;
            };
        }, {
            name: import("convex/values").VString<string, "required">;
            description: import("convex/values").VString<string, "required">;
            dimension: import("convex/values").VObject<{
                width: string;
                height: string;
            }, {
                width: import("convex/values").VString<string, "required">;
                height: import("convex/values").VString<string, "required">;
            }, "required", "width" | "height">;
        }, "required", "name" | "description" | "dimension" | "dimension.width" | "dimension.height">;
        shippingAddress: import("convex/values").VObject<{
            address: string;
            pincode: string;
            streetname: string;
            city: string;
            state: string;
            country: string;
        }, {
            address: import("convex/values").VString<string, "required">;
            pincode: import("convex/values").VString<string, "required">;
            streetname: import("convex/values").VString<string, "required">;
            city: import("convex/values").VString<string, "required">;
            state: import("convex/values").VString<string, "required">;
            country: import("convex/values").VString<string, "required">;
        }, "required", "address" | "pincode" | "streetname" | "city" | "state" | "country">;
    }, "required", "orderid" | "product" | "shippingAddress" | "product.name" | "product.description" | "product.dimension" | "product.dimension.width" | "product.dimension.height" | "shippingAddress.address" | "shippingAddress.pincode" | "shippingAddress.streetname" | "shippingAddress.city" | "shippingAddress.state" | "shippingAddress.country">, {}, {}, {}>;
}, true>;
export default _default;
//# sourceMappingURL=schema.d.ts.map