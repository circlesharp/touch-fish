const {
	Tweet,
	User,
	Twitter,
} = require('../14-designTwitter');

describe('Design_Twitter_1: Tweet & User', () => {
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
			.toEqual([MY_ID, ...userIDs]);

		expect(user.unfollow(MY_ID)).toEqual(false);

		for (let i = 0; i < userIDs.length; i++) {
			expect(user.unfollow(userIDs[i])).toEqual(true);
			expect(Array.from(user.followed).sort((a, b) => a - b))
				.toEqual([MY_ID, ...userIDs.slice(i + 1)]);
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

describe('Design_Twitter_2: Twitter', () => {
	it('Twitter follow', () => {
		const twitter = new Twitter();
		twitter.follow(1, 2);
		twitter.follow(2, 3);
		twitter.follow(3, 4);
		twitter.follow(4, 5);

		expect(Object.keys(twitter.userMap).sort((a, b) => a - b))
			.toEqual([1, 2, 3, 4, 5].map(i => i.toString()));

		expect(twitter.userMap[1] instanceof User).toEqual(true);
	});

	it('Twitter unfollow', () => {
		const twitter = new Twitter();
		twitter.follow(1, 2);
		expect(twitter.unfollow(3, 2)).toEqual(false);
		expect(twitter.unfollow(1, 3)).toEqual(false);
		expect(twitter.userMap[1].followed.size).toEqual(2);
		expect(twitter.unfollow(1, 2)).toEqual(true);
		expect(twitter.userMap[1].followed.size).toEqual(1);
	});

	it('Twitter postTweet', () => {
		const twitter = new Twitter();
		let time = 0;
		twitter.postTweet(1, 11, time++);
		twitter.postTweet(1, 22, time++);
		twitter.postTweet(1, 33, time++);

		let userPostHead = twitter.userMap[1].head;
		expect(userPostHead.id).toEqual(33);
		expect(userPostHead.time).toEqual(2);

		userPostHead = userPostHead.next.next;
		expect(userPostHead.id).toEqual(11);
		expect(userPostHead.time).toEqual(0);
	});

	it('Twitter getNewsFeed', () => {
		const twitter = new Twitter();
		let time = 0;

		twitter.follow(1, 2);
		twitter.follow(1, 3);
		twitter.follow(4, 1);
		twitter.follow(4, 2);
		twitter.follow(4, 3);

		twitter.postTweet(1, 11, time++);
		twitter.postTweet(1, 12, time++);
		twitter.postTweet(2, 21, time++);
		twitter.postTweet(3, 31, time++);
		twitter.postTweet(4, 41, time++);
		twitter.postTweet(1, 13, time++);
		twitter.postTweet(2, 22, time++);
		twitter.postTweet(3, 33, time++);
		twitter.postTweet(4, 42, time++);
		twitter.postTweet(4, 43, time++);
		twitter.postTweet(4, 44, time++);

		/* 4 => 44,43,42,33,22,13,41,31,21,11 */
		/* 1 => 33,22,13,31,21,21,11 */
		expect(twitter.getNewsFeed(4))
			.toEqual([44, 43, 42, 33, 22]);
		expect(twitter.getNewsFeed(1))
			.toEqual([33, 22, 13, 31, 21]);

		expect(twitter.getNewsFeed(4, 10))
			.toEqual([44, 43, 42, 33, 22, 13, 41, 31, 21, 12]);
		expect(twitter.getNewsFeed(1, 10))
			.toEqual([33, 22, 13, 31, 21, 12, 11]);
	});
});
