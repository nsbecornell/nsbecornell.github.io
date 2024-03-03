pointsData = [];

async function loadPoints() {
  const apiKey = "AIzaSyBN2UN6x4LarJ8gY3CawcQr7V3gHjSRenk";
  const spreadsheetId = "12GiBjbpGtlIA8_Wx1JI2HJyxV7ovoVP0YAtGhejDge8";

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}?includeGridData=true&key=${apiKey}`;

  // Display loading spinner
  const loadingSpinner = document.getElementById("loading-spinner");
  loadingSpinner.style.display = "block";

  const options = {
    method: "GET",
    headers: {
      Authorization:
        "949665169248-629v4nfpdn230dmncs4gecbkmgk6coag.apps.googleusercontent.com",
    },
  };

  const response = await fetch(url, options);

  const data = await response.json();
  const points_list = data.sheets[0].data;
  const row_data = points_list[0].rowData;

  for (const entry of row_data) {
    const values = entry.values;
    const netId = values[0]?.effectiveValue?.stringValue.toLowerCase();
    const points = values[1]?.effectiveValue?.numberValue;
    if (points !== undefined && points !== null && points < 500)
      pointsData.push({ netId, points });
  }
  // Sort the array based on the 'points' property in ascending order
  pointsData.sort((a, b) => b.points - a.points);

  // console.log(pointsData);

  const topThreeContainer = document.getElementById("top-three-container");

  for (let i = 0; i < 3 && i < pointsData.length; i++) {
    const user = pointsData[i];
    const listItem = document.createElement("p");
    listItem.textContent = `${i + 1}. ${user.netId}: ${user.points} points`;
    topThreeContainer.appendChild(listItem);
  }

  // Hide the loading spinner
  loadingSpinner.style.display = "none";
}

// Automatically invoke the function when the page is loaded
document.addEventListener("DOMContentLoaded", function () {
  loadPoints();
});

//function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent the form from actually submitting
  const netidInput = document.getElementById("netid-input");
  const netidValue = netidInput.value; // Get the value of the NetID input field

  //pass input NetID value to getPoints function
  getPoints(netidValue);
}

const pointsForm = document.getElementById("points-form");
pointsForm.addEventListener("submit", handleSubmit);

function getPoints(inputNetID) {
  const pointsDisplay = document.getElementById("points-display");

  if (inputNetID === null || inputNetID === "") {
    if (pointsDisplay) {
      pointsDisplay.textContent = "Enter a NetID";
      return null;
    }
  }

  const netid = inputNetID.toLowerCase();

  const record = pointsData.find((entry) => entry.netId === netid);

  if (record) {
    const { netid, points } = record;
    console.log(netid, points);
    if (pointsDisplay) {
      pointsDisplay.textContent = `Points: ${points}`;
    }
    return points;
  }

  if (pointsDisplay) {
    pointsDisplay.textContent = "NetID not found";
  }

  return null; // Return null to indicate that the NetID was not found
}
