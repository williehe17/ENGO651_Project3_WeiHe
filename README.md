# ENGO651 Lab 3 – Calgary Building Permits Web Map

This project is a web mapping application that visualizes building permits in Calgary using the City of Calgary Open Data API. The application allows users to search for building permits within a selected date range and display them on an interactive map.

The project uses **Leaflet.js** for mapping and combines data from the Open Calgary API to build a simple geospatial web application.

---

# Features

## Interactive Map
When the webpage loads, a Leaflet map centered on Calgary is displayed using OpenStreetMap tiles.

## Date Range Search
Users can select a date range using a **Flatpickr date picker** and search for building permits issued during that time.

The application sends a request to the Calgary Open Data API and retrieves permits within the selected date range.

## Permit Markers
Each building permit returned from the API is displayed as a marker on the map.

## Permit Information Popup
Clicking a marker displays detailed information about the permit, including:

- issueddate  
- workclassgroup  
- contractorname  
- communityname  
- originaladdress  

## Marker Clustering
When many permits appear in the same area, markers are grouped using the **Leaflet MarkerCluster plugin**. This improves map readability and performance.

## Overlapping Marker Handling
Some permits share the same coordinates. The application uses the **OverlappingMarkerSpiderfier plugin** to spread markers apart when clicked so users can select individual permits.

## Clear Search
The **Clear button** removes all markers from the map and resets the search input.

---

# Project Structure

```
project-folder
│
├── index.html
├── app.js
├── style.css
├── config.js
└── README.md
```

### index.html
Contains the webpage layout, map container, and external library links.

### app.js
Contains the main application logic including:
- map initialization  
- API queries  
- marker creation  
- clustering  
- overlapping marker handling  

### style.css
Provides styling for the interface and map layout.

### config.js
Stores API configuration values.

---

# How to Run the Application

1. Clone the repository

```
git clone YOUR_REPOSITORY_LINK
```

2. Open the project folder in **Visual Studio Code**

3. Run a local server

Example using Python:

```
python -m http.server
```

Or use the **Live Server extension in VS Code**.

4. Open the application in a browser

```
http://localhost:5500/index.html
```

---

# Data Source

City of Calgary Open Data Portal

Dataset: **Building Permits**

API Endpoint

```
https://data.calgary.ca/resource/c2es-76ed.geojson
```

---

# Technologies Used

- Leaflet.js  
- Leaflet MarkerCluster  
- OverlappingMarkerSpiderfier  
- Flatpickr  
- OpenStreetMap  
- Calgary Open Data API  

---

# Author

Wei He  
Geomatics Engineering MEng  
University of Calgary

# Lab 4 – Mapbox Traffic Incidents Integration

Lab 4 extends the Lab 3 web map by integrating traffic incident data using Mapbox Studio.

## Traffic Dataset
Traffic incident data was uploaded to Mapbox Studio as a tileset containing point locations of incidents across Calgary.

## Mapbox Style Design 

A custom Mapbox style was created and carefully designed to improve visualization and readability.

### Basemap Choice
The **Mapbox Standard style** was selected as the basemap because it provides:

- clean and modern design  
- good contrast with overlay data  
- clear road and label visibility  

---

## Circle Layer Styling (Traffic Incidents)

The traffic incidents are displayed using **circle markers** with the following design choices:

### Color
- Red color was chosen to represent traffic incidents
- Red is intuitive for danger / accidents and draws user attention

### Opacity
- Set to **0.7**
- Allows overlapping points to be visible
- Prevents the map from becoming too visually cluttered

### Radius (Zoom-based styling)

Circle size changes with zoom level:

- Zoom 10 → small radius (~2 px)
- Zoom 14+ → larger radius (~6 px)

This ensures:
- no clutter when zoomed out  
- better visibility when zoomed in  

### Stroke 
- Stroke color: white  
- Stroke width: 1 px  

Purpose:
- improves contrast against basemap  
- makes each point clearly distinguishable  

## Mapbox Configuration

The Mapbox access token and style URL are stored in `config.js`.

Example configuration:

```javascript
window.MAPBOX_CONFIG = {
  ACCESS_TOKEN: "your_mapbox_access_token",
  STYLE_URL: "mapbox://styles/username/style_id"
};
```

## Traffic Layer Toggle

A button was added to allow users to toggle the traffic incident layer on and off.

## Rendering Fix

To ensure the Mapbox layer displays correctly above the Leaflet basemap:

```javascript
pane: "overlayPane"
```

## Final Result

The final web application now includes:

- Building permit visualization (Lab 3)
- Traffic incident visualization (Lab 4)
- Toggle control for the traffic layer
- Interactive Leaflet web map

This demonstrates integration of open data APIs and Mapbox-hosted geospatial datasets within a web mapping application.