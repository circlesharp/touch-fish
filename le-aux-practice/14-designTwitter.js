/* Design Twitter */

class Twitter {
	constructor() {
		this.timestamp = 0;
	}

	/* user发表一条tweet动态 */
	postTweet(userID, tweedID) {

	}

	/* 返回该user关注的人(包括自己)最近的动态id，最多10条，从新到旧排序 */
	getNewsFeed(userID) {

	}

	/* follower关注followee，如果id不存在则新建 */
	follow(followerID, followeeID) {

	}

	/* follower取关followee，如果id不存在则啥也不干 */
	unfollow(followerID, followeeID) {

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
		this.followed = new Set();
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
