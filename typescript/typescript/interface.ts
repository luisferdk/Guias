interface Data {
  names: string[];
  hobbies: string[];
  output: (test: boolean) => boolean;
}

let team: Data = {
  names: ['Jackie', 'Jesse', 'Saron'],
  hobbies: ['Biking', 'Skydiving'],
  output: test => {
    return test;
  }
};
