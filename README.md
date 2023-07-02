## Fine Grained Reactivity

This project demonstrates the use of fine-grained reactivity using signals and effects.

You might have seen React code like
```ts

const [counter, setCounter] = useState(1);

useEffect(() => {
    console.log(`Current count: ${counter}`);
}, [counter]);

```

or Solidjs code like

```ts

const [counter, setCounter] = createSignal(0);

createEffect(() => {
    console.log(`Current count: ${counter()}`);
});

```

or svelte code

```ts
let counter = 0;

$: {
    console.log(`Current count: ${counter}`);
}
```
Ever wondered how it works under the hood?
Well, reactivity is your answer. And you'll find the basics of reactivity in this repository.

Check out my blog (https://aashan.dev/blogs/fine-grained-reactivity)[https://aashan.dev/blogs/fine-grained-reactivity] to learn more about the implementation

