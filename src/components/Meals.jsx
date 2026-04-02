import { useState, useEffect } from "react";
import MealItem from "./MealItem.jsx";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMeals = async () => {
      setIsFetching(true);

      try {
        const response = await fetch("http://localhost:3001/meals");
        const data = await response.json();

        console.log("API DATA:", data);

        if (!response.ok) throw new Error("Failed fetching data");

        setMeals(data);
      } catch (error) {
        setError({
          title: "An error occurred!",
          message: "Failed fetching meals data, please try again later.",
        });
      }

      setIsFetching(false);
    };

    getMeals();
  }, []);

  return (
    <ul id="meals">
      {Array.isArray(meals) &&
        meals.map((meal) => (
          <MealItem key={meal.id} meal={meal} />
        ))}
    </ul>
  );
};

export default Meals;
