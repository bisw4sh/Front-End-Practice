const logJSONData = async(type, category) => {
    const response = await fetch(`https://api.waifu.pics/${type}/${category}`);
    const jsonData = await response.json();

    //setting the image in DOM
    const ima_ge = document.querySelector('.image-response')
    ima_ge.src = jsonData['url']
    return jsonData['url']
  }

// Define the data
const data = {
    "sfw" : [ 'waifu', 'neko', 'shinobu', 'megumin',
            'bully', 'cuddle', 'cry', 'hug','awoo',
            'kiss', 'lick', 'pat', 'smug', 'bonk', 
            'yeet','blush', 'smile', 'wave', 'highfive',
            'handhold','nom', 'bite', 'glomp','slap',
            'kill','kick','happy', 'wink', 'poke',
            'dance', 'cringe'],
    "nsfw" :['waifu', 'neko', 'trap', 'blowjob']
};

// Function to populate the sub-category drop down menu
function populatecategory() {
    const category = document.getElementById("type").value;
    const categoryDropdown = document.getElementById("category");

    // Clear the sub-category drop down menu
    categoryDropdown.innerHTML = "";

    // Add the default option
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.text = "Select";
    categoryDropdown.add(defaultOption);

    // Add the options based on the selected category
    data[category].forEach(function(value) {
        const option = document.createElement("option");
        option.value = value;
        option.text = value;
        categoryDropdown.add(option);
    });
}

// Call the populateSubCategory function when the category is changed
document.getElementById("type").addEventListener("change", function() {
    populatecategory();
});

const typesel = document.querySelector('#type')
const categorysel = document.querySelector('#category')
document.querySelector('.submit').addEventListener('click', (e) => {
    e.preventDefault()
logJSONData(typesel.value,categorysel.value)
})

