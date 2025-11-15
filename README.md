# **Weather App**


This is a simple and clean Weather App built using HTML, CSS, and JavaScript.

It uses the OpenWeather API to fetch real-time weather details for any city.

### **Features**

• Displays temperature, weather condition, humidity, wind speed, pressure, and “feels like” temperature

• Shows weather icons based on the condition (Clear, Clouds, Rain, etc.)

• Search for any city using a search bar

• Search also works using the Enter key

• Displays an animated error message if the city is not found

• Loads a default city (New York) on page load

• Cross icon appears to clear the input field instantly

• Simple and responsive user interface

• Frosted glass effect container for modern UI look

• Prevents undefined data from showing when an invalid city is entered

• Keyboard support for quick searching

### **How It Works**

• The user enters a city name in the search input

• Weather data is fetched from the OpenWeather API

• If the city exists, the app updates all weather details on the screen

• If the city does not exist, an error message slides in

• The input field updates visually with a clear (X) icon while typing

• A default city is shown when the app loads for the first time

### **Error Handling**

• If the city name is invalid or not found, an error message is displayed

• No broken or undefined values appear in the UI

• The app safely handles both “404” and 404 responses

• Network errors are caught and handled

### **Keyboard Support**

• Enter key starts a search

• Backspace clears text normally

• Cross (X) icon clears the input with one click

### **Design Notes**

• Uses a frosted glass / blur effect for the main container

• Background image gives a modern and aesthetic look

• Weather icons are stored locally inside an assets folder

• Favicon can be added to the page header

### **How to Use**

Open the index.html file in any browser

Type a city name and click the search icon or press Enter

View the weather information displayed on the screen

Use the X icon to clear your input anytime

#### **API Used**

OpenWeather Current Weather API

(Requires an API key)

### **Developer Notes**

This project demonstrates DOM manipulation, API calls, async/await usage, user input handling, clean UI updates, and error handling logic.
