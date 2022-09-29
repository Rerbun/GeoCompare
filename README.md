# GeoCompare

This project makes it easy to compare 2 different countries when you keep mixing up the 2 while playing Geoguessr.

This project is in very very early development and uses Geohints as a data source (retrieved on the 29th of September 2022).

To see it in action go to https://rerbun.github.io/GeoCompare/

## How update the used data

1. Clone this repository
2. Run below Curl commands to retrieve the pages you want to use

```bash
curl -o pages/houses.html https://geohints.com/Houses.html
curl -o pages/bollards.html https://geohints.com/Bollards.html
curl -o pages/fuelstations.html https://geohints.com/fuelStations.html
curl -o pages/gens.html https://geohints.com/Gens.html
curl -o pages/countries.html https://geohints.com/Countries.html
curl -o pages/currency.html https://geohints.com/Currency.html
curl -o pages/domains.html https://geohints.com/Domains.html
curl -o pages/driving.html https://geohints.com/Driving.html
curl -o pages/flags.html https://geohints.com/Flags.html
curl -o pages/follow.html https://geohints.com/Follow.html
curl -o pages/cars.html https://geohints.com/Cars.html
curl -o pages/motorcycles.html https://geohints.com/Motorcycles.html
curl -o pages/licenseplates.html https://geohints.com/LicensePlates.html
curl -o pages/lines.html https://geohints.com/Lines.html
curl -o pages/trees.html https://geohints.com/Trees.html
curl -o pages/phonenumbers.html https://geohints.com/PhoneNumbers.html
curl -o pages/trees.html https://geohints.com/Trees.html
curl -o pages/rifts.html https://geohints.com/Rifts.html
curl -o pages/scenery.html https://geohints.com/Scenery.html
curl -o pages/sidewalks.html https://geohints.com/Sidewalks.html
curl -o pages/poles.html https://geohints.com/Poles.html
```
