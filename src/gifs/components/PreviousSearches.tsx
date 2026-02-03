import type { FC } from "react";

interface Props {
  searches: string[];

  onlabelClicked: (term:string) => void;
}

export const PreviousSearches: FC<Props> = ({ searches, onlabelClicked }: Props) => {
  return (
    <div className="previous-searches">
      <h2>Previous searches</h2>
      <ul className="previous-searches-list">
        {searches.map((term) => (
          <li key={term}
          onClick={()=> onlabelClicked(term)}>
            {term}
          </li>
        ))}
      </ul>
    </div>
  );
};
