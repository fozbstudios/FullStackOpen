
```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server

    activate user
    user->>browser: types 'SDTest'
    user->>browser: clicks 'SaveButton'
    activate browser
    Note right of browser: 1. The new note is appended to the notes array<br/> 2.the notes array is re-rendered
    browser->>server: POST(url:https://studies.cs.helsinki.fi/exampleapp/new_note, Payload[JSON]:{content: "SDTest2", date: "2024-04-21T22:16:14.399Z"})
    Note right of browser: The post response is logged to the console.

    Note right of server: Our post is processed by backend code<br/> we cannot see this code in the console because the backend code is not sent to us.<br/> we don't see any results of this backend processing,<br/> or any notes which may have been submitted by other users since we visited the page<br/> This is more performant <br/>but it may not be desirable to not see other users submissions when we submit.<br/> There are better ways to do this than a whole page reload though</br>
  ```
