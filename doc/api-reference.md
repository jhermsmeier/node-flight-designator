<a name="FlightDesignator"></a>

## FlightDesignator
**Kind**: global class  

* [FlightDesignator](#FlightDesignator)
    * [new FlightDesignator(airline, number, suffix)](#new_FlightDesignator_new)
    * _instance_
        * [.isValid()](#FlightDesignator+isValid) ⇒ <code>Boolean</code>
        * [.parse(value)](#FlightDesignator+parse) ⇒ [<code>FlightDesignator</code>](#FlightDesignator)
        * [.toString(spaces, pad)](#FlightDesignator+toString) ⇒ <code>String</code>
    * _static_
        * [.pattern](#FlightDesignator.pattern) : <code>RegExp</code>
        * [.airlinePattern](#FlightDesignator.airlinePattern) : <code>RegExp</code>
        * [.flightPattern](#FlightDesignator.flightPattern) : <code>RegExp</code>
        * [.suffixPattern](#FlightDesignator.suffixPattern) : <code>RegExp</code>
        * [.isValid(designator)](#FlightDesignator.isValid) ⇒ <code>Boolean</code>
        * [.isValidAirlineCode(airlineCode)](#FlightDesignator.isValidAirlineCode) ⇒ <code>Boolean</code>
        * [.isValidFlightNumber(flightNumber)](#FlightDesignator.isValidFlightNumber) ⇒ <code>Boolean</code>
        * [.isValidSuffix(suffix)](#FlightDesignator.isValidSuffix) ⇒ <code>Boolean</code>
        * [.parse(value)](#FlightDesignator.parse) ⇒ [<code>FlightDesignator</code>](#FlightDesignator) \| <code>null</code>
        * [.format(value, spaces, pad)](#FlightDesignator.format) ⇒ <code>String</code>


* * *

<a name="new_FlightDesignator_new"></a>

### new FlightDesignator(airline, number, suffix)
FlightDesignator

**Params**

- airline <code>String</code>
- number <code>String</code>
- suffix <code>String</code>


* * *

<a name="FlightDesignator+isValid"></a>

### flightDesignator.isValid() ⇒ <code>Boolean</code>
Check whether this flight designator is valid

**Kind**: instance method of [<code>FlightDesignator</code>](#FlightDesignator)  

* * *

<a name="FlightDesignator+parse"></a>

### flightDesignator.parse(value) ⇒ [<code>FlightDesignator</code>](#FlightDesignator)
Parse a flight designator

**Kind**: instance method of [<code>FlightDesignator</code>](#FlightDesignator)  
**Throws**:

- <code>Error</code> If value is an invalid designator

**Params**

- value <code>String</code>


* * *

<a name="FlightDesignator+toString"></a>

### flightDesignator.toString(spaces, pad) ⇒ <code>String</code>
Format the flight designator

**Kind**: instance method of [<code>FlightDesignator</code>](#FlightDesignator)  
**Params**

- spaces <code>Boolean</code> - whether to separate with spaces
- pad <code>Boolean</code> - whether to zero-pad the flight number


* * *

<a name="FlightDesignator.pattern"></a>

### FlightDesignator.pattern : <code>RegExp</code>
Flight designator pattern (IATA/ICAO)
NOTE: This pattern DOES NOT validate the flight number
(i.e. it does match invalid '0000' flight numbers)

**Kind**: static property of [<code>FlightDesignator</code>](#FlightDesignator)  

* * *

<a name="FlightDesignator.airlinePattern"></a>

### FlightDesignator.airlinePattern : <code>RegExp</code>
IATA/ICAO airline code pattern

**Kind**: static property of [<code>FlightDesignator</code>](#FlightDesignator)  

* * *

<a name="FlightDesignator.flightPattern"></a>

### FlightDesignator.flightPattern : <code>RegExp</code>
Flight number pattern
NOTE: This regular expression checks for two things
by utilizing a lookahead: The first group checks (via the lookahead)
if the number is non-zero, the second whether it is between 1-4 chars long

**Kind**: static property of [<code>FlightDesignator</code>](#FlightDesignator)  

* * *

<a name="FlightDesignator.suffixPattern"></a>

### FlightDesignator.suffixPattern : <code>RegExp</code>
Operational suffix test pattern

**Kind**: static property of [<code>FlightDesignator</code>](#FlightDesignator)  

* * *

<a name="FlightDesignator.isValid"></a>

### FlightDesignator.isValid(designator) ⇒ <code>Boolean</code>
Determine whether the input is a valid flight designator

**Kind**: static method of [<code>FlightDesignator</code>](#FlightDesignator)  
**Params**

- designator <code>String</code>


* * *

<a name="FlightDesignator.isValidAirlineCode"></a>

### FlightDesignator.isValidAirlineCode(airlineCode) ⇒ <code>Boolean</code>
Determines whether the input is a valid airline code

**Kind**: static method of [<code>FlightDesignator</code>](#FlightDesignator)  
**Params**

- airlineCode <code>String</code>


* * *

<a name="FlightDesignator.isValidFlightNumber"></a>

### FlightDesignator.isValidFlightNumber(flightNumber) ⇒ <code>Boolean</code>
Determines whether the input is a valid flight number

**Kind**: static method of [<code>FlightDesignator</code>](#FlightDesignator)  
**Params**

- flightNumber <code>String</code>


* * *

<a name="FlightDesignator.isValidSuffix"></a>

### FlightDesignator.isValidSuffix(suffix) ⇒ <code>Boolean</code>
Determine whether the input is a valid operational suffix

**Kind**: static method of [<code>FlightDesignator</code>](#FlightDesignator)  
**Params**

- suffix <code>String</code>


* * *

<a name="FlightDesignator.parse"></a>

### FlightDesignator.parse(value) ⇒ [<code>FlightDesignator</code>](#FlightDesignator) \| <code>null</code>
Parses a flight designator

**Kind**: static method of [<code>FlightDesignator</code>](#FlightDesignator)  
**Params**

- value <code>String</code>


* * *

<a name="FlightDesignator.format"></a>

### FlightDesignator.format(value, spaces, pad) ⇒ <code>String</code>
Parses and formats a flight designator

**Kind**: static method of [<code>FlightDesignator</code>](#FlightDesignator)  
**Params**

- value <code>String</code>
- spaces <code>Boolean</code>
- pad <code>Boolean</code>


* * *

