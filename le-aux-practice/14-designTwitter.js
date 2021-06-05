/* Design Twitter */

const { PriorityQueue } = require('./13-binaryHeap');

class Twitter {
	constructor() {
		this.timestamp = 0;
		this.userMap = {}; // 映射 userID & user对象
	}

	/* user发表一条tweet动态 */
	postTweet(userID, tweedID, time = new Date()) {
		if (!this.userMap.hasOwnProperty(userID)) {
			this.userMap[userID] = new _User(userID);
		}

		this.userMap[userID].post(tweedID, time);
	}

	/* 返回该user关注的人(包括自己)最近的动态id，默认n条，从新到旧排序 */
	getNewsFeed(userID, size = 5) {
		const result = [];
		if (!this.userMap.hasOwnProperty(userID)) {
			return result;
		}

		const followeeIDs = this.userMap[userID].followed;
		const tweetPQ = new PriorityQueue(followeeIDs.size, tweet => tweet.time);
		for (const id of followeeIDs) {
			const tweet = this.userMap[id].head;
			if (!tweet) {
				continue;
			}
			tweetPQ.insert(tweet);
		}

		while (tweetPQ.size() > 0) {
			if (result.length === size) {
				break;
			}

			const tweet = tweetPQ.deleteMax();
			result.push(tweet.id);

			if (tweet.next) {
				tweetPQ.insert(tweet.next);
			}
		}

		return result;
	}

	/* follower关注followee，如果id不存在则新建 */
	follow(followerID, followeeID) {
		if (!this.userMap.hasOwnProperty(followerID)) {
			this.userMap[followerID] = new _User(followerID);
		}

		if (!this.userMap.hasOwnProperty(followeeID)) {
			this.userMap[followeeID] = new _User(followeeID);
		}

		this.userMap[followerID].follow(followeeID);
	}

	/* follower取关followee，如果id不存在则啥也不干 */
	unfollow(followerID, followeeID) {
		if (this.userMap.hasOwnProperty(followerID)) {
			return this.userMap[followerID].unfollow(followeeID);
		}

		return false;
	}
}

/* Tweet 作为内部类 */
/* 每个 Tweet 实例需要记录自己的 tweetId 和发表时间 time */
/* 而且作为链表节点，要有一个指向下一个节点的 next 指针。 */
class _Tweet {
	constructor(id, time = new Date()) {
		this.id = id;
		this.time = time;
		this.next = null;
	}
}

/* User 作为内部类 */
/* 一个用户需要存储的信息有 userId，关注列表，以及该用户发过的推文列表 */
/* 「关注」「取关」和「发文」应该是 User 的行为 */
class _User {
	constructor(id) {
		this.id = id;
		this.followed = new Set([id]); // 先关注自己
		this.head = null;
	}

	follow(id) {
		this.followed.add(id);
	}

	unfollow(id) {
		/* 不可以取关自己 */
		if (this.id === id) {
			return false;
		}

		return this.followed.delete(id);
	}

	post(id, time = new Date()) {
		const tweet = new _Tweet(id, time);
		tweet.next = this.head;
		this.head = tweet;
	}
}

module.exports = {
	Twitter,
	Tweet: _Tweet,
	User: _User,
};
