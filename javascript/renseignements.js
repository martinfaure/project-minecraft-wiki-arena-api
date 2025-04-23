document.addEventListener("DOMContentLoaded", async () => {
  let url = `http://51.38.232.174:3000/v1/entities`;
  const response = await fetch(url);
  const data = await response.json();

  const namemobs = document.querySelector("#nameMob");
  const desciptionmob = document.querySelector("#mobDescription");
  const healid = document.querySelector("#healid");
  const armorid = document.querySelector("#armorid");
  const classif = document.querySelector("#classid");
  const behavior = document.querySelector(".behaviorid");
  const heightid = document.querySelector("#heightid");
  const widthid = document.querySelector("#widthid");

  if (data.length > 0) {
    const mob = data[0];
    if (namemobs) namemobs.textContent = mob.name;
    if (desciptionmob) desciptionmob.textContent = mob.description;
    if (healid) healid.textContent = mob.health;
    if (armorid) armorid.textContent = mob.armor;
    if (classif) classif.textContent = mob.classification;
    if (behavior) behavior.textContent = mob.type;
    if (heightid) heightid.textContent = mob.height;
    if (widthid) widthid.textContent = mob.width;
  }
});
