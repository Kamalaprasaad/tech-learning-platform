// Topics 15-21: SQL, Databases, Web Servers, Large Scale Systems, HACK/React, Project Management, Technical Communication
const topicsPart3 = {
    15: {
        id: 15,
        title: "SQL & Database Querying",
        subtitle: "Working with Relational Databases",
        icon: "🗄️",
        sections: [
            {
                title: "What is SQL?",
                content: `**SQL (Structured Query Language)** = Language for talking to databases

Think of a database like an **Excel spreadsheet**:
• Tables = Sheets
• Rows = Records
• Columns = Fields

**Example Table: users**
| id | name | email | age |
|----|------|-------|-----|
| 1 | John | john@example.com | 30 |
| 2 | Jane | jane@example.com | 25 |
| 3 | Bob | bob@example.com | 35 |`,
                type: "explanation"
            },
            {
                title: "Basic SQL Queries",
                content: `**SELECT - Read data**
\`\`\`sql
-- Get all users
SELECT * FROM users;

-- Get specific columns
SELECT name, email FROM users;

-- Filter with WHERE
SELECT * FROM users WHERE age > 25;

-- Sort results
SELECT * FROM users ORDER BY age DESC;

-- Limit results
SELECT * FROM users LIMIT 10;
\`\`\`

**INSERT - Create data**
\`\`\`sql
INSERT INTO users (name, email, age)
VALUES ('Alice', 'alice@example.com', 28);
\`\`\`

**UPDATE - Modify data**
\`\`\`sql
UPDATE users
SET age = 31
WHERE id = 1;
\`\`\`

**DELETE - Remove data**
\`\`\`sql
DELETE FROM users
WHERE id = 3;
\`\`\``,
                type: "code"
            },
            {
                title: "Advanced SQL Queries",
                content: `**JOIN - Combine tables**
\`\`\`sql
-- Get users with their orders
SELECT users.name, orders.product
FROM users
JOIN orders ON users.id = orders.user_id;
\`\`\`

**GROUP BY - Aggregate data**
\`\`\`sql
-- Count users by age
SELECT age, COUNT(*) as count
FROM users
GROUP BY age;
\`\`\`

**HAVING - Filter groups**
\`\`\`sql
-- Ages with more than 5 users
SELECT age, COUNT(*) as count
FROM users
GROUP BY age
HAVING COUNT(*) > 5;
\`\`\`

**Subqueries**
\`\`\`sql
-- Users older than average
SELECT name FROM users
WHERE age > (SELECT AVG(age) FROM users);
\`\`\``,
                type: "code"
            },
            {
                title: "Database Optimization",
                content: `**Indexes - Speed up queries**
\`\`\`sql
-- Create index on email for faster lookups
CREATE INDEX idx_email ON users(email);
\`\`\`

**Why Indexes Matter:**
• Without index: Database scans every row (slow)
• With index: Database jumps directly to row (fast)
• Like a book index vs reading every page

**When to Use Indexes:**
• Columns in WHERE clauses
• Columns in JOIN conditions
• Columns used for sorting

**Trade-offs:**
• Faster reads
• Slower writes (index must be updated)
• More storage space

**At META:**
• Billions of rows in tables
• Indexes are critical for performance
• Query optimization is essential`,
                type: "explanation"
            }
        ],
        interactive: {
            type: "sql-playground",
            title: "SQL Playground",
            description: "Practice SQL queries on sample data"
        }
    },

    16: {
        id: 16,
        title: "Relational Databases",
        subtitle: "Storage Systems and Database Design",
        icon: "💾",
        sections: [
            {
                title: "What is a Relational Database?",
                content: `**Relational Database** = Data organized in tables with relationships

**Key Concepts:**

**Tables (Relations)**
• Store data in rows and columns
• Each table represents an entity (users, orders, products)

**Primary Key**
• Unique identifier for each row
• Usually an ID column
• No duplicates allowed

**Foreign Key**
• Links to another table's primary key
• Creates relationships between tables

**Example:**
\`\`\`
users table:
id (PK) | name | email

orders table:
id (PK) | user_id (FK) | product | price
\`\`\``,
                type: "explanation"
            },
            {
                title: "Database Relationships",
                content: `**One-to-Many**
• One user has many orders
• Most common relationship

**Many-to-Many**
• Students and courses
• Requires junction table

**One-to-One**
• User and user profile
• Less common

**Example Schema:**
\`\`\`sql
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  product VARCHAR(100),
  price DECIMAL(10, 2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
\`\`\``,
                type: "code"
            },
            {
                title: "Popular Relational Databases",
                content: `**MySQL**
• Most popular open-source database
• Used by Facebook (early days)
• Good for web applications
• Easy to learn

**PostgreSQL**
• Advanced features
• Better for complex queries
• JSONB support
• Strong data integrity

**SQL Server (Microsoft)**
• Enterprise-grade
• Windows integration
• Used in large corporations

**Oracle Database**
• Most powerful
• Very expensive
• Used by banks, governments

**At META:**
• MySQL (historically)
• TAO (custom distributed database)
• Cassandra (NoSQL for some use cases)`,
                type: "explanation"
            },
            {
                title: "ACID Properties",
                content: `**ACID** = Guarantees for database transactions

**Atomicity**
• All or nothing
• If one part fails, everything rolls back
• Example: Bank transfer (debit + credit both happen or neither)

**Consistency**
• Database stays in valid state
• All rules and constraints enforced
• Example: Foreign keys must reference existing rows

**Isolation**
• Concurrent transactions don't interfere
• Each transaction sees consistent data
• Example: Two people booking the same seat

**Durability**
• Once committed, data is permanent
• Survives crashes and power failures
• Example: Confirmed order stays confirmed

**Why ACID Matters:**
• Critical for financial systems
• Ensures data integrity
• Prevents corruption

**At META:**
• ACID for critical data (payments, user accounts)
• Eventual consistency for less critical data (likes, views)`,
                type: "explanation"
            }
        ],
        interactive: {
            type: "database-designer",
            title: "Database Schema Designer",
            description: "Design a database schema with relationships"
        }
    },

    17: {
        id: 17,
        title: "Web Servers",
        subtitle: "How Web Servers Handle Requests",
        icon: "🖥️",
        sections: [
            {
                title: "What is a Web Server?",
                content: `**Web Server** = Software that serves web pages and handles HTTP requests

Think of it like a **restaurant**:
• Client (browser) = Customer
• Web Server = Waiter
• Application = Kitchen
• Database = Pantry

**Popular Web Servers:**
• **Apache** - Most popular, very flexible
• **Nginx** - Fast, great for static files
• **IIS** - Microsoft's web server
• **Node.js** - JavaScript-based server`,
                type: "explanation"
            },
            {
                title: "Request-Response Flow",
                content: `**The Complete Flow:**

1. **User types URL** in browser
   → example.com/products

2. **DNS Lookup**
   → Converts domain to IP address (192.168.1.1)

3. **Browser sends HTTP request**
   → GET /products HTTP/1.1

4. **Request hits Load Balancer**
   → Chooses which server to use

5. **Web Server receives request**
   → Apache/Nginx processes it

6. **Web Server routes to Application**
   → PHP/Node.js/Python code runs

7. **Application queries Database**
   → SELECT * FROM products

8. **Database returns data**
   → Product list

9. **Application generates HTML**
   → Renders template with data

10. **Web Server sends response**
    → HTTP 200 OK + HTML

11. **Browser renders page**
    → User sees products

**At META:** This happens billions of times per day!`,
                type: "explanation"
            },
            {
                title: "Web Server Configuration",
                content: `**Nginx Configuration Example:**
\`\`\`nginx
server {
  listen 80;
  server_name example.com;
  
  # Redirect HTTP to HTTPS
  return 301 https://$server_name$request_uri;
}

server {
  listen 443 ssl;
  server_name example.com;
  
  # SSL certificates
  ssl_certificate /path/to/cert.pem;
  ssl_certificate_key /path/to/key.pem;
  
  # Serve static files
  location /static/ {
    root /var/www/html;
    expires 30d;
  }
  
  # Proxy to application server
  location / {
    proxy_pass http://localhost:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
  }
}
\`\`\`

**Key Concepts:**
• Listen on ports (80 for HTTP, 443 for HTTPS)
• Serve static files directly (fast)
• Proxy dynamic requests to app server
• Set headers for security and caching`,
                type: "code"
            },
            {
                title: "Web Server Performance",
                content: `**Optimization Techniques:**

**1. Caching**
• Store frequently accessed data in memory
• Reduce database queries
• Use Redis or Memcached

**2. Compression**
• Gzip/Brotli compression
• Reduce file sizes by 70-90%
• Faster page loads

**3. CDN (Content Delivery Network)**
• Serve static files from edge locations
• Closer to users = faster
• CloudFront, Cloudflare, Akamai

**4. Connection Pooling**
• Reuse database connections
• Avoid connection overhead
• Faster queries

**5. Load Balancing**
• Distribute traffic across servers
• Handle more concurrent users
• Improve reliability

**At META:**
• Thousands of web servers
• Advanced caching strategies
• Global CDN network
• Millisecond response times`,
                type: "explanation"
            }
        ],
        interactive: {
            type: "server-flow",
            title: "Web Server Request Flow",
            description: "Visualize how requests flow through a web server"
        }
    },

    18: {
        id: 18,
        title: "Large Scale Enterprise Systems",
        subtitle: "Building Systems for Millions of Users",
        icon: "🏗️",
        sections: [
            {
                title: "What Makes a System 'Large Scale'?",
                content: `**Scale Indicators:**
• **Users:** Millions to billions
• **Requests:** Thousands per second
• **Data:** Petabytes (1000+ terabytes)
• **Servers:** Thousands of machines
• **Geography:** Global distribution

**META's Scale:**
• 3+ billion users
• Millions of requests per second
• Exabytes of data
• Data centers worldwide

**Challenges:**
• Can't use a single server
• Can't use a single database
• Network latency matters
• Failures are normal (not exceptional)`,
                type: "explanation"
            },
            {
                title: "Key Architectural Patterns",
                content: `**1. Microservices**
• Break system into small, independent services
• Each service does one thing well
• Services communicate via APIs
• Can deploy/scale independently

**2. Horizontal Scaling**
• Add more servers (not bigger servers)
• Distribute load across many machines
• More cost-effective
• Better fault tolerance

**3. Caching Layers**
• Cache at multiple levels
• Browser cache → CDN → Application cache → Database cache
• Reduce database load by 90%+

**4. Asynchronous Processing**
• Don't make users wait
• Use message queues
• Process in background
• Example: Video processing, email sending

**5. Database Sharding**
• Split database across multiple servers
• Each shard handles subset of data
• Example: Users A-M on server 1, N-Z on server 2

**6. Read Replicas**
• Master database for writes
• Multiple replicas for reads
• Reads are 90%+ of traffic`,
                type: "explanation"
            },
            {
                title: "System Design Example: Instagram",
                content: `**Requirements:**
• Upload photos
• View feed
• Like/comment
• Follow users
• 1 billion users

**Architecture:**

**Upload Flow:**
1. User uploads photo → Load Balancer
2. Upload Service receives photo
3. Store original in S3
4. Send message to Image Processing Queue
5. Worker resizes image (multiple sizes)
6. Store metadata in database
7. Send notification to followers

**Feed Flow:**
1. User opens app → Load Balancer
2. Feed Service queries database
3. Get list of followed users
4. Get recent posts from those users
5. Rank by algorithm
6. Return to user

**Optimizations:**
• Cache user feeds (Redis)
• Pre-compute feeds for active users
• Use CDN for images
• Lazy load images
• Pagination (don't load all posts)

**Database Design:**
• Users table (sharded by user_id)
• Posts table (sharded by user_id)
• Follows table (sharded by follower_id)
• Likes table (sharded by post_id)`,
                type: "explanation"
            },
            {
                title: "Handling Failures at Scale",
                content: `**Failures Are Normal:**
• Servers crash
• Networks partition
• Databases go down
• Bugs happen

**Resilience Strategies:**

**1. Redundancy**
• Multiple copies of everything
• No single point of failure
• If one fails, others take over

**2. Circuit Breakers**
• Stop calling failing services
• Fail fast instead of waiting
• Retry after cooldown period

**3. Graceful Degradation**
• Core features always work
• Non-critical features can fail
• Example: Can't load comments? Still show post

**4. Monitoring & Alerts**
• Track metrics constantly
• Alert when things go wrong
• Fix before users notice

**5. Chaos Engineering**
• Intentionally break things
• Test resilience
• Netflix's Chaos Monkey

**At META:**
• Systems designed for failure
• Automatic failover
• 99.99%+ uptime
• Incident response teams 24/7`,
                type: "explanation"
            }
        ],
        interactive: {
            type: "system-design",
            title: "System Design Tool",
            description: "Design a large-scale system architecture"
        }
    },

    19: {
        id: 19,
        title: "HACK & JavaScript/React for META",
        subtitle: "META's Technology Stack",
        icon: "⚛️",
        sections: [
            {
                title: "Why HACK at META?",
                content: `**HACK** = PHP with types and modern features

**History:**
• Facebook built on PHP
• PHP was slow and error-prone
• META created HACK in 2014
• Gradual migration from PHP

**Key Features:**

**1. Type Safety**
\`\`\`hack
<?hh
// Types prevent errors
function add(int $a, int $b): int {
  return $a + $b;
}

add(5, 10);  // ✅ Works
add("5", 10); // ❌ Type error caught before running
\`\`\`

**2. Async/Await**
\`\`\`hack
async function fetchUser(int $id): Awaitable<User> {
  $data = await fetch_from_db($id);
  return new User($data);
}
\`\`\`

**3. Collections**
\`\`\`hack
$numbers = Vector {1, 2, 3, 4, 5};
$doubled = $numbers->map($x ==> $x * 2);
\`\`\``,
                type: "code"
            },
            {
                title: "React at META",
                content: `**React** = Created by META in 2013

**Why META Uses React:**
• Component-based architecture
• Virtual DOM for performance
• Reusable UI components
• Large ecosystem

**META's React Patterns:**

**1. Hooks**
\`\`\`javascript
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchUser() {
      const data = await fetch(\`/api/users/\${userId}\`);
      setUser(data);
      setLoading(false);
    }
    fetchUser();
  }, [userId]);
  
  if (loading) return <div>Loading...</div>;
  return <div>{user.name}</div>;
}
\`\`\`

**2. Component Composition**
\`\`\`javascript
function Post({ post }) {
  return (
    <div className="post">
      <PostHeader author={post.author} />
      <PostContent text={post.text} />
      <PostActions likes={post.likes} />
    </div>
  );
}
\`\`\``,
                type: "code"
            },
            {
                title: "GraphQL at META",
                content: `**GraphQL** = Query language created by META

**Why GraphQL?**
• Get exactly the data you need
• Single request for multiple resources
• Strongly typed
• Self-documenting

**Example Query:**
\`\`\`graphql
query {
  user(id: "123") {
    name
    email
    posts(limit: 10) {
      title
      likes
      comments {
        text
        author {
          name
        }
      }
    }
  }
}
\`\`\`

**Response:**
\`\`\`json
{
  "data": {
    "user": {
      "name": "John Doe",
      "email": "john@example.com",
      "posts": [
        {
          "title": "My first post",
          "likes": 42,
          "comments": [...]
        }
      ]
    }
  }
}
\`\`\`

**Benefits:**
• No over-fetching (only get what you need)
• No under-fetching (get everything in one request)
• Versioning not needed
• Great developer experience`,
                type: "code"
            },
            {
                title: "Learning Path for META",
                content: `**1. Master JavaScript Fundamentals**
• ES6+ features (arrow functions, destructuring, async/await)
• Promises and async programming
• Array methods (map, filter, reduce)
• Closures and scope

**2. Learn React Deeply**
• Hooks (useState, useEffect, useContext, useReducer)
• Component lifecycle
• State management (Context API, Redux)
• Performance optimization (memo, useMemo, useCallback)

**3. Understand HACK Basics**
• Type annotations
• Async/await
• Collections (Vector, Map, Set)
• Differences from PHP

**4. Practice GraphQL**
• Writing queries
• Mutations
• Fragments
• Error handling

**5. Build Projects**
• Social media clone
• Real-time chat app
• E-commerce platform
• Use React + GraphQL

**Resources:**
• React docs (react.dev)
• HACK docs (hacklang.org)
• GraphQL docs (graphql.org)
• META Engineering Blog`,
                type: "explanation"
            }
        ],
        interactive: {
            type: "code-playground",
            title: "React Code Playground",
            description: "Practice React and GraphQL"
        }
    },

    20: {
        id: 20,
        title: "Managing Concurrent Projects",
        subtitle: "Juggling Multiple Initiatives",
        icon: "📊",
        sections: [
            {
                title: "What Does Concurrent Mean?",
                content: `**Concurrent Projects** = Working on multiple things at the same time

**At META as BSE:**
• Supporting 10+ partners simultaneously
• Each partner has different issues
• Some urgent, some long-term
• Different time zones
• Different priorities

**Challenges:**
• Context switching is expensive
• Can't focus deeply on one thing
• Easy to drop balls
• Stress and overwhelm

**Solution:** Systems and processes!`,
                type: "explanation"
            },
            {
                title: "Prioritization Framework",
                content: `**Eisenhower Matrix:**

**Urgent & Important** (Do First)
• Production outages
• Critical partner issues
• Escalations from leadership

**Important, Not Urgent** (Schedule)
• Documentation
• Process improvements
• Learning new technologies
• Relationship building

**Urgent, Not Important** (Delegate)
• Some meetings
• Routine requests
• Status updates

**Not Urgent, Not Important** (Eliminate)
• Busy work
• Unnecessary meetings
• Over-communication

**At META:**
• P0 = Critical (fix immediately)
• P1 = High (fix today)
• P2 = Medium (fix this week)
• P3 = Low (fix when possible)`,
                type: "explanation"
            },
            {
                title: "Time Management Techniques",
                content: `**1. Time Blocking**
• Block calendar for focused work
• 2-hour blocks for deep work
• 30-min blocks for meetings
• Protect your time

**2. Pomodoro Technique**
• Work 25 minutes focused
• Break 5 minutes
• After 4 cycles, longer break
• Prevents burnout

**3. Batch Similar Tasks**
• Answer all emails at once
• Review all tickets together
• Make all calls in sequence
• Reduce context switching

**4. Two-Minute Rule**
• If task takes < 2 minutes, do it now
• Don't add to todo list
• Prevents backlog buildup

**5. Weekly Planning**
• Sunday/Monday: Plan the week
• Identify top 3 priorities
• Block time for each
• Review Friday

**Tools:**
• Calendar (Google Calendar)
• Task manager (Asana, Jira)
• Notes (Notion, OneNote)
• Communication (Slack, Teams)`,
                type: "explanation"
            },
            {
                title: "Communication Strategies",
                content: `**Managing Stakeholders:**

**1. Set Expectations**
• Be clear about timelines
• Under-promise, over-deliver
• Communicate delays early

**2. Regular Updates**
• Weekly status reports
• Proactive communication
• Don't wait to be asked

**3. Escalation Path**
• Know when to escalate
• Don't hide problems
• Involve manager early

**4. Documentation**
• Write everything down
• Share context
• Future you will thank you

**5. Say No (Politely)**
• Can't do everything
• Explain trade-offs
• Offer alternatives

**Example Status Update:**
\`\`\`
Weekly Update - Jan 30, 2026

Completed:
✅ Fixed API integration for Partner A
✅ Deployed monitoring for Partner B
✅ Documented troubleshooting guide

In Progress:
🔄 Investigating timeout issues for Partner C (ETA: Feb 2)
🔄 Setting up load testing environment (ETA: Feb 5)

Blocked:
🚫 Waiting for internal team to fix bug #12345

Next Week:
📅 Onboard new partner D
📅 Quarterly business review with Partner E
\`\`\``,
                type: "explanation"
            }
        ],
        interactive: {
            type: "project-tracker",
            title: "Project Management Dashboard",
            description: "Track multiple concurrent projects"
        }
    },

    21: {
        id: 21,
        title: "Technical Communication",
        subtitle: "Writing Docs and Communicating with Teams",
        icon: "📝",
        sections: [
            {
                title: "Why Communication Matters",
                content: `**At META, you'll communicate with:**
• Partners (external, varying technical levels)
• Engineering teams (internal, highly technical)
• Product managers (internal, business-focused)
• Leadership (internal, strategic)

**Each audience needs different communication:**
• Partners → Clear, actionable, empathetic
• Engineers → Technical, precise, detailed
• PMs → Business impact, metrics, timelines
• Leadership → High-level, outcomes, risks

**Good communication:**
• Saves time
• Prevents misunderstandings
• Builds trust
• Advances your career`,
                type: "explanation"
            },
            {
                title: "Writing Technical Documentation",
                content: `**Good Documentation Has:**

**1. Clear Purpose**
• What problem does this solve?
• Who is this for?

**2. Step-by-Step Instructions**
• Numbered steps
• Code examples
• Screenshots
• Expected outcomes

**3. Troubleshooting Section**
• Common errors
• How to fix them
• Who to contact

**4. Examples**
• Real-world use cases
• Copy-paste code
• Working demos

**Example API Documentation:**
\`\`\`markdown
# Send a Message via WhatsApp Business API

## Prerequisites
- WhatsApp Business Account
- Access token
- Phone number ID

## Steps

1. Get your access token from the META Developer Portal

2. Make a POST request to the Messages endpoint:

\`\`\`bash
curl -X POST "https://graph.facebook.com/v18.0/{phone-number-id}/messages" \\
  -H "Authorization: Bearer {access-token}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "messaging_product": "whatsapp",
    "to": "1234567890",
    "type": "text",
    "text": {
      "body": "Hello from META!"
    }
  }'
\`\`\`

3. Check the response:

\`\`\`json
{
  "messaging_product": "whatsapp",
  "contacts": [{
    "input": "1234567890",
    "wa_id": "1234567890"
  }],
  "messages": [{
    "id": "wamid.XXX"
  }]
}
\`\`\`

## Troubleshooting

**Error: Invalid access token**
- Verify token hasn't expired
- Check token permissions
- Regenerate token if needed

**Error: Phone number not registered**
- Verify phone number in Business Manager
- Complete phone number verification
\`\`\``,
                type: "code"
            },
            {
                title: "Email Communication",
                content: `**Structure of Good Emails:**

**Subject Line**
• Clear and specific
• Include ticket/issue number
• Example: "[P1] API Timeout Issue - Partner XYZ #12345"

**Opening**
• Greet appropriately
• State purpose immediately

**Body**
• Use bullet points
• Bold key information
• Keep paragraphs short
• Include action items

**Closing**
• Clear next steps
• Timeline
• Who's responsible

**Example:**
\`\`\`
Subject: [P1] WhatsApp API Integration Issue - Acme Corp #45678

Hi Sarah,

I investigated the API timeout errors you reported. Here's what I found:

**Root Cause:**
• Your webhook endpoint is taking 25+ seconds to respond
• META's timeout is 20 seconds
• This causes failed deliveries

**Impact:**
• 15% of messages failing
• Affecting 5,000 users/day

**Recommended Fix:**
1. Implement async processing in your webhook
2. Return 200 OK immediately
3. Process message in background

**Next Steps:**
• I'll send code examples by EOD today
• Let's schedule a call tomorrow to review
• Target fix deployment: Friday

Please let me know if you have questions.

Best,
John
\`\`\``,
                type: "explanation"
            },
            {
                title: "Presenting to Technical Teams",
                content: `**Presentation Structure:**

**1. Context (1 slide)**
• What's the problem?
• Why does it matter?

**2. Data (2-3 slides)**
• Metrics and evidence
• Visualizations
• Trends

**3. Proposal (2-3 slides)**
• Your solution
• Alternatives considered
• Trade-offs

**4. Implementation (1-2 slides)**
• Timeline
• Resources needed
• Risks

**5. Q&A**
• Anticipate questions
• Have backup slides

**Tips:**
• Start with the conclusion
• Use visuals over text
• Tell a story
• Practice out loud
• Time yourself
• Prepare for tough questions

**At META:**
• Data-driven culture
• Show metrics
• Be prepared to defend
• Collaboration over hierarchy`,
                type: "explanation"
            }
        ],
        interactive: {
            type: "documentation-template",
            title: "Documentation Templates",
            description: "Use templates for common documentation needs"
        }
    }
};

// Combine all topics
const allTopics = {
    ...topicsPart1,
    ...topicsPart2,
    ...topicsPart3
};
