
    // Create Dino Constructor
    Dino = function (species,weight,diet,height,where,when,fact,image) {
        this.species=species;
        this.weight=weight;
        this.diet=diet;
        this.height=height;
        this.where=where;
        this.when=when;
        this.fact=fact;
        this.image=image;
        
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
                "fact": "First discovered in 1889 by Othniel Charles Marsh",
                "image": "tyrannosaurus rex.png"
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
    
    // Dino Object from Json Object

        const dino = data.map((data) => 
        new Dino(data.species, 
            data.weight, data.diet, data.height,
             data.where, data.when, data.fact)
             );



//Get Human data to append name,feet,weight,diet and height from form.
   const gethumandata =  function (){
    const name = document.getElementById("name").value;
    const feet = parseInt(document.getElementById("feet").value);
    const inches = parseInt(document.getElementById("inches").value);
    const height = feet*12+inches;
    const weight = document.getElementById("weight").value;
    const diet = document.getElementById("diet").value;
    
    return new Dino (name,weight,diet,height);
        
};

   // Create Human Object

    let human = null;
    
    //Use IIFE to get human data from form

    const button = document.getElementById("btn");
   
    button.addEventListener("click", function() { 
       
        human=gethumandata(); 
     });
    
 // Create Dino Compare Method 1
   

    Dino.prototype.getHeightDif = () => {
        if (human.height < dino.height) {
            return `${human.name} is ${dino.height - human.height} inches shorter than ${dino.species}!`;
        }
         elseif(human.height > dino.height)
         {
            return `${human.name} is ${dino.height - human.height} inches taller than ${dino.species}!`;

        }

    };

    // NOTE: Weight in JSON file is in lbs, height in inches. 
        
    
    // Create Dino Compare Method 2
    Dino.prototype.compareWeight = () => {
        if(human.weight < dino.weight){
            return `${human.name} is ${dino.height - human.weight} kilos shorter than ${dino.species}!`;
        }  
        else if(human.height > dino.height) 
        {
            return `${human.name} is ${dino.weight - human.weight} kilos taller than ${dino.species}!`;
        }

    };
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    
    Dino.prototype.compareDiet = () => {
    if(human.diet !== dino.diet){
    return `${dino.species} is ${dino.diet} while human is ${human.diet}`;
} 
else
 {
  return `Both ${dino.species} and human are ${human.diet}.`;
}
};




    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
    
const addTtiles = () => {
    const human_data= gethumandata();
    const grid = document.getElementById('grid')
    const dino_data = dino;
    
    const results =dino_data.slice(0,4).concat(human_data).concat(dino_data.slice(4,8));
    
    results.forEach((data) => {
        const { species,weight,diet,height,where,when,fact,image } = data;
        //Call the Dino compare method
        const dinoCompareDiet = new Dino(
            species, 
            weight,diet, height,
             where, when, fact
        )

        const dinoCompareWeight = new Dino(
            species, 
            weight,diet, height,
             where, when, fact
        )

        const dinoCompareHeight = new Dino(
            species, 
            weight,diet, height,
             where, when, fact
        )
        const compareDiet = dinoCompareDiet.comparediet();
        const compareWeight = dinoCompareWeight.compareWeight();
        const compareHeight = dinoCompareHeight.getHeightDif();

 grid.innerHTML += `
 <div class="grid-item">
     <h3>${dino.species}</h3>
     <img src="${image ? image : ""}" alt="" />

     <p>${fact ? compareDiet : ""} ${weight ? compareWeight : ""} ${height ? compareHeight : ""}</p>
     
   </div>
`;
})

}




/**
* @description Remove form from the DOM
*/
const dinoCompare = document.querySelector("#dino-compare");


function removeForm() {
 dinoCompare.style.display = "none";
}

/*
* @description On button click, prepare and display infographic
*/
button.addEventListener("click", async (e) => {
 addTtiles();
 removeForm();
});




    // Remove form from screen



// On button click, prepare and display infographic
