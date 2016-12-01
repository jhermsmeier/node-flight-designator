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

For API Documentation, see [doc/api-reference.md](https://github.com/jhermsmeier/node-flight-designator/blob/master/doc/api-reference.md)

```js
var FlightDesignator = require( 'flight-designator' )
```

##### Parse

```js
FlightDesignator.parse( 'U24511A' ) // OR
new FlightDesignator().parse( 'U24511A' )
> FlightDesignator {
  airlineCode: 'U2',
  flightNumber: 4511,
  operationalSuffix: 'A'
}
```

##### Validate

```js
FlightDesignator.isValid( 'KLM0180' )
> true
```

```js
FlightDesignator.isValidAirlineCode( 'KLM' )
> true
```

```js
FlightDesignator.isValidFlightNumber( '0180' )
> true
```

##### Construct & validate instance

```js
// Construct a flight designator
var flight = new FlightDesignator( 'KLM', '645' )
> FlightDesignator {
  airlineCode: 'KLM',
  flightNumber: 645,
  operationalSuffix: ''
}
// Check whether it's valid
flight.isValid()
> true
```

##### Format flight designators

```js
FlightDesignator.format( 'u2 0350A' )
// Compact
> 'U2350A'
// With spaces
FlightDesignator.format( 'u2 0350A', true )
> 'U2 350 A'
// With zero-padded flight number
FlightDesignator.format( 'u2350A', true, true )
> 'U2 0350 A'
```

```js
var flight = new FlightDesignator( 'LH', 254, 'X' )
// Compact
flight.toString()
> 'LH254X'
// With spaces
flight.toString( true )
> 'LH 254 X'
// With zero-padded flight number
flight.toString( true, true )
> 'LH 0254 X'
```
