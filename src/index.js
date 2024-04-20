export function sortArray(users) {
  users.sort(function (a, b) {
    return b.health - a.health;
  });
  return users;
}
export function showHealth(health) {
  if (health < 15) {
    return "critical";
  }
  if (50 >= health && health >= 15) {
    return "wounded";
  }
  return "healthy";
}
