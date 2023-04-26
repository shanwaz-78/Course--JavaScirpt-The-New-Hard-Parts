function printHello() {
  console.log("Hello");
}
setTimeout(printHello, 1000);
console.log("Me First!");

function printHello1() {
  console.log("Hello");
}
function blockFor1Sec() {
  console.log("bock");
}
setTimeout(printHello1, 0);
blockFor1Sec();
console.log("Me First");

// Initial work.
async function postData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: "Suzy",
        company: "Amazon",
        designation: "Developer",
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Error in Fetching`);
    }
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

postData();
