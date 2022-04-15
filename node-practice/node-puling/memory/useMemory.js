const { showMemory } = require("./memoryUsage");

function useMemory() {
  const size = 200 * 1024 * 1024;

  const buffer = Buffer.alloc(size);

  for (let i = 0; i < size; i++) {
    buffer[i] = 0;
  }

  return buffer;
}

const total = [];

for (let i = 0; i < 15; i++) {
  showMemory();
  total.push(useMemory());
}

showMemory();
