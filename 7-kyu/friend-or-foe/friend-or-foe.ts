export function friend(friends: string[]): string[] { 
  return friends.filter(person=> person.length===4)
}