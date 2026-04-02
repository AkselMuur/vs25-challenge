
const Meals = () => {

   fetchData();
   async function fetchData() {
    try{
        const response = await fetch("http://localhost:3001/meals")
        
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.error(error);
    }
    
   }
    
    
    
    
    return (
        <ul id="meals">
            { 
                // list of meals
            }
        </ul>
    )
}

export default Meals