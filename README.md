# react-repeat-component

Render any component/element `N` times, in _ascending or descending_ order. The wrapper can be any component/element as well. 

_[Heavily inspired](https://giphy.com/gifs/cat-food-raccon-HUtsjiqzv1M9a/tile) by the Official React Docs section **JSX In Depth** - [Functions as Children](https://facebook.github.io/react/docs/jsx-in-depth.html#functions-as-children)._ 😁

## Rationale

Let's say you just want to repeat `10` times an element, a custom component, whatever, but you don't have an `Array` to `map()` and render those elements. So, you end up doing something like:

```
class ProgressBar extends React.Component {
  render() {
    let steps = [];
    for (let i=0; i < 10; i++) {
      steps.push(<Step key={i} id={`step-${i}`}></Step>);
    }
    return(
      <div className="progress-bar">{steps}</div>
    );
  }
}
```

Not bad... Just a bit ugly isn't it? But then, you eventually end up repeating that pattern again and again, copy-pasting the same chunk of code. No worries, this dumb stateless component is here to help!

# Examples

This is how to achieve the same result using the `<Repeat>` component.

```
class ProgressBar extends React.Component {
  render() {
    return(
      <Repeat times={10} className="progress-bar">
      {(i) => <Step key={i} id={`step-${i}`}></Step>}
      </Repeat>
    );
  }
}
```

To change the **order** and/or the **wrapper** element, just use like this:

```jsx
<Repeat times={10} order="desc" wrapper="p" className="repeater">
  {(i) => <span key={i}>{i + 1}</span>}
</Repeat>
```

And finally, take in mind that **you can pass any other additional property you need for the `wrapper`** (I used `className` just to illustrate that).


## The API in a nutshell

```js
Repeat.propTypes = {
  times   : PropTypes.number.isRequired,
  order   : PropTypes.oneOf(['asc', 'desc']).isRequired,
  wrapper : PropTypes.string.isRequired
};

Repeat.defaultProps = {
  order   : 'asc',
  wrapper : 'div'
};
```

## Installation

```
npm i -S react-repeat-component 
```

```
yarn add react-repeat-component 
```

# Contributing
Please, feel free to open any issue / pull request. 🙏

# License
MIT.🚶️
