# Brazilian Gender predict <img src="https://cdn.countryflags.com/thumbs/brazil/flag-button-round-250.png" width="32" height="32" title="Brazil" />

[![TypeScript](https://camo.githubusercontent.com/56e4a1d9c38168bd7b1520246d6ee084ab9abbbb/68747470733a2f2f62616467656e2e6e65742f62616467652f69636f6e2f547970655363726970743f69636f6e3d74797065736372697074266c6162656c266c6162656c436f6c6f723d626c756526636f6c6f723d353535353535)](https://github.com/ellerbrock/typescript-badges/) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

While I was searching for a NodeJS library that could predict a person gender by its name, I've come across this blog: https://fmeireles.com/blog/rstats/genderbr-predizer-sexo/

So it gave me the idea I need to build up my own lib, since I didn't find anything similar in npm.

Original library has a lot of options that don't suit my project, so I didn't write them down. Maybe one day.

## Getting Started

You can install the package via npm or yarn

```bash
npm install br-gender
```

```bash
yarn add br-gender
```

## Example

Usage is pretty straightforward. Import genderByName from package and pass a name to it.

```js
import genderByName from 'br-gender';

const gender = await genderByName('Thiago');
// OUTPUT: 'Male'
```

You can also pass a boolean property to get back the percentual of gender over every entry:

```js
import genderByName from 'br-gender';

const gender = await genderByName('Thiago', { percentage: true });
// OUTPUT: { gender: 'Male', percentage: 99.30}
```

## How it works under the hood

Basically, it searches the brazilian census API with the given name and sum all occurrences from both genders, male and female.
For example, if the given name is 'Thiago', it will perform a search from both genders and sum them. If the male percentage is greater than 95% over the total, so the gender of the name should be male.

I know it isn't perfect, but it suited my project back in the day.

## Authors

- **Thiago Vasconcellos** - _Initial work_ - [brzipcode](https://github.com/thiagovasconcellos/br-gender)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
