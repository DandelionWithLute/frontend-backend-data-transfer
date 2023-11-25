const getBtn = document.getElementById("get");
const postBtn = document.getElementById("post");
const input = document.getElementById("input");

const baseUrl = "http://localhost:8383";
const getInfo = async (e) => {
  e.preventDefault();

  const res = await fetch(baseUrl, {
    method: "GET",
    "Content-Type": "application/json",
  });
  console.log(res);
  const data = await res.json();
  input.value = data.info;
};

getBtn.addEventListener("click", getInfo);

const postInfo = async () => {};
