import { PRODUCT_URL, UPLOAD_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getproducts: builder.query ({
            query: ({keyword}) => ({
                url: `${PRODUCT_URL}`,
                params: { keyword},
            }),
            keepUnusedDataFor: 5,
            providesTags: ["Product"],
        }),

        getProductById: builder.query({
            query: (productId) => `${PRODUCT_URL}/${productId}`,
            providesTags: (result, error, productId) => [
                { types: "product", id: productId},
            ],

        }),
        allProducts: builder.query({
            query: () => `${PRODUCT_URL}/allproducts`,  
        }),

        getProductDetails: builder.query({
            query: (productId) =>  ({
                url: `${PRODUCT_URL}/${productId}`
            }),
            keepUnusedDataFor: 5
        }),

        createProduct: builder.mutation({

            query: (productData) => ({
                url: `${PRODUCT_URL}`,
                method: 'POST',
                body: productData,
            }),
            invalidatesTags: ["Product"]
        }),

        updateProduct: builder.mutation ({
            query: ({productId, formData}) => ({
                url: `${PRODUCT_URL}/${productId}`,
                method: 'PUT',
                body: formData
            })
        }),

        uploadProductImage: builder.mutation({
            query: (data) => ({
              url: `${UPLOAD_URL}`,
              method: "POST",
              body: data,
            }),
          }),

        deleteProduct: builder.mutation({
            query: (productId) => ({
                url: `${PRODUCT_URL}/${productId}`,
                method: "DELETE",
            }),
            providesTags: ["products"],
        }),

        createReview: builder.mutation ({
            query: (data) => ({
                url:`${PRODUCT_URL}/${data.productId}/reviews`,
                method: 'POST',
                body: data
            })
        }),

        getTopProducts: builder.query ({
            query: () => `${PRODUCT_URL}/top`,
            keepUnusedDataFor:5,
        }),

        getNewProducts: builder.query ({
            query: () => `${PRODUCT_URL}/new`,
            keepUnusedDataFor:5,
        }),
        

    }),
});

export const {
    useAllProductsQuery,
    useDeleteProductMutation,
    useGetNewProductsQuery,
    useGetTopProductsQuery,
    useCreateProductMutation,
    useGetProductDetailsQuery,
    useCreateReviewMutation,
    useUpdateProductMutation,
    useGetProductByIdQuery,
    useGetproductsQuery,
   useUploadProductImageMutation,
} = productApiSlice