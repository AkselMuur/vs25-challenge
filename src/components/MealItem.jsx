const MealItem = (props) => {
    
    const euroFormatter = new Intl.NumberFormat("et-EE", {
  style: "currency",
  currency: "EUR",
});

    
    
  return (
    <li>
      <article className="meal-item">
        <img
          className="meal-item img"
          src={require(`../assets/${props.meal.image}`)}
          alt={props.meal.name}
        />
        <div>
          <h3 className="meal-item h3">{props.meal.name}</h3>
          <p className="meal-item-price">{euroFormatter.format(props.meal.price)}</p>
          <p className="meal-item-description">{props.meal.description}</p>
        </div>
        <p>
          <button className="meal-item-actions">Add to Cart</button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
