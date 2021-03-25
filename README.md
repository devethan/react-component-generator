# react-component-generator

Customized component template generator for React-native. (ReactJS will also be added)

Once setup this module on your project, you can easily add a component that follow your specific guideline. 👍

## Installation

### Module install

```sh
# npm
npm install @enoveh/react-component-generator

# yarn
yarn add -D @enoveh/react-component-generator
```

### Add script

```json
// package.json on rootDir
{
  "scripts": {
    "comgen-init": "comgen init",
    "comgen-generate": "comgen generate"
  }
}
```

## Usages

### Init

```sh
yarn run comgen-init
```

You can configure where the component will be generated. And then `.comgen` folder will be created on `<rootDir>`. This includes all of the `.comgen` configurations following below structure.

```text
.comgen/
├─ templates // each properties presents thier template
│  └─ Component.tsx
│  └─ Component.test.tsx
│  └─ styles.tsx
│  └─ types.ts
└─ config.json
```

### Generate Component

```sh
yarn run comgen-generate <Component_name>
```

Just executes above command, it can generate all of files of the component to the location that you've specified.

You want to change the file structure? All you have to do is change the code.

## Result

```text
<specified_component_root_loc> // default as src/components
├─ __tests__
│  └─ Component.test.tsx
├─ index.tsx
├─ styles.tsx
├─ types.ts
└─ config.json
```

## TODO

- Put in the name of component when the component generated
- Error handling
- Configure options for `jsx`, `tsx`
- Setup options on CLI
