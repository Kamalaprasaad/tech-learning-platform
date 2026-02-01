// Topics 1-7: Core Infrastructure & APIs
const topicsPart1 = {
  1: {
    id: 1,
    title: "API Fundamentals",
    subtitle: "Understanding APIs - The Building Blocks of Modern Software",
    icon: "🔌",
    sections: [
      {
        title: "What is an API?",
        content: `Think of an API (Application Programming Interface) like a **waiter at a restaurant**:
        
• You (the customer) don't go into the kitchen to cook
• You tell the waiter what you want
• The waiter takes your order to the kitchen
• The kitchen prepares your food
• The waiter brings it back to you

An API is the "waiter" between different software programs. It lets them talk to each other without knowing how each other works inside.`,
        type: "explanation"
      },
      {
        title: "What Does It Do?",
        content: `APIs let different programs share information and features:

• **Facebook Login** on other apps → Uses Facebook's API
• **Weather apps** → Use weather service APIs
• **Google Maps** on websites → Uses Google Maps API
• **Payment processing** → Uses payment APIs (Stripe, PayPal)

At META, you'll work with APIs that help businesses connect to WhatsApp, Instagram, and Facebook!`,
        type: "explanation"
      },
      {
        title: "Who Owns It?",
        content: `The company that creates the service owns the API:

• META owns Facebook, Instagram, WhatsApp APIs
• Google owns Google Maps, YouTube APIs
• Amazon owns AWS APIs

As a Business Support Engineer at META, you'll help partners use META's APIs correctly!`,
        type: "explanation"
      },
      {
        title: "How Does It Work?",
        content: `APIs work through **requests** and **responses**:

1. **Client** sends a request: "Give me user data"
2. **API** receives and processes the request
3. **Server** does the work (database query, calculation, etc.)
4. **API** sends back a response: "Here's the data"

It's like sending a letter and getting a reply!`,
        type: "explanation"
      },
      {
        title: "CRUD Operations",
        content: `CRUD = **Create, Read, Update, Delete** - The 4 basic things you do with data:

• **CREATE** → Add new data (POST request)
• **READ** → Get existing data (GET request)
• **UPDATE** → Change existing data (PUT/PATCH request)
• **DELETE** → Remove data (DELETE request)

Example: Instagram API
• CREATE: Post a new photo
• READ: View photos in your feed
• UPDATE: Edit your caption
• DELETE: Remove a post`,
        type: "explanation"
      }
    ],
    interactive: {
      type: "api-simulator",
      title: "Try Making API Requests!",
      description: "Click the buttons to see how different API requests work"
    }
  },

  2: {
    id: 2,
    title: "SOAP & REST APIs",
    subtitle: "Two Different Ways APIs Talk",
    icon: "🌐",
    sections: [
      {
        title: "What's the Difference?",
        content: `Think of SOAP and REST like two different ways to send a package:

**SOAP (Simple Object Access Protocol)**
• Like sending a package with **lots of forms and rules**
• Very formal and structured
• Uses XML (a strict data format)
• More secure but slower
• Used in banks, healthcare (where security is critical)

**REST (Representational State Transfer)**
• Like sending a package with **just an address label**
• Simple and flexible
• Uses JSON (easy to read data format)
• Faster and easier to use
• Used by most modern apps (Facebook, Twitter, Instagram)

**At META, you'll mostly work with REST APIs!**`,
        type: "explanation"
      },
      {
        title: "REST API Example",
        content: `A REST API request looks like this:

**Request:**
GET https://graph.facebook.com/me
Headers: Authorization: Bearer YOUR_TOKEN

**Response:**
{
  "id": "123456789",
  "name": "John Doe",
  "email": "john@example.com"
}

Simple and clean!`,
        type: "code"
      },
      {
        title: "SOAP API Example",
        content: `A SOAP API request looks like this:

**Request:**
<?xml version="1.0"?>
<soap:Envelope>
  <soap:Body>
    <GetUser>
      <UserId>123456789</UserId>
    </GetUser>
  </soap:Body>
</soap:Envelope>

**Response:**
<?xml version="1.0"?>
<soap:Envelope>
  <soap:Body>
    <GetUserResponse>
      <User>
        <Name>John Doe</Name>
        <Email>john@example.com</Email>
      </User>
    </GetUserResponse>
  </soap:Body>
</soap:Envelope>

More verbose but very structured!`,
        type: "code"
      }
    ],
    interactive: {
      type: "comparison",
      title: "SOAP vs REST Comparison",
      description: "See the differences side-by-side"
    }
  },

  3: {
    id: 3,
    title: "Debugging Like a Detective",
    subtitle: "Finding and Fixing Bugs in JavaScript/React",
    icon: "🔍",
    sections: [
      {
        title: "The Golden Rule: Follow the Data",
        content: `When debugging, **follow the data like a detective following clues**:

1. **Where does the data come from?** (API, user input, database)
2. **Where does it go?** (Component, function, display)
3. **What happens to it along the way?** (Transformations, calculations)
4. **Where does it break?** (Error location)

**Don't look at class definitions** - Look at **variable values**!`,
        type: "explanation"
      },
      {
        title: "Debugging Steps for React",
        content: `**Step 1: Use console.log() everywhere**
console.log('Data received:', data);
console.log('After transformation:', transformedData);

**Step 2: Use React DevTools**
• See component props and state
• Track when components re-render
• Inspect the component tree

**Step 3: Use Browser DevTools**
• Set breakpoints in your code
• Step through line by line
• Watch variable values change

**Step 4: Check the Network Tab**
• See API requests and responses
• Check if data is coming back correctly
• Look for failed requests (red)`,
        type: "explanation"
      },
      {
        title: "Common React Bugs at META",
        content: `**Bug 1: State not updating**
❌ Wrong:
this.state.count = 5; // Never do this!

✅ Correct:
this.setState({ count: 5 });

**Bug 2: Infinite re-renders**
❌ Wrong:
useEffect(() => {
  setCount(count + 1); // Runs forever!
});

✅ Correct:
useEffect(() => {
  setCount(count + 1);
}, []); // Only runs once

**Bug 3: Undefined data**
❌ Wrong:
const name = user.profile.name; // Crashes if user is null

✅ Correct:
const name = user?.profile?.name; // Safe with optional chaining`,
        type: "code"
      }
    ],
    interactive: {
      type: "debugger",
      title: "Debug This Code!",
      description: "Find and fix the bug in this React component"
    }
  },

  4: {
    id: 4,
    title: "Load Balancing",
    subtitle: "Splitting Traffic Like a Traffic Cop",
    icon: "⚖️",
    sections: [
      {
        title: "What is Load Balancing?",
        content: `Imagine a **supermarket with multiple checkout lanes**:

• If everyone goes to one lane → Long wait, slow service
• If people spread across all lanes → Fast service, happy customers

A **Load Balancer** is like the person directing customers to different lanes. It splits incoming traffic across multiple servers so no single server gets overwhelmed.

**At META:** With billions of users, load balancers are critical! They ensure Facebook/Instagram/WhatsApp stay fast even with massive traffic.`,
        type: "explanation"
      },
      {
        title: "How Load Balancers Work",
        content: `**The Flow:**

1. User makes request → Hits Load Balancer (entry point)
2. Load Balancer checks which servers are available
3. Sends request to the least busy server
4. Server processes request and sends response back
5. Load Balancer returns response to user

**Types of Load Balancing:**
• **Round Robin** → Send to servers in order (1, 2, 3, 1, 2, 3...)
• **Least Connections** → Send to server with fewest active connections
• **IP Hash** → Same user always goes to same server
• **Weighted** → Send more traffic to more powerful servers`,
        type: "explanation"
      },
      {
        title: "External vs Internal Load Balancers",
        content: `**External Load Balancer:**
• Faces the internet
• First point of contact for users
• Distributes traffic from users to your web servers
• Example: AWS Application Load Balancer

**Internal Load Balancer:**
• Inside your network
• Distributes traffic between your internal services
• Example: Traffic from web servers to database servers

**At META:** You might have 54+ services with multiple load balancers managing traffic flow between them!`,
        type: "explanation"
      }
    ],
    interactive: {
      type: "load-balancer-sim",
      title: "Load Balancer Simulator",
      description: "Watch traffic being distributed across servers"
    }
  },

  5: {
    id: 5,
    title: "META System Infrastructure",
    subtitle: "How META's Systems Talk to Each Other",
    icon: "🏢",
    sections: [
      {
        title: "META's Technology Stack",
        content: `**HACK Programming Language:**
• Created by META (formerly Facebook)
• Based on PHP but with type safety
• Used for backend services at META
• Faster and safer than regular PHP

**Why HACK?**
• Catches errors before code runs
• Better performance at scale
• Easier to maintain large codebases

**Example HACK code:**
<?hh
function greet(string $name): string {
  return "Hello, " . $name;
}`,
        type: "explanation"
      },
      {
        title: "How META Systems Communicate",
        content: `META uses several methods for inter-service communication:

**1. REST APIs**
• Services expose HTTP endpoints
• Other services make HTTP requests
• Simple and widely used

**2. GraphQL**
• META's preferred API query language
• Get exactly the data you need
• Single request for multiple resources

**3. Thrift**
• META's RPC (Remote Procedure Call) framework
• Fast binary protocol
• Used for internal service-to-service communication

**4. Message Queues**
• Asynchronous communication
• Services send messages to queues
• Other services process them later`,
        type: "explanation"
      },
      {
        title: "META's Infrastructure Scale",
        content: `**The Numbers:**
• 3+ billion users across platforms
• Millions of requests per second
• Thousands of services running simultaneously
• Data centers around the world

**Your Role as BSE:**
• Help partners integrate with META's APIs
• Troubleshoot integration issues
• Monitor partner integrations for performance
• Work with internal teams to resolve issues
• Ensure 99.9%+ uptime for partner integrations`,
        type: "explanation"
      }
    ],
    interactive: {
      type: "architecture-diagram",
      title: "META System Architecture",
      description: "Visualize how META's services connect"
    }
  },

  6: {
    id: 6,
    title: "Messaging Systems",
    subtitle: "How Systems Talk Asynchronously",
    icon: "📨",
    sections: [
      {
        title: "What are Messaging Systems?",
        content: `Think of messaging systems like **email for computer programs**:

**Without Messaging (Direct Call):**
• Service A calls Service B directly
• Service A waits for Service B to respond
• If Service B is down, Service A fails

**With Messaging (Queue):**
• Service A sends message to queue
• Service A continues working (doesn't wait)
• Service B picks up message when ready
• If Service B is down, message waits in queue

**Benefits:**
• Services don't need to be online at the same time
• Can handle traffic spikes
• More reliable and scalable`,
        type: "explanation"
      },
      {
        title: "Common Messaging Systems",
        content: `**RabbitMQ:**
• Traditional message broker
• Supports multiple messaging patterns
• Good for complex routing

**Apache Kafka:**
• High-throughput message streaming
• Used for real-time data pipelines
• Can replay messages

**AWS SQS (Simple Queue Service):**
• Fully managed by AWS
• Easy to use
• Scales automatically

**At META:**
• Custom messaging infrastructure
• Handles billions of messages per day
• Powers features like notifications, news feed updates`,
        type: "explanation"
      },
      {
        title: "Real-World Example",
        content: `**Scenario: User posts a photo on Instagram**

1. Upload Service receives photo → Sends message: "New photo uploaded"
2. Image Processing Service picks up message → Resizes photo
3. Notification Service picks up message → Notifies followers
4. Feed Service picks up message → Updates followers' feeds
5. Analytics Service picks up message → Records metrics

All these happen **asynchronously** - the user doesn't wait for everything to complete!`,
        type: "explanation"
      }
    ],
    interactive: {
      type: "message-queue",
      title: "Message Queue Simulator",
      description: "Send messages and watch them flow through the system"
    }
  },

  7: {
    id: 7,
    title: "Pub/Sub Pattern",
    subtitle: "Publisher-Subscriber Data Flow",
    icon: "📡",
    sections: [
      {
        title: "What is Pub/Sub?",
        content: `Think of Pub/Sub like a **YouTube channel**:

**Publisher (YouTuber):**
• Creates and publishes videos
• Doesn't know who watches
• Just puts content out there

**Subscribers (Viewers):**
• Subscribe to channels they like
• Get notified of new videos
• Can subscribe to multiple channels

**The Platform (YouTube):**
• Manages subscriptions
• Delivers notifications
• Handles the connection

In software, Pub/Sub works the same way!`,
        type: "explanation"
      },
      {
        title: "How Pub/Sub Works",
        content: `**The Flow:**

1. **Publishers** send messages to **topics** (categories)
2. **Subscribers** subscribe to topics they care about
3. When a message is published, **all subscribers** get it
4. Publishers and subscribers don't know about each other

**Example: E-commerce System**

Topic: "OrderPlaced"
• Publisher: Checkout Service
• Subscribers:
  - Inventory Service (reduce stock)
  - Email Service (send confirmation)
  - Shipping Service (prepare shipment)
  - Analytics Service (record sale)

One event triggers multiple actions!`,
        type: "explanation"
      },
      {
        title: "Pub/Sub vs Message Queues",
        content: `**Message Queue:**
• One message → One consumer
• Like sending a letter to one person

**Pub/Sub:**
• One message → Many consumers
• Like posting on social media (everyone sees it)

**When to use Pub/Sub:**
• Broadcasting events to multiple services
• Real-time notifications
• Event-driven architectures
• Decoupling services

**At META:**
• Used for real-time features
• News feed updates
• Notification systems
• Live video streaming`,
        type: "explanation"
      }
    ],
    interactive: {
      type: "pubsub-demo",
      title: "Pub/Sub Interactive Demo",
      description: "Publish messages and watch subscribers receive them"
    }
  }
};
