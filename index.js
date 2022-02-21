const { ApolloServer, gql } = require("apollo-server");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");
const fs = require("fs");

const data = JSON.parse(fs.readFileSync("data.json", "utf8"));

const users = data.users;
const events = data.events;
const locations = data.locations;
const participants = data.participants;

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    events: [Event]
  }

  type Event {
    id: ID!
    title: String!
    desc: String!
    date: String!
    from: String!
    to: String!
    location_id: ID!
    user_id: ID!
    user: User!
    location: Location!
    participants: [Participant]
  }

  type Location {
    id: ID!
    name: String!
    desc: String
    lat: Float!
    lng: Float!
  }

  type Participant {
    id: ID!
    user_id: ID!
    event_id: ID!
    user: User!
    event: Event!
  }

  type Query {
    User(id: ID!): User
    Users: [User]
    Event(id: ID!): Event
    Events: [Event]
    Location(id: ID!): Location
    Locations: [Location]
    Participant(id: ID!): Participant
    Participants: [Participant]
  }
`;

const resolvers = {
  Query: {
    User: (parent, args) => users.find((user) => user.id == args.id),
    Users: () => users,
    Event: (parent, args) => events.find((event) => event.id == args.id),
    Events: () => events,
    Location: (parent, args) =>
      locations.find((location) => location.id == args.id),
    Locations: () => locations,
    Participant: (parent, args) =>
      participants.find((participant) => participant.id == args.id),
    Participants: () => participants,
  },
  User: {
    events: (parent) => events.filter((event) => event.user_id == parent.id),
  },
  Event: {
    user: (parent) => users.find((user) => user.id == parent.user_id),
    location: (parent) =>
      locations.find((location) => location.id == parent.location_id),
    participants: (parent) =>
      participants.filter((participant) => participant.event_id == parent.id),
  },
  Participant: {
    user: (parent) => users.find((user) => user.id == parent.user_id),
    event: (parent) => events.find((event) => event.id == parent.event_id),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground({
      // options
    }),
  ],
});

server.listen().then(({ url }) => {
  console.log(`Apollo is flying 🚀 URL:${url}`);
});
