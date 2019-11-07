# @wooritech/eslint-config

이 패키지는 우리테크 JavaScript/React/TypeScript 개발을 위한 ESLint 구성용 패키지입니다.

## 사용하기

### 설치

```sh
npm install --save-dev @wooritech/eslint-config
```

### Peer Dependencies

이 패키지는 packages.json 의 peerDependencies 섹션에 몇 가지 의존적인 패키지가 있습니다. 프로젝트에서 아직 이 패키지들의 해당 버전이 설치되어 있지 않다면 설치단계에서 경고가 발생합니다.

해당 패키지들은 버전의 충돌을 방지하기 위해 `npm install --save-dev <package>`의 형식으로 각각 설치해햐 합니다.

만약 해당 패키지들의 다른 버전을 사용하지 않는 사실이 명확할 경우 **npm 5** 이상에서 **npx** 를 통해 일괄로 설치할 수 있습니다.

```sh
npx install-peerdeps --dev @wooritech/eslint-config
```

### Configuration

우리테크의 ESLint 환경 구성을 위해 아래의 코드를 package.json 파일에 추가하세요.

```json
"eslintConfig": {
  "extends": "@wooritech/eslint-config"
}
```

ESLint config를 적용하는 또다른 방법은 프로젝트 디렉토리에 `.eslintrc` 파일을 만들고 이 파일에 `extends` 섹션의 값을 아래와 같이 설정합니다.

```json
"extends": "@wooritech/eslint-config"
```

`eslint --init` 명령을 통해 `.eslintrc` 파일을 만들고 기본값을 설정할 수도 있습니다.

### VSCode에서 ESLint Extension 사용시 주의

**ESLint 확장 플러그인을 사용할때 패키지 참조 경로 문제로 프로젝트 폴더가 최상위에 있지 않다면 VSCode에서 UI상에서 문제 확인이 어려울수 있습니다. 예를들어 explorer상에 최상위 폴더인 group 폴더에 project1, project2 폴더가 있을때 project1 폴더에 린팅을 위해 .eslintrc 파일을 만들었을때 package.json의 의존관계에 있는 패키지들이 설치되어 있음에도 찾지 못하는 문제가 발생합니다. 이 문제를 해결하기 위해 global로 설치할 수 있지만 이 방법은 정확한 문제해결 방법이 아니므로 권장하지 않습니다.**

가능하다면 project1, project2를 각각 최상위 경로가 되도록 explorer에 추가해야 합니다.
