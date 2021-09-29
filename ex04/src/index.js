  const BAKING_TEMPERATURES = {
      cake : {low : 180, high: 260},
       
      bread : {low : 150, high :220 },
      pie : {low: 200, high: 230}


    
    };

    function main (baking ) {
   
        // Only change code below this line
        const lowBread = BAKING_TEMPERATURES.bread.low
         const {bread:{low}} =  BAKING_TEMPERATURES; 
         const {bread:{high}} =  BAKING_TEMPERATURES; 

         return  { low , high };
        
     
// Only change code above this line


    }

    console.log(main(BAKING_TEMPERATURES));
    module.exports = main;