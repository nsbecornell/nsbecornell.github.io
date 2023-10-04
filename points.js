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

async function getPoints(inputNetID) {
  const apiKey = "AIzaSyBN2UN6x4LarJ8gY3CawcQr7V3gHjSRenk";
  const spreadsheetId = "12GiBjbpGtlIA8_Wx1JI2HJyxV7ovoVP0YAtGhejDge8";

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}?includeGridData=true&key=${apiKey}`;

  const options = {
    method: "GET",
    headers: {
      Authorization:
        "949665169248-629v4nfpdn230dmncs4gecbkmgk6coag.apps.googleusercontent.com",
    },
  };

  const pointsDisplay = document.getElementById("points-display");

  if (inputNetID === null || inputNetID === "") {
    if (pointsDisplay) {
      pointsDisplay.textContent = "Enter a NetID";
      return null;
    }
  }

  const response = await fetch(url, options);

  const data = await response.json();
  const points_list = data.sheets[0].data;
  const row_data = points_list[0].rowData;

  const netid = inputNetID.toLowerCase();

  for (const entry of row_data) {
    const values = entry.values;
    const id = values[0]?.effectiveValue?.stringValue.toLowerCase();
    const points = values[1]?.effectiveValue?.numberValue;

    if (netid === id) {
      console.log(id, points);
      if (pointsDisplay) {
        pointsDisplay.textContent = `Points: ${points}`;
      }
      return points;
    }
  }

  if (pointsDisplay) {
    pointsDisplay.textContent = "NetID not found";
  }

  return null; // Return null to indicate that the NetID was not found
}
