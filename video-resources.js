// Curated YouTube Video Resources for Each Topic
const videoResources = {
    1: {
        title: "API Fundamentals",
        videos: [
            {
                title: "What is an API? (Explained in 4 minutes)",
                url: "https://www.youtube.com/watch?v=s7wmiS2mSXY",
                duration: "4:24"
            },
            {
                title: "APIs for Beginners - How to use an API (Full Course)",
                url: "https://www.youtube.com/watch?v=GZvSYJDk-us",
                duration: "2:19:27"
            },
            {
                title: "REST API Crash Course",
                url: "https://www.youtube.com/watch?v=-MTSQjw5DrM",
                duration: "33:24"
            }
        ]
    },
    2: {
        title: "SOAP & REST APIs",
        videos: [
            {
                title: "SOAP vs REST - Difference Between Web API Services",
                url: "https://www.youtube.com/watch?v=bPNfu0IZhoE",
                duration: "9:03"
            },
            {
                title: "REST API Concepts and Examples",
                url: "https://www.youtube.com/watch?v=7YcW25PHnAA",
                duration: "8:53"
            }
        ]
    },
    3: {
        title: "Debugging JavaScript/React",
        videos: [
            {
                title: "JavaScript Debugging Tips and Tricks",
                url: "https://www.youtube.com/watch?v=F1J8rBf1RE0",
                duration: "11:36"
            },
            {
                title: "React DevTools Tutorial - Debug Like a Pro",
                url: "https://www.youtube.com/watch?v=rb1GWqCJid4",
                duration: "22:08"
            },
            {
                title: "Chrome DevTools Crash Course",
                url: "https://www.youtube.com/watch?v=gTVpBbFWry8",
                duration: "17:16"
            }
        ]
    },
    4: {
        title: "Load Balancing",
        videos: [
            {
                title: "What is Load Balancing?",
                url: "https://www.youtube.com/watch?v=K0Ta65OqQkY",
                duration: "4:44"
            },
            {
                title: "Load Balancing Deep Dive",
                url: "https://www.youtube.com/watch?v=sCR3SAVdyCc",
                duration: "11:03"
            }
        ]
    },
    5: {
        title: "META Infrastructure & HACK",
        videos: [
            {
                title: "Facebook's Infrastructure - System Design",
                url: "https://www.youtube.com/watch?v=hnpzNAPiC0E",
                duration: "24:45"
            },
            {
                title: "HACK Language Introduction",
                url: "https://www.youtube.com/watch?v=qY6UF3Mzlm4",
                duration: "40:12"
            }
        ]
    },
    6: {
        title: "Messaging Systems",
        videos: [
            {
                title: "Message Queues Explained",
                url: "https://www.youtube.com/watch?v=oUJbuFMyBDk",
                duration: "7:11"
            },
            {
                title: "Apache Kafka in 6 Minutes",
                url: "https://www.youtube.com/watch?v=Ch5VhJzaoaI",
                duration: "6:16"
            },
            {
                title: "RabbitMQ in 100 Seconds",
                url: "https://www.youtube.com/watch?v=NQ3fZtyXji0",
                duration: "2:38"
            }
        ]
    },
    7: {
        title: "Pub/Sub Pattern",
        videos: [
            {
                title: "Publish Subscribe Pattern Explained",
                url: "https://www.youtube.com/watch?v=O1PgqUqZKTA",
                duration: "10:27"
            },
            {
                title: "Google Cloud Pub/Sub in 3 Minutes",
                url: "https://www.youtube.com/watch?v=cvu53CnZmGI",
                duration: "3:24"
            }
        ]
    },
    8: {
        title: "Gen AI & LLMs",
        videos: [
            {
                title: "Large Language Models Explained",
                url: "https://www.youtube.com/watch?v=osKyvYJ3PRM",
                duration: "6:54"
            },
            {
                title: "How ChatGPT Works Technically",
                url: "https://www.youtube.com/watch?v=qbIk7-JPB2c",
                duration: "24:40"
            },
            {
                title: "Machine Learning for Beginners",
                url: "https://www.youtube.com/watch?v=i_LwzRVP7bg",
                duration: "41:24"
            }
        ]
    },
    9: {
        title: "JavaScript & React",
        videos: [
            {
                title: "JavaScript Crash Course for Beginners",
                url: "https://www.youtube.com/watch?v=hdI2bqOjy3c",
                duration: "1:40:24"
            },
            {
                title: "React Course - Beginner's Tutorial",
                url: "https://www.youtube.com/watch?v=bMknfKXIFA8",
                duration: "11:55:27"
            },
            {
                title: "Top 10 LeetCode Problems for Beginners",
                url: "https://www.youtube.com/watch?v=r1MXwyiGi_U",
                duration: "12:39"
            }
        ]
    },
    10: {
        title: "Network Protocols",
        videos: [
            {
                title: "HTTP vs HTTPS - What's the Difference?",
                url: "https://www.youtube.com/watch?v=hExRDVZHhig",
                duration: "5:44"
            },
            {
                title: "TCP/IP Model Explained",
                url: "https://www.youtube.com/watch?v=OTwp3xtd4dg",
                duration: "6:30"
            },
            {
                title: "OSI Model Explained",
                url: "https://www.youtube.com/watch?v=vv4y_uOneC0",
                duration: "13:42"
            }
        ]
    },
    11: {
        title: "Algorithms & Data Structures",
        videos: [
            {
                title: "Sorting Algorithms Explained Visually",
                url: "https://www.youtube.com/watch?v=kPRA0W1kECg",
                duration: "10:14"
            },
            {
                title: "Data Structures Easy to Advanced Course",
                url: "https://www.youtube.com/watch?v=RBSGKlAvoiM",
                duration: "8:20:00"
            },
            {
                title: "Binary Search Algorithm Explained",
                url: "https://www.youtube.com/watch?v=6ysjqCUv3K4",
                duration: "5:27"
            }
        ]
    },
    12: {
        title: "HTTP Status Codes",
        videos: [
            {
                title: "HTTP Status Codes Explained",
                url: "https://www.youtube.com/watch?v=-mN3VyJuCjM",
                duration: "14:17"
            },
            {
                title: "Understanding 404, 500, 200 Status Codes",
                url: "https://www.youtube.com/watch?v=wJa5CTIFj7U",
                duration: "8:23"
            }
        ]
    },
    13: {
        title: "Data Exchange Formats",
        videos: [
            {
                title: "JSON vs XML - What's the Difference?",
                url: "https://www.youtube.com/watch?v=YFz7xDxEKuM",
                duration: "4:37"
            },
            {
                title: "Protocol Buffers Crash Course",
                url: "https://www.youtube.com/watch?v=46O73On0gyI",
                duration: "29:36"
            }
        ]
    },
    14: {
        title: "AWS Cloud",
        videos: [
            {
                title: "AWS Tutorial for Beginners",
                url: "https://www.youtube.com/watch?v=k1RI5locZE4",
                duration: "9:47:14"
            },
            {
                title: "AWS in 10 Minutes",
                url: "https://www.youtube.com/watch?v=r4YIdn2eTm4",
                duration: "10:10"
            },
            {
                title: "AWS Certified Solutions Architect Course",
                url: "https://www.youtube.com/watch?v=Ia-UEYYR44s",
                duration: "10:43:42"
            }
        ]
    },
    15: {
        title: "SQL & Databases",
        videos: [
            {
                title: "SQL Tutorial for Beginners",
                url: "https://www.youtube.com/watch?v=HXV3zeQKqGY",
                duration: "4:20:24"
            },
            {
                title: "SQL in 100 Seconds",
                url: "https://www.youtube.com/watch?v=zsjvFFKOm3c",
                duration: "2:21"
            },
            {
                title: "Database Indexing Explained",
                url: "https://www.youtube.com/watch?v=-qNSXK7s7_w",
                duration: "6:51"
            }
        ]
    },
    16: {
        title: "Relational Databases",
        videos: [
            {
                title: "Database Design Course",
                url: "https://www.youtube.com/watch?v=ztHopE5Wnpc",
                duration: "8:23:13"
            },
            {
                title: "ACID Properties Explained",
                url: "https://www.youtube.com/watch?v=pomxJOFVcQs",
                duration: "9:36"
            },
            {
                title: "SQL vs NoSQL Explained",
                url: "https://www.youtube.com/watch?v=ruz-vK8IesE",
                duration: "12:02"
            }
        ]
    },
    17: {
        title: "Web Servers",
        videos: [
            {
                title: "How Web Servers Work",
                url: "https://www.youtube.com/watch?v=9J1nJOivdyw",
                duration: "8:27"
            },
            {
                title: "Nginx Crash Course",
                url: "https://www.youtube.com/watch?v=7VAI73roXaY",
                duration: "1:17:07"
            },
            {
                title: "Apache vs Nginx - Which is Better?",
                url: "https://www.youtube.com/watch?v=9nyiY-psbMs",
                duration: "9:14"
            }
        ]
    },
    18: {
        title: "Large Scale Systems",
        videos: [
            {
                title: "System Design Interview",
                url: "https://www.youtube.com/watch?v=0163cssUxLA",
                duration: "10:09"
            },
            {
                title: "Microservices Explained",
                url: "https://www.youtube.com/watch?v=j3XufmvEMiM",
                duration: "8:08"
            },
            {
                title: "Scaling to Millions of Users",
                url: "https://www.youtube.com/watch?v=hnpzNAPiC0E",
                duration: "24:45"
            }
        ]
    },
    19: {
        title: "HACK & React for META",
        videos: [
            {
                title: "React Tutorial for META Interviews",
                url: "https://www.youtube.com/watch?v=bMknfKXIFA8",
                duration: "11:55:27"
            },
            {
                title: "GraphQL Explained",
                url: "https://www.youtube.com/watch?v=eIQh02xuVw4",
                duration: "12:51"
            },
            {
                title: "Building with React and GraphQL",
                url: "https://www.youtube.com/watch?v=ed8SzALpx1Q",
                duration: ": 2:56:47"
            }
        ]
    },
    20: {
        title: "Project Management",
        videos: [
            {
                title: "Project Management Basics",
                url: "https://www.youtube.com/watch?v=ZKOL-rZ79gs",
                duration: "12:41"
            },
            {
                title: "Managing Multiple Projects at Once",
                url: "https://www.youtube.com/watch?v=1xyE_xRl6B4",
                duration: "8:17"
            },
            {
                title: "Agile vs Waterfall",
                url: "https://www.youtube.com/watch?v=8eVXTyIZ1Hs",
                duration: "6:06"
            }
        ]
    },
    21: {
        title: "Technical Communication",
        videos: [
            {
                title: "Technical Writing Basics",
                url: "https://www.youtube.com/watch?v=bQAUYdSn0TA",
                duration: "8:38"
            },
            {
                title: "How to Write Better Documentation",
                url: "https://www.youtube.com/watch?v=t4vKPhjcMZg",
                duration: "14:56"
            },
            {
                title: "Presenting Technical Information",
                url: "https://www.youtube.com/watch?v=3kfvl-OlDsg",
                duration: "29:42"
            }
        ]
    }
};
