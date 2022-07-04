export async function loginAuth(user:string, password:string) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "username": user,
    "password": password
  });

  var requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  try {
    const response = await fetch("https://fakestoreapi.com/auth/login", requestOptions)
    const data = await response.json();
    console.log(user)
    return [data.token, user]
  } catch (err) {
    return [err, 'error']
  }
}
