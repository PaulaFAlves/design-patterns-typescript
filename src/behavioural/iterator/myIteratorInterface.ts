export interface MyIteratorInterface<T> extends Iterator<T> {
    reset(): void;
}

// aqui vou criar a minha interface que vai estender a interface Iterator do ts, e desta interface vou utilizar o método next(), que return um iteratorResult. além disso, criei o método reset().