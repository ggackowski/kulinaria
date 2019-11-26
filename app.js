const convertImg = (img) => {
  return `<img src=${img}>`;
}

const convertSteps = (steps) => {
  return `<p>${steps}</p>`;
}

const convertTitle = (title) => {
  return `<h1>${title}</h1>`;
}

const convertDesc = (desc) => {
  return `<p>${desc}</p>`
}

const convertIngredients = (ingredients) => {
  let ings = ingredients.split(/\r?\n/).filter(f => f != "");
  let res = '<ul>';
  for (let ing of ings) {
    let oneLine = `<li>${ing}</li>`;
    res += oneLine;
  }
  res += '</ul>';
  return res;
}

const mRecipe = (img, title, desc, ing, steps) => {
  let item = document.createElement('article');
  item.className = 'recipe recipe-in';
  item.innerHTML = `
                    <div class="delete"><p>X</p></div>
                    <div class="img-cover">
                    ${convertImg(img)}
                    </div>
                    <div class="rec-text"> 
                    ${convertTitle(title)} 
                    ${convertDesc(desc)}
                    </div>
                  `;
  item.querySelector('.delete').addEventListener("click", () => {
      item.className = 'recipe recipe-out'
      setTimeout(() => {
        let parent = item.parentElement;
        parent.removeChild(item);
      }, 300);
      
  })
  return item;       
}

const makeDefaultRecipes = () => {
  let recipes = [];
  recipes.push(mRecipe('src/img/serniczek.png', 
  'Sernik królewski', 
  'Zdecydowanie najlepszy przepis na sernik królewski, który powstaje z ciasta kruchego z dodatkiem kakao oraz z idealnej masy serowej. Sernik królewski to jedno z pyszniejszych ciast, jakie pieczemy na Święta.',
  `2 szklanki (320 g) mąki pszennej\n 
  szczypta soli\n
  1 i 1/2 łyżeczki proszku do pieczenia\n
  3 łyżki kakao\n
  3/4 szklanki cukru\n
  200 g masła (twardego)\n
  3 żółtka lub 2 jajka\n
  1 kg zmielonego trzykrotnie tłustego twarogu\n
  200 g masła (miękkiego)\n
  3/4 szklanki cukru\n
  1 opakowanie cukru wanilinowego\n
  4 jajka\n
  1 opakowanie budyniu śmietankowego\n
  1 kg zmielonego trzykrotnie tłustego twarogu\n
  200 g masła (miękkiego)\n
  3/4 szklanki cukru\n
  1 opakowanie cukru wanilinowego\n
  4 jajka\n
  1 opakowanie budyniu śmietankowego\n`,
  `   Prostokątną formę o wymiarach 20 x 30 cm posmarować masłem i wyłożyć papierem do pieczenia.
  Do miski wsypać mąkę, dodać sól, proszek do pieczenia, kakao i cukier oraz pokrojone w kosteczkę zimne masło. Rozdrabniać składniki aż powstanie drobna kruszonka (palcami, mieszadłem miksera lub siekać nożem na stolnicy). Dodać jajka i połączyć składniki w gładkie oraz jednolite ciasto. Uformować kulę, podzielić na 2 części.
  Jedną część ciasta włożyć do lodówki, drugą pokroić na plasterki i wyłożyć nimi spód formy, ugnieść palcami na równy placek. Podziurkować widelcem.
  
  
  Piekarnik nagrzać do 180 stopni C. Miękkie masło ubijać z cukrem i cukrem wanilinowym przez około 5 minut aż będzie białe i puszyste.
  Następnie stopniowo dodawać po jednym żółtku cały czas ubijając. Wciąż ubijając dodawać po łyżce twaróg. Na koniec zmiksować z budyniem.
  Białka ubić w oddzielnej misce na sztywną pianę, dodać do masy serowej i wymieszać lub zmiksować na małych obrotach miksera.
  Masę serową wyłożyć na spód. Na wierzch zetrzeć odłożoną część ciasta (na tarce o dużych oczkach). Wstawić do piekarnika i piec przez 45 minut.
  Wyjąć z piekarnika i ostudzić. Można posypać cukrem pudrem lub polać lukrem cytrynowym.`
  ));

  recipes.push(mRecipe('src/img/panini.png', 
  'Panini włoskie', 
  'Włosi, słyną z pizzy i pasty, ale są także mistrzami kanapek. Łatwo zrobisz je w domu.',
  `chleb typu panini 4 szt.\n
  Bulion na włoszczyźnie Knorr 1 szt.\n
  szynka 4 plastry\n
  ser żółty 8 plastrów\n
  pomidory 2 szt.\n
  suszone pomidory 100 g\n
  bazylia 1 pęczek\n
  oliwki czarne 1 opak.\n
  rukola 1 opak.\n
  oliwa 0,5 szklanek\n`,
  `   Oliwę wlej do kielicha miksera. Dodaj również suszone pomidory, bazylię i kostkę Knorr. Całość zmiksuj na gęstą pastę.
  Chleb przekrój wzdłuż na pół. Obie części posmaruj pastą z kostki Knorr.
  Pomidora oraz oliwki pokrój w plasterki.
  Na kromkę pieczywa połóż dwa plastry sera, plaster szynki, pomidora oraz oliwki. Przykryj drugą kromką.
  Gotowe panini połóż na grillu, przyłóż czymś ciężkim (na przykład garnkiem z wodą) i grilluj z obu stron, aby chleb zrobił się chrupiący i ser wewnątrz dobrze się rozpuścił.
  Rukolę wymieszaj z oliwą. Gotowe panini przekrój na pół i podawaj z sałatką.`
  ));

  recipes.push(mRecipe('src/img/pierogi.png', 
  'Pierogi ruskie', 
  'Każdy ma swój sposób na ruskie pierogi. W moim rodzinnym domu najlepsze ruskie robiła babcia, jej tajemniczym składnikiem był biały pieprz oraz bryndza, gałka muszkatołowa, masło i karmelizowana cebula.',
  `1/5 kg mąki\n
  5 łyżek oleju (np. z pestek winogron)\n
  5 łyżek oliwy z oliwek\n
  1/2 szklanki gorącej wody (nie wrzącej, ja daję z kranu)\n
  szczypta soli\n
  5-6 ziemniaków\n
  250 dag twarogu wiejskiego tłustego (Piątnica)\n
  kostka bryndzy (125g)\n
  gałka muszkatołowa\n
  łyżka masła 82%\n
  2 średnie cebule\n
  1/2 łyżeczki cukru\n
  biały pieprz\n
  sól\n`,
  ` W osolonej wodzie gotujemy ziemniaki, po wystudzeniu przeciskamy przez praskę lub gnieciemy na puere.
  Na patelnię wrzucamy łyżkę masła, pokrojoną w drobną kosteczkę cebulę, szczyptę soli i 1/5 łyżeczki cukru. Przysmażamy cebulę na złoto (cukier lekko się skarmelizuje) i wystudzoną dodajemy do ziemniaków.
  Twaróg i bryndzę rozgniatamy widelcem i dodajemy do ziemniaków.
  Całość przyprawiamy sporą ilością pieprzu, ścieramy też szczyptę świeżej gałki muszkatołowej.
  Wszystkie składniki dokładnie mieszamy, aż nabiorą konsystencji farszu
  Do miski wsypujemy mąkę i szczyptę soli. Następnie dolewamy olej, oliwę oraz gorącą wodę z kranu.
  Wyrabiamy ciasto - w konsystencji powinno przypominać plastelinę. Jeśli jest za płynne, trzeba podsypać mąką, jeśli zbyt twarde - dolać więcej wody. Ciasto dzielimy na 4 części, zostawiamy w misce a miskę przykrywamy ściereczką i zostawiamy w ciepłym miejscu. Trzymanie ciasta pod ściereczką w ciepłym miejscu sprawi, że ciasto nie wyschnie, będzie bardziej delikatne i plastyczne.
  Stolnicę posypujemy mąką, wałek również. Rozwałkowujemy ciasto na ok. 1,5-2 mm. Ja robię to na oko, rozwałkowuję do momentu, aż stanie się już lekko przeźroczyste. Olej i oliwa dodana do ciasta sprawi, że nawet cienkie ciasto nie rozklei się podczas gotowania.
  Z ciasta wykrawamy kółeczka (ja używam do tego kieliszka do wina), do środka wkładamy pół łyżeczki farszu i sklejamy palcami (dwukrotnie) oraz wykańczamy widelcem.
  Pierogi wrzucamy na gorącą, posoloną wodę, delikatnie mieszamy i czekamy, aż wypłyną. Od wypłynięcia gotujemy jeszcze ok 2-3 min (w zależności od grubości ciasta). Jeśli nie jesteście pewni, możecie wyjąć jednego i skosztować :)
  Ugotowane pierogi podajemy z cebulką przygotowaną w ten sam sposób, co do farszu (czyli na maśle, z solą i cukrem) oraz kwaśną śmietaną 18%. Na drugi dzień odsmażane na masełku lub smażone na głębokim.  `
  ));

  recipes.push(mRecipe('src/img/papryki.png', 
  'Fit papryczki', 
  'Co zrobić z papryki na obiad? Możliwości jest naprawdę mnóstwo: papryka jest warzywem na tyle uniwersalnym, że bez problemu można wyczarować z niej zarówno przepisy fit i dietetyczne, jak i nieco bardziej sycące posiłki. Jak wykorzystać paprykę w naszej kuchni? Oto kilka przepisów: nie tylko z parowaru.',
  `1/5 kg mąki\n
  5 łyżek oleju (np. z pestek winogron)\n
  5 łyżek oliwy z oliwek\n
  1/2 szklanki gorącej wody (nie wrzącej, ja daję z kranu)\n
  szczypta soli\n
  5-6 ziemniaków\n
  250 dag twarogu wiejskiego tłustego (Piątnica)\n
  kostka bryndzy (125g)\n
  gałka muszkatołowa\n
  łyżka masła 82%\n
  2 średnie cebule\n
  1/2 łyżeczki cukru\n
  biały pieprz\n
  sól\n`,
  `Co przygotować na obiad dietetyczny, gdy chcemy być fit, a jednocześnie zachować pełnię smaku potrawy? Idealnym rozwiązaniem będzie bez wątpienia faszerowana papryka z parowaru. Paprykę o wybranym przez nas kolorze myjemy i odcinamy górę, usuwamy korzonek, gniazdo oraz białe błonki. W misce przygotowujemy farsz: tu wiele zależy od naszych preferencji smakowych. Jeśli chcemy, by przepis był bardzo dietetyczny i fit, postawmy na farsz z kaszy jaglanej z dodatkiem grillowanych warzyw, jeśli zależy nam na bardziej sycącej wersji tego dania, możemy przygotować farsz meksykański z ryżu i mięsa mielonego z dodatkiem pomidorowej pasaty. Gdy farsz już będzie gotowy, włóżmy go do papryki i przykryjmy ją odciętą górną częścią. Warzywo umieśćmy w parowarze i gotujmy na parze około 30 minut. Smacznego!`
  ));

  recipes.push(mRecipe('src/img/pizza.png', 
  'Pizza z szynką', 
  'Pizza, włoski przysmak znany i ceniony na całym świecie podawany jest z różnymi dodatkami. Pyszne ciasto najczęściej kojarzy się ze smaczną, chrupiącą skórką, słodkim sosem pomidorowym i dużą ilością pysznego sera. Jak przygotować ten włoski specjał i co powinniśmy o nim wiedzieć?',
  `2 szklanki mąki\n
  3 dkg drożdży\n
  2 łyżki oliwy\n
  1 szklanka letniej wody\n
  1 łyżka koncentratu pomidorowego\n
  1 łyżka ketchupu łagodnego\n
  ½ łyżeczki suszonej bazylii\n
  ½ łyżeczki tymianku\n
  ½ łyżeczki ziół prowansalskich\n
  20 dag twardego sera żółtego\n
  15 dag szynki podhalańskiej Konspol Natura\n
  25 dag pieczarek\n
  100 g parmezanu\n
  2 ząbki czosnku\n
  1 mała cebula\n
  sól i pieprz do smaku\n`,
  ` Drożdże rozdrabiamy w ¼ szklanki wody letniej wody. Do miski wsypujemy przesianą wcześniej mąkę i rozdrobnione drożdże, resztę wody mieszamy z dwiema łyżkami oliwy i solą. Wyrabiamy ciasto i pozostawiamy do wyrośnięcia na około 30 minut. Następnie przekładamy je na przygotowaną blaszkę i rozciągamy po niej. Cebulę szklimy na oliwie, dodajemy umyte i pokrojone w plasterki pieczarki. Dusimy do całkowitego odparowania wody z pieczarek. Koncentrat pomidorowy mieszamy z ziołami prowansalskimi, tymiankiem oraz suszoną bazylią. Smarujemy nim wyłożone w blaszce ciasto. Układamy szynkę, starty na grubych oczkach żółty ser, a także pieczarki z cebulą. Pieczemy w temperaturze 200 stopni Celsjusza przez około 20 minut.`
  ));

  recipes.push(mRecipe('src/img/indyk.png', 
  'Pierś z indyka', 
  'Pierś z indyka to fajna alternatywa dla piersi z kurczaka. Ma nieco inny smak niż pierś kurczaka, ale można ją przyrządzić na bardzo wiele różnych sposobów. Jest ponadto bardzo zdrowa - ma mniej kalorii niż pierś z kurczaka oraz jest doskonałym źródłem witamin z grupy B.',
  `podwójna pierś z indyka\n
  dwa ząbki czosnku\n
  dwie łyżki soku z cytryny\n
  po łyżeczce słodkiej papryki, cynamonu i kurkumy\n
  olej roślinny\n
  dwie łyżki mąki\n
  sól i pieprz do smaku\n`,
  ` Pierś z indyka umyj i osusz, następnie usuń z niej błonki i chrząstki. Pokrój ją w kostkę i przełóż do miseczki. <br>Dodaj dwie łyżki oleju, dwa ząbki czosnku wyciśniętego w wyciskarce, łyżeczkę słodkiej papryki, cynamonu i kurkumy. Odstaw na co najmniej godzinę, by mięso się zamarynowało. <br><br><br>

  Na patelni rozgrzej olej. Przełóż mięso i podsmaż z obu stron. Potem zmniejsz ogień, dodaj pozostałości marynaty i podlej wodą. Przykryj przykrywką i duś, aż mięso będzie miękkie. W razie potrzeby dolewaj wodę. Do kubeczka wlej odrobinę zimnej wody, dodaj mąkę, a następnie trochę sosu z patelni. Wymieszaj dokładnie, by nie było grudek i wlej na patelnię. Wymieszaj dokładnie z mięsem i gdy sos się dobrze zagęści, zdejmij z palnika. `
  ));
  let destination = document.querySelector('#grid');
  for (let recipe of recipes) {
    destination.appendChild(recipe);
  }
  return recipes;

}

let recipes = makeDefaultRecipes();


const sDefRecipes = (i) => {
  setTimeout( () => {
    recipes[i].className = 'recipe recipe-visible';
    if (i != recipes.length - 1)
    sDefRecipes(i + 1);
  }, 550);
}

const sRecipe = recipe => {
  recipe.className = 'recipe recipe-visible';
}

const lRecipe = () => {
  let form = document.forms['myform'];
  let recipe = mRecipe(form['image'].value,
                          form['name'].value,
                          form['desc'].value,
                          form['ing'].value,
                          form['steps'].value
  );
  return recipe;
}

sDefRecipes(0);

let button = document.querySelector('.new');
let form = document.querySelector('.form');
button.addEventListener('click', () => {
  if (form.className == 'form form-v')
    form.className = 'form form-h';
  else 
    form.className = 'form form-v';
})

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let nRecipe = lRecipe();
  document.querySelector('#grid').appendChild(nRecipe);
  sRecipe(nRecipe);
  console.log("done");
})


const makeImgRatio = (img, x, y) => {
  let width = img.width;
  let height = img.height;
  let scaleNew = y / x;
  let scaleOld = height/width;
  height *= scale;
  img.style.width = `${width}px`;
  img.style.height = `${height}px`;

}