import express from "express";

const app = express();
app.use(express.json());
app.get("/boards", (req, res) => {
  // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
  const result = [
    {
      number: 1,
      writer: "철수",
      title: "제목입니다~~",
      content: "내용이에요!!!",
    },
    {
      number: 1,
      writer: "영희",
      title: "영희입니다~~",
      content: "영희에요!!!",
    },
    {
      number: 1,
      writer: "훈이",
      title: "훈이입니다~~",
      content: "훈이에요!!!",
    },
  ];
  res.send(result);
});

app.post("/boards", (req, res) => {
  // 1. 브라우저에서 보내준 데이터 확인하기
  console.log(req);
  console.log("===========================================");
  console.log(req.body);
  // 2. DB에 접속 후, 데이터를 저장 =>

  // 3. DB에 저장된 결과를 브라우저에 응답(response) 주기
  res.send("게시물 등록에 성공하였습니다.");
});

app.listen(3000, () => {
  console.log("백엔드 서버가 켜졌어요!!!");
});
