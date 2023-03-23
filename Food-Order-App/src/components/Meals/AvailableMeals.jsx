import classes from './AvailableMeals.module.css'
import MealsItems from './MealItem/MealsItems';
import Card from '../UI/Card';
const AvailableMeals=()=>{
    const DUMMY_MEALS = [
        {
          id: 'm1',
          name: 'Dosa',
          description: 'South indian Special',
          price: 180,
        },
        {
          id: 'm2',
          name: 'Veg Biriyani',
          description: 'Cooked rice with vegitables and spices',
          price: 300,
        },
        {
          id: 'm3',
          name: 'Barbecue Burger',
          description: 'American, raw, meaty',
          price: 400,
        },
        {
          id: 'm4',
          name: 'Veg Thali',
          description: 'Healthy...and green...',
          price: 700,
        },
      ];
      const Meals=DUMMY_MEALS.map(meal=>(
        <MealsItems key={meal.id} name={meal.name} description={meal.description} price={meal.price}></MealsItems>
      ))
    return <section className={classes.meals}>
       <Card>

        <ul>
            {Meals}
        </ul>
       </Card>
    </section>
}

export default AvailableMeals