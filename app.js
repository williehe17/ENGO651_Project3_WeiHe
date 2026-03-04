// --- Leaflet map setup ---
const calgary = [51.0447, -114.0719];
const map = L.map("map").setView(calgary, 11);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

// --- Date range picker setup ---
flatpickr("#dateRange", {
  mode: "range",
  dateFormat: "Y-m-d"
});

const searchBtn = document.getElementById("searchBtn");
const clearBtn = document.getElementById("clearBtn");
const statusEl = document.getElementById("status");
const dateRangeEl = document.getElementById("dateRange");

searchBtn.addEventListener("click", async () => {

  const dates = dateRangeEl.value.split(" to ");

  if (dates.length !== 2) {
    statusEl.textContent = "Please select a date range";
    return;
  }

  const startDate = dates[0];
  const endDate = dates[1];

  statusEl.textContent = "Loading permits...";

  const data = await fetchPermits(startDate, endDate);

  statusEl.textContent = `Loaded ${data.features.length} permits`;

  console.log(data);
});

clearBtn.addEventListener("click", () => {
  dateRangeEl.value = "";
  statusEl.textContent = "";
});

const API_URL = "https://data.calgary.ca/resource/c2es-76ed.geojson";

async function fetchPermits(startDate, endDate) {

  const where = `issueddate >= '${startDate}' AND issueddate <= '${endDate}'`;

  const params = new URLSearchParams({
    "$where": where,
    "$limit": 5000
  });

  const url = `${API_URL}?${params.toString()}`;

  const response = await fetch(url);

  return response.json();
}