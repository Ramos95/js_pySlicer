## Python Like Array Slicer For JavaScript

Simple module to emulate the Python array slicer in JavaScript

### How to use it

**pySlicer** function just expect one argument, an array of any type,
so you cant just import it and use it whit to options:

**pySlicer python like slice**

Use a string separated by **':'** with this format **'start:stop:step'**
like function call if not provided they will default to _0_, _array.length_, _1_

```
import defineArray from "pyslicer"

let array = defineArray([1,2,3,5,6,7])

let sliced_array = array['1:2:3']

```
