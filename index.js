class PyArray {

    constructor(array){
      this.target = array;
      this.length = array.length
      this.lastIndex = array.length - 1
    }
  /* validate only numeric character */
     validateProp(prop) {
      let [start,stop,step] = prop.split(':').map((value)=>/^-?\d+$/g.test(value)?+value:undefined)
      let validIndex = this.validateIndex([start,stop],step)
      return [...validIndex,step]
     } 
     
  
    validateIndex(indexList,step){
      return step > 0 ? indexList : indexList.map(value => {
        return value ? this.lastIndex - (this.length + value) : value
      })
    }
    
  /* if step is 0 throw exception, if negative reverse array to 
  make the right to left slice, else return normal array*/
    validateSlice(step){
    if(step === 0){
      throw new Error('value error: step can not be 0')
    }else if(step < 0){
      return [...this.target].reverse()
    }else {
      return this.target
    }
  }
  
  /*filter array to return elements matching the step*/
   pySlicer(start=0,stop=this.length,step=1){
    let slice = this.validateSlice(step).slice(start,stop)
    return Math.abs(step) > 1 ? slice.filter((item,index)=>index%step===0) : slice
  } 
  
  }
  
  /*proxy to simulate the python slice using [index:range:step]*/
  const defineArray=(array)=> new Proxy(new PyArray(array),{
    get(target,prop){
      if(prop.includes(':')){
      let [index,range,step] = target.validateProp(prop)
      return target.pySlicer(index,range,step) 
      }
      //return Reflect.get(...arguments)
    }
  })
  
  module.exports = defineArray;