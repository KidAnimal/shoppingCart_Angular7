import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'tokenizer'
})
export class TokenizerPipe implements PipeTransform {

	//defines the pipe which takes in the value as a string and tokenizes it. 

	transform(value: any, coalesce: any, args?: any): any {
		if (typeof value === 'string') {
			var token = value.split("");
			if (coalesce) {
				return token.join(coalesce);
			}
			else {
				return token.join();
			}
		} else {
			return value;
		}
	};
};

