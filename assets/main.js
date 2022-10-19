const API = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=94c26d56cacd330a6e09d9a1aa38a5a4&hash=dc456052de68421399bfaba1c97fe841';
const content = null || document.getElementById('content');


const options = {
  method: 'GET',
  Params: {
    "apikey": "94c26d56cacd330a6e09d9a1aa38a5a4",
    "ts": "1",
    "hash": "dc456052de68421399bfaba1c97fe841"
  },
};


async function fetchData(urlApi) {
  const respuesta = await fetch(urlApi, options);
  const data = await respuesta.json();
  return data;
}

//Function automatic
(async () => {
  try {
    const getCharacters = await fetchData(API);
    console.log(getCharacters)
    let view = `
      ${getCharacters.data.results.map(heros =>`
        <div class="grid-characters">
          <div class="characters__div">
            <a href="${heros.urls[0].url}" target="_blank">
              <img src="${heros.thumbnail.path}.${heros.thumbnail.extension}" alt="${heros.name}" class="characters__img"/>
            </a>
          </div>
          <div class="characters__h3">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${heros.name}
            </h3>
          </div>
        </div>
      `).slice(0, 20).join('')}
    `;
    content.innerHTML = view;
  } catch (error) {
    console.log(error)
  }
})();

// for (let heros of getCharacters.data.results) {
//   let urlHero = heros.urls[0].url;
//   var contentHTML = `
//       < div class = "group relative" >
//         <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
//           < a href = "${urlHero}" target = "_blank">
//             < img src = "${heros.thumbnail.path}.${heros.thumbnail.extension}" alt = "${heros.name}" class = "w-full" / >
//           </a>
//         </div>
//         <div class="mt-4 flex justify-between">
//           <h3 class="text-sm text-gray-700">
//             <span aria-hidden="true" class="absolute inset-0"></span>
//               ${heros.name}
//           </h3>
//         </div>
//       </div>`
// }