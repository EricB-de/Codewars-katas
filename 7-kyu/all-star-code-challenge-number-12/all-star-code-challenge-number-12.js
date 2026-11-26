function combineFriends(friends) {
  const result = {};
  
  for (const friend of friends) {
    const friendWithoutId = Object.create(Object.getPrototypeOf(friend));
    
    for (const key in friend) {
      if (key !== 'id') {
        friendWithoutId[key] = friend[key];
      }
    }
    
    result[friend.id] = friendWithoutId;
  }
  
  return result;
}