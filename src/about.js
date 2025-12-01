function setAbout(){
    const contentAbout = document.querySelector("#content");
    const contact = document.createElement("div");
    const phone = document.createElement("div");
    const email = document.createElement("div");
    const insta = document.createElement("div");
    contact.classList.add("contact");
    phone.classList.add("phone");
    email.classList.add("email");
    insta.classList.add("insta");

    contact.textContent = "Hazel & Hearth Café - Contact";
    phone.textContent = "Phone : +91-98211-44520";
    email.textContent = "Email : hello@hazelhearthcafe.com";
    insta.textContent = "Instagram : @hazelhearthcafe";

    contentAbout.append(contact, phone, email, insta);
}
export {setAbout}