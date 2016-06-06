# Flight Designator
[![npm](https://img.shields.io/npm/v/flight-designator.svg?style=flat-square)](https://npmjs.com/package/flight-designator)
[![npm license](https://img.shields.io/npm/l/flight-designator.svg?style=flat-square)](https://npmjs.com/package/flight-designator)
[![npm downloads](https://img.shields.io/npm/dm/flight-designator.svg?style=flat-square)](https://npmjs.com/package/flight-designator)
[![build status](https://img.shields.io/travis/jhermsmeier/node-flight-designator.svg?style=flat-square)](https://travis-ci.org/jhermsmeier/node-flight-designator)

## Install via [npm](https://npmjs.com)

```sh
$ npm install --save flight-designator
```

## Usage

```js
var FlightDesignator = require( 'flight-designator' )
```

```js
FlightDesignator.isValidAirlineCode( 'KLM' )
> true
```

```js
FlightDesignator.isValidFlightNumber( '0180' )
> true
```

```js
FlightDesignator.parse( 'U24511A' )
> {
  airlineCode: 'U2',
  flightNumber: 4511,
  operationalSuffix: 'A'
}
```

```js
FlightDesignator.format( 'u2 0350A' )
> 'U2350A'
FlightDesignator.format( 'u2 0350A', true )
> 'U2 350 A'
```

```js
new FlightDesignator( 'KLM', '645' )
> {
  airlineCode: 'KLM',
  flightNumber: 645,
  operationalSuffix: ''
}
```

```js
var flight = new FlightDesignator( 'LH', 2054, 'X' )
flight.toString()
> 'LH2054X'
flight.toString( true )
> 'LH 2054 X'
```
