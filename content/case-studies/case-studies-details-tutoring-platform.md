---
path: case-studies-details-tutoring-platform
technologies: |-
  ![](assets/aws.svg)

  ![](assets/javascript-typescript.svg)

  ![](assets/docker.svg)

  ![](assets/react.svg)
title: 1-1 Tutoring Platform
devops: |-
  ![](assets/jenkins.svg)

  ![](assets/aws.svg)
project: Web Project
client: US Firm, E-Learning
location: New York, USA
architecture: Serverless
thumbnail: assets/1-1-tutoring.jpg
featuredImage: |-
  ![](assets/1.png)

  ![](assets/1.png)

  ![](assets/1.png)

  ![](assets/1.png)
---
<!--StartFragment-->

### Executive Summary

InnomizeTech was tasked to build a web-based platform that allows one-on-one tutoring based on the specified subjects. In order to conduct a tutoring session, tutors need to establish their available time slots. Learners then will be able to select their preferred subjects and time slots. The system helps to connect subject experts and learners who have lack their confidence in a specific expertise, or who want to improve their knowledge and skills. A tutoring session will be conducting via online video conferencing style in real-time with the supporting features such as screen sharing, camera on-off switching, and chatting.

### About Customer

Our customer is a US-based company offering educational services in the US market. With more than 15 years of successfully helping and serving thousands of students, they now want to offer their excellent services to the global audiences by launching an online one-on-one tutoring web application, which is one of the platforms in their online education ecosystem.

With the providing of a large collections of subjects as well as associated experts, the system aims to achieve millions of successful tutoring sessions per month for learners in different walks of life in irrespective of timezones and locations.

### The Challenges

Online tutoring system at a single glance seems to be just another traditional website. However, during the requirement analysis phase with our customer, we discovered that there would be further potential challenges that could seriously cause an interruption of our customer’s services, which also mean leading to the lack of trust from those who are using the tutoring service. Some of the challenges that we need to be extremely careful taking into account:

* Smoothly and seamlessly serving millions of tutoring sessions concurrently
* Video streaming should be able to be optimized for slow internet connections
* In case of unexpected interruption of internet connection during a tutoring session, saving and resuming the most recent video streaming should be feasible.
* Learners and tutors might be in different timezones. Which means there should be under background timezone converting without causing any confusion for user experience.
* Payment details and other private information should be secured with the highest technological supports.
* The system should be able to seamlessly integrate with other existing LMS systems such as Blackboard, Canvas, and Moodle.
* Learners should be able to be suggested the most relevant tutors based on their preferred subjects and other’s factors.

Industry: Education, E-Learning

### The Solutions

In order to meet our customer’s business requirements as well as other non-functional requirements, we need to apply existing technologies/frameworks as well as develop our in-house technologies:

* Cloud server: Amazon Web Services
* Architecture: Serverless
* Technologies/frameworks: React, Amplify, AppSync, GraphQL, DynamoDB, Cognito, NodeJS, Chime, Route53
* In-house technologies:\
  Framing Optimizer: for optimizing video frames in slow internet connections\
  Collaborative filtering Algorithms: for suggesting the most relevant tutors to learners\
  External Adapter: for converting neutral data formats to integrate with other LMS systems

![about](https://staging.innomizetech.com/static/tutoring-3b82156160dcd98e7b4d1943e977eed4.png)

### Results

The project goes live and exceeds our customer expectations:

* The system can scale up to serving millions of tutoring sessions concurrently
* Tutors and students from different timezones can interact without any interruption
* With the support of Amazon Cognito, user’s data is highly secured
* EC2 instances can be used as hosts to optimize for video streaming
* The system can process thousands of data records without causing any issues
* The customer revenue has increased 70%

<!--EndFragment-->