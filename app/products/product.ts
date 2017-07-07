export interface ITea {
	teaId: number;
	teaName: string;
	teaType: string;
	teaDescription: string;
	teaRating: number;
	teaRatingVotes: number;
	teaAvailability: boolean;
	imageUrl: string;
}

export class Tea implements ITea {

	constructor(public teaId: number,
				public teaName: string,
				public teaType: string,
				public teaDescription: string,
				public teaRating: number,
				public teaRatingVotes: number,
				public teaAvailability: boolean,
				public imageUrl: string) {
	}

	upvoteReorder() {

	}
}