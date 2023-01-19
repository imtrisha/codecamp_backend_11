import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
    type Query {
        qqq: String
    }
`;

const resolvers = {
  Query: {
    fetchBoards: () => {
      // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
      const result = [
        {
          number: 1,
          writer: "철수",
          title: "제목입니다~~",
          contents: "내용이에요@@@",
        },
        {
          number: 1,
          writer: "영희",
          title: "영희입니다~~",
          contents: "영희에요@@@",
        },
        {
          number: 1,
          writer: "훈이",
          title: "훈이입니다~~",
          contents: "훈이에요@@@",
        },
      ];

      // 2. 꺼내온 결과 응답 주기
      return result;
    },
  },
};

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

startStandaloneServer(server); // 4000
