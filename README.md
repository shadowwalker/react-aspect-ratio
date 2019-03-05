# React Aspect Ratio

A react component for fixed aspect ratio layout in responsive design.

## Usage

### Add to your react app

``` bash
yarn add r-aspect-ratio
```

## Example

[![Edit react-aspect-ratio demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/74384m5w9j?fontsize=14)

``` typescript
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AspectRatio width="16%" ratio={1.6} className="Box" />
        <br />
        <AspectRatio
          width="32%"
          ratio={1}
          className="Box"
          minWidth={100}
          maxWidth={160}
        />
      </div>
    )
  }
}
```

## API

**AspectRatio** Props:

``` typescript
interface IProps {
  ratio: number            // height to width ratio in float
  width?: number | string  // px or %
  minWidth?: number        // px
  maxWidth?: number        // px
  className?: string       // className pass to root div
  children?: React.ReactNode
}
```

