import { sendRequest } from "../SendRequest.js";

test("checks requests to api", () => {
  const requestURL = "http://localhost:5000/audience";
  sendRequest("GET", requestURL).then().catch();
});
