export  const reproduce = async () => {
    // This works in 4.0.4 but gives an error in 4.1.4
    const hljs = (await import(/* @vite-ignore */'highlight.js/es/core'/* @vite-ignore */)).default;
    console.log(hljs)
};
