async function fetchDogFacts() {
  try {
    //create new Container div with a Head tag, a row div and a footer(bootstrap)
    let containerDiv = document.createElement("div"),
      heading = document.createElement("h1"),
      rowDiv = document.createElement("div"),
      footerDiv = document.createElement("div");

    containerDiv.setAttribute("class", "container");
    heading.setAttribute("id", "title");
    heading.setAttribute("class", "text-center");
    heading.innerHTML = "Random Dog Facts";
    rowDiv.setAttribute("class", "row");
    footerDiv.setAttribute("class", "container-fluid");
    footerDiv.setAttribute("id", "footer");

    //Append newly created elements to body section
    document.body.append(containerDiv);
    containerDiv.append(heading, rowDiv);

    // set counter
    let count = 50;

    for (i = 0; i < count; i++) {
      //fetch the api
      let response = await fetch("https://dog-api.kinduff.com/api/facts");

      let dogfacts = await response.json();

      let responseimg = await fetch("https://random.dog/woof.json");
      let dogimages = await responseimg.json();

      let collg4Div = document.createElement("div"),
        cardDiv = document.createElement("div"),
        cardImg = document.createElement("img"),
        cardContentDiv = document.createElement("div"),
        cardBodyDiv = document.createElement("div"),
        cardBodyHearder = document.createElement("div"),
        cardContentHeading = document.createElement("h5"),
        cardContentCapital = document.createElement("p"),
        cardContentRegion = document.createElement("p"),
        cardContentCountryCode = document.createElement("p");

      collg4Div.setAttribute("class", "col-sm-6 col-md-4 col-lg-4 col-xl-4");
      collg4Div.setAttribute("id", "gradient-background");
      cardDiv.setAttribute("class", "card h-100");

      cardImg.setAttribute("class", "card-img-top");
      cardImg.setAttribute("id", "card-img");

      cardBodyHearder.setAttribute("class", "card-header");
      cardBodyHearder.style.textAlign = "center";
      cardBodyDiv.setAttribute("class", "card-body");
      cardBodyDiv.style.textAlign = "center";

      cardContentHeading.setAttribute("class", "card-title");
      cardContentHeading.setAttribute("id", "card-name");

      cardContentDiv.setAttribute("class", "card-text");
      cardContentCapital.setAttribute("class", "card-title content");
      cardContentRegion.setAttribute("class", "card-title content");
      cardContentCountryCode.setAttribute(
        "class",
        "card-body card-title content"
      );

      //Pass the Image URL and other inputs from the API
      //cardImg.src = fruistslist.data[i].name;
      cardBodyHearder.innerHTML = "Dog Fact " + (i + 1);
      cardContentHeading.innerHTML = dogfacts.facts;

      cardImg.src = dogimages.url;

      //cardContentCapital.innerHTML = "Capital: ";
      cardContentRegion.innerHTML = "Random Dog Image";
      //cardContentCountryCode.innerHTML = "Country Code: ";

      //Append the newly created elements to row
      rowDiv.append(collg4Div);
      collg4Div.append(cardDiv);
      cardDiv.append(cardBodyHearder, cardBodyDiv);
      cardBodyDiv.append(cardImg, cardContentDiv, cardContentHeading);
      cardContentDiv.append(
        cardContentCapital,
        cardContentRegion,
        cardContentCountryCode
      );
    }

    // Create a Footer section
    footerDiv.innerHTML = `<div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-3">
        <p><b>About the Author</b></p>
        <p>Made by Bala for GUVI Assignment</p>
      </div>
      <div class="col-md-2">
        <p><b>Techs Used</b></p>
        <p>HTML5, CSS, Bootstrap</p>
      </div>
      <div class="col-md-3">
        <p><b>Content Disclaimer</b></p>
        <p>The content of this website is copied from Wikipedia</p>
      </div>
      <div class="col-md-2"></div>
    </div>`;
    document.body.append(footerDiv);
  } catch (e) {
    console.error(e);
  }
}

fetchDogFacts();
