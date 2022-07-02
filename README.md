# Pay&Go
GA Project 2 
[Live Demo](https://ngsuwen.github.io/pay-go-ts)

Dunny Users for login:
|  User Id  | Password                                                                                           |
|   :-:   | ------------------------------------------------------------------------------------------------- |
| johnd  | m38rmF$ |
| mor_2314  | 83r5^_  |
| kevinryan  | kev02937@  |
| donero  | ewedon  |
| derek  | jklg*_56  |
| david_r  | 3478*#54  |
| snyder  | f238&@*$  |
| hopkins  | William56$hj  |
| kate_h  | kfejk@*_  |
| jimmie_k  | klein*#%*  |

## Project Description
A One Page ecommerce mock-up that displays products from FakeStoreAPI. Users can experience the full online shopping procedure from browsing of products to checking out. (Preview below)

## Technologies
* **Javascript**
* **React** 
* **Material UI** 

## APIs used
* [fakestore (dummy products)](https://fakestoreapi.com/docs)
* [currency conversion rate](https://github.com/fawazahmed0/currency-api)

## Accomplishments
Users are able to: 
* Sign in / out
* Browse products based on categories
* Sort products by name and price
* View in 6 different currencies
* View product details
* Add products to cart

Mobile-friendly webpage with the following structure:
* Header
* Nagivation tabs
* Content body
* Footer

## Difficulties Faced
* **Material UI:** Since this was my first time using MUI, I had to take some time to read up on the documentation. The first few days were confusing, especially when it comes to customizing CSS and themes. However, once I got used to how MUI works, the process became much smoother later on. 
* **Flow of code:** There were times when my code did not read in the sequence I expected. This was a problem for me when I had to update multiple states and re-redner on one single click. To help me better understand the flow, I used 'console.log()' to help me track the current state during the process. 
* **States, States, STATES:** I had to use a lot of different states in this project, and some of them are even used across different components. It became really confusing to me at one point when I had different states with similar names being used everywhere. Lesson learnt: I need to name my states properly to avoid confusion :sweat_smile:

## Personal Reflection
I feel that I still have a lot to learn / get used to in terms of making my code efficient and less confusing. For example, whenever I create a new state, I will ask myself if it is necessary, and where it will be used. This helps me to decide where I should create my state in and how I pass the state to the relevant components. 
Another area for improvement is how I implement my CSS styles. Currently, I use a lot of in-line styles, with some that are repeated multiple times. I could have used a different mmethod that requires less repetitions of codes (eg. MUI theme, CSS classes)

If only I knew... Things I would have done differently :thinking:: 
* Use divs and flex-box instead of table form for the footer: With the current table form, I cannot convert the footer to a single column when viewed on mobile (unless I create a new component for it). 

## Snapshot Previews
<p float="left">
<img src="https://user-images.githubusercontent.com/88722847/142601174-ed57eb0e-5050-44bc-994a-5274ec1e036c.png" width="45%" height="275px"/>
<img src="https://user-images.githubusercontent.com/88722847/142601407-127f8a78-9af6-4877-bd9e-6af9a9cfa324.png" width="45%" height="275px"/>
<img src="https://user-images.githubusercontent.com/88722847/142601465-55632c1e-a62b-43e9-a0b3-7827a29485bf.png" width="45%" height="300px"/>
<img src="https://user-images.githubusercontent.com/88722847/142601552-f896e431-d58b-4004-8a81-2457347065cd.png" width="45%" height="300px"/>
</p>

**Mobile**
<p float="left">
<img src="https://user-images.githubusercontent.com/88722847/142604375-9215c578-6cd4-42c1-b113-857afc624378.gif" width="200"/>
<img src="https://user-images.githubusercontent.com/88722847/142604387-77e5c563-31ae-4d34-8245-86de1b6ee910.gif" width="200"/>
<img src="https://user-images.githubusercontent.com/88722847/142606766-1fa56d65-eb1a-4d84-b39a-19984305af02.gif" width="200"/>
<img src="https://user-images.githubusercontent.com/88722847/142604552-1e0b32cc-44cb-4ebe-98c7-7013217c5ad0.gif" width="200"/>
</p>
