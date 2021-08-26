---
path: case-studies-details-billing-platform
technologies: |-
  ![](assets/javascript-typescript.svg)

  ![](assets/aws.svg)

  ![](assets/react.svg)
title: Billing Management Platform
devops: |-
  ![](assets/jenkins.svg)

  ![](assets/docker.svg)
project: Platform Project
client: US Finance Firm
location: New York, USA
architecture: d
thumbnail: assets/billing.jpg
featuredImage: |-
  ![](assets/1.png)

  ![](assets/1.png)
---
<!--StartFragment-->

### KEY Challenges

* The pre-bills manual review process is hard to track the status and takes more time to complete.

### Overview

The Billing Department of the client needs to generate, manage, and collaborate with their Attorneys to review the invoices before sending it to their clients. They generated invoices as .pdf files and brought the invoice then sent it to Attorneys to review. Basically, the process takes a month or more to finish a monthly period. Also, their billing users also need to upload LEDES files to more than 20 carrier sites.

After reviewing the process, and analyzing requirements, InnomizeTech’s team designed and built a platform that allows users to view, track, and review their assigned invoices easier and automate all steps from reviewing, tracking changes, and upload an invoice to third parties.

Size: 150 users

Industry: Law, Finance

### Solutions

InnomizeTech’s team proposed, designed, built, deployed, and monitoring the system design and Cloud architecture that intend to host on the AWS cloud allow the platform to scale seamlessly with the load, reliable, secure, efficient, and cost-effective systems in the cloud. Basically, the system speak into 4 components:

* Billing Portal is a serverless web application that supports user interfaces that allow user reviews, suggest edit changes, and track reviewing process automatically.
* Node APIs running on Amazon Lambda
* The headless automation running on AWS Fargate supports generating and upload LEDES files automatically which provide an end-to-end solution from reviewing, generating and upload invoice to various sites.
* The replication component which is a combination of one Node.js service running on client corporate data center and Amazon Lambda function to sync changes from the PerfectLaw app in real-time to Amazon Aurora database.

![about](https://staging.innomizetech.com/static/billing-platform-3b29d1d373da6a3d254df7203d4cfa8d.png)

### Technologies Stack

* Back-end: Node.js, AWS Lambda, API Gateway, Amazon Cognito, Amazon Fargate, Serverless Framework
* Front-end: Angular 7, Bootstrap, HTML/CSS, Amplify Framework
* Security: Amazon Virtual Private Cloud (VPC), VPN (Site-to-site), AWS System Manager, AWS Parameter Store
* Monitoring: Amazon CloudWatch, X-Ray, Dashbird
* Data Storage: S3, Amazon Aurora, Amazon ElastiCache (Redis)
* DevOps: Jenkins, CloudFormation, AWS CDK
* Others: AWS Route53, Certificate Manager, CloudFront, Amazon SES/SNS

### Results

The Billing Management Platform removes the manual process completely, increase productivity and reduce the number of billing users doing manually process

* Faster and increase productivity
* Digital transformation and remove manually process completely
* Mobile friendly which allow user access anywhere on any device
* Easy to track and manage the process
* Reduce cost by reducing staffs and infrastructure cost
* Convenient and easy to collaborate between users

<!--EndFragment-->