if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        // Utiliser une API de géocodage inversé pour obtenir la ville
        const geocodeUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;
        const geocodeResponse = await fetch(geocodeUrl);
        const geocodeData = await geocodeResponse.json();
        const city = geocodeData.address.city || geocodeData.address.town || geocodeData.address.village;

        // Requête vers wttr.in pour obtenir le type de météo
        const weatherUrl = `https://wttr.in/${city}?format=%C`; // %C renvoie le type de météo
        const weatherResponse = await fetch(weatherUrl);
        const weatherText = await weatherResponse.text(); // Exemple : "Partly cloudy"
        const weatherType = weatherText.trim();

        // Fonction pour catégoriser le type de météo
        const weatherTypes = {
            ensoleille: [
                "Sunny", "Clear", "Fair",           // Anglais
                "Ensoleillé", "Clair", "Beau"       // Français
            ],
            nuageux: [
                "Cloudy", "Overcast", "Partly cloudy", "Mist", "Fog", "Haze", // Anglais
                "Nuageux", "Couvert", "Partiellement nuageux", "Brume", "Brouillard", "Brume légère" // Français
            ],
            pluie: [
                "Rain", "Light rain", "Showers", "Drizzle", "Moderate rain", // Anglais
                "Pluie", "Pluie légère", "Averses", "Bruine", "Pluie modérée" // Français
            ],
            orage: [
                "Thunderstorm", "Storm", "Lightning", "Thundershowers", // Anglais
                "Orage", "Tempête", "Éclair", "Averses orageuses"       // Français
            ]
        };

        function categorizeWeather(weather) {
            for (const [category, types] of Object.entries(weatherTypes)) {
                if (types.some(type => weather.includes(type))) {
                    return category;
                }
            }
            return "nuageux"; // Par défaut si le type n'est pas reconnu
        }

            
        const category = categorizeWeather(weatherType);
      

        // Changer l'apparence de la météo
        const weatherDiv = document.getElementById("weatherDiv");
        const weatherImage = document.getElementById("weatherImage");

        // Masquer le div pour l'effet de fondu
        weatherDiv.classList.add("hidden");

        // Attendre que le div soit masqué
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
        
    });
} else {
    console.error("La géolocalisation n'est pas supportée par ce navigateur.");
}
