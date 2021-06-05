const {
	Tweet,
	User,
	Twitter,
} = require('../14-designTwitter');

describe('Design Twitter', () => {
	it('Tweet', () => {
		const tweetIDs = [11, 22, 33, 44, 55, 66, 77];
		let tweetHead = null;
		for (let i = 0; i < tweetIDs.length; i++) {
			const tt = new Tweet(tweetIDs[i]);
			tt.next = tweetHead;
			tweetHead = tt;
		}

		while (tweetHead.next) {
			expect(tweetHead.id).toEqual(tweetIDs.pop());
			tweetHead = tweetHead.next;
		}
	});

	it('User - follow & unfollow', () => {
		const MY_ID = 10;
		const userIDs = [11, 12, 13, 14, 15, 16, 17];
		const user = new User(MY_ID);

		for (const id of userIDs) {
			user.follow(id);
		}

		expect(Array.from(user.followed).sort((a, b) => a - b))
			.toEqual(userIDs);

		expect(user.unfollow(MY_ID)).toEqual(false);

		for (let i = 0; i < userIDs.length; i++) {
			expect(user.unfollow(userIDs[i])).toEqual(true);
			expect(Array.from(user.followed).sort((a, b) => a - b))
				.toEqual(userIDs.slice(i + 1));
		}
	});

	it('User - post', () => {
		const MY_ID = 10;
		const tweetIDs = [11, 22, 33, 44, 55, 66, 77];
		const user = new User(MY_ID);
		for (let i = 0; i < tweetIDs.length; i++) {
			user.post(tweetIDs[i]);
		}

		let tweetHead = user.head;
		/* ps 机器运行速度过快，不适合测量 new Date 时间 */
		while (tweetHead.next) {
			expect(tweetHead.id).toEqual(tweetIDs.pop());
			tweetHead = tweetHead.next;
		}
	});

	it('User - post with explicit time', () => {
		const MY_ID = 10;
		const tweetIDs = [11, 22, 33, 44, 55, 66, 77];
		const user = new User(MY_ID);
		for (let i = 0; i < tweetIDs.length; i++) {
			user.post(tweetIDs[i], i);
		}

		let tweetHead = user.head;
		let time = Infinity;
		while (tweetHead.next) {
			expect(tweetHead.id).toEqual(tweetIDs.pop());
			expect(tweetHead.time < time).toEqual(true);
			time = tweetHead.time;
			tweetHead = tweetHead.next;
		}
	});
});
