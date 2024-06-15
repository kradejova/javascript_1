const filmy = [
	{
		id: 'pelisky',
		nazev: 'Pelíšky',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w663/files/images/film/posters/165/059/165059101_56d52a.jpg',
			sirka: 663,
			vyska: 909,
		},
		ochutnavka: 'České drama z období 1968.',
		popis:
			'A je tu zpět jedna z nejúspěšnějších českých filmových komedií od renomovaných tvůrců - režiséra J. Hřebejka a scenáristy P. Jarchovského s řadou skvělých herců. Vraťme se tedy s oblíbenými postavami k rodinným rituálům, láskám a trapasům odehrávajícím se na sklonku šedesátých let minulého století v jedné pražské čtvrti. Jemná poetika a humorná nadsázka jsou charakteristické pro vyprávění životních osudů tří generací mužů a žen ve zvláštním období našich dějin v roce 1968… V jedné dvoupatrové vile tu žijí dvě rodiny - Šebkovi a Krausovi. Otec Šebek (M. Donutil), prostoduchý, ale dobrácký důstojník z povolání, je zastáncem panujícího režimu a stejně vehementně obhajuje i vlastní neomylnost v roli hlavy rodiny. Elegantní otec Kraus (J. Kodet), bývalý odbojář s trpkou válečnou zkušeností, je naopak zarytým opozičníkem. Také on je přesvědčený o tom, že má za všech okolností pravdu - není proto divu, že se tihle dva nemají zrovna v lásce. Jejich děti - gymnazista Michal (M. Beran) a jeho spolužačka Jindřiška (K. Nováková) - spolu vycházejí docela dobře. I když Michal by byl rád, kdyby ho jeho sousedka brala trochu víc na vědomí. Ta má ale oči pro jiného. Nezbývá mu tedy nic jiného, než aby smutně přihlížel, jak mu jeho první milostné body krade spolužák Elien (O. Brousek). U Šebků a Krausů se zatím střídají rodinné návštěvy, ve vší obřadnosti se tu slaví Vánoce, svatba i nečekaný, bolestný pohřeb. Do zabydlených domácností vtrhnou i některé novodobé vymoženosti v podobě umělohmotných lžiček, nerozbitných sklenic i podivných her pro statečné pionýry. Mládež zatím pokukuje po lákadlech světa kapitalismu a snaží se žít svůj vlastní, na rodičovských autoritách a "velké" historii nezávislý život. V soukromí rodinných pelíšků se tak čas od času odehrají malá dramata názorů a vztahů, která se v paměti jejich účastníků otisknou už nejspíš navždy… (csfd.cz, Česká televize)',
		premiera: '2019-04-08',
	},
	{
		id: 'promlceno',
		nazev: 'Promlčeno',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/164/987/164987945_c36f6f.jpg',
			sirka: 420,
			vyska: 595,
		},
		ochutnavka: 'Český krimi thriller s Karlem Rodenem.',
		popis:
			'Šokující živé vysílaní, které během chvíle změní životy několika nevinných lidí. Radek (Karel Roden) se po téměř dvaceti letech nečekaně vrací do svého rodného města, aby zde nalezl jistou mladou ženu a jednou provždy se vyrovnal se svou minulostí. V pátrání po neznámé ženě mu pomáhá Eva, ambiciózní rozhlasová moderátorka, která jeho příběh dostane do své živě vysílané noční show. Chtěla mít ve vysílání senzační událost, ale k jejímu zděšení a ke zděšení všech posluchačů začne na povrch vyplouvat něco, s čím nikdo nepočítal. Svůj plán připravoval Radek několik let a během jeho vyprávění je do pochmurného příběhu vtažena nejen ona sama, ale i pražská kriminálka a další aktéři dlouho zapomenutých událostí. Začíná napínavý boj o čas a o spravedlnost. Opravdu už je vše nenávratně promlčeno? (csfd.cz, Bontonfilm)',
		premiera: '2022-04-28',
	},
	{
		id: 'ona',
		nazev: 'Ona',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/158/280/158280506_017bab.jpg',
			sirka: 420,
			vyska: 594,
		},
		ochutnavka: 'Romantické Sci-Fi z blízké budoucnosti',
		popis:
			'Děj snímku Her se odehrává v Los Angeles v nedaleké budoucnosti. Theodore (Joaquin Phoenix) je komplikovaný a citlivý muž, který se živí psaním dojemných a osobních dopisů pro druhé. Se zlomeným srdcem po ukončení dlouhého vztahu se začne zajímat o nový, pokročilý operační systém, o kterém jeho výrobce tvrdí, že představuje zcela unikátní a intuitivní bytost. Po jeho instalaci se seznamuje se „Samanthou", umělou inteligencí s milým ženským hlasem (Scarlett Johansson), která má zajímavé postřehy, je citlivá a překvapivě vtipná. Jak její potřeby a požadavky rostou společně s těmi jeho, mění se jejich přátelství ve skutečnou vzájemnou lásku. (csfd.cz, Falcon)',
		premiera: '2013-12-18',
	},
	{
		id: 'rrrrrrr',
		nazev: 'RRRrrrr!!!',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w663/files/images/film/posters/162/393/162393560_2aca32.jpg',
			sirka: 663,
			vyska: 919,
		},
		ochutnavka: 'Francouzská komedie.',
		popis:
			'Pred 35 000 rokmi v časoch, kedy bol boj o oheň už dávno vybojovaný, prišiel na rad šampón, kvôli ktorému bol spáchaný prvý zločin v histórii ľudstva. Dva praveké kmene, Špinavovlasých a Čistovlasých žijú v harmónii a mieri až do chvíle, keď si Špinavovlasí uvedomia, že sa od susedného kmeňa líšia... Čistotou vlasov. Ale tajnú receptúru na peniacu zmes majú iba Čistovlasí a tí sa o ňu nechcú podeliť... Čistovlasí až doteraz žili pokojný, šťastný a čistý život. Nikoho z nich nenapadlo, že by im mohol niekto závidieť ich krásne čisté vlasy. Dokonca ani špinavý a smradľavý susedný kmeň Špinavovlasých. Ale v jednu noc sa to stalo. Po prvý raz v histórii ľudstva bol spáchaný zločin. Človek zabil človeka... Čo bolo vlastne jeho motívom? Kto vyrieši tento záhadný rébus? Čo ak je táto vrrrrražda iba začiatkom hrôzostrašnej série? Všetky tieto otázky začínajú riešiť prrrrehistorickí vyšetrovatelia. Začína sa prrrraveká špionáž a s ňou prichádza aj prvý vyšetrovaný zločin v dejinách ľudskej spoločnosti. Zažijete prvé vypočúvania, sledovania a podozrievania. V bláznivej komédii režiséra Chabata vstúpite do prrrrehistorickej doby, kedy bola platená starostlivosť o deti nutnosťou, profesionálny volejbal zábavou a sledovanie nástenných malieb ako predchodcov televízie samozrejmosťou. Nezľaknite sa hrôzostrašných zvukov vychádzajúcich z jaskýň. Podmienky základných ľudských potrieb, boli pred 35 000 rokmi nedokonalé. (csfd.cz, oficiální text distributora)',
		premiera: '2004-09-23',
	},
	{
		id: 'vlastnici',
		nazev: 'Vlastníci',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/163/781/163781903_f1e217.png',
			sirka: 420,
			vyska: 593,
		},
		ochutnavka: 'Česká komedie.',
		popis:
			'Paní Zahrádková (Tereza Voříšková) s manželem (Vojta Kotek) idealisticky chtějí, aby společnými silami dům zachránili. Novomanželé Bernáškovi (Jiří Černý, Maria Sawa) se s nadšením připojují. Paní Roubíčková (Klára Melíšková) pedantsky kontroluje řádný průběh schůze. Paní Horvátová (Dagmar Havlová) všechno iniciativně komentuje. Naivní pan Švec (David Novotný) zastupuje svojí maminku. Paní Procházková (Pavla Tomicová) s panem Novákem (Ondřej Malý) hledá způsoby jak zhodnotit svůj majetek. Pan Nitranský (Andrej Polák) touží po půdě v domě a pan Kubát (Jiří Lábus) důsledně sabotuje jakékoliv rozhodnutí. A v pozadí číhají bratři Čermákovi (Kryštof Hádek, Stanislav Majer), jen starý pan profesor Sokol (Ladislav Trojan) zatím nic nekomentuje… (csfd.cz, CinemArt)',
		premiera: '2019-11-19',
	},
	{
		id: 'kimi',
		nazev: 'KIMI',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/166/002/166002844_2e67c1.jpg',
			sirka: 420,
			vyska: 622,
		},
		ochutnavka: 'Americký thriller o IT pracovnici s agorafobií.',
		popis:
			'Pracovnice IT oddělení trpící agorafobií najde nahrávku násilného trestného činu a nahlásí ji svým nadřízeným. Uvědomuje si však, že bude muset opustit svůj byt, aby mohl být zločin vyšetřen. (csfd.cz, HBO Max)',
		premiera: '2022-02-10',
	},
	{
		id: 'petrolejove-lampy',
		nazev: 'Petrolejové lampy',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w663/files/images/film/posters/163/486/163486952_22889f.jpg',
			sirka: 663,
			vyska: 937,
		},
		ochutnavka: 'Sugestivní filmové drama podle románu Jaroslava Havlíčka.',
		popis:
			'Sugestivní filmové drama Petrolejové lampy natočil Juraj Herz podle stejnojmenného románu Jaroslava Havlíčka. Vypráví v něm tragický příběh stárnoucí dívky Štěpy, žijící na přelomu století v dusném prostředí českého maloměsta, v ovzduší nepochopení a předstíraných citů, přetvářky a falše. Štěpě jsou neustále matkou vnucováni adepti na ženění, kteří ovšem musejí pocházet z téhož okruhu jako ona. Štěpa je však jiná než ostatní dívky. Jakoby zasažena duchem emancipace vyslouží si pověst dívky volných mravů a ta přirozeně nápadníky z řad městské honorace odrazuje. Než by se stala starou pannou, provdá se za bratrance, zkrachovalého důstojníka. V den svatby ale ještě netuší, jaká strašlivá nemoc pronásleduje jejího ženicha... Pečlivě rekonstruované období secese v sobě tají osudové lidské trápení: stárnoucí dívka z rodiny maloměstské honorace se dočká svého štěstí, když se provdá na pohledného důstojníka. Netuší ovšem, že muž trpí zhoubnou pohlavní chorobu - s marnou obětavostí pak o něho pečuje, vystavena zlomyslnému posměchu svého okolí. Vynikající, stále sugestivní snímek Juraje Herze se opírá o procítěné, jemně odstíněné herecké výkony Ivy Janžurové a Petra Čepka. (csfd.cz, oficiální text distributora)',
		premiera: '1971-10-01',
	},
	{
		id: 'krakonosovo-tajemstvi',
		nazev: 'Krakonošovo tajemství',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/166/933/166933672_58ebbc.jpg',
			sirka: 420,
			vyska: 592,
		},
		ochutnavka: 'Česká vánoční pohádka z Krkonoš.',
		popis:
			'Na zámek v podhůří Krkonoš přijíždí jeho nový majitel Štěpán se svojí snoubenkou, krásnou komtesou Blankou, a mladším bratrem Adamem. Cestou kočár nešťastně srazí kolemjdoucí dívku, Adam jí pomůže a ona se do něj zamiluje. Na zámku Adam objeví starou vlašskou knihu, která by měla obsahovat cestu k pokladům. Tajemné značky vlašské knihy však nedokáže vyluštit ani národopisec Jiráček, který v kraji sbírá pověsti a nevychází z údivu nad tím, že zdejší lidé stále věří v Krakonoše. Na zámku se objeví záhadný cizinec a nabídne Štěpánovi, že jej k pokladu za určitých podmínek dovede. Výprava do hor může začít. Naplní se Liduščina láska k Adamovi? Jakou záhadu skrývá starý obraz na zámku Hůrka a co strašlivého se v horách kdysi odehrálo? A kdo je vlastně Krakonoš a jaké je jeho největší tajemství? (csfd.cz, Česká televize)',
		premiera: '2022-12-24',
	},
]

//pridani dalsich filmu

//pridano na konec pole
filmy.push({
	id: 'rebelka',
		nazev: 'Rebelka',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w663/files/images/film/posters/158/602/158602061_43ea8f.jpg',
			sirka: 420,
			vyska: 592,
		},
		ochutnavka: 'Disneyovka, kde princezna nepotřebuje prince a zachrání se sama.',
		popis:
			'Už od starých časů se po mnoho generací šíří příběhy o epických bitvách a mystických legendách v drsné a tajemné Skotské vysočině. Ve filmu se k legendě přidá nová pověst, když odvážná Merida stane tváří v tvář tradici, osudu a nejkrutější bestii. Merida je zkušená lučištnice a impulzivní dcera krále Ferguse a královny Elinor. Je odhodlána jít si v životě svou vlastní cestou. Vzepře se starému zvyku zasvěcení pánům země. Silnému lordu MacGuffinovi, mrzutému Macintoshovi a svárlivému Dingwallovi. Meridiny činy nechtěně rozpoutají v království chaos a běsnění. Když se obrátí o pomoc k podivínské staré čarodějnici, dostane prokleté přání. Merida, která následuje nebezpečné síly, objeví význam skutečné odvahy, aby zlomila příšernou kletbu, než bude příliš pozdě. (Falcon) ',
		premiera: '2012-08-16',
})


//pridano na zacatek pole
filmy.unshift({
	id: 'deadpool-wolverine',
		nazev: 'Deadpool & Wolverine',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w360/files/images/film/posters/168/616/168616909_qrysqu.jpg',
			sirka: 420,
			vyska: 592,
		},
		ochutnavka: 'Marvel NSFW romance.',
		popis:
			'Zatím není dostupný.',
		premiera: '2024-07-25',
})

//pridano na zacatek pole
filmy.unshift({
	id: 'x-men-origins-wolverine',
		nazev: 'X-Men Origins: Wolverine',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w663/files/images/film/posters/159/354/159354342_558f38.jpg',
			sirka: 420,
			vyska: 592,
		},
		ochutnavka: 'Hugh Jackman ve své nejlepší roli.',
		popis:
			'Bratři Logan/Wolverine a Victor jsou od útlého věku nerozlučně spolu. Nespojuje je bratrská láska, ale to, že jsou oba mutanti a v dospělosti se stávají členy týmu Weapon X, vedeného Williamem Strikerem. Tým je složený ze samých mutantů, kteří jsou něčím výjimeční. Při jedné vojenské akci Stryker, rozkáže aby Victor použil své násilí podle libosti. Logan/Wolverine s tím nesouhlasí a po masakru se rozhodne jednotku Weapon X opustit...  Odjíždí do hor, kde spokojeně 6 let žije se svou přítelkyní Kaylaou. Pak se jednoho dne objeví Victor a Kaylau zabije. Logan/Wolverine je bez sebe a okamžitě vyhledá Strykera. Ten mu ovšem neřekne úplně vše, hovoří jen o tom, že Victor se snaží zabít všechny členy Weapon X, po smrti jsou již Bolt a Wade. Stryker má pro Logana/Wolverine návrh – v jeho laboratoři ho nechá vylepšit, aby byl schopný zabít o tolik silnějšího Victora. Logan/Wolverine nejprve není nadšený, ale nakonec přijímá a podstupuje neuvěřitelnou přeměnu z mutanta na supermutanta. Během přetvářecího programu málem zemře, ovšem až za prahem samotné smrti, se nečekaně začne probírat a uslyší, jak Stryker rozkazuje vymazat jeho paměť. Logan/Wolverine se znenadání utrhne ze všech přístrojů, na které je napojen, a unikne ze základny. Chtěli ho totiž využít k něčemu jinému, než bylo domluveno. Teprve teď Logan/Wolverine pochopí, že vše nastražil Stryker – i samotného Victora, který mu ve všem pomáhá... Logan/Wolverine, je na útěku. Ukrývá se na farmě starého páru, kteří mu poskytnou úkryt, připomíná jim totiž jejich mrtvého syna. bohužel je za nějaký čas vystopován a manželský pár je zabit. Logan/Wolverine se opět dává na útěk, přičemž zneškodní mnoho svých pronásledovatelů... (TV Prima) ',
		premiera: '2009-04-30',
})

//bod 5 - vepsani informaci o danem filmu z pole na detailu filmu
//ulozeni id filmu ziskaneho z url do promenne
const idFilmu = (location.hash).slice(1,location.hash.length)
//kontrola
//console.log(idFilmu)

let nalezenyFilm = null

//bod 5, podbod 4 - vyhledani pomoci for cyklu

// for (let i = 0; i < filmy.length; i++) {
// 	if (filmy[i].id === idFilmu) {
// 		nalezenyFilm = filmy[i]
// 		break
// 	}
// }
//kontrola v konzoli
// console.log(nalezenyFilm)

//bod 5, podbod 4 - vyhledani pomoci forEach
filmy.forEach((film) => {
	if(film.id === idFilmu) {
		nalezenyFilm = film
	}
})
//kontrola v konzoli
console.log(nalezenyFilm)

//bod 5, podbod 4 - vyhledani pomoci find metody
// const nalezenyFilm = filmy.find(film => film.id === idFilmu)
//kontrola v konzoli
// console.log(nalezenyFilm)

//bod 5, podbod 5

//nastaveni src odpovidajici url src zvoleneho filmu
const plakat = document.querySelector("#detail-filmu img")
plakat.src = nalezenyFilm.plakat.url

//nazev filmu
const nazevFilmu = document.querySelector("#detail-filmu .card-title")
nazevFilmu.textContent = nalezenyFilm.nazev

// //popis filmu
const popisFilmu = document.querySelector("#detail-filmu .card-text")
popisFilmu.textContent = nalezenyFilm.popis

//bod 8 - prace s formularem na poznamku
const formular = document.querySelector("#note-form")
const textovePole = document.querySelector("#message-input")
const podminkyPouzivani = document.querySelector("#terms-checkbox")

//funkce, ktera overuje obsah textoveho pole a zaskrtnuti checkboxu
const ulozit = (e) => {
	//zamezeni vychoziho chovani prohlizece
	e.preventDefault()

	//kontrola textoveho pole
	if (textovePole.value.length === 0) {
		textovePole.classList.add("is-invalid")
		textovePole.focus()
	} else {
		textovePole.classList.remove("is-invalid")
	}

	//kontrola checkboxu
	if (textovePole.value.length !== 0 && podminkyPouzivani.checked === false){
		podminkyPouzivani.classList.add("is-invalid")
		podminkyPouzivani.focus()				
	} else {
		podminkyPouzivani.classList.remove("is-invalid")
	}

	//zmena formulare na ulozeny text, pokud jsou splneny obe podminky, tj. textove pole neni prazdne a jsou zaskrtnute podminky pouzivani
	if (textovePole.value.length !== 0 && podminkyPouzivani.checked) {
		formular.textContent = textovePole.value
	}	
}	

//eventListener s vyse napsanou funkci, ktery je navazany na tlacitko ulozit
formular.addEventListener("submit", ulozit)

//bod 6 - prace s datem premiery
//bod 6, podbod 2
console.log(nalezenyFilm.premiera)
const datumPremiery = dayjs(nalezenyFilm.premiera).format('D. M. YYYY')
console.log(datumPremiery)

//bod 6, bonus - vypocet poctu dni od premiery
const dnesniDatum = dayjs()
console.log(dnesniDatum.format("D. M. YYYY"))
const vypocetDni = dayjs(nalezenyFilm.premiera).diff(dnesniDatum, "days")
console.log(vypocetDni)

//zobrazeni noveho stringu pro premieru
//puvodni string: Premiéra 24. prosince 2022, což je za 24 dní.
const premiera = document.querySelector("#premiera")
premiera.textContent = ""
premiera.innerHTML += `Premiéra <strong>${datumPremiery}</strong>, `

//extrabonus - osetreni, ze se slovo den zobrazi ve spravnem tvaru
if (vypocetDni === 0) {
	premiera.innerHTML += `což je dnes.`
} else if (vypocetDni < -1) {
	premiera.innerHTML += `což bylo před ${Math.abs(vypocetDni)} dny.`
} else if (vypocetDni === -1) {
	premiera.innerHTML += `což bylo před ${Math.abs(vypocetDni)} dnem.`
} else if (vypocetDni === 1){
	premiera.innerHTML += `což bude za ${vypocetDni} den.`
} else if (vypocetDni > 1 && vypocetDni < 5){
	premiera.innerHTML += `což bude za ${vypocetDni} dny.`
} else {
	premiera.innerHTML += `což bude za ${vypocetDni} dní.`
}






