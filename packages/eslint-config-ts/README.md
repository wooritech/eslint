# @wooritech/eslint-config-ts

이 패키지는 우리테크 JavaScript/React/TypeScript 개발을 위한 ESLint 구성용 패키지입니다.

## 사용하기

### 설치

```sh
npm install --save-dev @wooritech/eslint-config-ts
```

### Peer Dependencies

이 패키지는 packages.json 의 peerDependencies 섹션에 몇 가지 의존적인 패키지가 있습니다. 프로젝트에서 아직 이 패키지들의 해당 버전이 설치되어 있지 않다면 설치단계에서 경고가 발생합니다.

해당 패키지들은 버전의 충돌을 방지하기 위해 `npm install --save-dev <package>`의 형식으로 각각 설치해햐 합니다.

만약 해당 패키지들의 다른 버전을 사용하지 않는 사실이 명확할 경우 **npm 5** 이상에서 **npx** 를 통해 일괄로 설치할 수 있습니다.

```sh
npx install-peerdeps --dev @wooritech/eslint-config-ts
```

### Configuration

우리테크의 ESLint 환경 구성을 위해 아래의 코드를 package.json 파일에 추가하세요.

```json
"eslintConfig": {
  "extends": "@wooritech/eslint-config-ts"
}
```