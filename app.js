// Main Application Logic
class LearningPlatform {
  constructor() {
    this.currentTopic = null;
    this.completedTopics = this.loadProgress();
    this.init();
  }

  init() {
    this.renderTopicList();
    this.updateProgress();
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));

    // Handle browser back/forward
    window.addEventListener('popstate', (e) => {
      if (e.state && e.state.topicId) {
        this.loadTopic(e.state.topicId, false);
      }
    });
  }

  handleSearch(query) {
    const topicButtons = document.querySelectorAll('.topic-button');
    const lowerQuery = query.toLowerCase();

    topicButtons.forEach(button => {
      const topicText = button.textContent.toLowerCase();
      const topicItem = button.parentElement;

      if (topicText.includes(lowerQuery)) {
        topicItem.style.display = '';
      } else {
        topicItem.style.display = 'none';
      }
    });
  }

  renderTopicList() {
    const topicList = document.getElementById('topicList');
    topicList.innerHTML = '';

    Object.values(allTopics).forEach(topic => {
      const li = document.createElement('li');
      li.className = 'topic-item';

      const button = document.createElement('button');
      button.className = 'topic-button';
      if (this.completedTopics.includes(topic.id)) {
        button.classList.add('completed');
      }

      button.innerHTML = `
        <span class="topic-number">${topic.id}</span>
        <span>${topic.title}</span>
      `;

      button.addEventListener('click', () => this.loadTopic(topic.id));

      li.appendChild(button);
      topicList.appendChild(li);
    });
  }

  loadTopic(topicId, updateHistory = true) {
    const topic = allTopics[topicId];
    if (!topic) return;

    this.currentTopic = topicId;

    // Update active state
    document.querySelectorAll('.topic-button').forEach(btn => {
      btn.classList.remove('active');
    });
    document.querySelectorAll('.topic-button')[topicId - 1]?.classList.add('active');

    // Render topic content
    this.renderTopicContent(topic);

    // Update browser history
    if (updateHistory) {
      history.pushState({ topicId }, topic.title, `#topic-${topicId}`);
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  renderTopicContent(topic) {
    const mainContent = document.getElementById('mainContent');

    let html = `
      <div class="topic-header">
        <h1 class="topic-title">${topic.icon} ${topic.title}</h1>
        <p class="topic-subtitle">${topic.subtitle}</p>
      </div>
    `;

    // Render sections
    topic.sections.forEach((section, index) => {
      html += `
        <div class="section">
          <h2 class="section-title">${section.title}</h2>
      `;

      if (section.type === 'explanation') {
        html += `<div class="explanation">${this.formatContent(section.content)}</div>`;
      } else if (section.type === 'code') {
        html += `
          <div class="explanation">${this.formatContent(section.content)}</div>
        `;
      }

      html += `</div>`;
    });

    // Add video resources section if available
    if (videoResources[topic.id]) {
      html += this.renderVideoResources(topic.id);
    }

    // Add interactive demo section
    if (topic.interactive) {
      html += this.renderInteractiveDemo(topic);
    }

    // Add navigation buttons
    html += `
      <div class="button-group">
        ${topic.id > 1 ? `<button class="btn" onclick="app.loadTopic(${topic.id - 1})">← Previous Topic</button>` : ''}
        <button class="btn ${this.completedTopics.includes(topic.id) ? 'btn-success' : 'btn-primary'}" onclick="app.markComplete(${topic.id})">
          ${this.completedTopics.includes(topic.id) ? '✓ Completed' : 'Mark as Complete'}
        </button>
        ${topic.id < 21 ? `<button class="btn" onclick="app.loadTopic(${topic.id + 1})">Next Topic →</button>` : ''}
      </div>
    `;

    mainContent.innerHTML = html;

    // Initialize code blocks
    this.initializeCodeBlocks();
  }

  formatContent(content) {
    // Convert markdown-style formatting to HTML
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>')
      .replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
        return `
          <div class="code-block">
            <div class="code-header">
              <span class="code-language">${lang || 'code'}</span>
              <button class="copy-button" onclick="app.copyCode(this)">Copy</button>
            </div>
            <pre><code>${this.escapeHtml(code.trim())}</code></pre>
          </div>
        `;
      })
      .replace(/\n• /g, '\n<li>')
      .replace(/(<li>.*?)(?=\n|$)/g, '$1</li>')
      .replace(/(<li>[\s\S]*<\/li>)/g, '<ul class="styled-list">$1</ul>')
      .replace(/\n\n/g, '</p><p class="explanation">')
      .replace(/^(?!<)/, '<p class="explanation">')
      .replace(/(?!>)$/, '</p>');
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  initializeCodeBlocks() {
    // Add syntax highlighting classes (basic)
    document.querySelectorAll('code').forEach(block => {
      if (block.parentElement.tagName === 'PRE') {
        this.highlightCode(block);
      }
    });
  }

  highlightCode(block) {
    let html = block.innerHTML;

    // Basic syntax highlighting
    html = html
      .replace(/\b(function|const|let|var|if|else|for|while|return|async|await|class|import|export|from|default)\b/g, '<span style="color: var(--primary-light)">$1</span>')
      .replace(/\b(true|false|null|undefined)\b/g, '<span style="color: var(--accent)">$1</span>')
      .replace(/(['"`])(.*?)\1/g, '<span style="color: var(--success)">$1$2$1</span>')
      .replace(/\/\/(.*?)$/gm, '<span style="color: var(--text-tertiary)">// $1</span>')
      .replace(/\b(\d+)\b/g, '<span style="color: var(--warning)">$1</span>');

    block.innerHTML = html;
  }

  renderVideoResources(topicId) {
    const resources = videoResources[topicId];
    if (!resources) return '';

    let html = `
      <div class="section">
        <h2 class="section-title">📺 Video Tutorials</h2>
        <p class="explanation">Watch these curated tutorials to deepen your understanding:</p>
        <div class="video-list">
    `;

    resources.videos.forEach((video, index) => {
      html += `
        <div class="video-card">
          <div class="video-info">
            <div class="video-number">${index + 1}</div>
            <div class="video-details">
              <h4 class="video-title">${video.title}</h4>
              <span class="video-duration">⏱️ ${video.duration}</span>
            </div>
          </div>
          <a href="${video.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            ▶️ Watch
          </a>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;

    return html;
  }

  renderInteractiveDemo(topic) {
    const demo = topic.interactive;

    return `
      <div class="section">
        <h2 class="section-title">🎮 ${demo.title}</h2>
        <p class="explanation">${demo.description}</p>
        <div class="interactive-demo" id="demo-${topic.id}">
          ${this.getInteractiveContent(demo.type, topic.id)}
        </div>
      </div>
    `;
  }

  getInteractiveContent(type, topicId) {
    switch (type) {
      case 'api-simulator':
        return this.createAPISimulator();
      case 'comparison':
        return this.createSOAPRESTComparison();
      case 'debugger':
        return this.createDebuggerDemo();
      case 'load-balancer-sim':
        return this.createLoadBalancerSim();
      case 'code-editor':
        return this.createCodeEditor();
      case 'status-code-quiz':
        return this.createStatusCodeQuiz();
      default:
        return `
          <div class="demo-output">
            <p style="color: var(--text-secondary); text-align: center; padding: 2rem;">
              Interactive demo coming soon! 🚀<br><br>
              In the meantime, review the explanations and code examples above.
            </p>
          </div>
        `;
    }
  }

  createAPISimulator() {
    return `
      <div class="demo-controls">
        <button class="demo-button" onclick="app.simulateAPI('GET')">GET Request</button>
        <button class="demo-button" onclick="app.simulateAPI('POST')">POST Request</button>
        <button class="demo-button" onclick="app.simulateAPI('PUT')">PUT Request</button>
        <button class="demo-button" onclick="app.simulateAPI('DELETE')">DELETE Request</button>
      </div>
      <div class="demo-output" id="api-output">
        <p style="color: var(--text-tertiary)">Click a button to simulate an API request...</p>
      </div>
    `;
  }

  createSOAPRESTComparison() {
    return `
      <div class="card-grid">
        <div class="card">
          <div class="card-icon">📋</div>
          <h3 class="card-title">SOAP</h3>
          <ul class="styled-list">
            <li>XML format</li>
            <li>Strict protocol</li>
            <li>Built-in security</li>
            <li>More overhead</li>
            <li>Used in enterprise</li>
          </ul>
        </div>
        <div class="card">
          <div class="card-icon">⚡</div>
          <h3 class="card-title">REST</h3>
          <ul class="styled-list">
            <li>JSON format</li>
            <li>Flexible</li>
            <li>Lightweight</li>
            <li>Fast</li>
            <li>Used in modern apps</li>
          </ul>
        </div>
      </div>
    `;
  }

  createDebuggerDemo() {
    return `
      <div class="code-block">
        <div class="code-header">
          <span class="code-language">javascript</span>
        </div>
        <pre><code>// Bug: This component doesn't update
function Counter() {
  let count = 0;  // ❌ Bug here!
  
  function increment() {
    count = count + 1;
    console.log('Count:', count);
  }
  
  return (
    &lt;div&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={increment}&gt;+&lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
      </div>
      <div class="demo-controls">
        <button class="demo-button btn-primary" onclick="app.showDebugSolution()">Show Solution</button>
      </div>
      <div class="demo-output" id="debug-solution" style="display: none;">
        <h4 style="color: var(--success); margin-bottom: 1rem;">✓ Solution:</h4>
        <p style="color: var(--text-secondary); margin-bottom: 1rem;">
          The bug is that we're using a regular variable instead of React state. 
          React doesn't know to re-render when <code class="inline-code">count</code> changes.
        </p>
        <div class="code-block">
          <pre><code>// ✅ Fixed version
function Counter() {
  const [count, setCount] = useState(0);  // Use state!
  
  function increment() {
    setCount(count + 1);
  }
  
  return (
    &lt;div&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={increment}&gt;+&lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
        </div>
      </div>
    `;
  }

  createLoadBalancerSim() {
    return `
      <div class="visualization" id="lb-viz">
        <div style="text-align: center;">
          <div style="margin-bottom: 2rem;">
            <div style="display: inline-block; padding: 1rem 2rem; background: var(--primary); border-radius: var(--radius-md); margin-bottom: 1rem;">
              Load Balancer
            </div>
          </div>
          <div style="display: flex; justify-content: space-around; gap: 1rem;">
            <div style="padding: 1rem; background: var(--bg-secondary); border-radius: var(--radius-md); flex: 1;">
              Server 1<br>
              <span id="server1-count" style="color: var(--success)">0 requests</span>
            </div>
            <div style="padding: 1rem; background: var(--bg-secondary); border-radius: var(--radius-md); flex: 1;">
              Server 2<br>
              <span id="server2-count" style="color: var(--success)">0 requests</span>
            </div>
            <div style="padding: 1rem; background: var(--bg-secondary); border-radius: var(--radius-md); flex: 1;">
              Server 3<br>
              <span id="server3-count" style="color: var(--success)">0 requests</span>
            </div>
          </div>
        </div>
      </div>
      <div class="demo-controls">
        <button class="demo-button btn-primary" onclick="app.sendRequest()">Send Request</button>
        <button class="demo-button secondary" onclick="app.resetLoadBalancer()">Reset</button>
      </div>
    `;
  }

  createCodeEditor() {
    return `
      <div class="code-block">
        <div class="code-header">
          <span class="code-language">Try it yourself</span>
        </div>
        <textarea id="code-input" style="width: 100%; min-height: 200px; background: var(--bg-primary); color: var(--text-primary); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 1rem; font-family: 'Fira Code', monospace; font-size: 0.95rem;" placeholder="// Write your code here...
function twoSum(nums, target) {
  // Your solution here
}

console.log(twoSum([2, 7, 11, 15], 9));"></textarea>
      </div>
      <div class="demo-controls">
        <button class="demo-button btn-primary" onclick="app.runCode()">Run Code</button>
      </div>
      <div class="demo-output" id="code-output">
        <p style="color: var(--text-tertiary)">Output will appear here...</p>
      </div>
    `;
  }

  createStatusCodeQuiz() {
    return `
      <div class="card-grid">
        <div class="card" style="cursor: pointer;" onclick="app.showStatusCode(200)">
          <div class="card-icon">✅</div>
          <h3 class="card-title">200</h3>
          <p class="card-description">Click to see meaning</p>
        </div>
        <div class="card" style="cursor: pointer;" onclick="app.showStatusCode(401)">
          <div class="card-icon">🔒</div>
          <h3 class="card-title">401</h3>
          <p class="card-description">Click to see meaning</p>
        </div>
        <div class="card" style="cursor: pointer;" onclick="app.showStatusCode(404)">
          <div class="card-icon">❌</div>
          <h3 class="card-title">404</h3>
          <p class="card-description">Click to see meaning</p>
        </div>
        <div class="card" style="cursor: pointer;" onclick="app.showStatusCode(500)">
          <div class="card-icon">💥</div>
          <h3 class="card-title">500</h3>
          <p class="card-description">Click to see meaning</p>
        </div>
      </div>
      <div class="demo-output" id="status-output" style="margin-top: 1rem; display: none;">
        <p id="status-meaning"></p>
      </div>
    `;
  }

  // Interactive demo methods
  simulateAPI(method) {
    const output = document.getElementById('api-output');
    const examples = {
      GET: {
        request: 'GET /api/users/123',
        response: { id: 123, name: 'John Doe', email: 'john@example.com' },
        status: 200
      },
      POST: {
        request: 'POST /api/users',
        body: { name: 'Jane Doe', email: 'jane@example.com' },
        response: { id: 124, name: 'Jane Doe', email: 'jane@example.com' },
        status: 201
      },
      PUT: {
        request: 'PUT /api/users/123',
        body: { name: 'John Smith' },
        response: { id: 123, name: 'John Smith', email: 'john@example.com' },
        status: 200
      },
      DELETE: {
        request: 'DELETE /api/users/123',
        response: { message: 'User deleted successfully' },
        status: 200
      }
    };

    const example = examples[method];
    let html = `
      <div style="margin-bottom: 1rem;">
        <strong style="color: var(--primary)">Request:</strong><br>
        <code class="inline-code">${example.request}</code>
      </div>
    `;

    if (example.body) {
      html += `
        <div style="margin-bottom: 1rem;">
          <strong style="color: var(--secondary)">Body:</strong><br>
          <pre style="margin-top: 0.5rem;"><code>${JSON.stringify(example.body, null, 2)}</code></pre>
        </div>
      `;
    }

    html += `
      <div style="margin-bottom: 1rem;">
        <strong style="color: var(--success)">Response (${example.status}):</strong><br>
        <pre style="margin-top: 0.5rem;"><code>${JSON.stringify(example.response, null, 2)}</code></pre>
      </div>
    `;

    output.innerHTML = html;
  }

  showDebugSolution() {
    const solution = document.getElementById('debug-solution');
    solution.style.display = 'block';
  }

  sendRequest() {
    const servers = [1, 2, 3];
    const randomServer = servers[Math.floor(Math.random() * servers.length)];
    const countEl = document.getElementById(`server${randomServer}-count`);
    const currentCount = parseInt(countEl.textContent) || 0;
    countEl.textContent = `${currentCount + 1} requests`;
  }

  resetLoadBalancer() {
    [1, 2, 3].forEach(i => {
      document.getElementById(`server${i}-count`).textContent = '0 requests';
    });
  }

  runCode() {
    const code = document.getElementById('code-input').value;
    const output = document.getElementById('code-output');

    try {
      // Capture console.log
      const logs = [];
      const originalLog = console.log;
      console.log = (...args) => logs.push(args.join(' '));

      // Run code
      eval(code);

      // Restore console.log
      console.log = originalLog;

      output.innerHTML = `
        <strong style="color: var(--success)">✓ Output:</strong><br>
        <pre style="margin-top: 0.5rem;"><code>${logs.join('\n') || '(no output)'}</code></pre>
      `;
    } catch (error) {
      output.innerHTML = `
        <strong style="color: var(--error)">✗ Error:</strong><br>
        <pre style="margin-top: 0.5rem; color: var(--error);"><code>${error.message}</code></pre>
      `;
    }
  }

  showStatusCode(code) {
    const meanings = {
      200: '✅ OK - Request succeeded perfectly',
      401: '🔒 Unauthorized - Need to authenticate (missing or invalid token)',
      404: '❌ Not Found - The resource doesn\'t exist',
      500: '💥 Internal Server Error - Something broke on the server'
    };

    const output = document.getElementById('status-output');
    const meaning = document.getElementById('status-meaning');
    meaning.innerHTML = `<strong style="color: var(--primary)">${code}:</strong> ${meanings[code]}`;
    output.style.display = 'block';
  }

  copyCode(button) {
    const codeBlock = button.closest('.code-block');
    const code = codeBlock.querySelector('code').textContent;

    navigator.clipboard.writeText(code).then(() => {
      button.textContent = 'Copied!';
      setTimeout(() => {
        button.textContent = 'Copy';
      }, 2000);
    });
  }

  markComplete(topicId) {
    if (!this.completedTopics.includes(topicId)) {
      this.completedTopics.push(topicId);
      this.saveProgress();
      this.renderTopicList();
      this.updateProgress();

      // Update button
      const button = event.target;
      button.textContent = '✓ Completed';
      button.className = 'btn btn-success';

      // Show celebration
      this.showCelebration();
    }
  }

  showCelebration() {
    const celebration = document.createElement('div');
    celebration.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: var(--bg-glass);
      backdrop-filter: blur(20px);
      border: 2px solid var(--primary);
      border-radius: var(--radius-lg);
      padding: 2rem 3rem;
      text-align: center;
      z-index: 1000;
      animation: fadeIn 0.3s;
    `;
    celebration.innerHTML = `
      <div style="font-size: 3rem; margin-bottom: 1rem;">🎉</div>
      <div style="font-size: 1.5rem; font-weight: 600; color: var(--text-primary);">Great Job!</div>
      <div style="color: var(--text-secondary); margin-top: 0.5rem;">Topic completed</div>
    `;

    document.body.appendChild(celebration);

    setTimeout(() => {
      celebration.remove();
    }, 2000);
  }

  updateProgress() {
    const total = Object.keys(allTopics).length;
    const completed = this.completedTopics.length;
    const percent = Math.round((completed / total) * 100);

    document.getElementById('progressPercent').textContent = `${percent}%`;
    document.getElementById('progressFill').style.width = `${percent}%`;
  }

  saveProgress() {
    localStorage.setItem('completedTopics', JSON.stringify(this.completedTopics));
  }

  loadProgress() {
    const saved = localStorage.getItem('completedTopics');
    return saved ? JSON.parse(saved) : [];
  }
}

// Initialize app
let app;
window.addEventListener('DOMContentLoaded', () => {
  app = new LearningPlatform();

  // Load topic from URL hash
  const hash = window.location.hash;
  if (hash.startsWith('#topic-')) {
    const topicId = parseInt(hash.replace('#topic-', ''));
    app.loadTopic(topicId);
  }
});

// Make loadTopic available globally for HTML onclick
function loadTopic(id) {
  app.loadTopic(id);
}
