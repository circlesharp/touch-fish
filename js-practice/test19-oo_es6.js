class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showName() {
    console.log(this.name);
  }
}

const user = new User('Amy', 13);
user.showName();


class VipUser extends User {
  constructor(name, age, level) {
    super(name, age);
    this.level = level;
  }
  showLevel() {
    console.log(this.level);
  }
}

const vip = new VipUser('Jack', 33, 2);
vip.showName();
vip.showLevel();
