/* @flow */
import _ from 'lodash';

const menu: Array<MenuItem> = [
  { name: 'Guma Orbit GRATIS!', desc: '' },
  {
    name: '61. Skrzydełka z kurczaka',
    desc: 'Skrzydełka z kurczaka podane z sosem czosnkowym i barbecue.',
  },
  { name: '62. Pieczywo czosnkowe', desc: '' },
  {
    name: '63. Quesadilla ',
    desc: 'Dwie tortille zapiekane z serem, kawałkami pieczonej piersi z kurczaka i pieczarkami, podane z sosem pomidorowym i śmietaną',
  },
  {
    name: '64. Tortilla',
    desc: 'Z kawalkami pieczonej piersi z kurczaka. Chrupiąca tortilla pszenna z kawałkami pieczonej piersi z kurczaka, serem żółtym, sałatą lodową, ogórkiem, pomidorem oraz sosami Da Grasso: czosnkowym i pomidorowym.',
  },
  { name: '1. Margheritta', desc: 'Ser, Sos pomidorowy, Ciasto. Oregano' },
  {
    name: '2. Capriciosa',
    desc: 'Ser, Sos pomidorowy, Ciasto. Pieczarki, Oregano, Szynka',
  },
  {
    name: '3. Califfo',
    desc: 'Ser, Sos pomidorowy, Ciasto. Papryka konserwowa, Oregano, Kabanosy, Oliwki zielone, Szynka',
  },
  {
    name: '4. Calzone',
    desc: 'Ser, Sos pomidorowy, Ciasto. Salami, Oregano, Boczek wędzony, Kabanosy, Szynka',
  },
  {
    name: '5. Decoro',
    desc: 'Ser, Sos pomidorowy, Ciasto. Pieczarki, Papryka konserwowa, Oregano, Czosnek, Szynka',
  },
  {
    name: '6. Pepe Roso',
    desc: 'Ser, Sos pomidorowy, Ciasto Papryka konserwowa, Salami, Oregano',
  },
  {
    name: '7. Napoletana',
    desc: 'Ser, Sos pomidorowy, Ciasto Salami, Oregano, Oliwki, Papryczki jalapeno',
  },
  {
    name: '8. Piacere',
    desc: 'Ser, Sos pomidorowy, Ciasto Salami, Oregano, Boczek wędzony, Cebula biała, Kukurydza',
  },
  {
    name: '9. Roma',
    desc: 'Ser, Sos pomidorowy, Ciasto Salami, Oregano, Kabanosy, Papryka',
  },
  {
    name: '10. Polska',
    desc: 'Ser, Sos pomidorowy, Ciasto Oregano, Cebula biała, Kabanosy, Kiełbasa, Papryka świeża, Szynka',
  },
  {
    name: '11. Inverno',
    desc: 'Ser, Sos pomidorowy, Ciasto, Śmietana Oregano, Boczek wędzony, Cebula czerwona',
  },
  {
    name: '12. Semplicita',
    desc: 'Ser, Sos pomidorowy, Ciasto Oregano, Szynka',
  },
  {
    name: '13. Mafioso',
    desc: 'Ser, Sos pomidorowy, Ciasto Salami, Oregano, Czosnek, Papryczki jalapeno, Sos Louisiana Tabasco',
  },
  {
    name: '14. Wiejska',
    desc: 'Ser, Sos pomidorowy, Ciasto Oregano, Czosnek, Kiełbasa, Ogórek konserwowy, Cebula',
  },
  {
    name: '15. Sparare',
    desc: 'Ser, Sos pomidorowy, Ciasto Pieczarki, Oregano, Boczek wędzony, Cebula biała, Czosnek, Pomidory świeże',
  },
  {
    name: '16. Pepperoni',
    desc: 'Ser, Sos pomidorowy, Ciasto Oregano, Salami pepperoni',
  },
  {
    name: '17. Havai',
    desc: 'Ser, Sos pomidorowy, Ciasto Oregano, Szynka, Ananasy',
  },
  {
    name: '18. Boletus z borowikami',
    desc: 'Ser, Sos pomidorowy, Ciasto Oregano, Boczek wędzony, Borowiki, Cebula biała',
  },
  {
    name: '18. Boletus z kurkami',
    desc: 'Ser, Sos pomidorowy, Ciasto Oregano, Boczek wędzony, Cebula biała, Kurki',
  },
  {
    name: '19. Da Grasso',
    desc: 'Ser, Sos pomidorowy, Ciasto Oregano, Oliwki czarne, Salami pepperoni, Rukola',
  },
  {
    name: '20. Completo',
    desc: 'Ser, Sos pomidorowy, Ciasto Oregano, Boczek wędzony, Cebula biała, Ogórek konserwowy, Wieprzowina',
  },
  { name: '21. Basilico', desc: 'Sos pomidorowy, Ciasto, Bazylia świeża' },
  {
    name: '22. Viola',
    desc: 'Ser, Sos pomidorowy, Ciasto.Ser mozzarella, Oregano, Oliwki czarne, Pomidory suszone, Rukola świeża',
  },
  {
    name: '23. Cztery Sery',
    desc: 'Ser, Sos pomidorowy, Ciasto.Ser mozzarella, Oregano, Ser pleśniowy, Ser sałatkowy',
  },
  {
    name: '24. Tricolore',
    desc: 'Ser, Sos pomidorowy, Ciasto Papryka konserwowa, Oregano, Cebula biała, Kukurydza, Oliwki zielone',
  },
  {
    name: '25. Green Day',
    desc: 'Ser, Sos pomidorowy, Ciasto.Oregano, Brokuły, Cukinia, Ser pleśniowy, Szpinak',
  },
  {
    name: '26. Frutti di Mare',
    desc: 'Ser, Sos pomidorowy, Ciasto Oregano, Mieszanka frutti di mare',
  },
  {
    name: '27. Corso',
    desc: 'Ser, Sos pomidorowy, Ciasto Oregano, Kapary, Szynka, Tuńczyk',
  },
  {
    name: '28. Gamberetto',
    desc: 'Nowość! Ser, Sos pomidorowy, Ciasto Salami, Oregano, Cebula biała, Czosnek, Krewetki',
  },
  {
    name: '29. Permaloso',
    desc: 'Ser, Sos pomidorowy, Ciasto Oregano, Boczek wędzony, Cebula biała, Czosnek, Krewetki, Oliwki zielone',
  },
  {
    name: '30. Gud Fadern',
    desc: 'Ser, Sos pomidorowy, Ciasto Pieczarki, Oregano, Cebula biała, Krewetki, Majonez, Szynka',
  },
  {
    name: '31. Kebab',
    desc: 'Ser, Sos pomidorowy, Ciasto Oregano, Cebula biała, Kebab drobiowy',
  },
  {
    name: '32. Pollo',
    desc: 'Ser, Sos pomidorowy, Ciasto Salami, Oregano, Cebula czerwona, Kebab drobiowy',
  },
  {
    name: '33. Pollo con Broccolo',
    desc: 'Ser, Sos pomidorowy, Ciasto Ser mozzarella, Oregano, Brokuły, Pieczona pierś z kurczaka',
  },
  {
    name: '34. Merakato',
    desc: 'Ser, Sos pomidorowy, Ciasto Pieczarki, Oregano, Cebula biała, Fasola czerwona, Pieczona pierś z kurczaka',
  },
  {
    name: '35. Saporito',
    desc: 'Ser, Sos pomidorowy, Ciasto Pieczarki, Oregano, Cebula biała, Majonez, Wędzona pierś z kurczaka',
  },
  {
    name: '36. Abalano',
    desc: 'Ser, Sos pomidorowy + 5 dowolnych składników. Swój wybór wpisz w komentarzu',
  },
  { name: 'Sos pomidorowy', desc: '' },
  { name: 'Sos czosnkowy', desc: '' },
  { name: 'Sos ostry', desc: '' },
  { name: 'Sos musztardowo-miodowy', desc: '' },
  {
    name: '101.\tHavai Junior + Sok Cappy 0,33 l',
    desc: 'Sos pomidorowy, Ciasto Oregano, Ser, Szynka, Ananasy',
  },
  {
    name: '101. Havai Junior + Sok Cappy 0,33 l',
    desc: 'Sos pomidorowy, Ciasto Oregano, Ser, Szynka, Ananasy',
  },
  {
    name: '102.\tMargherita Junior + Sok Cappy 0,33 l',
    desc: 'Sos pomidorowy, Ciasto Oregano, Ser',
  },
  {
    name: '102. Margherita Junior + Sok Cappy 0,33 l',
    desc: 'Sos pomidorowy, Ciasto Oregano, Ser',
  },
  {
    name: '51. Sałata Grecka',
    desc: 'Sałata ze świeżych warzyw: pomidora, ogórka, oliwek, papryki i cebuli, podawana na mieszance sałat, udekorowana serem sałatkowym.',
  },
  {
    name: '52. Sałata z kurczakiem',
    desc: 'Kebab drobiowy, pomidor, ogórek, fasola, prażony słonecznik, podane na mieszance sałat.',
  },
  {
    name: '53. Sałata Włoska',
    desc: 'Ser mozzarella w połączeniu z pomidorem koktajlowym, papryką, mieszanką sałat, bazylią i pieczoną piersią z kurczaka.',
  },
  {
    name: '54. Sałata Da Grasso',
    desc: 'Pieczona pierś z kurczaka, grzanki ziołowo - czosnkowe i pomidor koktajlowy na sałacie lodowej, całość udekorowana kremem balsamicznym i posypana parmezanem.',
  },
  {
    name: '55. Sałata Wiosenna ',
    desc: 'Mieszanka sałat z pieczoną piersią z kurczaka, ogórkiem, pomidorem, kukurydzą i papryką, wzbogacona brokułami opiekanymi w piecu, prażonym słonecznikiem i serem wędzonym.',
  },
  {
    name: '56. Sałata z kozim serem',
    desc: 'Ser kozi z dodatkiem opiekanej papryki i cukinii, świeżego ogórka i pomidora koktajlowego, podane na mieszance sałat.',
  },
  {
    name: '116. Rolls Bolognese',
    desc: 'Porcja trzech roladek na bazie makaronu lasagne z farszem wołowo-wieprzowym, na bazie aromatycznych, włoskich pomidorów. Całość zapieczona serem mozzarella.',
  },
  {
    name: '117. Rolls Spinachi',
    desc: 'Porcja trzech roladek na bazie makaronu lasagne z aromatycznym farszem szpinakowym z dodatkiem sera gorgonzola. Całość zapieczona serem mozzarella i podana w towarzystwie odrobiny kwaśnej śmietany.',
  },
  {
    name: '73. Aglio Olio',
    desc: 'Makaron z dodatkiem aromatycznego czosnku, papryczką chilli, oliwą z oliwek, parmezanem i natką pietruszki. Spaghetti',
  },
  {
    name: '74. Pollo Pesto',
    desc: 'Makaron na bazie oliwy w intensywnym sosie pesto rosso z pieczonym filetem z kurczaka z dodatkiem suszonych pomidorów, czosnku i bazyli.Spaghetti',
  },
  {
    name: '75. Crema Fungo',
    desc: 'Makaron w sosie śmietanowo-borowikowym na bazie białego wina z pieczonym filetem z kurczaka i natką pietruszki. Spaghetti',
  },
  {
    name: '76. Arabiatta',
    desc: 'Makaron w sosie pomidorowym z bazylią, cebulą, papryką świeżą, czosnkiem i parmezanem na ostro.',
  },
  {
    name: '77. Bolognese',
    desc: 'Makaron w sosie pomidorowym z mięsem i parmezanem,Spaghetti',
  },
  {
    name: '78. Carbonara',
    desc: 'Makaron w sosie śmietanowym na bazie białego wina z boczkiem, cebulą i parmezanem.Spaghetti',
  },
  {
    name: '79. Chantarella',
    desc: 'Makaron w sosie z sera pleśniowego na bazie białego wina z kurkami, cebulą i parmezanem.Spaghetti',
  },
  {
    name: '80. Spinachi',
    desc: 'Makaron w sosie z sera pleśniowego na bazie białego wina ze szpinakiem, cebulą, czosnkiem i parmezanem.Spaghetti',
  },
  {
    name: '81. Frutti di Mare',
    desc: 'Makaron w sosie śmietanowym na bazie białego wina z owocami morza, czosnkiem i natką pietruszki.Spaghetti',
  },
  { name: '82. Krem pomidorowy', desc: 'Z parmezanem i pieczywem czosnkowym.' },
  { name: '83. Krem Brokułowy', desc: 'z parmezanem i pieczywem czosnkowym.' },
  {
    name: '141. Bananowo - czekoladowe',
    desc: 'Przepyszne naleśniki z bananami i nutellą, polane sosem czekoladowym, udekorowane wiśniami i bitą śmietaną.',
  },
  {
    name: '142. Naleśniki z serem',
    desc: 'Smakowite naleśniki z serem i wiśniami, udekorowane chmurką z bitej śmietany oraz listkiem mięty.',
  },
  {
    name: '143. Naleśniki z kurczakiem',
    desc: 'Naleśniki nadziewane delikatnym mięsem pieczonego kurczaka z dodatkiem suszonych pomidorów, ostrej papryczki jalapeno, czosnku oraz sosu pomidorowego. Zapiekane z suszonymi pomidorami i serem typu mozzarella, udekorowane sosem meksykańskim i bazylią.',
  },
  {
    name: '144. Naleśniki ze szpinakiem',
    desc: 'Naleśniki z farszem śmietanowo-szpinakowym, z dodatkiem czosnku i białej cebuli udekorowane sosem czosnkowym.',
  },
  {
    name: '111. Karkówka z masłem',
    desc: 'Karkówka z grilla z aromatycznym masłem czosnkowym, podana z sałatką ze świeżych warzyw, frytkami* lub ryżem',
  },
  {
    name: '112. Polędwica z zielonym pieprzem',
    desc: 'Polędwica wieprzowa z grilla w sosie śmietanowym z zielonym pieprzem, podana z sałatką ze świeżych warzyw, frytkami* lub ryżem',
  },
  {
    name: '113. Polędwica z kurkami',
    desc: 'Polędwica wieprzowa z grilla w sosie śmietanowym z kurkami, podana z sałatką ze świeżych warzyw, frytkami* lub ryżem',
  },
  {
    name: '114. Pierś z kurczaka soute',
    desc: 'Pierś z kurczaka z grilla soute, podana z sałatką ze świeżych warzyw, frytkami* lub ryżem',
  },
  {
    name: '115. Pierś z kurczaka z serem',
    desc: 'Pierś z kurczaka z grilla z serem mozzarella i suszonymi pomidorami, podana z sałatką ze świeżych warzyw, frytkami* lub ryżem',
  },
  {
    name: '116. Łosoś soute',
    desc: 'Filet z łososia z grilla soute, podany z sałatką ze świeżych warzyw, frytkami* lub ryżem',
  },
  {
    name: '117. Sola na szpinaku',
    desc: 'Filet z soli na szpinaku zapieczony z serem pleśniowym, podany z sałatką ze świeżych warzyw, frytkami* lub ryżem',
  },
  {
    name: '118. Warzywa z grilla',
    desc: 'Cukinia, papryka, pieczarki z grilla, podane na sałacie lodowej z pomidorem, skropione sosem winegret.',
  },
  {
    name: '119. Warzywa z grilla z kurczakiem',
    desc: 'Cukinia, papryka, pieczarki, kurczak z grilla, podane na sałacie lodowej z pomidorem, skropione sosem winegret.',
  },
  {
    name: '120. Warzywa z grilla z polędwicą wieprzową',
    desc: 'Cukinia, papryka, pieczarki, polędwica wieprzowa z grilla, podane na sałacie lodowej z pomidorem, skropione sosem winegret. - na ostro',
  },
  {
    name: '131. Kebab drobiowy',
    desc: 'sałatka ze świeżych warzyw, frytki lub frytki steakowe',
  },
  {
    name: '132. Kebab wieprzowy',
    desc: 'sałatka ze świeżych warzyw, frytki lub frytki steakowe',
  },
  {
    name: '133. Pieczona pierś z kurczaka',
    desc: 'Z serem żółłtym, sałatka ze świeżych warzyw, frytki lub frytki steakowe',
  },
  {
    name: '134. Polędwiczki z kurczaka w łagodnej panierce',
    desc: 'sałatka ze świeżych warzyw, frytki lub frytki steakowe',
  },
  { name: 'Frytki', desc: '' },
  { name: 'Frytki steakowe', desc: '' },
  { name: 'Frytki z ketchupem', desc: '' },
  { name: 'Frytki steakowe z Ketchupem', desc: '' },
  { name: 'Sałatka ze świeżych warzyw', desc: '' },
  { name: 'Coca-Cola', desc: '' },
  { name: 'Coca-Cola Zero', desc: '' },
  { name: 'Fanta pomarańczowa', desc: '' },
  { name: 'Coca-Cola Cherry', desc: '' },
  { name: 'Sprite', desc: '' },
  { name: 'Sok Cappy 1 L', desc: '' },
  { name: 'Nestea', desc: '' },
  { name: 'Kropla Beskidu gazowana', desc: '' },
  { name: 'Kropla Beskidu niegazowana', desc: '' },
  { name: 'Kropla Beskidu cytrynowa', desc: '' },
  { name: 'Kropla Beskidu truskawkowa', desc: '' },
  { name: 'Kropla Beskidu jabłkowa', desc: '' },
];

function getIngredientsFromDescription(desc: string): Array<string> {
  return desc
    .split(/(?:\,|\.|\!|Nowość|Ciasto)/g)
    .map(i => i.trim())
    .filter(i => i.length);
}

const pizzasWithStringIngridients: Array<{
  name: string,
  ingredients: Array<string>,
}> = _.chain(menu)
  .filter(
    item => _.includes(item.desc, 'Ciasto') && !_.includes(item.name, 'Junior')
  )
  .map(({ name, desc }) => ({
    name,
    ingredients: getIngredientsFromDescription(desc),
  }))
  .value();

const ingredients: Array<Ingredient> = _.chain(pizzasWithStringIngridients)
  .map(pizza => pizza.ingredients)
  .flatten()
  .sortBy()
  .sortedUniq()
  .map(ingredient => ({ name: ingredient }))
  .value();

const pizzas: Array<Pizza> = pizzasWithStringIngridients.map(pizza => {
  return {
    name: pizza.name,
    ingredients: pizza.ingredients.map(i => _.find(ingredients, { name: i })),
  };
});

export { pizzas, ingredients };
