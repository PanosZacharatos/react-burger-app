import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Burgers, Delivered To You</h2>
      <p>
        Choose your favorite burger from our broad selection of available burgers
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our burgers are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;