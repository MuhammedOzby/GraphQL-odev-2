# Ödev 1

Kullanıcılar, etkinlikler, etkinliklerin yapılacağı konum ve etkinlik katılımcılarını size sağlanan veri seti üzerinden görüntüleyebilecek bir GraphQL sunucu oluşturmanız gerekiyor.

## Gereksinimler

- [Şuradaki](https://github.com/Kodluyoruz/taskforce/blob/main/graphql/odev-01/data.json) veri seti kullanılarak bir GraphQL sunucusu ayağa kaldırılmalıdır.
- Temel olarak `User`, `Event`, `Location` ve `Participant` tiplerini oluşturmalısınız. Bu tiplerle alakalı fieldları veri seti üzerinden görüntüleyebilirsiniz.
- Bir `User`'a ait bir veya birden fazla `Event` olabilir.
- Bir `Event`, bir `User` ile ilişkili olmalıdır.
- Bir `Event`, bir `Location` ile ilişkili olmalıdır.
- Bir `Event` birden fazla `Participant` ile ilişkili olmalıdır.
- Tüm tipler üzerinde tümünü listeleme ve id bazlı bir kaydı getirme Query'leri yazılmalıdır.

Günün sonunda aşağıdaki Query'ler çalışır vaziyette olmalıdır.

```graphQL
query users{}
query user(id: 1){}

query events{}
query event(id: 1){}
query events{
  id
  title
  user{
    id
    username
  }
  pariticipants{
    id
    username
  }
  location{
    id
    name
  }
}

query locations{}
query location(id: 1){}

query participants{}
query participant(id: 1){}
```

***

## Yapılan testler

Yukarıda belirtilen queryler şu şekilde çalıştırılmıştır:

```graphQL
query getAllUsers {
  Users {
    id
    username
    email
    events {
      title
      desc
    }
  }
}

query getUser {
  User(id: "1") {
    id
    username
    email
    events {
      title
      desc
    }
  }
}

query getAllEvents {
  Events {
    id
    title
    desc
    date
    from
    to
    location_id
    user_id
    user {
      id
      username
      email
      events {
        title
        desc
      }
    }
    location {
      id
      name
      desc
      lat
      lng
    }
    participants {
      id
      user {
        username
      }
    }
  }
}

query getEvent {
  Event(id: "1") {
    id
    title
    desc
    date
    from
    to
    location_id
    user_id
    user {
      id
      username
      email
      events {
        title
        desc
      }
    }
    location {
      id
      name
      desc
      lat
      lng
    }
    participants {
      id
      user {
        username
      }
    }
  }
}

query getAllLocations {
  Locations {
    name
    desc
  }
}
query getLocation {
  Location(id: "1") {
    name
    desc
  }
}

query getAllParticipants {
  Participants {
    id
    user {
      username
    }
    event {
      title
    }
  }
}
query getParticipant {
  Participant(id: "1") {
    id
    user {
      username
    }
    event {
      title
    }
  }
}

```
