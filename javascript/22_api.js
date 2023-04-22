const request = new XMLHttpRequest();

request.open('GET', 'https://jsonplaceholder.typicode.com/users/1', true);
request.responseType = 'json';

request.onload = function() {
  const data = this.response;
  console.log(data);
};

request.send();
