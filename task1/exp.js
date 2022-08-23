const experiences = [
  {
    id: 1,
    name: "Summmer practice",
    Company: "Endava",
    description: "Frontend",
    startDate: "11/07/2022",
    endDate: "09/09/2022",
  },
];

function generateExpCard(experience) {
  const expCard = document.createElement("div");
  expCard.className = "cardContainer";

  const expName = document.createElement("p");
  const expCompany = document.createElement("p");
  const expDescription = document.createElement("p");
  const expStartDate = document.createElement("p");
  const expEndDate = document.createElement("p");

  expName.innerText = experience.name;
  expCompany.innerText = experience.Company;
  expDescription.innerText = experience.description;
  expStartDate.innerText = experience.startDate;
  expEndDate.innerText = experience.endDate;

  expCard.appendChild(expName);
  expCard.appendChild(expCompany);
  expCard.appendChild(expDescription);
  expCard.appendChild(expStartDate);
  expCard.appendChild(expEndDate);

  return expCard;
}

//generates a div for each experience in the list and adds it to the parent div of experienceContainer
function populateExpContainer(expArray) {
  const mainParent = document.getElementById("experienceContainer"); //identify our parent div container
  expArray.forEach(function (
    experienceObj,
    index
    //cross the list of experiences
  ) {
    const userCard = generateExpCard(experienceObj);
    mainParent.appendChild(userCard);
  });
}

console.log(generateExpCard(experiences[0]));
populateExpContainer(experiences);
