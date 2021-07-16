export class Quote {
	constructor(
		public phrase:string,
		public name:string,
		public author:string,
		public publishDate:Date,
		public upVote:number,
		public downVote:number
	){}
}
