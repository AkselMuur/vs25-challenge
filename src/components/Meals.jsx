import { useState, useEffect } from "react";
import MealItem from "./MealItem.jsx";

const Meals = () => {
  const [expenses, setExpenses] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const getExpenses = async () => {
      setIsFetching(true);

      try {
        const response = await fetch("http://localhost:3001/meals");
        const data = await response.json();

        if (!response.ok) throw new Error("Failed fetching data");

        setExpenses(data.expenses);
        console.log(data);

      } catch (error) {
        setError({
          title: "An error occurred!",
          message: "Failed fetching expenses data, please try again later.",
        });
        setShowError(true);
      }

      setIsFetching(false);
    };

    getExpenses();
  }, []);
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);










  return <ul id="meals">{}</ul>;
};

export default Meals;
