import { LargePersonListItem } from "./people/LargePersonListItem";
import { SmallPersonListItem } from "./people/SmallPersonListItem";
import { RegularList } from "./RegularList";
import { SmallProductListeItem } from "./products/SmallProductListeItem";
import { NumberedList } from "./NumberedList";
import { LargeProductListeItem } from "./products/LargeProductListeItem";
import { Modal } from "./Modal";

const people =  [{
  name: 'John Doe',
  age: 0,
  hairColor: 'brown',
  hobbies: ['music', 'sports', 'games']
}, {
  name: 'Jane Doe',
  age: 30,
  hairColor: 'blonde',
  hobbies: ['music', 'football', 'mathematics', 'biology', 'sociology']
}, {
  name: 'Jack Doe',
  age: 25,
  hairColor: 'black',
  hobbies: ['hokey', 'novels', 'painting']
}]

const products = [{
  name: 'banana',
  price: 1.5,
  description: 'yellow and delicious',
  rating: 4.5
}, {
  name: 'orange',
  price: 2.5,
  description: 'orange and delicious',
  rating: 3.8
}, {
  name: 'apple',
  price: 3.5,
  description: 'red and delicious',
  rating: 2.5
}]

function App() {
  return (
    <>
      <Modal>
        <LargeProductListeItem 
          product={products[0]} 
        />
      </Modal>
      <RegularList
        items={people}
        resourceName="person" 
        itemComponent={SmallPersonListItem}
      />
      <NumberedList
        items={people}
        resourceName="person" 
        itemComponent={LargePersonListItem} 
      />
      <RegularList
        items={products}
        resourceName="product" 
        itemComponent={SmallProductListeItem} 
      />
      <NumberedList
        items={products}
        resourceName="product" 
        itemComponent={LargeProductListeItem} 
      />
    </>
  );
}

export default App;
