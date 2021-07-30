## Python Like Array Slicer For JavaScript

Simple module to emulate the Python array slicer in JavaScript

### How to use it

**pySlicer** function just expect one argument, an array of any type,
so you cant just import it and use it whit to options:

**pySlicer function call**

Expects three arguments, *start*, *stop*, *step* if they are not provided 
by default will take the values of *0*, *array.length*, *1*

```
import defineArray from "pyslicer"

let array = defineArray([1,2,3,5,6,7,8,9,10])

let sliced_array = array.pySlicer(1,2,3)

``` 

**pySlicer python like slice**

Use a string separated by **':'** with this format **'start:stop:step'**
like function call if not provided they will default to *0*, *array.length*, *1*

```
import defineArray from "pyslicer"

let array = defineArray([1,2,3,5,6,7])

let sliced_array = array['1:2:3']

```