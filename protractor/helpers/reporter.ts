import { SpecReporter, StacktraceOption } from 'jasmine-spec-reporter';

const reporter = () => {
  jasmine.getEnv().addReporter(new SpecReporter({
    spec: {
      displayStacktrace: StacktraceOption.PRETTY,
    },
  }));
};

export { reporter as default };
