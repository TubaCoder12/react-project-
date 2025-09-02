import { useQuery } from "@tanstack/react-query";

const UseSingleProduct = (id) => {
  const fetchProduct = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);

    const data = await res.json();
    return data;
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["product", id], // ✅ unique query key per product
    queryFn: fetchProduct,
    enabled: !!id, // fetch only if id exists
  });

  return { data, isLoading, isError, error };
};

export default UseSingleProduct;
