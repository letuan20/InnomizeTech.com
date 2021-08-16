import React from 'react';

import erp from '../../assets/images/services/ERP.svg';
import healthCare from '../../assets/images/services/Healthcare.svg';
import eCommerce from '../../assets/images/services/E-commerce.svg';
import finance from '../../assets/images/services/Finance.svg';
import realEstate from '../../assets/images/services/Real Estate.svg';
import fitness from '../../assets/images/services/Fitness.svg';
import eLearning from '../../assets/images/services/E-Learning.svg';
import retails from '../../assets/images/services/Retails.svg';
import law from '../../assets/images/services/Law.svg';

import serverless from '../../assets/images/services/StackIcon/Serverless Architecture.svg';
import nodejs from '../../assets/images/services/StackIcon/Nodejs.svg';
import springMVC from '../../assets/images/services/StackIcon/SpringMVC-SpringBoot.svg';
import springBoot from '../../assets/images/services/StackIcon/Spring Boot.svg';
import rubyOnRails from '../../assets/images/services/StackIcon/Ruby on rails.svg';
import dotNet from '../../assets/images/services/StackIcon/Net.svg';
import angular from '../../assets/images/services/StackIcon/Angular.svg';
import react from '../../assets/images/services/StackIcon/React.svg';
import mySql from '../../assets/images/services/StackIcon/My SQL.svg';
import Postgres from '../../assets/images/services/StackIcon/Postgres.svg';
import jenkins from '../../assets/images/services/StackIcon/Jenkins.svg';
import ansible from '../../assets/images/services/StackIcon/Ansible.svg';
import docker from '../../assets/images/services/StackIcon/Docker.svg';

import swift from '../../assets/images/services/StackIcon/Swift.svg';
import java from '../../assets/images/services/StackIcon/Java.svg';
import kotlin from '../../assets/images/services/StackIcon/Kotlin.svg';
import aws from '../../assets/images/services/StackIcon/AWS.svg';
import appSync from '../../assets/images/services/StackIcon/AppSync-AmplifyJS.svg';
import xamarin from '../../assets/images/services/StackIcon/Xamarin.svg';
import phoneGap from '../../assets/images/services/StackIcon/PhoneGap.svg';

import jest from '../../assets/images/services/StackIcon/Jest - Unit Test.svg';
import selenium from '../../assets/images/services/StackIcon/Selenium.svg';
import protractor from '../../assets/images/services/StackIcon/Protractor.svg';
import cypress from '../../assets/images/services/StackIcon/Cypress.svg';
import skilkTest from '../../assets/images/services/StackIcon/SilkTest.svg';
import msTest from '../../assets/images/services/StackIcon/MS Test Professional.svg';
import soapUI from '../../assets/images/services/StackIcon/SoapUI.svg';
import autoIot from '../../assets/images/services/StackIcon/AutoIT.svg';
import testShell from '../../assets/images/services/StackIcon/TestShell Studio.svg';
import bddFramework from '../../assets/images/services/StackIcon/BDD Framework.svg';

import javascript from '../../assets/images/services/StackIcon/JavaScript-TypeScript.svg';
import python from '../../assets/images/services/StackIcon/Python.svg';
import c from '../../assets/images/services/StackIcon/C-CPP.svg';
import php from '../../assets/images/services/StackIcon/PHP.svg';
import cSharp from '../../assets/images/services/StackIcon/C# (C- Sharp).svg';
import sql from '../../assets/images/services/StackIcon/SQL.svg';

import awsCloud from '../../assets/images/services/StackIcon/AWS Cloud.svg';
import chef from '../../assets/images/services/StackIcon/Chef.svg';
import vargrant from '../../assets/images/services/StackIcon/Vargrant.svg';

import Accordion from './accordion';

const ServiceDetailsContent = () => {
  return (
    <section className="services-details-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="services-details-desc">
              <h3>Business Domains</h3>

              <div className="row">
                <div className="col-lg-3 col-sm-6 col-md-6">
                  <div className="single-industries-serve-box">
                    <div className="icon">
                      <img src={erp} alt="erp" />
                    </div>
                    <p>ERP</p>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6 col-md-6">
                  <div className="single-industries-serve-box">
                    <div className="icon">
                      <img src={healthCare} alt="health Care" />
                    </div>
                    <p>Healthcare</p>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6 col-md-6">
                  <div className="single-industries-serve-box">
                    <div className="icon">
                      <img src={eCommerce} alt="E-commerce" />
                    </div>
                    <p>E-commerce</p>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6 col-md-6">
                  <div className="single-industries-serve-box">
                    <div className="icon">
                      <img src={finance} alt="Finance" />
                    </div>
                    <p>Finance</p>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6 col-md-6">
                  <div className="single-industries-serve-box">
                    <div className="icon">
                      <img src={realEstate} alt="Real Estate" />
                    </div>
                    <p>Real Estate</p>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6 col-md-6">
                  <div className="single-industries-serve-box">
                    <div className="icon">
                      <img src={fitness} alt="fitness" />
                    </div>
                    <p>Fitness</p>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6 col-md-6">
                  <div className="single-industries-serve-box">
                    <div className="icon">
                      <img src={eLearning} alt="eLearning" />
                    </div>
                    <p>E-Learning</p>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6 col-md-6">
                  <div className="single-industries-serve-box">
                    <div className="icon">
                      <img src={retails} alt="retails" />
                    </div>
                    <p>Retails</p>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6 col-md-6">
                  <div className="single-industries-serve-box">
                    <div className="icon">
                      <img src={law} alt="law" />
                    </div>
                    <p>Law</p>
                  </div>
                </div>
              </div>
           
              <Accordion
                title="Web Technologies"
                content={
                  <ul className="technologies-features">
                    <li>
                      <span>Serverless Architecture</span>
                      <div>
                        <img src={serverless} alt="serverless" />
                      </div>
                    </li>
                    <li>
                      <span>Nodejs</span>
                      <div>
                        <img src={nodejs} alt="nodejs" />
                      </div>
                    </li>
                    <li>
                      <span>SpringMVC/SpringBoot</span>
                      <div>
                        <img src={springMVC} />
                        <img src={springBoot} />
                      </div>
                    </li>
                    <li>
                      <span>Ruby on Rails</span>
                      <div>
                        <img src={rubyOnRails} />
                      </div>
                    </li>
                    <li>
                      <span>.NET MVC/ASP.NET</span>
                      <div>
                        <img src={dotNet} />
                      </div>
                    </li>
                    <li>
                      <span>Angular, React, React Native</span>
                      <div>
                        <img src={angular} />
                        <img src={react} />
                      </div>
                    </li>
                    <li>
                      <span>MySQL, Postgres, NoSQL</span>
                      <div>
                        <img src={mySql} />
                        <img src={Postgres} />
                        <img src={sql} />
                      </div>
                    </li>
                    <li>
                      <span>Jenkins, Ansible, Docker</span>
                      <div>
                        <img src={jenkins} />
                        <img src={ansible} />
                        <img src={docker} />
                      </div>
                    </li>
                  </ul>
                }
              />

              <Accordion
                title="Mobile Technologies"
                content={
                  <ul className="technologies-features">
                    <li>
                      <span>Swift</span>
                      <div>
                        <img src={swift} />
                      </div>
                    </li>
                    <li>
                      <span>Java/Kotlin</span>
                      <div>
                        <img src={java} />
                        <img src={kotlin} />
                      </div>
                    </li>
                    <li>
                      <span>ReactNative</span>
                      <div>
                        <img src={react} />
                      </div>
                    </li>
                    <li>
                      <span>AWS Mobile Services</span>
                      <div>
                        <img src={aws} />
                      </div>
                    </li>
                    <li>
                      <span>AppSync/AmplifyJS</span>
                      <div>
                        <img src={appSync} />
                      </div>
                    </li>
                    <li>
                      <span>Xamarin, PhoneGap</span>
                      <div>
                        <img src={xamarin} />
                        <img src={phoneGap} />
                      </div>
                    </li>
                  </ul>
                }
              />

              <Accordion
                title="Testing Technologies"
                content={
                  <ul className="technologies-features">
                    <li>
                      <span>Jest - Unit Test</span>
                      <div>
                        <img src={jest} />
                      </div>
                    </li>
                    <li>
                      <span>Selenium/Protractor</span>
                      <div>
                        <img src={selenium} />
                        <img src={protractor} />
                      </div>
                    </li>
                    <li>
                      <span>Cypress </span>
                      <div>
                        <img src={cypress} />
                      </div>
                    </li>
                    <li>
                      <span>SilkTest</span>
                      <div>
                        <img src={skilkTest} />
                      </div>
                    </li>
                    <li>
                      <span>MS Test Professional</span>
                      <div>
                        <img src={msTest} />
                      </div>
                    </li>
                    <li>
                      <span>SoapUI</span>
                      <div>
                        <img src={soapUI} />
                      </div>
                    </li>
                    <li>
                      <span>AutoIT</span>
                      <div>
                        <img src={autoIot} />
                      </div>
                    </li>
                    <li>
                      <span>TestShell Studio</span>
                      <div>
                        <img src={testShell} />
                      </div>
                    </li>
                    <li>
                      <span>BDD Framework</span>
                      <div>
                        <img src={bddFramework} />
                      </div>
                    </li>
                  </ul>
                }
              />

              <Accordion
                title="Programming Languages"
                content={
                  <ul className="technologies-features">
                    <li>
                      <span>JavaScript/TypeScript</span>
                      <div>
                        <img src={javascript} />
                      </div>
                    </li>
                    <li>
                      <span>Python</span>
                      <div>
                        <img src={python} />
                      </div>
                    </li>
                    <li>
                      <span>Java</span>
                      <div>
                        <img src={java} />
                      </div>
                    </li>
                    <li>
                      <span>C/CPP</span>
                      <div>
                        <img src={c} />
                      </div>
                    </li>
                    <li>
                      <span>PHP</span>
                      <div>
                        <img src={php} />
                      </div>
                    </li>
                    <li>
                      <span>Swift</span>
                      <div>
                        <img src={swift} />
                      </div>
                    </li>
                    <li>
                      <span>C# (C- Sharp)</span>
                      <div>
                        <img src={cSharp} />
                      </div>
                    </li>
                    <li>
                      <span>Ruby</span>
                      <div>
                        <img src={rubyOnRails} />
                      </div>
                    </li>
                    <li>
                      <span>SQL</span>
                      <div>
                        <img src={sql} />
                      </div>
                    </li>
                  </ul>
                }
              />

              <Accordion
                title="Devops"
                content={
                  <ul className="technologies-features">
                    <li>
                      <span>Jenkins</span>
                      <div>
                        <img src={jenkins} />
                      </div>
                    </li>
                    <li>
                      <span>Ansible/Chef</span>
                      <div>
                        <img src={ansible} />
                        <img src={chef} />
                      </div>
                    </li>
                    <li>
                      <span>Docker</span>
                      <div>
                        <img src={docker} />
                      </div>
                    </li>
                    <li>
                      <span>AWS CloudFormation/CDK</span>
                      <div>
                        <img src={awsCloud} />
                      </div>
                    </li>
                    <li>
                      <span>AWS Developer Tools</span>
                      <div>
                        <img src={aws} />
                      </div>
                    </li>
                    <li>
                      <span>Vargrant</span>
                      <div>
                        <img src={vargrant} />
                      </div>
                    </li>
                  </ul>
                }
              />
           
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsContent;
