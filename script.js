document.addEventListener("DOMContentLoaded", () => {
    const apiUrls = [
        "https://api.publicapis.org/entries", // API 1 s
        "https://api.adviceslip.com/advice", // API 2
        "https://api.chucknorris.io/jokes/random" // API 3
        // Add more APIs if needed
      ];
  
    // Function to fetch data using Promises
    const fetchData = (url) => {
        return fetch(url)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .catch((error) => {
            console.error("There was a problem fetching the data:", error);
          });
      };
    
      const displayAdvice = (data) => {
        const adviceContainer = document.getElementById("advice");
        adviceContainer.textContent = `Advice: ${data.slip.advice}`;
      };
    
      const displayChuckNorrisJoke = (data) => {
        const chuckNorrisContainer = document.getElementById("chuck-norris-joke");
        chuckNorrisContainer.textContent = `Chuck Norris Joke: ${data.value}`;
      };
    
  
    // Function to display API data on the webpage
    const displayData = (data) => {
      const apiListContainer = document.getElementById("api-list");
      data.entries.forEach((api) => {
        const card = document.createElement("div");
        card.classList.add("col-md-4", "mb-3");
  
        const cardBody = document.createElement("div");
        cardBody.classList.add("card", "p-3");
  
        const title = document.createElement("h5");
        title.textContent = api.API;
  
        const description = document.createElement("p");
        description.textContent = api.Description;
  
        cardBody.appendChild(title);
        cardBody.appendChild(description);
        card.appendChild(cardBody);
        apiListContainer.appendChild(card);
      });
    };
  
    // Fetch data and display on page load
    fetchData(apiUrls[0]).then((data) => {
      displayData(data);
    });

    fetchData(apiUrls[1]).then((data) => {
        displayAdvice(data);
      });
    
      // Fetch data for API 3
      fetchData(apiUrls[2]).then((data) => {
        displayChuckNorrisJoke(data);
      });
  });
  