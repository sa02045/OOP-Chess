

## 학습

### 1. 자바스크립트 Private class fields vs TypeScript private class fields
- ES2019에서 `해쉬 # prefix` 를 추가해 자바스크립트에서도 private class 필드를 선언할 수 있게 되었다.
- TypeScript는 3.8 부터 지원한다.
- TypeScript private fields는 자바스크립트로 컴파일되면 사라진다.
  - 런타임에서는 일반 속성처럼 동작하기 때문에 은닉화가 되지 않는다.
  - 즉, 컴파일 타임에만 private이고 런타임에는 public이다.
- 반면에 자바스크립트 `#` private fields는 런타임에서도 private이다.

```ts
class Person {
  #name: string;
  private age: number;
  constructor(name: string, age: number) {
    this.#name = name;
    this.age = age;
  }
}

const person = new Person('Mark', 36);

// RunTime
person.#name; // Error
person.age; 36
```