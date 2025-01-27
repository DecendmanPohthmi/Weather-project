async function getWeather() {
    const apiKey = await fetch("/env")
      .then((response) => response.text())
      .catch(() => {
        console.error("Failed to load API key from environment.");
        return "";
      });
  
    const city = document.getElementById("city").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      const weatherDiv = document.getElementById("weather");
      weatherDiv.innerHTML = `
          <p><strong>City:</strong> ${data.name}</p>
          <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
          <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        `;
    } catch (error) {
      document.getElementById(
        "weather"
      ).innerHTML = `<p>Error: ${error.message}</p>`;
    }
  }
  