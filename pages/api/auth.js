export default async () => {
  let username = "mikelitoris34@icloud.com";
  let password = "bollocks69";
  let request = await fetch(
    `https://striveschool-api.herokuapp.com/api/account/login?username=${username}&password=${password}`,
    {
      method: "POST",
    }
  );
  let key = await request.json();
  let apiKey = "Bearer " + key.access_token;
  return apiKey;
};
