import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
// import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {

  const {gifs,previousTerms, handleTermClicked, handleSearch } = useGifs()

  return (
    <>
      {/**Header */}
      <CustomHeader
        title="GIF Search"
        description="Discover and share the perfect GIF"
      />

      {/**Search */}
      <SearchBar placeholder="Search gifs" onQuery={handleSearch} />

      {/*  Previous searches*/}
      <PreviousSearches
        onlabelClicked={handleTermClicked}
        searches={previousTerms}
      />

      {/* Gifs */}
      {/* GifList: Props => gifs: Gif[] */}
      <GifList gifs={gifs}  />
    </>
  );
};
