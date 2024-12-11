async function search() {
    const movieTitle = document.getElementById("result").value;
    
    const url = `https://www.omdbapi.com/?apiKey=fa1c9c03&t=${movieTitle}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      // if (data.Response === "False") {
      //   document.getElementById("movie-details").innerHTML = `<p>Movie not found!</p>`;
      //   return;
      // }
  
      
      document.getElementById("movie-details").innerHTML = `
        <img src="${data.Poster}" alt="${data.Title}" />
        <h2>${data.Title}</h2>
        <p><strong>Released:</strong> ${data.Released}</p>
        <p><strong>Director:</strong> ${data.Director}</p>
        <p><strong>Actors:</strong> ${data.Actors}</p>
        <p><strong>Language:</strong> ${data.Language}</p>
        <p><strong>Country:</strong> ${data.Country}</p>
        <p><strong>Awards:</strong> ${data.Awards}</p>
        <p><strong>Ratings:</strong> ${data.Ratings.map(rating => `${rating.Source}: ${rating.Value}`).join(", ")}</p>
      `;
    } catch (error) {
      document.getElementById("movie-details").innerHTML = `<p>Error!</p>`;
      console.error(error);
    }
  }
  
// `https://www.omdbapi.com/?apikey=falc9c03&t=${moviename}`

