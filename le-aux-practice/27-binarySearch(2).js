// ===================== KoKo 吃香蕉 =====================
// 返回时在 hours 小时内吃掉所有香蕉的最小速度
const koKoBanana = (piles, hours) => {
  const minSpeed = 1;
  let maxSpeed = -Infinity;
  for (const p of piles) {
    maxSpeed = Math.max(maxSpeed, p);
  }

  for (let speed = minSpeed; speed <= maxSpeed; speed++) {
    if (canEat(piles, hours, speed)) {
      return speed;
    }
  }
}

const smartKoKoBanana = (piles, hours) => {
  let minSpeed = 1;
  let maxSpeed = -Infinity;
  for (const p of piles) {
    maxSpeed = Math.max(maxSpeed, p);
  }
  maxSpeed += 1;

  let mid;

  while (minSpeed < maxSpeed) {
    mid = (maxSpeed + minSpeed) / 2 | 0;
    if (canEat(piles, hours, mid)) {
      maxSpeed = mid;
    } else {
      minSpeed = mid + 1;
    }
  }

  return minSpeed;
}

const canEat = (piles, hours, speed) => {
  let time = 0;
  for (const pile of piles) {
    time += Math.ceil(pile / speed);

    if (time > hours) return false;
  }

  return true;
}

// ===================== 运输包裹 =====================
const shipWithinDays = (weights, days) => {
  let maxPower = weights.reduce((total, i) => total + i, 0) + 1;
  let minPower = -Infinity;
  for (const weight of weights) {
    minPower = Math.max(minPower, weight);
  }
  let mid;

  while (minPower < maxPower) {
    mid = (minPower + maxPower) / 2 | 0;
    if (canDeliver(weights, days, mid)) {
      maxPower = mid;
    } else {
      minPower = mid + 1;
    }
  }

  return minPower;
}

const canDeliver = (weights, days, power) => {
  let time = 1;
  let capacityLeft = power;

  for (const weight of weights) {
    if (capacityLeft >= weight) {
      capacityLeft -= weight;
    } else {
      time += 1;
      capacityLeft = power - weight;
    }
  }

  return time <= days;
}
