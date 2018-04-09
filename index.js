const api = "https://api.github.com/"
const fork = "aakjlsdfjklasjfdlkas/javascript-fetch-lab"

function getIssues() {
  // GET /repos/:owner/:repo/issues
  fetch (`${api}repos/${fork}/issues`, {
    method: 'get',
    headers: {
      Authorization: `token ${getToken()}`,
    }
  }).then(res => res.json().then(data => showIssues(data)));
}

function showIssues(issues) {
  issues.forEach(issue => {
    el = document.createElement('p')
    el.innerHTML = `Title: ${issue.title}<br>Body: ${issue.body}`
    document.getElementById("issues").append(el)
  })
}

function createIssue() {
  // POST /repos/:owner/:repo/issues
  return fetch (`${api}repos/${fork}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`,
    },
    body: JSON.stringify(
      {
        title: document.getElementById("title").value,
        body: document.getElementById("body").value
      }
    )
  }).then(res => getIssues());
}

function showResults(json) {
  el = document.createElement('p');
  el.innerHTML = `<a href=\"${json.html_url}\">link to repo</a>`;
  document.getElementById("results").append(el);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`${api}repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''

}
