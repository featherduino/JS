
    // Create Dino Constructor
    Dino=function (species,weight,diet,height,where,when,fact) {
        this.species=species;
        this.weight=weight;
        this.diet=diet;
        this.height=height;
        this.where=where;
        this.when=when;
        this.fact=fact;
        
    }

    // Create Dino Objects
    
    
        const data =[
            {
                "species": "Triceratops",
                "weight": 13000,
                "height": 114,
                "diet": "herbavor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "First discovered in 1889 by Othniel Charles Marsh"
            },
            {
                "species": "Tyrannosaurus Rex",
                "weight": 11905,
                "height": 144,
                "diet": "carnivor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "The largest known skull measures in at 5 feet long."
            },
            {
                "species": "Anklyosaurus",
                "weight": 10500,
                "height": 55,
                "diet": "herbavor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "Anklyosaurus survived for approximately 135 million years."
            },
            {
                "species": "Brachiosaurus",
                "weight": 70000,
                "height": "372",
                "diet": "herbavor",
                "where": "North America",
                "when": "Late Jurasic",
                "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
            },
            {
                "species": "Stegosaurus",
                "weight": 11600,
                "height": 79,
                "diet": "herbavor",
                "where": "North America, Europe, Asia",
                "when": "Late Jurasic to Early Cretaceous",
                "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
            },
            {
                "species": "Elasmosaurus",
                "weight": 16000,
                "height": 59,
                "diet": "carnivor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
            },
            {
                "species": "Pteranodon",
                "weight": 44,
                "height": 20,
                "diet": "carnivor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
            },
            {
                "species": "Pigeon",
                "weight": 0.5,
                "height": 9,
                "diet": "herbavor",
                "where": "World Wide",
                "when": "Holocene",
                "fact": "All birds are living dinosaurs."
            }
        ]
    
    
        const dino = data.map((data) => new Dino(data.species, data.weight, data.diet, data.height, data.where, data.when, data.fact));



   // Create Human Object
   const gethumandata =  function (){
    const name = document.getElementById("name").value;
    const feet = parseInt(document.getElementById("feet").value);
    const inches = parseInt(document.getElementById("inches").value);
    const height = feet*12+inches;
    const weight = document.getElementById("weight").value;
    const diet = document.getElementById("diet").value;
    return new Dino (name,weight,diet, height,"","","")
};

    let human = null;
    //Use IIFE to get human data from form

    const button = document.getElementById("btn");
   
    button.addEventListener("click", function() { 
        human=gethumandata(); 
    }());
    
    
   

    // Create Dino Compare Method 1
   

    Dino.getHeightDif = () => {
        if (human.height < dino.height) {
            return `${human.name} is ${dino.height - human.height} inches shorter than ${dino.species}!`;
        }
    };
  console.log(Dino.getHeightDif());
      





    // NOTE: Weight in JSON file is in lbs, height in inches. 
        
    
    // Create Dino Compare Method 2
    Dino.compareWeight = function () {};
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3

    Dino.compareDiet = function () {};

    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
