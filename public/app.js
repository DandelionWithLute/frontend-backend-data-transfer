const getBtn = document.getElementById("get");
const postBtn = document.getElementById("post");
const input = document.getElementById("input");

const baseUrl = "http://localhost:8383";
const getInfo = async (e) => {
  e.preventDefault();

  const res = await fetch(baseUrl, { method: "GET" });
  console.log(res);
};

getBtn.addEventListener("click", getInfo);

const postInfo = async () => {};
