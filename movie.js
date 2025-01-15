
// async function search() {
//   const movieTitle = document.getElementById("result").value;
//   const url = `https://www.omdbapi.com/?apiKey=fa1c9c03&t=${movieTitle}`;

//   try {
//     const response = await fetch(url);
//     const data = await response.json();

//     if (data.Response === "False") {
//       document.getElementById("movie-details").style.display = "none";
//       document.getElementById("movie-details").innerHTML = `<p>Movie not found!</p>`;
//       return;
//     }
    
//     document.getElementById("movie-details").style.display = "grid"; // Show details only when movie is found
//     document.getElementById("movie-details").innerHTML = `
//       <img src="${data.Poster}" alt="${data.Title}" />
//       <div class="details">
//         <h2>${data.Title}</h2>
//         <p><strong>Released:</strong> ${data.Released}</p>
//         <p><strong>Director:</strong> ${data.Director}</p>
//         <p><strong>Actors:</strong> ${data.Actors}</p>
//         <p><strong>Language:</strong> ${data.Language}</p>
//         <p><strong>Country:</strong> ${data.Country}</p>
//         <p><strong>Awards:</strong> ${data.Awards}</p>
//         <p><strong>Ratings:</strong> ${data.Ratings.map(rating => `${rating.Source}: ${rating.Value}`).join(", ")}</p>
//       </div>
//     `;
//   } catch (error) {
//     document.getElementById("movie-details").innerHTML = `<p>Error fetching data!</p>`;
//     console.error(error);
//   }
// }


async function search() {
  const movieTitle = document.getElementById("result").value;
  const url = `https://www.omdbapi.com/?apiKey=fa1c9c03&t=${movieTitle}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    const movieDetails = document.getElementById("movie-details");
    const placeholderImage = document.getElementById("placeholder-image");

    if (data.Response === "False") {
      placeholderImage.style.display = "block"; // Show placeholder if no movie is found
      movieDetails.innerHTML = `<p>Movie not found!</p>`;
      return;
    }

    placeholderImage.style.display = "none"; // Hide placeholder when movie details are shown
    movieDetails.style.display = "grid"; // Show movie details
    movieDetails.innerHTML = `
      <img src="${data.Poster}" alt="${data.Title}" />
      <div class="details">
        <h2>${data.Title}</h2>
        <p><strong>Released:</strong> ${data.Released}</p>
        <p><strong>Director:</strong> ${data.Director}</p>
        <p><strong>Actors:</strong> ${data.Actors}</p>
        <p><strong>Language:</strong> ${data.Language}</p>
        <p><strong>Country:</strong> ${data.Country}</p>
        <p><strong>Awards:</strong> ${data.Awards}</p>
        <p><strong>Ratings:</strong> ${data.Ratings.map(rating => `${rating.Source}: ${rating.Value}`).join(", ")}</p>
      </div>
    `;
  } catch (error) {
    document.getElementById("movie-details").style.display = "none"; // Hide everything in case of an error
    console.error(error);
  }
}
