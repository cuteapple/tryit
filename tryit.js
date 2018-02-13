class tryit{
	constructor(f){
		try{
			this.result = f();
			this.OK=true;
		}
		catch(e){
			this.result=e;
			this.OK=false;
		}
	}

	result_or(value){
		return this.OK?this.result:value;
	}

	execute(f){return tryit.execute(f)}
	static execute(f){return new tryit(f)}

	then(on_resolve,on_reject){
		let action = this.OK?on_resolve:on_reject;
		if(action instanceof Function)
			return new tryit(()=>action(this.result));
		else
			return this;
	}
	
	catch(on_reject){
		return this.then(undefined,on_reject)
	}
}