import { useQueryFestivals } from 'src/api/generated/apiComponents';

export const useFilteredFestivals = (search?: string) => {
  const { data, isLoading, isError, error } = useQueryFestivals({});
  const formattedSearch = search?.toLowerCase();

  const festivals = formattedSearch
    ? data?.filter(
        ({ name, location }) =>
          name?.toLowerCase().includes(formattedSearch) ||
          location?.city?.toLowerCase().includes(formattedSearch) ||
          location?.country?.toLowerCase().includes(formattedSearch)
      )
    : data;

  return { festivals, isLoading, isError, error };
};
