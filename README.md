# GeoCompare

This project makes it easy to compare 2 different countries when you keep mixing up the 2 while playing Geoguessr.

This project is in very very early development and uses Geohints as a data source (retrieved on the 29th of September 2022).

To see it in action go to https://rerbun.github.io/GeoCompare/

## How update the used data

1. Clone this repository
2. Run below Curl commands to retrieve the data you want to use

```bash
curl -o data/houses.html https://geohints.com/Houses.html
curl -o data/bollards.html https://geohints.com/Bollards.html
curl -o data/fuelstations.html https://geohints.com/fuelStations.html
curl -o data/gens.html https://geohints.com/Gens.html
curl -o data/countries.html https://geohints.com/Countries.html
curl -o data/currency.html https://geohints.com/Currency.html
curl -o data/domains.html https://geohints.com/Domains.html
curl -o data/driving.html https://geohints.com/Driving.html
curl -o data/flags.html https://geohints.com/Flags.html
curl -o data/follow.html https://geohints.com/Follow.html
curl -o data/cars.html https://geohints.com/Cars.html
curl -o data/motorcycles.html https://geohints.com/Motorcycles.html
curl -o data/licenseplates.html https://geohints.com/LicensePlates.html
curl -o data/lines.html https://geohints.com/Lines.html
curl -o data/trees.html https://geohints.com/Trees.html
curl -o data/phonenumbers.html https://geohints.com/PhoneNumbers.html
curl -o data/trees.html https://geohints.com/Trees.html
curl -o data/rifts.html https://geohints.com/Rifts.html
curl -o data/scenery.html https://geohints.com/Scenery.html
curl -o data/sidewalks.html https://geohints.com/Sidewalks.html
curl -o data/poles.html https://geohints.com/Poles.html
```
