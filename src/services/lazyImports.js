import { lazy } from 'react';

export const SmileysPeople = lazy(() =>
  import("../components/smileys_people/SmileysPeople")
);
export const Activity = lazy(() => import("../components/activity/Activity"));
export const AnimalsNature = lazy(() =>
  import("../components/animals_nature/AnimalsNature")
);
export const FoodDrink = lazy(() =>
  import("../components/food_drink/FoodDrink")
);
export const Objects = lazy(() => import("../components/objects/Objects"));
export const Symbols = lazy(() => import("../components/symbols/Symbols"));
export const TravelPlaces = lazy(() =>
  import("../components/travel_places/TravelPlaces")
);
