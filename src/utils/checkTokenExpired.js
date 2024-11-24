export default function checkTokenExpired(expireIn) {
  if (expireIn < new Date() / 1000) {
    return true;
  } else {
    console.log("EXPIRED");
    return false;
  }
}
