# Vehicle-Tracking-System.pdf

# Vehicle Tracking System 

Jimmy Wong Wei Min, Nurfauza Jali, Wang Yin Chai  

 Abstract: The increased rate of vehicle theft led to increasing concern among vehicle owners. In addition, most of the smaller car rental companies or personal car rental are also a concern when their rented vehicles are not returned on the date line. Thus, the purpose of this project is to study and analyse the existing vehicle tracking system. Next, a tracking system is configured and developed using the Internet of Things platform (Arduino) and web-based application. Then, the usability and functionality of  the Global Positioning System and Global System for Mobile Communications module are tested together with Arduino to get the location for vehicle tracking. This project is developed using the Extreme Programming methodology. During the planning phase, requirements are gathered through a questionnaire from 40 participants. Requirements and data collected are analysed, and features that need to be included are identified. Iteration starts at design phase where every time there are changes to the system, the design needs to be changed first. Coding is done based on the features, functions, flows, and interfaces from the design phase. The code is tested before small release of part of the system. Feedback is gathered from the user after every small release of the system during the iteration. The completed system enables vehicle owners to track their vehicle through web application or Short Message Service (SMS) anytime, anywhere.   Index Terms: Arduino, GSM, GPS, SMS, Vehicle Tracking System, IoT, Tracking, Real-time.   

——————————      —————————— 

1 INTRODUCTION                                                                     

EHICLE Tracking System is developed using a web-based and an IoT platform (Arduino), which act as a tracking device. This system is developed for all vehicle users to provide easy tracking of their vehicle location. Before tracking the vehicle, the users will need to register via the web and install the tracking device (Arduino) on their vehicle. The system consists of Arduino Uno R3 microcontroller, Global Positioning System (GPS) module and Global System for Mobile Communications (GSM) module for the IoT platform. More specifically, the Arduino Uno R3 microcontroller is the main controller that controls and interacts with GPS and GSM modules. GPS module is responsible for getting the location in the form of latitude and longitude from the satellite. The location will then send to the Arduino microcontroller and processed before being redirected to the GSM module. In the meantime, the GSM module is responsible for sending the location to the users via Short Message Service (SMS) or data transfer to the web-server. This tracking device is installed inside the vehicle where it is not visible to anyone. Tracking can be done in two ways. The first one would be via a web-based application, where user login to the system. Then, the user needs to register the tracking device and also a contact number for tracking via SMS. The user clicks on the track button and is redirected to the tracking page where the location of the vehicle is marked on the map embed to the webpage. The second way is through SMS. Users only need to send a valid tracking command to the tracking device. The tracking device checks if the command and phone number are valid before replying to the user current location of the vehicle. The quick overview of the overall system flow is shown in Figure 1.  

2 MATERIALS & METHODS  2.1 Study of Previous Work Features from previous related works are reviewed and 

compared to get the possible features essential to be included in the proposed system. The three previous related works mentioned are GPS-GSM based Vehicle Tracking System [1] in 2018, Real-Time Vehicle Tracking System Using Arduino, 

GPS, GSM and Web-Based Technologies [2] in 2018, and, lastly GPS and GSM Based Vehicle Tracking System [3] in 2019. Based on their works, general features and technical 

V 

————————————————  Jimmy Wong Wei Min is graduated from degree program in Software 

Engineering in Universiti Malaysia Sarawak (UNIMAS), Malaysia. E-mail: jimmywong@live.com.my 

 Nurfauza Jali is currently a senior lecturer in Universiti Malaysia Sarawak (UNIMAS), Malaysia. E-mail: jnurfauza@unimas.my 

 Wang Yin Chai is currently a professor in Universiti Malaysia Sarawak (UNIMAS), Malaysia. E-mail: ycwang@unimas.my 

Fig. 1. The Quick Overview of Vehicle Tracking System 

features of the existing previous works are compared side-by-side with the proposed system. General features are compared as shown in Table 1. Criteria that are going to be compared are the hardware used, general features and the functionalities of the systems. Based on the comparison, most general features are available in the majority of the systems, be that the existing systems or the proposed system. However, few key features that are only included in the proposed system include dashboard, user authentication, tracking device management and user contact number management. The dashboard is basically a quick glance for the user after user is logged in to the web system. User authentication which features basic authentication such 

as register, login and logout are essential for a system, be it a mobile application or web application. This ensures privacy for all the users that are using the web system to their own vehicle. Next, tracking device management is one of the modules included in the web system. User will only track vehicle location after adding the unique tracking device into the web system. Besides that, user contact number management is also part of the web system‘s module. This module enable user to manage own contact number in the web system. Basically, this is used as validation when user track vehicle location via SMS and with this validation, only contact number which is registered can get the vehicle location from tracking device via SMS. 

After comparing the general features between the existing systems and the proposed system, the technical features are identified and compared in Table 2. Based on the technical comparison in Table 1, the GPS module accuracy provided by the authors of the reviewed existing system is within 10 meters. The GPS accuracy of the proposed system is also expected to be within 10 meters as all the reviewed existing 

systems and the proposed system are using s similar GPS module which is the GY-NEO6MV2. However, a slight difference as the proposed system uses the GY-NEO6MV2 GPS module with NEO-M8N chip compared to NEO-6M on the other three existing systems. The authors from the three reviewed existing systems did not showcase the benchmark or the GPS accuracy testing on their paper. Nevertheless, the 

TABLE 1 GENERAL FEATURES COMPARISON BETWEEN THE EXISTING SYSTEMS AND THE PROPOSED SYSTEM 

Features 

GPS-GSM based Vehicle Tracking 

System 

Real-Time Vehicle Tracking System Using 

Arduino, GPS, GSM and Web-Based 

Technologies 

GPS and GSM Based Vehicle Tracking 

System Proposed System 

Open-Source ✓ ✓ ✓ ✓ 

Microcontroller ✓ ✓ ✓ ✓ 

GSM Module  ✓ ✓ ✓ ✓ 

Transmitting Location Data via GPRS ✕ ✓ ✕ ✓ 

Sending SMS vis GSM Module ✓ ✕ ✓ ✓ 

GPS Module for getting Geolocation Data 

✓ ✓ ✓ ✓ 

Web-Based Application ✕ ✓ ✕ ✓ 

Mobile Application ✓ ✕ ✕ ✕ 

Dashboard ✕ ✕ ✕ ✓ 

User Authentication  ✓ ✕ ✕ ✓ 

Tracking Device Management ✕ ✕ ✕ ✓ 

User Contact Number Management for Validate User‘s Phone Number 

✕ ✕ ✕ ✓ 

View Real Time Vehicle Location Marked in Map  

✓ ✓ ✕ ✓ 

TABLE 2 TECHNICAL FEATURES COMPARISON BETWEEN THE EXISTING SYSTEMS AND THE PROPOSED SYSTEM 

Features GPS-GSM based Vehicle 

Tracking System 

Real-Time Vehicle Tracking System Using Arduino, 

GPS, GSM and Web-Based Technologies 

GPS and GSM Based Vehicle Tracking System Proposed System 

GPS Module Accuracy Within 10 meters Within 10 meters Within 10 meters Within 10 meters 

RESTful API ✕ ✕ ✕ ✓ 

Responsive Framework Not applicable ✕ Not applicable ✓ 

Map API ✕ ✓ ✕ ✓ 

NMEA Data Protocol and GGA Fix Data 

✓ ✓ ✓ ✓ 

TinyGPS / TinyGPS++ Library 

✓ ✓ ✓ ✓ 

proposed system will conduct a GPS accuracy test by comparing and computing the distance of 10 consecutive coordinates with the actual point. Later, the average distance is calculated to get the more precise GPS accuracy of the NEO-M8N powered GY-NEO6MV2 GPS module. The detailed GPS module testing is covered in GPS accuracy testing section. Next, the second and unique technical feature that is only available in the proposed system is RESTful API. REST is an architectural style that describes a collection of architectural restrictions and agreements as such; RESTful is the API that satisfies the REST restrictions [4]. RESTful API is created in Laravel for network communication of applications with other applications. HTTP methods such as GET, POST, PUT and DELETE are used to create, read, update and delete (CRUD) operations of the resource. RESTful API is used in the proposed system for web applications and the tracking device to communicate with the back end for CRUD operations. The third feature is a responsive framework. This feature is also unique and only available in the proposed system. The responsive framework provides frameworks and tools that emphasise the layout and content of the web application. The 

responsive framework that will be used in the proposed system is Vuetify. Veutify is an open-source MIT project for web and mobile application front-end development. As the name suggests, Vuetify is used in Vue.js framework. For the Vue application, Vuetify is the most extensive UI component library that meets the standards of Google Material Design [5]. Similar to Bootstraps, Vuetify also feature grid system. A grid system is responsible for providing a responsive display for different screen sizes and devices. Besides that, Vuetify has a lot more UI components that can be used in front-end development. The fourth technical feature is Map Application Programming Interface (API). Map API is used in the second existing system, Real-Time Vehicle Tracking System Using Arduino, GPS, GSM and Web-Based Technologies, and the proposed system. Map API used for both these systems is Google Maps API. Map API is used to integrate and embed the map into the web application. Live location is marked on the map that is embedded in the webpage. For Google Maps to works on the web application, developers need to create the Google Maps API key and add the key to the request where the maps are loaded in the web application 

2.2 Overview of Proposed System The completion of this project can ease the vehicle owner to track their own vehicle when their vehicle is missing. Besides that, vehicle owners that are doing personal vehicle rental or run small rental businesses can benefit from this system as well. They can monitor their own vehicle anytime besides during critical times when their vehicles are not returned after the date-line. The proposed Vehicle Tracking System consists 

of a web-based system and an IoT platform. The web-based system is developed using Vue.js as front-end and Laravel as back-end. Meanwhile, the IoT platform is the tracking device of the system, which consists of Arduino as a microcontroller, SIM800L as a GSM module, GY-NEO6MV2 as a GPS module and other modules which is required for assembling the modules together.  

The overall flow of the proposed Vehicle Tracking System is shown in Fig. 2. Two types of users which consists of administrator and normal user login into the system. Then, the system checks if the user is an administrator or a normal user. The administrator is redirected to the administrator page, where the administrator can manage the user. Meanwhile, a 

normal user is redirected to the dashboard and the user can update own profile, manage the tracking device, manage contact and track vehicle location. The user and administrator partition in the activity diagram in Fig. 2 represents the web-based Vehicle Tracking System. On the other hand, the tracking device partition represents the IoT platform (Arduino) of the Vehicle Tracking System. After the tracking device is 

powered on, the GPS module searches for the GPS signal and fetch the location from the satellite after getting the GPS signal. The location data is sent to the server via GSM module through the microcontroller. In the meantime, the GSM module is actively checking if there is incoming SMS from the user. GSM module will reply to the user with the location data if 

there is a request sent from the user via SMS. 

Next, a design on the connection between modules in the tracking device is depicted as shown in Fig. 3. Arduino Uno R3, SIM800L GSM module and GY-NEO6MV2 GPS module are the essential modules in this tracking device prototype. After some findings, LM2596 stepdown converter is added together with a 7.4V LiPo battery to power only the SIM800L. Although the Uno board can supply the 5V power to the SIM800L, the current from the Uno board is not enough; especially the SIM800L is connecting to the network and GPRS. SIM800L requires a peak current of 2A when connecting to the network and GPRS. This can be achieved by a 7.4V LiPo battery which supply enough 2A for the SIM800L. However, the 7.4V from the LiPo battery will fry and destroy the SIM800L as the maximum input voltage is 5V. Hence, a stepdown converter, LM2596, is added between the LiPo battery and SIM800L. The voltage is adjusted to 5V before supplying power to the SIM800L. Then, the Uno board is powered separately by another power supply such as the 9V battery through the DC port or power bank through the USB connector. 

 The use case diagram shown in Fig. 4 is the design of the proposed system where all the actors and use cases are listed. The user is able to register an account, log in, update profile, manage tracking device, manage contact, and track vehicle location, while the administrator is only able to log in, update the profile and manage the user. The tracking device, on the other hand, can track vehicle location, get location, send location to the server, and send SMS.  

Fig. 2. Activity Diagram of the Proposed Vehicle Tracking System 

Fig. 3. Pinout Diagram of Tracking Device for Vehicle Tracking System 

3 RESULTS AND DISCUSSION The completion of the proposed system resulted in a tracking device prototype and a web-based system prototype. First, the tracking device prototype is assembled based on the design of the pinout diagram shown in Fig. 5.  Fig. 5 shows the assembled tracking device prototype for the proposed system. The tracking device prototype is tested to ensure it works as intended and few tests are performed are shown later in tracking device testing section. In addition, the GPS accuracy testing which is crucial for the Vehicle Tracking System is also conducted to ensure the average accuracy is within 10 meters and is featured in GPS accuracy testing section. 

     Next, a web-based system prototype is developed using Vue.js and Laravel framework. The user needs to register an account and login into the system. After login, the user needs to add the tracking device to the system; some of the details, including the tracking device IMEI, SIM card number on the tracking device and vehicle plate number, are unique. Details such as tracking device IMEI can be get from the SIM800L easily as it is printed on the module. Before the user can track the vehicle location, the user needs to power on the tracking device and place it in the vehicle. User can now view the latest five locations marked on the Google Maps in the tracking vehicle page, as shown in Fig. 6. The latest location is marked in red, while four previous locations are marked in blue. Besides, this page will show a list of all the vehicle location histories below the maps section. One thing to mention is the distance of the marker that is shown in the Fig. 6 varies each other as the vehicle speed directly affects the distance of the markers. The tracking device will send the current vehicle location to the server once around every 25 seconds. 

Fig. 6. Track Vehicle Page of Web-Based System Prototype 

Fig. 4. Use Case Diagram of Vehicle Tracking System 

Fig. 5. Tracking Device Prototype for Vehicle Tracking System 

As an alternative, user can also track vehicle location via SMS. First, user needs to add own contact details to the web system. Then, the user can now send SMS with the command phrase ‗Track‘ to the tracking device with the phone number registered in the web system. The tracking device will take some time to check for the sender‘s phone number in the server and will only reply if the phone number is verified by the server, as shown in Fig. 7.  

 The reply from the tracking device is in the form of Google Maps link so that user can directly click on the link and view the vehicle location marked in the Google Maps as shown in 

Fig. 8.  

 3.1 Tracking Device Testing The assembled tracking device prototype can be turned on and no issues are found on the tracking device hardware. However, detailed module testing is done to ensure every module, especially the Arduino Uno R3, SIM800L GPM module and GY-NEO6MV2 GPS module, can work together to get the vehicle location and send the location data to the server. The project code is uploaded to the tracking device via Arduino IDE with the debug mode turned on. All the AT commands can be seen directly on the Arduino IDE serial monitor by turning on the debug mode. After uploading the code to the tracking device, open the serial monitor to see all the AT commands run by the libraries involved. First, the GSM module is initialised and then then the GPS module will try to connect to the satellites to get a location fix. Once the location is fixed, the GPS will get the latitude and the longitude and pass them to the send location function. Send location function is run and will first start by connecting to the GPRS network. After successfully connect to the GPRS network, the GSM module initiates and sends HTTP requests to the server as shown in Figure 9.  

 The server returns the response value AOK which is set at the Laravel back-end API, indicating the HTTP request is successful, as shown in Fig. 10.   

Fig. 7. Send SMS and receive vehicle location link from tracking device 

Fig. 8. Vehicle location marked in Google Maps 

Fig. 9. Initiate and Send HTTP Request 

 Next, an SMS is sent to the tracking device to test if the tracking device can read the SMS and check for the SMS 

content and sender‘s phone number as shown in Fig.11. The GSM module receives the SMS from the user with the content ―Track‖ and the module recognises this content, which will then check for the user‘s phone number. After the server validates the user‘s phone number, the GSM module will reply to the user the current vehicle location as shown in Fig. 12. 

The ‗OK‘ at the last row indicates the SMS is successfully sent to the user. As a result, all the modules of the tracking device work as expected and thus passed the overall modules testing. Each of the module works and functions without issue when it is the turn to perform task.   

3.2 GPS Accuracy Testing The GPS accuracy is done at two different areas, housing area and town area. The GPS accuracy testing conducted at housing area and town area is shown in Table 3 and Table 4, respectively. The housing area is located at the 5 

th  Mile of 

Matang while the town area is located at the Matang Jaya township area and both these locations are in Kuching, Sarawak. The test is conducted by setting the actual point where the vehicle is parked, 10 consecutive coordinates send by the tracking device are then extracted. The distance between each extracted coordinates are computed with the actual point using the formula above. The average distance is then calculated to get a more precise GPS accuracy of the GPS module. Based on the average distance, both the average GPS accuracy is within 10 meters. GPS accuracy at the town area shows a lower average distance and thus, has a better accuracy compared to the test conducted at the housing area. One reason is because of the GPS signal, the GPS signal at the town area is stronger and hence, the GPS module is connected to more satellites. The satellites connected can reach up to 11 out of 12 when the tested at the town area compared to the maximum of 9 at the housing area. 

TABLE 3 GPS ACCURACY TESTING AT THE HOUSING AREA 

Location Latitude Longitude Satellites Distance from Actual Point (m) 

Actual Point 

1.5748225 110.2845800 - - 

1 1.5748720 110.2845600 8 5.936 2 1.5749063 110.2845400 7 10.320 3 1.5748794 110.2845600 8 6.706 4 1.5748699 110.2845700 8 5.387 5 1.5749176 110.2845900 7 10.630 6 1.5748165 110.2845800 7 6.672 7 1.5748315 110.2845200 8 6.744 8 1.5748091 110.2844900 7 10.110 9 1.5748231 110.2845200 8 6.670 

10 1.5748262 110.2845800 9 0.4114 

Average 69.5864/10 = 6.95864 ≈ 6.96 

Fig. 10. Get Response from Server 

Fig. 11. GSM module Read SMS and Check SMS Content 

Fig. 12. GSM Module Send Vehicle Location to User via SMS 

4 CONCLUSION This paper presents a Vehicle Tracking System developed using a web-based system and an IoT platform (Arduino) that help vehicle owners track their vehicle location. This system helps to accelerate the process to track the user‘s vehicle when necessary. The user is able to track the vehicle location in either through the web-based system or through SMS. Using the web-based system, users can view the current vehicle location marked on the Google Maps with the help of Google Maps API. Meanwhile, user can track the vehicle location through SMS by sending the track command and the tracking device will replies to the user the Google Maps link of the current vehicle location. Even though the system is completed, there are still a few project limitations due to the time and budget constraints as well as the knowledge limitations. One of the obvious limitations is the performance. Although the performance is acceptable, it can still be further improved by upgrading the tracking device hardware and modules in the future. For example, the GPS and GSM module which is now two separate modules can be upgraded to a module which have both the GPS and GSM functionalities. In addition, GPS and GSM module with A-GPS and 3G or even 4G capabilities would greatly increase both the performance and accuracy of the tracking device in which the current tracking device prototype does not support A-GPS and is only 2G capable. On the other hand, the current tracking device prototype runs on portable battery which is not the best in terms of reliability and endurance. Thus, in the future, the tracking device can be directly hardwired to the car battery with the help of third-party workmanship. 

 ACKNOWLEDGMENT  

REFERENCES [1] T. Karkera, A. Dubey, S. Kamalnakhawa, & S. Mangale, ―GPS-

GSM based Vehicle Tracking System,‖ International Journal of New Technology and Research, vol. 4, no. 3, pp. 140-142, 2018. 

[2] J. M. Mo Khin and D. N. Nyein Oo, ―Real-Time Vehicle Tracking System Using Arduino, GPS, GSM and Web-Based Technologies,‖ International Journal of Science and Engineering Applications, vol. 7, no. 11, pp. 433–436, 2018.  

[3] N. N. Hlaing, M. Naing, and S. S. Naing, ―GPS and GSM Based Vehicle Tracking System,‖ International Journal of Trend in Scientific Research and Development, vol. Volume-3, no. Issue-4, pp. 271–275, 2019.  

[4] M. Biehl, RESTful API design: APIs your consumers will love. API-University Press, 2016. 

[5] M. Wanyoike, ―How to Get Started with Vuetify,‖ SitePoint, 06-Aug-2020. [Online]. Available: https://www.sitepoint.com/get-started-vuetify/. 

TABLE 4 GPS ACCURACY TESTING AT THE HOUSING AREA 

Location Latitude Longitude Satellites Distance from Actual Point (m) 

Actual Point 

1.574682 110.297152 - - 

1 1.5746846 110.2971400 11 1.4 2 1.5746710 110.2971600 10 1.5 3 1.5746627 110.2972000 9 5.8 4 1.5746794 110.2971800 9 6.6 5 1.5746629 110.2971300 10 3.2 6 1.5747042 110.2971100 10 5.3 7 1.5747029 110.2971000 9 6.2 8 1.5746930 110.2971300 11 2.7 9 1.5746720 110.2971600 11 1.4 

10 1.5747093 110.2971600 10 3.1 

Average 37.2/10 = 3.72 