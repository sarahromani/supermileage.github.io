# supermileage.github.io

## Writing a New Post
This may look intimidating, but in reality it's quite simple! Just follow these steps:
- Navigate [here](https://github.com/supermileage/supermileage.github.io/tree/master/_posts) and click the `+` sign to create a new file. ![plus sign](images/readme-new-file.png)

## Installation

### Dependencies
- [npm](https://www.npmjs.com/)
- [Ruby](https://www.ruby-lang.org/)
- [RubyGems](https://rubygems.org/)
- [Bundler](http://bundler.io/) (`$ gem install bundler`)

### More Dependencies
- `$ npm install`
- `$ bower install`
- `$ bundle install`

## Running the Project
- `$ grunt`

You can now browse to [localhost:8000](http://localhost:8000/) to view the site. There's no need to restart grunt after you make changes, it will update automatically.

## Building the Project
- `$ grunt build`

If you're not running the `$ grunt` command which watches for changes, run this before each commit. It will compress and clean the CSS file (`build/style.css`).
