export default function createChatId(users) {
  let arr = [...new Set(users)];
  arr.sort(function (a, b) {
    return a - b;
  });
  return arr.join("");
}
