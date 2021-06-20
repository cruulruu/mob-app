import React, { FunctionComponent } from "react";

import { Result } from "../models/results";
import { ResultListItem } from "./ResultListItem";

interface Props {
 results: Result[];
 onDelete: (result: Result) => void;
}

const ResultsList: FunctionComponent<Props> = ({ results, onDelete }) => (
 <ul className="paddingLeftTodo">
  {results.map((result) => (
   <ResultListItem result={result} onDelete={onDelete} />
  ))}
 </ul>
);

export default ResultsList;