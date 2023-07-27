[ Mongoose ]
Mongoose 가 무엇인가
Mongoose 어떻게 사용하는가
Model 을 어떻게 정의하는가
Mongoose CRUD

# Mongoose 가 무엇인가?

MongoDB 를 CLI 를 통해 다루었지만 일반적으로 사용하는 방식이 아니다.
Express App 이나 Node App 을 통해 MongoDB를 연결하는 방법을 사용한다.

MongoDB 에는(공식홈페이지) Driver Section 이 존재한다.
Node.js 의 경우 NPM Package 를 설치하여 사용한다.
Node.js 를 통해 사용할 수 있지만 실제로는 Mongoose 를 통해 주로 사용한다.

Mongoose 는 MongoDB를 편리하게 만들어주는 여러 툴과 메서드를 제공한다.

---

ORM / ODM 은 무엇인가?

- ODM : Object Document Mapper

Mo

Defining a Model

Mongoose CRUD

Mongoose Middleware

Mongoose Virtuals

---

###### Script

지금까지는 Mongo 자체에 대해 겉핥기식으로 배웠습니다

그냥 Shell을 사용하여 데이터베이스와 상호작용했고

dogs, cats 같은 새로운 뭔가를 만들고 찾고, 지우고, 업데이트했죠

이 모든 것을 Shell에 코드를 입력하는 것으로 해결했는데

대부분의 경우에는 이런 식으로 데이터베이스를 사용하지 않습니다

그렇게 쓰는 경우도 있겠지만요

자주, 대부분의 경우 우리에겐 애플리케이션이 주어지고

그 애플리케이션은 데이터베이스와 상호작용합니다

누군가가 웹사이트나 앱을 통해 로그인할 경우

우리는 대개 Mongo DB에 사용자 계정을 만들고 싶어 집니다

따라서 Express 앱이나 Node 앱을 Mongo와 연결할 방법이 필요하죠

Mongo에는 여러 드라이버가 있는데요

참고서에 드라이버 섹션이 따로 있는 게 보이실 겁니다

이들은 Node, Python Swift, Ruby, C 언어 등의

프로그래밍 언어를 Mongo와 연결해주는

여러 방법이라고 할 수 있습니다

여기 Node.js 드라이버도 있는데 NPM 패키지를 설치할 겁니다

입문 가이드가 어디 있을 텐데요

이건 설치 후 사용할 수 있는 NPM 패키지로

Node를 통해 Mongo DB에 연결해 뭔가를 찾고, 삽입하고

삭제할 수 있게 해줍니다 작동도 잘 되고요

문제는 없지만 이걸 쓰진 않습니다 적어도 단독적으로는요

우린 Mongoose라는 툴을 사용할 겁니다

보면 아시겠지만 Mongoose라는 이름에는 Mongo가 들어 있습니다

ODM(Object Data Mapper) 즉, 객체 데이터 매퍼

또는 객체 문서 매퍼로도 알려져 있죠

무슨 의미일까요?

ODM에는 Mongoose 뿐만 아니라 여러 옵션이 존재하는데

일종의 일반적인 개념입니다 Mongo 뿐만 아니라

다른 DB도 저마다의 색깔과 툴을

타 언어를 위한 ODM이라고 부릅니다

Mongoose는 Mongo와 Node.js 용으로 둘을 연결해줍니다

Mongoose는 Node와 Mongo DB를 이어주는 기본 드라이버 그 이상입니다

JavaScript 측면에서 아주 유용한 여러 기능을 제공해주죠

Mongo에서 회신하는 데이터와 Mongo에 삽입하려는 데이터를 매핑하여

메서드를 추가할 수 있는 사용 가능한 JavaScript 객체로 만듭니다

유효성 검사를 추가할 수 있는 겁니다

뭐가 필요한지, 삽입하려면 가격은 0보다 커야 한다 등을

확인할 수 있는 거죠

또한 사전에 프리셋 스키마(Schema)를 정의할 수 있으며

이 데이터가 Mongoose를 통해 레이아웃된 스키마를 따르도록 강제하죠

보다 복잡한 쿼리를 만들 수 있도록 돕고요

다시 말씀드리지만 Mongoose의 목적은

기존 Mongo를 개선하여 JavaScript 측면에서

보다 친숙하고 강력하게 만들어주는 겁니다

즉, Mongoose로 할 수 있는 일은 Mongoose 없이도 가능합니다

다만 편의성을 향상시켜주고 우리가 직접 만들어야 했을

몇몇 좋은 기능들을 추가해줄 뿐이죠

ODM이라는 용어는 객체 데이터 매퍼 혹은 객체 문서 매퍼를 뜻합니다

Mongoose는 데이터나 문서를 JavaScript 객체로 매핑합니다

PostgreSQL이나 MySQL같은 SQL 기반 데이터베이스의 경우

이런 유형의 소프트웨어를 ORM이라고 부릅니다

객체 관계성 매퍼 혹은 객체 관계 매퍼라는 의미로

SQL 데이터와 SQL 정보를 가져다

JavaScript 혹은 Python 등을 위한 객체로 만들어 줍니다

이 모든 툴은 기본적으로 데이터베이스를 번역해

프로그래밍 언어로 만들면서 여러 기능들을 선사합니다

이상 Mongoose에 대한 간단한 소개였습니다

관련 홈페이지 주소는 다음과 같습니다

Mongoosejs.com

Mongoose의 슬로건은

Node를 위한 세련된 Mongo 객체 모델링입니다

멋지네요 딱 우리가 찾던 겁니다

다음 영상에서는 어떻게 설치하는지 확인하고

Mongo 데이터베이스에 연결하려면

어떻게 해야 하는지 어떻게 활용할지 배우겠습니다

그것이 이번 섹션의 핵심입니다

아마 입문하게 되면 그 유용성을 확인하실 수 있을 겁니다

당장은 뜬구름 잡는 소리 같을 텐데 제 설명이 부족했을지도... 모르겠네요
