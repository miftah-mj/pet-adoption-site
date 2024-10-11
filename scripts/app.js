// fetch, load and show categories on the page

// create loadCategories function
const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
        .then((response) => response.json())
        .then((data) => displayCategories(data.categories))
        .catch((error) => console.log(error));
};

/*



*/
// create cardDemo object
// const cardDemo = {
//     petId: 1,
//     breed: "Golden Retriever",
//     category: "Dog",
//     date_of_birth: "2023-01-15",
//     price: 1200,
//     image: "https://i.ibb.co.com/p0w744T/pet-1.jpg",
//     gender: "Male",
//     pet_details:
//         "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
//     vaccinated_status: "Fully",
//     pet_name: "Sunny",
// };

// {
//     "id": 1,
//     "category": "Cat",
//     "category_icon": "https://i.ibb.co.com/N7dM2K1/cat.png"
// }

// create displayCategories function
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("categories");

    // add data to the page
    // console.log(categories);
    categories.forEach((pet) => {
        console.log(pet);
        // create a button
        const buttonContainer = document.createElement("div");
        buttonContainer.innerHTML = `
        <button id='btn-${pet.id}' class="category-btn rounded-full border border-primary px-10 py-2 text-lg flex gap-4 items-center justify-center">
    <img src="${pet.category_icon}" alt="icon" class="category-icon w-8">
    <span>${pet.category}</span>
</button>`;

        // button.onclick = () => alert("clicked");

        // add button to categoryContainer
        categoryContainer.append(buttonContainer);
    });
};

loadCategories();
// loadPets();
