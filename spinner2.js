const spinner = () => {
  const spinnerPhases = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ' ];
  let ms = 100;
  for (let i = 0; i < spinnerPhases.length; i ++) {
    setTimeout(() => {
      process.stdout.write(spinnerPhases[i]);
    }, ms);
    ms += 200;
  }
};
spinner();
