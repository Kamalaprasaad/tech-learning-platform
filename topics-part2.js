// Topics 8-14: GenAI, JavaScript, Networking, Algorithms, APIs, Data Formats, Cloud
const topicsPart2 = {
    8: {
        id: 8,
        title: "Gen AI & Large Language Models",
        subtitle: "Understanding AI, Machine Learning, and LLMs",
        icon: "🤖",
        sections: [
            {
                title: "What is Gen AI?",
                content: `**Generative AI** creates new content (text, images, code, music):

Think of it like a **super-smart parrot** that:
• Has read millions of books
• Can write new stories in any style
• Understands context and meaning
• Can answer questions and solve problems

**Examples:**
• ChatGPT (text generation)
• DALL-E (image generation)
• GitHub Copilot (code generation)
• META's Llama models`,
                type: "explanation"
            },
            {
                title: "How Do LLMs Work?",
                content: `**Large Language Models (LLMs)** are trained on massive amounts of text:

**Training Process:**
1. Feed the model billions of words from books, websites, articles
2. Model learns patterns: "After 'Hello' usually comes a name"
3. Model learns grammar, facts, reasoning
4. Fine-tune for specific tasks

**How They Generate Text:**
1. You give a prompt: "Write a poem about cats"
2. Model predicts next word based on patterns
3. Keeps predicting word by word
4. Produces coherent text

**At META:**
• Llama 2, Llama 3 (open-source LLMs)
• Used for content moderation
• Powering META AI assistant
• Business messaging automation`,
                type: "explanation"
            },
            {
                title: "Machine Learning Basics",
                content: `**Machine Learning** = Teaching computers to learn from data

**Three Types:**

**1. Supervised Learning** (Learning with a teacher)
• Give labeled examples: "This is a cat", "This is a dog"
• Model learns to classify new images
• Example: Email spam detection

**2. Unsupervised Learning** (Learning without labels)
• Give unlabeled data
• Model finds patterns on its own
• Example: Customer segmentation

**3. Reinforcement Learning** (Learning by trial and error)
• Model tries actions and gets rewards/penalties
• Learns optimal strategy
• Example: Game-playing AI`,
                type: "explanation"
            },
            {
                title: "Agentic Automation",
                content: `**AI Agents** can perform tasks autonomously:

**Traditional Automation:**
• Follow fixed rules: "If X, then Y"
• Can't handle unexpected situations

**Agentic AI:**
• Makes decisions based on context
• Adapts to new situations
• Can use tools and APIs
• Plans multi-step tasks

**Example: Customer Support Agent**
1. Receives customer question
2. Searches knowledge base
3. If not found, queries database
4. Generates personalized response
5. Escalates to human if needed

**At META:** Used for automated partner support, content moderation, ad optimization`,
                type: "explanation"
            }
        ],
        interactive: {
            type: "llm-demo",
            title: "Try a Simple LLM",
            description: "See how language models predict the next word"
        }
    },

    9: {
        id: 9,
        title: "JavaScript & React Problems",
        subtitle: "LeetCode-Style Problems for META Interviews",
        icon: "⚛️",
        sections: [
            {
                title: "Problem 1: Two Sum (Easy)",
                content: `**Problem:** Given an array of numbers and a target, find two numbers that add up to the target.

**Example:**
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1] (because nums[0] + nums[1] = 2 + 7 = 9)

**Solution Approach:**
1. Use a hash map to store numbers we've seen
2. For each number, check if (target - number) exists in map
3. If yes, we found our pair!

**Code:**
\`\`\`javascript
function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return [];
}
\`\`\`

**Time Complexity:** O(n) - We loop through once
**Space Complexity:** O(n) - We store n items in the map`,
                type: "code"
            },
            {
                title: "Problem 2: Valid Parentheses (Easy)",
                content: `**Problem:** Check if a string of brackets is valid.

**Example:**
Input: "({[]})" → Output: true
Input: "({[})" → Output: false

**Solution Approach:**
1. Use a stack
2. For opening brackets: push to stack
3. For closing brackets: check if it matches top of stack
4. At the end, stack should be empty

**Code:**
\`\`\`javascript
function isValid(s) {
  const stack = [];
  const pairs = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  
  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      if (stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}
\`\`\`

**Time Complexity:** O(n)
**Space Complexity:** O(n)`,
                type: "code"
            },
            {
                title: "Problem 3: Reverse a Linked List (Easy)",
                content: `**Problem:** Reverse a singly linked list.

**Example:**
Input: 1 → 2 → 3 → 4 → 5
Output: 5 → 4 → 3 → 2 → 1

**Solution Approach:**
1. Keep track of previous, current, and next nodes
2. Reverse the pointer direction
3. Move forward

**Code:**
\`\`\`javascript
function reverseList(head) {
  let prev = null;
  let current = head;
  
  while (current !== null) {
    let next = current.next;  // Save next
    current.next = prev;       // Reverse pointer
    prev = current;            // Move prev forward
    current = next;            // Move current forward
  }
  
  return prev;  // New head
}
\`\`\`

**Visualization:**
null ← 1 ← 2 ← 3 ← 4 ← 5

**Time Complexity:** O(n)
**Space Complexity:** O(1)`,
                type: "code"
            },
            {
                title: "React Component Problem",
                content: `**Problem:** Create a counter component with increment/decrement buttons.

**Code:**
\`\`\`javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  
  return (
    <div className="counter">
      <h2>Count: {count}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;
\`\`\`

**Key Concepts:**
• useState hook for state management
• Event handlers (onClick)
• Component re-rendering when state changes`,
                type: "code"
            }
        ],
        interactive: {
            type: "code-editor",
            title: "Practice Coding Problems",
            description: "Try solving these problems yourself"
        }
    },

    10: {
        id: 10,
        title: "Network Protocols",
        subtitle: "HTTP, HTTPS, TCP/IP, UDP and Network Layers",
        icon: "🌐",
        sections: [
            {
                title: "HTTP vs HTTPS",
                content: `**HTTP (HyperText Transfer Protocol):**
• Sends data in **plain text**
• Anyone can read it (like sending a postcard)
• Not secure
• Port 80

**HTTPS (HTTP Secure):**
• Sends data **encrypted**
• Only sender and receiver can read it (like a locked box)
• Secure with SSL/TLS certificates
• Port 443

**Why HTTPS is Preferred:**
• Protects passwords and credit cards
• Prevents man-in-the-middle attacks
• Google ranks HTTPS sites higher
• Required for modern web features

**At META:** All APIs use HTTPS for security!`,
                type: "explanation"
            },
            {
                title: "TCP/IP Protocol",
                content: `**TCP (Transmission Control Protocol):**
• **Reliable** - Guarantees data arrives
• **Ordered** - Data arrives in correct order
• **Error-checked** - Detects and fixes errors

**How TCP Works:**
1. **Handshake** - Establish connection (SYN, SYN-ACK, ACK)
2. **Data Transfer** - Send data in packets
3. **Acknowledgment** - Receiver confirms receipt
4. **Retransmission** - Resend if packet lost
5. **Close** - Terminate connection

**Use Cases:**
• Web browsing (HTTP/HTTPS)
• Email (SMTP, IMAP)
• File transfer (FTP)
• Anything that needs reliability`,
                type: "explanation"
            },
            {
                title: "UDP Protocol",
                content: `**UDP (User Datagram Protocol):**
• **Fast** - No handshake overhead
• **Unreliable** - Doesn't guarantee delivery
• **No ordering** - Packets may arrive out of order

**When to Use UDP:**
• **Live video streaming** - Speed > reliability
• **Online gaming** - Low latency critical
• **VoIP calls** - Real-time audio
• **DNS queries** - Small, quick requests

**TCP vs UDP:**
TCP = Registered mail (slow but guaranteed)
UDP = Throwing a ball (fast but might miss)

**At META:**
• Video calls use UDP (speed matters)
• Messaging uses TCP (reliability matters)`,
                type: "explanation"
            },
            {
                title: "Network Layers (OSI Model)",
                content: `**The 7 Layers (simplified):**

**Layer 7 - Application** (What you see)
• HTTP, HTTPS, FTP, SMTP
• User-facing protocols

**Layer 4 - Transport** (How data moves)
• TCP, UDP
• Ensures data delivery

**Layer 3 - Network** (Where to send)
• IP addresses
• Routing between networks

**Layer 2 - Data Link** (Local delivery)
• MAC addresses
• Switches

**Layer 1 - Physical** (The wire)
• Cables, WiFi signals
• Actual transmission

**Remember:** "All People Seem To Need Data Processing"
(Application, Presentation, Session, Transport, Network, Data Link, Physical)`,
                type: "explanation"
            }
        ],
        interactive: {
            type: "network-visualizer",
            title: "Network Protocol Simulator",
            description: "See how data travels through network layers"
        }
    },

    11: {
        id: 11,
        title: "Algorithms & Data Structures",
        subtitle: "Sorting, Searching, and System Design Basics",
        icon: "📊",
        sections: [
            {
                title: "Bubble Sort (Easy to Understand)",
                content: `**How it works:** Compare adjacent items and swap if needed.

**Example:** Sort [5, 2, 8, 1, 9]

Pass 1: [2, 5, 1, 8, 9] (5 and 2 swap, 8 and 1 swap)
Pass 2: [2, 1, 5, 8, 9] (5 and 1 swap)
Pass 3: [1, 2, 5, 8, 9] (2 and 1 swap)
Done!

**Code:**
\`\`\`javascript
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
\`\`\`

**Time Complexity:** O(n²) - Slow for large arrays
**Space Complexity:** O(1) - Sorts in place`,
                type: "code"
            },
            {
                title: "Binary Search (Fast Searching)",
                content: `**How it works:** Divide and conquer on sorted arrays.

**Example:** Find 7 in [1, 3, 5, 7, 9, 11, 13]

Step 1: Check middle (7) → Found it!

**Example 2:** Find 11
Step 1: Check middle (7) → 11 > 7, search right half
Step 2: Check middle of [9, 11, 13] → (11) → Found!

**Code:**
\`\`\`javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;  // Found!
    } else if (arr[mid] < target) {
      left = mid + 1;  // Search right
    } else {
      right = mid - 1;  // Search left
    }
  }
  
  return -1;  // Not found
}
\`\`\`

**Time Complexity:** O(log n) - Very fast!
**Space Complexity:** O(1)`,
                type: "code"
            },
            {
                title: "Quick Sort (Most Used)",
                content: `**How it works:** Pick a pivot, partition around it, recurse.

**Steps:**
1. Choose a pivot (usually last element)
2. Move smaller elements left, larger right
3. Recursively sort left and right parts

**Code:**
\`\`\`javascript
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  
  return [...quickSort(left), pivot, ...quickSort(right)];
}
\`\`\`

**Time Complexity:** O(n log n) average
**Space Complexity:** O(log n)
**Used by:** JavaScript's Array.sort()`,
                type: "code"
            },
            {
                title: "Common Data Structures",
                content: `**Array:** Fixed-size, indexed access
• Access: O(1)
• Search: O(n)
• Insert/Delete: O(n)

**Hash Map (Object/Map):** Key-value pairs
• Access: O(1)
• Insert: O(1)
• Delete: O(1)
• Perfect for lookups!

**Stack:** Last In, First Out (LIFO)
• Like a stack of plates
• Push/Pop: O(1)
• Used for: Undo functionality, parsing

**Queue:** First In, First Out (FIFO)
• Like a line at a store
• Enqueue/Dequeue: O(1)
• Used for: Task scheduling, BFS

**Tree:** Hierarchical structure
• Binary Search Tree
• Used for: File systems, DOM`,
                type: "explanation"
            }
        ],
        interactive: {
            type: "algorithm-visualizer",
            title: "Algorithm Visualizer",
            description: "Watch sorting algorithms in action"
        }
    },

    12: {
        id: 12,
        title: "HTTP Status Codes",
        subtitle: "Understanding API Response Codes",
        icon: "🔢",
        sections: [
            {
                title: "Status Code Categories",
                content: `**1xx - Informational** (Rare)
• 100 Continue - Keep going

**2xx - Success** ✅
• 200 OK - Request succeeded
• 201 Created - New resource created
• 204 No Content - Success but no data to return

**3xx - Redirection** ↪️
• 301 Moved Permanently - Resource moved
• 302 Found - Temporary redirect
• 304 Not Modified - Use cached version

**4xx - Client Errors** ❌ (Your fault)
• 400 Bad Request - Invalid request
• 401 Unauthorized - Need authentication
• 403 Forbidden - Authenticated but no permission
• 404 Not Found - Resource doesn't exist
• 429 Too Many Requests - Rate limited

**5xx - Server Errors** 💥 (Server's fault)
• 500 Internal Server Error - Something broke
• 502 Bad Gateway - Upstream server error
• 503 Service Unavailable - Server overloaded
• 504 Gateway Timeout - Upstream timeout`,
                type: "explanation"
            },
            {
                title: "Most Important for META BSE",
                content: `**200 OK**
• Everything worked perfectly
• Most common success response

**400 Bad Request**
• Partner sent invalid data
• Missing required parameters
• Malformed JSON

**401 Unauthorized**
• Missing or invalid access token
• Token expired
• Need to re-authenticate

**403 Forbidden**
• Valid token but insufficient permissions
• API endpoint not enabled for this app
• Rate limit exceeded (sometimes)

**404 Not Found**
• Endpoint doesn't exist
• Resource ID invalid
• Typo in URL

**429 Too Many Requests**
• Exceeded rate limit
• Need to slow down requests
• Implement exponential backoff

**500 Internal Server Error**
• META's servers had an issue
• Not the partner's fault
• Escalate to internal teams

**502 Bad Gateway**
• Load balancer can't reach backend
• Service deployment in progress
• Network issue

**503 Service Unavailable**
• Service temporarily down
• Maintenance mode
• Retry with backoff

**504 Gateway Timeout**
• Request took too long
• Upstream service slow
• May need to optimize query`,
                type: "explanation"
            },
            {
                title: "How to Handle Status Codes",
                content: `**In Your Code:**
\`\`\`javascript
async function callAPI(url) {
  try {
    const response = await fetch(url);
    
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else if (response.status === 401) {
      // Refresh token and retry
      await refreshToken();
      return callAPI(url);
    } else if (response.status === 429) {
      // Rate limited - wait and retry
      await sleep(5000);
      return callAPI(url);
    } else if (response.status >= 500) {
      // Server error - retry with backoff
      await sleep(10000);
      return callAPI(url);
    } else {
      throw new Error(\`API Error: \${response.status}\`);
    }
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
}
\`\`\`

**As BSE:**
• 4xx → Help partner fix their request
• 5xx → Escalate to META engineering
• 429 → Advise on rate limiting best practices`,
                type: "code"
            }
        ],
        interactive: {
            type: "status-code-quiz",
            title: "Status Code Quiz",
            description: "Test your knowledge of HTTP status codes"
        }
    },

    13: {
        id: 13,
        title: "Data Exchange Formats",
        subtitle: "JSON, XML, Protocol Buffers, and More",
        icon: "📋",
        sections: [
            {
                title: "JSON (Most Common)",
                content: `**JSON (JavaScript Object Notation):**
• Human-readable
• Lightweight
• Native to JavaScript
• Used by most modern APIs

**Example:**
\`\`\`json
{
  "name": "John Doe",
  "age": 30,
  "email": "john@example.com",
  "skills": ["JavaScript", "React", "Node.js"],
  "active": true
}
\`\`\`

**Pros:**
• Easy to read and write
• Widely supported
• Small file size

**Cons:**
• No comments allowed
• No date type (use strings)
• Less efficient than binary formats`,
                type: "code"
            },
            {
                title: "XML (Legacy Systems)",
                content: `**XML (eXtensible Markup Language):**
• More verbose than JSON
• Used in SOAP APIs
• Common in enterprise systems

**Example:**
\`\`\`xml
<?xml version="1.0"?>
<user>
  <name>John Doe</name>
  <age>30</age>
  <email>john@example.com</email>
  <skills>
    <skill>JavaScript</skill>
    <skill>React</skill>
    <skill>Node.js</skill>
  </skills>
  <active>true</active>
</user>
\`\`\`

**Pros:**
• Self-documenting
• Supports attributes
• Schema validation (XSD)

**Cons:**
• Very verbose
• Larger file size
• Slower to parse`,
                type: "code"
            },
            {
                title: "Protocol Buffers (High Performance)",
                content: `**Protocol Buffers (Protobuf):**
• Binary format (not human-readable)
• Created by Google
• Very fast and compact
• Used internally at META

**Definition (.proto file):**
\`\`\`protobuf
message User {
  string name = 1;
  int32 age = 2;
  string email = 3;
  repeated string skills = 4;
  bool active = 5;
}
\`\`\`

**Pros:**
• 3-10x smaller than JSON
• Faster serialization/deserialization
• Strongly typed
• Backward compatible

**Cons:**
• Not human-readable
• Requires schema definition
• More complex setup`,
                type: "code"
            },
            {
                title: "When to Use Each Format",
                content: `**Use JSON when:**
• Building REST APIs
• Web applications
• Human readability matters
• Debugging is important

**Use XML when:**
• Working with legacy systems
• SOAP APIs required
• Complex document structure
• Schema validation needed

**Use Protocol Buffers when:**
• High performance critical
• Large data volumes
• Internal microservices
• Mobile apps (reduce bandwidth)

**Use CSV when:**
• Exporting data
• Spreadsheet compatibility
• Simple tabular data

**At META:**
• External APIs → JSON (REST) or GraphQL
• Internal services → Thrift (similar to Protobuf)
• Data exports → CSV or JSON`,
                type: "explanation"
            }
        ],
        interactive: {
            type: "format-converter",
            title: "Data Format Converter",
            description: "Convert between JSON, XML, and other formats"
        }
    },

    14: {
        id: 14,
        title: "Public Cloud Platforms",
        subtitle: "AWS, Azure, and GCP Essentials",
        icon: "☁️",
        sections: [
            {
                title: "Why Cloud Computing?",
                content: `**Traditional (On-Premise):**
• Buy your own servers
• Maintain hardware
• Pay upfront costs
• Limited scalability

**Cloud Computing:**
• Rent servers from providers
• No hardware maintenance
• Pay as you go
• Infinite scalability

**Benefits:**
• Deploy globally in minutes
• Scale up/down automatically
• Only pay for what you use
• Focus on code, not infrastructure`,
                type: "explanation"
            },
            {
                title: "AWS (Amazon Web Services)",
                content: `**Most Popular Cloud Platform (32% market share)**

**Core Services:**

**EC2 (Elastic Compute Cloud)**
• Virtual servers in the cloud
• Choose CPU, RAM, storage
• Like renting a computer

**S3 (Simple Storage Service)**
• Object storage (files, images, videos)
• Unlimited storage
• 99.999999999% durability

**RDS (Relational Database Service)**
• Managed databases (MySQL, PostgreSQL)
• Automatic backups
• Easy scaling

**Lambda**
• Serverless functions
• Run code without managing servers
• Pay per execution

**API Gateway**
• Create and manage APIs
• Handle authentication
• Rate limiting

**CloudWatch**
• Monitoring and logging
• Set up alerts
• Track metrics

**At META:** Partners often deploy on AWS to integrate with META APIs`,
                type: "explanation"
            },
            {
                title: "Azure (Microsoft)",
                content: `**Second Largest (23% market share)**

**Core Services:**

**Virtual Machines**
• Similar to AWS EC2
• Windows Server optimized

**Blob Storage**
• Similar to AWS S3
• Object storage

**Azure SQL Database**
• Managed SQL Server
• Built-in intelligence

**Azure Functions**
• Serverless compute
• Similar to AWS Lambda

**API Management**
• Create, publish, manage APIs
• Developer portal

**Application Insights**
• Application monitoring
• Performance tracking

**Best For:**
• Microsoft-heavy environments
• .NET applications
• Enterprise customers`,
                type: "explanation"
            },
            {
                title: "GCP (Google Cloud Platform)",
                content: `**Third Largest (11% market share)**

**Core Services:**

**Compute Engine**
• Virtual machines
• Similar to EC2

**Cloud Storage**
• Object storage
• Similar to S3

**Cloud SQL**
• Managed MySQL/PostgreSQL
• Automatic replication

**Cloud Functions**
• Serverless functions
• Event-driven

**Cloud Run**
• Run containers serverless
• Auto-scaling

**BigQuery**
• Data warehouse
• Analyze massive datasets
• SQL queries on petabytes

**Best For:**
• Data analytics
• Machine learning
• Kubernetes (GKE is excellent)

**At META:** Some partners use GCP for ML workloads`,
                type: "explanation"
            },
            {
                title: "Which Cloud to Learn?",
                content: `**For META BSE Role:**

**Start with AWS** (Most common)
• Largest market share
• Most partners use it
• Extensive documentation
• Lots of learning resources

**Key AWS Services to Know:**
1. EC2 - Virtual servers
2. S3 - Object storage
3. RDS - Databases
4. Lambda - Serverless
5. API Gateway - API management
6. CloudWatch - Monitoring
7. IAM - Access management
8. VPC - Networking
9. Load Balancers (ALB/NLB)
10. CloudFront - CDN

**Hands-On Practice:**
• Create free AWS account
• Deploy a simple web app
• Set up a database
• Create an API with Lambda
• Monitor with CloudWatch

**Certification (Optional but Helpful):**
• AWS Certified Solutions Architect - Associate
• Shows you understand cloud architecture`,
                type: "explanation"
            }
        ],
        interactive: {
            type: "cloud-architecture",
            title: "Cloud Architecture Builder",
            description: "Design a cloud infrastructure"
        }
    }
};
