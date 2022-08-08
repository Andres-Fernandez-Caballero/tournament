function createParido (nombrePardido="partido", etiquetaPartido="", equpoA="", equpoB="", fecha=new Date().toISOString()) {
  
  const isoDateToUnixTimestamp = (isoDate) => {
    return (new Date(isoDate).getTime()) / 1000;
  }

  return {
    id: isoDateToUnixTimestamp(fecha),
    name: nombrePardido, // the game name

    bracketLabel: etiquetaPartido, // optional: the label for the game within the bracket, e.g. Gold Finals, 

    scheduled: isoDateToUnixTimestamp(fecha), // the unix timestamp of the game-will be transformed to a human-readable time using momentjs

   /* court: {
      name: "court",
      venue: {
        name: "subCourt"
      }
    },
*/
    sides: {
      'visitor': {
      //  'team': null,
        //'score': null,
        'seed': {
          'sourceGame': null,
      //    'sourcePool': { '@ref': '14' },
         // 'rank': 3,
          'displayName': equpoB
        }
      },
      'home': {
      //  'team': null,
        //'score': null,
        'seed': {
          'sourceGame': null,
        //  'sourcePool': { '@ref': '12' },
         // 'rank': 2,
          'displayName': equpoA
        }
      }
    }

  }
}

export const  unPartido = createParido("semifinal", "importante","Argentina", "Brasil")

export const variosPartidos = [

]

