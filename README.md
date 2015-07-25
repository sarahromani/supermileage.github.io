# supermileage.github.io

## Writing a New Post
Please see [this wiki page](https://github.com/supermileage/supermileage.github.io/wiki/Writing-a-New-Post) for instructions. If you are only going to be writing posts, you can ignore the rest of this readme.

## Installation

Clone the repo onto your own computer.

### Dependencies
Install the following (in order):
- [npm](https://docs.npmjs.com/getting-started/installing-node)
- [Ruby](https://www.ruby-lang.org/en/downloads/)
- [RubyGems](https://rubygems.org/pages/download)
- [Bundler](http://bundler.io/) (`$ gem install bundler`)

### More Dependencies
Navigate to the repo on your computer in terminal/cmd and run the following commands:
- `$ npm install`
- `$ bower install`
- `$ bundle install`

## Running the Project
In the same directory, run:
- `$ grunt`

You can now browse to [localhost:8000](http://localhost:8000/) to view the site. There's no need to restart grunt after you make changes, it will update automatically.

## Building the Project
- `$ grunt build`

If you're not running the `$ grunt` command which watches for changes, run this before each commit. It will build and minify the CSS file (`build/style.css`).
