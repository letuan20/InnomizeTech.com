---
path: dynamic-multi-database-application-with-spring-boot
date: 2021-08-19T08:19:08.072Z
hashtags: Java, Spring Boot, Hibernate
title: Dynamic Multi Database Application with Spring Boot
author: " Hiep Dinh"
position: Leader
image: https://cdn-images-1.medium.com/max/400/0*Wi4mPW2xLbZ9nwXQ
---
<!--StartFragment-->

This post is originally published on [our blog](https://blog.innomizetech.com/2019/11/05/how-to-toggle-vpc-configuration-per-stage/).

[This guy has asked the serverless forum](https://forum.serverless.com/t/exclude-vpc-config-for-different-enviornments/9756) for a solution to implement it. That is why I wanted to write this post to describe how to toggle **VPC** configuration per stage. I hope it can help you and save your time :)

If you are working on the [Serverless](https://serverless.com/) framework to build your application on AWS. You possibly wanted to run your Lambda functions under your private Vpc to protect your functions and hide it from the world. But sometimes, you might want to run your function without **VPC** such as for non-production environments.

![](https://miro.medium.com/max/1278/0*0ZpAdhUaJxduDwOV)

*Vpc on AWS Lambda*

Basically, we can disable **Vpc** configuration for Lambda function by either:

* Omit the **vpc** property in the **provider** configuration.
* Or you can set both **securityGroupIds** and **subnetIds** as an empty array.

Based on the above logic, we can define a property in the **custom** prop as below:

[A serverless example for configuring different vpc per stage](https://medium.com/media/286e12b3f405d835d9f4aec67d6df198)

With the above configurations, deploy to the **dev** stage will not add your lambda functions to a Vpc, but deploy to the **prod** stage will add your lambda functions to your desired Vpc.

You can refer to some plugins I added in the *serverless.yml* file, it can be used to create your Vpc automatically or discover from the AWS account.

* [serverless-vpc-plugin](https://www.npmjs.com/package/serverless-vpc-plugin)
* [serverless-vpc-discovery](https://www.npmjs.com/package/serverless-vpc-discovery)

If you want to have a try, you can check out [our repo](https://github.com/hoang-innomizetech/serverless-toggle-vpc-example) on Github.

Should you run into issues while practicing the steps outlined in this article, I encourage you to reach out to me. You can get in touch with me through my Twitter handle [@hoangleitvn](https://twitter.com/hoangleitvn)

Visit our [blog](https://blog.innomizetech.com/) for more interesting articles. If you have any questions or need help you can contact me via [Twitter](https://twitter.com/hoangleitvn).

Thank you for reading!

<!--EndFragment-->