// fetch, load and show categories on the page

// create loadCategories function
const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
        .then((response) => response.json())
        .then((data) => displayCategories(data.categories))
        .catch((error) => console.log(error));
};

// create loadpets function
const loadPets = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
        .then((response) => response.json())
        .then((data) => displayPets(data.pets))
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

// displayPets function
const displayPets = (pets) => {
    const videoContainer = document.getElementById("pets");
    videoContainer.innerHTML = "";

    // if (pets.length === 0) {
    //     // remove grid class
    //     videoContainer.classList.remove("grid");
    //     // add no pets found message
    //     videoContainer.innerHTML = `
    //     <div class="min-h-80 w-1/2 mx-auto flex flex-col justify-center items-center gap-5">
    //     <img src="images/error.webp" />
    //     <h2 class="text-4xl font-semibold text-center">Oops!! Sorry, There is no content here</h2>
    //     </div>`;
    //     return;
    // } else {
    //     // add grid class
    //     videoContainer.classList.add("grid");
    // }

    // add data to the page
    pets.forEach((item) => {
        // console.log(item);

        // create a card
        const card = document.createElement("div");
        card.classList = "card card-compact border rounded-lg p-4";
        card.innerHTML = `
        <figure>
            <img class="object-cover w-full h-60"
            src="${item?.image ?? 'Not available'}"
            alt="pets" />
        </figure>
        <div class="space-y-2">
            <h2 class="card-title">${item.pet_name}</h2>
            <p class="flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
            </svg>
            Breed: ${item?.breed ?? 'Not available'}</p>
            <p class="flex gap-2"> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            Birth:
            ${item?.date_of_birth ?? 'Not available'}</p>
            <p class="flex gap-2 items-baseline">
            <i class="fa-solid fa-mercury"></i>
            ${item?.gender ?? 'Not available'}</p>
            <p class="flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            Price: 
            ${item?.price ?? 'Not available'}$</p>

            <div class="card-actions justify-around">
            <button class="btn text-primary bg-white border">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
            </svg>
            </button>
            <button class="btn text-primary bg-white border">Adopt</button>
            <button class="btn text-primary bg-white border">Details</button>
            </div>
        </div>
        </div>`;
        // add button to categoryContainer
        videoContainer.append(card);
    });
};

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

        // add button to categoryContainer
        categoryContainer.append(buttonContainer);
    });
};

loadCategories();
loadPets();

// ${
//     item.authors[0].verified === true
//         ? `<img class="w-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" alt="verified" />`
//         : ""
// }
