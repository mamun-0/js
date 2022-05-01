const spaceX = document.querySelector(".r-spaceX");
const push_data = document.querySelector(".push-data");

spaceX.addEventListener("click", () => {
  axios.get("https://api.spacexdata.com/v3/missions").then((e) => {
    // console.log(e.data);
    const getData = e.data;
    getData.forEach((element) => {
      const { mission_name, mission_id, manufacturers, description } = element;
      const createDiv = document.createElement("div");
      const newName = document.createElement("h2");
      const newID = document.createElement("p");
      const newManu = document.createElement("p");
      const newDisc = document.createElement("p");

      newName.innerText = `Mission Name : ${mission_name}`;
      newID.innerText = `Mission ID : ${mission_id}`;
      newManu.innerText = `Manufacturer : ${manufacturers}`;
      newDisc.innerText = `Description : ${description}`;
      createDiv.append(newName, newID, newManu, newDisc);
      push_data.append(createDiv);
    });
  });
});
