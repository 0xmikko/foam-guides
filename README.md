# Foam Guides
### Decentralised reviews powered by communities and FOAM maps 

#### Official site: https://foam-guides.space

#### Video presentation: https://youtu.be/cTeVtSCZB48

This project was designed from scratch for Gitcoin virtual hackathon Sustain Web3 

### Inspiration
New IT technologies gave us amazing opportunity, however today our life depends on them. Millions of people use Google Maps as one source of knowledge and 
it means, that we depend on information which would be provide by monopoly. 

When you use centralised maps (like Google or Bing maps), you provide your private data to 3rd party company and they use it to show advertisements etc. Furthermore, you could not trust to reviews 
cause they weren't proofed with blockchain and could be changed by maps provider. Provider also declares that it has rights for all collected reviews and it means that you could not get reviews by API from another service.

### Solution

Decentralised review app is a good service which works with FOAM maps. FOAM provides incredible service for getting information about POI, and 3Box is used for keeping user reviews in decentralised world.
Together, these two powerful technologies create new customer experience.

FOAM idea is crowd map, and Foam Guides use reputation based on impact to Foam community as Guide rating. It motivates people to use Foam maps actively and create additional layer of trust for reviews (it's diffucult to create fake
reputation on Foam maps)

#### Onboarding

Onboardning is a crucial process, and I invested time to show brief service description on the first screen. So, there are three basic functions:
 
![1](https://user-images.githubusercontent.com/26343374/74374605-ce300f00-4def-11ea-94ad-fb2ca6643914.jpeg)

#### POI List 

Moving around the map, you can see the currents POI in the left window. To get detailed information - select one of the options and you will be on the screen with reviews. 
Each POI has an icon which shows its type.

![2](https://user-images.githubusercontent.com/26343374/74374613-d1c39600-4def-11ea-8864-27473eb7aa82.jpeg)

#### POI Reviews

It's core point, where you could see a list of reviews. It's crucial that reviews are ordered by social impact to Foam Map Community. Based on customer activity and verified POI, 
app calculates user score and use it as main metric. Users with higher scores have higher positions. Foam Guides uses gratification to motivate users for contributing to FOAM Maps through rank system: 
each user could go from Beginner to Expert. Rank depends on score.

Each review has star rating also and credentials which are automatically taken from 3Box accounts. 

![3](https://user-images.githubusercontent.com/26343374/74374619-d2f4c300-4def-11ea-96f8-d042db6ce0df.jpeg)

#### Writing new review

Write reviews dialog is designed for great customer experience. User could set rating and provide review. When user presses "Post" button, s/he could see emotional feedback when review will be submitted 
to system. New reviews immediately appears in in POI Reviews window.

![4](https://user-images.githubusercontent.com/26343374/74374621-d38d5980-4def-11ea-9b35-3298fc5d0a46.jpeg)

## Technical stack

React, FOAM API, 3Box API, Web3, Mapbox GL, etc.

## Disclaimer

This application is provided "as is" and "with all faults." Me as developer makes no representations or warranties of any kind concerning the safety, suitability, lack of viruses, inaccuracies, typographical errors, or other harmful components of this software. There are inherent dangers in the use of any software, and you are solely responsible for determining whether this software product is compatible with your equipment and other software installed on your equipment. You are also solely responsible for the protection of your equipment and backup of your data, and THE PROVIDER will not be liable for any damages you may suffer in connection with using, modifying, or distributing this software product.
