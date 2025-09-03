import { useQuery } from "@tanstack/react-query";

// Custom hook
const useCountries = () => {
  const fetchData = async () => {
    const res = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population,cca3"
    );
    if (!res.ok) {
      throw new Error("Failed to fetch countries");
    }
    const data = await res.json();

    return data.sort((a, b) => a.name.common.localeCompare(b.name.common));
  };

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["countries"],
    queryFn: fetchData,
    staleTime: 1000 * 60 * 60,
  });

  return { data, isPending, isError, error };
};

export default useCountries;
