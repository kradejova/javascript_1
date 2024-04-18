const apartment = {
    type: 'rent',
    disposition: '3+1',
    area: {
      floorage: 100,
      balcony: 2,
      units: 'sqm',
    },
    city: 'Prague',
    district: 'Old Town',
    price: {
      rent: 28000,
      fees: {
        water: 1000,
        energy: 2500,
        services: 560,
      },
      currency: 'czk',
    },
    ownership: 'personal',
    condition: 'renovated',
    status: 'free',
    floor: 3,
  };

  document.body.innerHTML = "<p>Dispozice bytu: " + apartment.disposition + "</p>"
  document.body.innerHTML += "<p>Najem: " + apartment.price.rent + " " + apartment.price.currency + "</p>"
  document.body.innerHTML += "<p> Vymera bytu: " + apartment.area.floorage + " " + apartment.area.units + "</p>"
  const mesto = apartment.city
  const mestskaCast = apartment.district
  document.body.innerHTML += "<p> Mesto a mestska cast: " + mesto + ", " + mestskaCast + "</p>"
  apartment.status = "taken"
  document.body.innerHTML += "<p> Stav inzeratu: " + apartment.status
