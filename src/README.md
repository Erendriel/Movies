// Implement a Movie List in React using the following api:

const apiKey =
"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjBkNjBmNWFhMTRlNTZjZmQyM2ZhZWI0NjczNzgwNyIsInN1YiI6IjVlNmQxNGZlYTliOWE0MDAxODlmZGFmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jIXupbX7Vx1lzHOm87Ny0DYaEP0UibEfW_MWGY4wpao";
const baseUrl = "https://api.themoviedb.org/3/trending/movie/day";
const headers = {
method: "GET",
headers: {
Authorization: "Bearer " + apiKey
}
};

// - Create Now Playing section that should include the following:
// - Poster Image
// - Movie Title
// - Only show 10 movies
// - Add to Most popular functionality with a button
// - Movies persist here

// NOTE: We can add or delete to this section
// - Create a Popular Movies section that should include the following:
// - Poster Image
// - Movie Title
// - Can add from Movies Now Playing
// - sort alphabetically

// Note: Styling and Design will be up to you. But clean styling and UI should be taken into account

// Hints:
/\*\*
You'll want to find the Get Now Playing endpoint in the API Docs and pass the region US.

To get the poster of any movie, prefix the poster_path with this URL: https://image.tmdb.org/t/p/w300

So a full URL looks like this: https://image.tmdb.org/t/p/w300/5RbyHIVydD3Krmec1LlUV7rRjet.jpg
You can also get a different size poster by changing w300 to a different width. For example: w500 for a 500px wide poster.
\*/

// Bonus:
// Error handling
// Unit test
// Implement the following user stories:
// The ability to click on a movie poster to see a new page with movie details on it.
// HINT: Use React Router, and lay it out using your own preferences.
// The ability to see only 10 movies that are now playing.
