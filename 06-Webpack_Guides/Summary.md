# Webpack

## Modules

In modular programming, developers break programs up into discrete chunks of functionality called a module.

> Modular Programmming 에서 개발자는 Module 이라는 개별 기능으로 프로그램을 나눕니다.

Each module has a smaller surface area than a full program, making verification, debugging, and testing trivial. Well-written modules provide solid abstractions and encapsulation boundaries, so that each module has a coherent design and a clear purpose within the overall application.

> Each Module 은 전체 프로그램보다 영향 범위가 좁기 때문에 검증과 Debugging 및 Test 가 간단합니다. 잘 작성된 Module 은 견고한 추상화와 캡슐화의 경계를 만드므로 Each Module 은 전체 애플리케이션에서 일관성 있는 설계와 명확한 목적을 가질 수 있습니다.

## Webpack Guides

### Getting Started

```bash
mkdir webpack-demo
cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev

```
