# Flight Designator
[![npm](http://img.shields.io/npm/v/flight-designator.svg?style=flat-square)](https://npmjs.com/flight-designator)
[![npm downloads](http://img.shields.io/npm/dm/flight-designator.svg?style=flat-square)](https://npmjs.com/flight-designator)
[![build status](http://img.shields.io/travis/jhermsmeier/node-flight-designator.svg?style=flat-square)](https://travis-ci.org/jhermsmeier/node-flight-designator)

## Install via [npm](https://npmjs.com)

```sh
$ npm install flight-designator
```

## Usage

```js
var FlightDesignator = require( 'flight-designator' )
```

```js
FlightDesignator.parse( 'U24511A' )
> {
  airlineCode: 'U2',
  flightNumber: '4511',
  operationalSuffix: 'A'
}
```

```js
new FlightDesignator( 'KLM', '645' )
> {
  airlineCode: 'KLM',
  flightNumber: '645',
  operationalSuffix: ''
}
```

```js
var flight = new FlightDesignator( 'LH', '2054', 'X' )
flight.toString()
> 'LH2054X'
flight.toString( true )
> 'LH 2054 X'
```
