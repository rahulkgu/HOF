const urlRegex = /^(http:\/\/|https:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+$/;

const input = "https://example.com";

if (urlRegex.test(input)) {
    console.log("Input is a valid URL");
} else {
    console.log("Input is not a valid URL");
}