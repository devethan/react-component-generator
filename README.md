# react-component-generator

컴포넌트 생성 위치 설정, 템플릿 커스터마이징이 가능한 가벼운 템플릿 생성 CLI입니다.

컴포넌트 생성과 함께 테스트 파일과 스타일 파일을 페어로 생성합니다.

원하는 템플릿을 커스터 마이징 가능하도록 설정 파일로 분리했습니다.

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
    ...
    "comgen-init": "comgen init",
    "comgen-generate": "comgen generate",
  }
}
```

## Usages

### Init

```sh
yarn run comgen-init
```

You can configure where the component will be generated. And then `.comgen` folder will be created on `<rootDir>`. This includes all of the comgen configurations.

### Generate Component

```sh
yarn run comgen-generate <Component_name>
```

## Result

## TODO

- Put in the name of component when the component generated
- Error handling
- Configure options for `jsx`, `tsx`
- Setup options on CLI
