const FakeStoreAPi = {
    fetchAllProduct: async () => {
        const res= await fetch('https://fakestoreapi.com/products')
        const result = res.json();
        return result;
    },
    fetchProductById: async (productId) => {
        const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const result = await res.json();
        return result;
    },
    fetchProductBySearchQuery: async (query) => {
        const res= await fetch('https://fakestoreapi.com/products')
        const result = await res.json();
        return result.filter((products) => products.title.toLowerCase().
        includes(query))
        return result;
    },
}
export {FakeStoreAPi}