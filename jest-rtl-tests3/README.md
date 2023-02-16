<h1>Unit Tests with Jest <s>and React Testing Library</s> (pt 3)</h1>

<p>Jest
<li>https://jestjs.io/docs/getting-started</li></p>

<p>Jest Snapshots
<li>https://jestjs.io/docs/snapshot-testing </li></p>


<p><em>NOTE: create-react-app already installs and sets-up Jest but you will need to install react-test-renderer</em>
<br/><code>npm install --save-dev react-test-renderer</code></p>

<h2>Example Tests:</h2>

<p>Creating snapshots in Jest for testing React applications</p>
<li>https://circleci.com/blog/snapshot-testing-with-jest/</li>

<p><br/><em>NOTE: Jest snapshots only checks what is rendered to the DOM - <b>NOT</b> CSS changes. For most cases of CSS, you should use something like Cypress. (Exceptions https://stackoverflow.com/a/64639246)</em></p>
