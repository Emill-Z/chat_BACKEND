export class Resolvers {
  hello: () => string = () => 'HELLO';

  one: () => string = () => 'Hello one!';

  two = {
    g: (): string => 'Hello two!'
  };

}