import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql

    input createTokenOfPhoneInput {
      phone: Int
    }

    type Mutation {
      createTokenOfPhone(phone: Int)
    }
`;

const resolvers = {
  Mutation: {
    // 과제) 아래 API가 작동되도록 만들기 - [힌트: 1)phone.js, 2)req,res 관련부분 수정, 3)타입 작성하기]
    createTokenOfPhone: (_, args) => {
      const myphone = args.qqq;

      // 1. 휴대폰번호 자릿수 맞는지 확인하기(10~11자리)
      const isValid = checkPhone(myphone);
      if (isValid === false) return;

      // 2. 핸드폰 토큰 6자리 만들기
      const mytoken = getToken();

      // 3. 핸드폰번호에 토큰 전송하기
      sendTokenToSMS(myphone, mytoken);

      return "인증완료!!!";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true, // 모든 사이트 허용하고 싶을 때
});

startStandaloneServer(server); // 4000
