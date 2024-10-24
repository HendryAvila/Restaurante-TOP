export function createContact() {
    const contact = document.createElement("div");
    const titleContact = document.createElement("h3");
    const phone = document.createElement("p");
    const address = document.createElement("p");

    contact.classList.add("Contact");
    titleContact.textContent = "Contact Us";
    phone.textContent = "Phone: 3421 234 234454";
    address.textContent = "Av. liberty ciry 234";

    // Añadir cada elemento individualmente
    contact.appendChild(titleContact);
    contact.appendChild(phone);
    contact.appendChild(address);
    contact

    return contact;
}
