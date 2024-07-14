# Hotels list in React

## Initial instructions
We would like you to work on this coding test for us to see how you would approach building a feature. We think you should spend about 4 hours on the code test, we consider it a starting point to extend and modify in our technical interview with you.

### User Story to Implement

As a user of Qantas Hotels I would like to see a list of hotels that can be sorted by price.

### More Information

Use the attached image of the search page as a guide and feel free to use any technology that you are comfortable with.
It is not necessary to match the given design pixel-perfect, e.g. you can use a default font and red and green. Try to stick to the general layout though and don't deviate too much.

We are also providing you with a sample API response in form of a JSON file that should be used to generate the results on this page.

Please implement these two sorting options:
- Price (high-low)
- Price (low-high)

Star ratings on hotels are divided into two types: ‘star’ and ‘self’ rated. Properties that are ‘self’ rated use a circle icon and properties that are ‘star’ rated use a star icon.

We value writing well tested code at Qantas Group Accommodation and would like to see tests around any code you write.

You can assume this app to only be run in modern browsers (Chrome, Safari, Firefox) supporting recent features.

### Included files

- JSON payload
- Mock of Qantas search results page
- Qantas Logo

### Deliverables

- source code
- commit history
- instructions to run the app, tests, etc.
- a readme with comments about your approach and trade-offs you possibly made

## Usage

Install the dependencies:

```sh
yarn install
```

Run dev server:

```sh
yarn dev
```

## Notes on the build

### Features
- If there are no hotels, a specific message is displayed.
- If there are hotels:
  - The number of results is displayed,
  - The sorting options are displayed,
  - The results are displayed, in the default order.

### Testing
As I didn't feel I'd have enough time to complete the whole feature with real testing implemented and proper styling, I preferred to leave it out, and rely on typing. This is not a replacement for production code, but a trade-off for this exercise.

### Typing
I considered all the data would be provided per hotel, apart from the saving part as it's missing for one of the results. I used a few `enum`s to narrow down the typing when it seemed useful.

### Rating
The implementation of the rating styling is based/copied from Nikita Hlopov (https://nikitahl.com/star-rating-with-css). A rating I found last year and already implemented previously. I added the value as a custom property to be able to display a dynmic value

### Styling
The BEM methodology is followed here, which creates a lot of classes but alloows for precise styling, considering the lack of "context".  
In production, I would consider using variables for colours, with a level of abstraction to decouple the actual colours from their usage (`$red: red;` => `$error-color: $red` => `color: $error-color;`)

#### Responsive design
The build is not espacially responsive, apart from the ellipsis appearing on the hotel name.  
An obvious implementation could have bee to have the image on top of the data (with a change in the definition of the grid and adjustement to the image), taking the full width of the result card.

## Enhancements to consider
- Implement proper testing,
- Implement links to reach the hotel/offer
- 
## Boilerplate
I used a boilerplate from **Fernando Daciuk** (https://github.com/fdaciuk/boilerplate-vite-react) to which I added Sass support. I didn't change any other pre-defined setting.
