
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
    
        const dino = new Dino(data.species,data.weight,data.diet,data.height,data.where,data.when,data.fact);
    
        const m = data.map( function(data) {
        return new Dino(data.species,data.weight,data.diet,data.height,data.where,data.when,data.fact);
    });



   // Create Human Object
       

        let human = new Object();
        
        console.log(human);
        
       const l=function(human){
            // Use IIFE to get and return human data from form
                let name = 'man';
                let feet = 23;
                let inches = 34;
                let height = 45;
                let weight = 77;
                let diet = 80;
                return new Dino (human.name, human.height, human.weight, human.diet);
                };
            
                console.log(l);
        
    //Use IIFE to get human data from form

    const button = document.getElementById("btn");
   
    button.addEventListener("click", function(human){
    // Use IIFE to get and return human data from form
        human =  function (){
        let name = document.getElementById("name").value;
        let feet = document.getElementById("feet").value;
        let inches = document.getElementById("inches").value;
        let height = feet*12+inches;
        let weight = document.getElementById("weight").value;
        let diet = document.getElementById("diet").value;
        return new Dino (human.name, human.height, human.weight, human.diet);
        }
    });
    
   

    // Create Dino Compare Method 1
   

    Dino.compareHeight = function (fact) {
        dino_fact_arr = [];
        //original fact
        const original_fact = fact;
        //wow_fact
        const wow_fact = "Wow! This is one of the random fact!!!";
      
        if (dino.species === "Pigeon") {
          dino.fact = "All birds are living dinosaurs.";
        } else {
          if (dino.height > human.height) {
            //comparison fact
            const comparison_fact = `${dino.species} is ${
              dino.height - human.height
            } inches
          taller than ${human.species}`;
      
            //push three random fact in to dino_fact_arr
            dino_fact_arr.push(original_fact, comparison_fact, wow_fact);
      
            dino.fact = dino_fact_arr[Math.floor(Math.random() * 3)];
            return dino.fact;
          } else {
            //comparison fact
            const comparison_fact = `${dino.species} is ${
              human.height - dino.height
            } inches  smaller than ${human.species}`;
      
            //push three random fact in to dino_fact_arr
            dino_fact_arr.push(original_fact, comparison_fact, wow_fact);
            dino.fact = dino_fact_arr[Math.floor(Math.random() * 3)];
            return dino.fact;
          }
        }
      };




    // NOTE: Weight in JSON file is in lbs, height in inches. 
        
    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
