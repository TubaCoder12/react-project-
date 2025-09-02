import { useQuery } from "@tanstack/react-query";

const UseProduct = () => {
  const FetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
  };

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: FetchData,
  });

  return { data, isPending, isError, error };
};

export default UseProduct;
