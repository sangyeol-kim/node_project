const mongoose = require("mongoose");

module.exports = () => {
  //모듈이 실행될 때
  const connect = () => {
    if (process.env.NODE_ENV != "production") {
      mongoose.set("debug", true);
    }
    mongoose.connect(
      "mongodb://localhost:27017/postDB",
      { auth: { authSource: "admin" }, user: "", pass: "" },
      error => {
        if (error) {
          console.log("몽고디비 연결 에러", error);
        } else {
          console.log("몽고디비 연결 성공");
        }
      }
    );
  };
  connect();
  mongoose.connection.on("error", error => {
    console.error("몽고디비 연결 에러", error);
  });
  mongoose.connection.on("dicsonnected", error => {
    console.error("몽고디비 연결이 끊어졌습니다. 연결을 재시도합니다.");
    connect();
  });
};
