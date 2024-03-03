const urlRegex = /^https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

const input = "https://www.linkedin.com/in/example123";

if (urlRegex.test(input)) {
    console.log("Input is a valid LinkedIn profile URL");
} else {
    console.log("Input is not a valid LinkedIn profile URL");
}