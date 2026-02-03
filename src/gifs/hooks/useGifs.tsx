import {  useRef, useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../inferfaces/gifs.interface";


//  const gifsCache: Record<string, Gif[]> = {}

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

 const gifsCache = useRef<Record<string, Gif[]>> ({})

  const handleTermClicked = async(term: string) => {

    term = term.trim().toLocaleLowerCase();
    if(gifsCache.current[term]) {
      setGifs(gifsCache.current[term])
      return;
    }
   
    const gifs = await getGifsByQuery(term);
    setGifs(gifs);

  };

  const handleSearch = async (query: string ='') => {
    
    const term = query.trim().toLocaleLowerCase();
    if (!term) return;
    if (previousTerms.includes(term)) return;
    setPreviousTerms((prevsTerms) => [term, ...prevsTerms].slice(0, 5));
    const gifs = await getGifsByQuery(term);
    setGifs(gifs);

    gifsCache.current[term] = gifs;
    console.log(gifsCache)
  };
  return {
    // Properties - Values
    gifs,
    previousTerms,

    // Methos - Actions
    handleTermClicked,
    handleSearch,
  };
};
