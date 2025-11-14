import type { JSX } from "react";
import MovieCreation from "./MovieCreation";
import Movies from "./Movies";


export default function MoviesApp(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
        <MovieCreation />
        <Movies />
    </div>
  )
}