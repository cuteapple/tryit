# tryit

`Promise` like exception handling model (sync)

---
example usage
```javascript
let maybe_success = ()=>{
	if(Math.random()>0.5)return 'success';
	else throw 'failed';
}
let recover = maybe_success;

let t = tryit.execute(maybe_success)
	.catch(recover)
	.catch(recover)
	.result_or('still failed :(')

console.log(t)
```
---
TODO:
- try n times
- exception on fetch result (not by `result_or`) 
- alias for methods
- process but keep current result (named `peek`?)
- layer catch
