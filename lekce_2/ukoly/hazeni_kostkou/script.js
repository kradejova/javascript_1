//Hazeni kostkou
//generovani cisel 1 - 6 pomoci Math.random a zaokrouhlovani

function getRandomInt(min, max) {
    //minimum zaokrouhlene nahoru, v pripade 1 zustava 1
    const minCeiled = Math.ceil(min)
    //maximum zaokrouhlene nahoru, v pripade 6 zustava 6
    const maxFloored = Math.floor(max)
    //zaokrouhli dolu random cislo krat rozdil 6 - 1 + 1, cimz se urci rozsah cisel vyjma max = 6, to se vynasobi cislo mezi 0 a 0.99999999... vygenerovane Math.random s rozsahem 6, abychom ziskali nahodne cislo od 0 vcetne do 6 vyjma
    //k vysledku se pricte 1, aby dane cislo bylo vcetne 6, vyjma 7
    //nakonec se dane cislo zaokrouhli dolu, tj. ziskame cislo mezi 1 a 6 vcetne
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
}

let cislo = getRandomInt(1,6)

document.body.innerHTML = "Nahodne cislo: " + cislo

//konkretni postup u konkretnich hranicnich hodnot

//Math.random() = 0.9999
//Math.floor(0.9999 * (6 - 1 + 1) + 1)
//Math.floor(5.9994 + 1)
//Math.floor(6.9994) -> 6, tj. zaokrouhlenim DOLU se nikdy neprekroci nastavene maximum

//Math.random() = 0.000000001
//Math.floor(0.000000001 * (6 - 1 + 1) + 1)
//Math.floor(0.000000006 + 1)
//Math.floor(1.000000006) -> 1, tim, ze se pricita 1 a zaokrouhluje se dolu, tak se ziska minimum

//shrnuti:
//nasobim Math.random(), ktere vygeneruje cisla od 0 do 0.99999, maximem plus 1, vysledkem bude vzdy cislo v rozmezi minima a maxima, protoze vysledek nikdy neprekroci maximum, protoze to cislo v poslednim kroku zaokrouhluji dolu
