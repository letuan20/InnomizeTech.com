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

## The Maven Dependencies

Creating a DataSource implementation programmatically is straightforward, overall.\
Here is the list of Maven dependencies.

```
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter</artifactId>
</dependency>
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-web</artifactId>
</dependency>
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
<dependency>
	<groupId>mysql</groupId>
	<artifactId>mysql-connector-java</artifactId>
</dependency>
```

To support MySQL, our classpath must include the MySQL database connector dependency. We use starter-web to demonstrate usage via an HTTP request.

## Datasource Router

AbstractRoutingDatasource requires information to know which actual DataSource to route to. This information is typically referred to as a Context.\
In our example, we’ll use the notion of a DBTypeEnum as our context with the following implementation:

```

```

Another common use case involves using the notion of an Environment to define the context. In such a scenario, the context could be an enum containing PRODUCTION, DEVELOPMENT, and TESTING.\
The context holder implementation is a container that stores the current context as a ThreadLocal reference.

```

```

Finally, we define our ClientDataSourceRouter to extend the Spring AbstractRoutingDataSource.

```

```

## Database Connection Settings with application.properties file

```

```

## Configuration

```

```

In this example, the **mainDataSource** is the default data source and we can use it to retrieve client/customer information (via authentication process,…).

# Testing the dynamic multiple data sources

**Creating a JPA Entity**

```

```

**A Simple Repository Layer**

```

```

**Testing**\
Lastly, we need to check that our programmatically-configured DataSource is actually working. We can easily accomplish this with a rest API. Note, when using our AbstractRoutingDataSource, we first set the context(via AOP, authentication process,…) and then perform our operation.

```

```

# Conclusion

When dealing with just one data source and Spring Boot, data source configuration is simple. Spring Boot can provide a lot of autoconfiguration. However, if you need to connect to multiple data sources with Spring Boot, additional configuration is needed.\
You need to provide configuration data to Spring Boot, customized for each data source.

<!--EndFragment-->