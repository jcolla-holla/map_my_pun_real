// https://docs.google.com/spreadsheets/d/1JRO_lTnAJ5gIVBqyu7RsEPniBxWhTvDUlOBsJx1AwB4/edit#gid=0

export function generateGoogleMapsAPIURL(coordsArr) {
    debugger
    let coordPair;
    let inputCoordsStr = "|"
    for (let i = 0; i < coordsArr.length; i++) {
        coordPair = coordsArr[i];
        let latStr = coordPair["lat"];
        let lngStr = coordPair["lng"];
        inputCoordsStr += latStr;
        inputCoordsStr += ","
        inputCoordsStr += lngStr;
        inputCoordsStr += "|";
    }

    //Google Static Maps API requires a "|" to close the marker final coordinate pair but returns nothing when you close the path final coordinate pair w "|".  to work must not have "|" w final coordinate pair with path to work 
    let pathInputStr = inputCoordsStr.slice(0, inputCoordsStr.length - 1);
    debugger;
    // return 'placeholder';
    return `https://maps.googleapis.com/maps/api/staticmap?size=800x400&maptype=roadmap\&markers=size:mid%7Ccolor:red%${inputCoordsStr}&path=color:0x0000ff${pathInputStr}&key=AIzaSyBrpStMcZ1UILzkqi_eMI2pjTgo7SZmUl8`;
}

// return `https://maps.googleapis.com/maps/api/staticmap?size=512x512&maptype=roadmap\&markers=size:mid%7Ccolor:red%7CSan+Francisco,CA%7COakland,CA%7CSan+Jose,CA&key=${ENV['MAPS_API_KEY']}`
//to update: color to be brand colors

    // 1)
    // CENTER: format:
    // center=59.900503,-135.478011
        // should be origin of path?  midpoint of all points? (below)
        
        // let centerCoords = coordsArr[Math.floor(coordsArr.length / 2)]
        // let centerCoordsStr = `${centerCoords[0]},${centerCoords[0]}`

    // 2) 
    // MARKERS format:

    // markers = markerStyles | markerLocation1 | markerLocation2 |...etc.

 


    // 3)
    // PATH format:
    // path = color: 0xff0000ff | weight: 5 | 40.737102, -73.990318 | 40.749825, -73.987963 | 40.752946, -73.987384 | 40.755823, -73.986397


    //... 
    // TEMPLATE w fixed center:
    // return `https://maps.googleapis.com/maps/api/staticmap?center=New York&size=800x500&maptype=roadmap\&markers=color:blue${inputCoordsStr}&path=color:0x0000ff|weight:5${inputCoordsStr}&key=AIzaSyBrpStMcZ1UILzkqi_eMI2pjTgo7SZmUl8`
    
    // TEMPLATE w adjusted center:
    // return `https://maps.googleapis.com/maps/api/staticmap?&size=800x500&maptype=roadmap\&markers=color:blue%${inputCoordsStr}&path=color:0x0000ff|weight:5${inputCoordsStr}&key=${ENV['MAPS_API_KEY']}`
// }



// improvement: for route show/edit page, be able to view and edit a real google map you can interact with
// export function storeInteractableMapURL() {
//     return null;
// }

//EXAMPLE from google THAT WORKS for makers:
// https://maps.googleapis.com/maps/api/staticmap?size=512x512&maptype=roadmap\&markers=size:mid%7Ccolor:red%7CSan+Francisco,CA%7COakland,CA%7CSan+Jose,CA&key=${ENV['MAPS_API_KEY']}


// EXAMPLE WORKS mine with replaced two MARKERS ONLY
// https://maps.googleapis.com/maps/api/staticmap?size=512x512&maptype=roadmap\&markers=size:mid%7Ccolor:red%|59.900503,-135.478011|59.900603,-135.479011|&key=${ENV['MAPS_API_KEY']}



//EXAMPLE FROM GOOGLE for path only (DOESNT WORK):

// https://maps.googleapis.com/maps/api/staticmap?size=400x400&path = color: 0x0000ff | weight: 5 | 40.737102, -73.990318 | 40.749825, -73.987963 | 40.752946, -73.987384 | 40.755823, -73.986397|&key=${ENV['MAPS_API_KEY']}


// EXAMPLE DOESNT WORK mine with replaced two MARKERS and short path with two points
// https://maps.googleapis.com/maps/api/staticmap?size=512x512&maptype=roadmap\&markers=size:mid%7Ccolor:red%|59.900503,-135.478011|59.900603,-135.479011|&path=color:0x0000ff|weight:5|59.900503,-135.478011|59.900603,-135.479011|&key=${ENV['MAPS_API_KEY']}