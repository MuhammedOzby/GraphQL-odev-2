# Ödev 2

Bu ödevde göreviniz, tüm tiplerle alakalı oluşturma, güncelleme, silme ve tümünü silme Mutation'larını hazırlamak olacak.

## Gereksinimler

- Yeni bir `User` ekleyecek Mutation yazılmalıdır.
- Bir `User`'ı güncelleyecek olan Mutation yazılmalıdır.
- Bir `User`'ı silecek olan Mutation yazılmalıdır.
- Tüm `User`'ları silecek olan Mutation yazılmalıdır.
- Yukarıdaki maddeler `Event`, `Location` ve `Participant` için de uygulanmalıdır.

Günün sonunda aşağıdaki Mutation'lar çalışır vaziyette olmalıdır.

```graphQL
  mutation addUser
  mutation updateUser
  mutation deleteUser
  mutation deleteAllUsers

  mutation addEvent
  mutation updateEvent
  mutation deleteEvent
  mutation deleteAllEvents

  mutation addLocation
  mutation updateLocation
  mutation deleteLocation
  mutation deleteAllLocations

  mutation addParticipant
  mutation updateParticipant
  mutation deleteParticipant
  mutation deleteAllParticipants
```

***

## Yapılan testler

### User üzerindeki Mutation testleri

```graphQL
mutation addUser {
  addUser(data: { username: "asdasd", email: "fsdljhgsdfg" }) {
    id
  }
}

mutation updateUser {
  updateUser(data: { id: "7", email: "fsdljhgsdfg" }) {
    id
    username
    email
  }
}

mutation deleteUser {
  deleteUser(id: "7")  {
    id
    username
    email
  }
}

mutation deleteAllUsers {
  deleteAllUsers(interact: "i agree")
}
```

### Event üzerindeki Mutation testleri

```graphQL
mutation addEvent {
  addEvent(data: { title:"dskjfhksfjhg" }) {
    id
  }
}

mutation updateEvent {
  updateEvent(data: { id: "3", title:"asdasdasdsasa"}) {
    id
    title
  }
}

mutation deleteEvent {
  deleteEvent(id: "7")  {
    id
  }
}

mutation deleteAllEvents {
  deleteAllEvents(interact: "i agree")
}
```

### Location üzerindeki Mutation testleri

```graphQL
mutation addLocation {
  addLocation(data: { name:"dskjfhksfjhg" }) {
    id
  }
}

mutation updateLocation {
  updateLocation(data: { id: "293bf89e-7193-4aa6-8177-3f2990e1e060", name:"asdasdasdsasa"}) {
    id
    name
  }
}

mutation deleteLocation {
  deleteLocation(id: "293bf89e-7193-4aa6-8177-3f2990e1e060")  {
    id
  }
}

mutation deleteAllLocations {
  deleteAllLocations(interact: "i agree")
}
```

### Participant üzerindeki Mutation testleri

```graphQL
mutation addParticipant {
  addParticipant(data: { user_id:"3",event_id:"3" }) {
    id
  }
}

mutation updateParticipant {
  updateParticipant(data: { id: "11d44372-5d6d-4860-a99d-ad408468d4b4", user_id:"asdasdasdsasa"}) {
    id
    user_id
  }
}

mutation deleteParticipant {
  deleteParticipant(id: "11d44372-5d6d-4860-a99d-ad408468d4b4")  {
    id
    user_id
  }
}

mutation deleteAllParticipants {
  deleteAllParticipants(interact: "i agree")
}
```
