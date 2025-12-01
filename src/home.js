function setHome() {
    const contentHome = document.querySelector("#content");
    const resName = document.createElement("div");
    const resDetails = document.createElement("div");
    const timings = document.createElement("div");
    const address = document.createElement("div");

    resName.classList.add("name");
    resDetails.classList.add("details");
    timings.classList.add("time");
    address.classList.add("address");

    resName.textContent = "Hazel & Hearth Café";
    resDetails.textContent = "A calm, plant-filled cafe known for its hazelnut lattes, fresh croissants, and quiet study-friendly corners. Popular with students and freelancers.";
    timings.textContent = "Mon-Fri : 8:00AM - 9:00PM";
    address.textContent = "Willow Street, Northbrook Town";

    contentHome.append(resName, resDetails, timings, address);
}
export{setHome}