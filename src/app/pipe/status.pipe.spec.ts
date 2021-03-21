import { StatusPipe } from './status.pipe';

describe('FinishedStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new StatusPipe();
    expect(pipe).toBeTruthy();
  });
});
