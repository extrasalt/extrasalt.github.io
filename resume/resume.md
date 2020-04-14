# Mohanarangan Muthukumar

Mohan is a Software Engineer at Avalara R&D. He's part of a highly agile team tasked with automating sales tax changes. He previously was with Indix, the largest product database company later acquired by Avalara. At Indix, he worked with large datasets, building an maintaining large distributed systems that crawled and parsed 2 billion products.

Mohan has also been organizing the Docker and Kubernetes Communities in Chennai since 2016. He's given several talks in the space including: Containerization, Container internals, Kubernetes Internals, Data processing in Kubernetes, Terraform and AWS firecracker microVMs.

# Professional Experience

### Software Engineer II , Avalara

Feb 2019 - Present
Avalara is a cloud-based compliance provider with a stated goal of being part of every transaction. This involves helping our customers respond to changes in tax rates, laws and levies.

My team builds automation and tooling that would help minimize the human effort involved in responding to tax law changes. We are also responsible for integrating NLP models with the internal tooling infrastructure for the rest of the company to use.

### Software Engineer, Indix

June 2017 - Feb 2019
Indix was product intelligence platform offering services like product categorization, brand identification, standardized attribute extraction and product clustering for over two billion products.

#### Ingestion

- Part of the Ingestion team crawling 20 million pages/day.
- Worked extensively in Scala on JVM, Hadoop (Scalding), Kafka & Kafka streams.

- Built crawling infrastructure to fetch product information that spans multiple pages. Using puppeteer for this would have been detrimental to the crawl rate and would have also been very expensive.
- Built an on-demand crawling infrastructure to find the pricing information of products across multiple e-commerce sites, parallelly.

- Built a controlled environment to test seeders and parsers.
- Improved the success rate of proxy-manager
- Worked on normalizing urls in order to de-duplicate them

#### Search

- Built a search cache API that returns the results in an order dictated by an external system.
- Built a search alias lookup for colloquial words.

#### Internal tooling

- Also responsible for maintenance and new features on several auxillary apps with a diverse stack that includes: Scala, dropwizard, Node.js on the backend and React.js in the frontend
- Also responsible for the uptime of these apps on Mesos-Marathon.

# Formal Education

### Anna University

Bachelor of Engingeering, Computer Science | 2013 - 2017

# OSS

## Podder

[Podder](http://github.com/extrasalt/podder) is a multi-tenant baremetal PaaS that runs on top of Kubernetes. It can deploy any go binary that is dropped into it, as a service if it exposes the HTTP port. Podder is an attempt at being the userspace of a distributed operating system.

# Community Activities

Organizer of the Chennai Docker community | Since Aug 2016  
Co-Organizer of Chennai Go Community | Since Jan 2017

# Talks

### The State of the containers

_Chennai Docker meetup, November 2016_  
The sudden rise of containers has led to a lot of bad practices. The talk explained what containers were, how they work internally, how to best avoid inefficient docker setups and how persistent storage works in stateless services.

### Container Orchestration with Kubernetes and Swarm

_Chennai Docker meetup, March 2017_  
Introduction to orchestration and feature comparison of Swarm, Mesos and Kubernetes. Explained different Kubernetes Objects and demoed load balancing in a Kubernetes service. [Slides](http://slides.com/extrasalt/deck)

### Building a baremetal Go PaaS with Kubernetes

_Chennai Go meetup, March 2017_  
Deploying a fully packaged go binary still involves a lot of boilerplate. Presented an alternative where a simple Kubernetes service can deploy any go binary dropped into it and explained how it can be recreated to fit particular needs.

### Docker internals

_Chennai Docker meetup, June 2017_  
Explored how docker works internally and built a self-isolated go program to demonstrate systemcall interface used to create linux containers.
