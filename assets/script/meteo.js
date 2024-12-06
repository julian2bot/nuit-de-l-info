document.addEventListener("DOMContentLoaded", () => {
    const loupe = document.getElementById("loupe");
    const cityInput = document.getElementById("cityInput");
    const weatherDiv = document.getElementById("weatherDiv");
    const weatherImage = document.getElementById("weatherImage");

    // Fonction pour catégoriser le type de météo
    const weatherTypes = {
        ensoleille: ["Sunny", "Clear", "Fair", "Ensoleillé", "Clair", "Beau"],
        nuageux: ["Cloudy", "Overcast", "Partly cloudy", "Mist", "Fog", "Haze", "Nuageux", "Couvert", "Partiellement nuageux", "Brume", "Brouillard", "Brume légère"],
        pluie: ["Rain", "Light rain", "Showers", "Drizzle", "Moderate rain", "Pluie", "Pluie légère", "Averses", "Bruine", "Pluie modérée"],
        orage: ["Thunderstorm", "Storm", "Lightning", "Thundershowers", "Orage", "Tempête", "Éclair", "Averses orageuses"]
    };

    function categorizeWeather(weather) {
        console.log(weather);
        for (const [category, types] of Object.entries(weatherTypes)) {
            for (const type of types) { // Utilisation de "for...of" pour parcourir les valeurs
                if (weather.toLowerCase().includes(type.toLowerCase())) {
                    return category;
                }
            }
        }
        return "ensoleille"; // Par défaut
    }
    

    // Fonction pour mettre à jour l'affichage météo
    function updateWeather(city, weatherType) {
        const category = categorizeWeather(weatherType);

        // Masquer le div pour l'effet de fondu
        weatherDiv.classList.add("hidden");

        setTimeout(() => {
            // Met à jour la classe pour le fond
            weatherDiv.className = `weather-box ${category}`;

            // Met à jour le texte
            const weatherText = `Météo actuelle à ${city} : ${weatherType}`;
            weatherDiv.querySelector("p").textContent = weatherText;

            // Met à jour l'image
            weatherImage.src = `assets/images/${category}.gif`;
            weatherImage.alt = category;

            // Réapparition du div
            weatherDiv.classList.remove("hidden");
        }, 500);
    }

    // Fonction pour récupérer la météo d'une ville donnée
    async function fetchWeather(city) {
        try {
            const weatherUrl = `https://wttr.in/${city}?format=%C`; // %C renvoie le type de météo
            const weatherResponse = await fetch(weatherUrl);
            const weatherType = (await weatherResponse.text()).trim();
            updateWeather(city, weatherType);
        } catch (error) {
            console.error("Erreur lors de la récupération de la météo :", error);
        }
    }

    // Géolocalisation au chargement de la page
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            // Utiliser une API de géocodage inversé pour obtenir la ville
            const geocodeUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;
            const geocodeResponse = await fetch(geocodeUrl);
            const geocodeData = await geocodeResponse.json();
            const city = geocodeData.address.city || geocodeData.address.town || geocodeData.address.village;

            // Récupérer la météo pour la ville détectée
            await fetchWeather(city);
        }, () => {
            console.error("Impossible d'accéder à la position.");
        });
    } else {
        console.error("La géolocalisation n'est pas supportée par ce navigateur.");
    }

    // Afficher le champ textuel au clic sur la loupe
    loupe.addEventListener("click", () => {
        cityInput.classList.toggle("hidden");
        if (!cityInput.classList.contains("hidden")) {
            cityInput.focus();
        }
    });

    // Récupérer la météo pour la ville saisie
    cityInput.addEventListener("keydown", async (e) => {
        if (e.key === "Enter") {
            const city = cityInput.value.trim();
            if (!city) return;
            await fetchWeather(city);

            // Masquer le champ de recherche après saisie
            cityInput.classList.add("hidden");
        }
    });
});
