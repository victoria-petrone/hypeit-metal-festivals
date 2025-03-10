import { createContext, ReactNode, useContext, useState } from 'react';
import { QueryFestivalsError } from 'src/api/generated/apiComponents';
import {
  FestivalsResponseType,
  FestivalType,
} from 'src/api/generated/apiSchemas';
import { useFilteredFestivals } from 'src/utils/useFilteredFestivals';

type DataContextValue = {
  search: string;
  setSearch: (search: string) => void;
  festivals?: FestivalsResponseType;
  isLoading: boolean;
  isError: boolean;
  error: QueryFestivalsError | null;
  getFestival: (id: string) => FestivalType | null;
};

const DataContext = createContext<DataContextValue>({} as any);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState('');
  const { festivals, isLoading, isError, error } = useFilteredFestivals(search);

  const getFestival = (id: string) =>
    festivals?.find((festival) => festival.id === id) ?? null;

  return (
    <DataContext.Provider
      value={{
        search,
        setSearch,
        festivals,
        getFestival,
        isLoading,
        isError,
        error,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
